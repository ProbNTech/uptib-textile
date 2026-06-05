import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter && "items-center text-center",
        isCenter ? "mx-auto max-w-2xl" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === "light" ? "light" : "primary"}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-semibold sm:text-4xl",
          tone === "light" && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-lg leading-relaxed",
            tone === "light" ? "text-white/80" : "text-body",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
