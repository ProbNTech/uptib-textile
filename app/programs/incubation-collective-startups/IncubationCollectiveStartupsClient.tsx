"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Users, Shield, Rocket, Globe2 } from "lucide-react";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const focusAreas = [
  { title: "AI & Data Products", description: "Building intelligent solutions that transform industries through data-driven innovation.", color: "#047857" },
  { title: "FinTech & Digital Payments", description: "Revolutionising financial services with secure, scalable payment technologies.", color: "#10B981" },
  { title: "HealthTech & MedTech", description: "Advancing healthcare delivery through cutting-edge medical technologies and digital health solutions.", color: "#047857" },
  { title: "Cloud, SaaS & Enterprise Software", description: "Delivering scalable software solutions that power modern businesses and enterprises.", color: "#047857" },
  { title: "Cybersecurity & Digital Infrastructure", description: "Protecting digital assets and building resilient infrastructure for the modern economy.", color: "#047857" },
  { title: "EdTech & Future Skills", description: "Transforming education and workforce development through innovative learning platforms.", color: "#06b6d4" },
];

const timelineSteps = [
  { number: "01", title: "Ideation & Validation", outcomes: ["Market research and opportunity assessment", "Concept validation and feasibility analysis"], color: "#047857" },
  { number: "02", title: "Product & Market Fit", outcomes: ["MVP development and testing support", "Customer discovery and market positioning"], color: "#10B981" },
  { number: "03", title: "Compliance & Readiness", outcomes: ["Legal structure and regulatory guidance", "Intellectual property and compliance frameworks"], color: "#047857" },
  { number: "04", title: "Market Access & Partnerships", outcomes: ["UK and Pakistan market entry strategies", "Strategic partnership and distribution channels"], color: "#047857" },
  { number: "05", title: "Investment & Scale", outcomes: ["Funding rounds and investor introductions", "Scaling strategies and operational excellence"], color: "#047857" },
];

const audiences = [
  {
    title: "Early-Stage Founders",
    description: "For entrepreneurs with innovative ideas seeking validation, mentorship, and initial support to transform concepts into viable businesses.",
    gains: ["Idea validation and market research support", "Access to mentorship and advisory networks", "Initial infrastructure and workspace"],
    color: "#047857",
  },
  {
    title: "Growth-Stage Startups",
    description: "For established startups looking to scale operations, expand market reach, and access advanced resources and partnerships.",
    gains: ["Scaling strategies and growth frameworks", "Market expansion and partnership opportunities", "Advanced funding and investor connections"],
    color: "#10B981",
  },
  {
    title: "Corporate & Institutional Partners",
    description: "For organisations seeking to collaborate with innovative startups, access new technologies, and drive digital transformation.",
    gains: ["Access to curated startup portfolios", "Innovation partnerships and co-development", "Cross-border market entry support"],
    color: "#047857",
  },
];

const resources = [
  { label: "Mentorship & advisory", badge: "Cross-border" },
  { label: "Legal & compliance guidance", badge: "UK" },
  { label: "UK market entry support", badge: "UK" },
  { label: "Investor & VC access", badge: "Cross-border" },
  { label: "Product & technical advisory", badge: "Cross-border" },
  { label: "Policy and ecosystem connections", badge: "Pakistan" },
];

const stats = [
  { value: "50+", label: "startups supported", color: "#047857" },
  { value: "200+", label: "partnerships enabled", color: "#10B981" },
  { value: "15+", label: "markets accessed", color: "#047857" },
  { value: "£5M+", label: "funding facilitated", color: "#047857" },
];

export default function IncubationCollectiveStartupsClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-white content-body">
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTIB Programs"
        title="Incubation & Startups"
        subtitle="Nurturing the next generation of tech startups and innovators through collaborative models and comprehensive support."
        video="/videos/banner.mp4"
        videoSpeed={2}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Apply for Incubation</ShinyButton>
          <Button href="/contact" variant="glass" size="lg">
            Partner With Us
          </Button>
        </div>
      </PageHero>

      {/* ── Stats Bar ── */}
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

      {/* ── Intro Section ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <SectionHeader
                  label="Our Mission"
                  title="UPTIB's Incubation Centre provides a comprehensive ecosystem for startups to grow, scale, and succeed through collective models and collaborative structures."
                  color="blue"
                />
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                  Our Incubation Centre offers mentorship, resources, funding connections, and a collaborative environment where innovation thrives. Through our collective startup model, entrepreneurs can leverage shared infrastructure, expertise, and networks.
                </p>
                <p className="text-[#5A5F72] text-lg leading-relaxed">
                  We accelerate the journey from idea to market-ready product, connecting UK and Pakistani entrepreneurs with global opportunities.
                </p>
              </div>
              <div className="bg-white border border-[#D8D5CF] rounded-xl p-8 shadow-sm">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">Program Snapshot</h3>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-3">
                  {["Mentorship & Operators Network", "Shared Infrastructure & Tooling", "Funding & Investor Connections", "UK–Pakistan Market Access"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#5A5F72] text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Focus Areas ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader
              label="What We Incubate"
              title="Focus Areas"
              color="green"
              subtitle="Specialised support for high-impact tech sectors driving innovation across the UK and Pakistan."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2 group-hover:text-[#047857] transition-colors duration-200">
                      {area.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#7A7E8F] text-base leading-relaxed">{area.description}</p>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Incubation Pathway ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader
              label="Our Model"
              title="Incubation Pathway"
              color="blue"
              subtitle="A structured pathway from concept to market-ready venture with comprehensive support at every stage."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <div className="h-1 rounded-t-2xl" style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}80)` }} />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative flex-shrink-0">
                          <div
                            className="absolute inset-[-4px] rounded-full opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-500"
                            style={{ background: step.color }}
                          />
                          <div
                            className="relative w-12 h-12 rounded-full flex items-center justify-center text-base font-bold border-2"
                            style={{
                              background: `${step.color}15`,
                              borderColor: `${step.color}40`,
                              color: step.color,
                              boxShadow: `0 0 20px ${step.color}15`,
                            }}
                          >
                            {step.number}
                          </div>
                        </div>
                        <h3 className="font-heading font-bold text-[#1C1F2E] text-base sm:text-lg group-hover:text-[#047857] transition-colors duration-200">
                          {step.title}
                        </h3>
                      </div>
                      <div className="h-px bg-[#D8D5CF] mb-4" />
                      <ul className="space-y-2">
                        {step.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                            <span className="text-[#5A5F72] text-base leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Collective Startup Approach ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <SectionHeader
                  label="Collective Model"
                  title="The Collective Startup Approach"
                  color="red"
                />
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                  Our collective startup model emphasises collaboration over competition, enabling entrepreneurs to pool resources, share infrastructure, and reduce individual risk while amplifying collective success.
                </p>
                <p className="text-[#5A5F72] text-lg leading-relaxed">
                  By combining expertise, networks, and market access, collective startups can tackle larger opportunities, enter new markets faster, and build sustainable ventures that benefit from sector-driven solutions and cross-border partnerships.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">Collective Benefits</h3>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <ul className="space-y-4">
                    {[
                      { text: "Shared resources & infrastructure", icon: Users, color: "#047857" },
                      { text: "Reduced individual risk", icon: Shield, color: "#10B981" },
                      { text: "Amplified collective success", icon: Rocket, color: "#047857" },
                      { text: "Cross-border market access", icon: Globe2, color: "#047857" },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.text} className="flex items-center gap-3.5">
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                          >
                            <Icon className="w-4.5 h-4.5" style={{ color: item.color }} strokeWidth={1.5} />
                          </div>
                          <span className="text-[#3D4152] text-base font-medium">{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Corporate & Accelerator Partnerships ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader
              label="Partnerships"
              title="Corporate & Accelerator Partnerships"
              color="blue"
              subtitle="Strategic partnerships between startups, scale-ups, corporates, and accelerator programs across the UK and Pakistan."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  tag: "Founders",
                  title: "Start Your Journey",
                  desc: "Pre-seed capital, dedicated team support, access to corporate partners, and membership to our global founder community.",
                  items: ["Rapid technical development", "Holistic growth support", "Expert mentorship", "Pathway to 10x growth"],
                  color: "#047857",
                },
                {
                  tag: "Startups",
                  title: "Elevate Your Startup",
                  desc: "Capital investment with hands-on operational support. Pitch at flagship investor days with warm introductions to top-tier funds.",
                  items: ["Raise capital", "Six months 1:1 expert support", "Product & design", "Strategic partnerships"],
                  color: "#10B981",
                },
                {
                  tag: "Accelerators",
                  title: "Partner With Us",
                  desc: "Co-build acceleration programs with cross-border reach, shared deal flow, and access to the UK–Pakistan tech corridor.",
                  items: ["Co-branded programs", "Shared deal flow", "Cross-border market access", "Investor network access"],
                  color: "#047857",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.tag}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <div className="p-6">
                    <span
                      className="text-base font-semibold uppercase tracking-wide px-2 py-0.5 rounded mb-3 inline-block"
                      style={{ color: card.color, background: `${card.color}15` }}
                    >
                      {card.tag}
                    </span>
                    <h3 className="font-heading font-bold text-[#1C1F2E] mb-2 group-hover:text-[#047857] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed mb-4">{card.desc}</p>
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-base text-[#5A5F72]">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: card.color }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Who Should Join ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader
              label="Who It's For"
              title="Who Should Join"
              color="green"
              subtitle="Our programs are designed for founders, startups, and partners at different stages of growth."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map((audience, i) => (
                <motion.div
                  key={audience.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm flex flex-col h-full"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2 group-hover:text-[#047857] transition-colors duration-200">
                      {audience.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <p className="text-[#7A7E8F] text-base leading-relaxed mb-5 flex-1">{audience.description}</p>
                    <p className="text-base font-bold text-[#7A7E8F] uppercase tracking-wider mb-3">What they gain</p>
                    <ul className="space-y-2">
                      {audience.gains.map((gain) => (
                        <li key={gain} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: audience.color }} strokeWidth={2} />
                          <span className="text-[#5A5F72] text-base">{gain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader
              label="Support"
              title="What Participants Receive"
              color="red"
              subtitle="Comprehensive resources and support designed to accelerate your startup journey."
            />
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
              {resources.map((resource) => (
                <div key={resource.label} className="flex items-center justify-between py-4 border-b border-[#D8D5CF]">
                  <span className="text-[#3D4152] text-base font-medium">{resource.label}</span>
                  <span className="text-base font-semibold text-[#047857] bg-[#047857]/10 px-3 py-1 rounded">
                    {resource.badge}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-base text-[#7A7E8F] mt-6">Metrics shown are indicative and updated as programs scale.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <GlobalCTA
        label="Get Involved"
        title="Build, Scale, and Expand With UPTIB"
        subtitle="Join our incubation program and become part of a collaborative ecosystem driving innovation across the UK and Pakistan."
        primaryButtonText="Apply for Incubation"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Partner With Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
