"use client";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { CheckCircle2, Building2, User, ChevronDown, Globe, Briefcase, Shield, TrendingUp, Clock, Award } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const stats = [
  { value: "500+", label: "Placements Made", color: "#047857" },
  { value: "120+", label: "Partner Companies", color: "#10B981" },
  { value: "15+", label: "Countries Covered", color: "#047857" },
  { value: "95%", label: "Satisfaction Rate", color: "#047857" },
];

const employerBenefits = [
  { title: "Skilled Professionals", description: "Access skilled technology professionals for contract-based roles" },
  { title: "Flexible Teams", description: "Build flexible, high-performing teams without long-term commitments" },
  { title: "Fast Matching", description: "Save time and connect with pre-qualified talent networks" },
  { title: "Outsourcing Options", description: "Explore outsourcing and managed service partnerships" },
  { title: "International Expertise", description: "Expand your business with international expertise and collaboration" },
];

const professionalBenefits = [
  { title: "Global Opportunities", description: "Discover exciting international contract opportunities" },
  { title: "Cutting-Edge Projects", description: "Gain exposure to international and cutting-edge global technology projects" },
  { title: "Network Building", description: "Build your network and experience Cross-border industry networks" },
  { title: "Skill Development", description: "Develop skills while working with top-tier companies" },
  { title: "Career Pathways", description: "Professional development pathways" },
];

const processSteps = [
  { number: "01", title: "Register", description: "Create your profile as an employer or professional. Share your requirements, skills, and preferences.", outcome: "Profile activated", color: "#047857" },
  { number: "02", title: "Match", description: "Our team uses AI-assisted matching and manual curation to find the best fit for both parties.", outcome: "Shortlist prepared", color: "#10B981" },
  { number: "03", title: "Interview", description: "Facilitated introductions and interviews between matched employers and professionals.", outcome: "Candidates selected", color: "#047857" },
  { number: "04", title: "Onboard", description: "We handle contracts, compliance, and onboarding to ensure a smooth start for all parties.", outcome: "Placement confirmed", color: "#047857" },
];

const sectors = [
  { icon: Globe, color: "#047857", title: "Software Development", description: "Full-stack, frontend, backend, mobile, and cloud engineering professionals." },
  { icon: Shield, color: "#047857", title: "Cybersecurity", description: "Security analysts, penetration testers, and compliance specialists." },
  { icon: TrendingUp, color: "#10B981", title: "Data & AI", description: "Data scientists, ML engineers, and AI specialists for advanced analytics projects." },
  { icon: Briefcase, color: "#047857", title: "Product & Design", description: "Product managers, UX designers, and UI engineers for digital products." },
  { icon: Clock, color: "#10B981", title: "DevOps & Cloud", description: "DevOps engineers, cloud architects, and infrastructure specialists." },
  { icon: Award, color: "#ef4444", title: "FinTech & HealthTech", description: "Domain specialists for regulated industries including finance and healthcare." },
];

const faqs = [
  { question: "What types of contracts are available?", answer: "We facilitate fixed-term contracts (3\u201312 months), project-based engagements, and contract-to-hire arrangements. Contract terms are flexible and can be tailored to the needs of both employers and professionals." },
  { question: "How is compliance handled?", answer: "We manage all compliance aspects including work permits, tax obligations, employment law, and contractual agreements. Our legal team ensures all placements comply with UK and Pakistan employment regulations." },
  { question: "What skill levels are available?", answer: "Our talent pool ranges from mid-level professionals with 3+ years of experience to senior specialists and technical leads with 10+ years. We also support graduate placements through our partnership programs." },
  { question: "How long does the matching process take?", answer: "Typical matching takes 2\u20134 weeks from requirement submission to candidate shortlist. For urgent requirements, we offer an expedited process that can deliver candidates within 5\u20137 business days." },
  { question: "What are the costs for employers?", answer: "Employer fees are based on the contract value and duration. UPTIB members receive preferential rates. Contact us for a detailed pricing structure tailored to your requirements." },
];

const faqColors = ["#047857", "#047857", "#10B981", "#047857", "#047857"];

export default function OverseasEmploymentPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ââ Hero Section ââ */}
      <PageHero
        label="UPTIB Service"
        title="Overseas Contract Employment Opportunities"
        subtitle="The UK–Pakistan Trades & Investment Board facilitates skilled technology professionals with high-value overseas contract opportunities, helping both employers and talent thrive in global markets."
        image="/image/banners/services04.jpg"
        video="/videos/banner.mp4"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Get Connected</ShinyButton>
          <Button href="/contact" variant="glass">Learn More</Button>
        </div>
      </PageHero>

      {/* ââ Stats Bar ââ */}
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

      {/* ââ Intro Section ââ */}
      <section className="relative bg-white">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div>
              <SectionHeader label="Overview" title="Our Focus" color="blue" />
              <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed mb-4">
                We support ethical, compliant, and commercially viable pathways that connect skilled professionals with long-term, short-term and project-based opportunities across UK, Europe, Middle East and Pakistan.
              </p>
              <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed">
                We prioritise transparency, compliance, and long-term relationship building. Our goal is to create structured, sustainable talent mobility between the UK, Europe, Middle East and Pakistan&apos;s technology sectors. By enabling overseas contract employment, we strengthen collaboration, accelerate knowledge exchange, and support innovation across both ecosystems.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ For Employers & For Professionals ââ */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#10B981]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Employers */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#04785715", border: "1px solid #04785730" }}>
                        <Building2 className="w-5 h-5 text-[#047857]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">For Employers</h3>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <p className="text-base text-[#5A5F72] leading-relaxed mb-5">
                    Find the Right Talent, Fast &mdash; We help organisations:
                  </p>
                  <div className="space-y-3">
                    {employerBenefits.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-[#1C1F2E] text-base">{item.title}</h4>
                          <p className="text-base text-[#7A7E8F] leading-relaxed mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </motion.div>

              {/* Professionals */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#10B98115", border: "1px solid #10B98130" }}>
                        <User className="w-5 h-5 text-[#10B981]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">For Professionals</h3>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <p className="text-base text-[#5A5F72] leading-relaxed mb-5">
                    Grow Your Career Globally &mdash; We provide access to:
                  </p>
                  <div className="space-y-3">
                    {professionalBenefits.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#047857] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-[#1C1F2E] text-base">{item.title}</h4>
                          <p className="text-base text-[#7A7E8F] leading-relaxed mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ How It Works ââ */}
      <section className="relative bg-white">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Process" title="How It Works" subtitle="A structured, compliant process from registration to placement." color="blue" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ââ Technology Sectors ââ */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Sectors" title="Technology Sectors We Cover" subtitle="Our talent pool spans the full spectrum of modern technology disciplines." color="green" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <motion.div
                    key={sector.title}
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
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${sector.color}15`, border: `1px solid ${sector.color}30` }}>
                          <Icon className="w-5 h-5" style={{ color: sector.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">{sector.title}</h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-base text-[#5A5F72] leading-relaxed">{sector.description}</p>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ FAQ ââ */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="Common questions about overseas contract employment." color="red" />
            <FAQSection faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ââ CTA ââ */}
      <GlobalCTA
        label="Get Started"
        title="Get Connected. Access Opportunities. Grow Your Impact."
        subtitle="Overseas contract employment through the Forum provides a trusted, compliant, and efficient way to connect talent with opportunity."
        primaryButtonText="Get Connected"
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
