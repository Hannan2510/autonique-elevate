import { Link } from "@tanstack/react-router";
import { Logo } from "./HeaderNav";

export function FooterSection() {
  return (
    <footer className="border-t border-[#0D9488]/15 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-[#64748B] dark:text-[#809995] font-semibold">
            <a href="#problem" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Why Change</a>
            <a href="#platform" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Platform</a>
            <a href="#workflow" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Workflow</a>
            <a href="#preview" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Product</a>
            <a href="#pricing" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Pricing</a>
            <Link to="/dashboard" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Dashboard</Link>
          </div>
          <div className="text-[11px] text-[#94A3B8] dark:text-[#64748B] font-mono">
            © 2026 Autonique Clinical OS · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
