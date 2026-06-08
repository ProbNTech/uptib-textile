"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Technology & Innovation Companies",
    description:
      "AI, SaaS, FinTech, HealthTech, Cloud, Cybersecurity, Web3, IoT startups and tech firms building scalable solutions.",
    image: "/image/Initiatives/ai-tech-programs.jpg",
  },
  {
    title: "Tech Investment & Capital Partners",
    description:
      "Venture capital firms, angel networks, private equity, cross-border funds, and corporate venture arms.",
    image: "/image/eventgallery/event-1.jpg",
  },
  {
    title: "Professional Service Providers",
    description:
      "Legal, tax, compliance, consulting, market entry, and advisory firms supporting tech expansion.",
    image: "/image/Initiatives/techmart-global.jpg",
  },
  {
    title: "Enterprises & Corporate Members",
    description:
      "Large enterprises, telecom providers, multinational corporations, and digital transformation leaders.",
    image: "/image/eventgallery/event-2.jpg",
  },
  {
    title: "Academic & Research Institutions",
    description:
      "Universities, research labs, accelerators, incubators, and innovation hubs.",
    image: "/image/Initiatives/people-ai-platform.jpg",
  },
  {
    title: "Government & Policy Bodies",
    description:
      "Trade commissions, digital ministries, economic development and export councils.",
    image: "/image/eventgallery/event-3.jpg",
  },
  {
    title: "Individual Industry Leaders",
    description:
      "Founders, senior executives, investors, advisors, and recognized subject-matter experts.",
    image: "/image/eventgallery/event-4.jpg",
  },
];

export function WhoCanJoin() {
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 380;
    const gap = 24;
    const distance = cardWidth + gap;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const el = scrollRef.current;
      if (!el) return;
      const dx = e.clientX - dragStart.current.x;
      el.scrollLeft = dragStart.current.scrollLeft - dx;
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section className="pt-10 pb-8 bg-white overflow-hidden">
      <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-base font-semibold text-[#1F2937] mb-2 block"
          >
            Membership
          </motion.span>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 mb-6"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#047857] shrink-0">
              Who can join?
            </h2>
            <div className="flex-1 h-[2px] bg-[#10B981]" />
          </motion.div>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#4B5563] leading-relaxed"
          >
            UPTIB brings together a cross-border ecosystem of innovators, investors, enterprises, and institutions.
          </motion.p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className={`absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[#047857] hover:bg-[#047857] hover:text-white hover:border-[#047857] transition-all duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className={`absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[#047857] hover:bg-[#047857] hover:text-white hover:border-[#047857] transition-all duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                data-card
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
              >
                <div className="relative h-full bg-white rounded border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1.5 hover:border-[#047857]/20 transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#F8FAFC]">
                    {!imgErrors[index] ? (
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                        onError={() => setImgErrors((prev) => ({ ...prev, [index]: true }))}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#047857]/10 to-[#10B981]/10">
                        <span className="text-base font-medium text-[#4B5563]">Image</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-2 text-[#1F2937] group-hover:text-[#047857] transition-colors duration-300 leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-[#4B5563] text-base leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Blue underline */}
                    <div className="h-[3px] w-12 bg-[#047857] rounded-full mt-5 group-hover:w-20 transition-all duration-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade edges */}
          <div
            className={`absolute inset-y-0 left-0 w-12 pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: "linear-gradient(to right, white, transparent)" }}
          />
          <div
            className={`absolute inset-y-0 right-0 w-12 pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: "linear-gradient(to left, white, transparent)" }}
          />
        </div>
      </div>
    </section>
  );
}
