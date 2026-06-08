"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/** Lightweight pagination — client-side over a filtered/sorted list. */
export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const goto = (p: number) => onPageChange(Math.max(1, Math.min(totalPages, p)));

  const pages: (number | "ellipsis")[] = [];
  const window = 1;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - window && i <= page + window)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "ellipsis") {
      pages.push("ellipsis");
    }
  }

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        onClick={() => goto(page - 1)}
        disabled={page <= 1}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] bg-white text-[#064E3B] hover:border-[#047857] hover:text-[#047857] disabled:opacity-40 disabled:hover:border-[#E2E8F0] disabled:hover:text-[#064E3B] transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span key={`e-${i}`} className="px-1 text-[#94A3B8]">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => goto(p)}
            aria-current={p === page ? "page" : undefined}
            className={`min-w-[40px] h-10 px-3 rounded-full text-sm font-semibold transition-colors ${
              p === page
                ? "bg-[#047857] text-white"
                : "bg-white border border-[#E2E8F0] text-[#064E3B] hover:border-[#047857] hover:text-[#047857]"
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => goto(page + 1)}
        disabled={page >= totalPages}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] bg-white text-[#064E3B] hover:border-[#047857] hover:text-[#047857] disabled:opacity-40 disabled:hover:border-[#E2E8F0] disabled:hover:text-[#064E3B] transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
