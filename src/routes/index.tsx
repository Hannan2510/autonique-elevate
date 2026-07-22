import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Activity,
  Calendar,
  Users,
  DollarSign,
  Shield,
  Zap,
  Sparkles,
  Clock,
  CheckCircle2,
  Lock,
  Building,
  HeartPulse,
} from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autonique — Clinical OS for Modern Practice Management" },
      {
        name: "description",
        content:
          "Autonique unifies multi-provider scheduling, patient records, clinical workflows, and revenue telemetry for modern healthcare groups.",
      },
      { property: "og:title", content: "Autonique — Clinical OS for Modern Practice Management" },
      { property: "og:description", content: "Official Operating System for High-Performing Medical Clinics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white text-[12px] font-bold tracking-tight shadow-sm transition-transform hover:scale-105">
        A
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] font-bold tracking-tight leading-none text-foreground">Autonique</span>
        <span className="text-[8.5px] text-muted-foreground/70 font-mono leading-none mt-0.5 uppercase tracking-widest font-medium">Clinical OS</span>
      </div>
    </div>
  );
}

function Landing() {
  const [heroTab, setHeroTab] = useState<"Overview" | "Appointments" | "Patients" | "Revenue">("Overview");
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-emerald-500/20 selection:text-emerald-700">
      {/* Official Top Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {["Product", "Solutions", "Pricing", "Compliance", "Docs"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[12.5px] font-medium text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="hidden text-[12.5px] font-medium text-muted-foreground hover:text-foreground sm:inline transition-colors">
              Sign in
            </Link>
            <Link to="/dashboard" className="inline-flex h-8.5 items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-3.5 text-[12.5px] font-semibold text-white transition-all shadow-2xs cursor-pointer">
              <span>Open Clinical Portal</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section — Modern Clinical OS Theme */}
      <section className="relative overflow-hidden border-b border-border/60 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <img
            src={heroClinic.url}
            alt="Clinic Office"
            width={1024}
            height={1024}
            className="h-full w-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/90 to-background" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Official Announcement Pill */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11.5px] font-medium text-emerald-800 dark:text-emerald-300 backdrop-blur-md shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Autonique 2.4 Clinical OS · Enterprise Multi-Provider Architecture
              <ChevronRight className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
            </div>

            <h1 className="text-balance font-display text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              The official operating system for modern clinics.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-[14.5px] leading-relaxed text-muted-foreground sm:text-base">
              Autonique unifies multi-provider scheduling, HIPAA/GDPR clinical records, patient billing, and live practice telemetry into a calm, high-precision workspace.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link to="/dashboard" className="inline-flex h-10 items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 text-[13px] font-semibold text-white transition-all shadow-md cursor-pointer">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#pricing" className="inline-flex h-10 items-center gap-2 rounded-xl border border-border/80 bg-card px-5 text-[13px] font-semibold text-foreground transition-all hover:bg-accent">
                View Subscription Plans
              </a>
            </div>

            {/* Compliance Badge Row */}
            <div className="mt-8 flex items-center justify-center gap-6 font-mono text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-emerald-600" /> HIPAA Compliant</span>
              <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-emerald-600" /> 256-bit AES Encryption</span>
              <span className="flex items-center gap-1.5"><HeartPulse className="h-3.5 w-3.5 text-emerald-600" /> 99.99% SLA Uptime</span>
            </div>
          </div>

          {/* Interactive Hero Widget Preview Frame */}
          <div className="relative mx-auto mt-12 max-w-5xl">
            {/* Floating micro-badges around preview */}
            <div className="hidden md:flex absolute -top-5 -left-6 z-20 items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-card/95 p-3 shadow-lg backdrop-blur-md">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold">
                <Activity className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[11.5px] font-semibold">● Live Patient Queue</div>
                <div className="text-[10px] text-muted-foreground font-mono">24 active check-ins today</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -bottom-6 -right-6 z-20 items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-card/95 p-3 shadow-lg backdrop-blur-md">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-teal-500/10 text-teal-700 dark:text-teal-400 font-bold">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[11.5px] font-semibold">Smart Waitlist Engine</div>
                <div className="text-[10px] text-muted-foreground font-mono">14m avg appointment gap filled</div>
              </div>
            </div>

            {/* Main Interactive Demo Container */}
            <div className="rounded-2xl border border-emerald-500/20 bg-card shadow-2xl overflow-hidden transition-all">
              <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 bg-muted/30">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500/40" />
                  <span className="h-3 w-3 rounded-full bg-teal-500/40" />
                  <span className="h-3 w-3 rounded-full bg-emerald-600/40" />
                  <div className="ml-3 hidden sm:flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 py-0.5 font-mono text-[10.5px] text-muted-foreground">
                    <Shield className="h-3 w-3 text-emerald-600" />
                    app.autonique.com/dashboard
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-background p-1 rounded-lg border border-border/60 font-medium text-[11px]">
                  {(["Overview", "Appointments", "Patients", "Revenue"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setHeroTab(t)}
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        heroTab === t
                          ? "bg-emerald-600 text-white font-semibold shadow-2xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Interactive Demo Views */}
              <div className="p-6 md:p-8 min-h-[320px]">
                {heroTab === "Overview" && (
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <div className="font-display text-lg font-bold text-foreground">Meridian Clinics Overview</div>
                        <div className="text-[11px] text-muted-foreground font-mono">Live Sync · Today, 22 July 2026</div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-emerald-800 dark:text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        98% Operational Efficiency
                      </span>
                    </div>

                    {/* KPI Pastel Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { l: "Revenue (Today)", v: "$18,240", d: "+12.4% vs yesterday", grad: "kpi-gradient-mint" },
                        { l: "Bookings Scheduled", v: "36 Patients", d: "6 waiting room", grad: "kpi-gradient-lime" },
                        { l: "Patient Retention", v: "94.8%", d: "+2.1% this month", grad: "kpi-gradient-emerald" },
                      ].map((s) => (
                        <div key={s.l} className={`rounded-xl p-3.5 border border-emerald-500/10 shadow-2xs ${s.grad}`}>
                          <div className="text-[11px] font-semibold text-foreground/80">{s.l}</div>
                          <div className="mt-1 font-display text-xl font-bold tracking-tight text-foreground">{s.v}</div>
                          <div className="mt-0.5 text-[10px] text-emerald-800 dark:text-emerald-300 font-mono font-semibold">{s.d}</div>
                        </div>
                      ))}
                    </div>

                    {/* Graph Mockup */}
                    <div className="mt-3.5 rounded-xl border border-emerald-500/10 kpi-gradient-teal p-3.5 h-32">
                      <div className="flex justify-between text-[10.5px] text-muted-foreground font-mono mb-2">
                        <span className="font-semibold text-foreground">Revenue Velocity & Patient Throughput</span>
                        <span>Peak Hours (10:00 - 14:00)</span>
                      </div>
                      <svg viewBox="0 0 400 60" className="h-full w-full overflow-visible" preserveAspectRatio="none">
                        <path d="M0,45 C50,35 80,50 120,25 C160,8 210,30 260,18 C310,8 360,25 400,10" stroke="#059669" strokeWidth="2.5" fill="none" />
                        <path d="M0,45 C50,35 80,50 120,25 C160,8 210,30 260,18 C310,8 360,25 400,10 L400,60 L0,60 Z" fill="#10b981" opacity="0.12" />
                      </svg>
                    </div>
                  </div>
                )}

                {heroTab === "Appointments" && (
                  <div className="space-y-2.5">
                    <div className="text-[12.5px] font-bold mb-2 flex items-center gap-2 text-foreground">
                      <Calendar className="h-4 w-4 text-emerald-600" /> Today's Live Schedule (6 visits remaining)
                    </div>
                    {[
                      { time: "09:00 AM", name: "Ava Chen", type: "General Consult", provider: "Dr. Reyes", status: "Confirmed" },
                      { time: "10:30 AM", name: "Marcus Weiss", type: "Follow-up", provider: "Dr. Okafor", status: "In Exam" },
                      { time: "11:15 AM", name: "Priya Kapoor", type: "Specialized Evaluation", provider: "Dr. Reyes", status: "Waiting" },
                    ].map((a) => (
                      <div key={a.name} className="flex items-center justify-between rounded-xl border border-border/60 bg-background p-3 text-[12px]">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[11px] font-semibold text-muted-foreground">{a.time}</span>
                          <div>
                            <div className="font-semibold text-foreground">{a.name}</div>
                            <div className="text-[10.5px] text-muted-foreground">{a.type} · {a.provider}</div>
                          </div>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${a.status === "In Exam" ? "bg-emerald-600 text-white" : "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"}`}>
                          {a.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {heroTab === "Patients" && (
                  <div>
                    <div className="text-[12.5px] font-bold mb-2 flex items-center gap-2 text-foreground">
                      <Users className="h-4 w-4 text-emerald-600" /> Patient Medical Records Directory
                    </div>
                    <div className="rounded-xl border border-border/60 overflow-hidden font-sans">
                      <table className="w-full text-left text-[11.5px]">
                        <thead className="bg-muted/40 text-[10px] font-mono text-muted-foreground uppercase border-b border-border/60">
                          <tr>
                            <th className="p-2.5 font-semibold">Patient Name</th>
                            <th className="p-2.5 font-semibold">ID</th>
                            <th className="p-2.5 font-semibold">Last Visit</th>
                            <th className="p-2.5 text-right font-semibold">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40 bg-background">
                          <tr>
                            <td className="p-2.5 font-semibold text-foreground">Elena Rossi</td>
                            <td className="p-2.5 font-mono text-muted-foreground">PAT-9821</td>
                            <td className="p-2.5 text-muted-foreground">Yesterday</td>
                            <td className="p-2.5 text-right"><span className="text-emerald-700 dark:text-emerald-400 font-mono text-[10.5px] font-semibold">Active</span></td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-semibold text-foreground">Jonas Lind</td>
                            <td className="p-2.5 font-mono text-muted-foreground">PAT-7412</td>
                            <td className="p-2.5 text-muted-foreground">15 Jul 2026</td>
                            <td className="p-2.5 text-right"><span className="text-emerald-700 dark:text-emerald-400 font-mono text-[10.5px] font-semibold">Active</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {heroTab === "Revenue" && (
                  <div>
                    <div className="text-[12.5px] font-bold mb-2 flex items-center gap-2 text-foreground">
                      <DollarSign className="h-4 w-4 text-emerald-600" /> Billing & Revenue Telemetry
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl border border-emerald-500/10 kpi-gradient-mint">
                        <div className="text-[11px] font-semibold text-foreground/80">Monthly Recurring Revenue</div>
                        <div className="font-display text-2xl font-bold tracking-tight mt-1 text-foreground">$248,320</div>
                        <div className="text-[10px] text-emerald-800 dark:text-emerald-300 font-mono font-semibold mt-1">+14.2% MRR growth</div>
                      </div>
                      <div className="p-3.5 rounded-xl border border-emerald-500/10 kpi-gradient-lime">
                        <div className="text-[11px] font-semibold text-foreground/80">Average Collection Speed</div>
                        <div className="font-display text-2xl font-bold tracking-tight mt-1 text-foreground">1.8 Days</div>
                        <div className="text-[10px] text-emerald-800 dark:text-emerald-300 font-mono font-semibold mt-1">99.4% clean claims</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Medical Group Logos */}
      <section className="border-b border-border/60 bg-muted/20 py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Trusted by leading clinic networks & healthcare organizations
          </div>
          <div className="mt-6 grid grid-cols-2 items-center gap-y-5 sm:grid-cols-3 md:grid-cols-6">
            {["Northwind Health", "Meridian Clinics", "Aster Care", "Solace Health", "Umbra Medical", "Vantage Health"].map((n) => (
              <div key={n} className="text-center font-display text-[15px] font-bold tracking-tight text-muted-foreground/80 hover:text-foreground transition-colors cursor-default">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Grid — KPI Pastel Styling */}
      <section id="product" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-semibold">
              Clinical OS Architecture
            </div>
            <h2 className="mt-2.5 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Everything your practice runs on, unified.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
              Built from scratch for medical groups — no legacy code, no interface seams. Every workflow is quiet, fast, and dependable.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { t: "Multi-Provider Scheduling", d: "Drag-and-drop calendar with zero latency. Intelligent waitlists & automated patient SMS reminders.", grad: "kpi-gradient-mint" },
              { t: "Clinical Patient Records", d: "Structured patient charts with clean reading surfaces. Fast medical history search in a single keystroke.", grad: "kpi-gradient-lime" },
              { t: "Revenue Telemetry & Invoicing", d: "Instant clinic invoicing, Stripe payment processing, and real-time financial analytics.", grad: "kpi-gradient-emerald" },
              { t: "HIPAA & GDPR Compliance", d: "Role-based permission governance and immutable audit logs engineered for enterprise security.", grad: "kpi-gradient-teal" },
              { t: "Automated Patient Journeys", d: "Pre-visit intake forms, appointment reminders, and automated post-care follow-up workflows.", grad: "kpi-gradient-mint" },
              { t: "Developer API & Integrations", d: "Full programmatic REST API and webhooks designed with the elegance and documentation of Stripe.", grad: "kpi-gradient-lime" },
            ].map((f) => (
              <div key={f.t} className={`rounded-xl border border-emerald-500/10 p-6 shadow-2xs transition-all hover:scale-[1.01] ${f.grad}`}>
                <div className="flex items-center justify-between">
                  <div className="text-[13.5px] font-bold text-foreground">{f.t}</div>
                  <Sparkles className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                </div>
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Endorsement Quote */}
      <section className="border-b border-border/60 bg-emerald-500/5 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <blockquote className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl text-foreground">
            "Autonique replaced four disparate software tools and made our clinical workday dramatically quieter. It is the first operating system our doctors actually enjoy using."
          </blockquote>
          <div className="mt-6 inline-flex items-center gap-3 text-left">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-600 font-bold text-white text-[11px]">
              IR
            </div>
            <div>
              <div className="text-[13px] font-bold text-foreground">Dr. Iman Reyes</div>
              <div className="text-muted-foreground font-mono text-[10.5px]">Medical Director, Meridian Clinics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section — Subscription Plans */}
      <section id="pricing" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div className="max-w-2xl">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-semibold">
                Official Subscriptions
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Straightforward pricing per provider.
              </h2>
            </div>
            
            {/* Annual Billing Toggle */}
            <div className="flex items-center gap-2 bg-muted/60 p-1 rounded-xl border border-border/60 self-start md:self-auto">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-3 py-1 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${!annualBilling ? "bg-background text-foreground shadow-2xs" : "text-muted-foreground"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${annualBilling ? "bg-emerald-600 text-white shadow-2xs" : "text-muted-foreground"}`}
              >
                Annual
                <span className="font-mono text-[9.5px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { n: "Starter", p: annualBilling ? "$39" : "$49", s: "For solo practitioner practices.", f: ["Smart calendar scheduling", "Structured patient records", "Automated email reminders", "Standard revenue reports", "Email support"] },
              { n: "Growth", p: annualBilling ? "$99" : "$129", s: "For growing multi-doctor teams.", f: ["Everything in Starter", "Stripe payment gateway", "AI waitlist & queue automation", "WhatsApp & SMS notifications", "Priority 24/7 support"], highlight: true },
              { n: "Enterprise", p: "Custom", s: "For multi-campus hospital groups.", f: ["SSO & SCIM provisioning", "Custom EMR integrations", "Immutable audit telemetry", "99.99% SLA & dedicated CSM", "Custom BAA (HIPAA)"] },
            ].map((t) => (
              <div
                key={t.n}
                className={`rounded-2xl border p-6 transition-all flex flex-col justify-between ${
                  t.highlight
                    ? "border-emerald-500/40 bg-emerald-500/5 ring-2 ring-emerald-500/20 shadow-md relative"
                    : "border-border/60 bg-card"
                }`}
              >
                <div>
                  {t.highlight && (
                    <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-0.5 font-mono text-[9.5px] font-bold text-white uppercase tracking-wider shadow-2xs">
                      Recommended
                    </div>
                  )}
                  <div className="text-[14px] font-bold text-foreground">{t.n}</div>
                  <div className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground">
                    {t.p}
                    {t.p !== "Custom" && <span className="ml-1 font-mono text-[11px] text-muted-foreground font-normal">/ provider · mo</span>}
                  </div>
                  <div className="mt-1 text-[12px] text-muted-foreground">{t.s}</div>
                  <ul className="mt-6 space-y-2.5">
                    {t.f.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-[12px] text-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/dashboard"
                  className={`mt-6 inline-flex h-9 w-full items-center justify-center rounded-xl text-[12.5px] font-semibold transition-all cursor-pointer ${
                    t.highlight
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs"
                      : "border border-border/80 bg-background hover:bg-accent text-foreground"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Footer */}
      <footer className="mx-auto max-w-7xl px-5 py-10 sm:px-8 border-t border-border/60">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted-foreground font-medium">
            <a href="#product" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Product</a>
            <a href="#pricing" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="#" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Security & HIPAA</a>
            <a href="#" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Privacy Policy</a>
          </div>
          <div className="text-[11px] text-muted-foreground font-mono">© 2026 Autonique Clinical OS</div>
        </div>
      </footer>
    </div>
  );
}