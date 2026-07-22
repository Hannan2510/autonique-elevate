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
  ChevronLeft,
  MoreHorizontal,
  Users,
  Activity,
  CreditCard,
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

function StatusBadge({ s }: { s: Patient["status"] }) {
  const tone = s === "active" ? "success" : s === "new" ? "default" : "muted";
  return <Badge tone={tone as "success" | "default" | "muted"}>{s}</Badge>;
}

function Customers() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>(patients[0].id);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query) return patients;
    const q = query.toLowerCase();
    return patients.filter(
      (p) => p.name.toLowerCase().includes(q) || p.email.toLowerCase().includes(q) || p.id.toLowerCase().includes(q),
    );
  }, [query]);

  const selected = patients.find((p) => p.id === selectedId) ?? patients[0];

  return (
    <>
      {/* Top PageHeader - Matching Overview Theme */}
      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-normal text-foreground">
            Patient <span className="font-serif italic font-normal text-emerald-800 dark:text-emerald-300">Directory</span>
          </span>
        }
        description={`${patients.length} active records · 3 new patients registered this week`}
        actions={
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[11.5px] text-muted-foreground font-medium hidden sm:inline">Sunday, June 22, 2026</span>
            <Button variant="outline" size="sm">
              <Filter className="h-3 w-3 text-muted-foreground" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
            <Button size="sm">
              <Plus className="h-3 w-3" />
              <span className="hidden sm:inline">Add Patient</span>
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] min-h-[calc(100vh-3rem-90px)]">
        {/* Left Directory List Sidebar */}
        <div className={`flex flex-col border-border/40 lg:border-r bg-background/50 ${mobileDetailOpen ? "hidden lg:flex" : "flex"}`}>
          <div className="border-b border-border/40 p-3 bg-muted/20">
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search patient name, email, or ID…"
                className="h-7.5 w-full rounded-md border border-border/60 bg-background pl-7 pr-3 text-[11.5px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all"
              />
            </div>
          </div>

          <ul className="flex-1 divide-y divide-border/40 overflow-y-auto">
            {filtered.map((p) => {
              const active = p.id === selected.id;
              return (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      setSelectedId(p.id);
                      setMobileDetailOpen(true);
                    }}
                    className={`flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-all ${
                      active
                        ? "bg-emerald-500/10 text-foreground font-semibold shadow-2xs border-l-2 border-l-emerald-600"
                        : "hover:bg-muted/20 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 font-mono text-[10.5px] font-bold text-emerald-800 dark:text-emerald-300">
                      {initials(p.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="truncate text-[12.5px] font-semibold text-foreground">{p.name}</div>
                        <StatusBadge s={p.status} />
                      </div>
                      <div className="mt-0.5 flex items-center gap-1.5 text-[10.5px] text-muted-foreground font-mono">
                        <span>{p.id}</span>
                        <span>·</span>
                        <span className="truncate">{p.city}</span>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="p-8 text-center text-[12px] text-muted-foreground font-mono">No patients match "{query}".</li>
            )}
          </ul>
        </div>

        {/* Main Content Detail Area */}
        <div className={`overflow-y-auto ${mobileDetailOpen ? "block" : "hidden lg:block"}`}>
          <div className="border-b border-border/40 px-4 py-2.5 lg:hidden bg-muted/20">
            <button onClick={() => setMobileDetailOpen(false)} className="inline-flex items-center gap-1 text-[12px] font-medium text-muted-foreground hover:text-foreground">
              <ChevronLeft className="h-3.5 w-3.5" />
              Back to patient list
            </button>
          </div>

          <div className="px-4 py-4 sm:px-6 space-y-5">
            {/* Header profile block */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3.5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-emerald-500/20 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-800 dark:text-emerald-300 font-mono text-[14px] font-bold shadow-2xs">
                  {initials(selected.name)}
                </div>
                <div className="min-w-0">
                  <h2 className="truncate font-display text-xl font-bold tracking-tight text-foreground">{selected.name}</h2>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[11.5px] text-muted-foreground">
                    <span className="font-mono text-[10.5px] bg-muted/80 px-1.5 py-0.5 rounded text-foreground">{selected.id}</span>
                    <span>·</span>
                    <span>{selected.provider}</span>
                    <StatusBadge s={selected.status} />
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <span className="hidden sm:inline">Schedule</span>
                </Button>
                <Button size="sm">
                  <span className="hidden sm:inline">Open Chart</span>
                  <span className="sm:hidden">Chart</span>
                </Button>
                <button className="grid h-7.5 w-7.5 place-items-center rounded-md border border-border/60 text-muted-foreground hover:bg-accent transition-colors">
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Clinexa Gradient Summary KPI Cards */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { l: "Last Visit", v: selected.lastVisit, i: Clock, grad: "kpi-gradient-mint" },
                { l: "Next Visit", v: selected.nextVisit ?? "—", i: Calendar, grad: "kpi-gradient-lime" },
                { l: "Total Visits", v: String(selected.visits), i: Activity, grad: "kpi-gradient-emerald" },
                { l: "Balance", v: selected.balance ? `$${selected.balance}` : "$0", i: CreditCard, grad: "kpi-gradient-teal" },
              ].map((s) => {
                const Icon = s.i;
                return (
                  <div key={s.l} className={`rounded-xl p-3.5 shadow-2xs border border-emerald-500/10 ${s.grad}`}>
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-foreground/80">
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-white/90 dark:bg-card/90 shadow-2xs">
                        <Icon className="h-3 w-3 text-emerald-700 dark:text-emerald-400" />
                      </div>
                      <span>{s.l}</span>
                    </div>
                    <div className="mt-2 font-display text-xl font-bold tracking-tight text-foreground">{s.v}</div>
                  </div>
                );
              })}
            </div>

            {/* Profile Info Cards */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <Card title="Contact Profile" padding="p-0">
                <dl className="divide-y divide-border/40 text-[12px]">
                  {[
                    { i: Mail, l: "Email", v: selected.email },
                    { i: Phone, l: "Phone", v: selected.phone },
                    { i: MapPin, l: "Location", v: selected.city },
                  ].map((r) => {
                    const Icon = r.i;
                    return (
                      <div key={r.l} className="grid grid-cols-[100px_1fr] items-center gap-3 px-4 py-3">
                        <dt className="flex items-center gap-2 text-muted-foreground font-medium">
                          <Icon className="h-3.5 w-3.5" />
                          {r.l}
                        </dt>
                        <dd className="truncate font-mono text-foreground font-semibold">{r.v}</dd>
                      </div>
                    );
                  })}
                </dl>
              </Card>

              <Card title="Clinical Notes & Alerts" padding="p-4">
                <p className="text-[12.5px] leading-relaxed text-muted-foreground bg-muted/20 p-3 rounded-lg border border-border/40 font-sans">
                  {selected.notes || "No additional clinical warnings or notes recorded."}
                </p>
              </Card>
            </div>

            {/* Historical Visits Table */}
            <Card
              title="Historical Visits & Invoices"
              padding="p-0"
              action={<span className="font-mono text-[10px] bg-muted/80 px-2 py-0.5 rounded text-muted-foreground">{selected.visits} recorded</span>}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-[11.5px]">
                  <thead className="border-b border-border/40 bg-muted/40 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 font-semibold">Date</th>
                      <th className="px-4 py-2 font-semibold">Reason</th>
                      <th className="px-4 py-2 font-semibold">Provider</th>
                      <th className="px-4 py-2 text-right font-semibold">Amount</th>
                      <th className="px-4 py-2 text-right font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      { d: "22 Jul 2026", r: "Follow-up consultation", a: 180 },
                      { d: "08 Jul 2026", r: "Procedure", a: 940 },
                      { d: "18 Jun 2026", r: "Consultation", a: 180 },
                      { d: "02 Jun 2026", r: "Lab review", a: 60 },
                    ].map((r) => (
                      <tr key={r.d} className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-2.5 font-mono text-muted-foreground">{r.d}</td>
                        <td className="px-4 py-2.5 font-medium text-foreground">{r.r}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{selected.provider}</td>
                        <td className="px-4 py-2.5 text-right font-mono text-foreground font-semibold">${r.a}</td>
                        <td className="px-4 py-2.5 text-right"><Badge tone="success">Paid</Badge></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}