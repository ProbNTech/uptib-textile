"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps["variant"];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  description?: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection({
  title,
  subtitle,
  description,
  actions,
  stats,
  images,
  className,
}: HeroSectionProps) {
  const imageSlots = [
    {
      className:
        "absolute left-1/2 top-0 z-30 h-52 w-52 -translate-x-1/2 rounded-2xl bg-muted p-2 shadow-lg sm:h-72 sm:w-72",
      origin: "bottom center",
    },
    {
      className:
        "absolute right-0 top-[18%] z-20 h-44 w-44 rounded-2xl bg-muted p-2 shadow-lg sm:h-60 sm:w-60",
      origin: "left center",
    },
    {
      className:
        "absolute bottom-0 left-0 z-10 h-40 w-40 rounded-2xl bg-muted p-2 shadow-lg sm:h-56 sm:w-56",
      origin: "top right",
    },
    {
      className:
        "absolute left-10 top-10 z-40 hidden h-28 w-28 rounded-2xl bg-muted p-2 shadow-lg sm:block sm:h-36 sm:w-36",
      origin: "bottom right",
    },
    {
      className:
        "absolute bottom-0 left-1/2 z-25 h-44 w-44 -translate-x-[55%] rounded-2xl bg-muted p-2 shadow-lg sm:h-60 sm:w-60",
      origin: "top center",
    },
    {
      className:
        "absolute bottom-[10%] right-[22%] z-15 hidden h-28 w-28 rounded-2xl bg-muted p-2 shadow-lg sm:block sm:h-40 sm:w-40",
      origin: "top left",
    },
  ] as const;

  return (
    <section className={cn("w-full overflow-hidden bg-background py-12 sm:py-24", className)}>
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl xl:text-8xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl" variants={itemVariants}>
            {subtitle}
          </motion.p>
          {description && (
            <motion.p className="mt-4 max-w-xl text-base text-muted-foreground/90 sm:text-lg" variants={itemVariants}>
              {description}
            </motion.p>
          )}
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button
                key={index}
                onClick={action.onClick}
                variant={action.variant}
                size="lg"
                className={action.className}
              >
                {action.text}
              </Button>
            ))}
          </motion.div>
          <motion.div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start" variants={itemVariants}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">{stat.icon}</div>
                <div>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[520px] w-full sm:h-[620px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-emerald-200/50 dark:bg-emerald-800/30"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-purple-200/50 dark:bg-purple-800/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "0.5s" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-green-200/50 dark:bg-green-800/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "1s" }}
          />

          {imageSlots.slice(0, Math.min(images.length, imageSlots.length)).map((slot, index) => (
            <motion.div
              key={slot.className}
              className={slot.className}
              style={{ transformOrigin: slot.origin }}
              variants={imageVariants}
            >
              <img src={images[index]} alt="" className="h-full w-full rounded-xl object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
