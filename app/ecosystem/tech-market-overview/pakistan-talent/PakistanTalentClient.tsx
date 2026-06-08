"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import {
  Users,
  GraduationCap,
  Globe2,
  Building2,
  DollarSign,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Landmark,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ComparisonBar } from "@/components/tech-market/ComparisonBar";
import { pakistanTalentSections } from "@/lib/data/market-data";

function AnimatedStatCard({
  icon: Icon,
  end,
  prefix,
  suffix,
  label,
  description,
  delay,
}: {
  icon: React.ElementType;
  end: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl border border-[#e2e0dc] p-6 text-center"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Icon className="w-8 h-8 text-[#10B981] mx-auto mb-3" />
      <p className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] mb-1">
        {prefix}
        {isInView ? (
          <CountUp
            end={end}
            duration={2}
            separator=","
            enableScrollSpy={false}
          />
        ) : (
          0
        )}
        {suffix}
      </p>
      <p className="font-semibold text-[#064E3B] mb-1">{label}</p>
      <p className="text-xs text-[#6b7280]">{description}</p>
    </motion.div>
  );
}

export default function PakistanTalentClient() {
  const { workforce, education, freelancing, ecosystem, costAdvantage, exports, collaboration, governmentSupport } =
    pakistanTalentSections;

  return (
    <main>
      <PageHero
        label="Pakistan IT Advantage"
        title={
          <>
            Pakistan&apos;s IT Talent
            <br />
            Advantage
          </>
        }
        subtitle="A leading hub of skilled tech professionals — young, cost-effective, and globally competitive."
        particleNetwork
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="#stats">View Stats</ShinyButton>
          <Button href="/ecosystem/tech-market-overview" variant="glass">
            Back to Overview
          </Button>
        </div>
      </PageHero>

      {/* Key Stats Dashboard */}
      <section
        id="stats"
        className="relative bg-white"
      >
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="By the Numbers"
              title="Pakistan IT Sector at a Glance"
              color="green"
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatedStatCard
              icon={Users}
              end={300000}
              suffix="+"
              label="IT Professionals"
              description="Working in software development, IT services, and digital technologies"
              delay={0}
            />
            <AnimatedStatCard
              icon={GraduationCap}
              end={70000}
              suffix="+"
              label="IT Graduates/Year"
              description="From universities and institutes across Pakistan"
              delay={0.08}
            />
            <AnimatedStatCard
              icon={Globe2}
              end={1}
              suffix="M+"
              label="Active Freelancers"
              description="Ranked among top freelance markets worldwide"
              delay={0.16}
            />
            <AnimatedStatCard
              icon={Building2}
              end={12000}
              suffix="+"
              label="IT Companies & Startups"
              description="Operating across major technology hubs"
              delay={0.24}
            />
            <AnimatedStatCard
              icon={DollarSign}
              end={3.2}
              prefix="$"
              suffix="B"
              label="Annual IT Exports"
              description="With potential to reach $15-18 billion"
              delay={0.32}
            />
            <AnimatedStatCard
              icon={TrendingUp}
              end={400}
              prefix="$"
              suffix="M+"
              label="Monthly Exports (2026)"
              description="Rapidly growing international presence"
              delay={0.40}
            />
          </div>
        </div>
      </section>

      {/* IT Workforce */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Workforce"
              title={workforce.title}
              subtitle={workforce.description}
              color="blue"
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {workforce.skills.map((skill, i) => (
              <AnimatedSection key={skill} delay={i * 0.05}>
                <div className="flex items-center gap-2 bg-white rounded-lg border border-[#e2e0dc] px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#064E3B]">
                    {skill}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <p className="mt-4 text-sm text-[#6b7280] italic">
              {workforce.note}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Education + Freelancing + Ecosystem */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection>
            <div className="bg-white rounded-xl border border-[#e2e0dc] p-6 h-full">
              <GraduationCap className="w-7 h-7 text-[#047857] mb-3" />
              <h3 className="font-heading font-bold text-lg text-[#064E3B] mb-3">
                {education.title}
              </h3>
              <ul className="space-y-2">
                {education.stats.map((stat, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#3D4152]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#047857] flex-shrink-0" />
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-xl border border-[#e2e0dc] p-6 h-full">
              <Globe2 className="w-7 h-7 text-[#10B981] mb-3" />
              <h3 className="font-heading font-bold text-lg text-[#064E3B] mb-3">
                {freelancing.title}
              </h3>
              <ul className="space-y-2 mb-3">
                {freelancing.stats.map((stat, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#3D4152]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />
                    {stat}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {freelancing.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="text-xs px-2 py-0.5 rounded-full bg-[#f0fff4] text-[#10B981] font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-xl border border-[#e2e0dc] p-6 h-full">
              <Building2 className="w-7 h-7 text-[#047857] mb-3" />
              <h3 className="font-heading font-bold text-lg text-[#064E3B] mb-3">
                {ecosystem.title}
              </h3>
              <ul className="space-y-2 mb-3">
                {ecosystem.stats.map((stat, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#3D4152]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#047857] flex-shrink-0" />
                    {stat}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {ecosystem.techHubs.map((hub) => (
                  <span
                    key={hub}
                    className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[#f7f6f4] text-[#3D4152]"
                  >
                    <MapPin className="w-3 h-3" />
                    {hub}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        </div>
      </section>

      {/* Cost Advantage */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Cost Advantage"
              title={costAdvantage.title}
              subtitle={costAdvantage.note}
              color="green"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="bg-white rounded-xl border border-[#e2e0dc] p-6">
              <h4 className="text-sm font-semibold text-[#6b7280] uppercase tracking-wider mb-4">
                Pakistan vs Europe (Cost Comparison)
              </h4>
              <ComparisonBar
                label="Europe (Baseline)"
                value={100}
                color="#047857"
                delay={0}
              />
              <ComparisonBar
                label={`Pakistan — ${costAdvantage.comparisons[0].role}`}
                value={45}
                color="#10B981"
                suffix="% of EU cost"
                delay={0.15}
              />
              <ComparisonBar
                label={`Pakistan — ${costAdvantage.comparisons[1].role}`}
                value={55}
                color="#10B981"
                suffix="% of EU cost"
                delay={0.3}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Export Growth */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Growth Trajectory"
              title={exports.title}
              color="blue"
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-4">
            {exports.stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-[#e2e0dc] p-5 text-center">
                  <DollarSign className="w-6 h-6 text-[#10B981] mx-auto mb-2" />
                  <p className="font-semibold text-[#064E3B] text-sm">
                    {stat}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Opportunity / Collaboration Areas */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Why Partner"
              title={collaboration.title}
              subtitle="Pakistan's growing IT manpower creates major opportunities for UK and European technology markets."
              color="green"
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-3">
            {collaboration.areas.map((area, i) => (
              <AnimatedSection key={area} delay={i * 0.06}>
                <div className="flex items-center gap-3 bg-white rounded-lg border border-[#e2e0dc] px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 text-[#047857] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#064E3B]">
                    {area}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Government Support */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Government & Industry"
              title="Supporting Institutions"
              color="blue"
            />
          </AnimatedSection>
          <div className="space-y-4">
            {governmentSupport.map((org, i) => (
              <AnimatedSection key={org.name} delay={i * 0.08}>
                <div className="flex gap-4 bg-white rounded-xl border border-[#e2e0dc] p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f0f4ff] flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-[#047857]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#064E3B] mb-1">
                      {org.name}
                    </h3>
                    <p className="text-sm text-[#3D4152]">
                      {org.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Link to IT Scope */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
            <AnimatedSection>
              <Link
                href="/ecosystem/tech-market-overview/pakistan-it-scope"
                className="group block bg-gradient-to-r from-[#047857]/10 to-[#10B981]/10 rounded-2xl border border-[#047857]/20 p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#047857] uppercase tracking-wider mb-1">
                      Also Explore
                    </p>
                    <h3 className="font-heading font-bold text-xl text-[#064E3B] mb-2">
                      Scope of Pakistani IT in Europe
                    </h3>
                    <p className="text-[#3D4152]">
                      6 key sectors with detailed opportunities across European markets.
                    </p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-[#047857] flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </AnimatedSection>
        </div>
      </section>

      <GlobalCTA
        label="Get Started"
        title="Partner with Pakistan's IT Talent"
        subtitle="UPTIB connects UK and European businesses with Pakistan's growing technology ecosystem."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Become a Member"
        secondaryButtonLink="/membership"
      />
    </main>
  );
}
