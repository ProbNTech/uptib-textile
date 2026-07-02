import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vision",
  description:
    "Pak Textiles Global Partners' vision for a connected innovation ecosystem where UK and Pakistani technology sectors collaborate to create world-leading digital solutions.",
  openGraph: {
    title: "Our Vision | Pak Textiles Global Partners",
    description:
      "Pak Textiles Global Partners' vision for a connected innovation ecosystem where UK and Pakistani technology sectors collaborate to create world-leading digital solutions.",
  },
};

export default function VisionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
