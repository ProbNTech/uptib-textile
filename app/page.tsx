// Pakistan Textile Partners - Home page
"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillButton } from "@/components/ui/PillButton";
import { Hero } from "@/components/Hero";
import { ProductsIcon, MentorshipIcon, MeetingSpaceIcon, StructureIcon } from "@/components/ui/premium-icons";
const WhatWeDoCards = dynamic(() => import("@/components/WhatWeDoCards"), {
  loading: () => <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6" aria-busy="true">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-64 bg-[#f7f8fa] rounded-xl animate-pulse" />)}</div>,
});
import { articles } from "@/data/news";
import { sponsorLogos } from "@/data/sponsor-logos";
const ImpactStats = dynamic(() =>
  import("@/components/ImpactStats").then((m) => ({ default: m.ImpactStats })),
  { loading: () => <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" aria-busy="true">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-[360px] bg-white/[0.06] rounded-xl animate-pulse" />)}</div> }
);
import { GlobalCTA } from "@/components/GlobalCTA";
import BoardOfAdvisors from "@/components/BoardOfAdvisors";
import { TextileMarketsCarousel } from "@/components/home/TextileMarketsCarousel";
import StatsCounter from "@/components/tech-market/StatsCounter";
import MembershipSection, { WhatDrivesUs } from "@/components/tech-market/MembershipSection";
import NewsCarousel from "@/components/NewsCarousel";
const PakistanTopCompaniesShowcase = dynamic(() => import("@/components/PakistanTopCompaniesShowcase"), {
  loading: () => <div className="py-20 bg-white" aria-busy="true"><div className="px-6 sm:px-10 lg:px-16 xl:px-20"><div className="h-48 bg-[#f7f8fa] rounded-xl animate-pulse" /></div></div>,
});
const PartnerSolutionsSection = dynamic(() => import("@/components/PartnerSolutionsSection"), {
  loading: () => <div className="py-20 bg-gradient-to-b from-[#EEF6F0] via-[#D7EADD] to-[#EEF6F0]" aria-busy="true"><div className="px-6 sm:px-10 lg:px-16 xl:px-20"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-96 bg-white rounded-2xl animate-pulse" />)}</div></div></div>,
});
import ExporterFaq from "@/components/home/ExporterFaq";
import ProductsSection from "@/components/home/ProductsSection";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

const homepageArticles = articles
  .filter((a) => a.published)
  .map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    date: a.displayDate,
    image: a.image,
    excerpt: a.excerpt,
  }));

const sponsorCarouselLogos = sponsorLogos.map((logo, i) => ({
  name: logo.alt,
  id: i + 1,
  src: logo.src,
}));

