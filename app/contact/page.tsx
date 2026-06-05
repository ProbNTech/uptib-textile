import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact — let's talk",
  description:
    "Tell us what you need — a product, a service or a quote — and we'll point you to the right person. Offices in London and Lahore.",
  alternates: { canonical: "/contact" },
};

const socialIcons = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
} as const;

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's talk"
        description="Tell us a little about what you need — a product, a service, or a quote — and we'll point you to the right person."
        image={images.london}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-primary-dark">
              Send an enquiry
            </h2>
            <p className="mt-2 text-body">
              One smart form — the “What do you need?” field routes your enquiry
              to the right team.
            </p>
            <div className="mt-6">
              <Suspense
                fallback={
                  <div className="h-[520px] rounded-2xl border border-line bg-surface" />
                }
              >
                <EnquiryForm />
              </Suspense>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-primary-dark">
              Our offices
            </h2>
            {site.offices.map((office) => (
              <div
                key={office.label}
                className="rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <h3 className="font-semibold text-primary-dark">
                  {office.label}
                </h3>
                <p className="mt-3 flex items-start gap-2.5 text-body">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  {office.address}
                </p>
                <a
                  href={office.phoneHref}
                  className="mt-2 flex items-center gap-2.5 text-body transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                  {office.phone}
                </a>
              </div>
            ))}

            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="flex items-center gap-2 font-semibold text-primary-dark">
                <Mail className="size-4 text-primary" aria-hidden />
                Connect
              </h3>
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
                      className="inline-flex size-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                    >
                      <Icon className="size-4" aria-hidden />
                    </a>
                  );
                })}
              </div>
              <p className="mt-3 text-sm text-muted">
                Facebook, Instagram and LinkedIn — @ukpaktrade
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
