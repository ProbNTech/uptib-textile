"use client";

import Link from "next/link";

const items = [
  { text: "UPTIB Textile — Made in Pakistan, sold across the world", href: "/products" },
  { text: "~US$17.9bn in Pakistani textile exports — a global top-10 exporter", href: "/global-textile-market" },
  { text: "World-leading origin for cotton and home textiles", href: "/products/bedding-linen" },
  { text: "GSP+ duty-free access into the EU", href: "/global-textile-market" },
  { text: "Source from Pakistan, quality guaranteed", href: "/services/buying" },
  { text: "Grow your exports — become a member", href: "/membership" },
];

export function TopTicker() {
  const content = items.map((item, i) => (
    <Link
      key={i}
      href={item.href}
      className="inline-flex items-center shrink-0 hover:text-white transition-colors duration-200"
    >
      <span className="text-[11px] sm:text-xs font-medium tracking-wide">
        {item.text}
      </span>
      <span className="mx-5 text-[#3E8F5E] text-[8px] select-none" aria-hidden="true">
        ◆
      </span>
    </Link>
  ));

  return (
    <div
      className="relative w-full h-[30px] bg-gradient-to-r from-[#0E2E1E] via-[#15402A] to-[#0E2E1E] overflow-hidden flex items-center text-white/80"
      role="marquee"
      aria-label="Latest announcements"
    >
      <div className="animate-ticker-scroll flex items-center whitespace-nowrap will-change-transform">
        {content}
        {content}
      </div>
    </div>
  );
}
