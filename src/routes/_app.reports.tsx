import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  BarChart3,
  Plus,
  RefreshCw,
  AlertTriangle,
  FileText,
  Lock,
  Download,
  Info,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { toast } from "sonner";
import { EmptyState } from "@/components/app/EmptyState";
import { TableSkeleton } from "@/components/app/LoadingSkeleton";

export const Route = createFileRoute("/_app/reports")({
  head: () => ({
    meta: [
      { title: "Reports Engine · Autonique" },
      { name: "description", content: "Export clinical telemetry, patient intake files, and financial audits." },
    ],
  }),
  component: ReportsPage,
});

function ReportsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [generating, setGenerating] = useState(false);

  // Simulate initial mount loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleGenerateReport = () => {
    setGenerating(true);
    toast.info("Compiling Clinical Intelligence Reports...", {
      description: "Aggregating consult sheets, billing logs, and patient records.",
    });

    setTimeout(() => {
      setGenerating(false);
      toast.success("Reports engine compile finished!", {
        description: "PDF and CSV exports are ready for download.",
      });
    }, 2000);
  };

  const handleReload = () => {
    setIsLoading(true);
    setHasError(false);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Reports list successfully updated!");
    }, 1000);
  };

  return (
    <>
      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Analytics & <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Reports</span>
          </span>
        }
        description="Compile audit digests, practitioner efficiency profiles, and revenue metrics."
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReload} disabled={isLoading}>
              <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button size="sm" onClick={handleGenerateReport} disabled={isLoading || hasError || generating}>
              <Plus className="h-3 w-3" />
              <span>{generating ? "Generating..." : "New Report"}</span>
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-pulse">
              {[1, 2].map((n) => (
                <div key={n} className="border border-border/40 rounded-xl p-5 bg-card/60 space-y-2">
                  <div className="h-4 w-1/3 bg-muted rounded" />
                  <div className="h-2 w-5/6 bg-muted rounded mt-2" />
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
              <h2 className="text-[15px] font-bold text-foreground">Analytics Compilation Failed</h2>
              <p className="text-[12px] text-muted-foreground max-w-md">
                The reports engine database query timed out. Please verify that your organization settings and clinician credentials are fully authenticated.
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
          /* Reusable Empty State & action handlers */
          <EmptyState
            title="No analytics reports compiled"
            description="Your clinical records database is fully secure, but no reports have been compiled yet. Start running audit logs, consult audits, or transaction margins to compile charts."
            icon={BarChart3}
            actionText={generating ? "Compiling..." : "Compile Reports"}
            onActionClick={handleGenerateReport}
            secondaryActionText="View Templates"
            onSecondaryActionClick={() => toast.info("Showing standard templates...")}
            extraContent={
              /* Informative Micro-cards */
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-xl w-full text-left">
                <div className="p-3 bg-muted/30 border border-border/40 rounded-lg flex gap-2.5 items-start">
                  <Lock className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[11.5px] font-semibold text-foreground block">Cryptographic Audit Logs</span>
                    <span className="text-[10px] text-muted-foreground leading-normal block">Every report compile creates an immutable hash in the HIPAA database logs to prevent unauthorized data exposure.</span>
                  </div>
                </div>
                <div className="p-3 bg-muted/30 border border-border/40 rounded-lg flex gap-2.5 items-start">
                  <Info className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[11.5px] font-semibold text-foreground block">Role-Based Access Control</span>
                    <span className="text-[10px] text-muted-foreground leading-normal block">Only administrator and billing roles hold permissions to view or download revenue reporting logs.</span>
                  </div>
                </div>
              </div>
            }
          />
        )}
      </div>
    </>
  );
}
