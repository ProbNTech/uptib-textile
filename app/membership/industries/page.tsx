import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Textile Industries — sectors & companies across Pakistan",
  description:
    "Explore Pakistan's textile industry by sector — home & hospitality textiles, apparel & knitwear, sportswear, healthcare textiles, sourcing & buying houses and yarn & fabric — and the companies operating across the value chain.",
  alternates: { canonical: "/membership/industries" },
};

export default function MembershipIndustriesPage() {
  return <IndustriesClient />;
}
