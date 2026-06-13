"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  BedDouble,
  Shirt,
  Dumbbell,
  Stethoscope,
  Handshake,
  Layers,
  Factory,
  Truck,
  ArrowRight,
  Globe2,
  Network,
  Plus,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { textileManufacturers } from "@/data/textile-manufacturers";
import { homeStats, markets } from "@/data/textile";
import type { CompanyCategory, DirectoryCompany } from "@/data/companies";
import { cn } from "@/lib/utils";

const PX = "px-6 sm:px-10 lg:px-16 xl:px-20";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ── Sector metadata — ordered as the value chain reads ──────────── */
type SectorMeta = {
  key: CompanyCategory;
  short: string;
  icon: LucideIcon;
  tagline: string;
  /** Background photo for the sector mosaic tile. */
  image: string;
  /** Grid span for the mosaic bento layout (lg breakpoint). */
  span: string;
};

const sectors: SectorMeta[] = [
  {
    key: "Yarn & Fabric",
    short: "Yarn & Fabric",
    icon: Layers,
    tagline: "Spinning mills, yarn and woven & finished fabric.",
    image: "/image/textile/sectors/yarn.jpg",
    span: "",
  },
  {
    key: "Home & Hospitality Textiles",
    short: "Home Textiles",
    icon: BedDouble,
    tagline: "Bed linen, towels and hotel & hospital textiles.",
    image: "/image/textile/sectors/home.jpg",
    span: "lg:col-span-2",
  },
  {
    key: "Apparel & Knitwear",
    short: "Apparel",
    icon: Shirt,
    tagline: "Stylish, durable clothing for global markets.",
    image: "/image/textile/sectors/apparel.jpg",
    span: "",
  },
  {
    key: "Sportswear & Activewear",
    short: "Sportswear",
    icon: Dumbbell,
    tagline: "Custom teamwear, gymwear and performance kit.",
    image: "/image/textile/sectors/sportswear.jpg",
    span: "",
  },
  {
    key: "Healthcare Textiles",
    short: "Healthcare",
    icon: Stethoscope,
    tagline: "Scrubs, gowns and hospital linen to medical standards.",
    image: "/image/textile/sectors/healthcare.jpg",
    span: "",
  },
  {
    key: "Sourcing & Buying House",
    short: "Sourcing",
    icon: Handshake,
    tagline: "Buying houses that vet, audit and ship at scale.",
    image: "/image/textile/sectors/sourcing.jpg",
    span: "sm:col-span-2 lg:col-span-3",
  },
];

/* ── Value chain (fibre → freight) ───────────────────────────────── */
const valueChain: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Layers, title: "Fibre & Yarn", desc: "Cotton, blends and spinning" },
  { icon: Factory, title: "Fabric", desc: "Weaving, knitting & finishing" },
  { icon: Shirt, title: "Manufacturing", desc: "Cut-make-trim at scale" },
  { icon: Handshake, title: "Sourcing & QA", desc: "Buying houses & AQL audits" },
  { icon: Truck, title: "Global Export", desc: "Docs, freight & delivery" },
];

