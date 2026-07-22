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
  Rocket,
  Smartphone,
  Award,
  Cloud,
  MessageSquare,
  Globe,
  Headphones,
  FileSpreadsheet,
  Pill,
  Receipt,
  Boxes,
  BarChart3,
  Stethoscope,
  ChevronDown,
  PhoneCall,
  Download,
  Share2,
  Bell,
  Star,
  Search,
  Command,
  LayoutDashboard,
  Settings as SettingsIcon,
  MoreHorizontal,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autonique — Enterprise Clinical OS for Modern Healthcare Groups" },
      {
        name: "description",
        content:
          "The official operating system for high-performing clinics. Unifies patient scheduling, EMR, revenue telemetry, and team workflows.",
      },
      { property: "og:title", content: "Autonique — Enterprise Clinical OS" },
      { property: "og:description", content: "All-in-one clinical software for doctors, practice groups, and hospital networks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="grid h-8.5 w-8.5 place-items-center rounded-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white font-bold text-[14px] tracking-tight shadow-md shadow-emerald-500/20 transition-transform hover:scale-105">
        A
      </div>
      <div className="flex flex-col">
        <span className="text-[16px] font-bold tracking-tight leading-none text-foreground">Autonique</span>
        <span className="text-[8.5px] text-emerald-800 dark:text-emerald-300 font-mono leading-none mt-0.5 uppercase tracking-widest font-bold">Clinical OS</span>
      </div>
    </div>
  );
}

