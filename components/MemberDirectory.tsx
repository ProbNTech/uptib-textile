"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, X, Building2 } from "lucide-react";
import {
  members,
  companyTypes,
  sectorOptions,
  technologyOptions,
  type Member,
} from "@/data/members";

/* ── Dropdown filter ───────────────────────────────────────────── */

function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D8D5CF] bg-white text-base text-[#16291E] hover:border-[#2F7549]/40 transition-colors w-full justify-between"
      >
        <span className={value ? "text-[#16291E]" : "text-[#6B7280]"}>
          {value || label}
        </span>
        <ChevronDown className={`w-4 h-4 text-[#6B7280] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute z-40 top-full left-0 mt-1 w-full min-w-[200px] bg-white border border-[#D8D5CF] rounded-lg shadow-lg py-1 max-h-60 overflow-y-auto">
            <button
              type="button"
              onClick={() => { onChange(""); setOpen(false); }}
              className="w-full text-left px-4 py-2 text-base text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
            >
              All
            </button>
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2 text-base transition-colors ${
                  value === opt
                    ? "bg-[#2F7549]/5 text-[#2F7549] font-medium"
                    : "text-[#16291E] hover:bg-[#F3F4F6]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Member card ───────────────────────────────────────────────── */

function MemberCard({ member }: { member: Member }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group block bg-white border border-[#D8D5CF] rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Logo area */}
      <div className="h-44 bg-[#F8FAFC] flex items-center justify-center px-8 py-8 border-b border-[#EEECEA]">
        {member.logo && !imgError ? (
          <Image
            src={member.logo}
            alt={member.name}
            width={320}
            height={160}
            className="w-full h-full object-contain"
            style={member.logoScale ? { transform: `scale(${member.logoScale})` } : undefined}
            onError={() => setImgError(true)}
          />
        ) : (
          <Building2 className="w-12 h-12 text-[#D1D5DB]" />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-[#16291E] text-lg mb-1 group-hover:text-[#2F7549] transition-colors">
          {member.name}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="inline-block px-2 py-0.5 rounded-full bg-[#2F7549]/8 text-[#2F7549] text-base font-semibold uppercase tracking-wide">
            {member.companyType}
          </span>
        </div>

        <p className="text-base text-[#4B5563] leading-relaxed mb-4 line-clamp-3">
          {member.description}
        </p>

        {member.location && (
          <p className="text-base text-[#6B7280]">{member.location}</p>
        )}
      </div>
    </div>
  );
}

/* ── Main directory ────────────────────────────────────────────── */

export function MemberDirectory() {
  const [search, setSearch] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [sector, setSector] = useState("");
  const [technology, setTechnology] = useState("");

  const activeFilterCount = [companyType, sector, technology].filter(Boolean).length;

  const filtered = useMemo(() => {
    return members.filter((m) => {
      if (search) {
        const q = search.toLowerCase();
        const haystack = `${m.name} ${m.description} ${m.companyType} ${m.sectors.join(" ")} ${m.technologies.join(" ")} ${m.location}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (companyType && m.companyType !== companyType) return false;
      if (sector && !m.sectors.includes(sector)) return false;
      if (technology && !m.technologies.includes(technology)) return false;
      return true;
    });
  }, [search, companyType, sector, technology]);

  const clearFilters = () => {
    setSearch("");
    setCompanyType("");
    setSector("");
    setTechnology("");
  };

  return (
    <section className="py-8 lg:py-12" style={{ backgroundColor: "#EEECEA" }}>
      <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* ── Section banner ─────────────────────────────── */}
        <div className="relative overflow-hidden rounded mb-6 -mx-2 sm:-mx-4" style={{ background: "linear-gradient(135deg, #15402A 0%, #15402A 100%)" }}>
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "linear-gradient(to bottom, #3C8F5E, #15402A)" }} />
          <div className="absolute top-0 right-0 w-40 h-full opacity-[0.06]" style={{ background: "radial-gradient(circle at 80% 30%, white 0%, transparent 70%)" }} />
          <div className="py-5 px-7 sm:px-10 pl-8 sm:pl-12">
            <p className="text-base font-bold uppercase tracking-[0.2em] mb-1.5" style={{ color: "#8FD3AE" }}>Member Directory</p>
            <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight">
              Browse Our Members
            </h2>
          </div>
        </div>

        {/* ── Filter bar ──────────────────────────────────── */}
        <div className="bg-white border border-[#D8D5CF] rounded-lg p-5 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search members..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D8D5CF] text-base text-[#16291E] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2F7549] transition-colors"
              />
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:flex lg:gap-3">
              <FilterDropdown
                label="Company Type"
                options={companyTypes}
                value={companyType}
                onChange={setCompanyType}
              />
              <FilterDropdown
                label="Sector"
                options={sectorOptions}
                value={sector}
                onChange={setSector}
              />
              <FilterDropdown
                label="Technology"
                options={technologyOptions}
                value={technology}
                onChange={setTechnology}
              />
            </div>
          </div>

          {/* Active filters */}
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#EEECEA]">
              <span className="text-base text-[#6B7280]">Active filters:</span>
              {companyType && (
                <button
                  onClick={() => setCompanyType("")}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2F7549]/8 text-[#2F7549] text-base font-medium hover:bg-[#2F7549]/15 transition-colors"
                >
                  {companyType}
                  <X className="w-3 h-3" />
                </button>
              )}
              {sector && (
                <button
                  onClick={() => setSector("")}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2F7549]/8 text-[#2F7549] text-base font-medium hover:bg-[#2F7549]/15 transition-colors"
                >
                  {sector}
                  <X className="w-3 h-3" />
                </button>
              )}
              {technology && (
                <button
                  onClick={() => setTechnology("")}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2F7549]/8 text-[#2F7549] text-base font-medium hover:bg-[#2F7549]/15 transition-colors"
                >
                  {technology}
                  <X className="w-3 h-3" />
                </button>
              )}
              <button
                onClick={clearFilters}
                className="text-base text-[#6B7280] hover:text-[#16291E] underline ml-2 transition-colors"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* ── Results count ───────────────────────────────── */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-base text-[#4B5563]">
            Showing <span className="font-semibold text-[#16291E]">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "member" : "members"}
          </p>
        </div>

        {/* ── Card grid ───────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filtered.map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#D8D5CF] rounded-lg p-12 text-center mb-10">
            <Search className="w-10 h-10 text-[#D1D5DB] mx-auto mb-3" />
            <h3 className="font-heading font-bold text-[#16291E] text-lg mb-2">
              No members found
            </h3>
            <p className="text-base text-[#4B5563] mb-4">
              Try adjusting your search or filters.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16291E] text-white text-base font-semibold hover:bg-[#2F7549] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ── CTA ─────────────────────────────────────────── */}
        <div className="bg-white border border-[#D8D5CF] rounded-lg p-10 text-center">
          <h2 className="font-heading font-bold text-[#16291E] text-xl mb-3">
            Want to be listed here?
          </h2>
          <p className="text-[#4B5563] text-base leading-relaxed mx-auto mb-6">
            Join our growing network of technology companies, investors, and
            professionals driving UK–Pakistan bilateral growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#16291E] text-white text-base font-semibold hover:bg-[#2F7549] transition-colors duration-300"
            >
              Become a Member
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#16291E] text-[#16291E] text-base font-semibold hover:bg-[#16291E] hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
