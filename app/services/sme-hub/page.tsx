"use client";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { TrendingUp, Wallet, Users, Gift, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const stats = [
  { value: "200+", label: "SMEs Supported", color: "#047857" },
  { value: "\u00A325M+", label: "Revenue Generated", color: "#10B981" },
  { value: "4", label: "Key Markets", color: "#047857" },
  { value: "85%", label: "Member Satisfaction", color: "#047857" },
];

const pillars = [
  {
    icon: TrendingUp,
    title: "Generating Sales",
    description: "Get exclusive insights and expert tips to help your tech SME grow in private and public sector markets both in the UK, Europe, Middle East & African continents.",
    features: ["Sales strategy workshops", "Lead generation tools", "Market access programs", "Procurement opportunities"],
    color: "#047857",
  },
  {
    icon: Wallet,
    title: "Access to Finance Opportunities",
    description: "Specialist insight from investors, finance experts and founders on access finance to grow your business. Find the latest opportunities, including funding and partnership opportunities.",
    features: ["Investor introductions", "Grant applications support", "Financial modelling guidance", "Pitch preparation"],
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Talent",
    description: "Find support and insights for accessing the talent you need to scale your business.",
    features: ["Talent matching services", "HR advisory support", "Skills development programs", "Remote team building"],
    color: "#047857",
  },
  {
    icon: Gift,
    title: "Member Offers",
    description: "Get the latest exclusive benefits for UPTIB Members only.",
    features: ["Software discounts", "Event priority access", "Partner service deals", "Free consulting hours"],
    color: "#047857",
  },
];

const markets = [
  { name: "United Kingdom", description: "Access UK government contracts, corporate partnerships, and a thriving startup ecosystem.", flag: "\uD83C\uDDEC\uD83C\uDDE7", color: "#047857" },
  { name: "Europe", description: "Expand into European markets through our Enterprise Europe Network partnership.", flag: "\uD83C\uDDEA\uD83C\uDDFA", color: "#047857" },
  { name: "Middle East", description: "Tap into the Gulf\u2019s rapidly growing technology sector and investment ecosystem.", flag: "\uD83C\uDDE6\uD83C\uDDEA", color: "#047857" },
  { name: "Africa", description: "Enter emerging African markets with the fastest-growing tech adoption rates globally.", flag: "\uD83C\uDDF3\uD83C\uDDEC", color: "#10B981" },
];

const growthSteps = [
  { number: "01", title: "Join & Onboard", description: "Become a member and complete your company profile. Our team schedules a strategy call to understand your needs.", outcome: "Personalised growth plan" },
  { number: "02", title: "Access Resources", description: "Unlock sales tools, finance guides, talent networks, and exclusive member offers tailored to your growth stage.", outcome: "Resources activated" },
  { number: "03", title: "Connect & Grow", description: "Attend events, receive introductions, and participate in programs designed to accelerate your growth.", outcome: "Connections made" },
  { number: "04", title: "Scale & Expand", description: "Leverage your network, market insights, and support to scale into new markets and revenue streams.", outcome: "Revenue scaled" },
];

const whoIsThisFor = [
  { title: "Early-Stage Startups", description: "Pre-seed to Series A companies looking to validate, grow, and secure their first major contracts." },
  { title: "Scale-Ups", description: "Companies with product-market fit seeking to accelerate growth and expand into new geographies." },
  { title: "Established SMEs", description: "Mature businesses exploring cross-border opportunities, partnerships, and new revenue channels." },
  { title: "Tech Freelancers", description: "Independent professionals looking to transition into building their own technology companies." },
];

const faqs = [
  { question: "What size companies qualify for SME Hub?", answer: "The SME Hub is designed for technology companies with fewer than 250 employees. Whether you\u2019re a solo founder or a growing team, we have programs tailored to your stage." },
  { question: "What markets can SME Hub help me enter?", answer: "Our primary focus is the UK, Europe, Middle East, and Africa. We provide market intelligence, regulatory guidance, and warm introductions to help you navigate each market effectively." },
  { question: "Are the resources included in membership?", answer: "Yes, core SME Hub resources are included in your UPTIB membership. Premium services like dedicated advisory, bespoke market research, and concierge introductions are available as add-ons." },
  { question: "How quickly can I expect results?", answer: "Most members see meaningful connections within the first 30 days. Sales pipeline impact typically materialises within 3\u20136 months, depending on your growth stage and market readiness." },
];

const stepColors = ["#047857", "#10B981", "#047857", "#047857"];
const whoColors = ["#047857", "#10B981", "#047857", "#047857"];
const faqColors = ["#047857", "#10B981", "#047857", "#047857"];

export default function SMEHubPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTIB Service"
        title="SME Hub"
        subtitle="Whether you're growing your business, entering new markets, securing public sector contracts, or boosting sales, SME Hub provides the support, connections, and insights you need. Our hub is your one-stop shop for overcoming challenges and unlocking new opportunities."
        image="/image/banners/banner62.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Join the Hub</ShinyButton>
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
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#10B981]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div>
              <SectionHeader label="Your one-stop shop" title="Comprehensive Support for Growing Technology SMEs" color="blue" />
              <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed">
                Whether you&apos;re growing your business, entering new markets, securing public sector contracts, or boosting sales, SME Hub provides the support, connections, and insights you need. Our hub is your one-stop shop for overcoming challenges and unlocking new opportunities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Core Pillars" title="Four Pillars of Support" subtitle="Everything you need to grow, all in one place." color="green" />
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="relative">
                          <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}>
                            <Icon className="w-5 h-5" style={{ color: pillar.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                        <h3 className="font-heading font-bold text-lg text-[#1C1F2E] group-hover:text-[#047857] transition-colors duration-200">{pillar.title}</h3>
                      </div>
                      <div className="h-px bg-[#D8D5CF] mb-4" />
                      <p className="text-base text-[#5A5F72] leading-relaxed mb-5">{pillar.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {pillar.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-base text-[#5A5F72]">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: pillar.color }} />
                            <span>{f}</span>
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
        </div>
      </section>

      {/* ── Markets ── */}
      <section className="relative bg-white">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Markets" title="Where We Operate" subtitle="Helping tech SMEs grow across key global markets." color="blue" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {markets.map((market, i) => (
                <motion.div
                  key={market.name}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm pl-7">
                  <div className="absolute top-4 bottom-4 left-0 w-1 rounded-r-full" style={{ background: `linear-gradient(to bottom, ${market.color}, ${market.color}30)` }} />
                  <div className="p-6 pl-0">
                    <p className="text-3xl mb-3">{market.flag}</p>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2 group-hover:text-[#047857] transition-colors duration-200">{market.name}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#5A5F72] leading-relaxed">{market.description}</p>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Your Growth Journey ── */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#047857]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Process" title="Your Growth Journey" subtitle="A structured pathway from onboarding to scaling your business internationally." color="red" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {growthSteps.map((step, i) => {
                const color = stepColors[i];
                return (
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
                        <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold border" style={{ background: `${color}25`, borderColor: `${color}50` }}>
                          {step.number}
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">{step.title}</h3>
                      <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>
                      <div className="flex items-center gap-2 pt-3 border-t border-[#D8D5CF]">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color }} strokeWidth={2} />
                        <span className="text-base font-semibold" style={{ color }}>{step.outcome}</span>
                      </div>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Who Is This For ── */}
      <section className="relative bg-white">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#10B981]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="For You" title="Who Is This For" subtitle="SME Hub is built for technology companies at every growth stage." color="blue" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoIsThisFor.map((item, i) => {
                const color = whoColors[i];
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
            <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="Common questions about the SME Hub." color="red" />
            <FAQSection faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <GlobalCTA
        label="Start Growing"
        title="Ready to Accelerate Your SME's Growth?"
        subtitle="Join the SME Hub and gain access to sales insights, finance opportunities, talent networks, and exclusive member benefits across four key global markets."
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
