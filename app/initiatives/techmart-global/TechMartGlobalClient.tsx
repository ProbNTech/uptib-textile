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
  Rocket,
  Building2,
  ShoppingCart,
  TrendingUp,
  Globe2,
  Handshake,
  Shield,
  Search,
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Cloud,
  Brain,
  Lock,
  Smartphone,
  CreditCard,
  Users,
  GraduationCap,
  DollarSign,
  BadgeCheck,
  FileText,
  BarChart3,
  Briefcase,
  Layers,
  Tag,
  Percent,
  Award,
} from "lucide-react";

/* ââ Stats bar data ââââââââââââââââââââââââââââââââââââââââââââââââ */
const stats = [
  { value: "500+", label: "Companies", color: "#047857" },
  { value: "12", label: "Sectors", color: "#10B981" },
  { value: "3", label: "Continents", color: "#047857" },
  { value: "Verified", label: "Network", color: "#047857" },
];

/* ââ Audience data âââââââââââââââââââââââââââââââââââââââââââââââââ */
const audiences = [
  {
    title: "Tech Startups",
    description: "Early-stage technology companies seeking market access, partnerships, and growth opportunities in international markets.",
    icon: Rocket,
    color: "#047857",
  },
  {
    title: "Scale-ups and SMEs",
    description: "Growing technology businesses ready to expand their reach and establish strategic relationships with global buyers and partners.",
    icon: Building2,
    color: "#10B981",
  },
  {
    title: "Enterprises and Buyers",
    description: "Organisations looking to discover, evaluate, and engage with qualified technology vendors and service providers.",
    icon: ShoppingCart,
    color: "#047857",
  },
  {
    title: "Investors and Partners",
    description: "Investment firms, strategic partners, and institutions interested in connecting with high-potential technology companies.",
    icon: TrendingUp,
    color: "#047857",
  },
];

/* ââ Key Features (from document) ââââââââââââââââââââââââââââââââââ */
const keyFeatures = [
  {
    title: "Technology Product Listings",
    description: "Pakistani companies can showcase their technology solutions including software products, SaaS platforms, AI solutions, FinTech products, cybersecurity tools, cloud platforms, and mobile applications. Each listing includes product description, technical capabilities, demos, pricing models, and contact details.",
    icon: Layers,
    color: "#047857",
  },
  {
    title: "IT Service Providers Directory",
    description: "Companies can list services such as software development, AI and machine learning solutions, cloud computing services, cybersecurity consulting, digital transformation services, and data analytics. European businesses can easily search and connect with service providers.",
    icon: Search,
    color: "#10B981",
  },
  {
    title: "Verified Partner Badge",
    description: "Companies certified through the UPTIB Trusted Partner Certification program receive a Verified Partner badge on their listings, increasing credibility with international buyers and demonstrating they have passed UPTIB verification standards.",
    icon: BadgeCheck,
    color: "#047857",
  },
  {
    title: "Project & Tender Opportunities",
    description: "European companies can post technology project requirements and Pakistani companies can submit proposals or bids, creating a dynamic B2B technology collaboration environment that facilitates cross-border procurement.",
    icon: FileText,
    color: "#047857",
  },
];

/* ââ Product listing categories ââââââââââââââââââââââââââââââââââââ */
const productCategories = [
  { name: "Software Products", icon: Code2, color: "#047857" },
  { name: "SaaS Platforms", icon: Cloud, color: "#10B981" },
  { name: "AI Solutions", icon: Brain, color: "#047857" },
  { name: "FinTech Products", icon: CreditCard, color: "#047857" },
  { name: "Cybersecurity Tools", icon: Lock, color: "#10B981" },
  { name: "Cloud Platforms", icon: Cloud, color: "#047857" },
  { name: "Mobile Applications", icon: Smartphone, color: "#047857" },
];

/* ââ IT Service categories âââââââââââââââââââââââââââââââââââââââââ */
const serviceCategories = [
  "Software Development",
  "AI and Machine Learning Solutions",
  "Cloud Computing Services",
  "Cybersecurity Consulting",
  "Digital Transformation Services",
  "Data Analytics and Business Intelligence",
];

/* ââ European Market Opportunity âââââââââââââââââââââââââââââââââââ */
const europeanMarkets = [
  {
    country: "United Kingdom",
    description: "One of Europe\u2019s largest digital economies and a global fintech and AI hub.",
    color: "#047857",
  },
  {
    country: "Germany",
    description: "Europe\u2019s largest economy with strong demand for industrial software, cybersecurity, and digital transformation.",
    color: "#10B981",
  },
  {
    country: "France",
    description: "A major technology market with strong growth in AI, cloud computing, and innovation startups.",
    color: "#047857",
  },
  {
    country: "Netherlands",
    description: "A leading digital infrastructure hub with strong demand for software and cloud services.",
    color: "#047857",
  },
  {
    country: "Switzerland",
    description: "A high-value technology and financial services market with strong demand for fintech and cybersecurity solutions.",
    color: "#10B981",
  },
  {
    country: "Spain",
    description: "A fast-growing digital economy with increasing demand for IT outsourcing and software development.",
    color: "#047857",
  },
  {
    country: "Poland",
    description: "One of Europe\u2019s fastest growing technology sectors and a major digital transformation market.",
    color: "#047857",
  },
];

