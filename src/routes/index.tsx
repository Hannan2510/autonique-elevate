import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Shield,
  CheckCircle2,
  Rocket,
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
  AlertCircle,
  Sparkles,
  Bot,
  Zap,
  Check,
  ChevronDown,
  Layers,
  Server,
  Database,
  Globe,
  KeyRound,
  FileText,
  UserCheck,
  HelpCircle,
  ArrowRight,
  RefreshCw,
  PhoneCall,
  MessageSquare,
  Bell,
} from "lucide-react";
import { ThemeToggle } from "@/components/app/AppShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autonique — Enterprise Clinical Operating System" },
      {
        name: "description",
        content:
          "The modern clinical OS for doctors, practice groups, and hospitals. Unifies patient scheduling, EMR, prescriptions, billing, and WhatsApp patient automation.",
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

/* Scroll Reveal Hook */
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

/* Clinical ECG-pulse SVG Logo */
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
        <span className="text-[17px] font-extrabold tracking-tight leading-none text-[#0F172A] dark:text-white font-sans">
          Autonique
        </span>
        <span className="text-[8.5px] text-[#0D9488] dark:text-[#2DD4BF] font-mono leading-none mt-0.5 uppercase tracking-[0.22em] font-bold">
          Clinical OS
        </span>
      </div>
    </div>
  );
}

