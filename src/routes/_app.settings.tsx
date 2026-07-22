import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Bell, Shield, Building2, Palette, CreditCard, Check, CreditCard as StripeIcon, ChevronRight } from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
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

const sections = [
  { id: "profile", label: "Profile", icon: User, desc: "Personal details" },
  { id: "notifications", label: "Notifications", icon: Bell, desc: "Alerts & emails" },
  { id: "security", label: "Security", icon: Shield, desc: "Password & 2FA" },
  { id: "organization", label: "Organization", icon: Building2, desc: "Clinic details" },
  { id: "appearance", label: "Appearance", icon: Palette, desc: "Theme & layout" },
  { id: "billing", label: "Billing", icon: CreditCard, desc: "Plans & invoices" },
] as const;
type SectionId = (typeof sections)[number]["id"];

function SectionTitle({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="mb-5 pb-3 border-b border-border/40">
      <h2 className="text-[14px] font-bold text-foreground tracking-tight">{title}</h2>
      {hint && <p className="mt-0.5 text-[11.5px] text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Field({ label, hint, children, last = false }: { label: string; hint?: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`grid grid-cols-1 items-start gap-3 px-5 py-4 ${!last ? "border-b border-border/30" : ""} sm:grid-cols-[220px_1fr] sm:gap-8`}>
      <div className="min-w-0">
        <div className="text-[12.5px] font-semibold text-foreground">{label}</div>
        {hint && <div className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">{hint}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-8.5 w-full max-w-md rounded-lg border border-border/60 bg-background px-3.5 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all ${props.className ?? ""}`}
    />
  );
}

function Toggle({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
        on ? "bg-emerald-600" : "bg-muted-foreground/25"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
          on ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function Settings() {
  const [active, setActive] = useState<SectionId>("profile");

  const [stripeModalOpen, setStripeModalOpen] = useState(false);
  const [stripeItem, setStripeItem] = useState<StripePaymentItem>({
    title: "Autonique Growth Plan — Monthly",
    description: "4 Provider Seats ($129/provider)",
    amount: 516,
  });

  const handleStripeUpgrade = (planName: string, amount: number) => {
    setStripeItem({
      title: `Autonique Clinic Plan (${planName})`,
      description: `Monthly Clinic Platform Subscription`,
      amount: amount,
    });
    setStripeModalOpen(true);
  };

  const activeSection = sections.find((s) => s.id === active);

  return (
    <>
      <StripePaymentModal
        isOpen={stripeModalOpen}
        onClose={() => setStripeModalOpen(false)}
        item={stripeItem}
        onSuccess={(txId) => { console.log("Stripe payment completed:", txId); }}
      />

      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Clinic & Account <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Settings</span>
          </span>
        }
        description="Manage your account preferences, notification rules, clinic details, and security."
        actions={
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11.5px] text-muted-foreground font-medium hidden sm:inline">Sunday, June 22, 2026</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-400 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              System Active
            </span>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[240px_1fr]">

        {/* Premium Sidebar Nav */}
        <nav className="lg:sticky lg:top-16 lg:self-start space-y-1">
          <div className="mb-3 px-3 text-[9.5px] font-mono font-bold uppercase tracking-[0.18em] text-muted-foreground/70">Preferences</div>
          {sections.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all cursor-pointer group ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 shadow-sm border border-emerald-500/20"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground border border-transparent"
                }`}
              >
                <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-all ${
                  isActive ? "bg-emerald-600 text-white shadow-sm" : "bg-muted/60 text-muted-foreground group-hover:bg-muted"
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-[12.5px] font-semibold leading-none ${isActive ? "text-emerald-800 dark:text-emerald-300" : "text-foreground"}`}>{s.label}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{s.desc}</div>
                </div>
                {isActive && <ChevronRight className="h-3.5 w-3.5 text-emerald-600 shrink-0" />}
              </button>
            );
          })}
        </nav>

        {/* Content Panel */}
        <div className="min-w-0 space-y-1">

          {/* Section breadcrumb */}
          <div className="flex items-center gap-2 mb-4 text-[11px] font-mono text-muted-foreground">
            <span>Settings</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-semibold">{activeSection?.label}</span>
          </div>

          {/* ── PROFILE ── */}
          {active === "profile" && (
            <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 bg-muted/20 border-b border-border/40">
                <div>
                  <h3 className="text-[13px] font-bold text-foreground tracking-tight">Profile Information</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Update your personal details and public profile.</p>
                </div>
                <Button size="sm">Save changes</Button>
              </div>
              <Field label="Avatar" hint="Shown to your team across Autonique.">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-[14px] font-bold text-white shadow-md">IR</div>
                  <div className="space-y-1">
                    <Button variant="outline" size="sm">Upload photo</Button>
                    <p className="text-[10px] text-muted-foreground">JPG or PNG, max 2MB</p>
                  </div>
                </div>
              </Field>
              <Field label="Full name"><Input defaultValue="Dr. Iman Reyes" /></Field>
              <Field label="Email address" hint="We'll send account notifications here."><Input type="email" defaultValue="iman@meridian.io" /></Field>
              <Field label="Role">
                <select className="h-8.5 w-full max-w-md rounded-lg border border-border/60 bg-background px-3.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50">
                  <option>Medical Director</option>
                  <option>Physician</option>
                  <option>Front desk</option>
                  <option>Administrator</option>
                </select>
              </Field>
              <Field label="Bio" hint="A brief description visible on your profile." last>
                <textarea rows={3} defaultValue="Medical director at Meridian Clinics. Focused on preventative care and clinical operations." className="w-full max-w-md rounded-lg border border-border/60 bg-background p-3 text-[12px] focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 resize-none" />
              </Field>
            </div>
          )}

          {/* ── NOTIFICATIONS ── */}
          {active === "notifications" && (
            <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 bg-muted/20 border-b border-border/40">
                <div>
                  <h3 className="text-[13px] font-bold text-foreground tracking-tight">Notification Preferences</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Choose what alerts and emails you receive.</p>
                </div>
              </div>
              {[
                { l: "Appointment reminders", h: "Sent 24 hours before each visit.", d: true },
                { l: "Cancellations", h: "Alert me when a patient cancels.", d: true },
                { l: "New patients", h: "When a new patient is added to the clinic.", d: false },
                { l: "Weekly report", h: "Digest of clinic activity every Monday.", d: true },
                { l: "Product updates", h: "Occasional emails about new Autonique features.", d: false },
              ].map((n, i, arr) => (
                <Field key={n.l} label={n.l} hint={n.h} last={i === arr.length - 1}><Toggle defaultChecked={n.d} /></Field>
              ))}
            </div>
          )}

          {/* ── SECURITY ── */}
          {active === "security" && (
            <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 bg-muted/20 border-b border-border/40">
                <div>
                  <h3 className="text-[13px] font-bold text-foreground tracking-tight">Security Settings</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Manage your password, 2FA, and active sessions.</p>
                </div>
              </div>
              <Field label="Password" hint="Last changed 3 months ago."><Button variant="outline" size="sm">Change password</Button></Field>
              <Field label="Two-factor authentication" hint="Add an extra layer of security to your account.">
                <div className="flex items-center gap-3"><Toggle defaultChecked /><Badge tone="success">Enabled</Badge></div>
              </Field>
              <Field label="Active sessions" hint="Devices currently signed in to your account." last>
                <ul className="w-full max-w-md divide-y divide-border/40 rounded-xl border border-border/60 overflow-hidden shadow-sm">
                  {[
                    { d: "MacBook Pro · Berlin", w: "Active now", cur: true },
                    { d: "iPhone 17 · Berlin", w: "2 hours ago" },
                  ].map((s) => (
                    <li key={s.d} className="flex items-center justify-between px-4 py-3 hover:bg-muted/20 transition-colors">
                      <div>
                        <div className="text-[12px] font-semibold text-foreground">{s.d}</div>
                        <div className="text-[10.5px] font-mono text-muted-foreground mt-0.5">{s.w}</div>
                      </div>
                      {s.cur ? <Badge tone="success">This device</Badge> : <Button variant="ghost" size="sm">Sign out</Button>}
                    </li>
                  ))}
                </ul>
              </Field>
            </div>
          )}

          {/* ── ORGANIZATION ── */}
          {active === "organization" && (
            <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 bg-muted/20 border-b border-border/40">
                <div>
                  <h3 className="text-[13px] font-bold text-foreground tracking-tight">Organization Details</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Legal clinic information used on invoices and receipts.</p>
                </div>
                <Button size="sm">Save changes</Button>
              </div>
              <Field label="Clinic name"><Input defaultValue="Meridian Clinics" /></Field>
              <Field label="Legal entity" hint="Used on invoices and receipts."><Input defaultValue="Meridian Clinics GmbH" /></Field>
              <Field label="Tax ID"><Input defaultValue="DE 342 118 990" /></Field>
              <Field label="Address">
                <textarea rows={3} defaultValue={"Torstraße 142\n10119 Berlin, Germany"} className="w-full max-w-md rounded-lg border border-border/60 bg-background p-3 text-[12px] focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 resize-none" />
              </Field>
              <Field label="Team members" hint="4 seats used of 10 available." last>
                <ul className="w-full max-w-md divide-y divide-border/40 rounded-xl border border-border/60 overflow-hidden shadow-sm">
                  {[
                    { n: "Iman Reyes", r: "Owner", color: "from-emerald-500 to-teal-600" },
                    { n: "Ngozi Okafor", r: "Physician", color: "from-violet-500 to-indigo-600" },
                    { n: "Lukas Berger", r: "Front desk", color: "from-sky-500 to-blue-600" },
                    { n: "Amelia Voss", r: "Administrator", color: "from-amber-500 to-orange-600" },
                  ].map((m) => (
                    <li key={m.n} className="flex items-center justify-between px-4 py-3 hover:bg-muted/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br ${m.color} font-bold text-[10px] text-white shadow-sm`}>
                          {m.n.split(" ").map((p) => p[0]).join("")}
                        </div>
                        <div>
                          <div className="text-[12px] font-semibold text-foreground">{m.n}</div>
                          <div className="text-[10.5px] text-muted-foreground">{m.r}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Manage</Button>
                    </li>
                  ))}
                </ul>
              </Field>
            </div>
          )}

          {/* ── APPEARANCE ── */}
          {active === "appearance" && (
            <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 bg-muted/20 border-b border-border/40">
                <div>
                  <h3 className="text-[13px] font-bold text-foreground tracking-tight">Appearance</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Customise how Autonique looks and feels.</p>
                </div>
              </div>
              <Field label="Theme" hint="Choose how Autonique looks to you.">
                <div className="grid max-w-md grid-cols-3 gap-3">
                  {[{ l: "Light", active: true }, { l: "Dark" }, { l: "System" }].map((t) => (
                    <button key={t.l} className={`rounded-xl border p-3.5 text-left transition-all cursor-pointer ${t.active ? "border-emerald-600 bg-emerald-500/5 shadow-sm" : "border-border/60 hover:bg-accent hover:border-border"}`}>
                      <div className={`mb-2.5 h-14 rounded-lg border ${t.active ? "border-emerald-500/20" : "border-border/40"} bg-background shadow-xs`} />
                      <div className="flex items-center justify-between text-[11.5px] font-semibold text-foreground">
                        {t.l}
                        {t.active && <Check className="h-3.5 w-3.5 text-emerald-600" />}
                      </div>
                    </button>
                  ))}
                </div>
              </Field>
              <Field label="Density" hint="Comfortable spacing or a denser layout.">
                <div className="inline-flex rounded-lg border border-border/60 p-0.5 bg-muted/20">
                  {["Comfortable", "Compact"].map((d, i) => (
                    <button key={d} className={`px-3 py-1.5 text-[11.5px] rounded-md cursor-pointer transition-all ${i === 1 ? "bg-emerald-600 text-white font-semibold shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>{d}</button>
                  ))}
                </div>
              </Field>
              <Field label="Font" hint="Interface typography." last>
                <select className="h-8.5 w-full max-w-md rounded-lg border border-border/60 bg-background px-3.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50">
                  <option>Geist + Inter (default)</option>
                  <option>System</option>
                </select>
              </Field>
            </div>
          )}

          {/* ── BILLING ── */}
          {active === "billing" && (
            <div className="space-y-5">
              {/* Active Plan Overview */}
              <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/8 to-background p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[16px] font-bold text-foreground">Growth Plan</span>
                      <Badge tone="success">Active Subscription</Badge>
                    </div>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                      $129 / provider · <strong className="text-foreground">4 Active Provider Seats</strong> ($516 / month total)
                    </p>
                    <p className="text-[11px] font-mono text-muted-foreground/80 mt-1">
                      Billing Cycle: Monthly · Next Renewal: August 12, 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Plan Features & Inclusions */}
              <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
                <div className="px-5 py-4 bg-muted/20 border-b border-border/40">
                  <h3 className="text-[13px] font-bold text-foreground tracking-tight">Included in Your Plan</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Features enabled for your clinic under the Growth tier.</p>
                </div>
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-[12px]">
                  {[
                    "Up to 10 Provider Seats",
                    "Unlimited Patient Records",
                    "WhatsApp Appointment Reminders",
                    "Full EHR & Clinical Charting",
                    "Revenue & Analytics Dashboard",
                    "24/7 Priority Support",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-foreground font-medium">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}