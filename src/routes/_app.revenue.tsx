import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  CreditCard,
  Plus,
  RefreshCw,
  AlertTriangle,
  FileSpreadsheet,
  ShieldCheck,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { toast } from "sonner";
import { EmptyState } from "@/components/app/EmptyState";
import { TableSkeleton } from "@/components/app/LoadingSkeleton";
import { MetricCard } from "@/components/app/MetricCard";

export const Route = createFileRoute("/_app/revenue")({
  head: () => ({
    meta: [
      { title: "Revenue Tracker · Autonique" },
      { name: "description", content: "Track clinic payouts, invoice lifecycle, and Stripe merchant configurations." },
    ],
  }),
  component: RevenuePage,
});

function RevenuePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [syncingStripe, setSyncingStripe] = useState(false);

  // Simulate initial mount loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSyncStripe = () => {
    setSyncingStripe(true);
    toast.info("Connecting to Stripe API Gateway...", {
      description: "Verifying merchant accounts and pulling latest ledger payouts.",
    });

    setTimeout(() => {
      setSyncingStripe(false);
      toast.success("Stripe synchronization complete!", {
        description: "Your local database ledger is up to date.",
      });
    }, 2000);
  };

  const handleReload = () => {
    setIsLoading(true);
    setHasError(false);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Revenue tables successfully refreshed!");
    }, 1000);
  };

  return (
    <>
      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Revenue & <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Ledgers</span>
          </span>
        }
        description="Review transaction histories, billing invoices, and Stripe configurations."
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReload} disabled={isLoading}>
              <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button size="sm" onClick={handleSyncStripe} disabled={isLoading || hasError || syncingStripe}>
              <CreditCard className="h-3 w-3" />
              <span>{syncingStripe ? "Syncing..." : "Sync Stripe"}</span>
            </Button>
          </div>
        }
      />

      <div className="px-4 py-5 sm:px-8 space-y-6">
        {/* Interactive Polish Tools Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-muted/40 rounded-xl border border-border/40 text-[12px]">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-foreground">Interactive Development Controls</span>
            <span className="text-[11px] text-muted-foreground">Test how the UI adapts to loading, error, and empty states.</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setIsLoading(true)}
              className="px-2.5 py-1 rounded bg-background border border-border hover:bg-accent text-foreground transition-all cursor-pointer"
            >
              Simulate Loading
            </button>
            <button
              onClick={() => setHasError(!hasError)}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer border ${
                hasError
                  ? "bg-rose-500/10 border-rose-500/30 text-rose-600 font-medium"
                  : "bg-background border-border hover:bg-accent text-foreground"
              }`}
            >
              {hasError ? "Clear Error Mode" : "Trigger Error Mode"}
            </button>
          </div>
        </div>

        {/* MAIN CONTAINER */}
        {isLoading ? (
          /* Centralized Loading skeletons */
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="border border-border/40 rounded-xl p-4 bg-card/40 animate-pulse space-y-2">
                  <div className="h-3 w-1/2 bg-muted rounded" />
                  <div className="h-5 bg-muted rounded w-2/3 mt-2" />
                </div>
              ))}
            </div>
            <TableSkeleton rows={3} cols={4} />
          </div>
        ) : hasError ? (
          /* Premium Error Handling Panel */
          <div className="border border-red-500/20 bg-red-500/5 rounded-xl p-6 sm:p-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 my-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-rose-500/10 text-rose-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-[15px] font-bold text-foreground">API Sync Ledger Timeout</h2>
              <p className="text-[12px] text-muted-foreground max-w-md">
                Stripe API communication failed. The encryption keys failed authentication or the gateway is undergoing scheduled downtime.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center">
              <Button size="sm" variant="outline" onClick={() => setHasError(false)}>
                Clear Simulation
              </Button>
              <Button size="sm" onClick={handleReload}>
                <RefreshCw className="h-3 w-3 mr-1" />
                <span>Retry Connection</span>
              </Button>
            </div>
          </div>
        ) : (
          /* Reusable Empty State & KPIs */
          <div className="space-y-5">
            {/* Metric KPI Grid showing Empty Metrics using reusable MetricCard */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Net Revenue", val: "$0.00", desc: "This billing cycle", color: "kpi-card-mint" },
                { label: "Stripe Payouts", val: "$0.00", desc: "0 pending transfers", color: "kpi-card-lime" },
                { label: "Unpaid Invoices", val: "0", desc: "$0.00 total outstanding", color: "kpi-card-emerald" },
                { label: "Refund Rate", val: "0.0%", desc: "0 refunds in 30 days", color: "kpi-card-teal" },
              ].map((card) => (
                <MetricCard
                  key={card.label}
                  title={card.label}
                  value={card.val}
                  badgeLabel={card.desc}
                  icon={DollarSign}
                  cardClass={card.color}
                />
              ))}
            </div>

            <EmptyState
              title="No payment gateways connected"
              description="Connect your Stripe merchant account or terminal systems to register billing invoices, track incoming consult fee margins, and monitor pending payouts."
              icon={CreditCard}
              actionText={syncingStripe ? "Connecting..." : "Connect Stripe"}
              onActionClick={handleSyncStripe}
              secondaryActionText="Manual Ledger"
              onSecondaryActionClick={() => toast.info("Opening manual configuration manual...")}
              extraContent={
                /* Informative Micro-cards */
                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-xl w-full text-left">
                  <div className="p-3 bg-muted/30 border border-border/40 rounded-lg flex gap-2.5 items-start">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="text-[11.5px] font-semibold text-foreground block">PCI-DSS HIPAA Compliant</span>
                      <span className="text-[10px] text-muted-foreground leading-normal block">Merchant integrations utilize end-to-end tokenization tunnels ensuring zero exposure of financial credentials.</span>
                    </div>
                  </div>
                  <div className="p-3 bg-muted/30 border border-border/40 rounded-lg flex gap-2.5 items-start">
                    <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="text-[11.5px] font-semibold text-foreground block">Automated Settlements</span>
                      <span className="text-[10px] text-muted-foreground leading-normal block">Cleared credit card margins automatically trigger standard settlement cycles to designated banks.</span>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        )}
      </div>
    </>
  );
}
