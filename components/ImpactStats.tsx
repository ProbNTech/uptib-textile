"use client";

import { useEffect, useRef } from "react";
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

/* ─── Half-circle gauge ─── */
function HalfCircleGauge({ percent, color, animate }: { percent: number; color: string; animate: boolean }) {
  const strokeRef = useRef<SVGCircleElement>(null);
  const gradIdRef = useRef(`gauge-${Math.random().toString(36).slice(2, 6)}`);
  const gradId = gradIdRef.current;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const halfCirc = circumference / 2;
  const strokeDasharray = `${halfCirc} ${halfCirc}`;
  const targetOffset = -Math.min(percent / 100, 1) * halfCirc;

  useEffect(() => {
    if (!animate || !strokeRef.current) return;
    strokeRef.current.animate(
      [
        { strokeDashoffset: "0", offset: 0 },
        { strokeDashoffset: "0", offset: 0.3 },
        { strokeDashoffset: targetOffset.toString() },
      ],
      {
        duration: 1400,
        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        fill: "forwards",
      },
    );
  }, [animate, targetOffset]);

  return (
    <svg className="block mx-auto w-auto max-w-full h-32" viewBox="0 0 100 50" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={`${color}60`} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={`${color}90`} />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="10" transform="translate(50, 50.5)">
        <circle className="stroke-white/10" r={radius} strokeDasharray={strokeDasharray} />
        <circle
          ref={strokeRef}
          stroke={`url(#${gradId})`}
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          r={radius}
        />
      </g>
    </svg>
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

            {/* Half-circle gauge + value */}
            <div className="relative mb-4">
              <HalfCircleGauge percent={stat.percent} color={stat.color} animate={isInView} />
              <div className="absolute bottom-0 w-full text-center">
                <div className="text-4xl font-bold h-12 overflow-hidden text-white">
                  {shouldReduceMotion ? (
                    `${stat.value}${stat.suffix}`
                  ) : isInView ? (
                    <CountUp end={stat.value} duration={2.2} suffix={stat.suffix} separator="," />
                  ) : (
                    `${stat.value}${stat.suffix}`
                  )}
                </div>
              </div>
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
