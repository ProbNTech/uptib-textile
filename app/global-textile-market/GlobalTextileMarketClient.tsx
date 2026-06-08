"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  Globe2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  globalStats,
  segments,
  regions,
  europeFootprints,
  competitors,
  advantages,
  entrySteps,
} from "@/lib/data/textile-market-data";

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

// ─── Global opportunity stat strip ──────────────────────────────────────────
function GlobalStatsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="bg-[#064E3B] rounded-2xl p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {globalStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              {stat.prefix}
              {isInView ? <CountUp end={stat.end} duration={2} decimals={stat.decimals} /> : 0}
              {stat.suffix}
            </p>
            <p className="text-sm text-white/70 leading-snug">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-xs text-white/50 mt-7">
        Addressable destination markets — Pakistan Export Market Report 2026–2030. Figures are indicative third-party estimates.
      </p>
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
                  ? "bg-[#047857] text-white border-[#047857] shadow-md"
                  : "bg-white text-[#3D4152] border-[#e2e0dc] hover:border-[#047857] hover:text-[#047857]"
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
          {/* Editorial top: image + narrative */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
            <div className="relative min-h-[240px] rounded-2xl overflow-hidden">
              <Image src={region.image} alt={region.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/90 via-[#064E3B]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 mb-3">
                  {region.flags.map((f) => (
                    <Flag key={f} code={f} className="h-6 w-9 rounded-[3px] ring-1 ring-white/40 shadow" />
                  ))}
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">{region.name}</h3>
                <p className="text-[#6EE7B7] font-semibold text-sm mt-1">{region.tagline}</p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[#3D4152] leading-relaxed mb-5">{region.overview}</p>
              <div className="grid grid-cols-3 gap-4">
                {region.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-[#e2e0dc] bg-gradient-to-br from-[#10B981]/[0.07] to-transparent p-4">
                    <p className="font-heading font-extrabold text-xl text-[#047857] leading-none mb-1.5">{s.value}</p>
                    <p className="text-xs text-[#6b7280] leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market table — desktop */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-[#e2e0dc]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#064E3B] text-white">
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
                            ? "font-semibold text-[#064E3B]"
                            : ci === row.cells.length - 1
                            ? "text-[#047857] font-medium"
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
                <h4 className="font-semibold text-[#064E3B] mb-2 flex items-center gap-2">
                  {row.flag && <Flag code={row.flag} className="h-4 w-6 rounded-[2px] ring-1 ring-black/10" />}
                  {row.cells[0]}
                </h4>
                <dl className="space-y-1.5 text-sm">
                  {row.cells.slice(1).map((cell, ci) => (
                    <div key={ci} className="flex justify-between gap-3">
                      <dt className="text-[#6b7280]">{region.table.columns[ci + 1]}</dt>
                      <dd className={`text-right ${ci === row.cells.length - 2 ? "text-[#047857] font-medium" : "text-[#3D4152]"}`}>{cell}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Extra breakdown + opportunities */}
          <div className="grid lg:grid-cols-5 gap-6 mt-6">
            {region.extra && (
              <div className="lg:col-span-2 rounded-xl border border-[#e2e0dc] overflow-hidden">
                <div className="bg-[#f7f6f4] px-5 py-3 border-b border-[#e2e0dc]">
                  <h4 className="font-heading font-bold text-[#064E3B] text-sm">{region.extra.title}</h4>
                </div>
                <dl className="divide-y divide-[#e2e0dc]">
                  {region.extra.rows.map((r) => (
                    <div key={r.label} className="flex items-center justify-between px-5 py-3">
                      <dt className="text-[#3D4152] text-sm">{r.label}</dt>
                      <dd className="font-heading font-bold text-[#047857] text-sm">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            <div className={region.extra ? "lg:col-span-3" : "lg:col-span-5"}>
              <h4 className="font-heading font-bold text-[#064E3B] text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#10B981]" /> Best opportunities for Pakistani exporters
              </h4>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {region.opportunities.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-[#3D4152]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
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
      <PageHero
        label="UPTIB Market Intelligence"
        title="The Global Textile Market — and Pakistan's place in it"
        subtitle="The global textile market is valued at around US$1.2–1.3 trillion and projected toward ~US$2 trillion by 2034. This is where Pakistan — a top-10 exporter and world leader in cotton and home textiles — fits across the US, UK, Europe and the Gulf."
        video="banner"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="#regions">Explore markets</ShinyButton>
          <Button href="/membership" variant="glass">
            Grow your exports
          </Button>
        </div>
      </PageHero>

      {/* ── Overview + global opportunity ─────────────────────────────── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Pakistan's export potential"
              title="Among the world's leading textile & apparel exporters"
              subtitle="Pakistan's strengths span cotton-based textiles, knitwear, denim, home textiles, sportswear and emerging medical-textile capabilities — with the largest gains in diversifying toward higher-value products. Below is the addressable scale of its core destination markets."
              color="blue"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-10">
              <GlobalStatsStrip />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Product segments ──────────────────────────────────────────── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Category strengths"
              title="Four product frontiers driving export growth"
              subtitle="From commodity cotton toward higher-margin technical and medical textiles — the categories where Pakistan competes hardest and grows fastest."
              color="green"
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {segments.map((seg, i) => (
              <AnimatedSection key={seg.title} delay={i * 0.08} animation="scale-in">
                <article className="group h-full overflow-hidden rounded-2xl bg-white border border-[#e2e0dc] hover:shadow-xl transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={seg.image}
                      alt={seg.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/70 via-transparent to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 font-heading font-bold text-white text-lg leading-tight drop-shadow">
                      {seg.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#3D4152] leading-relaxed mb-4">{seg.blurb}</p>
                    <ul className="space-y-1.5">
                      {seg.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-[#6b7280]">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
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
            <SectionHeader
              label="Destination markets"
              title="Made in Pakistan, sold across the world"
              subtitle="Explore the scale of demand, Pakistan's current position and the best openings across its four core export regions."
              color="blue"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="mt-10">
              <RegionExplorer />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Europe country footprints ─────────────────────────────────── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Europe in detail"
              title="Pakistan's export footprint, country by country"
              subtitle="Beyond the headline markets, a fast-growing web of European corridors — many led by hospitality-grade home linens — already moves billions in Pakistani textiles each year."
              color="green"
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {europeFootprints.map((c, i) => (
              <AnimatedSection key={c.country} delay={(i % 3) * 0.08}>
                <div className="h-full flex flex-col rounded-2xl bg-white border border-[#e2e0dc] overflow-hidden hover:shadow-lg hover:border-[#10B981]/40 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                    <Flag code={c.flag} className="h-8 w-12 rounded-[3px] ring-1 ring-black/10 shadow-sm flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-lg text-[#064E3B] leading-tight">{c.country}</h3>
                      <p className="font-heading font-extrabold text-[#047857] text-sm">{c.value}</p>
                    </div>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-1.5 px-5 pb-3">
                    {c.growth && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#10B981]/10 text-[#047857] text-xs font-medium px-2.5 py-1">
                        <TrendingUp className="w-3 h-3" />
                        {c.growth}
                      </span>
                    )}
                    {c.textileShare && (
                      <span className="rounded-full bg-[#064E3B]/[0.06] text-[#3D4152] text-xs font-medium px-2.5 py-1">
                        {c.textileShare}
                      </span>
                    )}
                  </div>

                  <p className="px-5 text-sm text-[#6b7280] leading-relaxed mb-3">{c.note}</p>

                  {/* Lead segments */}
                  <dl className="mt-auto border-t border-[#eee] divide-y divide-[#f2f2f2]">
                    {c.segments.map((s) => (
                      <div key={s.label} className="flex items-center justify-between gap-3 px-5 py-2">
                        <dt className="text-[13px] text-[#3D4152]">{s.label}</dt>
                        <dd className="text-[13px] font-semibold text-[#047857] whitespace-nowrap">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Competitive landscape ─────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Competitive landscape"
              title="Why buyers choose Pakistan"
              subtitle="Pakistan competes primarily with China, Bangladesh, Vietnam, India and Türkiye — and wins on a distinctive stack of structural advantages."
              color="blue"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-[#6b7280] flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#047857]" /> Competing against:
              </span>
              {competitors.map((c) => (
                <span key={c.name} className="inline-flex items-center gap-2 rounded-full border border-[#e2e0dc] bg-[#f7f6f4] text-[#3D4152] text-sm font-medium px-4 py-1.5">
                  <Flag code={c.flag} className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" />
                  {c.name}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {advantages.map((a, i) => (
              <AnimatedSection key={a.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-[#e2e0dc] bg-gradient-to-br from-white to-[#f7f6f4] p-6">
                  <div className="w-11 h-11 rounded-xl bg-[#10B981]/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#047857]" />
                  </div>
                  <h3 className="font-heading font-bold text-[#064E3B] mb-2">{a.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market-entry playbook ─────────────────────────────────────── */}
      <section className="relative bg-[#064E3B] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.5]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-base font-bold uppercase tracking-[0.18em] text-[#6EE7B7] mb-3">
                Market-entry playbook
              </p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight mb-4">
                How exporters win the next decade
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Before entering any market, exporters should weigh pricing, compliance standards, logistics costs and
                partnership opportunities. Six moves consistently separate the winners.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {entrySteps.map((s, i) => (
              <AnimatedSection key={s.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-heading font-extrabold text-2xl text-[#4ade80] leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#6EE7B7]" />
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <p className="text-white/40 text-sm mt-10 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Source: Pakistan Export Market Report 2026–2030. Figures are indicative; refresh before final launch.
            </p>
          </AnimatedSection>
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
      />
    </main>
  );
}
