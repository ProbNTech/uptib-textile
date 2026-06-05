import { cn } from "@/lib/utils";

type ChipTone = "blue" | "gold" | "neutral";

const tones: Record<ChipTone, string> = {
  blue: "border-primary/15 bg-primary/5 text-primary",
  gold: "border-accent/25 bg-accent/10 text-accent-dark",
  neutral: "border-line bg-white text-body",
};

export function ChipList({
  items,
  tone = "neutral",
  className,
}: {
  items: string[];
  tone?: ChipTone;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-sm font-medium",
            tones[tone],
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
