"use client";

import { ReactNode, useRef, useState, useCallback } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "light" | "dark" | "alt" | "glass";
}

export function Card({ children, className = "", hover = false, variant = "light" }: CardProps) {
  const baseStyles = "rounded border p-7 transition-all duration-300 relative overflow-hidden";
  const variantMap = {
    light: "bg-white border-[#D8D5CF] text-[#1C1F2E]",
    dark: "bg-[#1C1F2E] border-transparent text-white",
    alt: "bg-[#F5F2EE] border-[#D8D5CF] text-[#1C1F2E]",
    glass: "bg-white/5 backdrop-blur-md border-white/10 text-white",
  };
  const variantStyles = variantMap[variant];
  const hoverClass = hover ? "hover:-translate-y-1 hover:shadow-lg hover:border-[#047857]/20 cursor-pointer" : "";

  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || !hover) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, [hover]);

  return (
    <div
      ref={cardRef}
      onMouseMove={hover ? handleMouseMove : undefined}
      onMouseEnter={hover ? () => setIsHovering(true) : undefined}
      onMouseLeave={hover ? () => { setIsHovering(false); setMousePos({ x: 50, y: 50 }); } : undefined}
      className={`${baseStyles} ${variantStyles} ${hoverClass} ${className}`}
    >
      {hover && isHovering && (
        <div
          className="absolute inset-0 rounded pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 250px at ${mousePos.x}% ${mousePos.y}%, rgba(4,120,87,0.06), transparent)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
