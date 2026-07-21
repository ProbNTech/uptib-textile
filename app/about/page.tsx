import type { Metadata } from "next";
import Image from "next/image";
import {
  Target, Eye, Compass, CheckCircle2, Globe2,
  Megaphone, Search, ShieldCheck, Truck, MapPin, Phone,
} from "lucide-react";
import { GlobalCTA } from "@/components/GlobalCTA";
import { WorkShowcase } from "@/components/WorkShowcase";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import BoardOfAdvisors from "@/components/BoardOfAdvisors";
import ExporterFaq from "@/components/home/ExporterFaq";
import { site } from "@/data/site";
import { homeStats } from "@/data/textile";
import { aboutFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "About Pak Textiles Global Partners",
  description:
    "The trusted bridge for UK-Pakistan textile trade, connecting Pakistan's manufacturers and exporters with buyers worldwide.",
  alternates: { canonical: "/about" },
};

/* ── Content model for the alternating Mission / Vision / Story blocks.
   `dark` blocks render on the primary deep-green background. ── */
const pillars = [
  {
    id: "mission",
    eyebrow: "Our Mission",
    icon: Target,
    dark: false,
    title: "Connecting Pakistan's textile makers to the world",
    body:
      "To connect Pakistan's textile manufacturing to buyers around the world by marketing the supply, sourcing the demand, and giving both sides a single accountable partner from first enquiry to final delivery.",
    points: [
      "Marketing the supply to global buyers",
      "Sourcing the demand for Pakistani mills",
      "One accountable partner, end to end",
      "Quality controlled on the ground",
    ],
    images: [
      { src: "/image/about/mission-spinning.jpg", alt: "Soft cotton yarn cones in natural light" },
      { src: "/image/about/mission-bedroom.jpg", alt: "A finished bedroom dressed in soft home textiles" },
    ],
    imageSide: "left" as const,
  },
  {
    id: "vision",
    eyebrow: "Our Vision",
    icon: Eye,
    dark: true,
    title: "Pakistan's textiles: visible, credible, reachable",
    body:
      "To be the trusted bridge for UK-Pakistan textile trade, making Pakistan's world-class cotton, home textiles, apparel and institutional textiles visible, credible and reachable to buyers everywhere, while helping Pakistani exporters grow into global markets.",
    points: [
      "World-class cotton and home textiles, made visible",
      "Growth into the EU, Americas, Middle East & beyond",
      "Certified, traceable, sustainable supply",
      "The trusted bridge for UK-Pakistan trade",
    ],
    images: [
      { src: "/image/about/vision-bedroom.jpg", alt: "An elegant bedroom styled with home textiles in brand-green tones" },
      { src: "/image/about/vision-weave.jpg", alt: "Teal and natural threads woven on a loom" },
    ],
    imageSide: "right" as const,
  },
  {
    id: "story",
    eyebrow: "Our Story",
    icon: Compass,
    dark: false,
    title: "The textile division of UPTIB",
    body:
      "Pak Textiles Global Partners is a London-based platform for UK-Pakistan textile trade and the textile division of the UK-Pakistan Trade and Investment Board (UPTIB). We act as a trusted bridge between Pakistani manufacturing and global demand, marketing the supply, sourcing the demand, and standing as one accountable partner to both.",
    points: [
      "Born from the UK-Pakistan Trade & Investment Board",
      "Offices in London and Lahore",
      "A vetted network across every textile category",
      "Built on accountability to both sides",
    ],
    images: [
      { src: "/image/about/story-loom.jpg", alt: "Cloth being woven by hand on a traditional wooden loom" },
      { src: "/image/about/story-spools.jpg", alt: "A wall of colourful thread spools in a textile workshop" },
    ],
    imageSide: "left" as const,
  },
];

/* ── How-we-work process strip ── */
const process = [
  { icon: Megaphone, title: "Market", desc: "We make Pakistani mills visible to buyers worldwide." },
  { icon: Search, title: "Source", desc: "We match demand to a vetted, profiled supplier network." },
  { icon: ShieldCheck, title: "Inspect", desc: "Independent, multi-stage quality control to your AQL." },
  { icon: Truck, title: "Deliver", desc: "Freight, customs and documentation, handled end to end." },
];

