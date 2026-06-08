import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skill Development Center",
  description: "UPTIB's Skill Development Center offering professional training, workshops, and skill-building programmes for UK–Pakistan tech professionals.",
  openGraph: {
    title: "Skill Development Center | UPTIB",
    description: "Professional training and skill-building programmes for UK–Pakistan tech professionals.",
  },
};

export default function SkillDevLayout({ children }: { children: React.ReactNode }) {
  return children;
}
