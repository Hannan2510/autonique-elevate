import React, { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export interface Column<T> {
  header: React.ReactNode;
  accessor?: keyof T;
  render?: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export interface FilterTab<T> {
  label: string;
  value: string;
  filterFn: (item: T) => boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchPlaceholder?: string;
  searchKeys?: (keyof T)[];
  filterTabs?: FilterTab<T>[];
  loading?: boolean;
  emptyState?: React.ReactNode;
  onRowClick?: (item: T) => void;
  pageSize?: number;
}

export function DataTable<T>({
  data,
  columns,
  searchPlaceholder = "Search...",
  searchKeys = [],
  filterTabs,
  loading = false,
  emptyState,
  onRowClick,
  pageSize = 5,
}: DataTableProps<T>) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState(filterTabs?.[0]?.value ?? "all");
  const [currentPage, setCurrentPage] = useState(1);

  // Apply filters
  const filteredData = useMemo(() => {
    let result = [...data];

    // Filter by tab
    if (filterTabs && activeTab !== "all") {
      const activeFilter = filterTabs.find((t) => t.value === activeTab);
      if (activeFilter) {
        result = result.filter(activeFilter.filterFn);
      }
    }

    // Filter by search query
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((item) => {
        return searchKeys.some((key) => {
          const val = item[key];
          if (val === undefined || val === null) return false;
          return String(val).toLowerCase().includes(q);
        });
      });
    }

    return result;
  }, [data, query, activeTab, filterTabs, searchKeys]);

  // Pagination bounds
  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const paginatedData = useMemo(() => {
    // Reset page if it exceeds bounds
    const page = currentPage > totalPages ? 1 : currentPage;
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, totalPages, pageSize]);

  const handlePrevPage = () => {
    setCurrentPage((p) => Math.max(1, p - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((p) => Math.min(totalPages, p + 1));
  };

  return (
    <div className="space-y-4">
      {/* Top Filter & Search Bar */}
      {(searchKeys.length > 0 || filterTabs) && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-xl bg-card border border-border/50 px-4 py-3 shadow-2xs">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {searchKeys.length > 0 && (
              <div className="relative flex-1 max-w-sm">
                <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder={searchPlaceholder}
                  className="h-8 w-full rounded-lg border border-border/60 bg-background pl-9 pr-3 text-[12px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all"
                />
              </div>
            )}

            {/* Tab Filters */}
            {filterTabs && (
              <div className="hidden sm:flex items-center gap-0.5 rounded-lg bg-muted/60 p-0.5 text-[11px] font-medium border border-border/30">
                {filterTabs.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => {
                      setActiveTab(t.value);
                      setCurrentPage(1);
                    }}
                    className={`rounded-md px-3 py-1 capitalize transition-all cursor-pointer ${
                      activeTab === t.value
                        ? "bg-background text-foreground shadow-sm font-semibold border border-border/40"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 text-[11px] text-muted-foreground font-mono">
            <span>{filteredData.length} records</span>
          </div>
        </div>
      )}

      {/* Main Table */}
      <div className="overflow-hidden rounded-xl border border-border/40 bg-card shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-border/40 bg-muted/15">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className={`px-4.5 py-3 font-semibold text-muted-foreground tracking-tight ${col.className ?? ""}`}
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                /* Pulsing loader row fallback */
                [1, 2, 3].map((n) => (
                  <tr key={n} className="border-b border-border/20 last:border-none animate-pulse">
                    {columns.map((_, colIdx) => (
                      <td key={colIdx} className="px-4.5 py-4">
                        <div className="h-3 bg-muted rounded w-2/3" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : paginatedData.length === 0 ? (
                /* Empty row fallback */
                <tr>
                  <td colSpan={columns.length} className="text-center py-10">
                    {emptyState ?? (
                      <div className="text-muted-foreground py-4">
                        No records matching the current selection.
                      </div>
                    )}
                  </td>
                </tr>
              ) : (
                /* Data rows */
                paginatedData.map((item, rowIdx) => (
                  <tr
                    key={rowIdx}
                    onClick={() => onRowClick?.(item)}
                    className={`border-b border-border/20 last:border-none transition-colors ${
                      onRowClick ? "hover:bg-accent/40 cursor-pointer" : ""
                    }`}
                  >
                    {columns.map((col, colIdx) => (
                      <td key={colIdx} className={`px-4.5 py-3.5 text-foreground ${col.className ?? ""}`}>
                        {col.render
                          ? col.render(item, rowIdx)
                          : col.accessor
                          ? (item[col.accessor] as React.ReactNode)
                          : null}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Toolbar */}
        {!loading && filteredData.length > pageSize && (
          <div className="flex items-center justify-between border-t border-border/40 px-4 py-3 bg-muted/5">
            <span className="text-[11px] text-muted-foreground font-mono">
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex gap-1">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="grid h-7 w-7 place-items-center rounded-md border border-border/80 bg-background text-foreground hover:bg-accent disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="grid h-7 w-7 place-items-center rounded-md border border-border/80 bg-background text-foreground hover:bg-accent disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
