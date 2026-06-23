import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Shirt, Dumbbell, Stethoscope, Scissors, Building2, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

/* ── Premium 3D-style isometric SVG illustrations for "Our Focus" section ── */
const PolicyIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pol1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#394F73"/>
        <stop offset="100%" stopColor="#394F73"/>
      </linearGradient>
      <linearGradient id="pol2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#394F73"/>
      </linearGradient>
      <linearGradient id="pol3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#394F73"/>
      </linearGradient>
      <filter id="polGlow">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    {/* Base platform - isometric */}
    <path d="M60 100L20 78V72L60 94L100 72V78L60 100z" fill="#5E7088" opacity="0.3"/>
    <path d="M60 94L20 72L60 50L100 72L60 94z" fill="url(#pol1)" opacity="0.15"/>
    {/* Building/pillar left */}
    <rect x="30" y="35" width="16" height="45" rx="2" fill="url(#pol2)" opacity="0.8"/>
    <rect x="32" y="38" width="12" height="8" rx="1" fill="#B3AA98" opacity="0.3"/>
    <rect x="32" y="49" width="12" height="8" rx="1" fill="#B3AA98" opacity="0.3"/>
    <rect x="32" y="60" width="12" height="8" rx="1" fill="#B3AA98" opacity="0.25"/>
    {/* Building/pillar right */}
    <rect x="74" y="42" width="16" height="38" rx="2" fill="url(#pol2)" opacity="0.8"/>
    <rect x="76" y="45" width="12" height="8" rx="1" fill="#B3AA98" opacity="0.3"/>
    <rect x="76" y="56" width="12" height="8" rx="1" fill="#B3AA98" opacity="0.3"/>
    <rect x="76" y="67" width="12" height="8" rx="1" fill="#B3AA98" opacity="0.25"/>
    {/* Central shield */}
    <path d="M60 12L42 22v18c0 12 8 22 18 26 10-4 18-14 18-26V22L60 12z"
      fill="url(#pol1)" stroke="#B3AA98" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M60 18L46 26v14c0 10 6.5 18 14 22 7.5-4 14-12 14-22V26L60 18z"
      fill="#78899B" fillOpacity="0.6" stroke="#B3AA98" strokeWidth="0.8"/>
    {/* Checkmark inside shield */}
    <path d="M52 36l6 6 12-12" stroke="#F6F2EA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#polGlow)"/>
    {/* Document pages floating */}
    <rect x="48" y="62" width="24" height="18" rx="2" fill="#78899B" stroke="#B3AA98" strokeWidth="0.8"/>
    <line x1="52" y1="67" x2="68" y2="67" stroke="#B3AA98" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="52" y1="71" x2="64" y2="71" stroke="#B3AA98" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    <line x1="52" y1="75" x2="60" y2="75" stroke="#B3AA98" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    {/* Glowing dots */}
    <circle cx="26" cy="30" r="2" fill="#B3AA98" opacity="0.6"/>
    <circle cx="95" cy="38" r="1.5" fill="#B3AA98" opacity="0.5"/>
    <circle cx="15" cy="55" r="1.5" fill="#78899B" opacity="0.4"/>
    <circle cx="105" cy="60" r="2" fill="#B3AA98" opacity="0.4"/>
  </svg>
);

const InnovationIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="inn1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#394F73"/>
        <stop offset="100%" stopColor="#394F73"/>
      </linearGradient>
      <linearGradient id="inn2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#394F73"/>
      </linearGradient>
      <linearGradient id="inn3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="50%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#B3AA98"/>
      </linearGradient>
      <radialGradient id="innGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#B3AA98" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#394F73" stopOpacity="0"/>
      </radialGradient>
      <filter id="innBlur">
        <feGaussianBlur stdDeviation="2.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    {/* Background glow */}
    <circle cx="60" cy="55" r="40" fill="url(#innGlow)"/>
    {/* Lightbulb body */}
    <path d="M60 14c-18 0-28 14-28 28 0 10 6 18 12 24 2 2 4 6 4 10h24c0-4 2-8 4-10 6-6 12-14 12-24 0-14-10-28-28-28z"
      fill="url(#inn1)" stroke="#B3AA98" strokeWidth="1.5"/>
    {/* Bulb glass reflection */}
    <path d="M48 36c0-8 5-16 14-18" stroke="#F6F2EA" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    {/* Filament glow */}
    <path d="M52 42c4-6 12-6 16 0" stroke="#B3AA98" strokeWidth="2.5" strokeLinecap="round" filter="url(#innBlur)"/>
    <path d="M55 42c2.5-3.5 7.5-3.5 10 0" stroke="#ECE5D8" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Light rays */}
    <line x1="60" y1="6" x2="60" y2="12" stroke="#B3AA98" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
    <line x1="30" y1="20" x2="35" y2="25" stroke="#B3AA98" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <line x1="90" y1="20" x2="85" y2="25" stroke="#B3AA98" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <line x1="22" y1="42" x2="28" y2="42" stroke="#B3AA98" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <line x1="98" y1="42" x2="92" y2="42" stroke="#B3AA98" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    {/* Bulb base */}
    <rect x="48" y="76" width="24" height="4" rx="1" fill="#B3AA98" opacity="0.8"/>
    <rect x="50" y="80" width="20" height="3" rx="1" fill="#78899B" opacity="0.7"/>
    <rect x="52" y="83" width="16" height="3" rx="1" fill="#647689" opacity="0.6"/>
    {/* Gear left */}
    <circle cx="22" cy="70" r="10" fill="url(#inn2)" fillOpacity="0.7" stroke="#B3AA98" strokeWidth="1"/>
    <circle cx="22" cy="70" r="5" fill="#5E7088" stroke="#B3AA98" strokeWidth="0.8"/>
    <rect x="19" y="58" width="6" height="4" rx="1" fill="#78899B"/>
    <rect x="19" y="78" width="6" height="4" rx="1" fill="#78899B"/>
    <rect x="10" y="67" width="4" height="6" rx="1" fill="#78899B"/>
    <rect x="30" y="67" width="4" height="6" rx="1" fill="#78899B"/>
    {/* Gear right */}
    <circle cx="98" cy="72" r="8" fill="url(#inn2)" fillOpacity="0.6" stroke="#B3AA98" strokeWidth="1"/>
    <circle cx="98" cy="72" r="4" fill="#78899B" stroke="#B3AA98" strokeWidth="0.8"/>
    <rect x="95.5" y="62.5" width="5" height="3.5" rx="1" fill="#78899B"/>
    <rect x="95.5" y="78" width="5" height="3.5" rx="1" fill="#78899B"/>
    <rect x="88.5" y="69.5" width="3.5" height="5" rx="1" fill="#78899B"/>
    <rect x="104" y="69.5" width="3.5" height="5" rx="1" fill="#78899B"/>
    {/* Circuit/connection lines */}
    <path d="M34 70h12" stroke="#B3AA98" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
    <path d="M74 72h14" stroke="#B3AA98" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
    {/* Sparkle dots */}
    <circle cx="40" cy="16" r="1.5" fill="#B3AA98" opacity="0.8"/>
    <circle cx="80" cy="14" r="1.5" fill="#B3AA98" opacity="0.8"/>
    <circle cx="16" cy="50" r="1" fill="#B3AA98" opacity="0.6"/>
    <circle cx="104" cy="48" r="1" fill="#B3AA98" opacity="0.6"/>
    {/* Stars */}
    <path d="M100 18l1.5 3 3 .5-2 2.2.5 3.3-3-1.5-3 1.5.5-3.3-2-2.2 3-.5z" fill="#B3AA98" opacity="0.7"/>
  </svg>
);

const MarketsIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mkt1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#394F73"/>
        <stop offset="100%" stopColor="#394F73"/>
      </linearGradient>
      <linearGradient id="mkt2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#394F73"/>
        <stop offset="100%" stopColor="#B3AA98"/>
      </linearGradient>
      <linearGradient id="mkt3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#394F73"/>
      </linearGradient>
      <radialGradient id="mktGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#B3AA98" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#394F73" stopOpacity="0"/>
      </radialGradient>
      <filter id="mktBlur">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    {/* Background glow */}
    <circle cx="60" cy="55" r="42" fill="url(#mktGlow)"/>
    {/* Globe */}
    <circle cx="60" cy="50" r="32" fill="#394F73" fillOpacity="0.4" stroke="url(#mkt1)" strokeWidth="2"/>
    <ellipse cx="60" cy="50" rx="32" ry="12" stroke="#647689" strokeWidth="0.8" opacity="0.35"/>
    <ellipse cx="60" cy="50" rx="12" ry="32" stroke="#647689" strokeWidth="0.8" opacity="0.35"/>
    <ellipse cx="60" cy="50" rx="24" ry="32" stroke="#647689" strokeWidth="0.5" opacity="0.2"/>
    {/* Continent shapes (abstract) */}
    <path d="M42 38c4-2 8 0 12-1s6-4 10-2c2 1 4 4 2 6s-6 2-8 4-2 6-6 6-6-2-8-4-4-6-2-9z" fill="#B3AA98" opacity="0.2"/>
    <path d="M62 55c3 0 6 2 10 1s6-3 8-1c1 2-1 5-3 6s-6 0-8 2-2 4-5 4-4-2-5-4 0-5 3-8z" fill="#647689" opacity="0.15"/>
    {/* Rising chart bars */}
    <rect x="26" y="78" width="10" height="22" rx="2" fill="url(#mkt2)" opacity="0.7"/>
    <rect x="40" y="72" width="10" height="28" rx="2" fill="url(#mkt2)" opacity="0.8"/>
    <rect x="54" y="65" width="10" height="35" rx="2" fill="url(#mkt1)" opacity="0.85"/>
    <rect x="68" y="58" width="10" height="42" rx="2" fill="url(#mkt1)" opacity="0.9"/>
    <rect x="82" y="50" width="10" height="50" rx="2" fill="#78899B"/>
    {/* Bar highlights */}
    <rect x="28" y="80" width="6" height="3" rx="1" fill="#ECE5D8" opacity="0.4"/>
    <rect x="42" y="74" width="6" height="3" rx="1" fill="#ECE5D8" opacity="0.4"/>
    <rect x="56" y="67" width="6" height="3" rx="1" fill="#ECE5D8" opacity="0.4"/>
    <rect x="70" y="60" width="6" height="3" rx="1" fill="#ECE5D8" opacity="0.4"/>
    <rect x="84" y="52" width="6" height="3" rx="1" fill="#ECE5D8" opacity="0.4"/>
    {/* Trend arrow */}
    <path d="M30 85L45 77L60 70L75 62L90 52" stroke="#B3AA98" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#mktBlur)"/>
    <circle cx="90" cy="52" r="4" fill="#B3AA98" stroke="#B3AA98" strokeWidth="1.5"/>
    <path d="M86 48l4 4 4-4" stroke="#B3AA98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 90 48)"/>
    {/* Currency symbols floating */}
    <text x="18" y="42" fill="#B3AA98" fontSize="10" fontWeight="bold" opacity="0.6">$</text>
    <text x="96" y="35" fill="#647689" fontSize="8" fontWeight="bold" opacity="0.5">€</text>
    <text x="105" y="70" fill="#B3AA98" fontSize="9" fontWeight="bold" opacity="0.5">£</text>
    {/* Sparkle dots */}
    <circle cx="20" cy="25" r="1.5" fill="#B3AA98" opacity="0.7"/>
    <circle cx="100" cy="22" r="1.5" fill="#B3AA98" opacity="0.6"/>
    <circle cx="12" cy="65" r="1" fill="#B3AA98" opacity="0.5"/>
  </svg>
);

