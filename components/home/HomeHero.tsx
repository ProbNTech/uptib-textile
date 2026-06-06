import Image from "next/image";
import {
  Coins,
  TrendingUp,
  BadgeCheck,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

const heroStats = [
  { icon: Coins, value: "US$2.27bn", label: "Bilateral trade value (2023)" },
  { icon: TrendingUp, value: "77%", label: "Growth in UK demand" },
  { icon: BadgeCheck, value: "GSP+", label: "Duty-free advantage" },
  { icon: MapPin, value: "London • Lahore", label: "Stronger Together" },
];

// Rolling shipment volume — peaks at the verified "126 shipments / month".
const shipMonths = ["DEC", "JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
const peakMonth = 5; // MAY — highlighted point

// Illustrative weekly dispatch distribution; Friday is the peak day.
const weekBars = [45, 62, 40, 74, 100, 52, 60];
const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
const peakDay = 4; // Friday

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

      {/* Vertical scroll cue with line + dot flourish */}
      <div
        aria-hidden
        className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
      >
        <span className="h-14 w-px bg-gradient-to-b from-transparent to-white/60" />
        <span className="flex flex-col items-center gap-1.5">
          <span className="size-1 rounded-full bg-white/70" />
          <span className="size-1 rounded-full bg-white/45" />
          <span className="size-1 rounded-full bg-white/25" />
        </span>
        <span className="rotate-180 text-[10px] font-semibold uppercase tracking-[0.3em] text-white [writing-mode:vertical-rl]">
          Scroll to discover
        </span>
        <span className="flex flex-col items-center gap-1.5">
          <span className="size-1 rounded-full bg-white/25" />
          <span className="size-1 rounded-full bg-white/45" />
          <span className="size-1 rounded-full bg-white/70" />
        </span>
        <span className="h-14 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-md bg-secondary/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-secondary-light ring-1 ring-secondary/30">
              Trade. Trust. Growth.
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Connecting British buyers with{" "}
              <span className="text-tertiary-light">Pakistan&apos;s</span>{" "}
              finest textile supply chain.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              We bridge quality Pakistani textiles with the UK market through
              trust, transparency, and end-to-end trade solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/products"
                variant="secondary"
                size="lg"
                withArrow
                className="!rounded-md"
              >
                Explore Products
              </Button>
              <Button
                href="/services"
                variant="outlineWhite"
                size="lg"
                withArrow
                className="!rounded-md"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Dashboard-style stat cards */}
          <div className="relative px-2 py-8 sm:px-4 lg:justify-self-end">
            {/* Main chart card */}
            <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-5 shadow-2xl ring-1 ring-black/5 sm:p-6">
              <p className="text-sm font-bold text-ink">
                Trade &amp; Shipment Growth
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-tertiary">
                <TrendingUp className="size-3.5" aria-hidden />
                UK demand growth: +77%
              </p>

              {/* Chart */}
              <div className="relative mt-5">
                <div className="flex">
                  {/* Y axis */}
                  <div className="flex flex-col justify-between pr-2 text-[9px] font-medium text-muted">
                    <span>150</span>
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                  </div>
                  {/* Plot */}
                  <div className="relative flex-1">
                    <svg
                      viewBox="0 0 320 160"
                      className="h-32 w-full"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="rgb(var(--color-primary))"
                            stopOpacity="0.22"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-primary))"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      {/* gridlines */}
                      <line x1="0" y1="30" x2="320" y2="30" stroke="rgb(var(--color-line))" strokeWidth="1" />
                      <line x1="0" y1="67" x2="320" y2="67" stroke="rgb(var(--color-line))" strokeWidth="1" />
                      <line x1="0" y1="103" x2="320" y2="103" stroke="rgb(var(--color-line))" strokeWidth="1" />
                      <line x1="0" y1="140" x2="320" y2="140" stroke="rgb(var(--color-line))" strokeWidth="1" />
                      {/* area */}
                      <path
                        d="M 10 89 C 35 84, 35 78, 60 75 C 85 72, 85 82, 110 83 C 135 84, 135 66, 160 64 C 185 62, 185 70, 210 70 C 235 70, 235 50, 260 48 C 285 46, 285 52, 310 54 L 310 140 L 10 140 Z"
                        fill="url(#area)"
                      />
                      {/* line */}
                      <path
                        d="M 10 89 C 35 84, 35 78, 60 75 C 85 72, 85 82, 110 83 C 135 84, 135 66, 160 64 C 185 62, 185 70, 210 70 C 235 70, 235 50, 260 48 C 285 46, 285 52, 310 54"
                        fill="none"
                        stroke="rgb(var(--color-primary))"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      {/* guide + marker on peak month */}
                      <line
                        x1="260"
                        y1="48"
                        x2="260"
                        y2="140"
                        stroke="rgb(var(--color-secondary))"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        opacity="0.5"
                      />
                      <circle cx="260" cy="48" r="5" fill="rgb(var(--color-secondary))" stroke="#fff" strokeWidth="2.5" />
                    </svg>

                    {/* Tooltip pill on the peak */}
                    <div
                      className="pointer-events-none absolute -translate-x-1/2 rounded-md bg-secondary px-2.5 py-1 text-center shadow-lg"
                      style={{ left: "81%", top: "-6%" }}
                    >
                      <span className="block text-xs font-bold leading-none text-white">
                        126
                      </span>
                      <span className="block text-[8px] font-medium text-white/85">
                        shipments / month
                      </span>
                    </div>

                    {/* X axis */}
                    <div className="mt-2 flex justify-between text-[9px] font-medium">
                      {shipMonths.map((m, i) => (
                        <span
                          key={m + i}
                          className={
                            i === peakMonth
                              ? "font-bold text-secondary"
                              : "text-muted"
                          }
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <span className="sr-only">
                Shipment volume rising to a verified 126 shipments per month.
              </span>
            </div>

            {/* Floating: gateway card (top-right) */}
            <div className="absolute -top-2 right-0 z-20 w-52 rounded-lg bg-white p-3.5 shadow-xl ring-1 ring-black/5 sm:-right-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-light text-white">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-ink">
                    London • Lahore
                  </span>
                  <span className="block text-[11px] text-muted">
                    Stronger Together
                  </span>
                </span>
              </div>
              <span className="mt-3 flex items-center justify-center gap-1.5 rounded-md bg-tertiary/10 px-2 py-1.5 text-[11px] font-semibold text-tertiary">
                <BadgeCheck className="size-3.5" aria-hidden />
                GSP+ Duty-free advantage
              </span>
            </div>

            {/* Floating: on-time delivery card (bottom-left) */}
            <div className="absolute -bottom-2 left-0 z-20 w-56 rounded-lg bg-white p-4 shadow-xl ring-1 ring-black/5 sm:-left-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ink">
                  On-time Delivery
                </span>
                <span className="rounded-md bg-surface px-2 py-0.5 text-[10px] font-medium text-muted">
                  This week
                </span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-extrabold leading-none text-ink">
                  93%
                </span>
                <span className="mb-0.5 flex items-center gap-0.5 text-[11px] font-semibold text-tertiary">
                  <ArrowUpRight className="size-3.5" aria-hidden />
                  on schedule
                </span>
              </div>
              {/* weekly bars */}
              <div className="relative mt-3 flex h-14 items-end justify-between gap-1.5 pt-3">
                <span
                  className="absolute top-0 -translate-x-1/2 rounded-[4px] bg-secondary px-1.5 py-0.5 text-[8px] font-bold text-white"
                  style={{ left: `${((peakDay + 0.5) / weekBars.length) * 100}%` }}
                >
                  Peak
                </span>
                {weekBars.map((h, i) => (
                  <div
                    key={i}
                    className={
                      "w-full rounded-[3px] " +
                      (i === peakDay ? "bg-secondary" : "bg-primary/25")
                    }
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-1.5 flex justify-between text-[9px] font-medium text-muted">
                {weekDays.map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="relative mb-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {heroStats.map((stat, i) => {
            const accents = [
              "from-primary to-primary-light",
              "from-tertiary to-tertiary-light",
              "from-primary-light to-tertiary",
              "from-secondary to-secondary-light",
            ];
            const accent = accents[i % accents.length];
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.1] hover:shadow-xl hover:shadow-black/20"
              >
                {/* gradient accent line on top */}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${accent}`}
                />
                {/* soft glow that blooms on hover */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br ${accent} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30`}
                />
                <span
                  className={`inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-white shadow-lg`}
                >
                  <stat.icon className="size-5" aria-hidden />
                </span>
                <span className="mt-4 block text-2xl font-extrabold leading-none tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-xs leading-snug text-white/65">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
