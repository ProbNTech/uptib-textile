"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

// Brand colors
const BRAND_COLORS = {
  blue: "#047857",
  green: "#10B981",
};

interface AnimatedUnderlineProps {
  className?: string;
  thickness?: number | string;
  maxWidth?: number | string;
  align?: "center" | "left";
  animate?: boolean;
}

export function AnimatedUnderline({
  className = "",
  thickness = 4,
  maxWidth,
  align = "left",
  animate = true,
}: AnimatedUnderlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = animate && !shouldReduceMotion;

  const thicknessValue = typeof thickness === "number" ? `${thickness}px` : thickness;
  const maxWidthValue = maxWidth ? (typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth) : undefined;

  return (
    <motion.div
      className={`absolute -bottom-2 ${align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"} rounded-full overflow-hidden ${className}`}
      style={{
        height: thicknessValue,
        maxWidth: maxWidthValue,
      }}
      initial={shouldAnimate ? { width: 0 } : { width: "100%" }}
      animate={shouldAnimate ? { width: "100%" } : {}}
      transition={shouldAnimate ? { duration: 1.2, delay: 0.8, ease: "easeOut" } : {}}
    >
      <motion.div
        className="h-full w-full"
        style={{
          background: `linear-gradient(90deg, ${BRAND_COLORS.blue}, ${BRAND_COLORS.green}, ${BRAND_COLORS.blue})`,
          backgroundSize: "200% 100%",
        }}
        animate={
          shouldAnimate
            ? {
                backgroundPosition: ["0% 0%", "200% 0%"],
              }
            : {}
        }
        transition={
          shouldAnimate
            ? {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }
            : {}
        }
      />
    </motion.div>
  );
}
