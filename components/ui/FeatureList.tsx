import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureListProps = {
  items: string[];
  columns?: 1 | 2;
  className?: string;
};

export function FeatureList({
  items,
  columns = 1,
  className,
}: FeatureListProps) {
  return (
    <ul
      className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2", className)}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-body">
          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-tertiary/10 text-tertiary">
            <Check className="size-3.5" aria-hidden />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
