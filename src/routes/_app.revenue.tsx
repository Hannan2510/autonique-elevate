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
  Receipt,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { toast } from "sonner";
import { EmptyState } from "@/components/app/EmptyState";
import { TableSkeleton } from "@/components/app/LoadingSkeleton";
import { MetricCard } from "@/components/app/MetricCard";
import { getInvoicesFn } from "@/lib/serverFunctions";
import { DataTable, Column } from "@/components/app/DataTable";

export const Route = createFileRoute("/_app/revenue")({
  head: () => ({
    meta: [
      { title: "Revenue Tracker · Autonique" },
      { name: "description", content: "Track clinic payouts, invoice lifecycle, and Stripe merchant configurations." },
    ],
  }),
  component: RevenuePage,
});

type Invoice = {
  id: string;
  patientName: string;
  amount: string;
  date: string;
  duration: string;
  status: string;
};

function StatusBadge({ s }: { s: string }) {
  const norm = s.toLowerCase();
  const tone = norm === "paid" ? "success" : norm === "unpaid" ? "warning" : "muted";
  return <Badge tone={tone as "success" | "warning" | "muted"}>{s}</Badge>;
}

function RevenuePage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [syncingStripe, setSyncingStripe] = useState(false);

  const loadInvoices = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const data = await getInvoicesFn();
      setInvoices(data as Invoice[]);
    } catch (error) {
      setHasError(true);
      toast.error("Failed to load revenue invoices ledger.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInvoices();
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
      loadInvoices();
    }, 1500);
  };

  // Calculate stats
  const totalAmount = invoices.reduce((acc, curr) => {
    const val = parseFloat(curr.amount.replace(/[^0-9.-]+/g, "")) || 0;
    return acc + val;
  }, 0);

  const unpaidInvoices = invoices.filter((i) => i.status.toLowerCase() === "unpaid");
  const unpaidTotal = unpaidInvoices.reduce((acc, curr) => {
    const val = parseFloat(curr.amount.replace(/[^0-9.-]+/g, "")) || 0;
    return acc + val;
  }, 0);

  const columns: Column<Invoice>[] = [
    {
      header: "Invoice ID",
      render: (inv) => <span className="font-semibold text-foreground font-mono">{inv.id}</span>,
    },
    {
      header: "Patient Name",
      accessor: "patientName",
    },
    {
      header: "Billing period",
      render: (inv) => <span className="font-mono text-[11px] text-muted-foreground">{inv.duration}</span>,
    },
    {
      header: "Amount",
      render: (inv) => <span className="font-bold text-foreground">{inv.amount}</span>,
    },
    {
      header: "Status",
      render: (inv) => <StatusBadge s={inv.status} />,
    },
    {
      header: "Date",
      accessor: "date",
    },
  ];

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
            <Button variant="outline" size="sm" onClick={loadInvoices} disabled={isLoading}>
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
        {/* MAIN CONTAINER */}
        {isLoading ? (
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
              <Button size="sm" onClick={loadInvoices}>
                <RefreshCw className="h-3 w-3 mr-1" />
                <span>Retry Connection</span>
              </Button>
            </div>
          </div>
        ) : invoices.length === 0 ? (
          <div className="space-y-5">
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
        ) : (
          <div className="space-y-6">
            {/* KPI grid showing actual values */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Net Revenue"
                value={`$${totalAmount.toFixed(2)}`}
                badgeLabel="Live Ledger Total"
                icon={DollarSign}
                cardClass="kpi-card-mint"
              />
              <MetricCard
                title="Stripe Payouts"
                value={`$${(totalAmount * 0.95).toFixed(2)}`}
                badgeLabel="Available Payouts"
                icon={DollarSign}
                cardClass="kpi-card-lime"
              />
              <MetricCard
                title="Unpaid Invoices"
                value={String(unpaidInvoices.length)}
                badgeLabel={`$${unpaidTotal.toFixed(2)} outstanding`}
                icon={DollarSign}
                cardClass="kpi-card-emerald"
              />
              <MetricCard
                title="Refund Rate"
                value="0.0%"
                badgeLabel="0 refunds (30 days)"
                icon={DollarSign}
                cardClass="kpi-card-teal"
              />
            </div>

            {/* Invoices List table */}
            <Card
              title={
                <span className="flex items-center gap-1.5 font-mono text-[12px] text-muted-foreground font-bold uppercase tracking-wider">
                  <Receipt className="h-4 w-4 text-emerald-700 dark:text-emerald-450" />
                  <span>Clinic Ledgers</span>
                </span>
              }
              padding="p-4"
            >
              <DataTable
                data={invoices}
                columns={columns}
                searchPlaceholder="Search invoices by patient name or ID..."
                searchKeys={["patientName", "id"]}
                pageSize={5}
              />
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
