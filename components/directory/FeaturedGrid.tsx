import type { DirectoryCompany } from "@/data/companies";
import { CompanyCard } from "./CompanyCard";

interface FeaturedGridProps {
  companies: DirectoryCompany[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function FeaturedGrid({
  companies,
  eyebrow = "Featured",
  title = "Top-rated companies",
  description,
}: FeaturedGridProps) {
  if (companies.length === 0) return null;

  return (
    <section
      className="py-16 lg:py-20 bg-white"
      aria-labelledby="featured-companies-title"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-2xl mb-8">
          <span className="inline-block rounded-full bg-[#D1FAE5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#065F46]">
            {eyebrow}
          </span>
          <h2
            id="featured-companies-title"
            className="mt-3 font-heading font-extrabold text-[#064E3B] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base text-[#475569] leading-relaxed">{description}</p>
          )}
        </div>

        <div
          className={
            companies.length === 1
              ? "grid grid-cols-1 max-w-2xl"
              : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          }
        >
          {companies.map((c) => (
            <CompanyCard key={c.id} company={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
