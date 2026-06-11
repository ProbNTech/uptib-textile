"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { LazyVideo } from "@/components/LazyVideo";

const BANNER_VIDEO = "/videos/banner.mp4";
const BANNER_POSTER = "/videos/banner-poster.jpg";

const slides = [
  {
    label: "PAKISTAN TEXTILE PARTNERS",
    headline: "Made in Pakistan. Sold across the world.",
    cta: { text: "Browse products", href: "/products" },
    secondary: { text: "Our services", href: "/services" },
  },
  {
    label: "GLOBAL EXPORT",
    headline: "Take Pakistan's textile manufacturing to buyers worldwide",
    cta: { text: "Become a member", href: "/membership" },
    secondary: { text: "Global textile market", href: "/global-textile-market" },
  },
  {
    label: "GROW YOUR EXPORTS",
    headline: "Marketing, e-commerce and global market access for Pakistani exporters",
    cta: { text: "Our services", href: "/services" },
    secondary: { text: "Explore membership", href: "/membership" },
  },
  {
    label: "REACH NEW MARKETS",
    headline: "Helping Pakistani manufacturers reach buyers across the EU, USA, Middle East and beyond",
    cta: { text: "Become a member", href: "/membership" },
    secondary: { text: "Marketing & visibility", href: "/services/marketing" },
  },
];

const SLIDE_DURATION_MS = 7000;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(id);
  }, [isPlaying]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      const v = videoRef.current;
      if (v) {
        if (next) v.play().catch(() => {});
        else v.pause();
      }
      return next;
    });
  }, []);

  const slide = slides[currentIndex];

  return (
    <section className="relative z-[2] w-full min-h-[420px] sm:min-h-[500px] lg:h-screen overflow-hidden bg-[#0B0F1A]">
      {/* Single looping background video — lazy-mounted */}
      <LazyVideo
        ref={videoRef}
        src={BANNER_VIDEO}
        poster={BANNER_POSTER}
        rootMargin="0px"
        aria-hidden="true"
        className="absolute inset-0 z-0 w-full h-full"
        style={{ position: "absolute", inset: 0 }}
      />

      {/* Content wrapper */}
      <div className="relative z-20 flex items-center lg:h-screen px-6 sm:px-10 lg:px-16 xl:px-20 pt-14 sm:pt-16 lg:pt-0 pb-14 lg:pb-0">
        <div className="relative w-full max-w-full lg:max-w-[55%]">
          {/* Localized soft shade behind text — pure colour, no blur, video stays sharp */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 -inset-y-6 sm:-inset-x-10 sm:-inset-y-8 rounded-[2.5rem]"
            style={{
              background:
                "radial-gradient(ellipse 75% 70% at 35% 50%, rgba(5,10,20,0.6) 0%, rgba(5,10,20,0.35) 45%, rgba(5,10,20,0.08) 78%, rgba(5,10,20,0) 100%)",
            }}
          />
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
                className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.18em] text-[#6FC79A] mb-4 sm:mb-5"
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
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10"
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

      {/* Pause/Play toggle */}
      <button
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>

      {/* Slide indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Switch to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-[#3E8F5E] w-8" : "bg-white/40 w-2 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-[#3E8F5E] via-[#2F7549] to-[#15402A]" />
    </section>
  );
}
