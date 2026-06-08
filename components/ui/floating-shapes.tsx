"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ── Single animated pill shape ─────────────────────────────── */
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  color = "#047857",
  duration = 14,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  color?: string;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute pointer-events-none", className)}
    >
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        {/* Main pill body */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${color}30, ${color}08 70%, transparent)`,
            border: `2px solid ${color}25`,
            boxShadow: `0 8px 50px ${color}20, inset 0 0 30px ${color}08`,
          }}
        />
        {/* Inner radial glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(ellipse at 30% 30%, ${color}25, transparent 60%)`,
          }}
        />
        {/* Highlight edge */}
        <div
          className="absolute inset-[2px] rounded-full"
          style={{
            background: `linear-gradient(160deg, ${color}15, transparent 50%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ── Shape presets for each variant ─────────────────────────── */
const variants = {
  focus: [
    { delay: 0.2, width: 550, height: 140, rotate: 12, color: "#047857", duration: 14, className: "left-[-6%] top-[8%]" },
    { delay: 0.5, width: 420, height: 110, rotate: -14, color: "#10B981", duration: 17, className: "right-[-3%] bottom-[0%]" },
    { delay: 0.8, width: 240, height: 65, rotate: 20, color: "#EAB308", duration: 12, className: "right-[18%] top-[2%]" },
    { delay: 1.0, width: 180, height: 50, rotate: -8, color: "#047857", duration: 15, className: "left-[30%] bottom-[5%] hidden md:block" },
  ],
  work: [
    { delay: 0.3, width: 520, height: 130, rotate: -10, color: "#047857", duration: 16, className: "right-[-5%] top-[12%]" },
    { delay: 0.6, width: 400, height: 105, rotate: 16, color: "#047857", duration: 13, className: "left-[-4%] bottom-[8%]" },
    { delay: 0.4, width: 220, height: 60, rotate: -22, color: "#10B981", duration: 18, className: "left-[12%] top-[2%]" },
    { delay: 0.9, width: 170, height: 48, rotate: 25, color: "#EAB308", duration: 14, className: "right-[15%] bottom-[3%] hidden md:block" },
  ],
  more: [
    { delay: 0.4, width: 480, height: 125, rotate: 14, color: "#10B981", duration: 15, className: "left-[-5%] bottom-[5%]" },
    { delay: 0.7, width: 320, height: 85, rotate: -12, color: "#EAB308", duration: 13, className: "right-[-2%] top-[10%]" },
    { delay: 0.5, width: 200, height: 55, rotate: 22, color: "#047857", duration: 17, className: "right-[22%] bottom-[2%] hidden md:block" },
    { delay: 1.1, width: 260, height: 70, rotate: -18, color: "#047857", duration: 14, className: "left-[20%] top-[3%] hidden md:block" },
  ],
} as const;

/* ── Exported component ────────────────────────────────────── */
export function FloatingShapes({
  variant = "focus",
  className,
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  const shapes = variants[variant];

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      {shapes.map((shape, i) => (
        <ElegantShape key={`${variant}-${i}`} {...shape} />
      ))}
    </div>
  );
}
