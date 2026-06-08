// âââ Types âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

export interface MarketSector {
  sector: string;
  currentMarket: string;
  forecast: string;
  opportunities: string;
}

export interface CountryHighlight {
  label: string;
  value: string;
}

export interface CountryOpportunity {
  title: string;
  description: string;
}

export interface CountryProjection {
  label: string;
  value: string;
}

export interface CountryMarketData {
  name: string;
  slug: string;
  flag: string;
  countryCode: string;
  tagline: string;
  overview: string;
  highlights: CountryHighlight[];
  projections: CountryProjection[];
  sectors: MarketSector[];
  growthDrivers: string[];
  marketStrengths: string[];
  highDemandSectors: string[];
  opportunitiesForPakistan: CountryOpportunity[];
  bannerImage?: string;
  detailedSections?: {
    title: string;
    content: string;
  }[];
}

export interface PakistanScopeItem {
  id: number;
  title: string;
  opportunities: string[];
  highDemandCountries: string;
  marketGrowth: string;
  whyPakistanFits: string[];
}

export interface PakistanTalentStat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface EntryStrategy {
  title: string;
  description: string;
}

// âââ Intro Content âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

export const introContent = {
  headline: "UK/Europe Tech Market Overview",
  subheadline: "UPTIB â Your Gateway to the UK & European Technology Markets",
  description:
    "UPTIB serves as a strategic bridge between Pakistani technology companies and high-growth markets across the United Kingdom and Europe. We provide market access, business development support, regulatory guidance, and strategic introductions to help companies expand internationally with confidence. Through our network of industry leaders, innovation hubs, investors, and government stakeholders, we enable Pakistani IT and AI firms to scale, secure partnerships, and unlock new commercial opportunities across Europe.",
  servicePillars: [
    {
      title: "B2B Matchmaking",
      description: "Facilitate B2B matchmaking between Pakistani and European tech companies",
      icon: "Handshake",
    },
    {
      title: "Trade Missions",
      description: "Organise AI & IT trade missions across Europe",
      icon: "Plane",
    },
    {
      title: "Regulatory Guidance",
      description: "Provide regulatory & market entry guidance for European markets",
      icon: "Scale",
    },
    {
      title: "Tech Partnerships",
      description: "Support partnerships with UK/EU tech firms",
      icon: "Link",
    },
    {
      title: "Innovation Networks",
      description: "Promote Pakistani companies through European innovation networks",
      icon: "Network",
    },
  ],
};

// âââ Country Market Data âââââââââââââââââââââââââââââââââââââââââââââââââââââ

