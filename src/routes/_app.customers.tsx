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
  Clock,
  X,
  Eye,
  FileText,
  CreditCard as StripeIcon,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { StripePaymentModal, StripePaymentItem } from "@/components/app/StripePaymentModal";

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
  { id: "P-1042", name: "Ava Chen", email: "ava.chen@meridian.io", phone: "+49 30 8823 1194", city: "Berlin", status: "active", lastVisit: "22 Jul 2026", nextVisit: "05 Aug 2026", visits: 14, balance: 180, provider: "Dr. Reyes", notes: "Prefers morning appointments. Allergic to penicillin." },
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
  const [tabFilter, setTabFilter] = useState<"all" | "active" | "new">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Stripe Modal state
  const [stripeModalOpen, setStripeModalOpen] = useState(false);
  const [stripeItem, setStripeItem] = useState<StripePaymentItem>({
    title: "Patient Consultation Invoice",
    description: "Clinic Visit & Evaluation Fee",
    amount: 180,
  });

  const filtered = useMemo(() => {
    return patients.filter((p) => {
      if (tabFilter !== "all" && p.status !== tabFilter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.email.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.city.toLowerCase().includes(q);
    });
  }, [query, tabFilter]);

  const selectedPatient = useMemo(() => patients.find((p) => p.id === selectedId), [selectedId]);

  const triggerStripePay = (patient: Patient) => {
    setStripeItem({
      title: `Invoice #${patient.id} — ${patient.name}`,
      description: `Outpatient Services & Consultation Balance`,
      amount: patient.balance > 0 ? patient.balance : 180,
      patientName: patient.name,
      invoiceId: patient.id,
    });
    setStripeModalOpen(true);
  };

  return (
    <>
      {/* Stripe Payment Modal */}
      <StripePaymentModal
        isOpen={stripeModalOpen}
        onClose={() => setStripeModalOpen(false)}
        item={stripeItem}
        onSuccess={(txId) => {
          console.log("Stripe transaction successful:", txId);
        }}
      />

      {/* PageHeader - Clean & Modern */}
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
            <Button size="sm" onClick={() => triggerStripePay(patients[0])}>
              <StripeIcon className="h-3 w-3 text-emerald-300" />
              <span>Stripe Gateway</span>
            </Button>
          </div>
        }
      />

      <div className="px-4 py-4 sm:px-6 space-y-4">
        {/* Compact KPI Summary Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Active Patients", val: "5", sub: "Registered", grad: "kpi-gradient-mint", icon: Users },
            { label: "Total Visits", val: "46", sub: "All time", grad: "kpi-gradient-lime", icon: Activity },
            { label: "Upcoming Visits", val: "2", sub: "This week", grad: "kpi-gradient-emerald", icon: Calendar },
            { label: "Total Balance", val: "$540", sub: "Outstanding", grad: "kpi-gradient-teal", icon: CreditCard },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className={`rounded-xl p-3 shadow-2xs border border-emerald-500/10 ${item.grad}`}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-foreground/80">{item.label}</span>
                  <div className="grid h-6 w-6 place-items-center rounded-full bg-white/90 dark:bg-card/90 shadow-2xs">
                    <Icon className="h-3 w-3 text-emerald-700 dark:text-emerald-400" />
                  </div>
                </div>
                <div className="mt-1.5 font-display text-xl font-bold tracking-tight text-foreground">{item.val}</div>
                <div className="mt-0.5 font-mono text-[10px] text-muted-foreground/80">{item.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Filter Bar & Search Container */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-xl bg-card p-3 shadow-2xs border border-border/40">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div className="relative flex-1 max-w-sm">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, email, or ID…"
                className="h-7.5 w-full rounded-md border border-border/60 bg-background pl-8 pr-3 text-[11.5px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all"
              />
            </div>

            {/* Filter Tabs */}
            <div className="hidden sm:flex items-center gap-1 rounded-md bg-muted/60 p-0.5 text-[11px] font-medium">
              {(["all", "active", "new"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTabFilter(t)}
                  className={`rounded-md px-2.5 py-0.5 capitalize transition-all cursor-pointer ${
                    tabFilter === t
                      ? "bg-background text-foreground shadow-2xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Button variant="outline" size="sm">
              <Filter className="h-3 w-3 text-muted-foreground" />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        {/* Spacious, Clean Patients Table */}
        <div className="rounded-xl bg-card vercel-card shadow-2xs overflow-hidden border border-border/40">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11.5px]">
              <thead className="bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border/40">
                <tr>
                  <th className="px-4 py-2.5 font-semibold">Patient</th>
                  <th className="px-4 py-2.5 font-semibold">Primary Provider</th>
                  <th className="px-4 py-2.5 font-semibold">Contact Info</th>
                  <th className="px-4 py-2.5 font-semibold">Location</th>
                  <th className="px-4 py-2.5 font-semibold">Last Visit</th>
                  <th className="px-4 py-2.5 font-semibold">Status</th>
                  <th className="px-4 py-2.5 font-semibold text-right">Stripe Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {filtered.map((p) => (
                  <tr
                    key={p.id}
                    onClick={() => setSelectedId(p.id)}
                    className="hover:bg-emerald-500/5 transition-colors cursor-pointer group"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 font-mono text-[10.5px] font-bold text-emerald-800 dark:text-emerald-300">
                          {initials(p.name)}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-[12.5px] group-hover:text-emerald-700 transition-colors">
                            {p.name}
                          </div>
                          <div className="font-mono text-[10px] text-muted-foreground">ID: #{p.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-foreground">{p.provider}</td>
                    <td className="px-4 py-3">
                      <div>
                        <div className="font-mono text-[11px] text-foreground">{p.email}</div>
                        <div className="font-mono text-[10px] text-muted-foreground">{p.phone}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground font-medium">{p.city}</td>
                    <td className="px-4 py-3 font-mono text-[11px] text-muted-foreground">{p.lastVisit}</td>
                    <td className="px-4 py-3">
                      <StatusBadge s={p.status} />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            triggerStripePay(p);
                          }}
                          className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10.5px] font-medium flex items-center gap-1 shadow-2xs transition-all cursor-pointer"
                        >
                          <StripeIcon className="h-3 w-3" />
                          <span>Pay ${p.balance > 0 ? p.balance : 180}</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-[12px] text-muted-foreground font-mono">
                      No patient records found matching "{query}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Slide-Over Patient Detail Drawer */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-xs transition-opacity" onClick={() => setSelectedId(null)} />
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md bg-card shadow-2xl border-l border-border/40 flex flex-col">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-border/40 px-5 py-3.5 bg-muted/20">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500/10 font-mono text-[11px] font-bold text-emerald-700">
                    {initials(selectedPatient.name)}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold tracking-tight text-foreground">{selectedPatient.name}</h3>
                    <div className="font-mono text-[10px] text-muted-foreground">ID: #{selectedPatient.id}</div>
                  </div>
                </div>
                <button onClick={() => setSelectedId(null)} className="p-1 text-muted-foreground hover:text-foreground rounded hover:bg-accent">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {/* Status & Provider Pills */}
                <div className="flex items-center justify-between bg-muted/30 p-3 rounded-lg border border-border/40 text-[12px]">
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-mono">Provider</span>
                    <span className="font-semibold text-foreground">{selectedPatient.provider}</span>
                  </div>
                  <StatusBadge s={selectedPatient.status} />
                </div>

                {/* Stripe Quick Checkout Bar */}
                <div className="rounded-xl p-3.5 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white flex items-center justify-between shadow-md">
                  <div>
                    <div className="text-[10px] text-emerald-300 font-mono uppercase">Outstanding Balance</div>
                    <div className="text-lg font-bold font-display">${selectedPatient.balance > 0 ? selectedPatient.balance : 180}.00</div>
                  </div>
                  <button
                    onClick={() => triggerStripePay(selectedPatient)}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11.5px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <StripeIcon className="h-3.5 w-3.5" />
                    <span>Pay with Stripe</span>
                  </button>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg p-3 kpi-gradient-mint border border-emerald-500/10">
                    <span className="text-[10.5px] font-medium text-foreground/80 block">Last Visit</span>
                    <span className="font-mono text-[13px] font-bold text-foreground">{selectedPatient.lastVisit}</span>
                  </div>
                  <div className="rounded-lg p-3 kpi-gradient-lime border border-emerald-500/10">
                    <span className="text-[10.5px] font-medium text-foreground/80 block">Next Visit</span>
                    <span className="font-mono text-[13px] font-bold text-foreground">{selectedPatient.nextVisit ?? "—"}</span>
                  </div>
                </div>

                {/* Contact Profile */}
                <Card title="Contact Profile" padding="p-0">
                  <dl className="divide-y divide-border/40 text-[11.5px]">
                    <div className="flex items-center justify-between px-4 py-2.5">
                      <span className="flex items-center gap-1.5 text-muted-foreground"><Mail className="h-3 w-3" /> Email</span>
                      <span className="font-mono font-semibold text-foreground">{selectedPatient.email}</span>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2.5">
                      <span className="flex items-center gap-1.5 text-muted-foreground"><Phone className="h-3 w-3" /> Phone</span>
                      <span className="font-mono font-semibold text-foreground">{selectedPatient.phone}</span>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2.5">
                      <span className="flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-3 w-3" /> Location</span>
                      <span className="font-semibold text-foreground">{selectedPatient.city}</span>
                    </div>
                  </dl>
                </Card>

                {/* Clinical Notes */}
                <Card title="Clinical Notes & Warnings" padding="p-3.5">
                  <p className="text-[12px] leading-relaxed text-muted-foreground bg-muted/20 p-2.5 rounded-lg border border-border/40">
                    {selectedPatient.notes}
                  </p>
                </Card>
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-border/40 p-4 bg-background flex items-center justify-end gap-2">
                <Button variant="outline" size="sm" onClick={() => setSelectedId(null)}>Close</Button>
                <Button size="sm" onClick={() => triggerStripePay(selectedPatient)}>
                  <StripeIcon className="h-3.5 w-3.5" />
                  <span>Stripe Payment</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}