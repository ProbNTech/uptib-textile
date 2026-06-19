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
      ? "bg-[#78899B] text-white hover:bg-[#5E7088]"
      : variant === "white"
      ? "bg-white text-[#1A1A1A] hover:bg-[#78899B] hover:text-white"
      : "bg-[#1A1A1A] text-white hover:bg-[#78899B]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ChevronRight className="w-4 h-4" />
    </Link>
  );
}
