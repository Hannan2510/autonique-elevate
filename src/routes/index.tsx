import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Shield,
  CheckCircle2,
  Rocket,
  Smartphone,
  MessageSquare,
  FileSpreadsheet,
  Pill,
  Receipt,
  Boxes,
  BarChart3,
  Stethoscope,
  ChevronRight,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autonique — Enterprise Clinical OS for Modern Healthcare" },
      {
        name: "description",
        content:
          "The modern clinical OS for doctors and practice groups. Unifies patient scheduling, EMR, prescriptions, billing, and WhatsApp patient communication.",
      },
      { property: "og:title", content: "Autonique — Enterprise Clinical OS" },
      { property: "og:description", content: "All-in-one practice management platform for doctors, clinics, and hospital groups." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="grid h-8.5 w-8.5 place-items-center rounded-xl bg-gradient-to-br from-[#00a878] to-[#047857] text-white font-bold text-[14px] tracking-tight shadow-md shadow-[#00a878]/25 transition-transform hover:scale-105">
        A
      </div>
      <div className="flex flex-col">
        <span className="text-[16px] font-bold tracking-tight leading-none text-[#0f172a] font-sans">Autonique</span>
        <span className="text-[8.5px] text-[#00a878] font-mono leading-none mt-0.5 uppercase tracking-widest font-bold">Clinical OS</span>
      </div>
    </div>
  );
}

