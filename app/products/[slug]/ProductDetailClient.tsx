"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Globe2,
  ShieldCheck,
  BadgeCheck,
  Users,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { products, getProduct } from "@/data/textile";
import { cn } from "@/lib/utils";

const PX = "px-6 sm:px-10 lg:px-16 xl:px-20";

/* Provided high-quality category imagery (override the shared data images).
   -h = wide hero/CTA · -v1 = landscape feature · -p = portrait card */
const detailImages: Record<string, { hero: string; feature: string }> = {
  "bedding-linen": { hero: "/image/bedding-h.jpg", feature: "/image/bedding-v1.jpg" },
  "apparel-accessories": { hero: "/image/apparel-h.jpg", feature: "/image/apparels-v1.jpg" },
  "sportswear-activewear": { hero: "/image/sportswear-h.jpg", feature: "/image/sportswear-second.jpg" },
  "healthcare-textile": { hero: "/image/healthcare-h.jpg", feature: "/image/healthcare-v1.jpg" },
};

const cardImages: Record<string, string> = {
  "bedding-linen": "/image/bedding-p.jpg",
  "apparel-accessories": "/image/apparel-p.jpg",
  "sportswear-activewear": "/image/sportswear-p.jpg",
  "healthcare-textile": "/image/healthcare-p.jpg",
};

