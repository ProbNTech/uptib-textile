import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";
import { services } from "@/data/textile";

export const metadata: Metadata = {
  title: "Services — sourcing, outsourcing, marketing & warehousing",
  description:
    "Four services connecting Pakistani textiles to global markets: Buying (for international buyers), Outsourcing (full procurement house), Marketing (for exporters), and Warehousing (e-commerce & fulfilment).",
  alternates: { canonical: "/services" },
};

export default function ServicesHub() {
  return (
    <>
      <PageHero
        label="Services"
        title="What we do"
        subtitle="Four services that cover both sourcing Pakistani textiles for buyers worldwide and helping Pakistani exporters reach global markets — buying, outsourcing, marketing and warehousing."
        image="/image/hero-bg/bernd-dittrich-r1AIp7Vj3Mg-unsplash.jpg.jpeg"
      >
        <Button href="/contact" variant="primary" size="lg" showArrow>Get a quote</Button>
      </PageHero>

      <Section variant="light" pattern>
        <SectionHeader
          label="The four services"
          title="Source the supply, or grow your exports"
          subtitle="Two services for international buyers, two for Pakistani exporters — one accountable partner for both."
          color="green"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-card bg-white border border-[#E5E7EB] p-8 hover:border-[#3E8F5E] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#EEF6F0] border border-[#D7EADD] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-[#2F7549]" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]">{s.audience}</span>
                </div>
                <h3 className="font-heading font-bold text-[#16291E] text-2xl mb-3">{s.name}</h3>
                <p className="text-[#3D4152] leading-relaxed flex-1">{s.short}</p>
                <span className="inline-flex items-center gap-1.5 mt-6 font-semibold text-[#2F7549] group-hover:gap-2.5 transition-all">
                  Explore <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <GlobalCTA
        label="Work with UPTIB"
        title="Source the supply, or grow your exports"
        subtitle="International buyers source dependable Pakistani product; Pakistani manufacturers reach buyers worldwide. We market the supply and source the demand."
        primaryButtonText="Get a quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Become a member"
        secondaryButtonLink="/membership"
        image="/image/sportswear-h.jpg"
      />
    </>
  );
}
