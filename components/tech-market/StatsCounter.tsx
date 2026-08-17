"use client";

import CountUp from "react-countup";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface Props {
  end: number;
  suffix?: string;
  decimals?: number;
}

export default function StatsCounter({ end, suffix, decimals = 0 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  // The final figure, rendered as plain text. This is what ships in the
  // initial HTML and what a non-JS reader, a crawler or a slow connection
  // sees — the counter only ever replaces an already-correct number, so the
  // stat is never blank. Previously this returned an empty span until the
  // element scrolled into view, leaving the figures as a bare "$".
  const formatted = `${end.toFixed(decimals)}${suffix ?? ""}`;

  if (shouldReduceMotion) {
    return <span ref={ref}>{formatted}</span>;
  }

  return (
    <span ref={ref}>
      {isInView ? (
        <CountUp
          start={decimals > 0 ? 0 : 1}
          end={end}
          duration={3}
          decimals={decimals}
          suffix={suffix}
        />
      ) : (
        formatted
      )}
    </span>
  );
}
