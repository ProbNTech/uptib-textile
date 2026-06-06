import Link from "next/link";
import {
  Search,
  Users,
  BadgeCheck,
  Package,
  BarChart3,
  Globe,
  Handshake,
  ShieldCheck,
  Clock,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Step = {
  n: number;
  icon: LucideIcon;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    n: 1,
    icon: Search,
    title: "Understand",
    body: "We learn your requirements and product needs.",
  },
  {
    n: 2,
    icon: Users,
    title: "Source",
    body: "We connect you with verified manufacturers.",
  },
  {
    n: 3,
    icon: BadgeCheck,
    title: "Assure",
    body: "We ensure quality, compliance and ethical standards.",
  },
  {
    n: 4,
    icon: Package,
    title: "Deliver",
    body: "We manage logistics for on-time delivery.",
  },
  {
    n: 5,
    icon: BarChart3,
    title: "Grow",
    body: "We build long-term partnerships for growth.",
  },
];

const stats = [
  { icon: Globe, value: "2", sup: "+", label: "Countries", sub: "Pakistan & UK" },
  {
    icon: Handshake,
    value: "100",
    sup: "+",
    label: "Verified",
    sub: "Manufacturers",
  },
  {
    icon: ShieldCheck,
    value: "100",
    sup: "%",
    label: "Quality &",
    sub: "Compliance",
  },
  {
    icon: Clock,
    value: "On-Time",
    sup: "",
    label: "Delivery",
    sub: "Commitment",
  },
];

/* ----- circular diagram geometry (viewBox 0 0 600 600) ----- */
const C = 300; // centre
const R_CARD = 0.4; // card-centre radius as fraction of container width
const R_RING = 178; // arrow ring radius (viewBox units)
const R_DOT = 116; // inner dot ring radius (viewBox units)
// step angles, clockwise from top
const ANGLES = [-90, -18, 54, 126, 198];

const polar = (r: number, deg: number): [number, number] => {
  const rad = (deg * Math.PI) / 180;
  return [C + r * Math.cos(rad), C + r * Math.sin(rad)];
};

// card centre positions in % of the square container
const cardPos = ANGLES.map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return {
    left: 50 + R_CARD * 100 * Math.cos(rad),
    top: 50 + R_CARD * 100 * Math.sin(rad),
  };
});

// inner connector dots
const dots = ANGLES.map((deg, i) => {
  const [x, y] = polar(R_DOT, deg);
  return { x, y, green: i % 2 === 0 };
});

