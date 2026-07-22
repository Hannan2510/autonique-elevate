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
  { label: "Revenue Today", value: "$18,240", delta: "+12.4%", up: true, sub: "vs. yesterday", color: "mint" },
  { label: "Bookings Scheduled", value: "36", delta: "+3.1%", up: true, sub: "vs. yesterday", color: "jade" },
  { label: "Cancellations", value: "2", delta: "-40%", up: false, sub: "vs. yesterday", color: "rose" },
  { label: "New Patients", value: "7", delta: "+2", up: true, sub: "this week", color: "sage" },
];

const today = [
  { t: "09:00 AM", n: "Ava Chen", r: "General Consultation · Dr. Reyes", s: "confirmed" as const },
  { t: "10:30 AM", n: "Marcus Weiss", r: "Post-Op Follow-up · Dr. Okafor", s: "confirmed" as const },
  { t: "11:15 AM", n: "Priya Kapoor", r: "Specialized Procedure · Dr. Reyes", s: "arrived" as const },
  { t: "02:30 PM", n: "Sofia Martins", r: "Annual Clinical Review · Dr. Reyes", s: "waiting" as const },
];

const activity = [
  { who: "Dr. Reyes", act: "completed encounter notes for", subj: "Ava Chen", when: "12m ago", tone: "bg-emerald-400" },
  { who: "Billing System", act: "generated invoice #INV-2841 for", subj: "Marcus Weiss", when: "38m ago", tone: "bg-teal-400" },
  { who: "Front Desk", act: "checked in patient", subj: "Priya Kapoor", when: "1h ago", tone: "bg-emerald-500" },
  { who: "Dr. Okafor", act: "signed lab telemetry results for", subj: "Jonas Lind", when: "2h ago", tone: "bg-teal-600" },
];

const upcoming = [
  { d: "Tomorrow", t: "08:30 AM", n: "Rafael Ortiz", r: "New patient consultation", badge: "Consultation" },
  { d: "Tomorrow", t: "10:00 AM", n: "Nadia Haddad", r: "Clinical follow-up", badge: "Follow-up" },
  { d: "Thu 24 Jul", t: "09:15 AM", n: "Timo Järvinen", r: "Outpatient procedure", badge: "Procedure" },
];

