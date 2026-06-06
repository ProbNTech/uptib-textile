import { Container } from "@/components/ui/Container";
import {
  Gem,
  Share2,
  ShieldCheck,
  PackageSearch,
  Truck,
  ChevronRight,
} from "lucide-react";

// On the navy background, icons + numbers use the brighter blue/green tints
// so they stay legible; circles stay white as little medallions.
const steps = [
  {
    n: "01",
    icon: Gem,
    color: "text-primary-light",
    title: "Market Insight",
    body: "Understanding buyer needs & market trends.",
  },
  {
    n: "02",
    icon: Share2,
    color: "text-tertiary-light",
    title: "Sourcing",
    body: "Connecting with verified manufacturers.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    color: "text-primary-light",
    title: "Quality Control",
    body: "Strict quality checks at every stage.",
  },
  {
    n: "04",
    icon: PackageSearch,
    color: "text-tertiary-light",
    title: "Logistics",
    body: "Reliable shipping & customs support.",
  },
  {
    n: "05",
    icon: Truck,
    color: "text-primary-light",
    title: "UK Delivery",
    body: "Timely delivery to your door.",
  },
];

export function ProcessStrip() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark">
      {/* soft blue glow for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl"
      />
      <Container className="relative py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_3fr] lg:items-end lg:gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tertiary-light">
              Our Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-white/70">
              End-to-end solutions tailored for UK buyers and Pakistani
              exporters.
            </p>
          </div>

          <div className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
            {/* dashed connectors with arrows between steps */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={`connector-${i}`}
                aria-hidden
                className="absolute top-6 hidden items-center lg:flex"
                style={{ left: `${15 + i * 20}%`, width: "10%" }}
              >
                <div className="h-px flex-1 border-t border-dashed border-white" />
                <span className="mx-1 size-1.5 shrink-0 rotate-45 bg-white" />
                <div className="h-px flex-1 border-t border-dashed border-white" />
                <ChevronRight
                  className="-ml-1.5 size-4 shrink-0 text-white"
                  strokeWidth={2.5}
                />
              </div>
            ))}
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative flex flex-col items-center px-2 text-center"
              >
                <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-full bg-white ring-1 ring-black/5 shadow-card">
                  <step.icon className={`size-6 ${step.color}`} aria-hidden />
                </span>
                <span className={`mt-3 text-xs font-bold ${step.color}`}>
                  {step.n}
                </span>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-white/60">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
