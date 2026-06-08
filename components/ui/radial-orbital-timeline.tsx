"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface TimelineItem {
  id: number;
  title: string;
  content: string;
  icon: React.ElementType;
  href: string;
  color: string;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

/* Short subtitle for each node — keyed by title */
const nodeSubtitles: Record<string, string> = {
  "AI & Tech Programs": "Future-ready technology",
  "Services": "Digital transformation",
  "Skill Development": "Empowering talent",
  "UK–Pakistan Technology Partnership": "Cross-border innovation",
  "Leadership & Governance": "Building future leaders",
  "Trade Delegations": "Connecting global markets",
};

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulse: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulse[relId] = true; });
        setPulseEffect(newPulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  const animate = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;
    setRotationAngle((prev) => (prev + delta * 0.005) % 360);
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (autoRotate) {
      lastTimeRef.current = 0;
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoRotate, animate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const targetAngle = (nodeIndex / timelineData.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 270;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const scale = 0.82 + 0.18 * ((1 + Math.sin(radian)) / 2);
    const opacity = Math.max(0.55, Math.min(1, 0.55 + 0.45 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, scale, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const item = timelineData.find((i) => i.id === itemId);
    return item ? item.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  /* Sparkling orbit balls — positions along orbit */
  const sparkBalls = [
    { color: "#047857", size: 8, speed: 25, offset: 0 },
    { color: "#047857", size: 7, speed: 32, offset: 120 },
    { color: "#10B981", size: 8, speed: 28, offset: 240 },
    { color: "#047857", size: 5, speed: 22, offset: 60 },
    { color: "#047857", size: 5, speed: 35, offset: 180 },
    { color: "#10B981", size: 6, speed: 30, offset: 300 },
  ];

  return (
    <div
      className="orbit-timeline relative w-full h-[720px] sm:h-[800px] flex items-center justify-center overflow-visible"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full" style={{ background: "radial-gradient(circle, rgba(4,120,87,0.07) 0%, rgba(16,185,129,0.05) 40%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(4,120,87,0.05) 0%, transparent 60%)" }} />
      </div>

      <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
        >
          {/* Center orb */}
          <div className="absolute z-10 flex items-center justify-center">
            {/* Outer decorative rings */}
            <div className="absolute w-40 h-40 rounded-full border border-dashed border-[#047857]/20 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-32 h-32 rounded-full border border-[#10B981]/15 animate-[spin_20s_linear_infinite_reverse]" />
            {/* Core gradient orb */}
            <div className="w-[96px] h-[96px] rounded-full bg-gradient-to-br from-[#047857] via-[#10B981] to-[#047857] flex items-center justify-center shadow-[0_0_50px_rgba(4,120,87,0.25),0_0_100px_rgba(16,185,129,0.12)]">
              <div className="w-16 h-16 rounded-full bg-white/95 shadow-inner flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#047857] to-[#10B981] opacity-60" />
              </div>
            </div>
          </div>

          {/* Orbit track rings — more visible */}
          <div className="absolute w-[540px] h-[540px] sm:w-[580px] sm:h-[580px] rounded-full border-2 border-[#D8D5CF]/40" style={{ boxShadow: "0 0 20px rgba(4,120,87,0.04), inset 0 0 20px rgba(4,120,87,0.02)" }} />
          <div className="absolute w-[555px] h-[555px] sm:w-[595px] sm:h-[595px] rounded-full border border-[#D8D5CF]/20" />

          {/* Animated sparkling balls orbiting clockwise */}
          {sparkBalls.map((ball, i) => (
            <div
              key={`spark-${i}`}
              className="absolute pointer-events-none"
              style={{
                width: `${ball.size}px`,
                height: `${ball.size}px`,
                left: "50%",
                top: "50%",
                marginLeft: `-${ball.size / 2}px`,
                marginTop: `-${ball.size / 2}px`,
                animation: `orbitSpark_${i} ${ball.speed}s linear infinite`,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `radial-gradient(circle, ${ball.color} 0%, ${ball.color}80 40%, transparent 70%)`,
                  boxShadow: `0 0 ${ball.size * 2}px ${ball.color}60, 0 0 ${ball.size * 4}px ${ball.color}25`,
                }}
              />
            </div>
          ))}

          {/* Static decorative dots on orbit track */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <div
              key={`dot-${deg}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#D8D5CF]/50"
              style={{
                transform: `rotate(${deg}deg) translateX(280px)`,
                transformOrigin: "0 0",
                left: "50%",
                top: "50%",
              }}
            />
          ))}

          {/* CTA: "Click to explore" — centered below orbits */}
          {autoRotate && !activeNodeId && (
            <div className="absolute z-20 -bottom-4 sm:bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-none">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#D8D5CF]/60">
                {/* Animated pulsing dot */}
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#047857] opacity-30" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#047857]" />
                </span>
                <span className="text-sm font-semibold tracking-wide text-[#3D4152]/80">
                  Click a node to explore
                </span>
              </div>
            </div>
          )}

          {/* Nodes — Card style with icon + title + subtitle */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const nodeScale = isExpanded ? 1.15 : position.scale;
            const subtitle = nodeSubtitles[item.title] || "";

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute cursor-pointer group/node"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${nodeScale})`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                  transition: "opacity 0.3s ease, transform 0.05s linear",
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Related connection pulse */}
                {isPulsing && (
                  <div
                    className="absolute rounded-2xl animate-pulse pointer-events-none"
                    style={{
                      width: "calc(100% + 16px)",
                      height: "calc(100% + 16px)",
                      left: "-8px",
                      top: "-8px",
                      border: `2px solid ${item.color}30`,
                      background: `${item.color}06`,
                      borderRadius: "16px",
                    }}
                  />
                )}

                {/* Card-style node */}
                <div
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 border-2 group-hover/node:shadow-lg group-hover/node:-translate-y-0.5"
                  style={{
                    background: isExpanded
                      ? `linear-gradient(135deg, white, ${item.color}08)`
                      : "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(8px)",
                    borderColor: isExpanded ? item.color : isRelated ? `${item.color}60` : `${item.color}20`,
                    boxShadow: isExpanded
                      ? `0 8px 32px ${item.color}20, 0 0 0 1px ${item.color}15`
                      : `0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)`,
                    transition: "transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                    minWidth: "180px",
                    maxWidth: "240px",
                  }}
                >
                  {/* Icon circle */}
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: isExpanded
                        ? `linear-gradient(135deg, ${item.color}, ${item.color}cc)`
                        : `${item.color}10`,
                      transition: "background 0.25s ease",
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: isExpanded ? "white" : item.color }}
                      strokeWidth={1.8}
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col min-w-0">
                    <span
                      className="text-[13px] font-bold leading-tight text-[#1C1F2E] truncate"
                      style={{ color: isExpanded ? item.color : "#1C1F2E" }}
                    >
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#7A7E8F] font-medium italic leading-tight mt-0.5 truncate">
                      {subtitle}
                    </span>
                  </div>
                </div>

                {/* Expanded detail card */}
                {isExpanded && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[290px] rounded-xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)] overflow-visible z-50">
                    {/* Connector line */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3" style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}40)` }} />
                    {/* Color accent top bar */}
                    <div className="h-1 rounded-t-xl" style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}80)` }} />
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider"
                          style={{ background: `${item.color}10`, borderColor: `${item.color}25`, color: item.color }}
                        >
                          {item.status === "completed" ? "Active" : item.status === "in-progress" ? "Growing" : "Planned"}
                        </span>
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1C1F2E] mb-2 leading-snug">{item.title}</h4>
                      <p className="text-[13px] text-[#5A5F72] leading-relaxed mb-4">{item.content}</p>
                      <Link
                        href={item.href}
                        className="flex items-center justify-center gap-2 w-full py-2.5 text-[13px] font-bold rounded-lg border-2 transition-all duration-200 hover:shadow-md"
                        style={{
                          borderColor: `${item.color}30`,
                          color: item.color,
                          background: `${item.color}06`,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gentleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        ${sparkBalls.map((ball, i) => `
          @keyframes orbitSpark_${i} {
            0% { transform: rotate(${ball.offset}deg) translateX(278px) rotate(-${ball.offset}deg); }
            100% { transform: rotate(${ball.offset + 360}deg) translateX(278px) rotate(-${ball.offset + 360}deg); }
          }
        `).join("")}
      ` }} />
    </div>
  );
}
