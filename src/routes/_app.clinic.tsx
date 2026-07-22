import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CreditCard as StripeIcon, Shield, Building2, Check, Zap } from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { StripePaymentModal, StripePaymentItem } from "@/components/app/StripePaymentModal";

export const Route = createFileRoute("/_app/clinic")({
  head: () => ({
    meta: [
      { title: "Clinic Panel · Autonique" },
      { name: "description", content: "Manage clinic platform subscriptions, payment gateway and billing." },
      { property: "og:title", content: "Clinic Panel · Autonique" },
      { property: "og:description", content: "Manage clinic platform subscriptions, payment gateway and billing." },
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
      className={`h-8.5 w-full max-w-md rounded-lg border border-border/60 bg-background px-3.5 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all ${props.className ?? ""}`}
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

      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Clinic <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Panel</span>
          </span>
        }
        description="Manage clinic platform subscriptions, billing and Stripe payment gateway."
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
        <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/8 to-background p-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span className="text-[14px] font-bold text-foreground">Growth Plan</span>
                <Badge tone="success">Active</Badge>
                <Badge tone="info">Stripe Billed</Badge>
              </div>
              <p className="text-[11.5px] font-mono text-muted-foreground">
                $129/provider · 4 active providers · <strong className="text-foreground">$516/mo total</strong> · Renews 12 Aug 2026
              </p>
            </div>
            <button
              onClick={() => handleStripeUpgrade("Growth Plan Monthly Renewal", 516)}
              className="shrink-0 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[12px] font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <StripeIcon className="h-3.5 w-3.5" />
              Pay $516 via Stripe
            </button>
          </div>
        </div>

        {/* Subscription Tiers */}
        <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
          <div className="px-5 py-4 bg-muted/20 border-b border-border/40">
            <h3 className="text-[13px] font-bold text-foreground tracking-tight">Clinic Subscription Plans</h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">Choose the plan that fits your clinic size.</p>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "Starter", price: 49, desc: "For single practitioner clinics", seats: "1 Provider Seat", popular: false },
                { name: "Growth", price: 129, desc: "For expanding multi-doctor practices", seats: "$129/provider/mo", popular: true },
                { name: "Enterprise", price: 899, desc: "For multi-campus hospital groups", seats: "Unlimited Seats", popular: false },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-xl p-4 border transition-all flex flex-col justify-between ${
                    tier.popular
                      ? "border-emerald-500/40 bg-gradient-to-br from-emerald-500/8 to-background shadow-sm"
                      : "border-border/60 bg-background hover:border-border hover:shadow-sm"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-bold text-foreground">{tier.name}</span>
                      {tier.popular && <Badge tone="success">Current</Badge>}
                    </div>
                    <div className="font-display text-[20px] font-bold tracking-tight text-foreground">
                      ${tier.price} <span className="text-[10.5px] text-muted-foreground font-mono font-normal">/mo</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-snug">{tier.desc}</p>
                    <div className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold pt-0.5">{tier.seats}</div>
                  </div>
                  <button
                    onClick={() => handleStripeUpgrade(`${tier.name} Subscription`, tier.price)}
                    className={`mt-4 w-full h-8 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      tier.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                        : "border border-border/80 hover:bg-accent text-foreground"
                    }`}
                  >
                    <StripeIcon className="h-3 w-3" />
                    {tier.popular ? "Manage Subscription" : `Subscribe $${tier.price}/mo`}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
          <div className="px-5 py-4 bg-muted/20 border-b border-border/40">
            <h3 className="text-[13px] font-bold text-foreground tracking-tight">Payment Method</h3>
          </div>
          <Field label="Card on file" hint="Used for automated monthly subscription renewals.">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-12 place-items-center rounded-lg border border-border/60 bg-emerald-950 font-mono text-[10px] font-bold text-white">VISA</div>
              <div>
                <div className="text-[12px] font-mono font-semibold text-foreground">•••• 4242</div>
                <div className="text-[10.5px] font-mono text-muted-foreground">Expires 08 / 28</div>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleStripeUpgrade("Card Authorization", 1)}>
                <StripeIcon className="h-3 w-3 text-emerald-600" />
                Update via Stripe
              </Button>
            </div>
          </Field>
          <Field label="Billing email" last><Input defaultValue="billing@meridian.io" /></Field>
        </div>

        {/* Invoices Table */}
        <div className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">
          <div className="px-5 py-4 bg-muted/20 border-b border-border/40">
            <h3 className="text-[13px] font-bold text-foreground tracking-tight">Invoice History</h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">Monthly subscription invoices from Stripe.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead className="border-b border-border/40 bg-muted/10 text-left font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-5 py-3 font-semibold">Invoice</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 text-right font-semibold">Amount</th>
                  <th className="px-5 py-3 text-right font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { i: "INV-2841", d: "12 Jul 2026", a: 516, paid: true },
                  { i: "INV-2779", d: "12 Jun 2026", a: 516, paid: true },
                  { i: "INV-2701", d: "12 May 2026", a: 387, paid: false },
                ].map((r) => (
                  <tr key={r.i} className="hover:bg-muted/20 transition-colors">
                    <td className="px-5 py-3 font-mono text-[11px] text-muted-foreground">{r.i}</td>
                    <td className="px-5 py-3 font-medium text-foreground">{r.d}</td>
                    <td className="px-5 py-3 text-right font-mono font-bold text-foreground">${r.a}</td>
                    <td className="px-5 py-3 text-right">
                      {r.paid ? (
                        <Badge tone="success">Paid</Badge>
                      ) : (
                        <button
                          onClick={() => handleStripeUpgrade(`Invoice ${r.i}`, r.a)}
                          className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10.5px] font-semibold inline-flex items-center gap-1 shadow-sm cursor-pointer transition-all"
                        >
                          <StripeIcon className="h-3 w-3" />
                          Pay Now
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
