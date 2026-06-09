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
  Handshake,
  BadgePercent,
  Leaf,
  Award,
  Recycle,
  ScrollText,
  Plus,
  HelpCircle,
  PackageCheck,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { products, homeStats, markets } from "@/data/textile";
import { cn } from "@/lib/utils";

const PX = "px-6 sm:px-10 lg:px-16 xl:px-20";

/* Why source through UPTIB */
const whyUptib = [
  { icon: Globe2, title: "A vetted global network", desc: "Profiled Pakistani manufacturers across every category, matched to buyers worldwide." },
  { icon: ShieldCheck, title: "Quality on the ground", desc: "Independent, multi-stage inspection to your agreed AQL — not just the factory's word." },
  { icon: Handshake, title: "One accountable partner", desc: "A single point of contact from first enquiry to final delivery, anywhere in the world." },
  { icon: BadgePercent, title: "The GSP+ advantage", desc: "Preferential duty-free entry into the EU on qualifying Pakistani textiles, built into your price." },
];

/* Sustainability & compliance certifications */
const certifications = [
  { code: "GOTS", note: "Global Organic Textile Standard" },
  { code: "OEKO-TEX", note: "Tested for harmful substances" },
  { code: "BCI", note: "Better Cotton Initiative" },
  { code: "Sedex", note: "Ethical & social audit" },
  { code: "WRAP", note: "Responsible production" },
  { code: "ISO", note: "Quality management" },
];

