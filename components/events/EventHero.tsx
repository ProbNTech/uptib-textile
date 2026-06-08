"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";

export function EventHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FAFC]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-[#047857] rounded-full opacity-[0.12] blur-[200px]"
          animate={shouldReduceMotion ? {} : {
            x: [0, 50, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[700px] h-[700px] bg-[#10B981] rounded-full opacity-[0.08] blur-[160px]"
          animate={shouldReduceMotion ? {} : {
            x: [0, -60, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 1.25, 0.85, 1],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-[650px] h-[650px] bg-[#047857] rounded-full opacity-[0.06] blur-[150px]"
          animate={shouldReduceMotion ? {} : {
            x: [0, 40, -50, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-16 pb-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 w-full"
          >
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#064E3B] relative"
            >
              <span className="relative inline-block">
                Events & Engagements
                <AnimatedUnderline />
              </span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-[#475569] font-medium leading-relaxed tracking-tight"
            >
              Stay updated with UPTIB events, news, and activities.
            </motion.p>

            {/* Category pills */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center gap-3 pt-4"
            >
              {["UK–Pakistan", "Innovation", "Community"].map((chip, index) => (
                <motion.div
                  key={chip}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }
                  }
                  animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="px-4 py-1.5 rounded-full bg-white backdrop-blur-sm border border-gray-100 text-base font-medium text-[#064E3B]"
                >
                  {chip}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