export const countryData: Record<string, CountryMarketData> = {
  uk: {
    name: "United Kingdom",
    slug: "uk",
    flag: "ð¬ð§",
    countryCode: "GB",
    bannerImage: "/image/banners/tech-overview-uk.png",
    tagline: "Europe's AI & IT Services Hub",
    overview:
      "The UK is one of Europe's most advanced digital economies and a global leader in artificial intelligence adoption.",
    highlights: [
      { label: "IT Services", value: "$112.5B (2025)" },
      { label: "Software Dev", value: "$41.9B (2024)" },
      { label: "IT Projected", value: "$156.6B (2030)" },
      { label: "Cloud Computing", value: "$29B+ (2024)" },
      { label: "AI Sector", value: "Â£23.9B (2024)" },
      { label: "Managed Services", value: "$23.3B (2025)" },
      { label: "Data Centre", value: "$3.22B (2025)" },
    ],
    projections: [
      { label: "AI Economy", value: "Â£1T by 2035" },
      { label: "Cloud Market", value: "$55B by 2030" },
    ],
    sectors: [
      {
        sector: "Cloud Computing / SaaS",
        currentMarket: "USD 15â20 bn",
        forecast: "USD 50â60 bn by 2030",
        opportunities:
          "Cloud migration services, SaaS app development, multi-cloud management, DevOps & automation",
      },
      {
        sector: "FinTech / RegTech",
        currentMarket: "USD 10 bn (2024)",
        forecast: "CAGR 12â15%",
        opportunities:
          "Banking software, payment solutions, regulatory compliance platforms, blockchain solutions",
      },
      {
        sector: "Cybersecurity",
        currentMarket: "USD 8.5 bn (2024)",
        forecast: "USD 15 bn by 2030",
        opportunities:
          "Security audits, vulnerability assessment, penetration testing, managed security services",
      },
      {
        sector: "HealthTech / MedTech IT",
        currentMarket: "USD 5 bn",
        forecast: "Growth 15% CAGR",
        opportunities:
          "Telemedicine platforms, EHR/EMR software, AI diagnostics, data interoperability solutions",
      },
      {
        sector: "Artificial Intelligence",
        currentMarket: "Â£21 bn (~USD 28 bn, 2025)",
        forecast: "Â£1 trillion AI economy by 2035",
        opportunities:
          "AI software & model development, data annotation, AI consulting, predictive analytics, NLP services",
      },
      {
        sector: "Data Centre",
        currentMarket: "$3.22 bn (2025)",
        forecast: "$31.99 bn by 2031",
        opportunities:
          "Hyper-scale and colocation services, cloud hosting, infrastructure management",
      },
    ],
    growthDrivers: [
      "Strong AI startup ecosystem leadership in Europe",
      "Rising data centre investment (projected growth to Â£10 billion annually by 2029)",
      "Government focus on AI & digital transformation",
    ],
    marketStrengths: [
      "Strong AI ecosystem in London, Cambridge & Manchester",
      "High demand for outsourced IT services",
      "Mature startup & venture capital environment",
      "English-speaking business environment",
      "Strong government focus on AI & digital transformation",
    ],
    highDemandSectors: [
      "FinTech & RegTech",
      "HealthTech & AI diagnostics",
      "Cybersecurity",
      "GovTech & Smart Cities",
      "E-commerce & Digital Platforms",
      "Cloud & SaaS solutions",
    ],
    opportunitiesForPakistan: [
      {
        title: "Software Development Outsourcing",
        description: "Custom software, enterprise apps, and digital platforms for UK businesses",
      },
      {
        title: "AI Model Development & Data Services",
        description: "AI/ML solutions, data annotation, and predictive analytics",
      },
      {
        title: "IT Consulting & Digital Transformation",
        description: "Cloud migration, enterprise modernization, and digital strategy",
      },
      {
        title: "Dedicated Offshore Development Teams",
        description: "Scalable remote teams for ongoing product development",
      },
    ],
    detailedSections: [
      {
        title: "Artificial Intelligence",
        content:
          "The UK AI market is worth about Â£21 billion (USD 28 billion) in 2025 and is expected to grow substantially through the 2030s, with projections suggesting significant expansion toward a potential Â£1 trillion scale by 2035 in broader AI economy value.",
      },
      {
        title: "Cybersecurity",
        content:
          "The UK is Europe's largest cybersecurity market, with revenue estimated at about â¬10.36 billion (USD 11 billion) in 2025, expected to grow at around 6.3% CAGR (2025â2030).",
      },
      {
        title: "IT Services",
        content:
          "Estimated at $112.50 billion in 2025, with projections to reach $156.61 billion by 2030. Software Development valued at $41.9 billion in 2024, projected to reach $63.6 billion by 2030.",
      },
    ],
  },

  germany: {
    name: "Germany",
    slug: "germany",
    flag: "ð©ðª",
    countryCode: "DE",
    bannerImage: "/image/banners/tech-overview-germany.png",
    tagline: "Europe's Engineering & Enterprise IT Powerhouse",
    overview:
      "Germany is Europe's largest economy and a leader in Industry 4.0 and enterprise technology.",
    highlights: [
      { label: "IT Services", value: "$79.6B (2025)" },
      { label: "AI Market", value: "â¬9.04B (2025)" },
      { label: "AI Projected", value: "â¬23B (2030)" },
      { label: "Forecast IT Services", value: "$130.5B by 2031" },
    ],
    projections: [
      { label: "IT Services", value: "$130.5B by 2031" },
      { label: "AI Market", value: "â¬23B by 2030" },
    ],
    sectors: [
      {
        sector: "IT Services",
        currentMarket: "USD 79.6 bn (2025)",
        forecast: "USD 130.5 bn by 2031 (8.6% CAGR)",
        opportunities:
          "Enterprise software engineering, SAP & ERP services, systems integration",
      },
      {
        sector: "Artificial Intelligence",
        currentMarket: "â¬9.04 bn (2025)",
        forecast: "Significant expansion by 2030",
        opportunities:
          "AI-powered predictive maintenance, industrial AI, robotics, data analytics",
      },
      {
        sector: "Cybersecurity",
        currentMarket: "Major share of Europe's $76.2 bn market",
        forecast: "$194.4 bn (Europe) by 2033 (12.4% CAGR)",
        opportunities:
          "Security audits, compliance services, managed security, threat detection",
      },
      {
        sector: "Enterprise IT & ERP",
        currentMarket: "USD 30â40 bn",
        forecast: "Growth 10% CAGR",
        opportunities:
          "ERP implementation, SAP/Oracle consulting, enterprise integration, custom software",
      },
      {
        sector: "IoT & Smart Devices",
        currentMarket: "Part of Europe's USD 45 bn IoT market",
        forecast: "USD 85 bn (Europe) by 2030",
        opportunities:
          "Industrial IoT, smart factory solutions, connected devices, IoT data analytics",
      },
    ],
    growthDrivers: [
      "Industrial digitalisation (manufacturing, enterprise IT) drives demand for services and automation",
    ],
    marketStrengths: [
      "Advanced manufacturing sector",
      "Strong Mittelstand (SME) industrial base",
      "Demand for automation & AI integration",
      "High spending on enterprise IT",
    ],
    highDemandSectors: [
      "Industrial AI & Robotics",
      "Automotive Software",
      "IoT & Smart Factories",
      "Enterprise Cloud Migration",
      "Cybersecurity Compliance",
    ],
    opportunitiesForPakistan: [
      {
        title: "Enterprise Software Engineering",
        description: "Custom enterprise solutions for Germany's industrial sector",
      },
      {
        title: "AI-Powered Predictive Maintenance",
        description: "ML solutions for manufacturing and Industry 4.0",
      },
      {
        title: "SAP & ERP Services",
        description: "Implementation, consulting, and integration services",
      },
      {
        title: "Automotive Embedded Software",
        description: "Software development for the automotive industry",
      },
    ],
    detailedSections: [
      {
        title: "IT Services",
        content:
          "The Germany IT services market is valued at around USD 79.6 billion in 2025, with forecasts reaching USD 130.5 billion by 2031 at about 8.6% CAGR. Industrial digitalisation in manufacturing and enterprise IT is a key driver of demand.",
      },
      {
        title: "Artificial Intelligence",
        content:
          "Germany's AI market is estimated at about â¬9.04 billion (USD 9.96 billion) in 2025 with strong adoption in industry sectors. Broader European AI growth suggests significant expansion by 2030.",
      },
      {
        title: "Cybersecurity",
        content:
          "Germany has a significant share of Europe's cybersecurity market, which is expected to expand from USD 76.2 billion in 2025 to USD 194.4 billion by 2033 regionwide at 12.4% CAGR.",
      },
    ],
  },

  france: {
    name: "France",
    slug: "france",
    flag: "ð«ð·",
    countryCode: "FR",
    bannerImage: "/image/banners/tech-overview-france.png",
    tagline: "Industrial AI & Deep Tech Growth",
    overview:
      "France is investing heavily in AI, Industry 4.0, and digital transformation across public and private sectors.",
    highlights: [
      { label: "IT Services", value: "$81.7B (2025)" },
      { label: "AI Market", value: "$9.48B (2024)" },
      { label: "IT Projected", value: "$155B (2030)" },
      { label: "Forecast IT", value: "$230.1B by 2033" },
      { label: "AI Forecast", value: "$77.68B by 2032" },
    ],
    projections: [
      { label: "IT Services", value: "$230.1B by 2033" },
      { label: "AI Market", value: "$77.68B by 2032" },
    ],
    sectors: [
      {
        sector: "IT Services",
        currentMarket: "USD 81.7 bn (2025)",
        forecast: "USD 230.1 bn by 2033 (13.6% CAGR)",
        opportunities:
          "Digital consulting, systems integration, managed services, cloud transformation",
      },
      {
        sector: "Artificial Intelligence",
        currentMarket: "USD 9.48 bn (2024)",
        forecast: "USD 77.68 bn by 2032 (30.4% CAGR)",
        opportunities:
          "AI model development, industrial analytics, NLP, computer vision",
      },
      {
        sector: "Cybersecurity",
        currentMarket: "Significant share of Europe's market",
        forecast: "Europe: USD 194.4 bn by 2033 (12.4% CAGR)",
        opportunities:
          "Security operations, compliance automation, threat intelligence",
      },
    ],
    growthDrivers: [
      'Government programs such as "AI for Humanity" and France 2030 strongly support innovation',
      "Major global investments in AI infrastructure (e.g., Microsoft's multibillion commitments)",
    ],
    marketStrengths: [
      "Strong government-backed AI programs",
      "Industrial & manufacturing digitalisation",
      "Growing startup ecosystem (Paris tech scene)",
      "AI research & academic collaboration",
    ],
    highDemandSectors: [
      "Industrial Automation & AI",
      "Smart Manufacturing",
      "Aerospace & Defence Tech",
      "Green Energy Technology",
      "Cybersecurity",
    ],
    opportunitiesForPakistan: [
      {
        title: "Embedded Systems Development",
        description: "Solutions for industrial and aerospace applications",
      },
      {
        title: "AI-Driven Industrial Analytics",
        description: "Predictive analytics for manufacturing and logistics",
      },
      {
        title: "ERP & Digital Process Automation",
        description: "Enterprise automation and workflow optimization",
      },
      {
        title: "Custom Enterprise Software",
        description: "Tailored solutions for French enterprises",
      },
    ],
    detailedSections: [
      {
        title: "IT Services",
        content:
          "The France IT services market is expected to generate about USD 81.7 billion in revenue in 2025 and grow at a 13.6% CAGR to USD 230.1 billion by 2033.",
      },
      {
        title: "Artificial Intelligence",
        content:
          "France's AI market was around USD 9.48 billion in 2024, with projections to grow to about USD 77.68 billion by 2032, at roughly 30.4% CAGR â one of the fastest AI growth rates in Europe. Government programs like \"AI for Humanity\" and France 2030 strongly support innovation.",
      },
      {
        title: "Cybersecurity",
        content:
          "Wider European cybersecurity forecasts show substantial growth â Europe from USD 76.2 billion in 2025 to USD 194.4 billion by 2033 at 12.4% CAGR. France's share is significant alongside the UK and Germany.",
      },
    ],
  },

  spain: {
    name: "Spain",
    slug: "spain",
    flag: "ðªð¸",
    countryCode: "ES",
    bannerImage: "/image/banners/tech-overview-spain.png",
    tagline: "Rapid Digital Adoption & Cloud Growth",
    overview:
      "Spain's ICT market is experiencing rapid growth driven by strong public-private digital investment and infrastructure expansion.",
    highlights: [
      { label: "ICT Market", value: "$62.3B (2025)" },
      { label: "IT Services", value: "$53.2B (2025)" },
      { label: "ICT Projected", value: "$95B (2030)" },
      { label: "Digital Transform.", value: "$49B (2026)" },
      { label: "Cybersecurity", value: "$5.3B (2025)" },
    ],
    projections: [
      { label: "ICT Market", value: "$95B by 2030" },
      { label: "Cybersecurity", value: "$9.8B by 2030" },
    ],
    sectors: [
      {
        sector: "ICT Market",
        currentMarket: "USD 62.3 bn (2025)",
        forecast: "USD 97.7 bn by 2031 (7.6% CAGR)",
        opportunities:
          "Digital adoption, 5G deployment, broadband coverage, AI infrastructure",
      },
      {
        sector: "IT Services",
        currentMarket: "USD 53.2 bn (2025)",
        forecast: "Growing rapidly",
        opportunities:
          "Digital consulting, hybrid cloud, managed services, enterprise transformation",
      },
      {
        sector: "Cloud & Digital Transformation",
        currentMarket: "USD 49.0 bn (2026)",
        forecast: "USD 110.2 bn by 2031 (17.6% CAGR)",
        opportunities:
          "Cloud migration, SaaS solutions, hybrid IT, edge computing",
      },
      {
        sector: "Cybersecurity",
        currentMarket: "USD 5.3 bn (2025)",
        forecast: "USD 11.3 bn by 2034 (8.8% CAGR)",
        opportunities:
          "Managed security, cloud security, compliance tools, threat detection",
      },
      {
        sector: "Artificial Intelligence",
        currentMarket: "11.3% enterprise AI adoption (2024)",
        forecast: "AI/ML segments: 19%+ CAGR to 2031",
        opportunities:
          "AI integration, NLP, analytics platforms, data engineering, AI-powered automation",
      },
    ],
    growthDrivers: [
      "Strong public-private digital investment and infrastructure expansion",
      "High 5G and fibre connectivity coverage",
      "Cloud adoption and digital transformation across sectors",
      "HispanIA 2040 national AI strategy",
    ],
    marketStrengths: [
      "Rapid digital adoption across enterprises",
      "Growing infrastructure investment",
      "EU-supported digitalization programs",
      "Amazon's multibillion-euro data centre commitments",
    ],
    highDemandSectors: [
      "Cloud & Managed IT Services",
      "AI Solutions & Analytics",
      "Cybersecurity Services",
      "Enterprise Digital Transformation",
      "Data Centre & Infrastructure",
    ],
    opportunitiesForPakistan: [
      {
        title: "AI Solutions & Analytics",
        description: "AI integration, NLP, analytics platforms, data engineering",
      },
      {
        title: "Cloud & Managed IT Services",
        description: "Cloud migration, hybrid IT, DevOps, managed service delivery",
      },
      {
        title: "Cybersecurity Services",
        description: "Managed security, threat detection, compliance automation",
      },
      {
        title: "Enterprise Digital Transformation",
        description: "Custom software, systems integration, BI platforms",
      },
    ],
    detailedSections: [
      {
        title: "Total ICT Market",
        content:
          "The Spain ICT market was valued at approximately USD 62.3 billion in 2025, forecast to grow to about USD 97.7 billion by 2031 (7.6% CAGR). Key growth drivers include strong public-private digital investment, high 5G and fibre connectivity, and cloud adoption across sectors.",
      },
      {
        title: "Cloud & Digital Transformation",
        content:
          "Spain's digital transformation market was around USD 49.0 billion in 2026 and is expected to reach USD 110.2 billion by 2031 at 17.6% CAGR. Cloud & edge computing accounted for 25.6% share in 2025, signalling strong growth in infrastructure modernization.",
      },
      {
        title: "AI Adoption",
        content:
          "About 11.3% of Spanish enterprises used AI technologies in 2024, up from 9.2% in 2023. Spain launched HispanIA 2040, its national AI strategy, advancing AI skills, infrastructure, and compliance support. AI/ML segments projected 19%+ CAGR to 2031.",
      },
      {
        title: "Cybersecurity",
        content:
          "Spain's cybersecurity market reached approximately USD 5.3 billion in 2025, forecast to grow to about USD 11.3 billion by 2034 at 8.8% CAGR, driven by digital transformation, GDPR & NIS2 compliance, and increasing cyberattack prevalence.",
      },
    ],
  },

  netherlands: {
    name: "Netherlands",
    slug: "netherlands",
    flag: "ð³ð±",
    countryCode: "NL",
    bannerImage: "/image/banners/tech-overview-netherlands.png",
    tagline: "Europe's Digital Hub & Data Centre Gateway",
    overview:
      "The Netherlands is a highly connected digital ecosystem with strong cloud adoption across enterprise and public sectors.",
    highlights: [
      { label: "ICT Sector", value: "$80â90B (2024)" },
      { label: "IT Services", value: "$19.2B (2025)" },
      { label: "IT Projected", value: "$35B (2030)" },
      { label: "Digital Transform.", value: "$35.5B (2025)" },
      { label: "Cybersecurity", value: "$2.35B (2025)" },
      { label: "Data Centre", value: "$1.23B (2024)" },
      { label: "Cloud Revenue", value: "$11.66B (2024)" },
    ],
    projections: [
      { label: "Cloud Market", value: "$18B by 2030" },
      { label: "Data Centre", value: "$3.5B by 2030" },
    ],
    sectors: [
      {
        sector: "ICT / Digital Sector",
        currentMarket: "$80â90 bn (total turnover)",
        forecast: "Continued expansion",
        opportunities:
          "Mature digital economy with strong services base",
      },
      {
        sector: "IT Services",
        currentMarket: "$19.2 bn (2025)",
        forecast: "$39.1 bn by 2031 (12.6% CAGR)",
        opportunities:
          "Consulting, integration, managed services, hybrid cloud transformation",
      },
      {
        sector: "Digital Transformation",
        currentMarket: "$35.5 bn (2025)",
        forecast: "$74.1 bn by 2031 (13.0% CAGR)",
        opportunities:
          "Cloud & edge computing, digital twin, edge-AI solutions",
      },
      {
        sector: "Cybersecurity",
        currentMarket: "$2.35 bn (2025)",
        forecast: "$3.79 bn by 2031 (8.3% CAGR)",
        opportunities:
          "Cloud-based security solutions, regulatory compliance (NIS2)",
      },
      {
        sector: "Data Centre & Infrastructure",
        currentMarket: "$1.23 bn (2024)",
        forecast: "$3.39 bn by 2030 (18.4% CAGR)",
        opportunities:
          "Hyperscale cloud services, AI data centres, sovereign infrastructure",
      },
      {
        sector: "AI Data Centre",
        currentMarket: "$0.57 bn (2025)",
        forecast: "$8.51 bn by 2031 (56.9% CAGR)",
        opportunities:
          "AI-optimized infrastructure, sovereign cloud, AI deployments",
      },
    ],
    growthDrivers: [
      "Public-sector digitalisation and hybrid cloud adoption",
      "Enterprise digital transformation initiatives",
      "EU funding and infrastructure expansion",
      "Regulatory drivers (EU NIS2)",
    ],
    marketStrengths: [
      "Highly connected digital ecosystem",
      "Fast-growing cloud & AI data centres",
      "Strong enterprise adoption",
      "$3.5 billion venture capital invested (2024)",
      "Top tech investment hub in Europe",
    ],
    highDemandSectors: [
      "AI & Data Infrastructure",
      "Cloud & Digital Transformation",
      "Cybersecurity & Compliance",
      "Enterprise IT Services",
      "Data Centres & Hyperscale Infrastructure",
    ],
    opportunitiesForPakistan: [
      {
        title: "AI & Data Infrastructure",
        description: "Scalable AI solutions, hybrid cloud services, sovereign hosting",
      },
      {
        title: "Cloud & Digital Transformation",
        description: "Cloud adoption for enterprises and government",
      },
      {
        title: "Cybersecurity & Compliance",
        description: "Advanced security services driven by EU NIS2",
      },
      {
        title: "Enterprise IT Services",
        description: "Systems integration, managed services, digital consulting",
      },
    ],
    detailedSections: [
      {
        title: "Overall ICT Market",
        content:
          "The Dutch digital sector generates estimated $80-90 billion in total turnover, with around $34 billion from digital services and $50 billion from digital goods. Venture capital investment reached about $3.5 billion in 2024, making the Netherlands among the top tech investment hubs in Europe.",
      },
      {
        title: "IT Services Market",
        content:
          "The Netherlands IT services market is forecast to grow from USD 19.17 billion in 2025 to USD 39.11 billion by 2031, at a 12.62% CAGR. Growth drivers include public-sector digitalisation, hybrid cloud adoption, and enterprise digital transformation.",
      },
      {
        title: "Data Centre & AI Infrastructure",
        content:
          "The Netherlands data centre market was valued at around USD 1.23 billion in 2024, projected to reach USD 3.39 billion by 2030 at 18.4% CAGR. The AI-optimized infrastructure market is expected to grow from USD 0.57 billion in 2025 to USD 8.51 billion by 2031 (56.9% CAGR).",
      },
      {
        title: "Cloud Computing",
        content:
          "Cloud revenue was projected to reach USD 11.66 billion in 2024, with near-universal broadband and early 5G adoption strengthening cloud and edge deployments. Cloud-based security solutions lead the cybersecurity market with over 65% share.",
      },
    ],
  },

  switzerland: {
    name: "Switzerland",
    slug: "switzerland",
    flag: "ð¨ð­",
    countryCode: "CH",
    bannerImage: "/image/banners/tech-overview-switzerland.png",
    tagline: "Secure & High-Compliance IT Market",
    overview:
      "Switzerland's stable economy and strong regulatory environment create demand for secure, high-quality IT solutions.",
    highlights: [
      { label: "ICT Market", value: "$44.7B (2025)" },
      { label: "IT/AI Services", value: "$2.6B (2025)" },
      { label: "ICT Projected", value: "$58.8B (2030)" },
      { label: "Cybersecurity", value: "$1.04B (2026)" },
      { label: "Data Centre", value: "$1.02B (2024)" },
    ],
    projections: [
      { label: "ICT Market", value: "$58.8B by 2030" },
      { label: "Cybersecurity", value: "$1.8B by 2030" },
    ],
    sectors: [
      {
        sector: "ICT Market",
        currentMarket: "USD 44.7 bn (2025)",
        forecast: "USD 58.8 bn by 2030 (5.6% CAGR)",
        opportunities:
          "Cloud solutions, data governance, sovereign infrastructure",
      },
      {
        sector: "IT / AI Services",
        currentMarket: "USD 2.6 bn (2025)",
        forecast: "USD 4.7 bn by mid-2030s (6.5â7% CAGR)",
        opportunities:
          "AI analytics, automation, customer engagement, operational efficiency",
      },
      {
        sector: "Cybersecurity",
        currentMarket: "USD 1.04 bn (2026)",
        forecast: "USD 1.43 bn by 2031 (6.7% CAGR)",
        opportunities:
          "Cloud security, incident response, AI-enhanced threat detection, compliance services",
      },
      {
        sector: "Data Centre",
        currentMarket: "USD 1.02 bn (2024)",
        forecast: "USD 1.99 bn by 2030 (11.7% CAGR)",
        opportunities:
          "Colocation, sovereign data hosting, hyperscale expansion in Zurich and Geneva",
      },
    ],
    growthDrivers: [
      "Digital transformation & cloud adoption across finance, healthcare, logistics",
      "AI & advanced analytics investments (e.g., Microsoft's USD 400M AI expansion)",
      "Strong regulatory environment & data sovereignty requirements",
      "IT specialist shortage of 40,000 professionals by 2030",
    ],
    marketStrengths: [
      "Stable & growing economy",
      "Focus on secure, high-compliance IT solutions",
      "Strong financial sector demand",
      "Data privacy emphasis",
      "Preference for local data infrastructure",
    ],
    highDemandSectors: [
      "AI & Analytics for Finance/Healthcare",
      "Cloud & Sovereign Infrastructure",
      "Cybersecurity & Compliance",
      "Data Centre & Colocation",
    ],
    opportunitiesForPakistan: [
      {
        title: "Cloud Transformation",
        description: "Cloud migration and sovereign cloud solutions for Swiss enterprises",
      },
      {
        title: "AI Solutions Integration",
        description: "AI/ML for finance, healthcare, and enterprise analytics",
      },
      {
        title: "Managed Cybersecurity",
        description: "Security operations, compliance, and threat detection",
      },
      {
        title: "Enterprise Software",
        description: "High-value integration and managed services contracts",
      },
    ],
    detailedSections: [
      {
        title: "IT Services & Talent Shortage",
        content:
          "Switzerland's IT services market was valued at around USD 2.6 billion in 2025, forecast to expand to approximately USD 4.7 billion by mid-2030s at about 6.5-7% CAGR. Switzerland faces a tightening IT specialist labour market, with an estimated shortage of 40,000 IT professionals by 2030.",
      },
      {
        title: "Data Centre & Infrastructure",
        content:
          "Estimated colocation revenue USD 638 million in 2025, rising to USD 964 million by 2030 (8.6% CAGR). The overall Swiss data centre market projected to double from USD 1.02 billion (2024) to USD 1.99 billion by 2030 at 11.7% CAGR.",
      },
      {
        title: "AI & Advanced Analytics",
        content:
          "Investments by leading global cloud providers (e.g., Microsoft's USD 400 million AI & cloud expansion) underscore the importance of AI, machine learning, and data platforms. Switzerland's strong regulatory environment and data privacy emphasis support growth in cybersecurity and cloud services.",
      },
    ],
  },

  poland: {
    name: "Poland",
    slug: "poland",
    flag: "ðµð±",
    countryCode: "PL",
    bannerImage: "/image/banners/tech-overview-poland.png",
    tagline: "Central Europe's Fastest-Growing IT Market",
    overview:
      "Poland's IT and ICT sector is one of Central Europe's fastest-growing technology markets.",
    highlights: [
      { label: "ICT Market", value: "$28.7B (2024)" },
      { label: "IT Exports", value: "$16.85B (2023)" },
      { label: "ICT Projected", value: "$42B (2030)" },
      { label: "Data Centre", value: "$1.16B (2024)" },
      { label: "Cybersecurity", value: "~$1B (2025)" },
    ],
    projections: [
      { label: "ICT Market", value: "$42B by 2030" },
      { label: "IT Exports", value: "$25B by 2028" },
    ],
    sectors: [
      {
        sector: "Total ICT Market",
        currentMarket: "USD 28.7 bn (2024)",
        forecast: "Continued expansion",
        opportunities:
          "Steady digital adoption, government support for IT sector",
      },
      {
        sector: "IT Services & Exports",
        currentMarket: "USD 16.85 bn (exports, 2023)",
        forecast: "USD 31 bn+ (2025)",
        opportunities:
          "Software outsourcing, enterprise IT, SaaS development, systems integration",
      },
      {
        sector: "Data Centre & Cloud",
        currentMarket: "USD 1.16 bn (2024)",
        forecast: "USD 2.78 bn by 2030 (15.7% CAGR)",
        opportunities:
          "Hyperscale expansion, cloud consulting, migration services",
      },
      {
        sector: "Cybersecurity",
        currentMarket: "~USD 1 bn (2025)",
        forecast: "Higher by 2030",
        opportunities:
          "NIS2 compliance, managed detection & response, SOC services, penetration testing",
      },
      {
        sector: "AI & Digital Adoption",
        currentMarket: "Growing with strategic partnerships",
        forecast: "Government-backed AI hub expansion",
        opportunities:
          "Predictive analytics, ML models, AI integration with enterprise software",
      },
    ],
    growthDrivers: [
      "Fastest-growing IT sector in Central Europe",
      "Cost-effective nearshore delivery hub",
      "EU directives (NIS2) driving cybersecurity spending",
      "Government focus on AI development",
    ],
    marketStrengths: [
      "Rapidly expanding export market",
      "Agile delivery models",
      "Central European position",
      "Extensive English-speaking tech workforce",
      "30% of IT services market is outsourcing",
    ],
    highDemandSectors: [
      "Software Development & Outsourcing",
      "Cloud & Data Centre Infrastructure",
      "Cybersecurity & Compliance",
      "AI & Analytics",
      "Enterprise IT & SaaS",
    ],
    opportunitiesForPakistan: [
      {
        title: "Software Development & Outsourcing",
        description: "Rapidly expanding export market for remote delivery and joint ventures",
      },
      {
        title: "Cloud & Next-Gen Infrastructure",
        description: "Cloud and data centre consulting, migration, and managed services",
      },
      {
        title: "Cybersecurity Solutions",
        description: "Security solutions and expertise for regulatory compliance",
      },
      {
        title: "AI & Analytics",
        description: "Government and private sector AI collaboration opportunities",
      },
    ],
    detailedSections: [
      {
        title: "IT Services & Exports",
        content:
          "Poland's IT services exports rose to about USD 16.85 billion by 2023, growing at roughly 25% year-on-year. Projections estimate the IT services segment could reach over USD 31 billion by 2025. Outsourcing accounts for roughly 30% of the Polish IT services market.",
      },
      {
        title: "Cloud & Data Centre",
        content:
          "Poland's data centre market was valued at about USD 1.16 billion in 2024, expected to reach USD 2.78 billion by 2030 at 15.7% CAGR. Independent analysis positions Poland's broader cloud and data centre segment at USD 6.7 billion, with hyperscale deployments across Warsaw and Krakow.",
      },
      {
        title: "Cybersecurity",
        content:
          "Poland's cybersecurity spending grew about 25% in 2025 to nearly USD 1 billion, marking strong demand for secure digital infrastructure. EU directives like NIS2 and rising cyber threats are key drivers.",
      },
      {
        title: "AI & Digital Adoption",
        content:
          "Strategic partnerships with global cloud providers and government focus are positioning Poland as an AI growth hub. National efforts including funding initiatives for AI development support long-term ecosystem growth.",
      },
    ],
  },

  "baltic-states": {
    name: "Baltic States",
    slug: "baltic-states",
    flag: "ðªðªð±ð¹ð±ð»",
    countryCode: "EE",
    bannerImage: "/image/banners/tech-overview-baltic-states.png",
    tagline: "Digital Leaders of Northern Europe",
    overview:
      "The Baltic states â Estonia, Lithuania, and Latvia â are among Europe's most digitally advanced economies with strong IT export orientation.",
    highlights: [
      { label: "Estonia ICT", value: "â¬10B (2024)" },
      { label: "Lithuania IT", value: "â¬3.5B (2025)" },
      { label: "Lithuania Proj.", value: "â¬5.5B (2030)" },
      { label: "Latvia ICT", value: "$6.5B (2024)" },
    ],
    projections: [
      { label: "Estonia Cloud", value: "$499M by 2030" },
      { label: "Lithuania IT", value: "â¬5.5B by 2030" },
    ],
    sectors: [
      {
        sector: "Estonia â ICT Sector",
        currentMarket: "â¬10 bn ICT; software â¬3.3â3.5 bn; IT services â¬6.1 bn",
        forecast: "IT outsourcing: USD 156M by 2030; Public cloud: USD 499M by 2030 (22.7% CAGR)",
        opportunities:
          "E-governance, digital identity, FinTech (260+ startups), cybersecurity, cloud & SaaS",
      },
      {
        sector: "Lithuania â Software & SaaS",
        currentMarket: "â¬3.5 bn software dev; USD 138.9M SaaS (2025)",
        forecast: "SaaS: USD 384M by 2030 (22.6% CAGR); Data centres: 52.3 MW by 2030",
        opportunities:
          "Custom software, enterprise apps, cloud migration, FinTech/RegTech, cybersecurity",
      },
      {
        sector: "Latvia â ICT & Cloud",
        currentMarket: "USD 6.5 bn ICT; IT services USD 292M (2025)",
        forecast: "Public cloud: USD 628.8M by 2030 (22.9% CAGR); Software: â¬1.7 bn (2025)",
        opportunities:
          "Cloud & SaaS implementation, enterprise software, cybersecurity, FinTech platforms",
      },
    ],
    growthDrivers: [
      "Estonia: Global digital leader with highest unicorns per capita (Skype, Wise, Bolt)",
      "Lithuania: Leading EU fintech hub with 3 unicorns and 1,000+ tech companies",
      "Latvia: Strong ICT exports exceeding â¬1 billion annually",
      "All: EU regulatory alignment, high digital skills, rapid cloud adoption",
    ],
    marketStrengths: [
      "World-class e-governance (Estonia's e-Estonia model)",
      "Vibrant startup ecosystems across all three countries",
      "High digital skills and ICT specialist workforce",
      "EU member states with strong regulatory alignment",
      "Strong export orientation",
    ],
    highDemandSectors: [
      "Software Development & IT Services",
      "Cloud & Public Cloud Solutions",
      "Cybersecurity & Compliance",
      "FinTech & Digital Finance",
      "E-Governance & Digital Public Services",
      "Data Analytics & AI Integration",
    ],
    opportunitiesForPakistan: [
      {
        title: "Software & IT Services",
        description: "Custom enterprise software, mobile/web apps, SaaS product development",
      },
      {
        title: "Cloud Solutions",
        description: "Cloud architecture, migration, and optimization for SMEs and government",
      },
      {
        title: "Cybersecurity & Compliance",
        description: "Security assessments, managed security, GDPR & NIS2 compliance",
      },
      {
        title: "FinTech & RegTech",
        description: "Payment platforms, blockchain, digital lending, MiCA compliance",
      },
    ],
    detailedSections: [
      {
        title: "Estonia - Digital Leader",
        content:
          "Estonia's ICT sector accounts for approximately 9-11% of national GDP. Industry turnover is around â¬10 billion, with more than half from international clients. The public cloud market projected to reach USD 499 million by 2030 at 22.7% CAGR. Estonia's FinTech sector valued at around â¬15.2 billion with 260+ fintech startups.",
      },
      {
        title: "Lithuania - Balanced Tech Ecosystem",
        content:
          "Lithuania's software development industry is estimated at about â¬3.5 billion in 2025. SaaS market expected to reach USD 384 million by 2030 (22.6% CAGR). The country hosts 3 unicorns and over 1,000 tech companies, with ICT employment surging roughly 80% since 2020.",
      },
      {
        title: "Latvia - Export-Oriented ICT Hub",
        content:
          "Latvia's ICT sector contributed about 6.7% of GDP in 2024, with total turnover estimated around USD 6.5 billion. Digital exports exceed â¬1 billion annually. Public cloud projected to grow from USD 224.3 million in 2025 to USD 628.8 million by 2030 (22.9% CAGR). Over 7,000 ICT companies operate domestically.",
      },
    ],
  },
};

