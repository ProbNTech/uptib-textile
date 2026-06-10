import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vision",
  description:
    "UPTIB's vision for a connected innovation ecosystem where UK and Pakistani technology sectors collaborate to create world-leading digital solutions.",
  openGraph: {
    title: "Our Vision | UPTIB",
    description:
      "UPTIB's vision for a connected innovation ecosystem where UK and Pakistani technology sectors collaborate to create world-leading digital solutions.",
  },
};

export default function VisionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
