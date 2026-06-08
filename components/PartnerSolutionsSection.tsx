"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { LazyImage } from "@/components/ui/lazy-image";
import { partnerSolutions, type PartnerSolution } from "@/data/partner-solutions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const homepageSolutions = partnerSolutions
  .filter((s) => s.featured)
  .sort((a, b) => a.order - b.order);

const categoryAccent: Record<
  string,
  { dot: string; chip: string; chipText: string; chipRing: string; soft: string }
> = {
  HealthTech:    { dot: "#06B6D4", chip: "#ECFEFF", chipText: "#155E75", chipRing: "#A5F3FC", soft: "#CFFAFE" },
  "AI & Data":   { dot: "#059669", chip: "#ECFDF5", chipText: "#065F46", chipRing: "#A7F3D0", soft: "#D1FAE5" },
  Fintech:       { dot: "#10B981", chip: "#ECFDF5", chipText: "#065F46", chipRing: "#A7F3D0", soft: "#D1FAE5" },
  Cybersecurity: { dot: "#F43F5E", chip: "#FFF1F2", chipText: "#9F1239", chipRing: "#FECDD3", soft: "#FFE4E6" },
  Cloud:         { dot: "#8B5CF6", chip: "#F5F3FF", chipText: "#5B21B6", chipRing: "#DDD6FE", soft: "#EDE9FE" },
  Consulting:    { dot: "#F59E0B", chip: "#FFFBEB", chipText: "#92400E", chipRing: "#FDE68A", soft: "#FEF3C7" },
  // Textile categories
  "Home & Hospitality Textiles": { dot: "#047857", chip: "#ECFDF5", chipText: "#065F46", chipRing: "#A7F3D0", soft: "#D1FAE5" },
  "Apparel & Knitwear":          { dot: "#2563EB", chip: "#EFF6FF", chipText: "#1E40AF", chipRing: "#BFDBFE", soft: "#DBEAFE" },
  "Sportswear & Activewear":     { dot: "#0D9488", chip: "#F0FDFA", chipText: "#115E59", chipRing: "#99F6E4", soft: "#CCFBF1" },
  "Healthcare Textiles":         { dot: "#0891B2", chip: "#ECFEFF", chipText: "#155E75", chipRing: "#A5F3FC", soft: "#CFFAFE" },
  "Sourcing & Buying House":     { dot: "#059669", chip: "#ECFDF5", chipText: "#065F46", chipRing: "#A7F3D0", soft: "#D1FAE5" },
  "Yarn & Fabric":               { dot: "#16A34A", chip: "#F0FDF4", chipText: "#166534", chipRing: "#BBF7D0", soft: "#DCFCE7" },
};

function getAccent(category: string) {
  return categoryAccent[category] || categoryAccent["AI & Data"];
}

/* ───────────────────────── Branded product placeholder ─────────────────────────
   Mock-UI "product preview" tile — used when no real screenshot exists yet.
   Renders a fake app window (title bar, sidebar, content blocks) tinted to the
   member's category colour, with the partner logo set inside the mock window.   */

