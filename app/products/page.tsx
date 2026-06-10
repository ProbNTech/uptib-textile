import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — Pakistani textiles for global buyers",
  description:
    "The textiles we trade: bedding & linen, apparel & accessories, sportswear & activewear, and healthcare textile — four categories where Pakistani manufacturing is strongest and global demand is highest.",
  alternates: { canonical: "/products" },
};

export default function ProductsHub() {
  return <ProductsClient />;
}
