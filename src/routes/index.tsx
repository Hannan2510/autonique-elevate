import { useState, useEffect, useRef } from "react";
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
  ChevronRight,
  Activity,
  Lock,
  Clock,
  Star,
  Users,
  TrendingUp,
  Award,
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
      {
        property: "og:description",
        content:
          "All-in-one clinical operating system for doctors, practice groups, and hospitals.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

/* ────────────────────────────────────────────────
   Scroll-reveal hook — elements fade+slide up when
   they enter the viewport
──────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ────────────────────────────────────────────────
   Clinical ECG-pulse SVG Logo
──────────────────────────────────────────────── */
function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#14B8A6] text-white shadow-lg shadow-[#0D9488]/30 transition-transform duration-300 hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"
            fill="#14B8A6"
            opacity="0.18"
          />
          <path
            d="M5 12h2.8l1.7-3.5 3.5 7 1.7-3.5H19"
            stroke="#fff"
            strokeWidth="2.1"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-[17px] font-extrabold tracking-tight leading-none text-[#0F172A] font-sans">
          Autonique
        </span>
        <span className="text-[8.5px] text-[#0D9488] font-mono leading-none mt-0.5 uppercase tracking-[0.22em] font-bold">
          Clinical OS
        </span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Landing Page Component
──────────────────────────────────────────────── */
function Landing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  useScrollReveal();

  return (
    <>
      {/* Global scroll-reveal styles injected once */}
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s cubic-bezier(.22,1,.36,1),
                      transform 0.65s cubic-bezier(.22,1,.36,1);
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }
        [data-reveal-delay="1"] { transition-delay: 0.1s; }
        [data-reveal-delay="2"] { transition-delay: 0.2s; }
        [data-reveal-delay="3"] { transition-delay: 0.3s; }
        [data-reveal-delay="4"] { transition-delay: 0.4s; }
        [data-reveal-delay="5"] { transition-delay: 0.5s; }
      `}</style>

      <div className="min-h-screen bg-[#F8FFFE] text-[#0F172A] font-sans selection:bg-[#0D9488]/20 selection:text-[#0F766E] overflow-x-hidden antialiased">

        {/* Subtle teal dot-grid texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.032] bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:24px_24px] z-0" />

        {/* ─── 1. Sticky Header ─── */}
        <header className="sticky top-0 z-50 border-b border-[#0D9488]/15 bg-[#F8FFFE]/92 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
            <Logo />
            <nav className="hidden items-center gap-8 md:flex text-[13.5px] font-semibold text-[#475569]">
              <a href="#features" className="hover:text-[#0D9488] transition-colors">Features</a>
              <a href="#engagement" className="hover:text-[#0D9488] transition-colors">WhatsApp</a>
              <a href="#social-proof" className="hover:text-[#0D9488] transition-colors">Reviews</a>
              <a href="#pricing" className="hover:text-[#0D9488] transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center gap-3">
              <Link to="/dashboard" className="hidden text-[13.5px] font-bold text-[#334155] hover:text-[#0D9488] sm:inline transition-colors px-3 py-1.5 rounded-lg hover:bg-[#0D9488]/10">
                Sign In
              </Link>
              <Link to="/dashboard" className="inline-flex h-9.5 items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0C4A6E] hover:to-[#0F766E] px-4.5 text-[13px] font-bold text-white transition-all duration-300 shadow-md shadow-[#0D9488]/25 active:scale-95 cursor-pointer">
                <Rocket className="h-3.5 w-3.5" />
                <span>Start Free Trial</span>
              </Link>
            </div>
          </div>
        </header>

        {/* ─── 2. Hero ─── */}
        <section id="home" className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#EFFFFE] via-[#F8FFFE] to-[#F8FFFE]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div
                  data-reveal
                  className="inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 bg-[#EFFFFE] px-4 py-1.5 text-[11.5px] font-bold text-[#0F766E] shadow-sm"
                >
                  <span className="flex h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
                  Trusted by 40,000+ Doctors & Clinics Worldwide
                  <ChevronRight className="h-3.5 w-3.5 text-[#0D9488]" />
                </div>

                <h1
                  data-reveal
                  data-reveal-delay="1"
                  className="font-display text-4xl leading-[1.07] font-black tracking-tight sm:text-5xl text-[#0F172A]"
                >
                  Simplify Your Practice with{" "}
                  <span className="bg-gradient-to-r from-[#0F766E] via-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent">
                    Powerful Clinical OS
                  </span>
                </h1>

                <p
                  data-reveal
                  data-reveal-delay="2"
                  className="text-[15px] leading-relaxed text-[#475569] max-w-lg font-medium"
                >
                  All-in-one clinical software for doctors, practice groups, and
                  hospitals — scheduling, EMR, prescriptions, billing, and
                  WhatsApp automation in one platform.
                </p>

                <div
                  data-reveal
                  data-reveal-delay="3"
                  className="flex flex-wrap items-center gap-3.5 pt-1"
                >
                  <Link
                    to="/dashboard"
                    className="inline-flex h-11.5 items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0A5754] hover:to-[#0F766E] px-6 text-[13.5px] font-bold text-white shadow-lg shadow-[#0D9488]/25 transition-all duration-300 cursor-pointer active:scale-98"
                  >
                    <Rocket className="h-4 w-4" />
                    Start Free Trial
                  </Link>
                  <a
                    href="#pricing"
                    className="inline-flex h-11.5 items-center gap-2 rounded-xl border border-[#0D9488]/30 bg-white hover:bg-[#EFFFFE]/70 px-6 text-[13.5px] font-bold text-[#0F766E] shadow-sm transition-all"
                  >
                    <Calendar className="h-4 w-4 text-[#0D9488]" />
                    Book a Demo
                  </a>
                </div>

                <div
                  data-reveal
                  data-reveal-delay="4"
                  className="flex flex-wrap items-center gap-5 text-[11.5px] font-mono font-medium text-[#64748B] pt-1"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0D9488]" />
                    No credit card needed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0D9488]" />
                    14-day full trial
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-[#0D9488]" />
                    HIPAA & GDPR compliant
                  </span>
                </div>
              </div>

              {/* Right — Tilted Dashboard Window with cropped image */}
              <div data-reveal data-reveal-delay="2" className="lg:col-span-6 space-y-4">
                <div className="relative rounded-2xl border border-[#0D9488]/30 bg-white shadow-[0_30px_70px_-15px_rgba(13,148,136,0.25)] overflow-hidden transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] max-w-md mx-auto lg:max-w-none">
                  {/* Dark teal window bar */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#022C2C] text-white">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#14B8A6]" />
                    </div>
                    <span className="font-mono text-[10.5px] font-bold text-[#99F6E4]">
                      Autonique Clinical OS · Live
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
                  </div>
                  {/* Cropped dashboard image — hides bottom icons */}
                  <div className="overflow-hidden" style={{ maxHeight: "340px" }}>
                    <img
                      src="/dashboard-home-img.png"
                      alt="Autonique Clinical OS Dashboard"
                      className="w-full h-auto object-cover object-top"
                      style={{ imageRendering: "auto" }}
                    />
                  </div>
                </div>

                {/* Stats strip */}
                <div data-reveal data-reveal-delay="3" className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { v: "40K+", l: "Doctors" },
                    { v: "25K+", l: "Clinics" },
                    { v: "8M+", l: "Patients" },
                    { v: "99.9%", l: "Uptime" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl bg-white border border-[#0D9488]/15 p-2.5 shadow-sm">
                      <div className="font-display text-xl font-black text-[#0F766E]">{s.v}</div>
                      <div className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. Feature Cards ─── */}
        <section id="features" className="py-20 border-t border-[#0D9488]/12 bg-white relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="text-center max-w-xl mx-auto mb-14 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] font-bold">
                Core Clinical Infrastructure
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A]">
                Smart Features That Power Your Practice
              </h2>
              <p className="text-[14px] text-[#475569] font-medium">
                Purpose-built tools for modern healthcare professionals
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { t: "EMR & Vitals Capture", icon: FileSpreadsheet, b: ["Patient history & ICD-10 notes", "Structured treatment plans", "Digital clinical forms"], delay: "1", bg: "bg-[#F0FDFA] border-[#14B8A6]/30", iconBg: "text-[#0D9488]", iconRing: "ring-[#14B8A6]/20" },
                { t: "Smart Scheduling", icon: Calendar, b: ["WhatsApp & SMS reminders", "Token & queue management", "Multi-doctor calendars"], delay: "2", bg: "bg-[#EEF2FF] border-[#818CF8]/25", iconBg: "text-[#6366F1]", iconRing: "ring-[#818CF8]/20" },
                { t: "Prescription Engine", icon: Pill, b: ["Preloaded medicine database", "Digital doctor signatures", "1-click PDF generation"], delay: "3", bg: "bg-[#FFF7ED] border-[#FB923C]/25", iconBg: "text-[#EA580C]", iconRing: "ring-[#FB923C]/20" },
                { t: "Billing & Stripe", icon: Receipt, b: ["Branded clinic invoices", "Partial payment tracking", "Stripe payment gateway"], delay: "1", bg: "bg-[#FDF2F8] border-[#E879F9]/20", iconBg: "text-[#A21CAF]", iconRing: "ring-[#E879F9]/20" },
                { t: "Inventory & Pharmacy", icon: Boxes, b: ["Medicine stock management", "Supplier purchase orders", "Expiry & batch tracking"], delay: "2", bg: "bg-[#FFFBEB] border-[#FCD34D]/30", iconBg: "text-[#B45309]", iconRing: "ring-[#FCD34D]/20" },
                { t: "Revenue Analytics", icon: BarChart3, b: ["Daily revenue telemetry", "Patient growth trends", "Doctor performance KPIs"], delay: "3", bg: "bg-[#F0F9FF] border-[#38BDF8]/25", iconBg: "text-[#0284C7]", iconRing: "ring-[#38BDF8]/20" },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.t}
                    data-reveal
                    data-reveal-delay={f.delay}
                    className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${f.bg}`}
                  >
                    <div className={`grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm ring-1 ${f.iconRing} ${f.iconBg} mb-4`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0F172A]">{f.t}</h3>
                    <ul className="mt-3 space-y-2 text-[12.5px] text-[#475569] font-medium">
                      {f.b.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <CheckCircle2 className={`h-4 w-4 shrink-0 ${f.iconBg}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 4. WhatsApp Automation ─── */}
        <section id="engagement" className="py-20 border-t border-[#0D9488]/12 bg-[#F8FFFE] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div data-reveal className="lg:col-span-5 space-y-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] font-bold">
                  WhatsApp Automation
                </span>
                <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A]">
                  Patient Engagement, Reinvented
                </h2>
                <p className="text-[14.5px] leading-relaxed text-[#475569] font-medium">
                  Automate appointment confirmations, reminders, and prescription delivery on WhatsApp. Reduce no-shows by up to 60%.
                </p>
                <ul className="space-y-3 pt-1">
                  {[
                    "Send instant appointment reminders on WhatsApp",
                    "Share digital prescriptions & invoices in one click",
                    "Automate routine follow-up checkup messages",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-[#0F172A] font-semibold">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0D9488] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div data-reveal data-reveal-delay="2" className="lg:col-span-7">
                <div className="rounded-2xl border border-[#0D9488]/25 bg-white p-6 shadow-xl space-y-4">
                  <div className="rounded-xl bg-[#022C2C] p-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-[#2DD4BF]" />
                      <div>
                        <div className="text-[13px] font-bold">WhatsApp Business Gateway</div>
                        <div className="text-[10px] text-teal-200/70 font-mono">Automated Patient Messaging</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#14B8A6]/20 text-[#2DD4BF] font-mono text-[10px] font-bold">Active</span>
                  </div>
                  <div className="space-y-2.5 font-mono text-[11px]">
                    {[
                      { m: "✓ Appointment reminder sent to Ava Chen", t: "09:00 AM" },
                      { m: "✓ Prescription PDF shared to James Malik", t: "10:15 AM" },
                      { m: "✓ Follow-up checkup reminder — Dr. Reyes", t: "10:32 AM" },
                    ].map((msg) => (
                      <div key={msg.t} className="rounded-xl bg-[#F0FDFA] border border-[#14B8A6]/25 px-3.5 py-2.5 text-[#0F766E] flex items-center justify-between font-semibold">
                        <span>{msg.m}</span>
                        <span className="text-[9.5px] text-[#64748B] shrink-0 ml-2">{msg.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. Social Proof / Testimonials ─── */}
        <section id="social-proof" className="py-20 border-t border-[#0D9488]/12 bg-white relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="text-center max-w-lg mx-auto mb-14 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] font-bold">
                Trusted by Healthcare Professionals
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A]">
                What Doctors Are Saying
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: "Dr. Sarah Ahmed", role: "General Practitioner, Karachi", quote: "Autonique transformed how we manage our clinic. Patient no-shows dropped by 55% after using WhatsApp reminders.", stars: 5, delay: "1", bg: "bg-[#F0FDFA] border-[#14B8A6]/25", avatarGrad: "from-[#0F766E] to-[#14B8A6]", border: "border-t border-[#14B8A6]/15" },
                { name: "Dr. Farhan Malik", role: "Orthopedic Surgeon, Lahore", quote: "The billing and prescription modules save us 3+ hours every single day. It's the best investment we've made for our practice.", stars: 5, delay: "2", bg: "bg-[#EEF2FF] border-[#818CF8]/25", avatarGrad: "from-[#6366F1] to-[#818CF8]", border: "border-t border-[#818CF8]/15" },
                { name: "Dr. Nadia Reyes", role: "Clinic Director, Islamabad", quote: "From EMR to payments — everything is in one place. Our staff onboarded in just 2 days. Absolutely seamless.", stars: 5, delay: "3", bg: "bg-[#FFF7ED] border-[#FB923C]/25", avatarGrad: "from-[#EA580C] to-[#FB923C]", border: "border-t border-[#FB923C]/15" },
              ].map((t) => (
                <div
                  key={t.name}
                  data-reveal
                  data-reveal-delay={t.delay}
                  className={`rounded-2xl border ${t.bg} p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4`}
                >
                  <div className="flex gap-0.5">
                    {Array(t.stars).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-[#334155] font-medium flex-1">"{t.quote}"</p>
                  <div className={`flex items-center gap-2.5 pt-3 ${t.border}`}>
                    <div className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${t.avatarGrad} text-white font-bold text-[13px]`}>
                      {t.name[3]}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#0F172A]">{t.name}</div>
                      <div className="text-[11px] text-[#64748B] font-medium">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. Trust / Security Strip ─── */}
        <section className="py-12 border-t border-[#0D9488]/12 bg-white relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, t: "HIPAA Compliant", s: "End-to-end encrypted patient data", bg: "bg-[#F0FDFA] border-[#14B8A6]/25", ic: "text-[#0D9488]" },
                { icon: Lock, t: "GDPR Certified", s: "Full data privacy compliance", bg: "bg-[#EEF2FF] border-[#818CF8]/25", ic: "text-[#6366F1]" },
                { icon: Clock, t: "99.9% Uptime SLA", s: "Zero downtime guarantee", bg: "bg-[#FFF7ED] border-[#FB923C]/25", ic: "text-[#EA580C]" },
                { icon: Award, t: "ISO 27001", s: "Enterprise security standard", bg: "bg-[#FDF2F8] border-[#E879F9]/20", ic: "text-[#A21CAF]" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.t}
                    data-reveal
                    data-reveal-delay={String(i + 1)}
                    className={`flex items-start gap-3 p-4 rounded-2xl border ${item.bg}`}
                  >
                    <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white shadow-sm ${item.ic}`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#0F172A]">{item.t}</div>
                      <div className="text-[11px] text-[#64748B] font-medium">{item.s}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 8. Pricing ─── */}
        <section id="pricing" className="py-20 border-t border-[#0D9488]/12 bg-[#F8FFFE] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
              <div data-reveal>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] font-bold">
                  Subscription Plans
                </span>
                <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A]">
                  Transparent & Predictable Pricing
                </h2>
              </div>

              {/* Billing Toggle */}
              <div data-reveal className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-[#0D9488]/20 shadow-sm self-start sm:self-auto">
                <button
                  onClick={() => setAnnualBilling(false)}
                  className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${!annualBilling ? "bg-[#0F766E] text-white shadow-sm" : "text-[#64748B]"}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setAnnualBilling(true)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${annualBilling ? "bg-[#0F766E] text-white shadow-sm" : "text-[#64748B]"}`}
                >
                  Annual
                  <span className="font-mono text-[9.5px] bg-[#EFFFFE] text-[#0F766E] px-1.5 py-0.2 rounded font-bold">Save 20%</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { n: "Starter", p: annualBilling ? "$39" : "$49", s: "For solo doctor practices.", f: ["Smart calendar scheduling", "Structured patient records", "Automated email reminders", "Standard revenue reports"], delay: "1" },
                { n: "Growth", p: annualBilling ? "$99" : "$129", s: "For growing clinic teams.", f: ["Everything in Starter", "Stripe payment gateway", "WhatsApp automation", "Priority 24/7 support"], highlight: true, delay: "2" },
                { n: "Enterprise", p: "Custom", s: "For hospital groups.", f: ["Custom EMR integrations", "Immutable audit logs", "99.99% SLA & dedicated CSM", "Custom BAA — HIPAA"], delay: "3" },
              ].map((t) => (
                <div
                  key={t.n}
                  data-reveal
                  data-reveal-delay={t.delay}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                    t.highlight
                      ? "border-[#0D9488] bg-white ring-2 ring-[#0D9488]/20 shadow-xl"
                      : "border-[#0D9488]/15 bg-white shadow-sm hover:shadow-lg"
                  }`}
                >
                  <div>
                    {t.highlight && (
                      <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#0F766E] to-[#0D9488] px-3 py-0.5 font-mono text-[9.5px] font-bold text-white uppercase tracking-wider shadow-sm">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-[15px] font-bold text-[#0F172A]">{t.n}</h3>
                    <div className="mt-1 font-display text-3xl font-extrabold tracking-tight text-[#0F172A]">
                      {t.p}
                      {t.p !== "Custom" && (
                        <span className="ml-1 font-mono text-[11.5px] text-[#64748B] font-normal">/ mo</span>
                      )}
                    </div>
                    <div className="mt-0.5 text-[12px] text-[#64748B] font-medium">{t.s}</div>
                    <ul className="mt-5 space-y-2.5">
                      {t.f.map((i) => (
                        <li key={i} className="flex items-center gap-2 text-[12.5px] text-[#334155] font-medium">
                          <CheckCircle2 className="h-4 w-4 text-[#0D9488] shrink-0" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/dashboard"
                    className={`mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl text-[13px] font-bold transition-all duration-300 cursor-pointer ${
                      t.highlight
                        ? "bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0A5754] hover:to-[#0F766E] text-white shadow-lg shadow-[#0D9488]/25"
                        : "border border-[#0D9488]/25 bg-[#F8FFFE] hover:bg-[#EFFFFE] text-[#0F766E]"
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 9. CTA Banner ─── */}
        <section className="py-16 border-t border-[#0D9488]/12 bg-white relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div
              data-reveal
              className="rounded-3xl bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#14B8A6] p-10 text-center shadow-2xl shadow-[#0D9488]/25 relative overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

              <h2 className="font-display text-3xl font-black text-white sm:text-4xl relative z-10">
                Ready to Modernise Your Clinic?
              </h2>
              <p className="mt-3 text-[15px] text-teal-100 font-medium max-w-lg mx-auto relative z-10">
                Join 40,000+ doctors already running their practice on Autonique.
                No contracts, cancel any time.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4 relative z-10">
                <Link
                  to="/dashboard"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-white text-[#0F766E] hover:bg-teal-50 px-7 text-[13.5px] font-bold shadow-md transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <Rocket className="h-4 w-4" />
                  Start Free Trial
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/30 text-white hover:bg-white/10 px-7 text-[13.5px] font-bold transition-all"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. Footer ─── */}
        <footer className="border-t border-[#0D9488]/15 bg-[#F8FFFE] relative z-10">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <Logo />
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-[#64748B] font-semibold">
                <a href="#features" className="hover:text-[#0D9488] transition-colors">Features</a>
                <a href="#engagement" className="hover:text-[#0D9488] transition-colors">WhatsApp</a>
                <a href="#social-proof" className="hover:text-[#0D9488] transition-colors">Reviews</a>
                <a href="#pricing" className="hover:text-[#0D9488] transition-colors">Pricing</a>
                <Link to="/dashboard" className="hover:text-[#0D9488] transition-colors">Dashboard</Link>
              </div>
              <div className="text-[11px] text-[#94A3B8] font-mono">
                © 2026 Autonique Clinical OS · All rights reserved
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}