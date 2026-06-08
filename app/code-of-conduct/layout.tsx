import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "UPTIB’s code of conduct and ethical guidelines for members, partners, and participants.",
};

export default function CodeOfConductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
