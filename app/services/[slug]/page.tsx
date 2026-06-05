import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureList } from "@/components/ui/FeatureList";
import { MarketTable } from "@/components/ui/MarketTable";
import { Callout } from "@/components/ui/Callout";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/ui/CTASection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { MembershipTable } from "@/components/sections/MembershipTable";
import { services, serviceBySlug, serviceSlugs } from "@/data/services";
import { serviceImage, images } from "@/data/images";

type Params = { slug: string };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: service.cardTitle,
    description: `${service.title}. ${service.summary}`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const heroActions = [
    { label: service.primaryCta, href: service.primaryHref },
    ...(service.secondaryCta && service.secondaryHref
      ? [
          {
            label: service.secondaryCta,
            href: service.secondaryHref,
            variant: "outline" as const,
          },
        ]
      : []),
  ];

  const heroHighlights = service.marketRows
    ?.slice(0, 3)
    .map((r) => ({ value: r.value, label: r.label }));

  return (
    <>
      <Hero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.summary}
        image={serviceImage[service.slug]}
        actions={heroActions}
        highlights={heroHighlights}
      />

      {/* What it is — editorial image + copy */}
      <Section>
        <FeatureRow
          eyebrow="What it is"
          title={service.summary}
          image={serviceImage[service.slug]}
        >
          {service.overview ? (
            service.overview.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))
          ) : (
            <p>{service.whatItIs}</p>
          )}
        </FeatureRow>
      </Section>

      {/* What we do */}
      <Section background="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="Included in this service"
            />
            <FeatureList items={service.whatWeDo} className="mt-6" />
          </div>
          <div className="flex flex-col gap-8">
            {service.extraLists?.map((list) => (
              <div key={list.title}>
                <h3 className="text-xl font-semibold text-primary-dark">
                  {list.title}
                </h3>
                <FeatureList items={list.items} className="mt-5" />
              </div>
            ))}

            {service.marketplaces ? (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Marketplaces we support
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.marketplaces.map((m) => (
                    <Badge key={m} tone="blue">
                      {m}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Section>

      {/* Market context (E-commerce) */}
      {service.marketRows ? (
        <Section background="surface" spacing="tight">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeading
              eyebrow="The opportunity"
              title="Why this matters now"
            />
            <MarketTable rows={service.marketRows} />
          </div>
        </Section>
      ) : null}

      {/* Benefits */}
      {service.benefits ? (
        <Section background={service.marketRows ? "white" : "surface"}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="What you get"
              title={
                service.slug === "buying-house"
                  ? "Quality you can rely on"
                  : "The value to you"
              }
            />
            <FeatureList items={service.benefits} columns={1} />
          </div>
        </Section>
      ) : null}

      {/* Phased programme (Marketing engine) */}
      {service.phases ? (
        <Section background="surface">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Our marketing engine"
              title="From 'never heard of us' to live buyer conversations"
              description="A structured, three-phase programme that moves you toward paying UK buyers."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {service.phases.map((phase) => (
                <div
                  key={phase.name}
                  className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card"
                >
                  <Badge tone="blue">{phase.name}</Badge>
                  <h3 className="mt-4 text-lg font-semibold text-primary-dark">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-body">{phase.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {/* Numbered process (Buying House, E-commerce) */}
      {service.process ? (
        <Section background={service.phases ? "white" : "surface"}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow={service.processEyebrow ?? "How it works"}
              title={service.processTitle ?? "Source, sample, inspect, deliver"}
            />
            <ProcessSteps steps={service.process} />
          </div>
        </Section>
      ) : null}

      {/* QA / GSP+ / margin / membership callout */}
      {service.callout ? (
        <Section spacing="tight">
          <Callout tone={service.callout.tone} title={service.callout.title}>
            {service.callout.body}
          </Callout>
        </Section>
      ) : null}

      {/* Membership (Marketing & Sales) */}
      {service.membership ? (
        <Section background="surface">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Membership"
              title="Choose the package that fits"
              description="Pricing to be confirmed — shown as “on request” until set."
            />
            <MembershipTable tiers={service.membership} />
          </div>
        </Section>
      ) : null}

      {/* Ways to work with us (Buying House) */}
      {service.waysToWork ? (
        <Section>
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="Engagement" title="Ways to work with us" />
            <div className="grid gap-6 sm:grid-cols-3">
              {service.waysToWork.map((way) => (
                <div
                  key={way.title}
                  className="rounded-2xl border border-line bg-white p-6 shadow-card"
                >
                  <h3 className="font-semibold text-primary-dark">
                    {way.title}
                  </h3>
                  <p className="mt-2 text-body">{way.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {/* FAQs */}
      {service.faqs ? (
        <Section background={service.waysToWork ? "surface" : "white"}>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionHeading
              eyebrow="FAQs"
              title={
                service.slug === "buying-house"
                  ? "Questions from buyers"
                  : "Questions from exporters"
              }
            />
            <Accordion items={service.faqs} />
          </div>
        </Section>
      ) : null}

      <CTASection
        image={images.london}
        title="Ready to get started?"
        buttons={[
          { label: service.primaryCta, href: service.primaryHref },
          ...(service.secondaryCta && service.secondaryHref
            ? [{ label: service.secondaryCta, href: service.secondaryHref }]
            : [{ label: "Talk to us", href: "/contact?topic=service" }]),
        ]}
      />

      <Section spacing="tight">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">
          Other services
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {services
            .filter((s) => s.slug !== service.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-body transition-colors hover:border-primary/40 hover:text-primary"
              >
                {s.cardTitle}
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            ))}
        </div>
      </Section>
    </>
  );
}
