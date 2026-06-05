import { ShieldCheck, Factory, BadgeCheck, Truck, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    icon: Factory,
    title: "Authentic Manufacturers",
    body: "Partnering only with verified & reliable mills.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    body: "Multi-level quality checks and compliance.",
  },
  {
    icon: Truck,
    title: "On-time Delivery",
    body: "Strong logistics network ensuring smooth delivery.",
  },
  {
    icon: Leaf,
    title: "Ethical & Transparent",
    body: "Building long-term relationships on trust.",
  },
];

export function TrustedShield() {
  return (
    <section className="bg-white">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_2fr] lg:gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Why partner with UPTIB?
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary-dark sm:text-4xl">
              Trusted by both sides of the trade
            </h2>
            <p className="mt-4 text-body">
              A trusted partner for UK buyers and Pakistani suppliers with
              proven systems and strong commitments.
            </p>
          </div>

          <div>
            <div className="relative grid items-center gap-6 sm:grid-cols-2">
              {/* Center shield */}
              <div className="pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex">
                <div className="flex size-28 flex-col items-center justify-center rounded-2xl border border-accent/40 bg-primary-dark text-center shadow-card-hover">
                  <ShieldCheck
                    className="size-7 text-tertiary-light"
                    aria-hidden
                  />
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    UPTIB
                    <br />
                    Verified
                  </span>
                </div>
              </div>

              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`rounded-2xl border border-line bg-white p-5 shadow-card ${
                    i % 2 === 0 ? "sm:pr-20" : "sm:pl-20"
                  }`}
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 font-semibold text-primary-dark">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-body">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Green commitment bar */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-tertiary/25 bg-tertiary/5 p-5">
              <Leaf
                className="mt-0.5 size-5 shrink-0 text-tertiary"
                aria-hidden
              />
              <p className="text-sm text-body">
                <span className="font-semibold text-tertiary-dark">
                  Doing Business the Right Way —
                </span>{" "}
                integrity, transparency and compliance are at the core of
                everything we do. We help you navigate trade with confidence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
