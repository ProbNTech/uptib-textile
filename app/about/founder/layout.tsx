import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet Khalil Choudhary, President of the UK–Pakistan Trades & Investment Board, and his vision for bilateral tech collaboration.",
  openGraph: {
    title: "Leadership | Pakistan Textile Partners",
    description:
      "Meet Khalil Choudhary, President of the UK–Pakistan Trades & Investment Board, and his vision for bilateral tech collaboration.",
  },
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
