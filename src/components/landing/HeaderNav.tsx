import { Link } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { ThemeToggle } from "@/components/app/AppShell";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#14B8A6] text-white shadow-lg shadow-[#0D9488]/30 transition-transform duration-300 hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"
            fill="#14B8A6"
            opacity="0.18"
          />
          <path
            d="M5 12h2.8l1.7-3.5 3.5 7 1.7-3.5H19"
            stroke="#fff"
            strokeWidth="2.1"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-[17px] font-extrabold tracking-tight leading-none text-[#0F172A] dark:text-white font-sans">
          Autonique
        </span>
        <span className="text-[8.5px] text-[#0D9488] dark:text-[#2DD4BF] font-mono leading-none mt-0.5 uppercase tracking-[0.22em] font-bold">
          Clinical OS
        </span>
      </div>
    </div>
  );
}

export function HeaderNav() {
  return (
    <header className="sticky top-0 z-[100] border-none bg-[#F8FFFE]/95 dark:bg-[#061514]/95 backdrop-blur-xl shadow-md shadow-[#0D9488]/10 dark:shadow-black/60 transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex text-[13.5px] font-semibold text-[#475569] dark:text-[#94A3B8]">
          <a href="#problem" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Why Change</a>
          <a href="#platform" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Platform</a>
          <a href="#workflow" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Workflow</a>
          <a href="#preview" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Product</a>
          <a href="#pricing" className="hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/dashboard" className="hidden text-[13.5px] font-bold text-[#334155] dark:text-[#E2F1F0] hover:text-[#0D9488] dark:hover:text-[#2DD4BF] sm:inline transition-colors px-3 py-1.5 rounded-lg hover:bg-[#0D9488]/10">
            Sign In
          </Link>
          <Link to="/dashboard" className="inline-flex h-9.5 items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:from-[#0C4A6E] hover:to-[#0F766E] px-4.5 text-[13px] font-bold text-white transition-all duration-300 shadow-md shadow-[#0D9488]/25 active:scale-95 cursor-pointer">
            <Rocket className="h-3.5 w-3.5" />
            <span>Start Free Trial</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
