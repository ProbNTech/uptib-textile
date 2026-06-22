"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { LookbookItem } from "@/components/products/LookbookGallery";

/* Ratio-preserving lookbook — a true column masonry where every photo keeps its
   native aspect ratio (no crop, no overlap). Each tile flows into a balanced
   column at its natural height; the name + type sit centred just below the
   image with breathing room. Built for image sets that mix tall, wide and
   square shots (e.g. curtains & drapery). Each item must carry `w`/`h`. */
export function LookbookMasonry({ items }: { items: LookbookItem[] }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="[column-gap:1.25rem] sm:[column-gap:1.5rem] columns-2 lg:columns-3 xl:columns-4">
      {items.map((it, i) => (
        <motion.figure
          key={it.src}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
          className="group mb-6 break-inside-avoid sm:mb-8"
        >
          {/* Image — natural ratio, never cropped */}
          <div className="overflow-hidden rounded-2xl bg-[#F4EFE5] shadow-[0_18px_40px_-26px_rgba(40,30,15,0.4)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_26px_52px_-28px_rgba(40,30,15,0.5)]">
            <Image
              src={it.src}
              alt={it.alt}
              width={it.w ?? 1200}
              height={it.h ?? 1500}
              sizes="(max-width:640px) 50vw, (max-width:1280px) 33vw, 25vw"
              className="h-auto w-full"
            />
          </div>
          {/* Caption — name + type only, centred below the image */}
          <figcaption className="mt-3 px-1 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#394F73]">
              {it.type}
            </p>
            <h3 className="mt-1 font-heading text-[14px] font-semibold leading-snug text-[#1E1A14]">
              {it.name}
            </h3>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
