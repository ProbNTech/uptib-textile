"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, Scale, Eye } from "lucide-react";

export function GovernanceBadges() {
  const shouldReduceMotion = useReducedMotion();
  const badges = [
    { label: "Advisory Committee", icon: Users, color: "#10B981", bg: "border-[#10B981]/25 bg-[#10B981]/10" },
    { label: "Ethical Standards", icon: Scale, color: "#047857", bg: "border-[#047857]/25 bg-[#047857]/10" },
    { label: "Full Transparency", icon: Eye, color: "#047857", bg: "border-[#047857]/25 bg-[#047857]/10" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.label}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -3 }}
            className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-full border ${badge.bg} text-[#1F2937] text-base font-semibold transition-all duration-300 group cursor-default`}
          >
            <Icon className="w-4 h-4" style={{ color: badge.color }} />
            <span className="relative z-10">{badge.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