/* Products-specific FAQs */
const faqs = [
  {
    q: "Can you produce to our own designs and specifications?",
    a: "Yes. Across apparel, sportswear and home textiles our network offers OEM and private-label production — you keep the branding in-house and we manufacture to your tech pack, with sampling and design support where needed.",
  },
  {
    q: "What are typical minimum order quantities?",
    a: "MOQs vary by category and factory. Sportswear and private-label apparel partners in Sialkot are known for low minimums and sampling, while large bedding and bath runs scale to container volumes. Tell us your quantity and we will match you to the right manufacturer.",
  },
  {
    q: "Which certifications can you supply against?",
    a: "Depending on the category, our network holds GOTS, OEKO-TEX, BCI, Sedex, WRAP, ISO and — for medical textiles — CE, AAMI and ISO 13485. We can prioritise organic cotton, recycled materials and audited, transparent supply chains.",
  },
  {
    q: "Do you handle quality control and shipping?",
    a: "Yes. We run independent, multi-stage inspection to your agreed AQL and manage export documentation, shipping and customs — so product arrives on-spec and on-time in your market.",
  },
  {
    q: "Which markets do you currently export to?",
    a: "Pakistani textiles ship worldwide — the European Union (with GSP+ duty-free access), the United States, the United Kingdom, the Middle East, Africa and Latin America. Wherever there is demand, we can deliver.",
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

/* Hero floating facts */
const heroFacts = [
  { icon: PackageCheck, value: "4 Categories", label: "Where Pakistan manufactures best" },
  { icon: Globe2, value: "Worldwide", label: "Buyers across every key market" },
  { icon: ShieldCheck, value: "AQL-checked", label: "Independent multi-stage QA" },
  { icon: Award, value: "Certified", label: "GOTS · OEKO-TEX · WRAP · ISO" },
];

export default function ProductsClient() {
  const shouldReduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Products"
        title="The textiles Pakistan exports to the world"
        subtitle="Four categories where Pakistani manufacturing is strongest and global demand is highest — bedding & linen, apparel, sportswear and healthcare textiles, sourced and delivered with one accountable partner."
        image="/image/hero-bg/crane-lifting-shipping-containers-seaport.jpg.jpeg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/contact">Request a quote</ShinyButton>
          <Button href="#categories" variant="glass" size="lg">
            Explore the range
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

      {/* ── CATEGORIES ───────────────────────────────────────────── */}
      <section id="categories" className="bg-white py-20 lg:py-28 scroll-mt-24">
        <div className={PX}>
          <AnimatedSection animation="blur-in">
            <SectionLabel
              label="The four categories"
              title="What's in the range"
              body="Each category is a proven Pakistani strength matched to live global demand. Open one to see what's included, the facts and how to source it."
              color="#2F7549"
              hideLine
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {products.map((p, index) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.slug}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3E8F5E]/50 hover:shadow-[0_28px_60px_-28px_rgba(4,120,87,0.35)]"
                  >
                    {/* image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#2F7549]">
                        <Icon className="size-3.5" strokeWidth={2} aria-hidden />
                        {p.name}
                      </span>
                    </div>
                    {/* body */}
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-heading font-bold text-[#16291E] text-2xl mb-2.5">{p.headline}</h3>
                      <p className="text-[#5A5F72] leading-relaxed flex-1">{p.short}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.applications.slice(0, 3).map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center rounded-full bg-[#EEF6F0] px-3 py-1 text-xs font-medium text-[#2F7549]"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                      <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[#2F7549] transition-all group-hover:gap-2.5">
                        Explore {p.name} <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY SOURCE THROUGH UPTIB ─────────────────────────────── */}
      <section className="bg-[#F8FAF9] py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-[1fr_2.6fr] lg:gap-16 xl:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start lg:max-w-sm">
                <SectionLabel
                  label="Why UPTIB"
                  title="Product is only half the story"
                  color="#2F7549"
                  hideLine
                />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] -mt-3 mb-5" />
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed">
                  Great textiles still need a partner who can vouch for the factory, guarantee the quality and get the
                  goods to your market. That is what we do — across all four categories.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">
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
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#2F7549]/10 text-[#2F7549] mb-5">
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <h3 className="font-heading font-bold text-[16px] text-[#16291E] mb-2 leading-snug">{b.title}</h3>
                      <p className="text-sm text-[#5A5F72] leading-relaxed">{b.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SUSTAINABILITY & COMPLIANCE ──────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionLabel
                  label="Responsible by default"
                  title="Sustainability runs through all of it"
                  body="Across every category we work with factories carrying the certifications global buyers increasingly require — and can prioritise organic cotton, recycled materials and transparent, audited supply chains."
                  color="#2F7549"
                  hideLine
                />
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF6F0] px-4 py-2 text-sm font-semibold text-[#2F7549]">
                    <Leaf className="size-4" aria-hidden /> Organic cotton
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF6F0] px-4 py-2 text-sm font-semibold text-[#2F7549]">
                    <Recycle className="size-4" aria-hidden /> Recycled materials
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF6F0] px-4 py-2 text-sm font-semibold text-[#2F7549]">
                    <ScrollText className="size-4" aria-hidden /> Audited supply chains
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {certifications.map((c) => (
                  <div
                    key={c.code}
                    className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAF9] p-5 text-center transition-colors hover:border-[#3E8F5E]/50"
                  >
                    <p className="font-heading font-extrabold text-[#16291E] text-lg leading-none">{c.code}</p>
                    <p className="mt-2 text-[11px] leading-snug text-[#5A5F72]">{c.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MARKETS (dark band) ──────────────────────────────────── */}
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
                  label="Where it ships"
                  title="Pakistani product, delivered worldwide"
                  body="From the EU and the Americas to the Middle East, our four categories reach buyers wherever there is demand for dependable, certified textiles."
                  color="#8FD3AE"
                  light
                  hideLine
                />
                <Button href="/global-textile-market" variant="glass" size="lg" showArrow>
                  Explore the global market
                </Button>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                  {homeStats.map((stat) => (
                    <div key={stat.label} className="border-l-2 border-[#3E8F5E]/40 pl-5">
                      <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-none mb-2">
                        {stat.value}
                      </p>
                      <p className="text-[13px] text-white/60 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-2.5">
                  {markets.map((m) => (
                    <span
                      key={m.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] text-white/80"
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
        aria-labelledby="products-faq-heading"
      >
        <div className={cn("relative", PX)}>
          <AnimatedSection animation="blur-in">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionLabel
                  label="FAQs"
                  title="Sourcing questions, answered"
                  body="What buyers ask us most about sourcing textiles from Pakistan."
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
                      <p className="text-sm font-bold text-[#16291E]">Have a specific spec?</p>
                      <p className="text-xs text-[#5A5F72]">Send it over and we'll match the right factory.</p>
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
                  const panelId = `products-faq-panel-${i}`;
                  const buttonId = `products-faq-button-${i}`;
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

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <GlobalCTA
        label="Source from Pakistan"
        title="Ready to source from Pakistan?"
        subtitle="Tell us what you need and we'll match it to the right vetted manufacturer — quality-checked and delivered to your market, anywhere in the world."
        primaryButtonText="Request a quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Global textile market"
        secondaryButtonLink="/global-textile-market"
      />
    </div>
  );
}
