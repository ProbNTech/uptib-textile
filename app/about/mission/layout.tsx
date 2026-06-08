import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "UPTIB's mission to transform Pakistan into a thriving tech hub through global connections, professional excellence, and cross-border collaboration.",
  openGraph: {
    title: "Our Mission | UPTIB",
    description:
      "UPTIB's mission to transform Pakistan into a thriving tech hub through global connections, professional excellence, and cross-border collaboration.",
  },
};

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
