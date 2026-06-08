import type { Metadata } from "next";
import { Check, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Membership — a place in the supplier pool buyers source from",
  description:
    "UPTIB membership puts Pakistani manufacturers in the pool we actually source from on behalf of real buyers worldwide. Three tiers: Basic, Professional and Premium.",
  alternates: { canonical: "/membership" },
};

const tiers = [
  {
    name: "Basic",
    tagline: "First-time / testing exporters",
    featured: false,
    features: ["Company profile listing", "Buyer-directory access", "Monthly market reports"],
  },
  {
    name: "Professional",
    tagline: "Actively pursuing global buyers",
    featured: true,
    features: ["Everything in Basic", "B2B matchmaking", "Buyer introductions", "Trade-event participation", "Lead-generation support"],
  },
  {
    name: "Premium",
    tagline: "A managed global presence",
    featured: false,
    features: ["Everything in Professional", "Dedicated market advisor", "Buyer-sourcing campaigns", "International representation", "Featured promotion"],
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        label="Membership"
        title="More than a listing — a route to real buyers"
        subtitle="Membership gives Pakistani manufacturers a place in the supplier pool we actually source from on behalf of real, global clients — not just a profile, but a route to paying demand."
        video="banner"
      >
        <Button href="/contact" variant="primary" size="lg" showArrow>Become a member</Button>
      </PageHero>

      <Section variant="light" pattern>
        <SectionHeader
          label="Membership tiers"
          title="Choose the level of support you need"
          subtitle="Pricing on request. Every tier builds on the one before it."
          color="green"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-card border p-8 ${
                tier.featured ? "border-[#047857] bg-[#064E3B] text-white shadow-xl lg:-mt-4 lg:mb-4" : "border-[#E5E7EB] bg-white"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981] text-[#052e26] text-xs font-bold">
                  <Star className="w-3.5 h-3.5" /> Most popular
                </span>
              )}
              <h3 className={`font-heading font-bold text-2xl ${tier.featured ? "text-white" : "text-[#1C1F2E]"}`}>{tier.name}</h3>
              <p className={`text-sm mt-1 ${tier.featured ? "text-white/70" : "text-[#6B7280]"}`}>{tier.tagline}</p>
              <p className={`font-heading font-extrabold text-2xl mt-5 ${tier.featured ? "text-[#6EE7B7]" : "text-[#047857]"}`}>Pricing on request</p>
              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.featured ? "text-[#6EE7B7]" : "text-[#10B981]"}`} />
                    <span className={tier.featured ? "text-white/90" : "text-[#3D4152]"}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant={tier.featured ? "glass" : "primary"} showArrow>Become a member</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-card bg-[#F8FAF9] border border-[#E5E7EB] p-8 lg:p-10">
          <h3 className="font-heading font-bold text-[#1C1F2E] text-2xl mb-4">Why membership beats a directory listing</h3>
          <p className="text-[#3D4152] text-lg leading-relaxed max-w-3xl">
            A directory listing is passive — it waits to be found. Membership is active: you join the pool we source from
            for live orders, get introduced to qualified buyers worldwide, receive market intelligence, and have UPTIB
            representing you. We market the supply and source the demand, so members get a real route to paying customers
            — not just visibility.
          </p>
        </div>
      </Section>

      <GlobalCTA
        label="Grow your exports"
        title="Ready to grow your exports?"
        subtitle="Join the supplier pool global buyers source from, and let UPTIB put your products in front of qualified demand worldwide."
        primaryButtonText="Become a member"
        primaryButtonLink="/contact"
        secondaryButtonText="Talk to the team"
        secondaryButtonLink="/contact"
      />
    </>
  );
}