function Landing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [solutionTab, setSolutionTab] = useState<"size" | "speciality">("size");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-emerald-500/20 selection:text-emerald-700 overflow-x-hidden">
      
      {/* 🌟 Ultra-Premium Sticky Glass Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-emerald-500/10 bg-background/80 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />

          {/* Navigation Links */}
          <nav className="hidden items-center gap-8 lg:flex text-[13px] font-medium text-muted-foreground">
            <a href="#features" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Features</a>
            <a href="#solutions" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Solutions</a>
            <a href="#why-choose" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Why Choose Us</a>
            <a href="#pricing" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Doctors Review</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="hidden text-[13px] font-semibold text-emerald-800 dark:text-emerald-300 hover:text-emerald-900 sm:inline transition-colors px-3 py-1.5 rounded-lg hover:bg-emerald-500/10">
              Sign In
            </Link>
            <Link to="/dashboard" className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-4 text-[12.5px] font-semibold text-white transition-all shadow-md shadow-emerald-600/20 active:scale-95 cursor-pointer">
              <Rocket className="h-3.5 w-3.5" />
              <span>Open App</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 1. Hero Section — Ultra Premium Mesh Backdrop */}
      <section id="home" className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/12 via-background to-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          {/* Top Hero Heading Block */}
          <div className="mx-auto max-w-3xl text-center space-y-5">
            {/* Official Announcement Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-[11.5px] font-semibold text-emerald-800 dark:text-emerald-300 shadow-2xs backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Autonique 2.4 Clinical OS · High-Precision Practice Management</span>
              <ChevronRight className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
            </div>

            {/* Main Title */}
            <h1 className="text-balance font-display text-4xl leading-[1.06] font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Simplify Your Practice with Powerful <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">Clinic Management Software</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              All-in-one software for doctors, clinics, and hospitals to manage appointments, EMR, prescriptions, billing, and patient communication on WhatsApp.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Link to="/dashboard" className="inline-flex h-11 items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 text-[13.5px] font-semibold text-white transition-all shadow-lg shadow-emerald-600/25 active:scale-98 cursor-pointer">
                <Rocket className="h-4 w-4" />
                <span>Start Free Trial</span>
              </Link>
              <a href="#demo" className="inline-flex h-11 items-center gap-2 rounded-xl border border-emerald-500/30 bg-card hover:bg-emerald-500/5 px-6 text-[13.5px] font-semibold text-emerald-800 dark:text-emerald-300 transition-all shadow-2xs">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <span>Book a Demo</span>
              </a>
            </div>

            {/* Quick Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-5 pt-3 text-[11.5px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> No credit card required</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> 14-day full feature trial</span>
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-emerald-600" /> HIPAA & GDPR Compliant</span>
            </div>
          </div>

          {/* 🖼️ REAL DASHBOARD UI MOCKUP FRAME (Matching Clinicia Desktop Frame with High-Res Dashboard Screenshot) */}
          <div className="relative mx-auto mt-12 max-w-6xl">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-600/20 blur-xl opacity-75" />

            {/* Browser / OS Mockup Window */}
            <div className="relative rounded-2xl border border-emerald-500/30 bg-card shadow-[0_25px_70px_-15px_rgba(16,185,129,0.22)] overflow-hidden transition-all backdrop-blur-xl">
              
              {/* Header Dots Bar */}
              <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[11px] font-semibold text-emerald-200">Autonique Dashboard Telemetry</span>
                </div>
                <div className="flex items-center gap-2 text-[10.5px] font-mono text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live Operational
                </div>
              </div>

              {/* Exact High-Res Dashboard Image */}
              <img
                src="/dashboard-home-img.png"
                alt="Autonique Dashboard"
                className="w-full object-cover rounded-b-2xl shadow-inner border-t border-white/10"
              />

            </div>
          </div>

        </div>
      </section>

      {/* 2. Official Trust Logos Section */}
      <section className="border-y border-emerald-500/10 bg-emerald-500/5 py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center font-mono text-[10.5px] uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300 font-bold">
            Trusted by 40,000+ doctors across 25,000+ clinics & medical groups
          </div>
          <div className="mt-6 grid grid-cols-2 items-center gap-y-5 sm:grid-cols-3 md:grid-cols-6">
            {["Northwind Health", "Meridian Clinics", "Aster Care", "Solace Health", "Umbra Medical", "Vantage Health"].map((n) => (
              <div key={n} className="text-center font-display text-[15px] font-bold tracking-tight text-foreground/80 hover:text-emerald-700 transition-colors cursor-default">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What is Autonique? Section */}
      <section id="about" className="py-20 border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10.5px] font-semibold text-emerald-800 dark:text-emerald-300">
                <Stethoscope className="h-3.5 w-3.5 text-emerald-600" />
                <span>Modern Healthcare Software</span>
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                All-in-One Clinic Management Software for Modern Healthcare
              </h2>
              <h3 className="text-[15px] font-semibold text-emerald-800 dark:text-emerald-300">
                Streamline Your Practice, Enhance Patient Care, and Grow with Confidence — Anytime, Anywhere.
              </h3>
              <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                Autonique is a powerful yet intuitive cloud-based practice management platform built specifically for doctors, clinics, and healthcare institutions. Whether you're a solo practitioner or managing a multi-speciality, multi-branch clinic, Autonique simplifies your operations — from appointments and EMR to billing, inventory, and patient communication.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Link to="/dashboard" className="inline-flex h-10 items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 text-[13px] font-semibold text-white shadow-md cursor-pointer">
                  <Rocket className="h-4 w-4" />
                  <span>Start Free Trial</span>
                </Link>
                <a href="#pricing" className="inline-flex h-10 items-center gap-2 rounded-xl border border-border/80 bg-card px-5 text-[13px] font-semibold text-foreground hover:bg-accent">
                  <span>Explore Pricing</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Dual View Mockup Container */}
              <div className="rounded-2xl border border-emerald-500/20 bg-card p-4 shadow-xl space-y-3 backdrop-blur-xl">
                <div className="rounded-xl border border-emerald-500/10 kpi-gradient-lime p-4 flex items-center justify-between">
                  <div>
                    <div className="text-[12.5px] font-bold text-foreground">Multi-Device Cloud Access</div>
                    <div className="text-[11px] text-muted-foreground font-mono">Syncs seamlessly across Web, iPad, Android & iOS</div>
                  </div>
                  <Globe className="h-6 w-6 text-emerald-700" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-emerald-500/10 kpi-gradient-mint p-3.5">
                    <Smartphone className="h-5 w-5 text-emerald-700 mb-1" />
                    <div className="text-[12px] font-bold text-foreground">Mobile Clinic App</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">Manage patient queue & prescriptions on the go</div>
                  </div>
                  <div className="rounded-xl border border-emerald-500/10 kpi-gradient-emerald p-3.5">
                    <Boxes className="h-5 w-5 text-emerald-700 mb-1" />
                    <div className="text-[12px] font-bold text-foreground">Inventory & Pharmacy</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">Stock flow, batch tracking & supplier invoices</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose Autonique? Section */}
      <section id="why-choose" className="py-20 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-semibold">
              Why Doctors Trust Us
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Why Choose Autonique?
            </h2>
            <p className="mt-2 text-[14px] text-muted-foreground">
              Join thousands of healthcare professionals who trust Autonique for practice management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Trusted by 25,000+ Clinics & Doctors", desc: "Proven track record across leading healthcare institutions worldwide.", icon: Award, grad: "kpi-gradient-mint" },
              { title: "Secure Cloud-Based Access", desc: "Access patient records anytime, anywhere with 256-bit AES encryption.", icon: Cloud, grad: "kpi-gradient-lime" },
              { title: "WhatsApp-Integrated Communication", desc: "Automated appointment reminders, prescriptions, and invoices sent directly to WhatsApp.", icon: MessageSquare, grad: "kpi-gradient-emerald" },
              { title: "Works on Web, Android & iOS", desc: "Fully responsive mobile apps and desktop portals for your entire medical staff.", icon: Smartphone, grad: "kpi-gradient-teal" },
              { title: "Designed for All Specialties & Sizes", desc: "Customized templates for Dental, Dermatology, Pediatrics, General Practice & more.", icon: Building, grad: "kpi-gradient-mint" },
              { title: "24/7 Dedicated Clinical Support", desc: "Round-the-clock onboarding and technical assistance for seamless clinic ops.", icon: Headphones, grad: "kpi-gradient-lime" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`rounded-2xl border border-emerald-500/10 p-5 shadow-2xs transition-all hover:scale-[1.01] ${item.grad}`}>
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/90 dark:bg-card/90 shadow-2xs text-emerald-700 dark:text-emerald-400 mb-3">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-[13.5px] font-bold text-foreground">{item.title}</h4>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. App Download Banner Section */}
      <section className="py-12 border-b border-border/60 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wider text-emerald-300 font-semibold">
                <Smartphone className="h-3.5 w-3.5" /> Mobile Companion App
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">Get Autonique Practice App</h3>
              <p className="text-[12.5px] text-emerald-200/80">Download directly on iOS App Store and Google Play Store for instant access on mobile.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button onClick={() => alert("App Store Download Link")} className="h-10 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-[11.5px] font-semibold flex items-center gap-2 transition-all cursor-pointer">
                <span> App Store</span>
              </button>
              <button onClick={() => alert("Play Store Download Link")} className="h-10 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-[11.5px] font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm">
                <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Smart Features Section */}
      <section id="features" className="py-20 border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-semibold">
              Platform Features
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Smart Features That Power Your Practice
            </h2>
            <p className="mt-2 text-[14px] text-muted-foreground">
              Comprehensive clinical tools designed for modern healthcare delivery
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
                bullets: ["Automated WhatsApp & SMS reminders", "Manage patient queue & token numbers", "Multi-provider doctor calendars"],
                grad: "kpi-gradient-lime",
              },
              {
                t: "Prescription Management",
                icon: Pill,
                bullets: ["Preloaded medicine database", "Digital doctor signatures", "1-click prescription print & PDF"],
                grad: "kpi-gradient-emerald",
              },
              {
                t: "Billing & Invoicing",
                icon: Receipt,
                bullets: ["Create branded clinic bills", "Track partial payments & balances", "Integrated Stripe payment gateway"],
                grad: "kpi-gradient-teal",
              },
              {
                t: "Inventory & Expenses",
                icon: Boxes,
                bullets: ["Manage medicine stock & flow", "Supplier purchase orders", "Expense telemetry & tracking"],
                grad: "kpi-gradient-mint",
              },
              {
                t: "Reports & Analytics",
                icon: BarChart3,
                bullets: ["Analyze daily revenue velocity", "Patient visit & growth trends", "Doctor performance metrics"],
                grad: "kpi-gradient-lime",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.t} className={`rounded-2xl border border-emerald-500/10 p-5 shadow-2xs transition-all hover:scale-[1.01] ${f.grad}`}>
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/90 dark:bg-card/90 shadow-2xs text-emerald-700 dark:text-emerald-400 mb-3">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-[14px] font-bold text-foreground">{f.t}</h4>
                  <ul className="mt-3 space-y-1.5 text-[12px] text-muted-foreground">
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

      {/* 7. Official Pricing Section */}
      <section id="pricing" className="py-20 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-semibold">
                Transparent Pricing
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Straightforward Subscription Plans
              </h2>
            </div>

            {/* Annual Billing Toggle */}
            <div className="flex items-center gap-2 bg-background p-1 rounded-xl border border-border/60 self-start md:self-auto">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-3.5 py-1 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${!annualBilling ? "bg-emerald-600 text-white shadow-2xs" : "text-muted-foreground"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`flex items-center gap-1.5 px-3.5 py-1 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${annualBilling ? "bg-emerald-600 text-white shadow-2xs" : "text-muted-foreground"}`}
              >
                Annual
                <span className="font-mono text-[9.5px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { n: "Starter", p: annualBilling ? "$39" : "$49", s: "For solo practitioner practices.", f: ["Smart calendar scheduling", "Structured patient records", "Automated email reminders", "Standard revenue reports", "Email support"] },
              { n: "Growth", p: annualBilling ? "$99" : "$129", s: "For growing multi-doctor teams.", f: ["Everything in Starter", "Stripe payment gateway", "AI waitlist & queue automation", "WhatsApp & SMS notifications", "Priority 24/7 support"], highlight: true },
              { n: "Enterprise", p: "Custom", s: "For multi-campus hospital groups.", f: ["SSO & SCIM provisioning", "Custom EMR integrations", "Immutable audit telemetry", "99.99% SLA & dedicated CSM", "Custom BAA (HIPAA)"] },
            ].map((t) => (
              <div
                key={t.n}
                className={`rounded-2xl border p-6 transition-all flex flex-col justify-between ${
                  t.highlight
                    ? "border-emerald-500/40 bg-emerald-500/5 ring-2 ring-emerald-500/20 shadow-md"
                    : "border-border/60 bg-card"
                }`}
              >
                <div>
                  {t.highlight && (
                    <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-0.5 font-mono text-[9.5px] font-bold text-white uppercase tracking-wider shadow-2xs">
                      Most Popular Plan
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
                  className={`mt-6 inline-flex h-9.5 w-full items-center justify-center rounded-xl text-[12.5px] font-semibold transition-all cursor-pointer ${
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

      {/* Official Footer */}
      <footer className="mx-auto max-w-7xl px-5 py-10 sm:px-8 border-t border-border/60 bg-background">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted-foreground font-medium">
            <a href="#features" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Features</a>
            <a href="#solutions" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="#privacy" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Security & Privacy</a>
          </div>
          <div className="text-[11px] text-muted-foreground font-mono">© 2026 Autonique Clinical OS</div>
        </div>
      </footer>

    </div>
  );
}