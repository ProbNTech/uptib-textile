import type { Metadata } from "next";
import ArbitrationClient from "./ArbitrationClient";

export const metadata: Metadata = {
  title: "Arbitration & Dispute Resolution | UPTIB",
  description:
    "UPTIB provides an independent dispute resolution framework to facilitate the fair, efficient, and amicable settlement of disputes arising from cross-border technology collaborations.",
};

export default function ArbitrationPage() {
  return <ArbitrationClient />;
}
