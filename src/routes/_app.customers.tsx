import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
  status: "active" | "new" | "inactive";
  lastVisit: string;
  nextVisit?: string;
  visits: number;
  balance: number;
  provider: string;
  notes: string;
};

const patients: Patient[] = [
  { id: "P-1042", name: "Ava Chen", email: "ava.chen@meridian.io", phone: "+49 30 8823 1194", city: "Berlin", status: "active", lastVisit: "22 Jul 2026", nextVisit: "05 Aug 2026", visits: 14, balance: 0, provider: "Dr. Reyes", notes: "Prefers morning appointments. Allergic to penicillin." },
  { id: "P-1041", name: "Marcus Weiss", email: "m.weiss@hey.com", phone: "+49 30 4412 8802", city: "Berlin", status: "active", lastVisit: "22 Jul 2026", visits: 6, balance: 240, provider: "Dr. Okafor", notes: "Post-op follow-up scheduled." },
  { id: "P-1040", name: "Priya Kapoor", email: "priya.k@fastmail.com", phone: "+49 30 2201 4488", city: "Potsdam", status: "active", lastVisit: "22 Jul 2026", visits: 3, balance: 0, provider: "Dr. Reyes", notes: "New procedure evaluation in progress." },
  { id: "P-1039", name: "Jonas Lind", email: "jonas@lind.se", phone: "+46 8 4402 1188", city: "Stockholm", status: "new", lastVisit: "22 Jul 2026", visits: 1, balance: 120, provider: "Dr. Okafor", notes: "Referred by Dr. Bergman." },
  { id: "P-1038", name: "Sofia Martins", email: "sofia.martins@proton.me", phone: "+351 21 998 4412", city: "Lisbon", status: "active", lastVisit: "19 Jul 2026", visits: 22, balance: 0, provider: "Dr. Reyes", notes: "Long-term patient. Annual review due." },
];

const initials = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");

const avatarColors = [
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-indigo-600",
  "from-amber-500 to-orange-600",
  "from-sky-500 to-blue-600",
  "from-rose-500 to-pink-600",
];

function StatusBadge({ s }: { s: Patient["status"] }) {
  const tone = s === "active" ? "success" : s === "new" ? "info" : "muted";
  return <Badge tone={tone as "success" | "info" | "muted"}>{s}</Badge>;
}

import { DataTable, Column } from "@/components/app/DataTable";

function Customers() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedPatient = useMemo(() => patients.find((p) => p.id === selectedId), [selectedId]);

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
            <Button size="sm">
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
          searchPlaceholder="Search patients by name, email or ID…"
          searchKeys={["name", "email", "id", "city"]}
          filterTabs={[
            { label: "All", value: "all", filterFn: () => true },
            { label: "Active", value: "active", filterFn: (p) => p.status === "active" },
            { label: "New", value: "new", filterFn: (p) => p.status === "new" },
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

      {/* Premium Slide-Over Patient Detail Drawer */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-foreground/25 backdrop-blur-sm transition-opacity" onClick={() => setSelectedId(null)} />
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-16">
            <div className="pointer-events-auto w-screen max-w-md bg-card shadow-2xl border-l border-border/50 flex flex-col">

              {/* Drawer Hero Header */}
              <div className="relative border-b border-border/40 px-6 py-5 bg-gradient-to-br from-emerald-500/8 via-background to-background">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${avatarColors[patients.findIndex(p => p.id === selectedPatient.id) % avatarColors.length]} font-bold text-[14px] text-white shadow-md`}>
                      {initials(selectedPatient.name)}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold tracking-tight text-foreground">{selectedPatient.name}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-mono text-[10px] text-muted-foreground">#{selectedPatient.id}</span>
                        <span className="text-muted-foreground/30">·</span>
                        <StatusBadge s={selectedPatient.status} />
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setSelectedId(null)} className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent cursor-pointer transition-colors">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Quick stat row */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "Visits", val: String(selectedPatient.visits) },
                    { label: "Balance", val: selectedPatient.balance > 0 ? `$${selectedPatient.balance}` : "Cleared" },
                    { label: "Provider", val: selectedPatient.provider.split(" ").pop() ?? "" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-background/80 border border-border/40 px-3 py-2.5 text-center shadow-sm">
                      <div className="font-display text-[15px] font-bold text-foreground">{stat.val}</div>
                      <div className="font-mono text-[9.5px] text-muted-foreground uppercase tracking-wide mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">

                {/* Visit Timeline */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl kpi-card-mint p-3.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock className="h-3 w-3 text-emerald-700" />
                      <span className="text-[10px] font-semibold text-foreground/70 uppercase tracking-wide">Last Visit</span>
                    </div>
                    <span className="font-mono text-[12px] font-bold text-foreground">{selectedPatient.lastVisit}</span>
                  </div>
                  <div className="rounded-xl kpi-card-lime p-3.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Calendar className="h-3 w-3 text-lime-700" />
                      <span className="text-[10px] font-semibold text-foreground/70 uppercase tracking-wide">Next Visit</span>
                    </div>
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
                      {selectedPatient.notes}
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
    </>
  );
}