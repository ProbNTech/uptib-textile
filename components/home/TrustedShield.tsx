import Image from "next/image";
import { Factory, BadgeCheck, Truck, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

const leftPillars = [
  {
    icon: Factory,
    title: "Authentic Manufacturers",
    body: "Partnering only with verified & reliable mills.",
  },
  {
    icon: Truck,
    title: "On-time Delivery",
    body: "Strong logistics network ensuring smooth delivery.",
  },
];

const rightPillars = [
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    body: "Multi-level quality checks and compliance.",
  },
  {
    icon: Leaf,
    title: "Ethical & Transparent",
    body: "Building long-term relationships on trust.",
  },
];

function Pillar({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-primary-light/50 bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <div>
        <h3 className="text-sm font-bold text-primary-dark">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-body">{body}</p>
      </div>
    </div>
  );
}

export function TrustedShield() {
  return (
    <section className="bg-white">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_2fr] lg:gap-12">
          {/* Copy */}
          <div className="flex flex-col justify-center mt-10">
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

          {/* Badge cluster */}
          <div className="relative">
            {/* Dotted connector arrows (desktop) */}
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 720 260"
              fill="none"
              aria-hidden
            >
              <defs>
                <marker
                  id="trust-arrow"
                  markerWidth="7"
                  markerHeight="7"
                  refX="4.5"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path
                    d="M0,0 L7,3.5 L0,7 Z"
                    fill="rgb(var(--color-primary))"
                  />
                </marker>
              </defs>
              {/* Left arrows */}
              <g
                transform="translate(60, 0)"
                stroke="rgb(var(--color-primary))"
                strokeWidth="2.25"
                strokeDasharray="1 6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.75"
              >
                <path
                  d="M 120 70 H 142 Q 150 70 150 78 V 112 Q 150 120 158 120 H 215"
                  markerEnd="url(#trust-arrow)"
                />
                <path
                  d="M 120 190 H 142 Q 150 190 150 182 V 148 Q 150 140 158 140 H 215"
                  markerEnd="url(#trust-arrow)"
                />
              </g>

              {/* Right arrows */}
              <g
                style={{ transform: "translateX(-70px)" }}
                stroke="rgb(var(--color-primary))"
                strokeWidth="2.25"
                strokeDasharray="1 6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.75"
              >
                <path
                  d="M 600 70 H 578 Q 570 70 570 78 V 112 Q 570 120 562 120 H 505"
                  markerEnd="url(#trust-arrow)"
                />
                <path
                  d="M 600 190 H 578 Q 570 190 570 182 V 148 Q 570 140 562 140 H 505"
                  markerEnd="url(#trust-arrow)"
                />
              </g>
            </svg>

            <div className="relative grid grid-cols-1 items-center gap-x-0 gap-y-10 sm:grid-cols-[1fr_auto_1fr]">
              {/* Left features */}
              <div className="flex flex-col gap-10 sm:order-1">
                {leftPillars.map((p) => (
                  <Pillar key={p.title} {...p} />
                ))}
              </div>

              {/* Center badge */}
              <div className="flex justify-center sm:order-2">
                <Image
                  src="/assets/uptib-verified-badge.png"
                  alt="UPTIB Verified badge"
                  width={320}
                  height={320}
                  className="h-auto w-52 drop-shadow-xl sm:w-72 lg:w-[340px]"
                />
              </div>

              {/* Right features */}
              <div className="flex flex-col gap-10 sm:order-3">
                {rightPillars.map((p) => (
                  <Pillar key={p.title} {...p} />
                ))}
              </div>
            </div>
          </div>

          {/* Green commitment bar */}
          <div className="flex items-start gap-3 rounded-lg border border-tertiary-light/45 bg-tertiary-light/15 p-5 lg:col-start-2">
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-tertiary-light/25 text-tertiary-dark">
              <Leaf className="size-5" aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-body">
              <span className="font-bold text-tertiary-dark">
                Doing Business the Right Way
              </span>{" "}
              — Integrity, transparency and compliance are at the core of
              everything we do. We help you navigate trade with confidence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