/* ── FAQs ────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What does Pakistan's textile industry produce?",
    a: "Pakistan spans the full textile value chain — from cotton, yarn and fabric through to finished home textiles, apparel and knitwear, sportswear, healthcare garments, and the sourcing houses that connect factories to buyers worldwide.",
  },
  {
    q: "Which sectors is Pakistan strongest in?",
    a: "Home and hospitality textiles — bed linen, terry towels and hotel & hospital linen — are Pakistan's flagship export category, built on a large cotton, yarn and fabric base. Apparel, sportswear (centred on the Sialkot hub) and healthcare textiles are fast-growing.",
  },
  {
    q: "Are the companies listed here members of Pakistan Textile Partners?",
    a: "This directory is a snapshot of companies operating across Pakistan's textile sectors, shown to illustrate the breadth of the industry. It does not indicate any company's membership status. If you'd like to join the supplier pool buyers source from, see the membership page.",
  },
  {
    q: "What is the GSP+ advantage?",
    a: "GSP+ is the European Union's preferential trade scheme that grants Pakistan duty-free access on a wide range of textile products into the EU — a meaningful price advantage for buyers sourcing from Pakistan.",
  },
  {
    q: "Do Pakistani manufacturers hold international certifications?",
    a: "Many do. Common standards across the industry include OEKO-TEX, GOTS, WRAP, SEDEX and ISO 9001, alongside AQL-based quality inspection. Specific certifications vary by company.",
  },
  {
    q: "How can I work with these companies or get listed?",
    a: "You can reach any company directly through their website. If you're a Pakistani textile manufacturer or sourcing house and want to join the supplier pool global buyers source from, explore membership or contact our team.",
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

const countFor = (key: CompanyCategory) =>
  textileManufacturers.filter((c) => c.category === key).length;

/* ── Company card (static — no hover effect) ─────────────────────── */
function CompanyCard({ company }: { company: DirectoryCompany }) {
  const [imgError, setImgError] = useState(false);
  const initials = company.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex flex-col rounded-xl border border-[#E8ECEA] bg-white p-5">
      <div className="flex items-center gap-3.5">
        {company.logoUrl && !imgError ? (
          <span className="flex h-10 w-[72px] shrink-0 items-center justify-center">
            <Image
              src={company.logoUrl}
              alt={company.name}
              width={144}
              height={80}
              className="max-h-10 w-auto object-contain"
              onError={() => setImgError(true)}
            />
          </span>
        ) : (
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#2F7549]/10 font-heading text-sm font-extrabold text-[#2F7549]">
            {initials}
          </span>
        )}
        <h4 className="font-heading text-[15px] font-bold leading-snug text-[#16291E]">
          {company.name}
        </h4>
      </div>

      <p className="mt-3.5 flex-1 text-sm leading-relaxed text-[#6B7280] line-clamp-3">
        {company.description}
      </p>

      {company.websiteUrl && (
        <a
          href={company.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-[#2F7549]"
        >
          Visit website
          <ArrowRight className="size-3.5" aria-hidden />
        </a>
      )}
    </div>
  );
}

export default function IndustriesClient() {
  const shouldReduceMotion = useReducedMotion();
  const populatedSectors = sectors.filter((s) => countFor(s.key) > 0);
  const totalCompanies = textileManufacturers.length;

  const [active, setActive] = useState<CompanyCategory | "all">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Industries"
        minHeightClass="min-h-[540px] md:min-h-[580px] lg:min-h-[620px]"
        title="Inside Pakistan's textile industry"
        subtitle="From the cotton fields of Punjab to the sportswear hub of Sialkot — explore the sectors that make Pakistan a top-ten global textile exporter, and the companies operating across each one."
        image="/image/hero-bg/pexels-cottonbro-6580549.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="#directory">Browse the directory</ShinyButton>
          <Button href="/membership" variant="glass" size="lg">
            Explore membership
          </Button>
        </div>
      </PageHero>

      {/* ── VALUE-CHAIN RIBBON ───────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className={PX}>
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2F7549]">
                Fibre to freight
              </p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-[#16291E] sm:text-3xl">
                One of the world&apos;s most complete textile value chains
              </h2>
            </div>

            <div className="relative mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-5">
              <div
                className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#2F7549]/30 to-transparent md:block"
                aria-hidden
              />
              {valueChain.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <span className="relative z-[1] inline-flex size-14 items-center justify-center rounded-2xl border border-[#2F7549]/15 bg-white text-[#2F7549] shadow-[0_10px_30px_-12px_rgba(4,120,87,0.4)]">
                      <Icon className="size-6" strokeWidth={1.6} aria-hidden />
                      <span className="absolute -right-1.5 -top-1.5 inline-flex size-5 items-center justify-center rounded-full bg-[#15402A] text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-4 font-heading text-[15px] font-bold text-[#16291E]">{step.title}</h3>
                    <p className="mt-1 text-xs leading-snug text-[#6B7280]">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTOR MOSAIC ────────────────────────────────────────── */}
      <section id="sectors" className="scroll-mt-24 bg-white pb-16 lg:pb-24">
        <div className={PX}>
          <AnimatedSection>
            <SectionLabel
              label="The textile landscape"
              title="Six sectors, one supply chain"
              body="Pakistan's textile industry spans the full value chain — from yarn and fabric to finished home textiles, apparel, sportswear and healthcare garments, joined by the sourcing houses that connect it to buyers worldwide."
              color="#2F7549"
              hideLine
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {sectors.map((s, i) => {
              const Icon = s.icon;
              const n = countFor(s.key);
              return (
                <motion.a
                  key={s.key}
                  href={`#sector-${slugify(s.key)}`}
                  onClick={() => setActive("all")}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={cn(
                    "group relative h-[260px] overflow-hidden rounded-2xl shadow-[0_16px_36px_-18px_rgba(8,19,13,0.45)] sm:h-[280px]",
                    s.span,
                  )}
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {/* Gradient + brand tint — darker at the base for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05100A] via-[#05100A]/70 to-[#05100A]/15" />
                  <div className="absolute inset-0 bg-[#0A1F16]/25 transition-colors duration-300 group-hover:bg-[#0A1F16]/10" />

                  {/* Top row: icon + count */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-sm">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    {n > 0 && (
                      <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {n} {n === 1 ? "company" : "companies"}
                      </span>
                    )}
                  </div>

                  {/* Bottom: name + tagline + arrow */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-heading text-xl font-bold leading-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]">
                      {s.key}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
                      {s.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8FD3AE]">
                      Explore sector
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#15402A] py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <div className={cn("relative", PX)}>
          <AnimatedSection>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionLabel
                  label="A global supplier"
                  title="An industry built for the world's buyers"
                  body="Pakistan supplies retailers, importers, hotel groups and brands across the markets where its textiles are in demand — backed by scale, certifications and the GSP+ duty advantage into the EU."
                  color="#8FD3AE"
                  light
                  hideLine
                  bodyClassName="!text-white/90"
                />
                <Button href="/global-textile-market" variant="glass" size="lg" showArrow>
                  Explore the global market
                </Button>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                  {homeStats.map((stat) => (
                    <div key={stat.label} className="border-l-2 border-[#3E8F5E]/40 pl-5">
                      <p className="mb-2 font-heading text-3xl font-extrabold leading-none text-white sm:text-4xl">
                        {stat.value}
                      </p>
                      <p className="text-[13px] leading-snug text-white/90">{stat.label}</p>
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

      {/* ── INDUSTRY DIRECTORY ───────────────────────────────────── */}
      <section id="directory" className="scroll-mt-24">
        {/* Header banner — text left, fabric image bleeding in from the right */}
        <div className="relative overflow-hidden border-b border-[#ECEFED] bg-white">
          <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden>
            <Image
              src="/image/warehouse.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="46vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent" />
          </div>
          <div className={cn("relative", PX, "py-16 lg:py-20")}>
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2F7549]">
                Industry Directory
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold leading-[1.1] text-[#16291E] sm:text-4xl lg:text-[2.8rem]">
                Companies across the value chain
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[#5A5F72]">
                A snapshot of the manufacturers, mills and sourcing houses operating across every
                stage of Pakistan&apos;s textile industry — the kind of producers that supply buyers
                worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="bg-white">
          <div className={cn(PX, "pt-10 pb-6 lg:pt-12 lg:pb-8")}>
            <div className="flex flex-wrap gap-2.5">
              <FilterTab label="All Categories" active={active === "all"} onClick={() => setActive("all")} />
              {populatedSectors.map((s) => (
                <FilterTab
                  key={s.key}
                  label={s.short}
                  active={active === s.key}
                  onClick={() => setActive(s.key)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sector rows — alternating light / dark-green bands */}
        {populatedSectors.map((s, i) => {
          if (active !== "all" && active !== s.key) return null;
          const Icon = s.icon;
          const dark = i % 2 === 1;
          const list = textileManufacturers.filter((c) => c.category === s.key);
          return (
            <div
              key={s.key}
              id={`sector-${slugify(s.key)}`}
              className={cn(
                "scroll-mt-24",
                dark ? "relative overflow-hidden bg-[#15402A]" : "bg-white",
              )}
            >
              {dark && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)",
                    backgroundSize: "48px 48px",
                  }}
                  aria-hidden
                />
              )}
              <div className={cn("relative", PX, "py-12 lg:py-14")}>
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45 }}
                  className="lg:grid lg:grid-cols-[248px_1fr] lg:gap-10"
                >
                  {/* Left: sector label */}
                  <div className="mb-6 lg:mb-0">
                    <span
                      className={cn(
                        "inline-flex size-8 items-center justify-center rounded-lg text-xs font-bold tabular-nums",
                        dark ? "bg-[#8FD3AE] text-[#0A1F16]" : "bg-[#15402A] text-white",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={cn(
                        "mt-5 mb-4 inline-flex size-[72px] items-center justify-center rounded-full border",
                        dark
                          ? "border-white/20 bg-white/10 text-[#8FD3AE]"
                          : "border-[#E4EAE6] bg-[#F4F7F5] text-[#2F7549]",
                      )}
                    >
                      <Icon className="size-8" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3
                      className={cn(
                        "font-heading text-lg font-bold leading-snug",
                        dark ? "text-white" : "text-[#16291E]",
                      )}
                    >
                      {s.key}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 max-w-[220px] text-sm leading-relaxed",
                        dark ? "text-white/70" : "text-[#6B7280]",
                      )}
                    >
                      {s.tagline}
                    </p>
                  </div>

                  {/* Right: company cards */}
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {list.map((company) => (
                      <CompanyCard key={company.slug} company={company} />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}

        {/* Closing band */}
        <div className="bg-white">
          <div className={cn(PX, "py-12 lg:py-16")}>
            <div className="relative overflow-hidden rounded-2xl bg-[#EEF2F0] px-7 py-8 sm:px-10">
              <div
                className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 opacity-[0.18] sm:block"
                aria-hidden
              >
                <div
                  className="h-40 w-56"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(60deg, #15402A 0 2px, transparent 2px 14px)",
                    maskImage: "radial-gradient(circle at 70% 50%, black, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(circle at 70% 50%, black, transparent 70%)",
                  }}
                />
              </div>
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-5">
                  <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2F7549] shadow-sm">
                    <Network className="size-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="font-heading text-xl font-extrabold leading-tight text-[#16291E] sm:text-2xl">
                    Building connections.
                    <br className="hidden sm:block" /> Weaving success.
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-[#6B7280]">
                  Join the supplier pool global buyers source from and put your products in front of
                  qualified demand worldwide.
                </p>
                <Button href="/membership" variant="primary" size="lg" showArrow className="shrink-0">
                  Join the network
                </Button>
              </div>
            </div>

            <p className="mt-4 text-xs text-[#9CA3AF]">
              Showing {totalCompanies} companies across {populatedSectors.length} sectors.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────── */}
      <section className="relative z-[1] overflow-hidden bg-white py-20 lg:py-28">
        <div className={cn("relative", PX)}>
          <AnimatedSection animation="blur-in">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionLabel
                  label="FAQs"
                  title="About Pakistan's textile industry"
                  body="Common questions about the sectors, standards and companies that make up Pakistan's textile landscape."
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
                      <p className="text-xs text-[#5A5F72]">Talk to our team or explore membership.</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7549]"
                    >
                      Talk to our team
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                    <Link
                      href="/membership"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5A5F72] hover:text-[#16291E]"
                    >
                      Explore membership
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {faqs.map((item, i) => {
                  const isOpen = openFaq === i;
                  const panelId = `industries-faq-panel-${i}`;
                  const buttonId = `industries-faq-button-${i}`;

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
                        className="px-4 pb-5 pl-[4.25rem] pr-12 leading-relaxed text-[#5A5F72] sm:px-5 sm:pl-[4.75rem]"
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
    </div>
  );
}

/* ── Filter tab ──────────────────────────────────────────────────── */
function FilterTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200",
        active
          ? "border-[#15402A] bg-[#15402A] text-white shadow-sm"
          : "border-[#D8E0DB] bg-white text-[#16291E] hover:border-[#2F7549]/50 hover:text-[#2F7549]",
      )}
    >
      {label}
    </button>
  );
}
