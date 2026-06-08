"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Users, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PartnerCard } from "@/components/PartnerCard";
import { GlobalCTA } from "@/components/GlobalCTA";
import { featuredPartners, partnerCategories } from "@/data/featured-partners";

export default function PartnersPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return featuredPartners;
    return featuredPartners.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <Image
          src="/image/banners/banner106.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_50%]"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-[#0c1530]/70" />

        {/* Decorative blobs */}
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #059669 0%, transparent 70%)" }} />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #10B981 0%, transparent 70%)" }} />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 text-center max-w-3xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="w-4 h-4 text-[#6EE7B7]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#6EE7B7]">
              Our Partners
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Partners
          </motion.h1>

          <motion.p
            className="text-lg text-white/50 leading-relaxed max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Trusted organisations and innovators across the UK–Pakistan technology
            corridor — showcasing services, solutions, and expertise.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            {[
              { icon: Users, label: `${featuredPartners.length} Partners`, color: "#059669" },
              { icon: Sparkles, label: `${partnerCategories.length - 1} Sectors`, color: "#10B981" },
              { icon: ArrowUpRight, label: "Global Reach", color: "#EAB308" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                <span className="text-sm font-semibold text-white/70">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ Filters + Grid ═══ */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          {/* Filter bar */}
          <div className="sticky top-20 z-30 mb-10 -mx-2 px-2 py-3 bg-white/80 backdrop-blur-md">
            <div className="flex flex-wrap gap-2">
              {partnerCategories.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === "All"
                    ? featuredPartners.length
                    : featuredPartners.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                      isActive
                        ? "bg-[#1C1F2E] text-white border-[#1C1F2E] shadow-md"
                        : "bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#D1D5DB] hover:text-[#374151]"
                    }`}
                  >
                    {cat}
                    <span
                      className={`text-[11px] px-1.5 py-0.5 rounded-md font-bold ${
                        isActive
                          ? "bg-white/15 text-white/80"
                          : "bg-[#F3F4F6] text-[#9CA3AF]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Partners grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((partner, i) => (
                <PartnerCard key={partner.slug} partner={partner} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 rounded-2xl border border-[#E5E7EB] mt-4">
              <p className="text-lg text-[#9CA3AF]">No partners found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <GlobalCTA
        label="Become a Partner"
        title="Want to feature your business on UPTIB?"
        subtitle="Showcase your services, solutions, and expertise to a growing network of tech companies, investors, and professionals across the UK–Pakistan corridor."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Apply for Membership"
        secondaryButtonLink="/membership#apply"
      />
    </div>
  );
}
