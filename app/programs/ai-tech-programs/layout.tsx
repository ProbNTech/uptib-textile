import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Tech Programs",
  description: "Explore UPTIB's AI and technology training programs, certifications, and career development opportunities.",
  openGraph: {
    title: "AI & Tech Programs | UPTIB",
    description: "Explore UPTIB's AI and technology training programs and certifications.",
  },
};

export default function ProgramsAITechLayout({ children }: { children: React.ReactNode }) {
  return children;
}
