import { i as __toESM } from "./_runtime.mjs";
import { o as require_react } from "./_libs/@stripe/react-stripe-js+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { $ as Bell, J as Camera, M as Key, U as CircleCheck, V as CreditCard, d as Shield, f as ShieldCheck, g as Save, j as Laptop, r as User, u as Smartphone } from "./_libs/lucide-react.mjs";
import { a as PageHeader, n as Badge, r as Button } from "./_ssr/AppShell-XiXlp6xJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.settings-QeOtUXVd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	{
		id: "profile",
		label: "Profile",
		icon: User,
		desc: "Personal information & doctor bio"
	},
	{
		id: "notifications",
		label: "Notifications",
		icon: Bell,
		desc: "Email, SMS & clinical alerts"
	},
	{
		id: "security",
		label: "Security",
		icon: Shield,
		desc: "Password, 2FA & active sessions"
	},
	{
		id: "billing",
		label: "Billing",
		icon: CreditCard,
		desc: "Current plan & included features"
	}
];
function Switch({ checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => onChange(!checked),
		className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${checked ? "bg-emerald-600" : "bg-muted-foreground/20"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-200 ease-in-out ${checked ? "translate-x-5" : "translate-x-0"}` })
	});
}
function FormRow({ label, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2 py-4 border-b border-border/40 last:border-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xs space-y-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-[13px] font-semibold text-foreground tracking-tight",
				children: label
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11.5px] leading-relaxed text-muted-foreground",
				children: description
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 max-w-lg",
			children
		})]
	});
}
function Settings() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("profile");
	const [savedToast, setSavedToast] = (0, import_react.useState)(false);
	const [notifs, setNotifs] = (0, import_react.useState)({
		appointments: true,
		cancellations: true,
		newPatients: true,
		weeklyDigest: true,
		marketing: false,
		urgentSMS: true
	});
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [density, setDensity] = (0, import_react.useState)("comfortable");
	const handleSave = () => {
		setSavedToast(true);
		setTimeout(() => setSavedToast(false), 3e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 font-semibold text-foreground",
				children: ["Account & Clinic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-emerald-800 dark:text-emerald-300 font-semibold",
					children: "Settings"
				})]
			}),
			description: "Configure your medical practice profile, security controls, and clinic preferences.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [savedToast && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11.5px] font-medium text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 animate-fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), "Changes saved!"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: handleSave,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3.5 w-3.5" }), "Save Changes"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 overflow-x-auto border-b border-border/50 pb-1 scrollbar-none",
				children: tabs.map((tab) => {
					const Icon = tab.icon;
					const isActive = activeTab === tab.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveTab(tab.id),
						className: `flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all shrink-0 cursor-pointer ${isActive ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-500/20 shadow-xs" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${isActive ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.label })]
					}, tab.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					activeTab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/50 bg-card p-6 shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b border-border/40 pb-4 mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-bold text-foreground tracking-tight",
										children: "Public Practitioner Profile"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-muted-foreground mt-0.5",
										children: "This information is displayed on patient prescriptions and official medical records."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center gap-5 pb-6 border-b border-border/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative group cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-2xl shadow-md border-2 border-background",
											children: "IR"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-6 w-6 text-white" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "sm",
												children: "Upload new photo"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "sm",
												children: "Remove"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Supported formats: JPEG, PNG, WEBP. Max file size 3MB."
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1 divide-y divide-border/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormRow, {
											label: "Full Name",
											description: "Your legal medical practitioner name.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													defaultValue: "Dr. Iman",
													className: "h-10 w-full rounded-xl border border-border/60 bg-background px-3.5 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all",
													placeholder: "First Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													defaultValue: "Reyes",
													className: "h-10 w-full rounded-xl border border-border/60 bg-background px-3.5 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all",
													placeholder: "Last Name"
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormRow, {
											label: "Email Address",
											description: "Primary address for clinical correspondence.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													defaultValue: "iman@meridian.io",
													className: "h-10 w-full rounded-xl border border-border/60 bg-background pl-3.5 pr-24 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 text-[10.5px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " Verified"]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormRow, {
											label: "Medical License / Specialty",
											description: "Your clinical specialization title.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												className: "h-10 w-full rounded-xl border border-border/60 bg-background px-3.5 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Medical Director — General Practice" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Internal Medicine Specialist" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Consultant Physician" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pediatrician" })
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormRow, {
											label: "Practitioner Bio",
											description: "Brief professional summary included in clinic directory.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 3,
												defaultValue: "Medical director at Meridian Clinics with 12+ years experience in preventative medicine, primary care, and integrated clinical operations.",
												className: "w-full rounded-xl border border-border/60 bg-background p-3 text-[12.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
											})
										})
									]
								})
							]
						})
					}),
					activeTab === "notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/50 bg-card p-6 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-border/40 pb-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-[15px] font-bold text-foreground tracking-tight",
									children: "Clinical & System Alerts"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] text-muted-foreground mt-0.5",
									children: "Control how and when you receive automated notifications."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[11.5px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-3 font-mono",
									children: "Patient Activity Alerts"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3 rounded-xl border border-border/40 bg-muted/20 p-4",
									children: [
										{
											key: "appointments",
											title: "Upcoming Appointment Reminders",
											desc: "Send automated SMS and email reminders 24 hours before visits."
										},
										{
											key: "cancellations",
											title: "Immediate Cancellation Notices",
											desc: "Instant alert when a patient cancels or requests a reschedule."
										},
										{
											key: "newPatients",
											title: "New Patient Registrations",
											desc: "Notify when a new patient completes their digital intake form."
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4 py-2 border-b border-border/30 last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[13px] font-semibold text-foreground",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11.5px] text-muted-foreground mt-0.5",
											children: item.desc
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											checked: notifs[item.key],
											onChange: (val) => setNotifs({
												...notifs,
												[item.key]: val
											})
										})]
									}, item.key))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[11.5px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-3 font-mono",
									children: "Clinic Digests"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3 rounded-xl border border-border/40 bg-muted/20 p-4",
									children: [
										{
											key: "weeklyDigest",
											title: "Weekly Executive Performance Report",
											desc: "Every Monday morning summary of patient volume, revenue, and doctor hours."
										},
										{
											key: "urgentSMS",
											title: "Emergency System Alerts",
											desc: "Critical system outage and high-priority security notifications via SMS."
										},
										{
											key: "marketing",
											title: "Product Features & Updates",
											desc: "Occasional news about new Autonique platform capabilities."
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4 py-2 border-b border-border/30 last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[13px] font-semibold text-foreground",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11.5px] text-muted-foreground mt-0.5",
											children: item.desc
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											checked: notifs[item.key],
											onChange: (val) => setNotifs({
												...notifs,
												[item.key]: val
											})
										})]
									}, item.key))
								})] })]
							})]
						})
					}),
					activeTab === "security" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/50 bg-card p-6 shadow-xs flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-[14px] font-bold text-foreground",
										children: "Password Credentials"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Last updated 45 days ago"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] text-muted-foreground leading-relaxed",
									children: "Ensure your password uses a minimum of 12 characters including numbers and special symbols."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 pt-4 border-t border-border/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										className: "w-full",
										children: "Change Account Password"
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/50 bg-card p-6 shadow-xs flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-[14px] font-bold text-foreground",
										children: "Two-Factor Authentication"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "success",
										className: "mt-0.5",
										children: "Enforced & Active"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] text-muted-foreground leading-relaxed",
									children: "Protecting your clinical account with an authenticator app (Google Authenticator / 1Password)."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 pt-4 border-t border-border/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										className: "w-full",
										children: "Configure 2FA Keys"
									})
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/50 bg-card p-6 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-border/40 pb-4 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[14px] font-bold text-foreground",
									children: "Active Sign-in Sessions"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] text-muted-foreground mt-0.5",
									children: "Currently logged in devices associated with your account."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-border/30",
								children: [{
									device: "MacBook Pro 16″",
									loc: "Berlin, Germany · Chrome 126",
									time: "Current active session",
									icon: Laptop,
									current: true
								}, {
									device: "iPhone 15 Pro",
									loc: "Berlin, Germany · Safari Mobile",
									time: "2 hours ago",
									icon: Smartphone,
									current: false
								}].map((s) => {
									const Icon = s.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between py-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-9 w-9 rounded-xl bg-muted/60 flex items-center justify-center text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[13px] font-semibold text-foreground flex items-center gap-2",
												children: [s.device, s.current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													tone: "success",
													children: "This Device"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[11px] font-mono text-muted-foreground mt-0.5",
												children: [
													s.loc,
													" · ",
													s.time
												]
											})] })]
										}), !s.current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "sm",
											className: "text-rose-600 hover:bg-rose-500/10",
											children: "Revoke"
										})]
									}, s.device);
								})
							})]
						})]
					}),
					activeTab === "billing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/8 via-card to-card p-6 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/40 pb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl font-bold text-foreground",
										children: "Growth Plan"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "success",
										children: "Active Subscription"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[12.5px] text-muted-foreground",
									children: [
										"$129 / provider · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "4 Active Seats"
										}),
										" ($516 / month total)"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right sm:text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-mono text-muted-foreground uppercase tracking-wider",
										children: "Next Billing Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[14px] font-bold text-foreground mt-0.5",
										children: "August 12, 2026"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-[12.5px] font-semibold text-foreground uppercase tracking-wider mb-3 font-mono text-muted-foreground",
									children: "Features Included in Your Subscription"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
									children: [
										"Up to 10 Provider Seats",
										"Unlimited Patient Records",
										"WhatsApp Patient Engagement",
										"E-Prescriptions & EHR Charting",
										"Revenue Analytics & Reports",
										"24/7 Dedicated Support"
									].map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-[12.5px] font-medium text-foreground bg-background/60 p-2.5 rounded-xl border border-border/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feat })]
									}, feat))
								})]
							})]
						})
					})
				]
			})]
		})]
	});
}
//#endregion
export { Settings as component };
