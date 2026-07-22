import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg.asset.json";
import heroWhatsapp from "@/assets/hero-clinic-whatsapp.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autonique — The operating system for modern clinics" },
      {
        name: "description",
        content:
          "Autonique unifies scheduling, patient records, revenue and team operations for high-performing clinics. Calm, fast, considered software.",
      },
      { property: "og:title", content: "Autonique — The operating system for modern clinics" },
      { property: "og:description", content: "Calm, fast, considered clinic software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground text-[11px] font-semibold tracking-tight">
        A
      </div>
      <span className="text-[15px] font-semibold tracking-tight">Autonique</span>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            {["Product", "Customers", "Pricing", "Changelog", "Docs"].map((l) => (
              <a key={l} href="#" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden text-[13px] text-muted-foreground hover:text-foreground sm:inline">
              Sign in
            </a>
            <Link to="/dashboard" className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Open app
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0" aria-hidden>
          <img
            src={heroClinic.url}
            alt=""
            width={1024}
            height={1024}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-[12px] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              New — Autonique 2.4 · Team scheduling
              <ChevronRight className="h-3 w-3" />
            </div>
            <h1 className="text-balance font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              The operating system for modern clinics.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Autonique unifies scheduling, patient records, revenue and team operations into one considered workspace. Built for clinics that expect more from their software.
            </p>
            <div className="mt-9 flex items-center justify-center gap-3">
              <Link to="/dashboard" className="inline-flex h-10 items-center gap-1.5 rounded-md bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Start free trial
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a href="#" className="inline-flex h-10 items-center gap-1.5 rounded-md border border-border bg-background px-4 text-[13px] font-medium text-foreground transition-colors hover:bg-accent">
                Book a demo
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="rounded-xl border border-border bg-card shadow-[0_1px_0_0_var(--border),0_20px_60px_-20px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                <div className="ml-3 flex items-center gap-1.5 rounded-md border border-border/70 bg-background px-2 py-0.5 text-[11px] text-muted-foreground">
                  app.autonique.com/dashboard
                </div>
              </div>
              <div className="grid grid-cols-12 gap-0">
                <aside className="col-span-3 hidden border-r border-border p-4 lg:block">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-5 w-5 rounded bg-primary" />
                    <span className="text-[12px] font-medium">Autonique</span>
                  </div>
                  <div className="space-y-1">
                    {["Overview", "Patients", "Appointments", "Revenue", "Team", "Settings"].map((i, idx) => (
                      <div key={i} className={`rounded px-2 py-1.5 text-[12px] ${idx === 0 ? "bg-accent text-foreground" : "text-muted-foreground"}`}>
                        {i}
                      </div>
                    ))}
                  </div>
                </aside>
                <div className="col-span-12 p-6 lg:col-span-9">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="font-display text-2xl tracking-tight">Overview</div>
                      <div className="text-[12px] text-muted-foreground">Tuesday, 22 July 2026</div>
                    </div>
                    <div className="flex gap-2 text-[11px] text-muted-foreground">
                      <span className="rounded border border-border px-2 py-1">Last 30 days</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: "Revenue", v: "$248,320", d: "+12.4%" },
                      { l: "Bookings", v: "1,284", d: "+3.1%" },
                      { l: "Retention", v: "94.2%", d: "+0.8%" },
                    ].map((s) => (
                      <div key={s.l} className="rounded-lg border border-border bg-background p-3">
                        <div className="text-[11px] text-muted-foreground">{s.l}</div>
                        <div className="mt-1 font-display text-xl tracking-tight">{s.v}</div>
                        <div className="text-[11px] text-muted-foreground">{s.d}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 h-32 rounded-lg border border-border bg-background p-3">
                    <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
                      <path d="M0,70 C40,60 60,80 100,55 C140,30 180,50 220,40 C260,30 300,55 340,30 L400,20" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="text-center text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by leading clinics worldwide
          </div>
          <div className="mt-6 grid grid-cols-2 items-center gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {["Northwind", "Meridian", "Aster", "Solace", "Umbra", "Vantage"].map((n) => (
              <div key={n} className="text-center font-display text-lg tracking-tight text-muted-foreground/80">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Platform</div>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Everything a clinic runs on, unified.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              We built the primitives from scratch — no bolted-on modules, no interface seams. Every surface is designed to be quiet, quick and dependable.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {[
              { t: "Scheduling", d: "Multi-provider, multi-room. Drag to reschedule. Waitlists and reminders that just work." },
              { t: "Patient records", d: "Clinically structured records with a calm reading surface. Search everything in a keystroke." },
              { t: "Revenue", d: "Invoices, insurance, and reconciliation. Understand the business at a glance." },
              { t: "Team", d: "Roles, permissions and audit trails engineered for compliance without the friction." },
              { t: "Automations", d: "Reminders, follow-ups, and workflows. Compose them with a graph, not a form." },
              { t: "API & SDK", d: "Programmatic access with typed SDKs. Sensible defaults. Documented like Stripe." },
            ].map((f) => (
              <div key={f.t} className="bg-background p-8">
                <div className="text-[13px] font-medium">{f.t}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
          <blockquote className="font-display text-3xl leading-snug tracking-tight sm:text-4xl">
            "Autonique replaced four tools and made the workday quieter. It's the first clinical software our team actually enjoys using."
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-primary/90" />
            <div className="text-[13px]">
              <div className="font-medium">Dr. Iman Reyes</div>
              <div className="text-muted-foreground">Medical Director, Meridian Clinics</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Pricing</div>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Straightforward, per provider.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { n: "Starter", p: "$49", s: "For single-provider clinics.", f: ["Scheduling", "Patient records", "Email support"] },
              { n: "Growth", p: "$129", s: "For growing multi-provider teams.", f: ["Everything in Starter", "Revenue & invoicing", "Automations", "Priority support"], highlight: true },
              { n: "Enterprise", p: "Custom", s: "For clinic networks & groups.", f: ["SSO & SCIM", "Audit logs", "SLA & dedicated CSM"] },
            ].map((t) => (
              <div key={t.n} className={`rounded-xl border p-6 ${t.highlight ? "border-primary ring-1 ring-primary/20" : "border-border bg-card"}`}>
                <div className="text-[13px] font-medium">{t.n}</div>
                <div className="mt-4 font-display text-4xl tracking-tight">
                  {t.p}
                  <span className="ml-1 font-sans text-[13px] text-muted-foreground">/ provider · mo</span>
                </div>
                <div className="mt-1 text-[13px] text-muted-foreground">{t.s}</div>
                <ul className="mt-6 space-y-2.5">
                  {t.f.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-[13px]">
                      <Check className="h-3.5 w-3.5 text-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 inline-flex h-9 w-full items-center justify-center rounded-md text-[13px] font-medium transition-colors ${t.highlight ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border bg-background hover:bg-accent"}`}>
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
            <a href="#" className="hover:text-foreground">Product</a>
            <a href="#" className="hover:text-foreground">Pricing</a>
            <a href="#" className="hover:text-foreground">Docs</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
          </div>
          <div className="text-[12px] text-muted-foreground">© 2026 Autonique, Inc.</div>
        </div>
      </footer>
    </div>
  );
}