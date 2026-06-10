import type { Metadata } from "next";
import FrameworkClient from "./FrameworkClient";

export const metadata: Metadata = {
  title: "Arbitration Framework Policy | UPTIB",
  description:
    "The complete UPTIB Arbitration Framework Policy document including legal basis, procedures, cost schedules, arbitrator appointment guidelines, digital platform guide, and FAQs.",
};

export default function FrameworkPage() {
  return <FrameworkClient />;
}
