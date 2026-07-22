import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/landingData";
import { SectionHeader } from "./SectionHeader";

interface FaqSectionProps {
  openFaq: number | null;
  setOpenFaq: (val: number | null) => void;
}

export function FaqSection({ openFaq, setOpenFaq }: FaqSectionProps) {
  return (
    <section className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          label="Frequently Asked Questions"
          title="Everything You Need to Know"
        />

        <div className="space-y-3">
          {faqItems.map((faq, i) => (
            <div
              key={faq.question}
              data-reveal
              data-reveal-delay={String(i + 1)}
              className="rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-[14px] text-[#0F172A] dark:text-white cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF] transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-[13px] text-[#475569] dark:text-[#A0B0AD] leading-relaxed font-medium border-t border-[#0D9488]/10 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
