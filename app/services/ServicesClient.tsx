"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  BadgePercent,
  PackageCheck,
  ShoppingBag,
  Megaphone,
  Plus,
  HelpCircle,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { services, homeStats, markets, whyUptib } from "@/data/textile";
import { cn } from "@/lib/utils";

const PX = "px-6 sm:px-10 lg:px-16 xl:px-20";

/* Service hero/feature imagery (mirrors the detail pages) */
const serviceImages: Record<string, string> = {
  "marketing-sales": "/image/marketing.jpg",
  "ecommerce-warehouse": "/image/warehouse.jpg",
  "buying-house": "/image/buying.jpg",
  logistics: "/image/logistics.jpg",
};

/* Hero floating facts */
const heroFacts = [
  { icon: PackageCheck, value: "4 services", label: "Two for buyers, two for exporters" },
  { icon: Globe2, value: "Worldwide", label: "Buyers and markets we connect" },
  { icon: ShieldCheck, value: "AQL-checked", label: "Independent quality control" },
  { icon: BadgePercent, value: "GSP+", label: "EU duty-free advantage" },
];

/* The two audiences we serve */
const sides = [
  {
    icon: ShoppingBag,
    eyebrow: "For international buyers",
    title: "Source the supply",
    body: "Source dependable Pakistani product, delivered on-spec and on-time — with one accountable partner running the buying house and the logistics behind it.",
    slugs: ["buying-house", "logistics"],
  },
  {
    icon: Megaphone,
    eyebrow: "For Pakistani exporters",
    title: "Grow your exports",
    body: "Get visible to buyers worldwide, win real demand, and sell directly online — from a profile to a fully managed market presence.",
    slugs: ["marketing-sales", "ecommerce-warehouse"],
  },
];

