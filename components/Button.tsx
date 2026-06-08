import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glass";
  href?: string;
  children: ReactNode;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  href,
  children,
  showArrow = false,
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#047857] focus:ring-offset-2 rounded-full group";

  const sizes = {
    sm: "px-5 py-2 text-base",
    md: "px-7 py-3 text-base",
    lg: "px-8 py-3.5 text-base",
  };

  const variants = {
    primary: "bg-[#1C1F2E] text-white hover:bg-[#047857]",
    secondary: "border border-[#1C1F2E] text-[#1C1F2E] hover:bg-[#1C1F2E] hover:text-white hover:shadow-glow-primary",
    ghost: "text-[#1C1F2E] underline underline-offset-4 hover:text-[#047857]",
    glass: "border border-white text-white hover:bg-white hover:text-[#1C1F2E]",
  };

  const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;
  const arrow = showArrow ? <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" /> : null;

  const shimmer = (variant === "primary" || variant === "glass") ? (
    <span
      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
      aria-hidden="true"
    />
  ) : null;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}{arrow}{shimmer}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}{arrow}{shimmer}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}{arrow}{shimmer}
    </button>
  );
}
