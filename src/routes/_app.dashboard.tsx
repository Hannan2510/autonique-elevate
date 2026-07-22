import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import {
  Users,
  Calendar as CalendarIcon,
  DollarSign,
  UserCheck,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  Eye,
  Edit2,
} from "lucide-react";
import { Card, PageHeader } from "@/components/app/AppShell";

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

// Clinexa Mockup Line Chart Data (Last 6-9 months)
const revenueOverviewData = [
  { m: "Jan", v: 7000 },
  { m: "Feb", v: 11000 },
  { m: "Mar", v: 9000 },
  { m: "Apr", v: 15000 },
  { m: "May", v: 20000 },
  { m: "Jun", v: 12000 },
  { m: "Jul", v: 14000 },
  { m: "Aug", v: 13000 },
  { m: "Sep", v: 19000 },
];

// Donut Chart Data
const appointmentStatsData = [
  { name: "Completed", value: 35, color: "#34d399" },
  { name: "Upcoming", value: 14, color: "#a3e635" },
  { name: "Cancelled", value: 5, color: "#fb7185" },
];

// KPI Cards data matching the screenshot
const kpiCards = [
  {
    title: "Total Patients",
    value: "4,892",
    badgeLabel: "This Month",
    delta: "+12%",
    up: true,
    icon: Users,
    cardClass: "kpi-card-mint",
  },
  {
    title: "Appointments",
    value: "48",
    badgeLabel: "New Bookings",
    delta: "+8%",
    up: true,
    icon: CalendarIcon,
    cardClass: "kpi-card-lime",
  },
  {
    title: "Monthly Revenue",
    value: "$24,500",
    badgeLabel: "Last Month",
    delta: "+15%",
    up: true,
    icon: DollarSign,
    cardClass: "kpi-card-emerald",
  },
  {
    title: "Active Doctors",
    value: "35",
    badgeLabel: "On Leave",
    delta: "2%",
    up: false,
    icon: UserCheck,
    cardClass: "kpi-card-teal",
  },
];

// Recent Patients table records from mockup
const recentPatients = [
  {
    docName: "Dr. Sarah Khan",
    docDept: "Cardiology",
    patientName: "Esther Howard",
    patientId: "PT-84920",
    time: "10:00 AM",
    status: "Confirmed",
    docAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80",
    patientAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  },
  {
    docName: "Emma Lee",
    docDept: "Dermatology",
    patientName: "Guy Hawkins",
    patientId: "PT-84921",
    time: "11:30 AM",
    status: "Waiting",
    docAvatar: "https://images.unsplash.com/photo-1594824813566-88855ce78905?w=100&auto=format&fit=crop&q=80",
    patientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  },
];

