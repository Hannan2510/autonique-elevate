import { workflowSteps } from "@/data/landingData";
import { SectionHeader } from "./SectionHeader";

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="Seamless Patient Journey"
          title="From Booking to Follow-up in 6 Steps"
        />

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {workflowSteps.map((s, idx) => (
            <div
              key={s.step}
              data-reveal
              data-reveal-delay={String((idx % 3) + 1)}
              className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${s.spot} via-transparent to-transparent p-4 text-center relative group transition-all shadow-xs hover:shadow-md`}
            >
              <div className="font-mono text-[12px] font-bold text-[#0D9488] dark:text-[#2DD4BF] mb-1">{s.step}</div>
              <div className="font-bold text-[13px] text-[#0F172A] dark:text-white">{s.title}</div>
              <div className="text-[10.5px] text-[#64748B] dark:text-[#809995] font-medium mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
