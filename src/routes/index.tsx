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

          {/* 🖼️ REAL DASHBOARD UI MOCKUP FRAME (Recreating User Image Exactly) */}
          <div className="relative mx-auto mt-14 max-w-6xl">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-600/20 blur-xl opacity-75" />

            {/* Browser / OS Mockup Window */}
            <div className="relative rounded-2xl border border-emerald-500/30 bg-card shadow-[0_25px_70px_-15px_rgba(16,185,129,0.18)] overflow-hidden transition-all backdrop-blur-xl">
              
              {/* Actual Dashboard Replica matching uploaded Image */}
              <div className="flex min-h-[540px]">
                
                {/* Left Sidebar (From Image) */}
                <div className="hidden md:flex w-52 flex-col border-r border-border/40 bg-background/95 p-4 justify-between">
                  <div className="space-y-6">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                      <div className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-600 text-white font-bold text-[12px]">A</div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-foreground leading-none">Autonique</span>
                        <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest mt-0.5 font-medium">Clinical OS</span>
                      </div>
                    </div>

                    {/* Nav Section */}
                    <div className="space-y-1">
                      <div className="text-[9.5px] font-mono uppercase text-muted-foreground tracking-widest font-bold mb-2">Platform</div>
                      <div className="flex items-center gap-2.5 rounded-lg bg-sky-50 dark:bg-sky-950/40 px-3 py-1.5 text-[12.5px] font-semibold text-sky-900 dark:text-sky-300">
                        <LayoutDashboard className="h-3.5 w-3.5 text-emerald-700" />
                        <span>Overview</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-[12.5px] font-medium text-muted-foreground hover:bg-accent">
                        <Users className="h-3.5 w-3.5" />
                        <span>Patients</span>
                      </div>
                      {[
                        { label: "Appointments", badge: "SOON" },
                        { label: "Revenue", badge: "SOON" },
                        { label: "Reports", badge: "SOON" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between rounded-lg px-3 py-1.5 text-[12.5px] font-medium text-muted-foreground/60">
                          <span>{item.label}</span>
                          <span className="font-mono text-[9px] uppercase tracking-wider bg-muted px-1.5 py-0.2 rounded text-muted-foreground/60">{item.badge}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-[12.5px] font-medium text-muted-foreground hover:bg-accent">
                        <SettingsIcon className="h-3.5 w-3.5" />
                        <span>Settings</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Dashboard Workspace (From Image) */}
                <div className="flex-1 bg-background/50 p-4 sm:p-6 space-y-5 overflow-hidden">
                  
                  {/* Top Bar (From Image) */}
                  <div className="flex items-center justify-between border-b border-border/40 pb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Operational
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex items-center gap-2 rounded-md border border-border/60 bg-background px-3 py-1 text-[11px] font-mono text-muted-foreground w-64">
                        <Search className="h-3 w-3" />
                        <span>Search patients, visits, records…</span>
                        <kbd className="ml-auto font-mono text-[9px] bg-muted px-1 rounded">⌘K</kbd>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="grid h-6 w-6 place-items-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">IR</div>
                        <span className="text-[11.5px] font-semibold text-foreground hidden sm:inline">Dr. Reyes</span>
                      </div>
                    </div>
                  </div>

                  {/* Greeting Row (From Image) */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground">
                        GOOD MORNING, <span className="text-emerald-800 dark:text-emerald-300">DR. SARAH</span> 👋
                      </h3>
                      <p className="text-[11px] font-mono text-muted-foreground">Here's what's happening in your clinic today.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10.5px] text-muted-foreground hidden sm:inline">Sunday, June 22, 2026</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Clinic Open
                      </span>
                    </div>
                  </div>

                  {/* 4 KPI Pastel Cards (From Image) */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* Card 1 — Mint */}
                    <div className="rounded-xl p-3.5 border border-emerald-500/10 kpi-gradient-mint shadow-2xs">
                      <div className="flex items-center justify-between text-muted-foreground text-[11px] font-semibold">
                        <span className="flex items-center gap-1.5 text-foreground/80"><Users className="h-3.5 w-3.5 text-emerald-700" /> Total Patients</span>
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </div>
                      <div className="mt-1.5 font-display text-2xl font-bold tracking-tight text-foreground">4,892</div>
                      <span className="mt-1 inline-block font-mono text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 bg-white/80 dark:bg-card/80 px-1.5 py-0.2 rounded border border-emerald-500/20">This Month ↗ +12%</span>
                    </div>

                    {/* Card 2 — Lime */}
                    <div className="rounded-xl p-3.5 border border-emerald-500/10 kpi-gradient-lime shadow-2xs">
                      <div className="flex items-center justify-between text-muted-foreground text-[11px] font-semibold">
                        <span className="flex items-center gap-1.5 text-foreground/80"><Calendar className="h-3.5 w-3.5 text-emerald-700" /> Appointments</span>
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </div>
                      <div className="mt-1.5 font-display text-2xl font-bold tracking-tight text-foreground">48</div>
                      <span className="mt-1 inline-block font-mono text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 bg-white/80 dark:bg-card/80 px-1.5 py-0.2 rounded border border-emerald-500/20">New Bookings ↗ +8%</span>
                    </div>

                    {/* Card 3 — Emerald */}
                    <div className="rounded-xl p-3.5 border border-emerald-500/10 kpi-gradient-emerald shadow-2xs">
                      <div className="flex items-center justify-between text-muted-foreground text-[11px] font-semibold">
                        <span className="flex items-center gap-1.5 text-foreground/80"><DollarSign className="h-3.5 w-3.5 text-emerald-700" /> Monthly Revenue</span>
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </div>
                      <div className="mt-1.5 font-display text-2xl font-bold tracking-tight text-foreground">$24,500</div>
                      <span className="mt-1 inline-block font-mono text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 bg-white/80 dark:bg-card/80 px-1.5 py-0.2 rounded border border-emerald-500/20">Last Month ↗ +15%</span>
                    </div>

                    {/* Card 4 — Teal */}
                    <div className="rounded-xl p-3.5 border border-emerald-500/10 kpi-gradient-teal shadow-2xs">
                      <div className="flex items-center justify-between text-muted-foreground text-[11px] font-semibold">
                        <span className="flex items-center gap-1.5 text-foreground/80"><Users className="h-3.5 w-3.5 text-emerald-700" /> Active Doctors</span>
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </div>
                      <div className="mt-1.5 font-display text-2xl font-bold tracking-tight text-foreground">35</div>
                      <span className="mt-1 inline-block font-mono text-[10px] font-semibold text-rose-600 bg-white/80 dark:bg-card/80 px-1.5 py-0.2 rounded border border-rose-500/20">On Leave ↘ 2%</span>
                    </div>
                  </div>

                  {/* Graphs Section (From Image) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
                    
                    {/* Left: Revenue Overview Smooth Line Graph (From Image) */}
                    <div className="lg:col-span-8 rounded-xl border border-border/60 bg-card p-4 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[13px] text-foreground">Revenue Overview</div>
                          <div className="text-[10px] font-mono text-muted-foreground">Last 6 months performance</div>
                        </div>
                        <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-md text-[10px] font-semibold">
                          <span className="px-2 py-0.5 rounded bg-background shadow-2xs text-foreground">Overview</span>
                          <span className="px-2 py-0.5 text-muted-foreground">Monthly</span>
                          <span className="px-2 py-0.5 text-muted-foreground">Yearly</span>
                        </div>
                      </div>

                      {/* Smooth SVG Curved Line Chart + Active Tooltip (From Image) */}
                      <div className="relative h-44 pt-4">
                        <svg viewBox="0 0 500 120" className="h-full w-full overflow-visible" preserveAspectRatio="none">
                          {/* Grid Lines */}
                          <line x1="0" y1="20" x2="500" y2="20" stroke="currentColor" strokeDasharray="3 3" opacity="0.1" />
                          <line x1="0" y1="60" x2="500" y2="60" stroke="currentColor" strokeDasharray="3 3" opacity="0.1" />
                          <line x1="0" y1="100" x2="500" y2="100" stroke="currentColor" strokeDasharray="3 3" opacity="0.1" />
                          
                          {/* Curved Line Path */}
                          <path
                            d="M 0,90 Q 50,60 100,70 T 200,30 T 300,50 T 400,60 T 500,25"
                            fill="none"
                            stroke="#84cc16"
                            strokeWidth="3.5"
                          />

                          {/* Data points */}
                          <circle cx="100" cy="70" r="4" fill="#84cc16" />
                          <circle cx="200" cy="30" r="4" fill="#84cc16" />
                          <circle cx="300" cy="50" r="4" fill="#84cc16" />
                          <circle cx="400" cy="60" r="4" fill="#84cc16" />
                          <circle cx="500" cy="25" r="4" fill="#84cc16" />

                          {/* Apr Tooltip Marker Line */}
                          <line x1="200" y1="30" x2="200" y2="110" stroke="#84cc16" strokeDasharray="2 2" />
                        </svg>

                        {/* Tooltip Card (Apr Revenue: $15,000) from Image */}
                        <div className="absolute top-6 left-[36%] rounded-lg border border-border/80 bg-background px-3 py-1.5 shadow-md text-left text-[10.5px]">
                          <div className="font-mono text-muted-foreground font-semibold">Apr</div>
                          <div className="font-bold text-emerald-700 dark:text-emerald-400">Revenue : $15,000</div>
                        </div>

                        {/* X-Axis Labels */}
                        <div className="flex justify-between text-[9.5px] font-mono text-muted-foreground pt-1">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                          <span>Jul</span>
                          <span>Aug</span>
                          <span>Sep</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Appointment Stats Donut Chart (From Image) */}
                    <div className="lg:col-span-4 rounded-xl border border-border/60 bg-card p-4 shadow-2xs flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[13px] text-foreground">Appointment Stats</div>
                          <div className="text-[10px] font-mono text-muted-foreground">This month's distribution</div>
                        </div>
                      </div>

                      {/* Donut Chart Graphics (From Image) */}
                      <div className="relative my-2 flex items-center justify-center">
                        <svg className="h-28 w-28 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-emerald-500"
                            strokeWidth="4"
                            strokeDasharray="60, 100"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-lime-500"
                            strokeWidth="4"
                            strokeDasharray="25, 100"
                            strokeDashoffset="-60"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-rose-500"
                            strokeWidth="4"
                            strokeDasharray="15, 100"
                            strokeDashoffset="-85"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center text-center">
                          <span className="font-display text-xl font-bold text-foreground leading-none">54</span>
                          <span className="text-[9px] text-muted-foreground font-mono mt-0.5">Total Appointment</span>
                        </div>
                      </div>

                      {/* Donut Legend (From Image) */}
                      <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-muted-foreground">
                        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Completed</span>
                        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-lime-500" /> Upcoming</span>
                        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-rose-500" /> Cancelled</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

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