// âââ Europe-Wide Market Data âââââââââââââââââââââââââââââââââââââââââââââââââ

export const europeWideData: MarketSector[] = [
  {
    sector: "Enterprise IT & ERP",
    currentMarket: "Germany & UK: USD 30â40 bn",
    forecast: "Growth 10% CAGR",
    opportunities:
      "ERP implementation, SAP/Oracle consulting, enterprise integration, custom software solutions",
  },
  {
    sector: "IoT & Smart Devices",
    currentMarket: "Europe IoT: USD 45 bn",
    forecast: "USD 85 bn by 2030",
    opportunities:
      "Industrial IoT, smart city solutions, connected devices, IoT data analytics",
  },
  {
    sector: "Green Tech / Clean Energy IT",
    currentMarket: "Europe energy tech: USD 10 bn",
    forecast: "CAGR 12â14%",
    opportunities:
      "Energy management software, smart grids, IoT for sustainability, carbon tracking platforms",
  },
  {
    sector: "Artificial Intelligence",
    currentMarket: "Europe: USD 94.7 bn (2025)",
    forecast: "Europe: USD 753.5 bn (2033)",
    opportunities:
      "AI software & model development, data annotation, AI consulting, predictive analytics, NLP services",
  },
];

// âââ Pakistan IT Scope in Europe âââââââââââââââââââââââââââââââââââââââââââââ

