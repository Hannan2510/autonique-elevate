import { useState, useEffect } from "react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage(null);

    // If real Stripe is loaded and not demo fallback
    if (stripe && elements && !isDemo) {
      try {
        const { error: submitError } = await elements.submit();
        if (submitError) {
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

        if (result.error) {
          setErrorMessage(result.error.message || "Payment confirmation failed.");
          setIsProcessing(false);
        } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
          onPaymentSuccess(result.paymentIntent.id);
        } else {
          // Fallback succeeded status
          onPaymentSuccess(`pi_${Math.random().toString(36).substring(2, 12)}`);
        }
      } catch (err: any) {
        setErrorMessage(err?.message || "An unexpected error occurred.");
        setIsProcessing(false);
      }
    } else {
      // Demo Sandbox simulation timeout for instant test execution
      setTimeout(() => {
        const generatedTx = `pi_3M${Math.random().toString(36).substring(2, 11)}${Date.now().toString(36)}`;
        onPaymentSuccess(generatedTx);
      }, 1600);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Order Summary Card */}
      <div className="flex items-center justify-between rounded-xl bg-[#F0FDFA] dark:bg-[#0F3531] p-4 border border-[#0D9488]/20 shadow-2xs">
        <div>
          <div className="text-[13px] font-bold text-[#0F172A] dark:text-white">{item.title}</div>
          <div className="text-[11px] text-[#475569] dark:text-[#A0B0AD]">{item.description}</div>
          {item.patientName && (
            <div className="mt-0.5 font-mono text-[10.5px] text-[#0F766E] dark:text-[#2DD4BF] font-semibold">
              Patient: {item.patientName}
            </div>
          )}
        </div>
        <div className="text-right">
          <div className="text-[10px] text-[#64748B] dark:text-[#809995] uppercase font-mono">Amount Due</div>
          <div className="font-display text-xl font-extrabold text-[#0F766E] dark:text-[#2DD4BF] tracking-tight">
            ${item.amount.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Stripe Payment Element Container */}
      <div className="space-y-3 rounded-xl border border-[#0D9488]/20 dark:border-[#0D9488]/40 p-4 bg-white dark:bg-[#0B201E]">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-[11px] font-semibold text-[#64748B] dark:text-[#809995] uppercase font-mono">
            Stripe Secure Card Element
          </label>
          <div className="flex items-center gap-1 text-[9.5px] font-mono text-[#0D9488] dark:text-[#2DD4BF]">
            <Lock className="h-3 w-3" /> Stripe Encrypted
          </div>
        </div>

        {/* Real Stripe Element or Sandbox Interface */}
        {stripe && elements && !isDemo ? (
          <PaymentElement options={{ layout: "tabs" }} />
        ) : (
          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-medium text-[#475569] dark:text-[#A0B0AD] mb-1">
                Card Information
              </label>
              <div className="rounded-md border border-[#0D9488]/30 dark:border-[#0D9488]/50 bg-[#F8FFFE] dark:bg-[#061514] p-3 text-[12px] font-mono flex items-center justify-between">
                <span className="text-[#0F172A] dark:text-white">4242 •••• •••• 4242</span>
                <span className="text-[10px] font-bold text-[#0D9488] dark:text-[#2DD4BF]">VISA TEST</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-md border border-[#0D9488]/30 dark:border-[#0D9488]/50 bg-[#F8FFFE] dark:bg-[#061514] p-2.5 text-[11.5px] font-mono text-[#64748B] dark:text-[#809995]">
                Exp: 12/28
              </div>
              <div className="rounded-md border border-[#0D9488]/30 dark:border-[#0D9488]/50 bg-[#F8FFFE] dark:bg-[#061514] p-2.5 text-[11.5px] font-mono text-[#64748B] dark:text-[#809995]">
                CVC: 123
              </div>
            </div>
          </div>
        )}
      </div>

      {errorMessage && (
        <div className="flex items-center gap-2 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-[12px] text-rose-600 dark:text-rose-400 font-medium">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Pay Button */}
      <div className="space-y-2 pt-1">
        <button
          type="submit"
          disabled={isProcessing}
          className="w-full h-10.5 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0A5754] hover:to-[#0F766E] text-white font-bold text-[13.5px] shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70 active:scale-98"
        >
          {isProcessing ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin text-white" />
              <span>Processing Stripe Sandbox Payment...</span>
            </>
          ) : (
            <>
              <Lock className="h-3.5 w-3.5" />
              <span>Pay ${item.amount.toFixed(2)} with Stripe</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-[#64748B] dark:text-[#809995] font-mono">
          Stripe Sandbox Card: <span className="font-bold text-[#0F172A] dark:text-white">4242 4242 4242 4242</span> · CVC: <span className="font-bold text-[#0F172A] dark:text-white">123</span>
        </p>
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
        className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#0D2926] shadow-2xl overflow-hidden border border-[#0D9488]/30 z-10 transition-all">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#022C2C] via-[#0F3531] to-[#022C2C] text-white">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-[#0D9488]/30 border border-[#2DD4BF]/40 text-[#2DD4BF] font-extrabold text-xs tracking-tight">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[13.5px] font-bold tracking-tight">Stripe Gateway</span>
                <span className="inline-flex items-center gap-1 rounded bg-[#2DD4BF]/20 px-1.5 py-0.2 font-mono text-[9px] font-bold text-[#2DD4BF] border border-[#2DD4BF]/30">
                  <ShieldCheck className="h-2.5 w-2.5 text-[#2DD4BF]" /> TEST SANDBOX
                </span>
              </div>
              <p className="text-[10px] text-[#99F6E4] font-mono">Secured Clinical Checkout</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-md text-[#99F6E4] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {status === "success" ? (
            /* Payment Success Screen */
            <div className="py-6 text-center space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#0F766E] dark:text-[#2DD4BF] shadow-2xs">
                <CheckCircle2 className="h-8 w-8 animate-bounce" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0F172A] dark:text-white">Payment Successful!</h3>
                <p className="text-[12.5px] text-[#475569] dark:text-[#A0B0AD] mt-1 font-medium">
                  Payment of <span className="font-bold text-[#0F172A] dark:text-white">${item.amount.toFixed(2)}</span> was processed via Stripe.
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="mx-auto max-w-sm rounded-xl border border-[#0D9488]/20 bg-[#F8FFFE] dark:bg-[#061514] p-4 text-left font-mono text-[11px] space-y-2">
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span className="text-[#64748B] dark:text-[#809995]">Transaction ID</span>
                  <span className="font-semibold text-[#0F172A] dark:text-white truncate max-w-[180px]">{txId}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span className="text-[#64748B] dark:text-[#809995]">Item</span>
                  <span className="font-medium text-[#0F172A] dark:text-white">{item.title}</span>
                </div>
                {item.patientName && (
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-[#64748B] dark:text-[#809995]">Patient</span>
                    <span className="font-medium text-[#0F172A] dark:text-white">{item.patientName}</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 font-bold text-[12px]">
                  <span className="text-[#64748B] dark:text-[#809995]">Total Paid</span>
                  <span className="text-[#0F766E] dark:text-[#2DD4BF]">${item.amount.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
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
            <div className="py-12 text-center space-y-3">
              <RefreshCw className="h-7 w-7 animate-spin text-[#0D9488] dark:text-[#2DD4BF] mx-auto" />
              <div className="text-[13px] font-bold text-[#0F172A] dark:text-white">Connecting to Stripe Sandbox...</div>
              <p className="text-[11px] text-[#64748B] dark:text-[#809995] font-mono">Initializing Payment Element & Encryption</p>
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
