"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ShieldCheck, ArrowDown } from "lucide-react";
import { memberCompanies } from "@/lib/memberCompanies";

interface PakistanCompaniesHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
}

const CHIPS = [
  "AI & Automation",
  "SaaS Products",
  "Software Development",
  "Consulting",
  "Cloud & DevOps",
  "Cybersecurity",
  "Data Analytics",
  "Custom Software",
  "Mobile Apps",
  "Digital Transformation",
];

/** Pre-computed pseudo-random positions for the chip cloud (so SSR/CSR match). */
const chipLayout: Array<{ x: number; y: number; delay: number; duration: number; opacity: number }> = [
  { x: 5, y: 28, delay: 0.0, duration: 9, opacity: 0.55 },
  { x: 18, y: 72, delay: 0.6, duration: 11, opacity: 0.75 },
  { x: 30, y: 18, delay: 0.3, duration: 10, opacity: 0.65 },
  { x: 44, y: 88, delay: 0.9, duration: 8, opacity: 0.7 },
  { x: 56, y: 30, delay: 0.2, duration: 12, opacity: 0.6 },
  { x: 66, y: 70, delay: 0.7, duration: 9.5, opacity: 0.8 },
  { x: 78, y: 22, delay: 0.4, duration: 11, opacity: 0.7 },
  { x: 88, y: 60, delay: 1.0, duration: 10, opacity: 0.55 },
  { x: 12, y: 50, delay: 0.5, duration: 8.5, opacity: 0.45 },
  { x: 72, y: 50, delay: 0.85, duration: 9.5, opacity: 0.5 },
];

