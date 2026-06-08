"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  Rocket,
  Lightbulb,
  Users,
  TrendingUp,
  Handshake,
  Target,
  Globe,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  BarChart3,
  Cpu,
  Briefcase,
  PenTool,
  Megaphone,
  Code2,
  Database,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/* âââ Data ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const stats = [
  { value: "50+", label: "Corporate Partners", color: "#047857" },
  { value: "120+", label: "Startups Accelerated", color: "#10B981" },
  { value: "30+", label: "Accelerator Programs", color: "#047857" },
  { value: "Â£40M+", label: "Investment Facilitated", color: "#047857" },
];

const founderBenefits = [
  {
    icon: Rocket,
    title: "Accelerate with Rapid Technical Development",
    description:
      "We help you get your AI/IT product to market quickly with hands-on support from MVP builds to scaling your tech stack.",
    color: "#047857",
  },
  {
    icon: Users,
    title: "Continuous Support from Experienced Entrepreneurs",
    description: "Get advice from people who\u2019ve actually done it. We\u2019ll share the lessons, shortcuts, and hard truths that help you move faster and avoid common pitfalls.",
    color: "#10B981",
  },
  {
    icon: Handshake,
    title: "Holistic Growth Support",
    description: "Our investment comes with hands-on help. We support everything from product validation and marketing to hiring and growth strategy. Plus, you\u2019ll tap into a network of founders, advisors, and investors who\u2019ve been there before.",
    color: "#047857",
  },
  {
    icon: Lightbulb,
    title: "Expert Mentorship",
    description:
      "You\u2019ll be guided by experienced entrepreneurs and advisors who have built and exited high-growth companies. We ensure thorough due diligence at every step, identifying areas of improvement and growth potential while offering tailored mentorship to help you navigate challenges.",
    color: "#047857",
  },
  {
    icon: TrendingUp,
    title: "Pathway to Fast Growth",
    description:
      "Our aim is to invest in companies that demonstrate potential to 10x their growth. By aligning with our expertise, network, and capital, your startup will be well-positioned to scale rapidly, both in terms of revenue and market presence.",
    color: "#047857",
  },
];

const operationalAreas = [
  { name: "Product & Design", icon: PenTool, color: "#047857" },
  { name: "Fundraising", icon: BarChart3, color: "#10B981" },
  { name: "Growth", icon: TrendingUp, color: "#047857" },
  { name: "Talent", icon: Users, color: "#047857" },
  { name: "Data Science", icon: Database, color: "#047857" },
  { name: "Strategic Partnerships", icon: Handshake, color: "#047857" },
  { name: "PR and Communications", icon: Megaphone, color: "#10B981" },
  { name: "Engineering", icon: Code2, color: "#047857" },
];

const acceleratorBenefits = [
  {
    icon: Globe,
    title: "Global Expansion Made Easy",
    description:
      "Get access to all the resources you need to reach new horizons: funding, introductions, expertise, and global offices for your startup\u2019s international growth.",
    color: "#047857",
  },
  {
    icon: Users,
    title: "A Network Beyond What Money Can Buy",
    description:
      "Our industry focus allows founders to get valuable introductions to the most relevant people in their industry such as investors, partners, mentors, and more.",
    color: "#10B981",
  },
  {
    icon: Building2,
    title: "Corporate Partnerships",
    description:
      "Access to leading innovators in the world\u2019s most influential companies is what we call our unfair advantage. Fast-track your company with proprietary access to IP, market intelligence, distribution channels, relationships, credibility and capital.",
    color: "#047857",
  },
];

const acceleratorDetails = [
  "Connecting founders with senior executives for strategic guidance",
  "Data and insights teams for market intelligence",
  "Mentorship from industry leaders and domain experts",
  "Product distribution channels through corporate networks",
  "Commercial pilots with enterprise customers",
  "Capital investment for scaling operations",
];

const investorBenefits = [
  {
    text: "We provide investors with the ability to invest in the tech winners of tomorrow, today.",
    color: "#047857",
  },
  {
    text: "Each investment gives access to a portfolio of startups with leading edge technologies and business models. The portfolio approach helps de-risk your investment compared to investing in individual startups.",
    color: "#10B981",
  },
  {
    text: "We back AI-first companies solving real problems in sectors like FinTech, MedTech, Agri Tech and beyond \u2014 and we don\u2019t just fund them, we get stuck in. From MVP to Series A, we work closely with founders, helping them build faster and smarter with deep technical and strategic support.",
    color: "#047857",
  },
];

const partnerOfferings = [
  {
    icon: Lightbulb,
    title: "Engage and Position Yourself at the Heart of Innovation",
    description:
      "Corporate partners have the unique opportunity to actively engage with our portfolio startups. Discover emerging technologies, understand their applications, and explore unique collaboration and investment opportunities that align with your corporate goals.",
    color: "#047857",
  },
  {
    icon: Cpu,
    title: "Work with Tech Visionaries",
    description:
      "Our corporate partners are given a chance to work directly with tech pioneers. This interaction not only fosters strategic partnerships but also provides a glimpse into the future of technology, offering an advantage in adapting to the rapidly evolving tech landscape.",
    color: "#10B981",
  },
  {
    icon: Target,
    title: "Invest in Startups with Proven Technology and Business Models",
    description:
      "For partners running a CVC arm within a large company, looking to make smart investments, or acquisitions into one of your business units. Our selected portfolio offers a great opportunity to access the leading technologies and business models of tomorrow.",
    color: "#047857",
  },
];

/* âââ Component âââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export default function CorporatePartnershipsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ââ Hero Section ââ */}
      <PageHero
        label="UPTIB Service"
        title="Corporate & Accelerator Partnerships"
        subtitle="The UK–Pakistan Trades & Investment Board fosters strategic partnerships between technology startups, scale-ups, corporates, and accelerator programs across the UK and Pakistan. These collaborations help members access resources, mentorship, market opportunities, and industry expertise to accelerate growth and innovation."
        video="/videos/banner.mp4"
        videoSpeed={2}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Become a Partner</ShinyButton>
          <Button href="/contact" variant="glass">Get in Touch</Button>
        </div>
      </PageHero>

      {/* ================================================================
          STATS BAR
          ================================================================ */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-xl p-6">
                    <div
                      className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <p className="text-[#5A5F72] text-base">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOUNDERS SECTION
          ================================================================ */}
      <section className="relative bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#047857]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-10">
              <div className="lg:col-span-3">
                <SectionHeader label="For Founders" title="Start Your Journey with a Unique Advantage" color="blue" />
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-4">
                  We provide entrepreneurs with pre-seed capital, support from a dedicated team, access to our corporate partners and membership to our global founder community.
                </p>
                <p className="text-[#5A5F72] text-lg leading-relaxed">
                  You&apos;ll be part of a network of founders, investors, and partners who are all building the future of AI/IT Globally.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-md sticky top-8">
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">Founder Highlights</h3>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <ul className="space-y-3">
                    {["Pre-seed capital investment", "Dedicated team support", "Corporate partner access", "Global founder community"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-base text-[#5A5F72]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {founderBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <div className="relative z-[1] p-6">
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon className="w-6 h-6 relative z-[1]" style={{ color: item.color }} />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">
                        {item.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-base text-[#5A5F72] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          STARTUPS SECTION
          ================================================================ */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="For Startups" title="Elevate Your Startup with the Backing of Our Team" subtitle="Elevate your startup with the backing of our team and partners. We're co-pilots on your entrepreneurial journey." color="green" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                  <div className="h-1 rounded-t-2xl bg-gradient-to-r from-[#10B981] to-[#10B981]/60" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#10B98115", border: "1px solid #10B98125" }}>
                        <BarChart3 className="w-6 h-6 text-[#10B981]" />
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">Raise Capital</h3>
                    </div>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">
                      We invest capital together with a program of hands-on operational support to help you scale faster. During the program, you&apos;ll be given the opportunity to pitch at our flagship investor day, along with warm introductions to our network of top tier funds.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                  <div className="h-1 rounded-t-2xl bg-gradient-to-r from-[#047857] to-[#047857]/60" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#04785715", border: "1px solid #04785725" }}>
                        <Briefcase className="w-6 h-6 text-[#047857]" />
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">Operational Support</h3>
                    </div>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">
                      Receive six months of dedicated 1:1 support from a team of experienced experts across all operational areas â from strategy, product and data science to fundraising, marketing and operations.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                  <div className="h-1 rounded-t-2xl bg-gradient-to-r from-[#047857] to-[#047857]/60" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#04785715", border: "1px solid #04785725" }}>
                        <Globe className="w-6 h-6 text-[#047857]" />
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">Market Access</h3>
                    </div>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">
                      Pitch at flagship investor days with warm introductions to top-tier funds and cross-border opportunities.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* WE ARE HERE TO HELP YOU headline */}
            <div className="text-center mb-6">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl leading-snug">
                <span className="bg-gradient-to-r from-[#10B981] via-[#047857] to-[#047857] bg-clip-text text-transparent">
                  WE ARE HERE TO HELP YOU GO FURTHER, FASTER
                </span>
              </h3>
              <p className="text-[#5A5F72] text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
                We know the unknown is part of the thrill, but it doesn&apos;t have to be a guessing game. With our knowledge and expertise, you&apos;ll get a clearer path, backed by founders who&apos;ve walked it before. We will use that experience to help you succeed.
              </p>
            </div>

            {/* Operational areas grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {operationalAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.name}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm p-5 text-center">
                    <div
                      className="relative w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${area.color}15`, border: `1px solid ${area.color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: area.color }} />
                    </div>
                    <p className="text-[#3D4152] text-base font-medium">{area.name}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          ACCELERATORS SECTION
          ================================================================ */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#047857]/5 rounded-full blur-[150px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="Accelerators" title="Designed to Help Ambitious Founders Scale Beyond Limits" subtitle="Accelerators are designed with one goal in mind to help ambitious founders scale beyond limits." color="red" />

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {acceleratorBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <div className="relative z-[1] p-7">
                      <div className="relative mb-5">
                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-3">
                        {item.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#5A5F72] text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Accelerator details list */}
            <div className="bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-sm relative">
              <div className="absolute -top-px left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#047857]/50 to-transparent" />
              <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                What Our Accelerator Partners Provide
              </h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <div className="grid md:grid-cols-2 gap-4">
                {acceleratorDetails.map((detail, i) => (
                  <motion.div
                    key={detail}
                    className="flex items-start gap-3"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: ["#047857", "#10B981", "#047857", "#047857", "#047857", "#10B981"][i] }}
                    />
                    <span className="text-[#5A5F72] text-base leading-relaxed">
                      {detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          INVESTORS SECTION
          ================================================================ */}
      <section className="relative bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#047857]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <SectionHeader label="For Investors" title="Invest in the Tech Winners of Tomorrow, Today" color="blue" />

                <div className="space-y-4">
                  {investorBenefits.map((benefit, i) => (
                    <motion.div
                      key={benefit.text}
                      className="relative flex items-start gap-3 pl-4"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <div
                        className="absolute top-0 bottom-0 left-0 w-1 rounded-r-full"
                        style={{ background: `linear-gradient(to bottom, ${benefit.color}, ${benefit.color}40)` }}
                      />
                      <div
                        className="relative flex-shrink-0 mt-0.5"
                      >
                        <div
                          className="relative w-7 h-7 rounded-xl flex items-center justify-center"
                          style={{ background: `${benefit.color}15`, border: `1px solid ${benefit.color}30` }}
                        >
                          <CheckCircle2 className="w-4 h-4" style={{ color: benefit.color }} strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-[#5A5F72] text-base leading-relaxed">
                        {benefit.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-md sticky top-8 overflow-hidden relative">
                  <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                    Why Invest Through UPTIB
                  </h3>
                  <div className="relative h-px bg-[#D8D5CF] mb-6" />
                  <ul className="relative space-y-4">
                    <li className="flex items-start gap-3 text-[#5A5F72] text-base leading-relaxed">
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#047857]" />
                      <span>Access curated portfolios of high-growth technology companies</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#5A5F72] text-base leading-relaxed">
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#10B981]" />
                      <span>AI-first companies solving real problems across multiple sectors</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#5A5F72] text-base leading-relaxed">
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#047857]" />
                      <span>Cross-border investment opportunities in FinTech, MedTech, Agri Tech and beyond</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          PARTNERS SECTION
          ================================================================ */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="For Partners" title="Learn, Engage, Work with the Tech of Tomorrow, Today" subtitle="Our goal is to foster an inclusive ecosystem where everyone can partake in and reap the rewards from entrepreneurial successes. By forging impactful connections between innovative startups and corporates, as well as global organizations, we are deeply committed to sparking progress and addressing the world's most pressing challenges. By becoming an integral part of this vibrant ecosystem, corporate clients and partners gain invaluable insights from accomplished entrepreneurs and early-stage startups, empowering them with the knowledge to propel their own innovation journey forward." color="red" />

            <div className="grid md:grid-cols-3 gap-6">
              {partnerOfferings.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <div className="relative z-[1] p-7">
                      <div className="relative mb-5">
                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-3">
                        {item.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#5A5F72] text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ Partnership Documents ââ */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="Documents" title="Partnership Documents" color="blue" subtitle="Interested in formalising a partnership with UPTIB? Review our Memorandum of Understanding template." />
            <motion.a
              href="/documents/UPTIB-Memorandum-of-Understanding.pdf"
              target="_blank"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="group relative max-w-2xl bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#047857]/10 border border-[#047857]/25 flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-5 h-5 text-[#047857]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2 group-hover:text-[#047857] transition-colors duration-200">Memorandum of Understanding (MoU)</h3>
                  <p className="text-base text-[#5A5F72] leading-relaxed mb-3">A non-binding framework for cooperation between UPTIB and trade organisations, associations, and NGOs â covering joint events, mutual promotion, networking, and collaborative initiatives.</p>
                  <span className="inline-flex items-center gap-2 text-base font-semibold text-[#047857]">
                    Download MoU Template <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <section className="relative bg-[#131942]/80 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=2400&q=85&auto=format&fit=crop" alt="Corporate Partnerships background" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-[#047857]/8 blur-[200px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#047857]/6 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#10B981]/5 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#047857]/30 bg-[#047857]/10 backdrop-blur-sm mb-6"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#047857] animate-pulse" />
                <span className="text-[#047857] text-base font-semibold uppercase tracking-wider">
                  Partner With Us
                </span>
              </motion.div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                  Ready to Build the Future of{" "}
                </span>
                <span className="bg-gradient-to-r from-[#047857] via-[#047857] to-[#10B981] bg-clip-text text-transparent">
                  Tech Together?
                </span>
              </h2>

              <p className="text-white/50 text-lg sm:text-xl leading-relaxed mb-8 mx-auto">
                Whether you&apos;re a founder, startup, investor, or corporate partner, we&apos;re here to help you go further, faster.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href="/membership"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="!bg-gradient-to-r !from-[#047857] !to-[#10B981] hover:!shadow-[0_0_40px_rgba(4,120,87,0.3)]"
                >
                  Become a Member
                </Button>
                <Button href="/contact" variant="glass" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
