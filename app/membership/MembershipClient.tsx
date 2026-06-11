"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Globe2,
  Handshake,
  Users,
  Megaphone,
  BarChart3,
  CalendarDays,
  Award,
  BadgePercent,
  Check,
  Star,
  Factory,
  Building2,
  Rocket,
  Package,
  ClipboardCheck,
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Plus,
  HelpCircle,
  Layers,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { homeStats, markets } from "@/data/textile";
import { cn } from "@/lib/utils";

const PX = "px-6 sm:px-10 lg:px-16 xl:px-20";

/* ── Hero floating facts card ────────────────────────────────────── */
const overviewFacts = [
  { icon: Users, value: "Open", label: "To all eligible exporters & manufacturers" },
  { icon: BadgePercent, value: "On request", label: "Tiered pricing — start small, scale up" },
  { icon: Globe2, value: "Global", label: "Reach buyers across key markets" },
  { icon: Layers, value: "3 Tiers", label: "Basic · Professional · Premium" },
];

/* ── Why membership matters (compact benefit grid) ───────────────── */
const benefits = [
  { icon: Globe2, title: "Access to real buyers", desc: "A place in the supplier pool we source from for live orders." },
  { icon: Handshake, title: "B2B matchmaking", desc: "Pre-qualified meetings with buyers, distributors and procurement teams." },
  { icon: Users, title: "Buyer introductions", desc: "Warm introductions to retailers, importers and brands actively sourcing." },
  { icon: Megaphone, title: "Live leads & enquiries", desc: "Buyer enquiries matched to your products, plus lead-generation support." },
  { icon: BarChart3, title: "Market intelligence", desc: "Trends, certification rules and demand forecasts for key markets." },
  { icon: CalendarDays, title: "Trade events", desc: "Exhibitions, webinars and the UK–Pak Textile Export Forum." },
  { icon: Award, title: "International representation", desc: "We represent your products to buyers as an accountable partner." },
  { icon: BadgePercent, title: "The GSP+ advantage", desc: "Pakistan's preferential duty-free EU access, built into your price." },
];

/* ── Membership tiers ────────────────────────────────────────────── */
const tiers = [
  {
    name: "Basic",
    icon: Factory,
    tagline: "Perfect for getting started.",
    featured: false,
    features: [
      "Company profile listing",
      "Buyer-directory access",
      "Monthly market reports",
      "Inclusion in the sourcing pool",
    ],
  },
  {
    name: "Professional",
    icon: Building2,
    tagline: "For growing exporters ready to scale.",
    featured: true,
    features: [
      "Everything in Basic",
      "B2B matchmaking",
      "Buyer introductions",
      "Trade-event participation",
      "Lead-generation support",
    ],
  },
  {
    name: "Premium",
    icon: Award,
    tagline: "For established exporters expanding globally.",
    featured: false,
    features: [
      "Everything in Professional",
      "Dedicated market advisor",
      "Buyer-sourcing campaigns",
      "International representation",
      "Featured promotion",
    ],
  },
];

const tierValues = [
  { title: "Tailored to your stage", desc: "Pick the tier that matches where your export business is today." },
  { title: "Scale up anytime", desc: "Start on Basic and upgrade to Professional or Premium as you see value." },
  { title: "Pricing on request", desc: "Transparent, tier-based pricing — no hidden costs." },
  { title: "Built for orders", desc: "Every tier is designed to connect you to paying demand." },
];

/* ── Who can join ────────────────────────────────────────────────── */
const whoCanJoin = [
  { icon: Factory, title: "Manufacturers & mills", desc: "Bedding, apparel, sportswear, healthcare and home-textile producers ready to supply at scale." },
  { icon: Building2, title: "Exporters & trading houses", desc: "Established exporters widening their buyer base and diversifying into new destinations." },
  { icon: Rocket, title: "First-time & SME exporters", desc: "Smaller producers needing a credible route, low-MOQ partners and hands-on support to go global." },
  { icon: Package, title: "Accessories & allied suppliers", desc: "Trims, packaging and service providers supporting the textile supply chain." },
];

/* ── Journey / how it works ──────────────────────────────────────── */
const steps = [
  { icon: ClipboardCheck, title: "Apply online", desc: "Send your details to our membership team to get started." },
  { icon: ShieldCheck, title: "Verification", desc: "Our team reviews and verifies your details." },
  { icon: UserCheck, title: "Onboarding", desc: "We set up your profile and member access." },
  { icon: Handshake, title: "Get matched", desc: "Start connecting with buyers and live orders." },
];

/* ── Apply teaser chips ──────────────────────────────────────────── */
const applyChips = [
  { icon: ClipboardCheck, label: "Simple application" },
  { icon: ShieldCheck, label: "Careful review" },
  { icon: UserCheck, label: "Fast onboarding" },
  { icon: Handshake, label: "Start connecting" },
];

