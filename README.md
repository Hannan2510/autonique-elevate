# Autonique Clinical OS

A premium, HIPAA-compliant SaaS clinical operating system for doctor clinics and hospital groups.

---

## 💳 Stripe Payment Gateway Integration

I have implemented a modern, high-fidelity Stripe Elements payment flow with zero external redirects, keeping users completely inside the app workspace.

### Key Elements Integrated
1. **Secure Card Container**: Consolidated Card Number, Expiry, and CVC into a single connected border elements block matching official Stripe Elements.
2. **Dynamic Brand Auto-Detector**: Automatically detects and highlights card brands (Visa, Mastercard, Amex, Discover) with hover/type highlighting.
3. **Multi-Step Checkout Wizard** (`_app.clinic.tsx`): Guides clinic admins through seat configurations, dynamic pricing calculations, card details input, medical license validation, HIPAA consent, and anti-fraud telemetry handshakes.
4. **Settings Payment Modal** (`StripePaymentModal.tsx`): Mounted directly on-site to handle immediate invoice payments and credit card manager updates.

---

## 📁 Key Files & Core Architecture

Below are the most important files in this repository and how they drive the project's features:

### 1. Frontend & Routing Layer
- **[_app.clinic.tsx](file:///C:/Users/sayya/.gemini/antigravity/scratch/autonique-elevate/src/routes/_app.clinic.tsx)**: Handles the main Clinic panel and the 4-step Subscription Checkout Wizard, complete with 3D card flipping previews and dynamic pricing calculators.
- **[_app.settings.tsx](file:///C:/Users/sayya/.gemini/antigravity/scratch/autonique-elevate/src/routes/_app.settings.tsx)**: Manages plan upgrades, active card statements, quota dials, and opens the invoice payment modals.
- **[AppShell.tsx](file:///C:/Users/sayya/.gemini/antigravity/scratch/autonique-elevate/src/components/app/AppShell.tsx)**: The main layout wrapper with a responsive dashboard sidebar, theme switcher, global search, and account controls.

### 2. Stripe Gateway Logic
- **[StripePaymentModal.tsx](file:///C:/Users/sayya/.gemini/antigravity/scratch/autonique-elevate/src/components/app/StripePaymentModal.tsx)**: An on-site modal overlay that renders Stripe Elements dynamically when keys are active, or falls back to an offline simulated sandbox.
- **[stripe.ts](file:///C:/Users/sayya/.gemini/antigravity/scratch/autonique-elevate/src/lib/stripe.ts)**: Configures the frontend `@stripe/stripe-js` loader to fetch live keys.
- **[stripePaymentIntent.ts](file:///C:/Users/sayya/.gemini/antigravity/scratch/autonique-elevate/src/lib/stripePaymentIntent.ts)**: A server-side action (`createServerFn`) that creates payment intents using the official Node Stripe SDK.

---

## ⚙️ Shifting from Sandbox to Real (Production) Stripe

To transition the Stripe integration from the local test sandbox to live production payments, follow these steps:

### 1. Update Keys in Environment Variables
Replace the sandbox test keys with your official production keys inside your server `.env` files:
- **Publishable Key**: Replace `pk_test_...` with `pk_live_...`
- **Secret API Key**: Replace `sk_test_...` with `sk_live_...`

### 2. Disable Mock Simulation Mode
In both checkout files (`_app.clinic.tsx` and `StripePaymentModal.tsx`), I have configured dynamic checks to fallback to local sandbox simulations when real Stripe components aren't mounted:
- Ensure the server endpoint `createStripePaymentIntentFn` (in `src/lib/stripePaymentIntent.ts`) is securely connected to your backend server database for saving customer tokens.
- Set `isDemo` to `false` in the element load scripts so that the real `<PaymentElement />` mounts directly from Stripe's CDN.

---

## 🏢 Multi-Tenant Architecture Configuration

My codebase supports **multi-tenant workspace architecture** out of the box at the UI shell level:

### How to Convert Dashboard & Patients to Multi-Tenant:
1. **Routing Shell**: The root layout in `src/routes/_app.tsx` mounts the `AppShell`. All nested pages (Dashboard, Clinic, Customers, Settings) render inside this shell.
2. **Tenant State Hook**: Insert a workspace selector state in `AppShell.tsx`:
   ```typescript
   const [currentTenant, setCurrentTenant] = useState({ id: "tenant_1", name: "Meridian Medical" });
   ```
3. **Database Queries**: Filter all patient list queries (`_app.customers.tsx`) and dashboard analytics charts (`_app.dashboard.tsx`) by the selected tenant identifier:
   ```typescript
   // Example multi-tenant hook inside components
   const { data: patients } = useQuery(["patients", currentTenant.id], () => fetchPatientsByTenant(currentTenant.id));
   ```
4. **AppShell Workspace Switcher Dropdown**: Replace the static `<Brand />` component inside `AppShell.tsx` with an interactive dropdown selection menu displaying the user's authorized clinics/locations.

---

## 🚀 Phase 2 Assets & Marketing

Here are the marketing copy files and promotional creative folders prepared for Phase 2:
- **[LinkedIn Posts Folder](./Phase-2/Linkedin%20Posts/)**: Contains standard text scripts (`Post1.md`, `Post2.md`) ready for publication.
- **[Social Media Creative Designs](./Phase-2/Social%20Media%20Creative/)**: Contains graphics and design creatives (`image1.jpeg`, `img2.png`) for social feeds.
