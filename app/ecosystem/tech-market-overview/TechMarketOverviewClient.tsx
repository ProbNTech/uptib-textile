"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Handshake,
  Plane,
  Scale,
  Link as LinkIcon,
  Network,
  Globe2,
  TrendingUp,
  Users,
  DollarSign,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import NextLink from "next/link";
import CountUp from "react-countup";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { EuropeMap } from "@/components/tech-market/EuropeMap";
import { CountryCard } from "@/components/tech-market/CountryCard";
import { MarketTable } from "@/components/tech-market/MarketTable";
import {
  introContent,
  countryData,
  europeWideData,
  countrySummary,
} from "@/lib/data/market-data";

const pillarIcons: Record<string, React.ElementType> = {
  Handshake,
  Plane,
  Scale,
  Link: LinkIcon,
  Network,
};

function StatsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    { icon: Users, end: 300, suffix: "K+", label: "IT Professionals", prefix: "" },
    { icon: GraduationCap, end: 70, suffix: "K+", label: "Graduates/Year", prefix: "" },
    { icon: DollarSign, end: 3.2, suffix: "B", label: "Annual IT Exports", prefix: "$", decimals: 1 },
    { icon: TrendingUp, end: 50, suffix: "%", label: "Cost Savings vs EU", prefix: "~" },
  ];

  return (
    <div ref={ref} className="bg-[#064E3B] rounded-2xl p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Icon className="w-7 h-7 text-[#4ade80] mx-auto mb-2" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {stat.prefix}
                {isInView ? (
                  <CountUp
                    end={stat.end}
                    duration={2}
                    decimals={stat.decimals || 0}
                    enableScrollSpy={false}
                  />
                ) : (
                  0
                )}
                {stat.suffix}
              </p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="text-center mt-6">
        <NextLink
          href="/ecosystem/tech-market-overview/pakistan-talent"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4ade80] hover:text-white transition-colors"
        >
          Explore Pakistan&apos;s IT Talent Advantage
          <ArrowRight className="w-4 h-4" />
        </NextLink>
      </div>
    </div>
  );
}

export default function TechMarketOverviewClient() {
  return (
    <main>
      <PageHero
        label="UPTIB Market Intelligence"
        title={
          <>
            UK/Europe Tech
            <br />
            Market Overview
          </>
        }
        subtitle="Your gateway to market data, sector forecasts, and partnership opportunities across 8+ European countries."
        image="/image/banners/services05.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="#countries">Explore Markets</ShinyButton>
          <Button href="/ecosystem/tech-market-overview/pakistan-talent" variant="glass">
            Pakistan IT Advantage
          </Button>
        </div>
      </PageHero>

      {/* Intro Section */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="About UPTIB"
              title={introContent.subheadline}
              subtitle={introContent.description}
              color="blue"
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-10">
            {introContent.servicePillars.map((pillar, i) => {
              const Icon = pillarIcons[pillar.icon] || Globe2;
              return (
                <AnimatedSection key={pillar.title} delay={i * 0.08}>
                  <div className="bg-white rounded-xl border border-[#e2e0dc] p-5 text-center h-full hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f4ff] flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-[#047857]" />
                    </div>
                    <h3 className="font-semibold text-[#064E3B] mb-1 text-sm">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#6b7280]">
                      {pillar.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Europe-Wide Market Data */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Market Segments"
              title="Europe-Wide Sector Overview"
              subtitle="Key technology sectors driving growth across the European market."
              color="green"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <MarketTable sectors={europeWideData} />
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Map + Country Cards */}
      <section id="countries" className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Country Markets"
              title="Explore European Tech Markets"
              subtitle="Click on any country to explore detailed market data, sector breakdowns, and opportunities."
              color="blue"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-white rounded-2xl border border-[#e2e0dc] p-6 sm:p-8 mb-10">
              <EuropeMap />
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Object.values(countryData).map((country, i) => (
              <CountryCard key={country.slug} country={country} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Country Summary Table */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="At a Glance"
              title="Country Opportunity Summary"
              subtitle="A quick overview of IT opportunities and key market drivers across Europe."
              color="green"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="hidden md:block overflow-x-auto rounded-xl border border-[#e2e0dc]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#064E3B] text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Country</th>
                    <th className="text-left px-5 py-3.5 font-semibold">
                      IT Opportunities
                    </th>
                    <th className="text-left px-5 py-3.5 font-semibold">
                      Key Drivers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {countrySummary.map((row, i) => (
                    <tr
                      key={row.slug}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#f7f6f4]"}
                    >
                      <td className="px-5 py-3.5">
                        <NextLink
                          href={`/ecosystem/tech-market-overview/${row.slug}`}
                          className="font-semibold text-[#047857] hover:underline"
                        >
                          {row.country}
                        </NextLink>
                      </td>
                      <td className="px-5 py-3.5 text-[#3D4152]">
                        {row.opportunities}
                      </td>
                      <td className="px-5 py-3.5 text-[#3D4152]">
                        {row.keyDrivers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {countrySummary.map((row) => (
                <NextLink
                  key={row.slug}
                  href={`/ecosystem/tech-market-overview/${row.slug}`}
                  className="block bg-white rounded-xl border border-[#e2e0dc] p-4"
                >
                  <h4 className="font-semibold text-[#047857] mb-2">{row.country}</h4>
                  <p className="text-sm text-[#3D4152] mb-1">
                    <strong>Opportunities:</strong> {row.opportunities}
                  </p>
                  <p className="text-sm text-[#6b7280]">{row.keyDrivers}</p>
                </NextLink>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pakistan IT Scope Link */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Pakistan's IT Scope"
              title="Scope of Pakistani IT Companies in Europe"
              subtitle="Explore 6 key sectors where Pakistani IT companies can deliver value across European markets."
              color="green"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <NextLink
              href="/ecosystem/tech-market-overview/pakistan-it-scope"
              className="group block bg-gradient-to-r from-[#10B981]/10 to-[#047857]/10 rounded-2xl border border-[#10B981]/20 p-8 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#064E3B] mb-2">
                    AI, Cloud, Cybersecurity, Enterprise IT & More
                  </h3>
                  <p className="text-[#3D4152]">
                    Detailed sector analysis with opportunities, market growth rates, and entry strategies for Pakistani firms.
                  </p>
                </div>
                <ArrowRight className="w-8 h-8 text-[#047857] flex-shrink-0 group-hover:translate-x-2 transition-transform" />
              </div>
            </NextLink>
          </AnimatedSection>
        </div>
      </section>

      {/* Pakistan Talent Stats */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Pakistan IT Advantage"
              title="Pakistan's IT Talent at a Glance"
              subtitle="A young, skilled, cost-effective workforce for the global IT industry."
              color="green"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <StatsStrip />
          </AnimatedSection>
        </div>
      </section>

      <GlobalCTA
        label="Get Started"
        title="Ready to Enter European Tech Markets?"
        subtitle="Let UPTIB connect your company with the right partners, markets, and opportunities across the UK and Europe."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Become a Member"
        secondaryButtonLink="/membership"
      />
    </main>
  );
}
