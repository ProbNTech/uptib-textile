"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import {
  Target,
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Sparkles,
  Users,
  Globe,
  Eye,
  Lightbulb,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/* âââ Data ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const stats = [
  { value: "Â£75M+", label: "Series Funding Facilitated", color: "#047857" },
  { value: "40+", label: "Companies Scaled", color: "#10B981" },
  { value: "30+", label: "VC & PE Partners", color: "#047857" },
  { value: "15+", label: "Markets Accessed", color: "#047857" },
];

const scalingBenefits = [
  {
    icon: Target,
    title: "Series A & B Investor Access",
    description:
      "Access investors specializing in Series A and B funding across the UK and Europe.",
    color: "#047857",
  },
  {
    icon: Lightbulb,
    title: "Fundraising Strategy",
    description:
      "Receive guidance on fundraising strategy, valuation, and investor pitching.",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Cross-Border Expansion",
    description:
      "Explore cross-border investment opportunities for market expansion.",
    color: "#047857",
  },
  {
    icon: Eye,
    title: "Global Visibility",
    description:
      "Build credibility and visibility among global investors and corporates.",
    color: "#047857",
  },
];

const investorBenefits = [
  {
    icon: Sparkles,
    title: "High-Potential Scaling Companies",
    description:
      "Discover high-potential, scaling technology companies ready for growth capital.",
    color: "#047857",
  },
  {
    icon: Shield,
    title: "Curated Opportunities",
    description:
      "Gain early access to curated investment opportunities across software, fintech, AI, cybersecurity, and digital innovation.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Direct Founder Access",
    description:
      "Engage directly with founders and executive teams for strategic partnerships.",
    color: "#047857",
  },
];

const whyItMattersPoints = [
  { text: "Scale efficiently and strengthen market position", color: "#047857" },
  { text: "Move beyond early-stage validation into rapid growth", color: "#10B981" },
  { text: "Expand across borders with strategic investor backing", color: "#047857" },
  { text: "Access tailored guidance for Series A and B rounds", color: "#047857" },
];

const fundingProcess = [
  {
    number: "01",
    title: "Assessment",
    description: "We evaluate your growth stage, market position, and funding needs to develop a tailored strategy.",
    outcome: "Strategy defined",
    color: "#047857",
  },
  {
    number: "02",
    title: "Preparation",
    description: "Receive guidance on pitch decks, financial modelling, valuation, and investor-ready documentation.",
    outcome: "Investor-ready",
    color: "#10B981",
  },
  {
    number: "03",
    title: "Matching",
    description: "We connect you with the right VCs, PE firms, and corporate investors aligned to your sector and stage.",
    outcome: "Investors matched",
    color: "#047857",
  },
  {
    number: "04",
    title: "Closing",
    description: "Support through due diligence, term sheets, and deal closing to secure your Series A or B round.",
    outcome: "Round closed",
    color: "#047857",
  },
];

/* âââ Component âââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export default function SeriesFundingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ââ Hero ââ */}
      <PageHero
        label="Ecosystem / Series Funding"
        title="Series A & B Funding Opportunities"
        subtitle="The UK–Pakistan Trades & Investment Board supports high-growth technology companies in securing Series A and B funding to scale operations, expand into new markets, and accelerate innovation."
        image="/image/banners/banner85.png"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Access Series Funding</ShinyButton>
          <Button href="/contact" variant="glass">
            Speak to Our Team
          </Button>
        </div>
      </PageHero>

      {/* ââ Stats ââ */}
      <Section variant="light">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative h-full text-center bg-white rounded-xl p-6">
                <p
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-[#5A5F72] text-base">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ââ For Scaling Companies ââ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="For Scaling Companies" title="Scale Your Business with Strategic Funding" subtitle="Access the capital, connections, and guidance needed to take your company from growth-stage to market leader." color="blue" />

          <div className="grid md:grid-cols-2 gap-7">
            {scalingBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect
                    spread={40}
                    glow
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative h-full bg-white rounded-2xl p-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="h-px bg-[#D8D5CF] mb-5" />
                    <p className="text-base text-[#5A5F72] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ For Investors ââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="For Investors" title="Invest in Growth-Stage Winners" subtitle="Access curated, high-growth technology companies that have proven their market fit and are ready for significant scale." color="green" />

          <div className="grid md:grid-cols-3 gap-6">
            {investorBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] shadow-sm p-7 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-3">
                    {item.title}
                  </h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-[#5A5F72] text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Funding Process ââ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Process" title="How We Help You Close Your Round" subtitle="A structured pathway from assessment to closing your Series A or B funding round." color="red" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundingProcess.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold border-2"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                      borderColor: `${step.color}60`,
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-4">
                  {step.description}
                </p>

                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                  <span className="text-base font-semibold" style={{ color: step.color }}>
                    {step.outcome}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Why It Matters ââ */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader label="Why It Matters" title="Critical Funding for Rapid Growth" color="red" />
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-6">
                Series A and B funding is critical for companies moving beyond early-stage validation into rapid growth. By facilitating access to these funding rounds, the Forum helps high-growth startups scale efficiently, strengthen their market position, and expand across borders.
              </p>

              <div className="space-y-4">
                {whyItMattersPoints.map((point, i) => (
                  <motion.div
                    key={point.text}
                    className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${point.color}10`, border: `1px solid ${point.color}20` }}
                    >
                      <CheckCircle2 className="w-5 h-5" style={{ color: point.color }} strokeWidth={1.5} />
                    </div>
                    <span className="text-[#3D4152] text-base leading-relaxed pt-2">
                      {point.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                  UPTIB Advantage
                </h3>
                <div className="h-px bg-[#D8D5CF] mb-6" />
                <ul className="space-y-5">
                  {[
                    { title: "VC & PE Networks", desc: "Direct access to venture capital and private equity firms specializing in growth-stage investment.", color: "#047857" },
                    { title: "Cross-Border Funding", desc: "Investment networks spanning UK, Pakistan, Europe, and beyond.", color: "#10B981" },
                    { title: "Strategic Guidance", desc: "Expert advisory on valuation, deal structuring, and investor engagement.", color: "#047857" },
                    { title: "Market Expansion", desc: "Support for cross-border market entry alongside your funding round.", color: "#047857" },
                  ].map((item, i) => (
                    <motion.li
                      key={item.title}
                      className="flex items-start gap-3.5"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                        style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                      >
                        <ArrowUpRight className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="font-semibold text-[#1C1F2E] text-base">{item.title}</span>
                        <p className="text-[#5A5F72] text-base leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ CTA ââ */}
      <GlobalCTA
        label="Scale Now"
        title="Fuel Growth. Expand Markets. Transform the Tech Ecosystem."
        subtitle="Whether you are a scaling company seeking Series A or B funding, or an investor looking for growth-stage opportunities, the UKâPakistan Tech Forum is your partner in driving cross-border innovation."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
