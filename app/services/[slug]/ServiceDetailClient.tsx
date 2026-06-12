"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  BadgePercent,
  BadgeCheck,
  Globe2,
  Users,
  Handshake,
  Sparkles,
  TrendingUp,
  Award,
  PackageCheck,
  Megaphone,
  Store,
  Truck,
  ClipboardCheck,
  FileText,
  Search,
  FlaskConical,
  Tag,
  RefreshCw,
  Shuffle,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { services, getService } from "@/data/textile";
import { cn } from "@/lib/utils";

const PX = "px-6 sm:px-10 lg:px-16 xl:px-20";

/* Default icon pools for steps / list items when a block doesn't specify its own */
const STEP_ICONS: LucideIcon[] = [FileText, Search, FlaskConical, Tag, ShieldCheck, Truck, PackageCheck, ClipboardCheck];
const LIST_ICONS: LucideIcon[] = [CheckCircle2, Sparkles, Award, Globe2, ShieldCheck, BadgeCheck, Store, PackageCheck];

/* ── Flexible content blocks (carried over, now richer) ── */
type Block =
  | { type: "list"; title: string; intro?: string; items: string[]; icons?: LucideIcon[] }
  | { type: "steps"; title: string; intro?: string; items: { step: string; text: string }[]; icons?: LucideIcon[] }
  | { type: "callout"; variant: "qa" | "gsp"; title: string; text: string };

