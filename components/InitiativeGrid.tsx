"use client";

import { useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Globe, GraduationCap, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const initiatives = [
  {
    icon: Brain,
    title: "People AI Platform",
    description: "Human-centric AI support systems integrating technology with professional services.",
    href: "/initiatives/people-ai",
    image: "/image/Initiatives/people-ai-platform.jpg",
    fallbackGradient: "from-[#047857]/15 to-[#10B981]/15",
    iconColor: "#047857",
    brandColor: "#047857",
    accentColor: "#10B981",
  },
  {
    icon: Globe,
    title: "TechMart Global",
    description: "A cross-border marketplace connecting IT vendors, buyers, and resellers.",
    href: "/initiatives/techmart-global",
    image: "/image/Initiatives/techmart-global.jpg",
    fallbackGradient: "from-[#10B981]/15 to-[#047857]/15",
    iconColor: "#10B981",
    brandColor: "#10B981",
    accentColor: "#047857",
  },
  {
    icon: GraduationCap,
    title: "AI and Tech Programs",
    description: "Training, certifications, incubation, and collective startup models.",
    href: "/initiatives/ai-tech-programs",
    image: "/image/Initiatives/ai-tech-programs.jpg",
    fallbackGradient: "from-[#047857]/15 to-[#10B981]/15",
    iconColor: "#047857",
    brandColor: "#047857",
    accentColor: "#10B981",
  },
  {
    icon: Award,
    title: "UK–Pakistan Tech Excellence Awards",
    description: "Celebrating innovation, partnership, and digital leadership.",
    href: "/initiatives/tech-excellence-awards",
    image: "/image/Initiatives/uk-pakistan-tech-excellence-awards.jpg",
    fallbackGradient: "from-[#047857]/15 to-[#10B981]/15",
    iconColor: "#047857",
    brandColor: "#047857",
    accentColor: "#10B981",
  },
];

function InitiativeCard({ initiative, index, isInView }: { initiative: typeof initiatives[0]; index: number; isInView: boolean }) {
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-5, 5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [5, -5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => { mouseX.set(0.5); mouseY.set(0.5); };

  const Icon = initiative.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y: 50, scale: 0.95, filter: "blur(6px)" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
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
        <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative"
        >
          <div className="relative aspect-video overflow-hidden bg-[#F8FAFC]">
            {!imageError && (
              <motion.div className="absolute inset-0" whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }}>
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => setImageError(true)}
                />
              </motion.div>
            )}

            <div className={`absolute inset-0 bg-gradient-to-br ${initiative.fallbackGradient} ${imageError ? "opacity-100" : "opacity-0"}`} />

            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="w-20 h-20" style={{ color: initiative.iconColor, opacity: 0.6 }} />
              </div>
            )}

            {/* Shimmer sweep on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-[#047857]/50 group-hover:via-[#10B981]/50 group-hover:to-[#047857]/50 transition-all duration-500" />
          </div>

          <div className="p-6 relative">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 border group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundColor: `${initiative.brandColor}10`, borderColor: `${initiative.brandColor}20` }}
            >
              <Icon className="w-6 h-6" style={{ color: initiative.iconColor }} />
            </div>

            <h3 className="font-heading font-semibold text-xl mb-3 text-[#064E3B] group-hover:text-[#047857] transition-colors duration-300">{initiative.title}</h3>
            <p className="text-[#475569] mb-6 leading-relaxed">{initiative.description}</p>

            <Link href={initiative.href} className="inline-flex items-center gap-2 text-base font-semibold text-[#047857] hover:text-[#065F46] transition-colors duration-300">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function InitiativeGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {initiatives.map((initiative, index) => (
        <InitiativeCard key={index} initiative={initiative} index={index} isInView={isInView} />
      ))}
    </div>
  );
}
