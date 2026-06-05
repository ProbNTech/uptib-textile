import type { ReactNode } from "react";
import type { CalloutTone } from "@/types";
import { cn } from "@/lib/utils";

const tones: Record<
  CalloutTone,
  { wrap: string; title: string; body: string }
> = {
  blue: {
    wrap: "border-primary/20 bg-primary/5",
    title: "text-primary-dark",
    body: "text-body",
  },
  green: {
    wrap: "border-tertiary/25 bg-tertiary/5",
    title: "text-tertiary-dark",
    body: "text-body",
  },
  navy: {
    wrap: "border-primary-dark bg-primary-dark",
    title: "text-white",
    body: "text-white/80",
  },
  red: {
    wrap: "border-secondary/25 bg-secondary/5",
    title: "text-secondary-dark",
    body: "text-body",
  },
  gold: {
    wrap: "border-accent/30 bg-accent/5",
    title: "text-accent-dark",
    body: "text-body",
  },
};

type CalloutProps = {
  title: ReactNode;
  children: ReactNode;
  tone?: CalloutTone;
  className?: string;
};

export function Callout({
  title,
  children,
  tone = "blue",
  className,
}: CalloutProps) {
  const t = tones[tone];
  return (
    <div className={cn("rounded-2xl border p-6 sm:p-8", t.wrap, className)}>
      <h3 className={cn("text-lg font-semibold sm:text-xl", t.title)}>
        {title}
      </h3>
      <p className={cn("mt-2 leading-relaxed", t.body)}>{children}</p>
    </div>
  );
}
