import { AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="The Operational Gap"
          title="Disconnect Between Front-Desk, EMR & Patients?"
          description="Traditional clinics waste 4+ hours daily juggling fragmented tools, paper charts, and manual phone queues."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Before Autonique */}
          <div data-reveal data-reveal-delay="1" className="rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-500/10 via-white to-white dark:from-rose-950/40 dark:via-[#0D2926] dark:to-[#0D2926] p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-[14px]">
              <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              <span>Legacy Disconnected Setup</span>
            </div>
            <ul className="space-y-3 text-[13px] text-[#475569] dark:text-[#A0B0AD] font-medium">
              {[
                "Missed appointments due to manual reminder calls",
                "Paper-based prescriptions causing dosage errors",
                "Fragmented EMR records scattered across notebooks & Excel",
                "Overworked front desk staff dealing with phone queues",
                "Uncollected bills & missing revenue telemetry",
              ].map((err) => (
                <li key={err} className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{err}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Autonique - Featured Highlight Card */}
          <div data-reveal data-reveal-delay="2" className="rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-white to-white dark:from-emerald-500/25 dark:via-[#0D2926] dark:to-[#0D2926] p-6 space-y-4 shadow-md transition-all">
            <div className="flex items-center gap-2 text-[#0F766E] dark:text-[#2DD4BF] font-bold text-[14px]">
              <Sparkles className="h-5 w-5 text-[#0D9488] dark:text-[#2DD4BF]" />
              <span>Unified Autonique Operating System</span>
            </div>
            <ul className="space-y-3 text-[13px] text-[#0F172A] dark:text-white">
              {[
                "Automated WhatsApp & SMS appointment reminders (55% lower no-shows)",
                "Digital ICD-10 prescription engine with 1-click PDF export",
                "Centralized cloud EMR accessible securely across all devices",
                "Self-service patient booking & queue management",
                "Integrated Stripe billing & real-time revenue analytics",
              ].map((sol) => (
                <li key={sol} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                  <span className="font-semibold">{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
