"use client";

import { Card } from "./Card";
import { Network, Users, TrendingUp, Cpu, FileText } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const pillars = [
  {
    icon: Network,
    title: "Technology and Innovation Collaboration",
    description: "Joint ventures, R&D partnerships, and cross-border innovation driving growth across both nations.",
    color: "#047857",
    number: "01",
  },
  {
    icon: Users,
    title: "Talent and Professional Networks",
    description: "Connecting UK-based Pakistani tech professionals with global opportunities and partnerships.",
    color: "#10B981",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Trade, Investment and Market Access",
    description: "Supporting exports, inward investment, and seamless market entry across the corridor.",
    color: "#047857",
    number: "03",
  },
  {
    icon: Cpu,
    title: "AI and Digital Transformation Programs",
    description: "AI platforms, collective startups, and digital services accelerating tech-led transformation.",
    color: "#047857",
    number: "04",
  },
  {
    icon: FileText,
    title: "Policy, Research and Advocacy",
    description: "Responsible tech growth, knowledge transfer, and aligned R&D for bilateral progress.",
    color: "#10B981",
    number: "05",
  },
];

export function PillarGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <GlowingEffect
                spread={40}
                glow
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <Card className="h-full rounded-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${pillar.color}10`,
                      borderColor: `${pillar.color}25`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: pillar.color }} />
                  </div>
                  <motion.span
                    className="text-gray-200 font-heading font-bold text-3xl"
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    {pillar.number}
                  </motion.span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-[#064E3B] leading-tight">{pillar.title}</h3>
                <p className="text-[#475569] leading-relaxed text-base">{pillar.description}</p>
              </Card>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
