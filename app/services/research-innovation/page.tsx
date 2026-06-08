"use client";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  Search, BarChart3, GraduationCap, Lightbulb, FileSearch,
  CheckCircle2, ChevronDown, Users, Globe2, DollarSign, Languages, Scaling,
  Cpu, Cloud, Shield, Landmark, Smartphone,
  Database, TrendingUp, LineChart, PieChart, Brain,
  BookOpen, FlaskConical, FileText, Ruler, Compass,
  Microscope, Gauge, Boxes, UserCheck, Rocket,
  Scale, ScrollText, Building2, Monitor,
} from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/* ── Stats ── */
const stats = [
  { value: "5", label: "Research Verticals", color: "#047857" },
  { value: "30–50%", label: "Cost Savings vs Europe", color: "#10B981" },
  { value: "70,000+", label: "IT & Engineering Grads/Year", color: "#047857" },
  { value: "15+", label: "Countries Served", color: "#047857" },
];

/* ── 6 Core Research Service Types ── */
const coreServices = [
  {
    icon: Search,
    color: "#047857",
    title: "Market Research & Industry Analysis",
    description: "Comprehensive market studies, competitor analysis, and industry trend reports to inform strategic decision-making across European and global markets.",
  },
  {
    icon: Cpu,
    color: "#10B981",
    title: "Technology & Innovation Research",
    description: "Cutting-edge research into emerging technologies, digital transformation trends, and innovation ecosystems to keep your business ahead of the curve.",
  },
  {
    icon: BarChart3,
    color: "#047857",
    title: "Data Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics, predictive modelling, and AI-driven intelligence solutions.",
  },
  {
    icon: Lightbulb,
    color: "#047857",
    title: "Product Research & Development",
    description: "End-to-end R&D support — from feasibility studies and prototype research to user experience analysis and innovation strategy.",
  },
  {
    icon: GraduationCap,
    color: "#10B981",
    title: "Academic & Scientific Research Support",
    description: "Research assistance for universities and institutions — literature reviews, data collection, statistical analysis, and technical documentation.",
  },
  {
    icon: FileSearch,
    color: "#047857",
    title: "Regulatory & Policy Research",
    description: "Navigate complex regulatory landscapes with research into EU compliance, GDPR, trade policies, and digital economy frameworks.",
  },
];

/* ── 5 Service Verticals (detailed) ── */
const verticals = [
  {
    icon: Cpu,
    color: "#047857",
    title: "Technology & Innovation Research",
    subtitle: "Helping companies stay ahead of technology trends.",
    items: [
      { icon: Brain, text: "Artificial Intelligence and Machine Learning trends" },
      { icon: Cloud, text: "Cloud computing technologies" },
      { icon: Shield, text: "Cybersecurity innovations" },
      { icon: Landmark, text: "FinTech developments" },
      { icon: Smartphone, text: "Emerging digital platforms and software ecosystems" },
    ],
  },
  {
    icon: BarChart3,
    color: "#10B981",
    title: "Data Analytics & Business Intelligence",
    subtitle: "Transforming raw data into actionable insights.",
    items: [
      { icon: Database, text: "Data mining and analysis" },
      { icon: TrendingUp, text: "Predictive analytics" },
      { icon: LineChart, text: "Business performance analysis" },
      { icon: PieChart, text: "Data visualization and reporting" },
      { icon: Brain, text: "AI-driven analytics models" },
    ],
  },
  {
    icon: GraduationCap,
    color: "#047857",
    title: "Academic & Scientific Research Support",
    subtitle: "Providing research assistance for universities and research institutions.",
    items: [
      { icon: BookOpen, text: "Literature reviews" },
      { icon: FlaskConical, text: "Data collection and statistical analysis" },
      { icon: FileText, text: "Research paper preparation support" },
      { icon: Ruler, text: "Technical documentation" },
      { icon: Compass, text: "Research methodology design" },
    ],
  },
  {
    icon: Lightbulb,
    color: "#047857",
    title: "Product Research & Development Support",
    subtitle: "Helping companies develop and refine innovative products.",
    items: [
      { icon: Microscope, text: "Product feasibility studies" },
      { icon: Gauge, text: "Technology evaluation" },
      { icon: Boxes, text: "Prototype development research" },
      { icon: UserCheck, text: "User experience research" },
      { icon: Rocket, text: "Innovation strategy" },
    ],
  },
  {
    icon: FileSearch,
    color: "#10B981",
    title: "Policy & Regulatory Research",
    subtitle: "Supporting companies entering new international markets.",
    items: [
      { icon: Scale, text: "EU regulatory compliance (GDPR, digital regulations)" },
      { icon: ScrollText, text: "Trade policies and technology regulations" },
      { icon: Building2, text: "Legal frameworks for technology companies" },
      { icon: Monitor, text: "Digital economy policies" },
    ],
  },
];

