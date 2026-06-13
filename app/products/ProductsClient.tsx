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
  Leaf,
  Award,
  Recycle,
  Plus,
  HelpCircle,
  PackageCheck,
  Globe,
  Users,
  Hash,
  Flower2,
  type LucideIcon,
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

/* Why source through Pakistan Textile Partners */
const whyUptib = [
  { icon: Globe2, title: "A vetted global network", desc: "Pre-vetted Pakistani manufacturers across every category, matched to buyers worldwide." },
  { icon: ShieldCheck, title: "Quality at every step", desc: "Independent, multi-stage inspection on your agreed AQL — not just at the factory gate." },
  { icon: Users, title: "One accountable partner", desc: "A single point of contact from first sample to final delivery, anywhere in the world." },
  { icon: Award, title: "The GSP+ advantage", desc: "Preferential duty-free entry into the EU on qualifying Pakistani textiles. Built into your price." },
];

/* Sustainability & compliance certifications */
const certifications: { code: string; note: string; icon: LucideIcon }[] = [
  { code: "GOTS", note: "Certifies organic textiles", icon: Leaf },
  { code: "OEKO-TEX", note: "Tests for harmful substances", icon: Hash },
  { code: "BCI", note: "Better Cotton Initiative", icon: Flower2 },
  { code: "Sedex", note: "Ethical trade verified", icon: Users },
  { code: "WRAP", note: "Responsible production", icon: Globe },
  { code: "ISO", note: "Quality management systems", icon: ShieldCheck },
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

/* Product card images for the products page (override the shared data images) */
const productImages: Record<string, string> = {
  "bedding-linen": "/image/bedding-p.jpg",
  "apparel-accessories": "/image/apparel-p.jpg",
  "sportswear-activewear": "/image/sportswear-p.jpg",
  "healthcare-textile": "/image/healthcare-p.jpg",
};

/* Category chips (presentation-only — distinct from data `applications`) */
const categoryChips: Record<string, string[]> = {
  "bedding-linen": ["Hotels & hospitality", "White & dyed textiles", "Cotton & blends"],
  "apparel-accessories": ["Tops & bottoms", "High-street fashion", "Workwear & uniforms"],
  "sportswear-activewear": ["Sports & fitnesswear", "Team uniforms", "Active & lifestyle"],
  "healthcare-textile": ["Patient & provider apparel", "Care textiles & linens", "Medical textiles"],
};

/* Small text-chip row used across the category cards */
function FeatureChips({ slug }: { slug: string }) {
  const chips = categoryChips[slug] ?? [];
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <span
          key={c}
          className="inline-flex items-center rounded-full bg-[#EEF6F0] px-2.5 py-1 text-[11px] font-medium text-[#2F7549]"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

export default function ProductsClient() {
  const shouldReduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Products"
        labelClassName="text-white"
        minHeightClass="min-h-[560px] md:min-h-[620px] lg:min-h-[680px]"
        title="The textiles Pakistan exports to the world"
        subtitle="Four categories where Pakistani manufacturing is strongest and global demand is highest — home textile, apparel, sportswear and healthcare textiles, sourced and delivered with one accountable partner."
        image="/image/hero-bg/pexels-cottonbro-6580549.jpg"
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
          {/* Header */}
          <AnimatedSection animation="blur-in">
            <div className="mb-10 max-w-2xl lg:mb-12">
              <div className="mb-4 flex items-center gap-3">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2F7549]">The four categories</p>
                <span className="h-px w-10 bg-[#2F7549]/40" aria-hidden />
              </div>
              <h2 className="mb-4 font-heading font-extrabold text-4xl sm:text-5xl leading-[1.1] text-[#16291E]">
                What&apos;s in the range
              </h2>
              <p className="text-[#5A5F72] text-base leading-relaxed">
                Each category is an export Pakistani strength matched to global demand. Open one to see what&apos;s
                included, the facts and how to source it.
              </p>
            </div>
          </AnimatedSection>

          {/* 4-column card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm"
                  >
                    {/* image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={productImages[p.slug] ?? p.image}
                        alt={p.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* icon · number · name pill */}
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-2.5 py-1.5 shadow-sm">
                        <Icon className="size-3.5 text-[#2F7549]" strokeWidth={2} aria-hidden />
                        <span className="text-[10px] font-extrabold tabular-nums text-[#2F7549]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-[#16291E]">{p.name}</span>
                      </span>
                    </div>
                    {/* body */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-2 font-heading font-bold text-lg leading-snug text-[#16291E]">{p.headline}</h3>
                      <p className="mb-4 text-sm text-[#5A5F72] leading-relaxed">{p.short}</p>
                      <FeatureChips slug={p.slug} />
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7549]">
                        Explore {p.name} <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY SOURCE THROUGH Pakistan Textile Partners ─────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-16 xl:gap-20">
              {/* Left: copy + decorative image */}
              <div>
                <SectionLabel
                  label="Why Pakistan Textile Partners"
                  title="Product is only half the story"
                  color="#2F7549"
                  hideLine
                />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] -mt-3 mb-5" />
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed">
                  Great textiles still need a partner who can vouch for the factory, guarantee the quality and get the
                  goods to your market. That is what we do — across all four categories.
                </p>

                <div className="relative mt-10 hidden lg:block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src="/image/map.png"
                      alt="Global reach of Pakistani textile exports"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 0px, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* Right: 2×2 value cards */}
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

      {/* ── SUSTAINABILITY & COMPLIANCE ──────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionLabel
                  label="Responsible by default"
                  title="Sustainability runs through all of it"
                  color="#2F7549"
                  hideLine
                />
                <div className="-mt-4 mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E]" />
                <p className="mb-7 max-w-md text-base sm:text-lg leading-relaxed text-[#5A5F72]">
                  Across every category we work with factories carrying the certifications global
                  buyers increasingly require — and can prioritise organic cotton, recycled materials
                  and full traceability on request.
                </p>
                <div className="flex flex-col items-start gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF6F0] px-4 py-2 text-sm font-semibold text-[#2F7549]">
                    <Leaf className="size-4" aria-hidden /> Organic cotton
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF6F0] px-4 py-2 text-sm font-semibold text-[#2F7549]">
                    <Recycle className="size-4" aria-hidden /> Recycled materials
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF6F0] px-4 py-2 text-sm font-semibold text-[#2F7549]">
                    <ShieldCheck className="size-4" aria-hidden /> Audited supply chains
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {certifications.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.code}
                      className="flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white px-4 py-7 text-center shadow-sm"
                    >
                      <span className="inline-flex size-14 items-center justify-center rounded-full bg-[#2F7549]/10 text-[#2F7549]">
                        <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <p className="mt-5 font-heading font-extrabold text-[#16291E] text-lg leading-none">
                        {c.code}
                      </p>
                      <p className="mt-2 text-[12px] leading-snug text-[#5A5F72]">{c.note}</p>
                    </div>
                  );
                })}
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
        {/* TRIAL: decorative globe — revert if not kept */}
        <Image src="/image/globe.png" alt="" aria-hidden width={560} height={560} className="pointer-events-none select-none absolute -right-24 top-1/2 -translate-y-1/2 w-[340px] lg:w-[520px] h-auto opacity-40" />
        <div className={cn("relative", PX)}>
          <AnimatedSection>
            {/* Top: heading + button (left) · horizontal stat strip (right) */}
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16 lg:items-center">
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
                {/* Horizontal stat strip */}
                <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
                  {homeStats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={cn(
                        "px-0 sm:px-6 first:pl-0",
                        i > 0 && "sm:border-l sm:border-white/15",
                      )}
                    >
                      <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-none">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-[13px] text-white/55 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Destination chips directly below the stats */}
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
        className="relative z-[1] py-20 lg:py-28 overflow-hidden bg-white"
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
        image="/image/apparel-h.jpg"
      />
    </div>
  );
}
