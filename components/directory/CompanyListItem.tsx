import { MapPin, BadgeCheck } from "lucide-react";
import type { DirectoryCompany } from "@/data/companies";
import { RatingStars } from "./RatingStars";
import { CompanyLogo } from "./CompanyLogo";

interface CompanyListItemProps {
  company: DirectoryCompany;
  rank?: number;
}

export function CompanyListItem({ company, rank }: CompanyListItemProps) {
  return (
    <article
      className="group flex flex-col sm:flex-row gap-5 rounded-2xl bg-white border border-[#E5E7EB] p-5 sm:p-6 transition-all duration-300 hover:border-[#047857]/30 hover:shadow-[0_10px_30px_-15px_rgba(4,120,87,0.18)]"
      aria-labelledby={`row-${company.id}-title`}
    >
      <div className="flex items-start gap-4 sm:w-[280px] shrink-0">
        {typeof rank === "number" && (
          <span className="font-heading font-extrabold text-xl text-[#94A3B8] w-7 shrink-0 leading-none mt-3">
            {String(rank).padStart(2, "0")}
          </span>
        )}
        <CompanyLogo name={company.name} logoUrl={company.logoUrl} size={56} />
        <div className="min-w-0">
          <h3
            id={`row-${company.id}-title`}
            className="font-heading font-bold text-[#064E3B] text-lg leading-tight"
          >
            {company.name}
            {company.verified && (
              <BadgeCheck
                className="inline-block w-4 h-4 ml-1 text-[#047857] align-text-bottom"
                aria-label="Verified"
              />
            )}
          </h3>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-[#475569]">
            <MapPin className="w-3.5 h-3.5 text-[#047857]" />
            <span className="truncate">{company.location}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        {typeof company.rating === "number" && (
          <RatingStars
            rating={company.rating}
            reviewCount={company.reviewCount}
            size="md"
          />
        )}
        <p className="mt-2 text-sm leading-relaxed text-[#475569] line-clamp-2">
          {company.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {company.services.slice(0, 5).map((s) => (
            <span
              key={s}
              className="inline-block rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#334155]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

    </article>
  );
}