/* ── Advantages ── */
const advantages = [
  {
    icon: DollarSign,
    color: "#047857",
    title: "Cost-Effective Research Capability",
    description: "Research services from Pakistan can be delivered at 30\u201350% lower cost compared with Europe.",
  },
  {
    icon: Users,
    color: "#10B981",
    title: "Skilled Talent Pool",
    description: "Pakistan produces 70,000+ IT and engineering graduates annually, many with strong analytical and research capabilities.",
  },
  {
    icon: Languages,
    color: "#047857",
    title: "English-Speaking Workforce",
    description: "English is widely used in academia and business, ensuring smooth collaboration.",
  },
  {
    icon: Scaling,
    color: "#047857",
    title: "Scalable Research Teams",
    description: "Companies can easily scale research support depending on project requirements.",
  },
  {
    icon: Globe2,
    color: "#10B981",
    title: "Strategic Geographic Location",
    description: "Pakistan serves as a bridge connecting Asia, the Middle East, and Europe, enabling efficient collaboration across multiple global markets.",
  },
];

/* ── FAQ ── */
const faqs = [
  { question: "What types of companies can benefit from these research services?", answer: "Any UK or European company — from startups to enterprises — looking for high-quality, cost-effective research support. This includes technology firms, academic institutions, consultancies, and businesses entering new markets." },
  { question: "How does UPTIB ensure the quality of research delivered?", answer: "UPTIB works with verified research professionals and carefully selected technology partners. We provide project coordination, quality assurance, and structured collaboration frameworks to ensure consistent, high-quality outputs." },
  { question: "What is the typical cost saving compared to European research teams?", answer: "Research services delivered from Pakistan typically cost 30–50% less than equivalent European resources, without compromising on quality. Exact savings depend on the scope and complexity of the project." },
  { question: "Can research teams be scaled up or down based on project needs?", answer: "Yes, one of the key advantages is scalability. Companies can easily adjust the size of their research teams based on project requirements, timelines, and budgets." },
  { question: "How do we get started with UPTIB research services?", answer: "Simply contact us or become a member to discuss your research needs. We will match you with the right research professionals and set up a structured collaboration framework tailored to your requirements." },
];

const faqColors = ["#047857", "#047857", "#10B981", "#047857", "#047857"];

