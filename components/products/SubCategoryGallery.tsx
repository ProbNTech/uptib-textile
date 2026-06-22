"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type GalleryImage = { src: string; alt: string; span?: "wide" | "tall" };

/* Editorial photo mosaic — an asymmetric, magazine-style grid that reads as
   "lots of beautiful images" without forcing every tile to the same shape.
   Tiles span a 4-column grid of fixed-height rows; `grid-flow-dense` backfills
   so varied spans tile cleanly. Soft rounded corners + slow hover zoom echo the
   showcase mosaic (components/products/ProductShowcase.tsx). */

/* A repeating rhythm of tile shapes. Each entry is the Tailwind span class set
   for one tile; the pattern cycles across the image list so large/tall tiles
   recur at a pleasing cadence. Indexed by position-in-cycle. */
const PATTERN = [
  "col-span-2 row-span-2",          // 0 — wide landscape feature
  "col-span-1 row-span-3",          // 1 — tall portrait
  "col-span-1 row-span-2",          // 2 — square
  "col-span-1 row-span-2",          // 3 — square
  "col-span-1 row-span-3",          // 4 — tall portrait
  "col-span-2 row-span-2",          // 5 — wide landscape
  "col-span-1 row-span-2",          // 6 — square
  "col-span-1 row-span-3",          // 7 — tall portrait
];

function spanClass(img: GalleryImage, i: number): string {
  if (img.span === "wide") return "col-span-2 row-span-2";
  if (img.span === "tall") return "col-span-1 row-span-3";
  return PATTERN[i % PATTERN.length];
}

export function SubCategoryGallery({ images }: { images: GalleryImage[] }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div
      className={cn(
        "grid grid-flow-dense gap-3 sm:gap-4",
        "grid-cols-2 lg:grid-cols-4",
        "auto-rows-[88px] sm:auto-rows-[104px] lg:auto-rows-[120px]",
      )}
    >
      {images.map((img, i) => (
        <motion.figure
          key={`${img.src}-${i}`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
          className={cn(
            "group relative overflow-hidden rounded-2xl bg-[#E8E1D4]",
            "shadow-[0_18px_40px_-24px_rgba(40,30,15,0.45)]",
            spanClass(img, i),
          )}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
          />
          {/* whisper-soft gradient so the cream page edge meets the photo gently */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.figure>
      ))}
    </div>
  );
}
