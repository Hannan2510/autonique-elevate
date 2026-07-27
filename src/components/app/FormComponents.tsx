import React from "react";

// FormRow
export interface FormRowProps {
  label: string;
  description?: string;
  children: React.ReactNode;
  border?: boolean;
}

export function FormRow({ label, description, children, border = true }: FormRowProps) {
  return (
    <div className={`flex flex-col gap-2 py-4 ${border ? "border-b border-border/40" : ""} last:border-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8`}>
      <div className="max-w-xs space-y-0.5">
        <label className="text-[13px] font-semibold text-foreground tracking-tight">{label}</label>
        {description && <p className="text-[11.5px] leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      <div className="flex-1 max-w-lg">{children}</div>
    </div>
  );
}

// FormInput
export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
}

export function FormInput({ label, hint, className = "", ...props }: FormInputProps) {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="text-[12.5px] font-semibold text-foreground block">{label}</label>}
      <input
        {...props}
        className={`h-9 w-full rounded-xl border border-border/60 bg-background px-3.5 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all ${className}`}
      />
      {hint && <p className="text-[10px] text-muted-foreground">{hint}</p>}
    </div>
  );
}

// FormSwitch
export interface FormSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function FormSwitch({ checked, onChange, disabled = false }: FormSwitchProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed ${
        checked ? "bg-emerald-600" : "bg-muted-foreground/20"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-200 ease-in-out ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

// FormSelect
export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
}

export function FormSelect({ label, options, className = "", ...props }: FormSelectProps) {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="text-[12.5px] font-semibold text-foreground block">{label}</label>}
      <select
        {...props}
        className={`h-9 w-full rounded-xl border border-border/60 bg-background px-3 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all ${className}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
