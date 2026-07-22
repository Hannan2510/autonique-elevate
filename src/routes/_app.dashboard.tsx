import { createFileRoute } from "@tanstack/react-router";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Calendar as CalendarIcon,
  UserPlus,
  Receipt,
  MessageSquare,
  MoreHorizontal,
  Clock,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [
      { title: "Overview · Autonique" },
      { name: "description", content: "Today's revenue, appointments and clinic activity at a glance." },
      { property: "og:title", content: "Overview · Autonique" },
      { property: "og:description", content: "Today's revenue, appointments and clinic activity at a glance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Dashboard,
});

const revenueSeries = [
  { d: "Mon", v: 12400 },
  { d: "Tue", v: 14200 },
  { d: "Wed", v: 11800 },
  { d: "Thu", v: 16800 },
  { d: "Fri", v: 19400 },
  { d: "Sat", v: 22100 },
  { d: "Sun", v: 18200 },
];

const bookingsSeries = [
  { d: "Mon", v: 24 },
  { d: "Tue", v: 31 },
  { d: "Wed", v: 28 },
  { d: "Thu", v: 34 },
  { d: "Fri", v: 42 },
  { d: "Sat", v: 48 },
  { d: "Sun", v: 36 },
];

const stats = [
  { label: "Revenue today", value: "$18,240", delta: "+12.4%", up: true, sub: "vs. yesterday" },
  { label: "Bookings", value: "36", delta: "+3.1%", up: true, sub: "vs. yesterday" },
  { label: "Cancellations", value: "2", delta: "-40%", up: false, sub: "vs. yesterday" },
  { label: "New patients", value: "7", delta: "+2", up: true, sub: "this week" },
];

const today = [
  { t: "09:00", n: "Ava Chen", r: "Consultation · Dr. Reyes", s: "confirmed" as const },
  { t: "10:30", n: "Marcus Weiss", r: "Follow-up · Dr. Okafor", s: "confirmed" as const },
  { t: "11:15", n: "Priya Kapoor", r: "Procedure · Dr. Reyes", s: "arrived" as const },
  { t: "13:00", n: "Jonas Lind", r: "Consultation · Dr. Okafor", s: "confirmed" as const },
  { t: "14:30", n: "Sofia Martins", r: "Consultation · Dr. Reyes", s: "waiting" as const },
  { t: "16:00", n: "Elena Rossi", r: "Follow-up · Dr. Reyes", s: "confirmed" as const },
];

const activity = [
  { who: "Dr. Reyes", act: "completed a visit with", subj: "Ava Chen", when: "12m ago" },
  { who: "Billing", act: "issued invoice #INV-2841 for", subj: "Marcus Weiss", when: "38m ago" },
  { who: "Front desk", act: "checked in", subj: "Priya Kapoor", when: "1h ago" },
  { who: "Dr. Okafor", act: "added notes for", subj: "Jonas Lind", when: "2h ago" },
  { who: "System", act: "sent 24 reminders for tomorrow", subj: "", when: "3h ago" },
];

const upcoming = [
  { d: "Tomorrow", t: "08:30", n: "Rafael Ortiz", r: "New patient consult" },
  { d: "Tomorrow", t: "10:00", n: "Nadia Haddad", r: "Follow-up" },
  { d: "Thu 24", t: "09:15", n: "Timo Järvinen", r: "Procedure" },
  { d: "Thu 24", t: "11:00", n: "Isabelle Blanc", r: "Consultation" },
];

const badgeToneFor = (s: "confirmed" | "arrived" | "waiting") =>
  s === "arrived" ? "success" : s === "waiting" ? "warning" : "muted";

