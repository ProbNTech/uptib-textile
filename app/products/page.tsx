import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Leaf } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";
import { products } from "@/data/textile";

export const metadata: Metadata = {
  title: "Products — Pakistani textiles for global buyers",
  description:
    "The textiles we trade: bedding & linen, apparel & accessories, sportswear & activewear, and healthcare textile — four categories where Pakistani manufacturing is strongest.",
  alternates: { canonical: "/products" },
};

export default function ProductsHub() {
  return (
    <>
      <PageHero
        label="Products"
        title="The textiles we trade"
        subtitle="Pakistan's strengths, matched to global demand. Four categories where Pakistani manufacturing is strongest and buyers worldwide are most active."
        video="banner"
      >
        <Button href="/contact" variant="primary" size="lg" showArrow>Request a quote</Button>
      </PageHero>

      <Section variant="light" pattern>
        <SectionHeader
          label="The four categories"
          title="What's in the range"
          subtitle="Each category links to a dedicated page with what's included, the facts, and how to source it."
          color="green"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col rounded-card bg-white border border-[#E5E7EB] p-8 hover:border-[#10B981] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7 text-[#047857]" strokeWidth={1.6} />
                </div>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-2xl mb-3">{p.name}</h3>
                <p className="text-[#3D4152] leading-relaxed flex-1">{p.short}</p>
                <span className="inline-flex items-center gap-1.5 mt-6 font-semibold text-[#047857] group-hover:gap-2.5 transition-all">
                  Explore <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 rounded-card bg-[#F8FAF9] border border-[#E5E7EB] p-8 flex items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-center flex-shrink-0">
            <Leaf className="w-6 h-6 text-[#047857]" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">Sustainability runs through all of it</h3>
            <p className="text-[#3D4152] leading-relaxed">
              Across every category we work with factories carrying the certifications global buyers increasingly require
              &mdash; GOTS, OEKO-TEX, BCI, Sedex, WRAP and ISO &mdash; and can prioritise organic cotton, recycled
              materials and transparent supply chains.
            </p>
          </div>
        </div>
      </Section>

      <GlobalCTA
        label="Source from Pakistan"
        title="Ready to source from Pakistan?"
        subtitle="Tell us what you need and we'll match it to the right vetted manufacturer — quality-checked and delivered to your market, anywhere in the world."
        primaryButtonText="Request a quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Global textile market"
        secondaryButtonLink="/global-textile-market"
      />
    </>
  );
}
