"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AwardsHeroBg() {
  const shouldReduceMotion = useReducedMotion();

  const shimmer = (delay: number, duration = 3) =>
    shouldReduceMotion
      ? {}
      : {
          animate: { opacity: [0.08, 0.2, 0.08] },
          transition: { duration, delay, repeat: Infinity, ease: "easeInOut" },
        };

  const float = (delay: number, duration = 4) =>
    shouldReduceMotion
      ? {}
      : {
          animate: { y: [0, -8, 0] },
          transition: { duration, delay, repeat: Infinity, ease: "easeInOut" },
        };

  const sparkle = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          animate: { opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] },
          transition: { duration: 2, delay, repeat: Infinity, ease: "easeInOut" },
        };

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {/* Radial ambient glows */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        {...(shouldReduceMotion ? {} : {
          animate: { scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] },
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        })}
      />
      <motion.div
        className="absolute bottom-[5%] left-[20%] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(4,120,87,0.06) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
        {...(shouldReduceMotion ? {} : {
          animate: { scale: [1, 1.08, 1] },
          transition: { duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" },
        })}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* ── Large trophy silhouette (center-right) ── */}
        <motion.g opacity="0.06" {...float(0, 6)}>
          {/* Cup */}
          <path
            d="M820 160 L820 340 Q820 400 900 400 Q980 400 980 340 L980 160 Z"
            fill="url(#trophyGold)"
          />
          {/* Left handle */}
          <path
            d="M820 200 L790 200 Q760 200 760 240 Q760 280 790 280 L820 280"
            fill="none"
            stroke="url(#trophyGold)"
            strokeWidth="8"
          />
          {/* Right handle */}
          <path
            d="M980 200 L1010 200 Q1040 200 1040 240 Q1040 280 1010 280 L980 280"
            fill="none"
            stroke="url(#trophyGold)"
            strokeWidth="8"
          />
          {/* Stem */}
          <rect x="880" y="400" width="40" height="60" rx="4" fill="url(#trophyGold)" />
          {/* Base */}
          <rect x="840" y="460" width="120" height="16" rx="8" fill="url(#trophyGold)" />
          <rect x="855" y="476" width="90" height="10" rx="5" fill="url(#trophyGold)" />
          {/* Star on cup */}
          <path
            d="M900 230 L910 260 L942 262 L918 282 L926 314 L900 296 L874 314 L882 282 L858 262 L890 260 Z"
            fill="url(#trophyGold)"
            opacity="0.5"
          />
        </motion.g>

        {/* ── Left laurel wreath ── */}
        <motion.g {...shimmer(0, 4)}>
          {/* Left branch */}
          <g transform="translate(100, 120)">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => {
              const y = i * 48;
              const curve = Math.sin((i / 6) * Math.PI) * 30;
              return (
                <g key={`ll-${i}`}>
                  <ellipse
                    cx={80 - curve}
                    cy={y + 20}
                    rx="18"
                    ry="10"
                    fill="#10B981"
                    opacity="0.15"
                    transform={`rotate(${-30 + i * 8} ${80 - curve} ${y + 20})`}
                  />
                  <ellipse
                    cx={80 - curve + 5}
                    cy={y + 20}
                    rx="14"
                    ry="7"
                    fill="#10B981"
                    opacity="0.08"
                    transform={`rotate(${-25 + i * 8} ${80 - curve + 5} ${y + 20})`}
                  />
                </g>
              );
            })}
            {/* Stem */}
            <path
              d="M80 20 Q50 180 80 340"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              opacity="0.12"
            />
          </g>
        </motion.g>

        {/* ── Right laurel wreath ── */}
        <motion.g {...shimmer(1, 4)}>
          <g transform="translate(1240, 120)">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => {
              const y = i * 48;
              const curve = Math.sin((i / 6) * Math.PI) * 30;
              return (
                <g key={`rl-${i}`}>
                  <ellipse
                    cx={20 + curve}
                    cy={y + 20}
                    rx="18"
                    ry="10"
                    fill="#10B981"
                    opacity="0.15"
                    transform={`rotate(${30 - i * 8} ${20 + curve} ${y + 20})`}
                  />
                  <ellipse
                    cx={20 + curve - 5}
                    cy={y + 20}
                    rx="14"
                    ry="7"
                    fill="#10B981"
                    opacity="0.08"
                    transform={`rotate(${25 - i * 8} ${20 + curve - 5} ${y + 20})`}
                  />
                </g>
              );
            })}
            <path
              d="M20 20 Q50 180 20 340"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              opacity="0.12"
            />
          </g>
        </motion.g>

        {/* ── Scattered stars ── */}
        {[
          { x: 200, y: 80, size: 14, delay: 0, color: "#EAB308" },
          { x: 1300, y: 100, size: 12, delay: 0.5, color: "#EAB308" },
          { x: 400, y: 500, size: 10, delay: 1, color: "#047857" },
          { x: 1100, y: 480, size: 12, delay: 1.5, color: "#EAB308" },
          { x: 680, y: 60, size: 8, delay: 0.8, color: "#047857" },
          { x: 300, y: 300, size: 10, delay: 2, color: "#047857" },
          { x: 1250, y: 340, size: 8, delay: 1.2, color: "#10B981" },
          { x: 550, y: 520, size: 10, delay: 0.3, color: "#EAB308" },
          { x: 150, y: 450, size: 6, delay: 1.8, color: "#047857" },
          { x: 1350, y: 200, size: 8, delay: 0.6, color: "#EAB308" },
          { x: 750, y: 540, size: 7, delay: 2.2, color: "#047857" },
          { x: 480, y: 120, size: 6, delay: 1.6, color: "#10B981" },
        ].map((star, i) => {
          const s = star.size;
          const path = `M${star.x} ${star.y - s} L${star.x + s * 0.38} ${star.y - s * 0.3} L${star.x + s} ${star.y - s * 0.2} L${star.x + s * 0.5} ${star.y + s * 0.2} L${star.x + s * 0.62} ${star.y + s} L${star.x} ${star.y + s * 0.55} L${star.x - s * 0.62} ${star.y + s} L${star.x - s * 0.5} ${star.y + s * 0.2} L${star.x - s} ${star.y - s * 0.2} L${star.x - s * 0.38} ${star.y - s * 0.3} Z`;
          return (
            <motion.path
              key={i}
              d={path}
              fill={star.color}
              {...sparkle(star.delay)}
            />
          );
        })}

        {/* ── Diagonal ribbon lines ── */}
        <motion.line x1="0" y1="0" x2="300" y2="600" stroke="#EAB308" strokeWidth="1" opacity="0.04" {...shimmer(0.5, 5)} />
        <motion.line x1="50" y1="0" x2="350" y2="600" stroke="#EAB308" strokeWidth="0.5" opacity="0.03" {...shimmer(1, 5)} />
        <motion.line x1="1440" y1="0" x2="1140" y2="600" stroke="#EAB308" strokeWidth="1" opacity="0.04" {...shimmer(1.5, 5)} />
        <motion.line x1="1390" y1="0" x2="1090" y2="600" stroke="#EAB308" strokeWidth="0.5" opacity="0.03" {...shimmer(2, 5)} />

        {/* ── Medal circles ── */}
        <motion.g {...float(1, 5)}>
          <circle cx="200" cy="180" r="35" fill="none" stroke="#EAB308" strokeWidth="1.5" opacity="0.08" />
          <circle cx="200" cy="180" r="28" fill="none" stroke="#EAB308" strokeWidth="1" opacity="0.06" />
          {/* Ribbon */}
          <path d="M180 148 L175 120 M220 148 L225 120" stroke="#047857" strokeWidth="1.5" opacity="0.08" />
        </motion.g>

        <motion.g {...float(2, 5.5)}>
          <circle cx="1280" cy="420" r="30" fill="none" stroke="#EAB308" strokeWidth="1.5" opacity="0.08" />
          <circle cx="1280" cy="420" r="24" fill="none" stroke="#EAB308" strokeWidth="1" opacity="0.06" />
          <path d="M1262 394 L1258 370 M1298 394 L1302 370" stroke="#047857" strokeWidth="1.5" opacity="0.08" />
        </motion.g>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="trophyGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EAB308" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
