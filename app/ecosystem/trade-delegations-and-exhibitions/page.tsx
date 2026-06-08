import type { Metadata } from "next";
import TradeDelegationsAndExhibitionsClient from "./TradeDelegationsAndExhibitionsClient";

export const metadata: Metadata = {
  title: "Trade Delegations and Exhibitions",
  description: "Facilitating cross-border trade delegations and technology exhibitions between the UK and Pakistan to strengthen bilateral technology partnerships.",
};

export default function TradeDelegationsAndExhibitionsPage() {
  return <TradeDelegationsAndExhibitionsClient />;
}
