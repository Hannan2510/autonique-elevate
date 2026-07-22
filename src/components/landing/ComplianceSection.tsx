import { complianceBadges } from "@/data/landingData";

export function ComplianceSection() {
  return (
    <section className="py-12 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {complianceBadges.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.title} data-reveal data-reveal-delay={String(i + 1)} className={`flex items-start gap-3 p-4 rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${item.spot} via-transparent to-transparent shadow-xs`}>
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0D9488] dark:text-[#2DD4BF] shadow-xs">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0F172A] dark:text-white">{item.title}</div>
                  <div className="text-[11px] text-[#64748B] dark:text-[#809995] font-medium">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
