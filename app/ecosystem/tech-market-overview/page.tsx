  import type { Metadata } from "next";
import TechMarketOverviewClient from "./TechMarketOverviewClient";

export const metadata: Metadata = {
  title: "UK/Europe Tech Market Overview | UPTIB",
  description:
    "Comprehensive market intelligence across 8+ European countries. Explore sector data, forecasts, and opportunities for Pakistani IT companies in the UK and Europe.",
};

export default function TechMarketOverviewPage() {
  return <TechMarketOverviewClient />;
}
