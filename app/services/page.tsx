import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaCard } from "@/components/ui/MediaCard";
import { Callout } from "@/components/ui/Callout";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/data/services";
import { serviceImage, images } from "@/data/images";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Services — what we do",
  description:
    "Marketing & sales, e-commerce & warehousing, a Pakistan buying house and logistics — covering both selling to the UK and sourcing from Pakistan.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="What we do"
        image={images.logistics}
        description="Four services that cover both selling Pakistani textiles to the UK and sourcing them from Pakistan — marketing, e-commerce, sourcing and logistics."
        highlights={[
          { value: "Sell", label: "marketing, e-commerce, warehousing" },
          { value: "Source", label: "buying house, quality control" },
          { value: "Move", label: "freight, customs, GSP+" },
        ]}
      />

      <Section>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="The four services"
            title="Everything that moves textiles between Pakistan and the UK"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <MediaCard
                key={service.slug}
                href={`/services/${service.slug}`}
                image={serviceImage[service.slug]}
                icon={getIcon(service.icon)}
                title={service.cardTitle}
                description={service.cardBlurb}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface" spacing="tight">
        <Callout tone="blue" title="One partner, both directions.">
          We market Pakistani supply to UK buyers and source UK demand from
          Pakistan — so the two sides reinforce each other. Every exporter we
          promote becomes a supplier we can buy from; every order we win gives
          our exporters real, paying demand.
        </Callout>
      </Section>

      <CTASection
        image={images.ecommerce}
        title="Whether you're buying or selling, let's talk."
        buttons={[
          { label: "Get a Quote", href: "/contact?topic=quote" },
          { label: "Become a Member", href: "/services/marketing-sales" },
        ]}
      />
    </>
  );
}
