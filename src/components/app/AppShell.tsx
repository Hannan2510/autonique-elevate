import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  Settings as SettingsIcon,
  Calendar,
  Receipt,
  BarChart3,
  Search,
  Bell,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Building2,
  Sun,
  Moon,
} from "lucide-react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return { theme, toggleTheme };
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="grid h-7.5 w-7.5 place-items-center rounded-md border border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer"
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-3.5 w-3.5 text-amber-400" />
      ) : (
        <Moon className="h-3.5 w-3.5 text-[#0F766E]" />
      )}
    </button>
  );
}

type NavItem = {
  to: string;
  label: string;
  icon: typeof LayoutDashboard;
  disabled?: boolean;
};

const nav: NavItem[] = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/clinic", label: "Clinic Panel", icon: Building2 },
  { to: "/customers", label: "Patients", icon: Users },
  { to: "/appointments", label: "Appointments", icon: Calendar, disabled: true },
  { to: "/revenue", label: "Revenue", icon: Receipt, disabled: true },
  { to: "/reports", label: "Reports", icon: BarChart3, disabled: true },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];

export function AppShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar — desktop */}
      <aside className="fixed inset-y-0 left-0 hidden w-60 flex-col border-r border-border/40 bg-background lg:flex z-20">
        <SidebarInner pathname={pathname} />
      </aside>

      {/* Sidebar — mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col border-r border-border/40 bg-background shadow-2xl">
            <div className="flex items-center justify-between border-b border-border/40 px-4 py-3">
              <Brand />
              <button onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>
            <SidebarInner pathname={pathname} onNavigate={() => setMobileOpen(false)} skipBrand />
          </aside>
        </div>
      )}

      <div className="lg:pl-60">
        {/* Top bar - Compact modern SaaS style */}
        <header className="sticky top-0 z-30 flex h-12 items-center justify-between gap-3 border-b border-border/40 bg-background/90 px-4 backdrop-blur-md sm:px-6">
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <button
              className="grid h-7 w-7 place-items-center rounded-md border border-border/60 text-muted-foreground hover:bg-accent lg:hidden shrink-0"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-3.5 w-3.5" />
            </button>

            <div className="relative w-64 sm:w-80 md:w-[420px]">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search patients, visits, records…"
                className="h-8.5 w-full rounded-lg border border-border/60 bg-background/80 pl-8 pr-3 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] transition-all shadow-2xs"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden items-center gap-2 text-[11.5px] text-muted-foreground sm:flex">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Operational
              </span>
            </div>

            <ThemeToggle />

            <button className="relative grid h-7.5 w-7.5 place-items-center rounded-md border border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer">
              <Bell className="h-3.5 w-3.5" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </button>

            <Link
              to="/"
              className="grid h-7.5 w-7.5 place-items-center rounded-md border border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer"
              title="Log Out to Landing Page"
            >
              <LogOut className="h-3.5 w-3.5" />
            </Link>
          </div>
        </header>

        <main className="min-h-[calc(100vh-3rem)] bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <Link to="/dashboard" className="flex items-center gap-2.5 group">
      <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-bold text-[12px] tracking-tight shadow-sm transition-transform group-hover:scale-105">A</div>
      <div className="flex flex-col">
        <span className="text-[13.5px] font-bold tracking-tight leading-none text-foreground">Autonique</span>
        <span className="text-[8.5px] text-muted-foreground/70 font-mono leading-none mt-0.5 uppercase tracking-widest font-medium">Clinical OS</span>
      </div>
    </Link>
  );
}

function SidebarInner({
  pathname,
  onNavigate,
  skipBrand,
}: {
  pathname: string;
  onNavigate?: () => void;
  skipBrand?: boolean;
}) {
  return (
    <div className="flex flex-col h-full">
      {!skipBrand && (
        <div className="flex h-12 items-center border-b border-border/40 px-4">
          <Brand />
        </div>
      )}
      <nav className="flex-1 px-3 py-3 space-y-4">
        <div>
          <div className="mb-1.5 px-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Platform
          </div>
          <ul className="space-y-0.5">
            {nav.map((item) => {
              const active = pathname === item.to || (item.to !== "/dashboard" && pathname.startsWith(item.to));
              const Icon = item.icon;
              if (item.disabled) {
                return (
                  <li key={item.to}>
                    <div className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] text-muted-foreground/50 select-none">
                      <Icon className="h-3.5 w-3.5" />
                      <span>{item.label}</span>
                      <span className="ml-auto font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground/40 bg-muted px-1.5 py-0.5 rounded">Soon</span>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.to}>
                  <Link
                    to={item.to as "/dashboard" | "/customers" | "/settings"}
                    onClick={onNavigate}
                    className={`relative flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-all ${
                      active
                        ? "bg-accent text-foreground shadow-2xs font-semibold"
                        : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${active ? "text-primary" : ""}`} />
                    <span>{item.label}</span>
                    {active && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-r" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Profile Section in Bottom Left of Sidebar */}
      <div className="border-t border-border/40 p-3 mt-auto">
        <div className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] hover:bg-accent transition-colors cursor-pointer">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-emerald-600 text-[10.5px] font-bold text-white shrink-0">
            IR
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-foreground text-[12px] truncate">Dr. Reyes</span>
            <span className="text-[10px] text-muted-foreground truncate">reyes@autonique.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Vercel primitives ---------- */

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: React.ReactNode;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/40 bg-background/50 px-4 py-2.5 sm:px-8 sm:py-2.5">
      <div className="min-w-0">
        <h1 className="truncate font-display text-[11.5px] sm:text-[12px] font-semibold tracking-tight text-foreground uppercase">{title}</h1>
        {description && <p className="mt-0.5 text-[11px] text-muted-foreground/80 font-mono">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Card({
  title,
  action,
  children,
  className = "",
  padding = "p-5",
}: {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  padding?: string;
}) {
  return (
    <section className={`rounded-xl bg-card vercel-card overflow-hidden ${className}`}>
      {(title || action) && (
        <header className="flex items-center justify-between px-5 py-3.5 bg-muted/20">
          {title && <h3 className="text-[13px] font-semibold tracking-tight text-foreground">{title}</h3>}
          {action}
        </header>
      )}
      <div className={padding}>{children}</div>
    </section>
  );
}

export function Badge({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "success" | "warning" | "muted" | "danger" | "info" | "indigo";
}) {
  const map: Record<string, string> = {
    default: "border-border/80 bg-background text-foreground",
    muted: "border-border/60 bg-muted/80 text-muted-foreground",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold",
    warning: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 font-semibold",
    danger: "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400 font-semibold",
    info: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-400 font-semibold",
    indigo: "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-semibold",
  };

  const dotMap: Record<string, string> = {
    default: "bg-foreground",
    muted: "bg-muted-foreground",
    success: "bg-emerald-500 animate-pulse",
    warning: "bg-amber-500 animate-pulse",
    danger: "bg-red-500 animate-pulse",
    info: "bg-sky-500 animate-pulse",
    indigo: "bg-indigo-500 animate-pulse",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] tracking-tight ${map[tone]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotMap[tone]}`} />
      {children}
    </span>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md";
}) {
  const variants: Record<string, string> = {
    primary: "bg-primary text-primary-foreground hover:opacity-95 shadow-2xs border border-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-accent border border-border/50",
    outline: "border border-border/80 bg-background text-foreground hover:bg-accent hover:border-border",
    ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
  };
  const sizes: Record<string, string> = {
    sm: "h-7 px-2.5 text-[12px] rounded-md",
    md: "h-8 px-3.5 text-[12.5px] rounded-md",
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}