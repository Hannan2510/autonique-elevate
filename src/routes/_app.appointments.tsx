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
  X,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { toast } from "sonner";
import { EmptyState } from "@/components/app/EmptyState";
import { CardGridSkeleton, TableSkeleton } from "@/components/app/LoadingSkeleton";
import { getAppointmentsFn, createAppointmentFn } from "@/lib/serverFunctions";
import { DataTable, Column } from "@/components/app/DataTable";

export const Route = createFileRoute("/_app/appointments")({
  head: () => ({
    meta: [
      { title: "Appointments · Autonique" },
      { name: "description", content: "Manage patient queues, tokens, and practitioner schedules." },
    ],
  }),
  component: AppointmentsPage,
});

type Appointment = {
  id: string;
  patientId: string;
  practitionerName: string;
  time: string;
  status: string;
  notes: string | null;
};

function StatusBadge({ s }: { s: string }) {
  const norm = s.toLowerCase();
  const tone = norm === "confirmed" ? "success" : norm === "pending" ? "warning" : "muted";
  return <Badge tone={tone as "success" | "warning" | "muted"}>{s}</Badge>;
}

function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    patientId: "P-1042",
    practitionerName: "Dr. Sarah Reyes",
    time: "09:30 AM",
    status: "Confirmed",
    notes: "",
  });

  const loadAppointments = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const data = await getAppointmentsFn();
      setAppointments(data as Appointment[]);
    } catch (error) {
      setHasError(true);
      toast.error("Failed to connect to appointments queue.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleCreateAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const newId = `A-${Math.floor(1000 + Math.random() * 9000)}`;
      await createAppointmentFn({
        id: newId,
        patientId: form.patientId,
        practitionerName: form.practitionerName,
        time: form.time,
        status: form.status,
        notes: form.notes || null,
      });

      toast.success("Appointment slot successfully booked!");
      setModalOpen(false);
      setForm({
        patientId: "P-1042",
        practitionerName: "Dr. Sarah Reyes",
        time: "09:30 AM",
        status: "Confirmed",
        notes: "",
      });
      loadAppointments();
    } catch (err: any) {
      toast.error(err?.message || "Failed to book slot.");
    } finally {
      setSaving(false);
    }
  };

  const columns: Column<Appointment>[] = [
    {
      header: "Patient ID",
      render: (a) => <span className="font-mono font-semibold text-foreground">{a.patientId}</span>,
    },
    {
      header: "Practitioner",
      accessor: "practitionerName",
    },
    {
      header: "Scheduled Time",
      render: (a) => (
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <Clock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          {a.time}
        </div>
      ),
    },
    {
      header: "Status",
      render: (a) => <StatusBadge s={a.status} />,
    },
    {
      header: "Notes",
      render: (a) => <span className="text-muted-foreground font-sans">{a.notes || "—"}</span>,
    },
  ];

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
            <Button variant="outline" size="sm" onClick={loadAppointments} disabled={isLoading}>
              <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button size="sm" onClick={() => setModalOpen(true)} disabled={isLoading || hasError}>
              <Plus className="h-3 w-3" />
              <span>Add Slot</span>
            </Button>
          </div>
        }
      />

      <div className="px-4 py-5 sm:px-8 space-y-6">
        {/* MAIN STAGE */}
        {isLoading ? (
          <div className="space-y-6">
            <CardGridSkeleton count={3} />
            <TableSkeleton rows={3} cols={4} />
          </div>
        ) : hasError ? (
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
              <Button size="sm" onClick={loadAppointments}>
                <RefreshCw className="h-3 w-3 mr-1" />
                <span>Retry Connection</span>
              </Button>
            </div>
          </div>
        ) : appointments.length === 0 ? (
          <EmptyState
            title="No appointments scheduled today"
            description="Your calendar is empty for this date. Patients can book slots via the self-service web portal, or staff can manually register appointments."
            icon={CalendarIcon}
            actionText="Book Appointment"
            onActionClick={() => setModalOpen(true)}
            secondaryActionText="Setup Guide"
            onSecondaryActionClick={() => toast.info("Opening setup documentation...")}
            extraContent={
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
        ) : (
          <div className="space-y-5">
            <DataTable
              data={appointments}
              columns={columns}
              searchPlaceholder="Search slots by ID or practitioner..."
              searchKeys={["patientId", "practitionerName"]}
              pageSize={5}
            />
          </div>
        )}
      </div>

      {/* Add Slot Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-foreground/25 backdrop-blur-xs transition-opacity" onClick={() => setModalOpen(false)} />
          <div className="relative w-full max-w-md rounded-2xl bg-card border border-border/60 shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-foreground">Schedule Appointment Slot</h3>
              <button onClick={() => setModalOpen(false)} className="p-1 rounded-lg hover:bg-accent text-muted-foreground transition-colors cursor-pointer">
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCreateAppointmentSubmit} className="space-y-3.5 text-[12px]">
              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Patient Identifier (ID)</label>
                <input
                  type="text"
                  required
                  value={form.patientId}
                  onChange={(e) => setForm({ ...form, patientId: e.target.value })}
                  placeholder="e.g. P-1042"
                  className="h-9 w-full rounded-lg border border-border/60 bg-background px-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Practitioner Practitioner</label>
                <input
                  type="text"
                  required
                  value={form.practitionerName}
                  onChange={(e) => setForm({ ...form, practitionerName: e.target.value })}
                  placeholder="e.g. Dr. Sarah Reyes"
                  className="h-9 w-full rounded-lg border border-border/60 bg-background px-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Scheduled Time Slot</label>
                <input
                  type="text"
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  placeholder="e.g. 10:00 AM"
                  className="h-9 w-full rounded-lg border border-border/60 bg-background px-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Queue Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="h-9 w-full rounded-lg border border-border/60 bg-background px-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 cursor-pointer"
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Consultation Notes</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Reason for visit, symptoms description..."
                  className="w-full h-16 rounded-lg border border-border/60 bg-background p-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button type="button" variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" size="sm" disabled={saving}>
                  {saving ? "Saving..." : "Confirm Schedule"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
