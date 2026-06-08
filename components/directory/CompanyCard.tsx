"use client";

import { MapPin, BadgeCheck } from "lucide-react";
import type { DirectoryCompany } from "@/data/companies";
import { RatingStars } from "./RatingStars";
import { CompanyLogo } from "./CompanyLogo";
import { getCategoryStyle } from "./categoryStyle";

interface CompanyCardProps {
  company: CompanyDirectoryCardEntry;
}

export type CompanyDirectoryCardEntry = DirectoryCompany;

export function CompanyCard({ company }: CompanyCardProps) {
  const style = getCategoryStyle(company.category);
  const Icon = style.icon;

  return (
    <article
      className="group relative flex h-full flex-col rounded-2xl bg-white border border-[#E5E7EB] p-6 pt-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent"
      aria-labelledby={`company-${company.id}-title`}
      style={{
        boxShadow: "0 6px 24px -16px rgba(15,23,42,0.18)",
      }}
    >
      {/* Top accent strip — category colour */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{ background: style.gradient }}
      />

      {/* Hover glow tinted by category */}
      <div
        aria-hidden="true"
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 18px 40px -18px ${style.color}55, inset 0 0 0 1px ${style.color}40`,
        }}
      />

      {/* Header: logo + name + rating */}
      <div className="relative flex items-start gap-5">
        <CompanyLogo
          name={company.name}
          logoUrl={company.logoUrl}
          size={84}
          className="shadow-[0_8px_24px_-14px_rgba(15,23,42,0.25)]"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3
              id={`company-${company.id}-title`}
              className="font-heading font-bold text-[#064E3B] text-xl leading-tight truncate"
            >
              {company.name}
            </h3>
            {company.verified && company.source !== "Member" && (
              <span
                className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#D1FAE5] px-2 py-0.5 text-[11px] font-semibold text-[#065F46]"
                title="Verified by source"
              >
                <BadgeCheck className="w-3 h-3" /> Verified
              </span>
            )}
          </div>

          {/* Location */}
          <div className="mt-2 flex items-center gap-1.5 text-sm text-[#475569]">
            <MapPin className="w-4 h-4 shrink-0" style={{ color: style.color }} />
            <span className="truncate">{company.location}</span>
          </div>

          {/* Rating / verified member */}
          <div className="mt-2">
            {typeof company.rating === "number" ? (
              <RatingStars rating={company.rating} reviewCount={company.reviewCount} />
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#047857]">
                <BadgeCheck className="w-3 h-3" /> Verified member
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Category chip — colour-coded (full width below the header) */}
      <div className="relative mt-4">
        <span
          className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{
            background: `${style.color}12`,
            color: style.color,
            boxShadow: `inset 0 0 0 1px ${style.color}30`,
          }}
        >
          <Icon className="w-3 h-3" />
          {company.category}
        </span>
      </div>

      {/* Description */}
      <p className="relative mt-3 text-sm leading-relaxed text-[#475569] line-clamp-3">
        {company.description}
      </p>

      {/* Service tags */}
      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {company.services.slice(0, 4).map((s) => (
          <span
            key={s}
            className="inline-block rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#334155]"
          >
            {s}
          </span>
        ))}
      </div>

    </article>
  );
}
