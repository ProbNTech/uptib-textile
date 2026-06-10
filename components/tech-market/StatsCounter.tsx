"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  end: number;
  suffix?: string;
  decimals?: number;
}

export default function StatsCounter({ end, suffix, decimals = 0 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView && (
        <CountUp
          start={decimals > 0 ? 0 : 1}
          end={end}
          duration={3}
          decimals={decimals}
          suffix={suffix}
        />
      )}
    </span>
  );
}