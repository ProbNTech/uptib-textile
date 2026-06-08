"use client";

interface SectionLabelProps {
  label: string;
  title: string;
  body?: string;
  color?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h2" | "h3"; // accessibility: configurable heading level
}

export function SectionLabel({ label, title, body, color = "#047857", align = "left", light = false, as: Tag = "h2" }: SectionLabelProps) {
  const alignClass = align === "center" ? "text-center" : "";
  return (
    <div className={`mb-8 lg:mb-10 ${alignClass}`}>
      <div className="flex items-center gap-3 mb-4" style={align === "center" ? { justifyContent: "center" } : {}}>
        <div className="w-8 h-[3px] rounded-full" style={{ background: color }} />
        <p className="text-sm font-bold uppercase tracking-[0.22em]" style={{ color }}>{label}</p>
      </div>
      <Tag className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.3] ${light ? "text-white" : "text-[#1C1F2E]"}`}>
        {title}
      </Tag>
      {body && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-3xl ${light ? "text-gray-300" : "text-[#5A5F72]"} ${align === "center" ? "mx-auto" : ""}`}>
          {body}
        </p>
      )}
    </div>
  );
}