type ServiceDetail = {
  hero: string;
  feature: string;
  cta?: string;
  featureTag: string;
  intro: string;
  whoForLabel: string;
  whoFor: string[];
  stats: { icon: LucideIcon; value: string; label: string }[];
  contentLabel: { eyebrow: string; title: string; body: string };
  blocks: Block[];
  facts: { factsLabel: { eyebrow: string; title: string; body: string }; chips: string[]; rows: { label: string; value: string }[] };
  why: { eyebrow: string; title: string; body: string; note?: string; items: { icon: LucideIcon; title: string; desc: string }[] };
  primaryCtaOverride?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/* Shared value-prop sets reused across services
   (keyed to the build-guide taxonomy: marketing-sales · ecommerce-warehouse · buying-house · logistics) */
const detail: Record<string, ServiceDetail> = {
  /* ───────────────────────── MARKETING & SALES ─────────────────────── */
  "marketing-sales": {
    hero: "/image/marketing.jpg",
    feature: "/image/e-commerce.jpg",
    featureTag: "For Pakistani exporters",
    intro:
      "Mainly for Pakistani exporters. We make manufacturers visible, credible and reachable to buyers worldwide — and we generate and qualify the global demand that turns into orders. Because we run the buying side too, membership isn't just a profile; it's a place in the supplier pool we actively source from.",
    whoForLabel: "Who this is for",
    whoFor: [
      "Textile mills",
      "Apparel & garment makers",
      "Home-textile & towel exporters",
      "Denim & knitwear producers",
      "Private-label / OEM factories",
    ],
    stats: [
      { icon: Globe2, value: "Worldwide", label: "Buyer reach for your products" },
      { icon: Users, value: "B2B", label: "Pre-qualified buyer matchmaking" },
      { icon: TrendingUp, value: "3-phase", label: "Awareness → leads → conversion" },
      { icon: Sparkles, value: "Live demand", label: "The pool we source from" },
    ],
    contentLabel: {
      eyebrow: "The service",
      title: "Get seen, get qualified, get orders",
      body: "A structured programme that moves you from unknown to a paying member with live buyer conversations.",
    },
    blocks: [
      {
        type: "list",
        title: "What we do",
        intro: "Everything needed to present your factory to an international audience — and put it in front of buyers.",
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
        type: "steps",
        title: "Our marketing engine",
        intro: "A three-phase programme that turns 'never heard of you' into qualified buyer demand.",
        items: [
          { step: "Awareness", text: "LinkedIn outreach to CEOs and export managers, social campaigns across Pakistan's textile hubs, and industry email to chambers and trade-fair lists." },
          { step: "Lead generation", text: "Monthly exporter webinars and quarterly textile export forums, with product showcases and live matchmaking." },
          { step: "Conversion", text: "Qualified interest becomes membership — increasingly pulled by real buyer demand from our sourcing side." },
        ],
      },
      {
        type: "callout",
        variant: "qa",
        title: "More than a directory listing",
        text: "Membership puts you in the pool we actually source from on behalf of real buyers — not just a profile, but a route to paying demand.",
      },
    ],
    facts: {
      factsLabel: {
        eyebrow: "The opportunity",
        title: "The demand we connect you to",
        body: "The market your products can reach once they're visible to the right buyers.",
      },
      chips: ["Retailers", "Sourcing houses", "Importers", "E-commerce brands"],
      rows: [
        { label: "The market", value: "The UK alone imports ~US$2.27bn from Pakistan a year — over three-quarters of it textiles — within a UK textile & apparel market worth ~US$63.6bn, one of many destinations." },
        { label: "Where demand is", value: "Sustainable & ethical sourcing, private-label manufacturing, premium home living and e-commerce-led buying are the trends pulling buyers toward Pakistan." },
        { label: "Who's buying", value: "Major retailers, fashion buyers and sourcing houses, home-textile importers, hospitality procurement and Amazon / e-commerce brands." },
        { label: "Your edge", value: "Certified, competitively-priced production plus GSP+ duty-free access — presented to buyers who are ready to order." },
      ],
    },
    why: {
      eyebrow: "The advantage",
      title: "Why membership beats a listing",
      body: "We don't just publish your profile — we run the buying side, so your membership sits where the orders are.",
      items: [
        { icon: Globe2, title: "Visibility worldwide", desc: "A professional profile in front of buyers, distributors and procurement teams across global markets." },
        { icon: Award, title: "Credibility", desc: "Your capabilities and certifications packaged and presented the way international buyers expect." },
        { icon: Sparkles, title: "Real, paying demand", desc: "A place in the supplier pool we source from for live orders — not just a directory entry." },
        { icon: Handshake, title: "Market-entry support", desc: "Compliance, labelling, packaging and customs guidance for each destination you target." },
      ],
    },
    primaryCtaOverride: { label: "Become a member", href: "/membership" },
    secondaryCta: { label: "See membership", href: "/membership" },
  },

  /* ───────────────────── E-COMMERCE & WAREHOUSE ────────────────────── */
  "ecommerce-warehouse": {
    hero: "/image/warehouse.jpg",
    feature: "/image/warehouse-2.jpg",
    cta: "/image/warehouse-3.jpg",
    featureTag: "Sold direct, worldwide",
    intro:
      "Warehousing, e-commerce and Amazon market access for Pakistani exporters. We turn suppliers into brand owners selling directly to consumers in global marketplaces — starting with the UK and Europe and expanding outward. Instead of selling a container once, you build a brand, recurring revenue and far higher margins.",
    whoForLabel: "Who this is for",
    whoFor: [
      "Manufacturers going direct-to-consumer",
      "Exporters building a brand",
      "Amazon & marketplace sellers",
      "Home & apparel producers",
      "Sellers entering the UK & Europe",
    ],
    stats: [
      { icon: PackageCheck, value: "Amazon FBA", label: "Prime-eligible fulfilment" },
      { icon: TrendingUp, value: "30–100%", label: "Typical DTC margin uplift" },
      { icon: Store, value: "Pick & pack", label: "Storage close to customers" },
      { icon: Globe2, value: "UK → EU", label: "Marketplace expansion path" },
    ],
    contentLabel: {
      eyebrow: "The service",
      title: "From a factory in Pakistan to a consumer's door",
      body: "Everything you need to sell online — account setup, listings, warehousing and fulfilment — managed end-to-end.",
    },
    blocks: [
      {
        type: "list",
        title: "Amazon account creation & services",
        intro: "Getting started on Amazon from Pakistan can feel complicated. We make it simple.",
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
      {
        type: "steps",
        title: "From setup to scale",
        intro: "Five managed stages from market entry to selling across Europe.",
        items: [
          { step: "Market entry", text: "Business-setup guidance, Amazon seller registration, VAT and compliance support, and trademark / brand registration." },
          { step: "Warehousing", text: "Container receiving, inventory storage and stock management, inspection, labelling and pick-and-pack close to your customers." },
          { step: "Amazon programme", text: "Seller-account setup, Brand Store creation, listing optimisation, photography, SEO, PPC and review management — with FBA fulfilment." },
          { step: "Direct e-commerce", text: "A dedicated Shopify store, payment-gateway integration, Google Shopping and social advertising to build your own brand." },
          { step: "Europe expansion", text: "Scale into Amazon Germany, France, Italy and Spain, plus B2B wholesale distribution." },
        ],
      },
      {
        type: "callout",
        variant: "gsp",
        title: "Why direct-to-consumer changes the maths",
        text: "Moving from Manufacturer → Importer → Wholesaler → Retailer to Manufacturer → warehouse → marketplace → consumer can lift margins by 30–100%, depending on category and brand positioning.",
      },
    ],
    facts: {
      factsLabel: {
        eyebrow: "The opportunity",
        title: "Why selling direct is worth it",
        body: "The shift from one-off container sales to owning the customer relationship.",
      },
      chips: ["Amazon", "Shopify", "eBay", "TikTok Shop"],
      rows: [
        { label: "The shift", value: "Instead of selling a container once to an importer, you sell directly to consumers — building a brand, recurring revenue and far higher margins." },
        { label: "Margin uplift", value: "Moving from the traditional export chain to a direct-to-consumer model lifts margins by roughly 30–100%, depending on category and positioning." },
        { label: "Marketplaces", value: "Amazon UK & EU, Shopify, eBay, TikTok Shop and Etsy — backed by warehousing for the next-day delivery shoppers expect." },
        { label: "The market", value: "The UK alone is Europe's largest e-commerce market — £127bn+ a year and 62m+ online shoppers — with billions in addressable textile demand." },
      ],
    },
    why: {
      eyebrow: "The advantage",
      title: "From supplier to brand owner",
      body: "We give Pakistani manufacturers a direct route to global consumers — and the infrastructure to back it up.",
      items: [
        { icon: Store, title: "Build your own brand", desc: "Sell under your name on Amazon and your own store, instead of disappearing into someone else's supply chain." },
        { icon: TrendingUp, title: "Higher margins", desc: "Cut out the middle layers and capture far more of the retail price per unit." },
        { icon: PackageCheck, title: "Fulfilment, handled", desc: "Warehousing, pick-and-pack and FBA prep close to your customers for fast delivery." },
        { icon: Globe2, title: "Recurring revenue", desc: "Turn one-off export sales into an ongoing direct-to-consumer business across the UK and Europe." },
      ],
    },
    primaryCtaOverride: { label: "Start selling on Amazon", href: "/contact" },
    secondaryCta: { label: "Become a member", href: "/membership" },
  },

  /* ─────────────────── BUYING HOUSE (OUTSOURCING) ──────────────────── */
  "buying-house": {
    hero: "/image/buying.jpg",
    feature: "/image/buying-2.jpg",
    cta: "/image/outsourcing-3.jpg",
    featureTag: "Vetted in Pakistan",
    intro:
      "Your outsourced Pakistan procurement department. Tell us what you need; we find the right factory, control the quality, handle the paperwork and deliver. You deal with one accountable partner — and source from a new origin without taking on the risk yourself.",
    whoForLabel: "Who sources this way",
    whoFor: [
      "Retailers & department stores",
      "Importers & wholesalers",
      "Hotel & hospitality buyers",
      "E-commerce & DTC brands",
      "Sourcing & procurement teams",
    ],
    stats: [
      { icon: Handshake, value: "One partner", label: "Brief to delivery, accountable" },
      { icon: ShieldCheck, value: "AQL-checked", label: "Independent pre-shipment QA" },
      { icon: BadgeCheck, value: "Vetted", label: "Pre-screened factory network" },
      { icon: BadgePercent, value: "GSP+", label: "EU duty-free on qualifying goods" },
    ],
    contentLabel: {
      eyebrow: "The service",
      title: "From your brief to your door",
      body: "A clear, controlled path from requirement to delivered goods — with quality checked at every stage.",
    },
    blocks: [
      {
        type: "steps",
        title: "How it works",
        intro: "Seven controlled stages, one point of contact — with quality designed in rather than inspected at the end.",
        items: [
          { step: "Brief & quote", text: "We capture your requirement in full — product, fabric, thread count/GSM, sizes, quantities, certifications, target price, packaging and delivery date." },
          { step: "Supplier match", text: "We match your brief to the right manufacturer(s) from our vetted network." },
          { step: "Sampling & approval", text: "We arrange samples, manage revisions, and secure your written approval before any bulk commitment." },
          { step: "Price & order", text: "We negotiate competitive pricing without compromising quality, and place the order." },
          { step: "Production monitoring", text: "We inspect at roughly 40–50% completion — catching issues while there's still time to fix them." },
          { step: "Final quality audit", text: "We carry out pre-shipment inspection to your agreed AQL standard. Nothing ships until it passes." },
          { step: "Documentation & delivery", text: "We handle the paperwork and coordinate freight through to delivery — see our Logistics service." },
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
        title: "Ways to work with us",
        icons: [FlaskConical, RefreshCw, ShieldCheck, Shuffle],
        items: [
          "Trial / single order — test Pakistan, and test us, on one defined project.",
          "Repeat / programme sourcing — we become your ongoing Pakistan procurement function.",
          "Quality assurance only — you have a factory; we provide independent inspection.",
          "Hybrid — we co-manage sourcing while you keep final control.",
        ],
      },
    ],
    facts: {
      factsLabel: {
        eyebrow: "The facts",
        title: "What you actually get",
        body: "The substance behind the service — so you can buy from a new origin with confidence.",
      },
      chips: ["No middle layer", "AQL pre-ship", "GSP+ coverage", "Healthcare textiles"],
      rows: [
        { label: "Accountability", value: "A single point of contact — sourcing, sampling, QA, documentation and delivery, handled end-to-end. You're not just another number." },
        { label: "Quality control", value: "Independent, multi-stage inspection on the ground in Pakistan, checked against your approved sample to your agreed AQL." },
        { label: "Pricing", value: "Competitive factory pricing negotiated on your behalf, with GSP+ duty-free savings built into your landed cost where goods qualify." },
        { label: "Range", value: "Home textiles, apparel, sportswear and healthcare textiles — from low-MOQ runs to full container volumes." },
      ],
    },
    why: {
      eyebrow: "The advantage",
      title: "Why buyers source through us",
      body: "Give us the full assignment and we vouch for the factory, guarantee the quality and get the goods to your door.",
      items: [
        { icon: Globe2, title: "A vetted global network", desc: "Pre-screened Pakistani manufacturers across every category, matched to your spec and volume." },
        { icon: ShieldCheck, title: "Quality on the ground", desc: "Independent, multi-stage inspection to your agreed AQL — not just the factory's word." },
        { icon: Handshake, title: "One accountable partner", desc: "A single point of accountability from first enquiry to final delivery, anywhere in the world." },
        { icon: BadgePercent, title: "The GSP+ advantage", desc: "Preferential duty-free entry into the EU on qualifying Pakistani textiles, built into your price." },
      ],
    },
    primaryCtaOverride: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "Talk to us about logistics", href: "/services/logistics" },
  },

  /* ─────────────────────────────── LOGISTICS ───────────────────────── */
  logistics: {
    hero: "/image/logistics.jpg",
    feature: "/image/shipping-logistics-2.jpg",
    cta: "/image/logostics-3.jpg",
    featureTag: "Factory to your door",
    intro:
      "For buyers and exporters alike — the movement and paperwork that gets product from a Pakistani factory to your door. We coordinate freight, clear customs, prepare the export documentation and set up Importer/Exporter of Record where it's needed, so a low-cost origin becomes a low-hassle one.",
    whoForLabel: "Who this is for",
    whoFor: [
      "International buyers & importers",
      "Pakistani exporters",
      "Retail & e-commerce sellers",
      "Distributors & wholesalers",
      "Anyone shipping from Pakistan",
    ],
    stats: [
      { icon: Truck, value: "FOB Karachi", label: "Freight coordinated to your market" },
      { icon: FileText, value: "Docs handled", label: "Invoices, packing lists, origin" },
      { icon: ClipboardCheck, value: "IOR / EOR", label: "Set-up where required" },
      { icon: BadgePercent, value: "GSP+", label: "EU duty-free paperwork prepared" },
    ],
    contentLabel: {
      eyebrow: "The service",
      title: "We move it and clear it",
      body: "The freight, customs and documentation that turn a factory price into landed, on-time delivery.",
    },
    blocks: [
      {
        type: "list",
        title: "What we handle",
        intro: "Everything between the factory gate and your door — coordinated by one accountable partner.",
        icons: [Truck, ShieldCheck, FileText, ClipboardCheck, Globe2],
        items: [
          "Freight coordination — typically FOB Karachi or Port Qasim, with shipment visibility through to your market.",
          "Customs clearance — into the EU, UK and other destination markets.",
          "Export documentation — commercial invoices, packing lists, certificates of origin and GSP+ duty-free paperwork.",
          "Importer & Exporter of Record (IOR/EOR) set-up where required.",
          "Route-to-market, representation and distribution support.",
        ],
      },
      {
        type: "callout",
        variant: "gsp",
        title: "The GSP+ advantage",
        text: "Pakistan's preferential trade status gives qualifying Pakistani textiles duty-free entry into the EU — a direct, recurring cost saving we build into your landed price.",
      },
    ],
    facts: {
      factsLabel: {
        eyebrow: "The facts",
        title: "What the service covers",
        body: "The four pieces that move goods from a Pakistani factory to a destination market.",
      },
      chips: ["Freight", "Customs", "Documentation", "IOR / EOR"],
      rows: [
        { label: "Freight", value: "Coordination from Pakistan (typically FOB Karachi or Port Qasim) with shipment visibility through to delivery in your market." },
        { label: "Customs", value: "Clearance into the EU, UK and other destinations, handled so your goods don't sit at the border." },
        { label: "Documentation", value: "Commercial invoices, packing lists, certificates of origin and GSP+ duty-free paperwork prepared and managed." },
        { label: "IOR / EOR", value: "Importer and Exporter of Record set-up where your shipment requires it, plus route-to-market and distribution support." },
      ],
    },
    why: {
      eyebrow: "The advantage",
      title: "Why ship through us",
      body: "A low-cost origin only pays off if it arrives cleanly. We handle the movement and the paperwork so it does.",
      items: [
        { icon: Truck, title: "Freight, coordinated", desc: "Shipments arranged from Karachi or Port Qasim with visibility through to your destination." },
        { icon: FileText, title: "Paperwork, handled", desc: "Invoices, packing lists, certificates of origin and customs documentation prepared correctly the first time." },
        { icon: BadgePercent, title: "GSP+ duty-free", desc: "Qualifying Pakistani textiles enter the EU duty-free — a saving we build into your landed price." },
        { icon: Handshake, title: "One accountable partner", desc: "Freight, customs and documentation under one roof — no juggling forwarders and brokers yourself." },
      ],
    },
    primaryCtaOverride: { label: "Talk to us about logistics", href: "/contact" },
    secondaryCta: { label: "See the buying house", href: "/services/buying-house" },
  },
};

/* Cross-link card images reuse each service's hero */
const serviceCardImages: Record<string, string> = {
  "marketing-sales": detail["marketing-sales"].hero,
  "ecommerce-warehouse": detail["ecommerce-warehouse"].hero,
  "buying-house": detail["buying-house"].hero,
  logistics: detail.logistics.hero,
};

const fallbackServiceIcon: LucideIcon = Megaphone;

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const shouldReduceMotion = useReducedMotion();
  const s = getService(slug);
  const d = detail[slug];
  if (!s || !d) notFound();

  const others = services.filter((x) => x.slug !== s.slug);
  const primaryCta = d.primaryCtaOverride ?? s.primaryCta;

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero label={s.eyebrow} labelClassName="text-white" minHeightClass="min-h-[560px] md:min-h-[620px] lg:min-h-[680px]" title={s.headline} subtitle={s.summary} image={d.hero}>
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href={primaryCta.href}>{primaryCta.label}</ShinyButton>
          <Button href="/services" variant="glass" size="lg">
            All services
          </Button>
        </div>
      </PageHero>

      {/* ── FLOATING FACTS CARD ──────────────────────────────────── */}
      <div className={cn("relative z-[3] -mt-14 sm:-mt-16 lg:-mt-20", PX)}>
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_24px_60px_-24px_rgba(4,120,87,0.30)] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
            {d.stats.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className={cn("flex items-start gap-3.5", i > 0 && "lg:border-l lg:border-[#E5E7EB] lg:pl-6")}
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#2F7549]/10 text-[#2F7549]">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading font-extrabold text-lg text-[#16291E] leading-tight">{f.value}</p>
                    <p className="text-[13px] text-[#5A5F72] leading-snug mt-0.5">{f.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── OVERVIEW + WHO IT'S FOR ──────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionLabel label="What it is" title={s.name} color="#2F7549" hideLine />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] -mt-3 mb-6" />
                <p className="text-[#3D4152] text-lg leading-relaxed">{d.intro}</p>

                <div className="mt-8">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2F7549] mb-4">
                    <Users className="size-4" aria-hidden /> {d.whoForLabel}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {d.whoFor.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center rounded-full border border-[#D7EADD] bg-[#EEF6F0] px-3.5 py-1.5 text-sm font-medium text-[#2F7549]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-[0_28px_60px_-28px_rgba(4,120,87,0.35)]">
                  <Image src={d.feature} alt={s.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-sm font-bold text-[#2F7549]">
                    <Sparkles className="size-4" aria-hidden /> {d.featureTag}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MAIN CONTENT BLOCKS ──────────────────────────────────── */}
      <section className="bg-[#F8FAF9] py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <SectionLabel
              label={d.contentLabel.eyebrow}
              title={d.contentLabel.title}
              body={d.contentLabel.body}
              color="#2F7549"
              hideLine
            />
            <div className="space-y-12">
              {d.blocks.map((block, bi) => {
                if (block.type === "list") {
                  const listIcons = block.icons ?? LIST_ICONS;
                  const n = block.items.length;
                  const lgCols =
                    n >= 4 ? "lg:grid-cols-4" : n === 3 ? "lg:grid-cols-3" : n === 2 ? "lg:grid-cols-2" : "lg:grid-cols-1";
                  return (
                    <div key={bi} className="rounded-2xl bg-gradient-to-br from-[#15402A] to-[#0a1f17] p-7 sm:p-9">
                      <h3 className="font-heading font-extrabold text-white text-xl mb-1.5">{block.title}</h3>
                      {block.intro && (
                        <p className="text-white/70 text-sm leading-relaxed mb-7 max-w-2xl">{block.intro}</p>
                      )}
                      <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-7", lgCols)}>
                        {block.items.map((item, i) => {
                          const Icon = listIcons[i % listIcons.length];
                          const sep = item.indexOf(" — ");
                          const head = sep >= 0 ? item.slice(0, sep) : null;
                          const desc = sep >= 0 ? item.slice(sep + 3) : item;
                          return (
                            <div key={item} className="flex flex-col gap-2.5">
                              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#8FD3AE]">
                                <Icon className="size-5" strokeWidth={1.6} aria-hidden />
                              </span>
                              {head && (
                                <p className="font-heading font-bold text-white text-[15px] leading-snug">{head}</p>
                              )}
                              <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                if (block.type === "steps") {
                  const stepIcons = block.icons ?? STEP_ICONS;
                  return (
                    <div key={bi}>
                      <h3 className="font-heading font-extrabold text-[#16291E] text-2xl mb-2">{block.title}</h3>
                      {block.intro && <p className="text-[#5A5F72] leading-relaxed mb-9 max-w-2xl">{block.intro}</p>}
                      <ol className="flex flex-col lg:flex-row lg:items-start gap-y-9">
                        {block.items.map((it, i) => {
                          const Icon = stepIcons[i % stepIcons.length];
                          const isLast = i === block.items.length - 1;
                          return (
                            <li key={it.step} className="relative lg:flex-1 lg:min-w-0">
                              {!isLast && (
                                <span
                                  aria-hidden
                                  className="hidden lg:block absolute top-[17px] left-[2.6rem] right-0 h-[2px] rounded-full bg-[#C8E2D2]"
                                />
                              )}
                              <div className="flex items-center mb-5">
                                <span className="relative z-[1] flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2F7549] text-white font-heading font-bold text-sm shadow-[0_6px_14px_-4px_rgba(47,117,73,0.6)]">
                                  {i + 1}
                                </span>
                              </div>
                              <div className="lg:pr-6">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#2F7549] shadow-sm mb-4">
                                  <Icon className="size-5" strokeWidth={1.6} aria-hidden />
                                </span>
                                <p className="font-heading font-bold text-[#16291E] leading-snug">{it.step}</p>
                                <p className="text-sm text-[#5A5F72] mt-1.5 leading-relaxed">{it.text}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  );
                }
                const CIcon = block.variant === "gsp" ? BadgePercent : ShieldCheck;
                return (
                  <div key={bi} className="rounded-2xl bg-[#15402A] text-white p-8 flex items-start gap-5">
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
          </AnimatedSection>
        </div>
      </section>

      {/* ── THE FACTS / OPPORTUNITY ──────────────────────────────── */}
      <section className="bg-[#F8FAF9] py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start lg:max-w-sm">
                <SectionLabel
                  label={d.facts.factsLabel.eyebrow}
                  title={d.facts.factsLabel.title}
                  color="#2F7549"
                  hideLine
                />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] -mt-3 mb-5" />
                <p className="text-[#5A5F72] text-base leading-relaxed mb-7">{d.facts.factsLabel.body}</p>
                <ul className="space-y-3.5">
                  {d.facts.chips.map((c) => (
                    <li key={c} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 shrink-0 text-[#3E8F5E]" aria-hidden />
                      <span className="text-[15px] font-semibold text-[#16291E]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm">
                <dl className="divide-y divide-[#E5E7EB]">
                  {d.facts.rows.map((row) => (
                    <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-6 bg-white">
                      <dt className="font-heading font-bold text-[#2F7549] text-sm uppercase tracking-wide">{row.label}</dt>
                      <dd className="sm:col-span-2 text-[#3D4152] leading-relaxed">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY IT WORKS ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start lg:max-w-sm">
                <SectionLabel label={d.why.eyebrow} title={d.why.title} color="#2F7549" hideLine />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] -mt-3 mb-5" />
                <p className="text-[#5A5F72] text-base leading-relaxed">{d.why.body}</p>
                {d.why.note && (
                  <div className="mt-7 flex items-start gap-3.5 rounded-2xl border border-[#D7EADD] bg-[#EEF6F0] p-5">
                    <Award className="size-5 shrink-0 text-[#2F7549] mt-0.5" aria-hidden />
                    <p className="text-sm font-medium text-[#16291E] leading-relaxed">{d.why.note}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
                {d.why.items.map((b, index) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.title}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="flex flex-col"
                    >
                      <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#2F7549]/10 text-[#2F7549] mb-4">
                        <Icon className="size-6" strokeWidth={1.7} aria-hidden />
                      </span>
                      <h3 className="font-heading font-bold text-lg text-[#16291E] leading-snug">{b.title}</h3>
                      <p className="text-sm text-[#5A5F72] leading-relaxed mt-2">{b.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OTHER SERVICES ───────────────────────────────────────── */}
      <section className="bg-[#F8FAF9] py-20 lg:py-28">
        <div className={PX}>
          <AnimatedSection>
            <SectionLabel label="Keep exploring" title="Our other services" color="#2F7549" hideLine />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((o) => {
                const Icon = o.icon ?? fallbackServiceIcon;
                return (
                  <Link
                    key={o.slug}
                    href={`/services/${o.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3E8F5E]/50 hover:shadow-[0_24px_50px_-24px_rgba(4,120,87,0.35)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={serviceCardImages[o.slug] ?? d.hero}
                        alt={o.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                      <span className="absolute left-3 top-3 inline-flex size-9 items-center justify-center rounded-lg bg-white/90 backdrop-blur text-[#2F7549]">
                        <Icon className="size-[18px]" strokeWidth={2} aria-hidden />
                      </span>
                      <span className="absolute left-3 bottom-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/85">
                        {o.audience}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-heading font-bold text-[#16291E] text-lg mb-1.5">{o.name}</h3>
                      <p className="text-sm text-[#5A5F72] leading-relaxed flex-1">{o.short}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7549] transition-all group-hover:gap-2.5">
                        Explore <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <GlobalCTA
        label={s.name}
        title={`Let's talk about ${s.name.toLowerCase()}`}
        subtitle={s.summary}
        primaryButtonText={primaryCta.label}
        primaryButtonLink={primaryCta.href}
        secondaryButtonText={d.secondaryCta?.label}
        secondaryButtonLink={d.secondaryCta?.href}
        image={d.cta ?? d.feature}
      />
    </div>
  );
}
