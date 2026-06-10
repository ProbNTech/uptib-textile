"use client";

interface SectionLabelProps {
  label: string;
  title: string;
  body?: string;
  color?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h2" | "h3"; // accessibility: configurable heading level
  /** Hide the small accent line shown before the eyebrow label. */
  hideLine?: boolean;
  /** Extra classes applied to the body paragraph (e.g. to override its color). */
  bodyClassName?: string;
}

export function SectionLabel({ label, title, body, color = "#2F7549", align = "left", light = false, as: Tag = "h2", hideLine = false, bodyClassName = "" }: SectionLabelProps) {
  const alignClass = align === "center" ? "text-center" : "";
  return (
    <div className={`mb-8 lg:mb-10 ${alignClass}`}>
      <div className="flex items-center gap-3 mb-4" style={align === "center" ? { justifyContent: "center" } : {}}>
        <p className="text-sm font-bold uppercase tracking-[0.22em]" style={{ color }}>{label}</p>
      </div>
      <Tag className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.3] ${light ? "text-white" : "text-[#16291E]"}`}>
        {title}
      </Tag>
      {body && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-3xl ${light ? "text-gray-300" : "text-[#5A5F72]"} ${align === "center" ? "mx-auto" : ""} ${bodyClassName}`}>
          {body}
        </p>
      )}
    </div>
  );
}
