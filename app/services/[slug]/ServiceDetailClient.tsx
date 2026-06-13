"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Check,
  X,
  Minus,
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
  Clock,
  Rocket,
  Repeat,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { GrowthBanner } from "@/components/GrowthBanner";
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
  | { type: "callout"; variant: "qa" | "gsp"; title: string; text: string }
  | {
      type: "outcomes";
      title: string;
      eyebrow?: string;
      intro?: string;
      items: { icon: LucideIcon; metric: string; label: string; desc: string }[];
    }
  | {
      type: "compare";
      title: string;
      intro?: string;
      without: { label: string; points: string[] };
      with: { label: string; points: string[] };
    }
  | {
      type: "flow";
      title: string;
      intro?: string;
      lanes: { label: string; tone: "muted" | "brand"; note?: string; nodes: string[] }[];
    };

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
  facts: { factsLabel: { eyebrow: string; title: string; body: string }; chips: string[]; rows: { label: string; value: string }[]; factsImage?: string };
  why: { eyebrow: string; title: string; body: string; note?: string; items: { icon: LucideIcon; title: string; desc: string }[] };
  primaryCtaOverride?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /* Unique growth imagery per service: a full-width parallax "shutter" photo + a secondary illustration */
  growth?: { banner: string; secondary?: string };
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
        type: "outcomes",
        title: "What membership delivers",
        eyebrow: "What you gain",
        intro: "The concrete results of being marketed by a partner who also runs the buying side.",
        items: [
          { icon: Globe2, metric: "Worldwide", label: "Buyer visibility", desc: "Your factory profile in front of retailers, importers and sourcing houses across global markets." },
          { icon: Users, metric: "B2B", label: "Qualified meetings", desc: "Pre-screened buyer matchmaking — real conversations, not cold lead lists." },
          { icon: Sparkles, metric: "Live", label: "Order demand", desc: "A place in the supplier pool we actively source from for paying orders." },
          { icon: Rocket, metric: "Faster", label: "Market entry", desc: "Compliance, labelling and customs guidance for every destination you target." },
        ],
      },
      {
        type: "compare",
        title: "Two ways to reach global buyers",
        intro: "Marketing your factory alone rarely reaches a purchase order. Here's the difference a partner makes.",
        without: {
          label: "Marketing on your own",
          points: [
            "Cold outreach that rarely reaches the right buyer",
            "No independent credibility with procurement teams",
            "Leads — if any — that go nowhere near an order",
            "You guess at each market's compliance and labelling rules",
          ],
        },
        with: {
          label: "With Pakistan Textile Partners",
          points: [
            "A professional profile presented the way buyers expect",
            "Pre-qualified introductions to decision-makers worldwide",
            "A place in the pool we source from for live orders",
            "Market-entry guidance for every destination, built in",
          ],
        },
      },
      {
        type: "callout",
        variant: "qa",
        title: "More than a directory listing",
        text: "Membership puts you in the pool we actually source from on behalf of real buyers — not just a profile, but a route to paying demand.",
      },
    ],
    facts: {
      factsImage: "/image/growth/sl_033020_29450_24.jpg",
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
    growth: {
      banner: "/image/growth/pexels-anna-nekrashevich-6801636.jpg",
    },
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
        type: "flow",
        title: "Where the margin goes",
        intro: "Every link in the traditional export chain takes a cut. Selling direct collapses the chain — and the margin you lose along it stays with you.",
        lanes: [
          {
            label: "Traditional export chain",
            tone: "muted",
            note: "margin shrinks at each step",
            nodes: ["Manufacturer", "Importer", "Wholesaler", "Retailer", "Consumer"],
          },
          {
            label: "Direct-to-consumer with us",
            tone: "brand",
            note: "you keep far more per unit",
            nodes: ["Manufacturer", "Warehouse", "Marketplace", "Consumer"],
          },
        ],
      },
      {
        type: "outcomes",
        title: "What selling direct gets you",
        eyebrow: "What you gain",
        intro: "The payoff of owning the customer relationship instead of selling a container once.",
        items: [
          { icon: TrendingUp, metric: "30–100%", label: "Higher margins", desc: "Capture far more of the retail price by cutting out the middle layers." },
          { icon: Repeat, metric: "Recurring", label: "Revenue, not one-offs", desc: "Turn a single container sale into an ongoing direct-to-consumer business." },
          { icon: PackageCheck, metric: "Prime", label: "Fast fulfilment", desc: "FBA-ready warehousing close to customers for the next-day delivery shoppers expect." },
          { icon: Store, metric: "Your name", label: "A brand you own", desc: "Sell under your own brand instead of disappearing into someone else's supply chain." },
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
      factsImage: "/image/your-advantage.png",
      factsLabel: {
        eyebrow: "Your advantage",
        title: "Why selling direct is worth it",
        body: "Take control of your brand and customer experience — and grow profitably.",
      },
      chips: ["More control", "More data", "More trust", "More loyalty", "Better margins"],
      rows: [
        { label: "Control", value: "You set prices, offers and customer experience — you own it all." },
        { label: "Margins", value: "Keep more of what you earn by removing marketplace fees." },
        { label: "Growth", value: "Build repeat customers and increase lifetime value." },
        { label: "Trust", value: "Your brand, your promises — build stronger relationships." },
      ],
    },
    why: {
      eyebrow: "For every stage",
      title: "From supplier to brand owner",
      body: "Solutions for every business size — from startup to scale.",
      items: [
        { icon: Rocket, title: "Built for Startups", desc: "Low minimums, quick onboarding and expert guidance." },
        { icon: TrendingUp, title: "Higher Margins", desc: "The direct-to-consumer model helps you keep more profit." },
        { icon: PackageCheck, title: "Fulfilment that Scales", desc: "Scale orders up or down without operational headaches." },
        { icon: ShieldCheck, title: "Reliable & Trusted", desc: "Secure storage, insured inventory and strict quality checks." },
        { icon: RefreshCw, title: "Returns Management", desc: "Hassle-free returns, reverse logistics and refunds." },
        { icon: Globe2, title: "Worldwide Reach", desc: "Deliver to consumers across the UK, Europe and beyond." },
      ],
    },
    primaryCtaOverride: { label: "Start selling on Amazon", href: "/contact" },
    secondaryCta: { label: "Become a member", href: "/membership" },
    growth: {
      banner: "/image/growth/pexels-goumbik-669621.jpg",
      secondary: "/image/growth/24132d01-b592-4476-929f-06388c7bd3aa.jpg",
    },
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
        type: "compare",
        title: "Sourcing a new origin: alone vs through us",
        intro: "Buying from an unfamiliar market is where deals go wrong. Here's what changes when we run it for you.",
        without: {
          label: "Sourcing Pakistan alone",
          points: [
            "Unknown factories you have to vet and trust yourself",
            "Quality you only discover when the container lands",
            "Export paperwork and customs left for you to figure out",
            "No one accountable when something goes wrong",
          ],
        },
        with: {
          label: "Through our buying house",
          points: [
            "Pre-vetted manufacturers matched to your exact spec",
            "Independent AQL inspection before anything ships",
            "Documentation, freight and customs handled end-to-end",
            "One partner accountable from brief to delivery",
          ],
        },
      },
      {
        type: "outcomes",
        title: "What you actually get",
        eyebrow: "What you gain",
        intro: "The substance behind the service — so you can buy from a new origin with confidence.",
        items: [
          { icon: Handshake, metric: "One", label: "Accountable partner", desc: "A single point of contact from your brief to delivered goods." },
          { icon: ShieldCheck, metric: "AQL", label: "Guaranteed quality", desc: "Independent, multi-stage inspection against your approved sample." },
          { icon: BadgePercent, metric: "GSP+", label: "Duty-free savings", desc: "Preferential EU entry built into your landed cost where goods qualify." },
          { icon: Globe2, metric: "New origin", label: "De-risked", desc: "Source from Pakistan without taking on the supplier risk yourself." },
        ],
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
      factsImage: "/image/growth/SL-012322-48100-19.jpg",
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
    growth: {
      banner: "/image/growth/pexels-rdne-7947849.jpg",
    },
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
        type: "flow",
        title: "Factory to your door",
        intro: "Coordinating freight, customs and paperwork yourself means handoffs between parties — and gaps where shipments stall. We hold every link under one roof.",
        lanes: [
          {
            label: "Coordinating it yourself",
            tone: "muted",
            note: "gaps at each handoff",
            nodes: ["Forwarder", "Broker", "Customs agent", "You chase the paperwork"],
          },
          {
            label: "Through our logistics service",
            tone: "brand",
            note: "one accountable partner",
            nodes: ["Factory", "Freight", "Customs", "Documentation", "Your door"],
          },
        ],
      },
      {
        type: "outcomes",
        title: "What lands on your end",
        eyebrow: "What you gain",
        intro: "A low-cost origin only pays off if it arrives cleanly — here's what you actually receive.",
        items: [
          { icon: PackageCheck, metric: "Landed", label: "Not just FOB", desc: "Goods delivered to your market, not left at the port for you to manage." },
          { icon: BadgePercent, metric: "GSP+", label: "Duty-free entry", desc: "Qualifying Pakistani textiles enter the EU duty-free — the saving built into your price." },
          { icon: Clock, metric: "No delays", label: "Cleared at the border", desc: "Customs handled in advance so your shipment doesn't sit waiting." },
          { icon: Handshake, metric: "One roof", label: "Freight + customs + docs", desc: "No juggling forwarders and brokers — one accountable partner throughout." },
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
      factsImage: "/image/growth/business-graphics-presentation-illustration.jpg",
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
    growth: {
      banner: "/image/growth/pexels-rdne-7948063.jpg",
    },
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
      <section className="bg-white py-20 lg:py-28">
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
                            <motion.li
                              key={it.step}
                              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-40px" }}
                              transition={{ duration: 0.45, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                              className="group relative lg:flex-1 lg:min-w-0"
                            >
                              {!isLast && (
                                <motion.span
                                  aria-hidden
                                  className="hidden lg:block absolute top-[17px] left-[2.6rem] right-0 h-[2px] origin-left rounded-full bg-gradient-to-r from-[#2F7549] to-[#C8E2D2]"
                                  initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  viewport={{ once: true, margin: "-40px" }}
                                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: "easeInOut" }}
                                />
                              )}
                              <div className="flex items-center mb-5">
                                <span className="relative z-[1] flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2F7549] text-white font-heading font-bold text-sm shadow-[0_6px_14px_-4px_rgba(47,117,73,0.6)] transition-transform duration-300 group-hover:scale-110">
                                  {i + 1}
                                </span>
                              </div>
                              <div className="lg:pr-6">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#2F7549] shadow-sm mb-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#3E8F5E]/50 group-hover:shadow-[0_12px_24px_-12px_rgba(4,120,87,0.45)]">
                                  <Icon className="size-5" strokeWidth={1.6} aria-hidden />
                                </span>
                                <p className="font-heading font-bold text-[#16291E] leading-snug">{it.step}</p>
                                <p className="text-sm text-[#5A5F72] mt-1.5 leading-relaxed">{it.text}</p>
                              </div>
                            </motion.li>
                          );
                        })}
                      </ol>
                    </div>
                  );
                }
                if (block.type === "outcomes") {
                  const n = block.items.length;
                  const lgCols = n >= 4 ? "lg:grid-cols-4" : n === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
                  return (
                    <div
                      key={bi}
                      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-gradient-to-br from-[#15402A] to-[#0a1f17] py-16 sm:py-20 lg:py-24"
                    >
                      {/* decorative dot grid */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 20% 30%, white 0, transparent 2px), radial-gradient(circle at 70% 60%, white 0, transparent 2px)",
                          backgroundSize: "48px 48px",
                        }}
                      />
                      {/* soft glow */}
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-[#3E8F5E]/25 blur-[110px]"
                        animate={shouldReduceMotion ? undefined : { opacity: [0.5, 0.85, 0.5] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className={cn("relative", PX)}>
                        <div className="mb-9 sm:mb-11">
                          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8FD3AE] mb-3">
                            <Sparkles className="size-4" aria-hidden /> {block.eyebrow ?? "What you gain"}
                          </p>
                          <h3 className="font-heading font-extrabold text-white text-3xl sm:text-4xl">{block.title}</h3>
                          {block.intro && <p className="text-white/70 leading-relaxed mt-3 max-w-2xl">{block.intro}</p>}
                        </div>
                        <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6", lgCols)}>
                          {block.items.map((it, i) => {
                            const Icon = it.icon;
                            return (
                              <motion.div
                                key={it.label}
                                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                                className="relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.06] p-6 backdrop-blur-sm"
                              >
                                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#8FD3AE] mb-5">
                                  <Icon className="size-6" strokeWidth={1.7} aria-hidden />
                                </span>
                                <p className="font-heading font-extrabold text-[1.7rem] sm:text-[1.85rem] text-white leading-none">
                                  {it.metric}
                                </p>
                                <p className="mt-2 font-heading font-bold text-[15px] text-[#8FD3AE]">{it.label}</p>
                                <p className="mt-2.5 text-sm text-white/65 leading-relaxed">{it.desc}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }
                if (block.type === "compare") {
                  return (
                    <div key={bi}>
                      <h3 className="font-heading font-extrabold text-[#16291E] text-2xl mb-2">{block.title}</h3>
                      {block.intro && <p className="text-[#5A5F72] leading-relaxed mb-9 max-w-2xl">{block.intro}</p>}
                      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                        <span
                          aria-hidden
                          className="pointer-events-none absolute left-1/2 top-1/2 z-[2] hidden -translate-x-1/2 -translate-y-1/2 lg:flex size-12 items-center justify-center rounded-full bg-[#2F7549] text-white shadow-[0_10px_24px_-8px_rgba(47,117,73,0.6)] ring-4 ring-white"
                        >
                          <motion.span
                            animate={shouldReduceMotion ? undefined : { x: [-3, 3, -3] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ArrowRight className="size-5" />
                          </motion.span>
                        </span>
                        <motion.div
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.5 }}
                          className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-7"
                        >
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9CA3AF] mb-5">{block.without.label}</p>
                          <ul className="space-y-4">
                            {block.without.points.map((p) => (
                              <li key={p} className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] text-[#9CA3AF]">
                                  <X className="size-3.5" strokeWidth={2.5} aria-hidden />
                                </span>
                                <span className="text-sm text-[#6B7280] leading-relaxed">{p}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                        <motion.div
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.5, delay: 0.08 }}
                          className="rounded-2xl border border-[#2F7549]/30 bg-gradient-to-br from-[#15402A] to-[#0a1f17] p-7 text-white shadow-[0_28px_60px_-30px_rgba(4,120,87,0.55)]"
                        >
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8FD3AE] mb-5">{block.with.label}</p>
                          <ul className="space-y-4">
                            {block.with.points.map((p) => (
                              <li key={p} className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#8FD3AE]/20 text-[#8FD3AE]">
                                  <Check className="size-3.5" strokeWidth={2.75} aria-hidden />
                                </span>
                                <span className="text-sm text-white/85 leading-relaxed">{p}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  );
                }
                if (block.type === "flow") {
                  return (
                    <div key={bi}>
                      <h3 className="font-heading font-extrabold text-[#16291E] text-2xl mb-2">{block.title}</h3>
                      {block.intro && <p className="text-[#5A5F72] leading-relaxed mb-9 max-w-2xl">{block.intro}</p>}
                      <div className="flex flex-col gap-5">
                        {block.lanes.map((lane) => {
                          const brand = lane.tone === "brand";
                          return (
                            <motion.div
                              key={lane.label}
                              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-40px" }}
                              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                              className={cn(
                                "relative overflow-hidden rounded-2xl border p-6 sm:p-7",
                                brand
                                  ? "border-[#2F7549]/40 bg-gradient-to-br from-[#15402A] to-[#0a1f17] shadow-[0_28px_60px_-30px_rgba(4,120,87,0.55)]"
                                  : "border-[#E5E7EB] bg-[#F8FAFC]",
                              )}
                            >
                              {brand && (
                                <div
                                  aria-hidden
                                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                                  style={{
                                    backgroundImage:
                                      "radial-gradient(circle at 15% 30%, white 0, transparent 2px), radial-gradient(circle at 65% 70%, white 0, transparent 2px)",
                                    backgroundSize: "40px 40px",
                                  }}
                                />
                              )}
                              <div className="relative mb-5 flex flex-wrap items-center gap-3">
                                <span
                                  className={cn(
                                    "inline-flex size-7 items-center justify-center rounded-full",
                                    brand ? "bg-[#8FD3AE]/20 text-[#8FD3AE]" : "bg-[#D1D5DB] text-[#6B7280]",
                                  )}
                                  aria-hidden
                                >
                                  {brand ? <Check className="size-4" strokeWidth={2.75} /> : <Minus className="size-4" strokeWidth={2.5} />}
                                </span>
                                <p className={cn("font-heading font-bold", brand ? "text-white" : "text-[#6B7280]")}>{lane.label}</p>
                                {lane.note && (
                                  <span
                                    className={cn(
                                      "ml-auto rounded-full px-3 py-1 text-[11px] font-semibold",
                                      brand ? "bg-white/10 text-[#8FD3AE]" : "bg-[#E5E7EB] text-[#9CA3AF]",
                                    )}
                                  >
                                    {lane.note}
                                  </span>
                                )}
                              </div>
                              <div className="relative flex flex-col sm:flex-row sm:flex-wrap sm:items-stretch gap-2 sm:gap-0">
                                {lane.nodes.map((node, ni) => (
                                  <Fragment key={node}>
                                    <motion.span
                                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      viewport={{ once: true, margin: "-30px" }}
                                      transition={{ duration: 0.4, delay: ni * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                      className={cn(
                                        "flex flex-1 items-center justify-center rounded-xl border px-3 py-3 text-center text-[13px] font-semibold leading-snug",
                                        brand
                                          ? "border-white/15 bg-white/[0.08] text-white backdrop-blur-sm"
                                          : "border-[#E5E7EB] bg-white text-[#6B7280]",
                                      )}
                                    >
                                      {node}
                                    </motion.span>
                                    {ni < lane.nodes.length - 1 && (
                                      <motion.span
                                        aria-hidden
                                        className="flex shrink-0 items-center justify-center self-center px-0.5 sm:px-2"
                                        animate={shouldReduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
                                        transition={{ duration: 1.8, repeat: Infinity, delay: ni * 0.25, ease: "easeInOut" }}
                                      >
                                        <ArrowRight
                                          className={cn(
                                            "size-4 rotate-90 sm:rotate-0",
                                            brand ? "text-[#8FD3AE]" : "text-[#C7CBD3]",
                                          )}
                                        />
                                      </motion.span>
                                    )}
                                  </Fragment>
                                ))}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
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

      {/* ── GROWTH SHUTTER (banner) ──────────────────────────────── */}
      {d.growth && (
        <GrowthBanner
          image={d.growth.banner}
          title={`Where ${s.name.toLowerCase()} takes you`}
          body="This service exists to grow your business — more reach, more orders and a stronger position in the market, quarter after quarter."
        />
      )}

      {/* ── THE FACTS / OPPORTUNITY ──────────────────────────────── */}
      <section className="bg-white pt-20 lg:pt-28 pb-8 lg:pb-10">
        <div className={PX}>
          <AnimatedSection>
            <div
              className={cn(
                "grid items-center gap-10 lg:gap-12",
                d.facts.factsImage ? "lg:grid-cols-12" : "lg:grid-cols-[1fr_1.6fr] lg:gap-16",
              )}
            >
              {/* Left — eyebrow, heading, body, checklist */}
              <div
                className={cn(
                  d.facts.factsImage ? "lg:col-span-4" : "lg:sticky lg:top-28 lg:self-start lg:max-w-sm",
                )}
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2F7549] mb-4">
                  {d.facts.factsLabel.eyebrow}
                </p>
                <h2 className="font-heading font-extrabold text-3xl sm:text-[2.2rem] leading-[1.15] text-[#16291E]">
                  {d.facts.factsLabel.title}
                </h2>
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] mt-5 mb-5" />
                <p className="text-[#5A5F72] text-base leading-relaxed mb-7 max-w-sm">{d.facts.factsLabel.body}</p>
                <ul className="space-y-3.5">
                  {d.facts.chips.map((c, i) => (
                    <motion.li
                      key={c}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="size-5 shrink-0 text-[#3E8F5E]" aria-hidden />
                      <span className="text-[15px] font-semibold text-[#16291E]">{c}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Center — illustration */}
              {d.facts.factsImage && (
                <motion.div
                  className="lg:col-span-3"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
                    <Image
                      src={d.facts.factsImage}
                      alt=""
                      aria-hidden
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 80vw, 28vw"
                    />
                  </div>
                </motion.div>
              )}

              {/* Right — labeled card */}
              <div className={cn(d.facts.factsImage && "lg:col-span-5")}>
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-[0_24px_60px_-34px_rgba(4,120,87,0.30)] sm:p-3">
                  <dl className="divide-y divide-[#EEF0F2]">
                    {d.facts.rows.map((row, i) => (
                      <motion.div
                        key={row.label}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="px-5 py-5 sm:px-6"
                      >
                        <dt className="font-heading font-extrabold text-[#2F7549] text-sm uppercase tracking-[0.12em]">
                          {row.label}
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-relaxed text-[#5A5F72]">{row.value}</dd>
                      </motion.div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY IT WORKS ─────────────────────────────────────────── */}
      <section className="bg-white pt-8 lg:pt-10 pb-20 lg:pb-28">
        <div className={PX}>
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start lg:max-w-sm">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2F7549] mb-4">{d.why.eyebrow}</p>
                <h2 className="font-heading font-extrabold text-3xl sm:text-[2.2rem] leading-[1.15] text-[#16291E]">
                  {d.why.title}
                </h2>
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E] mt-5 mb-5" />
                <p className="text-[#5A5F72] text-base leading-relaxed">{d.why.body}</p>
                {d.why.note && (
                  <div className="mt-7 flex items-start gap-3.5 rounded-2xl border border-[#D7EADD] bg-[#EEF6F0] p-5">
                    <Award className="size-5 shrink-0 text-[#2F7549] mt-0.5" aria-hidden />
                    <p className="text-sm font-medium text-[#16291E] leading-relaxed">{d.why.note}</p>
                  </div>
                )}
                {d.growth?.secondary && (
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mt-7 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_24px_50px_-30px_rgba(4,120,87,0.35)]"
                  >
                    <Image
                      src={d.growth.secondary}
                      alt="Business growth"
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 100vw, 24rem"
                    />
                    <span className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-[#EEF6F0] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2F7549]">
                      <TrendingUp className="size-3.5" aria-hidden /> Growth
                    </span>
                  </motion.div>
                )}
              </div>

              <div
                className={cn(
                  "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10",
                  d.why.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2",
                )}
              >
                {d.why.items.map((b, index) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.title}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex flex-col"
                    >
                      <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#15402A] text-white mb-4 shadow-[0_10px_22px_-10px_rgba(4,120,87,0.6)] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-[22px]" strokeWidth={1.8} aria-hidden />
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
      <section className="bg-white py-20 lg:py-28">
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
