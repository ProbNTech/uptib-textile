import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pakistan Textile Partners",
  description: "Learn about Pakistan Textile Partners — the trusted bridge for UK–Pakistan textile trade, our mission, vision and the team connecting Pakistan's manufacturers with buyers worldwide.",
  openGraph: {
    title: "About Pakistan Textile Partners",
    description: "The trusted bridge for UK–Pakistan textile trade — connecting Pakistan's manufacturers and exporters with buyers worldwide.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