export default function ResearchInnovationPage() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedVertical, setExpandedVertical] = useState<number | null>(0);

  return (
    <div>
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTIB Service"
        title="Research & Innovation Services"
        subtitle="UPTIB builds a strong technology bridge between Pakistan and Europe, enabling companies to collaborate, innovate, and grow in the global digital economy."
        heroVideo="/videos/banner.mp4"
        heroVideoSpeed={2}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Get Started</ShinyButton>
          <Button href="/contact" variant="glass">Get in Touch</Button>
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

      {/* ── Gateway Intro Section ── */}
      <section className="relative bg-white">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div>
              <SectionHeader label="Gateway to UK & European Technology Markets" title="Research & Innovation Services Offered from Pakistan" color="blue" />
              <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed mb-4">
                UPTIB acts as a bridge connecting Pakistani technology companies, research institutions, and professionals with businesses and innovation ecosystems across the UK and Europe. Our services are designed to facilitate technology collaboration, market access, and research partnerships.
              </p>
              <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed mb-6">
                Pakistan has a strong base of skilled researchers, data analysts, engineers, and technology specialists who can provide high-quality research services remotely for businesses, startups, and institutions in the UK and European markets. Through structured collaboration, Pakistani research teams can deliver cost-effective, high-quality research support across multiple sectors.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  "Verified research professionals",
                  "Project coordination",
                  "Quality assurance",
                  "Technology collaboration partnerships",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-1" />
                    <span className="text-[#3D4152] text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6 Core Research Services Grid ── */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Research Services" title="What We Offer" subtitle="UPTIB facilitates research collaboration between Pakistani researchers and international companies, universities, and innovation centres." color="green" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
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
                          <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                            <Icon className="w-5 h-5" style={{ color: service.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                        <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">{service.title}</h3>
                        <div className="h-px bg-[#D8D5CF] mb-3" />
                        <p className="text-base text-[#5A5F72] leading-relaxed flex-1">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-center text-[#5A5F72] text-lg mt-8 italic">
              This allows companies to accelerate innovation while reducing research costs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5 Detailed Verticals (Accordion) ── */}
      <section className="relative bg-white">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="In Detail" title="Research Verticals" subtitle="Explore each research vertical in detail to understand the full scope of services available." color="blue" />
            <div className="space-y-4">
              {verticals.map((vertical, index) => {
                const Icon = vertical.icon;
                const isOpen = expandedVertical === index;
                return (
                  <motion.div
                    key={vertical.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden shadow-sm"
                  >
                    <div
                      className="absolute top-0 bottom-0 left-0 w-1 transition-opacity duration-300"
                      style={{ background: `linear-gradient(to bottom, ${vertical.color}, ${vertical.color}60)`, opacity: isOpen ? 1 : 0 }}
                    />
                    <button
                      onClick={() => setExpandedVertical(isOpen ? null : index)}
                      className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                        style={isOpen ? { background: vertical.color, border: `1px solid ${vertical.color}` } : { background: `${vertical.color}15`, border: `1px solid ${vertical.color}30` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: isOpen ? "#fff" : vertical.color }} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <span className="block font-heading font-semibold text-[#1C1F2E] text-lg">{vertical.title}</span>
                        <span className="block text-[#5A5F72] text-base mt-0.5">{vertical.subtitle}</span>
                      </div>
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                        style={isOpen ? { background: `${vertical.color}15` } : { background: "transparent" }}
                      >
                        <ChevronDown
                          className="w-4.5 h-4.5 transition-transform duration-300"
                          style={{ color: isOpen ? vertical.color : "#7A7E8F", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
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
                          <div className="px-5 lg:px-6 pb-5 lg:pb-6 pl-[4.75rem] lg:pl-[5.25rem]">
                            <div className="h-px bg-[#D8D5CF] mb-4" />
                            <ul className="space-y-3">
                              {vertical.items.map((item) => {
                                const ItemIcon = item.icon;
                                return (
                                  <li key={item.text} className="flex items-start gap-3">
                                    <div
                                      className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5"
                                      style={{ background: `${vertical.color}10`, border: `1px solid ${vertical.color}20` }}
                                    >
                                      <ItemIcon className="w-3.5 h-3.5" style={{ color: vertical.color }} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[#3D4152] text-base leading-relaxed">{item.text}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Advantages Section ── */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Advantages" title="Why Partner with Pakistani Research Teams?" subtitle="Key advantages for UK and European companies choosing UPTIB research services." color="red" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                      <div className="p-6">
                        <div className="relative mb-4">
                          <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                            <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                        <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">{item.title}</h3>
                        <div className="h-px bg-[#D8D5CF] mb-3" />
                        <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
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
            <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="Common questions about our research and innovation services." color="red" />
            <FAQSection faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <GlobalCTA
        label="Get Started"
        title="Ready to Accelerate Your Research?"
        subtitle="Partner with UPTIB to access high-quality, cost-effective research services from Pakistan. Join our network and unlock innovation at scale."
        primaryButtonText="Become a Member"
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
