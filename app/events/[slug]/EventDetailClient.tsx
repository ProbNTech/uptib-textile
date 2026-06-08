"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Countdown hook                                                     */
/* ------------------------------------------------------------------ */
function useCountdown(targetDate: string) {
  const calculateTimeLeft = useCallback(() => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft>>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
}

/* ------------------------------------------------------------------ */
/*  Countdown block                                                    */
/* ------------------------------------------------------------------ */
function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-base text-white/60 uppercase tracking-wider mt-2 font-semibold">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
interface EventDetailClientProps {
  title: string;
  dateISO: string;
  category: string;
  tag: string;
  status: "upcoming" | "past";
}

/* ------------------------------------------------------------------ */
/*  Hero section with countdown                                        */
/* ------------------------------------------------------------------ */
export function EventDetailClient({ title, dateISO, category, tag, status }: EventDetailClientProps) {
  const shouldReduceMotion = useReducedMotion();
  const timeLeft = useCountdown(dateISO);
  const isUpcoming = status === "upcoming" && timeLeft !== null;

  return (
    <section className="relative bg-[#1C1F2E] overflow-hidden">
      <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20 pt-16 pb-16">
        {/* Breadcrumb */}
        <motion.nav
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-base text-white/60">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li>
              <Link href="/events" className="hover:text-white transition-colors">
                Events
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-white/90 font-medium truncate max-w-[260px]">{title}</li>
          </ol>
        </motion.nav>

        {/* Category & Tag chips */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex flex-wrap items-center gap-3 mb-4"
        >
          <span className="text-base font-bold uppercase tracking-widest text-[#10B981]">
            {category}
          </span>
          <span className="w-px h-4 bg-white/30" />
          <span className="text-base font-semibold uppercase tracking-wide text-white/60">
            {tag}
          </span>
          {status === "past" && (
            <>
              <span className="w-px h-4 bg-white/30" />
              <span className="text-base font-semibold uppercase tracking-wide text-white/40">
                Past Event
              </span>
            </>
          )}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[3rem] leading-[1.08] text-white max-w-3xl mb-5"
        >
          {title}
        </motion.h1>

        <div className="w-full h-px bg-white/20 mb-8" />

        {/* Countdown — only for upcoming events with valid future date */}
        {isUpcoming && timeLeft && (
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-6 sm:gap-8 border border-white/20 px-8 py-5"
          >
            <CountdownBlock value={timeLeft.days} label="Days" />
            <div className="w-px h-10 bg-white/20" />
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <div className="w-px h-10 bg-white/20" />
            <CountdownBlock value={timeLeft.minutes} label="Minutes" />
            <div className="w-px h-10 bg-white/20" />
            <CountdownBlock value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
