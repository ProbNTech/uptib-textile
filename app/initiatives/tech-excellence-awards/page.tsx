import type { Metadata } from "next";
import TechExcellenceAwardsClient from "./TechExcellenceAwardsClient";

export const metadata: Metadata = {
  title: "UK–Pakistan Tech Excellence Awards",
  description: "Celebrating Innovation, Partnership and Digital Leadership across Two Nations. Recognizing exceptional achievements in technology innovation and cross-border collaboration.",
};

export default function TechExcellenceAwardsPage() {
  return <TechExcellenceAwardsClient />;
}



