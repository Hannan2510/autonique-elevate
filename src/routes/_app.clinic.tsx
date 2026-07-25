import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CreditCard as StripeIcon,
  Shield,
  Building2,
  Check,
  Zap,
  Sparkles,
  Download,
  AlertCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { StripePaymentModal, StripePaymentItem } from "@/components/app/StripePaymentModal";

export const Route = createFileRoute("/_app/clinic")({
  head: () => ({
    meta: [
      { title: "Clinic Billing & Subscriptions · Autonique" },
      { name: "description", content: "Manage clinic platform subscriptions, billing and Stripe payment gateway." },
      { property: "og:title", content: "Clinic Billing & Subscriptions · Autonique" },
      { property: "og:description", content: "Manage clinic platform subscriptions, billing and Stripe payment gateway." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ClinicPanel,
});

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
      className={`h-9 w-full max-w-md rounded-xl border border-border/60 bg-background px-3.5 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all ${props.className ?? ""}`}
    />
  );
}

function ClinicPanel() {
  const [stripeModalOpen, setStripeModalOpen] = useState(false);
  const [stripeItem, setStripeItem] = useState<StripePaymentItem>({
    title: "Autonique Growth Plan — Monthly",
    description: "4 Provider Seats ($129/provider)",
    amount: 516,
  });

  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [activePlan, setActivePlan] = useState<"starter" | "growth" | "enterprise">("growth");
  const [checkoutLoadingPlan, setCheckoutLoadingPlan] = useState<string | null>(null);

  // Invoices list
  const [invoices, setInvoices] = useState([
    { id: "INV-2841", date: "12 Jul 2026", duration: "Jun 12, 2026 - Jul 12, 2026", amount: 516, paid: true },
    { id: "INV-2779", date: "12 Jun 2026", duration: "May 12, 2026 - Jun 12, 2026", amount: 516, paid: true },
    { id: "INV-2701", date: "12 May 2026", duration: "Apr 12, 2026 - May 12, 2026", amount: 387, paid: false },
  ]);

  const handleStripeUpgrade = (planName: string, amount: number, isInvoice: boolean = false) => {
    setStripeItem({
      title: isInvoice ? `Payment for ${planName}` : `Upgrade to Autonique ${planName}`,
      description: isInvoice ? "Outstanding Clinic Statement" : `Monthly Clinic Platform Subscription`,
      amount: amount,
      invoiceId: isInvoice ? planName : `INV-${Math.floor(1000 + Math.random() * 9000)}`,
      patientName: "Clinic Billing Account",
    });
    setStripeModalOpen(true);
  };

  const handlePaymentSuccess = (txId: string) => {
    // Mark invoices paid if paying an invoice, or update plan
    if (stripeItem.title.includes("INV-2701")) {
      setInvoices((prev) =>
        prev.map((inv) => (inv.id === "INV-2701" ? { ...inv, paid: true } : inv))
      );
    } else {
      // Upgrade subscription plan
      if (stripeItem.title.includes("Starter")) {
        setActivePlan("starter");
      } else if (stripeItem.title.includes("Growth")) {
        setActivePlan("growth");
      } else if (stripeItem.title.includes("Enterprise")) {
        setActivePlan("enterprise");
      }
    }
  };

  const triggerSelectPlan = (planId: "starter" | "growth" | "enterprise", amount: number) => {
    setCheckoutLoadingPlan(planId);
    setTimeout(() => {
      setCheckoutLoadingPlan(null);
      handleStripeUpgrade(
        planId.charAt(0).toUpperCase() + planId.slice(1) + " Plan",
        amount
      );
    }, 800);
  };

  return (
    <>
      {/* Stripe Payment Modal */}
      <StripePaymentModal
        isOpen={stripeModalOpen}
        onClose={() => setStripeModalOpen(false)}
        item={stripeItem}
        onSuccess={handlePaymentSuccess}
      />

      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Clinic <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Panel</span>
          </span>
        }
        description="Manage clinic platform subscriptions, payment methods, billing statements, and secure Stripe checkout."
        actions={
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11.5px] text-muted-foreground font-medium hidden sm:inline">Sunday, June 22, 2026</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-400 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Gateway Online
            </span>
          </div>
        }
      />

      <div className="px-4 py-6 sm:px-6 space-y-6">
        {/* Active Plan Banner */}
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/8 via-card to-card p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-lg font-black text-foreground tracking-tight">
                  {activePlan === "starter" ? "Starter Plan" : activePlan === "growth" ? "Growth Plan" : "Enterprise Suite"}
                </span>
                <Badge tone="success">Active</Badge>
                <Badge tone="info">Stripe Secured</Badge>
              </div>
              <p className="text-[12.5px] text-muted-foreground leading-normal">
                {activePlan === "starter"
                  ? `$49/month · Basic sole clinic dashboard`
                  : activePlan === "growth"
                  ? `$129/provider · 4 Active Providers · $516/month total`
                  : `$899/month · Enterprise Hospital Suite`}
                {" · "} Renews <span className="font-semibold text-foreground">August 12, 2026</span>
              </p>
            </div>
            <button
              onClick={() => handleStripeUpgrade(activePlan === "starter" ? "Starter Plan Renewal" : activePlan === "growth" ? "Growth Plan Renewal" : "Enterprise Renewal", activePlan === "starter" ? 49 : activePlan === "growth" ? 516 : 899)}
              className="shrink-0 h-10.5 px-4.5 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:scale-[1.01] active:scale-[0.99] text-white text-[12.5px] font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer shadow-[#0D9488]/10"
            >
              <StripeIcon className="h-4 w-4" />
              <span>Pay ${activePlan === "starter" ? 49 : activePlan === "growth" ? 516 : 899} via Stripe</span>
            </button>
          </div>
        </div>

        {/* Subscription Tiers Section */}
        <div className="rounded-3xl border border-border/50 bg-card shadow-xs overflow-hidden">
          <div className="px-6 py-4 bg-muted/20 border-b border-border/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">Clinic Subscription Plans</h3>
              <p className="text-[11.5px] text-muted-foreground mt-0.5">Scale or modify your clinic workspace features instantly.</p>
            </div>
            {/* Monthly / Annual Cycle Toggle */}
            <div className="inline-flex items-center gap-1 rounded-xl bg-muted/60 p-1 border border-border/30">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-3.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  billingCycle === "monthly"
                    ? "bg-white dark:bg-[#071F1D] text-emerald-800 dark:text-[#2DD4BF] shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`px-3.5 py-1 rounded-lg text-[11px] font-bold transition-all relative flex items-center gap-1 cursor-pointer ${
                  billingCycle === "annual"
                    ? "bg-white dark:bg-[#071F1D] text-emerald-800 dark:text-[#2DD4BF] shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>Annual</span>
                <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 px-1 py-0.2 rounded text-[8px] font-black uppercase">
                  -20%
                </span>
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  id: "starter",
                  name: "Starter",
                  price: billingCycle === "annual" ? 39 : 49,
                  desc: "For single practitioner clinics starting out.",
                  seats: "1 Provider Seat Included",
                  features: ["HIPAA-compliant Charting", "Basic Patient Scheduler", "Standard Prescriptions"],
                },
                {
                  id: "growth",
                  name: "Growth",
                  price: billingCycle === "annual" ? 99 : 129,
                  desc: "For expanding multi-doctor practices and centers.",
                  seats: "$129/provider/mo billing",
                  features: ["Unlimited Patient Records", "WhatsApp automated reminders", "AI Voice clinical notes", "Multi-Campus configuration"],
                },
                {
                  id: "enterprise",
                  name: "Enterprise",
                  price: billingCycle === "annual" ? 719 : 899,
                  desc: "For multi-campus medical hospital groups.",
                  seats: "Unlimited Provider Seats",
                  features: ["Dedicated Database Isolation", "Custom EHR Developer API", "Dedicated SLA Manager", "SSO/SAML Integration"],
                },
              ].map((tier) => {
                const isCurrent = activePlan === tier.id;
                return (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-5 border transition-all flex flex-col justify-between relative bg-background ${
                      isCurrent
                        ? "border-emerald-500 bg-gradient-to-br from-emerald-500/5 to-card shadow-sm"
                        : "border-border/60 hover:border-emerald-500/30 hover:shadow-xs"
                    }`}
                  >
                    {isCurrent && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold font-mono text-[8px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        Current Active Plan
                      </div>
                    )}
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[13.5px] font-bold text-foreground">{tier.name}</span>
                        {tier.id === "growth" && !isCurrent && (
                          <span className="text-[8.5px] font-black uppercase text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/20">Popular</span>
                        )}
                      </div>
                      <div className="font-display text-[22px] font-black tracking-tight text-foreground">
                        ${tier.price} <span className="text-[11px] text-muted-foreground font-mono font-normal">/mo</span>
                      </div>
                      <p className="text-[11.5px] text-muted-foreground leading-normal">{tier.desc}</p>
                      
                      <div className="border-t border-border/20 pt-3">
                        <div className="text-[10px] font-mono text-emerald-700 dark:text-emerald-450 font-bold mb-2 uppercase tracking-wide">
                          {tier.seats}
                        </div>
                        <ul className="space-y-1.5 text-[11.5px] text-muted-foreground">
                          {tier.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-1.5">
                              <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => triggerSelectPlan(tier.id as any, tier.price)}
                      disabled={isCurrent || checkoutLoadingPlan !== null}
                      className={`mt-6 w-full h-9.5 rounded-xl text-[12px] font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-98"
                      }`}
                    >
                      {checkoutLoadingPlan === tier.id ? (
                        <span className="flex items-center gap-1.5">
                          <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                          <span>Connecting...</span>
                        </span>
                      ) : (
                        <>
                          <StripeIcon className="h-3.5 w-3.5" />
                          <span>{isCurrent ? "Active Plan" : `Upgrade $${tier.price}/mo`}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Payment Method Details */}
        <div className="rounded-3xl border border-border/50 bg-card shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-muted/20 border-b border-border/40">
            <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">Active Payment Method</h3>
          </div>
          <Field label="Credit / Debit Card on file" hint="Automatically charged on your monthly renewal date.">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 bg-background/50 border border-border/40 p-3 rounded-2xl w-full max-w-sm relative">
                <div className="grid h-8.5 w-13 place-items-center rounded-xl bg-emerald-950 font-mono text-[9px] font-black text-white border border-white/10 shadow-xs">
                  VISA
                </div>
                <div>
                  <div className="text-[12.5px] font-mono font-bold text-foreground">•••• •••• •••• 4242</div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-0.5">Expires 12 / 34 · Verification: VISA TEST</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="cursor-pointer" onClick={() => handleStripeUpgrade("Card Verification Sync", 1)}>
                <StripeIcon className="h-3.5 w-3.5 text-emerald-650" />
                <span>Update via Stripe</span>
              </Button>
            </div>
          </Field>
          <Field label="Billing email address" last>
            <Input defaultValue="billing@meridian.io" />
          </Field>
        </div>

        {/* Invoices History Table */}
        <div className="rounded-3xl border border-border/50 bg-card shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-muted/20 border-b border-border/40 flex items-center justify-between">
            <div>
              <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">Invoice History & Ledger</h3>
              <p className="text-[11.5px] text-muted-foreground mt-0.5">Clinical platform subscription receipts processed by Stripe.</p>
            </div>
            <Badge tone="success" className="font-mono">Stripe SECURE</Badge>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px] text-left">
              <thead className="border-b border-border/40 bg-muted/10 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3.5 font-bold">Invoice ID</th>
                  <th className="px-6 py-3.5 font-bold">Billing Period</th>
                  <th className="px-6 py-3.5 font-bold">Date Issued</th>
                  <th className="px-6 py-3.5 text-right font-bold">Amount Due</th>
                  <th className="px-6 py-3.5 text-right font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-muted/15 transition-colors">
                    <td className="px-6 py-3.5 font-mono text-[12.5px] font-semibold text-foreground">{inv.id}</td>
                    <td className="px-6 py-3.5 font-mono text-[11px] text-muted-foreground">{inv.duration}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{inv.date}</td>
                    <td className="px-6 py-3.5 text-right font-mono font-bold text-foreground">${inv.amount.toFixed(2)}</td>
                    <td className="px-6 py-3.5 text-right">
                      {inv.paid ? (
                        <Badge tone="success">Paid</Badge>
                      ) : (
                        <button
                          onClick={() => handleStripeUpgrade(inv.id, inv.amount, true)}
                          className="h-8 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10.5px] font-bold inline-flex items-center gap-1 shadow-sm cursor-pointer transition-all active:scale-98"
                        >
                          <StripeIcon className="h-3 w-3" />
                          <span>Pay Invoice</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}
