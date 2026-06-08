import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GlobalCTA } from "@/components/GlobalCTA";
import { articles, getArticle } from "@/data/news";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.filter((a) => a.published).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/news/${a.slug}` },
    openGraph: { title: a.title, description: a.excerpt, type: "article" },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a || !a.published) notFound();

  return (
    <>
      <PageHero
        label={a.category}
        title={a.title}
        subtitle={
          <div className="flex flex-wrap items-center gap-5 text-white/80 text-sm mt-2">
            <span className="inline-flex items-center gap-2"><User className="w-4 h-4" /> {a.author}</span>
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> {a.displayDate}</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> {a.readTime}</span>
          </div>
        }
        video="banner"
      />

      <Section variant="light" pattern>
        <Link href="/news" className="inline-flex items-center gap-2 text-[#047857] text-sm font-semibold mb-8 hover:text-[#065F46] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
        <article className="max-w-3xl mx-auto content-body">
          <p className="text-[#1C1F2E] text-xl leading-relaxed mb-10 font-medium">{a.excerpt}</p>
          {a.body.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl mb-4">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-[#3D4152] leading-relaxed mb-4">{p}</p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 mt-4">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />
                      <span className="text-[#3D4152]">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </Section>

      <GlobalCTA
        label="Work with UPTIB"
        title="Source from Pakistan with confidence"
        subtitle="Tell us what you need and we'll handle sourcing, quality and delivery — or browse the categories where Pakistani manufacturing is strongest."
        primaryButtonText="Request a quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Browse products"
        secondaryButtonLink="/products"
      />
    </>
  );
}
