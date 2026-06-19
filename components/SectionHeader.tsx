"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const bannerThemes = {
  blue: { bg: "linear-gradient(135deg, #0E1318 0%, #0E1318 100%)", accent: "#2A3542", accentTo: "#0E1318", label: "#B3AA98" },
  red: { bg: "linear-gradient(135deg, #1E2733 0%, #1E2733 100%)", accent: "#3C4A5A", accentTo: "#1E2733", label: "#B3AA98" },
  green: { bg: "linear-gradient(135deg, #3C4A5A 0%, #1E2733 100%)", accent: "#8A857C", accentTo: "#3C4A5A", label: "#D8CDBA" },
};

interface SectionHeaderProps {
  title: string;
  label?: string;
  subtitle?: string | ReactNode;
  className?: string;
  color?: "blue" | "red" | "green";
  dark?: boolean;
}

export function SectionHeader({ title, label, subtitle, className = "", color = "blue", dark = false }: SectionHeaderProps) {
  const theme = bannerThemes[color];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className={`mb-4 lg:mb-5 ${className}`}>
      <div className="relative overflow-hidden rounded mb-3 -mx-2 sm:-mx-4" style={{ background: theme.bg }}>
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, ${theme.accent}, ${theme.accentTo})` }} />
        <div className="absolute top-0 right-0 w-40 h-full opacity-[0.06]" style={{ background: "radial-gradient(circle at 80% 30%, white 0%, transparent 70%)" }} />

        {/* Shimmer sweep on scroll */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
          }}
          initial={{ x: "-100%" }}
          animate={isInView && !shouldReduceMotion ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <div className="py-5 px-7 sm:px-10 pl-8 sm:pl-12">
          {label && (
            <motion.p
              className="text-base font-bold uppercase tracking-[0.2em] mb-1.5"
              style={{ color: theme.label }}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {label}
            </motion.p>
          )}
          <motion.h2
            className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h2>
        </div>
      </div>
      {subtitle && (
        <motion.p
          className={`text-base sm:text-lg leading-relaxed ${dark ? "text-white/60" : "text-[#3D4152]"}`}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
