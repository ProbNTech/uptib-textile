"use client";

import { motion, useReducedMotion } from "framer-motion";

interface DotProps {
  color: "blue" | "green";
  size: number;
  shouldReduceMotion: boolean;
}

function GlowingDot({ color, size, shouldReduceMotion }: DotProps) {
  const colorClasses = {
    blue: { bg: "bg-[#047857]/80", glow: "bg-[#047857]/30" },
    green: { bg: "bg-[#10B981]/80", glow: "bg-[#10B981]/30" },
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      className="absolute"
      style={{ top: 0, left: "50%", transform: "translate(-50%, -50%)" }}
      animate={
        shouldReduceMotion
          ? { scale: 1, opacity: 0.7 }
          : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }
      }
      transition={shouldReduceMotion ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className={`absolute rounded-full ${colors.glow} blur-2xl`} style={{ width: `${size * 4}px`, height: `${size * 4}px`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
      <div className={`absolute rounded-full ${colors.bg}`} style={{ width: `${size}px`, height: `${size}px`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
    </motion.div>
  );
}

interface RingGroupProps {
  radius: number;
  duration: number;
  dots: Array<{ color: "blue" | "green"; size: number }>;
  shouldReduceMotion: boolean;
  reverse?: boolean;
  startAngle?: number;
}

function RingGroup({ radius, duration, dots, shouldReduceMotion, reverse = false, startAngle = 0 }: RingGroupProps) {
  const adjustedDuration = shouldReduceMotion ? duration * 4 : duration;
  const rotationDirection = reverse ? -360 : 360;

  return (
    <>
      <svg
        className="absolute"
        style={{ top: "50%", left: "50%", width: `${radius * 2}px`, height: `${radius * 2}px`, transform: "translate(-50%, -50%)" }}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <circle cx={radius} cy={radius} r={radius - 1} fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
      </svg>
      <motion.div
        className="absolute"
        style={{ top: "50%", left: "50%", width: `${radius * 2}px`, height: `${radius * 2}px`, transform: `translate(-50%, -50%) rotate(${startAngle}deg)`, transformOrigin: "center center" }}
        animate={{ rotate: startAngle + rotationDirection }}
        transition={{ repeat: Infinity, duration: adjustedDuration, ease: "linear" }}
      >
        {dots.map((dot, index) => {
          const angle = index * (360 / dots.length);
          const radian = (angle * Math.PI) / 180;
          const x = Math.round((radius + radius * Math.cos(radian)) * 100) / 100;
          const y = Math.round((radius + radius * Math.sin(radian)) * 100) / 100;
          return (
            <div key={index} className="absolute" style={{ left: `${x}px`, top: `${y}px`, transform: "translate(-50%, -50%)" }}>
              <GlowingDot color={dot.color} size={dot.size} shouldReduceMotion={shouldReduceMotion} />
            </div>
          );
        })}
      </motion.div>
    </>
  );
}

export function JoinUPTECHBackground() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const rings = [
    { radius: 120, duration: 40, reverse: false, startAngle: 0, dots: [{ color: "blue" as const, size: 9 }, { color: "green" as const, size: 8 }, { color: "blue" as const, size: 9 }, { color: "green" as const, size: 8 }] },
    { radius: 200, duration: 60, reverse: true, startAngle: 45, dots: [{ color: "green" as const, size: 10 }, { color: "blue" as const, size: 9 }, { color: "green" as const, size: 8 }, { color: "blue" as const, size: 9 }, { color: "green" as const, size: 8 }, { color: "blue" as const, size: 9 }] },
    { radius: 280, duration: 80, reverse: false, startAngle: 90, dots: [{ color: "blue" as const, size: 9 }, { color: "green" as const, size: 8 }, { color: "blue" as const, size: 9 }, { color: "green" as const, size: 8 }, { color: "blue" as const, size: 9 }] },
    { radius: 360, duration: 100, reverse: true, startAngle: 135, dots: [{ color: "green" as const, size: 9 }, { color: "blue" as const, size: 10 }, { color: "green" as const, size: 8 }, { color: "blue" as const, size: 9 }, { color: "green" as const, size: 8 }, { color: "blue" as const, size: 9 }, { color: "green" as const, size: 8 }] },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {rings.map((ring, index) => (
        <RingGroup key={index} radius={ring.radius} duration={ring.duration} dots={ring.dots} shouldReduceMotion={shouldReduceMotion} reverse={ring.reverse} startAngle={ring.startAngle} />
      ))}
    </div>
  );
}