function Dashboard() {
  return (
    <>
      <PageHeader
        title="Good afternoon, Dr. Reyes 👋"
        description="Tuesday, 22 July 2026 · Meridian Clinics, Berlin"
        actions={
          <>
            <Button variant="outline" size="md">
              <CalendarIcon className="h-3.5 w-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Last 7 days</span>
            </Button>
            <Button size="md">
              <Plus className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">New appointment</span>
            </Button>
          </>
        }
      />

      <div className="px-4 py-6 sm:px-8 space-y-6">
        {/* High Density KPI Cards Grid — Borderless Elevated Cards with Soft Depth */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-card p-4.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.09)] transition-all relative overflow-hidden group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground/80">{s.label}</span>
                <span className={`h-2 w-2 rounded-full ${
                  s.color === "mint" ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" :
                  s.color === "jade" ? "bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]" :
                  s.color === "rose" ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" :
                  "bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.6)]"
                }`} />
              </div>
              <div className="mt-2.5 font-display text-2xl font-bold tracking-tight text-foreground">{s.value}</div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span
                  className={`inline-flex items-center gap-0.5 font-mono text-[10.5px] font-semibold px-2 py-0.5 rounded-full ${
                    s.color === "rose"
                      ? "text-rose-700 dark:text-rose-400 bg-rose-500/10"
                      : s.color === "jade"
                      ? "text-teal-700 dark:text-teal-300 bg-teal-500/10"
                      : s.color === "sage"
                      ? "text-emerald-800 dark:text-emerald-300 bg-emerald-600/10"
                      : "text-emerald-700 dark:text-emerald-400 bg-emerald-500/10"
                  }`}
                >
                  {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {s.delta}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground/70">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Telemetry Charts Row — Borderless Ambient Depth Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Revenue Velocity Area Chart */}
          <Card
            title="Revenue Velocity"
            action={
              <span className="font-mono text-[10.5px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full">
                7 Days Trailing
              </span>
            }
            className="lg:col-span-2"
            padding="p-0"
          >
            <div className="p-4 sm:p-5 pb-2">
              <div className="font-display text-2xl font-bold tracking-tight text-foreground">$114,940</div>
              <div className="mt-1 flex items-center gap-2 text-[11.5px] text-muted-foreground">
                <span className="font-mono text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  +18.2%
                </span>
                <span>vs. previous week ($97,200)</span>
              </div>
            </div>
            <div className="h-56 px-2 pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueSeries} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revLightMint" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#34d399" stopOpacity={0.01} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="d" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11, fontFamily: "var(--font-mono)" }} />
                  <YAxis hide />
                  <Tooltip
                    cursor={{ stroke: "#34d399", strokeDasharray: "3 3" }}
                    contentStyle={{
                      background: "var(--card)",
                      border: "none",
                      borderRadius: 8,
                      fontSize: 12,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                    }}
                    labelStyle={{ color: "var(--muted-foreground)", fontWeight: 600, fontFamily: "var(--font-mono)" }}
                    formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]}
                  />
                  <Area type="monotone" dataKey="v" stroke="#34d399" strokeWidth={1.75} fill="url(#revLightMint)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Bookings Density Bar Chart */}
          <Card
            title="Bookings Density"
            action={
              <span className="font-mono text-[10.5px] font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2.5 py-0.5 rounded-full">
                Weekly Count
              </span>
            }
            padding="p-0"
          >
            <div className="p-4 sm:p-5 pb-2">
              <div className="font-display text-2xl font-bold tracking-tight text-foreground">243</div>
              <div className="mt-1 flex items-center gap-2 text-[11.5px] text-muted-foreground">
                <span className="font-mono text-[10.5px] font-semibold text-teal-700 dark:text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded-full">
                  +6.5%
                </span>
                <span>vs. previous week</span>
              </div>
            </div>
            <div className="h-56 px-2 pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bookingsSeries} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
                  <XAxis dataKey="d" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11, fontFamily: "var(--font-mono)" }} />
                  <YAxis hide />
                  <Tooltip
                    cursor={{ fill: "rgba(45, 212, 191, 0.08)" }}
                    contentStyle={{
                      background: "var(--card)",
                      border: "none",
                      borderRadius: 8,
                      fontSize: 12,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                    }}
                  />
                  <Bar dataKey="v" fill="#2dd4bf" maxBarSize={14} radius={[3, 3, 0, 0]} opacity={0.85} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Live Appointment Queue & Light Green Quick Actions */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card
            title="Today's Appointment Queue"
            className="lg:col-span-2"
            padding="p-0"
            action={
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {today.length} Active Patients
                </span>
                <button className="text-muted-foreground hover:text-foreground p-1 rounded hover:bg-accent transition-colors">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            }
          >
            <ul className="divide-y divide-border/70">
              {today.map((a) => (
                <li key={a.t + a.n} className="grid grid-cols-[80px_1fr_auto] items-center gap-4 px-5 py-3.5 hover:bg-muted/30 transition-colors">
                  <div className="font-mono text-[12px] font-semibold text-muted-foreground bg-muted/60 px-2 py-1 rounded text-center">{a.t}</div>
                  <div className="min-w-0">
                    <div className="truncate text-[13.5px] font-semibold text-foreground">{a.n}</div>
                    <div className="truncate text-[12px] text-muted-foreground">{a.r}</div>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold border ${
                      a.s === "arrived"
                        ? "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-300"
                        : a.s === "waiting"
                        ? "border-emerald-600/30 bg-emerald-600/10 text-emerald-800 dark:text-emerald-300"
                        : "border-emerald-400/30 bg-emerald-400/10 text-emerald-700 dark:text-emerald-300"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      a.s === "arrived" ? "bg-teal-400 animate-pulse" : a.s === "waiting" ? "bg-emerald-600 animate-pulse" : "bg-emerald-400 animate-pulse"
                    }`} />
                    {a.s}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Quick Actions (Light Green Shades Accent Icons) */}
          <Card title="Quick Actions" padding="p-2">
            <ul className="divide-y divide-border/60">
              {[
                { i: UserPlus, l: "Add Patient", d: "Create new record", key: "⌘A", theme: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
                { i: CalendarIcon, l: "Schedule Visit", d: "Book provider slot", key: "⌘B", theme: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20" },
                { i: Receipt, l: "Issue Invoice", d: "Generate patient bill", key: "⌘I", theme: "bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 border-emerald-600/20" },
                { i: MessageSquare, l: "Send Broadcast", d: "Patient SMS alert", key: "⌘M", theme: "bg-teal-600/10 text-teal-700 dark:text-teal-300 border-teal-600/20" },
              ].map((a) => {
                const Icon = a.i;
                return (
                  <li key={a.l}>
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left hover:bg-accent/80 transition-colors group">
                      <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border font-bold transition-all group-hover:scale-105 ${a.theme}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[13px] font-semibold text-foreground">{a.l}</div>
                        <div className="truncate text-[11.5px] text-muted-foreground">{a.d}</div>
                      </div>
                      <kbd className="font-mono text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border/60 shadow-2xs">
                        {a.key}
                      </kbd>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>

        {/* Audit Stream & Upcoming Visits */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card title="Audit Activity Stream" className="lg:col-span-2" padding="p-0">
            <ul className="divide-y divide-border/70">
              {activity.map((a, i) => (
                <li key={i} className="flex items-start gap-3.5 px-5 py-3.5 hover:bg-muted/20 transition-colors">
                  <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${a.tone}`} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] leading-relaxed">
                      <span className="font-semibold text-foreground">{a.who}</span>{" "}
                      <span className="text-muted-foreground">{a.act}</span>{" "}
                      {a.subj && <span className="font-semibold text-foreground">{a.subj}</span>}
                    </div>
                  </div>
                  <div className="shrink-0 font-mono text-[11px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded">{a.when}</div>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Upcoming Visits" padding="p-0">
            <ul className="divide-y divide-border/70">
              {upcoming.map((u, i) => (
                <li key={i} className="flex items-center gap-3 px-5 py-3.5 hover:bg-muted/20 transition-colors">
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[13px] font-semibold text-foreground">{u.n}</div>
                    <div className="truncate text-[11.5px] text-muted-foreground">{u.r}</div>
                  </div>
                  <div className="shrink-0 text-right font-mono text-[10.5px] text-muted-foreground">
                    <div className="font-medium text-foreground">{u.d}</div>
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