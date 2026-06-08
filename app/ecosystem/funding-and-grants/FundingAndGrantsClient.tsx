"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import {
  Rocket,
  Lightbulb,
  Globe2,
  Cpu,
  Building2,
  GraduationCap,
  TrendingUp,
  BookOpen,
  Banknote,
  Users,
  Shield,
  FileText,
  CheckCircle2,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/* âââ Data ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const stats = [
  { value: "Â£50M+", label: "Funding Facilitated" },
  { value: "150+", label: "Companies Funded" },
  { value: "85%", label: "Success Rate" },
  { value: "3", label: "Funding Stages" },
];

const overviewItems = [
  {
    title: "Startup Funding",
    description: "Seed and early-stage funding for innovative technology startups with cross-border potential.",
    icon: Rocket,
    color: "#047857",
  },
  {
    title: "Research Grants",
    description: "Support for academic research and technology development projects driving bilateral innovation.",
    icon: BookOpen,
    color: "#10B981",
  },
  {
    title: "Growth Capital",
    description: "Investment opportunities for scaling technology businesses across the UKâPakistan corridor.",
    icon: TrendingUp,
    color: "#047857",
  },
];

const opportunities = [
  { title: "Innovation Grants", description: "Funding for innovative technology projects that demonstrate potential for cross-border impact.", icon: Lightbulb, color: "#047857" },
  { title: "Startup Accelerator", description: "Comprehensive support including funding, mentorship, and access to networks.", icon: Rocket, color: "#10B981" },
  { title: "Bilateral Projects", description: "Grants for collaborative projects between UK and Pakistan organisations.", icon: Globe2, color: "#047857" },
  { title: "Research & Development", description: "Support for R&D initiatives in emerging technologies and digital transformation.", icon: Cpu, color: "#047857" },
  { title: "Enterprise Partnerships", description: "Funding opportunities for established companies expanding cross-border operations.", icon: Building2, color: "#10B981" },
  { title: "Skills Development", description: "Grants for programs that enhance technology skills and workforce capabilities.", icon: GraduationCap, color: "#047857" },
];

const fundingGrantsIntro = {
  heading: "BRIDGING THE FUNDING GAP FOR EARLY-STAGE COMPANIES",
  description: "Pakistan\u2019s policy framework already offers vital support for early-stage companies, but we can enhance this further by introducing:",
};

const fundingStages = [
  {
    stage: "Pre-Seed & Seed",
    title: "Startup Funding",
    description: "We provide entrepreneurs with pre-seed capital, support from a dedicated team, access to corporate partners and membership to our global founder community.",
    features: ["Pre-seed capital investment", "Dedicated support team", "Corporate partner introductions", "Global founder community access"],
    icon: Rocket,
    color: "#047857",
  },
  {
    stage: "Sophisticated Investor",
    title: "Sophisticated Investor",
    description: "Currently, to participate in early-stage investment syndicates, individuals must qualify as sophisticated investors based on an income of \u00A3250K or assets worth \u00A31 million. This rule excludes many knowledgeable and experienced individuals, like startup employees and senior leaders, who might have lower salaries due to equity-based compensation. By broadening the criteria, we can include more of these potential investors and strengthen support for early-stage startups.",
    features: ["Broaden qualification criteria beyond income thresholds", "Include experienced startup employees and senior leaders", "Support equity-based compensation holders", "Strengthen early-stage startup investment syndicates"],
    icon: Users,
    color: "#10B981",
  },
  {
    stage: "Series A & B",
    title: "Growth Capital",
    description: "For companies that demonstrate potential to 10x their growth. By aligning with our expertise, network, and capital, your startup will be well-positioned to scale rapidly.",
    features: ["Raise capital with operational support", "Pitch at flagship investor days", "Warm introductions to top-tier funds", "Six months 1:1 expert support"],
    icon: TrendingUp,
    color: "#047857",
  },
  {
    stage: "R&D",
    title: "Research & Development Incentives",
    description: "At UK–Pakistan Trades & Investment Board (UPTIB), we highly value the current R&D tax incentive, recognizing the pivotal role that research and development play in driving technological advancements. With the launch of this initiative in Pakistan, we aim to further bolster the tech sector by making the R&D tax incentive more transparent and accessible, for digital literacy, healthcare sector, energy solutions and infusion technologies. We appreciate ongoing efforts to clarify the application of these incentives and are committed to collaborating closely with experts in the field to provide clearer guidance. Our goal is to ensure that the intent and application of this incentive are well understood and effectively implemented by both industry leaders and administrators. Through this initiative, we are paving the way for a robust, innovation-driven future in Pakistan.",
    features: ["Digital literacy R&D incentives", "Healthcare sector innovation support", "Energy solutions R&D programmes", "Infusion technologies advancement"],
    icon: Cpu,
    color: "#047857",
  },
];

const eligibilityCriteria = [
  { text: "Technology-focused projects with clear innovation potential", icon: Lightbulb, color: "#047857" },
  { text: "Alignment with UKâPakistan technology partnership objectives", icon: Globe2, color: "#10B981" },
  { text: "Demonstrated commitment to cross-border collaboration", icon: Users, color: "#047857" },
  { text: "Viable business model or research proposal", icon: FileText, color: "#047857" },
  { text: "Experienced team with relevant expertise", icon: Shield, color: "#10B981" },
];

const applicationSteps = [
  { number: "01", title: "Submit Application", description: "Complete the online application form with project details and objectives.", outcome: "Application logged", icon: FileText, color: "#047857" },
  { number: "02", title: "Review Process", description: "Expert panel evaluates your proposal against eligibility and impact criteria.", outcome: "Proposal scored", icon: Shield, color: "#10B981" },
  { number: "03", title: "Due Diligence", description: "Shortlisted applicants undergo a thorough due diligence and reference check process.", outcome: "Validation complete", icon: CheckCircle2, color: "#047857" },
  { number: "04", title: "Funding Decision", description: "Notification of outcome and disbursement of approved funds with milestone tracking.", outcome: "Funds released", icon: Banknote, color: "#047857" },
];

const benefits = [
  { title: "Financial Support", description: "Access to capital for project development, scaling, and cross-border expansion.", icon: Banknote, color: "#047857" },
  { title: "Mentorship", description: "Guidance from experienced industry leaders, investors, and domain experts.", icon: Users, color: "#10B981" },
  { title: "Networking", description: "Connect with investors, corporate partners, and potential collaborators across borders.", icon: Globe2, color: "#047857" },
  { title: "Market Access", description: "Opportunities to expand into UK, Pakistan, and international markets.", icon: ArrowUpRight, color: "#047857" },
];

const faqs = [
  { question: "What types of funding are available?", answer: "We offer pre-seed and seed investment, Series A/B growth capital facilitation, R&D grants, innovation grants, and bilateral project funding. The type of funding depends on your stage, sector, and project objectives." },
  { question: "How long does the application process take?", answer: "Initial applications are reviewed within 2â4 weeks. The full process â including due diligence and funding decision â typically takes 6â12 weeks depending on the funding type and complexity of the proposal." },
  { question: "Is funding available for non-tech companies?", answer: "Our primary focus is technology-focused companies and projects. However, companies in adjacent sectors that demonstrate significant technology innovation or digital transformation may also be eligible." },
  { question: "Can I apply for multiple funding streams?", answer: "Yes, you can apply for multiple funding streams simultaneously, provided you meet the eligibility criteria for each. Our team can advise on the most appropriate funding mix for your needs." },
  { question: "What are the reporting requirements?", answer: "Funded companies are required to provide quarterly progress reports, financial updates, and milestone tracking. We work collaboratively with funded companies to ensure success and accountability." },
];

/* âââ Helpers âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const faqColors = ["#047857", "#10B981", "#047857", "#047857", "#10B981"];

const statColors = ["#047857", "#10B981", "#047857", "#047857"];

/* âââ Component âââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export default function FundingAndGrantsClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-white content-body">
      {/* ââ HERO ââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <PageHero
        label="Ecosystem / Funding & Grants"
        title="Funding and Grants"
        subtitle="Access funding opportunities to drive technology innovation and cross-border collaboration between the UK and Pakistan."
        image="/image/banners/banner93.png"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Become a Member</ShinyButton>
          <Button href="/contact" variant="glass">
            Contact Us
          </Button>
        </div>
      </PageHero>

      {/* ââ STATS BAR âââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const color = statColors[i % statColors.length];
              return (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-xl p-6">
                      <p
                        className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                        style={{ color }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[#5A5F72] text-base">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ââ OVERVIEW ââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="mb-8">
              <SectionHeader
                label="Overview"
                title="Funding Programs Designed for the UKâPakistan Tech Corridor"
                color="blue"
                subtitle="UPTIB provides access to funding opportunities and grants designed to support technology innovation, startup growth, and cross-border collaboration between the UK and Pakistan."
              />
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                Our funding programs enable entrepreneurs, researchers, and organisations to turn innovative ideas into reality. Whether you&apos;re a startup seeking seed funding, a researcher looking for grant support, or an enterprise exploring partnership opportunities, we connect you with the right funding sources and resources.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {overviewItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full rounded-2xl bg-white shadow-sm p-7 transition-all duration-500 overflow-hidden">
                    {/* Icon */}
                    <div className="relative mb-5">
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-3">{item.title}</h3>
                    <div className="relative h-px bg-[#D8D5CF] mb-3" />
                    <p className="relative text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ OPPORTUNITIES âââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="mb-8">
              <SectionHeader
                label="Funding"
                title="Available Opportunities"
                color="green"
                subtitle="Explore our range of funding programs designed to support technology innovation and cross-border collaboration."
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((opp, i) => {
                const Icon = opp.icon;
                return (
                  <motion.div
                    key={opp.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full rounded-2xl bg-white shadow-sm p-7 transition-all duration-500 overflow-hidden">
                    {/* Icon */}
                    <div className="relative mb-5">
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${opp.color}10`, border: `1px solid ${opp.color}15` }}
                      >
                        <Icon className="w-5.5 h-5.5" style={{ color: opp.color }} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-300">
                      {opp.title}
                    </h3>
                    <div className="relative h-px bg-[#D8D5CF] mb-3" />
                    <p className="relative text-[#5A5F72] text-base leading-relaxed">{opp.description}</p>
                    {/* Arrow hint on hover */}
                    <div
                      className="relative mt-5 flex items-center gap-1.5 text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: opp.color }}
                    >
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ FUNDING STAGES ââââââââââââââââââââââââââââââââââââââââ */}
      <section className="relative bg-[#E8E6E3] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="mb-8">
              <SectionHeader
                label="Funding Grants"
                title="Bridging the Funding Gap for Early-Stage Companies"
                color="red"
                subtitle="Pakistan's policy framework already offers vital support for early-stage companies, but we can enhance this further. Explore our tailored funding support from pre-seed through to Series B and R&D incentives."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-7">
              {fundingStages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.stage}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full rounded-2xl bg-white shadow-sm p-8 flex flex-col transition-all duration-500 overflow-hidden"
                  >
                    {/* Stage label + icon row */}
                    <div className="relative flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div
                          className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <div>
                        {/* Glowing badge */}
                        <span
                          className="inline-block text-base font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-1.5"
                          style={{
                            background: `${item.color}15`,
                            color: item.color,
                            border: `1px solid ${item.color}30`,
                          }}
                        >
                          {item.stage}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">{item.title}</h3>
                      </div>
                    </div>

                    <div className="relative h-px bg-[#D8D5CF] mb-5" />
                    <p className="relative text-base text-[#5A5F72] leading-relaxed mb-6">{item.description}</p>
                    <ul className="relative space-y-3 mt-auto">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-base text-[#3D4152]">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ APPLICATION PROCESS ââââââââââââââââââââââââââââââââââââââ */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="mb-8">
              <SectionHeader
                label="Process"
                title="Application Process"
                color="red"
                subtitle="A transparent, structured pathway from application to funding."
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full rounded-2xl bg-white shadow-sm p-7 transition-all duration-500 overflow-hidden"
                  >
                    {/* Numbered glowing circle + icon */}
                    <div className="relative flex items-center gap-3 mb-5">
                      <div className="relative">
                        <div
                          className="relative w-11 h-11 rounded-full flex items-center justify-center text-base font-bold text-white flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}, ${step.color}90)`,
                            boxShadow: `0 0 20px -5px ${step.color}50`,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: `${step.color}10`, border: `1px solid ${step.color}15` }}
                      >
                        <Icon className="w-4.5 h-4.5" style={{ color: step.color }} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-2">{step.title}</h3>
                    <p className="relative text-[#5A5F72] text-base leading-relaxed mb-5">{step.description}</p>

                    {/* Outcome badge */}
                    <div
                      className="relative inline-flex items-center gap-1.5 text-base font-semibold px-3 py-1.5 rounded-full"
                      style={{
                        background: `${step.color}10`,
                        color: step.color,
                        border: `1px solid ${step.color}20`,
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{step.outcome}</span>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ ELIGIBILITY + BENEFITS SIDEBAR âââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Eligibility */}
            <div className="lg:col-span-3">
              <SectionHeader
                label="Eligibility"
                title="Eligibility Criteria"
                color="red"
                subtitle="Understanding the requirements for funding and grant applications."
              />
              <div className="space-y-4">
                {eligibilityCriteria.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.text}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <span className="text-[#3D4152] text-base leading-relaxed pt-2">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">Why Apply Through UPTIB</h3>
                <div className="h-px bg-[#D8D5CF] mb-6" />
                <ul className="space-y-5">
                  {benefits.map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                      <motion.li
                        key={benefit.title}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        className="flex items-start gap-3.5"
                      >
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                          style={{ background: `${benefit.color}10`, border: `1px solid ${benefit.color}20` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: benefit.color }} strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="font-semibold text-[#1C1F2E] text-base">{benefit.title}</span>
                          <p className="text-[#5A5F72] text-base leading-relaxed mt-1">{benefit.description}</p>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ FAQ ââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            color="blue"
            subtitle="Common questions about funding and grants."
          />
          <FAQSection faqs={faqs} shouldReduceMotion={shouldReduceMotion} />
        </AnimatedSection>
      </Section>

      {/* ââ CTA ââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <GlobalCTA
        label="Apply Now"
        title="Ready to Secure Funding for Your Innovation?"
        subtitle="Explore funding opportunities and take your technology innovation to the next level with UPTIB funding and grants programs."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}

/* âââ FAQ Section (light theme accordion) âââââââââââââââââââââââââââââââ */

function FAQSection({
  faqs,
  shouldReduceMotion,
}: {
  faqs: { question: string; answer: string }[];
  shouldReduceMotion: boolean | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const color = faqColors[index % faqColors.length];
        return (
          <motion.div
            key={faq.question}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`rounded-xl border overflow-hidden transition-all duration-500 ${
              isOpen
                ? "border-[#D8D5CF] bg-[#F5F4F2] shadow-md"
                : "border-[#D8D5CF] bg-white hover:shadow-sm"
            }`}
            style={isOpen ? { borderLeft: `3px solid ${color}` } : {}}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-base font-bold transition-all duration-300"
                style={
                  isOpen
                    ? {
                        background: color,
                        color: "#fff",
                        boxShadow: `0 0 15px -3px ${color}50`,
                      }
                    : { background: `${color}12`, color }
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-heading font-semibold text-[#1C1F2E] text-base flex-1">
                {faq.question}
              </span>
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={isOpen ? { background: `${color}15` } : { background: "transparent" }}
              >
                <ChevronDown
                  className="w-4.5 h-4.5 transition-transform duration-300"
                  style={{
                    color: isOpen ? color : "#7A7E8F",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 pl-[4.25rem] lg:pl-[4.75rem]">
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <p className="text-[#5A5F72] text-base leading-[1.8]">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
