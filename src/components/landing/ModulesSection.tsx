import { platformModules } from "@/data/landingData";
import { SectionHeader } from "./SectionHeader";

export function ModulesSection() {
  return (
    <section id="platform" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="One Intelligent System"
          title="12 Essential Modules. One Platform."
          description="Consolidate your software stack into a single, cohesive clinical environment."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {platformModules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                data-reveal
                data-reveal-delay={String((idx % 4) + 1)}
                className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${m.spot} via-transparent to-transparent p-4.5 shadow-xs hover:shadow-md transition-all group`}
              >
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div className="font-bold text-[13.5px] text-[#0F172A] dark:text-white">{m.title}</div>
                <div className="text-[11px] text-[#64748B] dark:text-[#809995] font-medium mt-0.5">{m.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
