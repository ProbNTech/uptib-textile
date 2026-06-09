"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import { LiquidCard, CardContent } from "@/components/ui/liquid-glass-card";

/* ─── Stat data — sourced global textile-export figures ─── */
const stats = [
  {
    label: "Pakistan textile export growth, YoY",
    value: 7,
    suffix: "%",
    percent: 7,
    description: "Pakistan textile & apparel export growth in FY2025 (~US$17.9bn, up ~7.4% YoY) (Pakistan Bureau of Statistics, 2025).",
    color: "#FBBF24",
  },
  {
    label: "Textiles' share of Pakistan exports",
    value: 60,
    suffix: "%",
    percent: 60,
    description: "Textiles make up an estimated 55–60% of Pakistan's total exports — the backbone of its export economy (industry reporting, 2025).",
    color: "#FB7185",
  },
  {
    label: "Asia-Pacific share of global market",
    value: 50,
    suffix: "%",
    percent: 50,
    description: "Asia-Pacific accounts for roughly half of the ~US$1.2–1.3 trillion global textile market (Precedence Research, 2025).",
    color: "#38BDF8",
  },
  {
    label: "Cotton's share of raw-material demand",
    value: 39,
    suffix: "%",
    percent: 39,
    description: "Cotton makes up about 39% of global textile raw-material demand — a fibre where Pakistan is a world-leading producer (industry estimates, 2025).",
    color: "#A78BFA",
  },
];

/* ─── Horizontal progress bar ─── */
function HorizontalBar({ percent, color, animate }: { percent: number; color: string; animate: boolean }) {
  const target = Math.min(Math.max(percent, 0), 100);

  return (
    <div
      className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/10"
      role="progressbar"
      aria-valuenow={target}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}80, ${color})`, boxShadow: `0 0 12px ${color}66` }}
        initial={{ width: 0 }}
        animate={{ width: animate ? `${target}%` : 0 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      />
    </div>
  );
}

/* ─── Single stat card ─── */
function StatScoreCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="h-full">
      <motion.div
        className="h-full"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.6,
          delay: shouldReduceMotion ? 0 : index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Glass card for dark background */}
        <LiquidCard className="w-full h-full bg-white/[0.06] backdrop-blur-sm shadow-none border border-white/[0.08] rounded-2xl">
          <CardContent className="p-7 flex flex-col h-full justify-between bg-transparent shadow-none border-none">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold text-white/90 truncate">{stat.label}</h3>
              <span
                className="shrink-0 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{ background: `${stat.color}20`, color: stat.color }}
              >
                {stat.percent}%
              </span>
            </div>

            {/* Value + horizontal bar */}
            <div className="mb-5">
              <div className="text-5xl font-bold mb-4 text-white leading-none" style={{ color: stat.color }}>
                {shouldReduceMotion ? (
                  `${stat.value}${stat.suffix}`
                ) : isInView ? (
                  <CountUp end={stat.value} duration={2.2} suffix={stat.suffix} separator="," />
                ) : (
                  `${stat.value}${stat.suffix}`
                )}
              </div>
              <HorizontalBar percent={stat.percent} color={stat.color} animate={isInView} />
            </div>

            {/* Description */}
            <p className="text-sm text-white/50 text-center leading-relaxed mt-auto">
              {stat.description}
            </p>
          </CardContent>
        </LiquidCard>
      </motion.div>
    </div>
  );
}

/* ─── Main component ─── */
export function ImpactStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
      {stats.map((stat, index) => (
        <StatScoreCard key={stat.label} stat={stat} index={index} />
      ))}
    </div>
  );
}