function Landing() {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <div className="min-h-screen bg-[#F7FCF9] text-[#0f172a] font-sans selection:bg-[#00a878]/20 selection:text-[#00684a] overflow-x-hidden antialiased">
      
      {/* 🌟 1. Crisp Light Mint Header Bar */}
      <header className="sticky top-0 z-50 border-b border-[#00a878]/15 bg-[#F7FCF9]/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo />

          {/* Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex text-[13.5px] font-medium text-[#475569] font-sans">
            <a href="#features" className="hover:text-[#00a878] transition-colors">Features</a>
            <a href="#engagement" className="hover:text-[#00a878] transition-colors">WhatsApp Automation</a>
            <a href="#pricing" className="hover:text-[#00a878] transition-colors">Pricing</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3 font-sans">
            <Link to="/dashboard" className="hidden text-[13.5px] font-semibold text-[#334155] hover:text-[#00a878] sm:inline transition-colors px-3 py-1.5 rounded-lg hover:bg-[#00a878]/10">
              Sign In
            </Link>
            <Link to="/dashboard" className="inline-flex h-9.5 items-center gap-1.5 rounded-xl bg-[#00a878] hover:bg-[#008f66] px-4 text-[13px] font-semibold text-white transition-all shadow-md shadow-[#00a878]/25 active:scale-95 cursor-pointer">
              <Rocket className="h-4 w-4" />
              <span>Start Free Trial</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 🚀 2. Hero Section matching exact uploaded screenshot styling */}
      <section id="home" className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#F7FCF9] via-[#F0FDF5] to-[#F7FCF9]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (6 cols): Headline & CTAs */}
            <div className="lg:col-span-6 space-y-5 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00a878]/30 bg-[#e6f7f0] px-3.5 py-1 text-[11.5px] font-semibold text-[#00684a] shadow-2xs">
                <Shield className="h-3.5 w-3.5 text-[#00a878]" />
                <span>Trusted by 40,000+ Doctors Worldwide</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-5xl text-[#0f172a]">
                Simplify Your Practice with <span className="text-[#00a878]">Powerful Clinical OS</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[15px] leading-relaxed text-[#475569] max-w-lg font-sans">
                All-in-one software for doctors, clinics, and hospitals to manage appointments, EMR, prescriptions, billing, and patient communication.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link to="/dashboard" className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#00a878] hover:bg-[#008f66] px-5.5 text-[13.5px] font-semibold text-white transition-all shadow-md shadow-[#00a878]/25 cursor-pointer active:scale-98">
                  <Rocket className="h-4 w-4" />
                  <span>Start Free Trial</span>
                </Link>
                <a href="#pricing" className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#00a878]/30 bg-white hover:bg-[#e6f7f0]/50 px-5.5 text-[13.5px] font-semibold text-[#00684a] transition-all shadow-2xs">
                  <Calendar className="h-4 w-4 text-[#00a878]" />
                  <span>Book a Demo</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="flex items-center gap-5 text-[11.5px] font-mono text-[#64748b] pt-1">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#00a878]" /> No credit card needed</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#00a878]" /> 14-day free trial</span>
              </div>
            </div>

            {/* Right Column (6 cols): Tilted Dashboard Frame */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Tilted Desktop Window */}
              <div className="relative rounded-2xl border border-[#00a878]/30 bg-white shadow-[0_20px_50px_-10px_rgba(0,168,120,0.18)] overflow-hidden transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] max-w-md mx-auto lg:max-w-none">
                
                {/* Header Dots Bar */}
                <div className="flex items-center justify-between border-b border-border/60 px-3.5 py-2.5 bg-[#03362a] text-white">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[10.5px] font-semibold text-emerald-200">Autonique Clinical OS</span>
                  <span className="font-mono text-[9px] text-emerald-300 bg-emerald-500/20 px-1.5 py-0.2 rounded font-semibold">Live</span>
                </div>

                {/* Exact High-Res Dashboard Image */}
                <img
                  src="/dashboard-home-img.png"
                  alt="Autonique Clinical OS Dashboard"
                  className="w-full h-auto object-cover rounded-b-2xl shadow-inner border-t border-white/10"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              {/* Compact Stats Row (Directly Underneath) */}
              <div className="grid grid-cols-4 gap-2 text-center pt-1 font-sans">
                <div>
                  <div className="font-display text-2xl font-extrabold text-[#00a878]">40K+</div>
                  <div className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-wider">DOCTORS</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-[#00a878]">25K+</div>
                  <div className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-wider">CLINICS</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-[#00a878]">8M+</div>
                  <div className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-wider">PATIENTS</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-[#00a878]">99.9%</div>
                  <div className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-wider">UPTIME</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ✨ 3. Platform Features Grid in Mint Theme */}
      <section id="features" className="py-16 border-t border-[#00a878]/15 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-1.5">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#00a878] font-bold">
              Core Platform
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-[#0f172a]">
              Smart Features That Power Your Practice
            </h2>
            <p className="text-[13.5px] text-[#64748b]">
              Comprehensive tools designed specifically for modern medical groups
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                t: "Capture Vitals & EMR",
                icon: FileSpreadsheet,
                bullets: ["Capture patient vitals & history", "Clinical diagnosis & ICD-10 notes", "Structured treatment plans"],
                bg: "bg-[#E6F7F0] border-[#00a878]/20",
              },
              {
                t: "Appointment Scheduling",
                icon: Calendar,
                bullets: ["Automated WhatsApp & SMS reminders", "Manage patient queue & token numbers", "Multi-provider doctor calendars"],
                bg: "bg-[#F4FBF0] border-[#84cc16]/20",
              },
              {
                t: "Prescription Management",
                icon: Pill,
                bullets: ["Preloaded medicine database", "Digital doctor signatures", "1-click prescription print & PDF"],
                bg: "bg-[#E9F9F2] border-[#00a878]/20",
              },
              {
                t: "Billing & Stripe Invoicing",
                icon: Receipt,
                bullets: ["Create branded clinic bills", "Track partial payments & balances", "Integrated Stripe payment gateway"],
                bg: "bg-[#EAFBF7] border-[#14b8a6]/20",
              },
              {
                t: "Inventory & Pharmacy",
                icon: Boxes,
                bullets: ["Manage medicine stock & flow", "Supplier purchase orders", "Batch & expiry tracking"],
                bg: "bg-[#E6F7F0] border-[#00a878]/20",
              },
              {
                t: "Reports & Telemetry",
                icon: BarChart3,
                bullets: ["Analyze daily revenue velocity", "Patient visit & growth trends", "Doctor performance metrics"],
                bg: "bg-[#F4FBF0] border-[#84cc16]/20",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.t} className={`rounded-2xl border p-5 shadow-2xs transition-all duration-300 hover:scale-[1.015] hover:shadow-md ${f.bg}`}>
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-white shadow-2xs text-[#00a878] mb-3">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-[14px] font-bold text-[#0f172a]">{f.t}</h4>
                  <ul className="mt-2.5 space-y-1.5 text-[12px] text-[#475569]">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00a878] shrink-0" />
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

      {/* 💬 4. WhatsApp Automation Banner in Mint Theme */}
      <section id="engagement" className="py-16 border-t border-[#00a878]/15 bg-[#F7FCF9]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#00a878] font-bold">
                WhatsApp Automation
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-[#0f172a]">
                Patient Engagement, Reinvented
              </h2>
              <p className="text-[14px] leading-relaxed text-[#475569]">
                Automate patient reminders and digital prescription delivery over WhatsApp. Reduce no-shows by up to 60%.
              </p>
              
              <div className="space-y-2.5 pt-1">
                {[
                  "Send appointment confirmations & reminders on WhatsApp",
                  "Share digital prescriptions & invoices in 1 click",
                  "Automate routine follow-up checkup reminders",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[13px] text-[#0f172a] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#00a878] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#00a878]/25 bg-white p-5 shadow-lg space-y-3">
                <div className="rounded-xl bg-[#03362a] p-3.5 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="h-5 w-5 text-emerald-400" />
                    <div>
                      <div className="text-[12px] font-bold">WhatsApp Business Gateway</div>
                      <div className="text-[9.5px] text-emerald-200/80 font-mono">Automated Patient Reminders</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[9.5px] font-semibold">Active</span>
                </div>

                <div className="space-y-2 font-mono text-[10.5px]">
                  <div className="rounded-lg bg-[#e6f7f0] border border-[#00a878]/20 p-2.5 text-[#00684a] flex items-center justify-between">
                    <span>✓ Appointment reminder sent to Ava Chen</span>
                    <span className="text-[9px]">09:00 AM</span>
                  </div>
                  <div className="rounded-lg bg-[#e6f7f0] border border-[#00a878]/20 p-2.5 text-[#00684a] flex items-center justify-between">
                    <span>✓ Digital RX PDF shared via WhatsApp</span>
                    <span className="text-[9px]">10:32 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 Practice Control Center Showcase Section (Before Pricing) */}
      <section id="telemetry" className="py-16 border-t border-[#00a878]/15 bg-[#F7FCF9]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#00a878] font-bold">
              Practice Control Center
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-[#0f172a]">
              Unified Clinical Telemetry & Daily Practice Overview
            </h2>
            <p className="text-[13.5px] text-[#64748b]">
              Monitor live patient volume, appointment velocity, active physician schedules, and revenue trends in real-time.
            </p>
          </div>

          {/* Full Showcase Image Card Container */}
          <div className="relative rounded-2xl border border-[#00a878]/30 bg-white p-2.5 sm:p-4 shadow-[0_20px_50px_-10px_rgba(0,168,120,0.18)] transition-all hover:shadow-[0_25px_60px_-10px_rgba(0,168,120,0.25)]">
            <div className="rounded-xl overflow-hidden border border-[#00a878]/20 shadow-sm">
              <img
                src="/dashboard-home-img.png"
                alt="Autonique Practice Control Center"
                className="w-full h-auto object-cover rounded-xl"
                style={{ imageRendering: "auto" }}
              />
            </div>
            
            {/* Highlights Bar below image */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#00a878]/15 text-center font-sans">
              <div className="flex items-center justify-center gap-1.5 text-[12px] font-semibold text-[#00684a] bg-[#e6f7f0] py-2 rounded-xl">
                <CheckCircle2 className="h-4 w-4 text-[#00a878]" /> Live Patient Queue
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[12px] font-semibold text-[#00684a] bg-[#e6f7f0] py-2 rounded-xl">
                <CheckCircle2 className="h-4 w-4 text-[#00a878]" /> Real-time Revenue Trends
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[12px] font-semibold text-[#00684a] bg-[#e6f7f0] py-2 rounded-xl">
                <CheckCircle2 className="h-4 w-4 text-[#00a878]" /> Doctor Duty Telemetry
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[12px] font-semibold text-[#00684a] bg-[#e6f7f0] py-2 rounded-xl">
                <CheckCircle2 className="h-4 w-4 text-[#00a878]" /> 99.9% Operational SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💳 6. Pricing Matrix in Mint Theme */}
      <section id="pricing" className="py-16 border-t border-[#00a878]/15 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#00a878] font-bold">
                Subscription Plans
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl text-[#0f172a]">
                Transparent Subscription Pricing
              </h2>
            </div>

            {/* Annual Billing Toggle */}
            <div className="flex items-center gap-2 bg-[#F7FCF9] p-1 rounded-xl border border-[#00a878]/20 self-start sm:self-auto font-sans">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-3 py-1 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${!annualBilling ? "bg-[#00a878] text-white shadow-2xs" : "text-[#64748b]"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${annualBilling ? "bg-[#00a878] text-white shadow-2xs" : "text-[#64748b]"}`}
              >
                Annual
                <span className="font-mono text-[9px] bg-[#e6f7f0] text-[#00684a] px-1 py-0.2 rounded font-bold">Save 20%</span>
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
                    ? "border-[#00a878] bg-[#F4FBF7] ring-2 ring-[#00a878]/20 shadow-md"
                    : "border-border/60 bg-white"
                }`}
              >
                <div>
                  {t.highlight && (
                    <div className="mb-2.5 inline-flex items-center gap-1 rounded-full bg-[#00a878] px-2.5 py-0.5 font-mono text-[9px] font-bold text-white uppercase tracking-wider shadow-2xs">
                      Most Popular
                    </div>
                  )}
                  <div className="text-[14px] font-bold text-[#0f172a]">{t.n}</div>
                  <div className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0f172a]">
                    {t.p}
                    {t.p !== "Custom" && <span className="ml-1 font-mono text-[11px] text-[#64748b] font-normal">/ mo</span>}
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#64748b]">{t.s}</div>
                  <ul className="mt-4 space-y-2">
                    {t.f.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-[12px] text-[#334155]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00a878] shrink-0" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/dashboard"
                  className={`mt-5 inline-flex h-9.5 w-full items-center justify-center rounded-xl text-[12.5px] font-semibold transition-all cursor-pointer ${
                    t.highlight
                      ? "bg-[#00a878] hover:bg-[#008f66] text-white shadow-2xs"
                      : "border border-border/80 bg-[#F7FCF9] hover:bg-[#e6f7f0]/60 text-[#0f172a]"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Footer */}
      <footer className="mx-auto max-w-6xl px-5 py-8 sm:px-8 border-t border-[#00a878]/15 bg-[#F7FCF9]">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12.5px] text-[#64748b] font-medium">
            <a href="#features" className="hover:text-[#00a878] transition-colors">Features</a>
            <a href="#pricing" className="hover:text-[#00a878] transition-colors">Pricing</a>
            <Link to="/dashboard" className="hover:text-[#00a878] transition-colors">Dashboard</Link>
          </div>
          <div className="text-[11px] text-[#64748b] font-mono">© 2026 Autonique Clinical OS</div>
        </div>
      </footer>

    </div>
  );
}