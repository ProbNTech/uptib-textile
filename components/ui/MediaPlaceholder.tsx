import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Neutral, no-layout-shift placeholder for photography that the client
 * will swap in later. Each instance carries a descriptive label so the
 * intended shot — and its alt text — is obvious.
 *
 * TODO (client): replace with <Image> using real, consistently-treated
 * photography saved under /public/assets/images. Keep one crop and tone.
 */
export function MediaPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className,
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder — ${label}`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line bg-gradient-to-br from-surface to-primary/5 p-6 text-center",
        aspect,
        className,
      )}
    >
      <ImageIcon className="size-7 text-primary/40" aria-hidden />
      <span className="text-sm font-medium text-muted">{label}</span>
    </div>
  );
}