const sidePatientsList = [
  { name: "Michael Ross", detail: "Hypertension", age: "42y", date: "Jun 20", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
  { name: "Emma Wilson", detail: "Migraine", age: "35y", date: "Jun 19", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
  { name: "David Brown", detail: "Diabetes Type 2", age: "58y", date: "Jun 18", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" },
];

function Dashboard() {
  const [chartTimeframe, setChartTimeframe] = useState<"overview" | "monthly" | "yearly">("overview");

  return (
    <>
      {/* Top Header - Matching Clinexa Greeting Style */}
      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Good Morning, <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Dr. Sarah</span> 👋
          </span>
        }
        description="Here's what's happening in your clinic today."
        actions={
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11.5px] text-muted-foreground font-medium">Sunday, June 22, 2026</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-400 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Clinic Open
            </span>
          </div>
        }
      />

      <div className="px-4 py-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* KPI Cards Grid — Compact Solid Color Cards with Thickness */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {kpiCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`rounded-xl p-3.5 sm:p-4 transition-all shadow-2xs hover:shadow-md relative overflow-hidden group cursor-pointer ${card.cardClass}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-white/90 dark:bg-card/90 text-foreground shadow-2xs">
                      <Icon className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
                    </div>
                    <span className="text-[12px] font-semibold text-foreground/90">{card.title}</span>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground p-0.5 rounded hover:bg-white/40 transition-colors">
                    <MoreHorizontal className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="mt-2.5 font-display text-[22px] sm:text-2xl font-bold tracking-tight text-foreground">
                  {card.value}
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/90 dark:bg-card/90 px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-2xs border border-black/5">
                    <span className="text-muted-foreground/80 font-medium">{card.badgeLabel}</span>
                    <span className={`inline-flex items-center font-mono ${card.up ? "text-emerald-700 dark:text-emerald-400" : "text-rose-600"}`}>
                      {card.up ? <TrendingUp className="mr-0.5 h-2.5 w-2.5 inline" /> : <TrendingDown className="mr-0.5 h-2.5 w-2.5 inline" />}
                      {card.delta}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section — Compact Line Chart + Donut Chart */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {/* Revenue Overview (Curved Line Chart) */}
          <Card
            title="Revenue Overview"
            className="lg:col-span-2 shadow-2xs"
            padding="p-3.5 sm:p-4"
            action={
              <div className="flex items-center gap-0.5 rounded-full bg-muted/60 p-0.5 text-[10.5px] font-medium">
                {(["overview", "monthly", "yearly"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setChartTimeframe(t)}
                    className={`rounded-full px-2.5 py-0.5 capitalize transition-all cursor-pointer ${
                      chartTimeframe === t
                        ? "bg-background text-foreground shadow-2xs font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            }
          >
            <div className="text-[11px] text-muted-foreground mb-2 font-mono">Last 6 months performance</div>
            <div className="h-48 sm:h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueOverviewData} margin={{ top: 20, right: 15, left: -20, bottom: 0 }}>
                  <XAxis
                    dataKey="m"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "var(--muted-foreground)", fontSize: 10.5, fontFamily: "var(--font-mono)" }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `$${v / 1000}k`}
                    tick={{ fill: "var(--muted-foreground)", fontSize: 10.5, fontFamily: "var(--font-mono)" }}
                  />
                  <Tooltip
                    cursor={{ stroke: "#a3e635", strokeDasharray: "3 3" }}
                    contentStyle={{
                      background: "var(--card)",
                      border: "none",
                      borderRadius: 8,
                      fontSize: 11,
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]}
                  />
                  <ReferenceLine x="May" stroke="#a3e635" strokeDasharray="3 3" />
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#84cc16"
                    strokeWidth={2.25}
                    dot={{ r: 3.5, fill: "#84cc16", stroke: "#ffffff", strokeWidth: 1.75 }}
                    activeDot={{ r: 5, fill: "#65a30d", stroke: "#ffffff", strokeWidth: 1.75 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Appointment Stats (Donut Chart) */}
          <Card
            title="Appointment Stats"
            className="shadow-2xs"
            padding="p-3.5 sm:p-4"
            action={<span className="text-[10.5px] text-muted-foreground font-mono">This month's distribution</span>}
          >
            <div className="relative flex flex-col items-center justify-center py-1">
              <div className="h-44 sm:h-48 w-full relative grid place-items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={appointmentStatsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={68}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                    >
                      {appointmentStatsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                {/* Center Content in Donut Chart */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="font-display text-2xl font-bold tracking-tight text-foreground">54</span>
                  <span className="text-[10px] font-medium text-muted-foreground">Total Appointment</span>
                </div>
              </div>

              {/* Bottom Legend */}
              <div className="mt-1.5 flex items-center justify-center gap-3.5 text-[10.5px] font-medium">
                {appointmentStatsData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Section — Table & Recent Patients Side List */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {/* Revenue Overview Table */}
          <Card title="Revenue Overview" className="lg:col-span-2 shadow-2xs" padding="p-0">
            <div className="px-4 py-2 text-[11px] text-muted-foreground font-mono">Last 6 months performance</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11.5px]">
                <thead className="bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Doctor</th>
                    <th className="px-4 py-2 font-semibold">Patient</th>
                    <th className="px-4 py-2 font-semibold">Time</th>
                    <th className="px-4 py-2 font-semibold">Status</th>
                    <th className="px-4 py-2 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {recentPatients.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <img src={row.docAvatar} alt={row.docName} className="h-6 w-6 rounded-full object-cover shadow-2xs" />
                          <div>
                            <div className="font-semibold text-foreground">{row.docName}</div>
                            <div className="text-[10px] text-muted-foreground">{row.docDept}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <div>
                          <div className="font-semibold text-foreground">{row.patientName}</div>
                          <div className="font-mono text-[9.5px] text-muted-foreground">ID: #{row.patientId}</div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 font-mono text-[11px] text-muted-foreground">{row.time}</td>
                      <td className="px-4 py-2.5">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold ${
                            row.status === "Confirmed"
                              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                              : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right">
                        <div className="inline-flex items-center gap-1 text-muted-foreground">
                          <button className="p-1 rounded hover:bg-accent hover:text-foreground transition-colors">
                            <Eye className="h-3 w-3" />
                          </button>
                          <button className="p-1 rounded hover:bg-accent hover:text-foreground transition-colors">
                            <Edit2 className="h-3 w-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Recent Patients Side Panel */}
          <Card
            title="Recent Patients"
            className="shadow-2xs"
            padding="p-0"
            action={<button className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">View All</button>}
          >
            <ul className="divide-y divide-border/40">
              {sidePatientsList.map((p, idx) => (
                <li key={idx} className="flex items-center justify-between px-4 py-2.5 hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-2">
                    <img src={p.avatar} alt={p.name} className="h-7 w-7 rounded-full object-cover shadow-2xs" />
                    <div>
                      <div className="font-semibold text-foreground text-[11.5px]">{p.name}</div>
                      <div className="text-[10.5px] text-muted-foreground">{p.detail}</div>
                    </div>
                  </div>
                  <div className="text-right font-mono text-[10px] text-muted-foreground">
                    <div className="font-semibold text-foreground">{p.age}</div>
                    <div>{p.date}</div>
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