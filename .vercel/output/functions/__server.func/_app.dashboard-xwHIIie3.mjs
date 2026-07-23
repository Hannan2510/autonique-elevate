import { i as __toESM } from "./_runtime.mjs";
import { o as require_react } from "./_libs/@stripe/react-stripe-js+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { B as DollarSign, L as Eye, R as Ellipsis, S as Pen, Y as Calendar, a as TrendingUp, i as UserCheck, n as Users, o as TrendingDown } from "./_libs/lucide-react.mjs";
import { a as PageHeader, i as Card } from "./_ssr/AppShell-XiXlp6xJ.mjs";
import { a as Line, c as Cell, i as XAxis, l as ResponsiveContainer, n as LineChart, o as ReferenceLine, r as YAxis, s as Pie, t as PieChart, u as Tooltip } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.dashboard-xwHIIie3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var revenueOverviewData = [
	{
		m: "Jan",
		v: 7e3
	},
	{
		m: "Feb",
		v: 11e3
	},
	{
		m: "Mar",
		v: 9e3
	},
	{
		m: "Apr",
		v: 15e3
	},
	{
		m: "May",
		v: 2e4
	},
	{
		m: "Jun",
		v: 12e3
	},
	{
		m: "Jul",
		v: 14e3
	},
	{
		m: "Aug",
		v: 13e3
	},
	{
		m: "Sep",
		v: 19e3
	}
];
var appointmentStatsData = [
	{
		name: "Completed",
		value: 35,
		color: "#34d399"
	},
	{
		name: "Upcoming",
		value: 14,
		color: "#a3e635"
	},
	{
		name: "Cancelled",
		value: 5,
		color: "#fb7185"
	}
];
var kpiCards = [
	{
		title: "Total Patients",
		value: "4,892",
		badgeLabel: "This Month",
		delta: "+12%",
		up: true,
		icon: Users,
		cardClass: "kpi-card-mint"
	},
	{
		title: "Appointments",
		value: "48",
		badgeLabel: "New Bookings",
		delta: "+8%",
		up: true,
		icon: Calendar,
		cardClass: "kpi-card-lime"
	},
	{
		title: "Monthly Revenue",
		value: "$24,500",
		badgeLabel: "Last Month",
		delta: "+15%",
		up: true,
		icon: DollarSign,
		cardClass: "kpi-card-emerald"
	},
	{
		title: "Active Doctors",
		value: "35",
		badgeLabel: "On Leave",
		delta: "2%",
		up: false,
		icon: UserCheck,
		cardClass: "kpi-card-teal"
	}
];
var recentPatients = [{
	docName: "Dr. Sarah Khan",
	docDept: "Cardiology",
	patientName: "Esther Howard",
	patientId: "PT-84920",
	time: "10:00 AM",
	status: "Confirmed",
	docAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80",
	patientAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
}, {
	docName: "Emma Lee",
	docDept: "Dermatology",
	patientName: "Guy Hawkins",
	patientId: "PT-84921",
	time: "11:30 AM",
	status: "Waiting",
	docAvatar: "https://images.unsplash.com/photo-1594824813566-88855ce78905?w=100&auto=format&fit=crop&q=80",
	patientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
}];
var sidePatientsList = [
	{
		name: "Michael Ross",
		detail: "Hypertension",
		age: "42y",
		date: "Jun 20",
		avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
	},
	{
		name: "Emma Wilson",
		detail: "Migraine",
		age: "35y",
		date: "Jun 19",
		avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
	},
	{
		name: "David Brown",
		detail: "Diabetes Type 2",
		age: "58y",
		date: "Jun 18",
		avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
	}
];
function Dashboard() {
	const [chartTimeframe, setChartTimeframe] = (0, import_react.useState)("overview");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5 font-semibold text-foreground",
			children: [
				"Good Morning, ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-emerald-800 dark:text-emerald-300 font-semibold",
					children: "Dr. Sarah"
				}),
				" 👋"
			]
		}),
		description: "Here's what's happening in your clinic today.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11.5px] text-muted-foreground font-medium",
				children: "Sunday, June 22, 2026"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-400 shadow-2xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Clinic Open"]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-4 sm:px-6 space-y-4 sm:space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: kpiCards.map((card) => {
					const Icon = card.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-[8px] border-none p-3.5 sm:p-4 transition-all shadow-2xs hover:shadow-md relative overflow-hidden group cursor-pointer ${card.cardClass}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-7 w-7 place-items-center rounded-full bg-white/90 dark:bg-card/90 text-foreground shadow-2xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[12px] font-semibold text-foreground/90",
										children: card.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-muted-foreground hover:text-foreground p-0.5 rounded hover:bg-white/40 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-3.5 w-3.5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2.5 font-display text-[22px] sm:text-2xl font-bold tracking-tight text-foreground",
								children: card.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-white/90 dark:bg-card/90 px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-2xs border border-black/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground/80 font-medium",
										children: card.badgeLabel
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `inline-flex items-center font-mono ${card.up ? "text-emerald-700 dark:text-emerald-400" : "text-rose-600"}`,
										children: [card.up ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "mr-0.5 h-2.5 w-2.5 inline" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "mr-0.5 h-2.5 w-2.5 inline" }), card.delta]
									})]
								})
							})
						]
					}, card.title);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Revenue Overview",
					className: "lg:col-span-2 shadow-2xs",
					padding: "p-3.5 sm:p-4",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-0.5 rounded-full bg-muted/60 p-0.5 text-[10.5px] font-medium",
						children: [
							"overview",
							"monthly",
							"yearly"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setChartTimeframe(t),
							className: `rounded-full px-2.5 py-0.5 capitalize transition-all cursor-pointer ${chartTimeframe === t ? "bg-background text-foreground shadow-2xs font-semibold" : "text-muted-foreground hover:text-foreground"}`,
							children: t
						}, t))
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-muted-foreground mb-2 font-mono",
						children: "Last 6 months performance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-48 sm:h-52 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: revenueOverviewData,
								margin: {
									top: 20,
									right: 15,
									left: -20,
									bottom: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "m",
										tickLine: false,
										axisLine: false,
										tick: {
											fill: "var(--muted-foreground)",
											fontSize: 10.5,
											fontFamily: "var(--font-mono)"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tickLine: false,
										axisLine: false,
										tickFormatter: (v) => `$${v / 1e3}k`,
										tick: {
											fill: "var(--muted-foreground)",
											fontSize: 10.5,
											fontFamily: "var(--font-mono)"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										cursor: {
											stroke: "#a3e635",
											strokeDasharray: "3 3"
										},
										contentStyle: {
											background: "var(--card)",
											border: "none",
											borderRadius: 8,
											fontSize: 11,
											boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)"
										},
										formatter: (v) => [`$${v.toLocaleString()}`, "Revenue"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
										x: "May",
										stroke: "#a3e635",
										strokeDasharray: "3 3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "v",
										stroke: "#84cc16",
										strokeWidth: 2.25,
										dot: {
											r: 3.5,
											fill: "#84cc16",
											stroke: "#ffffff",
											strokeWidth: 1.75
										},
										activeDot: {
											r: 5,
											fill: "#65a30d",
											stroke: "#ffffff",
											strokeWidth: 1.75
										}
									})
								]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Appointment Stats",
					className: "shadow-2xs",
					padding: "p-3.5 sm:p-4",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10.5px] text-muted-foreground font-mono",
						children: "This month's distribution"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col items-center justify-center py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-44 sm:h-48 w-full relative grid place-items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: appointmentStatsData,
									cx: "50%",
									cy: "50%",
									innerRadius: 50,
									outerRadius: 68,
									paddingAngle: 4,
									dataKey: "value",
									stroke: "none",
									children: appointmentStatsData.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.color }, `cell-${index}`))
								}) })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-bold tracking-tight text-foreground",
									children: "54"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-medium text-muted-foreground",
									children: "Total Appointment"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 flex items-center justify-center gap-3.5 text-[10.5px] font-medium",
							children: appointmentStatsData.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1.5 w-1.5 rounded-full",
									style: { backgroundColor: item.color }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: item.name
								})]
							}, item.name))
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Revenue Overview",
					className: "lg:col-span-2 shadow-2xs",
					padding: "p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 py-2 text-[11px] text-muted-foreground font-mono",
						children: "Last 6 months performance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-[11.5px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-2 font-semibold",
										children: "Doctor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-2 font-semibold",
										children: "Patient"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-2 font-semibold",
										children: "Time"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-2 font-semibold",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-2 font-semibold text-right",
										children: "Action"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border/40",
								children: recentPatients.map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-muted/20 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-2.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: row.docAvatar,
													alt: row.docName,
													className: "h-6 w-6 rounded-full object-cover shadow-2xs"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold text-foreground",
													children: row.docName
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] text-muted-foreground",
													children: row.docDept
												})] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-2.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold text-foreground",
												children: row.patientName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-mono text-[9.5px] text-muted-foreground",
												children: ["ID: #", row.patientId]
											})] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-2.5 font-mono text-[11px] text-muted-foreground",
											children: row.time
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-2.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold ${row.status === "Confirmed" ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"}`,
												children: row.status
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-2.5 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center gap-1 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "p-1 rounded hover:bg-accent hover:text-foreground transition-colors",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3 w-3" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "p-1 rounded hover:bg-accent hover:text-foreground transition-colors",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3 w-3" })
												})]
											})
										})
									]
								}, idx))
							})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Recent Patients",
					className: "shadow-2xs",
					padding: "p-0",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:underline",
						children: "View All"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border/40",
						children: sidePatientsList.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between px-4 py-2.5 hover:bg-muted/20 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.avatar,
									alt: p.name,
									className: "h-7 w-7 rounded-full object-cover shadow-2xs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground text-[11.5px]",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10.5px] text-muted-foreground",
									children: p.detail
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right font-mono text-[10px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground",
									children: p.age
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: p.date })]
							})]
						}, idx))
					})
				})]
			})
		]
	})] });
}
//#endregion
export { Dashboard as component };
