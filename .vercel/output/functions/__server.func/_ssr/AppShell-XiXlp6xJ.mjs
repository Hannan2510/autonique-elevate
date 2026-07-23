import { i as __toESM } from "../_runtime.mjs";
import { o as require_react } from "../_libs/@stripe/react-stripe-js+[...].mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { $ as Bell, A as LayoutDashboard, C as Moon, O as LogOut, T as Menu, X as Building2, Y as Calendar, h as Search, n as Users, p as Settings, q as ChartColumn, s as Sun, t as X, y as Receipt } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-XiXlp6xJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("theme");
			if (saved === "dark" || saved === "light") return saved;
			return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		}
		return "light";
	});
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		if (theme === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
		localStorage.setItem("theme", theme);
	}, [theme]);
	const toggleTheme = () => setTheme((prev) => prev === "light" ? "dark" : "light");
	return {
		theme,
		toggleTheme
	};
}
function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggleTheme,
		className: "grid h-7.5 w-7.5 place-items-center rounded-md border border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer",
		title: `Switch to ${theme === "light" ? "Dark" : "Light"} Mode`,
		"aria-label": "Toggle theme",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-3.5 w-3.5 text-[#2DD4BF] transition-transform duration-300 hover:rotate-45" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3.5 w-3.5 text-[#0F766E] transition-transform duration-300 hover:-rotate-12" })
	});
}
var nav = [
	{
		to: "/dashboard",
		label: "Overview",
		icon: LayoutDashboard
	},
	{
		to: "/clinic",
		label: "Clinic Panel",
		icon: Building2
	},
	{
		to: "/customers",
		label: "Patients",
		icon: Users
	},
	{
		to: "/appointments",
		label: "Appointments",
		icon: Calendar,
		disabled: true
	},
	{
		to: "/revenue",
		label: "Revenue",
		icon: Receipt,
		disabled: true
	},
	{
		to: "/reports",
		label: "Reports",
		icon: ChartColumn,
		disabled: true
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	}
];
function AppShell() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		root.classList.remove("dark");
		return () => {
			if (localStorage.getItem("theme") === "dark") root.classList.add("dark");
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "fixed inset-y-0 left-0 hidden w-60 flex-col border-r border-border/40 bg-background lg:flex z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarInner, { pathname })
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-foreground/20 backdrop-blur-sm",
					onClick: () => setMobileOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "absolute inset-y-0 left-0 flex w-64 flex-col border-r border-border/40 bg-background shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/40 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileOpen(false),
							className: "text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarInner, {
						pathname,
						onNavigate: () => setMobileOpen(false),
						skipBrand: true
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-30 flex h-12 items-center justify-between gap-3 border-none bg-background/95 px-4 backdrop-blur-md sm:px-6 shadow-md shadow-black/5 dark:shadow-black/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-7 w-7 place-items-center rounded-md border border-border/60 text-muted-foreground hover:bg-accent lg:hidden shrink-0",
							onClick: () => setMobileOpen(true),
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-64 sm:w-80 md:w-[420px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "Search patients, visits, records…",
								className: "h-8.5 w-full rounded-lg border border-border/60 bg-background/80 pl-8 pr-3 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] transition-all shadow-2xs"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden items-center gap-2 text-[11.5px] text-muted-foreground sm:flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Operational"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "relative grid h-7.5 w-7.5 place-items-center rounded-md border border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "grid h-7.5 w-7.5 place-items-center rounded-md border border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer",
								title: "Log Out to Landing Page",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" })
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "min-h-[calc(100vh-3rem)] bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			})
		]
	});
}
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5 group cursor-pointer",
		title: "Return to Landing Page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#14B8A6] text-white shadow-md shadow-[#0D9488]/30 transition-transform duration-300 group-hover:scale-105",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				className: "h-4.5 w-4.5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z",
					fill: "#14B8A6",
					opacity: "0.18"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M5 12h2.8l1.7-3.5 3.5 7 1.7-3.5H19",
					stroke: "#fff",
					strokeWidth: "2.1"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[14px] font-bold tracking-tight leading-none text-foreground group-hover:text-[#0D9488] transition-colors font-sans",
				children: "Autonique"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[8.5px] text-[#0D9488] dark:text-[#2DD4BF] font-mono leading-none mt-0.5 uppercase tracking-[0.2em] font-bold",
				children: "Clinical OS"
			})]
		})]
	});
}
function SidebarInner({ pathname, onNavigate, skipBrand }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full",
		children: [
			!skipBrand && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-12 items-center border-b border-border/40 px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 px-3 py-3 space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1.5 px-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
					children: "Platform"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-0.5",
					children: nav.map((item) => {
						const active = pathname === item.to || item.to !== "/dashboard" && pathname.startsWith(item.to);
						const Icon = item.icon;
						if (item.disabled) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] text-muted-foreground/50 select-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground/40 bg-muted px-1.5 py-0.5 rounded",
									children: "Soon"
								})
							]
						}) }, item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							onClick: onNavigate,
							className: `relative flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-all ${active ? "bg-accent text-foreground shadow-2xs font-semibold" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-3.5 w-3.5 ${active ? "text-primary" : ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }),
								active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1.5 bottom-1.5 w-1 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-r" })
							]
						}) }, item.to);
					})
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border/40 p-3 mt-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] hover:bg-accent transition-colors cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-7 w-7 place-items-center rounded-full bg-emerald-600 text-[10.5px] font-bold text-white shrink-0",
						children: "IR"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground text-[12px] truncate",
							children: "Dr. Reyes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground truncate",
							children: "reyes@autonique.com"
						})]
					})]
				})
			})
		]
	});
}
function PageHeader({ title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/40 bg-background/50 px-4 py-2.5 sm:px-8 sm:py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "truncate font-display text-[11.5px] sm:text-[12px] font-semibold tracking-tight text-foreground uppercase",
				children: title
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-[11px] text-muted-foreground/80 font-mono",
				children: description
			})]
		}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex shrink-0 items-center gap-2",
			children: actions
		})]
	});
}
function Card({ title, action, children, className = "", padding = "p-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `rounded-xl bg-card vercel-card overflow-hidden ${className}`,
		children: [(title || action) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between px-5 py-3.5 bg-muted/20",
			children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-[13px] font-semibold tracking-tight text-foreground",
				children: title
			}), action]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: padding,
			children
		})]
	});
}
function Badge({ children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] tracking-tight ${{
			default: "border-border/80 bg-background text-foreground",
			muted: "border-border/60 bg-muted/80 text-muted-foreground",
			success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold",
			warning: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 font-semibold",
			danger: "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400 font-semibold",
			info: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-400 font-semibold",
			indigo: "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-semibold"
		}[tone]}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${{
			default: "bg-foreground",
			muted: "bg-muted-foreground",
			success: "bg-emerald-500 animate-pulse",
			warning: "bg-amber-500 animate-pulse",
			danger: "bg-red-500 animate-pulse",
			info: "bg-sky-500 animate-pulse",
			indigo: "bg-indigo-500 animate-pulse"
		}[tone]}` }), children]
	});
}
function Button({ variant = "primary", size = "md", className = "", children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: `inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${{
			primary: "bg-primary text-primary-foreground hover:opacity-95 shadow-2xs border border-primary/20",
			secondary: "bg-secondary text-secondary-foreground hover:bg-accent border border-border/50",
			outline: "border border-border/80 bg-background text-foreground hover:bg-accent hover:border-border",
			ghost: "text-muted-foreground hover:bg-accent hover:text-foreground"
		}[variant]} ${{
			sm: "h-7 px-2.5 text-[12px] rounded-md",
			md: "h-8 px-3.5 text-[12.5px] rounded-md"
		}[size]} ${className}`,
		...props,
		children
	});
}
//#endregion
export { PageHeader as a, Card as i, Badge as n, ThemeToggle as o, Button as r, AppShell as t };
