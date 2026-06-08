import type { Metadata } from "next";
import PakistanITScopeClient from "./PakistanITScopeClient";

export const metadata: Metadata = {
  title: "Scope of Pakistani IT Companies in Europe | UPTIB",
  description:
    "Explore 6 key sectors where Pakistani IT companies can deliver value across European markets — AI, Cloud, Cybersecurity, Enterprise IT, Data Centres, and Talent Solutions.",
};

export default function PakistanITScopePage() {
  return <PakistanITScopeClient />;
}
