"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { DirectoryCompany, CompanyCategory } from "@/data/companies";
import { CATEGORY_STYLE } from "./categoryStyle";

interface IndustriesSpotlightProps {
  companies: DirectoryCompany[];
}

/** Order matters — drives card display order. */
const INDUSTRY_ORDER: CompanyCategory[] = [
  "AI & Automation",
  "SaaS Products",
  "Software Development",
  "Consulting",
];

export function IndustriesSpotlight({ companies }: IndustriesSpotlightProps) {
  const buckets = INDUSTRY_ORDER.map((category) => ({
    category,
    style: CATEGORY_STYLE[category],
    items: companies.filter((c) => c.category === category),
  })).filter((b) => b.items.length > 0);

  if (buckets.length === 0) return null;

  return (
    <section
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
      aria-labelledby="industries-heading"
    >
      {/* Soft brand wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px circle at 0% 0%, rgba(31,79,216,0.06), transparent 60%), radial-gradient(700px circle at 100% 100%, rgba(1,169,92,0.06), transparent 60%)",
        }}
      />

      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-2xl mb-10">
          <span className="inline-block rounded-full bg-[#D1FAE5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#065F46]">
            By industry
          </span>
          <h2
            id="industries-heading"
            className="mt-3 font-heading font-extrabold text-[#064E3B] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
          >
            Built across four core specialisms
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            Every member is grouped by what they actually deliver — not generic
            labels. Click a category in the directory to filter on it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {buckets.map((b, i) => {
            const Icon = b.style.icon;
            return (
              <motion.article
                key={b.category}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent"
                style={{ boxShadow: "0 10px 30px -18px rgba(15,23,42,0.18)" }}
              >
                {/* Hover gradient halo */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(800px circle at 0% 0%, ${b.style.color}15, transparent 60%)`,
                  }}
                />

                {/* Accent gradient border on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    padding: 1,
                    background: b.style.gradient,
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Top stripe */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: b.style.gradient }}
                />

                <div className="relative">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ring-1 ring-inset"
                    style={{
                      background: `${b.style.color}12`,
                      color: b.style.color,
                      boxShadow: `inset 0 0 0 1px ${b.style.color}25`,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-[#064E3B] text-lg leading-tight">
                    {b.category}
                  </h3>
                  <p className="mt-2 text-sm text-[#475569] leading-relaxed line-clamp-2 min-h-[40px]">
                    {b.style.short}
                  </p>

                  {/* Company logos in this bucket */}
                  <div className="mt-5 flex items-center gap-2 flex-wrap">
                    {b.items.slice(0, 4).map((c) =>
                      c.logoUrl ? (
                        <div
                          key={c.id}
                          title={c.name}
                          className="relative w-8 h-8 rounded-lg bg-white overflow-hidden ring-1 ring-[#E5E7EB]"
                        >
                          <Image
                            src={c.logoUrl}
                            alt={`${c.name} logo`}
                            fill
                            sizes="32px"
                            className="object-contain p-1"
                          />
                        </div>
                      ) : (
                        <span
                          key={c.id}
                          title={c.name}
                          className="inline-flex w-8 h-8 items-center justify-center rounded-lg text-[10px] font-bold ring-1 ring-[#E5E7EB]"
                          style={{ color: b.style.color, background: `${b.style.color}10` }}
                        >
                          {c.name.split(" ").slice(0, 2).map((p) => p[0]).join("")}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: b.style.color }}
                    >
                      {b.items.length}{" "}
                      <span className="text-[#64748B] font-medium">
                        {b.items.length === 1 ? "company" : "companies"}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: b.style.color }}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
