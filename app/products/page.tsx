import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaCard } from "@/components/ui/MediaCard";
import { Callout } from "@/components/ui/Callout";
import { CTASection } from "@/components/ui/CTASection";
import { products } from "@/data/products";
import { productImage, images } from "@/data/images";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Products — the textiles we trade",
  description:
    "Pakistan's strengths matched to UK demand: bedding & linen, apparel & accessories, sportswear & activewear and healthcare textiles.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <Hero
        eyebrow="Products"
        title="The textiles we trade"
        image={images.beddingLinen}
        description="Pakistan's strengths, matched to the UK's demand. Four categories where Pakistani manufacturing is strongest and UK buyers are most active."
        highlights={[
          { value: "US$63.6bn", label: "UK textile & apparel market" },
          { value: "US$7.2bn", label: "UK home-textile market" },
          { value: "GSP+", label: "duty-free advantage" },
        ]}
      />

      <Section>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="The four categories"
            title="Where Pakistan is strongest and UK demand is highest"
            description="Each category links to a full page with the range, market size, UK buyers and certifications."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <MediaCard
                key={product.slug}
                href={`/products/${product.slug}`}
                image={productImage[product.slug]}
                icon={getIcon(product.icon)}
                title={product.cardTitle}
                description={product.intro}
                badge={product.badge}
                meta={product.marketRows
                  .slice(0, 2)
                  .map((r) => `${r.value} · ${r.label}`)}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface" spacing="tight">
        <Callout tone="green" title="Sustainability runs through all of it.">
          Across every category we work with factories carrying the
          certifications UK buyers increasingly require — GOTS, OEKO-TEX, BCI,
          Sedex, WRAP and ISO — and can prioritise organic cotton, recycled
          materials and transparent supply chains.
        </Callout>
      </Section>

      <CTASection
        image={images.warehouse}
        title="Find the right supply for your range."
        buttons={[
          { label: "Browse the supplier directory", href: "/directory" },
          { label: "Request a quote", href: "/contact?topic=source" },
        ]}
      />
    </>
  );
}
