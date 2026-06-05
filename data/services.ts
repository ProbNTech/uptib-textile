import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "marketing-sales",
    eyebrow: "Services · Marketing & Sales",
    title: "Reach UK buyers and grow your exports",
    cardTitle: "Marketing & Sales",
    cardBlurb:
      "We put Pakistani manufacturers in front of UK buyers — profiles, intelligence, matchmaking and membership.",
    summary:
      "We make Pakistani manufacturers visible, credible and reachable to UK buyers.",
    primaryCta: "Become a member",
    primaryHref: "/contact?topic=sell&service=marketing-sales",
    secondaryCta: "Book a consultation",
    secondaryHref: "/contact?topic=service&service=marketing-sales",
    icon: "marketing-sales",
    whatItIs:
      "We make Pakistani manufacturers visible, credible and reachable to UK buyers — and we generate and qualify the buyer demand that turns into orders.",
    overview: [
      "Most Pakistani exporters sell one container at a time to an importer, with thin margins and no brand recognition. We change that. UPTIB runs a structured exporter-acquisition programme that connects you directly with UK buyers, distributors, retailers, wholesalers and e-commerce channels — backed by hands-on support for market entry, compliance and lead generation.",
      "Because we also run the UK-facing sourcing business, your membership is not just a listing. It is a place in the supplier pool we actively buy from on behalf of real UK clients — so marketing and live demand pull in the same direction.",
    ],
    whatWeDo: [
      "Professional profile & branding — your products, capabilities and certifications, packaged for a UK audience.",
      "Market intelligence — UK trends, certification requirements, import rules and demand forecasts.",
      "B2B matchmaking — pre-qualified meetings with buyers, distributors and procurement teams.",
      "Digital campaigns — LinkedIn, email and Facebook outreach to UK decision-makers.",
      "Events — monthly webinars and the UK–Pak Textile Export Forum.",
      "Directory listing — your company in the showcase UK buyers browse.",
      "Market-entry support — compliance, labelling, packaging and customs guidance.",
    ],
    benefits: [
      "Direct introductions to UK retail chains, importers, wholesalers and e-commerce sellers.",
      "Regular UK market intelligence — trends, certifications, import rules, demand forecasts.",
      "Pre-qualified B2B meetings with buyers, distributors and procurement teams.",
      "Brand visibility through trade events, the buyer directory and industry reports.",
    ],
    phases: [
      {
        name: "Phase 1",
        title: "Awareness",
        body: "LinkedIn outreach to CEOs and export managers; Facebook campaigns across Faisalabad, Karachi, Lahore and Sialkot; industry email to chambers and trade-fair lists. Lead magnet: the 'UK Textile Market Entry Guide 2026'.",
      },
      {
        name: "Phase 2",
        title: "Lead generation",
        body: "Monthly exporter webinars and the quarterly UK–Pak Textile Export Forum, with product showcases and live matchmaking between Pakistani exporters and UK buyers.",
      },
      {
        name: "Phase 3",
        title: "Conversion",
        body: "Qualified interest becomes membership — increasingly pulled by real buyer demand from our UK sourcing side, not cold outreach.",
      },
    ],
    membership: [
      {
        tier: "Basic",
        price: "Pricing on request",
        includes:
          "Company profile listing · buyer-directory access · monthly market reports.",
        bestFor: "First-time / testing exporters.",
      },
      {
        tier: "Professional",
        price: "Pricing on request",
        includes:
          "Everything in Basic + B2B matchmaking · buyer introductions · trade-event participation · lead-generation support.",
        bestFor: "Actively pursuing UK buyers.",
        featured: true,
      },
      {
        tier: "Premium",
        price: "Pricing on request",
        includes:
          "Everything in Professional + a dedicated UK market advisor · buyer-sourcing campaigns · UK representation · featured promotion.",
        bestFor: "A managed UK presence.",
      },
    ],
    callout: {
      tone: "blue",
      title: "Why membership beats a directory listing",
      body: "Because we run the UK-facing sourcing business too, a UPTIB membership is not just a profile — it is a place in the supplier pool we actually buy from on behalf of real UK clients, with market intelligence and qualified introductions working for you between enquiries.",
    },
    faqs: [
      {
        q: "What do I get as a member?",
        a: "A profile in front of UK buyers, market intelligence, matchmaking, a directory listing and — crucially — a place in the pool we source from for live orders.",
      },
      {
        q: "I've never exported to the UK — can you help?",
        a: "Yes — we guide first-time exporters through compliance, labelling, packaging and customs.",
      },
      {
        q: "Do you help with Amazon?",
        a: "Yes — see E-commerce & Warehouse: account setup, listings and fulfilment.",
      },
    ],
  },
  {
    slug: "ecommerce-warehouse",
    eyebrow: "Services · E-commerce & Warehouse",
    title: "Sell online — and store close to your customers",
    cardTitle: "E-commerce & Warehouse",
    cardBlurb:
      "Sell on Amazon, and store & ship from UK warehousing close to customers.",
    summary:
      "Reach UK and international shoppers directly, with the storage and fulfilment to back it up.",
    primaryCta: "Start selling on Amazon",
    primaryHref: "/contact?topic=service&service=ecommerce-warehouse",
    secondaryCta: "Talk to us about fulfilment",
    secondaryHref: "/contact?topic=service&service=ecommerce-warehouse",
    icon: "ecommerce-warehouse",
    whatItIs:
      "Reach UK and international shoppers directly, with the storage and fulfilment to back it up. We handle the hard part of e-commerce from Pakistan.",
    overview: [
      "The UK is Europe's largest e-commerce market and the world's third-largest online retail market — £127 billion+ in annual sales, 62+ million online shoppers, and over 30% of all retail sold online. Amazon UK alone draws 400+ million monthly visits. UK buyers expect next-day delivery, which makes UK-based warehousing essential for online success.",
      "Instead of selling a container once to an importer, our programme lets you build your own UK brand, sell directly to consumers and increase margins by 30–100%. We set you up on Amazon and other marketplaces, ship and store your stock in UK warehousing, then pick, pack and fulfil — end-to-end, modular, so you take only what you need.",
    ],
    whatWeDo: [
      "Amazon seller account creation and setup.",
      "Product listing creation and optimisation.",
      "Amazon store and brand page setup.",
      "Account management and ongoing support.",
      "Product image, title and description guidance.",
      "PPC advertising and customer-review management.",
    ],
    extraLists: [
      {
        title: "Warehousing & fulfilment",
        items: [
          "Secure UK warehousing and storage.",
          "Container receiving and inventory management.",
          "Pick & pack and contract fulfilment.",
          "Amazon FBA prep and store-and-ship.",
          "Order-to-cash and returns management.",
        ],
      },
      {
        title: "Direct e-commerce & brand",
        items: [
          "Dedicated Shopify store with UK payment gateway.",
          "Google Shopping, Facebook & Instagram advertising.",
          "Email marketing campaigns.",
          "Trademark and brand-registration support.",
        ],
      },
    ],
    marketplaces: [
      "Amazon UK",
      "Amazon EU (DE/FR/IT/ES)",
      "Shopify",
      "eBay UK",
      "TikTok Shop",
      "Etsy",
    ],
    marketRows: [
      { label: "UK e-commerce sales (annual)", value: "£127bn+" },
      { label: "UK online shoppers", value: "62m+" },
      { label: "Amazon UK monthly visits", value: "400m+" },
      { label: "Typical margin improvement", value: "30–100%" },
    ],
    process: [
      {
        step: 1,
        title: "UK market entry",
        body: "UK business-setup and VAT guidance, Amazon UK seller registration, product compliance and trademark/brand-registration support.",
      },
      {
        step: 2,
        title: "UK warehousing",
        body: "Stock ships from Pakistan into our partner warehouses — container receiving, storage, inspection, labelling and pick-and-pack.",
      },
      {
        step: 3,
        title: "Amazon UK programme",
        body: "Seller-account and Brand Store setup, listing optimisation, professional photography, SEO and PPC, plus FBA for Prime delivery.",
      },
      {
        step: 4,
        title: "Direct e-commerce",
        body: "A dedicated Shopify store with UK payment gateway, digital marketing and Google/Facebook/Instagram campaigns.",
      },
      {
        step: 5,
        title: "Europe expansion",
        body: "Scale into Amazon Germany, France, Italy and Spain, plus B2B wholesale distribution.",
      },
    ],
    processTitle: "From UK setup to Europe — managed end-to-end",
    processEyebrow: "Our solution",
    callout: {
      tone: "green",
      title: "Margin lives close to the customer",
      body: "The traditional chain — manufacturer → importer → wholesaler → retailer → consumer — leaks margin at every step. Selling direct and storing in the UK (manufacturer → UK warehouse → Amazon/Shopify → consumer) can lift margins by 30–100%, depending on category and brand positioning.",
    },
  },
  {
    slug: "buying-house",
    eyebrow: "Services · Buying House (Outsourcing)",
    title: "Source textiles from Pakistan — without the risk",
    cardTitle: "Buying House (Outsourcing)",
    cardBlurb:
      "Your outsourced Pakistan procurement — source, sample, inspect and deliver, de-risked.",
    summary:
      "Your outsourced Pakistan procurement department, with one accountable UK-based partner.",
    primaryCta: "Request a quote",
    primaryHref: "/contact?topic=source&service=buying-house",
    secondaryCta: "Send us your brief",
    secondaryHref: "/contact?topic=source&service=buying-house",
    icon: "buying-house",
    whatItIs:
      "Your outsourced Pakistan procurement department. Tell us what you need; we find the right factory, control the quality, handle the paperwork and deliver to the UK. You deal with one accountable, UK-based partner.",
    overview: [
      "Sourcing from a new country is mostly risk — the wrong factory, a sample that doesn't match the bulk, quality that drifts mid-production, paperwork that stalls at customs. We absorb that risk. UPTIB acts as your procurement department in Pakistan: one accountable, UK-based point of contact across pricing, production, quality control and export documentation.",
      "Why Pakistan: duty-free GSP+ access, world-class cotton, large-scale capacity, recognised strength in towelling, bedding, sportswear and uniforms, and competitive pricing. The most valuable thing we sell is the confidence that what arrives matches what you ordered.",
    ],
    whatWeDo: [
      "We capture your requirement in full and match it to vetted manufacturers.",
      "We arrange samples and secure your written approval before bulk.",
      "We negotiate competitive pricing without compromising quality.",
      "We inspect raw materials, in-line, at midline and pre-shipment to your AQL.",
      "We handle documentation and coordinate freight to UK delivery.",
    ],
    process: [
      {
        step: 1,
        title: "Brief & quote",
        body: "We capture your requirement in full — product, fabric, thread count/GSM, sizes, quantities, certifications, target price, packaging and delivery date.",
      },
      {
        step: 2,
        title: "Supplier match",
        body: "We match your brief to the right manufacturer(s) from our vetted network.",
      },
      {
        step: 3,
        title: "Sampling & approval",
        body: "We arrange samples, manage revisions, and secure your written approval before any bulk commitment.",
      },
      {
        step: 4,
        title: "Price & order",
        body: "We negotiate competitive pricing without compromising quality, and place the order.",
      },
      {
        step: 5,
        title: "Production monitoring",
        body: "We inspect at roughly 40–50% completion — catching issues while there's still time to fix them.",
      },
      {
        step: 6,
        title: "Final quality audit",
        body: "We carry out pre-shipment inspection to your agreed AQL standard. Nothing ships until it passes.",
      },
      {
        step: 7,
        title: "Documentation & delivery",
        body: "We handle the paperwork and coordinate freight through to UK delivery (see Logistics).",
      },
    ],
    waysToWork: [
      {
        title: "Trial / single order",
        body: "Test Pakistan, and test us, on one defined project.",
      },
      {
        title: "Repeat / programme sourcing",
        body: "We become your ongoing Pakistan procurement function.",
      },
      {
        title: "Quality-assurance only",
        body: "You have a factory; we provide independent inspection.",
      },
    ],
    benefits: [
      "Independent, on-the-ground inspection — not the factory's own assurances.",
      "Multi-stage checks: raw material, in-line, midline at 40–50%, and final pre-shipment to AQL.",
      "Sample approval before bulk, with supplier-performance tracking.",
      "A deep enough supplier pool to offer alternatives if a maker can't deliver.",
    ],
    callout: {
      tone: "navy",
      title: "Quality control isn't a step in our process — it is the product.",
      body: "The most valuable thing we sell is the confidence that what arrives matches what you ordered: checked against your approved sample at every stage, by our own people on the ground.",
    },
    faqs: [
      {
        q: "How do I start?",
        a: "Send a brief or request a quote; we return suitable factories, samples and pricing.",
      },
      {
        q: "What's the minimum order?",
        a: "From 50–100 pcs with specialist makers to several hundred per size/colour for bulk bedding and towelling.",
      },
      {
        q: "How is quality guaranteed?",
        a: "Independent on-the-ground inspection against your approved sample — in-line, midline and final pre-shipment to AQL.",
      },
      {
        q: "Can you ship and clear customs?",
        a: "Yes — see Logistics: freight, customs, documentation and IOR/EOR.",
      },
    ],
  },
  {
    slug: "logistics",
    eyebrow: "Services · Logistics",
    title: "From a Pakistani factory to your UK door",
    cardTitle: "Logistics",
    cardBlurb:
      "Freight, customs clearance, export documentation and Importer/Exporter of Record setup.",
    summary:
      "We move the goods and handle the paperwork — so a low-cost origin becomes a low-hassle one.",
    primaryCta: "Talk to us about logistics",
    primaryHref: "/contact?topic=service&service=logistics",
    icon: "logistics",
    whatItIs:
      "We move the goods and handle the paperwork — so a low-cost origin becomes a low-hassle one.",
    overview: [
      "A low-cost origin only helps if the goods actually arrive — on time, cleared and correctly documented. We coordinate freight, customs and the full export-documentation stack so that landing product from Pakistan is as easy as buying domestically.",
      "And we build the GSP+ duty-free advantage straight into your landed price — a direct, recurring saving over many competing origins.",
    ],
    whatWeDo: [
      "Freight coordination (typically FOB Karachi or Port Qasim) with shipment visibility to the UK.",
      "Customs clearance, UK and Europe.",
      "Export documentation — commercial invoices, packing lists, certificates of origin and GSP+ duty-free paperwork.",
      "Importer & Exporter of Record (IOR/EOR) set-up in the UK & Europe.",
      "Route-to-market, representation and distribution.",
    ],
    benefits: [
      "Shipment visibility from the Pakistani port through to UK delivery.",
      "Reliable freight partners on FOB Karachi / Port Qasim terms.",
      "Full export-documentation handling, shared across all your orders.",
      "IOR/EOR setup so you can sell into the UK and Europe compliantly.",
    ],
    callout: {
      tone: "green",
      title: "The GSP+ advantage",
      body: "Pakistan's preferential trade status gives qualifying Pakistani textiles duty-free entry into the UK — a direct, recurring cost saving we build into your landed price, and a real edge over many competing origins.",
    },
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const serviceSlugs = services.map((s) => s.slug);
