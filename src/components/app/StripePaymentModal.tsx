import { useState } from "react";
import {
  CreditCard,
  Lock,
  CheckCircle2,
  X,
  ShieldCheck,
  Building,
  ArrowRight,
  Download,
  AlertCircle,
} from "lucide-react";
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

export function StripePaymentModal({
  isOpen,
  onClose,
  item,
  onSuccess,
}: StripePaymentModalProps) {
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [expDate, setExpDate] = useState("12/28");
  const [cvc, setCvc] = useState("•••");
  const [zip, setZip] = useState("10119");
  const [cardHolder, setCardHolder] = useState("Dr. Sarah Khan");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple" | "google">("card");
  
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [txId, setTxId] = useState<string>("");

  if (!isOpen) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("processing");

    setTimeout(() => {
      const generatedTx = `ch_${Math.random().toString(36).substring(2, 11)}${Date.now().toString(36)}`;
      setTxId(generatedTx);
      setStatus("success");
      if (onSuccess) onSuccess(generatedTx);
    }, 1800);
  };

  const handleReset = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/25 backdrop-blur-xs transition-opacity"
        onClick={status === "processing" ? undefined : onClose}
      />

      {/* Modal Card — Dashboard Theme */}
      <div className="relative w-full max-w-lg rounded-2xl bg-card vercel-card shadow-2xl overflow-hidden border border-emerald-500/20 z-10 transition-all">
        {/* Header Bar — Dashboard Soft Green Gradient */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xs tracking-tight">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[13.5px] font-bold tracking-tight">Stripe Gateway</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-1.5 py-0.2 font-mono text-[9px] font-semibold text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck className="h-2.5 w-2.5 text-emerald-300" /> 256-bit AES
                </span>
              </div>
              <p className="text-[10px] text-emerald-200/70 font-mono">Secured Clinical Checkout</p>
            </div>
          </div>
          {status !== "processing" && (
            <button
              onClick={onClose}
              className="p-1 rounded-md text-emerald-200/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {status === "success" ? (
            /* Success State */
            <div className="py-6 text-center space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-2xs">
                <CheckCircle2 className="h-8 w-8 animate-bounce" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Payment Successful!</h3>
                <p className="text-[12px] text-muted-foreground mt-1">
                  Payment of <span className="font-semibold text-foreground">${item.amount.toFixed(2)}</span> has been processed via Stripe.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="mx-auto max-w-sm rounded-xl border border-border/60 bg-muted/20 p-4 text-left font-mono text-[11px] space-y-2">
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span className="text-muted-foreground">Transaction ID</span>
                  <span className="font-semibold text-foreground truncate max-w-[180px]">{txId}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span className="text-muted-foreground">Item</span>
                  <span className="font-medium text-foreground">{item.title}</span>
                </div>
                {item.patientName && (
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-muted-foreground">Patient</span>
                    <span className="font-medium text-foreground">{item.patientName}</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 font-bold text-[12px]">
                  <span className="text-muted-foreground">Total Paid</span>
                  <span className="text-emerald-700 dark:text-emerald-400">${item.amount.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <Button variant="outline" size="sm" onClick={() => alert(`Receipt downloaded for transaction ${txId}`)}>
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Receipt</span>
                </Button>
                <Button size="sm" onClick={handleReset}>
                  <span>Done</span>
                </Button>
              </div>
            </div>
          ) : (
            /* Payment Form */
            <form onSubmit={handlePay} className="space-y-5">
              {/* Order Summary Header — Dashboard Gradient Mint */}
              <div className="flex items-center justify-between rounded-xl kpi-gradient-mint p-3.5 border border-emerald-500/10 shadow-2xs">
                <div>
                  <div className="text-[12.5px] font-bold text-foreground">{item.title}</div>
                  <div className="text-[11px] text-muted-foreground">{item.description}</div>
                  {item.patientName && (
                    <div className="mt-0.5 font-mono text-[10px] text-emerald-800 dark:text-emerald-300 font-semibold">
                      Patient: {item.patientName}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-muted-foreground uppercase font-mono">Amount Due</div>
                  <div className="font-display text-xl font-bold text-emerald-800 dark:text-emerald-300 tracking-tight">
                    ${item.amount.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-muted-foreground uppercase font-mono">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex items-center justify-center gap-2 rounded-lg border p-2 text-[11.5px] font-medium transition-all cursor-pointer ${
                      paymentMethod === "card"
                        ? "border-emerald-600 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold shadow-2xs"
                        : "border-border/60 hover:bg-accent text-muted-foreground"
                    }`}
                  >
                    <CreditCard className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
                    <span>Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("apple")}
                    className={`flex items-center justify-center gap-1.5 rounded-lg border p-2 text-[11.5px] font-medium transition-all cursor-pointer ${
                      paymentMethod === "apple"
                        ? "border-emerald-600 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold shadow-2xs"
                        : "border-border/60 hover:bg-accent text-muted-foreground"
                    }`}
                  >
                    <span className="font-bold"></span> Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("google")}
                    className={`flex items-center justify-center gap-1.5 rounded-lg border p-2 text-[11.5px] font-medium transition-all cursor-pointer ${
                      paymentMethod === "google"
                        ? "border-emerald-600 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold shadow-2xs"
                        : "border-border/60 hover:bg-accent text-muted-foreground"
                    }`}
                  >
                    <span className="font-bold text-emerald-600">G</span> Pay
                  </button>
                </div>
              </div>

              {/* Stripe Card Elements Form */}
              {paymentMethod === "card" && (
                <div className="space-y-3.5 rounded-xl border border-border/60 p-4 bg-background">
                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      required
                      placeholder="Dr. Sarah Khan"
                      className="h-8 w-full rounded-md border border-border/60 bg-background px-3 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-semibold text-muted-foreground">
                        Card Information
                      </label>
                      <div className="flex items-center gap-1 text-[9px] font-mono text-muted-foreground">
                        <Lock className="h-2.5 w-2.5 text-emerald-600" /> Stripe Encrypted
                      </div>
                    </div>
                    <div className="rounded-md border border-border/60 overflow-hidden focus-within:ring-1 focus-within:ring-emerald-500">
                      <div className="relative border-b border-border/40">
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          required
                          placeholder="4242 4242 4242 4242"
                          className="h-8.5 w-full bg-background pl-3 pr-10 text-[12px] font-mono placeholder:text-muted-foreground focus:outline-none"
                        />
                        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-[9.5px] font-bold text-emerald-700 dark:text-emerald-400">
                          VISA
                        </div>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-border/40">
                        <input
                          type="text"
                          value={expDate}
                          onChange={(e) => setExpDate(e.target.value)}
                          required
                          placeholder="MM / YY"
                          className="h-8.5 w-full bg-background px-3 text-[12px] font-mono placeholder:text-muted-foreground focus:outline-none"
                        />
                        <input
                          type="text"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          required
                          placeholder="CVC"
                          className="h-8.5 w-full bg-background px-3 text-[12px] font-mono placeholder:text-muted-foreground focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      Billing ZIP Code
                    </label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      required
                      placeholder="10119"
                      className="h-8 w-full max-w-[140px] rounded-md border border-border/60 bg-background px-3 text-[12px] font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              )}

              {/* Footer Submit Button — Dashboard Emerald Primary */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  disabled={status === "processing"}
                  className="w-full h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[13px] shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70"
                >
                  {status === "processing" ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Processing Stripe Payment...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="h-3.5 w-3.5" />
                      <span>Pay ${item.amount.toFixed(2)} with Stripe</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-muted-foreground font-mono">
                  Test Card: <span className="font-semibold text-foreground">4242 4242 4242 4242</span> · CVC: <span className="font-semibold text-foreground">123</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
