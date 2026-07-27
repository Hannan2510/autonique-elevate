import React from "react";

// TableSkeleton
export function TableSkeleton({ rows = 4, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="border border-border/40 rounded-xl p-6 bg-card/30 space-y-4 animate-pulse">
      <div className="h-4.5 w-1/5 bg-muted rounded" />
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, rIdx) => (
          <div key={rIdx} className="flex gap-4 items-center">
            {Array.from({ length: cols }).map((_, cIdx) => (
              <div
                key={cIdx}
                className="h-4 bg-muted rounded"
                style={{ width: cIdx === 0 ? "120px" : cIdx === cols - 1 ? "80px" : "100%" }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// CardGridSkeleton
export function CardGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 animate-pulse">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="border border-border/40 rounded-xl p-5 bg-card/50 space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-muted rounded-full" />
            <div className="space-y-1 flex-1">
              <div className="h-3 w-2/3 bg-muted rounded" />
              <div className="h-2 w-1/2 bg-muted rounded" />
            </div>
          </div>
          <div className="h-2 w-full bg-muted rounded mt-2" />
          <div className="h-2 w-5/6 bg-muted rounded" />
        </div>
      ))}
    </div>
  );
}

// FormSkeleton
export function FormSkeleton({ items = 3 }: { items?: number }) {
  return (
    <div className="space-y-6 animate-pulse">
      {Array.from({ length: items }).map((_, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row gap-4 justify-between border-b border-border/20 py-4 last:border-0">
          <div className="space-y-2 max-w-xs w-full">
            <div className="h-4 w-1/2 bg-muted rounded" />
            <div className="h-3 w-3/4 bg-muted rounded" />
          </div>
          <div className="flex-1 max-w-lg w-full">
            <div className="h-9 bg-muted rounded-xl w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
