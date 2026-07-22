import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Activity, Calendar, Users, DollarSign, Shield, Zap, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg.asset.json";

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
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground text-[12px] font-bold tracking-tight shadow-sm transition-transform hover:scale-105">
        A
      </div>
      <span className="text-[16px] font-semibold tracking-tight">Autonique</span>
    </div>
  );
}

function Landing() {
  const [heroTab, setHeroTab] = useState<"Overview" | "Appointments" | "Patients" | "Revenue">("Overview");
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {["Product", "Customers", "Pricing", "Changelog", "Docs"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="hidden text-[13px] font-medium text-muted-foreground hover:text-foreground sm:inline transition-colors">
              Sign in
            </Link>
            <Link to="/dashboard" className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3.5 text-[13px] font-medium text-primary-foreground transition-all hover:opacity-90 shadow-sm active:scale-95">
              Open app
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/70 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <img
            src={heroClinic.url}
            alt=""
            width={1024}
            height={1024}
            className="h-full w-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[12px] font-medium text-primary backdrop-blur-md shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              New — Autonique 2.4 · Multi-provider scheduling
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
            <h1 className="text-balance font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              The operating system for modern clinics.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Autonique unifies scheduling, patient records, revenue and team operations into one considered workspace. Built for clinics that expect more from their software.
            </p>
            <div className="mt-9 flex items-center justify-center gap-3">
              <Link to="/dashboard" className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-[13.5px] font-semibold text-primary-foreground transition-all hover:opacity-95 shadow-md active:scale-98">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#demo" className="inline-flex h-11 items-center gap-2 rounded-lg border border-border/80 bg-background/90 px-5 text-[13.5px] font-medium text-foreground backdrop-blur-xs transition-all hover:bg-accent hover:border-border">
                Book a demo
              </a>
            </div>
          </div>

          {/* Interactive Hero Widget Preview Frame */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Floating micro-badges around preview */}
            <div className="hidden md:flex absolute -top-5 -left-6 z-20 items-center gap-2.5 rounded-xl border border-border/80 bg-card/95 p-3 shadow-lg backdrop-blur-md animate-float">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                <Activity className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[12px] font-semibold">● Live Queue Sync</div>
                <div className="text-[10.5px] text-muted-foreground font-mono">24 active check-ins</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -bottom-6 -right-6 z-20 items-center gap-2.5 rounded-xl border border-border/80 bg-card/95 p-3 shadow-lg backdrop-blur-md animate-float-reverse">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary font-bold">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[12px] font-semibold">AI Waitlist Engine</div>
                <div className="text-[10.5px] text-muted-foreground font-mono">14m avg appointment gap filled</div>
              </div>
            </div>

            {/* Main Interactive Demo Container */}
            <div className="rounded-2xl border border-border/80 bg-card/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] backdrop-blur-md overflow-hidden transition-all">
              <div className="flex items-center justify-between border-b border-border/70 px-4 py-3 bg-muted/30">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <div className="ml-3 hidden sm:flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                    <Shield className="h-3 w-3 text-emerald-500" />
                    app.autonique.com/dashboard
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-background/80 p-1 rounded-lg border border-border/60 font-medium text-[11.5px]">
                  {(["Overview", "Appointments", "Patients", "Revenue"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setHeroTab(t)}
                      className={`px-3 py-1 rounded-md transition-all ${heroTab === t ? "bg-primary text-primary-foreground shadow-2xs font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Interactive Demo Views */}
              <div className="p-6 md:p-8 min-h-[340px]">
                {heroTab === "Overview" && (
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="font-display text-2xl tracking-tight">Meridian Clinics Overview</div>
                        <div className="text-[12px] text-muted-foreground font-mono">Live Sync · Today, 22 July 2026</div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        98% Waitlist Filled
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { l: "Revenue (Today)", v: "$18,240", d: "+12.4% vs yesterday" },
                        { l: "Bookings Scheduled", v: "36 Patients", d: "6 waiting room" },
                        { l: "Patient Retention", v: "94.8%", d: "+2.1% this month" },
                      ].map((s) => (
                        <div key={s.l} className="rounded-xl border border-border/80 bg-background/90 p-4 shadow-2xs">
                          <div className="text-[11.5px] font-medium text-muted-foreground">{s.l}</div>
                          <div className="mt-1 font-display text-2xl tracking-tight">{s.v}</div>
                          <div className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">{s.d}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl border border-border/80 bg-background p-4 h-36">
                      <div className="flex justify-between text-[11px] text-muted-foreground font-mono mb-2">
                        <span>Revenue Velocity</span>
                        <span>Peak Hours (10:00 - 14:00)</span>
                      </div>
                      <svg viewBox="0 0 400 80" className="h-full w-full overflow-visible" preserveAspectRatio="none">
                        <path d="M0,60 C50,45 80,70 120,35 C160,10 210,40 260,25 C310,10 360,35 400,15" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
                        <path d="M0,60 C50,45 80,70 120,35 C160,10 210,40 260,25 C310,10 360,35 400,15 L400,80 L0,80 Z" fill="currentColor" opacity="0.08" className="text-primary" />
                      </svg>
                    </div>
                  </div>
                )}

                {heroTab === "Appointments" && (
                  <div className="space-y-3">
                    <div className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" /> Today's Live Schedule (6 visits remaining)
                    </div>
                    {[
                      { time: "09:00 AM", name: "Ava Chen", type: "General Consult", provider: "Dr. Reyes", status: "Confirmed" },
                      { time: "10:30 AM", name: "Marcus Weiss", type: "Follow-up", provider: "Dr. Okafor", status: "In Exam" },
                      { time: "11:15 AM", name: "Priya Kapoor", type: "Specialized Procedure", provider: "Dr. Reyes", status: "Waiting" },
                    ].map((a) => (
                      <div key={a.name} className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-3">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[12px] font-semibold text-muted-foreground">{a.time}</span>
                          <div>
                            <div className="text-[13.5px] font-medium">{a.name}</div>
                            <div className="text-[11.5px] text-muted-foreground">{a.type} · {a.provider}</div>
                          </div>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-medium ${a.status === "In Exam" ? "bg-primary/10 text-primary border border-primary/20" : "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"}`}>
                          {a.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {heroTab === "Patients" && (
                  <div>
                    <div className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" /> Patient Records Engine
                    </div>
                    <div className="rounded-lg border border-border/80 overflow-hidden font-sans">
                      <table className="w-full text-left text-[12.5px]">
                        <thead className="bg-muted/40 text-[11px] font-mono text-muted-foreground uppercase border-b border-border/60">
                          <tr>
                            <th className="p-3">Patient Name</th>
                            <th className="p-3">ID</th>
                            <th className="p-3">Last Visit</th>
                            <th className="p-3 text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60 bg-background">
                          <tr>
                            <td className="p-3 font-medium">Elena Rossi</td>
                            <td className="p-3 font-mono text-muted-foreground">PAT-9821</td>
                            <td className="p-3 text-muted-foreground">Yesterday</td>
                            <td className="p-3 text-right"><span className="text-emerald-600 font-mono text-[11px]">Active</span></td>
                          </tr>
                          <tr>
                            <td className="p-3 font-medium">Jonas Lind</td>
                            <td className="p-3 font-mono text-muted-foreground">PAT-7412</td>
                            <td className="p-3 text-muted-foreground">15 Jul 2026</td>
                            <td className="p-3 text-right"><span className="text-emerald-600 font-mono text-[11px]">Active</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {heroTab === "Revenue" && (
                  <div>
                    <div className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" /> Billing & Revenue Telemetry
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-border bg-background">
                        <div className="text-[11.5px] text-muted-foreground">Monthly Recurring Revenue</div>
                        <div className="font-display text-3xl mt-1">$248,320</div>
                        <div className="text-[11px] text-emerald-600 font-mono mt-1">+14.2% MRR growth</div>
                      </div>
                      <div className="p-4 rounded-xl border border-border bg-background">
                        <div className="text-[11.5px] text-muted-foreground">Average Collection Speed</div>
                        <div className="font-display text-3xl mt-1">1.8 Days</div>
                        <div className="text-[11px] text-emerald-600 font-mono mt-1">99.4% clean claims</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Logos */}
      <section className="border-b border-border/70 bg-card/30 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by leading clinic networks & medical groups
          </div>
          <div className="mt-8 grid grid-cols-2 items-center gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {["Northwind Health", "Meridian Clinics", "Aster Care", "Solace Health", "Umbra Medical", "Vantage Health"].map((n) => (
              <div key={n} className="text-center font-display text-lg tracking-tight text-foreground/70 hover:text-foreground transition-colors cursor-default">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section id="product" className="border-b border-border/70 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Platform Architecture</div>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Everything a clinic runs on, unified.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              We built the primitives from scratch — no bolted-on modules, no interface seams. Every surface is designed to be quiet, quick and dependable.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/80 bg-border md:grid-cols-3 shadow-sm">
            {[
              { t: "Scheduling Engine", d: "Multi-provider, multi-room calendar. Drag to reschedule with zero latency. Automated waitlists & WhatsApp/SMS reminders." },
              { t: "Clinical Patient Records", d: "Clinically structured records with a calm reading surface. Search medical history, notes & lab results in a single keystroke." },
              { t: "Revenue & Billing", d: "Instant invoices, insurance claims reconciliation, and stripe payment processing. Understand clinic finance in real-time." },
              { t: "Role Governance & Compliance", d: "Granular roles, provider permissions and immutable audit trails engineered for HIPAA & GDPR compliance without friction." },
              { t: "Automated Patient Flows", d: "Reminders, intake forms, post-care follow-ups. Compose patient journeys with a visual graph editor." },
              { t: "Developer API & Webhooks", d: "Programmatic access with fully typed SDKs. Sensible defaults. Documented with the clarity of Stripe." },
            ].map((f) => (
              <div key={f.t} className="bg-background p-8 hover:bg-card/80 transition-colors group">
                <div className="flex items-center justify-between">
                  <div className="text-[14px] font-semibold text-foreground group-hover:text-primary transition-colors">{f.t}</div>
                  <Sparkles className="h-4 w-4 opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Testimonial Quote */}
      <section className="border-b border-border/70 bg-card/20 py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <blockquote className="font-display text-3xl leading-snug tracking-tight sm:text-4xl">
            "Autonique replaced four disparate software tools and made our clinical workday dramatically quieter. It's the first EMR & clinic management system our physicians actually enjoy using."
          </blockquote>
          <div className="mt-8 inline-flex items-center gap-3 text-left">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-semibold">
              IR
            </div>
            <div className="text-[13px]">
              <div className="font-semibold text-foreground">Dr. Iman Reyes</div>
              <div className="text-muted-foreground font-mono text-[11.5px]">Medical Director, Meridian Clinics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-b border-border/70 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Transparent Pricing</div>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Straightforward, per provider.</h2>
            </div>
            
            {/* Annual Billing Toggle */}
            <div className="flex items-center gap-3 bg-muted/60 p-1 rounded-xl border border-border/70 self-start md:self-auto">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-3 py-1.5 rounded-lg text-[12.5px] font-medium transition-all ${!annualBilling ? "bg-background text-foreground shadow-2xs font-semibold" : "text-muted-foreground"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12.5px] font-medium transition-all ${annualBilling ? "bg-primary text-primary-foreground shadow-2xs font-semibold" : "text-muted-foreground"}`}
              >
                Annual
                <span className="font-mono text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 px-1.5 py-0.2 rounded font-bold">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { n: "Starter", p: annualBilling ? "$39" : "$49", s: "For single-provider solo clinics.", f: ["Smart scheduling", "Structured patient records", "Automated email reminders", "Standard analytics", "Email support"] },
              { n: "Growth", p: annualBilling ? "$99" : "$129", s: "For growing multi-provider teams.", f: ["Everything in Starter", "Revenue & insurance invoicing", "AI waitlist & queue automation", "WhatsApp & SMS notifications", "Priority 24/7 support"], highlight: true },
              { n: "Enterprise", p: "Custom", s: "For clinic networks & hospital groups.", f: ["SSO & SCIM provisioning", "Custom EHR integrations", "Immutable audit logs", "99.99% SLA & dedicated CSM", "Custom BAA (HIPAA)"] },
            ].map((t) => (
              <div key={t.n} className={`rounded-2xl border p-8 transition-all hover:shadow-lg ${t.highlight ? "border-primary ring-2 ring-primary/20 bg-card shadow-md relative" : "border-border/80 bg-card/60"}`}>
                {t.highlight && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-0.5 font-mono text-[10px] font-bold text-primary-foreground uppercase tracking-wider shadow-2xs">
                    Most Popular
                  </div>
                )}
                <div className="text-[14px] font-semibold text-foreground">{t.n}</div>
                <div className="mt-4 font-display text-4xl tracking-tight">
                  {t.p}
                  {t.p !== "Custom" && <span className="ml-1 font-sans text-[13px] text-muted-foreground">/ provider · mo</span>}
                </div>
                <div className="mt-1.5 text-[13px] text-muted-foreground">{t.s}</div>
                <ul className="mt-8 space-y-3">
                  {t.f.map((i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[13px]">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/dashboard" className={`mt-8 inline-flex h-10 w-full items-center justify-center rounded-lg text-[13px] font-medium transition-all ${t.highlight ? "bg-primary text-primary-foreground hover:opacity-95 shadow-sm" : "border border-border/80 bg-background hover:bg-accent text-foreground"}`}>
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-5 py-12 sm:px-8 border-t border-border/50">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-muted-foreground font-medium">
            <a href="#product" className="hover:text-foreground transition-colors">Product</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="hover:text-foreground transition-colors">Docs</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
          <div className="text-[12px] text-muted-foreground font-mono">© 2026 Autonique, Inc.</div>
        </div>
      </footer>
    </div>
  );
}