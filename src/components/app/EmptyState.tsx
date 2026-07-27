import React from "react";
import { LucideIcon } from "lucide-react";

export interface EmptyStateProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText?: string;
  onActionClick?: () => void;
  secondaryActionText?: string;
  onSecondaryActionClick?: () => void;
  extraContent?: React.ReactNode;
}

export function EmptyState({
  title,
  description,
  icon: Icon,
  actionText,
  onActionClick,
  secondaryActionText,
  onSecondaryActionClick,
  extraContent,
}: EmptyStateProps) {
  return (
    <div className="border border-border/50 rounded-xl bg-card p-8 sm:p-12 flex flex-col items-center justify-center text-center min-h-[380px] shadow-3xs">
      <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
        <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 animate-pulse" />
        <Icon className="h-7 w-7" />
      </div>

      <div className="space-y-2 max-w-md">
        <h3 className="text-[14px] font-bold text-foreground tracking-tight">{title}</h3>
        <p className="text-[12px] text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {(onActionClick || onSecondaryActionClick) && (
        <div className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-center w-full max-w-xs sm:max-w-none">
          {onSecondaryActionClick && secondaryActionText && (
            <button
              onClick={onSecondaryActionClick}
              className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-3.5 text-[12px] font-medium text-foreground hover:bg-accent transition-all cursor-pointer"
            >
              <span>{secondaryActionText}</span>
            </button>
          )}
          {onActionClick && actionText && (
            <button
              onClick={onActionClick}
              className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 px-3.5 text-[12px] font-medium transition-all shadow-2xs cursor-pointer"
            >
              <span>{actionText}</span>
            </button>
          )}
        </div>
      )}

      {extraContent && <div className="w-full max-w-xl">{extraContent}</div>}
    </div>
  );
}
