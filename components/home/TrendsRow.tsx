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

const trends = [
  {
    icon: Leaf,
    title: "Sustainable Production",
    body: "UK brands increasingly prioritize eco-friendly fabrics and ethical manufacturing.",
    accent: false,
  },
  {
    icon: Activity,
    title: "Performance Wear",
    body: "Rise in demand for activewear and technical textiles across all age groups.",
    accent: false,
  },
  {
    icon: Home,
    title: "Home & Living Boom",
    body: "Consumers spending more on premium bedding, towels and home textiles.",
    accent: false,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Growth",
    body: "Online retail is driving demand for fast fashion and small-batch production.",
    accent: false,
  },
  {
    icon: BadgePercent,
    title: "The GSP+ Advantage",
    body: "Duty-free access under GSP+ strengthens Pakistan's position in the UK market.",
    accent: true,
  },
];

export function TrendsRow() {
  return (
    <section className="bg-surface">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_3fr] lg:gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Market Intelligence
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary-dark sm:text-4xl">
              The trends shaping demand
            </h2>
            <p className="mt-4 text-body">
              We analyse market signals to help you decide smarter and stay
              ahead.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1.5 font-semibold text-secondary hover:text-secondary-dark"
            >
              View all insights
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {trends.map((t) => (
              <div key={t.title} className="flex flex-col">
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-2xl ${
                    t.accent
                      ? "bg-tertiary/10 text-tertiary"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <t.icon className="size-6" aria-hidden />
                </span>
                <h3
                  className={`mt-4 font-semibold ${
                    t.accent ? "text-tertiary-dark" : "text-primary-dark"
                  }`}
                >
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-body">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
