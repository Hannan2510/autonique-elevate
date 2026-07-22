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

      <section className="relative overflow-hidden border-b border-border/70 bg-background">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-background" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pt-16 pb-16 sm:px-8 lg:grid-cols-2 lg:pt-24 lg:pb-28">
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-[12px] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              WhatsApp patient engagement, built-in
              <ChevronRight className="h-3 w-3" />
            </div>
            <h1 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Your clinic, now on WhatsApp.
            </h1>
            <p className="mt-5 text-balance text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Let patients book, reschedule, and get reminders through the app they already use. Autonique connects your practice to patients in the channel they prefer.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/dashboard" className="inline-flex h-10 items-center gap-1.5 rounded-md bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Start free trial
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a href="#" className="inline-flex h-10 items-center gap-1.5 rounded-md border border-border bg-background px-4 text-[13px] font-medium text-foreground transition-colors hover:bg-accent">
                Book a demo
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-[12px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
                Automated reminders
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
                Two-way booking
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
                HIPAA-aware logs
              </span>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_0_0_var(--border),0_24px_80px_-24px_rgba(0,0,0,0.18)]">
              <img
                src={heroWhatsapp.url}
                alt="Patient booking an appointment through WhatsApp in a modern clinic"
                width={1920}
                height={1080}
                className="h-auto w-full"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-lg border border-border bg-background px-4 py-3 shadow-lg lg:block">
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-medium text-foreground">Appointment confirmed</div>
                  <div className="text-[11px] text-muted-foreground">Sent via WhatsApp · 2m ago</div>
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