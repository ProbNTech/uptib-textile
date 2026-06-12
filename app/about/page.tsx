import type { Metadata } from "next";
import { Target, Eye, MapPin, Phone } from "lucide-react";
import { PolicyHero } from "@/components/PolicyHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/Button";
import { site } from "@/data/site";
import { products, services, homeStats, markets, whyUptib } from "@/data/textile";

export const metadata: Metadata = {
  title: "About Pakistan Textile Partners",
  description: "The trusted bridge for UK–Pakistan textile trade — connecting Pakistan's manufacturers and exporters with buyers worldwide.",
  alternates: { canonical: "/about" },
};

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="mb-8">
      <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2F7549]">{eyebrow}</p>
      <h2 className="font-heading text-[1.7rem] sm:text-[2rem] font-bold leading-[1.2] text-[#16291E]">{title}</h2>
      <div className="mt-4 h-px w-12 bg-[#3E8F5E]" />
    </header>
  );
}

export default function AboutPage() {
  return (
    <div>
      <PolicyHero
        eyebrow="About Us"
        breadcrumb="About Us"
        title="About Pakistan Textile Partners"
        subtitle="The trusted bridge for UK–Pakistan textile trade — connecting Pakistan's manufacturers and exporters with buyers worldwide."
        icon={Target}
      >
        <ShinyButton href="/membership#apply">Apply for Membership</ShinyButton>
        <Button href="/contact" variant="glass">Contact Us</Button>
      </PolicyHero>

      {/* Who we are */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
          <SectionHead eyebrow="Who we are" title="A London-based platform for textile trade" />
          <div className="space-y-4 text-[15.5px] leading-[1.85] text-[#4B5563]">
            <p>
              Pakistan Textile Partners is a London-based platform for UK–Pakistan textile trade. We trade
              quality Pakistani textiles and run the services that move them — buying, outsourced
              procurement, marketing and warehousing — connecting Pakistan’s manufacturers and exporters
              with buyers worldwide.
            </p>
            <p>
              As the textile division of the UK–Pakistan Trade and Investment Board (UPTIB), we act as a
              trusted bridge between Pakistani manufacturing and global demand: marketing the supply,
              sourcing the demand, and standing as one accountable partner to both.
            </p>
            <p>
              Pakistan is one of the world’s top-ten textile exporters and a global leader in cotton and
              home textiles. We make that capability visible, credible and reachable — helping
              international buyers source dependable product on-spec and on-time, and helping Pakistani
              exporters reach markets across the EU, the Americas, the Middle East and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-y border-[#ECECE6] bg-[#F7F8F6]">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
          <SectionHead eyebrow="What we do" title="Products and services, end to end" />
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#16291E]">
                What we trade
              </h3>
              <div className="divide-y divide-[#E2E2DC] border-y border-[#E2E2DC]">
                {products.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.slug} className="flex gap-4 py-4">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2F7549]" strokeWidth={1.6} />
                      <div>
                        <p className="font-heading text-[1rem] font-semibold text-[#16291E]">{p.name}</p>
                        <p className="mt-1 text-[14.5px] leading-[1.7] text-[#5A5F72]">{p.short}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#16291E]">
                What we do for you
              </h3>
              <div className="divide-y divide-[#E2E2DC] border-y border-[#E2E2DC]">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.slug} className="flex gap-4 py-4">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2F7549]" strokeWidth={1.6} />
                      <div>
                        <p className="font-heading text-[1rem] font-semibold text-[#16291E]">{s.name}</p>
                        <p className="mt-1 text-[14.5px] leading-[1.7] text-[#5A5F72]">{s.short}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Target className="h-6 w-6 text-[#2F7549]" strokeWidth={1.6} />
                <h2 className="font-heading text-[1.5rem] font-bold text-[#16291E]">Our Mission</h2>
              </div>
              <p className="text-[15.5px] leading-[1.85] text-[#4B5563]">
                To connect Pakistan’s textile manufacturing to buyers around the world — marketing the
                supply, sourcing the demand, and giving both sides a single accountable partner from first
                enquiry to final delivery.
              </p>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Eye className="h-6 w-6 text-[#2F7549]" strokeWidth={1.6} />
                <h2 className="font-heading text-[1.5rem] font-bold text-[#16291E]">Our Vision</h2>
              </div>
              <p className="text-[15.5px] leading-[1.85] text-[#4B5563]">
                To be the trusted bridge for UK–Pakistan textile trade — making Pakistan’s world-class
                cotton, home textiles, apparel and institutional textiles visible, credible and reachable
                to buyers everywhere, while helping Pakistani exporters grow into global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-[#ECECE6] bg-[#F7F8F6]">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
          <SectionHead eyebrow="Why us" title="Why Choose Pakistan Textile Partners" />
          <div className="mt-2 grid gap-x-12 gap-y-9 sm:grid-cols-2">
            {whyUptib.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <Icon className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#2F7549]" strokeWidth={1.6} />
                  <div>
                    <h3 className="font-heading text-[1.05rem] font-semibold text-[#16291E]">{item.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-[1.8] text-[#5A5F72]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* By the numbers + markets */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
          <SectionHead eyebrow="The opportunity" title="Pakistan textiles, by the numbers" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {homeStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-extrabold text-[#2F7549] sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#5A5F72]">{stat.label}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-5 mt-14 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#16291E]">
            Markets we reach
          </h3>
          <dl className="divide-y divide-[#ECECE6] border-y border-[#ECECE6]">
            {markets.map((m) => (
              <div key={m.name} className="grid gap-1 py-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                <dt className="font-semibold text-[#16291E]">{m.name}</dt>
                <dd className="text-[15px] text-[#5A5F72]">{m.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Where we operate */}
      <section className="border-y border-[#ECECE6] bg-[#F7F8F6]">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
          <SectionHead eyebrow="Where we are" title="Offices in the UK and Pakistan" />
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {site.offices.map((office) => (
              <div key={office.label}>
                <h3 className="font-heading text-[1.1rem] font-semibold text-[#16291E]">{office.label}</h3>
                <div className="mt-3 space-y-2.5 text-[15px] text-[#5A5F72]">
                  <p className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2F7549]" strokeWidth={1.7} />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2F7549]" strokeWidth={1.7} />
                    <a href={office.phoneHref} className="hover:text-[#2F7549]">{office.phone}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA
        label="Join Us"
        title="Ready to Be Part of UK–Pakistan Textile Trade?"
        subtitle="Join Pakistan Textile Partners and connect with the manufacturers, exporters and buyers driving textile trade between Pakistan and the world."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        image="/image/textile/products/bedding-linen.jpg"
      />
    </div>
  );
}
