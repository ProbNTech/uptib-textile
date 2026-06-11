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
  Scale,
  Shield,
  Handshake,
  Clock,
  FileText,
  Users,
  CheckCircle2,
  Globe2,
  Gavel,
  Eye,
  Lock,
  Zap,
  Code2,
  Megaphone,
  Briefcase,
  Lightbulb,
  ClipboardList,
  MessageCircle,
  UserCheck,
  FileCheck,
  ArrowRight,
  BookOpen,
  Monitor,
  PoundSterling,
  Timer,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";

/* ââ Purpose / Objectives ââââââââââââââââââââââââââââââââââââââââââ */
const objectives = [
  "Promote ethical business practices",
  "Promote fair and transparent dispute resolution",
  "Provide a neutral dispute resolution mechanism",
  "Encourage amicable settlement between parties",
  "Avoid legal costs and lengthy court proceedings",
  "Maintain long-term professional relationships",
  "Provide confidence to international companies working with Pakistani partners",
];

/* ââ Types of Disputes âââââââââââââââââââââââââââââââââââââââââââââ */
const disputeTypes = [
  {
    title: "Technology & Service Agreements",
    icon: Code2,
    color: "#2F7549",
    items: [
      "Software development contracts",
      "IT outsourcing agreements",
      "Product development collaborations",
      "Digital service delivery contracts",
      "Digital product development projects",
      "Cloud and technology services contracts",
    ],
  },
  {
    title: "Marketing & Partnership Agreements",
    icon: Megaphone,
    color: "#3E8F5E",
    items: [
      "Product promotion agreements",
      "Strategic business partnerships arrangements",
      "Joint ventures and collaboration arrangements",
    ],
  },
  {
    title: "Employment & Recruitment Agreements",
    icon: Briefcase,
    color: "#2F7549",
    items: [
      "International employment placements",
      "Recruitment and talent sourcing agreements",
      "Contractual employment disputes",
    ],
  },
  {
    title: "Research & Innovation Projects",
    icon: Lightbulb,
    color: "#2F7549",
    items: [
      "Research collaboration terms & agreements",
      "Technology development partnerships",
      "Intellectual property discussions",
      "Innovation project partnerships",
    ],
  },
];

/* ââ Arbitration Process Steps âââââââââââââââââââââââââââââââââââââ */
const processSteps = [
  {
    number: "01",
    title: "Filing a Dispute",
    icon: ClipboardList,
    description: "A party may submit a formal dispute request to Pakistan Textile Partners including a description of the dispute, relevant agreements or documentation, and desired outcome or resolution.",
    outcome: "Dispute registered",
    color: "#2F7549",
  },
  {
    number: "02",
    title: "Initial Mediation",
    icon: MessageCircle,
    description: "Pakistan Textile Partners will attempt to resolve the dispute through amicable mediation between the parties. The mediation process aims to encourage dialogue and reach a mutually acceptable settlement.",
    outcome: "Dialogue initiated",
    color: "#3E8F5E",
  },
  {
    number: "03",
    title: "Arbitration Panel",
    icon: UserCheck,
    description: "If mediation fails, Pakistan Textile Partners may appoint an independent arbitration panel consisting of professionals with expertise in technology law, business contracts, international trade, and digital services.",
    outcome: "Panel appointed",
    color: "#2F7549",
  },
  {
    number: "04",
    title: "Review & Decision",
    icon: FileCheck,
    description: "The arbitration panel will review the evidence presented by both parties and provide a recommended settlement or a formal arbitration decision depending on the agreed arbitration terms.",
    outcome: "Resolution delivered",
    color: "#2F7549",
  },
];

/* ââ Arbitration Principles ââââââââââââââââââââââââââââââââââââââââ */
const principles = [
  {
    title: "Neutrality",
    description: "Arbitrators will remain independent and impartial throughout the entire process.",
    icon: Scale,
  },
  {
    title: "Confidentiality",
    description: "All dispute proceedings and related documents will remain strictly confidential.",
    icon: Lock,
  },
  {
    title: "Fairness",
    description: "Both parties will be given equal opportunity to present their case fully.",
    icon: Shield,
  },
  {
    title: "Efficiency",
    description: "The arbitration process aims to resolve disputes in a timely and cost-effective manner.",
    icon: Zap,
  },
];

