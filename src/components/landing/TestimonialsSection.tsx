import { Star } from "lucide-react";
import { testimonials } from "@/data/landingData";
import { SectionHeader } from "./SectionHeader";

export function TestimonialsSection() {
  return (
    <section id="social-proof" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="Trusted by Healthcare Leaders"
          title="What Medical Directors Say"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              data-reveal
              data-reveal-delay={t.delay}
              className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${t.spot} via-transparent to-transparent p-6 shadow-xs hover:shadow-md transition-all flex flex-col gap-4`}
            >
              <div className="flex gap-0.5">
                {Array(t.stars).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-[13.5px] leading-relaxed text-[#334155] dark:text-[#A0B0AD] font-medium flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#0D9488]/15 dark:border-[#0D9488]/30">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#0F766E] text-white font-bold text-[13px]">
                  {t.name[4]}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0F172A] dark:text-white">{t.name}</div>
                  <div className="text-[11px] text-[#64748B] dark:text-[#809995] font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
