import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Tech Programs",
  description: "Training, certifications, incubation, and collective startup models powering UK–Pakistan tech talent development.",
  openGraph: {
    title: "AI & Tech Programs | UPTIB",
    description: "Training, certifications, and incubation programs powering UK–Pakistan tech talent development.",
  },
};

export default function AITechProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
