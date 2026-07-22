import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

type PreviewTab = "dashboard" | "crm" | "appointments" | "emr" | "billing";

export function InteractivePreviewSection() {
  const [activePreviewTab, setActivePreviewTab] = useState<PreviewTab>("dashboard");

  const tabs: { id: PreviewTab; label: string }[] = [
    { id: "dashboard", label: "Dashboard" },
    { id: "crm", label: "Patient CRM" },
    { id: "appointments", label: "Appointments" },
    { id: "emr", label: "EMR Charts" },
    { id: "billing", label: "Billing" },
  ];

  return (
    <section id="preview" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="Interactive Software Showcase"
          title="Designed for Doctors & Administrators"
        />

        {/* Showcase Tabs */}
        <div data-reveal className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActivePreviewTab(t.id)}
              className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                activePreviewTab === t.id
                  ? "bg-[#0F766E] text-white shadow-md"
                  : "bg-white dark:bg-[#0D2926] border border-[#0D9488]/20 dark:border-[#0D9488]/40 text-[#475569] dark:text-[#A0B0AD] hover:bg-[#EFFFFE] dark:hover:bg-[#0F3531]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Display Mockup Window */}
        <div data-reveal className="rounded-[8px] border border-[#0D9488]/20 dark:border-[#0D9488]/40 bg-white dark:bg-[#0D2926] shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="flex items-center justify-between px-4 py-3 bg-[#022C2C] text-white">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="font-mono text-[11px] text-[#99F6E4]">Autonique Clinical OS · {activePreviewTab.toUpperCase()}</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="p-6 bg-[#F8FFFE] dark:bg-[#061514] min-h-[320px] flex flex-col justify-center">
            {activePreviewTab === "dashboard" && (
              <div className="space-y-4 animate-fade-in">
                <div className="overflow-hidden rounded-[8px] border border-[#0D9488]/20 dark:border-[#0D9488]/40 shadow-md">
                  <img
                    src="/dashboard-home-img.png"
                    alt="Autonique Doctor Dashboard Overview Screenshot"
                    className="w-full h-auto object-cover object-top max-h-[460px] rounded-[8px]"
                  />
                </div>
              </div>
            )}
            {activePreviewTab === "crm" && (
              <div className="space-y-3 animate-fade-in">
                <div className="flex items-center justify-between text-[12.5px] font-bold text-[#0F172A] dark:text-white pb-2 border-b border-border/40">
                  <span>Patient Records</span>
                  <span className="font-mono text-[10.5px] text-[#0D9488] dark:text-[#2DD4BF]">5 Active Patients</span>
                </div>
                {[
                  { name: "Ava Chen", id: "P-1042", phone: "+49 30 8823 1194", date: "22 Jul 2026" },
                  { name: "Marcus Weiss", id: "P-1041", phone: "+49 30 4412 8802", date: "22 Jul 2026" },
                  { name: "Priya Kapoor", id: "P-1040", phone: "+49 30 2201 4488", date: "22 Jul 2026" },
                ].map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-2.5 rounded-xl border border-border/40 bg-white dark:bg-[#0D2926] text-[12px]">
                    <span className="font-bold text-[#0F172A] dark:text-white">{p.name}</span>
                    <span className="font-mono text-muted-foreground">{p.phone}</span>
                    <span className="font-mono text-muted-foreground">{p.date}</span>
                    <span className="bg-emerald-500/10 text-emerald-700 dark:text-[#2DD4BF] font-mono text-[10px] px-2 py-0.5 rounded-full font-bold">Active</span>
                  </div>
                ))}
              </div>
            )}
            {activePreviewTab === "appointments" && (
              <div className="space-y-3 animate-fade-in">
                <div className="text-[12.5px] font-bold text-[#0F172A] dark:text-white pb-2 border-b border-border/40">Today's Appointment Schedule</div>
                {[
                  { time: "09:00 AM", doctor: "Dr. Reyes", patient: "Ava Chen", status: "Confirmed" },
                  { time: "10:30 AM", doctor: "Dr. Okafor", patient: "Marcus Weiss", status: "In Consultation" },
                  { time: "02:00 PM", doctor: "Dr. Reyes", patient: "Priya Kapoor", status: "Scheduled" },
                ].map((a) => (
                  <div key={a.time} className="flex items-center justify-between p-3 rounded-xl border border-border/40 bg-white dark:bg-[#0D2926] text-[12px]">
                    <span className="font-mono font-bold text-[#0D9488] dark:text-[#2DD4BF]">{a.time}</span>
                    <span className="font-semibold text-foreground">{a.patient}</span>
                    <span className="text-muted-foreground">{a.doctor}</span>
                    <span className="bg-emerald-500/10 text-emerald-700 dark:text-[#2DD4BF] font-mono text-[10px] px-2 py-0.5 rounded-full font-bold">{a.status}</span>
                  </div>
                ))}
              </div>
            )}
            {activePreviewTab === "emr" && (
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-white dark:bg-[#0D2926] space-y-3 text-[12px] animate-fade-in">
                <div className="flex justify-between font-bold text-[#0F172A] dark:text-white border-b pb-2"><span>Electronic Medical Record #EMR-992</span><span className="text-emerald-700 dark:text-[#2DD4BF]">ICD-10 Signed</span></div>
                <p className="text-muted-foreground font-sans">Patient presents for routine follow-up. Vital signs normal (BP: 120/80, Pulse: 72 bpm). Continuation of therapy recommended.</p>
              </div>
            )}
            {activePreviewTab === "billing" && (
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-white dark:bg-[#0D2926] space-y-3 text-[12px] animate-fade-in">
                <div className="flex justify-between font-bold text-[#0F172A] dark:text-white border-b pb-2"><span>Stripe Billed Monthly Subscription</span><span className="text-emerald-700 dark:text-[#2DD4BF] font-mono">$516 / mo</span></div>
                <p className="text-muted-foreground font-mono text-[11px]">Growth Tier · 4 Active Provider Seats · Next Invoice: Aug 12, 2026</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
