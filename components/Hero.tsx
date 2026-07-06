"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// YouTube-hosted background loop (controls hidden, muted, auto-looping).
const YT_VIDEO_ID = "ItE42gsHueY";
const YT_EMBED_SRC =
  `https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}` +
  `?autoplay=1&mute=1&controls=0&loop=1&playlist=${YT_VIDEO_ID}` +
  `&playsinline=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3` +
  `&disablekb=1&fs=0`;

const slides = [
  {
    label: "PAK TEXTILES GLOBAL PARTNERS",
    headline: "Made in Pakistan. Sold across the world.",
    cta: { text: "Browse products", href: "/products" },
    secondary: { text: "Our services", href: "/services" },
  },
  {
    label: "GLOBAL EXPORT",
    headline: "Take Pakistan's textile manufacturing to buyers worldwide",
    cta: { text: "Contact us", href: "/contact" },
    secondary: { text: "Global textile market", href: "/global-textile-market" },
  },
  {
    label: "GROW YOUR EXPORTS",
    headline: "Marketing, e-commerce and global market access for Pakistani exporters",
    cta: { text: "Our services", href: "/services" },
    secondary: { text: "Contact us", href: "/contact" },
  },
  {
    label: "REACH NEW MARKETS",
    headline: "Helping Pakistani manufacturers reach buyers across the EU, USA, Middle East and beyond",
    cta: { text: "Contact us", href: "/contact" },
    secondary: { text: "Marketing & visibility", href: "/services/marketing-sales" },
  },
];

const SLIDE_DURATION_MS = 7000;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[currentIndex];

  return (
    <section className="relative z-[2] w-full min-h-[420px] sm:min-h-[500px] lg:h-screen overflow-hidden bg-[#0B0F1A]">
      {/* Looping YouTube background — controls hidden, cropped to fill */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <iframe
          title="Background video"
          src={YT_EMBED_SRC}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
          style={{
            width: "100vw",
            height: "56.25vw", // 16:9 → keep width, derive height
            minWidth: "177.78vh", // 16:9 → keep height, derive width
            minHeight: "100vh",
          }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 flex items-center justify-center text-center lg:h-screen px-6 sm:px-10 lg:px-16 xl:px-20 pt-14 sm:pt-16 lg:pt-0 pb-14 lg:pb-0">
        <div className="relative w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.18em] text-white mb-4 sm:mb-5"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
              >
                {slide.label}
              </p>

              <h1
                className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-7"
                style={{
                  lineHeight: 1.25,
                  textShadow: "0 2px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                {slide.headline.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { duration: 0.35, delay: 0.15 + i * 0.035, ease: [0.22, 1, 0.36, 1] }
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              >
                <ShinyButton href={slide.cta.href}>{slide.cta.text}</ShinyButton>
                <Link
                  href={slide.secondary.href}
                  className="inline-flex items-center gap-2.5 text-white font-semibold text-base sm:text-base underline underline-offset-4 hover:text-white/75 transition-colors duration-200"
                >
                  {slide.secondary.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Switch to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-[#78899B] w-8" : "bg-white/40 w-2 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
