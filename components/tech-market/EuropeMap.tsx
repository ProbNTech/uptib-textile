"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ─── Types & data ───────────────────────────────────────── */
interface MarketNode {
  slug: string;
  name: string;
  flag: string;
  x: number;
  y: number;
  color: string;
  marketValue: string;
  marketBillion: number;
  growth: string;
  topSector: string;
}

const maxMarket = 200;

const nodes: MarketNode[] = [
  { slug: "uk", name: "United Kingdom", flag: "/image/flags/gb.svg", x: 16, y: 32, color: "#059669", marketValue: "$200B+", marketBillion: 200, growth: "7.2%", topSector: "AI & Cloud" },
  { slug: "netherlands", name: "Netherlands", flag: "/image/flags/nl.svg", x: 38, y: 22, color: "#F59E0B", marketValue: "$45B+", marketBillion: 45, growth: "6.1%", topSector: "FinTech" },
  { slug: "germany", name: "Germany", flag: "/image/flags/de.svg", x: 52, y: 35, color: "#10B981", marketValue: "$120B+", marketBillion: 120, growth: "5.8%", topSector: "Enterprise IT" },
  { slug: "france", name: "France", flag: "/image/flags/fr.svg", x: 30, y: 55, color: "#8B5CF6", marketValue: "$80B+", marketBillion: 80, growth: "6.5%", topSector: "Deep Tech" },
  { slug: "switzerland", name: "Switzerland", flag: "/image/flags/ch.svg", x: 48, y: 58, color: "#EF4444", marketValue: "$30B+", marketBillion: 30, growth: "5.4%", topSector: "FinTech" },
  { slug: "spain", name: "Spain", flag: "/image/flags/es.svg", x: 22, y: 78, color: "#F97316", marketValue: "$40B+", marketBillion: 40, growth: "6.8%", topSector: "Cloud & SaaS" },
  { slug: "poland", name: "Poland", flag: "/image/flags/pl.svg", x: 72, y: 26, color: "#06B6D4", marketValue: "$25B+", marketBillion: 25, growth: "9.2%", topSector: "Outsourcing" },
  { slug: "baltic-states", name: "Baltic States", flag: "/image/flags/ee.svg", x: 78, y: 10, color: "#EC4899", marketValue: "$10B+", marketBillion: 10, growth: "11.3%", topSector: "E-Gov & Cyber" },
];

const connections: [string, string][] = [
  ["uk", "netherlands"],
  ["uk", "france"],
  ["uk", "germany"],
  ["netherlands", "germany"],
  ["germany", "poland"],
  ["germany", "switzerland"],
  ["germany", "france"],
  ["germany", "baltic-states"],
  ["france", "spain"],
  ["france", "switzerland"],
  ["poland", "baltic-states"],
  ["netherlands", "poland"],
  ["spain", "switzerland"],
  ["uk", "spain"],
];