export const pakistanITScope: PakistanScopeItem[] = [
  {
    id: 1,
    title: "Artificial Intelligence (AI) & Data Analytics",
    opportunities: [
      "AI model development, machine learning, natural language processing (NLP) solutions",
      "Data analytics, predictive modelling, business intelligence dashboards",
      "AI-powered process automation for finance, healthcare, and logistics",
    ],
    highDemandCountries: "UK, France, Netherlands, Germany",
    marketGrowth: "AI adoption across European enterprises: 10â20% CAGR",
    whyPakistanFits: [
      "Strong expertise in software development and AI algorithms",
      "Cost-effective talent pool with proven delivery capabilities",
    ],
  },
  {
    id: 2,
    title: "Cloud & Digital Transformation Services",
    opportunities: [
      "Cloud migration (AWS, Azure, Google Cloud)",
      "Hybrid cloud and multi-cloud strategy implementation",
      "Enterprise SaaS and digital transformation consulting",
    ],
    highDemandCountries: "Netherlands, Germany, UK, Spain",
    marketGrowth: "Cloud & digital transformation: 12â17% CAGR to 2030",
    whyPakistanFits: [
      "Experienced in system integration, cloud architecture, and DevOps services",
      "Ability to deliver cost-efficient managed services for SMEs and large enterprises",
    ],
  },
  {
    id: 3,
    title: "Cybersecurity & Compliance",
    opportunities: [
      "Managed security services, SOC, and incident response",
      "GDPR & NIS2 compliance consulting for European enterprises",
      "Cyber risk assessments, penetration testing, and threat detection",
    ],
    highDemandCountries: "Netherlands, Germany, Switzerland, UK",
    marketGrowth: "Cybersecurity sector: 8â11% CAGR across Europe",
    whyPakistanFits: [
      "Availability of trained cybersecurity professionals",
      "Experience providing remote managed security and compliance solutions",
    ],
  },
  {
    id: 4,
    title: "Enterprise IT Services & Software Development",
    opportunities: [
      "Custom ERP/CRM software, FinTech and InsurTech applications",
      "Mobile and web application development for enterprise clients",
      "Systems integration, workflow automation, and digital consulting",
    ],
    highDemandCountries: "UK, Germany, France, Spain",
    marketGrowth: "IT services market: 6â13% CAGR across European countries",
    whyPakistanFits: [
      "Proven track record in software outsourcing and B2B enterprise projects",
      "Ability to scale teams quickly for project-based requirements",
    ],
  },
  {
    id: 5,
    title: "Data Centre & IT Infrastructure Services",
    opportunities: [
      "AI-ready data centre solutions, edge computing integration",
      "Infrastructure-as-a-Service (IaaS), virtualization, and cloud hosting",
      "Network and IT infrastructure consulting",
    ],
    highDemandCountries: "Netherlands, Switzerland, Germany",
    marketGrowth: "Data centre investments: 15â26% CAGR in key EU hubs",
    whyPakistanFits: [
      "Capacity to provide remote monitoring, virtualization, and system administration",
      "Experience in setting up and maintaining cloud infrastructure for global clients",
    ],
  },
  {
    id: 6,
    title: "Nearshore IT Delivery & Talent Solutions",
    opportunities: [
      "Talent augmentation for European companies facing IT skill shortages",
      "Project-based teams for software, AI, and cloud projects",
      "Remote DevOps, testing, QA, and software development",
    ],
    highDemandCountries: "UK, Germany, Netherlands, Switzerland",
    marketGrowth: "IT talent gaps in Europe drive outsourcing growth: 15% CAGR",
    whyPakistanFits: [
      "Skilled English-speaking workforce with competitive rates",
      "Time-zone compatible for UK/Netherlands and partially for Germany/France",
    ],
  },
];