export function PakistanCompaniesHero({
  eyebrow = "Pakistan's Top Companies",
  title,
  subtitle,
}: PakistanCompaniesHeroProps) {
  const reduce = useReducedMotion();
  const count = memberCompanies.length;
  const locations = new Set(memberCompanies.map((c) => c.country)).size;

  const words = title.split(" ");
  const lastWordStart = words.length > 2 ? words.length - 2 : 0;

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 1200px 700px at 50% 0%, rgba(31,79,216,0.28), transparent 70%), radial-gradient(ellipse 1000px 600px at 50% 100%, rgba(1,169,92,0.22), transparent 70%), linear-gradient(180deg, #050B16 0%, #052e26 60%, #052e26 100%)",
      }}
      aria-labelledby="pak-companies-hero-title"
    >
      {/* ─── Layer 1 — fine dot grid ────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(155,194,255,0.45) 0.7px, transparent 0.7px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      {/* ─── Layer 2 — spotlight (large blurred ellipse) ── */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 35% 50% at 50% 0%, rgba(155,194,255,0.35) 0%, rgba(155,194,255,0) 60%)",
          filter: "blur(40px)",
        }}
        animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ─── Layer 3 — aurora gradient blobs ──────────────── */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-32 top-1/4 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(31,79,216,0.55) 0%, rgba(31,79,216,0) 70%)",
          filter: "blur(80px)",
        }}
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(1,169,92,0.50) 0%, rgba(1,169,92,0) 70%)",
          filter: "blur(85px)",
        }}
        animate={reduce ? undefined : { x: [0, -25, 0], y: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,216,107,0.18) 0%, rgba(255,216,107,0) 70%)",
          filter: "blur(70px)",
        }}
        animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ─── Layer 4 — animated beams (SVG paths) ──────────── */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      >
        <defs>
          <linearGradient id="pkh-beam-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(155,194,255,0)" />
            <stop offset="50%" stopColor="rgba(155,194,255,0.7)" />
            <stop offset="100%" stopColor="rgba(155,194,255,0)" />
          </linearGradient>
          <linearGradient id="pkh-beam-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(111,231,180,0)" />
            <stop offset="50%" stopColor="rgba(111,231,180,0.7)" />
            <stop offset="100%" stopColor="rgba(111,231,180,0)" />
          </linearGradient>
          <linearGradient id="pkh-beam-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,216,107,0)" />
            <stop offset="50%" stopColor="rgba(255,216,107,0.6)" />
            <stop offset="100%" stopColor="rgba(255,216,107,0)" />
          </linearGradient>
        </defs>

        {/* 3 horizontal beams sliding across with stagger */}
        <motion.rect
          x="-300"
          y="160"
          width="300"
          height="1.5"
          fill="url(#pkh-beam-1)"
          animate={reduce ? undefined : { x: [-300, 1500] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0 }}
        />
        <motion.rect
          x="-300"
          y="420"
          width="300"
          height="1.5"
          fill="url(#pkh-beam-2)"
          animate={reduce ? undefined : { x: [-300, 1500] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
        <motion.rect
          x="-300"
          y="640"
          width="300"
          height="1.5"
          fill="url(#pkh-beam-3)"
          animate={reduce ? undefined : { x: [-300, 1500] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 3 }}
        />
      </svg>

      {/* ─── Layer 5 — floating category chips (subtle, behind text) ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {chipLayout.map((pos, i) => (
          <motion.span
            key={CHIPS[i]}
            className="absolute rounded-full border border-white/12 bg-white/[0.04] backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-white/65 whitespace-nowrap"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, opacity: pos.opacity }}
            initial={reduce ? {} : { y: 0, opacity: 0 }}
            animate={
              reduce
                ? { opacity: pos.opacity }
                : { y: [0, -14, 0], opacity: [pos.opacity * 0.5, pos.opacity, pos.opacity * 0.5] }
            }
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: pos.delay,
            }}
          >
            {CHIPS[i]}
          </motion.span>
        ))}
      </div>

      {/* ─── Layer 6 — content ─────────────────────────────── */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow pill */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_30px_-10px_rgba(155,194,255,0.6)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD86B]" />
            {eyebrow}
          </motion.div>

          {/* Mega title with per-word reveal + gradient on the last two words */}
          <motion.h1
            id="pak-companies-hero-title"
            initial={reduce ? {} : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-7 font-heading font-extrabold text-white tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-[5rem]"
          >
            {words.map((w, i) => {
              const isAccent = i >= lastWordStart;
              return (
                <motion.span
                  key={i}
                  initial={reduce ? {} : { opacity: 0, y: 22, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.1 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.28em] last:mr-0"
                  style={
                    isAccent
                      ? {
                          background:
                            "linear-gradient(120deg, #6FA9FF 0%, #FFFFFF 35%, #6FE7B4 70%, #FFD86B 100%)",
                          backgroundSize: "200% 100%",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          animation: reduce ? undefined : "pkhShimmer 6s ease-in-out infinite",
                        }
                      : {
                          background: "linear-gradient(180deg, #FFFFFF 0%, #DCE7FF 100%)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                  }
                >
                  {w}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-7 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-white/75"
          >
            {subtitle}
          </motion.p>

          {/* Trust strip with stat pills */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-sm px-4 py-2 text-sm text-white">
              <ShieldCheck className="w-4 h-4 text-[#6FE7B4]" />
              <strong className="font-semibold">{count}</strong>
              <span className="text-white/65">verified members</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-sm px-4 py-2 text-sm text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD86B]" />
              <strong className="font-semibold">{locations}</strong>
              <span className="text-white/65">
                {locations === 1 ? "country" : "countries"}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-sm px-4 py-2 text-sm text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9BC2FF]" />
              <span className="text-white/65">Curated by UPTIB</span>
            </span>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={reduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex justify-center"
            aria-hidden="true"
          >
            <motion.div
              className="text-white/40"
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* UK + PK brand accent gradient — bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, #047857 0%, #6FE7B4 50%, #047857 100%)",
        }}
      />

      {/* Shimmer keyframes for the accent words */}
      <style jsx global>{`
        @keyframes pkhShimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
