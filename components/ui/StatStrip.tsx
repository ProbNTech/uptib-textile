import type { Stat } from "@/types";
import { cn } from "@/lib/utils";

type StatStripProps = {
  stats: Stat[];
  tone?: "light" | "dark" | "card";
  className?: string;
};

export function StatStrip({ stats, tone = "card", className }: StatStripProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border",
        tone === "dark" ? "border-white/10 bg-white/10" : "border-line bg-line",
        "md:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col gap-1 p-5 text-center sm:p-6",
            tone === "dark" ? "bg-primary-dark" : "bg-white",
          )}
        >
          <dt
            className={cn(
              "text-2xl font-bold tracking-tight sm:text-3xl",
              tone === "dark" ? "text-white" : "text-primary",
            )}
          >
            {stat.value}
          </dt>
          <dd
            className={cn(
              "text-sm",
              tone === "dark" ? "text-white/70" : "text-muted",
            )}
          >
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
