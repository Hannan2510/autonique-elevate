import { i as __toESM } from "../_runtime.mjs";
import { o as require_react } from "../_libs/@stripe/react-stripe-js+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { $ as Bell, F as FileText, G as ChevronRight, H as Clock, I as FileSpreadsheet, K as ChevronDown, N as KeyRound, Q as Bot, U as CircleCheck, Y as Calendar, Z as Boxes, _ as Rocket, c as Star, d as Shield, et as Award, i as UserCheck, k as Lock, l as Sparkles, m as Server, n as Users, q as ChartColumn, w as MessageSquare, y as Receipt } from "../_libs/lucide-react.mjs";
import { o as ThemeToggle } from "./AppShell-XiXlp6xJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-4OZ40F4P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-3 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#14B8A6] text-white shadow-lg shadow-[#0D9488]/30 transition-transform duration-300 hover:scale-105",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				className: "h-5 w-5",
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
				className: "text-[17px] font-extrabold tracking-tight leading-none text-[#0F172A] dark:text-white font-sans",
				children: "Autonique"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[8.5px] text-[#0D9488] dark:text-[#2DD4BF] font-mono leading-none mt-0.5 uppercase tracking-[0.22em] font-bold",
				children: "Clinical OS"
			})]
		})]
	});
}
function HeaderNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-[100] border-none bg-[#F8FFFE]/95 dark:bg-[#061514]/95 backdrop-blur-xl shadow-md shadow-[#0D9488]/10 dark:shadow-black/60 transition-all",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex text-[13.5px] font-semibold text-[#475569] dark:text-[#94A3B8]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#problem",
							className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
							children: "Why Change"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#platform",
							className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
							children: "Platform"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#workflow",
							className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
							children: "Workflow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#preview",
							className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
							children: "Product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#pricing",
							className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
							children: "Pricing"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: "hidden text-[13.5px] font-bold text-[#334155] dark:text-[#E2F1F0] hover:text-[#0D9488] dark:hover:text-[#2DD4BF] sm:inline transition-colors px-3 py-1.5 rounded-lg hover:bg-[#0D9488]/10",
							children: "Sign In"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							className: "inline-flex h-9.5 items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0C4A6E] hover:to-[#0F766E] px-4.5 text-[13px] font-bold text-white transition-all duration-300 shadow-md shadow-[#0D9488]/25 active:scale-95 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start Free Trial" })]
						})
					]
				})
			]
		})
	});
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#EFFFFE]/60 via-[#F8FFFE] to-[#F8FFFE] dark:from-[#0B2523]/80 dark:via-[#061514] dark:to-[#061514]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0D9488]/12 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8 relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 space-y-6 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							className: "inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 dark:border-[#0D9488]/40 bg-[#EFFFFE] dark:bg-[#0F2F2C] px-4 py-1.5 text-[11.5px] font-bold text-[#0F766E] dark:text-[#2DD4BF] shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" }),
								"Trusted by 40,000+ Doctors & Clinics Worldwide",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 text-[#0D9488] dark:text-[#2DD4BF]" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							"data-reveal": true,
							"data-reveal-delay": "1",
							className: "font-display text-4xl leading-[1.07] font-black tracking-tight sm:text-5xl text-[#0F172A] dark:text-white",
							children: [
								"Simplify Your Practice with",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-[#0F766E] via-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent",
									children: "Powerful Clinical OS"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": true,
							"data-reveal-delay": "2",
							className: "text-[15px] leading-relaxed text-[#475569] dark:text-[#A0B0AD] max-w-lg font-medium",
							children: "All-in-one clinical software for doctors, practice groups, and hospitals — scheduling, EMR, prescriptions, billing, and WhatsApp automation in one platform."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							"data-reveal-delay": "3",
							className: "flex flex-wrap items-center gap-3.5 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard",
								className: "inline-flex h-11.5 items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0A5754] hover:to-[#0F766E] px-6 text-[13.5px] font-bold text-white shadow-lg shadow-[#0D9488]/25 transition-all duration-300 cursor-pointer active:scale-98",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "h-4 w-4" }), "Start Free Trial"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#pricing",
								className: "inline-flex h-11.5 items-center gap-2 rounded-xl border border-[#0D9488]/30 dark:border-[#0D9488]/50 bg-white dark:bg-[#0B201E] hover:bg-[#EFFFFE]/70 dark:hover:bg-[#0F2F2C] px-6 text-[13.5px] font-bold text-[#0F766E] dark:text-[#2DD4BF] shadow-xs transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" }), "Book a Demo"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							"data-reveal-delay": "4",
							className: "flex flex-wrap items-center gap-5 text-[11.5px] font-mono font-medium text-[#64748B] dark:text-[#809995] pt-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" }), "No credit card needed"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" }), "14-day full trial"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" }), "HIPAA & GDPR compliant"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					"data-reveal-delay": "2",
					className: "lg:col-span-6 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-[16px] border border-[#0D9488]/20 dark:border-[#0D9488]/40 bg-white dark:bg-[#0B201E] shadow-[0_30px_70px_-15px_rgba(13,148,136,0.25)] overflow-hidden transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] max-w-md mx-auto lg:max-w-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/ecosystem-light.png",
							alt: "Autonique Connected Clinic Operating System Ecosystem (Light)",
							className: "block dark:hidden w-full h-auto object-contain rounded-[12px] p-1.5 transition-all duration-300 hover:scale-[1.01]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/ecosystem-dark.jpg",
							alt: "Autonique Connected Clinic Operating System Ecosystem (Dark)",
							className: "hidden dark:block w-full h-auto object-contain rounded-[12px] p-1.5 transition-all duration-300 hover:scale-[1.01]"
						})]
					})
				})]
			})
		})]
	});
}
function SectionHeader({ label, title, description, align = "center", delay, className = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-reveal": true,
		"data-reveal-delay": delay,
		className: `${align === "center" ? "text-center max-w-xl mx-auto" : "text-left max-w-xl"} space-y-2 mb-14 ${className}`,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[14px] text-[#475569] dark:text-[#A0B0AD] font-medium leading-relaxed",
				children: description
			})
		]
	});
}
function ProblemSolutionSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "problem",
		className: "py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				label: "The Operational Gap",
				title: "Disconnect Between Front-Desk, EMR & Patients?",
				description: "Traditional clinics waste 4+ hours daily juggling fragmented tools, paper charts, and manual phone queues."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				"data-reveal-delay": "1",
				className: "w-full flex justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 800 400",
					className: "w-full h-auto max-w-4xl mx-auto block dark:hidden",
					style: { background: "transparent" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "primaryGradLight",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#0D9488"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#14B8A6"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "bgGlowLight",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#CCFBF1",
									stopOpacity: "0.6"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#F0FDFA",
									stopOpacity: "0.2"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
								id: "softShadowLight",
								x: "-10%",
								y: "-10%",
								width: "120%",
								height: "120%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
									dx: "0",
									dy: "12",
									stdDeviation: "16",
									floodColor: "#0F172A",
									floodOpacity: "0.08"
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
              @keyframes dashLight {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
              @keyframes floatLeftLight {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes floatRightLight {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
              }
              @keyframes typingLight {
                0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
                40% { opacity: 1; transform: scale(1.2); }
              }
              @keyframes pulseScaleLight {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              .card-left-light { animation: floatLeftLight 6s ease-in-out infinite; transform-origin: center; }
              .card-right-light { animation: floatRightLight 7s ease-in-out infinite 0.5s; transform-origin: center; }
              .ecg-line-light {
                stroke-dasharray: 20 1000;
                animation: dashLight 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              .dot-1-light { animation: typingLight 1.4s infinite 0s; transform-box: fill-box; transform-origin: center; }
              .dot-2-light { animation: typingLight 1.4s infinite 0.2s; transform-box: fill-box; transform-origin: center; }
              .dot-3-light { animation: typingLight 1.4s infinite 0.4s; transform-box: fill-box; transform-origin: center; }
              .pulse-badge-light { animation: pulseScaleLight 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
            ` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "200",
							cy: "200",
							r: "140",
							fill: "url(#bgGlowLight)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "600",
							cy: "200",
							r: "150",
							fill: "url(#bgGlowLight)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 280 200 L 370 200 L 385 170 L 400 230 L 415 185 L 425 205 L 435 200 L 520 200",
							fill: "none",
							stroke: "#E2E8F0",
							strokeWidth: "4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							className: "ecg-line-light",
							d: "M 280 200 L 370 200 L 385 170 L 400 230 L 415 185 L 425 205 L 435 200 L 520 200",
							fill: "none",
							stroke: "#0D9488",
							strokeWidth: "4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "card-left-light",
							filter: "url(#softShadowLight)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "80",
									y: "100",
									width: "220",
									height: "200",
									rx: "20",
									fill: "#FFFFFF"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "80",
									y: "100",
									width: "220",
									height: "48",
									rx: "20",
									fill: "#F8FAFC"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "110",
									cy: "124",
									r: "14",
									fill: "#25D366"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 105 120 A 6 6 0 0 1 114 127 L 114 129 L 112 129 L 107 124 Z",
									fill: "#FFFFFF"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "132",
									y: "128",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontWeight: "600",
									fontSize: "12",
									fill: "#0F172A",
									children: "WhatsApp Booking"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "96",
									y: "162",
									width: "145",
									height: "42",
									rx: "12",
									fill: "#F1F5F9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "108",
									y: "180",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontSize: "11",
									fill: "#334155",
									children: "Book doctor appointment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "108",
									y: "194",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontSize: "10",
									fontWeight: "500",
									fill: "#0D9488",
									children: "Today, 10:30 AM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "125",
									y: "214",
									width: "160",
									height: "48",
									rx: "12",
									fill: "url(#primaryGradLight)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "137",
									y: "233",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontSize: "11",
									fontWeight: "500",
									fill: "#FFFFFF",
									children: "Slot Confirmed! Slot 4B"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "137",
									y: "248",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontSize: "10",
									fill: "#CCFBF1",
									children: "Synced with Clinic OS ✓"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(96, 268)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "0",
											y: "0",
											width: "50",
											height: "20",
											rx: "10",
											fill: "#E2E8F0"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											className: "dot-1-light",
											cx: "15",
											cy: "10",
											r: "2.5",
											fill: "#64748B"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											className: "dot-2-light",
											cx: "25",
											cy: "10",
											r: "2.5",
											fill: "#64748B"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											className: "dot-3-light",
											cx: "35",
											cy: "10",
											r: "2.5",
											fill: "#64748B"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "card-right-light",
							filter: "url(#softShadowLight)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "500",
									y: "90",
									width: "220",
									height: "220",
									rx: "20",
									fill: "#FFFFFF"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "524",
									y: "125",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontWeight: "700",
									fontSize: "14",
									fill: "#0F172A",
									children: "Live Appointments"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "645",
									y: "112",
									width: "55",
									height: "18",
									rx: "9",
									fill: "#CCFBF1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "654",
									y: "124",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontWeight: "600",
									fontSize: "9",
									fill: "#0D9488",
									children: "AUTOMATED"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(520, 142)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "0",
											y: "0",
											width: "180",
											height: "46",
											rx: "10",
											fill: "#F0FDFA",
											stroke: "#14B8A6",
											strokeWidth: "1.5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "22",
											cy: "23",
											r: "12",
											fill: "#14B8A6"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 22 17 A 4 4 0 1 0 22 25 A 4 4 0 1 0 22 17 Z M 16 30 C 16 27 19 26 22 26 C 25 26 28 27 28 30",
											fill: "none",
											stroke: "#FFFFFF",
											strokeWidth: "1.5",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "42",
											y: "20",
											fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
											fontWeight: "600",
											fontSize: "11",
											fill: "#0F172A",
											children: "Sarah Jenkins"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "42",
											y: "34",
											fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
											fontSize: "10",
											fill: "#5EEAD4",
											children: "11:00 AM • Dr. Aris"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "162",
											cy: "23",
											r: "5",
											fill: "#14B8A6"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(520, 198)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "0",
											y: "0",
											width: "180",
											height: "46",
											rx: "10",
											fill: "#F8FAFC"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "22",
											cy: "23",
											r: "12",
											fill: "#E2E8F0"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 22 17 A 4 4 0 1 0 22 25 A 4 4 0 1 0 22 17 Z M 16 30 C 16 27 19 26 22 26 C 25 26 28 27 28 30",
											fill: "none",
											stroke: "#64748B",
											strokeWidth: "1.5",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "42",
											y: "20",
											fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
											fontWeight: "600",
											fontSize: "11",
											fill: "#334155",
											children: "Michael Chen"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "42",
											y: "34",
											fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
											fontSize: "10",
											fill: "#94A3B8",
											children: "11:30 AM • Consultation"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(520, 254)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "0",
											y: "0",
											width: "180",
											height: "40",
											rx: "10",
											fill: "#F8FAFC"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "42",
											y: "12",
											width: "70",
											height: "6",
											rx: "3",
											fill: "#E2E8F0"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "42",
											y: "24",
											width: "45",
											height: "5",
											rx: "2.5",
											fill: "#F1F5F9"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "pulse-badge-light",
							transform: "translate(360, 80)",
							filter: "url(#softShadowLight)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "0",
									y: "0",
									width: "80",
									height: "28",
									rx: "14",
									fill: "#FFFFFF",
									stroke: "#CCFBF1",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "16",
									cy: "14",
									r: "4",
									fill: "#14B8A6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "26",
									y: "18",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontWeight: "700",
									fontSize: "10",
									fill: "#0D9488",
									children: "INSTANT"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 800 400",
					className: "w-full h-auto max-w-4xl mx-auto hidden dark:block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
								id: "siteBgDark",
								cx: "50%",
								cy: "30%",
								r: "80%",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "#072A25"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "60%",
										stopColor: "#031613"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "#020E0C"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "primaryGradDark",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#0D9488"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#2DD4BF"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
								id: "bgGlowDark",
								cx: "50%",
								cy: "50%",
								r: "50%",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#14B8A6",
									stopOpacity: "0.22"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#022C22",
									stopOpacity: "0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
								id: "softShadowDark",
								x: "-20%",
								y: "-20%",
								width: "140%",
								height: "140%",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
									dx: "0",
									dy: "12",
									stdDeviation: "16",
									floodColor: "#000000",
									floodOpacity: "0.7"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
									dx: "0",
									dy: "0",
									stdDeviation: "8",
									floodColor: "#14B8A6",
									floodOpacity: "0.12"
								})]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
              @keyframes dashDark {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
              @keyframes floatLeftDark {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes floatRightDark {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
              }
              @keyframes typingDark {
                0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
                40% { opacity: 1; transform: scale(1.2); }
              }
              @keyframes pulseScaleDark {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              .card-left-dark { animation: floatLeftDark 6s ease-in-out infinite; transform-origin: center; }
              .card-right-dark { animation: floatRightDark 7s ease-in-out infinite 0.5s; transform-origin: center; }
              .ecg-line-dark {
                stroke-dasharray: 20 1000;
                animation: dashDark 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              .dot-1-dark { animation: typingDark 1.4s infinite 0s; transform-box: fill-box; transform-origin: center; }
              .dot-2-dark { animation: typingDark 1.4s infinite 0.2s; transform-box: fill-box; transform-origin: center; }
              .dot-3-dark { animation: typingDark 1.4s infinite 0.4s; transform-box: fill-box; transform-origin: center; }
              .pulse-badge-dark { animation: pulseScaleDark 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
            ` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "100%",
							height: "100%",
							rx: "16",
							fill: "url(#siteBgDark)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "200",
							cy: "200",
							r: "160",
							fill: "url(#bgGlowDark)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "600",
							cy: "200",
							r: "170",
							fill: "url(#bgGlowDark)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 280 200 L 370 200 L 385 170 L 400 230 L 415 185 L 425 205 L 435 200 L 520 200",
							fill: "none",
							stroke: "#0F2B26",
							strokeWidth: "4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							className: "ecg-line-dark",
							d: "M 280 200 L 370 200 L 385 170 L 400 230 L 415 185 L 425 205 L 435 200 L 520 200",
							fill: "none",
							stroke: "#2DD4BF",
							strokeWidth: "4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "card-left-dark",
							filter: "url(#softShadowDark)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "80",
									y: "100",
									width: "220",
									height: "200",
									rx: "20",
									fill: "#081C19",
									stroke: "#133A34",
									strokeWidth: "1.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "80",
									y: "100",
									width: "220",
									height: "48",
									rx: "20",
									fill: "#0D2B26"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "110",
									cy: "124",
									r: "14",
									fill: "#25D366"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 105 120 A 6 6 0 0 1 114 127 L 114 129 L 112 129 L 107 124 Z",
									fill: "#FFFFFF"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "132",
									y: "128",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontWeight: "600",
									fontSize: "12",
									fill: "#F8FAFC",
									children: "WhatsApp Booking"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "96",
									y: "162",
									width: "145",
									height: "42",
									rx: "12",
									fill: "#0D2B26"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "108",
									y: "180",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontSize: "11",
									fill: "#E2E8F0",
									children: "Book doctor appointment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "108",
									y: "194",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontSize: "10",
									fontWeight: "500",
									fill: "#2DD4BF",
									children: "Today, 10:30 AM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "125",
									y: "214",
									width: "160",
									height: "48",
									rx: "12",
									fill: "url(#primaryGradDark)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "137",
									y: "233",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontSize: "11",
									fontWeight: "600",
									fill: "#041F1A",
									children: "Slot Confirmed! Slot 4B"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "137",
									y: "248",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontSize: "10",
									fontWeight: "500",
									fill: "#022C22",
									children: "Synced with Clinic OS ✓"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(96, 268)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "0",
											y: "0",
											width: "50",
											height: "20",
											rx: "10",
											fill: "#0D2B26"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											className: "dot-1-dark",
											cx: "15",
											cy: "10",
											r: "2.5",
											fill: "#5EEAD4"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											className: "dot-2-dark",
											cx: "25",
											cy: "10",
											r: "2.5",
											fill: "#5EEAD4"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											className: "dot-3-dark",
											cx: "35",
											cy: "10",
											r: "2.5",
											fill: "#5EEAD4"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "card-right-dark",
							filter: "url(#softShadowDark)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "500",
									y: "90",
									width: "220",
									height: "220",
									rx: "20",
									fill: "#081C19",
									stroke: "#133A34",
									strokeWidth: "1.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "524",
									y: "125",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontWeight: "700",
									fontSize: "14",
									fill: "#F8FAFC",
									children: "Live Appointments"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "645",
									y: "112",
									width: "55",
									height: "18",
									rx: "9",
									fill: "#032621",
									stroke: "#0D9488",
									strokeWidth: "1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "654",
									y: "124",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontWeight: "600",
									fontSize: "9",
									fill: "#2DD4BF",
									children: "AUTOMATED"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(520, 142)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "0",
											y: "0",
											width: "180",
											height: "46",
											rx: "10",
											fill: "#032621",
											stroke: "#2DD4BF",
											strokeWidth: "1.5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "22",
											cy: "23",
											r: "12",
											fill: "#2DD4BF"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 22 17 A 4 4 0 1 0 22 25 A 4 4 0 1 0 22 17 Z M 16 30 C 16 27 19 26 22 26 C 25 26 28 27 28 30",
											fill: "none",
											stroke: "#041F1A",
											strokeWidth: "1.5",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "42",
											y: "20",
											fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
											fontWeight: "600",
											fontSize: "11",
											fill: "#F8FAFC",
											children: "Sarah Jenkins"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "42",
											y: "34",
											fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
											fontSize: "10",
											fill: "#2DD4BF",
											children: "11:00 AM • Dr. Aris"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "162",
											cy: "23",
											r: "5",
											fill: "#2DD4BF"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(520, 198)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "0",
											y: "0",
											width: "180",
											height: "46",
											rx: "10",
											fill: "#0D2B26"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "22",
											cy: "23",
											r: "12",
											fill: "#133A34"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 22 17 A 4 4 0 1 0 22 25 A 4 4 0 1 0 22 17 Z M 16 30 C 16 27 19 26 22 26 C 25 26 28 27 28 30",
											fill: "none",
											stroke: "#94A3B8",
											strokeWidth: "1.5",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "42",
											y: "20",
											fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
											fontWeight: "600",
											fontSize: "11",
											fill: "#E2E8F0",
											children: "Michael Chen"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "42",
											y: "34",
											fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
											fontSize: "10",
											fill: "#64748B",
											children: "11:30 AM • Consultation"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(520, 254)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "0",
											y: "0",
											width: "180",
											height: "40",
											rx: "10",
											fill: "#0D2B26"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "42",
											y: "12",
											width: "70",
											height: "6",
											rx: "3",
											fill: "#133A34"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "42",
											y: "24",
											width: "45",
											height: "5",
											rx: "2.5",
											fill: "#133A34"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "pulse-badge-dark",
							transform: "translate(360, 80)",
							filter: "url(#softShadowDark)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "0",
									y: "0",
									width: "80",
									height: "28",
									rx: "14",
									fill: "#081C19",
									stroke: "#2DD4BF",
									strokeWidth: "1.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "16",
									cy: "14",
									r: "4",
									fill: "#2DD4BF"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "26",
									y: "18",
									fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
									fontWeight: "700",
									fontSize: "10",
									fill: "#2DD4BF",
									children: "INSTANT"
								})
							]
						})
					]
				})]
			})]
		})
	});
}
var platformModules = [
	{
		title: "Patient CRM",
		desc: "Centralized medical histories",
		icon: Users,
		spot: "from-emerald-400/15"
	},
	{
		title: "Appointments",
		desc: "Automated queue & tokens",
		icon: Calendar,
		spot: "from-teal-400/15"
	},
	{
		title: "EMR Records",
		desc: "Structured clinical charting",
		icon: FileSpreadsheet,
		spot: "from-lime-400/15"
	},
	{
		title: "Billing & Invoices",
		desc: "Stripe & clinic receipts",
		icon: Receipt,
		spot: "from-indigo-400/15"
	},
	{
		title: "Clinical Analytics",
		desc: "Revenue & visit telemetry",
		icon: ChartColumn,
		spot: "from-teal-400/15"
	},
	{
		title: "AI Assistant",
		desc: "Smart diagnostic notes",
		icon: Bot,
		spot: "from-emerald-400/15"
	},
	{
		title: "Automated Follow-ups",
		desc: "WhatsApp patient reminders",
		icon: MessageSquare,
		spot: "from-lime-400/15"
	},
	{
		title: "Staff Roster",
		desc: "Role-based staff permissions",
		icon: UserCheck,
		spot: "from-indigo-400/15"
	},
	{
		title: "Pharmacy Inventory",
		desc: "Drug stock & batch tracking",
		icon: Boxes,
		spot: "from-emerald-400/15"
	},
	{
		title: "Custom Reports",
		desc: "Exportable PDF/CSV digests",
		icon: FileText,
		spot: "from-teal-400/15"
	},
	{
		title: "Smart Alerts",
		desc: "Real-time clinical triggers",
		icon: Bell,
		spot: "from-lime-400/15"
	},
	{
		title: "Enterprise Security",
		desc: "HIPAA & 256-bit encryption",
		icon: Shield,
		spot: "from-indigo-400/15"
	}
];
var workflowSteps = [
	{
		step: "01",
		title: "Booking",
		sub: "Online or front desk",
		spot: "from-emerald-400/20"
	},
	{
		step: "02",
		title: "Confirmation",
		sub: "WhatsApp alert sent",
		spot: "from-teal-400/20"
	},
	{
		step: "03",
		title: "Consultation",
		sub: "Doctor notes & EMR",
		spot: "from-lime-400/20"
	},
	{
		step: "04",
		title: "Prescription",
		sub: "Digital PDF signature",
		spot: "from-indigo-400/20"
	},
	{
		step: "05",
		title: "Billing",
		sub: "Stripe or cash receipt",
		spot: "from-emerald-400/20"
	},
	{
		step: "06",
		title: "Follow-up",
		sub: "Automated feedback",
		spot: "from-teal-400/20"
	}
];
var enterpriseFeatures = [
	{
		title: "Multi-Tenant Architecture",
		desc: "Isolated clinic data boundaries with multi-campus hospital organization support.",
		icon: Server,
		spot: "from-emerald-400/20"
	},
	{
		title: "Role-Based Access Control",
		desc: "Granular permissions for Doctors, Nurses, Receptionists, and Billing staff.",
		icon: KeyRound,
		spot: "from-teal-400/20"
	},
	{
		title: "Immutable Audit Logging",
		desc: "Complete timestamped records of every patient chart view and prescription edit.",
		icon: FileText,
		spot: "from-indigo-400/20"
	}
];
var complianceBadges = [
	{
		icon: Shield,
		title: "HIPAA Compliant",
		sub: "End-to-end encrypted data",
		spot: "from-emerald-400/20"
	},
	{
		icon: Lock,
		title: "GDPR Certified",
		sub: "Strict privacy safeguards",
		spot: "from-teal-400/20"
	},
	{
		icon: Clock,
		title: "99.9% Uptime SLA",
		sub: "Guaranteed cloud reliability",
		spot: "from-lime-400/20"
	},
	{
		icon: Award,
		title: "ISO 27001",
		sub: "Enterprise security standard",
		spot: "from-indigo-400/20"
	}
];
var testimonials = [
	{
		name: "Dr. Sarah Ahmed",
		role: "General Practitioner, Karachi",
		quote: "Autonique transformed how we manage our clinic. Patient no-shows dropped by 55% after using WhatsApp reminders.",
		stars: 5,
		delay: "1",
		spot: "from-emerald-400/20"
	},
	{
		name: "Dr. Farhan Malik",
		role: "Orthopedic Surgeon, Lahore",
		quote: "The billing and prescription modules save us 3+ hours every single day. It's the best investment we've made for our practice.",
		stars: 5,
		delay: "2",
		spot: "from-teal-400/20"
	},
	{
		name: "Dr. Nadia Reyes",
		role: "Clinic Director, Islamabad",
		quote: "From EMR to payments — everything is in one place. Our staff onboarded in just 2 days. Absolutely seamless.",
		stars: 5,
		delay: "3",
		spot: "from-lime-400/20"
	}
];
var pricingPlans = [
	{
		name: "Starter",
		monthlyPrice: "$49",
		annualPrice: "$39",
		sub: "For solo doctor practices.",
		features: [
			"Smart calendar scheduling",
			"Structured patient records",
			"Automated email reminders",
			"Standard revenue reports"
		],
		delay: "1",
		spot: "from-emerald-400/20"
	},
	{
		name: "Growth",
		monthlyPrice: "$129",
		annualPrice: "$99",
		sub: "For growing clinic teams.",
		features: [
			"Everything in Starter",
			"Stripe payment gateway",
			"WhatsApp automation",
			"Priority 24/7 support"
		],
		highlight: true,
		delay: "2",
		spot: "from-teal-400/30"
	},
	{
		name: "Enterprise",
		monthlyPrice: "Custom",
		annualPrice: "Custom",
		sub: "For hospital groups.",
		features: [
			"Custom EMR integrations",
			"Immutable audit logs",
			"99.99% SLA & dedicated CSM",
			"Custom BAA — HIPAA"
		],
		delay: "3",
		spot: "from-indigo-400/20"
	}
];
var faqItems = [
	{
		question: "How long does clinic onboarding take?",
		answer: "Most single and multi-doctor clinics are fully setup and operating on Autonique within 24 to 48 hours. Our team assists with data import."
	},
	{
		question: "Is Autonique compliant with HIPAA and GDPR?",
		answer: "Yes. Autonique encrypts all patient medical records at rest (AES-256) and in transit (TLS 1.3) with full audit logging and compliance."
	},
	{
		question: "Can I import existing patient records from Excel or another EHR?",
		answer: "Absolutly. We provide automated CSV and Excel importers, as well as dedicated migration specialists for hospital databases."
	},
	{
		question: "Does Autonique support WhatsApp appointment reminders?",
		answer: "Yes, automated WhatsApp & SMS appointment confirmations and follow-ups are built directly into the platform."
	}
];
function ModulesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "platform",
		className: "py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				label: "One Intelligent System",
				title: "12 Essential Modules. One Platform.",
				description: "Consolidate your software stack into a single, cohesive clinical environment."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
				children: platformModules.map((m, idx) => {
					const Icon = m.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						"data-reveal-delay": String(idx % 4 + 1),
						className: `rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${m.spot} via-transparent to-transparent p-4.5 shadow-xs hover:shadow-md transition-all group`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-9 w-9 rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-[13.5px] text-[#0F172A] dark:text-white",
								children: m.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-[#64748B] dark:text-[#809995] font-medium mt-0.5",
								children: m.desc
							})
						]
					}, m.title);
				})
			})]
		})
	});
}
function FeatureShowcaseSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8 space-y-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					label: "Enterprise Features",
					title: "Engineered for High-Performance Clinics"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						{
							title: "AI Clinical Assistant",
							desc: "Generate structured consultation notes and diagnostic summaries automatically during doctor visits.",
							icon: Bot,
							spot: "from-emerald-400/20",
							preview: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-emerald-500/20 bg-[#F0FDFA] dark:bg-[#0F3531] p-3 text-[11px] space-y-1.5 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-emerald-800 dark:text-[#2DD4BF] font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " AI Note Draft"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ICD-10 Ready" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#475569] dark:text-[#A0B0AD] font-mono text-[10px]",
									children: "Patient presents with acute pharyngitis. Prescribed Amoxicillin 500mg."
								})]
							})
						},
						{
							title: "Appointment Automation",
							desc: "Multi-channel calendar scheduling with automated WhatsApp confirmation and cancellation management.",
							icon: Calendar,
							spot: "from-teal-400/20",
							preview: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-[#0D9488]/20 bg-[#F0FDFA] dark:bg-[#0F3531] p-3 text-[11px] space-y-1.5 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[#0F766E] dark:text-[#2DD4BF] font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp Confirmation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#0D9488] dark:text-[#2DD4BF] font-mono text-[9.5px]",
										children: "Sent 09:30 AM"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#475569] dark:text-[#A0B0AD] text-[10.5px]",
									children: "\"Hello Ava, your visit with Dr. Reyes is confirmed for 10:30 AM today.\""
								})]
							})
						},
						{
							title: "Medical Billing & Stripe",
							desc: "Accept online payments, issue digital receipts, and track clinic revenue with automated reconciliation.",
							icon: Receipt,
							spot: "from-emerald-400/20",
							preview: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-[#0D9488]/20 bg-[#F0FDFA] dark:bg-[#0F3531] p-3 text-[11px] space-y-1.5 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[#0F766E] dark:text-[#2DD4BF] font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stripe Payment #INV-2841" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#0D9488] dark:text-[#2DD4BF] font-bold",
										children: "$129 Paid"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#475569] dark:text-[#A0B0AD] font-mono text-[10px]",
									children: "Consultation Fee · Card •••• 4242"
								})]
							})
						}
					].map((card, i) => {
						const Icon = card.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							"data-reveal-delay": String(i + 1),
							className: `rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${card.spot} via-transparent to-transparent p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-10 w-10 rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shadow-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-[16px] font-bold text-[#0F172A] dark:text-white",
										children: card.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-[#475569] dark:text-[#A0B0AD] leading-relaxed font-medium",
										children: card.desc
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 pt-4 border-t border-[#0D9488]/15 dark:border-[#0D9488]/30",
								children: card.preview
							})]
						}, card.title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					className: "rounded-2xl border-none bg-white dark:bg-[#0B201E] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent p-8 lg:p-10 shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 space-y-6 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 dark:border-[#0D9488]/40 bg-[#EFFFFE] dark:bg-[#0F2F2C] px-3.5 py-1 text-[11px] font-bold text-[#0F766E] dark:text-[#2DD4BF]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-[#0D9488] dark:text-[#2DD4BF]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Automated Appointment Scheduling" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl sm:text-3xl font-black text-[#0F172A] dark:text-white leading-snug",
									children: "Smart Calendar Slot Lookup & Instant Confirmations"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[14px] leading-relaxed text-[#475569] dark:text-[#A0B0AD] font-medium",
									children: "Empower your patients to check doctor availability, select time slots, and receive instant booking receipts — reducing front-desk phone calls and cutting no-shows by 55%."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",
									children: [
										{
											t: "Autonomous Slot Lookup",
											desc: "Real-time doctor calendar sync"
										},
										{
											t: "Instant Receipts & Alerts",
											desc: "Digital booking details & doctor info"
										},
										{
											t: "55% Lower No-Shows",
											desc: "Automated pre-visit reminders"
										},
										{
											t: "Multi-Doctor Roster",
											desc: "Seamless appointment distribution"
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 p-2.5 rounded-xl border-none bg-[#F8FFFE] dark:bg-[#061514]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[12.5px] font-bold text-[#0F172A] dark:text-white",
											children: item.t
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10.5px] text-[#64748B] dark:text-[#809995] font-medium",
											children: item.desc
										})] })]
									}, item.t))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-6 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-full max-w-sm sm:max-w-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative rounded-[16px] overflow-hidden bg-white dark:bg-[#0D2926] p-4 shadow-2xl transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] drop-shadow-[0_25px_35px_rgba(13,148,136,0.3)] hover:drop-shadow-[0_30px_45px_rgba(13,148,136,0.4)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/appointment-booking-illustration.png",
										alt: "Autonique Clinic Appointment Booking Illustration",
										className: "w-full h-auto object-contain rounded-xl transition-all duration-300 hover:scale-[1.01] dark:brightness-95 contrast-[1.02]"
									})
								})
							})
						})]
					})
				})
			]
		})
	});
}
function WorkflowSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "workflow",
		className: "py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				label: "Seamless Patient Journey",
				title: "From Booking to Follow-up in 6 Steps"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-6 gap-3",
				children: workflowSteps.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					"data-reveal-delay": String(idx % 3 + 1),
					className: `rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${s.spot} via-transparent to-transparent p-4 text-center relative group transition-all shadow-xs hover:shadow-md`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[12px] font-bold text-[#0D9488] dark:text-[#2DD4BF] mb-1",
							children: s.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-bold text-[13px] text-[#0F172A] dark:text-white",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10.5px] text-[#64748B] dark:text-[#809995] font-medium mt-0.5",
							children: s.sub
						})
					]
				}, s.step))
			})]
		})
	});
}
function InteractivePreviewSection() {
	const [activePreviewTab, setActivePreviewTab] = (0, import_react.useState)("dashboard");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "preview",
		className: "py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					label: "Interactive Software Showcase",
					title: "Designed for Doctors & Administrators"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					className: "flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6",
					children: [
						{
							id: "dashboard",
							label: "Dashboard"
						},
						{
							id: "crm",
							label: "Patient CRM"
						},
						{
							id: "appointments",
							label: "Appointments"
						},
						{
							id: "emr",
							label: "EMR Charts"
						},
						{
							id: "billing",
							label: "Billing"
						}
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActivePreviewTab(t.id),
						className: `px-4 py-2 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${activePreviewTab === t.id ? "bg-[#0F766E] text-white shadow-md" : "bg-white dark:bg-[#0D2926] border border-[#0D9488]/20 dark:border-[#0D9488]/40 text-[#475569] dark:text-[#A0B0AD] hover:bg-[#EFFFFE] dark:hover:bg-[#0F3531]"}`,
						children: t.label
					}, t.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					className: "rounded-[8px] border border-[#0D9488]/20 dark:border-[#0D9488]/40 bg-white dark:bg-[#0D2926] shadow-2xl overflow-hidden max-w-4xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-4 py-3 bg-[#022C2C] text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-rose-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] text-[#99F6E4]",
								children: ["Autonique Clinical OS · ", activePreviewTab.toUpperCase()]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 bg-[#F8FFFE] dark:bg-[#061514] min-h-[320px] flex flex-col justify-center",
						children: [
							activePreviewTab === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4 animate-fade-in",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden rounded-[8px] border border-[#0D9488]/20 dark:border-[#0D9488]/40 shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/dashboard-home-img.png",
										alt: "Autonique Doctor Dashboard Overview Screenshot",
										className: "w-full h-auto object-cover object-top max-h-[460px] rounded-[8px]"
									})
								})
							}),
							activePreviewTab === "crm" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 animate-fade-in",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[12.5px] font-bold text-[#0F172A] dark:text-white pb-2 border-b border-border/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Patient Records" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10.5px] text-[#0D9488] dark:text-[#2DD4BF]",
										children: "5 Active Patients"
									})]
								}), [
									{
										name: "Ava Chen",
										id: "P-1042",
										phone: "+49 30 8823 1194",
										date: "22 Jul 2026"
									},
									{
										name: "Marcus Weiss",
										id: "P-1041",
										phone: "+49 30 4412 8802",
										date: "22 Jul 2026"
									},
									{
										name: "Priya Kapoor",
										id: "P-1040",
										phone: "+49 30 2201 4488",
										date: "22 Jul 2026"
									}
								].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between p-2.5 rounded-xl border border-border/40 bg-white dark:bg-[#0D2926] text-[12px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#0F172A] dark:text-white",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-muted-foreground",
											children: p.phone
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-muted-foreground",
											children: p.date
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-emerald-500/10 text-emerald-700 dark:text-[#2DD4BF] font-mono text-[10px] px-2 py-0.5 rounded-full font-bold",
											children: "Active"
										})
									]
								}, p.id))]
							}),
							activePreviewTab === "appointments" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 animate-fade-in",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[12.5px] font-bold text-[#0F172A] dark:text-white pb-2 border-b border-border/40",
									children: "Today's Appointment Schedule"
								}), [
									{
										time: "09:00 AM",
										doctor: "Dr. Reyes",
										patient: "Ava Chen",
										status: "Confirmed"
									},
									{
										time: "10:30 AM",
										doctor: "Dr. Okafor",
										patient: "Marcus Weiss",
										status: "In Consultation"
									},
									{
										time: "02:00 PM",
										doctor: "Dr. Reyes",
										patient: "Priya Kapoor",
										status: "Scheduled"
									}
								].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between p-3 rounded-xl border border-border/40 bg-white dark:bg-[#0D2926] text-[12px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono font-bold text-[#0D9488] dark:text-[#2DD4BF]",
											children: a.time
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: a.patient
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: a.doctor
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-emerald-500/10 text-emerald-700 dark:text-[#2DD4BF] font-mono text-[10px] px-2 py-0.5 rounded-full font-bold",
											children: a.status
										})
									]
								}, a.time))]
							}),
							activePreviewTab === "emr" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-xl border border-emerald-500/30 bg-white dark:bg-[#0D2926] space-y-3 text-[12px] animate-fade-in",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between font-bold text-[#0F172A] dark:text-white border-b pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Electronic Medical Record #EMR-992" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-emerald-700 dark:text-[#2DD4BF]",
										children: "ICD-10 Signed"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground font-sans",
									children: "Patient presents for routine follow-up. Vital signs normal (BP: 120/80, Pulse: 72 bpm). Continuation of therapy recommended."
								})]
							}),
							activePreviewTab === "billing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-xl border border-emerald-500/30 bg-white dark:bg-[#0D2926] space-y-3 text-[12px] animate-fade-in",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between font-bold text-[#0F172A] dark:text-white border-b pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stripe Billed Monthly Subscription" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-emerald-700 dark:text-[#2DD4BF] font-mono",
										children: "$516 / mo"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground font-mono text-[11px]",
									children: "Growth Tier · 4 Active Provider Seats · Next Invoice: Aug 12, 2026"
								})]
							})
						]
					})]
				})
			]
		})
	});
}
function EnterpriseArchitectureSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				label: "Enterprise Infrastructure",
				title: "Built for Scalability, Speed & Security"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: enterpriseFeatures.map((e, idx) => {
					const Icon = e.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						"data-reveal-delay": String(idx + 1),
						className: `rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${e.spot} via-transparent to-transparent p-6 shadow-xs hover:shadow-md transition-all`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center mb-4 shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[15px] font-bold text-[#0F172A] dark:text-white",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] text-[#475569] dark:text-[#A0B0AD] mt-1.5 leading-relaxed font-medium",
								children: e.desc
							})
						]
					}, e.title);
				})
			})]
		})
	});
}
function ComplianceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: complianceBadges.map((item, i) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						"data-reveal-delay": String(i + 1),
						className: `flex items-start gap-3 p-4 rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${item.spot} via-transparent to-transparent shadow-xs`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0D9488] dark:text-[#2DD4BF] shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-bold text-[#0F172A] dark:text-white",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-[#64748B] dark:text-[#809995] font-medium",
							children: item.sub
						})] })]
					}, item.title);
				})
			})
		})
	});
}
function TestimonialsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "social-proof",
		className: "py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				label: "Trusted by Healthcare Leaders",
				title: "What Medical Directors Say"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-5",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					"data-reveal-delay": t.delay,
					className: `rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${t.spot} via-transparent to-transparent p-6 shadow-xs hover:shadow-md transition-all flex flex-col gap-4`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5",
							children: Array(t.stars).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[13.5px] leading-relaxed text-[#334155] dark:text-[#A0B0AD] font-medium flex-1",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 pt-3 border-t border-[#0D9488]/15 dark:border-[#0D9488]/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 place-items-center rounded-full bg-[#0F766E] text-white font-bold text-[13px]",
								children: t.name[4]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-bold text-[#0F172A] dark:text-white",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-[#64748B] dark:text-[#809995] font-medium",
								children: t.role
							})] })]
						})
					]
				}, t.name))
			})]
		})
	});
}
function PricingSection({ annualBilling, setAnnualBilling }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold",
						children: "Subscription Plans"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white",
						children: "Transparent & Predictable Pricing"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					className: "flex items-center gap-2 bg-white dark:bg-[#0D2926] p-1.5 rounded-xl border border-[#0D9488]/20 dark:border-[#0D9488]/40 shadow-xs self-start sm:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setAnnualBilling(false),
						className: `px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${!annualBilling ? "bg-[#0F766E] text-white shadow-sm" : "text-[#64748B] dark:text-[#809995]"}`,
						children: "Monthly"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setAnnualBilling(true),
						className: `flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${annualBilling ? "bg-[#0F766E] text-white shadow-sm" : "text-[#64748B] dark:text-[#809995]"}`,
						children: ["Annual", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9.5px] bg-[#CCFBF1] dark:bg-[#0F3531] text-[#0F766E] dark:text-[#2DD4BF] px-1.5 py-0.2 rounded font-bold",
							children: "Save 20%"
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-5",
				children: pricingPlans.map((t) => {
					const price = annualBilling ? t.annualPrice : t.monthlyPrice;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						"data-reveal-delay": t.delay,
						className: `rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${t.spot} via-transparent to-transparent p-6 flex flex-col justify-between transition-all duration-300 ${t.highlight ? "ring-2 ring-[#0D9488]/40 shadow-xl scale-[1.02]" : "shadow-xs hover:shadow-md"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							t.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#0F766E] to-[#0D9488] px-3 py-0.5 font-mono text-[9.5px] font-bold text-white uppercase tracking-wider shadow-xs",
								children: "Most Popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[15px] font-bold text-[#0F172A] dark:text-white",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 font-display text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-white",
								children: [price, price !== "Custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1 font-mono text-[11.5px] text-[#64748B] dark:text-[#809995] font-normal",
									children: "/ mo"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-[12px] text-[#64748B] dark:text-[#809995] font-medium",
								children: t.sub
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2.5",
								children: t.features.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-[12.5px] text-[#334155] dark:text-[#E2F1F0] font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0" }), i]
								}, i))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: `mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl text-[13px] font-bold transition-all duration-300 cursor-pointer ${t.highlight ? "bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0A5754] hover:to-[#0F766E] text-white shadow-lg shadow-[#0D9488]/25" : "border border-[#0D9488]/25 dark:border-[#0D9488]/40 bg-[#F8FFFE] dark:bg-[#0F3531] hover:bg-[#EFFFFE] text-[#0F766E] dark:text-[#2DD4BF]"}`,
							children: "Start Free Trial"
						})]
					}, t.name);
				})
			})]
		})
	});
}
function FaqSection({ openFaq, setOpenFaq }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				label: "Frequently Asked Questions",
				title: "Everything You Need to Know"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: faqItems.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					"data-reveal-delay": String(i + 1),
					className: "rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent overflow-hidden shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpenFaq(openFaq === i ? null : i),
						className: "w-full flex items-center justify-between p-5 text-left font-bold text-[14px] text-[#0F172A] dark:text-white cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: faq.question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF] transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}` })]
					}), openFaq === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 pb-5 text-[13px] text-[#475569] dark:text-[#A0B0AD] leading-relaxed font-medium border-t border-[#0D9488]/10 pt-3",
						children: faq.answer
					})]
				}, faq.question))
			})]
		})
	});
}
function CtaBannerSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				className: "rounded-[8px] border-none bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#0F766E] dark:from-[#0D2926] dark:via-[#0F3531] dark:to-[#0D2926] p-10 sm:p-12 text-center shadow-xl relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10 dark:bg-[#2DD4BF]/15 blur-2xl pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/10 dark:bg-[#2DD4BF]/15 blur-2xl pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-black text-white sm:text-4xl relative z-10",
						children: "Ready to Modernise Your Clinic?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[15px] text-teal-100 dark:text-[#A0B0AD] font-medium max-w-lg mx-auto relative z-10",
						children: "Join 40,000+ doctors already running their practice on Autonique. No contracts, cancel any time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap items-center justify-center gap-4 relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							className: "inline-flex h-11 items-center gap-2 rounded-xl bg-white text-[#0F766E] dark:bg-[#2DD4BF] dark:text-[#061514] hover:bg-teal-50 dark:hover:bg-[#5EEAD4] px-7 text-[13.5px] font-bold shadow-md transition-all duration-300 cursor-pointer active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "h-4 w-4" }), "Start Free Trial"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#pricing",
							className: "inline-flex h-11 items-center gap-2 rounded-xl border border-white/30 dark:border-[#0D9488]/40 text-white dark:text-[#2DD4BF] hover:bg-white/10 dark:hover:bg-[#0F3531] px-7 text-[13.5px] font-bold transition-all",
							children: "View Pricing"
						})]
					})
				]
			})
		})
	});
}
function FooterSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-[#0D9488]/15 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-10 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-[#64748B] dark:text-[#809995] font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#problem",
								className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
								children: "Why Change"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#platform",
								className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
								children: "Platform"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#workflow",
								className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
								children: "Workflow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#preview",
								className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
								children: "Product"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pricing",
								className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
								children: "Pricing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors",
								children: "Dashboard"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-[#94A3B8] dark:text-[#64748B] font-mono",
						children: "© 2026 Autonique Clinical OS · All rights reserved"
					})
				]
			})
		})
	});
}
function useScrollReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll("[data-reveal]");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("revealed");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .12 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function Landing() {
	const [annualBilling, setAnnualBilling] = (0, import_react.useState)(true);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	useScrollReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        [data-reveal] {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s cubic-bezier(.22,1,.36,1),
                      transform 0.65s cubic-bezier(.22,1,.36,1);
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }
        [data-reveal-delay="1"] { transition-delay: 0.1s; }
        [data-reveal-delay="2"] { transition-delay: 0.2s; }
        [data-reveal-delay="3"] { transition-delay: 0.3s; }
        [data-reveal-delay="4"] { transition-delay: 0.4s; }
        [data-reveal-delay="5"] { transition-delay: 0.5s; }
      ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F8FFFE] dark:bg-[#061514] text-[#0F172A] dark:text-[#E2F1F0] font-sans selection:bg-[#0D9488]/20 selection:text-[#0F766E] overflow-x-clip antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06] bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:24px_24px] z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemSolutionSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModulesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureShowcaseSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractivePreviewSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnterpriseArchitectureSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComplianceSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingSection, {
				annualBilling,
				setAnnualBilling
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {
				openFaq,
				setOpenFaq
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBannerSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterSection, {})
		]
	})] });
}
//#endregion
export { Landing as component };
