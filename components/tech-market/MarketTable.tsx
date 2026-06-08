"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { MarketSector } from "@/lib/data/market-data";

interface MarketTableProps {
  sectors: MarketSector[];
  title?: string;
}

export function MarketTable({ sectors, title }: MarketTableProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {title && (
        <h3 className="font-heading font-bold text-xl text-[#064E3B] mb-4">
          {title}
        </h3>
      )}

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-[#e2e0dc]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#064E3B] text-white">
              <th className="text-left px-5 py-3.5 font-semibold">Sector</th>
              <th className="text-left px-5 py-3.5 font-semibold">
                Current Market
              </th>
              <th className="text-left px-5 py-3.5 font-semibold">
                Forecast
              </th>
              <th className="text-left px-5 py-3.5 font-semibold">
                Key Opportunities
              </th>
            </tr>
          </thead>
          <tbody>
            {sectors.map((sector, i) => (
              <motion.tr
                key={sector.sector}
                className={i % 2 === 0 ? "bg-white" : "bg-[#f7f6f4]"}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 10 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <td className="px-5 py-3.5 font-semibold text-[#064E3B] whitespace-nowrap">
                  {sector.sector}
                </td>
                <td className="px-5 py-3.5 text-[#3D4152]">
                  {sector.currentMarket}
                </td>
                <td className="px-5 py-3.5 text-[#10B981] font-medium">
                  {sector.forecast}
                </td>
                <td className="px-5 py-3.5 text-[#3D4152] max-w-xs">
                  {sector.opportunities}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.sector}
            className="bg-white rounded-xl border border-[#e2e0dc] p-4"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.3,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h4 className="font-semibold text-[#064E3B] mb-2">
              {sector.sector}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm mb-2">
              <div>
                <span className="text-[#6b7280] text-xs block">Current</span>
                <span className="text-[#3D4152] font-medium">
                  {sector.currentMarket}
                </span>
              </div>
              <div>
                <span className="text-[#6b7280] text-xs block">Forecast</span>
                <span className="text-[#10B981] font-medium">
                  {sector.forecast}
                </span>
              </div>
            </div>
            <p className="text-[#3D4152] text-sm">{sector.opportunities}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
