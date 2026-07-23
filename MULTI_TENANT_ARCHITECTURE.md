# AUTONIQUE — Scalable Multi-Tenant Frontend Architecture Write-up

**Author:** Hannan  
**Role Application:** Full Stack Developer @ AUTONIQUE  
**Target Domain:** Multi-Tenant SaaS Platform (Clinics, Salons, Taxi & Vertical Portals)

---

## Executive Summary

To scale **AUTONIQUE** from a single vertical into an enterprise multi-tenant SaaS platform supporting thousands of organizations (Clinics, Salons, Taxi Fleets) across custom subdomains and custom branding, the frontend must be architected around **four core pillars**:

1. **Edge-Driven Multi-Tenant Routing & Subdomain Resolution**
2. **Runtime CSS-Variable Driven Dynamic Per-Tenant Branding**
3. **Strict Layered Component Architecture (Shared Primitives vs Vertical Extensions)**
4. **Zero-Trust Client-Side Data Isolation & Query Context**

---

## 1. Multi-Tenant Routing & Domain Resolution Strategy

### Overview
AUTONIQUE supports three distinct URL structures:
- **Wildcard Subdomains**: `acme-clinic.autonique.com`
- **Path-based Fallback**: `autonique.com/app/acme-clinic`
- **Custom Domains**: `portal.acmehealth.com`

### Edge Middleware Architecture
Tenant resolution occurs **at the Edge** (Vercel Edge Functions or Cloudflare Workers) before React hydrates:

```
[ Incoming Request: portal.acmehealth.com ]
                      │
            (Edge Middleware Resolution)
                      │
   ┌──────────────────┴──────────────────┐
   ▼                                     ▼
1. Lookup Host in KV Cache        2. Extract `tenant_id`
   ("portal.acmehealth.com"             `tenant_id = "tn_89421"`
    => "tn_89421")
   ┌─────────────────────────────────────┘
   ▼
3. Inject Headers:
   x-autonique-tenant-id: tn_89421
   x-autonique-vertical: clinic
   x-autonique-theme-config: {...}
   ┌─────────────────────────────────────┐
   ▼
4. Route internally to /_tenant/$tenantId/...
```

### Framework Routing (TanStack Start / Next.js App Router)
- The root layout reads the injected headers or route parameters using server loaders.
- Routes are organized as:
  - `routes/_tenant/$tenantId/index.tsx` (Tenant Dashboard)
  - `routes/_tenant/$tenantId/customers.tsx` (Tenant CRM)
  - `routes/_tenant/$tenantId/settings.tsx` (Tenant Settings)

---

## 2. Per-Tenant Dynamic Visual Theming

### The Problem
Traditional CSS-in-JS (styled-components/emotion) causes bundle bloat, runtime style recalculation, and SSR re-hydration flickers.

### The Solution: CSS Custom Properties & Atomic Design Tokens
We define global theme tokens inside `styles.css` bound to native CSS variables:

```css
:root {
  --tenant-primary: #0d9488;
  --tenant-accent: #2dd4bf;
  --tenant-[#0F172A]: #0f172a;
  --tenant-radius: 8px;
  --tenant-font: "Inter", sans-serif;
}
```

### Server-Side Theme Hydration
1. When a page is rendered, the server fetches the tenant's visual configuration JSON:
```json
{
  "tenantId": "tn_89421",
  "name": "St. Jude Clinic",
  "vertical": "clinic",
  "branding": {
    "logoUrl": "https://cdn.autonique.com/tenants/stjude/logo.svg",
    "primaryColor": "#0F766E",
    "accentColor": "#2DD4BF",
    "borderRadius": "8px"
  }
}
```
2. The SSR response embeds an inline non-blocking style block in the `<head>`:
```html
<style id="autonique-tenant-theme">
  :root {
    --tenant-primary: #0F766E;
    --tenant-accent: #2DD4BF;
    --radius: 8px;
  }
</style>
```
3. Zero FOUC (Flash of Unstyled Content) occurs because styles are set before initial HTML paint.

---

## 3. Component Architecture: Shared vs. Vertical-Specific

To prevent code duplication across verticals (Clinics, Salons, Taxi), components are structured in a **3-tier hierarchy**:

```
src/
├── components/
│   ├── ui/                    ── Tier 1: Low-level UI Primitives (Design System)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── modal.tsx
│   │   └── table.tsx
│   │
│   ├── app/                   ── Tier 2: Shared SaaS Application Shell & Composables
│   │   ├── AppShell.tsx       (Sidebar, TopBar, UserProfile)
│   │   ├── DataTable.tsx      (Generic paginated table with search & filters)
│   │   ├── StripeModal.tsx    (Generic payment modal)
│   │   └── MetricCard.tsx     (Standard KPI widget)
│   │
│   └── verticals/             ── Tier 3: Vertical-Specific Domain Components
│       ├── clinics/
│       │   ├── EMRChartViewer.tsx
│       │   └── PrescriptionEngine.tsx
│       ├── salons/
│       │   ├── StylistChairRoster.tsx
│       │   └── ServiceMenuGrid.tsx
│       └── taxi/
│           ├── DriverDispatchMap.tsx
│           └── MeterTariffCalculator.tsx
```

### Dynamic Feature Slots
Shared layouts expose **slot props** or plugin handlers so a single dashboard codebase powers all verticals:
```tsx
<AppShell
  tenant={tenant}
  sidebarNav={getVerticalNavigation(tenant.vertical)}
  headerWidget={<OperationalStatusBadge vertical={tenant.vertical} />}
>
  {children}
</AppShell>
```

---

## 4. Multi-Tenant Data Isolation & Security

### 1. Zero-Trust API Client
Every outgoing API request automatically attaches tenant authentication headers via API client interceptors:
```typescript
apiClient.interceptors.request.use((config) => {
  config.headers['X-Tenant-ID'] = currentTenant.id;
  config.headers['Authorization'] = `Bearer ${getAuthToken()}`;
  return config;
});
```

### 2. Scoped Query Caching (TanStack Query)
To prevent cross-tenant data leaks when switching tenants without page reloads, all query keys are scoped by `tenantId`:
```typescript
// Query keys are namespaced: ['tenant', tenantId, resource, params]
useQuery({
  queryKey: ['tenant', tenantId, 'patients', searchParams],
  queryFn: () => fetchPatients(tenantId, searchParams),
});
```
When tenant context changes, `queryClient.clear()` is called to flush cached memory.

### 3. JWT Claims Verification
The backend issues JWT tokens containing signed tenant metadata:
```json
{
  "sub": "usr_99120",
  "tenant_id": "tn_89421",
  "role": "clinic_admin",
  "permissions": ["patients:read", "billing:write"]
}
```
If a user attempts to manually request `/api/tenants/tn_OTHER/patients`, the API gateway rejects the request with HTTP 403 Forbidden.

---

## 5. Deployment & Scalability Strategy

1. **Edge Deployment (Cloudflare / Vercel)**: Global CDN distribution ensuring sub-50ms TTFB worldwide.
2. **Incremental Static Regeneration (ISR)**: Static public landing pages (`autonique.com`) generated at build time, while dynamic tenant portals (`app.autonique.com`) rendered via fast SSR + Edge caching.
3. **Automated CI/CD**: Monorepo structure (Turborepo) enabling atomic type-checking, component storybooks, and automated unit/integration tests before deployment.

---

### Conclusion
This architecture guarantees that **AUTONIQUE** can onboard 10,000+ multi-vertical tenants with zero code duplication, instant dynamic branding, strict security isolation, and sub-second page performance.
