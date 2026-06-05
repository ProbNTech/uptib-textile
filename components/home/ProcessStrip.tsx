import { Container } from "@/components/ui/Container";
import {
  Lightbulb,
  Search,
  BadgeCheck,
  Truck,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Lightbulb,
    color: "text-primary",
    ring: "ring-primary/20",
    title: "Market Insight",
    body: "Understanding buyer needs & market trends.",
  },
  {
    n: "02",
    icon: Search,
    color: "text-tertiary",
    ring: "ring-tertiary/20",
    title: "Sourcing",
    body: "Connecting with verified manufacturers.",
  },
  {
    n: "03",
    icon: BadgeCheck,
    color: "text-tertiary",
    ring: "ring-tertiary/20",
    title: "Quality Control",
    body: "Strict quality checks at every stage.",
  },
  {
    n: "04",
    icon: Truck,
    color: "text-secondary",
    ring: "ring-secondary/20",
    title: "Logistics",
    body: "Reliable shipping & customs support.",
  },
  {
    n: "05",
    icon: PackageCheck,
    color: "text-primary-dark",
    ring: "ring-primary-dark/20",
    title: "UK Delivery",
    body: "Timely delivery to your door.",
  },
];

export function ProcessStrip() {
  return (
    <section className="bg-white">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_3fr] lg:gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Our Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary-dark sm:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-body">
              End-to-end solutions tailored for UK buyers and Pakistani
              exporters.
            </p>
          </div>

          <div className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
            {/* connector line */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-8 hidden h-px bg-line lg:block"
            />
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative flex flex-col items-center px-2 text-center"
              >
                <span
                  className={`relative z-10 inline-flex size-16 items-center justify-center rounded-full bg-white ring-1 ${step.ring} shadow-card`}
                >
                  <step.icon className={`size-7 ${step.color}`} aria-hidden />
                </span>
                <span className={`mt-3 text-xs font-bold ${step.color}`}>
                  {step.n}
                </span>
                <h3 className="mt-1 font-semibold text-primary-dark">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
