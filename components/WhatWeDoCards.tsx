"use client";

import { useRef, useCallback, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface WhatWeDoItem {
  id: number;
  title: string;
  content: string;
  icon?: React.ElementType;
  href: string;
  color: string;
  image?: string;
}

interface WhatWeDoCardsProps {
  items: WhatWeDoItem[];
  /** Eyebrow label above the row heading (e.g. "Services"). Optional. */
  eyebrow?: string;
  /** The audience name displayed in the row heading — coloured in accent. */
  audience?: string;
  /** Single-line supporting copy beneath the heading. Optional. */
  context?: string;
  /** Accent colour applied to the rule, eyebrow, and audience name. */
  accentColor?: string;
  /** When true, the header text uses light colors for use on dark backgrounds. */
  light?: boolean;
}

/* ────────────────────────────────────────────
   Single card with cursor-following glow,
   gradient glass background, premium shadows,
   and smooth hover lift
   ──────────────────────────────────────────── */
function Card({ item, index }: { item: WhatWeDoItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) return;
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const rect = card.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      glow.style.setProperty("--gx", `${x}%`);
      glow.style.setProperty("--gy", `${y}%`);
    });
  }, []);

  const handleSurfaceEnter = useCallback(() => {
    const el = surfaceRef.current;
    if (!el) return;
    el.style.borderColor = `${item.color}30`;
    el.style.boxShadow = `0 20px 60px -15px ${item.color}25, 0 8px 24px -8px rgba(0,0,0,0.08)`;
  }, [item.color]);

  const handleSurfaceLeave = useCallback(() => {
    const el = surfaceRef.current;
    if (!el) return;
    el.style.borderColor = `${item.color}15`;
    el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)";
  }, [item.color]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
    >
      {/* ── Card surface ── */}
      <div
        ref={surfaceRef}
        className="relative h-full rounded-2xl overflow-hidden p-8 lg:p-10 transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-1.5 [transform:translateZ(0)]"
        style={{
          background: `linear-gradient(135deg, white 60%, ${item.color}08 100%)`,
          border: `1px solid ${item.color}15`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)",
        }}
        onMouseEnter={handleSurfaceEnter}
        onMouseLeave={handleSurfaceLeave}
      >
        {/* Cursor-following radial glow */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(500px circle at var(--gx, 50%) var(--gy, 50%), ${item.color}14 0%, transparent 50%)`,
          }}
        />

        {/* Top accent gradient bar */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, ${item.color}, ${item.color}60, transparent)`,
          }}
        />

        {/* ── Icon / Image ── */}
        <div className="relative mb-5">
          {item.image ? (
            <div className="relative w-[76px] h-[76px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="76px"
              />
            </div>
          ) : item.icon ? (
            <div
              className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-full"
              style={{ background: `${item.color}14` }}
            >
              {(() => { const Icon = item.icon!; return <Icon className="w-9 h-9" style={{ color: item.color }} />; })()}
            </div>
          ) : null}
        </div>

        {/* ── Title ── */}
        <h4 className="text-[22px] font-extrabold mb-3 text-[#16291E] tracking-tight leading-tight">
          {item.title}
        </h4>

        {/* ── Description ── */}
        <p className="text-[15px] text-[#5A5F72] leading-[1.7] mb-8">
          {item.content}
        </p>

        {/* ── CTA link with animated underline ── */}
        <Link
          href={item.href}
          className="group/link inline-flex items-center gap-2 font-bold text-[15px]"
          style={{ color: item.color }}
        >
          <span className="relative">
            Explore
            <span
              aria-hidden="true"
              className="absolute -bottom-0.5 left-0 h-[2px] w-0 group-hover/link:w-full rounded-full transition-[width] duration-300 ease-out"
              style={{ background: item.color }}
            />
          </span>
          <ArrowRight
            size={18}
            className="transition-transform duration-200 ease-out group-hover/link:translate-x-1.5"
          />
        </Link>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   Grid wrapper
   ──────────────────────────────────────────── */
export default function WhatWeDoCards({
  items,
  eyebrow,
  audience,
  context,
  accentColor,
  light = false,
}: WhatWeDoCardsProps) {
  const hasHeader = Boolean((eyebrow || audience) && accentColor);

  return (
    <div>
      {hasHeader && (
        <div className="mb-8 lg:mb-10">
          {eyebrow && (
            <div className="flex items-center gap-3 mb-3">
              <span
                className="block w-12 h-[3px] rounded-full"
                style={{ background: accentColor }}
                aria-hidden="true"
              />
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: accentColor }}
              >
                {eyebrow}
              </p>
            </div>
          )}
          {audience && (
            <h3 className={`font-heading font-extrabold text-2xl sm:text-3xl lg:text-[2rem] leading-[1.15] tracking-tight ${light ? "text-white" : "text-[#16291E]"}`}>
              For{" "}
              <span style={{ color: accentColor }}>{audience}</span>
            </h3>
          )}
          {context && (
            <p className={`mt-3 text-base sm:text-lg leading-relaxed max-w-2xl ${light ? "text-gray-300" : "text-[#5A5F72]"}`}>
              {context}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 lg:gap-9 mt-4">
        {items.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
