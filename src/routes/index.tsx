import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Shield,
  CheckCircle2,
  Rocket,
  MessageSquare,
  FileSpreadsheet,
  Pill,
  Receipt,
  Boxes,
  BarChart3,
  Stethoscope,
  ChevronRight,
  Zap,
  Activity,
  Globe,
  Sparkles,
  Lock,
  Clock,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autonique — Enterprise Clinical Operating System" },
      {
        name: "description",
        content:
          "The modern clinical OS for doctors and practice groups. Unifies patient scheduling, EMR, prescriptions, billing, and WhatsApp patient automation.",
      },
      { property: "og:title", content: "Autonique — Enterprise Clinical OS" },
      { property: "og:description", content: "All-in-one clinical operating system for doctors, practice groups, and hospitals." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

/* 🎨 Professional UI/UX Custom Logo: Interlocking Clinical Pulse Cross & Shield */
function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#059669] text-white shadow-md shadow-[#059669]/25 transition-transform duration-300 hover:scale-105">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#34D399]">
          <path d="M12 2v20M2 12h20" stroke="currentColor" opacity="0.3" strokeWidth="1.5" />
          <path d="M12 4a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8z" opacity="0.2" fill="#10B981" />
          <path d="M7 12h2.5l1.5-3 3 6 1.5-3H17" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-[17px] font-extrabold tracking-tight leading-none text-[#0F172A] font-sans">
          Autonique
        </span>
        <span className="text-[8.5px] text-[#059669] font-mono leading-none mt-0.5 uppercase tracking-[0.2em] font-bold">
          Clinical OS
        </span>
      </div>
    </div>
  );
}