function ProductPlaceholder({
  solution,
  accent,
}: {
  solution: PartnerSolution;
  accent: ReturnType<typeof getAccent>;
}) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden p-4"
      style={{
        background: `linear-gradient(135deg, ${accent.soft} 0%, #ffffff 55%, ${accent.chip} 100%)`,
      }}
    >
      {/* Soft background dots */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle, ${accent.dot}33 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
        }}
      />
      {/* Decorative glow blobs */}
      <div
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-25 blur-2xl"
        style={{ background: accent.dot }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full opacity-20 blur-2xl"
        style={{ background: accent.dot }}
      />

      {/* Mock app window */}
      <div className="relative w-full max-w-[88%] rounded-lg bg-white shadow-xl border border-white/80 overflow-hidden">
        {/* Title bar */}
        <div
          className="flex items-center gap-1.5 px-3 py-2 border-b"
          style={{ borderColor: accent.chipRing, background: accent.chip }}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <span className="w-2 h-2 rounded-full bg-[#28C840]" />
          <div
            className="ml-3 flex-1 h-3.5 rounded-sm"
            style={{ background: `${accent.dot}1F` }}
          />
        </div>

        {/* Body: mini sidebar + content */}
        <div className="flex">
          {/* Sidebar */}
          <div
            className="hidden sm:flex flex-col gap-1.5 p-2 border-r w-[22%]"
            style={{ borderColor: accent.chipRing, background: `${accent.chip}80` }}
          >
            <div className="h-2 rounded-sm" style={{ background: `${accent.dot}40` }} />
            <div className="h-2 rounded-sm" style={{ background: `${accent.dot}20` }} />
            <div className="h-2 rounded-sm" style={{ background: `${accent.dot}20` }} />
            <div className="h-2 rounded-sm" style={{ background: `${accent.dot}20` }} />
            <div className="h-2 rounded-sm" style={{ background: `${accent.dot}20` }} />
          </div>

          {/* Content */}
          <div className="flex-1 p-3 sm:p-4 flex flex-col items-center justify-center">
            {/* Logo / monogram tile */}
            {solution.partnerLogo ? (
              <div className="relative w-14 h-14 rounded-xl bg-white shadow-md border border-[#E5E7EB] overflow-hidden flex items-center justify-center mb-2">
                <Image
                  src={solution.partnerLogo}
                  alt={solution.partnerName}
                  fill
                  sizes="56px"
                  className="object-contain p-2"
                />
              </div>
            ) : (
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black text-white shadow-md mb-2"
                style={{
                  background: `linear-gradient(135deg, ${accent.dot} 0%, ${accent.chipText} 100%)`,
                }}
              >
                {solution.partnerName.charAt(0)}
              </div>
            )}

            <p
              className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2 text-center"
              style={{ color: accent.chipText }}
            >
              {solution.name}
            </p>

            {/* Skeleton content rows */}
            <div className="w-full flex flex-col items-center gap-1">
              <div
                className="h-1.5 rounded-full w-[70%]"
                style={{ background: `${accent.dot}55` }}
              />
              <div
                className="h-1.5 rounded-full w-[55%]"
                style={{ background: `${accent.dot}33` }}
              />
              <div
                className="h-1.5 rounded-full w-[62%]"
                style={{ background: `${accent.dot}33` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Solution card (equal-weight) ───────────────────────── */

function SolutionCard({
  solution,
  index,
}: {
  solution: PartnerSolution;
  index: number;
}) {
  const accent = getAccent(solution.category);
  const hasRealImage =
    solution.image && solution.image !== "/image/placeholder.webp";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] transition-all duration-500"
      style={{
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px -2px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 25px 50px -12px ${accent.dot}25, 0 12px 24px -8px rgba(0,0,0,0.08), 0 0 0 1px ${accent.dot}20`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px -2px rgba(0,0,0,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Top accent line in the member's category colour */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{
          background: `linear-gradient(90deg, ${accent.dot}, ${accent.dot}40 60%, transparent)`,
        }}
      />

      {/* Member-forward header: partner logo + name lead the card */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        {solution.partnerLogo ? (
          <Link
            href={`/membership/directory#${solution.partnerSlug}`}
            className="relative w-11 h-11 rounded-xl bg-white border border-[#E5E7EB] overflow-hidden flex items-center justify-center shrink-0 hover:shadow-md transition-shadow"
          >
            <Image
              src={solution.partnerLogo}
              alt={solution.partnerName}
              fill
              sizes="44px"
              className="object-contain p-1.5"
            />
          </Link>
        ) : (
          <Link
            href={`/membership/directory#${solution.partnerSlug}`}
            className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-black text-white shrink-0 hover:shadow-md transition-shadow"
            style={{
              background: `linear-gradient(135deg, ${accent.dot} 0%, ${accent.chipText} 100%)`,
            }}
          >
            {solution.partnerName.charAt(0)}
          </Link>
        )}

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF] leading-none mb-1">
            Manufacturer
          </p>
          <Link
            href={`/membership/directory#${solution.partnerSlug}`}
            className="block text-[14px] font-extrabold text-[#1C1F2E] leading-tight truncate hover:text-[#15803d] transition-colors"
          >
            {solution.partnerName}
          </Link>
        </div>
      </div>

      {/* Category chip — own row below the header to avoid overlap */}
      <div className="px-5 pb-4">
        <span
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9.5px] font-bold uppercase tracking-widest"
          style={{
            background: accent.chip,
            color: accent.chipText,
            border: `1px solid ${accent.chipRing}`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: accent.dot }}
          />
          {solution.category}
        </span>
      </div>

      {/* Product image (or branded placeholder) */}
      <div className="relative mx-5 rounded-xl overflow-hidden border border-[#E5E7EB]">
        <div className="relative aspect-[16/10]">
          {hasRealImage ? (
            <LazyImage
              src={solution.image}
              fallback={solution.image}
              inView={true}
              alt={`${solution.name} by ${solution.partnerName}`}
              ratio={16 / 10}
              className="transition-transform duration-700 group-hover:scale-[1.04]"
              AspectRatioClassName="rounded-none border-0"
            />
          ) : (
            <ProductPlaceholder solution={solution} accent={accent} />
          )}
        </div>
      </div>

      {/* Product copy */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
        <h3 className="font-heading font-extrabold text-[#1C1F2E] text-[1.15rem] lg:text-[1.2rem] leading-snug mb-1.5">
          {solution.name}
        </h3>

        <p
          className="text-[13.5px] font-semibold leading-snug mb-3"
          style={{ color: accent.chipText }}
        >
          {solution.tagline}
        </p>

        <p className="text-[13.5px] text-[#5A5F72] leading-relaxed line-clamp-3 mb-0 min-h-[66px]">
          {solution.description}
        </p>
      </div>
    </motion.article>
  );
}

