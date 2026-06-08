"use client";

import { Download } from "lucide-react";

interface DownloadButtonProps {
  /** Path to the file in /public (e.g. "/documents/file.pdf") */
  href: string;
  /** Button label text */
  children: React.ReactNode;
  /** Downloaded file name (optional — defaults to the original filename) */
  filename?: string;
  /** Visual variant */
  variant?: "glass" | "solid";
  /** Size */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2",
};

const variantStyles = {
  glass:
    "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30",
  solid:
    "bg-[#047857] text-white border border-[#047857] hover:bg-[#065F46]",
};

export function DownloadButton({
  href,
  children,
  filename,
  variant = "glass",
  size = "lg",
  className = "",
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      download={filename ?? true}
      className={`inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#047857] focus:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <Download className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} strokeWidth={2} />
      {children}
    </a>
  );
}
