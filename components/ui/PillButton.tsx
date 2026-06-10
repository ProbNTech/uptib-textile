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
      ? "bg-[#2F7549] text-white hover:bg-[#245C3A]"
      : variant === "white"
      ? "bg-white text-[#16291E] hover:bg-[#3E8F5E] hover:text-white"
      : "bg-[#16291E] text-white hover:bg-[#2F7549]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ChevronRight className="w-4 h-4" />
    </Link>
  );
}
