import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countryData, allCountrySlugs } from "@/lib/data/market-data";
import CountryMarketClient from "./CountryMarketClient";

export function generateStaticParams() {
  return allCountrySlugs.map((slug) => ({ country: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const data = countryData[slug];
  if (!data) return { title: "Not Found" };

  return {
    title: `${data.name} Tech Market Overview | UPTIB`,
    description: `${data.overview} Explore sector data, market forecasts, and opportunities for Pakistani IT companies in ${data.name}.`,
  };
}

export default async function CountryMarketPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const data = countryData[slug];
  if (!data) notFound();

  // Find prev/next for navigation
  const slugs = allCountrySlugs;
  const idx = slugs.indexOf(slug);
  const prev = idx > 0 ? countryData[slugs[idx - 1]] : null;
  const next = idx < slugs.length - 1 ? countryData[slugs[idx + 1]] : null;

  return (
    <CountryMarketClient
      country={data}
      prevCountry={prev ? { name: prev.name, slug: prev.slug, flag: prev.flag } : null}
      nextCountry={next ? { name: next.name, slug: next.slug, flag: next.flag } : null}
    />
  );
}
