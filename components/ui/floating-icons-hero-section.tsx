"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/* Brand color palette for icon glow */
const BRAND_COLORS = [
  { color: "#047857", glow: "rgba(4,120,87,0.4)", bg: "rgba(4,120,87,0.15)", border: "rgba(4,120,87,0.30)" },
  { color: "#10B981", glow: "rgba(16,185,129,0.4)", bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.30)" },
  { color: "#047857", glow: "rgba(4,120,87,0.4)", bg: "rgba(4,120,87,0.15)", border: "rgba(4,120,87,0.30)" },
  { color: "#EAB308", glow: "rgba(234,179,8,0.35)", bg: "rgba(234,179,8,0.12)", border: "rgba(234,179,8,0.25)" },
];

interface IconProps {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

export interface FloatingIconsBgProps {
  icons: IconProps[];
}

/* Each icon tracks the mouse directly from the event — no shared ref timing issues */
const Icon = ({
  iconData,
  index,
}: {
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const palette = BRAND_COLORS[index % BRAND_COLORS.length];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - cx, 2) + Math.pow(e.clientY - cy, 2)
      );

      if (distance < 150) {
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
        const force = (1 - distance / 150) * 50;
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const IconComp = iconData.icon;

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute", iconData.className)}
    >
      <motion.div
        className="flex items-center justify-center w-14 h-14 md:w-[72px] md:h-[72px] p-3 rounded-3xl backdrop-blur-md"
        style={{
          background: palette.bg,
          border: `1px solid ${palette.border}`,
          boxShadow: `0 0 20px ${palette.glow}, 0 0 40px ${palette.glow}, inset 0 0 15px ${palette.bg}`,
        }}
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <IconComp
          className="w-7 h-7 md:w-9 md:h-9"
          style={{
            color: palette.color,
            filter: `drop-shadow(0 0 8px ${palette.glow})`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsBg = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsBgProps
>(({ className, icons, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]", className)}
      {...props}
    >
      {icons.map((iconData, index) => (
        <Icon
          key={iconData.id}
          iconData={iconData}
          index={index}
        />
      ))}
    </div>
  );
});

FloatingIconsBg.displayName = "FloatingIconsBg";

export { FloatingIconsBg };
