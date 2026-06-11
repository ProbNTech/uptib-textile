import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — sourcing, outsourcing, marketing & warehousing",
  description:
    "Four services connecting Pakistani textiles to global markets: Buying (for international buyers), Outsourcing (full procurement house), Marketing (for exporters), and Warehousing (e-commerce & fulfilment).",
  alternates: { canonical: "/services" },
};

export default function ServicesHub() {
  return <ServicesClient />;
}
