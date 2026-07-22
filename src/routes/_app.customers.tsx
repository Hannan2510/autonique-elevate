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
  MoreHorizontal,
  Users,
  Activity,
  CreditCard,
  X,
  Eye,
  ChevronRight,
  TrendingUp,
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

function Customers() {
  const [query, setQuery] = useState("");
  const [tabFilter, setTabFilter] = useState<"all" | "active" | "new">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return patients.filter((p) => {
      if (tabFilter !== "all" && p.status !== tabFilter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.email.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.city.toLowerCase().includes(q);
    });
  }, [query, tabFilter]);

  const selectedPatient = useMemo(() => patients.find((p) => p.id === selectedId), [selectedId]);

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
        {/* Premium KPI Summary Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Active Patients", val: "5", sub: "+2 this month", icon: Users, color: "kpi-card-mint", iconColor: "text-emerald-700" },
            { label: "Total Visits", val: "46", sub: "All time", icon: Activity, color: "kpi-card-lime", iconColor: "text-lime-700" },
            { label: "Upcoming Visits", val: "2", sub: "Next 7 days", icon: Calendar, color: "kpi-card-emerald", iconColor: "text-green-700" },
            { label: "Outstanding", val: "$360", sub: "Pending balance", icon: CreditCard, color: "kpi-card-teal", iconColor: "text-teal-700" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className={`rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-default ${item.color}`}>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-foreground/70 uppercase tracking-wide">{item.label}</span>
                    <div className="font-display text-2xl font-bold tracking-tight text-foreground">{item.val}</div>
                  </div>
                  <div className={`grid h-8 w-8 place-items-center rounded-xl bg-white/70 shadow-sm ${item.iconColor}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1 font-mono text-[10px] text-foreground/60">
                  <TrendingUp className="h-3 w-3" />
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Filter + Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-xl bg-card border border-border/50 px-4 py-3 shadow-sm">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="relative flex-1 max-w-sm">
              <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search patients by name, email or ID…"
                className="h-8 w-full rounded-lg border border-border/60 bg-background pl-9 pr-3 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all"
              />
            </div>

            {/* Tab Filter */}
            <div className="hidden sm:flex items-center gap-0.5 rounded-lg bg-muted/60 p-0.5 text-[11px] font-medium border border-border/30">
              {(["all", "active", "new"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTabFilter(t)}
                  className={`rounded-md px-3 py-1 capitalize transition-all cursor-pointer ${
                    tabFilter === t
                      ? "bg-background text-foreground shadow-sm font-semibold border border-border/40"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <span className="hidden sm:block font-mono text-[10.5px] text-muted-foreground">{filtered.length} records</span>
            <Button variant="outline" size="sm">
              <Filter className="h-3 w-3 text-muted-foreground" />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        {/* Premium Patient Table */}
        <div className="rounded-xl bg-card border border-border/50 shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-muted/30 border-b border-border/40">
            <h3 className="text-[12.5px] font-semibold text-foreground tracking-tight">Patient Records</h3>
            <span className="font-mono text-[10px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full border border-border/30">
              {filtered.length} / {patients.length} patients
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px]">
              <thead className="bg-muted/20 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/40">
                <tr>
                  <th className="px-5 py-3 font-semibold">Patient</th>
                  <th className="px-5 py-3 font-semibold">Provider</th>
                  <th className="px-5 py-3 font-semibold">Contact</th>
                  <th className="px-5 py-3 font-semibold">Location</th>
                  <th className="px-5 py-3 font-semibold">Last Visit</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {filtered.map((p, idx) => (
                  <tr
                    key={p.id}
                    onClick={() => setSelectedId(p.id)}
                    className="hover:bg-emerald-500/4 transition-colors cursor-pointer group relative"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} font-bold text-[11px] text-white shadow-sm`}>
                          {initials(p.name)}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-[12.5px] group-hover:text-emerald-700 transition-colors">
                            {p.name}
                          </div>
                          <div className="font-mono text-[10px] text-muted-foreground/80 mt-0.5">#{p.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 grid place-items-center rounded-full bg-emerald-500/10 text-emerald-700 font-bold text-[9px]">
                          {p.provider.split(" ").pop()?.[0]}
                        </div>
                        <span className="font-medium text-foreground text-[12px]">{p.provider}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-foreground">
                          <Mail className="h-3 w-3 text-muted-foreground shrink-0" />
                          {p.email}
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-[10.5px] text-muted-foreground">
                          <Phone className="h-3 w-3 shrink-0" />
                          {p.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="font-medium text-[12px]">{p.city}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                        <Clock className="h-3 w-3 shrink-0" />
                        {p.lastVisit}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <StatusBadge s={p.status} />
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="inline-flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedId(p.id); }}
                          className="inline-flex items-center gap-1 h-7 px-2.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 font-medium text-[11px] transition-colors cursor-pointer"
                          title="View Details"
                        >
                          <Eye className="h-3 w-3" />
                          View
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="h-7 w-7 grid place-items-center rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                          <MoreHorizontal className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-5 py-12 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Users className="h-8 w-8 text-muted-foreground/30" />
                        <p className="text-[12px] text-muted-foreground font-mono">No patients found matching "{query}"</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-border/40 bg-muted/10">
            <span className="font-mono text-[10.5px] text-muted-foreground">Showing {filtered.length} of {patients.length} patients</span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10.5px] text-muted-foreground">Page 1 of 1</span>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
            </div>
          </div>
        </div>
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