/* ───────────────────────── Main section ───────────────────────── */

export default function PartnerSolutionsSection() {
  if (homepageSolutions.length === 0) return null;

  return (
    <section
      className="relative z-[1] py-20 lg:py-28 bg-gradient-to-b from-[#ECFDF5] via-[#D1FAE5] to-[#ECFDF5] overflow-hidden"
      aria-labelledby="partner-solutions-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1C1F2E 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          {/* TODO(content): repoint `partner-solutions` data to real UPTIB member manufacturers
              (Textile_Company_Database.md) — framing re-skinned, card data still placeholder. */}
          <SectionHeader
            label="Built by our members"
            title="Our Member Manufacturers"
            subtitle="Capabilities and product ranges from UPTIB member manufacturers across the four textile categories. Click through to explore each partner directly."
            color="green"
          />

          {/* Single-line carousel — every member gets the same canvas */}
          <div className="relative mt-2">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={homepageSolutions.length > 4}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: ".partner-solutions-next",
                prevEl: ".partner-solutions-prev",
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1400: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {homepageSolutions.map((solution, i) => (
                <SwiperSlide key={solution.slug} className="!h-auto pb-4">
                  <SolutionCard solution={solution} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center justify-between mt-6">
              <Link
                href="/membership/directory"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#047857] hover:text-[#065F46] transition-colors"
              >
                Explore all member manufacturers
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <div className="flex gap-2.5">
                <button
                  aria-label="Previous manufacturers"
                  className="partner-solutions-prev group w-10 h-10 flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md hover:border-[#047857]/30 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#6B7280] transition-all duration-300 group-hover:text-[#047857] group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  aria-label="Next manufacturers"
                  className="partner-solutions-next group w-10 h-10 flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md hover:border-[#047857]/30 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#6B7280] transition-all duration-300 group-hover:text-[#047857] group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
