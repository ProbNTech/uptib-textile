import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pakistan Textile Partners",
  description: "Learn about the UK–Pakistan Technology Forum, our mission to strengthen technology collaboration, and our vision for bilateral digital trade.",
  openGraph: {
    title: "About Pakistan Textile Partners | UK–Pakistan Tech Forum",
    description: "Learn about Pakistan Textile Partners’ mission to strengthen UK–Pakistan technology collaboration.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
