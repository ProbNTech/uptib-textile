"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { sponsorLogos } from "@/data/sponsor-logos";
import { useReducedMotion } from "framer-motion";

export function SponsorMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

  useEffect(() => {
    if (shouldReduceMotion && containerRef.current) {
      containerRef.current.style.animation = "none";
    }
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="relative overflow-x-auto scrollbar-hide py-4">
        <div className="flex gap-6 min-w-max">
          {sponsorLogos.map((logo, index) => (
            <div key={index} className="relative flex items-center justify-center h-20 w-40 shrink-0 bg-[#064E3B] rounded-lg border border-[#047857]/30 p-4">
              <Image src={logo.src} alt={logo.alt} width={160} height={80} className="object-contain h-full w-full" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges — match the dark blue section background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1a9d4a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1a9d4a] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-10">
        <div
          ref={containerRef}
          className={`flex gap-10 shrink-0 ${isPaused ? "animation-paused" : "animate-scroll-smooth"}`}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex items-center justify-center h-20 w-40 shrink-0 bg-[#064E3B] rounded-lg border border-[#047857]/30 p-4 transition-all duration-300 hover:scale-105 hover:border-[#047857]/60 hover:shadow-[0_0_20px_rgba(4,120,87,0.2)]"
            >
              <Image src={logo.src} alt={logo.alt} width={160} height={80} className="object-contain h-full w-full" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
