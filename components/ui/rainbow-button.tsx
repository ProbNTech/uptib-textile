"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  showArrow?: boolean;
}

export function RainbowButton({
  children,
  className,
  href,
  showArrow = false,
  ...props
}: RainbowButtonProps) {
  const classes = cn(
    "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-full border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

    // before styles
    "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

    // transparent bg with rainbow border
    "bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),linear-gradient(rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.1)_80%,transparent),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
