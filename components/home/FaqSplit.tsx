import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";

export function FaqSplit() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="grid sm:grid-cols-2">
        {/* Buyers — blue / London */}
        <div className="relative isolate flex min-h-[280px] flex-col justify-center overflow-hidden bg-primary px-6 py-16 sm:py-20 lg:px-12">
          {/* depth */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-primary-dark/55 via-primary/10 to-transparent"
          />
          {/* London skyline — left-aligned along the bottom */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -right-16 -bottom-20 h-[590px]"
          >
            <Image
              src={images.londonSkyline.src}
              alt={images.londonSkyline.alt}
              fill
              sizes="50vw"
              className="object-contain object-left-bottom opacity-90"
            />
          </div>
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Buyers
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Answers for buyers
            </h2>
            <p className="mt-3 max-w-xs text-white/85">
              Find quick answers to the most common questions.
            </p>
            <Link
              href="/contact?topic=source"
              className="mt-6 inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              Explore Buyer FAQs
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Exporters — red / Lahore */}
        <div className="relative isolate flex min-h-[280px] flex-col justify-center overflow-hidden bg-secondary px-6 py-16 sm:py-20 sm:pl-24 lg:pl-28">
          {/* depth */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-l from-secondary-dark/55 via-secondary/10 to-transparent"
          />
          {/* Minar-e-Pakistan — larger, anchored bottom-right */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -bottom-10 top-2 w-2/3"
          >
            <Image
              src={images.minarePakistan.src}
              alt={images.minarePakistan.alt}
              fill
              sizes="50vw"
              className="object-contain object-right-bottom opacity-95"
            />
          </div>
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Exporters
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Answers for exporters
            </h2>
            <p className="mt-3 max-w-xs text-white/85">
              Everything you need to export successfully to the UK.
            </p>
            <Link
              href="/contact?topic=sell"
              className="mt-6 inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              Explore Exporter FAQs
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      {/* Center red dividing line between the two panels */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-1 -translate-x-1/2 bg-danger sm:block"
      />
    </section>
  );
}
