import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { articles } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Insights — Pakistan textile export",
  description:
    "Insights on sourcing textiles from Pakistan, global export trends, GSP+ and Pakistan's home-textile leadership.",
  alternates: { canonical: "/news" },
};

export default function NewsIndex() {
  const [flagship, ...rest] = articles;

  return (
    <>
      <PageHero
        label="News & Insights"
        title="Insights on Pakistan textile export"
        subtitle="Sourcing guides, market trends and trade insight for buyers and exporters working with Pakistani textiles."
        video="banner"
      />

      <Section variant="light" pattern>
        {/* Flagship */}
        <Link
          href={`/news/${flagship.slug}`}
          className="group block rounded-card border border-[#E5E7EB] overflow-hidden hover:border-[#10B981] hover:shadow-xl transition-all duration-300 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-[#064E3B] p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#10B981]/20 text-[#6EE7B7] text-xs font-bold uppercase tracking-wide mb-5">
                Featured · {flagship.category}
              </span>
              <h2 className="font-heading font-extrabold text-white text-2xl lg:text-3xl mb-4">{flagship.title}</h2>
              <p className="text-white/75 leading-relaxed">{flagship.excerpt}</p>
              <span className="inline-flex items-center gap-2 mt-6 font-semibold text-[#6EE7B7] group-hover:gap-3 transition-all">
                Read the guide <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center bg-[#F8FAF9]">
              <p className="text-[#6B7280] text-sm mb-2">{flagship.displayDate} · {flagship.readTime}</p>
              <p className="text-[#3D4152] leading-relaxed">
                A complete, practical guide to sourcing bedding, apparel, sportswear and healthcare textiles from
                Pakistan — covering capacity, certifications, the GSP+ advantage, and how buyers de-risk every order.
              </p>
            </div>
          </div>
        </Link>

        {/* Rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((a) => {
            const card = (
              <div className={`flex h-full flex-col rounded-card border p-7 transition-all duration-300 ${a.published ? "border-[#E5E7EB] bg-white group-hover:border-[#10B981] group-hover:shadow-lg" : "border-dashed border-[#D1FAE5] bg-[#F8FAF9]"}`}>
                <span className="text-xs font-bold uppercase tracking-wide text-[#047857] mb-3">{a.category}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-3">{a.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{a.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#6B7280]">
                  {a.published ? (<>Read more <ArrowUpRight className="w-4 h-4" /></>) : (<><Clock className="w-4 h-4" /> Coming soon</>)}
                </span>
              </div>
            );
            return a.published ? (
              <Link key={a.slug} href={`/news/${a.slug}`} className="group">{card}</Link>
            ) : (
              <div key={a.slug} aria-disabled>{card}</div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
