"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";

export interface NewsCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  index?: number;
  /** When true, uses light text colors suitable for dark backgrounds. */
  light?: boolean;
}

/* Brand-color mapping for category dots */
const categoryColors: Record<string, string> = {
  Policy: "#047857",
  Events: "#047857",
  Investment: "#10B981",
  Leadership: "#1C1F2E",
  Technology: "#047857",
  Industry: "#EAB308",
  Innovation: "#10B981",
  Cybersecurity: "#047857",
  Funding: "#EAB308",
  Research: "#047857",
  Awards: "#EAB308",
  Regulation: "#047857",
};

function getCategoryColor(category: string): string {
  return categoryColors[category] || "#047857";
}

export function NewsCard({ slug, title, category, date, image, excerpt, index = 0, light = false }: NewsCardProps) {
  const color = getCategoryColor(category);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/news/${slug}`}
        className={`group flex h-full flex-col gap-2 rounded-lg p-2 duration-75 active:scale-[0.99] ${
          light ? "hover:bg-white/[0.06]" : "hover:bg-[#E8E6E3]/60 active:bg-[#E8E6E3]"
        }`}
      >
        <LazyImage
          src={image}
          inView={false}
          alt={title}
          ratio={16 / 9}
          className="transition-all duration-500 group-hover:scale-105"
          AspectRatioClassName={light ? "border-white/10" : "border-[#D8D5CF]"}
        />
        <div className="space-y-2 px-2 pb-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <p
              className="font-bold uppercase tracking-[0.12em]"
              style={{ color: light ? "rgba(255,255,255,0.92)" : color }}
            >
              {category}
            </p>
            <div className="size-1.5 rounded-full" style={{ background: color, boxShadow: light ? `0 0 8px ${color}` : "none" }} />
            <p className={`font-medium ${light ? "text-gray-200" : "text-[#5A5F72]"}`}>
              {date}
            </p>
          </div>
          <h2 className={`line-clamp-2 text-lg leading-5 font-semibold tracking-tight ${light ? "text-white group-hover:text-[#86efac]" : "text-[#1C1F2E]"} transition-colors duration-200`}>
            {title}
          </h2>
          <p className={`line-clamp-3 text-sm ${light ? "text-gray-300" : "text-[#3D4152]/70"}`}>
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