/* ââ Strategic Sectors âââââââââââââââââââââââââââââââââââââââââââââ */
const strategicSectors = [
  {
    title: "Artificial Intelligence",
    description: "AI development, machine learning solutions, and data analytics services.",
    icon: Brain,
    color: "#047857",
  },
  {
    title: "Cloud Computing",
    description: "Cloud infrastructure development, migration services, and SaaS platforms.",
    icon: Cloud,
    color: "#10B981",
  },
  {
    title: "FinTech",
    description: "Digital banking, payment platforms, and financial technology innovation.",
    icon: CreditCard,
    color: "#047857",
  },
  {
    title: "Cybersecurity",
    description: "Security solutions for financial services, government systems, and enterprise platforms.",
    icon: Lock,
    color: "#047857",
  },
  {
    title: "Software Engineering",
    description: "Enterprise software development, SaaS products, and digital transformation services.",
    icon: Code2,
    color: "#10B981",
  },
];

/* ââ Pakistan Tech Strength stats ââââââââââââââââââââââââââââââââââ */
const pakistanStrength = [
  {
    value: "300,000+",
    label: "IT Professionals",
    description: "Working in software development, AI, cybersecurity, and cloud computing.",
    icon: Users,
    color: "#047857",
  },
  {
    value: "70,000+",
    label: "IT Graduates/Year",
    description: "Entering the workforce annually, creating a strong supply of skilled technology professionals.",
    icon: GraduationCap,
    color: "#10B981",
  },
  {
    value: "30\u201360%",
    label: "Cost Efficiency",
    description: "Cost advantage compared with European markets, making Pakistan an attractive development destination.",
    icon: DollarSign,
    color: "#047857",
  },
  {
    value: "Expanding",
    label: "IT Exports",
    description: "Pakistan's IT sector is growing rapidly with increasing exports to global markets.",
    icon: TrendingUp,
    color: "#7C3AED",
  },
];

/* ââ Benefits ââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
const benefitsPakistani = [
  "Global visibility for products and services",
  "Access to international clients",
  "Increased credibility through verification",
  "Business development opportunities in Europe",
];

const benefitsEuropean = [
  "Discover reliable technology vendors",
  "Access cost-effective IT solutions",
  "Collaborate with skilled development teams",
  "Accelerate digital transformation projects",
];

/* ââ Revenue Model âââââââââââââââââââââââââââââââââââââââââââââââââ */
const revenueModel = [
  {
    title: "Membership Fees",
    description: "Companies pay annual membership to list products and services on the platform.",
    icon: Briefcase,
    color: "#047857",
  },
  {
    title: "Listing Fees",
    description: "Premium listings for higher visibility and enhanced showcase features.",
    icon: Tag,
    color: "#10B981",
  },
  {
    title: "Commission on Deals",
    description: "UPTIB may receive a small commission for successful projects facilitated through the platform.",
    icon: Percent,
    color: "#047857",
  },
  {
    title: "Certification Fees",
    description: "Companies pay fees to obtain UPTIB Trusted Partner Certification and verified badge.",
    icon: Award,
    color: "#047857",
  },
];

/* ââ Role of UPTIB ââââââââââââââââââââââââââââââââââââââââââââââââ */
const roleOfUptech = [
  "Business matchmaking between companies",
  "Technology partnership development",
  "Market intelligence and research",
  "Talent and workforce connections",
  "Investment and startup collaboration opportunities",
];

/* ââ How It Works data âââââââââââââââââââââââââââââââââââââââââââââ */
const howItWorks = [
  {
    number: "01",
    title: "Discover",
    description: "Browse company profiles, service catalogues, and capability showcases to identify potential partners, vendors, or buyers.",
    outcome: "Identified opportunities",
    color: "#047857",
  },
  {
    number: "02",
    title: "Connect",
    description: "Initiate contact through the platform\u2019s communication tools or request introductions to relevant participants.",
    outcome: "Verified introductions",
    color: "#10B981",
  },
  {
    number: "03",
    title: "Collaborate",
    description: "Establish partnerships and agreements. Engage in due diligence, capability assessments, and discussions to ensure mutual fit.",
    outcome: "Partnership established",
    color: "#047857",
  },
  {
    number: "04",
    title: "Scale",
    description: "Access new markets and grow. Execute agreements, launch partnerships, and leverage platform resources to achieve long-term objectives.",
    outcome: "Business growth",
    color: "#047857",
  },
];

