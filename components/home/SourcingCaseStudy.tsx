"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Info,
  Package,
  Target,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { sourcingCaseStudy as study } from "@/data/case-studies";

/* Sourcing case study.
   The audit asked for a concrete example carrying order volume, timeline and
   outcome, because the service claims elsewhere on the page were stated as
   bullet points with nothing behind them.

   While `study.representative` is true the section renders a visible notice
   saying the figures illustrate a typical engagement rather than a named
   client's order. That keeps the section truthful without leaving the audit
   item empty. See data/case-studies.ts for how to swap in a real order. */

const metricIcons = [Package, CalendarClock, Target];

export default function SourcingCaseStudy() {
  return (
    <section
      className="relative z-[1] sec-y overflow-hidden bg-white"
      aria-labelledby="case-study-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #1A1A1A 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <SectionLabel
            label={study.eyebrow}
            title={study.title}
            body={study.intro}
            color="#394F73"
            align="center"
          />

          {/* Honesty notice — rendered only while the figures are illustrative. */}
          {study.representative && (
            <div className="mx-auto mb-8 flex max-w-3xl items-start gap-3 rounded-xl border border-[#E7DCC6] bg-[#F6F2EA] px-5 py-4">
              <Info className="mt-0.5 size-4 shrink-0 text-[#394F73]" aria-hidden />
              <p className="text-[13px] leading-relaxed text-[#5A5F72]">
                <span className="font-semibold text-[#394F73]">Representative engagement.</span>{" "}
                The figures below set out how an order of this type runs, using the
                specifications, inspection standards and lead times we actually work to. They
                illustrate a typical engagement rather than a single named client&apos;s order.
              </p>
            </div>
          )}

          {/* The audit's three required data points. */}
          <div className="grid gap-5 sm:grid-cols-3">
            {study.metrics.map((metric, i) => {
              const Icon = metricIcons[i] ?? Package;
              return (
                <motion.div
                  key={metric.label}
                  className="relative overflow-hidden rounded-2xl border border-[#394F73]/15 bg-[#394F73] p-6 text-center"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="mx-auto inline-flex size-11 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="size-5 text-[#D8CDBA]" strokeWidth={1.8} aria-hidden />
                  </span>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B3AA98]">
                    {metric.label}
                  </p>
                  <p className="mt-2 font-heading text-3xl font-extrabold leading-none text-white sm:text-[2.1rem]">
                    {metric.value}
                  </p>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-white/70">{metric.note}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
            {/* Timeline */}
            <div>
              <h3 className="font-heading text-xl font-bold text-[#1A1A1A]">
                The schedule, week by week
              </h3>
              <ol className="relative mt-5 border-l border-[#E5E7EB] pl-6">
                {study.stages.map((stage, i) => (
                  <motion.li
                    key={stage.period}
                    className="relative pb-6 last:pb-0"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-1 inline-flex size-3 rounded-full bg-[#78899B] ring-4 ring-white"
                    />
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#78899B]">
                      {stage.period}
                    </p>
                    <p className="mt-1 font-heading text-base font-bold text-[#1A1A1A]">
                      {stage.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#5A5F72]">{stage.detail}</p>
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Order breakdown + outcome */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_12px_34px_-22px_rgba(45,64,97,0.35)]">
                <h3 className="font-heading text-lg font-bold text-[#1A1A1A]">
                  What the volume covered
                </h3>
                <p className="mt-1 text-[13px] text-[#6B7280]">
                  {study.category} &middot; {study.buyer}
                </p>
                <dl className="mt-4 divide-y divide-[#E5E7EB]">
                  {study.breakdown.map((line) => (
                    <div key={line.sku} className="flex items-baseline justify-between gap-4 py-2.5">
                      <dt className="text-sm text-[#3D4152]">{line.sku}</dt>
                      <dd className="shrink-0 font-heading text-sm font-bold tabular-nums text-[#394F73]">
                        {line.qty}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl border border-[#E7DCC6] bg-[#F6F2EA] p-6">
                <h3 className="font-heading text-lg font-bold text-[#1A1A1A]">The result</h3>
                <ul className="mt-4 space-y-3">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-[#394F73]"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed text-[#3D4152]">{outcome}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="group mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#394F73]"
                >
                  Discuss an order like this
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
