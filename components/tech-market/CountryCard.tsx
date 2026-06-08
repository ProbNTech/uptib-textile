"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { CountryMarketData } from "@/lib/data/market-data";

const flagMap: Record<string, string> = {
  GB: "/image/flags/gb.svg",
  DE: "/image/flags/de.svg",
  FR: "/image/flags/fr.svg",
  ES: "/image/flags/es.svg",
  NL: "/image/flags/nl.svg",
  CH: "/image/flags/ch.svg",
  PL: "/image/flags/pl.svg",
  EE: "/image/flags/ee.svg",
};

interface CountryCardProps {
  country: CountryMarketData;
  index: number;
}

export function CountryCard({ country, index }: CountryCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const flagSrc = flagMap[country.countryCode] ?? flagMap["GB"];

  return (
    <motion.div
    className="h-full"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/ecosystem/tech-market-overview/${country.slug}`}
        className="group block h-full"
      >
        <div className="relative h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  {/* Gradient Header */}
<div className="relative bg-gradient-to-r from-[#1e3a5f] to-[#047857] rounded-xl overflow-hidden">
  {/* Content */}
  <div className="px-5 pt-5 pb-10">
    <h3 className="text-white font-bold text-lg">{country.name}</h3>
    <p className="text-red-100 text-sm mt-1">
      {country.tagline}
    </p>
  </div>

  {/* Glow effect */}
  <div
    className="absolute top-0 right-0 w-32 h-full opacity-[0.08]"
    style={{
      background: "radial-gradient(circle at 80% 30%, white, transparent 70%)"
    }}
  />
</div>

  {/* Circular Flag */}
  <div className="absolute right-5 top-[52px] w-[72px] h-[72px] rounded-full border-2 border-white shadow-lg overflow-hidden">
    <Image src={flagSrc} alt={`${country.name} flag`} fill className="object-cover" />
  </div>

  {/* Card Content */}
  <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
    {/* Sectors */}
    <div className="flex flex-wrap gap-1.5 mb-4 min-h-[56px]">
      {country.highDemandSectors.slice(0, 3).map((sector) => (
        <span key={sector} className="text-[11px] px-2.5 py-1 rounded-full bg-[#f0f4ff] text-[#047857] font-semibold border border-[#047857]/10 h-fit">{sector}</span>
      ))}
    </div>

    {/* Highlights */}
    <div className="grid grid-cols-3 gap-2 mb-2">
      {country.highlights.slice(0, 3).map((h, i) => (
        <div key={h.label} className={`rounded-lg py-2.5 px-2.5 border ${i === 2 ? "bg-gradient-to-br from-[#fffbeb] to-[#fef3c7] border-[#f59e0b]/20" : "bg-gradient-to-br from-[#f8fafc] to-[#f0f4ff] border-[#e2e8f0]"}`}>
          <p className={`font-bold text-[13px] leading-tight ${i === 2 ? "text-[#f59e0b]" : "text-[#10B981]"}`}>{h.value}</p>
          <p className="text-[#6b7280] text-[10px] mt-0.5 leading-tight">{h.label}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex items-center text-sm font-semibold text-[#047857] gap-1.5 pt-2.5 mt-auto border-t border-gray-100 group-hover:gap-2.5 transition-all duration-300">
      Explore Market
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </div>
  </div>
</div>
      </Link>
    </motion.div>
  );
}