// âââ Entry Strategies ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

export const entryStrategies: EntryStrategy[] = [
  {
    title: "Partnership with European Tech Councils",
    description:
      "e.g., UK–Pakistan Trades & Investment Board to access local networks and introductions",
  },
  {
    title: "Sector Specialization",
    description:
      "Focus on AI, cloud, or cybersecurity to build credibility in specific verticals",
  },
  {
    title: "Compliance Readiness",
    description:
      "Ensure GDPR, NIS2, and other EU regulations are strictly followed",
  },
  {
    title: "Showcase Success Stories",
    description:
      "Enterprise IT projects, managed services, and AI solutions as references",
  },
  {
    title: "Leverage EU Funding & Incubators",
    description:
      "Collaborate with accelerators, innovation hubs, and government-supported programs",
  },
];

// âââ Pakistan Talent Data ââââââââââââââââââââââââââââââââââââââââââââââââââââ

export const pakistanTalentStats: PakistanTalentStat[] = [
  {
    value: "300,000+",
    numericValue: 300000,
    suffix: "+",
    label: "IT Professionals",
  },
  {
    value: "70,000+",
    numericValue: 70000,
    suffix: "+",
    label: "IT Graduates Annually",
  },
  {
    value: "1 Million",
    numericValue: 1000000,
    suffix: "",
    label: "Active Freelancers",
  },
  {
    value: "12,000+",
    numericValue: 12000,
    suffix: "+",
    label: "IT Companies & Startups",
  },
  {
    value: "$3.2 Billion",
    numericValue: 3.2,
    suffix: "B",
    label: "Annual IT Exports",
  },
  {
    value: "40â60%",
    numericValue: 50,
    suffix: "%",
    label: "Lower Costs Than Europe",
  },
];

