import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShoppingBag, Building2, TrendingUp } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureList } from "@/components/ui/FeatureList";
import { FactsBox } from "@/components/ui/FactsBox";
import { MarketTable } from "@/components/ui/MarketTable";
import { ChipList } from "@/components/ui/ChipList";
import { Callout } from "@/components/ui/Callout";
import { CTASection } from "@/components/ui/CTASection";
import { products, productBySlug, productSlugs } from "@/data/products";
import { productImage, productImageAlt } from "@/data/images";
import { withQuery } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.cardTitle} from Pakistan`,
    description: `${product.title}. ${product.summary}`,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const sourceHref = withQuery("/contact", {
    topic: "source",
    product: product.slug,
  });
  const listHref = withQuery("/contact", {
    topic: "sell",
    product: product.slug,
  });

  const heroHighlights = product.marketRows.slice(0, 3).map((r) => ({
    value: r.value,
    label: r.label,
  }));

  return (
    <>
      <Hero
        eyebrow={product.eyebrow}
        title={product.title}
        description={product.summary}
        image={productImage[product.slug]}
        actions={[
          { label: product.primaryCta, href: sourceHref },
          { label: "List your products", href: listHref, variant: "outline" },
        ]}
        highlights={heroHighlights}
      />

      {/* Overview — editorial image + copy */}
      <Section>
        <FeatureRow
          eyebrow="Overview"
          title={`Why ${product.cardTitle.toLowerCase()}, and who buys it`}
          image={productImageAlt[product.slug]}
          badge={{
            value: product.marketRows[0]?.value ?? "",
            label: product.marketRows[0]?.label ?? "",
          }}
        >
          {product.overview.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </FeatureRow>
      </Section>

      {/* What's included — with sub-groups when present */}
      <Section background="surface">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="What's included"
            title="The full range we trade"
          />
          {product.subgroups ? (
            <div className="grid gap-6 md:grid-cols-3">
              {product.subgroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-line bg-white p-6 shadow-card"
                >
                  <h3 className="text-lg font-semibold text-primary-dark">
                    {group.title}
                  </h3>
                  <FeatureList items={group.items} className="mt-4" />
                </div>
              ))}
            </div>
          ) : (
            <FeatureList items={product.included} columns={2} />
          )}
        </div>
      </Section>

      {/* Market opportunity */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="The UK opportunity"
              title="A market worth winning"
              description="Pakistan's strengths, matched to where UK demand is strongest and growing."
            />
            {product.trends ? <FeatureList items={product.trends} /> : null}
          </div>
          <MarketTable rows={product.marketRows} />
        </div>
      </Section>

      {/* Why Pakistan / Who buys / Best sellers */}
      <Section background="surface">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-tertiary/10 text-tertiary">
              <TrendingUp className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-primary-dark">
              Why Pakistan
            </h3>
            <FeatureList items={product.whyPakistan} className="mt-4" />
          </div>
          <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Building2 className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-primary-dark">
              Who buys in the UK
            </h3>
            <ChipList items={product.whoBuys} tone="blue" className="mt-4" />
          </div>
          <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-accent/15 text-accent-dark">
              <ShoppingBag className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-primary-dark">
              Best sellers
            </h3>
            <ChipList
              items={product.bestSellers}
              tone="gold"
              className="mt-4"
            />
          </div>
        </div>
      </Section>

      {/* Facts box */}
      <Section>
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="At a glance" title="The facts" />
          <FactsBox facts={product.facts} />
          <Callout tone="green" title="Sustainability, built in.">
            We work with factories carrying the certifications UK buyers
            increasingly require — GOTS, OEKO-TEX, BCI, Sedex, WRAP and ISO —
            and can prioritise organic cotton, recycled materials and
            transparent supply chains.
          </Callout>
        </div>
      </Section>

      <CTASection
        image={productImage[product.slug]}
        title={`Source ${product.cardTitle.toLowerCase()} — or list yours.`}
        description="Buyers source through us with quality guaranteed; manufacturers get in front of UK demand."
        buttons={[
          { label: product.primaryCta, href: sourceHref },
          { label: "List your products", href: listHref },
        ]}
      />

      {/* Sibling categories for cross-navigation. */}
      <Section spacing="tight">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">
          Other categories
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {products
            .filter((p) => p.slug !== product.slug)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-body transition-colors hover:border-primary/40 hover:text-primary"
              >
                {p.cardTitle}
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            ))}
        </div>
      </Section>
    </>
  );
}
