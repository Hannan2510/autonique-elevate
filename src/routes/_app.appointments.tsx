import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Plus,
  RefreshCw,
  AlertTriangle,
  FileText,
  UserCheck,
  Clock,
  Search,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { toast } from "sonner";
import { EmptyState } from "@/components/app/EmptyState";
import { CardGridSkeleton, TableSkeleton } from "@/components/app/LoadingSkeleton";

export const Route = createFileRoute("/_app/appointments")({
  head: () => ({
    meta: [
      { title: "Appointments · Autonique" },
      { name: "description", content: "Manage patient queues, tokens, and practitioner schedules." },
    ],
  }),
  component: AppointmentsPage,
});

function AppointmentsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Simulate loading state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleReload = () => {
    setIsLoading(true);
    setHasError(false);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Schedule successfully refreshed!");
    }, 1000);
  };

  const handleCreateAppointment = () => {
    toast.success("Mock Appointment Flow Triggered!", {
      description: "In a production environment, this launches the appointment reservation wizard.",
    });
  };

  return (
    <>
      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Appointments <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Scheduler</span>
          </span>
        }
        description="Real-time patient queue, slot booking, and provider calendars."
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReload} disabled={isLoading}>
              <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button size="sm" onClick={handleCreateAppointment} disabled={isLoading || hasError}>
              <Plus className="h-3 w-3" />
              <span>Add Slot</span>
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

        {/* MAIN STAGE */}
        {isLoading ? (
          /* Centralized Loading skeletons */
          <div className="space-y-6">
            <CardGridSkeleton count={3} />
            <TableSkeleton rows={3} cols={4} />
          </div>
        ) : hasError ? (
          /* Premium Error Handling Panel */
          <div className="border border-red-500/20 bg-red-500/5 rounded-xl p-6 sm:p-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 my-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-rose-500/10 text-rose-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-[15px] font-bold text-foreground">Failed to Load Appointments Schedule</h2>
              <p className="text-[12px] text-muted-foreground max-w-md">
                An error occurred while connecting to the clinic dispatch gateway. This could be due to a transient network interruption or database sync delay.
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
          /* Reusable Empty State & filters */
          <div className="space-y-5">
            {/* Filter bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-xl bg-card border border-border/50 px-4 py-3 shadow-2xs">
              <div className="relative flex-1 max-w-sm">
                <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by practitioner or patient…"
                  className="h-8 w-full rounded-lg border border-border/60 bg-background pl-9 pr-3 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all"
                />
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto text-[11px] text-muted-foreground font-mono">
                Showing 0 of 0 slots
              </div>
            </div>

            <EmptyState
              title="No appointments scheduled today"
              description="Your calendar is empty for this date. Patients can book slots via the self-service web portal, or staff can manually register appointments."
              icon={CalendarIcon}
              actionText="Book Appointment"
              onActionClick={handleCreateAppointment}
              secondaryActionText="Setup Guide"
              onSecondaryActionClick={() => toast.info("Opening setup documentation...")}
              extraContent={
                /* Informative Micro-cards */
                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-xl w-full text-left">
                  <div className="p-3 bg-muted/30 border border-border/40 rounded-lg flex gap-2.5 items-start">
                    <UserCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="text-[11.5px] font-semibold text-foreground block">Practitioner Rosters</span>
                      <span className="text-[10px] text-muted-foreground leading-normal block">Verify staff schedules in Settings to ensure slots display on the booking portal.</span>
                    </div>
                  </div>
                  <div className="p-3 bg-muted/30 border border-border/40 rounded-lg flex gap-2.5 items-start">
                    <Clock className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="text-[11.5px] font-semibold text-foreground block">Auto-reminders</span>
                      <span className="text-[10px] text-muted-foreground leading-normal block">Confirmed appointments trigger WhatsApp notifications automatically.</span>
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
