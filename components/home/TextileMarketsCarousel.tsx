"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* Pakistan's textile export destinations — figures from the Pakistan Export
   Market Report 2026–2030. US, UK and the European corridors carry Pakistan's
   current annual export footprint; Germany is shown positionally as the EU's
   #1 apparel importer; Saudi Arabia and the UAE as the leading GCC markets. */
type TextileMarket = {
  name: string;
  flag: string;       // ISO code → /image/flags/{code}.svg
  badge: string;
  value: string;
  valueLabel: string;
  note: string;
  categories: string[];
  accent: string;
};

const markets: TextileMarket[] = [
  {
    name: "United States",
    flag: "us",
    badge: "Largest single market",
    value: "$4.3B+",
    valueLabel: "Pakistan textile exports / yr (2025)",
    note: "Pakistan ranks among the top-10 US textile suppliers — anchored in home textiles, knitwear and apparel.",
    categories: ["Home textiles", "Knitwear", "Apparel"],
    accent: "#2563EB",
  },
  {
    name: "United Kingdom",
    flag: "gb",
    badge: "Key market",
    value: "£1.5–2.0B",
    valueLabel: "Pakistan textile exports / yr",
    note: "One of Pakistan's most important destinations — strong in apparel, bedwear, towels and activewear.",
    categories: ["Apparel", "Bedwear", "Activewear"],
    accent: "#0D9488",
  },
  {
    name: "Spain",
    flag: "es",
    badge: "+11.2% / yr",
    value: "$1.69B",
    valueLabel: "Pakistan textile exports / yr",
    note: "Pakistan's third-largest EU partner — textiles are 85%+ of exports, led by house linens and menswear.",
    categories: ["House linens", "Menswear", "Knitwear"],
    accent: "#2F7549",
  },
  {
    name: "Italy",
    flag: "it",
    badge: "Target >$2B",
    value: "$1.1B",
    valueLabel: "Pakistan textile exports / yr",
    note: "Bed linens and trousers anchor the trade, with $311M of untapped potential still to capture.",
    categories: ["Bed linens", "Trousers", "Hosiery"],
    accent: "#16A34A",
  },
  {
    name: "Poland",
    flag: "pl",
    badge: "+16.1% / yr",
    value: "$1B+",
    valueLabel: "Pakistan textile exports / yr",
    note: "One of Europe's fastest-growing corridors — textiles make up ~90% of all Pakistani exports to Poland.",
    categories: ["Linens", "Denim", "Jersey"],
    accent: "#0891B2",
  },
  {
    name: "Germany",
    flag: "de",
    badge: "Top EU buyer",
    value: "EU #1",
    valueLabel: "apparel importer in Europe",
    note: "Europe's largest textile market (~20% share) and top destination for certified, sustainable goods.",
    categories: ["Knitwear", "Denim", "Technical"],
    accent: "#3C8F5E",
  },
  {
    name: "Saudi Arabia",
    flag: "sa",
    badge: "Largest GCC market",
    value: "$18–22B",
    valueLabel: "apparel market size",
    note: "The biggest single GCC opportunity — population growth and healthcare investment drive textile demand.",
    categories: ["Apparel", "Hospitality", "Medical"],
    accent: "#15803D",
  },
  {
    name: "United Arab Emirates",
    flag: "ae",
    badge: "Re-export hub",
    value: "$12–15B",
    valueLabel: "apparel market size",
    note: "A consumer market and regional re-export hub with rising home, hospitality and sportswear demand.",
    categories: ["Hotel linen", "Sportswear", "Re-export"],
    accent: "#0E7490",
  },
];

function MarketCard({ market }: { market: TextileMarket }) {
  return (
    <Link href="/global-textile-market" className="group block h-full w-[340px] flex-shrink-0">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Header */}
        <div className="relative z-0 min-h-[112px] overflow-hidden px-5 pt-5 pb-8" style={{ background: `linear-gradient(135deg, ${market.accent} 0%, #15402A 100%)` }}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-heading text-lg font-bold text-white">{market.name}</h3>
              <span className="mt-2 inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                {market.badge}
              </span>
            </div>
            {/* Flag */}
            <span className="relative block h-7 w-10 shrink-0 overflow-hidden rounded-md shadow-md ring-1 ring-white/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/image/flags/${market.flag}.svg`}
                alt={`${market.name} flag`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </span>
          </div>
        </div>

        {/* Value plate */}
        <div className="relative z-10 -mt-5 mx-5 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
          <p className="font-heading text-xl font-extrabold leading-none" style={{ color: market.accent }}>{market.value}</p>
          <p className="mt-1 text-[11px] text-[#6B7280]">{market.valueLabel}</p>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col px-5 pt-3 pb-5">
          <p className="text-[13px] leading-relaxed text-[#5A5F72]">{market.note}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {market.categories.map((c) => (
              <span key={c} className="rounded-full border border-[#2F7549]/10 bg-[#F0FDF4] px-2.5 py-1 text-[11px] font-semibold text-[#2F7549]">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-1.5 border-t border-gray-100 pt-3 text-sm font-semibold text-[#2F7549] transition-all group-hover:gap-2.5">
            Explore market
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function TextileMarketsCarousel() {
  const items = [...markets, ...markets]; // duplicate for a seamless marquee

  return (
    <div className="group relative overflow-hidden py-8">
      <div className="flex w-max items-stretch gap-6 animate-scroll group-hover:[animation-play-state:paused]">
        {items.map((market, i) => (
          <MarketCard key={`${market.name}-${i}`} market={market} />
        ))}
      </div>
    </div>
  );
}
