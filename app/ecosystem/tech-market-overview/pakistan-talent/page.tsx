import type { Metadata } from "next";
import PakistanTalentClient from "./PakistanTalentClient";

export const metadata: Metadata = {
  title: "Pakistan IT Talent Advantage | UPTIB",
  description:
    "300,000+ IT professionals, 70,000+ graduates annually, $3.2 billion in IT exports, and 40-60% cost advantage. Discover why Pakistan is the ideal technology partner for UK and European companies.",
};

export default function PakistanTalentPage() {
  return <PakistanTalentClient />;
}
