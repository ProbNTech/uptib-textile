"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SkillDevHeroIllustration() {
  const shouldReduceMotion = useReducedMotion();

  const float = (delay: number, duration = 3) =>
    shouldReduceMotion
      ? {}
      : {
          animate: { y: [0, -12, 0] },
          transition: { duration, delay, repeat: Infinity, ease: "easeInOut" },
        };

  const glow = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          animate: { opacity: [0.6, 1, 0.6] },
          transition: { duration: 2.5, delay, repeat: Infinity, ease: "easeInOut" },
        };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow behind laptop */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(4,120,87,0.15) 0%, rgba(16,185,129,0.06) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
        {...(shouldReduceMotion ? {} : {
          animate: { scale: [1, 1.08, 1] },
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        })}
      />

      <svg
        viewBox="0 0 520 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full max-w-[540px] h-auto"
      >
        {/* ── Laptop body ── */}
        <motion.g {...float(0, 4)}>
          {/* Screen */}
          <rect x="120" y="145" width="280" height="170" rx="14" fill="#1C1F2E" stroke="#047857" strokeWidth="2" />
          <rect x="132" y="157" width="256" height="146" rx="7" fill="#064E3B" />

          {/* Screen content - code lines */}
          <motion.rect x="150" y="178" width="110" height="5" rx="2.5" fill="#047857" {...glow(0)} />
          <motion.rect x="150" y="192" width="78" height="5" rx="2.5" fill="#10B981" {...glow(0.3)} />
          <motion.rect x="150" y="206" width="140" height="5" rx="2.5" fill="#047857" opacity="0.7" {...glow(0.6)} />
          <motion.rect x="150" y="220" width="95" height="5" rx="2.5" fill="#047857" {...glow(0.9)} />
          <motion.rect x="150" y="234" width="120" height="5" rx="2.5" fill="#10B981" opacity="0.7" {...glow(1.2)} />

          {/* Screen chart/graph */}
          <motion.g {...glow(0.5)}>
            <rect x="300" y="175" width="72" height="65" rx="5" fill="#1C1F2E" />
            <rect x="309" y="218" width="10" height="16" rx="2" fill="#047857" />
            <rect x="323" y="206" width="10" height="28" rx="2" fill="#10B981" />
            <rect x="337" y="194" width="10" height="40" rx="2" fill="#047857" />
            <rect x="351" y="182" width="10" height="52" rx="2" fill="#047857" />
          </motion.g>

          {/* Progress bar on screen */}
          <rect x="300" y="252" width="72" height="7" rx="3.5" fill="#1C1F2E" />
          <motion.rect
            x="300" y="252" width="72" height="7" rx="3.5" fill="#10B981"
            {...(shouldReduceMotion ? {} : {
              animate: { width: [0, 72] },
              transition: { duration: 2, delay: 1, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" },
            })}
          />

          {/* Laptop base */}
          <path d="M98 315 L120 315 L120 319 Q120 324 125 324 L395 324 Q400 324 400 319 L400 315 L422 315 Q428 315 426 322 L416 338 Q414 342 409 342 L111 342 Q106 342 104 338 L94 322 Q92 315 98 315 Z" fill="#1C1F2E" stroke="#047857" strokeWidth="1.5" />
          <ellipse cx="260" cy="320" rx="22" ry="2.5" fill="#047857" opacity="0.25" />
        </motion.g>

        {/* ── Lightbulb icon (top-left) — no boundary ── */}
        <motion.g {...float(0.5, 3.5)}>
          {/* Soft glow */}
          <motion.circle cx="55" cy="80" r="20" fill="#10B981" opacity="0.12" filter="url(#softBlur)" {...glow(0)} />
          {/* Bulb */}
          <path d="M55 58 C40 58 29 69 29 82 C29 91 35 99 44 102 L44 110 Q44 113 47 113 L63 113 Q66 113 66 110 L66 102 C75 99 81 91 81 82 C81 69 70 58 55 58Z" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Filament lines */}
          <line x1="49" y1="113" x2="61" y2="113" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="117" x2="60" y2="117" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
          {/* Inner glow */}
          <motion.circle cx="55" cy="80" r="10" fill="#10B981" opacity="0.2" {...glow(0)} />
          {/* Rays */}
          <motion.g stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" {...glow(0.2)}>
            <line x1="55" y1="38" x2="55" y2="46" />
            <line x1="30" y1="57" x2="36" y2="63" />
            <line x1="80" y1="57" x2="74" y2="63" />
            <line x1="18" y1="82" x2="26" y2="82" />
            <line x1="92" y1="82" x2="84" y2="82" />
          </motion.g>
        </motion.g>

        {/* ── Graduation cap (top-right) — no boundary ── */}
        <motion.g {...float(1, 3.2)}>
          <motion.circle cx="440" cy="55" r="18" fill="#047857" opacity="0.1" filter="url(#softBlur)" {...glow(0.5)} />
          {/* Cap diamond */}
          <path d="M412 52 L440 36 L468 52 L440 68 Z" fill="#047857" opacity="0.9" />
          {/* Cap top highlight */}
          <path d="M426 52 L440 43 L454 52 L440 61 Z" fill="#047857" />
          {/* Tassel line */}
          <line x1="440" y1="68" x2="440" y2="84" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="440" cy="86" r="2.5" fill="#047857" />
          {/* Side drape */}
          <path d="M424 56 L424 70 Q440 80 456 70 L456 56" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* ── Gear/cog icon (right) — no boundary ── */}
        <motion.g {...float(1.5, 2.8)}>
          <motion.circle cx="478" cy="210" r="16" fill="#047857" opacity="0.1" filter="url(#softBlur)" {...glow(1)} />
          <motion.g
            style={{ transformOrigin: "478px 210px" }}
            {...(shouldReduceMotion ? {} : {
              animate: { rotate: 360 },
              transition: { duration: 10, repeat: Infinity, ease: "linear" },
            })}
          >
            {/* Outer gear teeth */}
            {[0, 60, 120, 180, 240, 300].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x = 478 + Math.cos(rad) * 24;
              const y = 210 + Math.sin(rad) * 24;
              return (
                <rect key={angle} x={x - 5} y={y - 5} width="10" height="10" rx="2" fill="#047857" transform={`rotate(${angle} ${x} ${y})`} />
              );
            })}
            {/* Outer ring */}
            <circle cx="478" cy="210" r="18" fill="none" stroke="#047857" strokeWidth="2.5" />
            {/* Inner ring */}
            <circle cx="478" cy="210" r="8" fill="none" stroke="#047857" strokeWidth="2.5" />
            {/* Center dot */}
            <circle cx="478" cy="210" r="3" fill="#047857" />
          </motion.g>
        </motion.g>

        {/* ── Code brackets icon (left) — no boundary ── */}
        <motion.g {...float(0.8, 3)}>
          <motion.circle cx="28" cy="265" r="16" fill="#047857" opacity="0.1" filter="url(#softBlur)" {...glow(0.3)} />
          {/* Left bracket */}
          <path d="M22 240 L8 265 L22 290" fill="none" stroke="#047857" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Right bracket */}
          <path d="M38 240 L52 265 L38 290" fill="none" stroke="#047857" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Slash */}
          <line x1="34" y1="242" x2="24" y2="288" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        </motion.g>

        {/* ── Trophy/award icon (bottom-right) — no boundary ── */}
        <motion.g {...float(2, 3.4)}>
          <motion.circle cx="468" cy="358" r="16" fill="#10B981" opacity="0.1" filter="url(#softBlur)" {...glow(1)} />
          {/* Cup body */}
          <path d="M450 338 L450 358 Q450 374 468 374 Q486 374 486 358 L486 338 Z" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Left handle */}
          <path d="M450 344 L442 344 Q436 344 436 352 Q436 358 442 358 L450 358" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          {/* Right handle */}
          <path d="M486 344 L494 344 Q500 344 500 352 Q500 358 494 358 L486 358" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          {/* Base */}
          <line x1="468" y1="374" x2="468" y2="382" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="456" y1="382" x2="480" y2="382" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          {/* Star inside */}
          <motion.path
            d="M468 346 L470 352 L476 352.5 L471.5 356.5 L473 362.5 L468 359 L463 362.5 L464.5 356.5 L460 352.5 L466 352 Z"
            fill="#10B981"
            opacity="0.6"
            {...glow(1.2)}
          />
        </motion.g>

        {/* ── Wi-Fi / connectivity icon (bottom-left) — no boundary ── */}
        <motion.g {...float(1.2, 3.6)}>
          <motion.circle cx="78" cy="390" r="14" fill="#047857" opacity="0.1" filter="url(#softBlur)" {...glow(0.8)} />
          <motion.g {...glow(0.8)}>
            <path d="M48 376 Q78 352 108 376" fill="none" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M56 384 Q78 364 100 384" fill="none" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M64 392 Q78 378 92 392" fill="none" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="78" cy="400" r="3.5" fill="#047857" />
          </motion.g>
        </motion.g>

        {/* ── Rocket icon (top-center) — no boundary ── */}
        <motion.g {...float(0.3, 3.3)}>
          <motion.circle cx="240" cy="40" r="14" fill="#047857" opacity="0.08" filter="url(#softBlur)" {...glow(0.6)} />
          {/* Rocket body */}
          <path d="M240 16 C240 16 232 32 232 48 L232 58 L248 58 L248 48 C248 32 240 16 240 16Z" fill="none" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Nose cone highlight */}
          <circle cx="240" cy="38" r="3" fill="#047857" opacity="0.5" />
          {/* Left fin */}
          <path d="M232 50 L222 60 L232 58" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Right fin */}
          <path d="M248 50 L258 60 L248 58" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Flame */}
          <motion.g {...glow(0)}>
            <path d="M236 58 L240 70 L244 58" fill="#047857" opacity="0.6" />
          </motion.g>
        </motion.g>

        {/* ── Floating particles ── */}
        {[
          { cx: 170, cy: 65, r: 2.5, color: "#047857", delay: 0 },
          { cx: 350, cy: 35, r: 2, color: "#10B981", delay: 0.5 },
          { cx: 505, cy: 140, r: 2.5, color: "#047857", delay: 1 },
          { cx: 8, cy: 170, r: 2, color: "#047857", delay: 1.5 },
          { cx: 510, cy: 290, r: 2, color: "#10B981", delay: 2 },
          { cx: 170, cy: 415, r: 2.5, color: "#047857", delay: 0.8 },
          { cx: 340, cy: 425, r: 2, color: "#047857", delay: 1.3 },
          { cx: 300, cy: 100, r: 2, color: "#10B981", delay: 0.4 },
          { cx: 500, cy: 380, r: 2, color: "#047857", delay: 1.8 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.color}
            {...(shouldReduceMotion ? {} : {
              animate: { opacity: [0.15, 0.7, 0.15], scale: [1, 1.5, 1] },
              transition: { duration: 2.5, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
            })}
          />
        ))}

        {/* ── Connection lines (dotted) ── */}
        <motion.line x1="80" y1="105" x2="135" y2="165" stroke="#10B981" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" {...glow(0)} />
        <motion.line x1="420" y1="78" x2="388" y2="155" stroke="#047857" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" {...glow(0.5)} />
        <motion.line x1="458" y1="230" x2="412" y2="295" stroke="#047857" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" {...glow(1)} />
        <motion.line x1="48" y1="282" x2="125" y2="310" stroke="#047857" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" {...glow(1.5)} />
        <motion.line x1="248" y1="62" x2="300" y2="155" stroke="#047857" strokeWidth="1" strokeDasharray="4 6" opacity="0.2" {...glow(0.8)} />

        {/* Soft blur filter for glows */}
        <defs>
          <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
