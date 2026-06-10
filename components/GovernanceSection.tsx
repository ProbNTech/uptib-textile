"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/Section";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const brandColors = ["#2F7549", "#2F7549", "#3E8F5E"];

export function GovernanceSection({
  id,
  variant,
  title,
  desc,
  image,
  imageAlt,
  imageLeft,
  responsibilities,
  colorIdx,
}: {
  id: string;
  variant: "light" | "alt";
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  responsibilities: string[];
  colorIdx: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const color = brandColors[colorIdx];

  const textContent = (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-base font-bold uppercase tracking-widest mb-3" style={{ background: `${color}12`, color }}>
        {title}
      </div>
      <h2 className="font-heading font-extrabold text-3xl text-[#16291E] mb-2 leading-tight">{title}</h2>
      <div className="h-1 w-14 rounded-full mb-5" style={{ background: color }} />
      <p className="text-[#3D4152] leading-relaxed mb-7">{desc}</p>
      <div className="rounded-lg p-6 relative overflow-hidden" style={{ background: `${color}06`, border: `1px solid ${color}20` }}>
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: color }} />
        <h4 className="font-heading font-bold text-base uppercase tracking-wide mb-4 pl-3" style={{ color }}>Key Responsibilities</h4>
        <ul className="space-y-3 pl-3">
          {responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={2.5} style={{ color }} />
              <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  const imageContent = (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative"
    >
      <div className="relative aspect-[4/3] max-h-[420px] overflow-hidden rounded-lg shadow-lg" style={{ border: `2px solid ${color}30` }}>
        <Image src={image} alt={imageAlt} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 560px" />
      </div>
      <div className="absolute -bottom-2 -z-10 w-20 h-20 rounded-lg" style={{ background: `${color}15`, [imageLeft ? "right" : "left"]: "-8px" }} />
    </motion.div>
  );

  return (
    <section id={id} className="scroll-mt-24">
      <Section variant={variant}>
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className={imageLeft ? "order-1" : "order-2 lg:order-1"}>{imageLeft ? imageContent : textContent}</div>
          <div className={imageLeft ? "order-2" : "order-1 lg:order-2"}>{imageLeft ? textContent : imageContent}</div>
        </div>
      </Section>
    </section>
  );
}
