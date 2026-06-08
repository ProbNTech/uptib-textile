"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

type FilterType = "all" | "upcoming" | "past" | "news";
type SortType = "newest" | "oldest";

interface EventFiltersProps {
  onFilterChange?: (filter: FilterType) => void;
  onSortChange?: (sort: SortType) => void;
  onSearchChange?: (query: string) => void;
}

export function EventFilters({
  onFilterChange,
  onSortChange,
  onSearchChange,
}: EventFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [sortBy, setSortBy] = useState<SortType>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
    onFilterChange?.(filter);
  };

  const handleSortChange = (sort: SortType) => {
    setSortBy(sort);
    setIsSortOpen(false);
    onSortChange?.(sort);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-12">
      {/* Search input */}
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569]" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#047857]/20 focus:border-[#047857]/40 transition-all text-base"
        />
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap">
        {(
          [
            { id: "all" as FilterType, label: "All" },
            { id: "upcoming" as FilterType, label: "Upcoming" },
            { id: "past" as FilterType, label: "Past" },
            { id: "news" as FilterType, label: "News" },
          ] as const
        ).map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            disabled={filter.id === "news"}
            className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
              activeFilter === filter.id
                ? "bg-[#047857] text-white shadow-sm"
                : "bg-white border border-gray-100 text-[#475569] hover:border-[#047857]/30"
            } ${
              filter.id === "news"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#047857]/5"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Sort dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-100 bg-white text-base font-medium text-[#475569] hover:border-[#047857]/30 hover:bg-[#047857]/5 transition-all"
        >
          <span>Sort: {sortBy === "newest" ? "Newest" : "Oldest"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isSortOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isSortOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsSortOpen(false)}
            />
            <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl border border-gray-100 shadow-lg z-20 overflow-hidden">
              <button
                onClick={() => handleSortChange("newest")}
                className={`w-full text-left px-4 py-2 text-base transition-colors ${
                  sortBy === "newest"
                    ? "bg-[#047857]/5 text-[#047857] font-medium"
                    : "text-[#475569] hover:bg-gray-50"
                }`}
              >
                Newest
              </button>
              <button
                onClick={() => handleSortChange("oldest")}
                className={`w-full text-left px-4 py-2 text-base transition-colors ${
                  sortBy === "oldest"
                    ? "bg-[#047857]/5 text-[#047857] font-medium"
                    : "text-[#475569] hover:bg-gray-50"
                }`}
              >
                Oldest
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
