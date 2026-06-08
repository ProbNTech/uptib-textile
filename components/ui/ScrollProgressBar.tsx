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
          "linear-gradient(90deg, #047857 0%, #10B981 50%, #047857 100%)",
        boxShadow: "0 0 12px rgba(4,120,87,0.5)",
      }}
    />
  );
}