/* ─── Our Services — exporter-facing grid (Pakistani exporters → global markets) ─── */
const pakistanServicesData = [
  { id: 5, title: "Marketing & Sales", content: "Get your products in front of global buyers — professional profiles, market intelligence, B2B matchmaking and digital campaigns.", image: "/image/icons/seo.png", href: "/services/marketing", color: "#3E8F5E" },
  { id: 6, title: "E-commerce & Warehousing", content: "Sell on Amazon and store close to customers — account setup, listings, FBA prep, warehousing, pick & pack and fulfilment.", image: "/image/icons/sale.png", href: "/services/warehousing", color: "#3E8F5E" },
  { id: 7, title: "Membership", content: "Join the supplier pool global buyers source from — Basic, Professional and Premium tiers, built for first-time and seasoned exporters.", image: "/image/icons/hired.png", href: "/membership", color: "#3E8F5E" },
  { id: 8, title: "Global market access", content: "Reach the EU, USA, Middle East, UK and beyond — with Pakistan's GSP+ duty-free access into the EU built into your offer.", image: "/image/icons/startup.png", href: "/global-textile-market", color: "#3E8F5E" },
];

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgressBar />
      {/* 1. HERO */}
      <Hero />

      {/* 2. ABOUT */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(900px circle at 10% -10%, rgba(4,120,87,0.08), transparent 50%), radial-gradient(800px circle at 95% 110%, rgba(16,185,129,0.07), transparent 50%), #FFFFFF",
        }}
        aria-labelledby="about-heading"
      >
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #16291E 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionLabel label="Who we are" title="Pakistan's textiles, connected to the world — from a platform headquartered in London." color="#2F7549" />
                <div className="content-body">
                  <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-5">
                    Pakistan Textile Partners is the textile arm of the UK–Pakistan Trades & Investment Board — a London-based platform, with a Lahore office, that helps Pakistani textile manufacturers reach global markets and runs the services that take them there: marketing, e-commerce, warehousing and global market access.
                  </p>
                  <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-8">
                    Pakistan is one of the world's top-ten textile exporters and a global leader in cotton and home textiles. We organise that supply, professionalise it, and connect Pakistani exporters to buyers in the EU, USA, Middle East, UK and beyond.
                  </p>
                </div>
                <PillButton href="/global-textile-market">Pakistan's global position</PillButton>
              </div>
              <div className="relative">
                <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_25px_60px_-12px_rgba(4,120,87,0.15)]">
                  <Image src="/image/who-we-are.jpg" alt="Pakistani textile manufacturing and global export — Pakistan Textile Partners" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/60">
                    <p className="font-heading font-extrabold text-[#2F7549] text-lg leading-none">~$17.9bn</p>
                    <p className="text-[#5A5F72] text-xs mt-0.5">Pakistan textile exports, FY2025</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-xl bg-[#2F7549]/20 z-0" aria-hidden="true" />
                <div className="absolute -top-4 -right-4 w-36 h-36 rounded-full bg-[#3E8F5E]/20 z-0" aria-hidden="true" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. MEMBERSHIP */}
      <MembershipSection />

      {/* 4. OUR PRODUCTS — the four textile categories */}
      <ProductsSection />

      {/* 5. OUR SERVICES — exporter-facing grid */}
      <section
        id="services"
        className="relative z-[1] pt-10 lg:pt-12 pb-20 lg:pb-28 scroll-mt-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(1100px circle at 0% 0%, rgba(16,185,129,0.07), transparent 55%), radial-gradient(1000px circle at 100% 100%, rgba(4,120,87,0.08), transparent 55%), radial-gradient(700px circle at 50% 50%, rgba(255,255,255,0.6), transparent 70%), #F8FAFC",
        }}
        aria-labelledby="services-heading"
      >
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel
              label="Our Services"
              title="Grow your textile exports, worldwide"
              body="Four services that help Pakistani textile manufacturers reach buyers across the world — marketing, e-commerce and warehousing, membership, and global market access."
              color="#2F7549"
              align="center"
            />

            {/* For Pakistani exporters */}
            <div id="for-pakistani-companies" className="scroll-mt-24">
              <WhatWeDoCards
                items={pakistanServicesData}
                eyebrow="Services"
                audience="Pakistani exporters"
                context="Reaching global markets — marketing, e-commerce & warehousing, membership, and worldwide market access."
                accentColor="#3E8F5E"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. MORE FROM Pakistan Textile Partners */}
      <section
        className="relative z-[1] py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(1100px circle at 0% 0%, rgba(4,120,87,0.22), transparent 50%), radial-gradient(900px circle at 100% 100%, rgba(16,185,129,0.15), transparent 50%), radial-gradient(700px circle at 50% 50%, rgba(5,150,105,0.08), transparent 70%), #15402A",
        }}
        aria-labelledby="more-heading"
      >
        <Image src="/image/hero-bg/pexels-wasifmehmood997-15817294.jpg" alt="" aria-hidden="true" fill sizes="100vw" className="absolute inset-0 object-cover" />
        <div className="absolute inset-0 bg-[#15402A]/65" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Discover More" title="More from Pakistan Textile Partners" body="The products we trade, the markets we reach, membership, and the latest insights." color="#86efac" align="center" light />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: "/products", icon: ProductsIcon, color: "#2F7549", title: "Our Products", desc: "Bedding & linen, apparel, sportswear and healthcare textiles — the four categories we trade." },
                { href: "/global-textile-market", icon: MentorshipIcon, color: "#3E8F5E", title: "Global Textile Market", desc: "The size of the global textile opportunity, and Pakistan's place in it — with the key figures." },
                { href: "/membership", icon: MeetingSpaceIcon, color: "#3C8F5E", title: "Membership", desc: "Join the supplier pool global buyers source from — Basic, Professional and Premium tiers." },
                { href: "/news", icon: StructureIcon, color: "#245C3A", title: "News & Insights", desc: "Export guides and market insight for Pakistani textile exporters reaching global buyers." },
              ].map((card, index) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    className="h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                  <Link
                    href={card.href}
                    className="relative flex h-full flex-col rounded-2xl p-6 lg:p-7 overflow-hidden [transform:translateZ(0)]"
                    style={{
                      background: "linear-gradient(180deg, rgba(21,64,42,0.72) 0%, rgba(21,64,42,0.58) 100%)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Top accent gradient bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-70"
                      aria-hidden="true"
                      style={{ background: `linear-gradient(90deg, ${card.color}, ${card.color}80, transparent)` }}
                    />
                    <div className="relative flex flex-1 flex-col">
                      <div className="mb-4 flex items-center">
                        <div
                          className="rounded-xl p-2.5"
                          style={{
                            backgroundColor: `${card.color}22`,
                            boxShadow: `0 0 0 1px ${card.color}33 inset`,
                          }}
                        >
                          <CardIcon className="w-[100px] h-[100px]" />
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-heading font-bold text-white text-[1.15rem] mb-2">
                          {card.title}
                        </h3>
                        <ArrowUpRight
                          className="w-5 h-5 shrink-0 mt-1"
                          style={{ color: card.color }}
                        />
                      </div>
                      <p className="text-white/85 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </Link>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. PAKISTAN'S TOP AI & IT COMPANIES */}
      <PakistanTopCompaniesShowcase />

      {/* 6b. RAW MATERIAL — cotton field, fixed "shutter" parallax band */}
      <section
        className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-24 lg:py-32"
        style={{
          backgroundImage: "url('/image/cotton.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        aria-label="Raw material — cotton"
      >
        {/* Brand overlay for legibility — green-led, deep at the left where copy sits */}
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,33,22,0.92) 0%, rgba(21,64,42,0.78) 42%, rgba(21,64,42,0.32) 70%, rgba(21,64,42,0.12) 100%)",
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-[0.05]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="max-w-2xl">
              <SectionLabel
                label="Raw material"
                title="It starts in the cotton field"
                color="#8FD3AE"
                light
              />
              <p className="text-white/85 text-base sm:text-lg leading-relaxed">
                Pakistan is one of the world&apos;s leading cotton producers — the raw material behind
                its bedding, linen and apparel. That homegrown cotton, and the spinning and weaving
                built around it, is why Pakistan ranks among the world&apos;s top-ten textile exporters.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { value: "~39%", label: "of the global textile market is cotton-based" },
                  { value: "Top 10", label: "world textile exporter" },
                ].map((chip) => (
                  <div
                    key={chip.value}
                    className="flex items-baseline gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="font-heading font-extrabold text-white text-lg leading-none">{chip.value}</span>
                    <span className="text-white/75 text-xs sm:text-sm">{chip.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. PARTNER SOLUTIONS */}
      <PartnerSolutionsSection />

      {/* 8. WHAT DRIVES US */}
      <WhatDrivesUs />

      {/* 9. IMPACT STATS — Corridor Signals */}
      <section
        className="relative z-[1] py-20 lg:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(1000px circle at 100% 0%, rgba(16,185,129,0.20), transparent 50%), radial-gradient(900px circle at 0% 100%, rgba(16,185,129,0.13), transparent 50%), #15402A",
        }}
        aria-labelledby="impact-heading"
      >
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Export Signals" title="Pakistan's textile export, in numbers" body="Trade and market figures that frame Pakistan Textile Partners' work — sourced from the Pakistan Bureau of Statistics, the Pakistan Textile Council, and industry reporting." color="#8FD3AE" align="center" light />
            <ImpactStats />
          </AnimatedSection>
        </div>
      </section>

      {/* 10. TECH MARKET OVERVIEW — Market Intelligence */}
      <section
        className="relative z-[1] py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(900px circle at 5% 0%, rgba(4,120,87,0.08), transparent 50%), radial-gradient(800px circle at 95% 100%, rgba(6,95,70,0.06), transparent 50%), radial-gradient(700px circle at 50% 50%, rgba(16,185,129,0.04), transparent 60%), #F8FAFC",
        }}
        aria-labelledby="market-heading"
      >
        {/* TRIAL: decorative globe — revert if not kept */}
        <Image src="/image/globe.png" alt="" aria-hidden width={520} height={520} className="pointer-events-none select-none absolute -right-16 -top-10 w-[300px] lg:w-[440px] h-auto opacity-25 z-0" />
        <div className="relative z-[1] px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Market Intelligence" title="The global textile market — and Pakistan's place in it" color="#2F7549" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: 359, label: "US apparel market — the world's largest (2024)", color: "#2F7549", prefix: "$", suffix: "B" },
                    { value: 4.3, decimals: 1, label: "Pakistan's textile exports to the US (2025)", color: "#3E8F5E", prefix: "$", suffix: "B+" },
                    { value: 63.6, decimals: 1, label: "UK textile & apparel market (2025)", color: "#245C3A", prefix: "$", suffix: "B" },
                    { value: 62.7, decimals: 1, label: "European sportswear market (2025)", color: "#245C3A", prefix: "$", suffix: "B" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="group relative bg-white rounded-xl border border-[#E5E7EB] p-5 hover:shadow-md transition-all duration-300 overflow-hidden"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="absolute top-0 left-0 w-full h-[3px]" aria-hidden="true" style={{ background: `linear-gradient(to right, ${stat.color}, transparent)` }} />
                      <p className="font-heading font-extrabold text-2xl sm:text-3xl leading-tight mb-1" style={{ color: stat.color }}>
                        {stat.prefix}<StatsCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                      </p>
                      <p className="text-[#5A5F72] text-xs sm:text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3">
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-4">
                  The global textile market is commonly valued at around US$1.2–1.3 trillion, with forecasts toward US$1.6–2 trillion over the next decade. Asia-Pacific accounts for roughly half of it, and cotton is the single largest material at about 39% of the market.
                </p>
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed">
                  Pakistan is a global leader in cotton-based products and home textiles, exporting to the EU (its largest bloc), the USA (its largest single market), the Middle East, the UK and beyond — with GSP+ duty-free access into the EU a genuine competitive edge.
                </p>
                <p className="mt-4 text-[#9CA3AF] text-xs leading-relaxed">
                  Sources: Pakistan Bureau of Statistics (FY2025); Pakistan Business Council &amp; Pakistan Textile Council (EU/GSP+); Grand View Research and Precedence Research (global market &amp; cotton share).
                </p>
              </div>
            </div>

            <div className="mt-8">
              <TextileMarketsCarousel />
            </div>

            <AnimatedSection animation="fade-up">
              <div className="mt-10 relative overflow-hidden rounded-xl bg-gradient-to-r from-[#15402A] to-[#2F7549]">
                <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }} />
                <div className="relative px-8 sm:px-10 py-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex-1 max-w-2xl">
                      <h3 className="font-heading font-bold text-white text-xl sm:text-2xl leading-snug mb-2">Explore the global textile market in full</h3>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">Market sizing, Pakistan's global position, key export markets, and category strengths — with cited figures.</p>
                    </div>
                    <Link href="/global-textile-market" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[#15402A] text-sm font-bold hover:bg-[#3E8F5E] hover:text-white transition-colors duration-300 shadow-lg whitespace-nowrap">
                      Explore the market <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* PAKISTAN'S TEXTILE & TRADE INSTITUTIONS — horizontal auto-scrolling marquee */}
      <section className="relative z-[1] py-14 lg:py-20 overflow-hidden bg-[#F8FAFC]" aria-labelledby="network-heading">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #16291E 0.5px, transparent 0.5px)", backgroundSize: "28px 28px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionLabel label="Pakistan ecosystem" title="Pakistan's textile & trade institutions" body="Public and industry bodies that shape Pakistan's textile, export, and regulatory environment." color="#2F7549" align="center" />
          <div
            className="group relative mt-10 overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
              maskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
            }}
          >
            <div className="flex w-max items-center gap-10 sm:gap-14 animate-scroll group-hover:[animation-play-state:paused]">
              {[...sponsorCarouselLogos, ...sponsorCarouselLogos].map((logo, i) => (
                <div key={`${logo.id}-${i}`} className="flex h-16 w-[150px] flex-shrink-0 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. BOARD OF ADVISORS */}
      <BoardOfAdvisors />

      {/* 12. NEWS & INSIGHTS */}
      <section
        className="relative z-[1] py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(1000px circle at 0% 0%, rgba(134,239,172,0.13), transparent 50%), radial-gradient(900px circle at 100% 100%, rgba(4,120,87,0.18), transparent 50%), #15402A",
        }}
        aria-labelledby="news-heading"
      >
        <Image src="/image/pak-map.jpg" alt="" aria-hidden="true" fill sizes="100vw" className="absolute inset-0 object-cover" />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 flex flex-col justify-center">
                <SectionLabel label="Stay Informed" title="News & Insights" color="#86efac" light />
                <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                  Export guides, global market trends, and insight for Pakistani textile exporters reaching buyers worldwide.
                </p>
              </div>
              <div className="lg:col-span-8 w-full min-w-0">
                <NewsCarousel
                  articles={homepageArticles}
                  light
                  cta={<PillButton href="/news" variant="white">View all news & insights</PillButton>}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 13. FAQs */}
      <ExporterFaq />

      {/* GLOBAL CTA */}
      <GlobalCTA
        label="Work with Pakistan Textile Partners"
        title="Ready to take your textiles to the world?"
        subtitle="Grow your exports worldwide — Pakistan Textile Partners markets Pakistani textile manufacturers to global buyers and runs the services that get your products to market, from first enquiry to fulfilment."
        primaryButtonText="Become a member"
        primaryButtonLink="/membership"
        secondaryButtonText="Talk to our team"
        secondaryButtonLink="/contact"
        image="/image/bedding.jpg"
      />
    </div>
  );
}