/* Service FAQs — buyers and exporters */
const faqs = [
  {
    tag: "Buyers",
    q: "How do I start sourcing from Pakistan?",
    a: "Send a brief or request a quote and we return suitable factories, samples and pricing. From there we manage sampling, quality control, documentation and delivery — you deal with one accountable partner.",
  },
  {
    tag: "Buyers",
    q: "What are typical minimum order quantities?",
    a: "From 50–100 pieces with specialist makers to several hundred per size and colour for bulk bedding and towelling. Tell us your quantity and we match you to the right manufacturer.",
  },
  {
    tag: "Buyers",
    q: "How is quality guaranteed?",
    a: "Independent inspection on the ground in Pakistan against your approved sample — in-line, mid-production and final pre-shipment to your agreed AQL. Nothing ships until it passes.",
  },
  {
    tag: "Buyers",
    q: "Can you ship and clear customs?",
    a: "Yes. We handle freight coordination, customs clearance, export documentation and Importer/Exporter of Record setup — with GSP+ duty-free paperwork on qualifying goods.",
  },
  {
    tag: "Exporters",
    q: "What do I get as a member?",
    a: "A professional profile in front of global buyers, market intelligence, B2B matchmaking, a directory listing and — crucially — a place in the supplier pool we source from for live orders.",
  },
  {
    tag: "Exporters",
    q: "I've never exported before — can you help?",
    a: "Yes. We guide first-time exporters through compliance, labelling, packaging and customs, and can set you up to sell directly online via Amazon and your own store.",
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

export default function ServicesClient() {
  const shouldReduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Services"
        labelClassName="text-white"
        minHeightClass="min-h-[560px] md:min-h-[620px] lg:min-h-[680px]"
        title="What we do"
        subtitle="Four services that cover both sourcing Pakistani textiles for buyers worldwide and helping Pakistani exporters reach global markets — marketing & sales, e-commerce & warehousing, a buying house and logistics, with one accountable partner for both."
        image="/image/services.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/contact">Get a quote</ShinyButton>
          <Button href="#services" variant="glass" size="lg">
            Explore the services
          </Button>
        </div>
      </PageHero>

      {/* ── FLOATING FACTS CARD ──────────────────────────────────── */}
      <div className={cn("relative z-[3] -mt-14 sm:-mt-16 lg:-mt-20", PX)}>
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_24px_60px_-24px_rgba(4,120,87,0.30)] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
            {heroFacts.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.value}
                  className={cn("flex items-start gap-3.5", i > 0 && "lg:border-l lg:border-[#E5E7EB] lg:pl-6")}
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

      {/* ── THE FOUR SERVICES ────────────────────────────────────── */}
      <section id="services" className="bg-white py-20 lg:py-28 scroll-mt-24">
        <div className={PX}>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.5fr] lg:gap-14 xl:gap-20">
            {/* Left — heading + world map */}
            <AnimatedSection animation="blur-in">
              <div className="lg:sticky lg:top-28">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#2F7549]">Our core services</p>
                <h2 className="font-heading font-extrabold text-4xl sm:text-5xl leading-[1.08] text-[#16291E]">
                  Source the supply,<br className="hidden sm:block" /> or grow your exports
                </h2>
                <div className="mt-6 mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E]" />
                <p className="max-w-md text-[#5A5F72] text-base leading-relaxed">
                  Whether you&apos;re an international buyer looking for reliable supply or a Pakistani exporter ready to
                  grow, we provide the services, network, and infrastructure to help you succeed.
                </p>
                <div className="relative mt-12 hidden aspect-[4/3] w-full opacity-90 lg:block">
                  <Image
                    src="/image/clker-free-vector-images-map-305667_1920.png"
                    alt="Global textile trade routes connecting Pakistan to buyers worldwide"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 1024px) 0px, 33vw"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Right — 2×2 service cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s, index) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.slug}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3E8F5E]/50 hover:shadow-[0_24px_50px_-24px_rgba(4,120,87,0.35)]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                        <Image
                          src={serviceImages[s.slug] ?? "/image/hero-bg/global-textile-market.jpg"}
                          alt={s.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#2F7549] shadow-sm backdrop-blur">
                          {s.name}
                        </span>
                      </div>
                      <div className="relative flex flex-1 flex-col px-6 pb-6">
                        <span className="absolute -top-6 left-5 inline-flex size-12 items-center justify-center rounded-full bg-[#2F7549] text-white shadow-[0_10px_24px_-8px_rgba(4,120,87,0.55)] ring-4 ring-white">
                          <Icon className="size-5" strokeWidth={1.9} aria-hidden />
                        </span>
                        <h3 className="mt-9 mb-2 font-heading font-bold text-xl leading-snug text-[#16291E]">
                          {s.headline}
                        </h3>
                        <p className="mb-5 flex-1 text-sm text-[#5A5F72] leading-relaxed">{s.summary}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7549] transition-all group-hover:gap-2.5">
                          Explore {s.name} <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── WE SERVE BOTH ENDS OF THE TRADE ──────────────────────── */}
      <section className="bg-[#F8FAF9] py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <SectionLabel
              label="Two sides, one partner"
              title="We serve both ends of the trade"
              body="Every manufacturer we market becomes a vetted supplier we can source from; every order we win gives our exporters real, paying demand. Holding both views makes us a sharper partner to each side."
              color="#2F7549"
              hideLine
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sides.map((side, index) => {
                const Icon = side.icon;
                const sideServices = services.filter((s) => side.slugs.includes(s.slug));
                return (
                  <motion.div
                    key={side.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <span className="inline-flex size-14 items-center justify-center rounded-xl bg-[#2F7549]/10 text-[#2F7549]">
                        <Icon className="size-7" strokeWidth={1.6} aria-hidden />
                      </span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6B7280]">{side.eyebrow}</p>
                        <h3 className="font-heading font-extrabold text-[#16291E] text-2xl leading-tight">{side.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#5A5F72] leading-relaxed mb-6">{side.body}</p>
                    <div className="mt-auto flex flex-col gap-3">
                      {sideServices.map((s) => {
                        const SIcon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="group flex items-center gap-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAF9] p-4 transition-colors hover:border-[#3E8F5E]/50 hover:bg-white"
                          >
                            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#2F7549] border border-[#E5E7EB]">
                              <SIcon className="size-5" strokeWidth={1.7} aria-hidden />
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="font-heading font-bold text-[#16291E]">{s.name}</p>
                              <p className="text-[13px] text-[#5A5F72] leading-snug truncate">{s.short}</p>
                            </div>
                            <ArrowRight className="size-4 text-[#2F7549] transition-transform group-hover:translate-x-1" aria-hidden />
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY Pakistan Textile Partners ────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-16 xl:gap-20">
              <div>
                <SectionLabel label="Why Pakistan Textile Partners" title="One partner, accountable on both sides" color="#2F7549" hideLine />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] -mt-3 mb-5" />
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed">
                  We market the supply and source the demand — so buyers get dependable product and exporters get real
                  orders, with quality controlled on the ground in Pakistan.
                </p>

                <div className="relative mt-10 hidden lg:block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src="/image/glowing-globe-image.jpg"
                      alt="Global reach of Pakistani textile trade"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 0px, 33vw"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7">
                {whyUptib.map((b, index) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.title}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm"
                    >
                      <span className="inline-flex size-14 items-center justify-center rounded-full bg-[#2F7549]/10 text-[#2F7549] mb-6">
                        <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <h3 className="font-heading font-bold text-lg text-[#16291E] leading-snug">{b.title}</h3>
                      <div className="mt-2.5 mb-4 h-0.5 w-8 rounded-full bg-[#2F7549]" />
                      <p className="text-sm text-[#5A5F72] leading-relaxed">{b.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── THE NUMBERS (dark band) ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#15402A] py-20 lg:py-28">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)",
            backgroundSize: "48px 48px",
          }}
        />
        <Image
          src="/image/globe.png"
          alt=""
          aria-hidden
          width={560}
          height={560}
          className="pointer-events-none select-none absolute -right-24 top-1/2 -translate-y-1/2 w-[340px] lg:w-[520px] h-auto opacity-40"
        />
        <div className={cn("relative", PX)}>
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16 lg:items-center">
              <div>
                <SectionLabel
                  label="The trade we move"
                  title="Pakistani product, delivered worldwide"
                  body="From the EU and the Americas to the Middle East, our services connect Pakistan's manufacturing strength to buyers wherever there is demand."
                  color="#8FD3AE"
                  light
                  hideLine
                />
                <Button href="/global-textile-market" variant="glass" size="lg" showArrow>
                  Explore the global market
                </Button>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
                  {homeStats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={cn("px-0 sm:px-6 first:pl-0", i > 0 && "sm:border-l sm:border-white/15")}
                    >
                      <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-none">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-[13px] text-white/55 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-2.5 border-t border-white/10 pt-8">
                  {markets.map((m) => (
                    <span
                      key={m.name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium text-white/85 transition-colors hover:border-[#8FD3AE]/50 hover:bg-white/[0.08]"
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

      {/* ── FAQs ─────────────────────────────────────────────────── */}
      <section
        className="relative z-[1] py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(900px circle at 0% 0%, rgba(4,120,87,0.07), transparent 50%), radial-gradient(800px circle at 100% 100%, rgba(16,185,129,0.06), transparent 50%), #F8FAFC",
        }}
        aria-labelledby="services-faq-heading"
      >
        <div className={cn("relative", PX)}>
          <AnimatedSection animation="blur-in">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionLabel
                  label="FAQs"
                  title="Questions from both sides"
                  body="What buyers and exporters ask us most about working with Pakistan Textile Partners."
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
                      <p className="text-sm font-bold text-[#16291E]">Not sure where to start?</p>
                      <p className="text-xs text-[#5A5F72]">Tell us what you need and we'll point you to the right service.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/contact" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7549]">
                      Talk to our team
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {faqs.map((item, i) => {
                  const isOpen = openFaq === i;
                  const panelId = `services-faq-panel-${i}`;
                  const buttonId = `services-faq-button-${i}`;
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
                              "inline-flex shrink-0 items-center justify-center rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide transition-colors",
                              isOpen ? "bg-[#2F7549] text-white" : "bg-[#2F7549]/10 text-[#2F7549]",
                            )}
                            aria-hidden
                          >
                            {item.tag}
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
                        className="px-4 pb-5 pl-[4.5rem] pr-12 text-[#5A5F72] leading-relaxed sm:px-5 sm:pl-[5.25rem]"
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

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <GlobalCTA
        label="Work with Pakistan Textile Partners"
        title="Source the supply, or grow your exports"
        subtitle="International buyers source dependable Pakistani product; Pakistani manufacturers reach buyers worldwide. We market the supply and source the demand."
        primaryButtonText="Get a quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Become a member"
        secondaryButtonLink="/membership"
        image="/image/sportswear-h.jpg"
      />
    </div>
  );
}
