import { i as __toESM } from "./_runtime.mjs";
import { i as useStripe, n as PaymentElement, o as require_react, r as useElements, t as Elements } from "./_libs/@stripe/react-stripe-js+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { U as CircleCheck, V as CreditCard, W as CircleAlert, f as ShieldCheck, k as Lock, t as X, tt as ArrowRight, v as RefreshCw, z as Download } from "./_libs/lucide-react.mjs";
import { a as PageHeader, n as Badge, r as Button } from "./_ssr/AppShell-XiXlp6xJ.mjs";
import { t as getServerFnById } from "./__23tanstack-start-server-fn-resolver-CjPe4SoO.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./_ssr/createServerFn-CIHAFgYl.mjs";
import { t as loadStripe } from "./_libs/stripe__stripe-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.clinic-PjfgpWoe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stripePromise = loadStripe(typeof import.meta !== "undefined" && "pk_test_51PxDemoStripePublishableKeyAutoniqueClinicOS1234567890" || "pk_test_51PxDemoStripePublishableKeyAutoniqueClinicOS1234567890");
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var createStripePaymentIntentFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("8ed6abfc2a8c2143894b10ada065b6f64bcafe2a6adcc0b13e0d53227ba7a123"));
function StripeCheckoutForm({ item, onPaymentSuccess, onClose, isDemo }) {
	const stripe = useStripe();
	const elements = useElements();
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
	const [cardNumber, setCardNumber] = (0, import_react.useState)("4242 4242 4242 4242");
	const [expDate, setExpDate] = (0, import_react.useState)("12/34");
	const [cvc, setCvc] = (0, import_react.useState)("123");
	const [zip, setZip] = (0, import_react.useState)("10119");
	const [cardHolder, setCardHolder] = (0, import_react.useState)("Dr. Sarah Khan");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsProcessing(true);
		setErrorMessage(null);
		if (!cardNumber || cardNumber.replace(/\s/g, "").length < 15) {
			setErrorMessage("Please enter a valid test card number (e.g. 4242 4242 4242 4242).");
			setIsProcessing(false);
			return;
		}
		if (!expDate || expDate.length < 4) {
			setErrorMessage("Please enter a valid expiry date (e.g. 12/34).");
			setIsProcessing(false);
			return;
		}
		if (!cvc || cvc.length < 3) {
			setErrorMessage("Please enter a 3-digit CVC (e.g. 123).");
			setIsProcessing(false);
			return;
		}
		if (stripe && elements && !isDemo) try {
			const { error: submitError } = await elements.submit();
			if (submitError) {
				setErrorMessage(submitError.message || "Invalid payment details.");
				setIsProcessing(false);
				return;
			}
			const result = await stripe.confirmPayment({
				elements,
				confirmParams: { return_url: window.location.href },
				redirect: "if_required"
			});
			if (result.error) {
				setErrorMessage(result.error.message || "Payment confirmation failed.");
				setIsProcessing(false);
			} else if (result.paymentIntent && result.paymentIntent.status === "succeeded") onPaymentSuccess(result.paymentIntent.id);
			else onPaymentSuccess(`pi_${Math.random().toString(36).substring(2, 12)}`);
		} catch (err) {
			setErrorMessage(err?.message || "An unexpected error occurred.");
			setIsProcessing(false);
		}
		else setTimeout(() => {
			onPaymentSuccess(`pi_3M${Math.random().toString(36).substring(2, 11)}${Date.now().toString(36)}`);
		}, 1400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-xl bg-[#F0FDFA] dark:bg-[#0F3531] p-4 border border-[#0D9488]/20 shadow-2xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[13px] font-bold text-[#0F172A] dark:text-white",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-[#475569] dark:text-[#A0B0AD]",
						children: item.description
					}),
					item.patientName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-0.5 font-mono text-[10.5px] text-[#0F766E] dark:text-[#2DD4BF] font-semibold",
						children: ["Patient: ", item.patientName]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-[#64748B] dark:text-[#809995] uppercase font-mono",
						children: "Amount Due"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-xl font-extrabold text-[#0F766E] dark:text-[#2DD4BF] tracking-tight",
						children: ["$", item.amount.toFixed(2)]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3.5 rounded-xl border border-[#0D9488]/20 dark:border-[#0D9488]/40 p-4 bg-white dark:bg-[#0B201E]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-[11px] font-semibold text-[#64748B] dark:text-[#809995] uppercase font-mono",
						children: "Stripe Secure Card Element"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-[9.5px] font-mono text-[#0D9488] dark:text-[#2DD4BF]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " Stripe Encrypted"]
					})]
				}), stripe && elements && !isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentElement, { options: { layout: "tabs" } }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 font-sans",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] font-semibold text-[#475569] dark:text-[#A0B0AD] mb-1",
							children: "Cardholder Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: cardHolder,
							onChange: (e) => setCardHolder(e.target.value),
							required: true,
							placeholder: "Dr. Sarah Khan",
							className: "h-9 w-full rounded-lg border border-[#0D9488]/30 dark:border-[#0D9488]/50 bg-[#F8FFFE] dark:bg-[#061514] px-3 text-[12.5px] font-medium text-[#0F172A] dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] font-semibold text-[#475569] dark:text-[#A0B0AD] mb-1",
							children: "Card Information"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-[#0D9488]/30 dark:border-[#0D9488]/50 overflow-hidden focus-within:ring-1 focus-within:ring-[#0D9488]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative border-b border-[#0D9488]/20 bg-[#F8FFFE] dark:bg-[#061514]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: cardNumber,
									onChange: (e) => setCardNumber(e.target.value),
									required: true,
									placeholder: "4242 4242 4242 4242",
									className: "h-9.5 w-full bg-transparent pl-3 pr-16 text-[12.5px] font-mono text-[#0F172A] dark:text-white placeholder:text-muted-foreground focus:outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-[10px] font-extrabold text-[#0D9488] dark:text-[#2DD4BF] bg-[#CCFBF1] dark:bg-[#0F3531] px-1.5 py-0.5 rounded",
									children: "VISA TEST"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 divide-x divide-[#0D9488]/20 bg-[#F8FFFE] dark:bg-[#061514]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: expDate,
									onChange: (e) => setExpDate(e.target.value),
									required: true,
									placeholder: "MM / YY",
									className: "h-9.5 w-full bg-transparent px-3 text-[12.5px] font-mono text-[#0F172A] dark:text-white placeholder:text-muted-foreground focus:outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: cvc,
									onChange: (e) => setCvc(e.target.value),
									required: true,
									placeholder: "CVC / CVV",
									className: "h-9.5 w-full bg-transparent px-3 text-[12.5px] font-mono text-[#0F172A] dark:text-white placeholder:text-muted-foreground focus:outline-none"
								})]
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] font-semibold text-[#475569] dark:text-[#A0B0AD] mb-1",
							children: "ZIP / Postal Code"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: zip,
							onChange: (e) => setZip(e.target.value),
							required: true,
							placeholder: "10119",
							className: "h-9 w-full max-w-[150px] rounded-lg border border-[#0D9488]/30 dark:border-[#0D9488]/50 bg-[#F8FFFE] dark:bg-[#061514] px-3 text-[12.5px] font-mono text-[#0F172A] dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
						})] })
					]
				})]
			}),
			errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-[12px] text-rose-600 dark:text-rose-400 font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isProcessing,
					className: "w-full h-10.5 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0A5754] hover:to-[#0F766E] text-white font-bold text-[13.5px] shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70 active:scale-98",
					children: isProcessing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 animate-spin text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Processing Stripe Sandbox Payment..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Pay $",
							item.amount.toFixed(2),
							" with Stripe"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[10px] text-center text-[#64748B] dark:text-[#809995] font-mono",
					children: [
						"Visa Test Card: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-[#0F172A] dark:text-white",
							children: "4242 4242 4242 4242"
						}),
						" · Exp: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-[#0F172A] dark:text-white",
							children: "12/34"
						}),
						" · CVV: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-[#0F172A] dark:text-white",
							children: "123"
						})
					]
				})]
			})
		]
	});
}
function StripePaymentModal({ isOpen, onClose, item, onSuccess }) {
	const [clientSecret, setClientSecret] = (0, import_react.useState)(null);
	const [isDemo, setIsDemo] = (0, import_react.useState)(true);
	const [isLoadingIntent, setIsLoadingIntent] = (0, import_react.useState)(true);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [txId, setTxId] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!isOpen) {
			setStatus("idle");
			setTxId("");
			return;
		}
		setIsLoadingIntent(true);
		createStripePaymentIntentFn({ data: {
			amount: item.amount,
			currency: "usd",
			metadata: {
				invoiceId: item.invoiceId || `INV-${Math.floor(1e3 + Math.random() * 9e3)}`,
				patientName: item.patientName || "Guest Patient"
			}
		} }).then((res) => {
			setClientSecret(res.clientSecret);
			setIsDemo(res.isDemo);
			setIsLoadingIntent(false);
		}).catch(() => {
			setIsDemo(true);
			setIsLoadingIntent(false);
		});
	}, [
		isOpen,
		item.amount,
		item.invoiceId,
		item.patientName
	]);
	if (!isOpen) return null;
	const handlePaymentSuccess = (generatedTx) => {
		setTxId(generatedTx);
		setStatus("success");
		if (onSuccess) onSuccess(generatedTx);
	};
	const handleClose = () => {
		setStatus("idle");
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 bg-[#0F172A]/40 backdrop-blur-xs transition-opacity",
			onClick: handleClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#0D2926] shadow-2xl overflow-hidden border border-[#0D9488]/30 z-10 transition-all",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#022C2C] via-[#0F3531] to-[#022C2C] text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center h-7 w-7 rounded-lg bg-[#0D9488]/30 border border-[#2DD4BF]/40 text-[#2DD4BF] font-extrabold text-xs tracking-tight",
						children: "S"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[13.5px] font-bold tracking-tight",
							children: "Stripe Gateway"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded bg-[#2DD4BF]/20 px-1.5 py-0.2 font-mono text-[9px] font-bold text-[#2DD4BF] border border-[#2DD4BF]/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-2.5 w-2.5 text-[#2DD4BF]" }), " TEST SANDBOX"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-[#99F6E4] font-mono",
						children: "Secured Clinical Checkout"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleClose,
					className: "p-1 rounded-md text-[#99F6E4] hover:text-white hover:bg-white/10 transition-colors cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6",
				children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-6 text-center space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#0F766E] dark:text-[#2DD4BF] shadow-2xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 animate-bounce" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-extrabold text-[#0F172A] dark:text-white",
							children: "Payment Successful!"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[12.5px] text-[#475569] dark:text-[#A0B0AD] mt-1 font-medium",
							children: [
								"Payment of ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold text-[#0F172A] dark:text-white",
									children: ["$", item.amount.toFixed(2)]
								}),
								" was processed via Stripe."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-sm rounded-xl border border-[#0D9488]/20 bg-[#F8FFFE] dark:bg-[#061514] p-4 text-left font-mono text-[11px] space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b border-border/40 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#64748B] dark:text-[#809995]",
										children: "Transaction ID"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-[#0F172A] dark:text-white truncate max-w-[180px]",
										children: txId
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b border-border/40 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#64748B] dark:text-[#809995]",
										children: "Item"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-[#0F172A] dark:text-white",
										children: item.title
									})]
								}),
								item.patientName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b border-border/40 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#64748B] dark:text-[#809995]",
										children: "Patient"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-[#0F172A] dark:text-white",
										children: item.patientName
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between pt-1 font-bold text-[12px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#64748B] dark:text-[#809995]",
										children: "Total Paid"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[#0F766E] dark:text-[#2DD4BF]",
										children: ["$", item.amount.toFixed(2)]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => alert(`Receipt PDF generated for ${txId}`),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download Receipt" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: handleClose,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Done" })
							})]
						})
					]
				}) : isLoadingIntent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-12 text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-7 w-7 animate-spin text-[#0D9488] dark:text-[#2DD4BF] mx-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-bold text-[#0F172A] dark:text-white",
							children: "Connecting to Stripe Sandbox..."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-[#64748B] dark:text-[#809995] font-mono",
							children: "Initializing Payment Element & Encryption"
						})
					]
				}) : clientSecret ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Elements, {
					stripe: stripePromise,
					options: {
						clientSecret,
						appearance: {
							theme: "flat",
							variables: {
								colorPrimary: "#0D9488",
								colorBackground: "#FFFFFF",
								colorText: "#0F172A"
							}
						}
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StripeCheckoutForm, {
						item,
						onPaymentSuccess: handlePaymentSuccess,
						onClose: handleClose,
						isDemo
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StripeCheckoutForm, {
					item,
					onPaymentSuccess: handlePaymentSuccess,
					onClose: handleClose,
					isDemo: true
				})
			})]
		})]
	});
}
function Field({ label, hint, children, last = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grid grid-cols-1 items-start gap-3 px-5 py-4 ${!last ? "border-b border-border/30" : ""} sm:grid-cols-[220px_1fr] sm:gap-8`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[12.5px] font-semibold text-foreground",
				children: label
			}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-[11px] leading-relaxed text-muted-foreground",
				children: hint
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
	});
}
function Input(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: `h-8.5 w-full max-w-md rounded-lg border border-border/60 bg-background px-3.5 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all ${props.className ?? ""}`
	});
}
function ClinicPanel() {
	const [stripeModalOpen, setStripeModalOpen] = (0, import_react.useState)(false);
	const [stripeItem, setStripeItem] = (0, import_react.useState)({
		title: "Autonique Growth Plan — Monthly",
		description: "4 Provider Seats ($129/provider)",
		amount: 516
	});
	const handleStripeUpgrade = (planName, amount) => {
		setStripeItem({
			title: `Autonique Clinic Plan (${planName})`,
			description: `Monthly Clinic Platform Subscription`,
			amount
		});
		setStripeModalOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StripePaymentModal, {
			isOpen: stripeModalOpen,
			onClose: () => setStripeModalOpen(false),
			item: stripeItem,
			onSuccess: (txId) => {
				console.log("Stripe payment completed:", txId);
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5 font-semibold text-foreground",
				children: ["Clinic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-emerald-800 dark:text-emerald-300 font-semibold",
					children: "Panel"
				})]
			}),
			description: "Manage clinic platform subscriptions, billing and Stripe payment gateway.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11.5px] text-muted-foreground font-medium hidden sm:inline",
					children: "Sunday, June 22, 2026"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-400 shadow-2xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Gateway Online"]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 py-6 sm:px-6 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/8 to-background p-5 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 mb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[14px] font-bold text-foreground",
									children: "Growth Plan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "success",
									children: "Active"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "info",
									children: "Stripe Billed"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11.5px] font-mono text-muted-foreground",
							children: [
								"$129/provider · 4 active providers · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "$516/mo total"
								}),
								" · Renews 12 Aug 2026"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleStripeUpgrade("Growth Plan Monthly Renewal", 516),
							className: "shrink-0 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[12px] font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3.5 w-3.5" }), "Pay $516 via Stripe"]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-4 bg-muted/20 border-b border-border/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[13px] font-bold text-foreground tracking-tight",
							children: "Clinic Subscription Plans"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground mt-0.5",
							children: "Choose the plan that fits your clinic size."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
							children: [
								{
									name: "Starter",
									price: 49,
									desc: "For single practitioner clinics",
									seats: "1 Provider Seat",
									popular: false
								},
								{
									name: "Growth",
									price: 129,
									desc: "For expanding multi-doctor practices",
									seats: "$129/provider/mo",
									popular: true
								},
								{
									name: "Enterprise",
									price: 899,
									desc: "For multi-campus hospital groups",
									seats: "Unlimited Seats",
									popular: false
								}
							].map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `rounded-xl p-4 border transition-all flex flex-col justify-between ${tier.popular ? "border-emerald-500/40 bg-gradient-to-br from-emerald-500/8 to-background shadow-sm" : "border-border/60 bg-background hover:border-border hover:shadow-sm"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[13px] font-bold text-foreground",
												children: tier.name
											}), tier.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												tone: "success",
												children: "Current"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-display text-[20px] font-bold tracking-tight text-foreground",
											children: [
												"$",
												tier.price,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10.5px] text-muted-foreground font-mono font-normal",
													children: "/mo"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground leading-snug",
											children: tier.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold pt-0.5",
											children: tier.seats
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => handleStripeUpgrade(`${tier.name} Subscription`, tier.price),
									className: `mt-4 w-full h-8 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${tier.popular ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm" : "border border-border/80 hover:bg-accent text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3 w-3" }), tier.popular ? "Manage Subscription" : `Subscribe $${tier.price}/mo`]
								})]
							}, tier.name))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 py-4 bg-muted/20 border-b border-border/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[13px] font-bold text-foreground tracking-tight",
								children: "Payment Method"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Card on file",
							hint: "Used for automated monthly subscription renewals.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-12 place-items-center rounded-lg border border-border/60 bg-emerald-950 font-mono text-[10px] font-bold text-white",
										children: "VISA"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[12px] font-mono font-semibold text-foreground",
										children: "•••• 4242"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10.5px] font-mono text-muted-foreground",
										children: "Expires 08 / 28"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => handleStripeUpgrade("Card Authorization", 1),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3 w-3 text-emerald-600" }), "Update via Stripe"]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Billing email",
							last: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "billing@meridian.io" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-4 bg-muted/20 border-b border-border/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[13px] font-bold text-foreground tracking-tight",
							children: "Invoice History"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground mt-0.5",
							children: "Monthly subscription invoices from Stripe."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "border-b border-border/40 bg-muted/10 text-left font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-semibold",
										children: "Invoice"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 font-semibold",
										children: "Date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 text-right font-semibold",
										children: "Amount"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 text-right font-semibold",
										children: "Status"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border/30",
								children: [
									{
										i: "INV-2841",
										d: "12 Jul 2026",
										a: 516,
										paid: true
									},
									{
										i: "INV-2779",
										d: "12 Jun 2026",
										a: 516,
										paid: true
									},
									{
										i: "INV-2701",
										d: "12 May 2026",
										a: 387,
										paid: false
									}
								].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-muted/20 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3 font-mono text-[11px] text-muted-foreground",
											children: r.i
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3 font-medium text-foreground",
											children: r.d
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-5 py-3 text-right font-mono font-bold text-foreground",
											children: ["$", r.a]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3 text-right",
											children: r.paid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												tone: "success",
												children: "Paid"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => handleStripeUpgrade(`Invoice ${r.i}`, r.a),
												className: "px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10.5px] font-semibold inline-flex items-center gap-1 shadow-sm cursor-pointer transition-all",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3 w-3" }), "Pay Now"]
											})
										})
									]
								}, r.i))
							})]
						})
					})]
				})
			]
		})
	] });
}
//#endregion
export { ClinicPanel as component };
