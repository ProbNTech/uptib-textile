import type { Metadata } from "next";
import MembershipTermsClient from "./MembershipTermsClient";

export const metadata: Metadata = {
  title: "Membership Terms & Conditions | Pak Textiles Global Partners",
  description:
    "The complete Pak Textiles Global Partners Membership Terms & Conditions including eligibility, member responsibilities, code of conduct, disciplinary procedure, and governing law.",
};

export default function MembershipTermsPage() {
  return <MembershipTermsClient />;
}
