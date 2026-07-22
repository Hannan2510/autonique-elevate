import { Link } from "@tanstack/react-router";
import { ChevronRight, Rocket, Calendar, CheckCircle2, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#EFFFFE]/60 via-[#F8FFFE] to-[#F8FFFE] dark:from-[#0B2523]/80 dark:via-[#061514] dark:to-[#061514]">
      {/* Ambient background teal glow circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0D9488]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <div
              data-reveal
              className="inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 dark:border-[#0D9488]/40 bg-[#EFFFFE] dark:bg-[#0F2F2C] px-4 py-1.5 text-[11.5px] font-bold text-[#0F766E] dark:text-[#2DD4BF] shadow-xs"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
              Trusted by 40,000+ Doctors & Clinics Worldwide
              <ChevronRight className="h-3.5 w-3.5 text-[#0D9488] dark:text-[#2DD4BF]" />
            </div>

            <h1
              data-reveal
              data-reveal-delay="1"
              className="font-display text-4xl leading-[1.07] font-black tracking-tight sm:text-5xl text-[#0F172A] dark:text-white"
            >
              Simplify Your Practice with{" "}
              <span className="bg-gradient-to-r from-[#0F766E] via-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent">
                Powerful Clinical OS
              </span>
            </h1>

            <p
              data-reveal
              data-reveal-delay="2"
              className="text-[15px] leading-relaxed text-[#475569] dark:text-[#A0B0AD] max-w-lg font-medium"
            >
              All-in-one clinical software for doctors, practice groups, and
              hospitals — scheduling, EMR, prescriptions, billing, and
              WhatsApp automation in one platform.
            </p>

            <div
              data-reveal
              data-reveal-delay="3"
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <Link
                to="/dashboard"
                className="inline-flex h-11.5 items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0A5754] hover:to-[#0F766E] px-6 text-[13.5px] font-bold text-white shadow-lg shadow-[#0D9488]/25 transition-all duration-300 cursor-pointer active:scale-98"
              >
                <Rocket className="h-4 w-4" />
                Start Free Trial
              </Link>
              <a
                href="#pricing"
                className="inline-flex h-11.5 items-center gap-2 rounded-xl border border-[#0D9488]/30 dark:border-[#0D9488]/50 bg-white dark:bg-[#0B201E] hover:bg-[#EFFFFE]/70 dark:hover:bg-[#0F2F2C] px-6 text-[13.5px] font-bold text-[#0F766E] dark:text-[#2DD4BF] shadow-xs transition-all"
              >
                <Calendar className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                Book a Demo
              </a>
            </div>

            <div
              data-reveal
              data-reveal-delay="4"
              className="flex flex-wrap items-center gap-5 text-[11.5px] font-mono font-medium text-[#64748B] dark:text-[#809995] pt-1"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                No credit card needed
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                14-day full trial
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                HIPAA & GDPR compliant
              </span>
            </div>
          </div>

          {/* Tilted Ecosystem Graphic Window */}
          <div data-reveal data-reveal-delay="2" className="lg:col-span-6 space-y-4">
            <div className="relative rounded-[16px] border border-[#0D9488]/20 dark:border-[#0D9488]/40 bg-white dark:bg-[#0B201E] shadow-[0_30px_70px_-15px_rgba(13,148,136,0.25)] overflow-hidden transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] max-w-md mx-auto lg:max-w-none">
              {/* Light Theme Ecosystem Image */}
              <img
                src="/ecosystem-light.png"
                alt="Autonique Connected Clinic Operating System Ecosystem (Light)"
                className="block dark:hidden w-full h-auto object-contain rounded-[12px] p-1.5 transition-all duration-300 hover:scale-[1.01]"
              />
              {/* Dark Theme Ecosystem Image */}
              <img
                src="/ecosystem-dark.jpg"
                alt="Autonique Connected Clinic Operating System Ecosystem (Dark)"
                className="hidden dark:block w-full h-auto object-contain rounded-[12px] p-1.5 transition-all duration-300 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