function Landing() {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <div className="min-h-screen bg-[#FAFDFB] text-[#0F172A] font-sans selection:bg-[#10B981]/20 selection:text-[#064E3B] overflow-x-hidden antialiased">
      
      {/* Background Subtle Grid Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#047857_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* 🌟 1. Professional Header Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-[#059669]/15 bg-[#FAFDFB]/90 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo />

          {/* Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex text-[13.5px] font-semibold text-[#475569] font-sans">
            <a href="#features" className="hover:text-[#059669] transition-colors">Features</a>
            <a href="#engagement" className="hover:text-[#059669] transition-colors">WhatsApp Automation</a>
            <a href="#pricing" className="hover:text-[#059669] transition-colors">Pricing</a>
          </nav>

          {/* Header Action CTAs */}
          <div className="flex items-center gap-3 font-sans">
            <Link to="/dashboard" className="hidden text-[13.5px] font-bold text-[#334155] hover:text-[#059669] sm:inline transition-colors px-3 py-1.5 rounded-lg hover:bg-[#059669]/10">
              Sign In
            </Link>
            <Link to="/dashboard" className="inline-flex h-9.5 items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#047857] via-[#059669] to-[#10B981] hover:from-[#064E3B] hover:to-[#059669] px-4.5 text-[13px] font-bold text-white transition-all duration-300 shadow-md shadow-[#059669]/25 active:scale-95 cursor-pointer">
              <Rocket className="h-4 w-4" />
              <span>Start Free Trial</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 🚀 2. Designer Hero Section — Deep Forest & Wasabi Mint Palette */}
      <section id="home" className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ECFDF5] via-[#FAFDFB] to-[#FAFDFB]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (6 cols): Copy & CTAs */}
            <div className="lg:col-span-6 space-y-5 text-left">
              
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#059669]/25 bg-[#ECFDF5] px-3.5 py-1 text-[11.5px] font-bold text-[#064E3B] shadow-2xs backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Trusted by 40,000+ Doctors & Clinics Worldwide</span>
                <ChevronRight className="h-3.5 w-3.5 text-[#059669]" />
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl leading-[1.08] font-black tracking-tight sm:text-5xl lg:text-5xl text-[#0F172A]">
                Simplify Your Practice with <span className="bg-gradient-to-r from-[#047857] via-[#059669] to-[#10B981] bg-clip-text text-transparent">Powerful Clinical OS</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[15px] leading-relaxed text-[#475569] max-w-lg font-sans font-medium">
                All-in-one clinical software for doctors, practice groups, and hospitals to manage appointments, EMR, prescriptions, billing, and automated patient communication.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 font-sans">
                <Link to="/dashboard" className="inline-flex h-11.5 items-center gap-2 rounded-xl bg-gradient-to-r from-[#047857] via-[#059669] to-[#10B981] hover:from-[#064E3B] hover:to-[#059669] px-6 text-[13.5px] font-bold text-white transition-all duration-300 shadow-lg shadow-[#059669]/25 cursor-pointer active:scale-98">
                  <Rocket className="h-4 w-4" />
                  <span>Start Free Trial</span>
                </Link>
                <a href="#pricing" className="inline-flex h-11.5 items-center gap-2 rounded-xl border border-[#059669]/30 bg-white hover:bg-[#ECFDF5]/60 px-6 text-[13.5px] font-bold text-[#064E3B] transition-all shadow-2xs">
                  <Calendar className="h-4 w-4 text-[#059669]" />
                  <span>Book a Demo</span>
                </a>
              </div>

              {/* Quick Trust Checks */}
              <div className="flex items-center gap-5 text-[11.5px] font-mono font-medium text-[#64748B] pt-1">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#059669]" /> No credit card needed</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#059669]" /> 14-day full trial</span>
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-[#059669]" /> HIPAA & GDPR</span>
              </div>
            </div>

            {/* Right Column (6 cols): 3D Isometric Tilted Window Showcase */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Tilted Desktop Window */}
              <div className="relative rounded-2xl border border-[#059669]/30 bg-white shadow-[0_25px_60px_-15px_rgba(5,150,105,0.22)] overflow-hidden transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] max-w-md mx-auto lg:max-w-none">
                
                {/* Window Dark Pine Header Bar */}
                <div className="flex items-center justify-between border-b border-border/60 px-3.5 py-2.5 bg-[#022C22] text-white">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                  </div>
                  <span className="font-mono text-[10.5px] font-bold text-[#A7F3D0]">Autonique Clinical OS Telemetry</span>
                  <span className="font-mono text-[9px] text-[#34D399] bg-[#10B981]/20 px-1.5 py-0.2 rounded font-bold">Live</span>
                </div>

                {/* High-Resolution Screenshot Image inside Window */}
                <img
                  src="/dashboard-home-img.png"
                  alt="Autonique Clinical OS Dashboard"
                  className="w-full h-auto object-cover rounded-b-2xl shadow-inner border-t border-white/10"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              {/* Compact Stats Strip Underneath */}
              <div className="grid grid-cols-4 gap-2 text-center pt-1 font-sans">
                <div className="p-2 rounded-xl bg-white border border-[#059669]/15 shadow-2xs">
                  <div className="font-display text-2xl font-black text-[#047857]">40K+</div>
                  <div className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">DOCTORS</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#059669]/15 shadow-2xs">
                  <div className="font-display text-2xl font-black text-[#047857]">25K+</div>
                  <div className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">CLINICS</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#059669]/15 shadow-2xs">
                  <div className="font-display text-2xl font-black text-[#047857]">8M+</div>
                  <div className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">PATIENTS</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#059669]/15 shadow-2xs">
                  <div className="font-display text-2xl font-black text-[#047857]">99.9%</div>
                  <div className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">UPTIME</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ✨ 3. Platform Features Grid in Modern Deep & Lime Green Palette */}
      <section id="features" className="py-20 border-t border-[#059669]/15 bg-white relative z-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#059669] font-bold">
              Core Clinical Infrastructure
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A]">
              Smart Features That Power Your Practice
            </h2>
            <p className="text-[14px] text-[#475569] font-medium">
              Purpose-built tools for modern healthcare professionals and medical groups
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                t: "Capture Vitals & EMR",
                icon: FileSpreadsheet,
                bullets: ["Capture patient vitals & history", "Clinical diagnosis & ICD-10 notes", "Structured treatment plans"],
                bg: "bg-[#ECFDF5] border-[#059669]/20",
              },
              {
                t: "Appointment Scheduling",
                icon: Calendar,
                bullets: ["Automated WhatsApp & SMS reminders", "Manage patient queue & tokens", "Multi-provider doctor calendars"],
                bg: "bg-[#F4FBF0] border-[#84CC16]/25",
              },
              {
                t: "Prescription Management",
                icon: Pill,
                bullets: ["Preloaded medicine database", "Digital doctor signatures", "1-click prescription print & PDF"],
                bg: "bg-[#ECFDF5] border-[#059669]/20",
              },
              {
                t: "Billing & Stripe Invoicing",
                icon: Receipt,
                bullets: ["Create branded clinic bills", "Track partial payments & balances", "Integrated Stripe payment gateway"],
                bg: "bg-[#EAFBF7] border-[#14B8A6]/25",
              },
              {
                t: "Inventory & Pharmacy",
                icon: Boxes,
                bullets: ["Manage medicine stock & flow", "Supplier purchase orders", "Batch & expiry tracking"],
                bg: "bg-[#ECFDF5] border-[#059669]/20",
              },
              {
                t: "Reports & Analytics",
                icon: BarChart3,
                bullets: ["Analyze daily revenue velocity", "Patient visit & growth trends", "Doctor performance metrics"],
                bg: "bg-[#F4FBF0] border-[#84CC16]/25",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.t} className={`rounded-2xl border p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${f.bg}`}>
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-2xs text-[#059669] mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0F172A] font-sans">{f.t}</h3>
                  <ul className="mt-3 space-y-2 text-[12.5px] text-[#475569] font-medium">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0" />
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

      {/* 💬 4. WhatsApp Automation Section */}
      <section id="engagement" className="py-20 border-t border-[#059669]/15 bg-[#FAFDFB] relative z-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#059669] font-bold">
                WhatsApp Automation
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A]">
                Patient Engagement, Reinvented
              </h2>
              <p className="text-[14.5px] leading-relaxed text-[#475569] font-medium">
                Automate appointment confirmations, reminders, and digital prescription delivery over WhatsApp. Reduce no-shows by up to 60%.
              </p>
              
              <div className="space-y-3 pt-1">
                {[
                  "Send instant appointment reminders on WhatsApp",
                  "Share digital prescriptions & invoices in 1 click",
                  "Automate routine follow-up checkup reminders",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[13.5px] text-[#0F172A] font-semibold">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#059669] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#059669]/25 bg-white p-6 shadow-xl space-y-4">
                <div className="rounded-xl bg-[#022C22] p-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5.5 w-5.5 text-[#34D399]" />
                    <div>
                      <div className="text-[13px] font-bold">WhatsApp Business Gateway</div>
                      <div className="text-[10px] text-emerald-200/80 font-mono">Automated Patient Messaging</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-[#10B981]/20 text-[#34D399] font-mono text-[10px] font-bold">Active</span>
                </div>

                <div className="space-y-2.5 font-mono text-[11px]">
                  <div className="rounded-xl bg-[#ECFDF5] border border-[#059669]/20 p-3 text-[#064E3B] flex items-center justify-between font-medium">
                    <span>✓ Appointment reminder sent to Ava Chen</span>
                    <span className="text-[9.5px]">09:00 AM</span>
                  </div>
                  <div className="rounded-xl bg-[#ECFDF5] border border-[#059669]/20 p-3 text-[#064E3B] flex items-center justify-between font-medium">
                    <span>✓ Digital RX PDF shared via WhatsApp</span>
                    <span className="text-[9.5px]">10:32 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📱 5. Mobile App & WhatsApp Bot Banner Showcase (Directly before Pricing) */}
      <section className="py-12 border-t border-[#059669]/15 bg-[#FAFDFB] relative z-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rounded-3xl border border-[#059669]/25 bg-white overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
            <img
              src="/whatsapp-bot-section.png"
              alt="Manage with Autonique — WhatsApp Bot Automation & Mobile App"
              className="w-full h-auto object-cover"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* 💳 6. Pricing Matrix in Deep Forest & Wasabi Palette */}
      <section id="pricing" className="py-20 border-t border-[#059669]/15 bg-white relative z-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#059669] font-bold">
                Subscription Matrix
              </span>
              <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A]">
                Transparent & Predictable Pricing
              </h2>
            </div>

            {/* Annual Billing Toggle */}
            <div className="flex items-center gap-2 bg-[#FAFDFB] p-1.5 rounded-xl border border-[#059669]/20 self-start sm:self-auto font-sans">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${!annualBilling ? "bg-[#047857] text-white shadow-2xs" : "text-[#64748B]"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${annualBilling ? "bg-[#047857] text-white shadow-2xs" : "text-[#64748B]"}`}
              >
                Annual
                <span className="font-mono text-[9.5px] bg-[#ECFDF5] text-[#064E3B] px-1.5 py-0.2 rounded font-bold">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: "Starter", p: annualBilling ? "$39" : "$49", s: "For solo doctor practices.", f: ["Smart calendar scheduling", "Structured patient records", "Automated email reminders", "Standard revenue reports"] },
              { n: "Growth", p: annualBilling ? "$99" : "$129", s: "For growing practice teams.", f: ["Everything in Starter", "Stripe payment gateway", "WhatsApp notifications", "Priority 24/7 support"], highlight: true },
              { n: "Enterprise", p: "Custom", s: "For multi-campus hospital groups.", f: ["Custom EMR integrations", "Immutable audit telemetry", "99.99% SLA & dedicated CSM", "Custom BAA (HIPAA)"] },
            ].map((t) => (
              <div
                key={t.n}
                className={`rounded-2xl border p-6 transition-all duration-300 flex flex-col justify-between ${
                  t.highlight
                    ? "border-[#059669] bg-[#ECFDF5]/50 ring-2 ring-[#059669]/25 shadow-xl"
                    : "border border-border/80 bg-white"
                }`}
              >
                <div>
                  {t.highlight && (
                    <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-[#047857] px-3 py-0.5 font-mono text-[9.5px] font-bold text-white uppercase tracking-wider shadow-2xs">
                      Most Popular Plan
                    </div>
                  )}
                  <h3 className="text-[15px] font-bold text-[#0F172A] font-sans">{t.n}</h3>
                  <div className="mt-1 font-display text-3xl font-extrabold tracking-tight text-[#0F172A]">
                    {t.p}
                    {t.p !== "Custom" && <span className="ml-1 font-mono text-[11.5px] text-[#64748B] font-normal">/ mo</span>}
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#64748B] font-medium">{t.s}</div>
                  <ul className="mt-5 space-y-2.5">
                    {t.f.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-[12.5px] text-[#334155] font-medium">
                        <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/dashboard"
                  className={`mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                    t.highlight
                      ? "bg-gradient-to-r from-[#047857] via-[#059669] to-[#10B981] hover:from-[#064E3B] hover:to-[#059669] text-white shadow-md shadow-[#059669]/25"
                      : "border border-[#059669]/30 bg-[#FAFDFB] hover:bg-[#ECFDF5] text-[#0F172A]"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 7. Official Designer Footer */}
      <footer className="mx-auto max-w-6xl px-5 py-10 sm:px-8 border-t border-[#059669]/15 bg-[#FAFDFB] relative z-10">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-[#64748B] font-semibold">
            <a href="#features" className="hover:text-[#059669] transition-colors">Features</a>
            <a href="#engagement" className="hover:text-[#059669] transition-colors">WhatsApp</a>
            <a href="#pricing" className="hover:text-[#059669] transition-colors">Pricing</a>
            <Link to="/dashboard" className="hover:text-[#059669] transition-colors">Dashboard</Link>
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">© 2026 Autonique Clinical OS · All Rights Reserved</div>
        </div>
      </footer>

    </div>
  );
}