export const pakistanTalentSections = {
  workforce: {
    title: "Large and Growing IT Workforce",
    description:
      "Pakistan has one of the largest and fastest-growing technology talent pools in South Asia with over 300,000 IT professionals.",
    skills: [
      "Software Engineering",
      "Artificial Intelligence & Machine Learning",
      "Cloud Computing",
      "Cybersecurity",
      "Mobile & Web Development",
      "Data Analytics",
      "Blockchain Technologies",
    ],
    note: "Pakistan's IT workforce is highly competitive due to strong English proficiency and global outsourcing experience.",
  },
  education: {
    title: "Strong Talent Pipeline from Universities",
    stats: [
      "70,000â75,000 IT graduates annually",
      "226,000 students enrolled in IT disciplines",
      "Thousands more trained in AI, cloud, and cybersecurity through government programs",
    ],
  },
  freelancing: {
    title: "Global Freelancing Powerhouse",
    stats: [
      "1 million freelancers working globally",
      "Ranked among top freelance markets worldwide",
    ],
    specializations: [
      "Software Development",
      "Web & Mobile Applications",
      "Digital Marketing",
      "UI/UX Design",
      "AI & Data Services",
    ],
  },
  ecosystem: {
    title: "Expanding IT Companies and Startup Ecosystem",
    stats: [
      "12,000+ IT companies and startups operating across the country",
      "2,000+ registered IT companies serving international markets",
      "Technology parks in multiple cities supporting startups and SMEs",
    ],
    techHubs: ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Peshawar"],
  },
  costAdvantage: {
    title: "Competitive Cost Advantage",
    comparisons: [
      { role: "Senior Software Engineer", saving: "40â60% lower cost than Europe" },
      { role: "Development Teams", saving: "30â50% lower operational cost" },
    ],
    note: "Remote delivery model widely adopted, making Pakistan a strong partner for European IT outsourcing.",
  },
  exports: {
    title: "Export Growth and Global Potential",
    stats: [
      "$3.2 billion IT exports in 2024",
      "Monthly exports exceeding $400 million in 2026",
      "Potential to reach $15â18 billion in IT exports",
    ],
  },
  collaboration: {
    title: "Strategic Opportunity for UK and Europe",
    areas: [
      "AI and machine learning development",
      "Software engineering and product development",
      "FinTech and digital banking solutions",
      "Cloud migration and DevOps services",
      "Cybersecurity services",
      "Business Process Outsourcing (BPO)",
    ],
  },
  governmentSupport: [
    {
      name: "Pakistan Software Export Board (PSEB)",
      description:
        "Mandated to increase the export of software and IT services, providing support in certification, marketing, and office space.",
    },
    {
      name: "Ignite - National Technology Fund",
      description:
        "Initiative of MoITT designed to fuel innovation in startups, deep tech, and Artificial Intelligence.",
    },
    {
      name: "Pakistan Software Houses Association (P@SHA)",
      description:
        "Primary trade association for IT and ITeS industry, acting as a bridge between industry and government.",
    },
  ],
};

