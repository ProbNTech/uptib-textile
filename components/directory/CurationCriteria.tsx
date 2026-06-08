"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Handshake, TrendingUp } from "lucide-react";

const CRITERIA = [
  {
    icon: CheckCircle2,
    title: "Manually vetted",
    body: "Every member is reviewed by the UPTIB team before listing — no auto-scraped profiles.",
    color: "#047857",
  },
  {
    icon: TrendingUp,
    title: "Real-world delivery",
    body: "Companies must ship in production. Demos and prototypes don't qualify.",
    color: "#01A95C",
  },
  {
    icon: Handshake,
    title: "UK ↔ Pakistan corridor",
    body: "Active across both markets — staff, clients, partners, or investment flows.",
    color: "#047857",
  },
  {
    icon: Globe2,
    title: "Growth-stage",
    body: "Past the prototype stage, ready to ship for international clients today.",
    color: "#F59E0B",
  },
];

export function CurationCriteria() {
  return (
    <section
      className="relative py-14 lg:py-16 bg-[#F8FAFF] border-y border-[#E2E8F0]"
      aria-labelledby="curation-heading"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-2xl mb-10">
          <span className="inline-block rounded-full bg-white border border-[#D1FAE5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#065F46]">
            Curation criteria
          </span>
          <h2
            id="curation-heading"
            className="mt-3 font-heading font-extrabold text-[#064E3B] text-2xl sm:text-3xl tracking-tight"
          >
            How a company earns a featured slot
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CRITERIA.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative pl-5 pr-3 py-2"
              >
                {/* Left accent bar */}
                <span
                  aria-hidden="true"
                  className="absolute top-2 bottom-2 left-0 w-[2px] rounded-full transition-all duration-300 group-hover:w-1"
                  style={{ background: c.color }}
                />
                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-lg"
                    style={{ background: `${c.color}15`, color: c.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-[#064E3B] text-base leading-tight">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
