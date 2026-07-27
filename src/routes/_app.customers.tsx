import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import {
  Search,
  Plus,
  Filter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  CreditCard,
  X,
  Eye,
  ChevronRight,
  Clock,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { toast } from "sonner";
import { getPatientsFn, createPatientFn } from "@/lib/serverFunctions";
import { DataTable, Column } from "@/components/app/DataTable";

export const Route = createFileRoute("/_app/customers")({
  head: () => ({
    meta: [
      { title: "Patients · Autonique" },
      { name: "description", content: "Search, review and manage patient records across your clinic." },
      { property: "og:title", content: "Patients · Autonique" },
      { property: "og:description", content: "Search, review and manage patient records across your clinic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Customers,
});

type Patient = {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  status: string;
  lastVisit: string;
  nextVisit?: string | null;
  visits: number;
  balance: number;
  provider: string;
  notes: string | null;
};

const initials = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");

const avatarColors = [
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-indigo-600",
  "from-amber-500 to-orange-600",
  "from-sky-500 to-blue-600",
  "from-rose-500 to-pink-600",
];

function StatusBadge({ s }: { s: string }) {
  const norm = s.toLowerCase();
  const tone = norm === "active" ? "success" : norm === "pending" || norm === "new" ? "info" : "muted";
  return <Badge tone={tone as "success" | "info" | "muted"}>{s}</Badge>;
}

function Customers() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Add modal states
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    provider: "Dr. Sarah Reyes",
    notes: "",
  });

  const loadPatients = async () => {
    setLoading(true);
    try {
      const data = await getPatientsFn();
      setPatients(data as Patient[]);
    } catch (error: any) {
      toast.error(error?.message || "Failed to load patients.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const selectedPatient = useMemo(() => patients.find((p) => p.id === selectedId), [patients, selectedId]);

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in name, email, and phone.");
      return;
    }
    setSaving(true);
    try {
      const newId = `P-${Math.floor(1000 + Math.random() * 9000)}`;
      await createPatientFn({
        id: newId,
        name: form.name,
        email: form.email,
        phone: form.phone,
        city: form.city || "Berlin",
        provider: form.provider,
        status: "Active",
        lastVisit: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        visits: 1,
        balance: 0,
        notes: form.notes || null,
      });

      toast.success("Patient record created successfully.");
      setAddModalOpen(false);
      setForm({ name: "", email: "", phone: "", city: "", provider: "Dr. Sarah Reyes", notes: "" });
      loadPatients();
    } catch (error: any) {
      toast.error(error?.message || "Failed to save record.");
    } finally {
      setSaving(false);
    }
  };

  const columns: Column<Patient>[] = [
    {
      header: "Patient",
      render: (p) => (
        <span className="font-semibold text-foreground text-[12.5px] hover:text-emerald-700 transition-colors">
          {p.name}
        </span>
      ),
    },
    {
      header: "Contact",
      render: (p) => (
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-foreground">
          <Phone className="h-3 w-3 text-muted-foreground shrink-0" />
          {p.phone}
        </div>
      ),
    },
    {
      header: "Last Visit",
      render: (p) => (
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <Clock className="h-3 w-3 shrink-0" />
          {p.lastVisit}
        </div>
      ),
    },
    {
      header: "Status",
      render: (p) => <StatusBadge s={p.status} />,
    },
    {
      header: "",
      className: "text-right",
      render: (p) => (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedId(p.id);
          }}
          className="p-1.5 rounded-lg text-muted-foreground hover:text-emerald-700 hover:bg-emerald-500/10 transition-colors cursor-pointer"
          title="View Patient"
        >
          <Eye className="h-4 w-4" />
        </button>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Patient <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Directory</span>
          </span>
        }
        description="Search, filter and manage patient medical records."
        actions={
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] text-muted-foreground font-medium hidden sm:inline">Sunday, June 22, 2026</span>
            <Button size="sm" onClick={() => setAddModalOpen(true)}>
              <Plus className="h-3 w-3" />
              <span>Add Patient</span>
            </Button>
          </div>
        }
      />

      <div className="px-4 py-5 sm:px-6 space-y-5">
        <DataTable
          data={patients}
          columns={columns}
          loading={loading}
          searchPlaceholder="Search patients by name, email or ID…"
          searchKeys={["name", "email", "id", "city"]}
          filterTabs={[
            { label: "All", value: "all", filterFn: () => true },
            { label: "Active", value: "active", filterFn: (p) => p.status.toLowerCase() === "active" },
            { label: "Pending", value: "pending", filterFn: (p) => p.status.toLowerCase() === "pending" || p.status.toLowerCase() === "new" },
          ]}
          pageSize={5}
          onRowClick={(p) => setSelectedId(p.id)}
          emptyState={
            <div className="flex flex-col items-center gap-2 py-4">
              <Users className="h-8 w-8 text-muted-foreground/30" />
              <p className="text-[12px] text-muted-foreground font-mono">No patients found matching the search criteria</p>
            </div>
          }
        />
      </div>

      {/* Slide-Over Patient Detail Drawer */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-foreground/25 backdrop-blur-sm transition-opacity" onClick={() => setSelectedId(null)} />
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-16">
            <div className="pointer-events-auto w-screen max-w-md bg-card shadow-2xl border-l border-border/50 flex flex-col">
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${avatarColors[patients.findIndex(p => p.id === selectedPatient.id) % avatarColors.length]} font-bold text-[14px] text-white shadow-md`}>
                      {initials(selectedPatient.name)}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold tracking-tight text-foreground">{selectedPatient.name}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="font-mono text-[10px] text-muted-foreground">#{selectedPatient.id}</span>
                        <span className="text-muted-foreground/45">•</span>
                        <StatusBadge s={selectedPatient.status} />
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setSelectedId(null)} className="p-1 rounded-lg hover:bg-accent text-muted-foreground transition-colors cursor-pointer">
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                {/* KPI block */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: "Visits", val: String(selectedPatient.visits) },
                    { label: "Balance", val: selectedPatient.balance > 0 ? `$${(selectedPatient.balance / 100).toFixed(2)}` : "Cleared" },
                    { label: "Provider", val: selectedPatient.provider.split(" ").pop() ?? "" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 bg-muted/30 border border-border/30 rounded-xl space-y-1">
                      <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider leading-none">{stat.label}</div>
                      <div className="text-[13px] font-black text-foreground tracking-tight leading-none mt-1">{stat.val}</div>
                    </div>
                  ))}
                </div>

                {/* Visit History cards */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="rounded-xl border border-border/50 bg-card p-3 space-y-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Last Visit Date</span>
                    <span className="font-mono text-[12px] font-bold text-foreground">{selectedPatient.lastVisit}</span>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-card p-3 space-y-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Next Schedule</span>
                    <span className="font-mono text-[12px] font-bold text-foreground">{selectedPatient.nextVisit ?? "—"}</span>
                  </div>
                </div>

                {/* Vitals Telemetry Grid */}
                <div className="rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm">
                  <div className="px-4 py-2.5 bg-muted/30 border-b border-border/40 flex items-center justify-between">
                    <h4 className="text-[11px] font-bold text-foreground uppercase tracking-wider font-mono text-muted-foreground">Active Telemetry Vitals</h4>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono text-muted-foreground">Live Sync</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                  </div>
                  <div className="p-3.5 grid grid-cols-2 gap-2.5">
                    {[
                      { name: "Blood Pressure", val: "120/80", unit: "mmHg", status: "Optimal", color: "text-emerald-700 bg-emerald-500/10 dark:text-emerald-400" },
                      { name: "Heart Rate", val: "72", unit: "bpm", status: "Normal", color: "text-emerald-700 bg-emerald-500/10 dark:text-emerald-400" },
                      { name: "Oxygen Saturation", val: "99%", unit: "SpO2", status: "Healthy", color: "text-emerald-700 bg-emerald-500/10 dark:text-emerald-400" },
                      { name: "Body Temperature", val: "98.6", unit: "°F", status: "Normal", color: "text-emerald-700 bg-emerald-500/10 dark:text-emerald-400" }
                    ].map((vit) => (
                      <div key={vit.name} className="p-2.5 bg-background/50 border border-border/30 rounded-xl space-y-1">
                        <div className="text-[9.5px] font-mono text-muted-foreground uppercase tracking-wide leading-none">{vit.name}</div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[13px] font-black text-foreground tracking-tight">{vit.val}</span>
                          <span className="text-[8.5px] font-mono text-muted-foreground">{vit.unit}</span>
                        </div>
                        <span className={`inline-flex items-center px-1.5 py-0.2 rounded text-[8px] font-black font-mono uppercase tracking-wide ${vit.color}`}>
                          {vit.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm">
                  <div className="px-4 py-2.5 bg-muted/30 border-b border-border/40">
                    <h4 className="text-[11.5px] font-semibold text-foreground tracking-tight">Contact Information</h4>
                  </div>
                  <dl className="divide-y divide-border/30 text-[11.5px]">
                    {[
                      { Icon: Mail, label: "Email", val: selectedPatient.email },
                      { Icon: Phone, label: "Phone", val: selectedPatient.phone },
                      { Icon: MapPin, label: "Location", val: selectedPatient.city },
                    ].map(({ Icon, label, val }) => (
                      <div key={label} className="flex items-center justify-between px-4 py-2.5 hover:bg-muted/20 transition-colors">
                        <span className="flex items-center gap-2 text-muted-foreground font-medium">
                          <Icon className="h-3.5 w-3.5" />
                          {label}
                        </span>
                        <span className="font-mono font-semibold text-foreground text-[11px] text-right truncate max-w-[180px]">{val}</span>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Clinical Notes */}
                <div className="rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm">
                  <div className="px-4 py-2.5 bg-muted/30 border-b border-border/40">
                    <h4 className="text-[11.5px] font-semibold text-foreground tracking-tight">Clinical Notes & Warnings</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-[12px] leading-relaxed text-muted-foreground bg-muted/20 p-3 rounded-lg border border-border/30 font-sans">
                      {selectedPatient.notes || "No clinical files recorded."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-border/40 px-5 py-4 bg-background flex items-center justify-between gap-2">
                <Button variant="ghost" size="sm" onClick={() => setSelectedId(null)}>Close</Button>
                <Button size="sm">Open Medical Chart</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Patient Modal */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-foreground/25 backdrop-blur-xs transition-opacity" onClick={() => setAddModalOpen(false)} />
          <div className="relative w-full max-w-md rounded-2xl bg-card border border-border/60 shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-foreground">Add New Patient Profile</h3>
              <button onClick={() => setAddModalOpen(false)} className="p-1 rounded-lg hover:bg-accent text-muted-foreground transition-colors cursor-pointer">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <form onSubmit={handleAddSubmit} className="space-y-3.5 text-[12px]">
              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="h-9 w-full rounded-lg border border-border/60 bg-background px-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. john.doe@meridian.io"
                  className="h-9 w-full rounded-lg border border-border/60 bg-background px-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Phone Number</label>
                <input
                  type="text"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="e.g. +49 30 8823 1194"
                  className="h-9 w-full rounded-lg border border-border/60 bg-background px-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">City Location</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="e.g. Berlin"
                  className="h-9 w-full rounded-lg border border-border/60 bg-background px-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Clinical Provider</label>
                <select
                  value={form.provider}
                  onChange={(e) => setForm({ ...form, provider: e.target.value })}
                  className="h-9 w-full rounded-lg border border-border/60 bg-background px-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 cursor-pointer"
                >
                  <option value="Dr. Sarah Reyes">Dr. Sarah Reyes (Dentist)</option>
                  <option value="Dr. Marcus Okafor">Dr. Marcus Okafor (Surgeon)</option>
                  <option value="Dr. Elena Rostova">Dr. Elena Rostova (Consultant)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Clinical Notes</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Clinical history, medication allergies..."
                  className="w-full h-16 rounded-lg border border-border/60 bg-background p-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button type="button" variant="ghost" size="sm" onClick={() => setAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" size="sm" disabled={saving}>
                  {saving ? "Saving..." : "Create Profile"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}