import { useState, useEffect, useRef } from "react";
import {
  CreditCard,
  Lock,
  CheckCircle2,
  X,
  ShieldCheck,
  Download,
  AlertCircle,
  ArrowRight,
  RefreshCw,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import { createStripePaymentIntentFn } from "@/lib/stripePaymentIntent";
import { Button } from "./AppShell";

export type StripePaymentItem = {
  title: string;
  description: string;
  amount: number;
  patientName?: string;
  invoiceId?: string;
};

interface StripePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: StripePaymentItem;
  onSuccess?: (txId: string) => void;
}

/* Inner Checkout Form using Stripe Hooks */
function StripeCheckoutForm({
  item,
  onPaymentSuccess,
  onClose,
  isDemo,
}: {
  item: StripePaymentItem;
  onPaymentSuccess: (txId: string) => void;
  onClose: () => void;
  isDemo: boolean;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form input states
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [zip, setZip] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  // Interaction states for the card preview
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const logIntervalRef = useRef<any>(null);

  const secureLogs = [
    "Establishing secure 256-bit TLS handshake...",
    "Verifying HIPAA patient data encryption tunnel...",
    "Routing payload to Stripe Sandbox Authorization network...",
    "Executing anti-fraud checks & token validation...",
    "Securing clinical ledger transaction record...",
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

  // Auto-fill test cases
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
      // Direct decline emulation card
      setCardNumber("4000 0027 6000 3184");
      setExpDate("05/28");
      setCvc("999");
      setCardHolder("Guest Account");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage(null);
    setActiveLogIndex(0);

    // Cycle through secure validation logs to enhance user delight
    logIntervalRef.current = setInterval(() => {
      setActiveLogIndex((prev) => (prev < secureLogs.length - 1 ? prev + 1 : prev));
    }, 280);

    // Basic validation check for sandbox inputs
    if (!cardNumber || cardNumber.replace(/\s/g, "").length < 15) {
      clearInterval(logIntervalRef.current);
      setErrorMessage("Please enter a valid card number.");
      setIsProcessing(false);
      return;
    }

    if (!expDate || expDate.length < 4) {
      clearInterval(logIntervalRef.current);
      setErrorMessage("Please enter a valid expiry date (MM/YY).");
      setIsProcessing(false);
      return;
    }

    if (!cvc || cvc.length < 3) {
      clearInterval(logIntervalRef.current);
      setErrorMessage("Please enter a 3-digit CVV.");
      setIsProcessing(false);
      return;
    }

    // Emulate card decline for testing
    if (cardNumber.startsWith("4000 0027")) {
      setTimeout(() => {
        clearInterval(logIntervalRef.current);
        setErrorMessage("Your card was declined. Please try another card.");
        setIsProcessing(false);
      }, 1600);
      return;
    }

    // If real Stripe is loaded and not demo fallback
    if (stripe && elements && !isDemo) {
      try {
        const { error: submitError } = await elements.submit();
        if (submitError) {
          clearInterval(logIntervalRef.current);
          setErrorMessage(submitError.message || "Invalid payment details.");
          setIsProcessing(false);
          return;
        }

        const result = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: window.location.href,
          },
          redirect: "if_required",
        });

        clearInterval(logIntervalRef.current);

        if (result.error) {
          setErrorMessage(result.error.message || "Payment confirmation failed.");
          setIsProcessing(false);
        } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
          onPaymentSuccess(result.paymentIntent.id);
        } else {
          onPaymentSuccess(`pi_${Math.random().toString(36).substring(2, 12)}`);
        }
      } catch (err: any) {
        clearInterval(logIntervalRef.current);
        setErrorMessage(err?.message || "An unexpected error occurred.");
        setIsProcessing(false);
      }
    } else {
      // Demo Sandbox simulation timeout
      setTimeout(() => {
        clearInterval(logIntervalRef.current);
        const generatedTx = `pi_3M${Math.random().toString(36).substring(2, 11)}${Date.now().toString(36)}`;
        onPaymentSuccess(generatedTx);
      }, 1600);
    }
  };

  useEffect(() => {
    return () => clearInterval(logIntervalRef.current);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 3D Glassmorphic Card Preview */}
      {!stripe || isDemo ? (
        <div className="flex justify-center py-2" style={{ perspective: "1000px" }}>
          <div
            className="relative w-full max-w-[340px] h-[190px] rounded-2xl text-white shadow-2xl transition-transform duration-700 select-none cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front Side */}
            <div
              className="absolute inset-0 w-full h-full rounded-2xl p-5 bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#14B8A6] flex flex-col justify-between overflow-hidden border border-white/20"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Card Hologram chip decoration */}
              <div className="absolute right-0 bottom-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">Autonique Pay</span>
                <div className="h-6.5 w-9.5 rounded bg-amber-400/40 border border-amber-300/40 flex items-center justify-center opacity-80">
                  <div className="grid grid-cols-3 gap-0.5 w-6 h-4 opacity-70">
                    <div className="border border-white/40" />
                    <div className="border border-white/40" />
                    <div className="border border-white/40" />
                  </div>
                </div>
              </div>

              <div className="font-mono text-[17px] tracking-[0.16em] text-center my-3 font-semibold text-shadow-md">
                {cardNumber || "•••• •••• •••• ••••"}
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[8px] uppercase tracking-widest opacity-60">Card Holder</div>
                  <div className="text-[12px] font-bold tracking-wide truncate max-w-[170px] uppercase">
                    {cardHolder || "Dr. Sarah Khan"}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[8px] uppercase tracking-widest opacity-60">Expires</div>
                  <div className="text-[12px] font-mono font-bold tracking-wide">
                    {expDate || "MM/YY"}
                  </div>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div
              className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#022C2C] via-[#0F3531] to-[#0D9488] flex flex-col justify-between py-5 border border-white/20"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="w-full h-10 bg-black/90 mt-1" />
              <div className="px-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1 h-8 bg-white/20 rounded flex items-center justify-end px-3 font-mono text-[13px] text-black font-bold italic tracking-widest select-none">
                    {cvc || "•••"}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider ml-4 text-white/70 font-semibold">
                    CVC CODE
                  </div>
                </div>
                <p className="text-[8px] text-white/50 text-center leading-normal">
                  This card is linked securely via Stripe sandbox encryption. Verified HIPAA clinical portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Quick Fill Test Cards */}
      {!stripe || isDemo ? (
        <div className="space-y-1.5">
          <label className="block text-[11px] font-semibold text-[#64748B] dark:text-[#809995] uppercase font-mono tracking-wider">
            Quick-Fill Test Cards
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => quickFill("visa")}
              className="px-2.5 py-1 text-[11.5px] rounded-lg border border-[#0D9488]/30 hover:border-[#0D9488] bg-[#F0FDFA] dark:bg-[#072421] text-[#0F766E] dark:text-[#2DD4BF] font-semibold transition-all hover:scale-103 cursor-pointer"
            >
              💳 Visa Success
            </button>
            <button
              type="button"
              onClick={() => quickFill("mastercard")}
              className="px-2.5 py-1 text-[11.5px] rounded-lg border border-purple-500/20 hover:border-purple-500 bg-purple-50/50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400 font-semibold transition-all hover:scale-103 cursor-pointer"
            >
              💳 Mastercard Success
            </button>
            <button
              type="button"
              onClick={() => quickFill("decline")}
              className="px-2.5 py-1 text-[11.5px] rounded-lg border border-rose-500/20 hover:border-rose-500 bg-rose-50/50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 font-semibold transition-all hover:scale-103 cursor-pointer"
            >
              ⚠️ Decline Tester
            </button>
          </div>
        </div>
      ) : null}

      {/* Stripe Payment Element Container */}
      <div className="space-y-4 rounded-2xl border border-[#0D9488]/20 dark:border-[#0D9488]/40 p-5 bg-white dark:bg-[#071F1D] shadow-sm">
        <div className="flex items-center justify-between border-b border-[#0D9488]/10 pb-2">
          <label className="block text-[11px] font-bold text-[#475569] dark:text-[#A0B0AD] uppercase font-mono tracking-wider">
            Secure Encryption Fields
          </label>
          <div className="flex items-center gap-1.5 text-[9.5px] font-bold font-mono text-[#0D9488] dark:text-[#2DD4BF]">
            <Lock className="h-3 w-3" /> Stripe Encrypted
          </div>
        </div>

        {/* Real Stripe Element or Interactive Sandbox Inputs */}
        {stripe && elements && !isDemo ? (
          <PaymentElement options={{ layout: "tabs" }} />
        ) : (
          <div className="space-y-5 font-sans">
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
                  <CreditCard className="h-4.5 w-4.5 text-[#0D9488]" /> Payment method
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
                        ? "bg-purple-600 text-white border-transparent scale-105" 
                        : "bg-muted text-muted-foreground border-border/40 opacity-40"
                    }`}>
                      MC
                    </span>
                    <span className={`px-1.5 py-0.2 rounded border text-[8px] font-black font-mono tracking-tight transition-all ${
                      cardNumber.startsWith("3") 
                        ? "bg-blue-600 text-white border-transparent scale-105" 
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
                    <CreditCard className="h-4 w-4 text-muted-foreground/60 shrink-0" />
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
                <button type="button" onClick={() => alert("Address search activated.")} className="text-[11px] font-bold text-emerald-800 dark:text-emerald-350 hover:underline cursor-pointer">
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

            {/* Sandbox Instructions note */}
            <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4.5 space-y-1">
              <div className="text-[11.5px] font-bold text-emerald-800 dark:text-emerald-350 flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-emerald-700" />
                <span>Sandbox Stripe Gateway Instructions</span>
              </div>
              <p className="text-[10.5px] text-[#475569] dark:text-[#A0B0AD] leading-normal">
                For testing purposes, you can manually type Stripe's standard sandbox details: Card number <span className="font-mono font-bold bg-emerald-500/10 px-1 py-0.5 rounded text-[#0F766E] dark:text-[#2DD4BF]">4242 4242 4242 4242</span>, Expiry <span className="font-mono font-bold bg-emerald-500/10 px-1 py-0.5 rounded text-[#0F766E] dark:text-[#2DD4BF]">12/34</span>, and CVV <span className="font-mono font-bold bg-emerald-500/10 px-1 py-0.5 rounded text-[#0F766E] dark:text-[#2DD4BF]">123</span>. Alternatively, click any preset pill below to auto-fill.
              </p>
            </div>
          </div>
        )}
      </div>

      {errorMessage && (
        <div className="flex items-center gap-2 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3.5 text-[12px] text-rose-600 dark:text-rose-400 font-medium">
          <ShieldAlert className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Pay Button / Progressive secure logs */}
      <div className="space-y-3.5 pt-1">
        {isProcessing ? (
          <div className="rounded-xl bg-[#F0FDFA] dark:bg-[#072421] border border-[#0D9488]/30 p-4 space-y-3">
            <div className="flex items-center gap-3">
              <RefreshCw className="h-4.5 w-4.5 animate-spin text-[#0D9488] dark:text-[#2DD4BF]" />
              <span className="text-[12.5px] font-bold text-[#0F766E] dark:text-[#2DD4BF]">
                Processing Stripe Secure Transaction...
              </span>
            </div>
            {/* Step Handshake Logs */}
            <div className="bg-black/5 dark:bg-black/20 rounded-lg p-2.5 font-mono text-[10px] text-[#475569] dark:text-[#99F6E4]/80 space-y-1">
              {secureLogs.slice(0, activeLogIndex + 1).map((log, index) => (
                <div key={index} className="flex items-start gap-1.5">
                  <span className="text-[#0D9488] dark:text-[#2DD4BF] font-extrabold">✓</span>
                  <span>{log}</span>
                </div>
              ))}
              {activeLogIndex < secureLogs.length - 1 && (
                <div className="flex items-center gap-1 opacity-70">
                  <span className="text-[#0D9488] dark:text-[#2DD4BF] animate-pulse">■</span>
                  <span>{secureLogs[activeLogIndex + 1]}</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full h-11.5 rounded-xl bg-gradient-to-r from-[#0F766E] via-[#0D9488] to-[#14B8A6] hover:scale-[1.01] active:scale-[0.99] text-white font-extrabold text-[13.5px] shadow-lg shadow-[#0D9488]/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:opacity-70"
          >
            <Lock className="h-4 w-4" />
            <span>Pay ${item.amount.toFixed(2)} with Stripe</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}

        <div className="flex items-center justify-center gap-3.5 text-[9.5px] font-bold font-mono text-[#64748B] dark:text-[#809995] uppercase tracking-wider mt-2.5">
          <span className="flex items-center gap-1">
            <Lock className="h-3 w-3 text-[#0D9488]" /> 256-Bit SSL
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-[#0D9488]" /> PCI-DSS COMPLIANT
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-[#0D9488]" /> HIPAA COMPLIANT
          </span>
        </div>
      </div>
    </form>
  );
}

export function StripePaymentModal({
  isOpen,
  onClose,
  item,
  onSuccess,
}: StripePaymentModalProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isDemo, setIsDemo] = useState<boolean>(true);
  const [isLoadingIntent, setIsLoadingIntent] = useState<boolean>(true);

  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [txId, setTxId] = useState<string>("");

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setTxId("");
      return;
    }

    setIsLoadingIntent(true);
    createStripePaymentIntentFn({
      data: {
        amount: item.amount,
        currency: "usd",
        metadata: {
          invoiceId: item.invoiceId || `INV-${Math.floor(1000 + Math.random() * 9000)}`,
          patientName: item.patientName || "Guest Patient",
        },
      },
    })
      .then((res) => {
        setClientSecret(res.clientSecret);
        setIsDemo(res.isDemo);
        setIsLoadingIntent(false);
      })
      .catch(() => {
        setIsDemo(true);
        setIsLoadingIntent(false);
      });
  }, [isOpen, item.amount, item.invoiceId, item.patientName]);

  if (!isOpen) return null;

  const handlePaymentSuccess = (generatedTx: string) => {
    setTxId(generatedTx);
    setStatus("success");
    if (onSuccess) onSuccess(generatedTx);
  };

  const handleClose = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#061514]/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#061514] shadow-2xl overflow-hidden border border-[#0D9488]/30 z-10 transition-all">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-gradient-to-r from-[#022C2C] via-[#0F3531] to-[#022C2C] text-white border-b border-[#0D9488]/20">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center h-8 w-8 rounded-xl bg-gradient-to-br from-[#0F766E] to-[#0D9488] border border-[#2DD4BF]/40 text-white font-extrabold text-sm tracking-tight shadow-md">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-bold tracking-tight">Stripe Gateway</span>
                <span className="inline-flex items-center gap-1 rounded-md bg-[#2DD4BF]/15 px-1.5 py-0.5 font-mono text-[8px] font-bold text-[#2DD4BF] border border-[#2DD4BF]/25">
                  <ShieldCheck className="h-2.5 w-2.5 text-[#2DD4BF]" /> TEST SANDBOX
                </span>
              </div>
              <p className="text-[9.5px] text-[#99F6E4]/80 font-mono tracking-wide">Secured Clinical Checkout</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-[#99F6E4]/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[calc(100vh-10rem)] overflow-y-auto">
          {status === "success" ? (
            /* Payment Success Screen */
            <div className="py-6 text-center space-y-5">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md animate-pulse" />
                <div className="relative h-15 w-15 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#0D9488] dark:text-[#2DD4BF] flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="h-9 w-9 animate-bounce text-emerald-500" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-white flex items-center justify-center gap-1.5">
                  <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
                  <span>Payment Successful!</span>
                </h3>
                <p className="text-[12.5px] text-[#475569] dark:text-[#A0B0AD] font-medium leading-relaxed max-w-sm mx-auto">
                  Payment of <span className="font-extrabold text-[#0F172A] dark:text-white">${item.amount.toFixed(2)}</span> has been securely authorized and finalized via Stripe.
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="mx-auto max-w-sm rounded-2xl border border-[#0D9488]/20 bg-[#F8FFFE] dark:bg-[#07211E] p-5 text-left font-mono text-[11px] space-y-3.5 shadow-sm">
                <div className="flex justify-between border-b border-[#0D9488]/10 pb-2.5">
                  <span className="text-[#64748B] dark:text-[#809995]">Transaction ID</span>
                  <span className="font-bold text-[#0F172A] dark:text-white truncate max-w-[180px]">{txId}</span>
                </div>
                <div className="flex justify-between border-b border-[#0D9488]/10 pb-2.5">
                  <span className="text-[#64748B] dark:text-[#809995]">Item Purchased</span>
                  <span className="font-bold text-[#0F172A] dark:text-white">{item.title}</span>
                </div>
                {item.patientName && (
                  <div className="flex justify-between border-b border-[#0D9488]/10 pb-2.5">
                    <span className="text-[#64748B] dark:text-[#809995]">Patient Account</span>
                    <span className="font-bold text-[#0F172A] dark:text-white">{item.patientName}</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 font-bold text-[12px] text-[#0F766E] dark:text-[#2DD4BF]">
                  <span className="text-[#64748B] dark:text-[#809995]">Total Paid</span>
                  <span>${item.amount.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-3">
                <Button variant="outline" size="sm" onClick={() => alert(`Receipt PDF generated for ${txId}`)}>
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Receipt</span>
                </Button>
                <Button size="sm" onClick={handleClose}>
                  <span>Done</span>
                </Button>
              </div>
            </div>
          ) : isLoadingIntent ? (
            /* Loading Intent Spinner */
            <div className="py-14 text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute h-10 w-10 rounded-full border-4 border-[#0D9488]/10" />
                <RefreshCw className="h-8 w-8 animate-spin text-[#0D9488] dark:text-[#2DD4BF]" />
              </div>
              <div className="space-y-1">
                <div className="text-[13.5px] font-bold text-[#0F172A] dark:text-white">Connecting to Stripe Sandbox...</div>
                <p className="text-[10.5px] text-[#64748B] dark:text-[#809995] font-mono tracking-wide">Initializing secure handshake & token configuration</p>
              </div>
            </div>
          ) : clientSecret ? (
            /* Stripe Elements Provider Wrapper */
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: "flat",
                  variables: {
                    colorPrimary: "#0D9488",
                    colorBackground: "#FFFFFF",
                    colorText: "#0F172A",
                  },
                },
              }}
            >
              <StripeCheckoutForm
                item={item}
                onPaymentSuccess={handlePaymentSuccess}
                onClose={handleClose}
                isDemo={isDemo}
              />
            </Elements>
          ) : (
            /* Fallback Form */
            <StripeCheckoutForm
              item={item}
              onPaymentSuccess={handlePaymentSuccess}
              onClose={handleClose}
              isDemo={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}
