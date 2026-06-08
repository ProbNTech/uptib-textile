"use client";

import { Building2, BadgeCheck, Globe, Layers } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import type { DirectoryCompany } from "@/data/companies";

interface DirectoryStatsProps {
  companies: DirectoryCompany[];
}

export function DirectoryStats({ companies }: DirectoryStatsProps) {
  const count = companies.length;
  const verified = companies.filter((c) => c.verified).length;
  const locations = new Set(companies.map((c) => c.country)).size;
  const categories = new Set(companies.map((c) => c.category)).size;

  const stats = [
    { icon: Building2, label: "Listed companies", value: count, color: "#6FA9FF", suffix: "" },
    { icon: BadgeCheck, label: "Verified members", value: verified, color: "#6FE7B4", suffix: "" },
    { icon: Layers, label: "Industries", value: categories, color: "#FFD86B", suffix: "" },
    { icon: Globe, label: "Locations", value: locations, color: "#FCA5A5", suffix: "" },
  ];

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Directory statistics"
      style={{
        background:
          "radial-gradient(800px circle at 8% 50%, rgba(31,79,216,0.18), transparent 60%), radial-gradient(800px circle at 92% 50%, rgba(1,169,92,0.16), transparent 60%), linear-gradient(180deg, #052e26 0%, #0E2138 100%)",
      }}
    >
      {/* Dotted grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(155,194,255,0.55) 0.6px, transparent 0.6px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20 py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] hover:border-white/20"
              >
                {/* Top accent strip */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${s.color}, ${s.color}00)`,
                  }}
                />

                {/* Glow on hover */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${s.color}55, transparent 70%)`,
                    filter: "blur(18px)",
                  }}
                />

                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4"
                  style={{ background: `${s.color}1f`, color: s.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <p
                  className="font-heading font-extrabold text-3xl sm:text-[2.5rem] leading-none tracking-tight"
                  style={{ color: s.color }}
                >
                  <CountUp end={s.value} duration={1.6} enableScrollSpy scrollSpyOnce />
                  {s.suffix}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/55 font-semibold">
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
