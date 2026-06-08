"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Brain,
  Cloud,
  Shield,
  Code2,
  Server,
  Users,
  ChevronDown,
} from "lucide-react";
import type { PakistanScopeItem } from "@/lib/data/market-data";

const sectorIcons: Record<number, React.ElementType> = {
  1: Brain,
  2: Cloud,
  3: Shield,
  4: Code2,
  5: Server,
  6: Users,
};

const sectorColors: Record<number, string> = {
  1: "#047857",
  2: "#10B981",
  3: "#047857",
  4: "#8B5CF6",
  5: "#F59E0B",
  6: "#06B6D4",
};

interface SectorTabsProps {
  sectors: PakistanScopeItem[];
}

export function SectorTabs({ sectors }: SectorTabsProps) {
  const [activeId, setActiveId] = useState<number | null>(1);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      {sectors.map((sector) => {
        const Icon = sectorIcons[sector.id] || Code2;
        const color = sectorColors[sector.id] || "#047857";
        const isOpen = activeId === sector.id;

        return (
          <div
            key={sector.id}
            className="rounded-xl border border-[#e2e0dc] overflow-hidden bg-white"
          >
            <button
              onClick={() => setActiveId(isOpen ? null : sector.id)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-[#f7f6f4] transition-colors"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <span className="flex-1 font-semibold text-[#064E3B]">
                {sector.id}. {sector.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#6b7280] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={{ height: "auto", opacity: 1 }}
                  exit={
                    shouldReduceMotion
                      ? { height: 0, opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#6b7280] uppercase tracking-wider mb-2">
                          Opportunities
                        </h4>
                        <ul className="space-y-1.5">
                          {sector.opportunities.map((opp, i) => (
                            <li
                              key={i}
                              className="text-sm text-[#3D4152] flex gap-2"
                            >
                              <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: color }}
                              />
                              {opp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-[#f7f6f4] rounded-lg p-3">
                          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-1">
                            High-Demand Countries
                          </p>
                          <p className="text-sm font-medium text-[#064E3B]">
                            {sector.highDemandCountries}
                          </p>
                        </div>
                        <div className="bg-[#f0fff4] rounded-lg p-3">
                          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-1">
                            Market Growth
                          </p>
                          <p className="text-sm font-medium text-[#10B981]">
                            {sector.marketGrowth}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-1.5">
                            Why Pakistan Fits
                          </p>
                          {sector.whyPakistanFits.map((reason, i) => (
                            <p
                              key={i}
                              className="text-sm text-[#3D4152] mb-1"
                            >
                              {reason}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
