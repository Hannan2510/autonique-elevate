import React from "react";
import { MoreHorizontal, TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

export interface MetricCardProps {
  title: string;
  value: string | number;
  badgeLabel?: string;
  delta?: string;
  up?: boolean;
  icon: LucideIcon;
  cardClass?: string;
  onClick?: () => void;
  actionMenu?: React.ReactNode;
}

export function MetricCard({
  title,
  value,
  badgeLabel,
  delta,
  up = true,
  icon: Icon,
  cardClass = "kpi-card-mint",
  onClick,
  actionMenu,
}: MetricCardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-[8px] border-none p-3.5 sm:p-4 transition-all shadow-2xs hover:shadow-md relative overflow-hidden group cursor-pointer ${cardClass}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-white/90 dark:bg-card/90 text-foreground shadow-2xs">
            <Icon className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
          </div>
          <span className="text-[12px] font-semibold text-foreground/90">{title}</span>
        </div>
        {actionMenu ?? (
          <button className="text-muted-foreground hover:text-foreground p-0.5 rounded hover:bg-white/40 transition-colors">
            <MoreHorizontal className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <div className="mt-2.5 font-display text-[22px] sm:text-2xl font-bold tracking-tight text-foreground">
        {value}
      </div>

      {(badgeLabel || delta) && (
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 dark:bg-card/90 px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-2xs border border-black/5">
            {badgeLabel && <span className="text-muted-foreground/80 font-medium">{badgeLabel}</span>}
            {delta && (
              <span className={`inline-flex items-center font-mono ${up ? "text-emerald-700 dark:text-emerald-400" : "text-rose-600"}`}>
                {up ? <TrendingUp className="mr-0.5 h-2.5 w-2.5 inline" /> : <TrendingDown className="mr-0.5 h-2.5 w-2.5 inline" />}
                {delta}
              </span>
            )}
          </span>
        </div>
      )}
    </div>
  );
}
