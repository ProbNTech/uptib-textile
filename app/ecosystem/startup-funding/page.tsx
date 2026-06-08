"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import {
  Target,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Sparkles,
  Users,
  Lightbulb,
  Presentation,
  Mic2,
  Award,
  Building2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/* âââ Data ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const stats = [
  { value: "100+", label: "Startups Funded", color: "#047857" },
  { value: "Â£30M+", label: "Capital Raised", color: "#10B981" },
  { value: "50+", label: "Investor Partners", color: "#047857" },
  { value: "12+", label: "Pitch Events Annually", color: "#047857" },
];

const startupBenefits = [
  {
    icon: Target,
    title: "Angel & VC Funding Access",
    description:
      "Gain access to angel investors, venture capital, and corporate funding opportunities.",
    color: "#047857",
  },
  {
    icon: Presentation,
    title: "Pitch Events & Showcases",
    description:
      "Participate in pitch events, investor forums, demo days and startup showcases.",
    color: "#10B981",
  },
  {
    icon: Lightbulb,
    title: "Funding Strategy Guidance",
    description:
      "Receive guidance on funding strategy, valuation, and investor engagement.",
    color: "#047857",
  },
  {
    icon: Globe,
    title: "Market Credibility",
    description:
      "Build credibility and visibility in both UK and Europe markets.",
    color: "#047857",
  },
  {
    icon: Mic2,
    title: "Pitch Coaching",
    description:
      "Pitch coaching and presentation readiness support.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Investor Matchmaking",
    description:
      "Themed networking dinners, panels, and roundtables for targeted investor-startup matchmaking.",
    color: "#047857",
  },
];

const vipFeatures = [
  {
    text: "VIP investor experiences and private pitch sessions",
    color: "#047857",
  },
  {
    text: "Exclusive access to high-value investor networks",
    color: "#10B981",
  },
  {
    text: "One-to-one investor introductions and relationship building",
    color: "#047857",
  },
];

const investorBenefits = [
  {
    icon: Sparkles,
    title: "High-Potential Startups",
    description:
      "Discover high-potential startups in software, fintech, AI, cybersecurity, and digital innovation.",
    color: "#047857",
  },
  {
    icon: Shield,
    title: "Pre-Screened Opportunities",
    description:
      "Access pre-screened, investment-ready opportunities.",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Cross-Border Founders",
    description:
      "Engage with emerging tech founders driving cross-border growth.",
    color: "#047857",
  },
  {
    icon: Building2,
    title: "Startup Summits & Expos",
    description:
      "Large-scale events highlighting emerging technologies, disruptive ideas, business models and scalable ventures.",
    color: "#047857",
  },
];

const whyItMattersPoints = [
  { text: "Accelerate product development", color: "#047857" },
  { text: "Scale operations efficiently", color: "#10B981" },
  { text: "Enter new markets with confidence", color: "#047857" },
  { text: "Access the most promising technology ventures across the UK and Pakistan", color: "#047857" },
];

/* âââ Component âââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export default function StartupFundingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ââ Hero ââ */}
      <PageHero
        label="Ecosystem / Startup Funding"
        title="Startup Funding Opportunities"
        subtitle="The UK–Pakistan Trades & Investment Board supports early-stage technology startups in accessing funding, investment networks, and growth capital to turn innovative ideas into scalable businesses."
        image="/image/banners/banner109.png"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Access Funding</ShinyButton>
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

      {/* ââ For Startups ââ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="For Startups" title="Startup Funding Events & Opportunities" subtitle="Connect with angel investors, venture capital firms, and corporate partners through our curated events and programs." color="blue" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {startupBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
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
                  <div className="relative h-full bg-white rounded-2xl p-7">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                      {item.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* VIP Features */}
          <div className="bg-white border border-[#D8D5CF] shadow-sm rounded-2xl p-8">
            <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
              Exclusive Access
            </h3>
            <div className="h-px bg-[#D8D5CF] mb-5" />
            <div className="space-y-4">
              {vipFeatures.map((feature, i) => (
                <motion.div
                  key={feature.text}
                  className="flex items-start gap-3"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: `${feature.color}10`, border: `1px solid ${feature.color}20` }}
                  >
                    <Award className="w-4 h-4" style={{ color: feature.color }} />
                  </div>
                  <span className="text-[#3D4152] text-base leading-relaxed pt-1">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ For Investors ââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="For Investors" title="Discover the Next Big Thing" subtitle="Access curated, high-potential startups and engage directly with founders across the UK and Pakistan tech ecosystem." color="green" />

          <div className="grid md:grid-cols-2 gap-7">
            {investorBenefits.map((item, i) => {
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

      {/* ââ Why It Matters ââ */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader label="Why It Matters" title="Funding is a Critical Enabler for Innovation" color="blue" />
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-6">
                Funding is a critical enabler for innovation. By facilitating investment connections, the Forum helps startups accelerate product development, scale operations, and enter new markets, while giving investors access to the most promising technology ventures across the UK and Pakistan.
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
                  What We Provide
                </h3>
                <div className="h-px bg-[#D8D5CF] mb-6" />
                <ul className="space-y-5">
                  {[
                    { title: "Investment Networks", desc: "Connections to angel investors, VCs, and corporate partners.", color: "#047857" },
                    { title: "Growth Capital", desc: "Access to funding programs and government-backed initiatives.", color: "#10B981" },
                    { title: "Fundraising Support", desc: "Strategy guidance, pitch coaching, and valuation advisory.", color: "#047857" },
                    { title: "Cross-Border Access", desc: "Investment opportunities spanning UK and Pakistan markets.", color: "#047857" },
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
        label="Get Started"
        title="Empowering Startups. Connecting Investors. Driving Cross-Border Growth."
        subtitle="Whether you are a startup seeking investment or an investor looking for the next breakthrough, the UKâPakistan Tech Forum is your gateway to cross-border opportunity."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
