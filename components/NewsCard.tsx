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
  Policy: "#2F7549",
  Events: "#2F7549",
  Investment: "#3E8F5E",
  Leadership: "#16291E",
  Technology: "#2F7549",
  Industry: "#EAB308",
  Innovation: "#3E8F5E",
  Cybersecurity: "#2F7549",
  Funding: "#EAB308",
  Research: "#2F7549",
  Awards: "#EAB308",
  Regulation: "#2F7549",
};

function getCategoryColor(category: string): string {
  return categoryColors[category] || "#2F7549";
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
        className={`flex h-full flex-col gap-2 rounded-lg p-2 ${
          light ? "bg-[#15402A]/70 backdrop-blur-sm border border-white/10" : ""
        }`}
      >
        <LazyImage
          src={image}
          inView={false}
          alt={title}
          ratio={16 / 9}
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
          <h2 className={`line-clamp-2 text-lg leading-5 font-semibold tracking-tight ${light ? "text-white" : "text-[#16291E]"}`}>
            {title}
          </h2>
          <p className={`line-clamp-3 text-sm ${light ? "text-white/85" : "text-[#3D4152]/70"}`}>
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
