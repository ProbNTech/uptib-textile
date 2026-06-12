import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — marketing & sales, e-commerce & warehouse, buying house & logistics",
  description:
    "Four services connecting Pakistani textiles to global markets: Marketing & Sales (for exporters), E-commerce & Warehouse (Amazon & fulfilment), Buying House / Outsourcing (for international buyers), and Logistics (freight, customs & documentation).",
  alternates: { canonical: "/services" },
};

export default function ServicesHub() {
  return <ServicesClient />;
}
