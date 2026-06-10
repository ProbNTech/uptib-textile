import type { Metadata } from "next";
import { NewsClient } from "./NewsClient";
import { articles } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Insights — Pakistan textile export",
  description:
    "Insights on sourcing textiles from Pakistan, global export trends, GSP+ and Pakistan's home-textile leadership.",
  alternates: { canonical: "/news" },
};

export default function NewsIndex() {
  return <NewsClient articles={articles} />;
}