function Landing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [activePreviewTab, setActivePreviewTab] = useState<"dashboard" | "crm" | "appointments" | "emr" | "billing">("dashboard");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useScrollReveal();

  return (
    <>
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

      <div className="min-h-screen bg-[#F8FFFE] dark:bg-[#061514] text-[#0F172A] dark:text-[#E2F1F0] font-sans selection:bg-[#0D9488]/20 selection:text-[#0F766E] overflow-x-clip antialiased">
        <div className="fixed inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06] bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:24px_24px] z-0" />

        {/* ─── 1. Constant Sticky Header with Depth ─── */}
        <header className="sticky top-0 z-[100] border-none bg-[#F8FFFE]/95 dark:bg-[#061514]/95 backdrop-blur-xl shadow-md shadow-[#0D9488]/10 dark:shadow-black/60 transition-all">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
            <Logo />
            <nav className="hidden items-center gap-8 md:flex text-[13.5px] font-semibold text-[#475569] dark:text-[#94A3B8]">
              <a href="#problem" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Why Change</a>
              <a href="#platform" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Platform</a>
              <a href="#workflow" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Workflow</a>
              <a href="#preview" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Product</a>
              <a href="#pricing" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link to="/dashboard" className="hidden text-[13.5px] font-bold text-[#334155] dark:text-[#E2F1F0] hover:text-[#0D9488] dark:hover:text-[#2DD4BF] sm:inline transition-colors px-3 py-1.5 rounded-lg hover:bg-[#0D9488]/10">
                Sign In
              </Link>
              <Link to="/dashboard" className="inline-flex h-9.5 items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0C4A6E] hover:to-[#0F766E] px-4.5 text-[13px] font-bold text-white transition-all duration-300 shadow-md shadow-[#0D9488]/25 active:scale-95 cursor-pointer">
                <Rocket className="h-3.5 w-3.5" />
                <span>Start Free Trial</span>
              </Link>
            </div>
          </div>
        </header>

        {/* ─── 2. Hero Section ─── */}
        <section id="home" className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#EFFFFE]/60 via-[#F8FFFE] to-[#F8FFFE] dark:from-[#0B2523]/80 dark:via-[#061514] dark:to-[#061514]">
          {/* Ambient background teal glow circle */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0D9488]/12 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6 text-left">
                <div
                  data-reveal
                  className="inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 dark:border-[#0D9488]/40 bg-[#EFFFFE] dark:bg-[#0F2F2C] px-4 py-1.5 text-[11.5px] font-bold text-[#0F766E] dark:text-[#2DD4BF] shadow-xs"
                >
                  <span className="flex h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
                  Trusted by 40,000+ Doctors & Clinics Worldwide
                  <ChevronRight className="h-3.5 w-3.5 text-[#0D9488] dark:text-[#2DD4BF]" />
                </div>

                <h1
                  data-reveal
                  data-reveal-delay="1"
                  className="font-display text-4xl leading-[1.07] font-black tracking-tight sm:text-5xl text-[#0F172A] dark:text-white"
                >
                  Simplify Your Practice with{" "}
                  <span className="bg-gradient-to-r from-[#0F766E] via-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent">
                    Powerful Clinical OS
                  </span>
                </h1>

                <p
                  data-reveal
                  data-reveal-delay="2"
                  className="text-[15px] leading-relaxed text-[#475569] dark:text-[#A0B0AD] max-w-lg font-medium"
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
                    className="inline-flex h-11.5 items-center gap-2 rounded-xl border border-[#0D9488]/30 dark:border-[#0D9488]/50 bg-white dark:bg-[#0B201E] hover:bg-[#EFFFFE]/70 dark:hover:bg-[#0F2F2C] px-6 text-[13.5px] font-bold text-[#0F766E] dark:text-[#2DD4BF] shadow-xs transition-all"
                  >
                    <Calendar className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                    Book a Demo
                  </a>
                </div>

                <div
                  data-reveal
                  data-reveal-delay="4"
                  className="flex flex-wrap items-center gap-5 text-[11.5px] font-mono font-medium text-[#64748B] dark:text-[#809995] pt-1"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                    No credit card needed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                    14-day full trial
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                    HIPAA & GDPR compliant
                  </span>
                </div>
              </div>

              {/* Tilted Ecosystem Graphic Window */}
              <div data-reveal data-reveal-delay="2" className="lg:col-span-6 space-y-4">
                <div className="relative rounded-[16px] border border-[#0D9488]/20 dark:border-[#0D9488]/40 bg-white dark:bg-[#0B201E] shadow-[0_30px_70px_-15px_rgba(13,148,136,0.25)] overflow-hidden transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] max-w-md mx-auto lg:max-w-none">
                  {/* Light Theme Ecosystem Image */}
                  <img
                    src="/ecosystem-light.png"
                    alt="Autonique Connected Clinic Operating System Ecosystem (Light)"
                    className="block dark:hidden w-full h-auto object-contain rounded-[12px] p-1.5 transition-all duration-300 hover:scale-[1.01]"
                  />
                  {/* Dark Theme Ecosystem Image */}
                  <img
                    src="/ecosystem-dark.jpg"
                    alt="Autonique Connected Clinic Operating System Ecosystem (Dark)"
                    className="hidden dark:block w-full h-auto object-contain rounded-[12px] p-1.5 transition-all duration-300 hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. The Problem Section ─── */}
        <section id="problem" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                The Operational Bottleneck
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
                Traditional Healthcare Operations Are Broken
              </h2>
              <p className="text-[14px] text-[#475569] dark:text-[#A0B0AD] font-medium">
                Clinic owners lost an average of 4.2 hours daily managing fragmented systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Before Autonique */}
              <div data-reveal data-reveal-delay="1" className="rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-500/10 via-white to-white dark:from-rose-950/40 dark:via-[#0D2926] dark:to-[#0D2926] p-6 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-[14px]">
                  <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                  <span>Legacy Disconnected Setup</span>
                </div>
                <ul className="space-y-3 text-[13px] text-[#475569] dark:text-[#A0B0AD] font-medium">
                  {[
                    "Missed appointments due to manual reminder calls",
                    "Paper-based prescriptions causing dosage errors",
                    "Fragmented EMR records scattered across notebooks & Excel",
                    "Overworked front desk staff dealing with phone queues",
                    "Uncollected bills & missing revenue telemetry",
                  ].map((err) => (
                    <li key={err} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>{err}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Autonique - Featured Highlight Card */}
              <div data-reveal data-reveal-delay="2" className="rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-white to-white dark:from-emerald-500/25 dark:via-[#0D2926] dark:to-[#0D2926] p-6 space-y-4 shadow-md transition-all">
                <div className="flex items-center gap-2 text-[#0F766E] dark:text-[#2DD4BF] font-bold text-[14px]">
                  <Sparkles className="h-5 w-5 text-[#0D9488] dark:text-[#2DD4BF]" />
                  <span>Unified Autonique Operating System</span>
                </div>
                <ul className="space-y-3 text-[13px] text-[#0F172A] dark:text-white">
                  {[
                    "Automated WhatsApp & SMS appointment reminders (55% lower no-shows)",
                    "Digital ICD-10 prescription engine with 1-click PDF export",
                    "Centralized cloud EMR accessible securely across all devices",
                    "Self-service patient booking & queue management",
                    "Integrated Stripe billing & real-time revenue analytics",
                  ].map((sol) => (
                    <li key={sol} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                      <span className="font-semibold">{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. What AUTONIQUE Clinics Solves ─── */}
        <section id="platform" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                One Intelligent System
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
                12 Essential Modules. One Platform.
              </h2>
              <p className="text-[14px] text-[#475569] dark:text-[#A0B0AD] font-medium">
                Consolidate your software stack into a single, cohesive clinical environment.
              </p>
            </div>

            {/* Clean White/Dark Cards with Top Radial Spotlight & Gradient Badge */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: "Patient CRM", desc: "Centralized medical histories", icon: Users, spot: "from-emerald-400/15" },
                { title: "Appointments", desc: "Automated queue & tokens", icon: Calendar, spot: "from-teal-400/15" },
                { title: "EMR Records", desc: "Structured clinical charting", icon: FileSpreadsheet, spot: "from-lime-400/15" },
                { title: "Billing & Invoices", desc: "Stripe & clinic receipts", icon: Receipt, spot: "from-indigo-400/15" },
                { title: "Clinical Analytics", desc: "Revenue & visit telemetry", icon: BarChart3, spot: "from-teal-400/15" },
                { title: "AI Assistant", desc: "Smart diagnostic notes", icon: Bot, spot: "from-emerald-400/15" },
                { title: "Automated Follow-ups", desc: "WhatsApp patient reminders", icon: MessageSquare, spot: "from-lime-400/15" },
                { title: "Staff Roster", desc: "Role-based staff permissions", icon: UserCheck, spot: "from-indigo-400/15" },
                { title: "Pharmacy Inventory", desc: "Drug stock & batch tracking", icon: Boxes, spot: "from-emerald-400/15" },
                { title: "Custom Reports", desc: "Exportable PDF/CSV digests", icon: FileText, spot: "from-teal-400/15" },
                { title: "Smart Alerts", desc: "Real-time clinical triggers", icon: Bell, spot: "from-lime-400/15" },
                { title: "Enterprise Security", desc: "HIPAA & 256-bit encryption", icon: Shield, spot: "from-indigo-400/15" },
              ].map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.title}
                    data-reveal
                    data-reveal-delay={String((idx % 4) + 1)}
                    className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${m.spot} via-transparent to-transparent p-4.5 shadow-xs hover:shadow-md transition-all group`}
                  >
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="font-bold text-[13.5px] text-[#0F172A] dark:text-white">{m.title}</div>
                    <div className="text-[11px] text-[#64748B] dark:text-[#809995] font-medium mt-0.5">{m.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 5. Core Platform Capabilities & Tilted WhatsApp Bot Showcase ─── */}
        <section className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-16">
            {/* Top Section Header */}
            <div data-reveal className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                Enterprise Features
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
                Engineered for High-Performance Clinics
              </h2>
            </div>

            {/* 3 Core Capability Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Clinical Assistant",
                  desc: "Generate structured consultation notes and diagnostic summaries automatically during doctor visits.",
                  icon: Bot,
                  spot: "from-emerald-400/20",
                  preview: (
                    <div className="rounded-xl border border-emerald-500/20 bg-[#F0FDFA] dark:bg-[#0F3531] p-3 text-[11px] space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between text-emerald-800 dark:text-[#2DD4BF] font-bold">
                        <span className="flex items-center gap-1"><Sparkles className="h-3 w-3" /> AI Note Draft</span>
                        <span>ICD-10 Ready</span>
                      </div>
                      <p className="text-[#475569] dark:text-[#A0B0AD] font-mono text-[10px]">Patient presents with acute pharyngitis. Prescribed Amoxicillin 500mg.</p>
                    </div>
                  ),
                },
                {
                  title: "Appointment Automation",
                  desc: "Multi-channel calendar scheduling with automated WhatsApp confirmation and cancellation management.",
                  icon: Calendar,
                  spot: "from-teal-400/20",
                  preview: (
                    <div className="rounded-xl border border-teal-500/20 bg-[#EEF2FF] dark:bg-[#122438] p-3 text-[11px] space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between text-teal-900 dark:text-teal-300 font-bold">
                        <span>WhatsApp Confirmation</span>
                        <span className="text-emerald-700 dark:text-[#2DD4BF] font-mono text-[9.5px]">Sent 09:30 AM</span>
                      </div>
                      <p className="text-[#475569] dark:text-[#A0B0AD] text-[10.5px]">"Hello Ava, your visit with Dr. Reyes is confirmed for 10:30 AM today."</p>
                    </div>
                  ),
                },
                {
                  title: "Medical Billing & Stripe",
                  desc: "Accept online payments, issue digital receipts, and track clinic revenue with automated reconciliation.",
                  icon: Receipt,
                  spot: "from-lime-400/20",
                  preview: (
                    <div className="rounded-xl border border-lime-500/20 bg-[#FFF7ED] dark:bg-[#2E2014] p-3 text-[11px] space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between text-lime-900 dark:text-lime-300 font-bold">
                        <span>Stripe Payment #INV-2841</span>
                        <span className="text-emerald-800 dark:text-[#2DD4BF] font-bold">$129 Paid</span>
                      </div>
                      <p className="text-[#475569] dark:text-[#A0B0AD] font-mono text-[10px]">Consultation Fee · Card •••• 4242</p>
                    </div>
                  ),
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    data-reveal
                    data-reveal-delay={String(i + 1)}
                    className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${card.spot} via-transparent to-transparent p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}
                  >
                    <div className="space-y-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shadow-xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-[16px] font-bold text-[#0F172A] dark:text-white">{card.title}</h3>
                      <p className="text-[13px] text-[#475569] dark:text-[#A0B0AD] leading-relaxed font-medium">{card.desc}</p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-[#0D9488]/15 dark:border-[#0D9488]/30">
                      {card.preview}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 2-Column Calendar Showcase Feature with Tilted Illustration on Right */}
            <div data-reveal className="rounded-2xl border-none bg-white dark:bg-[#0B201E] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent p-8 lg:p-10 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Side Info */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 dark:border-[#0D9488]/40 bg-[#EFFFFE] dark:bg-[#0F2F2C] px-3.5 py-1 text-[11px] font-bold text-[#0F766E] dark:text-[#2DD4BF]">
                    <Calendar className="h-3.5 w-3.5 text-[#0D9488] dark:text-[#2DD4BF]" />
                    <span>Automated Appointment Scheduling</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] dark:text-white leading-snug">
                    Smart Calendar Slot Lookup & Instant Confirmations
                  </h3>

                  <p className="text-[14px] leading-relaxed text-[#475569] dark:text-[#A0B0AD] font-medium">
                    Empower your patients to check doctor availability, select time slots, and receive instant booking receipts — reducing front-desk phone calls and cutting no-shows by 55%.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      { t: "Autonomous Slot Lookup", desc: "Real-time doctor calendar sync" },
                      { t: "Instant Receipts & Alerts", desc: "Digital booking details & doctor info" },
                      { t: "55% Lower No-Shows", desc: "Automated pre-visit reminders" },
                      { t: "Multi-Doctor Roster", desc: "Seamless appointment distribution" },
                    ].map((item) => (
                      <div key={item.t} className="flex items-start gap-2.5 p-2.5 rounded-xl border-none bg-[#F8FFFE] dark:bg-[#061514]">
                        <CheckCircle2 className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[12.5px] font-bold text-[#0F172A] dark:text-white">{item.t}</div>
                          <div className="text-[10.5px] text-[#64748B] dark:text-[#809995] font-medium">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Tilted Calendar Booking Illustration Frame */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-sm sm:max-w-md">
                    <div className="relative rounded-[16px] overflow-hidden bg-white dark:bg-[#0D2926] p-4 shadow-2xl transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] drop-shadow-[0_25px_35px_rgba(13,148,136,0.3)] hover:drop-shadow-[0_30px_45px_rgba(13,148,136,0.4)]">
                      <img
                        src="/appointment-booking-illustration.png"
                        alt="Autonique Clinic Appointment Booking Illustration"
                        className="w-full h-auto object-contain rounded-xl transition-all duration-300 hover:scale-[1.01] dark:brightness-95 contrast-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. How It Works ─── */}
        <section id="workflow" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="text-center max-w-xl mx-auto mb-14 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                Seamless Patient Journey
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
                From Booking to Follow-up in 6 Steps
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {[
                { step: "01", title: "Booking", sub: "Online or front desk", spot: "from-emerald-400/20" },
                { step: "02", title: "Confirmation", sub: "WhatsApp alert sent", spot: "from-teal-400/20" },
                { step: "03", title: "Consultation", sub: "Doctor notes & EMR", spot: "from-lime-400/20" },
                { step: "04", title: "Prescription", sub: "Digital PDF signature", spot: "from-indigo-400/20" },
                { step: "05", title: "Billing", sub: "Stripe or cash receipt", spot: "from-emerald-400/20" },
                { step: "06", title: "Follow-up", sub: "Automated feedback", spot: "from-teal-400/20" },
              ].map((s, idx) => (
                <div
                  key={s.step}
                  data-reveal
                  data-reveal-delay={String((idx % 3) + 1)}
                  className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${s.spot} via-transparent to-transparent p-4 text-center relative group transition-all shadow-xs hover:shadow-md`}
                >
                  <div className="font-mono text-[12px] font-bold text-[#0D9488] dark:text-[#2DD4BF] mb-1">{s.step}</div>
                  <div className="font-bold text-[13px] text-[#0F172A] dark:text-white">{s.title}</div>
                  <div className="text-[10.5px] text-[#64748B] dark:text-[#809995] font-medium mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. Live Product Preview ─── */}
        <section id="preview" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                Interactive Software Showcase
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
                Designed for Doctors & Administrators
              </h2>
            </div>

            {/* Showcase Tabs */}
            <div data-reveal className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6">
              {[
                { id: "dashboard", label: "Dashboard" },
                { id: "crm", label: "Patient CRM" },
                { id: "appointments", label: "Appointments" },
                { id: "emr", label: "EMR Charts" },
                { id: "billing", label: "Billing" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActivePreviewTab(t.id as any)}
                  className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                    activePreviewTab === t.id
                      ? "bg-[#0F766E] text-white shadow-md"
                      : "bg-white dark:bg-[#0D2926] border border-[#0D9488]/20 dark:border-[#0D9488]/40 text-[#475569] dark:text-[#A0B0AD] hover:bg-[#EFFFFE] dark:hover:bg-[#0F3531]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Display Mockup Window */}
            <div data-reveal className="rounded-[8px] border-none bg-white dark:bg-[#0D2926] shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="flex items-center justify-between px-4 py-3 bg-[#022C2C] text-white">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-[11px] text-[#99F6E4]">Autonique Clinical OS · {activePreviewTab.toUpperCase()}</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="p-6 bg-[#F8FFFE] dark:bg-[#061514] min-h-[320px] flex flex-col justify-center">
                {activePreviewTab === "dashboard" && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="overflow-hidden rounded-[8px] border border-[#0D9488]/20 dark:border-[#0D9488]/40 shadow-md">
                      <img
                        src="/dashboard-home-img.png"
                        alt="Autonique Doctor Dashboard Overview Screenshot"
                        className="w-full h-auto object-cover object-top max-h-[460px] rounded-[8px]"
                      />
                    </div>
                  </div>
                )}
                {activePreviewTab === "crm" && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between text-[12.5px] font-bold text-[#0F172A] dark:text-white pb-2 border-b border-border/40">
                      <span>Patient Records</span>
                      <span className="font-mono text-[10.5px] text-[#0D9488] dark:text-[#2DD4BF]">5 Active Patients</span>
                    </div>
                    {[
                      { name: "Ava Chen", id: "P-1042", phone: "+49 30 8823 1194", status: "active", date: "22 Jul 2026" },
                      { name: "Marcus Weiss", id: "P-1041", phone: "+49 30 4412 8802", status: "active", date: "22 Jul 2026" },
                      { name: "Priya Kapoor", id: "P-1040", phone: "+49 30 2201 4488", status: "active", date: "22 Jul 2026" },
                    ].map((p) => (
                      <div key={p.id} className="flex items-center justify-between p-2.5 rounded-xl border border-border/40 bg-white dark:bg-[#0D2926] text-[12px]">
                        <span className="font-bold text-[#0F172A] dark:text-white">{p.name}</span>
                        <span className="font-mono text-muted-foreground">{p.phone}</span>
                        <span className="font-mono text-muted-foreground">{p.date}</span>
                        <span className="bg-emerald-500/10 text-emerald-700 dark:text-[#2DD4BF] font-mono text-[10px] px-2 py-0.5 rounded-full font-bold">Active</span>
                      </div>
                    ))}
                  </div>
                )}
                {activePreviewTab === "appointments" && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="text-[12.5px] font-bold text-[#0F172A] dark:text-white pb-2 border-b border-border/40">Today's Appointment Schedule</div>
                    {[
                      { time: "09:00 AM", doctor: "Dr. Reyes", patient: "Ava Chen", status: "Confirmed" },
                      { time: "10:30 AM", doctor: "Dr. Okafor", patient: "Marcus Weiss", status: "In Consultation" },
                      { time: "02:00 PM", doctor: "Dr. Reyes", patient: "Priya Kapoor", status: "Scheduled" },
                    ].map((a) => (
                      <div key={a.time} className="flex items-center justify-between p-3 rounded-xl border border-border/40 bg-white dark:bg-[#0D2926] text-[12px]">
                        <span className="font-mono font-bold text-[#0D9488] dark:text-[#2DD4BF]">{a.time}</span>
                        <span className="font-semibold text-foreground">{a.patient}</span>
                        <span className="text-muted-foreground">{a.doctor}</span>
                        <span className="bg-emerald-500/10 text-emerald-700 dark:text-[#2DD4BF] font-mono text-[10px] px-2 py-0.5 rounded-full font-bold">{a.status}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activePreviewTab === "emr" && (
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-white dark:bg-[#0D2926] space-y-3 text-[12px] animate-fade-in">
                    <div className="flex justify-between font-bold text-[#0F172A] dark:text-white border-b pb-2"><span>Electronic Medical Record #EMR-992</span><span className="text-emerald-700 dark:text-[#2DD4BF]">ICD-10 Signed</span></div>
                    <p className="text-muted-foreground font-sans">Patient presents for routine follow-up. Vital signs normal (BP: 120/80, Pulse: 72 bpm). Continuation of therapy recommended.</p>
                  </div>
                )}
                {activePreviewTab === "billing" && (
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-white dark:bg-[#0D2926] space-y-3 text-[12px] animate-fade-in">
                    <div className="flex justify-between font-bold text-[#0F172A] dark:text-white border-b pb-2"><span>Stripe Billed Monthly Subscription</span><span className="text-emerald-700 dark:text-[#2DD4BF] font-mono">$516 / mo</span></div>
                    <p className="text-muted-foreground font-mono text-[11px]">Growth Tier · 4 Active Provider Seats · Next Invoice: Aug 12, 2026</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. Why AUTONIQUE Clinics (Enterprise Architecture) ─── */}
        <section className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="text-center max-w-xl mx-auto mb-14 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                Enterprise Infrastructure
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
                Built for Scalability, Speed & Security
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Multi-Tenant Architecture", desc: "Isolated clinic data boundaries with multi-campus hospital organization support.", icon: Server, spot: "from-emerald-400/20" },
                { title: "Role-Based Access Control", desc: "Granular permissions for Doctors, Nurses, Receptionists, and Billing staff.", icon: KeyRound, spot: "from-teal-400/20" },
                { title: "Immutable Audit Logging", desc: "Complete timestamped records of every patient chart view and prescription edit.", icon: FileText, spot: "from-indigo-400/20" },
              ].map((e, idx) => {
                const Icon = e.icon;
                return (
                  <div
                    key={e.title}
                    data-reveal
                    data-reveal-delay={String(idx + 1)}
                    className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${e.spot} via-transparent to-transparent p-6 shadow-xs hover:shadow-md transition-all`}
                  >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center mb-4 shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0F172A] dark:text-white">{e.title}</h3>
                    <p className="text-[13px] text-[#475569] dark:text-[#A0B0AD] mt-1.5 leading-relaxed font-medium">{e.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 9. Healthcare Compliance ─── */}
        <section className="py-12 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, t: "HIPAA Compliant", s: "End-to-end encrypted data", spot: "from-emerald-400/20" },
                { icon: Lock, t: "GDPR Certified", s: "Strict privacy safeguards", spot: "from-teal-400/20" },
                { icon: Clock, t: "99.9% Uptime SLA", s: "Guaranteed cloud reliability", spot: "from-lime-400/20" },
                { icon: Award, t: "ISO 27001", s: "Enterprise security standard", spot: "from-indigo-400/20" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.t} data-reveal data-reveal-delay={String(i + 1)} className={`flex items-start gap-3 p-4 rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${item.spot} via-transparent to-transparent shadow-xs`}>
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0D9488] dark:text-[#2DD4BF] shadow-xs">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#0F172A] dark:text-white">{item.t}</div>
                      <div className="text-[11px] text-[#64748B] dark:text-[#809995] font-medium">{item.s}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 10. Social Proof / Testimonials ─── */}
        <section id="social-proof" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div data-reveal className="text-center max-w-lg mx-auto mb-14 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                Trusted by Healthcare Leaders
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
                What Medical Directors Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: "Dr. Sarah Ahmed", role: "General Practitioner, Karachi", quote: "Autonique transformed how we manage our clinic. Patient no-shows dropped by 55% after using WhatsApp reminders.", stars: 5, delay: "1", spot: "from-emerald-400/20" },
                { name: "Dr. Farhan Malik", role: "Orthopedic Surgeon, Lahore", quote: "The billing and prescription modules save us 3+ hours every single day. It's the best investment we've made for our practice.", stars: 5, delay: "2", spot: "from-teal-400/20" },
                { name: "Dr. Nadia Reyes", role: "Clinic Director, Islamabad", quote: "From EMR to payments — everything is in one place. Our staff onboarded in just 2 days. Absolutely seamless.", stars: 5, delay: "3", spot: "from-lime-400/20" },
              ].map((t) => (
                <div
                  key={t.name}
                  data-reveal
                  data-reveal-delay={t.delay}
                  className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${t.spot} via-transparent to-transparent p-6 shadow-xs hover:shadow-md transition-all flex flex-col gap-4`}
                >
                  <div className="flex gap-0.5">
                    {Array(t.stars).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-[#334155] dark:text-[#A0B0AD] font-medium flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-2.5 pt-3 border-t border-[#0D9488]/15 dark:border-[#0D9488]/30">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-[#0F766E] text-white font-bold text-[13px]">
                      {t.name[3]}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#0F172A] dark:text-white">{t.name}</div>
                      <div className="text-[11px] text-[#64748B] dark:text-[#809995] font-medium">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11. Pricing ─── */}
        <section id="pricing" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
              <div data-reveal>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                  Subscription Plans
                </span>
                <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
                  Transparent & Predictable Pricing
                </h2>
              </div>

              <div data-reveal className="flex items-center gap-2 bg-white dark:bg-[#0D2926] p-1.5 rounded-xl border border-[#0D9488]/20 dark:border-[#0D9488]/40 shadow-xs self-start sm:self-auto">
                <button
                  onClick={() => setAnnualBilling(false)}
                  className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${!annualBilling ? "bg-[#0F766E] text-white shadow-sm" : "text-[#64748B] dark:text-[#809995]"}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setAnnualBilling(true)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${annualBilling ? "bg-[#0F766E] text-white shadow-sm" : "text-[#64748B] dark:text-[#809995]"}`}
                >
                  Annual
                  <span className="font-mono text-[9.5px] bg-[#CCFBF1] dark:bg-[#0F3531] text-[#0F766E] dark:text-[#2DD4BF] px-1.5 py-0.2 rounded font-bold">Save 20%</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { n: "Starter", p: annualBilling ? "$39" : "$49", s: "For solo doctor practices.", f: ["Smart calendar scheduling", "Structured patient records", "Automated email reminders", "Standard revenue reports"], delay: "1", spot: "from-emerald-400/20" },
                { n: "Growth", p: annualBilling ? "$99" : "$129", s: "For growing clinic teams.", f: ["Everything in Starter", "Stripe payment gateway", "WhatsApp automation", "Priority 24/7 support"], highlight: true, delay: "2", spot: "from-teal-400/30" },
                { n: "Enterprise", p: "Custom", s: "For hospital groups.", f: ["Custom EMR integrations", "Immutable audit logs", "99.99% SLA & dedicated CSM", "Custom BAA — HIPAA"], delay: "3", spot: "from-indigo-400/20" },
              ].map((t) => (
                <div
                  key={t.n}
                  data-reveal
                  data-reveal-delay={t.delay}
                  className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${t.spot} via-transparent to-transparent p-6 flex flex-col justify-between transition-all duration-300 ${
                    t.highlight
                      ? "ring-2 ring-[#0D9488]/40 shadow-xl scale-[1.02]"
                      : "shadow-xs hover:shadow-md"
                  }`}
                >
                  <div>
                    {t.highlight && (
                      <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#0F766E] to-[#0D9488] px-3 py-0.5 font-mono text-[9.5px] font-bold text-white uppercase tracking-wider shadow-xs">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-[15px] font-bold text-[#0F172A] dark:text-white">{t.n}</h3>
                    <div className="mt-1 font-display text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                      {t.p}
                      {t.p !== "Custom" && (
                        <span className="ml-1 font-mono text-[11.5px] text-[#64748B] dark:text-[#809995] font-normal">/ mo</span>
                      )}
                    </div>
                    <div className="mt-0.5 text-[12px] text-[#64748B] dark:text-[#809995] font-medium">{t.s}</div>
                    <ul className="mt-5 space-y-2.5">
                      {t.f.map((i) => (
                        <li key={i} className="flex items-center gap-2 text-[12.5px] text-[#334155] dark:text-[#E2F1F0] font-medium">
                          <CheckCircle2 className="h-4 w-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0" />
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
                        : "border border-[#0D9488]/25 dark:border-[#0D9488]/40 bg-[#F8FFFE] dark:bg-[#0F3531] hover:bg-[#EFFFFE] text-[#0F766E] dark:text-[#2DD4BF]"
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 12. FAQ Section ─── */}
        <section className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div data-reveal className="text-center max-w-xl mx-auto mb-14 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
                Frequently Asked Questions
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
                Everything You Need to Know
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { q: "How long does clinic onboarding take?", a: "Most single and multi-doctor clinics are fully setup and operating on Autonique within 24 to 48 hours. Our team assists with data import." },
                { q: "Is Autonique compliant with HIPAA and GDPR?", a: "Yes. Autonique encrypts all patient medical records at rest (AES-256) and in transit (TLS 1.3) with full audit logging and compliance." },
                { q: "Can I import existing patient records from Excel or another EHR?", a: "Absolutly. We provide automated CSV and Excel importers, as well as dedicated migration specialists for hospital databases." },
                { q: "Does Autonique support WhatsApp appointment reminders?", a: "Yes, automated WhatsApp & SMS appointment confirmations and follow-ups are built directly into the platform." },
              ].map((faq, i) => (
                <div
                  key={faq.q}
                  data-reveal
                  data-reveal-delay={String(i + 1)}
                  className="rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-[14px] text-[#0F172A] dark:text-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF] transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-0 text-[13px] text-[#475569] dark:text-[#A0B0AD] leading-relaxed font-medium border-t border-[#0D9488]/10 dark:border-[#0D9488]/20 mt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13. Final CTA Banner ─── */}
        <section className="py-16 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div
              data-reveal
              className="rounded-3xl bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#14B8A6] p-10 text-center shadow-2xl shadow-[#0D9488]/25 relative overflow-hidden"
            >
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

        {/* ─── 14. Footer ─── */}
        <footer className="border-t border-[#0D9488]/15 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <Logo />
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-[#64748B] dark:text-[#809995] font-semibold">
                <a href="#problem" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Why Change</a>
                <a href="#platform" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Platform</a>
                <a href="#workflow" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Workflow</a>
                <a href="#preview" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Product</a>
                <a href="#pricing" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Pricing</a>
                <Link to="/dashboard" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Dashboard</Link>
              </div>
              <div className="text-[11px] text-[#94A3B8] dark:text-[#64748B] font-mono">
                © 2026 Autonique Clinical OS · All rights reserved
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}