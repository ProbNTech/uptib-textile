"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
} from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MarketTable } from "@/components/tech-market/MarketTable";
import type { CountryMarketData } from "@/lib/data/market-data";

interface CountryMarketClientProps {
  country: CountryMarketData;
  prevCountry: { name: string; slug: string; flag: string } | null;
  nextCountry: { name: string; slug: string; flag: string } | null;
}

function getHighlightGridCols(count: number) {
  if (count <= 2) return "grid-cols-2";
  if (count <= 3) return "grid-cols-2 sm:grid-cols-3";
  if (count <= 4) return "grid-cols-2 sm:grid-cols-4";
  if (count <= 5) return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";
  return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";
}

export default function CountryMarketClient({
  country,
  prevCountry,
  nextCountry,
}: CountryMarketClientProps) {
  return (
    <main>
      <PageHero
        label={`${country.flag} ${country.name}`}
        title={country.tagline}
        subtitle={country.overview}
        image={country.bannerImage}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="#sectors">View Market Data</ShinyButton>
          <Button href="/ecosystem/tech-market-overview" variant="glass">
            All Markets
          </Button>
        </div>
      </PageHero>

      {/* Key Highlights */}
      {country.highlights.length > 0 && (
        <section className="relative bg-white">
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
  
              <AnimatedSection>
                <SectionHeader
                  label="Key Figures"
                  title={`${country.name} Market Highlights`}
                  color="blue"
                />
              </AnimatedSection>
              <div className={`grid ${getHighlightGridCols(country.highlights.length)} gap-4`}>
                {country.highlights.map((h, i) => (
                  <AnimatedSection key={h.label} delay={i * 0.06}>
                    <div className="bg-white rounded-xl border border-[#e2e0dc] p-4 text-center h-full">
                      <p className="text-lg sm:text-xl font-extrabold text-[#047857] mb-1">
                        {h.value}
                      </p>
                      <p className="text-xs text-[#6b7280]">{h.label}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
          </div>
        </section>
      )}

      {/* Sector Data Table */}
      <section id="sectors" className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">

            <AnimatedSection>
              <SectionHeader
                label="Sector Breakdown"
                title={`${country.name} Market Growth Outlook`}
                subtitle="Current market sizes, forecasts, and key opportunities by sector."
                color="green"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <MarketTable sectors={country.sectors} />
            </AnimatedSection>
        </div>
      </section>

      {/* Detailed Sections */}
      {country.detailedSections && country.detailedSections.length > 0 && (
        <section className="relative bg-white">
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
  
              <AnimatedSection>
                <SectionHeader
                  label="Deep Dive"
                  title="Sector Deep Dives"
                  color="blue"
                />
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {country.detailedSections.map((section, i) => (
                  <AnimatedSection key={section.title} delay={i * 0.08}>
                    <div className="bg-white rounded-xl border border-[#e2e0dc] p-5 h-full">
                      <h3 className="font-semibold text-[#064E3B] mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-[#3D4152] leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
          </div>
        </section>
      )}

      {/* Growth Drivers & Market Strengths */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="bg-white rounded-xl border border-[#e2e0dc] p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-[#10B981]" />
                    <h3 className="font-heading font-bold text-lg text-[#064E3B]">
                      Growth Drivers
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {country.growthDrivers.map((driver, i) => (
                      <li key={i} className="flex gap-2 text-sm text-[#3D4152]">
                        <Zap className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                        {driver}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-xl border border-[#e2e0dc] p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-[#047857]" />
                    <h3 className="font-heading font-bold text-lg text-[#064E3B]">
                      Market Strengths
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {country.marketStrengths.map((strength, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-[#3D4152]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
        </div>
      </section>

      {/* High-Demand Sectors */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">

            <AnimatedSection>
              <SectionHeader
                label="In Demand"
                title={`High-Demand Sectors in ${country.name}`}
                color="blue"
              />
            </AnimatedSection>
            <div className="flex flex-wrap gap-3">
              {country.highDemandSectors.map((sector, i) => (
                <AnimatedSection key={sector} delay={i * 0.05}>
                  <span className="inline-block px-4 py-2 rounded-full bg-[#f0f4ff] text-[#047857] font-medium text-sm border border-[#047857]/15">
                    {sector}
                  </span>
                </AnimatedSection>
              ))}
            </div>
        </div>
      </section>

      {/* Opportunities for Pakistani Companies */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">

            <AnimatedSection>
              <SectionHeader
                label="Opportunities"
                title={`Opportunities for Pakistani IT Companies in ${country.name}`}
                color="green"
              />
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-5">
              {country.opportunitiesForPakistan.map((opp, i) => (
                <AnimatedSection key={opp.title} delay={i * 0.08}>
                  <div className="bg-white rounded-xl border border-[#e2e0dc] p-5 h-full hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-[#f0fff4] flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <h4 className="font-semibold text-[#064E3B] mb-1">
                      {opp.title}
                    </h4>
                    <p className="text-sm text-[#3D4152]">{opp.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <div className="grid grid-cols-3 gap-4 items-stretch">
            {/* Previous */}
            {prevCountry ? (
              <Link
                href={`/ecosystem/tech-market-overview/${prevCountry.slug}`}
                className="group flex items-center gap-3 bg-white rounded-xl border border-[#e2e0dc] p-4 sm:p-5 hover:border-[#047857]/30 hover:shadow-md transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-[#047857] flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                <div className="min-w-0">
                  <p className="text-xs text-[#6b7280] mb-0.5">Previous</p>
                  <p className="font-semibold text-[#064E3B] text-sm truncate">
                    {prevCountry.flag} {prevCountry.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Center: All Markets */}
            <Link
              href="/ecosystem/tech-market-overview"
              className="flex items-center justify-center bg-[#064E3B] rounded-xl p-4 sm:p-5 text-white font-semibold text-sm hover:bg-[#047857] transition-colors text-center"
            >
              All Markets
            </Link>

            {/* Next */}
            {nextCountry ? (
              <Link
                href={`/ecosystem/tech-market-overview/${nextCountry.slug}`}
                className="group flex items-center justify-end gap-3 bg-white rounded-xl border border-[#e2e0dc] p-4 sm:p-5 hover:border-[#047857]/30 hover:shadow-md transition-all text-right"
              >
                <div className="min-w-0">
                  <p className="text-xs text-[#6b7280] mb-0.5">Next</p>
                  <p className="font-semibold text-[#064E3B] text-sm truncate">
                    {nextCountry.flag} {nextCountry.name}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#047857] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <GlobalCTA
        label="Partner With Us"
        title={`Enter the ${country.name} Tech Market`}
        subtitle={`Let UPTIB help your company access opportunities in ${country.name}'s technology sector.`}
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Join UPTIB"
        secondaryButtonLink="/membership"
      />
    </main>
  );
}
