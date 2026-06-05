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
    label: "Growth in demand (YoY)",
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

function Sparkline({ color, points }: { color: string; points: string }) {
  return (
    <svg
      viewBox="0 0 108 40"
      className="mt-4 h-12 w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MarketBillions() {
  return (
    <section className="bg-primary-dark">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_2.2fr] lg:gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-light">
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
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-2xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/65">{stat.label}</p>
                <Sparkline color={stat.color} points={stat.points} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
