"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const animationVariants = {
  "fade-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  "blur-in": {
    hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  animation?: "fade-up" | "blur-in" | "scale-in" | "slide-left" | "slide-right";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  stagger = false,
  animation = "fade-up",
  delay,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const variant = animationVariants[animation];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1 } : variant.hidden,
        visible: shouldReduceMotion ? { opacity: 1 } : variant.visible,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.6,
              delay: delay ?? 0,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: stagger ? 0.1 : undefined,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
