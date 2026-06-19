import Image from "next/image";

interface CompanyLogoProps {
  name: string;
  logoUrl?: string;
  size?: number;
  className?: string;
}

/** Stable warm ivory/greige tonal palette keyed off the name. */
const palette = [
  { bg: "#ECE5D8", fg: "#141B24" },
  { bg: "#F6F2EA", fg: "#3C4A5A" },
  { bg: "#E8E2D6", fg: "#2A3542" },
  { bg: "#EFEAE0", fg: "#3C4A5A" },
  { bg: "#F2EDE3", fg: "#1E2733" },
  { bg: "#E5DFD3", fg: "#3C4A5A" },
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
