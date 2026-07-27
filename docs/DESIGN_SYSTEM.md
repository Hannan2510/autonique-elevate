# Autonique Design System Spec

This specification details the typographic tokens, OkLCH color schemes, visual assets, grid coordinates, and reusable components that make up the Autonique interface.

---

## 1. Color Palette (OkLCH Tokens)

The system relies on modern CSS variables bound inside the `@theme` direct line in `src/styles.css`. Color shades are mapped to modern OKLCH color spaces:

| Token | HSL / Hex Equivalent | CSS Variable binding | Role |
| :--- | :--- | :--- | :--- |
| **Mint Brand** | `#0D9488` | `--color-primary` | Main CTA and highlights |
| **Emerald Accent**| `#0F766E` | `--color-primary-dark` | Header gradients and active borders |
| **Lime Delta** | `#84cc16` | `--color-success` | Positive growth metrics |
| **Slate Gray** | `#0F172A` | `--color-foreground` | Deep headings |
| **Slate Muted** | `#64748B` | `--color-muted-foreground` | Secondary descriptors and captions |
| **White Frost** | `#F8FFFE` | `--color-background` | Default canvas background |
| **Teal Deep** | `#061514` | `--color-dark-background` | Dark mode canvas background |

---

## 2. Typography & Fonts

We connect Google Web Fonts in `__root.tsx` to provide crisp typography across screens:

* **Interface Font**: [Inter](https://fonts.google.com/specimen/Inter) — used for all labels, grids, buttons, and form inputs.
* **Code / Numeric Font**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — used for invoice IDs, timestamps, balance counters, dates, and percentage indicators.
* **Typographic Hierarchy**:
  * Headings (`H1` to `H3`): `font-display`, `font-bold` | `font-black`, `tracking-tight`.
  * Ratios/Vitals: `font-mono`, `text-[13px]`, `font-semibold`.
  * Table Cells / Form labels: `text-[11.5px]`, `font-semibold`, `text-foreground`.

---

## 3. Visual FX (Glows & Animations)

To deliver a premium interface, the CSS system employs active visual decorators:

1. **Frosted Glassmorphism**:
   * Backdrop filter directive: `backdrop-blur-xl`.
   * Transparent border trims: `border border-border/50` or `border-white/10`.
2. **Keyframe Animations**:
   * `animate-float-slow`: A vertical sine floating loop (used on background decoration spheres).
   * `animate-shimmer`: Left-to-right gradient translation (used on skeletons).
   * `animate-pulse-glow`: Opacity pulsing (used on the "Live Sync" indicators).

---

## 4. Reusable Component APIs

### 4.1 `<MetricCard>`
Enforces standard KPI tiles:
```typescript
interface MetricCardProps {
  title: string;
  value: string;
  badgeLabel?: string;
  delta?: string;
  up?: boolean;
  icon: LucideIcon;
  cardClass?: string;
}
```

### 4.2 `<DataTable>`
Provides generic listing and filtering wrappers:
```typescript
interface Column<T> {
  header: React.ReactNode;
  accessor?: keyof T;
  render?: (item: T, index: number) => React.ReactNode;
}

interface FilterTab<T> {
  label: string;
  value: string;
  filterFn: (item: T) => boolean;
}
```

### 4.3 `<EmptyState>`
Displays clean empty screens:
```typescript
interface EmptyStateProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText?: string;
  onActionClick?: () => void;
}
```