function Dashboard() {
  return (
    <>
      <PageHeader
        title="Overview"
        description="Tuesday, 22 July 2026 — Meridian Clinics, Berlin"
        actions={
          <>
            <Button variant="outline" size="md">
              <CalendarIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Last 7 days</span>
            </Button>
            <Button size="md">
              <Plus className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">New appointment</span>
            </Button>
          </>
        }
      />

      <div className="px-4 py-6 sm:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-5">
              <div className="text-[12px] text-muted-foreground">{s.label}</div>
              <div className="mt-2 font-display text-3xl leading-none tracking-tight">{s.value}</div>
              <div className="mt-3 flex items-center gap-1.5 text-[11.5px] text-muted-foreground">
                <span
                  className={`inline-flex items-center gap-0.5 font-mono ${s.up ? "text-[color-mix(in_oklab,var(--success)_70%,var(--foreground))]" : "text-[color-mix(in_oklab,var(--destructive)_70%,var(--foreground))]"}`}
                >
                  {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {s.delta}
                </span>
                <span>{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card
            title="Revenue"
            action={<span className="font-mono text-[11px] text-muted-foreground">Last 7 days</span>}
            className="lg:col-span-2"
            padding="p-0"
          >
            <div className="p-5 pb-2">
              <div className="font-display text-3xl tracking-tight">$114,940</div>
              <div className="mt-1 text-[12px] text-muted-foreground">
                <span className="text-[color-mix(in_oklab,var(--success)_70%,var(--foreground))]">+18.2%</span> vs. previous week
              </div>
            </div>
            <div className="h-56 px-2 pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueSeries} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity={0.14} />
                      <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="d" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
                  <YAxis hide />
                  <Tooltip
                    cursor={{ stroke: "var(--border)" }}
                    contentStyle={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      fontSize: 12,
                    }}
                    labelStyle={{ color: "var(--muted-foreground)" }}
                    formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]}
                  />
                  <Area type="monotone" dataKey="v" stroke="currentColor" strokeWidth={1.5} fill="url(#rev)" className="text-foreground" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card
            title="Bookings"
            action={<span className="font-mono text-[11px] text-muted-foreground">Last 7 days</span>}
            padding="p-0"
          >
            <div className="p-5 pb-2">
              <div className="font-display text-3xl tracking-tight">243</div>
              <div className="mt-1 text-[12px] text-muted-foreground">
                <span className="text-[color-mix(in_oklab,var(--success)_70%,var(--foreground))]">+6.5%</span> vs. previous week
              </div>
            </div>
            <div className="h-56 px-2 pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bookingsSeries} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                  <XAxis dataKey="d" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
                  <YAxis hide />
                  <Tooltip
                    cursor={{ fill: "var(--muted)" }}
                    contentStyle={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="v" fill="currentColor" radius={[3, 3, 0, 0]} className="text-foreground" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card
            title="Today's appointments"
            className="lg:col-span-2"
            padding="p-0"
            action={
              <div className="flex items-center gap-2">
                <Badge tone="muted">{today.length} scheduled</Badge>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            }
          >
            <ul className="divide-y divide-border">
              {today.map((a) => (
                <li key={a.t + a.n} className="grid grid-cols-[52px_1fr_auto] items-center gap-4 px-5 py-3">
                  <div className="font-mono text-[12px] text-muted-foreground">{a.t}</div>
                  <div className="min-w-0">
                    <div className="truncate text-[13.5px] font-medium">{a.n}</div>
                    <div className="truncate text-[12px] text-muted-foreground">{a.r}</div>
                  </div>
                  <Badge tone={badgeToneFor(a.s)}>{a.s}</Badge>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Quick actions" padding="p-2">
            <ul className="divide-y divide-border">
              {[
                { i: UserPlus, l: "Add patient", d: "Create a new patient record" },
                { i: CalendarIcon, l: "Schedule appointment", d: "Book a visit with a provider" },
                { i: Receipt, l: "Create invoice", d: "Issue a new invoice" },
                { i: MessageSquare, l: "Send broadcast", d: "Message a patient segment" },
              ].map((a) => {
                const Icon = a.i;
                return (
                  <li key={a.l}>
                    <button className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-left hover:bg-accent">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-background text-muted-foreground">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[13px] font-medium">{a.l}</div>
                        <div className="truncate text-[11.5px] text-muted-foreground">{a.d}</div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card title="Recent activity" className="lg:col-span-2" padding="p-0">
            <ul className="divide-y divide-border">
              {activity.map((a, i) => (
                <li key={i} className="flex items-start gap-3 px-5 py-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] leading-relaxed">
                      <span className="font-medium">{a.who}</span>{" "}
                      <span className="text-muted-foreground">{a.act}</span>{" "}
                      {a.subj && <span className="font-medium">{a.subj}</span>}
                    </div>
                  </div>
                  <div className="shrink-0 font-mono text-[11px] text-muted-foreground">{a.when}</div>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Upcoming" padding="p-0">
            <ul className="divide-y divide-border">
              {upcoming.map((u, i) => (
                <li key={i} className="flex items-center gap-3 px-5 py-3">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[13px] font-medium">{u.n}</div>
                    <div className="truncate text-[11.5px] text-muted-foreground">{u.r}</div>
                  </div>
                  <div className="shrink-0 text-right font-mono text-[11px] text-muted-foreground">
                    <div>{u.d}</div>
                    <div>{u.t}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}