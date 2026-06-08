"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientCardProps {
  children: ReactNode;
  gradientFrom: string;
  gradientTo: string;
  className?: string;
  skewDeg?: number;
}

export function GradientCard({
  children,
  gradientFrom,
  gradientTo,
  className,
  skewDeg = -6,
}: GradientCardProps) {
  return (
    <motion.div
      className={cn("group/card relative", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Skewed gradient panel — the hero visual */}
      <div
        className="absolute -inset-1 rounded-2xl transition-all duration-500 group-hover/card:scale-105 group-hover/card:opacity-100 opacity-80"
        style={{
          transform: `rotate(${skewDeg}deg) scale(0.98)`,
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      />

      {/* Glow blob behind the card */}
      <div
        className="absolute inset-0 rounded-2xl blur-2xl opacity-40 transition-opacity duration-500 group-hover/card:opacity-60"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${gradientFrom}80, ${gradientTo}40, transparent 70%)`,
        }}
      />

      {/* Card body */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/60 shadow-lg transition-all duration-500 group-hover/card:shadow-2xl group-hover/card:-translate-y-1">
        {children}
      </div>
    </motion.div>
  );
}
