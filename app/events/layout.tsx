import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Discover upcoming and past UPTIB events including summits, conferences, trade delegations, and webinars connecting UK and Pakistan technology sectors.",
  openGraph: {
    title: "Events | UPTIB",
    description: "Discover UPTIB events connecting UK and Pakistan technology sectors.",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
