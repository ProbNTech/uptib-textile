import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck, BadgePercent } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/Button";
import { services, getService } from "@/data/textile";

/* ── Flexible content blocks ── */
type Block =
  | { type: "list"; title: string; items: string[] }
  | { type: "steps"; title: string; items: { step: string; text: string }[] }
  | { type: "callout"; variant: "qa" | "gsp"; title: string; text: string };

type ServiceDetail = {
  whatItIs: string;
  blocks: Block[];
  secondaryCta?: { label: string; href: string };
};

const detail: Record<string, ServiceDetail> = {
  buying: {
    whatItIs:
      "For international buyers sourcing finished textiles from Pakistan. Tell us what you need and we find the right factory, control the quality, handle the paperwork and deliver to your market — you deal with one accountable partner.",
    blocks: [
      {
        type: "steps",
        title: "How it works",
        items: [
          { step: "Brief & quote", text: "We capture your requirement in full — product, fabric, thread count/GSM, sizes, quantities, certifications, target price, packaging and delivery date." },
          { step: "Supplier match", text: "We match your brief to the right manufacturer(s) from our vetted network." },
          { step: "Sampling & approval", text: "We arrange samples, manage revisions, and secure your written approval before any bulk commitment." },
          { step: "Price & order", text: "We negotiate competitive pricing without compromising quality, and place the order." },
          { step: "Quality & delivery", text: "We inspect through production, run pre-shipment QA to your AQL, handle the documentation and coordinate freight to your door." },
        ],
      },
      {
        type: "list",
        title: "Ways to work with us",
        items: [
          "Trial / single order — test Pakistan, and test us, on one defined project.",
          "Repeat / programme sourcing — we become your ongoing Pakistan procurement function.",
          "Quality-assurance only — you have a factory; we provide independent inspection.",
        ],
      },
    ],
    secondaryCta: { label: "Browse the global market", href: "/global-textile-market" },
  },
  outsourcing: {
    whatItIs:
      "Your outsourced Pakistan procurement department. We act as a full sourcing house for overseas businesses — vetted factories, sample approval, price negotiation, multi-stage QA to AQL, export documentation and end-to-end logistics. One accountable partner from brief to delivery, anywhere in the world.",
    blocks: [
      {
        type: "steps",
        title: "The process",
        items: [
          { step: "Brief & quote", text: "Full requirement capture — specs, certifications, target price, packaging and delivery date." },
          { step: "Supplier match", text: "Matched to the right vetted manufacturer(s) for your product and volume." },
          { step: "Sampling & approval", text: "Samples arranged, revisions managed, written approval secured before bulk." },
          { step: "Price & order", text: "Competitive pricing negotiated; order placed and confirmed." },
          { step: "Production monitoring", text: "Inspection at roughly 40–50% completion — catching issues while there's still time to fix them." },
          { step: "Final quality audit", text: "Pre-shipment inspection to your agreed AQL standard. Nothing ships until it passes." },
          { step: "Documentation & delivery", text: "Commercial invoices, packing lists, certificates of origin and GSP+ paperwork handled; freight coordinated through to delivery." },
        ],
      },
      {
        type: "callout",
        variant: "qa",
        title: "Quality control isn't a step — it is the product",
        text: "The most valuable thing we sell is the confidence that what arrives matches what you ordered: checked against your approved sample at every stage, by independent inspectors on the ground in Pakistan.",
      },
      {
        type: "list",
        title: "Logistics, handled",
        items: [
          "Freight coordination (typically FOB Karachi or Port Qasim) with shipment visibility to your market.",
          "Customs clearance and export documentation.",
          "Importer & Exporter of Record (IOR/EOR) set-up where required.",
          "Route-to-market, representation and distribution support.",
        ],
      },
      {
        type: "callout",
        variant: "gsp",
        title: "The GSP+ advantage",
        text: "Pakistan's preferential trade status gives qualifying textiles duty-free entry into the EU — a direct, recurring cost saving we build into your landed price.",
      },
    ],
    secondaryCta: { label: "See the global market", href: "/global-textile-market" },
  },
  marketing: {
    whatItIs:
      "Mainly for Pakistani exporters. We make manufacturers visible, credible and reachable to buyers worldwide — and we generate and qualify the global demand that turns into orders.",
    blocks: [
      {
        type: "list",
        title: "What we do",
        items: [
          "Professional profile & branding — your products, capabilities and certifications, packaged for an international audience.",
          "Market intelligence — global trends, certification requirements, import rules and demand forecasts.",
          "B2B matchmaking — pre-qualified meetings with buyers, distributors and procurement teams worldwide.",
          "Digital campaigns — LinkedIn, email and social outreach to decision-makers in your target markets.",
          "Events — webinars and textile export forums connecting you to global buyers.",
          "Directory listing — your company in the supplier pool we source from for live orders.",
          "Market-entry support — compliance, labelling, packaging and customs guidance for each destination.",
        ],
      },
      {
        type: "callout",
        variant: "qa",
        title: "More than a directory listing",
        text: "Membership puts you in the pool we actually source from on behalf of real buyers — not just a profile, but a route to paying demand.",
      },
    ],
    secondaryCta: { label: "See membership tiers", href: "/membership" },
  },
  warehousing: {
    whatItIs:
      "Warehousing, e-commerce and Amazon market access for Pakistani exporters. We turn suppliers into brand owners selling directly to consumers in global marketplaces — starting with the UK and Europe and expanding outward.",
    blocks: [
      {
        type: "list",
        title: "Amazon account creation & services",
        items: [
          "Amazon seller account creation and setup.",
          "Product listing creation and optimisation.",
          "Amazon store and brand page setup.",
          "Account management and ongoing support.",
          "Product image, title and description guidance.",
          "Support to reach international Amazon customers.",
        ],
      },
      {
        type: "list",
        title: "Warehousing & fulfilment",
        items: [
          "Secure warehousing and storage close to customers.",
          "Pick & pack and contract fulfilment.",
          "Order-to-cash handling.",
          "Amazon FBA prep and store-and-ship.",
        ],
      },
    ],
    secondaryCta: { label: "Become a member", href: "/membership" },
  },
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} — ${s.headline}`,
    description: s.summary,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  const d = detail[slug];
  if (!s || !d) notFound();

  return (
    <>
      <PageHero label={s.eyebrow} title={s.headline} subtitle={s.summary} video="banner">
        <Button href={s.primaryCta.href} variant="primary" size="lg" showArrow>{s.primaryCta.label}</Button>
      </PageHero>

      <Section variant="light" pattern>
        <div className="max-w-3xl mb-12">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#2F7549] mb-3">What it is</p>
          <p className="text-[#3D4152] text-lg sm:text-xl leading-relaxed">{d.whatItIs}</p>
        </div>

        <div className="space-y-12">
          {d.blocks.map((block, bi) => {
            if (block.type === "list") {
              return (
                <div key={bi}>
                  <h2 className="font-heading font-extrabold text-[#16291E] text-2xl mb-6">{block.title}</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#3E8F5E] flex-shrink-0 mt-0.5" />
                        <span className="text-[#3D4152]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            if (block.type === "steps") {
              return (
                <div key={bi}>
                  <h2 className="font-heading font-extrabold text-[#16291E] text-2xl mb-6">{block.title}</h2>
                  <ol className="space-y-4">
                    {block.items.map((it, i) => (
                      <li key={it.step} className="flex items-start gap-4 rounded-card border border-[#E5E7EB] bg-[#F8FAF9] p-5">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2F7549] text-white font-heading font-bold text-sm flex items-center justify-center">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-heading font-bold text-[#16291E]">{it.step}</p>
                          <p className="text-[#3D4152] mt-1 leading-relaxed">{it.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            }
            const CIcon = block.variant === "gsp" ? BadgePercent : ShieldCheck;
            return (
              <div key={bi} className="rounded-card bg-[#15402A] text-white p-8 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <CIcon className="w-6 h-6 text-[#8FD3AE]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{block.title}</h3>
                  <p className="text-white/80 leading-relaxed">{block.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <GlobalCTA
        label={s.name}
        title={`Let's talk about ${s.name.toLowerCase()}`}
        subtitle={s.summary}
        primaryButtonText={s.primaryCta.label}
        primaryButtonLink={s.primaryCta.href}
        secondaryButtonText={d.secondaryCta?.label}
        secondaryButtonLink={d.secondaryCta?.href}
      />
    </>
  );
}
