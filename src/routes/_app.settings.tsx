import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Bell, Shield, Building2, Palette, CreditCard, Check, CreditCard as StripeIcon } from "lucide-react";
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
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "organization", label: "Organization", icon: Building2 },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "billing", label: "Billing", icon: CreditCard },
] as const;
type SectionId = (typeof sections)[number]["id"];

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-2 border-b border-border/40 px-4 py-3.5 last:border-0 sm:grid-cols-[200px_1fr] sm:gap-6">
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
      className={`h-8 w-full max-w-md rounded-md border border-border/60 bg-background px-3 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring ${props.className ?? ""}`}
    />
  );
}

function Toggle({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
      className={`relative h-4.5 w-8 rounded-full border transition-colors cursor-pointer ${on ? "border-emerald-600 bg-emerald-600" : "border-border/60 bg-muted"}`}
    >
      <span className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-transform ${on ? "translate-x-3.5" : "translate-x-0.5"}`} />
    </button>
  );
}

function Settings() {
  const [active, setActive] = useState<SectionId>("profile");

  // Stripe Modal State
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

  return (
    <>
      {/* Stripe Payment Modal */}
      <StripePaymentModal
        isOpen={stripeModalOpen}
        onClose={() => setStripeModalOpen(false)}
        item={stripeItem}
        onSuccess={(txId) => {
          console.log("Stripe payment completed:", txId);
        }}
      />

      {/* PageHeader - Overview Theme Match */}
      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Clinic & Account <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Settings</span>
          </span>
        }
        description="Manage your account preferences, notification rules, clinic legal details, and security parameters."
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

      <div className="grid grid-cols-1 gap-6 px-4 py-5 sm:px-6 lg:grid-cols-[200px_1fr]">
        <nav className="lg:sticky lg:top-16 lg:self-start">
          <div className="mb-2 px-2 text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-muted-foreground">Preferences</div>
          <ul className="flex gap-1 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {sections.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <li key={s.id} className="shrink-0">
                  <button
                    onClick={() => setActive(s.id)}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-left text-[12.5px] font-medium transition-all cursor-pointer ${
                      isActive
                        ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold shadow-2xs border border-emerald-500/20"
                        : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${isActive ? "text-emerald-600" : ""}`} />
                    <span>{s.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="min-w-0">
          {active === "profile" && (
            <Card title="Profile" action={<Button size="sm">Save changes</Button>} padding="p-0">
              <Field label="Avatar" hint="Shown to your team across Autonique.">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-emerald-600 text-[13px] font-bold text-white shadow-2xs">IR</div>
                  <Button variant="outline" size="sm">Upload</Button>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
              </Field>
              <Field label="Full name"><Input defaultValue="Dr. Iman Reyes" /></Field>
              <Field label="Email address" hint="We'll send account notifications here."><Input type="email" defaultValue="iman@meridian.io" /></Field>
              <Field label="Role">
                <select className="h-8 w-full max-w-md rounded-md border border-border/60 bg-background px-3 text-[12px]">
                  <option>Medical Director</option>
                  <option>Physician</option>
                  <option>Front desk</option>
                  <option>Administrator</option>
                </select>
              </Field>
              <Field label="Bio" hint="A brief description visible on your profile.">
                <textarea rows={3} defaultValue="Medical director at Meridian Clinics. Focused on preventative care and clinical operations." className="w-full max-w-md rounded-md border border-border/60 bg-background p-2.5 text-[12px] focus:outline-none focus:ring-1 focus:ring-ring" />
              </Field>
            </Card>
          )}

          {active === "notifications" && (
            <Card title="Notifications" padding="p-0">
              {[
                { l: "Appointment reminders", h: "Sent 24 hours before each visit.", d: true },
                { l: "Cancellations", h: "Alert me when a patient cancels.", d: true },
                { l: "New patients", h: "When a new patient is added to the clinic.", d: false },
                { l: "Weekly report", h: "Digest of clinic activity every Monday.", d: true },
                { l: "Product updates", h: "Occasional emails about new Autonique features.", d: false },
              ].map((n) => (
                <Field key={n.l} label={n.l} hint={n.h}><Toggle defaultChecked={n.d} /></Field>
              ))}
            </Card>
          )}

          {active === "security" && (
            <Card title="Security" padding="p-0">
              <Field label="Password" hint="Last changed 3 months ago."><Button variant="outline" size="sm">Change password</Button></Field>
              <Field label="Two-factor authentication" hint="Add an extra layer of security to your account.">
                <div className="flex items-center gap-3"><Toggle defaultChecked /><Badge tone="success">Enabled</Badge></div>
              </Field>
              <Field label="Active sessions" hint="Devices currently signed in to your account.">
                <ul className="w-full max-w-md divide-y divide-border/40 rounded-md border border-border/60">
                  {[
                    { d: "MacBook Pro · Berlin", w: "Active now", cur: true },
                    { d: "iPhone 17 · Berlin", w: "2 hours ago" },
                  ].map((s) => (
                    <li key={s.d} className="flex items-center justify-between px-3.5 py-2.5">
                      <div>
                        <div className="text-[12px] font-semibold text-foreground">{s.d}</div>
                        <div className="text-[10.5px] font-mono text-muted-foreground">{s.w}</div>
                      </div>
                      {s.cur ? <Badge tone="success">This device</Badge> : <Button variant="ghost" size="sm">Sign out</Button>}
                    </li>
                  ))}
                </ul>
              </Field>
            </Card>
          )}

          {active === "organization" && (
            <Card title="Organization" padding="p-0" action={<Button size="sm">Save changes</Button>}>
              <Field label="Clinic name"><Input defaultValue="Meridian Clinics" /></Field>
              <Field label="Legal entity" hint="Used on invoices and receipts."><Input defaultValue="Meridian Clinics GmbH" /></Field>
              <Field label="Tax ID"><Input defaultValue="DE 342 118 990" /></Field>
              <Field label="Address">
                <textarea rows={3} defaultValue={"Torstraße 142\n10119 Berlin, Germany"} className="w-full max-w-md rounded-md border border-border/60 bg-background p-2.5 text-[12px] focus:outline-none focus:ring-1 focus:ring-ring" />
              </Field>
              <Field label="Team members" hint="4 seats used of 10 available.">
                <ul className="w-full max-w-md divide-y divide-border/40 rounded-md border border-border/60">
                  {[
                    { n: "Iman Reyes", r: "Owner" },
                    { n: "Ngozi Okafor", r: "Physician" },
                    { n: "Lukas Berger", r: "Front desk" },
                    { n: "Amelia Voss", r: "Administrator" },
                  ].map((m) => (
                    <li key={m.n} className="flex items-center justify-between px-3.5 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="grid h-7 w-7 place-items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 font-mono text-[10px] font-bold text-emerald-800 dark:text-emerald-300">
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
            </Card>
          )}

          {active === "appearance" && (
            <Card title="Appearance" padding="p-0">
              <Field label="Theme" hint="Choose how Autonique looks to you.">
                <div className="grid max-w-md grid-cols-3 gap-3">
                  {[{ l: "Light", active: true }, { l: "Dark" }, { l: "System" }].map((t) => (
                    <button key={t.l} className={`rounded-md border p-3 text-left transition-colors cursor-pointer ${t.active ? "border-emerald-600 bg-emerald-500/5" : "border-border/60 hover:bg-accent"}`}>
                      <div className="mb-2 h-12 rounded border border-border/60 bg-background" />
                      <div className="flex items-center justify-between text-[11.5px] font-semibold text-foreground">
                        {t.l}
                        {t.active && <Check className="h-3 w-3 text-emerald-600" />}
                      </div>
                    </button>
                  ))}
                </div>
              </Field>
              <Field label="Density" hint="Comfortable spacing or a denser layout.">
                <div className="inline-flex rounded-md border border-border/60 p-0.5">
                  {["Comfortable", "Compact"].map((d, i) => (
                    <button key={d} className={`px-2.5 py-0.5 text-[11.5px] rounded-[4px] cursor-pointer ${i === 1 ? "bg-emerald-600 text-white font-semibold" : "text-muted-foreground"}`}>{d}</button>
                  ))}
                </div>
              </Field>
              <Field label="Font" hint="Interface typography.">
                <select className="h-8 w-full max-w-md rounded-md border border-border/60 bg-background px-3 text-[12px]">
                  <option>Geist + Inter (default)</option>
                  <option>System</option>
                </select>
              </Field>
            </Card>
          )}

          {active === "billing" && (
            <div className="space-y-5">
              {/* Single Unified Clinic Owner Subscription Card */}
              <Card title="Clinic Subscription & Plans" padding="p-4 sm:p-5">
                {/* Active Plan Banner (Nested inside Card) */}
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-foreground">Current: Growth Plan</span>
                      <Badge tone="success">Stripe Billed Monthly</Badge>
                    </div>
                    <p className="text-[11px] font-mono text-muted-foreground mt-0.5">
                      $129/provider · 4 active providers ($516/mo total) · Renews 12 Aug 2026
                    </p>
                  </div>
                  <button
                    onClick={() => handleStripeUpgrade("Growth Plan Monthly Renewal", 516)}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11.5px] font-semibold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                  >
                    <StripeIcon className="h-3.5 w-3.5" />
                    <span>Pay $516 via Stripe</span>
                  </button>
                </div>

                {/* Subscription Tiers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Starter", price: 49, desc: "For single practitioner clinics", seats: "1 Provider Seat", popular: false },
                    { name: "Growth", price: 129, desc: "For expanding multi-doctor practices", seats: "$129/provider/mo", popular: true },
                    { name: "Enterprise", price: 899, desc: "For multi-campus hospital groups", seats: "Unlimited Seats", popular: false },
                  ].map((tier) => (
                    <div
                      key={tier.name}
                      className={`rounded-xl p-3.5 border transition-all flex flex-col justify-between ${
                        tier.popular
                          ? "border-emerald-500/40 bg-emerald-500/5 shadow-2xs"
                          : "border-border/60 bg-card hover:bg-muted/20"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[13px] font-bold text-foreground">{tier.name}</span>
                          {tier.popular && <Badge tone="success">Active</Badge>}
                        </div>
                        <div className="mt-1 font-display text-[17px] font-bold tracking-tight text-foreground">
                          ${tier.price} <span className="text-[10.5px] text-muted-foreground font-mono font-normal">/mo</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{tier.desc}</p>
                        <div className="mt-2 font-mono text-[10px] text-emerald-800 dark:text-emerald-300 font-semibold">
                          {tier.seats}
                        </div>
                      </div>

                      <button
                        onClick={() => handleStripeUpgrade(`${tier.name} Subscription`, tier.price)}
                        className={`mt-3 w-full h-8 py-1 rounded-lg text-[11px] font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          tier.popular
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-2xs"
                            : "border border-border/80 hover:bg-accent text-foreground"
                        }`}
                      >
                        <StripeIcon className="h-3 w-3" />
                        <span>{tier.popular ? "Manage Stripe Subscription" : `Subscribe $${tier.price}/mo`}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Payment Method Card */}
              <Card title="Stripe Payment Method" padding="p-0">
                <Field label="Card on file" hint="Used for automated monthly subscription renewals.">
                  <div className="flex items-center gap-3">
                    <div className="grid h-7 w-11 place-items-center rounded border border-border/60 bg-emerald-950 font-mono text-[9.5px] font-bold text-white">VISA</div>
                    <div className="text-[12px] font-mono font-semibold">•••• 4242</div>
                    <div className="text-[11px] font-mono text-muted-foreground">Expires 08 / 28</div>
                    <Button variant="outline" size="sm" onClick={() => handleStripeUpgrade("Card Authorization", 1)}>
                      <StripeIcon className="h-3 w-3 text-emerald-600" />
                      <span>Update Card with Stripe</span>
                    </Button>
                  </div>
                </Field>
                <Field label="Billing email"><Input defaultValue="billing@meridian.io" /></Field>
              </Card>

              {/* Clinic Platform Invoices */}
              <Card title="Monthly Subscription Invoices" padding="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-[11.5px]">
                    <thead className="border-b border-border/40 bg-muted/40 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-4 py-2 font-semibold">Invoice</th>
                        <th className="px-4 py-2 font-semibold">Billing Date</th>
                        <th className="px-4 py-2 text-right font-semibold">Amount</th>
                        <th className="px-4 py-2 text-right font-semibold">Stripe Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {[
                        { i: "INV-2841", d: "12 Jul 2026", a: 516, paid: true },
                        { i: "INV-2779", d: "12 Jun 2026", a: 516, paid: true },
                        { i: "INV-2701", d: "12 May 2026", a: 387, paid: false },
                      ].map((r) => (
                        <tr key={r.i} className="hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-2.5 font-mono text-muted-foreground">{r.i}</td>
                          <td className="px-4 py-2.5 font-medium text-foreground">{r.d}</td>
                          <td className="px-4 py-2.5 text-right font-mono text-foreground font-semibold">${r.a}</td>
                          <td className="px-4 py-2.5 text-right">
                            {r.paid ? (
                              <Badge tone="success">Paid via Stripe</Badge>
                            ) : (
                              <button
                                onClick={() => handleStripeUpgrade(`Invoice ${r.i}`, r.a)}
                                className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10.5px] font-medium inline-flex items-center gap-1 shadow-2xs cursor-pointer"
                              >
                                <StripeIcon className="h-3 w-3" />
                                <span>Pay Stripe Invoice</span>
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </>
  );
}