export default function TechMartGlobalClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ââ HERO âââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <PageHero
        label="UPTIB Initiative"
        title="TechMart Global"
        subtitle="Connecting Pakistan's technology talent with the innovation ecosystems of the United Kingdom and Europe. A global B2B technology marketplace driving innovation, trade, and technology growth between Pakistan, UK and Europe."
        image="/image/banners/banner41.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Get Started</ShinyButton>
          <Button href="/contact" variant="glass" size="lg">
            Learn More
          </Button>
        </div>
      </PageHero>

      {/* ââ Stats Bar ââââââââââââââââââââââââââââââââââââââââââââââââ */}
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
                <p className="text-[#5A5F72] text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ââ What is TechMart Global ââââââââââââââââââââââââââââââââââ */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader
                label="About the Platform"
                title="Connecting Pakistan with the UK & European Technology Markets"
                color="blue"
              />
              <p className="text-[#3D4152] text-lg leading-relaxed mb-5">
                The UK–Pakistan Trades & Investment Board (UPTIB) aims to strengthen technology collaboration between Pakistan and Europe by creating a strategic bridge between technology talent, innovation ecosystems, and digital markets.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                With growing demand for digital transformation across Europe and a rapidly expanding technology workforce in Pakistan, the opportunity for cross-border collaboration has never been greater.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                Through TechMart Global, UPTIB aims to create a sustainable digital economy bridge that drives innovation, trade, and technology growth and business opportunities between Pakistan, UK and Europe.
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
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                  Platform Snapshot
                </h3>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-4">
                  {[
                    { title: "B2B Marketplace", desc: "Connect technology vendors with global buyers.", color: "#047857" },
                    { title: "UK-Pakistan Corridor", desc: "Cross-border trade and partnership facilitation.", color: "#10B981" },
                    { title: "Verified Connections", desc: "All participants are vetted through Trusted Partner Certification.", color: "#047857" },
                    { title: "European Market Access", desc: "Gateway to UK, Germany, France, Netherlands, and more.", color: "#047857" },
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
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Who It's For âââââââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Who It's For"
            title="Who TechMart Global Serves"
            subtitle="Designed to serve diverse stakeholders across the technology ecosystem."
            color="green"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, i) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-7">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${audience.color}12`, border: `1px solid ${audience.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: audience.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                      {audience.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{audience.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Key Features of the Marketplace ââââââââââââââââââââââââ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Key Features"
            title="Key Features of the Marketplace"
            subtitle="A comprehensive platform connecting Pakistani technology companies with European buyers and partners."
            color="red"
          />

          <div className="grid md:grid-cols-2 gap-7">
            {keyFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: `${feature.color}12`, border: `1px solid ${feature.color}25` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: feature.color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">
                        {feature.title}
                      </h3>
                    </div>

                    <div className="h-px bg-[#D8D5CF] mb-5" />
                    <p className="text-base text-[#5A5F72] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Technology Product Categories âââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Product Listings"
            title="Technology Products You Can Showcase"
            subtitle="Pakistani companies can list their technology solutions across these categories."
            color="blue"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {productCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.name}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="group relative rounded-xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative bg-white rounded-xl p-5 text-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${cat.color}12`, border: `1px solid ${cat.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: cat.color }} strokeWidth={1.5} />
                    </div>
                    <p className="font-heading font-semibold text-[#1C1F2E] text-sm">
                      {cat.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 rounded-xl border border-[#D8D5CF] bg-white p-6">
              <h4 className="font-heading font-bold text-[#1C1F2E] text-base mb-3">
                Each listing may include:
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {["Product Description", "Technical Capabilities", "Demo or Screenshots", "Pricing Models", "Contact Details"].map((item, i) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <span className="text-sm text-[#5A5F72]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </Section>

      {/* ââ IT Service Providers Directory ââââââââââââââââââââââââââ */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader
                label="Service Directory"
                title="IT Service Providers Directory"
                color="green"
              />
              <p className="text-[#3D4152] text-lg leading-relaxed mb-5">
                Companies can list their services on the platform, making it easy for European businesses to search, evaluate, and connect with qualified service providers from Pakistan.
              </p>
              <div className="space-y-3">
                {serviceCategories.map((service, i) => (
                  <motion.div
                    key={service}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex items-center gap-3 bg-white rounded-lg border border-[#D8D5CF] px-4 py-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#1C1F2E] font-medium text-base">{service}</span>
                  </motion.div>
                ))}
              </div>
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
                    style={{ background: "#10B98110", border: "1px solid #10B98120" }}
                  >
                    <BadgeCheck className="w-5 h-5 text-[#10B981]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">Verified Partner Badge</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-[#5A5F72] text-base leading-relaxed mb-4">
                  Companies certified through the UPTIB Trusted Partner Certification program receive a Verified Partner badge on their listings, increasing credibility with international buyers.
                </p>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                  The badge demonstrates that the company has passed UPTIB verification standards for professional experience, technical capability, and business integrity.
                </p>
                <a href="/initiatives/trusted-partner-certification" className="inline-flex items-center gap-2 text-[#047857] font-semibold text-base hover:underline">
                  Learn about Trusted Partner Certification â
                </a>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ European Market Opportunity âââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="European Markets"
            title="European Technology Market Opportunity"
            subtitle="Europe represents one of the world's largest and most advanced digital economies. The combined European technology market represents hundreds of billions of dollars in digital services, IT infrastructure, and software development opportunities."
            color="blue"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {europeanMarkets.map((market, i) => (
              <motion.div
                key={market.country}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative h-full bg-white rounded-2xl p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${market.color}12`, border: `1px solid ${market.color}25` }}
                  >
                    <Globe2 className="w-5 h-5" style={{ color: market.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                    {market.country}
                  </h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-[#5A5F72] text-sm leading-relaxed">{market.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Strategic Sectors ââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Focus Areas"
            title="Strategic Areas of Collaboration"
            subtitle="UPTIB focuses on promoting collaboration in high-growth technology sectors."
            color="red"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {strategicSectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-6 text-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: `${sector.color}12`, border: `1px solid ${sector.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: sector.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-[#5A5F72] text-sm leading-relaxed">{sector.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Pakistan's Technology Strength ââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Why Pakistan"
            title="Pakistan's Technology Strength"
            subtitle="Pakistan is emerging as a strong global technology partner due to its rapidly growing IT ecosystem."
            color="green"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {pakistanStrength.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-7 text-center">
                    <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: stat.color }} strokeWidth={1.5} />
                    <p
                      className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{stat.label}</p>
                    <p className="text-[#5A5F72] text-sm leading-relaxed">{stat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Benefits âââââââââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Benefits"
            title="Benefits for Companies"
            subtitle="TechMart Global creates value for both Pakistani technology companies and European businesses."
            color="blue"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pakistani Companies */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#04785710", border: "1px solid #04785720" }}
                >
                  <Rocket className="w-5 h-5 text-[#047857]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">For Pakistani Tech Companies</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <ul className="space-y-3">
                {benefitsPakistani.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#5A5F72] text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* European Companies */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#10B98110", border: "1px solid #10B98120" }}
                >
                  <Globe2 className="w-5 h-5 text-[#10B981]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">For European Companies</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-[#5A5F72] text-sm mb-4">
                Businesses in the United Kingdom, Germany, France, Netherlands, and other European markets can:
              </p>
              <ul className="space-y-3">
                {benefitsEuropean.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#5A5F72] text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ How It Works âââââââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How TechMart Global Works"
            subtitle="A structured process designed to facilitate meaningful connections and successful outcomes."
            color="red"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
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
                </div>

                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>

                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                  <span className="text-base font-semibold" style={{ color: step.color }}>
                    {step.outcome}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Revenue Model ââââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Membership & Pricing"
            title="How the Marketplace Works"
            subtitle="TechMart Global offers flexible options for companies to participate and grow."
            color="green"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueModel.map((model, i) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${model.color}12`, border: `1px solid ${model.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: model.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">
                      {model.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-sm leading-relaxed">{model.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Role of UPTIB âââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <SectionHeader
                label="Our Role"
                title="Role of UPTIB"
                color="red"
              />
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                The UK–Pakistan Trades & Investment Board (UPTIB) acts as a facilitator for cross-border technology collaboration, providing essential services and infrastructure to support meaningful partnerships.
              </p>
              <ul className="space-y-3">
                {roleOfUptech.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#5A5F72] text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: "Transparency",
                  description: "Clear and fair processes with full visibility for all participants.",
                  icon: Search,
                  color: "#047857",
                },
                {
                  label: "Verification",
                  description: "All participants are verified through UPTIB Trusted Partner Certification.",
                  icon: Shield,
                  color: "#10B981",
                },
                {
                  label: "Fair Process",
                  description: "Merit-based matching and structured dispute resolution mechanisms.",
                  icon: Handshake,
                  color: "#047857",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-[#1C1F2E] text-base">
                        {item.label}
                      </span>
                      <p className="text-[#5A5F72] text-base leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ CTA ââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <GlobalCTA
        label="Join the Platform"
        title="Join TechMart Global"
        subtitle="Connect with the global technology marketplace and unlock new opportunities for growth and cross-border collaboration."
        primaryButtonText="Get Started"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Learn About Membership"
        secondaryButtonLink="/membership"
      />
    </div>
  );
}
