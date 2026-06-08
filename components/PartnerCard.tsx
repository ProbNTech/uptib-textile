"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";
import type { FeaturedPartner } from "@/data/featured-partners";

const categoryThemes: Record<string, { gradient: string; glow: string; text: string; badge: string; ring: string }> = {
  "AI & Data":      { gradient: "linear-gradient(135deg, #059669 0%, #065F46 100%)", glow: "#059669", text: "#065F46", badge: "#ECFDF5",  ring: "#A7F3D0" },
  Fintech:          { gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)", glow: "#10B981", text: "#065F46", badge: "#ECFDF5",  ring: "#A7F3D0" },
  Cybersecurity:    { gradient: "linear-gradient(135deg, #F43F5E 0%, #BE123C 100%)", glow: "#F43F5E", text: "#9F1239", badge: "#FFF1F2",  ring: "#FECDD3" },
  Cloud:            { gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)", glow: "#8B5CF6", text: "#5B21B6", badge: "#F5F3FF",  ring: "#DDD6FE" },
  Consulting:       { gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)", glow: "#F59E0B", text: "#92400E", badge: "#FFFBEB",  ring: "#FDE68A" },
  HealthTech:       { gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)", glow: "#06B6D4", text: "#155E75", badge: "#ECFEFF",  ring: "#A5F3FC" },
};

function getTheme(category: string) {
  return categoryThemes[category] || categoryThemes["AI & Data"];
}

interface PartnerCardProps {
  partner: FeaturedPartner;
  index?: number;
  /** "image" renders the asset edge-to-edge (cover). "logo" centers the asset on a soft tinted background with padding (contain). */
  displayMode?: "image" | "logo";
}

export function PartnerCard({ partner, index = 0, displayMode = "image" }: PartnerCardProps) {
  const theme = getTheme(partner.category);
  const cardRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) return;
    const card = cardRef.current;
    const surface = surfaceRef.current;
    if (!card || !surface) return;
    const cx = e.clientX;
    const cy = e.clientY;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const rect = card.getBoundingClientRect();
      const xNorm = (cx - rect.left) / rect.width;
      const yNorm = (cy - rect.top) / rect.height;
      surface.style.setProperty("--tx", `${(yNorm - 0.5) * -6}deg`);
      surface.style.setProperty("--ty", `${(xNorm - 0.5) * 6}deg`);
      surface.style.setProperty("--gx", `${xNorm * 100}%`);
      surface.style.setProperty("--gy", `${yNorm * 100}%`);
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    const surface = surfaceRef.current;
    if (surface) {
      surface.style.transition = "transform 0.1s ease-out, box-shadow 0.4s ease";
    }
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const surface = surfaceRef.current;
    if (surface) {
      surface.style.transition = "transform 0.6s cubic-bezier(0.25,0.8,0.25,1), box-shadow 0.4s ease";
      surface.style.setProperty("--tx", "0deg");
      surface.style.setProperty("--ty", "0deg");
    }
    setIsHovered(false);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const initial = partner.name.charAt(0).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <div
        ref={cardRef}
        className="group relative h-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "900px" }}
      >
        <div
          ref={surfaceRef}
          className="relative flex flex-col h-full rounded-2xl overflow-hidden"
          style={{
            ["--tx" as string]: "0deg",
            ["--ty" as string]: "0deg",
            ["--gx" as string]: "50%",
            ["--gy" as string]: "50%",
            transform: `rotateX(var(--tx)) rotateY(var(--ty)) ${isHovered ? "translateY(-8px)" : "translateY(0)"}`,
            transition: "transform 0.6s cubic-bezier(0.25,0.8,0.25,1), box-shadow 0.4s ease",
            transformStyle: "preserve-3d",
            background: "#fff",
            boxShadow: isHovered
              ? `0 25px 50px -12px ${theme.glow}25, 0 12px 24px -8px rgba(0,0,0,0.06), 0 0 0 1px ${theme.glow}15`
              : "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px -2px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.03)",
          }}
        >
          {/* Top accent gradient bar */}
          <div
            className="h-1 w-full shrink-0 transition-[background] duration-500 ease-out"
            style={{
              background: isHovered ? theme.gradient : `linear-gradient(90deg, ${theme.glow}40, ${theme.glow}10)`,
            }}
          />

          {/* Cursor-following glow on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at var(--gx) var(--gy), ${theme.glow}08, transparent 50%)`,
            }}
          />


          {/* Image */}
          <div
            className="relative mx-4 mt-4 rounded-xl overflow-hidden"
            style={
              displayMode === "logo"
                ? { background: `linear-gradient(135deg, ${theme.badge} 0%, #ffffff 100%)` }
                : undefined
            }
          >
            <LazyImage
              src={partner.image}
              fallback="/image/placeholder.webp"
              inView={true}
              alt={partner.name}
              ratio={16 / 9}
              className={
                displayMode === "logo"
                  ? "object-contain p-6 transition-all duration-700 group-hover:scale-105"
                  : "transition-all duration-700 group-hover:scale-105"
              }
            />

            {/* Subtle vignette for depth */}
            <div
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{
                boxShadow:
                  displayMode === "logo"
                    ? "inset 0 0 20px rgba(0,0,0,0.03)"
                    : "inset 0 0 30px rgba(0,0,0,0.06)",
              }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
            {/* Company row: monogram + name + category */}
            <div className="flex items-start gap-3 mb-3">
              {/* Monogram circle */}
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: theme.gradient,
                  boxShadow: `0 4px 12px -2px ${theme.glow}40`,
                }}
              >
                {initial}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-extrabold text-[#1C1F2E] leading-tight truncate group-hover:text-[#111] transition-colors duration-300">
                  {partner.name}
                </h3>
                {/* Category badge */}
                <span
                  className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md"
                  style={{
                    background: theme.badge,
                    color: theme.text,
                    border: `1px solid ${theme.ring}`,
                  }}
                >
                  {partner.category}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[#e5e5e5] via-[#e5e5e5] to-transparent mb-3" />

            {/* Description */}
            <p className="text-[13px] text-[#6B7280] leading-[1.65] line-clamp-3 min-h-[64px]">
              {partner.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
