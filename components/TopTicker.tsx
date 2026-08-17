"use client";

import { useState } from "react";
import Link from "next/link";
import { Pause, Play } from "lucide-react";

/* Ticker facts.
   Every line here is a market corridor that appears NOWHERE else on the
   homepage: the country carousel below shows the US, UK, Spain, Italy,
   Poland, Germany, Saudi Arabia and the UAE, so the ticker deliberately
   covers the smaller, faster-growing European corridors instead. That way
   it adds information rather than restating the hero and stat sections.
   Figures come from lib/data/textile-market-data.ts (Pakistan Export Market
   Report 2026 to 2030), and each line deep-links to that country's panel. */
const country = (name: string) =>
  `/global-textile-market?region=europe&country=${encodeURIComponent(name)}#country-footprint`;

const items = [
  { text: "Slovakia: Pakistani textile exports up 83.5% year on year", href: country("Slovakia") },
  { text: "Bulgaria: one of Europe's fastest risers, growing 21.6% a year", href: country("Bulgaria") },
  { text: "Portugal: textiles are 91.7% of everything Pakistan sells there", href: country("Portugal") },
  { text: "Greece: hospitality demand keeps textiles at ~70% of exports", href: country("Greece") },
  { text: "Czech Republic: a $150 to 180M corridor, growing 8.82% a year", href: country("Czech Republic") },
  { text: "Romania: bilateral trade scaling towards $500M", href: country("Romania") },
  { text: "Canada: a $2 to 4B home-textile import market", href: "/global-textile-market?region=north-america#regions" },
];

export function TopTicker() {
  const [paused, setPaused] = useState(false);

  const content = items.map((item, i) => (
    <Link
      key={i}
      href={item.href}
      className="inline-flex items-center shrink-0 hover:text-white transition-colors duration-200"
    >
      <span className="text-[11px] sm:text-xs font-medium tracking-wide">
        {item.text}
      </span>
      <span className="mx-5 text-[#394F73] text-[8px] select-none" aria-hidden="true">
        ◆
      </span>
    </Link>
  ));

  return (
    <div
      className="group relative w-full h-[30px] bg-gradient-to-r from-[#2E4061] via-[#394F73] to-[#2E4061] overflow-hidden flex items-center text-white/80"
      aria-label="Pakistan textile market facts"
    >
      <div
        className={
          "animate-ticker-scroll flex items-center whitespace-nowrap will-change-transform " +
          "group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused] " +
          (paused ? "[animation-play-state:paused]" : "")
        }
      >
        {content}
        {content}
      </div>

      {/* Accessibility: an explicit pause control for the moving content,
          alongside pause-on-hover and a full stop under reduced-motion. */}
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Resume scrolling announcements" : "Pause scrolling announcements"}
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 inline-flex size-6 items-center justify-center rounded-full bg-[#2E4061] text-white/70 ring-1 ring-white/15 transition-colors hover:bg-[#1F3A5F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {paused ? <Play className="size-3" aria-hidden /> : <Pause className="size-3" aria-hidden />}
      </button>
    </div>
  );
}
