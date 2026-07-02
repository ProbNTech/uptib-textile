import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { subCategoryParams, getSubCategory } from "@/data/textile";
import SubCategoryClient from "./SubCategoryClient";

export function generateStaticParams() {
  return subCategoryParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}): Promise<Metadata> {
  const { slug, sub } = await params;
  const match = getSubCategory(slug, sub);
  if (!match) return {};
  const { category, group } = match;
  return {
    title: `${group.name}: ${category.name} | Pak Textiles Global Partners`,
    description: group.pageIntro ?? group.desc,
    alternates: { canonical: `/products/${slug}/${sub}` },
  };
}

export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}) {
  const { slug, sub } = await params;
  if (!getSubCategory(slug, sub)) notFound();
  return <SubCategoryClient slug={slug} sub={sub} />;
}
