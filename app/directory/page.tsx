import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Callout } from "@/components/ui/Callout";
import { CTASection } from "@/components/ui/CTASection";
import { DirectoryGrid } from "@/components/directory/DirectoryGrid";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Supplier Directory — vetted Pakistani textile manufacturers",
  description:
    "Browse vetted Pakistani manufacturers and sourcing partners. Filter by product, location and certification, then ask UPTIB for an introduction.",
  alternates: { canonical: "/directory" },
};

const steps = [
  {
    n: 1,
    title: "Browse & filter",
    body: "By sector, location and certification.",
  },
  {
    n: 2,
    title: "Shortlist",
    body: "Flag the companies that fit your requirement.",
  },
  {
    n: 3,
    title: "Request an introduction",
    body: "We confirm fit, arrange samples and manage the order end-to-end.",
  },
];

export default function DirectoryPage() {
  return (
    <>
      <Hero
        eyebrow="Supplier Directory"
        title="Vetted Pakistani textile manufacturers, in one place"
        description="Browse our network of profiled manufacturers and sourcing partners. Filter by product, location and certification — then ask us for an introduction, and we'll handle quality, samples and delivery."
        actions={[
          { label: "Request an introduction", href: "/contact?topic=intro" },
          {
            label: "Get your company listed",
            href: "/services/marketing-sales",
            variant: "outline",
          },
        ]}
        highlights={[
          { value: "14+", label: "vetted companies" },
          { value: "5", label: "manufacturing hubs" },
          { value: "4", label: "product categories" },
        ]}
        image={images.warehouse}
      />

      <Section spacing="tight">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="How it works (for buyers)"
            title="Three steps to a vetted supplier"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary font-semibold text-white">
                  {step.n}
                </span>
                <h3 className="mt-4 font-semibold text-primary-dark">
                  {step.title}
                </h3>
                <p className="mt-1 text-body">{step.body}</p>
              </div>
            ))}
          </div>
          <Callout
            tone="blue"
            title="Listings showcase what each company can do."
          >
            To protect quality and keep you with one accountable partner,
            introductions and orders run through UPTIB — not direct, unverified
            contact.
          </Callout>
        </div>
      </Section>

      <Section background="surface">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="The network"
            title="Filter the directory"
            description="Sample listings — confirm each company's participation before publishing."
          />
          <DirectoryGrid />
        </div>
      </Section>

      <Section spacing="tight">
        <Callout tone="red" title="Want your company in front of UK buyers?">
          Listing here is part of UPTIB membership (see Marketing &amp; Sales) —
          from a Basic profile to a featured Premium listing.
        </Callout>
      </Section>

      <CTASection
        image={images.london}
        title="Find your supplier, or become one."
        buttons={[
          { label: "Request an introduction", href: "/contact?topic=intro" },
          {
            label: "Get your company listed",
            href: "/services/marketing-sales",
          },
        ]}
      />
    </>
  );
}
