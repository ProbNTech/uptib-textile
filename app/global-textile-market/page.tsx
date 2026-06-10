import type { Metadata } from "next";
import GlobalTextileMarketClient from "./GlobalTextileMarketClient";

export const metadata: Metadata = {
  title: "Global Textile Market — Pakistan's place in it",
  description:
    "The scale of the global textile opportunity and Pakistan's position across the US, UK, Europe and the Gulf — a top-10 exporter, world-leading in cotton and home textiles, with growing strength in sportswear and medical textiles.",
  alternates: { canonical: "/global-textile-market" },
};

export default function GlobalTextileMarketPage() {
  return <GlobalTextileMarketClient />;
}
