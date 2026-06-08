import type { Metadata } from "next";
import AITechProgramsClient from "./AITechProgramsClient";

export const metadata: Metadata = {
  title: "AI and Tech Programs",
  description:
    "Driving AI innovation and tech leadership between the UK and Pakistan through training, certifications, and collaborative startup models.",
};

export default function AITechProgramsPage() {
  return <AITechProgramsClient />;
}
