# Autonique Clinical OS

> A premium, HIPAA-compliant SaaS clinical operating system for doctor clinics and hospital groups — built with TanStack Start, React 19, Stripe, and Tailwind CSS v4.

---

## ✨ Project Overview

**Autonique Clinical OS** is a full-stack SaaS application designed to digitize and automate clinical operations. It features a polished marketing landing page, a multi-page dashboard for clinic administrators, an inline Stripe payment gateway, a patient records management panel, and comprehensive settings management — all in one unified application.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | TanStack Start (React 19 + SSR) |
| **Routing** | TanStack Router (file-based) |
| **Styling** | Tailwind CSS v4 + custom design tokens |
| **UI Primitives** | Radix UI + Lucide Icons |
| **Charts** | Recharts |
| **Payments** | Stripe Elements + Stripe Node SDK |
| **Forms** | React Hook Form + Zod validation |
| **Build Tool** | Vite 8 + Nitro (SSR bundler) |
| **Deployment** | Cloudflare Pages / Vercel (auto-detected via `vite.config.ts`) |

---

## 📁 Key Files & Core Architecture

```
autonique-elevate/
├── src/
│   ├── routes/
│   │   ├── index.tsx               → Landing page (marketing site)
│   │   ├── _app.tsx                → Dashboard layout shell (AppShell)
│   │   ├── _app.dashboard.tsx      → Overview KPIs & analytics
│   │   ├── _app.clinic.tsx         → Clinic panel + Stripe checkout wizard
│   │   ├── _app.customers.tsx      → Patient records management
│   │   └── _app.settings.tsx       → Profile, billing, security & notifications
│   ├── components/
│   │   ├── app/
│   │   │   ├── AppShell.tsx        → Sidebar, topbar, theme switcher
│   │   │   └── StripePaymentModal.tsx → On-site Stripe payment modal
│   │   └── landing/
│   │       ├── HeroSection.tsx     → Animated hero with CTA buttons
│   │       ├── PricingSection.tsx  → Plan cards with annual/monthly toggle
│   │       ├── ProblemSolutionSection.tsx → Feature comparison layout
│   │       └── ...14 more sections
│   ├── lib/
│   │   ├── stripe.ts               → Stripe.js frontend loader
│   │   └── stripePaymentIntent.ts  → Server-side payment intent creator
│   └── styles.css                  → Global design system tokens & animations
├── Phase-2/                        → Marketing & social media assets
├── .env.example                    → Environment variable template
└── vite.config.ts                  → Auto-detects Cloudflare/Vercel preset
```

---

## 🗺️ Application Pages & Features

### 🌐 Landing Page (`/`)
A full marketing site built across **14 modular sections** including:
- Animated hero with live product preview
- Problem/solution feature breakdown
- Interactive module showcases
- Compliance badges (HIPAA, PCI-DSS, SOC 2)
- Pricing cards with monthly/annual toggle
- Doctor testimonials
- Enterprise architecture diagram
- FAQ accordion
- CTA banner + Footer

### 📊 Dashboard (`/dashboard`)
- KPI cards: Total Patients, Appointments, Monthly Revenue, Active Doctors
- Revenue overview with curved line chart (Recharts)
- Donut chart for appointment status breakdown
- Recent appointments table with doctor & patient avatars
- Compact sidebar patients quick-list

### 🏥 Clinic Panel (`/clinic`)
- Clinic management hub with plan tier display
- **4-Step Subscription Checkout Wizard**:
  1. Configure provider seats (1–20)
  2. Stripe card entry with 3D card flip preview
  3. HIPAA consent & medical license validation
  4. Live telemetry console + payment success receipt
- Subscription plan management (Starter / Growth / Enterprise)
- Invoice history table with inline payment triggers

### 👥 Patients (`/customers`)
- Full patient records table with search & filter
- Patient cards: ID, status, contact, provider, balance, visit history
- Expandable patient detail drawer with notes, next appointment, balance
- Real-time search by name, email, or doctor

### ⚙️ Settings (`/settings`)
- **Profile tab**: Doctor bio, avatar, contact info
- **Notifications tab**: Email, SMS & clinical alert toggles
- **Security tab**: Password change, 2FA, active sessions manager
- **Billing tab**: Active plan display, quota dials, card manager, invoice list + Stripe payment modal triggers

---

## 💳 Stripe Payment Integration

### How it works

```
User clicks Pay Now
        ↓
createStripePaymentIntentFn (Server Action)
        ↓
stripe.paymentIntents.create() via Stripe Node SDK
        ↓
clientSecret returned to browser
        ↓
Stripe Elements mounts using clientSecret
        ↓
User completes payment → Stripe confirms
```

### Sandbox Fallback
If no Stripe keys are configured, the app automatically falls back to an **offline interactive sandbox** that simulates the full payment flow including the security telemetry console and receipt generation.

### Testing Credentials
Use these details in sandbox mode:
```
Card:  4242 4242 4242 4242
Exp:   12/34
CVC:   123
```

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

## 🚀 Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/Hannan2510/autonique-elevate.git
cd autonique-elevate

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your Stripe keys inside .env

# 4. Start the dev server
npm run dev
# Opens at http://localhost:3000
```

---

## ☁️ Deployment

This project auto-detects the deployment environment in `vite.config.ts`:
- **Cloudflare Pages** — set environment variables in the Cloudflare Pages dashboard under **Settings → Environment Variables**
- **Vercel** — set via the Vercel Project Settings under **Environment Variables**

Build command: `npm run build`
Output directory: `dist/public`

---

## 📦 Phase 2 — Marketing & Social Assets

These folders contain prepared content and design assets for the product launch campaign:

| Folder | Contents |
|---|---|
| [📝 LinkedIn Posts](./Phase-2/Linkedin%20Posts/) | `Post1.md` — AI Receptionist product intro post · `Post2.md` — Revenue impact awareness post |
| [🎨 Social Media Creative](./Phase-2/Social%20Media%20Creative/) | `image1.jpeg` · `img2.png` — Visual creatives for social feed posts |
