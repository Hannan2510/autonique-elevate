import { i as __toESM } from "./_runtime.mjs";
import { o as require_react } from "./_libs/@stripe/react-stripe-js+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { D as Mail, E as MapPin, G as ChevronRight, H as Clock, L as Eye, P as Funnel, Y as Calendar, b as Plus, h as Search, n as Users, t as X, x as Phone } from "./_libs/lucide-react.mjs";
import { a as PageHeader, n as Badge, r as Button } from "./_ssr/AppShell-XiXlp6xJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.customers-e8O3dp6E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var patients = [
	{
		id: "P-1042",
		name: "Ava Chen",
		email: "ava.chen@meridian.io",
		phone: "+49 30 8823 1194",
		city: "Berlin",
		status: "active",
		lastVisit: "22 Jul 2026",
		nextVisit: "05 Aug 2026",
		visits: 14,
		balance: 0,
		provider: "Dr. Reyes",
		notes: "Prefers morning appointments. Allergic to penicillin."
	},
	{
		id: "P-1041",
		name: "Marcus Weiss",
		email: "m.weiss@hey.com",
		phone: "+49 30 4412 8802",
		city: "Berlin",
		status: "active",
		lastVisit: "22 Jul 2026",
		visits: 6,
		balance: 240,
		provider: "Dr. Okafor",
		notes: "Post-op follow-up scheduled."
	},
	{
		id: "P-1040",
		name: "Priya Kapoor",
		email: "priya.k@fastmail.com",
		phone: "+49 30 2201 4488",
		city: "Potsdam",
		status: "active",
		lastVisit: "22 Jul 2026",
		visits: 3,
		balance: 0,
		provider: "Dr. Reyes",
		notes: "New procedure evaluation in progress."
	},
	{
		id: "P-1039",
		name: "Jonas Lind",
		email: "jonas@lind.se",
		phone: "+46 8 4402 1188",
		city: "Stockholm",
		status: "new",
		lastVisit: "22 Jul 2026",
		visits: 1,
		balance: 120,
		provider: "Dr. Okafor",
		notes: "Referred by Dr. Bergman."
	},
	{
		id: "P-1038",
		name: "Sofia Martins",
		email: "sofia.martins@proton.me",
		phone: "+351 21 998 4412",
		city: "Lisbon",
		status: "active",
		lastVisit: "19 Jul 2026",
		visits: 22,
		balance: 0,
		provider: "Dr. Reyes",
		notes: "Long-term patient. Annual review due."
	}
];
var initials = (n) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");
var avatarColors = [
	"from-emerald-500 to-teal-600",
	"from-violet-500 to-indigo-600",
	"from-amber-500 to-orange-600",
	"from-sky-500 to-blue-600",
	"from-rose-500 to-pink-600"
];
function StatusBadge({ s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: s === "active" ? "success" : s === "new" ? "info" : "muted",
		children: s
	});
}
function Customers() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [tabFilter, setTabFilter] = (0, import_react.useState)("all");
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => {
		return patients.filter((p) => {
			if (tabFilter !== "all" && p.status !== tabFilter) return false;
			if (!query) return true;
			const q = query.toLowerCase();
			return p.name.toLowerCase().includes(q) || p.email.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.city.toLowerCase().includes(q);
		});
	}, [query, tabFilter]);
	const selectedPatient = (0, import_react.useMemo)(() => patients.find((p) => p.id === selectedId), [selectedId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5 font-semibold text-foreground",
				children: ["Patient ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-emerald-800 dark:text-emerald-300 font-semibold",
					children: "Directory"
				})]
			}),
			description: "Search, filter and manage patient medical records.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] text-muted-foreground font-medium hidden sm:inline",
					children: "Sunday, June 22, 2026"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Patient" })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 py-5 sm:px-6 space-y-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-xl bg-card border border-border/50 px-4 py-3 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search patients by name, email or ID…",
							className: "h-8 w-full rounded-lg border border-border/60 bg-background pl-9 pr-3 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden sm:flex items-center gap-0.5 rounded-lg bg-muted/60 p-0.5 text-[11px] font-medium border border-border/30",
						children: [
							"all",
							"active",
							"new"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTabFilter(t),
							className: `rounded-md px-3 py-1 capitalize transition-all cursor-pointer ${tabFilter === t ? "bg-background text-foreground shadow-sm font-semibold border border-border/40" : "text-muted-foreground hover:text-foreground"}`,
							children: t
						}, t))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 self-end sm:self-auto shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden sm:block font-mono text-[10.5px] text-muted-foreground",
						children: [filtered.length, " records"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3 w-3 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filter" })]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card border border-border/50 shadow-sm overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-5 py-3.5 bg-muted/30 border-b border-border/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[12.5px] font-semibold text-foreground tracking-tight",
							children: "Patient Records"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[10px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full border border-border/30",
							children: [
								filtered.length,
								" / ",
								patients.length,
								" patients"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/20 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-semibold",
										children: "Patient"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-semibold",
										children: "Contact"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-semibold",
										children: "Last Visit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-semibold",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-5 py-3 font-semibold" })
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
								className: "divide-y divide-border/30",
								children: [filtered.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									onClick: () => setSelectedId(p.id),
									className: "hover:bg-emerald-500/4 transition-colors cursor-pointer group relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground text-[12.5px] group-hover:text-emerald-700 transition-colors",
												children: p.name
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 font-mono text-[11px] text-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3 text-muted-foreground shrink-0" }), p.phone]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 shrink-0" }), p.lastVisit]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { s: p.status })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3.5 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: (e) => {
													e.stopPropagation();
													setSelectedId(p.id);
												},
												className: "p-1.5 rounded-lg text-muted-foreground hover:text-emerald-700 hover:bg-emerald-500/10 transition-colors cursor-pointer",
												title: "View Patient",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
											})
										})
									]
								}, p.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 5,
									className: "px-5 py-12 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-8 w-8 text-muted-foreground/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[12px] text-muted-foreground font-mono",
											children: [
												"No patients found matching \"",
												query,
												"\""
											]
										})]
									})
								}) })]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-5 py-3 border-t border-border/40 bg-muted/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[10.5px] text-muted-foreground",
							children: [
								"Showing ",
								filtered.length,
								" of ",
								patients.length,
								" patients"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10.5px] text-muted-foreground",
								children: "Page 1 of 1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-muted-foreground/50" })]
						})]
					})
				]
			})]
		}),
		selectedPatient && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-foreground/25 backdrop-blur-sm transition-opacity",
				onClick: () => setSelectedId(null)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-screen max-w-md bg-card shadow-2xl border-l border-border/50 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative border-b border-border/40 px-6 py-5 bg-gradient-to-br from-emerald-500/8 via-background to-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${avatarColors[patients.findIndex((p) => p.id === selectedPatient.id) % avatarColors.length]} font-bold text-[14px] text-white shadow-md`,
										children: initials(selectedPatient.name)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-[15px] font-bold tracking-tight text-foreground",
										children: selectedPatient.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mt-0.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-[10px] text-muted-foreground",
												children: ["#", selectedPatient.id]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground/30",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { s: selectedPatient.status })
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSelectedId(null),
									className: "p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent cursor-pointer transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid grid-cols-3 gap-3",
								children: [
									{
										label: "Visits",
										val: String(selectedPatient.visits)
									},
									{
										label: "Balance",
										val: selectedPatient.balance > 0 ? `$${selectedPatient.balance}` : "Cleared"
									},
									{
										label: "Provider",
										val: selectedPatient.provider.split(" ").pop() ?? ""
									}
								].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-background/80 border border-border/40 px-3 py-2.5 text-center shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-[15px] font-bold text-foreground",
										children: stat.val
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[9.5px] text-muted-foreground uppercase tracking-wide mt-0.5",
										children: stat.label
									})]
								}, stat.label))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 overflow-y-auto p-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl kpi-card-mint p-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-emerald-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-semibold text-foreground/70 uppercase tracking-wide",
												children: "Last Visit"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[12px] font-bold text-foreground",
											children: selectedPatient.lastVisit
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl kpi-card-lime p-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3 text-lime-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-semibold text-foreground/70 uppercase tracking-wide",
												children: "Next Visit"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[12px] font-bold text-foreground",
											children: selectedPatient.nextVisit ?? "—"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-4 py-2.5 bg-muted/30 border-b border-border/40",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-[11.5px] font-semibold text-foreground tracking-tight",
											children: "Contact Information"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
										className: "divide-y divide-border/30 text-[11.5px]",
										children: [
											{
												Icon: Mail,
												label: "Email",
												val: selectedPatient.email
											},
											{
												Icon: Phone,
												label: "Phone",
												val: selectedPatient.phone
											},
											{
												Icon: MapPin,
												label: "Location",
												val: selectedPatient.city
											}
										].map(({ Icon, label, val }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between px-4 py-2.5 hover:bg-muted/20 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-2 text-muted-foreground font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }), label]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-semibold text-foreground text-[11px] text-right truncate max-w-[180px]",
												children: val
											})]
										}, label))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-4 py-2.5 bg-muted/30 border-b border-border/40",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-[11.5px] font-semibold text-foreground tracking-tight",
											children: "Clinical Notes & Warnings"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12px] leading-relaxed text-muted-foreground bg-muted/20 p-3 rounded-lg border border-border/30 font-sans",
											children: selectedPatient.notes
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border/40 px-5 py-4 bg-background flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setSelectedId(null),
								children: "Close"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								children: "Open Medical Chart"
							})]
						})
					]
				})
			})]
		})
	] });
}
//#endregion
export { Customers as component };
