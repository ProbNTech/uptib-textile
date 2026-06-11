import type { Metadata } from "next";
import FrameworkClient from "./FrameworkClient";

export const metadata: Metadata = {
  title: "Arbitration Framework Policy | Pakistan Textile Partners",
  description:
    "The complete Pakistan Textile Partners Arbitration Framework Policy document including legal basis, procedures, cost schedules, arbitrator appointment guidelines, digital platform guide, and FAQs.",
};

export default function FrameworkPage() {
  return <FrameworkClient />;
}
