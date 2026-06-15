// Pakistan Textile Partners - Home page
"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Factory, ClipboardCheck, Ship, Globe, ShieldCheck, Headphones, Award, Leaf, Clock, UserRound } from "lucide-react";
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
  loading: () => <div className="py-20 bg-white" aria-busy="true"><div className="px-6 sm:px-10 lg:px-16 xl:px-20"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-96 bg-white rounded-2xl animate-pulse" />)}</div></div></div>,
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
  { id: 5, title: "Marketing & Sales", content: "Get your products in front of global buyers — professional profiles, market intelligence, B2B matchmaking and digital campaigns.", image: "/image/icons/seo.png", href: "/services/marketing-sales", color: "#3E8F5E" },
  { id: 6, title: "E-commerce & Warehousing", content: "Sell on Amazon and store close to customers — account setup, listings, FBA prep, warehousing, pick & pack and fulfilment.", image: "/image/icons/sale.png", href: "/services/ecommerce-warehouse", color: "#3E8F5E" },
  { id: 7, title: "Membership", content: "Join the supplier pool global buyers source from — Basic, Professional and Premium tiers, built for first-time and seasoned exporters.", image: "/image/icons/hired.png", href: "/membership", color: "#3E8F5E" },
  { id: 8, title: "Worldwide market access", content: "Reach the EU, USA, Middle East, UK and beyond — with Pakistan's GSP+ duty-free access into the EU built into your offer.", image: "/image/icons/startup.png", href: "/global-textile-market", color: "#3E8F5E" },
];

