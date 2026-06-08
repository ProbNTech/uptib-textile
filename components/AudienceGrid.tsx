"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Code,
  Rocket,
  DollarSign,
  Building2,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const audiences = [
  { icon: Code, label: "IT and AI Professionals", brandColor: "#047857", description: "Tech experts driving innovation" },
  { icon: Rocket, label: "Startups and Founders", brandColor: "#10B981", description: "Entrepreneurs building the future" },
  { icon: DollarSign, label: "Investors and Partners", brandColor: "#047857", description: "Capital and strategic alliances" },
  { icon: Building2, label: "Enterprises and Service Providers", brandColor: "#047857", description: "Leading organizations and solutions" },
  { icon: GraduationCap, label: "Students and Researchers", brandColor: "#10B981", description: "Next generation of innovators" },
  { icon: Landmark, label: "Government and Institutions", brandColor: "#047857", description: "Policy makers and public sector" },
];

function AudienceCard({ audience, index, isInView }: { audience: typeof audiences[0]; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-6, 6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [6, -6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => { mouseX.set(0.5); mouseY.set(0.5); };

  const Icon = audience.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.03 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      <div className="relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 text-center p-8">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative z-10"
          >
            <div
              className="relative w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center border group-hover:scale-110 transition-all duration-500"
              style={{
                backgroundColor: `${audience.brandColor}10`,
                borderColor: `${audience.brandColor}20`,
              }}
            >
              <Icon className="w-10 h-10" style={{ color: audience.brandColor }} />
            </div>

            <h3 className="font-heading font-semibold text-xl mb-3 text-[#064E3B] group-hover:text-[#047857] transition-colors duration-300">{audience.label}</h3>
            <p className="text-[#475569] text-base leading-relaxed">{audience.description}</p>
          </motion.div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{ background: `radial-gradient(circle at center, ${audience.brandColor}08 0%, transparent 70%)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function AudienceGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {audiences.map((audience, index) => (
        <AudienceCard key={index} audience={audience} index={index} isInView={isInView} />
      ))}
    </div>
  );
}
