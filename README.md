# Autonique Clinical OS

> A premium, HIPAA-compliant SaaS clinical operating system for doctor clinics and hospital groups — built with TanStack Start, React 19, PostgreSQL, Drizzle ORM, Stripe, and Tailwind CSS v4.

---

## ✨ Project Highlights

* **TanStack Start SSR Engine**: Enterprise-grade routing, code-splitting, and Server Functions for fast data loading.
* **Row-Level Security & Multi-Tenancy**: Complete tenant isolation at the database repository query layer.
* **Role-Based Access Control (RBAC)**: Fine-grained permissions check matrix (`owner`, `admin`, `manager`, `staff`).
* **Active Background Queue Worker**: Asynchronous cron processor dispatching patient reminders and compiling recurring invoices.
* **Modern Design System**: Custom theme variables defined inside OkLCH color spaces, glassmorphism UI trims, and responsive layouts.
* **Testing & CI/CD**: Vitest unit testing, Playwright E2E browser tests, and automated GitHub Actions workflows.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | TanStack Start (React 19 + SSR) |
| **Routing** | TanStack Router (file-based) |
| **Database** | PostgreSQL + Drizzle ORM + Drizzle Kit |
| **Styling** | Tailwind CSS v4 + custom design tokens |
| **UI Primitives** | Radix UI + Lucide Icons |
| **Charts** | Recharts |
| **Payments** | Stripe Elements + Stripe Node SDK |
| **Build Tool** | Vite 8 + Nitro (SSR bundler) |
| **Testing** | Vitest (Unit) + Playwright (E2E) |
| **Deployment** | Docker Containers / Vercel / Cloudflare Pages |

---

## 📁 Key Files & Core Architecture

```
autonique-elevate/
├── docs/
│   ├── ARCHITECTURE.md     → ERD diagrams, layer interfaces, RBAC specs
│   └── DESIGN_SYSTEM.md    → Typography, OkLCH tokens, visual variables
├── src/
│   ├── db/
│   │   ├── schema.ts       → Drizzle PostgreSQL table specifications
│   │   ├── client.ts       → node-postgres connection pool client
│   │   ├── migrate.ts      → SQL migrations runner script
│   │   └── seed.ts         → Multi-tenant mock database seeder
│   ├── repositories/       → Database query repositories with tenant isolation
│   ├── services/           → Business services layer enforcing RBAC permissions
│   │   └── worker.ts       → Background jobs queue processor worker
│   ├── routes/
│   │   ├── login.tsx       → Frosted credentials login interface
│   │   ├── register.tsx    → Multi-step registration panel
│   │   ├── index.tsx       → Marketing landing page
│   │   ├── _app.tsx        → Dashboard layout with workspace switcher
│   │   └── _app.*.tsx      → Core dashboard routes (Overview, Clinic, etc.)
│   ├── components/
│   │   └── app/
│   │       ├── DataTable.tsx  → Reusable paginated filters table
│   │       ├── MetricCard.tsx → Reusable trending KPI metric card
│   │       └── EmptyState.tsx → Reusable illustration empty banner
```

---

## 🚀 Getting Started Locally

### 1. Installation
```bash
# Clone the repository
git clone https://github.com/Hannan2510/autonique-elevate.git
cd autonique-elevate

# Install dependencies
npm install
```

### 2. Database Migrations & Seeding
```bash
# Set your environment variables
export DATABASE_URL="postgres://postgres:postgrespassword@localhost:5432/autonique"

# Generate and apply migrations
npm run db:generate
npm run db:migrate

# Seed database with multi-tenant mock data
npm run db:seed
```

### 3. Start Application & Worker
```bash
# Run web server in dev mode
npm run dev

# Run background jobs processor worker
npx tsx src/services/worker.ts
```

### 4. Running Test Suites
```bash
# Run Vitest unit tests (e.g. RBAC checks)
npm run test:unit

# Run Playwright E2E browser tests
npm run test:e2e
```

---

## 🐳 Docker Deployment

The application is dockerized using a multi-stage `Dockerfile` and a `docker-compose.yml` defining the web server, PostgreSQL database, and background job worker:

```bash
# Run all services inside containers
docker compose up --build
```

---

## 📦 Phase 2 — Marketing & Social Assets

These folders contain prepared content and design assets for the product launch campaign:

| Folder | Contents |
|---|---|
| [📝 LinkedIn Posts](./Phase-2/Linkedin%20Posts/) | `Post1.md` — AI Receptionist product intro post · `Post2.md` — Revenue impact awareness post |
| [🎨 Social Media Creative](./Phase-2/Social%20Media%20Creative/) | `image1.jpeg` · `img2.png` — Visual creatives for social feed posts |