export default function ProductDetailClient({ slug }: { slug: string }) {
  const shouldReduceMotion = useReducedMotion();
  const p = getProduct(slug);
  if (!p) notFound();

  const others = products.filter((x) => x.slug !== p.slug);
  const imgs = detailImages[p.slug] ?? { hero: p.image, feature: p.image };

  const factRows: { label: string; value: string }[] = [
    { label: "Pakistan's strength", value: p.facts.strength },
    { label: "Global demand", value: p.facts.globalDemand },
    { label: "Market size", value: p.facts.marketSize },
    { label: "Certifications", value: p.facts.certifications },
  ];

  const heroFacts = [
    { icon: Layers, value: `${p.included.length} lines`, label: "Product lines in this category" },
    { icon: Globe2, value: "Worldwide", label: "Buyers we deliver to" },
    { icon: BadgeCheck, value: `${p.certList.length} standards`, label: "Certifications available" },
    { icon: ShieldCheck, value: "AQL-checked", label: "Independent quality control" },
  ];

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero label={p.eyebrow} labelClassName="text-white" minHeightClass="min-h-[560px] md:min-h-[620px] lg:min-h-[680px]" title={p.headline} subtitle={p.summary} image={imgs.hero}>
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/contact">Source {p.name.toLowerCase()}</ShinyButton>
          <Button href="/products" variant="glass" size="lg">
            All products
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
                  key={f.label}
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

      {/* ── OVERVIEW + WHO SOURCES IT ────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionLabel label="Overview" title="Why Pakistan, for this" color="#2F7549" hideLine />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] -mt-3 mb-6" />
                <p className="text-[#3D4152] text-lg leading-relaxed">{p.intro}</p>

                <div className="mt-8">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2F7549] mb-4">
                    <Users className="size-4" aria-hidden /> Who sources this
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {p.applications.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center rounded-full border border-[#D7EADD] bg-[#EEF6F0] px-3.5 py-1.5 text-sm font-medium text-[#2F7549]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-[0_28px_60px_-28px_rgba(4,120,87,0.35)]">
                  <Image src={imgs.feature} alt={p.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-sm font-bold text-[#2F7549]">
                    <Sparkles className="size-4" aria-hidden /> Made in Pakistan
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── THE RANGE ────────────────────────────────────────────────
          Categories with a `showcase` render the image-rich editorial
          collection; the rest fall back to the plain "What's included" list. */}
      {p.showcase ? (
        <ProductShowcase showcase={p.showcase} />
      ) : (
        <section className="bg-white py-20 lg:py-28">
          <div className={PX}>
            <AnimatedSection>
              <SectionLabel
                label="The range"
                title="What's included"
                body="The product lines we source and supply within this category — built to your spec and certifications."
                color="#2F7549"
                hideLine
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {p.included.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3.5 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#3E8F5E] flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-[#3D4152] leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── WHAT'S DRIVING DEMAND ────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <SectionLabel
              label="Market outlook"
              title="What's driving demand"
              body={`The trends pulling global buyers toward ${p.name.toLowerCase()} — and where the opportunity is growing.`}
              color="#2F7549"
              hideLine
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {p.demandDrivers.map((d, index) => (
                <motion.div
                  key={d.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="flex h-full flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#2F7549]/10 text-[#2F7549] mb-5">
                    <TrendingUp className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="font-heading font-bold text-[#16291E] text-base leading-snug">{d.title}</h3>
                  <div className="mt-2.5 mb-3 h-0.5 w-8 rounded-full bg-[#2F7549]" />
                  <p className="text-sm text-[#5A5F72] leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── THE FACTS ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#15402A] py-20 lg:py-28">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <div className={cn("relative", PX)}>
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start lg:max-w-sm">
                <SectionLabel label="The facts" title="The numbers behind the category" color="#6FC79A" light hideLine />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#6FC79A] to-[#8FD3AE] -mt-3 mb-5" />
                <p className="text-white/70 text-base leading-relaxed mb-7">
                  Verified strengths, demand and standards for {p.name.toLowerCase()} — so you can buy with confidence.
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.certList.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-[#8FD3AE]"
                    >
                      <BadgeCheck className="size-3.5" aria-hidden /> {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden shadow-sm backdrop-blur-sm">
                <dl className="divide-y divide-white/10">
                  {factRows.map((row) => (
                    <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-6">
                      <dt className="font-heading font-bold text-[#8FD3AE] text-sm uppercase tracking-wide">{row.label}</dt>
                      <dd className="sm:col-span-2 text-white/85 leading-relaxed">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY PAKISTAN LEADS HERE ──────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start lg:max-w-sm">
                <SectionLabel label="The advantage" title="Why Pakistan leads here" color="#2F7549" hideLine />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] -mt-3 mb-5" />
                <p className="text-[#5A5F72] text-base leading-relaxed">
                  The manufacturing strengths that make Pakistan a dependable origin for {p.name.toLowerCase()} — at
                  the quality, scale and price global buyers need.
                </p>
                {p.strengthsNote && (
                  <div className="mt-7 flex items-start gap-3.5 rounded-2xl border border-[#D7EADD] bg-[#EEF6F0] p-5">
                    <Award className="size-5 shrink-0 text-[#2F7549] mt-0.5" aria-hidden />
                    <p className="text-sm font-medium text-[#16291E] leading-relaxed">{p.strengthsNote}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {p.strengths.map((s, index) => (
                  <motion.div
                    key={s}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3.5 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#3E8F5E] flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-[#3D4152] leading-relaxed">{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OTHER CATEGORIES ─────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <SectionLabel
              label="Keep exploring"
              title="Other categories we trade"
              color="#2F7549"
              hideLine
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((o) => {
                const Icon = o.icon;
                return (
                  <Link
                    key={o.slug}
                    href={`/products/${o.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3E8F5E]/50 hover:shadow-[0_24px_50px_-24px_rgba(4,120,87,0.35)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={cardImages[o.slug] ?? o.image}
                        alt={o.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                      <span className="absolute left-3 top-3 inline-flex size-9 items-center justify-center rounded-lg bg-white/90 backdrop-blur text-[#2F7549]">
                        <Icon className="size-[18px]" strokeWidth={2} aria-hidden />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-heading font-bold text-[#16291E] text-lg mb-1.5">{o.name}</h3>
                      <p className="text-sm text-[#5A5F72] leading-relaxed flex-1">{o.short}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7549] transition-all group-hover:gap-2.5">
                        Explore <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <GlobalCTA
        label={`Source ${p.name}`}
        title={`Ready to source ${p.name.toLowerCase()}?`}
        subtitle="Tell us your spec and we'll match it to the right vetted Pakistani manufacturer — quality-checked and delivered to your market, anywhere in the world."
        primaryButtonText="Request a quote"
        primaryButtonLink="/contact"
        secondaryButtonText="See all products"
        secondaryButtonLink="/products"
        image={imgs.hero}
      />
    </div>
  );
}
