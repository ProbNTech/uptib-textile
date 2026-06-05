import { cn } from "@/lib/utils";

type BadgeTone = "red" | "green" | "blue" | "neutral";

const tones: Record<BadgeTone, string> = {
  red: "bg-secondary/10 text-secondary",
  green: "bg-tertiary/10 text-tertiary-dark",
  blue: "bg-primary/10 text-primary",
  neutral: "bg-surface text-muted",
};

export function Badge({
  children,
  tone = "blue",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
