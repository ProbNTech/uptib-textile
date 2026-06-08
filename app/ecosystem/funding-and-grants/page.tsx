import type { Metadata } from "next";
import FundingAndGrantsClient from "./FundingAndGrantsClient";

export const metadata: Metadata = {
  title: "Funding and Grants",
  description: "Access funding opportunities and grants to support technology innovation and cross-border collaboration between the UK and Pakistan.",
};

export default function FundingAndGrantsPage() {
  return <FundingAndGrantsClient />;
}
