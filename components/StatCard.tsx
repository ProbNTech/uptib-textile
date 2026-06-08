"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface StatCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export function StatCard({ icon, title, description, className = "", index = 0 }: StatCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
      className={`relative ${className}`}
    >
      <div className="relative h-full rounded border border-gray-100 bg-white p-8 shadow-md transition-all duration-500 group hover:shadow-lg hover:border-[#047857]/20 overflow-hidden">
        {/* Animated top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#047857] to-[#10B981] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        {icon && (
          <div className="relative z-10 mb-6 flex justify-center">
            <div className="relative w-20 h-20 rounded-full bg-[#F8FAFC] border border-gray-100 shadow-sm flex items-center justify-center group-hover:border-[#047857]/25 group-hover:shadow-md transition-all duration-500">
              <div className="relative z-10">{icon}</div>
            </div>
          </div>
        )}
        <div className="relative z-10">
          <h3 className="font-heading font-semibold text-xl mb-3 text-[#1F2937] group-hover:text-[#047857] transition-colors duration-300">{title}</h3>
          <p className="text-[#4B5563] text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
