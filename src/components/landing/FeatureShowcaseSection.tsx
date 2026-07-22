import { Bot, Calendar, Receipt, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function FeatureShowcaseSection() {
  const capabilityCards = [
    {
      title: "AI Clinical Assistant",
      desc: "Generate structured consultation notes and diagnostic summaries automatically during doctor visits.",
      icon: Bot,
      spot: "from-emerald-400/20",
      preview: (
        <div className="rounded-xl border border-emerald-500/20 bg-[#F0FDFA] dark:bg-[#0F3531] p-3 text-[11px] space-y-1.5 shadow-xs">
          <div className="flex items-center justify-between text-emerald-800 dark:text-[#2DD4BF] font-bold">
            <span className="flex items-center gap-1"><Sparkles className="h-3 w-3" /> AI Note Draft</span>
            <span>ICD-10 Ready</span>
          </div>
          <p className="text-[#475569] dark:text-[#A0B0AD] font-mono text-[10px]">Patient presents with acute pharyngitis. Prescribed Amoxicillin 500mg.</p>
        </div>
      ),
    },
    {
      title: "Appointment Automation",
      desc: "Multi-channel calendar scheduling with automated WhatsApp confirmation and cancellation management.",
      icon: Calendar,
      spot: "from-teal-400/20",
      preview: (
        <div className="rounded-xl border border-[#0D9488]/20 bg-[#F0FDFA] dark:bg-[#0F3531] p-3 text-[11px] space-y-1.5 shadow-xs">
          <div className="flex items-center justify-between text-[#0F766E] dark:text-[#2DD4BF] font-bold">
            <span>WhatsApp Confirmation</span>
            <span className="text-[#0D9488] dark:text-[#2DD4BF] font-mono text-[9.5px]">Sent 09:30 AM</span>
          </div>
          <p className="text-[#475569] dark:text-[#A0B0AD] text-[10.5px]">"Hello Ava, your visit with Dr. Reyes is confirmed for 10:30 AM today."</p>
        </div>
      ),
    },
    {
      title: "Medical Billing & Stripe",
      desc: "Accept online payments, issue digital receipts, and track clinic revenue with automated reconciliation.",
      icon: Receipt,
      spot: "from-emerald-400/20",
      preview: (
        <div className="rounded-xl border border-[#0D9488]/20 bg-[#F0FDFA] dark:bg-[#0F3531] p-3 text-[11px] space-y-1.5 shadow-xs">
          <div className="flex items-center justify-between text-[#0F766E] dark:text-[#2DD4BF] font-bold">
            <span>Stripe Payment #INV-2841</span>
            <span className="text-[#0D9488] dark:text-[#2DD4BF] font-bold">$129 Paid</span>
          </div>
          <p className="text-[#475569] dark:text-[#A0B0AD] font-mono text-[10px]">Consultation Fee · Card •••• 4242</p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-16">
        <SectionHeader
          label="Enterprise Features"
          title="Engineered for High-Performance Clinics"
        />

        {/* 3 Core Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilityCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                data-reveal
                data-reveal-delay={String(i + 1)}
                className={`rounded-[8px] border-none bg-white dark:bg-[#0D2926] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${card.spot} via-transparent to-transparent p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#EFFFFE] to-[#CCFBF1] dark:from-[#0F3531] dark:to-[#092523] text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shadow-xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0F172A] dark:text-white">{card.title}</h3>
                  <p className="text-[13px] text-[#475569] dark:text-[#A0B0AD] leading-relaxed font-medium">{card.desc}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#0D9488]/15 dark:border-[#0D9488]/30">
                  {card.preview}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2-Column Calendar Showcase Feature with Tilted Illustration on Right */}
        <div data-reveal className="rounded-2xl border-none bg-white dark:bg-[#0B201E] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side Info */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0D9488]/25 dark:border-[#0D9488]/40 bg-[#EFFFFE] dark:bg-[#0F2F2C] px-3.5 py-1 text-[11px] font-bold text-[#0F766E] dark:text-[#2DD4BF]">
                <Calendar className="h-3.5 w-3.5 text-[#0D9488] dark:text-[#2DD4BF]" />
                <span>Automated Appointment Scheduling</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] dark:text-white leading-snug">
                Smart Calendar Slot Lookup & Instant Confirmations
              </h3>

              <p className="text-[14px] leading-relaxed text-[#475569] dark:text-[#A0B0AD] font-medium">
                Empower your patients to check doctor availability, select time slots, and receive instant booking receipts — reducing front-desk phone calls and cutting no-shows by 55%.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { t: "Autonomous Slot Lookup", desc: "Real-time doctor calendar sync" },
                  { t: "Instant Receipts & Alerts", desc: "Digital booking details & doctor info" },
                  { t: "55% Lower No-Shows", desc: "Automated pre-visit reminders" },
                  { t: "Multi-Doctor Roster", desc: "Seamless appointment distribution" },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-2.5 p-2.5 rounded-xl border-none bg-[#F8FFFE] dark:bg-[#061514]">
                    <CheckCircle2 className="h-4 w-4 text-[#0D9488] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[12.5px] font-bold text-[#0F172A] dark:text-white">{item.t}</div>
                      <div className="text-[10.5px] text-[#64748B] dark:text-[#809995] font-medium">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Tilted Calendar Booking Illustration Frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="relative rounded-[16px] overflow-hidden bg-white dark:bg-[#0D2926] p-4 shadow-2xl transition-all duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_rotate(-1.5deg)] lg:hover:[transform:perspective(1000px)_rotateY(-1deg)_rotateX(0deg)_rotate(0deg)] drop-shadow-[0_25px_35px_rgba(13,148,136,0.3)] hover:drop-shadow-[0_30px_45px_rgba(13,148,136,0.4)]">
                  <img
                    src="/appointment-booking-illustration.png"
                    alt="Autonique Clinic Appointment Booking Illustration"
                    className="w-full h-auto object-contain rounded-xl transition-all duration-300 hover:scale-[1.01] dark:brightness-95 contrast-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
