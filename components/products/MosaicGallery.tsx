"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type MosaicItem = {
  src: string;
  alt: string;
  name: string;
  type: string;
  /* Tile shape. `wide` spans two columns at a locked 2:1 ratio; `square`
     spans one column at 1:1. Because every tile's aspect ratio is fixed and
     each image is delivered at exactly that ratio, the photo always fills its
     tile with NO crop, at every breakpoint. */
  tile: "wide" | "square";
};

/* Editorial "catalogue" mosaic — a bento of mixed-size image cards that echoes
   the home-page showcase. A 4-column grid (2 columns on smaller screens) where
   square tiles are exactly one cell and wide tiles span two; row heights equal
   the column width, so wides and squares always line up cleanly. A soft caption
   (type + name) sits over a whisper-light gradient at the foot of each card. */
export function MosaicGallery({ items }: { items: MosaicItem[] }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="grid grid-flow-dense grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((it, i) => (
        <motion.figure
          key={it.src}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
          className={cn(
            "relative overflow-hidden rounded-2xl bg-[#E8E1D4]",
            "shadow-[0_18px_40px_-24px_rgba(40,30,15,0.45)]",
            it.tile === "wide" ? "col-span-2 aspect-[2/1]" : "aspect-square",
          )}
        >
          <Image
            src={it.src}
            alt={it.alt}
            fill
            priority={i === 0}
            sizes={it.tile === "wide" ? "(max-width:1024px) 100vw, 50vw" : "(max-width:1024px) 50vw, 25vw"}
            className="object-cover"
          />
        </motion.figure>
      ))}
    </div>
  );
}
