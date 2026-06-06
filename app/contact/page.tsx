import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import {
  Clock,
  Facebook,
  Globe,
  Headset,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact — let's start a valuable partnership",
  description:
    "Have a question, need information, or ready to explore opportunities? Tell us what you need and we'll point you to the right person. Offices in London and Lahore.",
  alternates: { canonical: "/contact" },
};

const socialIcons = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
} as const;

const heroFeatures = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting Pakistan to the world.",
  },
  {
    icon: Clock,
    title: "Responsive Team",
    description: "We reply within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partner",
    description: "Committed to long-term relationships.",
  },
];

const networkStats = [
  { value: "50+", label: "Countries We Trade With" },
  { value: "327+", label: "Verified Manufacturers" },
  { value: "1000+", label: "Global Buyers" },
  { value: "24h", label: "Average Response Time" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero — glowing world map, shown clean (no colour wash) */}
      <section className="relative isolate overflow-hidden bg-primary-dark">
        <div aria-hidden className="absolute inset-0">
          <Image
            src={images.contactHeroBg.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Soft left fade only — keeps headline legible, lets the map show */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/30 to-transparent" />
        </div>

        <Container className="relative py-16 sm:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-light backdrop-blur">
              <span
                className="size-1.5 rounded-full bg-secondary-light"
                aria-hidden
              />
              Contact Us
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s start a
              <br />
              valuable partnership
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Have a question, need information, or ready to explore
              opportunities? We&apos;re here to help.
            </p>

            <dl className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-8">
              {heroFeatures.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-secondary-light backdrop-blur">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold text-white">
                      {title}
                    </dt>
                    <dd className="mt-0.5 text-sm text-white/65">
                      {description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Enquiry + offices — light section */}
      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-primary-dark">
              Send us an enquiry
            </h2>
            <p className="mt-2 text-body">
              Fill out the form below and our team will get back to you shortly.
            </p>
            <div className="mt-6">
              <Suspense
                fallback={
                  <div className="h-[520px] rounded-2xl border border-line bg-white" />
                }
              >
                <EnquiryForm />
              </Suspense>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark">
                Our offices
              </h2>
              <p className="mt-2 text-body">
                We operate in Pakistan and the UK to serve you better.
              </p>
            </div>

            {site.offices.map((office) => (
              <div
                key={office.label}
                className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <Landmark
                  className="pointer-events-none absolute -bottom-3 -right-3 size-28 text-secondary/[0.08]"
                  aria-hidden
                />
                <div className="relative z-10">
                  <h3 className="font-semibold text-primary-dark">
                    {office.label}
                  </h3>
                  <p className="mt-3 flex items-start gap-2.5 text-body">
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 text-secondary"
                      aria-hidden
                    />
                    {office.address}
                  </p>
                  <a
                    href={office.phoneHref}
                    className="mt-2 flex items-center gap-2.5 text-body transition-colors hover:text-primary"
                  >
                    <Phone
                      className="size-4 shrink-0 text-secondary"
                      aria-hidden
                    />
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="flex items-center gap-2 font-semibold text-primary-dark">
                <Mail className="size-4 text-secondary" aria-hidden />
                Connect with us
              </h3>
              <p className="mt-2 text-sm text-muted">
                Follow us on social media for updates, insights and
                opportunities.
              </p>
              <div className="mt-4 flex gap-2">
                {site.socials.map((s) => {
                  const Icon = socialIcons[s.label as keyof typeof socialIcons];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} — ${s.handle}`}
                      className="inline-flex size-10 items-center justify-center rounded-full bg-surface text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                    >
                      <Icon className="size-4" aria-hidden />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Global network — light band */}
      <Section background="surface">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-primary-dark sm:text-4xl">
            Our global network
          </h2>
          <p className="mt-3 text-body">
            Building bridges between Pakistan and the world.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-line pt-10 lg:grid-cols-4">
          {networkStats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-4xl font-extrabold text-secondary sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-body">{stat.label}</dd>
            </div>
          ))}
        </dl>

        {/* Prefer to talk — CTA bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-white p-6 shadow-card sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <Headset className="size-6" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-primary-dark">
                Prefer to talk to someone?
              </h3>
              <p className="mt-1 text-body">Our team is ready to assist you.</p>
            </div>
          </div>
          <Button href={site.offices[0].phoneHref} variant="primary" size="lg">
            <Phone className="size-4" aria-hidden />
            Call us now
          </Button>
        </div>
      </Section>
    </>
  );
}