/* ─── Single market node ─────────────────────────────────── */
function MarketNodeCard({
  node,
  isHovered,
  isConnected,
  onHover,
  onLeave,
  onClick,
}: {
  node: MarketNode;
  isHovered: boolean;
  isConnected: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const ringSize = 54 + (node.marketBillion / maxMarket) * 26;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={{ left: `${node.x}%`, top: `${node.y}%`, zIndex: isHovered ? 30 : 10 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Ambient glow behind node */}
      <div
        className="absolute left-1/2 top-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-500"
        style={{
          width: ringSize + 40,
          height: ringSize + 40,
          background: `radial-gradient(circle, ${node.color}${isHovered ? "25" : "10"} 0%, transparent 70%)`,
        }}
      />

      {/* Pulse rings on hover */}
      {isHovered && (
        <>
          <div
            className="absolute left-1/2 top-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: ringSize + 40,
              height: ringSize + 40,
              border: `1.5px solid ${node.color}40`,
              animation: "euroMapPulse 1.5s ease-out infinite",
            }}
          />
          <div
            className="absolute left-1/2 top-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: ringSize + 70,
              height: ringSize + 70,
              border: `1px solid ${node.color}20`,
              animation: "euroMapPulse 2s ease-out 0.3s infinite",
            }}
          />
        </>
      )}

      <div className="flex flex-col items-center">
        {/* Flag ring */}
        <div
          className="relative rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            width: ringSize,
            height: ringSize,
            background: `conic-gradient(from 0deg, ${node.color}${isHovered ? "cc" : isConnected ? "60" : "30"}, ${node.color}${isHovered ? "80" : "10"} 50%, ${node.color}${isHovered ? "cc" : isConnected ? "60" : "30"})`,
            boxShadow: isHovered
              ? `0 0 40px ${node.color}40, 0 0 80px ${node.color}15, inset 0 0 20px ${node.color}10`
              : isConnected
                ? `0 0 25px ${node.color}20`
                : `0 0 15px ${node.color}08`,
            transform: isHovered ? "scale(1.15)" : isConnected ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div
            className="rounded-full overflow-hidden border-2 transition-all duration-300"
            style={{
              width: ringSize - 8,
              height: ringSize - 8,
              borderColor: isHovered ? node.color : isConnected ? `${node.color}60` : `${node.color}30`,
              background: "#0B1426",
            }}
          >
            <Image
              src={node.flag}
              alt={node.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Labels */}
        <div className="mt-2 text-center pointer-events-none">
          <p
            className="text-[11px] sm:text-xs font-bold leading-tight transition-all duration-200"
            style={{
              color: isHovered ? "#fff" : isConnected ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
              textShadow: isHovered ? `0 0 10px ${node.color}60` : "none",
            }}
          >
            {node.name}
          </p>
          <p
            className="text-[10px] sm:text-[12px] font-extrabold mt-0.5 transition-colors duration-200"
            style={{ color: isHovered ? node.color : `${node.color}80` }}
          >
            {node.marketValue}
          </p>
        </div>
      </div>

      {/* Hover detail card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 pointer-events-none"
          >
            <div
              className="rounded-xl px-4 py-3 backdrop-blur-xl border min-w-[190px]"
              style={{
                background: "linear-gradient(135deg, rgba(15,22,50,0.95), rgba(11,20,38,0.95))",
                borderColor: `${node.color}35`,
                boxShadow: `0 12px 40px rgba(0,0,0,0.5), 0 0 30px ${node.color}15`,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: node.color }}>
                  Market Data
                </span>
                <span className="text-[10px] text-white/30">Click to explore</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-[10px] text-white/40">Growth</p>
                  <p className="text-sm font-bold text-[#10B981]">{node.growth}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/40">Top Sector</p>
                  <p className="text-[11px] font-semibold text-white/80">{node.topSector}</p>
                </div>
              </div>
              <div className="mt-2.5 mb-1">
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${node.color}, ${node.color}80)` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(node.marketBillion / maxMarket) * 100}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main map component ─────────────────────────────────── */
export function EuropeMap() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setDims({ w: el.offsetWidth, h: el.offsetHeight });
    update();
    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const lineData = useMemo(() => {
    if (!dims.w) return [];
    return connections.map(([from, to]) => {
      const a = nodes.find((n) => n.slug === from)!;
      const b = nodes.find((n) => n.slug === to)!;
      return {
        x1: (a.x / 100) * dims.w,
        y1: (a.y / 100) * dims.h,
        x2: (b.x / 100) * dims.w,
        y2: (b.y / 100) * dims.h,
        from,
        to,
        colorFrom: a.color,
        colorTo: b.color,
      };
    });
  }, [dims]);

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #060C1A 0%, #0A1528 30%, #0E1C38 60%, #081222 100%)",
        aspectRatio: "16 / 9",
        minHeight: "480px",
      }}
    >
      {/* Hex grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow zones — brighter fills */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full" style={{ top: "5%", left: "5%", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 60%)" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full" style={{ bottom: "-5%", right: "15%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 60%)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full" style={{ top: "-5%", right: "5%", background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 60%)" }} />
        <div className="absolute w-[450px] h-[450px] rounded-full" style={{ bottom: "10%", left: "20%", background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 60%)" }} />
        <div className="absolute w-[350px] h-[350px] rounded-full" style={{ top: "30%", left: "45%", background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 60%)" }} />
      </div>

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]">
        <defs>
          {lineData.map((line, i) => (
            <linearGradient
              key={`lg-${i}`}
              id={`euroLg-${i}`}
              x1={line.x1} y1={line.y1}
              x2={line.x2} y2={line.y2}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={line.colorFrom} stopOpacity="0.7" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor={line.colorTo} stopOpacity="0.7" />
            </linearGradient>
          ))}

          {/* Glow filter for active lines */}
          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Traveling dot — animated circle */}
          <circle id="travelDot" r="3" fill="white" />
        </defs>

        {/* Background mesh: all lines always visible */}
        {lineData.map((line, i) => {
          const isActive = hoveredSlug === line.from || hoveredSlug === line.to;
          return (
            <g key={`conn-${i}`}>
              {/* Main line — always visible */}
              <line
                x1={line.x1} y1={line.y1}
                x2={line.x2} y2={line.y2}
                stroke={`url(#euroLg-${i})`}
                strokeWidth={isActive ? 2.5 : 1.2}
                opacity={isActive ? 1 : 0.35}
                filter={isActive ? "url(#lineGlow)" : undefined}
                style={{ transition: "opacity 0.3s ease, stroke-width 0.3s ease" }}
              />

              {/* Animated traveling dot along each line */}
              <circle r={isActive ? 4 : 2.5} opacity={isActive ? 0.9 : 0.4}>
                <animate
                  attributeName="cx"
                  from={line.x1}
                  to={line.x2}
                  dur={`${3 + (i % 3)}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  from={line.y1}
                  to={line.y2}
                  dur={`${3 + (i % 3)}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill"
                  values={`${line.colorFrom};#ffffff;${line.colorTo};${line.colorFrom}`}
                  dur={`${3 + (i % 3)}s`}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Second dot going the other way (on active) */}
              {isActive && (
                <circle r="3" opacity="0.7">
                  <animate
                    attributeName="cx"
                    from={line.x2}
                    to={line.x1}
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={line.y2}
                    to={line.y1}
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="fill"
                    values={`${line.colorTo};#ffffff;${line.colorFrom};${line.colorTo}`}
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Endpoint glow dots */}
              <circle cx={line.x1} cy={line.y1} r={isActive ? 3 : 1.5} fill={line.colorFrom} opacity={isActive ? 0.6 : 0.2} />
              <circle cx={line.x2} cy={line.y2} r={isActive ? 3 : 1.5} fill={line.colorTo} opacity={isActive ? 0.6 : 0.2} />
            </g>
          );
        })}

        {/* Decorative floating particles */}
        {[
          { cx: "88%", cy: "45%", r: 1.5, color: "#059669", delay: 0 },
          { cx: "92%", cy: "60%", r: 1, color: "#10B981", delay: 1 },
          { cx: "10%", cy: "15%", r: 1.2, color: "#EC4899", delay: 0.5 },
          { cx: "85%", cy: "80%", r: 1, color: "#F59E0B", delay: 2 },
          { cx: "60%", cy: "80%", r: 1.5, color: "#8B5CF6", delay: 1.5 },
          { cx: "5%", cy: "65%", r: 1, color: "#06B6D4", delay: 0.8 },
          { cx: "42%", cy: "8%", r: 1.2, color: "#059669", delay: 1.2 },
          { cx: "90%", cy: "18%", r: 1, color: "#EF4444", delay: 0.3 },
          { cx: "55%", cy: "90%", r: 1.5, color: "#F97316", delay: 2.2 },
          { cx: "8%", cy: "88%", r: 1, color: "#10B981", delay: 1.8 },
          { cx: "95%", cy: "35%", r: 1.2, color: "#EC4899", delay: 0.6 },
          { cx: "35%", cy: "92%", r: 1, color: "#06B6D4", delay: 1.4 },
        ].map((p, i) => (
          <circle
            key={`particle-${i}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.color}
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.5;0.15"
              dur="3s"
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values={`${p.r};${p.r * 1.8};${p.r}`}
              dur="3s"
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* Country nodes */}
      {nodes.map((node) => {
        const isHovered = hoveredSlug === node.slug;
        const isConnected =
          hoveredSlug !== null &&
          connections.some(
            ([a, b]) =>
              (a === hoveredSlug && b === node.slug) ||
              (b === hoveredSlug && a === node.slug),
          );
        return (
          <MarketNodeCard
            key={node.slug}
            node={node}
            isHovered={isHovered}
            isConnected={isConnected}
            onHover={() => setHoveredSlug(node.slug)}
            onLeave={() => setHoveredSlug(null)}
            onClick={() =>
              router.push(`/ecosystem/tech-market-overview/${node.slug}`)
            }
          />
        );
      })}

      {/* Title overlay — top left */}
      <div className="absolute top-5 left-6 z-20 pointer-events-none">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          European Tech Markets
        </p>
        <p className="text-[22px] font-extrabold text-white/90 leading-tight mt-1">
          $500B+
          <span className="text-sm font-medium text-white/40 ml-2">Combined IT Market</span>
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-20 pointer-events-none">
        <span className="text-[11px] text-white/30 tracking-wide">
          Hover to preview &middot; Click to explore full market data
        </span>
      </div>

      {/* Legend — bottom right */}
      <div className="absolute bottom-4 right-5 z-20 hidden sm:flex items-center gap-5 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-[1.5px] bg-gradient-to-r from-[#059669]/60 to-[#10B981]/60" />
          <span className="text-[10px] text-white/30">Trade link</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <span className="text-[10px] text-white/30">Data flow</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes euroMapPulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
        }
      `}} />
    </div>
  );
}
