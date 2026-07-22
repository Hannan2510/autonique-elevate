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
  { id: "P-1037", name: "Elena Rossi", email: "elena@rossi.it", phone: "+39 06 4488 9021", city: "Rome", status: "active", lastVisit: "18 Jul 2026", visits: 11, balance: 0, provider: "Dr. Reyes", notes: "" },
  { id: "P-1036", name: "Rafael Ortiz", email: "r.ortiz@correo.es", phone: "+34 91 552 1204", city: "Madrid", status: "new", lastVisit: "12 Jul 2026", visits: 1, balance: 0, provider: "Dr. Okafor", notes: "First consultation. Requesting cost estimate." },
  { id: "P-1035", name: "Nadia Haddad", email: "nadia@haddad.co", phone: "+971 4 552 1188", city: "Dubai", status: "active", lastVisit: "10 Jul 2026", visits: 8, balance: 480, provider: "Dr. Reyes", notes: "Outstanding balance from last visit." },
  { id: "P-1034", name: "Timo Järvinen", email: "timo@jarvinen.fi", phone: "+358 9 552 4401", city: "Helsinki", status: "inactive", lastVisit: "22 Mar 2026", visits: 4, balance: 0, provider: "Dr. Okafor", notes: "Relocated." },
  { id: "P-1033", name: "Isabelle Blanc", email: "isabelle@blanc.fr", phone: "+33 1 4488 5522", city: "Paris", status: "active", lastVisit: "08 Jul 2026", visits: 17, balance: 0, provider: "Dr. Reyes", notes: "" },
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
      <PageHeader
        title="Patients"
        description={`${patients.length} records · 3 new this week`}
        actions={
          <>
            <Button variant="outline" size="md">
              <Filter className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
            <Button size="md">
              <Plus className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Add patient</span>
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] min-h-[calc(100vh-3.5rem-105px)]">
        <div className={`flex flex-col border-border lg:border-r ${mobileDetailOpen ? "hidden lg:flex" : "flex"}`}>
          <div className="border-b border-border p-3">
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, email, or ID"
                className="h-9 w-full rounded-md border border-border bg-background pl-8 pr-3 text-[13px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
          </div>
          <ul className="flex-1 divide-y divide-border overflow-y-auto">
            {filtered.map((p) => {
              const active = p.id === selected.id;
              return (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      setSelectedId(p.id);
                      setMobileDetailOpen(true);
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${active ? "bg-accent" : "hover:bg-accent/50"}`}
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background text-[11px] font-medium">
                      {initials(p.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="truncate text-[13.5px] font-medium">{p.name}</div>
                        <StatusBadge s={p.status} />
                      </div>
                      <div className="mt-0.5 flex items-center gap-2 text-[11.5px] text-muted-foreground">
                        <span className="font-mono">{p.id}</span>
                        <span>·</span>
                        <span className="truncate">{p.city}</span>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="p-8 text-center text-[13px] text-muted-foreground">No patients match "{query}".</li>
            )}
          </ul>
        </div>

        <div className={`overflow-y-auto ${mobileDetailOpen ? "block" : "hidden lg:block"}`}>
          <div className="border-b border-border px-5 py-3 lg:hidden">
            <button onClick={() => setMobileDetailOpen(false)} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground">
              <ChevronLeft className="h-3.5 w-3.5" />
              Back to list
            </button>
          </div>

          <div className="px-5 py-6 sm:px-8">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-background text-[15px] font-medium">
                  {initials(selected.name)}
                </div>
                <div className="min-w-0">
                  <h2 className="truncate font-display text-2xl tracking-tight">{selected.name}</h2>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground">
                    <span className="font-mono">{selected.id}</span>
                    <span>·</span>
                    <span>{selected.provider}</span>
                    <StatusBadge s={selected.status} />
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Button variant="outline" size="md">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Schedule</span>
                </Button>
                <Button size="md">
                  <span className="hidden sm:inline">Open chart</span>
                  <span className="sm:hidden">Chart</span>
                </Button>
                <button className="grid h-8 w-8 place-items-center rounded-md border border-border text-muted-foreground hover:bg-accent">
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
              {[
                { l: "Last visit", v: selected.lastVisit },
                { l: "Next visit", v: selected.nextVisit ?? "—" },
                { l: "Total visits", v: String(selected.visits) },
                { l: "Balance", v: selected.balance ? `$${selected.balance}` : "$0" },
              ].map((s) => (
                <div key={s.l} className="bg-card p-4">
                  <div className="text-[11px] text-muted-foreground">{s.l}</div>
                  <div className="mt-1 font-display text-lg tracking-tight">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card title="Contact" padding="p-0">
                <dl className="divide-y divide-border">
                  {[
                    { i: Mail, l: "Email", v: selected.email },
                    { i: Phone, l: "Phone", v: selected.phone },
                    { i: MapPin, l: "Location", v: selected.city },
                  ].map((r) => {
                    const Icon = r.i;
                    return (
                      <div key={r.l} className="grid grid-cols-[110px_1fr] items-center gap-3 px-5 py-3">
                        <dt className="flex items-center gap-2 text-[12px] text-muted-foreground">
                          <Icon className="h-3.5 w-3.5" />
                          {r.l}
                        </dt>
                        <dd className="truncate text-[13px]">{r.v}</dd>
                      </div>
                    );
                  })}
                </dl>
              </Card>

              <Card title="Clinical notes">
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                  {selected.notes || "No notes recorded for this patient yet."}
                </p>
              </Card>
            </div>

            <Card
              title="Recent visits"
              className="mt-6"
              padding="p-0"
              action={<span className="font-mono text-[11px] text-muted-foreground">{selected.visits} total</span>}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead className="border-b border-border bg-muted/40 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-5 py-2.5 font-medium">Date</th>
                      <th className="px-5 py-2.5 font-medium">Reason</th>
                      <th className="px-5 py-2.5 font-medium">Provider</th>
                      <th className="px-5 py-2.5 text-right font-medium">Amount</th>
                      <th className="px-5 py-2.5 text-right font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { d: "22 Jul 2026", r: "Follow-up consultation", a: 180 },
                      { d: "08 Jul 2026", r: "Procedure", a: 940 },
                      { d: "18 Jun 2026", r: "Consultation", a: 180 },
                      { d: "02 Jun 2026", r: "Lab review", a: 60 },
                    ].map((r) => (
                      <tr key={r.d} className="hover:bg-accent/40">
                        <td className="px-5 py-3 font-mono text-[12px] text-muted-foreground">{r.d}</td>
                        <td className="px-5 py-3">{r.r}</td>
                        <td className="px-5 py-3 text-muted-foreground">{selected.provider}</td>
                        <td className="px-5 py-3 text-right font-mono">${r.a}</td>
                        <td className="px-5 py-3 text-right"><Badge tone="success">paid</Badge></td>
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