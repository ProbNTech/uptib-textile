import type { Metadata } from "next";
import UKPakistanTechnologyPartnershipClient from "./UKPakistanTechnologyPartnershipClient";

export const metadata: Metadata = {
  title: "UK–Pakistan Technology Partnership",
  description: "Strengthening bilateral technology collaboration between the United Kingdom and Pakistan through strategic partnerships and innovation.",
};

export default function UKPakistanTechnologyPartnershipPage() {
  return <UKPakistanTechnologyPartnershipClient />;
}
