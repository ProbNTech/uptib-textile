import type { ElementType, ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  background?: "white" | "surface";
  spacing?: "default" | "tight";
  as?: ElementType;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  background = "white",
  spacing = "default",
  as = "section",
  className,
  containerClassName,
}: SectionProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        background === "surface" ? "bg-surface" : "bg-white",
        className,
      )}
    >
      <Container
        className={cn(
          spacing === "tight" ? "py-12 sm:py-16" : "py-20 sm:py-28",
          containerClassName,
        )}
      >
        {children}
      </Container>
    </Tag>
  );
}
