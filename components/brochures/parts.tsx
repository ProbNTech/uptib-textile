import Image from "next/image";
import type { Brochure } from "@/data/brochures";

/* Cover with a soft fold shadow down the bound edge, so it reads as a printed
   catalogue rather than a flat image. Fills its (relative) parent. */
export function CoverArt({ brochure, sizes, priority }: { brochure: Brochure; sizes: string; priority?: boolean }) {
  return (
    <>
      <Image src={brochure.cover} alt={`${brochure.title} catalogue cover`} fill sizes={sizes} priority={priority} className="object-cover" />
      <span aria-hidden className="absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/30 via-black/5 to-transparent" />
      <span aria-hidden className="absolute inset-y-0 left-[7%] w-px bg-white/20" />
    </>
  );
}

export function Spinner({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
      aria-hidden
    />
  );
}
