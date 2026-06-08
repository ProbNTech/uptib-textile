import type { Metadata } from "next";
import { CompanyDirectoryHero } from "@/components/directory/CompanyDirectoryHero";
import { DirectoryStats } from "@/components/directory/DirectoryStats";
import { DirectoryView } from "@/components/directory/DirectoryView";
import { DirectorySEOContent } from "@/components/directory/DirectorySEOContent";
import { FAQSection } from "@/components/directory/FAQSection";
import { directoryFaqs } from "@/components/directory/directoryFaqs";
import { getAllITCompanies } from "@/lib/companyService";

export const metadata: Metadata = {
  title: "All IT Companies",
  description:
    "Browse the full directory of IT, software, cloud, cybersecurity, and data companies. Filter by service, rating, and location to build a shortlist.",
  alternates: { canonical: "/it-companies" },
  // Directory pages are built but not live yet — keep them out of search
  // engines until the real data source is connected and they are added to
  // the navigation and sitemap.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "All IT Companies | UPTIB Directory",
    description:
      "The full directory of IT, software, cloud, and cybersecurity companies — searchable, filterable, and ready for shortlisting.",
    url: "/it-companies",
  },
};

export default async function AllITCompaniesPage() {
  const companies = await getAllITCompanies();

  return (
    <>
      <CompanyDirectoryHero
        eyebrow="Directory"
        title="All IT Companies"
        subtitle="The complete directory of IT, software, cloud, cybersecurity, and data companies. Use search, filters, and sort to build your shortlist."
      />

      <DirectoryStats companies={companies} />

      <DirectoryView
        companies={companies}
        layout="list"
        pageSize={8}
        heading="Browse all companies"
        initialSort="rating"
      />

      <DirectorySEOContent subject="IT Companies" />

      <FAQSection faqs={directoryFaqs} />
    </>
  );
}
