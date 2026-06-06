import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Stat = {
  value: string;
  label: string;
  color: string;
  points: string;
};

const stats: Stat[] = [
  {
    value: "US$2.27bn",
    label: "UK imports from Pakistan (2023)",
    color: "rgb(var(--color-primary-light))",
    points: "0,34 18,30 36,32 54,22 72,24 90,12 108,8",
  },
  {
    value: "Over 77%",
    label: "Growth in textile demand (YoY)",
    color: "rgb(var(--color-tertiary-light))",
    points: "0,36 18,32 36,26 54,28 72,18 90,14 108,6",
  },
  {
    value: "US$9.7bn",
    label: "Total UK textile imports (2023)",
    color: "rgb(var(--color-secondary-light))",
    points: "0,30 18,32 36,24 54,26 72,16 90,18 108,10",
  },
  {
    value: "US$1.84bn",
    label: "Pakistan's textile exports to UK",
    color: "rgb(var(--color-primary-light))",
    points: "0,34 18,28 36,30 54,20 72,22 90,12 108,9",
  },
];

function AreaChart({
  id,
  color,
  points,
}: {
  id: string;
  color: string;
  points: string;
}) {
  const coords = points.split(" ").map((p) => {
    const [x = 0, y = 0] = p.split(",").map(Number);
    return { x, y };
  });
  return (
    <div className="relative -mx-4 -mb-4 mt-3 h-28 w-[calc(100%+2rem)] overflow-hidden rounded-b-2xl">
      <svg
        viewBox="0 0 108 40"
        className="h-full w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.5" />
            <stop offset="50%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.12" />
          </linearGradient>
        </defs>
        {/* gradient fill below the line */}
        <polygon points={`${points} 108,40 0,40`} fill={`url(#${id})`} />
        {/* the line itself */}
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {/* round dots on each data point */}
      {coords.map((c, idx) => (
        <span
          key={idx}
          className="absolute size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-primary-dark/40"
          style={{
            left: `${(c.x / 108) * 100}%`,
            top: `${(c.y / 40) * 100}%`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}

export function MarketBillions() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 80% at 12% 30%, rgba(0,86,167,0.45), transparent 60%)",
        }}
      />
      {/* dotted pattern, top-left corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-60 w-80"
        style={{
          backgroundImage:
            "radial-gradient(rgba(46,120,199,0.6) 1.8px, transparent 2px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(120% 120% at 0% 0%, #000 30%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(120% 120% at 0% 0%, #000 30%, transparent 72%)",
        }}
      />

      <Container className="relative py-14 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_2.2fr] lg:gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              A market worth billions
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              One of Europe&apos;s largest textile markets
            </h2>
            <p className="mt-4 text-white/70">
              The UK imports over US$9.7bn in textiles annually. Pakistan is
              proud to be a trusted partner in this growth story.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1.5 font-semibold text-secondary-light hover:text-white"
            >
              Explore market insights
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              >
                <p className="text-xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/65">{stat.label}</p>
                <AreaChart
                  id={`market-spark-${i}`}
                  color={stat.color}
                  points={stat.points}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
