import type { Metadata } from "next";
import TrustedPartnerCertificationClient from "./TrustedPartnerCertificationClient";

export const metadata: Metadata = {
  title: "Trusted Partner Certification",
  description: "UPTIB Trusted Partner Certification recognises Pakistani technology companies that meet high standards of professionalism, reliability, and technical capability for global collaboration.",
};

export default function TrustedPartnerCertificationPage() {
  return <TrustedPartnerCertificationClient />;
}
