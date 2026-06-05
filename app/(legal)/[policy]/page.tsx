import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

/**
 * Placeholder legal pages (Privacy, Cookies, Terms) so footer links resolve.
 * TODO (client): replace the body with reviewed legal copy.
 */
const policies = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "How UPTIB collects, uses and protects the personal data you share with us.",
  },
  cookies: {
    title: "Cookie Policy",
    intro: "How UPTIB uses cookies and similar technologies on this website.",
  },
  terms: {
    title: "Terms of Use",
    intro: "The terms that govern your use of the UPTIB Textile website.",
  },
} as const;

type Policy = keyof typeof policies;
type Params = { policy: string };

export function generateStaticParams() {
  return Object.keys(policies).map((policy) => ({ policy }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { policy } = await params;
  const entry = policies[policy as Policy];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.intro,
    robots: { index: false },
    alternates: { canonical: `/${policy}` },
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { policy } = await params;
  const entry = policies[policy as Policy];
  if (!entry) notFound();

  return (
    <>
      <Hero eyebrow="Legal" title={entry.title} description={entry.intro} />
      <Section>
        <div className="prose-measure space-y-4 text-body">
          <p className="rounded-xl border border-dashed border-line bg-surface p-4 text-sm text-muted">
            Placeholder content — this page is awaiting reviewed legal copy.
          </p>
          <p>{site.disclaimer}</p>
          <p>
            For any questions about this policy, contact us via our{" "}
            <Link
              href="/contact"
              className="font-medium text-primary hover:underline"
            >
              enquiry form
            </Link>{" "}
            or at our London office.
          </p>
        </div>
      </Section>
    </>
  );
}
