import { enterpriseFeatures } from "@/data/landingData";
import { SectionHeader } from "./SectionHeader";

export function EnterpriseArchitectureSection() {
  return (
    <section className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="Enterprise Infrastructure"
          title="Built for Scalability, Speed & Security"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enterpriseFeatures.map((e, idx) => {
            const Icon = e.icon;
            return (
              <div
                key={e.title}
                data-reveal
                data-reveal-delay={String(idx + 1)}
                className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${e.spot} via-transparent to-transparent p-6 shadow-xs hover:shadow-md transition-all`}
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center mb-4 shadow-xs">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0F172A] dark:text-white">{e.title}</h3>
                <p className="text-[13px] text-[#475569] dark:text-[#A0B0AD] mt-1.5 leading-relaxed font-medium">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
