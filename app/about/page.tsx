import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Callout } from "@/components/ui/Callout";
import { CTASection } from "@/components/ui/CTASection";
import { StatStrip } from "@/components/ui/StatStrip";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { marketStats, buyingTrends } from "@/data/stats";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About — the trusted bridge for UK–Pakistan textile trade",
  description:
    "UPTIB is a London-based platform connecting Pakistan's textile manufacturers with UK buyers — marketing the supply, sourcing the demand, and serving both sides.",
  alternates: { canonical: "/about" },
};

const hubs = [
  {
    city: "Faisalabad",
    body: "Home textiles, towels and fabrics.",
  },
  {
    city: "Sialkot",
    body: "Sportswear, teamwear and athletic apparel.",
  },
  {
    city: "Lahore, Karachi & Multan",
    body: "Apparel, uniforms and institutional textiles.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A London-based platform built to make UK–Pakistan textile trade work for both sides"
        description="Pakistan is one of the world's leading textile producers. The UK is one of Europe's largest textile markets. We connect the two — and make the connection safe, fast and high-quality."
        image={images.london}
        highlights={[
          { value: "US$2.27bn", label: "UK–Pakistan trade a year" },
          { value: "77%", label: "of it is textiles" },
          { value: "London + Lahore", label: "offices" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Who we are"
              title="Organising the flow, and growing it"
            />
            <div className="prose-measure space-y-4 text-body">
              <p>
                The UK–Pakistan Trade &amp; Investment Board (UPTIB) is a
                London-based platform dedicated to strengthening trade between
                the United Kingdom and Pakistan. Our textile division focuses on
                the sector where the two economies are already most deeply
                connected.
              </p>
              <p>
                Between the two countries flows over{" "}
                <strong className="text-primary-dark">
                  US$2.27 billion of trade a year
                </strong>
                , the overwhelming majority of it textiles. Our job is to
                organise that flow, professionalise it, and grow it.
              </p>
            </div>
          </div>
          <StatStrip
            stats={marketStats.slice(0, 4)}
            className="lg:grid-cols-2"
          />
        </div>
      </Section>

      <Section background="surface">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="We serve both ends of the trade"
            title="One platform, two audiences"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-8 shadow-card">
              <h3 className="text-xl font-semibold text-primary-dark">
                For Pakistani manufacturers
              </h3>
              <p className="mt-3 text-body">
                We provide marketing, sales and e-commerce — making them visible
                and reachable to UK buyers.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-8 shadow-card">
              <h3 className="text-xl font-semibold text-primary-dark">
                For UK buyers
              </h3>
              <p className="mt-3 text-body">
                We provide a buying house and logistics — sourcing dependable
                Pakistani product and delivering it landed, on-spec and on-time.
              </p>
            </div>
          </div>
          <Callout tone="blue" title="Doing both is our edge.">
            Every manufacturer we market becomes a vetted supplier we can source
            from; every UK order we win gives our exporters real, paying demand.
            Holding both views makes us a sharper partner to each side.
          </Callout>
        </div>
      </Section>

      <Section>
        <FeatureRow
          eyebrow="A vetted network"
          title="Quality controlled on the ground in Pakistan"
          image={images.warehouse}
          reverse
          badge={{ value: "14+", label: "vetted companies" }}
          cta={{ label: "Browse the directory", href: "/directory" }}
        >
          <p>
            We work with a deep roster of vetted Pakistani manufacturers across
            home textiles, apparel, sportswear and healthcare — in Faisalabad,
            Sialkot, Lahore, Karachi and Multan.
          </p>
          <p>
            Our own people inspect on the ground — raw materials, in-line,
            midline and pre-shipment to your AQL — so what arrives matches what
            you approved.
          </p>
        </FeatureRow>
      </Section>

      <Section background="surface">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8 shadow-card">
            <h3 className="text-lg font-semibold text-primary">Mission</h3>
            <p className="mt-3 text-body">
              To be the preferred gateway for Pakistani textile manufacturers
              seeking UK buyers, and for UK buyers seeking dependable Pakistani
              supply.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-8 shadow-card">
            <h3 className="text-lg font-semibold text-primary">Vision</h3>
            <p className="mt-3 text-body">
              A mature, trusted UK–Pakistan textile platform — a deep roster of
              vetted exporters on one side, a growing base of repeat UK buyers
              on the other.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="What UK buyers want · 2026–2030"
            title="We organise the trade around real demand"
            description="The trends shaping UK sourcing — and the reasons buyers increasingly choose Pakistan."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {buyingTrends.map((trend) => (
              <div
                key={trend.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <h3 className="font-semibold text-primary-dark">
                  {trend.title}
                </h3>
                <p className="mt-2 text-body">{trend.body}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-lg font-semibold text-accent-dark">
                The GSP+ advantage
              </p>
              <p className="mt-2 text-body">
                Duty-free access, world-class cotton, large-scale capacity and
                competitive pricing make Pakistan a low-risk choice.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="surface">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Our reach"
            title="Into Pakistan's textile hubs"
            description="We source from the cities where each category is strongest."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {hubs.map((hub) => (
              <div
                key={hub.city}
                className="rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-semibold text-primary-dark">
                  {hub.city}
                </h3>
                <p className="mt-1 text-body">{hub.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="Where we are" title="London and Lahore" />
          <div className="grid gap-6 sm:grid-cols-2">
            {site.offices.map((office) => (
              <div
                key={office.label}
                className="rounded-2xl border border-line bg-white p-8 shadow-card"
              >
                <h3 className="text-lg font-semibold text-primary-dark">
                  {office.label}
                </h3>
                <p className="mt-3 text-body">{office.address}</p>
                <a
                  href={office.phoneHref}
                  className="mt-2 inline-block font-medium text-primary hover:text-primary-dark"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        image={images.london}
        title="Ready to trade?"
        description="Browse what we make, or see what we can do for you."
        buttons={[
          { label: "Browse Products", href: "/products" },
          { label: "Our Services", href: "/services" },
        ]}
      />
    </>
  );
}
