"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ComparisonBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: string;
  suffix?: string;
  delay?: number;
}

export function ComparisonBar({
  label,
  value,
  maxValue = 100,
  color = "#047857",
  suffix = "%",
  delay = 0,
}: ComparisonBarProps) {
  const shouldReduceMotion = useReducedMotion();
  const percentage = (value / maxValue) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[#3D4152]">{label}</span>
        <span className="text-sm font-bold" style={{ color }}>
          {value}
          {suffix}
        </span>
      </div>
      <div className="h-3 bg-[#f0f0ee] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: shouldReduceMotion ? `${percentage}%` : "0%" }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}
