import type { Metadata } from "next";
import MembershipClient from "./MembershipClient";

export const metadata: Metadata = {
  title: "Membership — a place in the supplier pool buyers source from",
  description:
    "UPTIB membership puts Pakistani manufacturers in the pool we actually source from on behalf of real buyers worldwide. Benefits, three tiers (Basic, Professional, Premium), who can join, how it works and how to apply.",
  alternates: { canonical: "/membership" },
};

export default function MembershipPage() {
  return <MembershipClient />;
}
