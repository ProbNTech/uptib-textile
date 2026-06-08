"use client";

import {
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { SectorTabs } from "@/components/tech-market/SectorTabs";
import { pakistanITScope, entryStrategies } from "@/lib/data/market-data";

export default function PakistanITScopeClient() {
  return (
    <main>
      <PageHero
        label="Pakistan IT in Europe"
        title={
          <>
            Scope of Pakistani IT
            <br />
            Companies in Europe
          </>
        }
        subtitle="6 high-growth sectors where Pakistani technology companies can deliver exceptional value across European markets."
        image="/image/banners/banner33.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="#sectors">Explore Sectors</ShinyButton>
          <Button href="/ecosystem/tech-market-overview" variant="glass">
            Back to Overview
          </Button>
        </div>
      </PageHero>

      {/* Sector Tabs */}
      <section id="sectors" className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
            <AnimatedSection>
              <SectionHeader
                label="Key Sectors"
                title="Where Pakistani IT Companies Excel"
                subtitle="Click each sector to explore detailed opportunities, high-demand countries, and why Pakistan is the right partner."
                color="green"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <SectorTabs sectors={pakistanITScope} />
            </AnimatedSection>
        </div>
      </section>

      {/* Entry Strategies */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
            <AnimatedSection>
              <SectionHeader
                label="How to Enter"
                title="Key Entry Strategies"
                subtitle="Proven approaches for Pakistani IT companies to establish and grow their European presence."
                color="blue"
              />
            </AnimatedSection>
            <div className="space-y-4">
              {entryStrategies.map((strategy, i) => (
                <AnimatedSection key={strategy.title} delay={i * 0.08}>
                  <div className="flex gap-4 bg-white rounded-xl border border-[#e2e0dc] p-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f0f4ff] flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-[#047857]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#064E3B] mb-1">
                        {strategy.title}
                      </h3>
                      <p className="text-sm text-[#3D4152]">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
        </div>
      </section>

      {/* Link to Talent Page */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
            <AnimatedSection>
              <Link
                href="/ecosystem/tech-market-overview/pakistan-talent"
                className="group block bg-gradient-to-r from-[#10B981]/10 to-[#047857]/10 rounded-2xl border border-[#10B981]/20 p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#10B981] uppercase tracking-wider mb-1">
                      Next
                    </p>
                    <h3 className="font-heading font-bold text-xl text-[#064E3B] mb-2">
                      Pakistan IT Talent Advantage
                    </h3>
                    <p className="text-[#3D4152]">
                      300K+ IT professionals, $3.2B in exports, and 40-60% cost advantage.
                    </p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-[#047857] flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </AnimatedSection>
        </div>
      </section>

      <GlobalCTA
        label="Get Connected"
        title="Ready to Enter European Markets?"
        subtitle="UPTIB provides the connections, intelligence, and support your company needs to succeed in Europe."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Become a Member"
        secondaryButtonLink="/membership"
      />
    </main>
  );
}
