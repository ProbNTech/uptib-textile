"use client";

import { useMemo, useState } from "react";
import type { DirectoryCompany } from "@/data/companies";
import {
  filterCompanies,
  sortCompanies,
  getCountryOptions,
  getServiceOptions,
  getCategoryOptions,
} from "@/lib/companyService";
import { CompanyCard } from "./CompanyCard";
import { CompanyListItem } from "./CompanyListItem";
import { CompanyFilters, type FilterState } from "./CompanyFilters";
import { EmptyState } from "./EmptyState";
import { Pagination } from "./Pagination";

interface DirectoryViewProps {
  companies: DirectoryCompany[];
  /** "grid" — premium card grid. "list" — directory-style rows. */
  layout?: "grid" | "list";
  /** When set, paginate the results client-side. */
  pageSize?: number;
  initialSort?: FilterState["sort"];
  /** Optional fixed-position heading rendered above the filter bar. */
  heading?: string;
  /** Show the Category dropdown (industry filter). */
  showCategoryFilter?: boolean;
}

const DEFAULT_STATE: FilterState = {
  search: "",
  country: "",
  service: "",
  category: "",
  minRating: 0,
  sort: "rating",
};

export function DirectoryView({
  companies,
  layout = "grid",
  pageSize,
  initialSort = "rating",
  heading,
  showCategoryFilter = false,
}: DirectoryViewProps) {
  const [state, setState] = useState<FilterState>({ ...DEFAULT_STATE, sort: initialSort });
  const [page, setPage] = useState(1);

  const countryOptions = useMemo(() => getCountryOptions(companies), [companies]);
  const serviceOptions = useMemo(() => getServiceOptions(companies), [companies]);
  const categoryOptions = useMemo(
    () => (showCategoryFilter ? getCategoryOptions(companies) : undefined),
    [companies, showCategoryFilter]
  );

  const filtered = useMemo(() => {
    const result = filterCompanies(companies, {
      search: state.search,
      country: state.country,
      service: state.service,
      category: state.category,
      minRating: state.minRating,
    });
    return sortCompanies(result, state.sort);
  }, [companies, state]);

  const handleStateChange = (next: FilterState) => {
    setState(next);
    setPage(1);
  };

  const totalPages = pageSize ? Math.max(1, Math.ceil(filtered.length / pageSize)) : 1;
  const visible = pageSize ? filtered.slice((page - 1) * pageSize, page * pageSize) : filtered;

  return (
    <section className="py-12 lg:py-16 bg-[#F8FAFF]" aria-label="Company directory listings">
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        {heading && (
          <h2 className="font-heading font-extrabold text-[#064E3B] text-2xl sm:text-3xl tracking-tight mb-6">
            {heading}
          </h2>
        )}

        <CompanyFilters
          state={state}
          onChange={handleStateChange}
          countryOptions={countryOptions}
          serviceOptions={serviceOptions}
          categoryOptions={categoryOptions}
          resultCount={filtered.length}
        />

        <div className="mt-8">
          {visible.length === 0 ? (
            <EmptyState onReset={() => handleStateChange({ ...DEFAULT_STATE, sort: state.sort })} />
          ) : layout === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {visible.map((c) => (
                <CompanyCard key={c.id} company={c} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {visible.map((c, i) => (
                <CompanyListItem
                  key={c.id}
                  company={c}
                  rank={(page - 1) * (pageSize ?? 0) + i + 1}
                />
              ))}
            </div>
          )}
        </div>

        {pageSize && filtered.length > pageSize && (
          <div className="mt-10">
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        )}
      </div>
    </section>
  );
}
