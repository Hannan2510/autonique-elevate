import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { pricingPlans } from "@/data/landingData";

interface PricingSectionProps {
  annualBilling: boolean;
  setAnnualBilling: (val: boolean) => void;
}

export function PricingSection({ annualBilling, setAnnualBilling }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div data-reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
              Subscription Plans
            </span>
            <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
              Transparent & Predictable Pricing
            </h2>
          </div>

          <div data-reveal className="flex items-center gap-2 bg-white dark:bg-[#0D2926] p-1.5 rounded-xl border border-[#0D9488]/20 dark:border-[#0D9488]/40 shadow-xs self-start sm:self-auto">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${!annualBilling ? "bg-[#0F766E] text-white shadow-sm" : "text-[#64748B] dark:text-[#809995]"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${annualBilling ? "bg-[#0F766E] text-white shadow-sm" : "text-[#64748B] dark:text-[#809995]"}`}
            >
              Annual
              <span className="font-mono text-[9.5px] bg-[#CCFBF1] dark:bg-[#0F3531] text-[#0F766E] dark:text-[#2DD4BF] px-1.5 py-0.2 rounded font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricingPlans.map((t) => {
            const price = annualBilling ? t.annualPrice : t.monthlyPrice;
            return (
              <div
                key={t.name}
                data-reveal
                data-reveal-delay={t.delay}
                className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${t.spot} via-transparent to-transparent p-6 flex flex-col justify-between transition-all duration-300 ${
                  t.highlight
                    ? "ring-2 ring-[#0D9488]/40 shadow-xl scale-[1.02]"
                    : "shadow-xs hover:shadow-md"
                }`}
              >
                <div>
                  {t.highlight && (
                    <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#0F766E] to-[#0D9488] px-3 py-0.5 font-mono text-[9.5px] font-bold text-white uppercase tracking-wider shadow-xs">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-[15px] font-bold text-[#0F172A] dark:text-white">{t.name}</h3>
                  <div className="mt-1 font-display text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                    {price}
                    {price !== "Custom" && (
                      <span className="ml-1 font-mono text-[11.5px] text-[#64748B] dark:text-[#809995] font-normal">/ mo</span>
                    )}
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#64748B] dark:text-[#809995] font-medium">{t.sub}</div>
                  <ul className="mt-5 space-y-2.5">
                    {t.features.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-[12.5px] text-[#334155] dark:text-[#E2F1F0] font-medium">
                        <CheckCircle2 className="h-4 w-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/dashboard"
                  className={`mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl text-[13px] font-bold transition-all duration-300 cursor-pointer ${
                    t.highlight
                      ? "bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0A5754] hover:to-[#0F766E] text-white shadow-lg shadow-[#0D9488]/25"
                      : "border border-[#0D9488]/25 dark:border-[#0D9488]/40 bg-[#F8FFFE] dark:bg-[#0F3531] hover:bg-[#EFFFFE] text-[#0F766E] dark:text-[#2DD4BF]"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
