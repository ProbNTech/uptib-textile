"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, CheckCircle2, ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { SubCategoryGallery, type GalleryImage } from "@/components/products/SubCategoryGallery";
import { getSubCategory } from "@/data/textile";
import { cn } from "@/lib/utils";

const PX = "px-6 sm:px-10 lg:px-16 xl:px-20";
const SERIF = "font-[family-name:var(--font-playfair)]";

export default function SubCategoryClient({ slug, sub }: { slug: string; sub: string }) {
  const shouldReduceMotion = useReducedMotion();
  const match = getSubCategory(slug, sub);
  if (!match) notFound();
  const { category, group } = match;

  /* Rich image set for this sub-category (falls back to the showcase mosaic set). */
  const gallery: GalleryImage[] = group.gallery ?? group.images;
  const heroImage = gallery[0]?.src ?? category.image;
  const intro = group.pageIntro ?? group.desc;

  /* Sibling sub-categories within the same parent category. */
  const siblings = (category.showcase?.groups ?? []).filter((g) => g.slug !== group.slug);

  return (
    <div className="bg-[#F7F3EA]">
      {/* ── HERO — full-bleed lifestyle photo, editorial caption (light/soft) ── */}
      <section className="relative h-[64vh] min-h-[480px] w-full overflow-hidden">
        <Image src={heroImage} alt={gallery[0]?.alt ?? group.name} fill priority className="object-cover" sizes="100vw" />
        {/* soft bottom scrim only — keeps the top of the image bright and airy */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A140E]/75 via-[#1A140E]/15 to-[#1A140E]/10" />

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className={cn("absolute top-6 left-0 right-0 z-10", PX)}
        >
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-white/85">
            <li><Link href="/products" className="transition-colors hover:text-white">Products</Link></li>
            <li aria-hidden><ChevronRight className="size-3.5 text-white/50" /></li>
            <li><Link href={`/products/${category.slug}`} className="transition-colors hover:text-white">{category.name}</Link></li>
            <li aria-hidden><ChevronRight className="size-3.5 text-white/50" /></li>
            <li className="text-white" aria-current="page">{group.name}</li>
          </ol>
        </nav>

        {/* Caption */}
        <div className={cn("absolute bottom-0 left-0 right-0 z-10 pb-10 sm:pb-14", PX)}>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E7DECB]">
              {category.name}
            </p>
            <h1 className={cn(SERIF, "mt-3 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl")}>
              {group.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {group.tagline}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <ShinyButton href="/contact">Source {group.name.toLowerCase()}</ShinyButton>
              <Button href={`/products/${category.slug}`} variant="glass" size="lg">
                All {category.name.toLowerCase()}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO + WHAT'S IN THE LINE ──────────────────────────────── */}
      <section className={cn("py-16 sm:py-20 lg:py-24", PX)}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <AnimatedSection animation="blur-in">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#394F73]">
              The collection
            </span>
            <h2 className={cn(SERIF, "mt-3 text-[2rem] leading-tight text-[#1E1A14] sm:text-[2.6rem]")}>
              Inside the {group.name.toLowerCase()} range
            </h2>
            <div className="mt-5 h-px w-16 bg-[#78899B]" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#544B3C] sm:text-lg">
              {intro}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="rounded-2xl border border-[#E6DDCB] bg-white/70 p-7 shadow-[0_24px_60px_-36px_rgba(40,30,15,0.4)] backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#394F73]">
                In this line
              </p>
              <ul className="mt-5 flex flex-col gap-3.5">
                {group.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[15px] leading-snug text-[#3F392E]">
                    <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-[#394F73]" aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-[#ECE3D2] pt-6">
                {category.certList.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#F1ECE0] px-3 py-1.5 text-[11px] font-bold text-[#394F73]"
                  >
                    <BadgeCheck className="size-3.5" aria-hidden /> {c}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ── THE GALLERY (centrepiece) ─────────────────────────────── */}
        <div className="mx-auto mt-14 max-w-7xl sm:mt-20">
          <AnimatedSection animation="blur-in">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#394F73]">
                  The lookbook
                </span>
                <h2 className={cn(SERIF, "mt-3 text-[1.8rem] leading-tight text-[#1E1A14] sm:text-[2.3rem]")}>
                  {group.name} in detail
                </h2>
              </div>
              <span className="hidden shrink-0 items-center gap-2 text-sm font-medium text-[#7A715F] sm:inline-flex">
                <Sparkles className="size-4 text-[#B3AA98]" aria-hidden /> Made in Pakistan
              </span>
            </div>
          </AnimatedSection>
          <SubCategoryGallery images={gallery} />
        </div>
      </section>

      {/* ── MORE IN THIS CATEGORY ───────────────────────────────────── */}
      {siblings.length > 0 && (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className={PX}>
            <div className="mx-auto max-w-7xl">
              <AnimatedSection animation="blur-in">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#394F73]">
                  Keep exploring
                </span>
                <h2 className={cn(SERIF, "mt-3 text-[1.8rem] leading-tight text-[#1E1A14] sm:text-[2.3rem]")}>
                  More in {category.name}
                </h2>
                <div className="mt-5 mb-10 h-px w-16 bg-[#78899B]" />
              </AnimatedSection>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {siblings.map((g, i) => {
                  const img = g.gallery?.[0]?.src ?? g.images[0]?.src ?? category.image;
                  return (
                    <motion.div
                      key={g.slug}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                    >
                      <Link
                        href={`/products/${category.slug}/${g.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6DDCB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#78899B]/50 hover:shadow-[0_24px_50px_-28px_rgba(40,30,15,0.4)]"
                      >
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image
                            src={img}
                            alt={g.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width:640px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        <div className="flex flex-1 flex-col p-4 sm:p-5">
                          <h3 className="font-heading font-bold leading-snug text-[#1E1A14]">{g.name}</h3>
                          <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-[#7A715F]">{g.tagline}</p>
                          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#394F73] transition-all group-hover:gap-2.5">
                            View collection <ArrowUpRight className="size-4" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ──────────────────────────────────────────────── */}
      <GlobalCTA
        label={`Source ${group.name}`}
        title={`Ready to source ${group.name.toLowerCase()}?`}
        subtitle={`Tell us your spec — colourways, fabrics, quantities — and we'll match it to the right vetted Pakistani manufacturer, quality-checked and delivered to your market anywhere in the world.`}
        primaryButtonText="Request a quote"
        primaryButtonLink="/contact"
        secondaryButtonText={`All ${category.name.toLowerCase()}`}
        secondaryButtonLink={`/products/${category.slug}`}
        image={heroImage}
      />
    </div>
  );
}
