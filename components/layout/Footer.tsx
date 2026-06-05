import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Directory", href: "/directory" },
  { label: "Insights", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Marketing & Sales", href: "/services/marketing-sales" },
  { label: "Buying House", href: "/services/buying-house" },
  { label: "Logistics & Shipping", href: "/services/logistics" },
  { label: "E-commerce & Warehouse", href: "/services/ecommerce-warehouse" },
];

const marketLinks = [
  { label: "United Kingdom", href: "/about" },
  { label: "Pakistan", href: "/about" },
  { label: "Europe", href: "/services/logistics" },
  { label: "Directory", href: "/directory" },
];

const resourceLinks = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "FAQs", href: "/contact" },
  { label: "Get a Quote", href: "/contact?topic=quote" },
];

const socialIcons = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/80">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/assets/uptib-logo.webp"
              alt={site.legalName}
              width={200}
              height={68}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Connecting UK buyers with Pakistan&apos;s finest textile
              manufacturers through trust, transparency and on-time delivery.
            </p>
            <div className="mt-5 flex gap-2">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={`${s.label} — ${s.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Markets" links={marketLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              {site.offices.map((office) => (
                <li key={office.label}>
                  <p className="font-semibold text-white">{office.label}</p>
                  <a
                    href={office.phoneHref}
                    className="mt-1 flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                  >
                    <Phone className="size-3.5 shrink-0" aria-hidden />
                    {office.phone}
                  </a>
                  <p className="mt-1 flex items-start gap-2 text-white/60">
                    <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                    {office.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-white/50">
          {site.disclaimer}
        </p>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {site.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