/* ââ Benefits ââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
const benefits = [
  {
    title: "Neutral Platform",
    description: "Pakistan Textile Partners provides a neutral and professional environment for resolving disputes without bias.",
    icon: Globe2,
    color: "#2F7549",
  },
  {
    title: "Faster Resolution",
    description: "Arbitration can resolve disputes more quickly than formal litigation, saving time and resources.",
    icon: Clock,
    color: "#3E8F5E",
  },
  {
    title: "Business Relationship Protection",
    description: "The process encourages mutual understanding and continued cooperation between parties.",
    icon: Handshake,
    color: "#2F7549",
  },
  {
    title: "Cross-Border Confidence",
    description: "European companies working with Pakistani partners gain additional assurance through a structured dispute resolution mechanism.",
    icon: Shield,
    color: "#2F7549",
  },
];

/* ââ Panel Expertise Areas âââââââââââââââââââââââââââââââââââââââââ */
const panelExpertise = [
  { area: "Technology Law", desc: "Legal expertise in software, IP, and digital services" },
  { area: "Business Contracts", desc: "Commercial agreements and contractual obligations" },
  { area: "International Trade", desc: "Cross-border trade regulations and compliance" },
  { area: "Digital Services & IT", desc: "Technical assessment of IT project disputes" },
];

