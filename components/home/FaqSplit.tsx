import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";

export function FaqSplit() {
  return (
    <section className="relative isolate grid sm:grid-cols-2">
      {/* Buyers — blue / London */}
      <div className="relative isolate overflow-hidden">
        <Image
          src={images.bigBen.src}
          alt={images.bigBen.alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent" />
        <div className="relative px-6 py-16 sm:py-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Buyers
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Answers for buyers
          </h2>
          <p className="mt-3 max-w-sm text-white/80">
            Find quick answers to the most common questions.
          </p>
          <Link
            href="/contact?topic=source"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore Buyer FAQs
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Exporters — red / Lahore */}
      <div className="relative isolate overflow-hidden">
        <Image
          src={images.lahore.src}
          alt={images.lahore.alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/70 to-transparent" />
        <div className="relative px-6 py-16 sm:py-20 sm:text-right lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Exporters
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Answers for exporters
          </h2>
          <p className="mt-3 max-w-sm text-white/85 sm:ml-auto">
            Everything you need to export successfully to the UK.
          </p>
          <Link
            href="/contact?topic=sell"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore Exporter FAQs
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Center X badge */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
        <div className="flex size-20 items-center justify-center rounded-2xl border border-white/30 bg-white shadow-2xl">
          <span className="font-display text-3xl font-black text-primary-dark">
            ✕
          </span>
        </div>
      </div>
    </section>
  );
}
