import type { Metadata } from "next";
import TechMartGlobalClient from "./TechMartGlobalClient";

export const metadata: Metadata = {
  title: "TechMart Global",
  description: "A global B2B technology marketplace and collaboration platform connecting Pakistani tech companies with UK and international buyers, partners, investors, and institutions.",
};

export default function TechMartGlobalPage() {
  return <TechMartGlobalClient />;
}