export default function ArbitrationClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ââ HERO âââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <PageHero
        label="Dispute Resolution"
        title={
          <>
            Arbitration & Dispute
            <br />
            Resolution Services
          </>
        }
        subtitle="Ensuring trust in cross-border technology collaboration. Pakistan Textile Partners provides an independent dispute resolution framework to facilitate the fair, efficient, and amicable settlement of disputes."
        heroVideo="/videos/banner.mp4"
        heroVideoSpeed={2}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/contact">File a Dispute</ShinyButton>
          <Button href="/membership" variant="glass" size="lg">
            Become a Member
          </Button>
        </div>
      </PageHero>

      {/* ââ Stats / Trust Bar ââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "Independent", label: "Neutral Framework", color: "#2F7549" },
            { value: "4-Step", label: "Structured Process", color: "#3E8F5E" },
            { value: "Expert", label: "Arbitration Panel", color: "#2F7549" },
            { value: "Cross-Border", label: "UK & Pakistan", color: "#2F7549" },
          ].map((stat, i) => (
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
                  className="font-heading font-extrabold text-2xl sm:text-3xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-[#5A5F72] text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ââ Introduction + Objectives ââââââââââââââââââââââââââââââ */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader
                label="Overview"
                title="Purpose of Arbitration Services"
                color="blue"
                dark
              />
              <p className="text-white/80 text-lg leading-relaxed mb-5">
                Cross-border business relationships sometimes lead to misunderstandings or contractual disputes. Pakistan Textile Partners offers a structured framework to help parties resolve issues efficiently, professionally, and without unnecessary litigation.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-5">
                The UK–Pakistan Trades & Investment Board (UPTIB) provides an independent dispute resolution framework to facilitate the fair, efficient, and amicable settlement of disputes arising from business collaborations, service agreements, employment arrangements, research partnerships, and technology transactions involving Pakistan Textile Partners members or affiliated parties.
              </p>

              {/* Filing info card inline */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-6 rounded-xl bg-gradient-to-r from-[#2F7549]/15 to-[#3E8F5E]/15 border border-white/10 p-6"
              >
                <h4 className="font-heading font-bold text-white text-base mb-3">
                  To file a dispute, submit:
                </h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    "Description of the dispute",
                    "Relevant agreements or documentation",
                    "Desired outcome or resolution",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sticky top-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#2F754910", border: "1px solid #2F754920" }}
                  >
                    <Scale className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg">Our Objectives</h3>
                </div>
                <div className="h-px bg-white/10 mb-5" />
                <ul className="space-y-3">
                  {objectives.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#3E8F5E] mt-0.5 flex-shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Types of Disputes Covered ââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Scope"
            title="Types of Disputes Covered"
            subtitle="Pakistan Textile Partners arbitration services may assist in resolving disputes related to the following areas."
            color="red"
          />

          <div className="grid md:grid-cols-2 gap-7">
            {disputeTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden">
                    {/* Colored top accent bar */}
                    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${type.color}, ${type.color}80)` }} />
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ background: `${type.color}12`, border: `1px solid ${type.color}25` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: type.color }} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-[#16291E]">
                          {type.title}
                        </h3>
                      </div>

                      <div className="h-px bg-[#D8D5CF] mb-5" />
                      <ul className="space-y-2.5">
                        {type.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: type.color }} strokeWidth={2} />
                            <span className="text-[#5A5F72] text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Arbitration Process âââââââââââââââââââââââââââââââââââââ */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="Arbitration Process"
            subtitle="A structured four-step process designed to resolve disputes fairly and efficiently."
            color="green"
            dark
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="group relative h-full rounded-2xl border border-white/10 p-px hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col">
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
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: `${step.color}08` }}
                      >
                        <Icon className="w-4.5 h-4.5" style={{ color: step.color }} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-white text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">{step.description}</p>

                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full self-start"
                      style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                      <span className="text-sm font-semibold" style={{ color: step.color }}>
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Connecting arrow line (desktop) */}
          <div className="hidden lg:flex items-center justify-center mt-6 gap-2">
            {["Filing", "", "Mediation", "", "Panel", "", "Decision"].map((label, i) =>
              label ? (
                <span key={i} className="text-xs font-semibold text-white/60 uppercase tracking-wider">{label}</span>
              ) : (
                <ArrowRight key={i} className="w-4 h-4 text-white/10" />
              )
            )}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Arbitration Panel Expertise âââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader
                label="Expert Panel"
                title="Independent Arbitration Panel"
                color="blue"
              />
              <p className="text-[#3D4152] text-lg leading-relaxed mb-5">
                If mediation fails, Pakistan Textile Partners may appoint an independent arbitration panel consisting of professionals with deep expertise across critical areas relevant to cross-border technology disputes.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                The panel reviews the evidence presented by both parties and provides either a recommended settlement or a formal arbitration decision depending on the agreed arbitration terms.
              </p>
            </div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#2F754910", border: "1px solid #2F754920" }}
                  >
                    <Gavel className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#16291E] text-lg">Areas of Expertise</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-4">
                  {panelExpertise.map((item, i) => (
                    <motion.li
                      key={item.area}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0"
                        strokeWidth={2}
                      />
                      <div>
                        <span className="font-semibold text-[#16291E] text-sm block">{item.area}</span>
                        <span className="text-[#5A5F72] text-xs leading-relaxed">{item.desc}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Principles â DARK SECTION ââââââââââââââââââââââââââââââ */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader
            label="Our Commitment"
            title="Arbitration Principles & Commitment to Fair Practice"
            subtitle="The UK–Pakistan Trades & Investment Board (UPTIB) is committed to promoting ethical business practices, transparency, and trust within the global technology ecosystem. Our arbitration services help create a secure environment for international technology collaboration and investment."
            color="red"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, i) => {
              const Icon = principle.icon;
              const colors = ["#8FD3AE", "#86efac", "#F9A8B4", "#8FD3AE"];
              const color = colors[i];
              return (
                <motion.div
                  key={principle.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative h-full rounded-2xl border border-white/10 p-px hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
                >
                  <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                    {/* Top accent */}
                    <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                    <div className="p-7 text-center">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                      >
                        <Icon className="w-7 h-7" style={{ color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg mb-2">
                        {principle.title}
                      </h3>
                      <div className="h-px bg-white/10 mb-3 mx-auto w-12" />
                      <p className="text-white/60 text-sm leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Benefits âââââââââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Why Choose Pakistan Textile Partners"
            title="Benefits for Members and Partners"
            color="green"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden">
                    {/* Top accent */}
                    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${benefit.color}, ${benefit.color}60)` }} />
                    <div className="p-7">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: `${benefit.color}12`, border: `1px solid ${benefit.color}25` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: benefit.color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-[#16291E] text-base mb-2">
                        {benefit.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#5A5F72] text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Legal Basis & Framework Highlights ââââââââââââââââââââââ */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader
            label="Legal Basis"
            title="Governed by UK Law & International Standards"
            subtitle="The Pakistan Textile Partners Arbitration Framework is built on established legal foundations ensuring enforceability and credibility."
            color="blue"
            dark
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Arbitration Act 1996",
                subtitle: "United Kingdom",
                description: "The primary governing legislation providing the legal framework for all arbitration proceedings under Pakistan Textile Partners.",
                color: "#2F7549",
                icon: Gavel,
              },
              {
                title: "LCIA Rules",
                subtitle: "London Court of International Arbitration",
                description: "Internationally recognised procedural rules that may be applied for structured and professional conduct of arbitration.",
                color: "#3E8F5E",
                icon: BookOpen,
              },
              {
                title: "New York Convention",
                subtitle: "1958 â International Enforceability",
                description: "Ensures that arbitration awards are binding, final, and enforceable in the UK and internationally across 170+ countries.",
                color: "#2F7549",
                icon: Globe2,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative h-full rounded-2xl border border-white/10 p-px hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}60)` }} />
                    <div className="p-7">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg mb-1">{item.title}</h3>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: item.color }}>{item.subtitle}</p>
                      <div className="h-px bg-white/10 mb-3" />
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Key Framework Principles */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-xl bg-gradient-to-r from-[#2F7549]/15 to-[#3E8F5E]/15 border border-white/10 p-6 lg:p-8">
              <h4 className="font-heading font-bold text-white text-base mb-4">Framework Key Principles</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { label: "Party Autonomy", desc: "Parties select arbitrators, agree on rules, and decide procedures" },
                  { label: "Expert Arbitrators", desc: "Technical and industry expertise for informed decisions" },
                  { label: "Speed & Efficiency", desc: "Digital processes resolve disputes within 30\u201390 days" },
                  { label: "Confidentiality", desc: "All proceedings, submissions, and awards are confidential" },
                  { label: "Global Enforceability", desc: "Awards enforceable internationally under recognised conventions" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <div>
                      <span className="font-semibold text-white text-sm block">{item.label}</span>
                      <span className="text-white/60 text-xs leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </Section>

      {/* ââ Timeline, Costs & Digital Platform âââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="At a Glance"
            title="Timeline, Costs & Digital Platform"
            color="green"
          />

          <div className="grid lg:grid-cols-3 gap-7">
            {/* Timeline */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#2F7549] to-[#2F7549]/40" />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#2F754910", border: "1px solid #2F754920" }}>
                    <Timer className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#16291E] text-lg">Typical Timeline</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-3">
                  {[
                    { step: "Notice of Dispute", time: "Day 1" },
                    { step: "Arbitrator Appointment", time: "7\u201314 days" },
                    { step: "Written Submissions", time: "2\u20134 weeks" },
                    { step: "Hearing", time: "1\u20133 days" },
                    { step: "Final Award", time: "30\u201360 days post-hearing" },
                  ].map((item, i) => (
                    <li key={item.step} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#2F7549]/10 flex items-center justify-center text-[10px] font-bold text-[#2F7549]">{i + 1}</span>
                        <span className="text-[#3D4152] text-sm">{item.step}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#2F7549] bg-[#2F7549]/8 px-2 py-0.5 rounded-full whitespace-nowrap">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Costs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#3E8F5E] to-[#3E8F5E]/40" />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#3E8F5E10", border: "1px solid #3E8F5E20" }}>
                    <PoundSterling className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#16291E] text-lg">Cost Schedule</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-4">
                  {[
                    { label: "Single Arbitrator", range: "\u00a33,000 \u2013 \u00a310,000", note: "Simple disputes" },
                    { label: "Three-Member Tribunal", range: "\u00a310,000 \u2013 \u00a330,000", note: "Complex / high-value" },
                    { label: "Platform Fee", range: "\u00a3500 flat", note: "Per arbitration case" },
                    { label: "Admin Fee", range: "\u00a3250 \u2013 \u00a31,000", note: "Case management" },
                  ].map((item) => (
                    <li key={item.label}>
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-semibold text-[#16291E] text-sm">{item.label}</span>
                        <span className="text-xs font-bold text-[#3E8F5E]">{item.range}</span>
                      </div>
                      <span className="text-[#5A5F72] text-xs">{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Digital Platform */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#2F7549] to-[#2F7549]/40" />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#2F754910", border: "1px solid #2F754920" }}>
                    <Monitor className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#16291E] text-lg">Digital Platform</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-2.5">
                  {[
                    "Secure login with two-factor authentication",
                    "Encrypted document repository & messaging",
                    "Virtual, hybrid, or in-person hearings",
                    "Automated deadline reminders & notifications",
                    "Digital signature on awards",
                    "GDPR & UK data protection compliant",
                    "Smart contract dispute resolution support",
                    "24/7 technical support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#5A5F72] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Framework policy link */}
          <AnimatedSection delay={0.3}>
            <Link
              href="/arbitration/framework"
              className="group mt-8 block bg-gradient-to-r from-[#2F7549]/10 to-[#3E8F5E]/10 rounded-2xl border border-[#2F7549]/20 p-8 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#2F7549] uppercase tracking-wider mb-1">
                    Full Policy Document
                  </p>
                  <h3 className="font-heading font-bold text-xl text-[#16291E] mb-2">
                    Pakistan Textile Partners Arbitration Framework Policy
                  </h3>
                  <p className="text-[#3D4152]">
                    View the complete framework including legal basis, detailed procedures, cost schedules, appointment guidelines, digital platform guide, and FAQs.
                  </p>
                </div>
                <ArrowRight className="w-8 h-8 text-[#2F7549] flex-shrink-0 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </AnimatedSection>
        </AnimatedSection>
      </Section>

      {/* ââ Arbitration Clause + Voluntary + Limitations ââââââââââââ */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader
            label="Legal Framework"
            title="Arbitration Clause & Participation"
            color="blue"
            dark
          />

          {/* Main clause blockquote */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden mb-8"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#2F7549] via-[#3E8F5E] to-[#2F7549]" />
            <div className="p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#2F754910", border: "1px solid #2F754920" }}
                >
                  <FileText className="w-6 h-6 text-[#2F7549]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-xl mb-1">
                    Recommended Arbitration Clause
                  </h3>
                  <p className="text-white/60 text-sm">
                    Pakistan Textile Partners recommends that agreements facilitated through its platform include the following clause:
                  </p>
                </div>
              </div>

              <blockquote className="relative border-l-4 border-[#2F7549] pl-6 py-5 bg-gradient-to-r from-[#2F7549]/15 to-transparent rounded-r-xl">
                <div className="absolute -left-1 -top-2 text-[#2F7549]/20 text-6xl font-serif leading-none">&ldquo;</div>
                <p className="text-white text-base leading-relaxed font-medium relative z-10">
                  Any dispute arising from this agreement shall first be resolved through mediation facilitated by the UK–Pakistan Trades & Investment Board (UPTIB). If mediation fails, the dispute may be referred to arbitration under the standard Arbitration & Legal Framework.
                </p>
              </blockquote>
            </div>
          </motion.div>

          {/* Voluntary + Limitations */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#3E8F5E] to-[#3E8F5E]/40" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#3E8F5E10", border: "1px solid #3E8F5E20" }}
                  >
                    <Users className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg">Voluntary Participation</h3>
                </div>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-white/60 text-base leading-relaxed">
                  Participation in Pakistan Textile Partners arbitration services is voluntary and typically requires agreement from both parties through contractual clauses referencing the Pakistan Textile Partners arbitration framework.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#2F7549] to-[#2F7549]/40" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#2F754910", border: "1px solid #2F754920" }}
                  >
                    <Eye className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg">Limitations</h3>
                </div>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-white/60 text-base leading-relaxed">
                  Pakistan Textile Partners arbitration services are intended to support amicable dispute resolution and do not replace the jurisdiction of national courts in the United Kingdom or other relevant jurisdictions.
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ CTA ââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <GlobalCTA
        label="Get Started"
        title="Need Dispute Resolution?"
        subtitle="Contact Pakistan Textile Partners to learn more about our arbitration services or to submit a formal dispute request."
        primaryButtonText="File a Dispute"
        primaryButtonLink="/contact"
        secondaryButtonText="Become a Member"
        secondaryButtonLink="/membership"
        image="/image/manufacturing-mils.jpg"
      />
    </div>
  );
}
