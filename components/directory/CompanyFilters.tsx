"use client";

import { Search, X, SlidersHorizontal } from "lucide-react";
import type { SortKey } from "@/lib/companyService";
import type { CompanyCategory } from "@/data/companies";

export interface FilterState {
  search: string;
  country: string;
  service: string;
  category: CompanyCategory | "";
  minRating: number;
  sort: SortKey;
}

interface CompanyFiltersProps {
  state: FilterState;
  onChange: (next: FilterState) => void;
  countryOptions: string[];
  serviceOptions: string[];
  /** When provided, renders the Category select. */
  categoryOptions?: CompanyCategory[];
  resultCount: number;
}

const RATING_OPTIONS = [
  { value: 0, label: "Any rating" },
  { value: 4.5, label: "4.5+ stars" },
  { value: 4.0, label: "4.0+ stars" },
  { value: 3.5, label: "3.5+ stars" },
];

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "rating", label: "Top rated" },
  { value: "reviews", label: "Most reviews" },
  { value: "name", label: "Name (A–Z)" },
];

export function CompanyFilters({
  state,
  onChange,
  countryOptions,
  serviceOptions,
  categoryOptions,
  resultCount,
}: CompanyFiltersProps) {
  const update = (patch: Partial<FilterState>) => onChange({ ...state, ...patch });
  const hasActive =
    !!state.search ||
    !!state.country ||
    !!state.service ||
    !!state.category ||
    state.minRating > 0;

  const clearAll = () =>
    onChange({ search: "", country: "", service: "", category: "", minRating: 0, sort: state.sort });

  const hasCategory = categoryOptions && categoryOptions.length > 0;

  return (
    <div className="rounded-2xl bg-white border border-[#E5E7EB] p-5 sm:p-6 shadow-[0_4px_20px_-12px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-4 h-4 text-[#047857]" />
        <h2 className="font-heading font-bold text-[#064E3B] text-sm uppercase tracking-wider">
          Filter companies
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
        {/* Search */}
        <div className="relative sm:col-span-2 lg:col-span-4">
          <label htmlFor="directory-search" className="sr-only">
            Search companies
          </label>
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
          <input
            id="directory-search"
            type="search"
            value={state.search}
            onChange={(e) => update({ search: e.target.value })}
            placeholder="Search by name, service, or description…"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#064E3B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#047857] focus:ring-2 focus:ring-[#047857]/15 transition-all"
          />
        </div>

        {/* Category (industry) — rendered only when caller provides options */}
        {hasCategory && (
          <div className="lg:col-span-2">
            <label htmlFor="directory-category" className="sr-only">
              Filter by category
            </label>
            <select
              id="directory-category"
              value={state.category}
              onChange={(e) => update({ category: e.target.value as CompanyCategory | "" })}
              className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#064E3B] focus:outline-none focus:border-[#047857] focus:ring-2 focus:ring-[#047857]/15 transition-all"
            >
              <option value="">All categories</option>
              {categoryOptions!.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Country */}
        <div className="lg:col-span-2">
          <label htmlFor="directory-country" className="sr-only">
            Filter by location
          </label>
          <select
            id="directory-country"
            value={state.country}
            onChange={(e) => update({ country: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#064E3B] focus:outline-none focus:border-[#047857] focus:ring-2 focus:ring-[#047857]/15 transition-all"
          >
            <option value="">All locations</option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Service */}
        <div className="lg:col-span-2">
          <label htmlFor="directory-service" className="sr-only">
            Filter by service
          </label>
          <select
            id="directory-service"
            value={state.service}
            onChange={(e) => update({ service: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#064E3B] focus:outline-none focus:border-[#047857] focus:ring-2 focus:ring-[#047857]/15 transition-all"
          >
            <option value="">All services</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Rating — omitted on directories that show Category instead */}
        {!hasCategory && (
          <div className="lg:col-span-2">
            <label htmlFor="directory-rating" className="sr-only">
              Filter by minimum rating
            </label>
            <select
              id="directory-rating"
              value={state.minRating}
              onChange={(e) => update({ minRating: Number(e.target.value) })}
              className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#064E3B] focus:outline-none focus:border-[#047857] focus:ring-2 focus:ring-[#047857]/15 transition-all"
            >
              {RATING_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Sort */}
        <div className="lg:col-span-2">
          <label htmlFor="directory-sort" className="sr-only">
            Sort companies
          </label>
          <select
            id="directory-sort"
            value={state.sort}
            onChange={(e) => update({ sort: e.target.value as SortKey })}
            className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#064E3B] focus:outline-none focus:border-[#047857] focus:ring-2 focus:ring-[#047857]/15 transition-all"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                Sort: {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Footer row */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#F1F5F9]">
        <p className="text-sm text-[#475569]">
          Showing{" "}
          <span className="font-semibold text-[#064E3B]">{resultCount}</span>{" "}
          {resultCount === 1 ? "company" : "companies"}
        </p>
        {hasActive && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#047857] hover:text-[#065F46] transition-colors"
          >
            <X className="w-4 h-4" /> Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
