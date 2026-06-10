"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  Globe2,
  Globe,
  Users,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Shirt,
  Boxes,
  BarChart3,
  Sprout,
  Layers,
  Factory,
  BadgeDollarSign,
  Coins,
  Trophy,
  PieChart,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Megaphone,
  Handshake,
  ClipboardCheck,
  Info,
} from "lucide-react";

// ─── Icons cycled across each region's three headline stats ──────────────────
const statIcons = [BarChart3, Trophy, PieChart];

// ─── Icons for the "Why buyers choose Pakistan" advantages (order matches data) ─
const advantageIcons = [Sprout, Layers, Factory, ShieldCheck, BadgeDollarSign, Coins];

// ─── Icons for the exporter-playbook steps (order matches `entrySteps`) ───────
const playbookIcons = [ClipboardCheck, Leaf, TrendingUp, Megaphone, Globe, Handshake];

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalCTA } from "@/components/GlobalCTA";
import {
  segments,
  regions,
  europeFootprints,
  competitors,
  advantages,
  entrySteps,
} from "@/lib/data/textile-market-data";

// ─── Hero background image ───────────────────────────────────────────────────
const HERO_BG = "/image/hero-bg/global-textile-market.jpg";

// ─── Hero trust-bar stats ────────────────────────────────────────────────────
const heroStats = [
  { icon: Globe, eyebrow: "Global Reach", value: "100+", sub: "Countries" },
  { icon: Users, eyebrow: "Trusted by", value: "1000+", sub: "Manufacturers" },
  { icon: TrendingUp, eyebrow: "Driving Growth", value: "$17.9BN+", sub: "Textile Exports (FY2025)" },
  { icon: MapPin, eyebrow: "Strategic Hub", value: "London &", sub: "Lahore" },
];

// ─── Pakistan export-potential figures ───────────────────────────────────────
const exportStats = [
  { icon: Shirt, end: 35.9, label: "Textile Exports", year: "(FY2022)" },
  { icon: Boxes, end: 25.2, label: "Readymade Garments", year: "(FY2022)" },
  { icon: BarChart3, end: 63.6, label: "Combined Exports", year: "(FY2022)" },
  { icon: Sprout, end: 62.7, label: "Cotton Production Value", year: "(FY2022)" },
];