/* ── FAQs ────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Who is eligible for Pakistan Textile Partners membership?",
    a: "Membership is open to verified Pakistani textile manufacturers, mills, exporters, trading houses and allied suppliers who can supply international buyers. First-time and SME exporters are welcome.",
  },
  {
    q: "How is this different from a directory listing?",
    a: "A directory listing is passive — it waits to be found. Membership is active: you join the pool we source from for live orders, get introduced to qualified buyers worldwide, receive market intelligence, and have Pakistan Textile Partners representing your products to real demand.",
  },
  {
    q: "What do the membership tiers cost?",
    a: "Pricing is provided on request. Every tier builds on the one before it, so you can start at Basic and upgrade as your export activity grows. Talk to our team for current tier pricing.",
  },
  {
    q: "How do I apply?",
    a: "Use the Apply now button to get in touch with our membership team. Share your organisation details and product categories, and we will review your interest and be in touch about next steps.",
  },
  {
    q: "Can I start small and upgrade later?",
    a: "Yes. Membership is tiered so a first-time exporter can start on Basic and scale up to Professional or Premium as they see value. Pricing for each tier is provided on request.",
  },
  {
    q: "Which markets can membership help me reach?",
    a: "Members are matched to buyers across the European Union, the United States, the United Kingdom, the Middle East, Africa and Latin America — wherever there is qualified demand for your products.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MembershipClient() {
  const shouldReduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Membership"
        minHeightClass="min-h-[560px] md:min-h-[620px] lg:min-h-[680px]"
        title="More than a listing — a route to real buyers"
        subtitle="Join the supplier pool global buyers source from. Build credibility, get matched to qualified demand, and grow your textile exports worldwide."
        image="/image/hero-bg/closeup-view-handshake-two-businessmen-suits-shaking-hands.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="#apply">Apply for membership</ShinyButton>
          <Button href="#benefits" variant="glass" size="lg">
            Explore benefits
          </Button>
        </div>
      </PageHero>

      {/* ── FLOATING FACTS CARD (overlaps hero) ──────────────────── */}
      <div className={cn("relative z-[3] -mt-14 sm:-mt-16 lg:-mt-20", PX)}>
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_24px_60px_-24px_rgba(4,120,87,0.30)] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
            {overviewFacts.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.value}
                  className={cn(
                    "flex items-start gap-3.5",
                    i > 0 && "lg:border-l lg:border-[#E5E7EB] lg:pl-6",
                  )}
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#2F7549]/10 text-[#2F7549]">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading font-extrabold text-lg text-[#16291E] leading-tight">{f.value}</p>
                    <p className="text-[13px] text-[#5A5F72] leading-snug mt-0.5">{f.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── WHY MEMBERSHIP MATTERS ───────────────────────────────── */}
      <section id="benefits" className="bg-white py-20 lg:py-28 scroll-mt-24">
        <div className={PX}>
          <AnimatedSection animation="blur-in">
            <div className="grid gap-12 lg:grid-cols-[1fr_2.6fr] lg:gap-16 xl:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start lg:max-w-sm">
                <SectionLabel
                  label="Why membership matters"
                  title="Why membership beats a directory listing"
                  color="#2F7549"
                  hideLine
                />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] -mt-3 mb-5" />
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed">
                  Standing out in global markets takes more than being found — it takes being trusted. Pakistan Textile Partners membership
                  gives you the credibility, tools and connections to grow with confidence, because we run the
                  buyer-facing sourcing business too.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-9">
                {benefits.map((b, index) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.title}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#2F7549]/10 text-[#2F7549]">
                          <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden />
                        </span>
                        <h3 className="font-heading font-bold text-[15px] text-[#16291E] leading-snug">{b.title}</h3>
                      </div>
                      <p className="text-sm text-[#5A5F72] leading-relaxed">{b.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MEMBERSHIP TIERS ─────────────────────────────────────── */}
      <section id="tiers" className="bg-[#F8FAFC] py-20 lg:py-28 scroll-mt-24">
        <div className={PX}>
          <AnimatedSection>
            <SectionLabel
              label="Membership tiers"
              title="Choose the level of support you need"
              body="Flexible plans. Real impact. Designed for exporters at every stage — pricing on request."
              color="#2F7549"
              hideLine
            />
          </AnimatedSection>

          <div className="grid lg:grid-cols-[2.3fr_1fr] gap-10 lg:gap-12 items-start">
            {/* Tier cards */}
            <div className="grid sm:grid-cols-3 gap-5 items-stretch">
              {tiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.name}
                    className={cn(
                      "relative flex flex-col rounded-2xl border p-7",
                      tier.featured
                        ? "border-[#3E8F5E] text-white bg-gradient-to-b from-[#053827] to-[#0B6E51] ring-1 ring-[#3E8F5E]/40 shadow-[0_28px_70px_-24px_rgba(16,185,129,0.7)] lg:-mt-3 lg:mb-3"
                        : "border-[#E5E7EB] bg-white shadow-sm",
                    )}
                  >
                    {tier.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E8F5E] text-white text-[11px] font-bold tracking-wide">
                        <Star className="w-3.5 h-3.5" /> Most Popular
                      </span>
                    )}
                    {/* Icon + title on one line */}
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex size-11 shrink-0 items-center justify-center rounded-xl",
                          tier.featured ? "bg-white/10 text-[#8FD3AE]" : "bg-[#2F7549]/10 text-[#2F7549]",
                        )}
                      >
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <h3 className={cn("font-heading font-bold text-xl", tier.featured ? "text-white" : "text-[#16291E]")}>
                        {tier.name}
                      </h3>
                    </div>
                    <p
                      className={cn(
                        "!text-left text-[13px] mt-3 leading-snug",
                        tier.featured ? "text-white/70" : "text-[#6B7280]",
                      )}
                    >
                      {tier.tagline}
                    </p>
                    <p
                      className={cn(
                        "font-heading font-extrabold text-lg mt-4 pb-4 border-b",
                        tier.featured ? "text-[#8FD3AE] border-white/15" : "text-[#2F7549] border-[#E5E7EB]",
                      )}
                    >
                      Pricing on request
                    </p>
                    <ul className="mt-5 space-y-3 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <Check
                            className={cn("w-4 h-4 flex-shrink-0 mt-0.5", tier.featured ? "text-[#8FD3AE]" : "text-[#3E8F5E]")}
                          />
                          <span className={tier.featured ? "text-white/90" : "text-[#3D4152]"}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Value props */}
            <ul className="space-y-6 lg:pt-4">
              {tierValues.map((v) => (
                <li key={v.title} className="flex items-start gap-3.5">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#2F7549] text-white mt-0.5">
                    <Check className="size-4" strokeWidth={3} aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-[15px] text-[#16291E]">{v.title}</p>
                    <p className="text-sm text-[#5A5F72] leading-relaxed mt-0.5">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <SectionLabel
              label="Criteria"
              title="Membership is built for textile suppliers"
              body="From large mills to first-time exporters — if you supply textiles, there is a route in."
              color="#2F7549"
              hideLine
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoCanJoin.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm hover:shadow-[0_18px_40px_-18px_rgba(4,120,87,0.25)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#2F7549]/10 text-[#2F7549] mb-5">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="font-heading font-bold text-[16px] text-[#16291E] mb-2 leading-snug">{item.title}</h3>
                    <p className="text-sm text-[#5A5F72] leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── JOURNEY / HOW IT WORKS ───────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="text-center mb-12">
              <SectionLabel
                label="Your journey with Pakistan Textile Partners"
                title="From application to your first introductions"
                color="#2F7549"
                align="center"
                hideLine
              />
              <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] mx-auto -mt-4" />
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-8 md:gap-2 max-w-5xl mx-auto">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Fragment key={s.title}>
                    <div className="flex-1 text-center md:max-w-[200px]">
                      <div className="relative mx-auto w-16 h-16 rounded-full border-2 border-[#2F7549]/20 bg-white flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#2F7549]" strokeWidth={1.75} aria-hidden />
                        <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#15402A] text-white text-[11px] font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-[15px] text-[#16291E] mb-1">{s.title}</h3>
                      <p className="text-sm text-[#5A5F72] leading-relaxed">{s.desc}</p>
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight className="hidden md:block w-5 h-5 text-[#2F7549]/40 shrink-0 mt-5" aria-hidden />
                    )}
                  </Fragment>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <ShinyButton href="#apply">Start your application</ShinyButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── GLOBAL REACH (dark stats band) ───────────────────────── */}
      <section className="relative overflow-hidden bg-[#15402A] py-20 lg:py-28">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className={cn("relative", PX)}>
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <SectionLabel
                  label="One membership. Global demand."
                  title="One membership, demand worldwide"
                  body="Pakistan Textile Partners connects Pakistani manufacturers with retailers, importers, hotel groups and brands across the markets where Pakistani textiles are in demand."
                  color="#8FD3AE"
                  light
                  hideLine
                  bodyClassName="!text-white/90"
                />
                <Button href="/global-textile-market" variant="glass" size="lg" showArrow>
                  Explore global reach
                </Button>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                  {homeStats.map((stat) => (
                    <div key={stat.label} className="border-l-2 border-[#3E8F5E]/40 pl-5">
                      <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-none mb-2">
                        {stat.value}
                      </p>
                      <p className="text-[13px] text-white/90 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-2.5">
                  {markets.map((m) => (
                    <span
                      key={m.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] text-white/90"
                    >
                      <Globe2 className="size-3.5 text-[#8FD3AE]" aria-hidden />
                      {m.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── APPLY (teaser) ───────────────────────────────────────── */}
      <section id="apply" className="bg-white py-20 lg:py-28 scroll-mt-24">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <SectionLabel
                  label="Ready to join?"
                  title="Apply for membership"
                  body="Take the next step toward global growth. Join Pakistan Textile Partners and become part of the supplier pool buyers source from."
                  color="#2F7549"
                  hideLine
                />
                <div className="flex flex-wrap items-center gap-4">
                  <ShinyButton href="/contact">Apply now</ShinyButton>
                  <Button href="/contact" variant="secondary" size="lg">
                    Book a consultation
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl border border-[#E5E7EB] bg-gradient-to-b from-white to-[#F8FAFC] p-7 shadow-[0_18px_50px_-24px_rgba(4,120,87,0.25)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F7549] mb-6">What happens next</p>
                <ol className="relative space-y-6">
                  {/* connecting rail */}
                  <span className="absolute left-[21px] top-2 bottom-2 w-px bg-[#2F7549]/15" aria-hidden />
                  {applyChips.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <li key={c.label} className="relative flex items-center gap-4">
                        <span className="relative z-[1] inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#2F7549]/10 text-[#2F7549] ring-4 ring-white">
                          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                        </span>
                        <span className="flex-1 text-[15px] font-semibold text-[#16291E]">{c.label}</span>
                        <span className="text-xs font-bold tabular-nums text-[#2F7549]/35">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQs (home-page accordion design) ────────────────────── */}
      <section
        className="relative z-[1] py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(900px circle at 0% 0%, rgba(4,120,87,0.07), transparent 50%), radial-gradient(800px circle at 100% 100%, rgba(16,185,129,0.06), transparent 50%), #F8FAFC",
        }}
        aria-labelledby="membership-faq-heading"
      >
        <div className={cn("relative", PX)}>
          <AnimatedSection animation="blur-in">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionLabel
                  label="FAQs"
                  title="Membership questions, answered"
                  body="What Pakistani textile exporters ask us most about joining Pakistan Textile Partners and reaching buyers worldwide."
                  color="#2F7549"
                  as="h2"
                  hideLine
                />
                <div className="mt-2 max-w-sm rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_30px_-12px_rgba(4,120,87,0.18)]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#2F7549] text-white">
                      <HelpCircle className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#16291E]">Still have questions?</p>
                      <p className="text-xs text-[#5A5F72]">Read the full terms or talk to our team.</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Link href="/contact" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7549]">
                      Talk to our team
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                    <Link
                      href="/membership/terms"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5A5F72] hover:text-[#16291E]"
                    >
                      Membership terms
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {faqs.map((item, i) => {
                  const isOpen = openFaq === i;
                  const panelId = `membership-faq-panel-${i}`;
                  const buttonId = `membership-faq-button-${i}`;

                  return (
                    <div
                      key={item.q}
                      className={cn(
                        "rounded-2xl border transition-colors duration-200",
                        isOpen
                          ? "border-[#2F7549]/25 bg-[#2F7549]/[0.04] shadow-[0_10px_30px_-12px_rgba(4,120,87,0.18)]"
                          : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB] hover:shadow-[0_10px_30px_-12px_rgba(4,120,87,0.12)]",
                      )}
                    >
                      <h3>
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                        >
                          <span
                            className={cn(
                              "inline-flex size-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold tabular-nums transition-colors",
                              isOpen ? "bg-[#2F7549] text-white" : "bg-[#2F7549]/10 text-[#2F7549]",
                            )}
                            aria-hidden
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>

                          <span className="flex-1 text-sm font-medium text-[#16291E]">{item.q}</span>

                          <span
                            className={cn(
                              "inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors",
                              isOpen ? "bg-[#2F7549] text-white" : "bg-[#F8FAFC] text-[#5A5F72]",
                            )}
                            aria-hidden
                          >
                            <Plus className={cn("size-4 transition-transform duration-200", isOpen && "rotate-45")} />
                          </span>
                        </button>
                      </h3>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        hidden={!isOpen}
                        className="px-4 pb-5 pl-[4.25rem] pr-12 text-[#5A5F72] leading-relaxed sm:px-5 sm:pl-[4.75rem]"
                      >
                        {item.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      {/* ── BOTTOM CTA (shared GlobalCTA) ────────────────────────── */}
      <GlobalCTA
        label="Grow your exports"
        title="Not sure which tier is right for you?"
        subtitle="Tell us about your business and our team will help you choose the best fit — and put your products in front of qualified demand worldwide."
        primaryButtonText="Contact us"
        primaryButtonLink="/contact"
        secondaryButtonText="Request guidance"
        secondaryButtonLink="/contact"
        image="/image/first-time-exporter.jpg"
      />
    </div>
  );
}
