"use client";

import { Calendar, Tag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  summary: string;
}

interface NewsUpdatesProps {
  items: NewsItem[];
}

export function NewsUpdates({ items }: NewsUpdatesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.article
          key={index}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: index * 0.07 }}
          className="group"
        >
          <div className="relative h-full bg-white border border-[#D8D5CF] hover:border-[#047857]/40 transition-colors duration-200 p-6 flex flex-col">
            {/* Category */}
            <div className="flex items-center gap-1.5 mb-4">
              <Tag className="w-3 h-3 text-[#047857]" />
              <span className="text-base font-bold text-[#047857] uppercase tracking-wide">
                {item.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading font-bold text-lg mb-3 text-[#1C1F2E] group-hover:text-[#047857] transition-colors duration-200 line-clamp-2 leading-snug">
              {item.title}
            </h3>

            {/* Summary */}
            <p className="text-base mb-5 leading-relaxed line-clamp-3 text-[#3D4152] flex-1">
              {item.summary}
            </p>

            <div className="h-px bg-[#D8D5CF] mb-4" />

            {/* Date */}
            <div className="flex items-center gap-2 text-base text-[#7A7E8F]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{item.date}</span>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
