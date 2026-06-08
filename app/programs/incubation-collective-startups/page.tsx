import type { Metadata } from "next";
import IncubationCollectiveStartupsClient from "./IncubationCollectiveStartupsClient";

export const metadata: Metadata = {
  title: "Incubation and Collective Startups",
  description: "Nurturing the next generation of tech startups and innovators through collaborative models and comprehensive support across the UK and Pakistan.",
};

export default function IncubationCollectiveStartupsPage() {
  return <IncubationCollectiveStartupsClient />;
}
