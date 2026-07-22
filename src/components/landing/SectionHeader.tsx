import { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  delay?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  delay,
  className = "",
  ...props
}: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "text-center max-w-xl mx-auto" : "text-left max-w-xl";

  return (
    <div
      data-reveal
      data-reveal-delay={delay}
      className={`${alignmentClass} space-y-2 mb-14 ${className}`}
      {...props}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0D9488] dark:text-[#2DD4BF] font-bold">
        {label}
      </span>
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0F172A] dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-[14px] text-[#475569] dark:text-[#A0B0AD] font-medium leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
