import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";
import { products, getProduct } from "@/data/textile";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.headline}`,
    description: p.summary,
    alternates: { canonical: `/products/${p.slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const factRows: { label: string; value: string }[] = [
    { label: "Pakistan's strength", value: p.facts.strength },
    { label: "Global demand", value: p.facts.globalDemand },
    { label: "Market size", value: p.facts.marketSize },
    { label: "Certifications", value: p.facts.certifications },
  ];

  return (
    <>
      <PageHero label={p.eyebrow} title={p.headline} subtitle={p.summary} video="banner">
        <Button href="/contact" variant="primary" size="lg" showArrow>Source {p.name.toLowerCase()}</Button>
      </PageHero>

      <Section variant="light" pattern>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#047857] mb-3">Overview</p>
            <p className="text-[#3D4152] text-lg leading-relaxed">{p.intro}</p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl mb-6">What&rsquo;s included</h2>
            <ul className="space-y-3">
              {p.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#3D4152]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Facts box */}
        <div className="mt-14 rounded-card border border-[#E5E7EB] overflow-hidden">
          <div className="bg-[#F8FAF9] px-6 py-4 border-b border-[#E5E7EB]">
            <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">The facts</h3>
          </div>
          <dl className="divide-y divide-[#E5E7EB]">
            {factRows.map((row) => (
              <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-5">
                <dt className="font-heading font-bold text-[#047857] text-sm uppercase tracking-wide">{row.label}</dt>
                <dd className="sm:col-span-2 text-[#3D4152]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Product photos — slots kept filled (swap subjects one-for-one in imagery pass) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-card bg-[#F8FAF9] border border-dashed border-[#D1FAE5] flex items-center justify-center text-[#6B7280] text-sm"
            >
              {/* TODO: add licence-clear {p.name} photography (see IMAGE_CREDITS.md) */}
              {p.name} photo {i + 1}
            </div>
          ))}
        </div>
      </Section>

      <GlobalCTA
        label={`Source ${p.name}`}
        title={`Source ${p.name.toLowerCase()}, or list your products`}
        subtitle="Buyers: tell us your spec and we'll handle sourcing, quality and delivery. Manufacturers: get listed in the supplier pool global buyers source from."
        primaryButtonText="Request a quote"
        primaryButtonLink="/contact"
        secondaryButtonText="List your products"
        secondaryButtonLink="/membership"
      />
    </>
  );
}
