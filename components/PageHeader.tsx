import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  align = "left",
  className = "",
  children,
}: PageHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <header className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">{title}</h1>
      {subtitle && (
        <p
          className={`text-lg text-muted-text max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </header>
  );
}
