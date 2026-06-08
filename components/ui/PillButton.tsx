import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PillButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "blue" | "white";
}

export function PillButton({ href, children, variant = "dark" }: PillButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-semibold transition-colors duration-300 shadow-sm";
  const styles =
    variant === "blue"
      ? "bg-[#047857] text-white hover:bg-[#065F46]"
      : variant === "white"
      ? "bg-white text-[#1C1F2E] hover:bg-[#10B981] hover:text-white"
      : "bg-[#1C1F2E] text-white hover:bg-[#047857]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ChevronRight className="w-4 h-4" />
    </Link>
  );
}
