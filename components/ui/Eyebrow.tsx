import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "primary" | "light" | "white";
};

const tones = {
  primary: "text-primary",
  light: "text-primary-light",
  white: "text-white/80",
} as const;

export function Eyebrow({
  children,
  className,
  tone = "primary",
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.18em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}
