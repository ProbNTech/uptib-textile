import Image from "next/image";
import { Coins, TrendingUp, BadgeCheck, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

const heroStats = [
  { icon: Coins, value: "US$2.27bn", label: "Bilateral trade value (2023)" },
  { icon: TrendingUp, value: "77%", label: "Growth in UK demand" },
  { icon: BadgeCheck, value: "GSP+", label: "Duty-free advantage" },
  { icon: MapPin, value: "London • Lahore", label: "Stronger Together" },
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark">
      {/* Hero background image */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={images.heroBg.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Vertical scroll cue */}
      <span
        aria-hidden
        className="absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 xl:block"
      >
        Scroll to discover
      </span>

      <Container className="relative">
        <div className="py-16 lg:py-24">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-secondary-light ring-1 ring-secondary/30">
              Trade. Trust. Growth.
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Connecting British buyers with{" "}
              <span className="text-tertiary-light">Pakistan&apos;s</span>{" "}
              finest textile supply chain.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              We bridge quality Pakistani textiles with the UK market through
              trust, transparency, and end-to-end trade solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="secondary" size="lg" withArrow>
                Explore Products
              </Button>
              <Button
                href="/services"
                variant="outlineWhite"
                size="lg"
                withArrow
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="relative mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 p-5">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-light">
                <stat.icon className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-lg font-bold text-white">
                  {stat.value}
                </span>
                <span className="block text-xs text-white/60">
                  {stat.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
