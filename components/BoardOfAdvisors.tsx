"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const advisors = [
  {
    name: "Khalil Choudhary",
    role: "President",
    bio: "Leading global trade partnerships, buyer engagement, and operational strategy across export markets.",
    photo: "/image/ceo/khalil-choudhary-headshot.jpg",
    accent: "#047857",
    delay: 0,
  },
  {
    name: "Muhammad Faizan Ashraf",
    role: "Director - Trade & Exports",
    bio: "Driving export programmes, supplier development, and market-access strategy across global markets.",
    photo: "/image/board/director.jpg",
    accent: "#047857",
    delay: 0.15,
  },
  {
    name: "Mahrouz Choudhary",
    role: "Director Marketing UK",
    bio: "Leading marketing strategy, brand positioning, and stakeholder engagement across the UK.",
    photo: "/image/board/mehrouz.jpeg",
    accent: "#047857",
    delay: 0.15,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BoardOfAdvisors() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(1000px circle at 50% 0%, rgba(4,120,87,0.07), transparent 50%), radial-gradient(800px circle at 10% 100%, rgba(5,150,105,0.05), transparent 50%), radial-gradient(700px circle at 90% 100%, rgba(16,185,129,0.04), transparent 50%), #FFFFFF",
      }}
    >
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1C1F2E 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* ── Heading ── */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={headingVariants}
          className="text-center mb-14 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-8 h-[3px] rounded-full bg-[#047857]" />
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#047857]">
              Leadership
            </p>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] text-[#1C1F2E]">
            Board of Advisors
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-[#5A5F72]">
            Guided by distinguished leaders committed to strengthening
            Pakistan&rsquo;s textile trade with the world.
          </p>
        </motion.div>

        {/* ── Cards — 3-column horizontal layout ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {advisors.map((advisor) => (
            <motion.div
              key={advisor.name}
              custom={advisor.delay}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              <AdvisorCard advisor={advisor} />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom decorative strip ── */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 lg:mt-16 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-[140px] bg-gradient-to-r from-transparent to-[#047857]/30" />
          <p className="text-xs sm:text-sm text-[#5A5F72] uppercase tracking-[0.2em] font-medium text-center">
            More advisors joining soon
          </p>
          <div className="h-px flex-1 max-w-[140px] bg-gradient-to-l from-transparent to-[#047857]/30" />
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────
   Advisor Card — tall, elegant card with glass effect
──────────────────────────────────────────────────── */
function AdvisorCard({
  advisor,
}: {
  advisor: (typeof advisors)[number];
}) {
  return (
    <div className="group relative flex flex-col items-center text-center rounded-xl overflow-hidden h-full">
      {/* Card background — white with subtle border */}
      <div
        className="absolute inset-0 rounded-xl transition-all duration-500 bg-[#f7f8fa] border border-[#E5E7EB] group-hover:shadow-xl group-hover:border-[#047857]/20"
      />

      {/* Card content */}
      <div className="relative z-10 px-6 pt-10 pb-8 flex flex-col items-center h-full">
        {/* Photo */}
        <div className="relative mb-6 group/photo">
          {/* Outer glow ring */}
          <div
            className="absolute -inset-[3px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `conic-gradient(from 0deg, ${advisor.accent}, transparent 40%, ${advisor.accent} 60%, transparent 100%)`,
            }}
          />
          <div className="absolute -inset-[2px] rounded-full bg-[#f7f8fa]" />

          <div
            className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg"
            style={{ boxShadow: `0 0 0 2px ${advisor.accent}40` }}
          >
            <Image
              src={advisor.photo}
              alt={advisor.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="160px"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="font-heading font-bold text-[#1C1F2E] text-lg sm:text-xl leading-tight mb-3">
          {advisor.name}
        </h3>

        {/* Role badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4"
          style={{
            color: advisor.accent,
            background: `${advisor.accent}12`,
            border: `1px solid ${advisor.accent}30`,
          }}
        >
          {advisor.role}
        </span>

        {/* Bio */}
        <p className="text-[#5A5F72] text-sm leading-relaxed mt-auto">
          {advisor.bio}
        </p>
      </div>
    </div>
  );
}
