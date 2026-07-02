import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pak Textiles Global Partners",
  description: "Learn about Pak Textiles Global Partners, the trusted bridge for UK-Pakistan textile trade, our mission, vision and the team connecting Pakistan's manufacturers with buyers worldwide.",
  openGraph: {
    title: "About Pak Textiles Global Partners",
    description: "The trusted bridge for UK-Pakistan textile trade, connecting Pakistan's manufacturers and exporters with buyers worldwide.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
