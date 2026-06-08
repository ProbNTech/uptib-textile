"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  BadgeCheck,
  Globe2,
  Briefcase,
  Users,
  CheckCircle2,
  Star,
  ClipboardList,
  Search,
  ThumbsUp,
  ListChecks,
  Brain,
  Cloud,
  Shield,
  CreditCard,
  Code2,
  CalendarClock,
} from "lucide-react";

/* ── Purpose items ───────────────────────────────────────────────── */
const purposeItems = [
  { text: "Build trust in cross-border technology partnerships", color: "#047857" },
  { text: "Ensure quality and professional standards", color: "#10B981" },
  { text: "Promote reliable Pakistani technology companies internationally", color: "#047857" },
  { text: "Provide confidence to companies in the United Kingdom and European markets", color: "#047857" },
];

/* ── Certification Benefits ───────────────────────────────────────── */
const benefits = [
  {
    icon: BadgeCheck,
    color: "#047857",
    title: "Global Recognition",
    description:
      "Companies can display the UPTIB Trusted Partner Certification badge on their website, marketing materials, and business profiles.",
  },
  {
    icon: Globe2,
    color: "#10B981",
    title: "International Visibility",
    description:
      "Certified companies will be featured in the UPTIB Global Technology Directory, accessible to businesses and investors across Europe.",
  },
  {
    icon: Briefcase,
    color: "#047857",
    title: "Business Opportunities",
    description:
      "Certified partners may receive priority access to international technology projects, B2B matchmaking opportunities, and technology partnerships with European companies.",
  },
  {
    icon: Star,
    color: "#7C3AED",
    title: "Enhanced Credibility",
    description:
      "Certification demonstrates that the company has passed UPTIB verification standards, increasing trust with international clients.",
  },
];

/* ── Certification Criteria ──────────────────────────────────────── */
const criteria = [
  {
    icon: ClipboardList,
    color: "#047857",
    title: "Professional Experience",
    description: "Proven experience in IT services or technology development; portfolio of successful projects.",
  },
  {
    icon: Brain,
    color: "#10B981",
    title: "Technical Capability",
    description: "Expertise in AI, Cloud computing, Cybersecurity, FinTech, and Software engineering.",
    tags: ["AI", "Cloud", "Cybersecurity", "FinTech", "Software"],
    tagColors: ["#047857", "#10B981", "#047857", "#7C3AED", "#047857"],
  },
  {
    icon: Shield,
    color: "#047857",
    title: "Business Integrity",
    description: "Transparent business practices and compliance with contractual obligations.",
  },
  {
    icon: Search,
    color: "#7C3AED",
    title: "Client References",
    description: "Verified client testimonials or project references demonstrating a track record of delivery.",
  },
  {
    icon: Users,
    color: "#047857",
    title: "Team Expertise",
    description: "Qualified technology professionals and development teams with demonstrable skills.",
  },
];

/* ── Certification Process ───────────────────────────────────────── */
const processSteps = [
  {
    number: "01",
    title: "Application",
    description:
      "Companies submit an application with company details, portfolio, and references.",
    outcome: "Application submitted",
    color: "#047857",
  },
  {
    number: "02",
    title: "Evaluation",
    description:
      "UPTIB reviews the application based on technical expertise, business experience, and professional standards.",
    outcome: "Application reviewed",
    color: "#10B981",
  },
  {
    number: "03",
    title: "Approval",
    description:
      "Successful companies are granted UPTIB Trusted Partner Certification and issued their verified badge.",
    outcome: "Certification granted",
    color: "#047857",
  },
  {
    number: "04",
    title: "Listing",
    description:
      "Certified companies are listed in the UPTIB Global Technology Directory for international visibility.",
    outcome: "Directory listed",
    color: "#7C3AED",
  },
];

export default function TrustedPartnerCertificationClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        label="UPTIB Certification"
        title="Trusted Partner Certification"
        subtitle="Recognising Pakistani technology companies that meet high standards of professionalism, reliability, and technical capability for global collaboration."
        image="/image/banners/banner49.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Apply for Certification</ShinyButton>
          <Button href="/contact" variant="glass">Get in Touch</Button>
        </div>
      </PageHero>

      {/* ── About ────────────────────────────────────────────────────── */}
      <Section>
        <AnimatedSection>
          <div className="max-w-3xl">
            <SectionHeader
              label="About the Programme"
              title="Verified Technology Partners for Global Collaboration"
              color="blue"
            />
            <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed mb-4">
              UPTIB offers a Trusted Partner Certification programme designed to recognise Pakistani technology companies
              that meet high standards of professionalism, reliability, and technical capability. This certification helps
              international companies identify verified and credible technology partners when collaborating with Pakistani IT firms.
            </p>
            <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed">
              Through the Trusted Partner Certification programme, UPTIB aims to create a reliable technology ecosystem
              connecting Pakistani IT companies with global markets, particularly in the United Kingdom and across Europe.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Purpose ──────────────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Purpose"
            title="Purpose of the Certification"
            subtitle="The programme is designed to strengthen trust and open doors for Pakistani technology companies on the global stage."
            color="green"
          />
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {purposeItems.map((item, i) => (
              <motion.div
                key={i}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white rounded-xl border border-[#D8D5CF]/60 p-4 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                <span className="text-[#1C1F2E] text-base leading-relaxed">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <Section>
        <AnimatedSection>
          <SectionHeader
            label="Certification Benefits"
            title="What Certified Partners Receive"
            subtitle="Certification unlocks recognition, visibility, and real business opportunities across UK and European markets."
            color="blue"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-6 flex flex-col">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${benefit.color}15`, border: `1px solid ${benefit.color}30` }}>
                      <Icon className="w-5 h-5" style={{ color: benefit.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">{benefit.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed flex-1">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Criteria ─────────────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Certification Criteria"
            title="What We Evaluate"
            subtitle="Companies applying for certification are evaluated across five key areas."
            color="red"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteria.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-6 flex flex-col">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                      <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">{item.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed flex-1">{item.description}</p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.map((tag, j) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{ background: `${item.tagColors![j]}15`, color: item.tagColors![j] }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <Section>
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="Certification Process"
            subtitle="A clear, structured four-step process from application to directory listing."
            color="blue"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative h-full bg-white rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold mb-4 border" style={{ background: `${step.color}20`, borderColor: `${step.color}40`, color: step.color }}>
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">{step.title}</h3>
                  <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-[#D8D5CF]">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                    <span className="text-base font-semibold" style={{ color: step.color }}>{step.outcome}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Validity ─────────────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-2xl">
            <SectionHeader
              label="Certification Validity"
              title="How Long Does Certification Last?"
              color="green"
            />
            <div className="flex items-start gap-4 bg-white rounded-2xl border border-[#D8D5CF]/60 p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#04785715", border: "1px solid #04785730" }}>
                <CalendarClock className="w-5 h-5 text-[#047857]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">One-Year Renewable Certification</h3>
                <p className="text-[#5A5F72] text-base leading-relaxed">
                  The certification is typically valid for one year, after which companies may apply for renewal to maintain
                  their certified status and continued listing in the UPTIB Global Technology Directory.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <GlobalCTA
        label="Get Certified"
        title="Apply for UPTIB Trusted Partner Certification"
        subtitle="Join the network of verified Pakistani technology companies and unlock global visibility, credibility, and business opportunities in UK and European markets."
        primaryButtonText="Apply for Certification"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Learn About Membership"
        secondaryButtonLink="/membership"
      />
    </div>
  );
}
