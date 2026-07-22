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
  CheckCircle,
} from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autonique — All-in-One Clinic Management Software for Doctors & Practice Groups" },
      {
        name: "description",
        content:
          "Manage appointments, patient EMR, prescriptions, billing, WhatsApp reminders, and multi-branch clinic operations with Autonique.",
      },
      { property: "og:title", content: "Autonique — Clinic Management Software for Doctors and Clinics" },
      { property: "og:description", content: "All-in-one software for doctors, clinics, and hospitals to manage appointments, EMR, billing, and patient communication." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-bold text-[13px] tracking-tight shadow-sm transition-transform hover:scale-105">
        A
      </div>
      <div className="flex flex-col">
        <span className="text-[16px] font-bold tracking-tight leading-none text-foreground">Autonique</span>
        <span className="text-[8.5px] text-emerald-800 dark:text-emerald-300 font-mono leading-none mt-0.5 uppercase tracking-widest font-semibold">Clinical OS</span>
      </div>
    </div>
  );
}

function Landing() {
  const [heroTab, setHeroTab] = useState<"Overview" | "Appointments" | "Patients" | "Revenue">("Overview");
  const [annualBilling, setAnnualBilling] = useState(true);
  const [solutionTab, setSolutionTab] = useState<"size" | "speciality">("size");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-emerald-500/20 selection:text-emerald-700">
      
      {/* Clinicia-style Sticky Light Green Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />

          {/* Navigation Links */}
          <nav className="hidden items-center gap-7 lg:flex text-[13px] font-medium text-muted-foreground">
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
            <Link to="/dashboard" className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-4 text-[12.5px] font-semibold text-white transition-all shadow-2xs cursor-pointer active:scale-95">
              <Rocket className="h-3.5 w-3.5" />
              <span>Start Free Trial</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 1. Hero Section — Clinicia Layout in Light Green Theme */}
      <section id="home" className="relative overflow-hidden border-b border-border/60 pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-emerald-500/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11.5px] font-semibold text-emerald-800 dark:text-emerald-300 shadow-2xs">
                <Shield className="h-3.5 w-3.5 text-emerald-600" />
                <span>Trusted by 40,000+ Healthcare Professionals</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-balance font-display text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                Simplify Your Practice with Powerful <span className="text-emerald-700 dark:text-emerald-400">Clinic Management Software</span>
              </h1>

              {/* Hero Subtitle */}
              <p className="text-[15px] leading-relaxed text-muted-foreground max-w-xl">
                All-in-one software for doctors, clinics, and hospitals to manage appointments, EMR, prescriptions, billing, and patient communication on WhatsApp.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link to="/dashboard" className="inline-flex h-11 items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 text-[13.5px] font-semibold text-white transition-all shadow-md cursor-pointer active:scale-98">
                  <Rocket className="h-4 w-4" />
                  <span>Start Free Trial</span>
                </Link>
                <a href="#demo" className="inline-flex h-11 items-center gap-2 rounded-xl border border-emerald-500/30 bg-card hover:bg-emerald-500/5 px-5 text-[13.5px] font-semibold text-emerald-800 dark:text-emerald-300 transition-all shadow-2xs">
                  <Calendar className="h-4 w-4 text-emerald-600" />
                  <span>Book a Demo</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-4 text-[11.5px] font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> No credit card required</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> 14-day full feature trial</span>
              </div>
            </div>

            {/* Right Hero Showcase Frame & Compact Stats */}
            <div className="lg:col-span-6 space-y-4">
              {/* Dashboard Showcase Frame */}
              <div className="rounded-2xl border border-emerald-500/20 bg-card shadow-2xl overflow-hidden transition-all">
                <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    <span className="h-3 w-3 rounded-full bg-teal-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] font-semibold text-emerald-200">Autonique Practice Portal</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg text-[11px]">
                    {(["Overview", "Appointments", "Patients", "Revenue"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setHeroTab(t)}
                        className={`px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                          heroTab === t ? "bg-emerald-600 text-white font-semibold shadow-2xs" : "text-emerald-200 hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dashboard Screen View */}
                <div className="p-5 min-h-[290px] bg-background">
                  {heroTab === "Overview" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[13px] text-foreground">Meridian Medical Center</div>
                          <div className="text-[10.5px] font-mono text-muted-foreground">Live Telemetry · Today</div>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> 99.9% Operational
                        </span>
                      </div>

                      {/* KPI Cards Row */}
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="rounded-xl p-3 kpi-gradient-mint border border-emerald-500/10">
                          <span className="text-[10px] font-semibold text-foreground/80 block">Today's Revenue</span>
                          <span className="font-display text-lg font-bold text-foreground">$18,240</span>
                          <span className="text-[9.5px] font-mono text-emerald-800 dark:text-emerald-300 block font-semibold">+12.4% vs avg</span>
                        </div>
                        <div className="rounded-xl p-3 kpi-gradient-lime border border-emerald-500/10">
                          <span className="text-[10px] font-semibold text-foreground/80 block">Booked Patients</span>
                          <span className="font-display text-lg font-bold text-foreground">36 Patients</span>
                          <span className="text-[9.5px] font-mono text-emerald-800 dark:text-emerald-300 block font-semibold">6 waiting room</span>
                        </div>
                        <div className="rounded-xl p-3 kpi-gradient-emerald border border-emerald-500/10">
                          <span className="text-[10px] font-semibold text-foreground/80 block">Patient Retention</span>
                          <span className="font-display text-lg font-bold text-foreground">94.8%</span>
                          <span className="text-[9.5px] font-mono text-emerald-800 dark:text-emerald-300 block font-semibold">+2.1% monthly</span>
                        </div>
                      </div>

                      {/* Graph Box */}
                      <div className="rounded-xl border border-emerald-500/10 kpi-gradient-teal p-3 h-28">
                        <div className="flex justify-between text-[10px] text-muted-foreground font-mono mb-1">
                          <span className="font-semibold text-foreground">Live Queue Velocity</span>
                          <span>Peak 10:00 - 14:00</span>
                        </div>
                        <svg viewBox="0 0 400 50" className="h-full w-full overflow-visible" preserveAspectRatio="none">
                          <path d="M0,35 C50,25 80,40 120,18 C160,5 210,25 260,12 C310,5 360,20 400,8" stroke="#059669" strokeWidth="2.5" fill="none" />
                          <path d="M0,35 C50,25 80,40 120,18 C160,5 210,25 260,12 C310,5 360,20 400,8 L400,50 L0,50 Z" fill="#10b981" opacity="0.1" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {heroTab === "Appointments" && (
                    <div className="space-y-2 text-[11.5px]">
                      <div className="font-bold text-foreground mb-2 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-emerald-600" /> Today's Live Schedule
                      </div>
                      {[
                        { time: "09:00 AM", name: "Ava Chen", type: "General Consult", provider: "Dr. Reyes", status: "Confirmed" },
                        { time: "10:30 AM", name: "Marcus Weiss", type: "Follow-up", provider: "Dr. Okafor", status: "In Exam" },
                        { time: "11:15 AM", name: "Priya Kapoor", type: "Procedure Eval", provider: "Dr. Reyes", status: "Waiting" },
                      ].map((a) => (
                        <div key={a.name} className="flex items-center justify-between rounded-lg border border-border/60 p-2.5 bg-card">
                          <div>
                            <span className="font-mono text-[10.5px] font-bold text-muted-foreground mr-2">{a.time}</span>
                            <span className="font-semibold text-foreground">{a.name}</span>
                            <span className="text-[10px] text-muted-foreground block">{a.type} · {a.provider}</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-mono font-semibold ${a.status === "In Exam" ? "bg-emerald-600 text-white" : "bg-emerald-500/10 text-emerald-700"}`}>
                            {a.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {heroTab === "Patients" && (
                    <div className="space-y-2 text-[11.5px]">
                      <div className="font-bold text-foreground mb-2 flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-emerald-600" /> Patient Directory
                      </div>
                      <div className="rounded-lg border border-border/60 overflow-hidden font-sans">
                        <table className="w-full text-left text-[11px]">
                          <thead className="bg-muted/40 font-mono text-[9.5px] text-muted-foreground uppercase border-b border-border/60">
                            <tr>
                              <th className="p-2">Patient</th>
                              <th className="p-2">ID</th>
                              <th className="p-2">Last Visit</th>
                              <th className="p-2 text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/40">
                            <tr>
                              <td className="p-2 font-semibold text-foreground">Elena Rossi</td>
                              <td className="p-2 font-mono text-muted-foreground">PAT-9821</td>
                              <td className="p-2 text-muted-foreground">Yesterday</td>
                              <td className="p-2 text-right text-emerald-700 font-semibold font-mono">Active</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold text-foreground">Jonas Lind</td>
                              <td className="p-2 font-mono text-muted-foreground">PAT-7412</td>
                              <td className="p-2 text-muted-foreground">15 Jul 2026</td>
                              <td className="p-2 text-right text-emerald-700 font-semibold font-mono">Active</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {heroTab === "Revenue" && (
                    <div className="space-y-3 text-[11.5px]">
                      <div className="font-bold text-foreground mb-2 flex items-center gap-1.5">
                        <DollarSign className="h-3.5 w-3.5 text-emerald-600" /> Revenue Telemetry
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-xl kpi-gradient-mint border border-emerald-500/10">
                          <span className="text-[10px] text-foreground/80 font-semibold block">Monthly Recurring Revenue</span>
                          <span className="font-display text-xl font-bold text-foreground">$248,320</span>
                          <span className="text-[9.5px] text-emerald-800 font-mono font-semibold block mt-0.5">+14.2% MRR growth</span>
                        </div>
                        <div className="p-3 rounded-xl kpi-gradient-lime border border-emerald-500/10">
                          <span className="text-[10px] text-foreground/80 font-semibold block">Collection Speed</span>
                          <span className="font-display text-xl font-bold text-foreground">1.8 Days</span>
                          <span className="text-[9.5px] text-emerald-800 font-mono font-semibold block mt-0.5">99.4% clean claims</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Clinicia-style Compact Statistics Strip */}
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { num: "40K+", label: "Doctors" },
                  { num: "25K+", label: "Clinics" },
                  { num: "8M+", label: "Patients" },
                  { num: "99.9%", label: "Uptime" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-emerald-500/15 kpi-gradient-mint p-2.5 shadow-2xs">
                    <div className="font-display text-lg font-bold text-foreground">{s.num}</div>
                    <div className="text-[10px] text-emerald-800 dark:text-emerald-300 font-mono font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What is Autonique? Section */}
      <section id="about" className="py-20 border-b border-border/60 bg-muted/20">
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
                <Link to="/dashboard" className="inline-flex h-10 items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 text-[13px] font-semibold text-white shadow-2xs cursor-pointer">
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
              <div className="rounded-2xl border border-emerald-500/20 bg-card p-4 shadow-xl space-y-3">
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

      {/* 3. Why Choose Autonique? Section */}
      <section id="why-choose" className="py-20 border-b border-border/60 bg-background">
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

      {/* 4. App Download Banner Section */}
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

      {/* 5. Smart Features Section — Clinicia Bullet List Grid */}
      <section id="features" className="py-20 border-b border-border/60 bg-muted/20">
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

      {/* 6. Solutions Built for Every Type of Practice Section */}
      <section id="solutions" className="py-20 border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-semibold">
              Tailored Solutions
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Solutions Built for Every Type of Practice
            </h2>
            <p className="mt-2 text-[14px] text-muted-foreground">
              From solo practitioners to multi-branch networks — we have the right solution for your healthcare practice
            </p>
          </div>

          {/* Solutions Tab Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-xl bg-muted/60 p-1 border border-border/60 font-medium text-[12px]">
              <button
                onClick={() => setSolutionTab("size")}
                className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                  solutionTab === "size" ? "bg-emerald-600 text-white font-semibold shadow-2xs" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                By Practice Size
              </button>
              <button
                onClick={() => setSolutionTab("speciality")}
                className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                  solutionTab === "speciality" ? "bg-emerald-600 text-white font-semibold shadow-2xs" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                By Medical Specialty
              </button>
            </div>
          </div>

          {/* Solutions Grid Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutionTab === "size" ? (
              [
                { title: "Solo Doctor Practice", desc: "Clean appointment booking, quick EMR notes and fast patient invoicing designed for individual practitioners.", tag: "Solo Practice" },
                { title: "Multi-Doctor Clinic", desc: "Share room schedules, manage doctor queue tokens, and delegate billing roles across staff members.", tag: "Group Clinic" },
                { title: "Multi-Branch Network", desc: "Centralized practice management across multiple clinic locations with real-time revenue telemetry.", tag: "Multi-Campus" },
              ].map((s) => (
                <div key={s.title} className="rounded-2xl border border-emerald-500/20 bg-card p-5 shadow-2xs hover:bg-emerald-500/5 transition-all">
                  <span className="font-mono text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">{s.tag}</span>
                  <h4 className="text-[14px] font-bold text-foreground mt-2">{s.title}</h4>
                  <p className="text-[12.5px] leading-relaxed text-muted-foreground mt-1.5">{s.desc}</p>
                </div>
              ))
            ) : (
              [
                { title: "Dental Practice", desc: "Tooth charts, dental lab order tracking, pre-set dental procedures, and digital consent forms.", tag: "Dentistry" },
                { title: "Dermatology & Cosmetology", desc: "Before & after photo attachment, skin procedure billing, and custom prescription templates.", tag: "Dermatology" },
                { title: "Pediatrics & Child Care", desc: "Vaccination schedule trackers, child growth charts, and automated parent WhatsApp alerts.", tag: "Pediatrics" },
              ].map((s) => (
                <div key={s.title} className="rounded-2xl border border-emerald-500/20 bg-card p-5 shadow-2xs hover:bg-emerald-500/5 transition-all">
                  <span className="font-mono text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">{s.tag}</span>
                  <h4 className="text-[14px] font-bold text-foreground mt-2">{s.title}</h4>
                  <p className="text-[12.5px] leading-relaxed text-muted-foreground mt-1.5">{s.desc}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 7. Patient Engagement Reinvented Section */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-semibold">
                Patient Communication
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Patient Engagement, Reinvented
              </h2>
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                Transform patient communication and engagement with our integrated digital tools. Reduce no-shows by up to 65%.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  "Send appointment confirmations & reminders on WhatsApp",
                  "Share digital prescriptions, lab reports & invoices in 1 click",
                  "Automate follow-ups, birthday wishes, and routine checkups",
                  "Seamless online appointment booking on your website",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[13px] text-foreground">
                    <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-emerald-500/20 bg-card p-6 shadow-xl space-y-4">
                <div className="rounded-xl bg-gradient-to-r from-emerald-900 to-teal-950 p-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-emerald-300" />
                    <div>
                      <div className="text-[12.5px] font-bold">WhatsApp Business Gateway</div>
                      <div className="text-[10px] text-emerald-200/80 font-mono">Automated Patient Messaging</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">Active</span>
                </div>

                <div className="space-y-2.5 font-mono text-[11px]">
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                    <span>✓ Appointment reminder sent to Ava Chen</span>
                    <span className="text-[9.5px]">09:00 AM</span>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                    <span>✓ Digital RX PDF shared via WhatsApp</span>
                    <span className="text-[9.5px]">10:32 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Built with Privacy & Compliance Section */}
      <section className="py-16 border-b border-border/60 bg-emerald-500/5">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center space-y-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 mx-auto">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Built with Privacy & Compliance in Mind</h2>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Your patient data is encrypted, secure, and backed up — always. Granular role access controls ensure full patient privacy, HIPAA compliance, and internal data safety.
          </p>
        </div>
      </section>

      {/* 9. Doctors Testimonials Section */}
      <section id="testimonials" className="py-20 border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-semibold">
              Doctor Reviews
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              What Our Doctors Say
            </h2>
            <p className="mt-2 text-[14px] text-muted-foreground">
              Hear from clinic owners and medical directors using Autonique daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Dr. Iman Reyes", role: "Medical Director, Meridian Clinics", quote: "Autonique replaced four disparate software tools and made our clinical workday dramatically quieter. The WhatsApp reminder integration alone cut our no-shows by 60%." },
              { name: "Dr. Ngozi Okafor", role: "Lead Physician, Aster Care", quote: "The EMR interface is ridiculously fast. Writing clinical notes and generating branded prescription PDFs takes less than 30 seconds." },
              { name: "Dr. Marcus Weiss", role: "Owner, Berlin Dental Group", quote: "Managing billing, patient queues, and supplier inventory across our 3 branches is now effortless. Best clinic management software we have used." },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-emerald-500/10 kpi-gradient-mint p-6 shadow-2xs flex flex-col justify-between">
                <p className="text-[13px] leading-relaxed text-foreground italic">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-emerald-500/10">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-600 font-bold text-white text-[11px]">
                    {t.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-foreground">{t.name}</div>
                    <div className="text-[10.5px] font-mono text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Official Pricing Section */}
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