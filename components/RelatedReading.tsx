"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { articles } from "@/data/news";

/* Contextual cross-links from product and market pages into News & Insights.
   The research-stage articles are the strongest content on the site, but they
   were previously only reachable from /news and the homepage carousel, so a
   buyer reading a category page had no route into them. */

/** Article slugs relevant to each page, in the order they should appear. */
const RELATED: Record<string, string[]> = {
  "bedding-linen": [
    "pakistan-home-textile-leadership",
    "textile-apparel-sourcing-from-pakistan-2026",
    "gsp-plus-explained",
  ],
  "apparel-accessories": [
    "uk-dcts-garment-rules-2026",
    "pakistan-india-bangladesh-sourcing-comparison",
    "textile-apparel-sourcing-from-pakistan-2026",
  ],
  "sportswear-activewear": [
    "global-textile-export-trends-2026",
    "textile-apparel-sourcing-from-pakistan-2026",
    "pakistan-textile-exports-fy2025-record",
  ],
  "healthcare-textile": [
    "textile-apparel-sourcing-from-pakistan-2026",
    "global-textile-export-trends-2026",
    "pakistan-india-bangladesh-sourcing-comparison",
  ],
  "global-textile-market": [
    "pakistan-textile-exports-fy2025-record",
    "gsp-plus-explained",
    "global-textile-export-trends-2026",
    "pakistan-india-bangladesh-sourcing-comparison",
  ],
};

type RelatedReadingProps = {
  /** Key into RELATED — a product slug, or "global-textile-market". */
  topic: string;
  title?: string;
  body?: string;
  className?: string;
};

export function RelatedReading({
  topic,
  title = "Before you enquire, read this",
  body = "Research-stage guides on sourcing from Pakistan, written for international buyers.",
  className = "bg-[#F6F2EA]",
}: RelatedReadingProps) {
  const slugs = RELATED[topic] ?? [];
  const picks = slugs
    .map((slug) => articles.find((a) => a.slug === slug && a.published))
    .filter((a): a is (typeof articles)[number] => Boolean(a));

  if (picks.length === 0) return null;

  return (
    <section className={`relative overflow-hidden sec-y ${className}`} aria-labelledby="related-reading-heading">
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <BookOpen className="size-4 text-[#394F73]" aria-hidden />
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#394F73]">
                  Related reading
                </p>
              </div>
              <h2
                id="related-reading-heading"
                className="font-heading text-2xl font-extrabold leading-tight text-[#1A1A1A] sm:text-3xl"
              >
                {title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5A5F72]">{body}</p>
            </div>
            <Link
              href="/news"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#394F73]"
            >
              All news &amp; insights
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {picks.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_10px_30px_-20px_rgba(45,64,97,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_rgba(45,64,97,0.4)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#F6F2EA]">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#78899B]">
                    {article.category}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-bold leading-snug text-[#1A1A1A]">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#5A5F72]">
                    {article.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-[#394F73]">
                    Read the guide
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