/* ─── Our Services — buyer-facing grid (International buyers → Pakistan supply) ─── */
const internationalBuyersData = [
  { id: 9, title: "Buying House (Outsourcing)", content: "Source the right Pakistani manufacturers for your order — vendor identification, sampling, price negotiation and production follow-up handled for you.", icon: Factory, topImage: "/image/buying-house.jpg", href: "/contact", color: "#2F7549" },
  { id: 10, title: "Quality Control", content: "Protect your brand with rigorous inspection — pre-production, in-line and final checks against your specs before anything ships.", icon: ClipboardCheck, topImage: "/image/quality-control.jpg", href: "/contact", color: "#2F7549" },
  { id: 11, title: "Compliance & Logistics", content: "Ship with confidence — social and technical compliance, documentation, consolidation and end-to-end freight to your destination.", icon: Ship, topImage: "/image/logistics-compliance.jpg", href: "/contact", color: "#2F7549" },
];

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgressBar />
      {/* 1. HERO */}
      <Hero />

      {/* 2. ABOUT */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden bg-white"
        aria-labelledby="about-heading"
      >
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #16291E 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionLabel label="Who we are" title="Bridging Pakistan's textile industry to the Global market via a UK-based platform." color="#2F7549" />
                <div className="content-body">
                  <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-5">
                    Pakistan Textile Partners is the dedicated textile arm of the UK–Pakistan Trade &amp; Investment Board with headquarter in London with a strategic hub in Faisalabad, Lahore, Sialkot &amp; Karachi, we bridge the gap between Pakistan&apos;s premier manufacturers/Exporter and the global marketplace.
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
        className="relative z-[1] pt-10 lg:pt-12 pb-0 scroll-mt-24 overflow-hidden bg-white"
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
              <p className="mt-10 text-[#5A5F72] text-base sm:text-lg leading-relaxed max-w-7xl mx-auto text-center">
                As a top ten global exporter and a powerhouse in cotton and home textiles, Pakistan possesses immense manufacturing capability. We unlock this potential for you. By professionalising your supply chain, optimising your digital commerce, and managing end-to-end logistics including targeted international marketing and strategic global warehousing. We provide Pakistani exporters seamless, frictionless access to major buyers across the UK, EU, USA, and the Middle East.
              </p>
            </div>

            {/* For International buyers */}
            <div id="for-international-buyers" className="scroll-mt-24 mt-20 lg:mt-24 relative overflow-hidden -mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
              {/* Background world map + dark overlay */}
              <div aria-hidden="true" className="absolute inset-0">
                <Image
                  src="/image/world-map-bg.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[#051a14]/92" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#04130f]/85 via-[#06231b]/80 to-[#020c0a]/92" />
              </div>
              <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto">
                  {/* TOP — hero copy + trust panel */}
                  <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
                    {/* Left: hero copy */}
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#6BCB93]/35 bg-[#6BCB93]/10 px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8FE3AD] backdrop-blur-sm">
                        <Globe className="w-3.5 h-3.5" strokeWidth={2} />
                        For International Buyers
                      </span>
                      <h3 className="mt-6 font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight text-white">
                        Your Trusted Sourcing Partner from{" "}
                        <span className="text-[#6BCB93]">Pakistan</span> to the World
                      </h3>
                      <div className="mt-5">
                        <p className="text-white/85 text-lg sm:text-xl font-semibold">Transparent. Secure. Reliable.</p>
                        <span aria-hidden="true" className="mt-3 block h-1 w-20 rounded-full bg-[#2F7549]" />
                      </div>
                      <p className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
                        We simplify global sourcing by connecting international buyers with Pakistan&apos;s top textile manufacturers. From product development to final delivery, we ensure complete{" "}
                        <span className="text-[#6BCB93] font-medium">transparency</span>,{" "}
                        <span className="text-[#6BCB93] font-medium">strict compliance</span>, and{" "}
                        <span className="text-[#6BCB93] font-medium">on-time shipments</span>.
                      </p>
                    </div>

                    {/* Right: Why Buyers Trust Us */}
                    <div className="rounded-2xl border border-white/10 bg-[#0b231b]/85 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-black/30">
                      <div className="flex items-center justify-between mb-5">
                        <h4 className="font-heading font-bold text-lg sm:text-xl text-white">Why Buyers Trust Us</h4>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#2F7549] shadow-md">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </span>
                      </div>
                      <ul className="divide-y divide-white/10">
                        {[
                          { icon: ShieldCheck, title: "Verified & Reliable", desc: "We work only with pre-vetted manufacturers." },
                          { icon: Headphones, title: "End-to-End Support", desc: "From sampling to shipment — we handle it all." },
                          { icon: Award, title: "Quality Assured", desc: "Rigorous in-line & final inspections for every order." },
                          { icon: Leaf, title: "Compliant & Ethical", desc: "We follow global standards and ethical practices." },
                        ].map(({ icon: TrustIcon, title, desc }) => (
                          <li key={title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                            <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-[#6BCB93]/15">
                              <TrustIcon className="w-5 h-5 text-[#6BCB93]" strokeWidth={1.8} />
                            </span>
                            <div>
                              <p className="font-bold text-white text-sm sm:text-base">{title}</p>
                              <p className="text-white/65 text-[13px] sm:text-sm leading-relaxed">{desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* MIDDLE — numbered cards */}
                  <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {internationalBuyersData.map((item, i) => {
                      const Icon = item.icon!;
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0b231b]/85 backdrop-blur-md shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#6BCB93]/40"
                        >
                          {/* number badge */}
                          <span className="absolute top-4 left-4 z-20 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#2F7549] text-white font-bold text-sm shadow-md">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {/* image */}
                          <div className="relative h-[190px] overflow-hidden">
                            <Image
                              src={item.topImage!}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b231b] via-[#0b231b]/40 to-transparent" />
                            {/* floating icon */}
                            <span className="absolute -bottom-7 left-6 z-20 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0b1a16] border border-white/10 shadow-lg">
                              <Icon className="w-6 h-6 text-[#6BCB93]" strokeWidth={1.8} />
                            </span>
                          </div>
                          {/* body */}
                          <div className="px-6 pb-6 pt-10">
                            <h4 className="font-heading font-bold text-lg sm:text-xl text-white leading-tight">{item.title}</h4>
                            <p className="mt-2 text-white/70 text-sm leading-relaxed">{item.content}</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-sm text-[#6BCB93]">
                              Learn more
                              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* BOTTOM — feature bar */}
                  <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b231b]/85 backdrop-blur-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                      {[
                        { icon: Globe, title: "Global Network", desc: "Access to top Pakistani textile manufacturers" },
                        { icon: ShieldCheck, title: "Secure & Transparent", desc: "Clear communication at every step" },
                        { icon: Clock, title: "On-Time Delivery", desc: "Reliable timelines, every time" },
                        { icon: UserRound, title: "Dedicated Support", desc: "Experienced team by your side" },
                      ].map(({ icon: FeatIcon, title, desc }) => (
                        <div key={title} className="flex items-center gap-3 p-5 lg:p-6">
                          <span className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-[#6BCB93]/15">
                            <FeatIcon className="w-5 h-5 text-[#6BCB93]" strokeWidth={1.8} />
                          </span>
                          <div>
                            <p className="font-bold text-white text-sm">{title}</p>
                            <p className="text-white/60 text-xs leading-snug">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)", backgroundSize: "48px 48px" }} />
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
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)", backgroundSize: "48px 48px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Export Signals" title="Pakistan's textile export, in numbers" body="Trade and market figures that frame Pakistan Textile Partners' work — sourced from the Pakistan Bureau of Statistics, the Pakistan Textile Council, and industry reporting." color="#8FD3AE" align="center" light />
            <ImpactStats />
          </AnimatedSection>
        </div>
      </section>

      {/* 10. TECH MARKET OVERVIEW — Market Intelligence */}
      <section
        className="relative z-[1] py-20 lg:py-28 overflow-hidden bg-white"
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
      <section className="relative z-[1] py-14 lg:py-20 overflow-hidden bg-white" aria-labelledby="network-heading">
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
      <BoardOfAdvisors dark />

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
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)", backgroundSize: "48px 48px" }} />
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
