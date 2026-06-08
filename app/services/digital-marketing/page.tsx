"use client";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { CheckCircle2, ChevronDown, Megaphone, Globe, PenTool, Calendar, Mail, Target, Handshake, TrendingUp } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const stats = [
  { value: "150+", label: "Products Promoted", color: "#047857" },
  { value: "12M+", label: "Audience Reach", color: "#10B981" },
  { value: "40+", label: "Campaign Launches", color: "#047857" },
  { value: "8x", label: "Avg. ROI", color: "#047857" },
];

const offerings = [
  { icon: Megaphone, color: "#047857", title: "Product & Solutions Showcase", description: "Feature your software products, digital platforms, and services through Forum channels, events, and curated industry spotlights." },
  { icon: Globe, color: "#10B981", title: "Market Visibility & Promotion", description: "Gain exposure through newsletters, digital campaigns, industry roundtables, trade missions, and strategic introductions to potential partners and customers." },
  { icon: PenTool, color: "#047857", title: "Go-to-Market Support", description: "Receive guidance on positioning, messaging, and market entry strategies tailored to the UK and Europe technology ecosystems." },
  { icon: Calendar, color: "#10B981", title: "Thought Leadership Opportunities", description: "Position your organisation as an industry leader through speaking opportunities, panel discussions, policy forums, and published insights." },
  { icon: Mail, color: "#047857", title: "Cross-Border Business Development", description: "Access networks of policymakers, regulators, investors, and corporate buyers to support partnership building and commercial growth." },
];

const steps = [
  { number: "01", title: "Onboard", description: "Join the hub and share your product portfolio, target markets, and growth objectives.", outcome: "Strategy brief prepared", color: "#047857" },
  { number: "02", title: "Strategy", description: "We develop a tailored cross-border marketing strategy aligned with your business goals.", outcome: "Campaign plan approved", color: "#10B981" },
  { number: "03", title: "Execute", description: "Launch campaigns across Forum channels, events, and partner networks.", outcome: "Campaigns live", color: "#047857" },
  { number: "04", title: "Grow", description: "Track results, optimise performance, and scale your international presence.", outcome: "ROI measured & scaled", color: "#047857" },
];

const whyItMatters = [
  "Increase brand credibility",
  "Enter new markets with confidence",
  "Build strategic partnerships",
  "Generate commercial opportunities",
  "Strengthen their international presence",
];

const faqs = [
  { question: "What types of products can be promoted?", answer: "We promote software products, digital platforms, SaaS solutions, technology services, and hardware products from our member companies. The product must be from a Forum member or partner organisation." },
  { question: "How much does it cost?", answer: "Core marketing services are included in UPTIB membership. Premium packages \u2014 including dedicated campaigns, event sponsorship, and bespoke content creation \u2014 are available as add-ons with transparent pricing." },
  { question: "What channels do you use for promotion?", answer: "We use Forum email newsletters (10,000+ subscribers), social media channels, the UPTIB website, partner networks, and our events program including summits, exhibitions, and trade delegations." },
  { question: "How do you measure campaign success?", answer: "We provide detailed analytics including impressions, click-through rates, lead generation, and ROI metrics. Monthly reports track campaign performance against agreed KPIs." },
];

const faqColors = ["#047857", "#10B981", "#047857", "#047857"];

export default function DigitalMarketingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTIB Service"
        title="Digital Product Marketing Hub"
        subtitle="The Digital Product Marketing Hub supports members in promoting their software solutions, platforms, and technology services across the UK, Europe, Middle East & African continents. We help technology companies strengthen their market presence, reach new audiences, and accelerate cross-border growth."
        image="/image/banners/services02.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Get Started</ShinyButton>
          <Button href="/contact" variant="glass" size="lg">Learn More</Button>
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
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div>
              <SectionHeader label="Capabilities" title="Practical, Results-Driven Marketing for Technology Companies" color="blue" />
              <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed mb-4">
                The Digital Product Marketing Hub supports members in promoting their software solutions, platforms, and technology services across the UK, Europe, Middle East &amp; African continents. We help technology companies strengthen their market presence, reach new audiences, and accelerate cross-border growth.
              </p>
              <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed">
                Our Hub is designed to provide practical, results-driven marketing support tailored to the needs of tech SMEs, scale-ups, and established firms looking to expand into new markets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Services" title="What We Offer" subtitle="Five core marketing services tailored for tech SMEs, scale-ups, and established firms." color="green" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map((item, i) => {
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
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm flex flex-col flex-1">
                    <div className="p-6 flex flex-col flex-1">
                      <div className="relative mb-5">
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">{item.title}</h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-base text-[#5A5F72] leading-relaxed flex-1">{item.description}</p>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative bg-white">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Process" title="How It Works" subtitle="From onboarding to measurable growth — a clear four-step process." color="blue" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
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
                  <div className="p-6">
                    <div className="relative mb-5">
                      <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold border" style={{ background: `${step.color}25`, borderColor: `${step.color}50` }}>
                        {step.number}
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">{step.title}</h3>
                    <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 pt-3 border-t border-[#D8D5CF]">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                      <span className="text-base font-semibold" style={{ color: step.color }}>{step.outcome}</span>
                    </div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Impact" title="Why It Matters" subtitle="The UK and Pakistan technology sectors present significant opportunities for collaboration, outsourcing, innovation partnerships, and product expansion. The Digital Product Marketing Hub helps members:" color="red" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyItMatters.map((item, i) => {
                const colors = ["#047857", "#047857", "#10B981", "#047857", "#047857"];
                const icons = [Target, Globe, Handshake, TrendingUp, Globe];
                const Icon = icons[i];
                return (
                  <motion.div
                    key={item}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                      <div className="h-1 rounded-t-2xl" style={{ background: `linear-gradient(to right, ${colors[i]}, ${colors[i]}80)` }} />
                      <div className="p-6">
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${colors[i]}15`, border: `1px solid ${colors[i]}30` }}>
                          <Icon className="w-5 h-5" style={{ color: colors[i] }} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-heading font-bold text-[#1C1F2E] text-lg group-hover:text-[#047857] transition-colors duration-200">{item}</h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="Common questions about the Digital Product Marketing Hub." color="red" />
            <FAQSection faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <GlobalCTA
        label="Get Started"
        title="Ready to Grow Your Market Presence Globally?"
        subtitle="Whether you are launching a new software solution, scaling into new territories, or seeking strategic partnerships, the Digital Product Marketing Hub provides the platform and support to help you grow."
        primaryButtonText="Join the Hub"
        primaryButtonLink="/membership"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const color = faqColors[index % faqColors.length];
        return (
          <motion.div
            key={faq.question}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:border-[#D8D5CF] transition-all duration-300 shadow-sm"
          >
            <div
              className="absolute top-0 bottom-0 left-0 w-1 transition-opacity duration-300"
              style={{ background: `linear-gradient(to bottom, ${color}, ${color}60)`, opacity: isOpen ? 1 : 0 }}
            />
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-base font-bold transition-colors duration-300"
                style={isOpen ? { background: color, color: "#fff" } : { background: `${color}15`, color }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-heading font-semibold text-[#1C1F2E] text-base flex-1">{faq.question}</span>
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={isOpen ? { background: `${color}15` } : { background: "transparent" }}
              >
                <ChevronDown
                  className="w-4.5 h-4.5 transition-transform duration-300"
                  style={{ color: isOpen ? color : "#7A7E8F", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
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
