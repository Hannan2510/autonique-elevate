import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";
import { Badge, Button, PageHeader } from "@/components/app/AppShell";

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
            <div className="space-y-6">
              <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/8 via-card to-card p-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/40 pb-5">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-xl font-bold text-foreground">Growth Plan</span>
                      <Badge tone="success">Active Subscription</Badge>
                    </div>
                    <p className="text-[12.5px] text-muted-foreground">
                      $129 / provider · <strong className="text-foreground">4 Active Seats</strong> ($516 / month total)
                    </p>
                  </div>
                  <div className="text-right sm:text-right">
                    <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Next Billing Date</div>
                    <div className="text-[14px] font-bold text-foreground mt-0.5">August 12, 2026</div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-[12.5px] font-semibold text-foreground uppercase tracking-wider mb-3 font-mono text-muted-foreground">Features Included in Your Subscription</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      "Up to 10 Provider Seats",
                      "Unlimited Patient Records",
                      "WhatsApp Patient Engagement",
                      "E-Prescriptions & EHR Charting",
                      "Revenue Analytics & Reports",
                      "24/7 Dedicated Support",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-[12.5px] font-medium text-foreground bg-background/60 p-2.5 rounded-xl border border-border/40">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}