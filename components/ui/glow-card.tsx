"use client";

import type React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  /** The border-radius of the outer wrapper. Defaults to rounded-2xl */
  rounded?: string;
}

/**
 * GlowCard — wraps any card content with a premium glowing border effect.
 *
 * Usage:
 *   <GlowCard>
 *     <div className="bg-white rounded-xl p-6 h-full ...">card content</div>
 *   </GlowCard>
 *
 * The outer wrapper provides the glow border. The inner child should have its
 * own background, border-radius, and padding so the glow peeks through.
 */
export function GlowCard({ children, className = "", rounded = "rounded-2xl" }: GlowCardProps) {
  return (
    <div className={`group relative ${rounded} border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${className}`}>
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      {children}
    </div>
  );
}
