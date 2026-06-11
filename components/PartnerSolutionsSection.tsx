"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { partnerSolutions, type PartnerSolution } from "@/data/partner-solutions";

const showcase = partnerSolutions
  .filter((s) => s.featured)
  .sort((a, b) => a.order - b.order);

/* Light per-industry accent for the category chip */
const categoryAccent: Record<string, { chip: string; text: string; ring: string; dot: string }> = {
  "Home & Hospitality Textiles": { chip: "#EEF6F0", text: "#245C3A", ring: "#C2E9CF", dot: "#2F7549" },
  "Apparel & Knitwear":          { chip: "#EFF6FF", text: "#1E40AF", ring: "#BFDBFE", dot: "#2563EB" },
  "Sportswear & Activewear":     { chip: "#F0FDFA", text: "#115E59", ring: "#99F6E4", dot: "#0D9488" },
  "Healthcare Textiles":         { chip: "#ECFEFF", text: "#155E75", ring: "#A5F3FC", dot: "#0891B2" },
  "Sourcing & Buying House":     { chip: "#FFFBEB", text: "#92400E", ring: "#FDE68A", dot: "#F59E0B" },
  "Yarn & Fabric":               { chip: "#F0FDF4", text: "#166534", ring: "#BBF7D0", dot: "#16A34A" },
};

function getAccent(category: string) {
  return categoryAccent[category] || categoryAccent["Home & Hospitality Textiles"];
}

/* ───────────────────────── Product card ─────────────────────────
   One card per Pakistani industry — its flagship product, what it's
   best at, and the product photo. No company/partner framing.       */

function ProductCard({ item, index }: { item: PartnerSolution; index: number }) {
  const accent = getAccent(item.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_45px_-22px_rgba(4,120,87,0.50)]"
    >
      {/* Full-bleed vertical product photo */}
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Dark gradient so the overlaid text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

      {/* Industry badge */}
      <span
        className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest backdrop-blur-sm"
        style={{ background: `${accent.chip}E6`, color: accent.text, border: `1px solid ${accent.ring}` }}
      >
        <span className="size-1 rounded-full" style={{ background: accent.dot }} />
        {item.category}
      </span>

      {/* Text overlaid at the bottom of the image */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="font-heading font-extrabold text-white text-base leading-snug">{item.name}</h3>
        <p className="mt-1 text-[12px] font-semibold leading-snug text-white/90">{item.tagline}</p>
        <p className="mt-1.5 max-h-0 overflow-hidden text-[12px] leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

/* ───────────────────────── Main section ───────────────────────── */

export default function PartnerSolutionsSection() {
  if (showcase.length === 0) return null;

  return (
    <section
      className="relative z-[1] py-20 lg:py-28 bg-gradient-to-b from-[#EEF6F0] via-[#D7EADD] to-[#EEF6F0] overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #16291E 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <SectionHeader
            label="Made in Pakistan"
            title="Pakistani industries & their best products"
            subtitle="A snapshot of what Pakistan's textile industries do best — from export-grade towelling and private-label apparel to performance sportswear, medical uniforms and full-service sourcing."
            color="green"
          />

          <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {showcase.map((item, i) => (
              <ProductCard key={item.slug} item={item} index={i} />
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2F7549] hover:text-[#245C3A] transition-colors"
            >
              Explore all products
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
