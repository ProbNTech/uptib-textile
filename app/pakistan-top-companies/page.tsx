import type { Metadata } from "next";
import { PakistanCompaniesHero } from "@/components/directory/PakistanCompaniesHero";
import { DirectoryStats } from "@/components/directory/DirectoryStats";
import { IndustriesSpotlight } from "@/components/directory/IndustriesSpotlight";
import { TechEcosystem } from "@/components/directory/TechEcosystem";
import { CurationCriteria } from "@/components/directory/CurationCriteria";
import { FeaturedCompanySpotlight } from "@/components/directory/FeaturedCompanySpotlight";
import { DirectoryView } from "@/components/directory/DirectoryView";
import { DirectorySEOContent } from "@/components/directory/DirectorySEOContent";
import { FAQSection } from "@/components/directory/FAQSection";
import { directoryFaqs } from "@/components/directory/directoryFaqs";
import {
  getAllPakistanTopCompanies,
  getTopPakistanCompanies,
} from "@/lib/companyService";

export const metadata: Metadata = {
  title: "Pakistan's Top AI & IT Companies",
  description:
    "Discover Pakistan's top AI & IT companies — software, cloud, cybersecurity, data, and AI specialists. Filter A–Z, search, or browse by industry to shortlist faster.",
  alternates: { canonical: "/pakistan-top-companies" },
  openGraph: {
    title: "Pakistan's Top AI & IT Companies | UPTIB",
    description:
      "A curated directory of Pakistan's top AI and IT companies — with services, locations, and category filters.",
    url: "/pakistan-top-companies",
  },
};

export default async function PakistanTopCompaniesPage() {
  const [featured, all] = await Promise.all([
    // Pull every editorial-pinned company; the carousel handles 1 or N.
    getTopPakistanCompanies(20),
    getAllPakistanTopCompanies(),
  ]);

  return (
    <>
      <PakistanCompaniesHero
        eyebrow="Pakistan's Top Companies"
        title="Pakistan's Top AI & IT Companies"
        subtitle="A curated showcase of AI, software, cloud, and consulting specialists driving Pakistan's technology sector and the UK–Pakistan corridor. Search by name, filter by industry, or browse alphabetically to find the right partner."
      />

      <DirectoryStats companies={all} />

      <IndustriesSpotlight companies={all} />

      <TechEcosystem companies={all} />

      <CurationCriteria />

      <FeaturedCompanySpotlight companies={featured} />

      <div id="all-companies">
        <DirectoryView
          companies={all}
          layout="grid"
          heading="All companies"
          initialSort="name"
          showCategoryFilter
        />
      </div>

      <DirectorySEOContent subject="AI & IT Companies in Pakistan" />

      <FAQSection faqs={directoryFaqs} />
    </>
  );
}
