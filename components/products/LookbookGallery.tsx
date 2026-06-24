"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export type LookbookItem = {
  src: string;
  alt: string;
  name: string;
  type: string;
  /* Intrinsic pixel size. When present the page renders a true masonry that
     keeps each photo's natural aspect ratio (no crop, no overlap). */
  w?: number;
  h?: number;
};

/* Captioned product lookbook — a uniform grid where every tile is exactly the
   same shape. Two or four columns only, so every row is always complete (item
   count is a multiple of 4). The name + type sit centred *below* each image with
   breathing room — they are not merged into a bordered card. Generous row gaps
   keep the rows clearly separated.

   `aspect` picks the tile shape: "square" (default) suits flat product shots;
   "portrait" (3:4) suits full-length model/apparel photography so figures aren't
   cropped at the top and bottom. */
export function LookbookGallery({
  items,
  aspect = "square",
}: {
  items: LookbookItem[];
  aspect?: "square" | "portrait";
}) {
  const shouldReduceMotion = useReducedMotion();
  const aspectClass = aspect === "portrait" ? "aspect-[3/4]" : "aspect-square";
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
      {items.map((it, i) => (
        <motion.figure
          key={it.src}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
          className="group flex flex-col"
        >
          {/* Image tile — fixed shape, identical for every item */}
          <div className={`relative ${aspectClass} overflow-hidden rounded-2xl bg-[#F4EFE5] shadow-[0_18px_40px_-26px_rgba(40,30,15,0.4)]`}>
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(max-width:1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          {/* Caption — centred, below the image, not a card */}
          <figcaption className="mt-3.5 px-1 text-center">
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