// âââ Country Summary Table âââââââââââââââââââââââââââââââââââââââââââââââââââ

export const countrySummary = [
  {
    country: "United Kingdom",
    slug: "uk",
    opportunities: "AI & ML solutions, Cloud migration & SaaS, Enterprise IT / FinTech software",
    keyDrivers: "Largest European IT market; high investment in AI; strong startup ecosystem",
  },
  {
    country: "Germany",
    slug: "germany",
    opportunities: "Industrial IoT & Enterprise IT, Cloud & Hybrid IT, Cybersecurity & compliance",
    keyDrivers: "Largest continental economy; high enterprise digital adoption; Industry 4.0 focus",
  },
  {
    country: "France",
    slug: "france",
    opportunities: "AI / Deep Tech, Digital transformation consulting, Cloud & managed services",
    keyDrivers: "Growing AI ecosystem (Paris hub); government incentives; digital modernization demand",
  },
  {
    country: "Netherlands",
    slug: "netherlands",
    opportunities: "Cloud & Digital Transformation, Cybersecurity, Data centre & infrastructure",
    keyDrivers: "Digital hub; fast-growing cloud & AI data centres; strong enterprise adoption",
  },
  {
    country: "Switzerland",
    slug: "switzerland",
    opportunities: "AI & Analytics for finance/healthcare, Cloud & sovereign infrastructure, Cybersecurity",
    keyDrivers: "Stable economy; high-compliance IT focus; financial sector demand",
  },
  {
    country: "Spain",
    slug: "spain",
    opportunities: "Cloud migration & hybrid IT, Digital transformation, AI-enabled analytics",
    keyDrivers: "Rapid digital adoption; growing infrastructure investment; EU digitalization programs",
  },
  {
    country: "Poland",
    slug: "poland",
    opportunities: "Software outsourcing, Enterprise IT & SaaS, Cybersecurity & managed services",
    keyDrivers: "Fastest-growing IT in Central Europe; cost-effective nearshore; talent expansion",
  },
  {
    country: "Baltic States",
    slug: "baltic-states",
    opportunities: "E-governance, FinTech, Cybersecurity, Cloud & SaaS, Software development",
    keyDrivers: "Digital leaders; strong startup ecosystems; EU-aligned; export-oriented",
  },
];

// âââ Helper ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

export const allCountrySlugs = Object.keys(countryData);
