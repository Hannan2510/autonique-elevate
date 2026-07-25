import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  User,
  Bell,
  Shield,
  Building2,
  Palette,
  CreditCard,
  Check,
  Camera,
  Key,
  Smartphone,
  Laptop,
  Globe,
  Mail,
  Lock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Save,
  ArrowUpRight,
  AlertTriangle,
  Receipt,
  Download,
} from "lucide-react";
import { Badge, Button, PageHeader } from "@/components/app/AppShell";
import { StripePaymentModal, StripePaymentItem } from "@/components/app/StripePaymentModal";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({
    meta: [
      { title: "Settings · Autonique" },
      { name: "description", content: "Manage your profile, notifications, organization, billing and security." },
      { property: "og:title", content: "Settings · Autonique" },
      { property: "og:description", content: "Manage your profile, notifications, organization, billing and security." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Settings,
});

const tabs = [
  { id: "profile", label: "Profile", icon: User, desc: "Personal information & doctor bio" },
  { id: "notifications", label: "Notifications", icon: Bell, desc: "Email, SMS & clinical alerts" },
  { id: "security", label: "Security", icon: Shield, desc: "Password, 2FA & active sessions" },
  { id: "billing", label: "Billing", icon: CreditCard, desc: "Current plan & included features" },
] as const;

type TabId = (typeof tabs)[number]["id"];

/* Clean Custom Switch */
function Switch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
        checked ? "bg-emerald-600" : "bg-muted-foreground/20"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-200 ease-in-out ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

/* Styled Form Field Container */
function FormRow({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 py-4 border-b border-border/40 last:border-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
      <div className="max-w-xs space-y-0.5">
        <label className="text-[13px] font-semibold text-foreground tracking-tight">{label}</label>
        {description && <p className="text-[11.5px] leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      <div className="flex-1 max-w-lg">{children}</div>
    </div>
  );
}

function Settings() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const [savedToast, setSavedToast] = useState(false);

  // Billing specific states
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPaymentItem, setSelectedPaymentItem] = useState<StripePaymentItem | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [activePlan, setActivePlan] = useState<"essential" | "growth" | "enterprise">("growth");
  const [checkoutLoadingPlan, setCheckoutLoadingPlan] = useState<string | null>(null);
  const [invoices, setInvoices] = useState([
    { id: "INV-2026-004", date: "Jul 12, 2026", duration: "Jun 12, 2026 - Jul 12, 2026", amount: "$516.00", status: "Paid" },
    { id: "INV-2026-003", date: "Jun 12, 2026", duration: "May 12, 2026 - Jun 12, 2026", amount: "$516.00", status: "Paid" },
    { id: "INV-2026-002", date: "May 12, 2026", duration: "Apr 12, 2026 - May 12, 2026", amount: "$516.00", status: "Paid" },
    { id: "INV-2026-001", date: "Apr 12, 2026", duration: "Mar 12, 2026 - Apr 12, 2026", amount: "$129.00", status: "Paid" },
  ]);

  const handleSelectPlan = (planId: "essential" | "growth" | "enterprise", amount: number) => {
    setCheckoutLoadingPlan(planId);
    setTimeout(() => {
      setCheckoutLoadingPlan(null);
      setSelectedPaymentItem({
        title: `${planId.charAt(0).toUpperCase() + planId.slice(1)} Plan Subscription`,
        description: `Autonique ${planId.toUpperCase()} Tier — ${billingCycle === "annual" ? "Annual" : "Monthly"} Cycle`,
        amount: amount,
        invoiceId: `INV-2026-00${invoices.length + 1}`,
        patientName: "Clinic Admin Account",
      });
      setIsPaymentModalOpen(true);
    }, 900);
  };

  const handlePaymentSuccess = (txId: string) => {
    const newInvId = `INV-2026-00${invoices.length + 1}`;
    const newAmount = selectedPaymentItem?.amount ? `$${selectedPaymentItem.amount.toFixed(2)}` : "$0.00";
    const today = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    
    setInvoices((prev) => [
      { id: newInvId, date: today, duration: "Jul 12, 2026 - Aug 12, 2026", amount: newAmount, status: "Paid" },
      ...prev,
    ]);

    if (selectedPaymentItem?.title.includes("Essential")) {
      setActivePlan("essential");
    } else if (selectedPaymentItem?.title.includes("Growth")) {
      setActivePlan("growth");
    } else {
      setActivePlan("enterprise");
    }
  };

  // Form States
  const [notifs, setNotifs] = useState({
    appointments: true,
    cancellations: true,
    newPatients: true,
    weeklyDigest: true,
    marketing: false,
    urgentSMS: true,
  });

  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [density, setDensity] = useState<"comfortable" | "compact">("comfortable");

  const handleSave = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Header */}
      <PageHeader
        title={
          <span className="flex items-center gap-2 font-semibold text-foreground">
            Account & Clinic <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Settings</span>
          </span>
        }
        description="Configure your medical practice profile, security controls, and clinic preferences."
        actions={
          <div className="flex items-center gap-3">
            {savedToast && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11.5px] font-medium text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 animate-fade-in">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Changes saved!
              </span>
            )}
            <Button size="sm" onClick={handleSave}>
              <Save className="h-3.5 w-3.5" />
              Save Changes
            </Button>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Horizontal Tab Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto border-b border-border/50 pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-500/20 shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Container */}
        <div className="mt-6">

          {/* ──────── 1. PROFILE ──────── */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-xs">
                <div className="border-b border-border/40 pb-4 mb-6">
                  <h2 className="text-[15px] font-bold text-foreground tracking-tight">Public Practitioner Profile</h2>
                  <p className="text-[12px] text-muted-foreground mt-0.5">This information is displayed on patient prescriptions and official medical records.</p>
                </div>

                {/* Avatar Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-6 border-b border-border/40">
                  <div className="relative group cursor-pointer">
                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-2xl shadow-md border-2 border-background">
                      IR
                    </div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">Upload new photo</Button>
                      <Button variant="ghost" size="sm">Remove</Button>
                    </div>
                    <p className="text-[11px] text-muted-foreground">Supported formats: JPEG, PNG, WEBP. Max file size 3MB.</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-1 divide-y divide-border/30">
                  <FormRow label="Full Name" description="Your legal medical practitioner name.">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        defaultValue="Dr. Iman"
                        className="h-10 w-full rounded-xl border border-border/60 bg-background px-3.5 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        defaultValue="Reyes"
                        className="h-10 w-full rounded-xl border border-border/60 bg-background px-3.5 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        placeholder="Last Name"
                      />
                    </div>
                  </FormRow>

                  <FormRow label="Email Address" description="Primary address for clinical correspondence.">
                    <div className="relative">
                      <input
                        type="email"
                        defaultValue="iman@meridian.io"
                        className="h-10 w-full rounded-xl border border-border/60 bg-background pl-3.5 pr-24 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 text-[10.5px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                        <CheckCircle2 className="h-3 w-3" /> Verified
                      </span>
                    </div>
                  </FormRow>

                  <FormRow label="Medical License / Specialty" description="Your clinical specialization title.">
                    <select className="h-10 w-full rounded-xl border border-border/60 bg-background px-3.5 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all">
                      <option>Medical Director — General Practice</option>
                      <option>Internal Medicine Specialist</option>
                      <option>Consultant Physician</option>
                      <option>Pediatrician</option>
                    </select>
                  </FormRow>

                  <FormRow label="Practitioner Bio" description="Brief professional summary included in clinic directory.">
                    <textarea
                      rows={3}
                      defaultValue="Medical director at Meridian Clinics with 12+ years experience in preventative medicine, primary care, and integrated clinical operations."
                      className="w-full rounded-xl border border-border/60 bg-background p-3 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                    />
                  </FormRow>
                </div>
              </div>
            </div>
          )}

          {/* ──────── 2. NOTIFICATIONS ──────── */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-xs">
                <div className="border-b border-border/40 pb-4 mb-6">
                  <h2 className="text-[15px] font-bold text-foreground tracking-tight">Clinical & System Alerts</h2>
                  <p className="text-[12px] text-muted-foreground mt-0.5">Control how and when you receive automated notifications.</p>
                </div>

                <div className="space-y-6">
                  {/* Category 1 */}
                  <div>
                    <h3 className="text-[11.5px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-3 font-mono">Patient Activity Alerts</h3>
                    <div className="space-y-3 rounded-xl border border-border/40 bg-muted/20 p-4">
                      {[
                        { key: "appointments", title: "Upcoming Appointment Reminders", desc: "Send automated SMS and email reminders 24 hours before visits." },
                        { key: "cancellations", title: "Immediate Cancellation Notices", desc: "Instant alert when a patient cancels or requests a reschedule." },
                        { key: "newPatients", title: "New Patient Registrations", desc: "Notify when a new patient completes their digital intake form." },
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between gap-4 py-2 border-b border-border/30 last:border-0">
                          <div>
                            <div className="text-[13px] font-semibold text-foreground">{item.title}</div>
                            <div className="text-[11.5px] text-muted-foreground mt-0.5">{item.desc}</div>
                          </div>
                          <Switch
                            checked={notifs[item.key as keyof typeof notifs]}
                            onChange={(val) => setNotifs({ ...notifs, [item.key]: val })}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <h3 className="text-[11.5px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-3 font-mono">Clinic Digests</h3>
                    <div className="space-y-3 rounded-xl border border-border/40 bg-muted/20 p-4">
                      {[
                        { key: "weeklyDigest", title: "Weekly Executive Performance Report", desc: "Every Monday morning summary of patient volume, revenue, and doctor hours." },
                        { key: "urgentSMS", title: "Emergency System Alerts", desc: "Critical system outage and high-priority security notifications via SMS." },
                        { key: "marketing", title: "Product Features & Updates", desc: "Occasional news about new Autonique platform capabilities." },
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between gap-4 py-2 border-b border-border/30 last:border-0">
                          <div>
                            <div className="text-[13px] font-semibold text-foreground">{item.title}</div>
                            <div className="text-[11.5px] text-muted-foreground mt-0.5">{item.desc}</div>
                          </div>
                          <Switch
                            checked={notifs[item.key as keyof typeof notifs]}
                            onChange={(val) => setNotifs({ ...notifs, [item.key]: val })}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ──────── 3. SECURITY ──────── */}
          {activeTab === "security" && (
            <div className="space-y-6">
              {/* Password & 2FA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                        <Key className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[14px] font-bold text-foreground">Password Credentials</h3>
                        <p className="text-[11px] text-muted-foreground">Last updated 45 days ago</p>
                      </div>
                    </div>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                      Ensure your password uses a minimum of 12 characters including numbers and special symbols.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40">
                    <Button variant="outline" size="sm" className="w-full">
                      Change Account Password
                    </Button>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[14px] font-bold text-foreground">Two-Factor Authentication</h3>
                        <Badge tone="success" className="mt-0.5">Enforced & Active</Badge>
                      </div>
                    </div>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                      Protecting your clinical account with an authenticator app (Google Authenticator / 1Password).
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40">
                    <Button variant="outline" size="sm" className="w-full">
                      Configure 2FA Keys
                    </Button>
                  </div>
                </div>
              </div>

              {/* Active Sessions */}
              <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-xs">
                <div className="border-b border-border/40 pb-4 mb-4">
                  <h3 className="text-[14px] font-bold text-foreground">Active Sign-in Sessions</h3>
                  <p className="text-[12px] text-muted-foreground mt-0.5">Currently logged in devices associated with your account.</p>
                </div>
                <div className="divide-y divide-border/30">
                  {[
                    { device: "MacBook Pro 16″", loc: "Berlin, Germany · Chrome 126", time: "Current active session", icon: Laptop, current: true },
                    { device: "iPhone 15 Pro", loc: "Berlin, Germany · Safari Mobile", time: "2 hours ago", icon: Smartphone, current: false },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.device} className="flex items-center justify-between py-3.5">
                        <div className="flex items-center gap-3.5">
                          <div className="h-9 w-9 rounded-xl bg-muted/60 flex items-center justify-center text-muted-foreground">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-foreground flex items-center gap-2">
                              {s.device}
                              {s.current && <Badge tone="success">This Device</Badge>}
                            </div>
                            <div className="text-[11px] font-mono text-muted-foreground mt-0.5">{s.loc} · {s.time}</div>
                          </div>
                        </div>
                        {!s.current && (
                          <Button variant="ghost" size="sm" className="text-rose-600 hover:bg-rose-500/10">
                            Revoke
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}



          {/* ──────── 6. BILLING ──────── */}
          {activeTab === "billing" && (
            <div className="space-y-8">
              {/* Active Plan Overview */}
              <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/8 via-card to-card p-6 shadow-xs">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-border/40 pb-6">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-xl font-black text-foreground tracking-tight">
                        {activePlan === "essential" ? "Essential Plan" : activePlan === "growth" ? "Growth Plan" : "Enterprise Suite"}
                      </span>
                      <Badge tone="success" className="animate-pulse">Active Subscription</Badge>
                    </div>
                    <p className="text-[13px] text-muted-foreground leading-normal">
                      {activePlan === "essential" 
                        ? `$49 / month · Basic practice tools` 
                        : activePlan === "growth"
                        ? `$129 / provider · 4 Active Seats ($516 / month total)`
                        : `Custom pricing · Enterprise Dedicated Suite`}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="bg-background/60 border border-border/40 px-4 py-2 rounded-2xl">
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Next Invoice</div>
                      <div className="text-[13.5px] font-bold text-foreground mt-0.5">Aug 12, 2026</div>
                    </div>
                    <div className="bg-background/60 border border-border/40 px-4 py-2 rounded-2xl">
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Status</div>
                      <div className="text-[13.5px] font-bold text-emerald-600 mt-0.5">Auto-Renew On</div>
                    </div>
                  </div>
                </div>

                {/* Usage Quota Indicators */}
                <div className="mt-6 space-y-4">
                  <h4 className="text-[11.5px] font-bold text-foreground uppercase tracking-wider font-mono text-muted-foreground">
                    Subscription Usage Quotas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Patient Quota */}
                    <div className="bg-background/40 border border-border/40 rounded-2xl p-4.5 space-y-2">
                      <div className="flex justify-between text-[11px] font-bold text-foreground">
                        <span>Patient Records</span>
                        <span className="text-muted-foreground font-mono">4,210 / 5,000 (84%)</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: "84%" }} />
                      </div>
                      <p className="text-[10px] text-muted-foreground">Approaching capacity limit. Upgrade plan to expand limit.</p>
                    </div>

                    {/* WhatsApp Messages */}
                    <div className="bg-background/40 border border-border/40 rounded-2xl p-4.5 space-y-2">
                      <div className="flex justify-between text-[11px] font-bold text-foreground">
                        <span>WhatsApp Automated Broadcasts</span>
                        <span className="text-muted-foreground font-mono">892 / 1,000 (89%)</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full transition-all" style={{ width: "89%" }} />
                      </div>
                      <p className="text-[10px] text-muted-foreground">Resets in 18 days. SMS overage charges may apply.</p>
                    </div>

                    {/* Team Seats */}
                    <div className="bg-background/40 border border-border/40 rounded-2xl p-4.5 space-y-2">
                      <div className="flex justify-between text-[11px] font-bold text-foreground">
                        <span>Active Team Seats</span>
                        <span className="text-muted-foreground font-mono">4 / 10 (40%)</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full transition-all" style={{ width: "40%" }} />
                      </div>
                      <p className="text-[10px] text-muted-foreground">6 seats remaining in your Growth billing tier.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly vs. Annual Selector Toggle */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-1">
                <div>
                  <h3 className="text-[15px] font-black text-foreground tracking-tight">Available Subscription Plans</h3>
                  <p className="text-[12px] text-muted-foreground mt-0.5">Scale or modify your clinical system tier anytime.</p>
                </div>
                <div className="inline-flex items-center gap-1 rounded-2xl bg-muted/60 p-1 border border-border/30">
                  <button
                    type="button"
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-4 py-1.5 rounded-xl text-[12px] font-bold transition-all cursor-pointer ${
                      billingCycle === "monthly"
                        ? "bg-white dark:bg-[#071F1D] text-emerald-850 dark:text-[#2DD4BF] shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("annual")}
                    className={`px-4 py-1.5 rounded-xl text-[12px] font-bold transition-all relative flex items-center gap-1 cursor-pointer ${
                      billingCycle === "annual"
                        ? "bg-white dark:bg-[#071F1D] text-emerald-850 dark:text-[#2DD4BF] shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>Annual</span>
                    <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 px-1 py-0.2 rounded-md text-[8.5px] font-black uppercase">
                      -20%
                    </span>
                  </button>
                </div>
              </div>

              {/* Plans Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tier 1: Essential */}
                <div className={`rounded-3xl border p-6 flex flex-col justify-between transition-all bg-card ${
                  activePlan === "essential"
                    ? "border-emerald-500 shadow-md shadow-emerald-500/5 ring-1 ring-emerald-500/30"
                    : "border-border/60 hover:border-border/100"
                }`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[14.5px] font-extrabold text-foreground">Essential Plan</h4>
                        <p className="text-[11.5px] text-muted-foreground mt-0.5">Sole practitioners starting out.</p>
                      </div>
                      {activePlan === "essential" && (
                        <Badge tone="success">Current</Badge>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 py-1">
                      <span className="text-3xl font-black text-foreground">
                        ${billingCycle === "annual" ? "39" : "49"}
                      </span>
                      <span className="text-[11.5px] text-muted-foreground">/ month</span>
                    </div>
                    <ul className="space-y-2.5 pt-2 text-[12.5px] text-foreground">
                      {[
                        "Up to 2 provider seats",
                        "1,000 Patient Records",
                        "Online Patient Scheduling",
                        "HIPAA-compliant EHR Charting",
                        "Standard E-Prescriptions",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    {activePlan === "essential" ? (
                      <Button variant="outline" className="w-full text-[12px] font-bold" disabled>
                        Active Subscription
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        onClick={() => handleSelectPlan("essential", billingCycle === "annual" ? 39 : 49)}
                        disabled={checkoutLoadingPlan !== null}
                        className="w-full text-[12px] font-bold cursor-pointer"
                      >
                        {checkoutLoadingPlan === "essential" ? (
                          <span className="flex items-center gap-1.5">
                            <RefreshCw className="h-3 animate-spin" /> Preparing checkout...
                          </span>
                        ) : (
                          "Select Essential Plan"
                        )}
                      </Button>
                    )}
                  </div>
                </div>

                {/* Tier 2: Growth (Recommended) */}
                <div className={`rounded-3xl border p-6 flex flex-col justify-between transition-all bg-card relative ${
                  activePlan === "growth"
                    ? "border-emerald-500 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/20"
                    : "border-border/60 hover:border-emerald-500/40"
                }`}>
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-gradient-to-r from-[#0F766E] to-[#0D9488] border border-[#2DD4BF]/40 text-white font-extrabold font-mono text-[9px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    <Sparkles className="h-3 w-3 text-amber-300 animate-pulse" /> RECOMMENDED TIER
                  </div>
                  <div className="space-y-4 pt-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[14.5px] font-extrabold text-foreground">Growth Plan</h4>
                        <p className="text-[11.5px] text-muted-foreground mt-0.5">Growing clinics and operations.</p>
                      </div>
                      {activePlan === "growth" && (
                        <Badge tone="success">Current</Badge>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 py-1">
                      <span className="text-3xl font-black text-foreground">
                        ${billingCycle === "annual" ? "99" : "129"}
                      </span>
                      <span className="text-[11.5px] text-muted-foreground">/ month</span>
                    </div>
                    <ul className="space-y-2.5 pt-2 text-[12.5px] text-foreground">
                      {[
                        "Up to 10 provider seats",
                        "Unlimited Patient Records",
                        "WhatsApp automated scheduling",
                        "AI clinical notes & voice-to-chart",
                        "Multi-terminal billing & invoices",
                        "Priority HIPAA support line",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    {activePlan === "growth" ? (
                      <Button className="w-full text-[12px] font-bold shadow-md shadow-emerald-500/10" disabled>
                        Active Subscription
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleSelectPlan("growth", billingCycle === "annual" ? 99 : 129)}
                        disabled={checkoutLoadingPlan !== null}
                        className="w-full text-[12px] font-bold cursor-pointer"
                      >
                        {checkoutLoadingPlan === "growth" ? (
                          <span className="flex items-center gap-1.5">
                            <RefreshCw className="h-3 animate-spin" /> Preparing checkout...
                          </span>
                        ) : (
                          "Select Growth Plan"
                        )}
                      </Button>
                    )}
                  </div>
                </div>

                {/* Tier 3: Enterprise */}
                <div className={`rounded-3xl border p-6 flex flex-col justify-between transition-all bg-card ${
                  activePlan === "enterprise"
                    ? "border-emerald-500 shadow-md shadow-emerald-500/5 ring-1 ring-emerald-500/30"
                    : "border-border/60 hover:border-border/100"
                }`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[14.5px] font-extrabold text-foreground">Enterprise Suite</h4>
                        <p className="text-[11.5px] text-muted-foreground mt-0.5">Large clinics, groups & hospitals.</p>
                      </div>
                      {activePlan === "enterprise" && (
                        <Badge tone="success">Current</Badge>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 py-1">
                      <span className="text-3xl font-black text-foreground">Custom</span>
                      <span className="text-[11.5px] text-muted-foreground">/ custom contract</span>
                    </div>
                    <ul className="space-y-2.5 pt-2 text-[12.5px] text-foreground">
                      {[
                        "Unlimited provider seats",
                        "Dedicated database isolation",
                        "Custom EHR layout developer access",
                        "On-premise deployment options",
                        "Custom SLA & 1-on-1 team support",
                        "SSO & strict audit log logs",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    {activePlan === "enterprise" ? (
                      <Button variant="outline" className="w-full text-[12px] font-bold" disabled>
                        Active Subscription
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        onClick={() => handleSelectPlan("enterprise", 499)}
                        disabled={checkoutLoadingPlan !== null}
                        className="w-full text-[12px] font-bold cursor-pointer"
                      >
                        {checkoutLoadingPlan === "enterprise" ? (
                          <span className="flex items-center gap-1.5">
                            <RefreshCw className="h-3 animate-spin" /> Preparing checkout...
                          </span>
                        ) : (
                          "Contact Sales / Upgrade"
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Details & Invoice History Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Active Card Details */}
                <div className="rounded-3xl border border-border/50 bg-card p-6 shadow-xs lg:col-span-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[13.5px] font-bold text-foreground mb-3 flex items-center gap-1.5 font-mono text-muted-foreground uppercase tracking-wider">
                      <CreditCard className="h-4 w-4 text-emerald-700 dark:text-emerald-450" />
                      <span>Payment Method</span>
                    </h3>
                    <div className="rounded-2xl border border-border/40 p-4.5 bg-background/50 relative overflow-hidden">
                      <div className="absolute right-3 top-3 font-mono text-[9px] font-extrabold text-[#0D9488] bg-[#CCFBF1] dark:bg-[#07211E] border border-[#0D9488]/20 px-1.5 py-0.2 rounded">
                        Active
                      </div>
                      <div className="font-mono text-[13px] tracking-widest text-foreground font-bold">
                        •••• •••• •••• 4242
                      </div>
                      <div className="flex justify-between items-end mt-5">
                        <div>
                          <div className="text-[7.5px] uppercase tracking-widest text-muted-foreground">Expiry</div>
                          <div className="text-[11.5px] font-mono font-bold text-foreground mt-0.5">12 / 34</div>
                        </div>
                        <div>
                          <div className="text-[7.5px] uppercase tracking-widest text-muted-foreground">Cardholder</div>
                          <div className="text-[11.5px] font-bold text-foreground mt-0.5 uppercase">Dr. Sarah Khan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40">
                    <Button variant="outline" size="sm" className="w-full text-[12px] font-bold cursor-pointer" onClick={() => handleSelectPlan(activePlan, activePlan === "essential" ? 49 : 129)}>
                      Update Credit Card
                    </Button>
                  </div>
                </div>

                {/* Invoices List Table */}
                <div className="rounded-3xl border border-border/50 bg-card p-6 shadow-xs lg:col-span-2">
                  <h3 className="text-[13.5px] font-bold text-foreground mb-4 flex items-center gap-1.5 font-mono text-muted-foreground uppercase tracking-wider">
                    <Receipt className="h-4 w-4 text-emerald-700 dark:text-emerald-450" />
                    <span>Billing History & Invoices</span>
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border/40 text-[10.5px] font-mono text-muted-foreground uppercase tracking-wider">
                          <th className="py-2.5">Invoice ID</th>
                          <th className="py-2.5">Date</th>
                          <th className="py-2.5">Billing Period</th>
                          <th className="py-2.5">Amount</th>
                          <th className="py-2.5">Status</th>
                          <th className="py-2.5 text-right">Receipt</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/20 text-[12px]">
                        {invoices.map((inv) => (
                          <tr key={inv.id} className="hover:bg-muted/10 transition-colors">
                            <td className="py-3 font-semibold text-foreground font-mono">{inv.id}</td>
                            <td className="py-3 text-muted-foreground">{inv.date}</td>
                            <td className="py-3 text-muted-foreground font-mono text-[10.5px]">{inv.duration}</td>
                            <td className="py-3 font-bold text-foreground">{inv.amount}</td>
                            <td className="py-3">
                              <Badge tone="success">{inv.status}</Badge>
                            </td>
                            <td className="py-3 text-right">
                              <button
                                type="button"
                                onClick={() => alert(`Downloading receipt: ${inv.id}`)}
                                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                                title="Download PDF Invoice"
                              >
                                <Download className="h-3.5 w-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {selectedPaymentItem && (
        <StripePaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          item={selectedPaymentItem}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}