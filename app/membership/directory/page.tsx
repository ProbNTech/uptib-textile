import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MemberDirectory } from "@/components/MemberDirectory";

export const metadata: Metadata = {
  title: "Membership Directory",
  description:
    "Browse the Pak Textiles Global Partners membership directory: technology companies, investors, academic institutions, and professionals driving UK-Pakistan bilateral growth.",
  openGraph: {
    title: "Membership Directory | Pak Textiles Global Partners",
    description:
      "Browse the Pak Textiles Global Partners membership directory: technology companies, investors, academic institutions, and professionals.",
  },
};

export default function MembershipDirectoryPage() {
  return (
    <>
      <PageHero
        title="Membership Directory"
        subtitle="Browse our growing network of technology companies, investors, academic institutions, and professionals shaping the UK-Pakistan technology corridor."
        image="/image/banners/banner100.jpg"
      />

      <MemberDirectory />
    </>
  );
}