export default function MembershipSection() {
  return (
    <div className="relative w-full">
      <section className="relative w-full overflow-hidden z-10 bg-[#F6F2EA]">
        {/* subtle dot texture */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #1A1A1A 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 sm:px-10 lg:px-16 xl:px-20">
          <motion.div
            className="w-full py-12 lg:py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            {/* Heading */}
            <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#394F73] inline-block w-fit mb-3">
                Made in Pakistan
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">
                Pakistani industries &amp; their best products
              </h2>
              <p className="mt-5 text-[#5A5F72] text-base sm:text-lg lg:text-xl leading-relaxed">
                A snapshot of what Pakistan&apos;s textile industries do best — from export-grade towelling and private-label apparel to performance sportswear, medical uniforms and full-service sourcing.
              </p>
            </div>

            {/* Cards — bento mosaic (mixed sizes), 8 tiles */}
            <div className="grid grid-cols-1 auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[250px] lg:gap-4">
              {[
                {
                  title: "Towels, bed & hotel linen",
                  tagline: "Towels, sheets, duvets & hotel linen",
                  image: "/image/textile/home/bedroom-collection/01.jpg",
                  icon: BedDouble,
                  accent: "#8C9AAB",
                  layout: "lg:col-start-1 lg:row-start-1 lg:col-span-2",
                },
                {
                  title: "Private-label apparel",
                  tagline: "OEM hoodies, shirts & uniforms",
                  image: "/image/textile/apparel/skirts-1.jpg",
                  icon: Shirt,
                  accent: "#DC2626",
                  layout: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
                },
                {
                  title: "Custom & sublimated sportswear",
                  tagline: "Gymwear, kits & teamwear",
                  image: "/image/textile/sportswear/perf-3.jpg",
                  icon: Dumbbell,
                  accent: "#A3AEBC",
                  layout: "lg:col-start-1 lg:row-start-2",
                },
                {
                  title: "Medical scrubs & uniforms",
                  tagline: "Scrubs, lab coats & patient gowns",
                  image: "/image/textile/healthcare/medical-uniform.jpg",
                  icon: Stethoscope,
                  accent: "#DC2626",
                  layout: "lg:col-start-2 lg:row-start-2",
                },
                {
                  title: "Fiber-to-garment sourcing",
                  tagline: "Factory-direct sourcing & QC",
                  image: "/image/textile/apparel/skirts-dresses/01.jpg",
                  icon: Scissors,
                  accent: "#8C9AAB",
                  layout: "lg:col-start-1 lg:row-start-3 lg:row-span-2",
                },
                {
                  title: "Hotel & hospital linen sourcing",
                  tagline: "Hotel & hospital linen, single source",
                  image: "/image/textile/healthcare/linen-1.jpg",
                  icon: Building2,
                  accent: "#A3AEBC",
                  layout: "lg:col-start-2 lg:row-start-3 lg:col-span-2",
                },
                {
                  title: "Denim & woven bottoms",
                  tagline: "Jeans, chinos & woven bottoms",
                  image: "/image/textile/apparel/denim-woven/denim-home.jpg",
                  icon: Shirt,
                  accent: "#8C9AAB",
                  layout: "lg:col-start-2 lg:row-start-4",
                },
                {
                  title: "Cotton yarn & greige fabric",
                  tagline: "Ring-spun yarns & greige cloth",
                  image: "/image/textile/home/dining-kitchen-collection/tablecloth-05.jpg",
                  icon: Layers,
                  accent: "#A3AEBC",
                  layout: "lg:col-start-3 lg:row-start-4",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href="/contact"
                    className={`group relative h-full overflow-hidden rounded-2xl shadow-md ${item.layout}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-110"
                    />
                    {/* darkening overlay — light, just enough for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* subtle bottom shade behind the text */}
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent" />

                    {/* centred icon badge */}
                    <div className="absolute left-1/2 top-[44%] flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                      <Icon className="size-6" strokeWidth={1.8} style={{ color: item.accent }} aria-hidden />
                    </div>

                    {/* bottom copy */}
                    <div className="absolute inset-x-0 bottom-0 p-5 pb-6">
                      <h3 className="font-heading text-lg font-bold leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[0.8rem] leading-snug text-white/80">
                        {item.tagline}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ───────────── WHAT DRIVES US — Separate exported component ───────────── */
export function WhatDrivesUs() {
  return (
    <section className="relative z-[1] py-20 lg:py-28 overflow-hidden bg-[#F6F2EA]">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1A1A1A 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Left Side: Header */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#394F73]">Our Focus</p>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] text-[#1A1A1A]">
                What Drives Us
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A5F72]">
                Three operating pillars sit beneath Pakistan Textile Partners&apos; work — quality assurance, global market access, and a vertically-integrated supplier network connecting Pakistan to the world.
              </p>
            </div>

            {/* Right Side: Cards */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: PolicyIcon,
                  title: "Quality & Compliance",
                  desc: "We help exporters meet the certifications and standards global buyers require — GOTS, OEKO-TEX, BCI, Sedex, WRAP and ISO — so Pakistani product is export-ready and trusted worldwide.",
                },
                {
                  icon: InnovationIcon,
                  title: "Global Market Access",
                  desc: "We connect Pakistani supply to buyers worldwide — the EU (with GSP+ duty-free access), the USA, the Middle East, the UK and beyond — through marketing, matchmaking, e-commerce and warehousing.",
                },
                {
                  icon: MarketsIcon,
                  title: "Vertical Integration",
                  desc: "A vetted network spanning cotton, spinning, weaving, knitting, dyeing, finishing and garmenting — so a single accountable partner manages every stage from yarn to your door.",
                },
              ].map((card) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group rounded-2xl bg-white border border-[#E5E7EB] shadow-sm p-6 hover:-translate-y-1 hover:shadow-xl hover:border-[#78899B]/20 transition-all duration-300 text-center"
                  >
                    <div aria-hidden className="flex justify-center group-hover:scale-110 transition-transform duration-500">
                      <CardIcon className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-2xl" />
                    </div>

                    <h3 className="mt-6 font-heading font-bold text-[#1A1A1A] text-base sm:text-lg xl:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[#5A5F72] text-sm leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
