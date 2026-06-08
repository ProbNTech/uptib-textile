"use client";

import { motion } from "framer-motion";
import type { DirectoryCompany, CompanyCategory } from "@/data/companies";
import { getCategoryStyle } from "./categoryStyle";

interface TechEcosystemProps {
  companies: DirectoryCompany[];
}

interface Chip {
  label: string;
  category: CompanyCategory;
}

function buildRows(companies: DirectoryCompany[]): Chip[][] {
  const seen = new Set<string>();
  const all: Chip[] = [];

  for (const c of companies) {
    for (const s of c.services) {
      if (!seen.has(s)) {
        seen.add(s);
        all.push({ label: s, category: c.category });
      }
    }
  }

  // Split into 3 rough rows for the marquee
  const rows: Chip[][] = [[], [], []];
  all.forEach((chip, i) => rows[i % 3].push(chip));

  // Ensure each row has enough chips to fill width — duplicate within row if needed
  return rows.map((r) => (r.length < 6 ? [...r, ...r, ...r] : r));
}

function Row({ chips, reverse, duration }: { chips: Chip[]; reverse?: boolean; duration: number }) {
  // Duplicate for seamless loop
  const doubled = [...chips, ...chips];
  return (
    <div className="relative overflow-hidden">
      {/* edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#052e26] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#052e26] to-transparent" />

      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((c, i) => {
          const style = getCategoryStyle(c.category);
          const Icon = style.icon;
          return (
            <span
              key={`${c.label}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap"
              style={{
                color: style.accent,
                background: `${style.color}14`,
                borderColor: `${style.color}40`,
              }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: style.accent }} />
              {c.label}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export function TechEcosystem({ companies }: TechEcosystemProps) {
  const rows = buildRows(companies);
  const total = new Set(companies.flatMap((c) => c.services)).size;

  if (total === 0) return null;

  return (
    <section
      className="relative py-16 lg:py-20 overflow-hidden"
      aria-labelledby="ecosystem-heading"
      style={{
        background:
          "radial-gradient(900px circle at 12% 50%, rgba(31,79,216,0.18), transparent 60%), radial-gradient(900px circle at 88% 50%, rgba(1,169,92,0.16), transparent 60%), linear-gradient(180deg, #052e26 0%, #0E2138 100%)",
      }}
    >
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(155,194,255,0.55) 0.6px, transparent 0.6px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20 mb-10">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            Capability stack
          </span>
          <h2
            id="ecosystem-heading"
            className="mt-3 font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight"
          >
            {total}+ services across the corridor
          </h2>
          <p className="mt-3 text-base text-white/65 leading-relaxed max-w-xl">
            Every chip below is something one of these companies ships in production today.
            Colour shows the category it belongs to.
          </p>
        </div>
      </div>

      <div className="relative space-y-3">
        <Row chips={rows[0]} duration={45} />
        <Row chips={rows[1]} reverse duration={55} />
        <Row chips={rows[2]} duration={50} />
      </div>
    </section>
  );
}
