import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HeaderNav } from "@/components/landing/HeaderNav";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { ModulesSection } from "@/components/landing/ModulesSection";
import { FeatureShowcaseSection } from "@/components/landing/FeatureShowcaseSection";
import { WorkflowSection } from "@/components/landing/WorkflowSection";
import { InteractivePreviewSection } from "@/components/landing/InteractivePreviewSection";
import { EnterpriseArchitectureSection } from "@/components/landing/EnterpriseArchitectureSection";
import { ComplianceSection } from "@/components/landing/ComplianceSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CtaBannerSection } from "@/components/landing/CtaBannerSection";
import { FooterSection } from "@/components/landing/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autonique — Enterprise Clinical Operating System" },
      {
        name: "description",
        content:
          "The modern clinical OS for doctors, practice groups, and hospitals. Unifies patient scheduling, EMR, prescriptions, billing, and WhatsApp patient automation.",
      },
      { property: "og:title", content: "Autonique — Enterprise Clinical OS" },
      {
        property: "og:description",
        content:
          "All-in-one clinical operating system for doctors, practice groups, and hospitals.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

/* Scroll Reveal Observer Hook */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Landing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useScrollReveal();

  return (
    <>
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s cubic-bezier(.22,1,.36,1),
                      transform 0.65s cubic-bezier(.22,1,.36,1);
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }
        [data-reveal-delay="1"] { transition-delay: 0.1s; }
        [data-reveal-delay="2"] { transition-delay: 0.2s; }
        [data-reveal-delay="3"] { transition-delay: 0.3s; }
        [data-reveal-delay="4"] { transition-delay: 0.4s; }
        [data-reveal-delay="5"] { transition-delay: 0.5s; }
      `}</style>

      <div className="min-h-screen bg-[#F8FFFE] dark:bg-[#061514] text-[#0F172A] dark:text-[#E2F1F0] font-sans selection:bg-[#0D9488]/20 selection:text-[#0F766E] overflow-x-clip antialiased">
        <div className="fixed inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06] bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:24px_24px] z-0" />

        <HeaderNav />
        <HeroSection />
        <ProblemSolutionSection />
        <ModulesSection />
        <FeatureShowcaseSection />
        <WorkflowSection />
        <InteractivePreviewSection />
        <EnterpriseArchitectureSection />
        <ComplianceSection />
        <TestimonialsSection />
        <PricingSection annualBilling={annualBilling} setAnnualBilling={setAnnualBilling} />
        <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <CtaBannerSection />
        <FooterSection />
      </div>
    </>
  );
}