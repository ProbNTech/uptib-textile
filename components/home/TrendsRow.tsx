import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Activity,
  Home,
  ShoppingCart,
  BadgePercent,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const palette = {
  green: { tile: "bg-tertiary/10 text-tertiary", title: "text-tertiary" },
  blue: { tile: "bg-primary/10 text-primary", title: "text-primary" },
  navy: { tile: "bg-primary-dark/10 text-primary-dark", title: "text-primary-dark" },
} as const;

const trends = [
  {
    icon: Leaf,
    title: "Sustainable Production",
    body: "UK brands increasingly prioritize eco-friendly fabrics and ethical manufacturing.",
    color: "blue" as const,
  },
  {
    icon: Activity,
    title: "Performance Wear",
    body: "Rise in demand for activewear and technical textiles across all age groups.",
    color: "blue" as const,
  },
  {
    icon: Home,
    title: "Home & Living Boom",
    body: "Consumers spending more on premium bedding, towels and home textiles.",
    color: "navy" as const,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Growth",
    body: "Online retail is driving demand for fast fashion and small-batch production.",
    color: "navy" as const,
  },
  {
    icon: BadgePercent,
    title: "The GSP+ Advantage",
    body: "Duty-free access under GSP+ strengthens Pakistan's position in the UK market.",
    color: "green" as const,
  },
];

export function TrendsRow() {
  return (
    <section className="bg-white">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_auto_3fr] lg:gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Market Intelligence
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-primary-dark sm:text-3xl">
              The trends shaping demand
            </h2>
            <p className="mt-4 text-body">
              We analyse market signals to help you decide smarter and stay
              ahead.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1.5 font-semibold text-tertiary hover:text-tertiary-dark"
            >
              View all insights
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          {/* vertical divider — thick at the centre, thin toward top & bottom */}
          <div aria-hidden className="relative hidden lg:block">
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-line to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-2/3 w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {trends.map((t) => (
              <div key={t.title} className="flex flex-col">
                <span
                  className={`inline-flex size-10 items-center justify-center rounded-xl ${palette[t.color].tile}`}
                >
                  <t.icon className="size-5" aria-hidden />
                </span>
                <h3 className={`mt-4 font-semibold ${palette[t.color].title}`}>
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