/* ── Small reusable bits ─────────────────────────────────────────── */
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-3 text-[12px] font-bold uppercase tracking-[0.2em] ${dark ? "text-[#B3AA98]" : "text-[#394F73]"}`}>
      {children}
    </p>
  );
}

/** A two-image overlapping collage matching the reference design. */
function Collage({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* Soft brand glow behind */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[#78899B]/10 blur-2xl" />
      {/* Back image */}
      <div className="absolute right-0 top-0 h-[72%] w-[68%] overflow-hidden rounded-[1.5rem] shadow-lg ring-1 ring-[#1A1A1A]/10">
        <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" sizes="40vw" />
      </div>
      {/* Front image, overlapping lower-left */}
      <div className="absolute bottom-0 left-0 h-[64%] w-[56%] overflow-hidden rounded-[1.5rem] border-4 border-white shadow-[0_24px_50px_-20px_rgba(57, 81, 115,0.5)]">
        <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" sizes="32vw" />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* ── 1. HERO — split, light, with rotating brand seal ───────── */}
      <section className="relative overflow-hidden bg-white">
        <Container className="relative sec-y">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <AnimatedSection animation="slide-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#78899B]/30 bg-[#78899B]/10 px-4 py-1.5">
                <Globe2 className="h-4 w-4 text-[#394F73]" strokeWidth={1.8} />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#394F73]">About Us</span>
              </div>
              <h1 className="mt-5 font-heading text-[2.4rem] font-extrabold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-[3rem] lg:text-[3.4rem]">
                Bridging Pakistan&rsquo;s textiles to the world
              </h1>
              <p className="mt-6 max-w-xl text-[16px] leading-[1.85] text-[#4B5563]">
                Pak Textiles Global Partners is the trusted bridge for UK-Pakistan textile
                trade, connecting Pakistan&rsquo;s manufacturers and exporters with buyers
                worldwide. We market the supply, source the demand, and stand as one accountable
                partner to both.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <ShinyButton href="/membership#apply">Apply for Membership</ShinyButton>
                <Button href="/contact" variant="secondary" showArrow>Contact Us</Button>
              </div>
            </AnimatedSection>

            {/* Right — image with rotating seal */}
            <AnimatedSection animation="slide-right" delay={0.1}>
              <div className="relative mx-auto max-w-[420px]">
                <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(57, 81, 115,0.5)] ring-1 ring-[#1A1A1A]/10">
                  <Image
                    src="/image/about/hero-bedlinen.jpg"
                    alt="Premium bed linen styled with soft pillows and a draped duvet"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#394F73]/20 to-transparent" />
                </div>

                {/* Rotating brand seal */}
                <div className="absolute -bottom-7 -left-7 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-[#1A1A1A]/10 sm:h-36 sm:w-36">
                  <svg viewBox="0 0 200 200" className="h-full w-full animate-spin [animation-duration:22s]">
                    <defs>
                      <path id="sealPath" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                    </defs>
                    <text fill="#78899B" fontSize="14.5" fontWeight="700" letterSpacing="3.5">
                      <textPath href="#sealPath" startOffset="0%">
                        PAK TEXTILES GLOBAL PARTNERS · TRUSTED ·
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-[#1A1A1A] sm:h-16 sm:w-16">
                    <Globe2 className="h-7 w-7 text-[#B3AA98]" strokeWidth={1.6} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── 2. CENTERED STATEMENT ──────────────────────────────────── */}
      <section className="bg-[#F6F2EA]">
        <Container className="sec-y">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <Eyebrow>Who we are</Eyebrow>
            <p className="font-heading text-[1.6rem] font-bold leading-[1.45] text-[#1A1A1A] sm:text-[2rem] sm:leading-[1.4]">
              Pakistan is one of the world&rsquo;s top-ten textile exporters and a global leader in{" "}
              <span className="text-[#394F73]">cotton and home textiles</span>. We make that capability{" "}
              <span className="text-[#394F73]">visible, credible and reachable</span>, helping
              buyers source dependable product on-spec and on-time, and helping Pakistani exporters{" "}
              <span className="text-[#394F73]">reach markets worldwide</span>.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── 3. STATS BAND — primary deep green ─────────────────────── */}
      <section className="relative overflow-hidden bg-[#394F73]">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <Container className="relative sec-y">
          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
            {homeStats.map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                delay={i * 0.08}
                className={`px-4 text-center ${i !== 0 ? "lg:border-l lg:border-white/15" : ""}`}
              >
                <p className="font-heading text-3xl font-extrabold text-[#B3AA98] sm:text-[2.6rem] sm:leading-tight">
                  {stat.value}
                </p>
                <p className="mx-auto mt-3 max-w-[15rem] text-[13.5px] leading-[1.6] text-white/70">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4–6. MISSION / VISION / STORY ──────────────────────────── */}
      {pillars.map((p) => {
        const Icon = p.icon;
        const imageLeft = p.imageSide === "left";
        return (
          <section
            key={p.id}
            id={p.id}
            className={p.dark ? "relative overflow-hidden bg-[#394F73]" : "bg-white"}
          >
            {p.dark && (
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)",
                  backgroundSize: "48px 48px",
                }}
                aria-hidden
              />
            )}
            <Container className="relative sec-y">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Image collage */}
                <AnimatedSection
                  animation={imageLeft ? "slide-left" : "slide-right"}
                  className={imageLeft ? "lg:order-1" : "lg:order-2"}
                >
                  <Collage images={p.images} />
                </AnimatedSection>

                {/* Copy + checklist */}
                <AnimatedSection
                  animation={imageLeft ? "slide-right" : "slide-left"}
                  className={imageLeft ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${
                        p.dark ? "bg-white/10 ring-white/20" : "bg-[#78899B]/10 ring-[#78899B]/20"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${p.dark ? "text-[#B3AA98]" : "text-[#394F73]"}`} strokeWidth={1.7} />
                    </span>
                    <Eyebrow dark={p.dark}>{p.eyebrow}</Eyebrow>
                  </div>
                  <h2 className={`font-heading text-[1.7rem] font-bold leading-[1.25] sm:text-[2rem] ${p.dark ? "text-white" : "text-[#1A1A1A]"}`}>
                    {p.title}
                  </h2>
                  <p className={`mt-5 text-[15.5px] leading-[1.85] ${p.dark ? "text-white/75" : "text-[#4B5563]"}`}>
                    {p.body}
                  </p>
                  <ul className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                    {p.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#394F73]" strokeWidth={2} />
                        <span className={`text-[14.5px] leading-[1.6] ${p.dark ? "text-white/85" : "text-[#3D4152]"}`}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            </Container>
          </section>
        );
      })}

      {/* ── 7. HOW WE WORK ─────────────────────────────────────────── */}
      <section className="bg-white">
        <Container className="sec-pt-tight sec-pb">
          <AnimatedSection className="mx-auto mb-6 max-w-2xl text-center">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="font-heading text-[1.9rem] font-bold leading-[1.2] text-[#1A1A1A] sm:text-[2.4rem]">
              One accountable partner, from mill to door
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.8] text-[#5A5F72]">
              We follow a transparent, end-to-end process, marketing the supply, sourcing the
              demand, controlling quality on the ground and moving the goods, so a low-cost origin
              becomes a low-hassle one.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" className="mx-auto max-w-5xl">
            <WorkShowcase poster="/videos/banner-poster.jpg" video="/videos/banner.mp4" />
          </AnimatedSection>

          {/* Process strip */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <AnimatedSection key={step.title} delay={i * 0.08} className="text-center">
                  <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A1A1A] text-white shadow-lg">
                    <StepIcon className="h-6 w-6 text-[#B3AA98]" strokeWidth={1.6} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#78899B] text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-[1.05rem] font-semibold text-[#1A1A1A]">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-[14rem] text-[14px] leading-[1.6] text-[#5A5F72]">
                    {step.desc}
                  </p>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 8. BOARD OF ADVISORS (shared with home) + offices ──────── */}
      <BoardOfAdvisors dark />

      <section className="bg-[#F6F2EA] sec-y">
        <Container>
          <AnimatedSection className="mx-auto mb-10 max-w-2xl text-center">
            <Eyebrow>Where we are</Eyebrow>
            <h2 className="font-heading text-[1.6rem] font-bold leading-[1.2] text-[#1A1A1A] sm:text-[2rem]">
              Offices in the UK and Pakistan
            </h2>
          </AnimatedSection>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {site.offices.map((office, i) => (
              <AnimatedSection key={office.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#F6F2EA] ring-1 ring-[#ECE5D8]">
                      <MapPin className="h-5 w-5 text-[#394F73]" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-heading text-[1.05rem] font-semibold text-[#1A1A1A]">{office.label}</h3>
                      <p className="mt-1.5 text-[14.5px] leading-[1.65] text-[#3D4152]">{office.address}</p>
                      <a
                        href={office.phoneHref}
                        className="mt-3 inline-flex items-center gap-2 text-[14.5px] font-medium text-[#3D4152] transition-colors hover:text-[#394F73]"
                      >
                        <Phone className="h-4 w-4 flex-shrink-0 text-[#394F73]" strokeWidth={1.7} />
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 9. FAQs ────────────────────────────────────────────────── */}
      <ExporterFaq
        faqs={aboutFaqs}
        label="FAQs"
        title="About Pak Textiles Global Partners: your questions answered"
        body="The questions buyers and manufacturers ask us most about who we are and how we work."
      />

      <GlobalCTA
        label="Join Us"
        title="Ready to Be Part of UK-Pakistan Textile Trade?"
        subtitle="Join Pak Textiles Global Partners and connect with the manufacturers, exporters and buyers driving textile trade between Pakistan and the world."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        image="/image/textile/products/bedding-linen.jpg"
      />
    </div>
  );
}
