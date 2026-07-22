import { Link } from "@tanstack/react-router";
import { Rocket } from "lucide-react";

export function CtaBannerSection() {
  return (
    <section className="py-16 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-white dark:bg-[#0A201E] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          data-reveal
          className="rounded-[8px] border-none bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#0F766E] dark:from-[#0D2926] dark:via-[#0F3531] dark:to-[#0D2926] p-10 sm:p-12 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10 dark:bg-[#2DD4BF]/15 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/10 dark:bg-[#2DD4BF]/15 blur-2xl pointer-events-none" />

          <h2 className="font-display text-3xl font-black text-white sm:text-4xl relative z-10">
            Ready to Modernise Your Clinic?
          </h2>
          <p className="mt-3 text-[15px] text-teal-100 dark:text-[#A0B0AD] font-medium max-w-lg mx-auto relative z-10">
            Join 40,000+ doctors already running their practice on Autonique.
            No contracts, cancel any time.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link
              to="/dashboard"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-white text-[#0F766E] dark:bg-[#2DD4BF] dark:text-[#061514] hover:bg-teal-50 dark:hover:bg-[#5EEAD4] px-7 text-[13.5px] font-bold shadow-md transition-all duration-300 cursor-pointer active:scale-95"
            >
              <Rocket className="h-4 w-4" />
              Start Free Trial
            </Link>
            <a
              href="#pricing"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/30 dark:border-[#0D9488]/40 text-white dark:text-[#2DD4BF] hover:bg-white/10 dark:hover:bg-[#0F3531] px-7 text-[13.5px] font-bold transition-all"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
