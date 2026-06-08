"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import type { DirectoryCompany } from "@/data/companies";
import { getCategoryStyle } from "./categoryStyle";

import "swiper/css";
import "swiper/css/effect-fade";

interface FeaturedCompanySpotlightProps {
  /** Pass an array; component scales: single static spread vs. carousel for N. */
  companies: DirectoryCompany[];
  eyebrow?: string;
}

const AUTOPLAY_MS = 6000;

export function FeaturedCompanySpotlight({
  companies,
  eyebrow = "Featured company",
}: FeaturedCompanySpotlightProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [index, setIndex] = useState(0);

  if (companies.length === 0) return null;
  const multi = companies.length > 1;

  return (
    <section
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
      aria-labelledby="featured-company-title"
    >
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section heading */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D1FAE5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#065F46]">
              <Star className="w-3 h-3" />
              {multi ? `${companies.length} featured companies` : eyebrow}
            </span>
            <h2
              id="featured-company-title"
              className="mt-3 font-heading font-extrabold text-[#064E3B] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
            >
              Editorial picks — hand-selected by UPTIB
            </h2>
          </div>

          {/* Carousel controls — only when N > 1 */}
          {multi && (
            <div className="flex items-center gap-4">
              <span className="font-mono text-[13px] tracking-[0.25em] text-[#064E3B]">
                <span className="font-bold">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-[#94A3B8]"> / {String(companies.length).padStart(2, "0")}</span>
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous featured company"
                  onClick={() => swiper?.slidePrev()}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-[#CBD5E1] text-[#064E3B] hover:border-[#064E3B] hover:bg-[#064E3B] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next featured company"
                  onClick={() => swiper?.slideNext()}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-[#CBD5E1] text-[#064E3B] hover:border-[#064E3B] hover:bg-[#064E3B] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          allowTouchMove={multi}
          loop={multi}
          autoplay={
            multi
              ? { delay: AUTOPLAY_MS, disableOnInteraction: false, pauseOnMouseEnter: false }
              : false
          }
          onSwiper={setSwiper}
          onSlideChange={(s) => setIndex(s.realIndex)}
          className="!overflow-visible"
        >
          {companies.map((company) => (
            <SwiperSlide key={company.id}>
              <Spread company={company} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress bar + dots — only when N > 1 */}
        {multi && (
          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 h-[3px] rounded-full bg-[#E5E7EB] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className="h-full bg-[#064E3B]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                  aria-hidden="true"
                />
              </AnimatePresence>
            </div>
            <div className="flex gap-1.5">
              {companies.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to featured company ${i + 1}`}
                  onClick={() => swiper?.slideToLoop(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-[#064E3B] w-8" : "bg-[#CBD5E1] w-2 hover:bg-[#94A3B8]"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── single editorial spread ─── */

function Spread({ company }: { company: DirectoryCompany }) {
  const style = getCategoryStyle(company.category);
  const Icon = style.icon;

  return (
    <article
      className="relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] min-h-[480px] lg:min-h-[520px]"
    >
      {/* LEFT pane */}
      <div
        className="relative lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between lg:min-h-[520px] overflow-hidden"
        style={{
          background: `linear-gradient(140deg, #052e26 0%, ${style.color}40 100%), radial-gradient(circle at 30% 20%, ${style.color}40, transparent 60%)`,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 0.6px, transparent 0.6px)",
            backgroundSize: "22px 22px",
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-16 -right-16 w-[280px] h-[280px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${style.accent}55, transparent 70%)`,
            filter: "blur(50px)",
          }}
          animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
            style={{
              background: `${style.color}25`,
              boxShadow: `inset 0 0 0 1px ${style.color}50`,
            }}
          >
            <Icon className="w-3.5 h-3.5" />
            {company.category}
          </span>
        </div>

        <div className="relative mt-8">
          {company.logoUrl ? (
            <div className="relative w-32 h-32 rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
              <Image
                src={company.logoUrl}
                alt={`${company.name} logo`}
                fill
                sizes="128px"
                className="object-contain p-4"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-2xl flex items-center justify-center font-heading font-extrabold text-4xl bg-white text-[#052e26]">
              {company.name.split(" ").slice(0, 2).map((p) => p[0]).join("")}
            </div>
          )}

          <h3 className="mt-6 font-heading font-extrabold text-white text-3xl sm:text-4xl leading-tight">
            {company.name}
          </h3>
          <p className="mt-2 flex items-center gap-1.5 text-white/70 text-sm">
            <MapPin className="w-4 h-4" style={{ color: style.accent }} />
            {company.location}
          </p>
        </div>
      </div>

      {/* RIGHT pane */}
      <div className="relative lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col">
        <div className="relative max-w-xl">
          <Quote
            className="absolute -top-2 -left-2 w-10 h-10 opacity-15"
            style={{ color: style.color }}
            aria-hidden="true"
          />
          <p className="pl-8 text-lg sm:text-xl text-[#064E3B] font-medium leading-relaxed line-clamp-5">
            {company.description}
          </p>
        </div>

        <div className="mt-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#64748B] mb-3">
            What they deliver
          </p>
          <div className="flex flex-wrap gap-2">
            {company.services.slice(0, 8).map((s) => (
              <span
                key={s}
                className="inline-block rounded-full bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-[#334155] border border-transparent transition-colors hover:border-[#CBD5E1]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-9 mt-auto pt-6 flex flex-wrap items-center gap-3">
          <a
            href="#all-companies"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#064E3B] border border-[#CBD5E1] hover:border-[#064E3B] transition-colors"
          >
            Explore all members
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857]">
            <Sparkles className="w-3.5 h-3.5" />
            UPTIB Verified Member
          </span>
        </div>
      </div>
    </article>
  );
}
