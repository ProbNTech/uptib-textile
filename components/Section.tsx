import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  variant?: "light" | "alt" | "dark";
  className?: string;
  id?: string;
  pattern?: boolean;
}

export function Section({ children, variant = "light", className = "", id, pattern = false }: SectionProps) {
  const variantMap = {
    light: "bg-white text-[#16291E]",
    alt: "bg-white text-[#16291E]",
    dark: "bg-[#16291E] text-white",
  };
  const bgClass = variantMap[variant];

  return (
    <section id={id} className={`relative ${bgClass} ${className}`}>
      {pattern && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: variant === "dark"
              ? "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)"
              : "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      )}
      <Container className="relative py-10 lg:py-14">{children}</Container>
    </section>
  );
}
