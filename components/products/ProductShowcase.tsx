"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { ProductCategory } from "@/data/textile";
import { cn } from "@/lib/utils";

const PX = "px-6 sm:px-10 lg:px-16 xl:px-20";
const SERIF = "font-[family-name:var(--font-playfair)]";

type Showcase = NonNullable<ProductCategory["showcase"]>;
type Group = Showcase["groups"][number];

/* Magazine-style photo mosaic. Lays the 2–4 photos out asymmetrically,
   echoing the reference brochure's collage spreads. */
function Mosaic({ images, priority = false }: { images: Group["images"]; priority?: boolean }) {
  const n = images.length;
  const img = (i: number, className: string, sizes: string) => (
    <div className={cn("relative overflow-hidden rounded-2xl bg-[#E8E1D4] shadow-[0_18px_40px_-24px_rgba(40,30,15,0.45)]", className)}>
      <Image
        src={images[i].src}
        alt={images[i].alt}
        fill
        priority={priority && i === 0}
        className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.04]"
        sizes={sizes}
      />
    </div>
  );

  if (n >= 4) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {img(0, "aspect-[4/5]", "(max-width:1024px) 50vw, 28vw")}
        {img(1, "aspect-[4/5]", "(max-width:1024px) 50vw, 28vw")}
        {img(2, "aspect-[4/5]", "(max-width:1024px) 50vw, 28vw")}
        {img(3, "aspect-[4/5]", "(max-width:1024px) 50vw, 28vw")}
      </div>
    );
  }
  if (n === 3) {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
        {img(0, "row-span-2 aspect-[3/4] h-full", "(max-width:1024px) 50vw, 28vw")}
        {img(1, "aspect-[5/4]", "(max-width:1024px) 50vw, 28vw")}
        {img(2, "aspect-[5/4]", "(max-width:1024px) 50vw, 28vw")}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {img(0, "aspect-[4/5]", "(max-width:1024px) 50vw, 28vw")}
      {img(1, "aspect-[4/5] mt-8", "(max-width:1024px) 50vw, 28vw")}
    </div>
  );
}

function ShowcaseRow({ group, index }: { group: Group; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <AnimatedSection animation={reverse ? "slide-left" : "slide-right"}>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Text column */}
        <div className={cn("max-w-xl", reverse && "lg:order-2 lg:justify-self-end")}>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#2F7549]">
            {String(index + 1).padStart(2, "0")} — {group.tagline}
          </span>
          <h3 className={cn(SERIF, "mt-3 text-[1.9rem] leading-tight text-[#1E1A14] sm:text-4xl")}>
            {group.name}
          </h3>
          <div className="mt-4 h-px w-16 bg-[#2F7549]" />
          <p className="mt-5 text-[15px] leading-relaxed text-[#544B3C] sm:text-base">{group.desc}</p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {group.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 text-sm text-[#3F392E]">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#2F7549]" aria-hidden />
                {it}
              </li>
            ))}
          </ul>
        </div>

        {/* Image mosaic */}
        <div className={cn(reverse && "lg:order-1")}>
          <Mosaic images={group.images} priority={index === 0} />
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ProductShowcase({ showcase }: { showcase: Showcase }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[#F7F3EA]">
      {/* ── Full-bleed banner with serif title (echoes the brochure spreads) ── */}
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <Image
          src={showcase.heroImage.src}
          alt={showcase.heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/80"
          >
            {showcase.eyebrow}
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className={cn(SERIF, "mt-4 max-w-3xl text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl")}
          >
            {showcase.title}
          </motion.h2>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 h-px w-20 bg-[#E7C77B]"
          />
        </div>
      </div>

      {/* ── Intro ── */}
      <div className={cn("relative", PX)}>
        <AnimatedSection animation="blur-in">
          <p className="mx-auto max-w-3xl py-16 text-center text-lg leading-relaxed text-[#544B3C] sm:py-20 sm:text-xl">
            {showcase.intro}
          </p>
        </AnimatedSection>
      </div>

      {/* ── Editorial rows ── */}
      <div className={cn("relative pb-20 sm:pb-28", PX)}>
        <div className="mx-auto flex max-w-7xl flex-col gap-20 sm:gap-28">
          {showcase.groups.map((group, i) => (
            <ShowcaseRow key={group.name} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
