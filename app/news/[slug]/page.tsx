import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

  const readNext = articles
    .filter((x) => x.published && x.slug !== a.slug)
    .sort((x, y) => y.date.localeCompare(x.date))
    .slice(0, 3);

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
        <Link href="/news" className="inline-flex items-center gap-2 text-[#2F7549] text-sm font-semibold mb-8 hover:text-[#245C3A] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
        <article className="max-w-3xl mx-auto content-body">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card mb-10 shadow-sm">
            <Image
              src={a.image}
              alt={a.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
          <p className="text-[#16291E] text-xl leading-relaxed mb-10 font-medium">{a.excerpt}</p>
          {a.body.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-heading font-extrabold text-[#16291E] text-2xl mb-4">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-[#3D4152] leading-relaxed mb-4">{p}</p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 mt-4">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3E8F5E] flex-shrink-0" />
                      <span className="text-[#3D4152]">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {/* Read next */}
        <div className="max-w-5xl mx-auto mt-16 pt-12 border-t border-[#E5E7EB]">
          <h2 className="font-heading font-extrabold text-[#16291E] text-2xl mb-6">Read next</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {readNext.map((n) => (
              <Link key={n.slug} href={`/news/${n.slug}`} className="group flex flex-col rounded-card border border-[#E5E7EB] bg-white p-6 hover:border-[#3E8F5E] hover:shadow-lg transition-all duration-300">
                <span className="text-xs font-bold uppercase tracking-wide text-[#2F7549] mb-2">{n.category}</span>
                <h3 className="font-heading font-bold text-[#16291E] text-base leading-snug mb-2 group-hover:text-[#2F7549] transition-colors">{n.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{n.excerpt}</p>
                <span className="text-xs text-[#9CA3AF] mt-4">{n.displayDate} · {n.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <GlobalCTA
        label="Work with Pakistan Textile Partners"
        title="Source from Pakistan with confidence"
        subtitle="Tell us what you need and we'll handle sourcing, quality and delivery — or browse the categories where Pakistani manufacturing is strongest."
        primaryButtonText="Request a quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Browse products"
        secondaryButtonLink="/products"
        image="/image/apparels-v1.jpg"
      />
    </>
  );
}
