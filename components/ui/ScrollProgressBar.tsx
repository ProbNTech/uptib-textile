"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left pointer-events-none"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #1E2733 0%, #1E2733 50%, #1E2733 100%)",
        boxShadow: "0 0 12px rgba(60, 74, 90,0.5)",
      }}
    />
  );
}