// dashed arrow arcs between adjacent steps (clockwise)
const arcs = ANGLES.map((deg, i) => {
  const next =
    ANGLES[(i + 1) % ANGLES.length]! + (i === ANGLES.length - 1 ? 360 : 0);
  const [x1, y1] = polar(R_RING, deg + 20);
  const [x2, y2] = polar(R_RING, next - 20);
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${R_RING} ${R_RING} 0 0 1 ${x2.toFixed(
    1,
  )} ${y2.toFixed(1)}`;
});

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <div className="flex w-full items-start gap-3 rounded-2xl bg-white p-4 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)] ring-1 ring-line/60">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-tertiary/10 text-tertiary">
        <Icon className="size-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-primary-dark">
          {step.n}. {step.title}
        </h3>
        <p className="mt-1 text-xs leading-snug text-body">{step.body}</p>
      </div>
    </div>
  );
}

function CentreHub() {
  return (
    <div
      className="absolute left-1/2 top-1/2 flex aspect-square -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center text-white shadow-[0_20px_50px_-12px_rgba(0,21,72,0.55)]"
      style={{
        width: "33%",
        background:
          "radial-gradient(120% 120% at 30% 20%, #2E78C7 0%, #0056A7 38%, #001548 100%)",
      }}
    >
      <span className="font-display text-xl font-bold tracking-wide sm:text-2xl">
        UPTIB
      </span>
      <span className="mt-1 px-3 text-[11px] font-medium leading-tight text-white/80 sm:text-xs">
        Your End-to-End
        <br />
        Sourcing Partner
      </span>
    </div>
  );
}

export function WhyPartner() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #eef2fa 0%, #f4f7fc 45%, #eaf1f8 100%)",
      }}
    >
      {/* dotted blue pattern, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-72 w-96"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,86,167,0.18) 2px, transparent 2.4px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(125% 125% at 100% 0%, #000 25%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(125% 125% at 100% 0%, #000 25%, transparent 70%)",
        }}
      />

      <Container className="relative py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* ---------- Left: copy + stats + CTA ---------- */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Why partner with UPTIB?
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-primary-dark sm:text-5xl">
              Your Trusted Partner
              <br />
              in Textile Sourcing
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-body">
              UPTIB connects global brands with reliable manufacturers in
              Pakistan and the UK. From sourcing to shipment, we make the
              process seamless, transparent, and efficient.
            </p>

            {/* stats card */}
            <div className="mt-8 grid grid-cols-2 gap-y-6 rounded-2xl bg-white/70 p-6 ring-1 ring-line/70 sm:grid-cols-4 sm:gap-x-2">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex flex-col gap-2">
                    <Icon className="size-6 text-secondary" aria-hidden />
                    <p className="font-display text-2xl font-bold leading-none text-primary-dark">
                      {s.value}
                      {s.sup && (
                        <sup className="ml-0.5 align-super text-sm text-secondary">
                          {s.sup}
                        </sup>
                      )}
                    </p>
                    <p className="text-xs leading-tight text-body">
                      {s.label}
                      <br />
                      {s.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/contact?topic=quote"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary-dark to-primary py-3 pl-6 pr-3 text-sm font-semibold text-white shadow-lg shadow-primary-dark/20 transition hover:shadow-xl hover:shadow-primary-dark/30"
              >
                Partner With UPTIB
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-0.5">
                  <ChevronRight className="size-4" aria-hidden />
                </span>
              </Link>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-body">
                <ShieldCheck className="size-5 text-secondary" aria-hidden />
                Reliable. Ethical. Sustainable.
              </p>
            </div>
          </div>

          {/* ---------- Right: circular process diagram ---------- */}
          {/* desktop / tablet circular layout */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] sm:block">
            {/* decorative rings, dots, arrows */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 600 600"
              fill="none"
              aria-hidden
            >
              <defs>
                <marker
                  id="ts-arrow"
                  markerWidth="8"
                  markerHeight="8"
                  refX="5"
                  refY="4"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L8,4 L0,8 Z" fill="rgb(var(--color-primary))" />
                </marker>
              </defs>

              {/* faint outer guide ring */}
              <circle
                cx={C}
                cy={C}
                r={238}
                stroke="rgb(var(--color-primary))"
                strokeOpacity="0.12"
                strokeWidth="1.5"
                strokeDasharray="2 9"
              />
              {/* inner dotted ring */}
              <circle
                cx={C}
                cy={C}
                r={R_DOT}
                stroke="rgb(var(--color-primary))"
                strokeOpacity="0.22"
                strokeWidth="1.5"
                strokeDasharray="2 8"
              />
              {/* clockwise arrow arcs */}
              {arcs.map((d, i) => (
                <path
                  key={`arc-${i}`}
                  d={d}
                  stroke="rgb(var(--color-primary))"
                  strokeOpacity="0.55"
                  strokeWidth="1.75"
                  strokeDasharray="1 7"
                  strokeLinecap="round"
                  markerEnd="url(#ts-arrow)"
                />
              ))}
              {/* connector dots */}
              {dots.map((dot, i) => (
                <circle
                  key={`dot-${i}`}
                  cx={dot.x}
                  cy={dot.y}
                  r={6}
                  fill={
                    dot.green
                      ? "rgb(var(--color-secondary))"
                      : "rgb(var(--color-primary))"
                  }
                />
              ))}
            </svg>

            {/* centre hub */}
            <CentreHub />

            {/* step cards */}
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="absolute w-[44%] max-w-[230px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${cardPos[i]!.left}%`,
                  top: `${cardPos[i]!.top}%`,
                }}
              >
                <StepCard step={step} />
              </div>
            ))}
          </div>

          {/* mobile stacked layout */}
          <div className="flex flex-col gap-5 sm:hidden">
            <div
              className="relative mx-auto flex aspect-square w-44 flex-col items-center justify-center rounded-full text-center text-white"
              style={{
                background:
                  "radial-gradient(120% 120% at 30% 20%, #2E78C7 0%, #0056A7 38%, #001548 100%)",
              }}
            >
              <span className="font-display text-2xl font-bold tracking-wide">
                UPTIB
              </span>
              <span className="mt-1 px-3 text-xs font-medium leading-tight text-white/80">
                Your End-to-End
                <br />
                Sourcing Partner
              </span>
            </div>
            {steps.map((step) => (
              <StepCard key={step.n} step={step} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
