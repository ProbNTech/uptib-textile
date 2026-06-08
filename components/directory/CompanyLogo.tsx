import Image from "next/image";

interface CompanyLogoProps {
  name: string;
  logoUrl?: string;
  size?: number;
  className?: string;
}

/** Stable, soft pastel blue/cyan palette keyed off the name. */
const palette = [
  { bg: "#D1FAE5", fg: "#065F46" }, // emerald-100 / emerald-700
  { bg: "#CFFAFE", fg: "#0E7490" }, // cyan-100 / cyan-700
  { bg: "#E0E7FF", fg: "#4338CA" }, // emerald-100 / emerald-700
  { bg: "#DCFCE7", fg: "#15803D" }, // green-100 / green-700
  { bg: "#FCE7F3", fg: "#9D174D" }, // pink-100 / pink-700
  { bg: "#FEF3C7", fg: "#B45309" }, // amber-100 / amber-700
];

function hash(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h;
}

function getInitials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function CompanyLogo({ name, logoUrl, size = 56, className = "" }: CompanyLogoProps) {
  const { bg, fg } = palette[hash(name) % palette.length];
  const initials = getInitials(name);

  if (logoUrl) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-[#E5E7EB] ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={logoUrl}
          alt={`${name} logo`}
          fill
          sizes={`${size}px`}
          className="object-contain p-2"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl font-heading font-bold ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${bg} 0%, #FFFFFF 100%)`,
        color: fg,
        boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.06)",
        fontSize: size * 0.36,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
