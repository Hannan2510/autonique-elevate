import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  CreditCard as StripeIcon,
  Shield,
  Building2,
  Check,
  Zap,
  Sparkles,
  Download,
  AlertCircle,
  Clock,
  ArrowRight,
  Plus,
  Minus,
  Lock,
  CheckCircle2,
  RefreshCw,
  X,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";

export const Route = createFileRoute("/_app/clinic")({
  head: () => ({
    meta: [
      { title: "Clinic Billing & Subscriptions · Autonique" },
      { name: "description", content: "Manage clinic platform subscriptions, billing and Stripe payment gateway." },
      { property: "og:title", content: "Clinic Billing & Subscriptions · Autonique" },
      { property: "og:description", content: "Manage clinic platform subscriptions, billing and Stripe payment gateway." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ClinicPanel,
});

function Field({ label, hint, children, last = false }: { label: string; hint?: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`grid grid-cols-1 items-start gap-3 px-5 py-4 ${!last ? "border-b border-border/30" : ""} sm:grid-cols-[220px_1fr] sm:gap-8`}>
      <div className="min-w-0">
        <div className="text-[12.5px] font-semibold text-foreground">{label}</div>
        {hint && <div className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">{hint}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-9 w-full max-w-md rounded-xl border border-border/60 bg-background px-3.5 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all ${props.className ?? ""}`}
    />
  );
}

function ClinicPanel() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [activePlan, setActivePlan] = useState<"starter" | "growth" | "enterprise">("growth");
  
  // Main provider seat count
  const [activeSeats, setActiveSeats] = useState(4);

  // Invoices list
  const [invoices, setInvoices] = useState([
    { id: "INV-2841", date: "12 Jul 2026", duration: "Jun 12, 2026 - Jul 12, 2026", amount: 516, paid: true },
    { id: "INV-2779", date: "12 Jun 2026", duration: "May 12, 2026 - Jun 12, 2026", amount: 516, paid: true },
    { id: "INV-2701", date: "12 May 2026", duration: "Apr 12, 2026 - May 12, 2026", amount: 387, paid: false },
  ]);

  // Stripe Checkout Wizard States
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardStep, setWizardStep] = useState<1 | 2 | 3 | 4>(1);
  const [wizardPlanId, setWizardPlanId] = useState<"starter" | "growth" | "enterprise">("growth");
  const [wizardSeatsCount, setWizardSeatsCount] = useState(4);
  const [wizardIsPayingInvoice, setWizardIsPayingInvoice] = useState(false);
  const [wizardInvoiceId, setWizardInvoiceId] = useState("");

  // Card input states inside wizard
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [zip, setZip] = useState("");
  
  // Consent states
  const [licenseId, setLicenseId] = useState("MD-84920");
  const [consentChecked, setConsentChecked] = useState(true);

  // Interactive UI animation states
  const [isFlipped, setIsFlipped] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [generatedTx, setGeneratedTx] = useState("");

  const logIntervalRef = useRef<any>(null);
  const secureLogs = [
    "Establishing secure 256-bit SSL handshake with Stripe...",
    "Encrypting card credentials via HIPAA tokenization tunnel...",
    "Routing payload to Stripe Sandbox Authorization network...",
    "Executing anti-fraud compliance checks & CVV matching...",
    "Finalizing ledger entry & archiving digital receipt..."
  ];

  // Auto-format card number as space-separated groups of 4
  const handleCardNumberChange = (val: string) => {
    const clean = val.replace(/\D/g, "").slice(0, 16);
    const formatted = clean.match(/.{1,4}/g)?.join(" ") || clean;
    setCardNumber(formatted);
  };

  // Auto-format expiry as MM/YY
  const handleExpiryChange = (val: string) => {
    const clean = val.replace(/\D/g, "").slice(0, 4);
    if (clean.length >= 2) {
      setExpDate(`${clean.slice(0, 2)}/${clean.slice(2)}`);
    } else {
      setExpDate(clean);
    }
  };

  // Quick fill tester card details
  const quickFill = (type: "visa" | "mastercard" | "decline") => {
    setErrorMessage(null);
    if (type === "visa") {
      setCardNumber("4242 4242 4242 4242");
      setExpDate("12/34");
      setCvc("123");
      setCardHolder("Dr. Sarah Khan");
    } else if (type === "mastercard") {
      setCardNumber("5555 5555 5555 4444");
      setExpDate("08/29");
      setCvc("888");
      setCardHolder("Prof. Marcus Weiss");
    } else {
      setCardNumber("4000 0027 6000 3184");
      setExpDate("05/28");
      setCvc("999");
      setCardHolder("Guest Account");
    }
  };

  // Math price calculation for wizard
  const calculateTotalRate = () => {
    if (wizardIsPayingInvoice) {
      const match = invoices.find((inv) => inv.id === wizardInvoiceId);
      return match ? match.amount : 516;
    }
    const cycleDiscount = billingCycle === "annual" ? 0.8 : 1.0;
    if (wizardPlanId === "starter") {
      // Base: $49 (includes 1 seat) + $39 per extra seat
      const extraSeats = Math.max(0, wizardSeatsCount - 1);
      return Math.round((49 + extraSeats * 39) * cycleDiscount);
    } else if (wizardPlanId === "growth") {
      // $129 per seat
      return Math.round((wizardSeatsCount * 129) * cycleDiscount);
    } else {
      // Base: $899 (includes 10 seats) + $79 per extra seat
      const extraSeats = Math.max(0, wizardSeatsCount - 10);
      return Math.round((899 + extraSeats * 79) * cycleDiscount);
    }
  };

  const handleStartCheckout = (planId: "starter" | "growth" | "enterprise") => {
    setWizardIsPayingInvoice(false);
    setWizardPlanId(planId);
    setWizardSeatsCount(planId === "starter" ? 1 : planId === "growth" ? 4 : 10);
    setWizardStep(1);
    setErrorMessage(null);
    setWizardOpen(true);
  };

  const handleStartPayInvoice = (invoiceId: string, amount: number) => {
    setWizardIsPayingInvoice(true);
    setWizardInvoiceId(invoiceId);
    setWizardStep(2); // Skip configuration step for invoices
    setErrorMessage(null);
    setWizardOpen(true);
  };

  const executeStripePayment = () => {
    if (!cardNumber || cardNumber.replace(/\s/g, "").length < 15) {
      setErrorMessage("Please enter a valid card number.");
      return;
    }
    if (!expDate || expDate.length < 4) {
      setErrorMessage("Please enter a valid expiry date (MM/YY).");
      return;
    }
    if (!cvc || cvc.length < 3) {
      setErrorMessage("Please enter a 3-digit CVV.");
      return;
    }

    setProcessing(true);
    setErrorMessage(null);
    setActiveLogIndex(0);

    // Roll compliance telemetry logs
    logIntervalRef.current = setInterval(() => {
      setActiveLogIndex((prev) => {
        if (prev < secureLogs.length - 1) {
          return prev + 1;
        }
        clearInterval(logIntervalRef.current);
        return prev;
      });
    }, 350);

    // Trigger simulation finish
    setTimeout(() => {
      clearInterval(logIntervalRef.current);
      if (cardNumber.startsWith("4000 0027")) {
        setErrorMessage("Your sandbox card was declined. Please try Visa Success card.");
        setProcessing(false);
      } else {
        const tx = `ch_stripe_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        setGeneratedTx(tx);
        setProcessing(false);
        setWizardStep(4);

        // Update parent state
        if (wizardIsPayingInvoice) {
          setInvoices((prev) =>
            prev.map((inv) => (inv.id === wizardInvoiceId ? { ...inv, paid: true } : inv))
          );
        } else {
          setActivePlan(wizardPlanId);
          setActiveSeats(wizardSeatsCount);
          // Add new paid invoice record
          const dateStr = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
          const newInv = {
            id: `INV-${Math.floor(1000 + Math.random() * 9000)}`,
            date: dateStr,
            duration: "Jul 12, 2026 - Aug 12, 2026",
            amount: calculateTotalRate(),
            paid: true,
          };
          setInvoices((prev) => [newInv, ...prev]);
        }
      }
    }, 2400);
  };

  useEffect(() => {
    return () => clearInterval(logIntervalRef.current);
  }, []);

  return (
    <>
      {/* Stripe Checkout Wizard Modal Overlay */}
      {wizardOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-8">
            
            {/* Modal Header */}
            <div className="px-6 py-4.5 border-b border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                  <StripeIcon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-black text-foreground tracking-tight">
                    {wizardIsPayingInvoice ? `Stripe Invoice Checkout: ${wizardInvoiceId}` : `Stripe Subscription Wizard`}
                  </h3>
                  <p className="text-[10.5px] text-muted-foreground">Secure Payment Gateway Service</p>
                </div>
              </div>
              {!processing && (
                <button
                  onClick={() => setWizardOpen(false)}
                  className="h-8 w-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Stepper Progress Bar */}
            {!wizardIsPayingInvoice && wizardStep < 4 && (
              <div className="px-6 pt-4 pb-2 border-b border-border/20 flex items-center justify-between text-[11px] font-mono font-bold text-muted-foreground">
                <div className={`flex items-center gap-1.5 ${wizardStep >= 1 ? "text-emerald-700 dark:text-emerald-450" : ""}`}>
                  <span className="h-5 w-5 rounded-full border border-current flex items-center justify-center text-[10px]">1</span>
                  <span>Seats</span>
                </div>
                <div className="h-px flex-1 bg-border mx-3" />
                <div className={`flex items-center gap-1.5 ${wizardStep >= 2 ? "text-emerald-700 dark:text-emerald-450" : ""}`}>
                  <span className="h-5 w-5 rounded-full border border-current flex items-center justify-center text-[10px]">2</span>
                  <span>Payment</span>
                </div>
                <div className="h-px flex-1 bg-border mx-3" />
                <div className={`flex items-center gap-1.5 ${wizardStep >= 3 ? "text-emerald-700 dark:text-emerald-450" : ""}`}>
                  <span className="h-5 w-5 rounded-full border border-current flex items-center justify-center text-[10px]">3</span>
                  <span>Consent</span>
                </div>
              </div>
            )}

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(100vh-14rem)] space-y-6">

              {/* STEP 1: CONFIGURE SEATS */}
              {wizardStep === 1 && !wizardIsPayingInvoice && (
                <div className="space-y-5">
                  <div className="bg-muted/10 border border-border/30 rounded-2xl p-4.5 flex items-center justify-between">
                    <div>
                      <h4 className="text-[13.5px] font-bold text-foreground">Configure Provider Seats</h4>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Scale the number of doctors, practitioners & nurses.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setWizardSeatsCount(Math.max(1, wizardSeatsCount - 1))}
                        className="h-8 w-8 rounded-lg border border-border/50 hover:bg-muted flex items-center justify-center cursor-pointer transition-colors"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="font-mono text-base font-black text-foreground w-6 text-center">{wizardSeatsCount}</span>
                      <button
                        onClick={() => setWizardSeatsCount(Math.min(20, wizardSeatsCount + 1))}
                        className="h-8 w-8 rounded-lg border border-border/50 hover:bg-muted flex items-center justify-center cursor-pointer transition-colors"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Pricing Ledger */}
                  <div className="rounded-2xl border border-border/40 p-5 space-y-3.5">
                    <h5 className="text-[11px] font-bold text-foreground uppercase tracking-wider font-mono text-muted-foreground">Order Calculation</h5>
                    <div className="space-y-2 text-[12.5px]">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Selected Plan Tier</span>
                        <span className="font-bold text-foreground capitalize">{wizardPlanId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Provider Seats ({wizardSeatsCount})</span>
                        <span className="font-mono text-foreground">${wizardPlanId === "starter" ? "49 base" : `${wizardSeatsCount} × $129`}</span>
                      </div>
                      {wizardPlanId === "starter" && wizardSeatsCount > 1 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Extra Seats ({wizardSeatsCount - 1})</span>
                          <span className="font-mono text-foreground">${(wizardSeatsCount - 1) * 39}</span>
                        </div>
                      )}
                      {billingCycle === "annual" && (
                        <div className="flex justify-between text-emerald-600 font-medium">
                          <span>Annual Committment discount</span>
                          <span>- 20%</span>
                        </div>
                      )}
                      <div className="border-t border-border/30 pt-3 flex justify-between font-black text-foreground">
                        <span>Total Rate due Monthly</span>
                        <span className="font-mono text-emerald-700 dark:text-emerald-450">${calculateTotalRate()} / mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: STRIPE CREDIT CARD FORM WITH 3D PREVIEW */}
              {wizardStep === 2 && (
                <div className="space-y-6">
                  {/* 3D Virtual Credit Card Preview */}
                  <div className="perspective-[1000px] w-full max-w-[340px] h-[190px] mx-auto cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                    <div className={`relative w-full h-full duration-700 transform-style-3d ${isFlipped ? "rotate-y-[180deg]" : ""}`}>
                      
                      {/* Card Front */}
                      <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#115E59] p-5 flex flex-col justify-between text-white backface-hidden shadow-lg border border-[#2DD4BF]/20">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <div className="text-[7.5px] uppercase tracking-widest text-[#2DD4BF] font-black">Clinical Gateway Secure</div>
                            <div className="font-bold text-[13.5px] tracking-tight">AUTONIQUE OS</div>
                          </div>
                          <div className="font-mono font-black italic text-base">VISA</div>
                        </div>
                        <div className="font-mono text-[16px] tracking-widest text-center py-2 font-bold select-all">
                          {cardNumber || "•••• •••• •••• ••••"}
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-[7.5px] uppercase tracking-widest text-[#2DD4BF]">Cardholder</div>
                            <div className="text-[11.5px] font-bold mt-0.5 truncate max-w-[160px]">{cardHolder || "DR. NAME HERE"}</div>
                          </div>
                          <div>
                            <div className="text-[7.5px] uppercase tracking-widest text-[#2DD4BF]">Expires</div>
                            <div className="text-[11.5px] font-mono font-bold mt-0.5">{expDate || "MM/YY"}</div>
                          </div>
                        </div>
                      </div>

                      {/* Card Back */}
                      <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#115E59] to-[#0F172A] p-5 flex flex-col justify-between text-white rotate-y-[180deg] backface-hidden shadow-lg border border-[#2DD4BF]/10">
                        <div className="w-full h-9 bg-black/80 -mx-5 mt-2" />
                        <div className="flex justify-end items-center gap-3">
                          <span className="text-[7.5px] uppercase tracking-widest text-muted-foreground/60">CVC Code</span>
                          <span className="bg-white text-black px-3 py-1 font-mono text-[12px] font-extrabold rounded-md shadow-inner">{cvc || "•••"}</span>
                        </div>
                        <div className="text-[7px] text-muted-foreground leading-normal text-right">
                          HIPAA & PCI-DSS Compliant Secure Encryption Pipeline.
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Express Checkout Shortcuts */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3.5">
                      {/* Apple Pay Button */}
                      <button
                        type="button"
                        onClick={() => alert("Apple Pay integration triggered successfully.")}
                        className="h-10.5 rounded-xl bg-black text-white hover:bg-black/90 active:scale-[0.99] flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer font-bold"
                      >
                        <span className="font-extrabold text-[15px] tracking-tight"> Pay</span>
                      </button>

                      {/* Link Button */}
                      <button
                        type="button"
                        onClick={() => {
                          quickFill("visa");
                          alert("Link Auto-Fill completed using secure test card details.");
                        }}
                        className="h-10.5 rounded-xl bg-[#00D665] text-emerald-950 hover:bg-[#00c55d] active:scale-[0.99] flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
                      >
                        <span className="h-5 w-5 rounded-full bg-[#0F2F1D] text-[#00D665] flex items-center justify-center font-bold text-[10px]">➜</span>
                        <span className="font-extrabold text-[12px] tracking-wider uppercase bg-[#0F2F1D] text-white px-1.5 py-0.5 rounded">Link</span>
                        <span className="font-extrabold text-[12.5px] font-mono">4242</span>
                      </button>
                    </div>

                    {/* OR Divider */}
                    <div className="flex items-center my-4">
                      <div className="flex-grow border-t border-border/40" />
                      <span className="px-3 text-[10.5px] font-bold text-muted-foreground uppercase font-mono tracking-widest">OR</span>
                      <div className="flex-grow border-t border-border/40" />
                    </div>
                  </div>

                  {/* Contact Information (Email) */}
                  <div className="space-y-1.5">
                    <label className="text-[12.5px] font-bold text-foreground block">Contact information</label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="h-9.5 w-full rounded-xl border border-border/60 bg-background px-3.5 text-[12.5px] focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>

                  {/* Payment Method Details */}
                  <div className="space-y-4 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[12.5px] font-bold text-foreground flex items-center gap-1.5">
                        <StripeIcon className="h-4.5 w-4.5 text-[#0D9488]" /> Payment method
                      </span>
                      <span className="text-[9.5px] font-mono font-bold text-muted-foreground uppercase tracking-widest">Stripe Secure</span>
                    </div>

                    {/* Merged Card Details Block */}
                    <div className="rounded-2xl border border-border/50 bg-background overflow-hidden focus-within:ring-2 focus-within:ring-[#0D9488]/40 transition-all shadow-2xs">
                      {/* Card Number Row */}
                      <div className="relative border-b border-border/30 px-3.5 py-2.5 flex items-center justify-between">
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => handleCardNumberChange(e.target.value)}
                          required
                          placeholder="Card number"
                          className="bg-transparent w-full focus:outline-none font-mono text-[13px] text-foreground placeholder:text-muted-foreground"
                        />
                        {/* Dynamic brand indicator logo */}
                        <div className="flex items-center gap-1.5 shrink-0 select-none">
                          <span className={`px-1.5 py-0.2 rounded border text-[8px] font-black font-mono tracking-tight transition-all ${
                            cardNumber.startsWith("4") 
                              ? "bg-[#0D9488] text-white border-transparent scale-105" 
                              : "bg-muted text-muted-foreground border-border/40 opacity-40"
                          }`}>
                            VISA
                          </span>
                          <span className={`px-1.5 py-0.2 rounded border text-[8px] font-black font-mono tracking-tight transition-all ${
                            cardNumber.startsWith("5") 
                              ? "bg-purple-650 text-white border-transparent scale-105" 
                              : "bg-muted text-muted-foreground border-border/40 opacity-40"
                          }`}>
                            MC
                          </span>
                          <span className={`px-1.5 py-0.2 rounded border text-[8px] font-black font-mono tracking-tight transition-all ${
                            cardNumber.startsWith("3") 
                              ? "bg-blue-650 text-white border-transparent scale-105" 
                              : "bg-muted text-muted-foreground border-border/40 opacity-40"
                          }`}>
                            AMEX
                          </span>
                        </div>
                      </div>

                      {/* Expiry & CVC Row */}
                      <div className="grid grid-cols-2 divide-x divide-border/30">
                        <div className="px-3.5 py-2.5">
                          <input
                            type="text"
                            value={expDate}
                            onChange={(e) => handleExpiryChange(e.target.value)}
                            required
                            placeholder="MM / YY"
                            className="bg-transparent w-full focus:outline-none font-mono text-[13px] text-foreground placeholder:text-muted-foreground"
                          />
                        </div>
                        <div className="px-3.5 py-2.5 flex items-center justify-between">
                          <input
                            type="text"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                            onFocus={() => setIsFlipped(true)}
                            onBlur={() => setIsFlipped(false)}
                            required
                            placeholder="CVC"
                            className="bg-transparent w-full focus:outline-none font-mono text-[13px] text-foreground placeholder:text-muted-foreground"
                          />
                          <StripeIcon className="h-4 w-4 text-muted-foreground/60 shrink-0" />
                        </div>
                      </div>
                    </div>

                    {/* Cardholder Name */}
                    <div className="space-y-1.5">
                      <label className="text-[11.5px] font-bold text-foreground">Cardholder name</label>
                      <input
                        type="text"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        required
                        placeholder="Full name on card"
                        className="h-9.5 w-full rounded-xl border border-border/60 bg-background px-3.5 text-[12.5px] focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>

                    {/* Billing Address Container */}
                    <div className="space-y-1.5">
                      <label className="text-[11.5px] font-bold text-foreground">Billing address</label>
                      <div className="rounded-2xl border border-border/50 bg-background overflow-hidden focus-within:ring-2 focus-within:ring-[#0D9488]/40 transition-all shadow-2xs">
                        {/* Country Selector */}
                        <div className="relative border-b border-border/30 px-3.5 py-2.5">
                          <select className="bg-transparent w-full text-[12.5px] text-foreground focus:outline-none cursor-pointer">
                            <option>India</option>
                            <option>Germany</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>Singapore</option>
                          </select>
                        </div>
                        {/* Address input */}
                        <div className="px-3.5 py-2.5">
                          <input
                            type="text"
                            required
                            placeholder="Address"
                            className="bg-transparent w-full focus:outline-none text-[12.5px] text-foreground placeholder:text-muted-foreground"
                          />
                        </div>
                      </div>
                      <button type="button" onClick={() => alert("Address search activated.")} className="text-[11px] font-bold text-emerald-805 dark:text-emerald-350 hover:underline cursor-pointer">
                        Enter address manually
                      </button>
                    </div>

                    {/* Save Information Checkbox */}
                    <label className="flex items-center gap-2.5 pt-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-4.5 w-4.5 rounded border-border text-emerald-600 focus:ring-emerald-500/20"
                      />
                      <span className="text-[11.5px] text-foreground font-medium">Save my information for faster checkout</span>
                    </label>
                  </div>

                  {/* Sandbox Caution Note */}
                  <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-4.5 space-y-1">
                    <div className="text-[11.5px] font-bold text-amber-800 dark:text-amber-350 flex items-center gap-1.5">
                      <AlertCircle className="h-4.5 w-4.5 text-amber-600 shrink-0" />
                      <span>Sandbox Gateway Verification Caution</span>
                    </div>
                    <p className="text-[10.5px] text-amber-700 dark:text-amber-400 leading-normal">
                      Please manually type Stripe's standard test credentials to authorize: Card number <span className="font-mono font-bold bg-amber-500/10 px-1 py-0.5 rounded text-foreground">4242 4242 4242 4242</span>, Expiry <span className="font-mono font-bold bg-amber-500/10 px-1 py-0.5 rounded text-foreground">12/34</span>, and CVC <span className="font-mono font-bold bg-amber-500/10 px-1 py-0.5 rounded text-foreground">123</span>. Any other inputs will trigger a sandbox transaction decline.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 3: HIPAA COMPLIANCE LICENSE & CONSENT */}
              {wizardStep === 3 && (
                <div className="space-y-5">
                  <div className="rounded-2xl border border-border/40 p-5 space-y-4">
                    <h4 className="text-[13px] font-extrabold text-foreground flex items-center gap-2">
                      <Shield className="h-4.5 w-4.5 text-emerald-700" />
                      <span>HIPAA Compliance Ledger Authorization</span>
                    </h4>
                    <p className="text-[11.5px] text-muted-foreground leading-relaxed">
                      All clinical accounts on Autonique require official credentials mapping to generate end-to-end encrypted databases. Please input your registration number.
                    </p>

                    <div className="space-y-1.5 max-w-sm">
                      <label className="text-[11.5px] font-bold text-foreground">Medical License Registration ID</label>
                      <input
                        type="text"
                        value={licenseId}
                        onChange={(e) => setLicenseId(e.target.value)}
                        className="h-9 w-full rounded-xl border border-border/60 bg-background px-3 text-[12px] font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="MD-84920"
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-3 p-3 bg-muted/10 border border-border/30 rounded-2xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-border text-emerald-600 focus:ring-emerald-500/30"
                    />
                    <span className="text-[11.5px] text-foreground leading-normal">
                      I authorize Autonique to synchronize billing profiles and HIPAA security certificates with Stripe. I verify that I am the licensed practitioner owner of this workspace.
                    </span>
                  </label>
                </div>
              )}

              {/* STEP 4: SUCCESS RECEIPT SCREEN */}
              {wizardStep === 4 && (
                <div className="py-6 text-center space-y-6">
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md animate-pulse" />
                    <div className="relative h-15 w-15 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#0D9488] dark:text-[#2DD4BF] flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="h-9 w-9 animate-bounce text-emerald-500" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-white flex items-center justify-center gap-1.5">
                      <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
                      <span>Payment Finalized!</span>
                    </h3>
                    <p className="text-[12.5px] text-[#475569] dark:text-[#A0B0AD] font-medium leading-relaxed max-w-sm mx-auto">
                      Stripe transaction was successfully authorized. Your subscription is updated and active.
                    </p>
                  </div>

                  {/* Receipt Summary */}
                  <div className="mx-auto max-w-sm rounded-2xl border border-[#0D9488]/20 bg-[#F8FFFE] dark:bg-[#07211E] p-5 text-left font-mono text-[11px] space-y-3.5 shadow-xs">
                    <div className="flex justify-between border-b border-[#0D9488]/10 pb-2.5">
                      <span className="text-[#64748B] dark:text-[#809995]">Transaction ID</span>
                      <span className="font-bold text-[#0F172A] dark:text-white truncate max-w-[180px]">{generatedTx}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#0D9488]/10 pb-2.5">
                      <span className="text-[#64748B] dark:text-[#809995]">Reference Details</span>
                      <span className="font-bold text-[#0F172A] dark:text-white">
                        {wizardIsPayingInvoice ? `Paid ${wizardInvoiceId}` : `Autonique ${wizardPlanId.toUpperCase()} Plan`}
                      </span>
                    </div>
                    {!wizardIsPayingInvoice && (
                      <div className="flex justify-between border-b border-[#0D9488]/10 pb-2.5">
                        <span className="text-[#64748B] dark:text-[#809995]">Seats Allocated</span>
                        <span className="font-bold text-[#0F172A] dark:text-white">{wizardSeatsCount} Seats</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-1 font-bold text-[12px] text-[#0F766E] dark:text-[#2DD4BF]">
                      <span className="text-[#64748B] dark:text-[#809995]">Total Paid</span>
                      <span>${calculateTotalRate().toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-3">
                    <Button variant="outline" size="sm" onClick={() => alert(`Receipt PDF saved: ${generatedTx}`)}>
                      <Download className="h-3.5 w-3.5" />
                      <span>Download Receipt</span>
                    </Button>
                    <Button size="sm" onClick={() => setWizardOpen(false)}>
                      <span>Done</span>
                    </Button>
                  </div>
                </div>
              )}

              {/* Secure Handshake Diagnostic Loader console */}
              {processing && (
                <div className="bg-black/90 dark:bg-black/95 rounded-2xl p-5 font-mono text-[10.5px] space-y-2 border border-border/20 text-emerald-400">
                  <div className="flex items-center gap-2 text-white">
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    <span>Executing Secure Stripe Authorization Pipeline</span>
                  </div>
                  <div className="space-y-1.5 pt-3 text-[10px]">
                    {secureLogs.slice(0, activeLogIndex + 1).map((log, index) => (
                      <div key={log} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✔</span>
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Notification Alert */}
              {errorMessage && (
                <div className="rounded-2xl border border-rose-500/25 bg-rose-500/5 p-4 flex items-start gap-3">
                  <AlertCircle className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="text-[12px] text-rose-700 dark:text-rose-400 font-medium">{errorMessage}</div>
                </div>
              )}

            </div>

            {/* Modal Footer Controls */}
            {wizardStep < 4 && !processing && (
              <div className="px-6 py-4 border-t border-border/40 bg-muted/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono text-muted-foreground block">Workspace Due</span>
                  <span className="text-[13px] font-black text-emerald-700 dark:text-emerald-450 block mt-0.5">${calculateTotalRate()}</span>
                </div>
                <div className="flex gap-2">
                  {wizardStep > 1 && !wizardIsPayingInvoice && (
                    <Button variant="outline" size="sm" onClick={() => setWizardStep((prev) => (prev - 1) as any)}>
                      Back
                    </Button>
                  )}
                  {wizardStep === 3 || wizardIsPayingInvoice ? (
                    <Button size="sm" onClick={executeStripePayment} disabled={wizardStep === 3 && !consentChecked}>
                      <StripeIcon className="h-3.5 w-3.5 mr-1" /> Pay Now
                    </Button>
                  ) : (
                    <Button size="sm" onClick={() => setWizardStep((prev) => (prev + 1) as any)}>
                      Next Step <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      <PageHeader
        title={
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            Clinic <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Panel</span>
          </span>
        }
        description="Manage clinic platform subscriptions, payment methods, billing statements, and secure Stripe checkout."
        actions={
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11.5px] text-muted-foreground font-medium hidden sm:inline">Sunday, June 22, 2026</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-400 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Gateway Online
            </span>
          </div>
        }
      />

      <div className="px-4 py-6 sm:px-6 space-y-6">
        {/* Active Plan Banner */}
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/8 via-card to-card p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-lg font-black text-foreground tracking-tight">
                  {activePlan === "starter" ? "Starter Plan" : activePlan === "growth" ? "Growth Plan" : "Enterprise Suite"}
                </span>
                <Badge tone="success">Active</Badge>
                <Badge tone="info">Stripe Secured</Badge>
              </div>
              <p className="text-[12.5px] text-muted-foreground leading-normal">
                {activePlan === "starter"
                  ? `$49/month · Basic sole clinic dashboard`
                  : activePlan === "growth"
                  ? `$129/provider · ${activeSeats} Active Providers · $${activeSeats * 129}/month total`
                  : `$899/month · Enterprise Hospital Suite`}
                {" · "} Renews <span className="font-semibold text-foreground">August 12, 2026</span>
              </p>
            </div>
            <button
              onClick={() => handleStartCheckout(activePlan)}
              className="shrink-0 h-10.5 px-4.5 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:scale-[1.01] active:scale-[0.99] text-white text-[12.5px] font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer shadow-[#0D9488]/10"
            >
              <StripeIcon className="h-4 w-4" />
              <span>Modify / Pay Sub via Stripe</span>
            </button>
          </div>
        </div>

        {/* Subscription Tiers Section */}
        <div className="rounded-3xl border border-border/50 bg-card shadow-xs overflow-hidden">
          <div className="px-6 py-4 bg-muted/20 border-b border-border/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">Clinic Subscription Plans</h3>
              <p className="text-[11.5px] text-muted-foreground mt-0.5">Scale or modify your clinic workspace features instantly.</p>
            </div>
            {/* Monthly / Annual Cycle Toggle */}
            <div className="inline-flex items-center gap-1 rounded-xl bg-muted/60 p-1 border border-border/30">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-3.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  billingCycle === "monthly"
                    ? "bg-white dark:bg-[#071F1D] text-emerald-800 dark:text-[#2DD4BF] shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`px-3.5 py-1 rounded-lg text-[11px] font-bold transition-all relative flex items-center gap-1 cursor-pointer ${
                  billingCycle === "annual"
                    ? "bg-white dark:bg-[#071F1D] text-emerald-800 dark:text-[#2DD4BF] shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>Annual</span>
                <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 px-1 py-0.2 rounded text-[8px] font-black uppercase">
                  -20%
                </span>
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  id: "starter",
                  name: "Starter",
                  price: billingCycle === "annual" ? 39 : 49,
                  desc: "For single practitioner clinics starting out.",
                  seats: "1 Provider Seat Included",
                  features: ["HIPAA-compliant Charting", "Basic Patient Scheduler", "Standard Prescriptions"],
                },
                {
                  id: "growth",
                  name: "Growth",
                  price: billingCycle === "annual" ? 99 : 129,
                  desc: "For expanding multi-doctor practices and centers.",
                  seats: "$129/provider/mo billing",
                  features: ["Unlimited Patient Records", "WhatsApp automated reminders", "AI Voice clinical notes", "Multi-Campus configuration"],
                },
                {
                  id: "enterprise",
                  name: "Enterprise",
                  price: billingCycle === "annual" ? 719 : 899,
                  desc: "For multi-campus medical hospital groups.",
                  seats: "Unlimited Provider Seats",
                  features: ["Dedicated Database Isolation", "Custom EHR Developer API", "Dedicated SLA Manager", "SSO/SAML Integration"],
                },
              ].map((tier) => {
                const isCurrent = activePlan === tier.id;
                return (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-5 border transition-all flex flex-col justify-between relative bg-background ${
                      isCurrent
                        ? "border-emerald-500 bg-gradient-to-br from-emerald-500/5 to-card shadow-sm"
                        : "border-border/60 hover:border-emerald-500/30 hover:shadow-xs"
                    }`}
                  >
                    {isCurrent && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold font-mono text-[8px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        Current Active Plan
                      </div>
                    )}
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[13.5px] font-bold text-foreground">{tier.name}</span>
                        {tier.id === "growth" && !isCurrent && (
                          <span className="text-[8.5px] font-black uppercase text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/20">Popular</span>
                        )}
                      </div>
                      <div className="font-display text-[22px] font-black tracking-tight text-foreground">
                        ${tier.price} <span className="text-[11px] text-muted-foreground font-mono font-normal">/mo</span>
                      </div>
                      <p className="text-[11.5px] text-muted-foreground leading-normal">{tier.desc}</p>
                      
                      <div className="border-t border-border/20 pt-3">
                        <div className="text-[10px] font-mono text-emerald-700 dark:text-emerald-450 font-bold mb-2 uppercase tracking-wide">
                          {tier.seats}
                        </div>
                        <ul className="space-y-1.5 text-[11.5px] text-muted-foreground">
                          {tier.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-1.5">
                              <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => handleStartCheckout(tier.id as any)}
                      className={`mt-6 w-full h-9.5 rounded-xl text-[12px] font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-98"
                      }`}
                    >
                      <StripeIcon className="h-3.5 w-3.5" />
                      <span>{isCurrent ? "Modify Subscription" : `Subscribe $${tier.price}/mo`}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Payment Method Details */}
        <div className="rounded-3xl border border-border/50 bg-card shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-muted/20 border-b border-border/40">
            <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">Active Payment Method</h3>
          </div>
          <Field label="Credit / Debit Card on file" hint="Automatically charged on your monthly renewal date.">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 bg-background/50 border border-border/40 p-3 rounded-2xl w-full max-w-sm relative">
                <div className="grid h-8.5 w-13 place-items-center rounded-xl bg-emerald-950 font-mono text-[9px] font-black text-white border border-white/10 shadow-xs">
                  VISA
                </div>
                <div>
                  <div className="text-[12.5px] font-mono font-bold text-foreground">•••• •••• •••• 4242</div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-0.5">Expires 12 / 34 · Verification: VISA TEST</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="cursor-pointer" onClick={() => handleStartCheckout(activePlan)}>
                <StripeIcon className="h-3.5 w-3.5 text-emerald-650" />
                <span>Update via Stripe</span>
              </Button>
            </div>
          </Field>
          <Field label="Billing email address" last>
            <Input defaultValue="billing@meridian.io" />
          </Field>
        </div>

        {/* Invoices History Table */}
        <div className="rounded-3xl border border-border/50 bg-card shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-muted/20 border-b border-border/40 flex items-center justify-between">
            <div>
              <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">Invoice History & Ledger</h3>
              <p className="text-[11.5px] text-muted-foreground mt-0.5">Clinical platform subscription receipts processed by Stripe.</p>
            </div>
            <Badge tone="success" className="font-mono">Stripe SECURE</Badge>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px] text-left">
              <thead className="border-b border-border/40 bg-muted/10 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3.5 font-bold">Invoice ID</th>
                  <th className="px-6 py-3.5 font-bold">Billing Period</th>
                  <th className="px-6 py-3.5 font-bold">Date Issued</th>
                  <th className="px-6 py-3.5 text-right font-bold">Amount Due</th>
                  <th className="px-6 py-3.5 text-right font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-muted/15 transition-colors">
                    <td className="px-6 py-3.5 font-mono text-[12.5px] font-semibold text-foreground">{inv.id}</td>
                    <td className="px-6 py-3.5 font-mono text-[11px] text-muted-foreground">{inv.duration}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{inv.date}</td>
                    <td className="px-6 py-3.5 text-right font-mono font-bold text-foreground">${inv.amount.toFixed(2)}</td>
                    <td className="px-6 py-3.5 text-right">
                      {inv.paid ? (
                        <Badge tone="success">Paid</Badge>
                      ) : (
                        <button
                          onClick={() => handleStartPayInvoice(inv.id, inv.amount)}
                          className="h-8 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10.5px] font-bold inline-flex items-center gap-1 shadow-sm cursor-pointer transition-all active:scale-98"
                        >
                          <StripeIcon className="h-3 w-3" />
                          <span>Pay Invoice</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}
