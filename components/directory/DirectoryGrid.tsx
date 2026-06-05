"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import type { Certification, City, ProductCategory } from "@/types";
import {
  companies,
  directoryCategories,
  directoryCertifications,
  directoryCities,
} from "@/data/companies";
import { CompanyCard } from "./CompanyCard";
import { DirectoryFilters } from "./DirectoryFilters";

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

export function DirectoryGrid() {
  const [cats, setCats] = useState<ProductCategory[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [certs, setCerts] = useState<Certification[]>([]);

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      const catOk =
        cats.length === 0 || cats.some((cat) => c.categories.includes(cat));
      const cityOk = cities.length === 0 || cities.includes(c.location);
      const certOk =
        certs.length === 0 ||
        certs.some((cert) => c.certifications.includes(cert));
      return catOk && cityOk && certOk;
    });
  }, [cats, cities, certs]);

  const hasFilters = cats.length + cities.length + certs.length > 0;

  return (
    <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
      <div className="lg:sticky lg:top-24">
        <DirectoryFilters
          categories={{
            options: directoryCategories,
            selected: cats,
            onToggle: (v) => setCats((s) => toggle(s, v)),
          }}
          locations={{
            options: directoryCities,
            selected: cities,
            onToggle: (v) => setCities((s) => toggle(s, v)),
          }}
          certifications={{
            options: directoryCertifications,
            selected: certs,
            onToggle: (v) => setCerts((s) => toggle(s, v)),
          }}
          onClear={() => {
            setCats([]);
            setCities([]);
            setCerts([]);
          }}
          hasFilters={hasFilters}
          resultCount={filtered.length}
        />
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-surface p-12 text-center">
          <SearchX className="size-8 text-muted" aria-hidden />
          <p className="mt-3 font-semibold text-primary-dark">
            No companies match those filters
          </p>
          <p className="mt-1 text-sm text-muted">
            Try removing a filter — or ask us directly and we&apos;ll find a
            fit.
          </p>
        </div>
      )}
    </div>
  );
}
