import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management Team",
  description:
    "Pakistan Textile Partners' leadership structure, board of directors, advisory forum, and executive team driving strategic direction.",
  openGraph: {
    title: "Management Team | Pakistan Textile Partners",
    description:
      "Pakistan Textile Partners' leadership structure, board of directors, advisory forum, and executive team driving strategic direction.",
  },
};

export default function ManagementTeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
