import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Settings as SettingsIcon,
  Calendar,
  Receipt,
  BarChart3,
  Search,
  Bell,
  Command,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

type NavItem = {
  to: string;
  label: string;
  icon: typeof LayoutDashboard;
  disabled?: boolean;
};

const nav: NavItem[] = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
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
      <aside className="fixed inset-y-0 left-0 hidden w-60 flex-col border-r border-border bg-sidebar lg:flex">
        <SidebarInner pathname={pathname} />
      </aside>

      {/* Sidebar — mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col border-r border-border bg-sidebar">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
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
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur sm:px-6">
          <button
            className="grid h-8 w-8 place-items-center rounded-md border border-border text-muted-foreground hover:bg-accent lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <div className="relative hidden w-full max-w-sm min-w-0 sm:block">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search patients, appointments, invoices…"
                className="h-8 w-full rounded-md border border-border bg-background pl-8 pr-14 text-[13px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <kbd className="pointer-events-none absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                <Command className="h-2.5 w-2.5" />K
              </kbd>
            </div>
          </div>

          <button className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground">
            <Bell className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 rounded-md pl-1 pr-2 py-1 text-[13px] hover:bg-accent">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-foreground text-[10px] font-medium text-background">
              IR
            </div>
            <span className="hidden sm:inline">Iman Reyes</span>
            <ChevronDown className="hidden h-3 w-3 text-muted-foreground sm:inline" />
          </button>
        </header>

        <main className="min-h-[calc(100vh-3.5rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <Link to="/dashboard" className="flex items-center gap-2">
      <div className="grid h-6 w-6 place-items-center rounded-md bg-foreground text-background text-[11px] font-semibold">A</div>
      <span className="text-[13.5px] font-semibold tracking-tight">Autonique</span>
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
    <>
      {!skipBrand && (
        <div className="flex h-14 items-center border-b border-border px-4">
          <Brand />
        </div>
      )}
      <div className="px-3 py-3">
        <div className="flex items-center justify-between rounded-md border border-border bg-background px-2 py-1.5">
          <div className="flex min-w-0 items-center gap-2">
            <div className="grid h-5 w-5 shrink-0 place-items-center rounded bg-foreground text-[10px] font-medium text-background">M</div>
            <span className="truncate text-[12.5px] font-medium">Meridian Clinics</span>
          </div>
          <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground" />
        </div>
      </div>
      <nav className="flex-1 px-3">
        <div className="mb-1 px-2 text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Workspace
        </div>
        <ul className="space-y-0.5">
          {nav.map((item) => {
            const active = pathname === item.to || (item.to !== "/dashboard" && pathname.startsWith(item.to));
            const Icon = item.icon;
            if (item.disabled) {
              return (
                <li key={item.to}>
                  <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] text-muted-foreground/60">
                    <Icon className="h-3.5 w-3.5" />
                    <span>{item.label}</span>
                    <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground/60">Soon</span>
                  </div>
                </li>
              );
            }
            return (
              <li key={item.to}>
                <Link
                  to={item.to as "/dashboard" | "/customers" | "/settings"}
                  onClick={onNavigate}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition-colors ${
                    active
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-border p-3">
        <div className="rounded-md border border-border bg-background p-3">
          <div className="text-[12px] font-medium">Trial · 8 days left</div>
          <div className="mt-1 text-[11.5px] leading-relaxed text-muted-foreground">
            Upgrade to keep automations and multi-provider scheduling.
          </div>
          <button className="mt-3 inline-flex h-7 w-full items-center justify-center rounded-md bg-foreground text-[12px] font-medium text-background transition-opacity hover:opacity-90">
            Upgrade
          </button>
        </div>
      </div>
    </>
  );
}

/* ---------- Reusable primitives ---------- */

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border px-4 py-5 sm:flex sm:items-center sm:justify-between sm:px-8 sm:py-6">
      <div className="min-w-0">
        <h1 className="truncate font-display text-2xl tracking-tight sm:text-3xl">{title}</h1>
        {description && <p className="mt-1 text-[13px] text-muted-foreground">{description}</p>}
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
    <section className={`rounded-lg border border-border bg-card ${className}`}>
      {(title || action) && (
        <header className="flex items-center justify-between border-b border-border px-5 py-3">
          {title && <h3 className="text-[13px] font-medium">{title}</h3>}
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
  tone?: "default" | "success" | "warning" | "muted" | "danger";
}) {
  const map: Record<string, string> = {
    default: "border-border bg-background text-foreground",
    muted: "border-border bg-muted text-muted-foreground",
    success: "border-[color-mix(in_oklab,var(--success)_30%,var(--border))] bg-[color-mix(in_oklab,var(--success)_10%,var(--background))] text-[color-mix(in_oklab,var(--success)_70%,var(--foreground))]",
    warning: "border-[color-mix(in_oklab,var(--warning)_30%,var(--border))] bg-[color-mix(in_oklab,var(--warning)_10%,var(--background))] text-[color-mix(in_oklab,var(--warning)_60%,var(--foreground))]",
    danger: "border-[color-mix(in_oklab,var(--destructive)_30%,var(--border))] bg-[color-mix(in_oklab,var(--destructive)_8%,var(--background))] text-[color-mix(in_oklab,var(--destructive)_70%,var(--foreground))]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10.5px] font-medium tracking-tight ${map[tone]}`}
    >
      <span className="h-1 w-1 rounded-full bg-current opacity-60" />
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
    primary: "bg-foreground text-background hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
    outline: "border border-border bg-background text-foreground hover:bg-accent",
    ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
  };
  const sizes: Record<string, string> = {
    sm: "h-7 px-2.5 text-[12px]",
    md: "h-8 px-3 text-[13px]",
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}