// ─── Flag (local SVG, plain img to avoid next/image SVG config) ──────────────
function Flag({ code, className = "" }: { code: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/image/flags/${code}.svg`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`object-cover ${className}`}
    />
  );
}

// ─── Hero (matches the global-textile-market design) ─────────────────────────
function MarketHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-white">
      {/* Dark hero region */}
      <div className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-[#06231b] lg:min-h-[720px]">
        {/* Background image — globe + textile spools, biased to the right */}
        <div aria-hidden className="absolute inset-0">
          <Image
            src={HERO_BG}
            alt=""
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Copy */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-16 pb-28 lg:pt-20 lg:pb-36">
        {/* Localized shade behind the text only (no full-hero overlay) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-10 left-0 w-[min(50rem,92%)] rounded-[2.5rem]"
          style={{
            background:
              "radial-gradient(ellipse 78% 75% at 30% 50%, rgba(6,35,27,0.9) 0%, rgba(6,35,27,0.6) 45%, rgba(6,35,27,0.22) 75%, rgba(6,35,27,0) 100%)",
          }}
        />
        <motion.div
          className="relative max-w-2xl"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-md bg-[#3E8F5E]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8FD3AE] ring-1 ring-[#3E8F5E]/30"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Connecting Pakistani Textiles to the World
          </motion.span>

          <motion.h1
            className="mt-6 font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            The Global Textile Market —<br className="hidden sm:block" /> and{" "}
            <span className="text-[#6FC79A]">Pakistan&apos;s</span> place in it
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/85"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            UPTIB is the UK–Pakistan Trades &amp; Investment Board — a London-based
            platform, with a Lahore office, that helps Pakistani textile
            manufacturers reach global markets.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#3E8F5E] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#6FC79A]"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#regions"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Trust bar — contained card straddling the hero / section boundary */}
      <div className="relative z-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-12 lg:pb-16">
        <div className="-mt-16 lg:-mt-20 overflow-hidden rounded-2xl bg-[#0a2e22] shadow-2xl shadow-black/30 ring-1 ring-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 lg:divide-y-0 lg:divide-x">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.eyebrow}
                className="flex items-center gap-4 px-6 py-6 lg:px-7 lg:py-8"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <stat.icon className="w-9 h-9 shrink-0 text-[#8FD3AE]" strokeWidth={1.5} aria-hidden />
                <div className="leading-tight">
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/55">
                    {stat.eyebrow}
                  </p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Export-potential overview + stat cards ──────────────────────────────────
function ExportPotential() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-white">
      <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — narrative */}
          <AnimatedSection animation="slide-right">
            <div className="inline-flex items-center gap-2 mb-5">
              <Sprout className="w-4 h-4 text-[#3E8F5E]" aria-hidden />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#2F7549]">
                Pakistan&apos;s Export Potential
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-[#0F2C22] text-3xl sm:text-4xl leading-[1.12] tracking-tight">
              Among the world&apos;s leading textile &amp; apparel exporters
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#3D4152]">
              Pakistan is one of the world&apos;s top textile exporters and a global
              leader in cotton and home textiles. We organise that supply,
              professionalise it, and connect Pakistani exporters to buyers in the
              EU, USA, Middle East, UK and beyond.
            </p>
            <a
              href="#regions"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-[#3E8F5E] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#2F7549]"
            >
              See Full Potential
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </AnimatedSection>

          {/* Right — stat cards */}
          <AnimatedSection animation="slide-left" delay={0.15}>
            <div className="rounded-2xl border border-[#e2e0dc] bg-[#fafaf9] p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-5 sm:gap-6">
                {exportStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center rounded-xl bg-white border border-[#ececea] px-3 py-6 sm:px-4"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#3E8F5E]/10 text-[#2F7549]">
                      <stat.icon className="w-5 h-5" strokeWidth={1.8} aria-hidden />
                    </span>
                    <p className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2F7549] leading-none">
                      ${isInView ? <CountUp end={stat.end} duration={2} decimals={1} /> : "0"}B
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#0F2C22] leading-snug">
                      {stat.label}
                    </p>
                    <p className="text-xs text-[#9aa0a6]">{stat.year}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-xs text-[#9aa0a6] mt-6">
                Source: SBP, Pakistan Bureau of Statistics, Ministry of Commerce &amp; Textiles
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── Export footprint, country by country (carousel) ─────────────────────────
const FOOTPRINTS_PER_PAGE = 8;

function ExportFootprint() {
  const [page, setPage] = useState(0);
  const [active, setActive] = useState(0);

  // Chunk the detailed country data into carousel pages of 8 (4×2 on desktop).
  const pages: (typeof europeFootprints)[] = [];
  for (let i = 0; i < europeFootprints.length; i += FOOTPRINTS_PER_PAGE) {
    pages.push(europeFootprints.slice(i, i + FOOTPRINTS_PER_PAGE));
  }
  const pageCount = pages.length;
  const stripVal = (v: string) => v.replace(/\s*\/\s*yr/i, "");
  const goToPage = (p: number) => {
    const next = Math.min(Math.max(p, 0), pageCount - 1);
    setPage(next);
    setActive(next * FOOTPRINTS_PER_PAGE); // focus the first card on the new page
  };
  const activeCountry = europeFootprints[active];

  return (
    <section className="relative bg-[#f7f6f4]">
      <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-12 items-start">
          {/* Left — intro */}
          <AnimatedSection animation="slide-right">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#2F7549]">
                Explore Data
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-[#0F2C22] text-3xl sm:text-4xl leading-[1.1] tracking-tight">
              Pakistan&apos;s export footprint, country by country
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#3D4152]">
              Our members export to 100+ countries across 6 continents. Explore key
              markets and the opportunities behind every corridor.
            </p>
            <a
              href="#regions"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-[#2F7549] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#245C3A]"
            >
              View All Countries
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </AnimatedSection>

          {/* Right — carousel + detail */}
          <AnimatedSection animation="slide-left" delay={0.1}>
            <div>
              {/* Carousel + arrows */}
              <div className="relative">
              {/* Viewport */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${page * 100}%)` }}
                >
                  {pages.map((group, pi) => (
                    <div
                      key={pi}
                      className="grid min-w-full grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 content-start"
                    >
                      {group.map((c, li) => {
                        const idx = pi * FOOTPRINTS_PER_PAGE + li;
                        const isActive = idx === active;
                        return (
                          <button
                            key={c.country}
                            type="button"
                            onClick={() => setActive(idx)}
                            onMouseEnter={() => setActive(idx)}
                            aria-pressed={isActive}
                            className={`group relative flex h-40 flex-col overflow-hidden rounded-2xl border bg-white p-5 text-left transition-all duration-300 ${
                              isActive
                                ? "border-[#3E8F5E] ring-2 ring-[#3E8F5E]/25 shadow-xl -translate-y-0.5"
                                : "border-[#e8e6e3] hover:border-[#3E8F5E]/50 hover:shadow-lg hover:-translate-y-0.5"
                            }`}
                          >
                            {/* Accent bar on the active card */}
                            <span
                              aria-hidden
                              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] transition-opacity duration-300 ${
                                isActive ? "opacity-100" : "opacity-0"
                              }`}
                            />
                            <div className="flex items-center gap-3">
                              <Flag code={c.flag} className="h-7 w-10 shrink-0 rounded-[3px] ring-1 ring-black/10 shadow-sm" />
                              <div className="min-w-0">
                                <h3 className="truncate font-heading font-bold text-[#0F2C22] leading-tight">{c.country}</h3>
                                <p className="text-xs text-[#9aa0a6]">Top Market</p>
                              </div>
                            </div>
                            <p className="mt-auto font-heading font-extrabold text-2xl text-[#2F7549] leading-none">
                              {stripVal(c.value)}
                            </p>
                            <p className="mt-1.5 flex items-center gap-1 text-xs text-[#9aa0a6]">
                              Exports (FY2024)
                              {c.growth && <TrendingUp className="h-3 w-3 text-[#3E8F5E]" aria-hidden />}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                disabled={page === 0}
                aria-label="Previous countries"
                className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F2C22] shadow-lg ring-1 ring-black/5 transition hover:bg-[#2F7549] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#0F2C22]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                disabled={page === pageCount - 1}
                aria-label="Next countries"
                className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F2C22] shadow-lg ring-1 ring-black/5 transition hover:bg-[#2F7549] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#0F2C22]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              </div>

              {/* Dots */}
              {pageCount > 1 && (
                <div className="mt-7 flex justify-center gap-2">
                  {pages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goToPage(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === page ? "w-6 bg-[#2F7549]" : "w-2 bg-[#cbd2cd] hover:bg-[#9aa0a6]"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Detail panel — full, un-clipped breakdown for the selected country */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCountry.country}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-7 overflow-hidden rounded-2xl border border-[#e2e0dc] bg-white shadow-sm"
                >
                  <div className="grid gap-px bg-[#eceae6] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                    {/* Identity + narrative */}
                    <div className="bg-white p-6 lg:p-7">
                      <div className="flex items-center gap-3">
                        <Flag code={activeCountry.flag} className="h-9 w-12 shrink-0 rounded-[3px] ring-1 ring-black/10 shadow-sm" />
                        <div>
                          <h3 className="font-heading font-extrabold text-xl text-[#0F2C22] leading-tight">
                            {activeCountry.country}
                          </h3>
                          <p className="text-xs font-medium uppercase tracking-wide text-[#9aa0a6]">
                            Top market · Exports (FY2024)
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 font-heading font-extrabold text-4xl text-[#2F7549] leading-none">
                        {stripVal(activeCountry.value)}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeCountry.growth && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3E8F5E]/10 text-[#2F7549] text-xs font-semibold px-3 py-1">
                            <TrendingUp className="h-3.5 w-3.5" />
                            {activeCountry.growth}
                          </span>
                        )}
                        {activeCountry.textileShare && (
                          <span className="inline-flex items-center rounded-full bg-[#15402A]/[0.06] text-[#3D4152] text-xs font-medium px-3 py-1">
                            {activeCountry.textileShare}
                          </span>
                        )}
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-[#6b7280]">
                        {activeCountry.note}
                      </p>
                    </div>

                    {/* Lead segments */}
                    <div className="bg-white p-6 lg:p-7">
                      <h4 className="flex items-center gap-2 font-heading font-bold text-sm text-[#0F2C22]">
                        <Sparkles className="h-4 w-4 text-[#3E8F5E]" />
                        Lead export segments
                      </h4>
                      <dl className="mt-3 divide-y divide-[#f0efed]">
                        {activeCountry.segments.map((s) => (
                          <div key={s.label} className="flex items-center justify-between gap-4 py-2.5">
                            <dt className="text-sm text-[#3D4152]">{s.label}</dt>
                            <dd className="shrink-0 font-heading font-bold text-sm text-[#2F7549]">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── Destination banner — dark hero header with dotted world-map graphic ─────
const mapPins = [
  { code: "us", x: 20, y: 26 },
  { code: "gb", x: 22, y: 70 },
  { code: "de", x: 78, y: 24 },
  { code: "sa", x: 80, y: 72 },
];

function DestinationBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-2xl lg:rounded-[1.75rem] bg-[#06231b]">
      {/* Faded garments on the right edge */}
      <div aria-hidden className="absolute inset-y-0 right-0 w-1/2 lg:w-2/5">
        <Image src="/image/apparel.jpg" alt="" fill className="object-cover opacity-25" sizes="40vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06231b] via-[#06231b]/70 to-[#06231b]/20" />
      </div>

      <div className="relative grid lg:grid-cols-2 items-center gap-10 px-7 sm:px-10 lg:px-14 py-12 lg:py-16">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#6FC79A]">
            Destination Markets
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.08] tracking-tight">
            Made in Pakistan,
            <br className="hidden sm:block" /> sold across the world
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/75">
            Explore the scale of demand, Pakistan&apos;s current position and the best
            openings across its four core export regions.
          </p>
        </div>

        {/* Dotted world map with flag pins + flight paths */}
        <div aria-hidden className="relative hidden lg:block h-[280px]">
          {/* Dot texture, masked into a soft map-shaped cloud */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(110,231,183,0.4) 1.1px, transparent 1.4px)",
              backgroundSize: "13px 13px",
              WebkitMaskImage:
                "radial-gradient(ellipse 72% 82% at 52% 50%, black 30%, transparent 76%)",
              maskImage:
                "radial-gradient(ellipse 72% 82% at 52% 50%, black 30%, transparent 76%)",
            }}
          />

          {/* Country flags orbiting the dominant Pakistan flag */}
          {mapPins.map((p, i) => (
            <motion.div
              key={p.code}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-white/70">
                <Flag code={p.code} className="h-full w-full" />
              </span>
            </motion.div>
          ))}

          {/* Pakistan — larger, dominant, centred */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute inset-0 -m-2 rounded-full bg-[#6FC79A]/15 ring-2 ring-[#6FC79A]/30" />
            <span className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl ring-4 ring-[#6FC79A]/60">
              <Flag code="pk" className="h-full w-full" />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Region explorer (tabbed, editorial) ────────────────────────────────────
function RegionExplorer() {
  const [active, setActive] = useState(regions[0].id);
  const region = regions.find((r) => r.id === active) ?? regions[0];

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {regions.map((r) => {
          const isActive = r.id === active;
          return (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                isActive
                  ? "bg-[#2F7549] text-white border-[#2F7549] shadow-md"
                  : "bg-white text-[#3D4152] border-[#e2e0dc] hover:border-[#2F7549] hover:text-[#2F7549]"
              }`}
            >
              <Flag code={r.flags[0]} className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
              {r.short}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={region.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top row: image card · narrative · headline stats */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch mb-7">
            {/* Image card */}
            <div className="lg:col-span-4 relative min-h-[230px] rounded-2xl overflow-hidden">
              <Image src={region.image} alt={region.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15402A]/95 via-[#15402A]/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex items-center gap-1.5 mb-3">
                  {region.flags.map((f) => (
                    <Flag key={f} code={f} className="h-6 w-9 rounded-[3px] ring-1 ring-white/40 shadow" />
                  ))}
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">{region.name}</h3>
                <p className="text-[#8FD3AE] font-semibold text-sm mt-1.5 leading-snug">{region.tagline}</p>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-4 flex items-center">
              <p className="text-[15px] sm:text-base text-[#3D4152] leading-relaxed">{region.overview}</p>
            </div>

            {/* Headline stats */}
            <div className="lg:col-span-4 grid grid-cols-3 gap-3">
              {region.stats.map((s, i) => {
                const Icon = statIcons[i % statIcons.length];
                return (
                  <div
                    key={s.label}
                    className="flex flex-col rounded-xl border border-[#e2e0dc] bg-[#fafaf9] p-3.5 sm:p-4"
                  >
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#3E8F5E]/12 text-[#2F7549]">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden />
                    </span>
                    <p className="font-heading font-extrabold text-xl sm:text-2xl text-[#2F7549] leading-none">{s.value}</p>
                    <p className="mt-2 text-[11px] sm:text-xs text-[#6b7280] leading-snug">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom row: market table · breakdown + opportunities */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7">

          {/* Market table — desktop */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-[#e2e0dc]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#15402A] text-white">
                  {region.table.columns.map((c) => (
                    <th key={c} className="text-left px-5 py-3.5 font-semibold">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {region.table.rows.map((row, i) => (
                  <tr key={row.cells[0]} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f6f4]"}>
                    {row.cells.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-3.5 align-top ${
                          ci === 0
                            ? "font-semibold text-[#15402A]"
                            : ci === row.cells.length - 1
                            ? "text-[#2F7549] font-medium"
                            : "text-[#3D4152]"
                        }`}
                      >
                        {ci === 0 ? (
                          <span className="flex items-center gap-2.5">
                            {row.flag && <Flag code={row.flag} className="h-4 w-6 rounded-[2px] ring-1 ring-black/10 flex-shrink-0" />}
                            {cell}
                          </span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Market cards — mobile */}
          <div className="md:hidden space-y-3">
            {region.table.rows.map((row) => (
              <div key={row.cells[0]} className="rounded-xl border border-[#e2e0dc] bg-white p-4">
                <h4 className="font-semibold text-[#15402A] mb-2 flex items-center gap-2">
                  {row.flag && <Flag code={row.flag} className="h-4 w-6 rounded-[2px] ring-1 ring-black/10" />}
                  {row.cells[0]}
                </h4>
                <dl className="space-y-1.5 text-sm">
                  {row.cells.slice(1).map((cell, ci) => (
                    <div key={ci} className="flex justify-between gap-3">
                      <dt className="text-[#6b7280]">{region.table.columns[ci + 1]}</dt>
                      <dd className={`text-right ${ci === row.cells.length - 2 ? "text-[#2F7549] font-medium" : "text-[#3D4152]"}`}>{cell}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

            </div>

            {/* Right column — breakdown panel + opportunities */}
            <div className="lg:col-span-5 space-y-6">
              {region.extra && (
                <div className="rounded-xl border border-[#e2e0dc] bg-[#fafaf9] overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-[#e2e0dc]">
                    <h4 className="font-heading font-bold text-[#15402A] text-sm">{region.extra.title}</h4>
                  </div>
                  <dl>
                    {region.extra.rows.map((r, i) => {
                      const isTotal = i === region.extra!.rows.length - 1;
                      return (
                        <div
                          key={r.label}
                          className={`flex items-center justify-between px-5 py-3 ${
                            isTotal ? "border-t border-[#d8d6d2] bg-[#f3f2ef]" : "border-t border-[#ececea] first:border-t-0"
                          }`}
                        >
                          <dt className={`text-sm ${isTotal ? "font-semibold text-[#15402A]" : "text-[#3D4152]"}`}>{r.label}</dt>
                          <dd className="font-heading font-bold text-[#2F7549] text-sm">{r.value}</dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              )}

              <div className="rounded-xl border border-[#e2e0dc] bg-white p-5">
                <h4 className="font-heading font-bold text-[#15402A] text-sm mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#3E8F5E]" /> Best opportunities for Pakistani exporters
                </h4>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {region.opportunities.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-[#3D4152] leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-[#3E8F5E] mt-0.5 flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function GlobalTextileMarketClient() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <MarketHero />

      {/* ── Export potential ──────────────────────────────────────────── */}
      <ExportPotential />

      {/* ── Product segments / Our services ───────────────────────────── */}
      <section className="relative bg-[#F5F4F2]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="mb-5 inline-block rounded bg-[#3E8F5E]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2F7549]">
                  Our Services
                </span>
                <h2 className="font-heading text-3xl font-extrabold leading-[1.1] text-[#1a1f2e] sm:text-4xl lg:text-[2.6rem]">
                  Four product frontiers driving export growth
                </h2>
              </div>
              <p className="max-w-md text-[15px] leading-relaxed text-[#6b7280] lg:text-right">
                From raw cotton to readymade, our focus is clear — we support
                Pakistan&apos;s top textile &amp; apparel categories to become global leaders.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((seg, i) => (
              <AnimatedSection key={seg.title} delay={i * 0.08} animation="scale-in">
                <article className="flex h-full flex-col rounded-2xl border border-[#ececec] bg-white">
                  {/* Image + overlapping icon badge */}
                  <div className="relative">
                    <div className="relative h-44 overflow-hidden rounded-t-2xl">
                      <Image
                        src={seg.image}
                        alt={seg.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#15402A]">
                      <seg.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5 pt-8">
                    <h3 className="mb-3 font-heading text-lg font-bold leading-tight text-[#1a1f2e]">
                      {seg.title}
                    </h3>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2 text-sm text-[#3D4152]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3E8F5E]" />
                        <span>{seg.tags}</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#6b7280]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3E8F5E]" />
                        <span>{seg.desc}</span>
                      </li>
                    </ul>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Region explorer ───────────────────────────────────────────── */}
      <section id="regions" className="relative bg-white scroll-mt-24">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <DestinationBanner />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="mt-10">
              <RegionExplorer />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Export footprint, country by country ──────────────────────── */}
      <ExportFootprint />

      {/* ── Competitive landscape ─────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left — title block */}
            <AnimatedSection animation="slide-right" className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 mb-5">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#2F7549]">
                  Competitive Landscape
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-[#0F2C22] text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.08] tracking-tight">
                Why buyers
                <br />
                choose Pakistan
              </h2>

              {/* Competitors */}
              <div className="mt-7">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#9aa0a6]">
                  <Globe2 className="w-4 h-4 text-[#2F7549]" /> Competing against
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {competitors.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-2 rounded-full border border-[#e2e0dc] bg-[#f7f6f4] text-[#3D4152] text-xs font-medium px-3 py-1.5"
                    >
                      <Flag code={c.flag} className="h-3 w-[18px] rounded-[2px] ring-1 ring-black/10" />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right — advantage grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-9">
              {advantages.map((a, i) => {
                const Icon = advantageIcons[i] ?? ShieldCheck;
                return (
                  <AnimatedSection key={a.title} delay={(i % 3) * 0.08}>
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <Icon className="w-5 h-5 shrink-0 text-[#3E8F5E]" strokeWidth={1.7} aria-hidden />
                        <h3 className="font-heading font-bold text-[#0F2C22] text-base leading-snug">
                          {a.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#6b7280] leading-relaxed">{a.desc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Market-entry playbook ─────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left — playbook points */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
              {entrySteps.map((s, i) => {
                const Icon = playbookIcons[i] ?? ShieldCheck;
                return (
                  <AnimatedSection key={s.title} delay={(i % 3) * 0.08}>
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <Icon className="w-5 h-5 shrink-0 text-[#3E8F5E]" strokeWidth={1.7} aria-hidden />
                        <h3 className="font-heading font-bold text-[#0F2C22] text-base leading-snug">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#6b7280] leading-relaxed">{s.desc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Right — title block */}
            <AnimatedSection animation="slide-left" className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#2F7549]">
                  Exporter Playbook
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-[#0F2C22] text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.08] tracking-tight">
                How exporters win the next decade
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#3D4152]">
                Our playbook helps Pakistani exporters scale with clarity, compliance, and confidence.
              </p>
              <p className="mt-7 flex items-start gap-2 text-sm text-[#9aa0a6]">
                <Info className="h-4 w-4 shrink-0 mt-0.5 text-[#2F7549]" />
                <span>
                  <span className="font-semibold text-[#3D4152]">Source:</span> Pakistan Export
                  Market Report 2026–2030. Figures are indicative; refresh before final launch.
                </span>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GlobalCTA
        label="Work with UPTIB"
        title="Source from Pakistan, or grow your exports"
        subtitle="Tap into one of the world's leading textile origins — for buyers seeking dependable supply, and for manufacturers seeking global demand."
        primaryButtonText="Source from Pakistan"
        primaryButtonLink="/contact"
        secondaryButtonText="Grow your exports"
        secondaryButtonLink="/membership"
        image="/image/sprtswear-v1.jpg"
      />
    </main>
  );
}
