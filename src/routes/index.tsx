import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Users,
  DollarSign,
  Shield,
  CheckCircle2,
  Rocket,
  Smartphone,
  MessageSquare,
  Globe,
  FileSpreadsheet,
  Pill,
  Receipt,
  Boxes,
  BarChart3,
  Stethoscope,
  Search,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autonique — Premium Clinical Operating System" },
      {
        name: "description",
        content:
          "The modern clinical OS for doctors and practice groups. Unifies patient scheduling, EMR, prescriptions, and billing.",
      },
      { property: "og:title", content: "Autonique — Clinical Operating System" },
      { property: "og:description", content: "All-in-one software for doctors, practice groups, and clinics." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white font-bold text-[13.5px] tracking-tight shadow-md shadow-emerald-500/20 transition-transform hover:scale-105">
        A
      </div>
      <div className="flex flex-col">
        <span className="text-[15.5px] font-bold tracking-tight leading-none text-foreground font-sans">Autonique</span>
        <span className="text-[8px] text-emerald-700 dark:text-emerald-300 font-mono leading-none mt-0.5 uppercase tracking-widest font-bold">Clinical OS</span>
      </div>
    </div>
  );
}

function Landing() {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-emerald-500/20 selection:text-emerald-700 overflow-x-hidden antialiased">
      
      {/* 🌟 1. Ultra-Clean Glass Header */}
      <header className="sticky top-0 z-50 border-b border-emerald-500/10 bg-background/85 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo />

          {/* Minimal Navigation */}
          <nav className="hidden items-center gap-8 md:flex text-[13px] font-medium text-muted-foreground font-sans">
            <a href="#features" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Features</a>
            <a href="#engagement" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">WhatsApp Automation</a>
            <a href="#pricing" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Pricing</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="hidden text-[13px] font-semibold text-emerald-800 dark:text-emerald-300 hover:text-emerald-900 sm:inline transition-colors px-3 py-1.5 rounded-lg hover:bg-emerald-500/10 font-sans">
              Sign In
            </Link>
            <Link to="/dashboard" className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-4 text-[12.5px] font-semibold text-white transition-all shadow-md shadow-emerald-600/20 cursor-pointer active:scale-95 font-sans">
              <Rocket className="h-3.5 w-3.5" />
              <span>Start Free Trial</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 🚀 2. Sleek Hero Section — 2-Column with Compact Tilted Dashboard Preview */}
      <section id="home" className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-background to-background">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (6 cols): Concise Text Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 shadow-2xs backdrop-blur-md">
                <Shield className="h-3.5 w-3.5 text-emerald-600" />
                <span>Trusted by 40,000+ Doctors Worldwide</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                Simplify Your Practice with <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">Powerful Clinical OS</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[14px] leading-relaxed text-muted-foreground max-w-lg font-sans">
                All-in-one software for doctors, clinics, and hospitals to manage appointments, EMR, prescriptions, billing, and patient communication.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/dashboard" className="inline-flex h-10.5 items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-5 text-[13px] font-semibold text-white transition-all shadow-md shadow-emerald-600/20 cursor-pointer active:scale-98">
                  <Rocket className="h-4 w-4" />
                  <span>Start Free Trial</span>
                </Link>
                <a href="#pricing" className="inline-flex h-10.5 items-center gap-2 rounded-xl border border-emerald-500/25 bg-card hover:bg-emerald-500/5 px-5 text-[13px] font-semibold text-emerald-800 dark:text-emerald-300 transition-all shadow-2xs">
                  <Calendar className="h-4 w-4 text-emerald-600" />
                  <span>Book a Demo</span>
                </a>
              </div>

              {/* Quick Trust Pill */}
              <div className="flex items-center gap-4 text-[11px] font-mono text-muted-foreground pt-1">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> No credit card needed</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> 14-day free trial</span>
              </div>
            </div>

            {/* Right Column (6 cols): Scaled-Down Compact Tilted Dashboard Mockup */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Scaled-down 3D Tilted Dashboard Window */}
              <div className="relative rounded-2xl border border-emerald-500/30 bg-card shadow-[0_20px_50px_-10px_rgba(16,185,129,0.2)] overflow-hidden transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] max-w-md mx-auto lg:max-w-none">
                
                {/* Header Dots Bar */}
                <div className="flex items-center justify-between border-b border-border/60 px-3.5 py-2 bg-gradient-to-r from-emerald-950 via-teal-950 to-emerald-950 text-white">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-emerald-200">Autonique Clinical OS</span>
                  <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/20 px-1.5 py-0.2 rounded font-semibold">Live</span>
                </div>

                {/* Compact Inner Canvas */}
                <div className="p-3.5 bg-background space-y-3 text-left">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.2 font-mono text-[9px] font-medium text-emerald-700 dark:text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Operational
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="grid h-5 w-5 place-items-center rounded-full bg-emerald-600 text-white font-bold text-[9px]">IR</div>
                      <span className="text-[10.5px] font-semibold text-foreground font-sans">Dr. Reyes</span>
                    </div>
                  </div>

                  {/* Greeting */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-xs font-bold text-foreground">GOOD MORNING, DR. SARAH 👋</h4>
                      <p className="text-[9.5px] font-mono text-muted-foreground">Today's clinic telemetry</p>
                    </div>
                    <span className="font-mono text-[9px] bg-emerald-500/10 text-emerald-700 px-1.5 py-0.2 rounded font-semibold">Clinic Open</span>
                  </div>

                  {/* 4 Compact Pastel KPI Cards */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg p-2 border border-emerald-500/10 kpi-gradient-mint">
                      <span className="text-[9px] font-semibold text-foreground/80 block">Patients</span>
                      <span className="font-display text-sm font-bold text-foreground block">4,892</span>
                      <span className="text-[8.5px] font-mono text-emerald-800 font-semibold block">+12% month</span>
                    </div>
                    <div className="rounded-lg p-2 border border-emerald-500/10 kpi-gradient-lime">
                      <span className="text-[9px] font-semibold text-foreground/80 block">Appointments</span>
                      <span className="font-display text-sm font-bold text-foreground block">48</span>
                      <span className="text-[8.5px] font-mono text-emerald-800 font-semibold block">+8% bookings</span>
                    </div>
                    <div className="rounded-lg p-2 border border-emerald-500/10 kpi-gradient-emerald">
                      <span className="text-[9px] font-semibold text-foreground/80 block">Revenue</span>
                      <span className="font-display text-sm font-bold text-foreground block">$24,500</span>
                      <span className="text-[8.5px] font-mono text-emerald-800 font-semibold block">+15% revenue</span>
                    </div>
                    <div className="rounded-lg p-2 border border-emerald-500/10 kpi-gradient-teal">
                      <span className="text-[9px] font-semibold text-foreground/80 block">Active Doctors</span>
                      <span className="font-display text-sm font-bold text-foreground block">35</span>
                      <span className="text-[8.5px] font-mono text-emerald-800 font-semibold block">On Leave -2%</span>
                    </div>
                  </div>

                  {/* Mini Line Chart */}
                  <div className="rounded-lg border border-border/60 bg-card p-2 space-y-1">
                    <div className="flex justify-between text-[9.5px] font-bold text-foreground font-sans">
                      <span>Revenue Trend</span>
                      <span className="font-mono text-emerald-700 text-[8.5px]">Apr: $15,000</span>
                    </div>
                    <div className="h-16 pt-1">
                      <svg viewBox="0 0 400 80" className="h-full w-full overflow-visible" preserveAspectRatio="none">
                        <path d="M 0,60 Q 40,30 80,40 T 160,15 T 240,30 T 320,40 T 400,10" fill="none" stroke="#84cc16" strokeWidth="2.5" />
                        <circle cx="160" cy="15" r="3" fill="#84cc16" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

              {/* Compact Stats Row Directly Underneath (Clinicia Layout) */}
              <div className="grid grid-cols-4 gap-2 text-center pt-1 font-sans">
                <div>
                  <div className="font-display text-xl font-extrabold text-emerald-600 dark:text-emerald-400">40K+</div>
                  <div className="text-[9.5px] font-mono font-bold text-muted-foreground uppercase">DOCTORS</div>
                </div>
                <div>
                  <div className="font-display text-xl font-extrabold text-emerald-600 dark:text-emerald-400">25K+</div>
                  <div className="text-[9.5px] font-mono font-bold text-muted-foreground uppercase">CLINICS</div>
                </div>
                <div>
                  <div className="font-display text-xl font-extrabold text-emerald-600 dark:text-emerald-400">8M+</div>
                  <div className="text-[9.5px] font-mono font-bold text-muted-foreground uppercase">PATIENTS</div>
                </div>
                <div>
                  <div className="font-display text-xl font-extrabold text-emerald-600 dark:text-emerald-400">99.9%</div>
                  <div className="text-[9.5px] font-mono font-bold text-muted-foreground uppercase">UPTIME</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ✨ 3. Streamlined Features Grid */}
      <section id="features" className="py-16 border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-bold">
              Core Platform
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              Smart Features That Power Your Practice
            </h2>
            <p className="text-[13px] text-muted-foreground font-sans">
              Everything doctors and staff need to deliver exceptional care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                t: "Capture Vitals & EMR",
                icon: FileSpreadsheet,
                bullets: ["Capture patient vitals & history", "Clinical diagnosis & ICD-10 notes", "Structured treatment plans"],
                grad: "kpi-gradient-mint",
              },
              {
                t: "Appointment Scheduling",
                icon: Calendar,
                bullets: ["Automated WhatsApp & SMS reminders", "Manage patient queue & tokens", "Multi-provider doctor calendars"],
                grad: "kpi-gradient-lime",
              },
              {
                t: "Prescription Management",
                icon: Pill,
                bullets: ["Preloaded medicine database", "Digital doctor signatures", "1-click prescription print & PDF"],
                grad: "kpi-gradient-emerald",
              },
              {
                t: "Billing & Stripe Invoicing",
                icon: Receipt,
                bullets: ["Create branded clinic bills", "Track partial payments & balances", "Integrated Stripe payment gateway"],
                grad: "kpi-gradient-teal",
              },
              {
                t: "Inventory & Pharmacy",
                icon: Boxes,
                bullets: ["Manage medicine stock & flow", "Supplier purchase orders", "Batch & expiry tracking"],
                grad: "kpi-gradient-mint",
              },
              {
                t: "Reports & Analytics",
                icon: BarChart3,
                bullets: ["Analyze daily revenue velocity", "Patient visit & growth trends", "Doctor performance telemetry"],
                grad: "kpi-gradient-lime",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.t} className={`rounded-2xl border border-emerald-500/15 p-5 shadow-2xs transition-all duration-300 hover:scale-[1.015] hover:shadow-md ${f.grad}`}>
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/90 dark:bg-card/90 shadow-2xs text-emerald-700 dark:text-emerald-400 mb-3">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-[13.5px] font-bold text-foreground font-sans">{f.t}</h4>
                  <ul className="mt-2.5 space-y-1 text-[12px] text-muted-foreground font-sans">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 💬 4. WhatsApp Patient Communication */}
      <section id="engagement" className="py-16 border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-bold">
                WhatsApp Automation
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                Patient Engagement, Reinvented
              </h2>
              <p className="text-[13.5px] leading-relaxed text-muted-foreground font-sans">
                Automate patient reminders and prescription delivery over WhatsApp. Reduce missed appointments by 60%.
              </p>
              
              <div className="space-y-2 pt-1 font-sans">
                {[
                  "Send appointment confirmations & reminders on WhatsApp",
                  "Share digital prescriptions & invoices in 1 click",
                  "Automate follow-up reminders & routine checkups",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[12.5px] text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-emerald-500/20 bg-card p-5 shadow-lg space-y-3">
                <div className="rounded-xl bg-gradient-to-r from-emerald-950 to-teal-950 p-3.5 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="h-5 w-5 text-emerald-400" />
                    <div>
                      <div className="text-[12px] font-bold">WhatsApp Business Gateway</div>
                      <div className="text-[9.5px] text-emerald-200/80 font-mono">Automated Reminders</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[9.5px] font-semibold">Active</span>
                </div>

                <div className="space-y-2 font-mono text-[10.5px]">
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2.5 text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                    <span>✓ Appointment reminder sent to Ava Chen</span>
                    <span className="text-[9px]">09:00 AM</span>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2.5 text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                    <span>✓ Digital RX PDF shared via WhatsApp</span>
                    <span className="text-[9px]">10:32 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💳 5. Pricing Section */}
      <section id="pricing" className="py-16 border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-bold">
                Subscription Plans
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                Transparent & Predictable Pricing
              </h2>
            </div>

            {/* Annual Billing Toggle */}
            <div className="flex items-center gap-2 bg-background p-1 rounded-xl border border-border/60 self-start sm:self-auto font-sans">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-3 py-1 rounded-lg text-[11.5px] font-semibold transition-all cursor-pointer ${!annualBilling ? "bg-emerald-600 text-white shadow-2xs" : "text-muted-foreground"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[11.5px] font-semibold transition-all cursor-pointer ${annualBilling ? "bg-emerald-600 text-white shadow-2xs" : "text-muted-foreground"}`}
              >
                Annual
                <span className="font-mono text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-bold">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { n: "Starter", p: annualBilling ? "$39" : "$49", s: "For solo doctor practices.", f: ["Smart calendar scheduling", "Structured patient records", "Automated email reminders", "Standard revenue reports"] },
              { n: "Growth", p: annualBilling ? "$99" : "$129", s: "For growing practice teams.", f: ["Everything in Starter", "Stripe payment gateway", "WhatsApp notifications", "Priority 24/7 support"], highlight: true },
              { n: "Enterprise", p: "Custom", s: "For multi-campus groups.", f: ["Custom EMR integrations", "Immutable audit telemetry", "99.99% SLA & dedicated CSM", "Custom BAA (HIPAA)"] },
            ].map((t) => (
              <div
                key={t.n}
                className={`rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                  t.highlight
                    ? "border-emerald-500/40 bg-emerald-500/5 ring-2 ring-emerald-500/20 shadow-md"
                    : "border-border/60 bg-card"
                }`}
              >
                <div>
                  {t.highlight && (
                    <div className="mb-2.5 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-0.5 font-mono text-[9px] font-bold text-white uppercase tracking-wider shadow-2xs">
                      Most Popular
                    </div>
                  )}
                  <div className="text-[13.5px] font-bold text-foreground font-sans">{t.n}</div>
                  <div className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground">
                    {t.p}
                    {t.p !== "Custom" && <span className="ml-1 font-mono text-[10.5px] text-muted-foreground font-normal">/ mo</span>}
                  </div>
                  <div className="mt-0.5 text-[11.5px] text-muted-foreground font-sans">{t.s}</div>
                  <ul className="mt-4 space-y-2">
                    {t.f.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-[11.5px] text-foreground font-sans">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/dashboard"
                  className={`mt-5 inline-flex h-9 w-full items-center justify-center rounded-xl text-[12px] font-semibold transition-all cursor-pointer font-sans ${
                    t.highlight
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs"
                      : "border border-border/80 bg-background hover:bg-accent text-foreground"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-5 py-8 sm:px-8 border-t border-border/60 bg-background">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-muted-foreground font-medium font-sans">
            <a href="#features" className="hover:text-emerald-700 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-emerald-700 transition-colors">Pricing</a>
            <Link to="/dashboard" className="hover:text-emerald-700 transition-colors">Dashboard</Link>
          </div>
          <div className="text-[10.5px] text-muted-foreground font-mono">© 2026 Autonique Clinical OS</div>
        </div>
      </footer>

    </div>
  );
}