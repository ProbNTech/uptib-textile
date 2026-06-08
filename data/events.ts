export interface Event {
  slug: string;
  title: string;
  category: "London" | "Pakistan" | "Europe" | "UPTIB";
  tag: string;
  status: "upcoming" | "past";
  date: string;
  dateISO: string;
  time?: string;
  location: string;
  venue?: string;
  price?: string;
  image: string;
  officialLink?: string;
  excerpt: string;
  body: string[];
  agenda?: { time: string; title: string }[];
  speakers?: { name: string; title: string; image?: string }[];
  relatedSlugs?: string[];
}

export const events: Event[] = [

  /* ------------------------------------------------------------------ */
  /*  Pakistan — Government-Level IT & Tech Events 2026                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "nextgen-digital-summit-karachi-2026",
    title: "NextGen Digital Summit 2026",
    category: "Pakistan",
    tag: "Summit",
    status: "upcoming",
    date: "February 25–26, 2026",
    dateISO: "2026-02-25",
    location: "Karachi, Pakistan",
    image: "/image/Events & Engagements/nextgen.webp",
    officialLink: "https://alliancepakistan.org/event/nextgen-digital-summit/",
    excerpt:
      "Organized with regulatory support to define Pakistan's roadmap for 5G readiness, smart cities, and digital governance.",
    body: [
      "The NextGen Digital Summit 2026 is Pakistan's premier platform for policymakers, regulators, and industry leaders to shape the nation's digital future. Organized with the direct involvement of Pakistan's telecommunications regulator and allied government bodies, the summit sets the strategic direction for the country's 5G readiness programme, full-fibre connectivity rollout, and smart city infrastructure development.",
      "The two-day event in Karachi brings together ministers, senior regulators, global telecom executives, and technology innovators to deliberate on the policy, investment, and infrastructure requirements needed to make Pakistan's next-generation digital ambitions a reality. Key tracks include smart city planning for Karachi and Lahore, rural and peri-urban connectivity, cybersecurity governance for critical national infrastructure, and international best practices in digital economy development.",
      "For UK–Pakistan technology partners, the NextGen Digital Summit provides direct access to senior Pakistani government decision-makers overseeing the nation's most consequential technology investment programmes. UPTIB facilitates UK delegation participation and can introduce members to senior officials attending the summit.",
    ],
    relatedSlugs: [
      "asocio-digital-summit-2026",
      "itcn-asia-karachi-2026",
      "innovation-2026",
    ],
  },
  {
    slug: "itcn-asia-karachi-2026",
    title: "28th ITCN Asia Karachi 2026",
    category: "Pakistan",
    tag: "Expo",
    status: "upcoming",
    date: "September 22–24, 2026",
    dateISO: "2026-09-22",
    location: "Expo Centre Karachi",
    venue: "Expo Centre Karachi",
    image: "/image/Events & Engagements/ITCN.webp",
    officialLink: "https://itcnasia.com/karachi/",
    excerpt:
      "Held under the patronage of the SIFC and MoITT, featuring the Global CISO Summit and AI Beyond Borders conferences alongside 3,500+ global brands.",
    body: [
      "ITCN Asia is Pakistan's largest and most internationally recognised IT and telecommunications exhibition, organised under the patronage of the Special Investment Facilitation Forum (SIFC) and the Ministry of IT and Telecommunication (MoITT). The 28th edition in 2026 brings together over 3,500 global technology brands and expects more than 70,000 trade visitors across three days at the Expo Centre Karachi.",
      "The summit's premium conference programme includes the Global CISO Summit — a closed-door convening of chief information security officers from Pakistan's largest organisations and international cybersecurity firms — and AI Beyond Borders, a high-level forum on how artificial intelligence is reshaping global technology markets and Pakistan's role within them. Both events attract C-suite decision-makers who represent the most commercially valuable contacts for UK technology companies seeking Pakistani enterprise clients.",
      "ITCN Asia's government endorsement from both SIFC and MoITT gives the event an authority that no other Pakistani technology event matches, making it the single most important annual event for UK companies at any stage of their Pakistan market entry strategy.",
    ],
    relatedSlugs: [
      "asocio-digital-summit-2026",
      "ideas-2026",
      "nextgen-digital-summit-karachi-2026",
    ],
  },
  {
    slug: "asocio-digital-summit-2026",
    title: "ASOCIO Digital Summit 2026",
    category: "Pakistan",
    tag: "Summit",
    status: "upcoming",
    date: "November 2026",
    dateISO: "2026-11-01",
    location: "Islamabad / Lahore, Pakistan",
    image: "/image/Events & Engagements/ASOCIO.webp",
    officialLink: "https://www.asocio.org/",
    excerpt:
      "Pakistan hosts this premier regional inter-governmental summit for the first time, bringing technology leadership from 24 ASOCIO member countries.",
    body: [
      "The ASOCIO Digital Summit 2026 marks a historic milestone for Pakistan's technology sector — the country has won the bid to host this premier regional event for the first time, bringing delegations from all 24 member nations of the Asian-Oceanian Computing Industry Organisation to Pakistan. ASOCIO members include Australia, Japan, China, Malaysia, Singapore, India, South Korea, and 17 other high-growth technology markets.",
      "The summit will deliberate on digital policy frameworks, AI governance standards, cross-border data flows, intellectual property protection for digital products, and innovation ecosystem development across the Asia-Pacific and Oceanian region. Pakistan's successful hosting bid represents an unprecedented international endorsement of the country's technology sector maturity.",
      "For UK technology companies with Asia-Pacific regional ambitions, ASOCIO 2026 — hosted in Pakistan — creates a unique convergence opportunity: simultaneous access to senior technology relationships across 24 markets through a single event, in a country where UPTIB provides exceptional institutional support for UK delegations.",
    ],
    relatedSlugs: [
      "itcn-asia-karachi-2026",
      "ideas-2026",
      "nextgen-digital-summit-karachi-2026",
    ],
  },
  {
    slug: "ideas-2026",
    title: "IDEAS 2026 – Cyber & Emerging Tech Track",
    category: "Pakistan",
    tag: "Conference",
    status: "upcoming",
    date: "November 24–27, 2026",
    dateISO: "2026-11-24",
    location: "Karachi Expo Centre",
    venue: "Karachi Expo Centre",
    image: "/image/Events & Engagements/IDEAS2026.webp",
    officialLink: "https://ideaspakistan.gov.pk/",
    excerpt:
      "Organized by the Ministry of Defence Production with a dedicated 'Cyber & Emerging Tech' pavilion covering AI, quantum computing, and cybersecurity.",
    body: [
      "IDEAS — the International Defence Exhibition & Seminar — is Pakistan's most internationally prominent defence and security technology event, held biennially at Karachi Expo Centre under the direct authority of the Ministry of Defence Production. The 2026 edition significantly expands its scope to feature a dedicated 'Cyber & Emerging Tech' track and pavilion, addressing AI, quantum computing, cybersecurity infrastructure, secure communications, and dual-use technology development.",
      "The Cyber & Emerging Tech track brings together cyber defence specialists, AI researchers, quantum technology developers, and critical infrastructure security professionals from Pakistan and internationally. The format combines exhibition of cutting-edge technologies with high-level conference sessions examining the commercial and geopolitical dimensions of emerging technology in defence, government, and critical national infrastructure contexts.",
      "For UK technology companies in cybersecurity, AI safety, quantum technologies, and secure communications — sectors with both commercial and defence applications — IDEAS 2026 provides a rare opportunity to engage with Pakistani government technology decision-makers at the most senior levels. UPTIB can facilitate appropriate introductions for qualified member companies seeking to participate in the B2G meeting programme.",
    ],
    relatedSlugs: [
      "asocio-digital-summit-2026",
      "itcn-asia-karachi-2026",
      "digigov-expo-2026",
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  United Kingdom — Government-Level IT Events 2026 (London)          */
  /* ------------------------------------------------------------------ */
  {
    slug: "innovation-2026",
    title: "Innovation 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "March 24–25, 2026",
    dateISO: "2026-03-24",
    location: "ExCeL London",
    venue: "ExCeL London",
    image: "/image/Events & Engagements/innovation_2026.webp",
    officialLink: "https://innovation.globalgovernmentforum.com/",
    excerpt:
      "Co-hosted by the Cabinet Office and DSIT, focusing on AI-driven transformation of public services and digital governance across government.",
    body: [
      "Innovation 2026 is co-hosted by the UK Cabinet Office, the Civil Service, and the Department for Science, Innovation and Technology (DSIT), making it one of the most significant government-convened technology events in the UK annual calendar. The forum brings together senior civil servants, technology industry leaders, and international government delegations to explore how artificial intelligence, data, and emerging technologies are fundamentally transforming the delivery of public services.",
      "The 2026 programme focuses on three transformative agendas: the practical implementation of AI across government departments at enterprise scale, the redesign of public service delivery models around citizen-centric digital experiences, and the governance and accountability frameworks required to deploy technology responsibly across the public sector. High-level keynotes from Cabinet ministers and DSIT technology leads are complemented by practical case studies from early-adopter government departments.",
      "For the UK–Pakistan technology partnership, Innovation 2026 is a rare opportunity to engage directly with the UK government's digital strategy. Pakistani government technology officials gain insight into the UK's public sector digitalisation approach, while UK technology companies can position themselves at the heart of the government innovation agenda at the highest levels.",
    ],
    relatedSlugs: [
      "govtech-summit-2026",
      "building-the-smarter-state-2026",
      "digigov-expo-2026",
    ],
  },
  {
    slug: "govtech-summit-2026",
    title: "The GovTech Summit 2026",
    category: "London",
    tag: "Summit",
    status: "upcoming",
    date: "April 16, 2026",
    dateISO: "2026-04-16",
    location: "Westminster, London",
    venue: "Westminster, London",
    image: "/image/Events & Engagements/govtech.webp",
    officialLink: "https://www.govtechsummit.eu/",
    excerpt:
      "Connects senior government innovators with technology pioneers to reform public service procurement and accelerate digital transformation.",
    body: [
      "The GovTech Summit 2026 is convened in Westminster to advance the agenda of government technology transformation, bringing together permanent secretaries, chief digital officers, government chief technology officers, and the pioneering companies modernising public services across the UK and internationally. The summit is widely regarded as the UK government technology sector's highest-quality convening — focused on outcomes rather than announcements.",
      "The programme centres on the most pressing challenges facing government technology programmes in 2026: scaling AI adoption beyond pilot programmes and into operational delivery, modernising legacy systems without disrupting critical public services, building digital and data skills capacity within government organisations, and designing procurement frameworks that enable genuine innovation rather than entrench incumbent suppliers.",
      "The GovTech Summit's Westminster location and its access to the most senior figures in UK government technology make it the most direct engagement point for companies seeking to understand and shape the UK public sector market. For Pakistani companies with government-scale technology solutions — in digital identity, AI-powered services, data analytics, or citizen platforms — the summit provides critical insight into UK government procurement priorities.",
    ],
    relatedSlugs: [
      "innovation-2026",
      "building-the-smarter-state-2026",
      "government-transformation-summit-2026",
    ],
  },
  {
    slug: "building-the-smarter-state-2026",
    title: "Building the Smarter State 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "May 13, 2026",
    dateISO: "2026-05-13",
    location: "London",
    image: "/image/Events & Engagements/Building_smater_state.webp",
    officialLink: "https://www.techuk.org/what-we-deliver/flagship-and-sponsored-events/building-the-smarter-state-2026.html",
    excerpt:
      "techUK's flagship conference for public sector DDaT leaders, backed by the Central Government and focused on AI-driven public service delivery.",
    body: [
      "Building the Smarter State is techUK's flagship annual conference for senior public sector digital, data, and technology (DDaT) leaders. The 2026 edition — themed 'Delivering World-Leading Public Services' — brings together government chief technology officers, heads of digital transformation, and senior programme managers alongside the technology companies driving the most impactful public sector programmes in the UK.",
      "techUK, as the UK's premier technology trade association and the voice of the UK tech sector to government, designs the conference to provide DDaT leaders with access to cutting-edge solutions, peer case studies, and authoritative research. Speakers include senior DSIT officials, technology leaders from NHS Digital, HMRC, and the Government Digital Service (GDS), providing delegates with direct insight into the government's technology agenda and investment priorities.",
      "For Pakistani government technology officials and Pakistani companies with public sector technology expertise, Building the Smarter State is one of the most substantive access points to the UK's GovTech ecosystem. The conference's proximity to government technology buying decisions makes it a high-priority event for any organisation seeking to position itself within the UK public sector market.",
    ],
    relatedSlugs: [
      "innovation-2026",
      "govtech-summit-2026",
      "digigov-expo-2026",
    ],
  },
  {
    slug: "government-transformation-summit-2026",
    title: "Government Transformation Summit 2026",
    category: "London",
    tag: "Summit",
    status: "upcoming",
    date: "June 25, 2026",
    dateISO: "2026-06-25",
    location: "Westminster, London",
    venue: "Westminster, London",
    image: "/image/Events & Engagements/gov_transformation_summit_2026.webp",
    officialLink: "https://summit.government-transformation.com/",
    excerpt:
      "Unites 200+ senior government leaders in data and digital delivery to reimagine the modern state through responsible AI and technology.",
    body: [
      "The Government Transformation Summit is one of the most exclusive gatherings in the UK public sector calendar, convening over 200 of the most senior government transformation leaders from across Whitehall and the devolved administrations for a focused day of strategic dialogue in Westminster. Unlike broader industry conferences, the summit is explicitly designed for senior government decision-makers, creating a uniquely candid environment for peer-to-peer discussion of transformation challenges and breakthroughs.",
      "The 2026 programme examines the fundamental architecture of modern government: how data becomes the operating system of a responsive state, how AI can augment government decision-making without compromising democratic accountability, and how digital delivery capabilities can be built and sustained within government organisations operating under significant resource and legacy constraints. Speakers include senior figures who have led landmark transformation programmes within UK and international governments.",
      "For UPTIB and its members, the Government Transformation Summit provides strategic intelligence on where the UK government's digital transformation agenda is heading over the next three to five years — essential context for Pakistani companies and government officials seeking to build relevant capabilities and position themselves effectively within the UK–Pakistan technology partnership.",
    ],
    relatedSlugs: [
      "govtech-summit-2026",
      "building-the-smarter-state-2026",
      "digigov-expo-2026",
    ],
  },
  {
    slug: "digigov-expo-2026",
    title: "DigiGov Expo 2026",
    category: "London",
    tag: "Expo",
    status: "upcoming",
    date: "September 23–24, 2026",
    dateISO: "2026-09-23",
    location: "ExCeL London",
    venue: "ExCeL London",
    image: "/image/Events & Engagements/DigiGovExpo.webp",
    officialLink: "https://www.digital-government.co.uk/",
    excerpt:
      "Developed with DSIT and GDS, featuring an international 'Government Village' showcasing digital projects and actionable strategies for digital public services.",
    body: [
      "DigiGov Expo is the UK's leading exhibition and conference dedicated to digital government transformation, developed in partnership with the Department for Science, Innovation and Technology (DSIT) and the Government Digital Service (GDS). The 2026 edition at ExCeL London features a dedicated Government Village where UK government departments showcase live digital transformation projects alongside hundreds of technology companies presenting solutions across the full spectrum of public sector technology.",
      "The conference programme focuses on actionable strategies rather than aspirational visions, with sessions examining successful case studies from UK government, lessons from international digital government leaders including Estonia, Singapore, and Denmark, and practical frameworks for measuring and demonstrating the value of technology investment in public services. The international Government Village brings together digital government delegations from across Europe, the Middle East, and Asia-Pacific.",
      "DigiGov Expo's combination of exhibition scale, conference depth, and international reach makes it the most comprehensive annual showcase of digital government globally. For Pakistani government officials and technology companies, the Expo provides both inspiration and practical intelligence on what world-class digital government looks like in operational practice — and the technology partnerships that make it possible.",
    ],
    relatedSlugs: [
      "government-transformation-summit-2026",
      "building-the-smarter-state-2026",
      "govtech-summit-2026",
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Europe — Major Tech Events & Conferences 2026                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "emtech-europe-2026",
    title: "EmTech Europe 2026",
    category: "Europe",
    tag: "Conference",
    status: "upcoming",
    date: "March 19–20, 2026",
    dateISO: "2026-03-19",
    location: "Athens, Greece",
    venue: "Megaron – The Athens Concert Hall",
    image: "/image/Events & Engagements/europe/emtech_europe.jpg",
    officialLink: "https://emtecheurope.com/",
    excerpt:
      "Unlocking Innovation in an Age of Intelligent Technologies — where emerging tech meets leadership, business, and responsibility.",
    body: [
      "EmTech Europe 2026 is a two-day conference in Athens bringing together global experts to explore how emerging technologies transition from breakthrough to real-world impact, with a focus on AI, synthetic biology, climate tech, and quantum computing — examining both opportunities and ethical implications.",
      "The programme is structured around five thematic pillars: The State of Intelligence covering AI, robotics, quantum, and synthetic biology; From Breakthrough to Adoption exploring industry applications across shipping, healthcare, and finance; The Greek Moment highlighting Greece's role in ethical innovation; The Ethics of Scale addressing fairness, sustainability, and governance; and Tomorrow, Operationalized examining emerging horizons for leaders.",
      "Notable speakers include Shakir Mohamed from Google DeepMind, Turing Award winner Joseph Sifakis, Kira Radinsky of Diagnostic Robotics, Paul Cheek from MIT, and Rohit Patel from Meta. For UPTIB delegates, EmTech Europe provides a high-level European forum for engaging with the intersection of policy, technology ethics, and industrial application.",
    ],
    relatedSlugs: [
      "vivatech-2026",
      "world-summit-ai-2026",
      "ai-for-good-summit-2026",
    ],
  },
  {
    slug: "tech-eu-summit-london-2026",
    title: "Tech.eu Summit London 2026",
    category: "London",
    tag: "Summit",
    status: "upcoming",
    date: "April 21–22, 2026",
    dateISO: "2026-04-21",
    location: "London",
    image: "/image/Events & Engagements/europe/tech_eu_summit.jpg",
    officialLink: "https://tech.eu/event/",
    excerpt:
      "Connecting Europe's tech and startup ecosystem — an annual gathering fostering real conversations and meaningful connections.",
    body: [
      "The Tech.eu Summit London 2026 is an annual gathering designed to bring together Europe's technology and startup communities. Scheduled for April 21–22 in London, the summit focuses on fostering real conversations and meaningful connections within the tech ecosystem.",
      "The event covers key technology sectors including Fintech, Healthtech, SaaS, Deeptech, Mobility, Sustainability, and Artificial Intelligence, providing attendees with comprehensive insights into the European technology landscape.",
      "For UK–Pakistan technology partners, the Tech.eu Summit offers direct access to Europe's most dynamic startup ecosystems, investor networks, and enterprise technology leaders — creating opportunities for cross-border collaboration and market entry strategies.",
    ],
    relatedSlugs: [
      "london-tech-week-2026",
      "ai-summit-london-2026",
      "vivatech-2026",
    ],
  },
  {
    slug: "oslo-tech-show-2026",
    title: "Oslo Tech Show 2026",
    category: "Europe",
    tag: "Expo",
    status: "upcoming",
    date: "May 6–7, 2026",
    dateISO: "2026-05-06",
    location: "Oslo, Norway",
    venue: "Nova Spektrum",
    image: "/image/Events & Engagements/europe/oslo_tech_show.jpg",
    officialLink: "https://oslotechshow.com/",
    excerpt:
      "Norway's largest event and meeting place for Hi-Tech and transformation through new technology — Tech Dreams Become Reality.",
    body: [
      "The Oslo Tech Show is Norway's largest technology event, bringing together over 150 exhibitors under the banner 'Tech Dreams Become Reality'. The two-day event at Nova Spektrum features keynote presentations, free exhibitions, networking events, awards ceremonies, and hands-on demonstrations of AI and emerging technologies.",
      "The show covers six integrated expos: AI & Big Data, Cybersecurity & Cloud, Cloud Infrastructure, Data Centre Solutions, DevOps, and Mobile Technology including 5G, 6G, IoT, and FinTech. Admission is completely free, making it one of the most accessible major technology events in the Nordic region.",
      "Notable speakers include Norway's first astronaut Jannicke Mikkelsen, Brigadier General Patrick Huston on FBI AI Task Force matters, Norway's Minister for Digitalization Karianne Oldernes Tung, and Yngvar Ugland, named Nordic AI Professional of the Year. The Oslo Tech Show provides UPTIB members with a gateway to the thriving Nordic technology ecosystem.",
    ],
    relatedSlugs: [
      "stockholm-tech-show-2026",
      "techex-europe-2026",
      "gitex-ai-europe-2026",
    ],
  },
  {
    slug: "stockholm-tech-show-2026",
    title: "Stockholm Tech Show 2026",
    category: "Europe",
    tag: "Expo",
    status: "upcoming",
    date: "May 26–27, 2026",
    dateISO: "2026-05-26",
    location: "Stockholm, Sweden",
    venue: "Kistamässan",
    image: "/image/Events & Engagements/europe/stockholm_tech_show.jpg",
    officialLink: "https://stockholmtechshow.se/",
    excerpt:
      "The Nordic region's leading meeting place, event and exhibition for digital transformation — featuring 250+ exhibitors and 5,000+ attendees.",
    body: [
      "The Stockholm Tech Show is the Nordic region's leading meeting place for digital transformation, featuring 250+ exhibitors and attracting 5,000+ attendees. The event showcases innovations across six specialised expos covering AI & Big Data, Cybersecurity & Cloud Security, Cloud Computing, Data Centre Infrastructure, DevOps, and Mobile Technology.",
      "The programme includes keynote presentations from Dr. David Barnes on AI ethics and digital transformation, Jeff Sundheim from Google on AI and personalisation, Dame Dawn Childs on data centre innovation, Ambassador Jan Knutsson representing NATO, and David Jacoby delivering live hacking demonstrations.",
      "With free exhibition tickets available, the Stockholm Tech Show provides UPTIB members with an accessible entry point to the Nordic enterprise technology market and a platform for building relationships with Scandinavian IT leaders and decision-makers.",
    ],
    relatedSlugs: [
      "oslo-tech-show-2026",
      "techex-europe-2026",
      "gitex-ai-europe-2026",
    ],
  },
  {
    slug: "infosecurity-europe-2026",
    title: "Infosecurity Europe 2026",
    category: "London",
    tag: "Expo",
    status: "upcoming",
    date: "June 2–4, 2026",
    dateISO: "2026-06-02",
    location: "ExCeL London",
    venue: "ExCeL London",
    image: "/image/Events & Engagements/europe/infosecurity_europe.jpg",
    officialLink: "https://www.infosecurityeurope.com/",
    excerpt:
      "Europe's leading cybersecurity event — Building a Safer Cyber World, bringing together 13,000+ professionals and 300+ exhibitors.",
    body: [
      "Infosecurity Europe is the continent's premier cybersecurity event, attracting over 13,000 information security professionals, 300+ exhibitors, and delivering 200+ hours of industry-leading content over three days at ExCeL London. The event emphasises powering the protection of people, assets, and data through knowledge sharing, networking, and product demonstrations.",
      "The conference programme features leading voices in cybersecurity including Professor Keith Martin from Royal Holloway, KPMG's Cyber Director Dr Jon Davies, BAE's Purvi Kay on Future Combat Aircraft Systems cybersecurity, and CISOs from major corporations. Attendees earn 90+ CPE credit hours across specialist tracks covering threat intelligence, AI in security, quantum computing threats, and ransomware defence.",
      "For UK–Pakistan technology professionals in the cybersecurity domain, Infosecurity Europe provides unmatched access to the European cybersecurity market, cutting-edge threat intelligence, and networking with CISOs and security leaders across government and enterprise.",
    ],
    relatedSlugs: [
      "cyber-security-expo-2026",
      "international-security-expo-2026",
      "itsa-expo-congress-2026",
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  United Kingdom — London Tech Events (June–December 2026)           */
  /* ------------------------------------------------------------------ */
  {
    slug: "london-tech-week-2026",
    title: "London Tech Week 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "June 8–12, 2026",
    dateISO: "2026-06-08",
    location: "Olympia London",
    venue: "Olympia London",
    image: "/image/Events & Engagements/europe/london_tech_week.png",
    officialLink: "https://londontechweek.com/",
    excerpt:
      "Europe's leading technology festival — shaping the future of business through technology, with 30,000 innovators and 400+ world-class speakers.",
    body: [
      "London Tech Week 2026 is Europe's leading technology festival, bringing together 30,000 innovators, startup founders, enterprise executives, and investors across five days at Olympia London. The event features 400+ world-class speakers, 70+ fringe events across London, and multiple content stages covering the full spectrum of enterprise technology.",
      "Confirmed speakers include Mati Staniszewski, Co-Founder of ElevenLabs, Aravind Srinivas, CEO of Perplexity, Alex Kendall, Founder of Wayve, Lucy Liu of Airwallex, and Max Jaderberg of Isomorphic Labs. The programme spans AI, autonomous vehicles, healthcare technology, fintech, sustainable energy, and enterprise digital transformation.",
      "London Tech Week represents the single most important annual showcase of London's position as a global technology capital. For UPTIB and its members, it provides a premium platform for networking with investors, technology leaders, and potential partners at the heart of Europe's most dynamic tech ecosystem.",
    ],
    relatedSlugs: [
      "ai-summit-london-2026",
      "tech-eu-summit-london-2026",
      "big-data-ldn-2026",
    ],
  },
  {
    slug: "ai-summit-london-2026",
    title: "The AI Summit London 2026",
    category: "London",
    tag: "Summit",
    status: "upcoming",
    date: "June 10–11, 2026",
    dateISO: "2026-06-10",
    location: "Tobacco Dock, London",
    venue: "Tobacco Dock",
    image: "/image/Events & Engagements/europe/ai_summit_london.jpg",
    officialLink: "https://london.theaisummit.com/",
    excerpt:
      "From AI Breakthroughs to Bottom-Line Impact — the headline AI event during London Tech Week, with 5,000+ attendees and 300+ speakers.",
    body: [
      "The AI Summit London is the 10th annual edition of the headline AI event during London Tech Week, attracting 5,000+ attendees and 300+ speakers across eight content stages at Tobacco Dock. The summit focuses on commercial AI applications, from AI-driven growth and operational streamlining to industry transformation and cutting-edge research.",
      "Notable speakers include Aaron Rajan, VP of Global Consumer Technology at Unilever, Catriona Campbell, Partner at EY, Matthew Candy, Global Managing Partner at IBM, Nipun Jain of AstraZeneca, and Mara Pometti, VP of Agentic Experience Strategy at Mastercard. The programme features an expo with 100+ exhibitors, VIP programmes, and an innovative AI Trail experience.",
      "For UPTIB members working in AI, data science, and enterprise technology, the AI Summit London provides direct access to the world's leading AI practitioners, decision-makers, and the latest commercial AI solutions — all within the broader context of London Tech Week's unrivalled networking opportunities.",
    ],
    relatedSlugs: [
      "london-tech-week-2026",
      "ai-world-congress-2026",
      "big-data-ldn-2026",
    ],
  },
  {
    slug: "vivatech-2026",
    title: "VivaTech 2026",
    category: "Europe",
    tag: "Expo",
    status: "upcoming",
    date: "June 17–20, 2026",
    dateISO: "2026-06-17",
    location: "Paris, France",
    image: "/image/Events & Engagements/europe/vivatech.png",
    officialLink: "https://vivatech.com/",
    excerpt:
      "Europe's biggest startup and tech event — A Decade of Innovation, attracting 180,000 attendees, 14,000 startups, and 3,600 investors.",
    body: [
      "VivaTech 2026 marks a decade of innovation as Europe's biggest startup and tech event. Held over four days in Paris, the event attracts 180,000 attendees, 14,000 startups, 4,000 corporate partners, and 3,600 investors, making it the single largest convergence of the European innovation ecosystem.",
      "Major technology partners include Microsoft, Meta, Google, AWS, and numerous other global leaders who participate in showcasing cutting-edge innovation. The event facilitates connections between technology professionals, entrepreneurs, corporations, and investors through an extensive programme of keynotes, exhibitions, networking sessions, and startup pitch competitions.",
      "VivaTech's scale and international reach make it an essential event for UPTIB members seeking to position UK–Pakistan technology companies within the broader European innovation landscape. The startup and investor density at VivaTech is unmatched by any other European event.",
    ],
    relatedSlugs: [
      "web-summit-2026",
      "tech-eu-summit-london-2026",
      "gitex-ai-europe-2026",
    ],
  },
  {
    slug: "ai-world-congress-2026",
    title: "AI World Congress 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "June 23–24, 2026",
    dateISO: "2026-06-23",
    location: "London",
    image: "/image/Events & Engagements/europe/ai_world_congress.jpg",
    officialLink: "https://aiconference.london/",
    excerpt:
      "A premier AI conference for CTOs, CIOs, AI engineers, and policymakers — covering machine learning, generative AI, ethics, and smart cities.",
    body: [
      "The AI World Congress 2026 is a two-day in-person conference in London designed for CTOs, CIOs, AI engineers, data scientists, business leaders, and policymakers to explore the latest developments in artificial intelligence. The event covers machine learning, generative AI, AI ethics, business applications, smart cities, healthcare AI, and financial services AI.",
      "Notable speakers include Pip White from Anthropic, Liran Zvibel, CEO of WEKA, UK Parliament MP Kanishka Narayan, Marcus Vinicius Martinez from Microsoft, Tejas Joshi from Oracle, Nayur Khan from McKinsey, and Jeremy Sosabowski, CEO of AlgoDynamix.",
      "The AI World Congress provides UPTIB members with concentrated access to AI thought leadership, policy discussions, and enterprise AI decision-makers, all within a focused two-day format that maximises networking efficiency for busy technology professionals.",
    ],
    relatedSlugs: [
      "ai-summit-london-2026",
      "data-ai-conference-europe-2026",
      "ai-big-data-expo-2027",
    ],
  },
  {
    slug: "travel-tech-show-2026",
    title: "Travel Tech Show 2026",
    category: "London",
    tag: "Expo",
    status: "upcoming",
    date: "June 24–25, 2026",
    dateISO: "2026-06-24",
    location: "ExCeL London",
    venue: "ExCeL London",
    image: "/image/Events & Engagements/europe/travel_tech_show.webp",
    officialLink: "https://traveltech-show.com/",
    excerpt:
      "Europe's only travel tech marketplace — connecting 700+ qualified buyers from 53 countries with 100+ innovative technology suppliers.",
    body: [
      "The Travel Tech Show is Europe's only dedicated travel technology marketplace, connecting 700+ qualified buyers from 53 countries with over 100 travel technology suppliers at ExCeL London. The event's 1-to-1 meeting platform enables pre-booked appointments between decision-makers from TMCs, airlines, hotels, and OTAs with innovative vendors.",
      "The show focuses on cutting-edge travel technology sectors including artificial intelligence, travel software solutions, CRM systems, marketing technology, data analytics, booking and reservation systems, payments, and automation. It is explicitly built for business, prioritising qualified buyer-supplier meetings over general exhibition browsing.",
      "For UPTIB members with technology solutions relevant to the travel, hospitality, and tourism sectors, the Travel Tech Show provides the most efficient and targeted route to European travel industry decision-makers in a focused two-day marketplace format.",
    ],
    relatedSlugs: [
      "london-tech-week-2026",
      "tech-for-marketing-2026",
      "big-data-ldn-2026",
    ],
  },
  {
    slug: "point-zero-forum-2026",
    title: "Point Zero Forum 2026",
    category: "Europe",
    tag: "Forum",
    status: "upcoming",
    date: "June 23–25, 2026",
    dateISO: "2026-06-23",
    location: "Zurich, Switzerland",
    image: "/image/Events & Engagements/europe/point_zero_forum.jpg",
    officialLink: "https://www.pointzeroforum.com/",
    excerpt:
      "Europe's definitive finance, technology and policy forum — 2,000+ policymakers, regulators, and industry leaders reshaping global finance.",
    body: [
      "Point Zero Forum 2026 is Europe's definitive finance, technology, and policy forum, bringing together 2,000+ policymakers, regulators, and industry leaders in Zurich to address how global finance is being restructured through AI, digital assets, and emerging regulations.",
      "The forum focuses on seven dialogue areas: Intelligence at Scale examining AI in regulated financial services, Assets On-Chain covering stablecoins and tokenised assets, The Modern Treasury Stack on payments modernisation, Digital Sovereignty and Resilience, Quantum Readiness for quantum-safe cryptography, Capital Corridors on cross-border trade, and Wealth and Risk Reimagined.",
      "Featured speakers include Martin Schlegel of the Swiss National Bank, Sarah Breeden from the Bank of England, Binance CEO Richard Teng, and Catrin Hinkel of Microsoft Switzerland. For UPTIB members in fintech, digital payments, and financial technology, the Point Zero Forum provides direct engagement with the regulators and policymakers shaping Europe's financial technology landscape.",
    ],
    relatedSlugs: [
      "vivatech-2026",
      "gitex-ai-europe-2026",
      "web-summit-2026",
    ],
  },
  {
    slug: "gitex-ai-europe-2026",
    title: "GITEX AI Europe 2026",
    category: "Europe",
    tag: "Expo",
    status: "upcoming",
    date: "June 30 – July 1, 2026",
    dateISO: "2026-06-30",
    location: "Berlin, Germany",
    venue: "Messe Berlin",
    image: "/image/Events & Engagements/europe/gitex_ai_europe.webp",
    officialLink: "https://www.gitexeurope.com/",
    excerpt:
      "A Bolder Digital Europe Is Open — Europe's largest tech, startup, and digital investment event uniting enterprises, governments, and investors.",
    body: [
      "GITEX AI Europe 2026 is Europe's largest tech, startup, and digital investment event, held at Messe Berlin under the banner 'A Bolder Digital Europe Is Open. Choose Europe.' The event unites enterprises, governments, startups, and investors across AI, cybersecurity, deep tech, green tech, and the digital economy.",
      "Key themes include AI and the full AI Stack, Cybersecurity and Digital Defence, Quantum Technology, Fintech and Digital Assets, Startups and Venture Capital, Green Tech and Sustainability, Cloud Infrastructure, Digital Sovereignty, and Critical Supply Chains. Over 600 investors from 50+ countries meet 750+ startups for investment and partnership opportunities.",
      "Notable speakers include Germany's Federal Minister for Digital Transformation Dr. Karsten Wildberger, Nobel Prize winner Geoffrey Hinton, KfW CEO Stefan B. Wintels, Miro Founder Andrey Khusid, and Project A Ventures Founding Partner Florian Heinemann. For UPTIB, GITEX AI Europe represents a strategic gateway to the European digital investment ecosystem.",
    ],
    relatedSlugs: [
      "gitex-global-dubai-2026",
      "vivatech-2026",
      "techex-europe-2026",
    ],
  },
  {
    slug: "ai-for-good-summit-2026",
    title: "AI for Good Global Summit 2026",
    category: "Europe",
    tag: "Summit",
    status: "upcoming",
    date: "July 7–10, 2026",
    dateISO: "2026-07-07",
    location: "Geneva, Switzerland",
    venue: "Palexpo, Geneva",
    image: "/image/Events & Engagements/europe/ai_for_good.png",
    officialLink: "https://aiforgood.itu.int/summit26/",
    excerpt:
      "Unlock AI's potential to serve humanity — the ITU-led global summit demonstrating trustworthy AI for sustainable development.",
    body: [
      "The AI for Good Global Summit 2026, led by the International Telecommunication Union (ITU), is a major global gathering at Palexpo in Geneva designed to demonstrate how AI technology can be leveraged responsibly to benefit humanity and tackle worldwide challenges.",
      "The summit focuses on building skills and standards around AI, advancing partnerships to address global challenges, and harnessing artificial intelligence for sustainable development. It emphasises trustworthy AI development aligned with the United Nations' Sustainable Development Goals.",
      "For UPTIB and its members, the AI for Good Summit provides a unique platform at the intersection of AI technology, international policy, and sustainable development — areas where UK–Pakistan technology partnerships can contribute meaningfully to global technology governance and responsible AI deployment.",
    ],
    relatedSlugs: [
      "ai-summit-london-2026",
      "world-summit-ai-2026",
      "swiss-ai-summit-2026",
    ],
  },
  {
    slug: "ibc-2026",
    title: "IBC2026 – International Broadcasting Convention",
    category: "Europe",
    tag: "Conference",
    status: "upcoming",
    date: "September 11–14, 2026",
    dateISO: "2026-09-11",
    location: "Amsterdam, Netherlands",
    venue: "Amsterdam RAI",
    image: "/image/Events & Engagements/europe/ibc2026.png",
    officialLink: "https://show.ibc.org/",
    excerpt:
      "Shaping the Future of Media — the essential meeting place for media, entertainment, and technology industry leaders across 14 innovation halls.",
    body: [
      "IBC2026 is the essential meeting place where industry leaders, disruptors, and next-generation talent shape the future of media together. The convention unites the global media, entertainment, and technology sectors through 14 innovation halls, an expanded conference programme, technical papers, and collaborative accelerator initiatives.",
      "The event features over 600 speakers including Avi Saxena, CTO of Warner Bros. Discovery, Antonia Kerle, Chief Technical Advisor at BBC R&D, Grace Boswood, Director of Technology at Channel 4, and Albert Lai, Global Director at Google Cloud. Key themes include AI and emerging technologies, immersive media, 5G development, sustainability, ad tech, and blockchain applications.",
      "IBC's unique position at the intersection of media, technology, and content creation makes it relevant for UPTIB members working in digital content, broadcasting technology, media platforms, and entertainment technology — sectors where UK–Pakistan collaboration has significant growth potential.",
    ],
    relatedSlugs: [
      "london-tech-week-2026",
      "techex-europe-2026",
      "big-data-ldn-2026",
    ],
  },
  {
    slug: "tech-for-marketing-2026",
    title: "Technology for Marketing 2026",
    category: "London",
    tag: "Expo",
    status: "upcoming",
    date: "September 23–24, 2026",
    dateISO: "2026-09-23",
    location: "ExCeL London",
    venue: "ExCeL London",
    image: "/image/Events & Engagements/europe/tech_for_marketing.png",
    officialLink: "https://www.technologyformarketing.co.uk/",
    excerpt:
      "The UK marketers' top destination for AI & MarTech — 10,000+ professionals, 200+ speakers, and 200+ hours of CPD-accredited content.",
    body: [
      "Technology for Marketing is the UK marketers' top destination for AI and MarTech solutions, bringing together 10,000+ B2B and B2C marketing professionals with 200+ MarTech solution providers at ExCeL London. The event delivers 200+ hours of CPD-accredited content across 10 conference theatres, co-located with eCommerce Expo.",
      "The programme covers AI-powered content creation, lead generation, analytics and data platforms, CRM and customer data, paid media, SEO, eCommerce strategies, and both B2B and B2C marketing technology. Over 200 world-leading speakers share practical insights on implementing marketing technology at scale.",
      "For UPTIB members developing marketing technology, AI-powered analytics, or digital customer experience platforms, Technology for Marketing provides targeted access to the UK's largest concentration of marketing technology buyers and decision-makers in a single event.",
    ],
    relatedSlugs: [
      "big-data-ldn-2026",
      "ai-summit-london-2026",
      "london-tech-week-2026",
    ],
  },
  {
    slug: "big-data-ldn-2026",
    title: "Big Data LDN 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "September 23–24, 2026",
    dateISO: "2026-09-23",
    location: "Olympia London",
    venue: "Olympia London",
    image: "/image/Events & Engagements/europe/big_data_ldn.png",
    officialLink: "https://www.bigdataldn.com/",
    excerpt:
      "The UK's leading data, analytics and AI conference & exhibition — Join Forces, Drive Insight, with 400+ expert-led seminars.",
    body: [
      "Big Data LDN is the UK's leading data, analytics, and AI conference and exhibition, held at Olympia London. The event serves as a hub for the data community to learn best practices, build relationships, and discover tools for leveraging data, AI, and analytics across enterprise organisations.",
      "The programme features 400+ expert-led seminars covering AI Agents, AI Governance, Data Products, and data strategy implementation. Exhibitors range from industry leaders including Snowflake, Databricks, Google Cloud, AWS, TikTok, and Spotify to innovative startups pushing the boundaries of data technology.",
      "Big Data LDN's focused positioning at the intersection of data engineering, analytics, and AI makes it the most relevant annual event for UPTIB members developing data platforms, analytics solutions, or AI products for enterprise markets.",
    ],
    relatedSlugs: [
      "ai-summit-london-2026",
      "tech-for-marketing-2026",
      "data-ai-conference-europe-2026",
    ],
  },
  {
    slug: "international-security-expo-2026",
    title: "International Security Expo 2026",
    category: "London",
    tag: "Expo",
    status: "upcoming",
    date: "September 29–30, 2026",
    dateISO: "2026-09-29",
    location: "Olympia, London",
    venue: "Olympia London",
    image: "/image/Events & Engagements/europe/international_security_expo.jpg",
    officialLink: "https://www.internationalsecurityexpo.com/",
    excerpt:
      "The Home of Global Security Innovation — 10,000+ security professionals, counter-terrorism, critical infrastructure, and homeland security.",
    body: [
      "The International Security Expo is the home of global security innovation, gathering over 10,000 security professionals across two days at Olympia London. The event connects industry leaders responsible for business security, critical infrastructure protection, counter-terrorism, and homeland security with innovative solutions and emerging technologies.",
      "Key themes include counter-terrorism strategies, homeland and international security, critical national infrastructure protection, perimeter protection, counter-threat solutions, and resilience and risk management. The expo is co-located with the International Cyber Expo, providing comprehensive coverage of both physical and digital security domains.",
      "Chaired by Figen Murray OBE, the initiator of Martyn's Law, the expo features immersive demonstrations, expert summits, and targeted networking. For UPTIB members in security technology, the International Security Expo provides direct engagement with the UK's most senior security decision-makers across government and enterprise.",
    ],
    relatedSlugs: [
      "infosecurity-europe-2026",
      "cyber-security-expo-2026",
      "cybertech-europe-2026",
    ],
  },
  {
    slug: "isaca-europe-conference-2026",
    title: "ISACA Europe Conference 2026",
    category: "Europe",
    tag: "Conference",
    status: "upcoming",
    date: "October 7–9, 2026",
    dateISO: "2026-10-07",
    location: "Munich, Germany",
    image: "/image/Events & Engagements/europe/isaca_europe.jpg",
    officialLink: "https://www.isaca.org/training-and-events/conferences/isaca-europe-conference",
    excerpt:
      "Europe's premier IS/IT conference — world-class content, engaging speakers, and unsurpassed networking for information systems professionals.",
    body: [
      "The ISACA Europe Conference 2026 is Europe's premier information systems and IT governance conference, bringing together IS/IT professionals from across the continent for three days in Munich, Germany. The event delivers world-class content, engaging speakers, and unsurpassed networking opportunities.",
      "ISACA, the global association for IT governance, security, risk, and assurance professionals, designs the conference to advance attendees' careers in information systems, cybersecurity governance, IT audit, and technology risk management. The programme features case studies, workshops, and keynotes from leading practitioners.",
      "For UPTIB members engaged in IT governance, compliance, cybersecurity assurance, and risk management — particularly those working across international regulatory frameworks — the ISACA Europe Conference provides essential professional development and networking within the European IS/IT governance community.",
    ],
    relatedSlugs: [
      "infosecurity-europe-2026",
      "itsa-expo-congress-2026",
      "cybertech-europe-2026",
    ],
  },
  {
    slug: "world-summit-ai-2026",
    title: "World Summit AI 2026",
    category: "Europe",
    tag: "Summit",
    status: "upcoming",
    date: "October 7–8, 2026",
    dateISO: "2026-10-07",
    location: "Amsterdam, Netherlands",
    venue: "Taets Art & Event Park",
    image: "/image/Events & Engagements/europe/ai_for_good.png",
    officialLink: "https://worldsummit.ai/programme/",
    excerpt:
      "The world's leading AI summit — bringing together global AI leaders, researchers, and practitioners in Amsterdam.",
    body: [
      "World Summit AI 2026 is recognised as the world's leading AI summit, convening global AI leaders, researchers, and practitioners at the Taets Art & Event Park in Amsterdam for two days of intensive dialogue on the future of artificial intelligence.",
      "The summit covers the full spectrum of AI innovation — from foundational research and technical breakthroughs to enterprise deployment strategies, ethical frameworks, and regulatory developments. The event attracts C-suite executives, AI researchers, government policymakers, and investors from around the world.",
      "For UPTIB members working in AI, machine learning, and data science, World Summit AI provides access to the global AI leadership community and the latest thinking on how artificial intelligence is reshaping industries, governments, and societies — essential context for UK–Pakistan technology partnerships operating in the AI space.",
    ],
    relatedSlugs: [
      "ai-summit-london-2026",
      "ai-for-good-summit-2026",
      "swiss-ai-summit-2026",
    ],
  },
  {
    slug: "cybertech-europe-2026",
    title: "Cybertech Europe 2026",
    category: "Europe",
    tag: "Conference",
    status: "upcoming",
    date: "October 13–14, 2026",
    dateISO: "2026-10-13",
    location: "Rome, Italy",
    venue: "La Nuvola Convention Center",
    image: "/image/Events & Engagements/europe/cybertech_europe.jpg",
    officialLink: "https://italy.cybertechconference.com/",
    excerpt:
      "An international cybersecurity conference and exhibition featuring cutting-edge solutions, senior government officials, and C-level executives.",
    body: [
      "Cybertech Europe 2026 is an international cybersecurity conference and exhibition at La Nuvola Convention Center in Rome, featuring cutting-edge solutions from major technology companies and startups, with participation from senior government officials, C-level executives, and industry leaders across Europe.",
      "Notable speakers include Mike Pompeo, 70th US Secretary of State, Ivano Gabrielli, Director of the Italian Postal and Cybersecurity Police, Eva Chen, CEO of Trend Micro, Christiane Kirketerp de Viron, Acting Director for Cybersecurity at the European Commission, and Jonathan Fischbein, Global CISO of Check Point Software.",
      "Cybertech Europe's unique combination of government policy-level engagement and enterprise cybersecurity solutions makes it particularly relevant for UPTIB members seeking to understand the European cybersecurity regulatory landscape and build relationships with continental European security decision-makers.",
    ],
    relatedSlugs: [
      "infosecurity-europe-2026",
      "itsa-expo-congress-2026",
      "international-security-expo-2026",
    ],
  },
  {
    slug: "techex-europe-2026",
    title: "TechEx Europe 2026",
    category: "Europe",
    tag: "Expo",
    status: "upcoming",
    date: "October 20–21, 2026",
    dateISO: "2026-10-20",
    location: "Amsterdam, Netherlands",
    venue: "RAI Amsterdam",
    image: "/image/Events & Engagements/europe/techex_europe.png",
    officialLink: "https://techexevent.com/europe/",
    excerpt:
      "6 Events, 2 Days, 1 Ticket — Transforming Enterprise Through Technology with 8,000+ attendees, 200+ speakers, and 150+ exhibitors.",
    body: [
      "TechEx Europe brings together 8,000+ attendees, 200+ speakers, and 150+ exhibitors across six co-located technology conferences at RAI Amsterdam. Designed for CIOs, CTOs, and IT directors, the event provides strategic clarity on emerging technologies and enterprise transformation strategies.",
      "The six co-located events cover AI & Big Data, Cyber Security & Cloud, IoT Tech, Digital Transformation, Data Centre Infrastructure, and Intelligent Automation. Featured speakers include executives from ABN AMRO, Booking.com, ING, Shell, Elsevier, Henkel, Heineken, Philips, and Uber.",
      "TechEx Europe's unique format of six co-located conferences under one ticket makes it exceptionally efficient for UPTIB members seeking cross-domain technology insights and networking across AI, cybersecurity, cloud, IoT, and digital transformation — all within a focused two-day programme.",
    ],
    relatedSlugs: [
      "gitex-ai-europe-2026",
      "oslo-tech-show-2026",
      "stockholm-tech-show-2026",
    ],
  },
  {
    slug: "itsa-expo-congress-2026",
    title: "it-sa Expo & Congress 2026",
    category: "Europe",
    tag: "Expo",
    status: "upcoming",
    date: "October 27–29, 2026",
    dateISO: "2026-10-27",
    location: "Nuremberg, Germany",
    image: "/image/Events & Engagements/europe/itsa_expo.jpg",
    officialLink: "https://www.itsa365.de/en/it-sa-expo-congress/exhibition-info",
    excerpt:
      "Home of IT Security — Europe's leading trade fair for IT security, serving as an industry trend barometer and dialogue platform.",
    body: [
      "The it-sa Expo & Congress is Europe's leading trade fair for IT security, serving as a major dialogue platform where international IT security experts and decision-makers convene annually in Nuremberg, Germany. The event functions as an industry trend barometer, featuring product exhibitions, specialised forums, and the Congress@it-sa programme.",
      "Key topics include IT security solutions and products, cybersecurity challenges and trends, data centre security, identity and access management, cloud security, critical infrastructure protection (KRITIS), AI in security, and IT regulation and compliance.",
      "For UPTIB members developing cybersecurity products and services targeting the European market, it-sa provides the most concentrated access to German and continental European IT security decision-makers — Germany being Europe's largest technology market and a critical gateway for UK–Pakistan technology exports.",
    ],
    relatedSlugs: [
      "infosecurity-europe-2026",
      "cybertech-europe-2026",
      "isaca-europe-conference-2026",
    ],
  },
  {
    slug: "cyber-security-expo-2026",
    title: "Cyber Security EXPO 2026",
    category: "London",
    tag: "Expo",
    status: "upcoming",
    date: "October 27, 2026",
    dateISO: "2026-10-27",
    location: "QEII Centre, London",
    venue: "QEII Centre",
    image: "/image/Events & Engagements/europe/cyber_security_expo.png",
    officialLink: "https://www.cybersecurityexpo.co.uk/london",
    excerpt:
      "The only dedicated recruitment event for cybersecurity professionals — 100+ exhibitors, career networking, and unadvertised opportunities.",
    body: [
      "The Cyber Security EXPO is the UK's only dedicated recruitment event for cybersecurity professionals, held at the prestigious QEII Centre in London. The expo connects cybersecurity professionals with employers, featuring 100+ exhibitors and approximately 1,500 registered candidates.",
      "The event is co-located with Security Cleared Expo, Police Resettlement Expo, and Veteran UK, creating a comprehensive security talent marketplace. Attendees can network with hiring managers, discover unadvertised job openings, gain company insights, and attend speaker sessions on cybersecurity careers and recruitment.",
      "For UPTIB members building cybersecurity teams or seeking to connect UK–Pakistani cybersecurity talent with leading employers, the Cyber Security EXPO provides a uniquely focused talent marketplace that complements the broader cybersecurity conference landscape.",
    ],
    relatedSlugs: [
      "infosecurity-europe-2026",
      "international-security-expo-2026",
      "itsa-expo-congress-2026",
    ],
  },
  {
    slug: "data-ai-conference-europe-2026",
    title: "Data & AI Conference Europe 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "November 2–6, 2026",
    dateISO: "2026-11-02",
    location: "London",
    venue: "etc.venues Fenchurch Street",
    image: "/image/Events & Engagements/europe/data_ai_conference.jpg",
    officialLink: "https://irmuk.co.uk/data-ai-conference-2026/",
    excerpt:
      "Where Data Drives Intelligence and AI Builds Trust — 60+ industry visionaries, five curated tracks, and an industry awards programme.",
    body: [
      "The Data & AI Conference Europe 2026 is a five-day professional conference in London for data leaders and AI innovators, themed 'Where Data Drives Intelligence and AI Builds Trust'. The event features over 60 industry visionaries delivering keynotes, interactive sessions, and hands-on workshops.",
      "The programme covers five curated tracks: data quality and management, AI strategies and implementation, ethics in AI and data use, machine learning applications, and advanced analytics. Case studies come from leading organisations including Accenture, Amazon Web Services, IBM, Microsoft, and NatWest Bank.",
      "With networking opportunities connecting 250+ data professionals and an industry awards programme recognising excellence in data strategy transformation, the conference provides UPTIB members with practical intelligence on enterprise data and AI best practices from Europe's leading practitioners.",
    ],
    relatedSlugs: [
      "big-data-ldn-2026",
      "ai-world-congress-2026",
      "ai-summit-london-2026",
    ],
  },
  {
    slug: "web-summit-2026",
    title: "Web Summit 2026",
    category: "Europe",
    tag: "Summit",
    status: "upcoming",
    date: "November 9–12, 2026",
    dateISO: "2026-11-09",
    location: "Lisbon, Portugal",
    venue: "MEO Arena (Altice Arena)",
    image: "/image/Events & Engagements/europe/web_summit.jpg",
    officialLink: "https://websummit.com/",
    excerpt:
      "The best tech conference in Europe — 20 content tracks, talks, masterclasses, and Europe's largest gathering of startups and investors.",
    body: [
      "Web Summit is Europe's largest and most influential technology conference, held over four days in Lisbon at MEO Arena. The event attracts major corporations, startups, investors, and media professionals from across the globe for an intensive programme of networking, talks, and business opportunities.",
      "The programme features 20 content tracks, Partner Masterclasses, a Developer Programme, Women in Tech initiatives, a Startup Programme, and extensive investor networking. Previous speakers include Brad Smith, President of Microsoft, and Alicia Tillman, CMO of SAP, reflecting the event's ability to attract the highest levels of global technology leadership.",
      "Web Summit's unrivalled scale and its position as the definitive European technology gathering make it essential for UPTIB members seeking maximum visibility within the global technology ecosystem. The event's startup programme and investor matching are particularly valuable for UK–Pakistan technology ventures seeking international funding and partnerships.",
    ],
    relatedSlugs: [
      "vivatech-2026",
      "gitex-ai-europe-2026",
      "london-tech-week-2026",
    ],
  },
  {
    slug: "swiss-ai-summit-2026",
    title: "Swiss AI Summit 2026",
    category: "Europe",
    tag: "Summit",
    status: "upcoming",
    date: "November 16, 2026",
    dateISO: "2026-11-16",
    location: "Zurich, Switzerland",
    image: "/image/Events & Engagements/europe/swiss_ai_summit.jpg",
    officialLink: "https://www.swissaisummit.com/",
    excerpt:
      "The leading conference on artificial intelligence in Switzerland — cross-sectoral networking, keynotes, workshops, and AI demonstrations.",
    body: [
      "The Swiss AI Summit is the leading conference on artificial intelligence in Switzerland, gathering AI leaders, experts, and founders in Zurich to explore technological advancements through keynote speeches, workshops, panel discussions, and demonstrations.",
      "The summit covers AI applications across multiple sectors including Finance & Insurance, Sustainability, Industry & Manufacturing, Cybersecurity, Quantum Computing, and Life Science & Healthcare. Past speakers have included leaders from Microsoft Switzerland, ETH AI Center, and prominent Swiss AI startups.",
      "Switzerland's position as a global hub for AI research, particularly through ETH Zurich and EPFL, makes the Swiss AI Summit a valuable event for UPTIB members seeking to connect with one of Europe's most sophisticated AI ecosystems and explore collaboration opportunities with Swiss AI companies and research institutions.",
    ],
    relatedSlugs: [
      "world-summit-ai-2026",
      "ai-for-good-summit-2026",
      "point-zero-forum-2026",
    ],
  },
  {
    slug: "space-tech-expo-europe-2026",
    title: "Space Tech Expo Europe 2026",
    category: "Europe",
    tag: "Expo",
    status: "upcoming",
    date: "November 17–19, 2026",
    dateISO: "2026-11-17",
    location: "Bremen, Germany",
    image: "/image/Events & Engagements/europe/space_tech_expo.jpg",
    officialLink: "https://www.spacetechexpo-europe.com/",
    excerpt:
      "Europe's largest B2B space event — connecting the space supply chain from civil and commercial to defence sectors with 950+ exhibitors.",
    body: [
      "Space Tech Expo Europe is the continent's largest B2B space event, connecting Europe's space supply chain across civil, commercial, and defence sectors. The 2026 edition at Bremen, Germany features over 950 exhibiting companies and four specialised conferences addressing industry trends, smallsats, connectivity, and technical forums.",
      "The expo covers satellite operations, launch services, communications, ground systems, materials suppliers, subsystems, engineering services, components, software solutions, and optics. With 95% of attendees making new business connections, the event prioritises commercial networking and supply chain development.",
      "For UPTIB members in satellite communications, earth observation, space software, or defence technology, Space Tech Expo Europe provides the most efficient access to the European space industry supply chain — a rapidly growing sector where UK–Pakistan technology partnerships have emerging opportunities in satellite data, communications infrastructure, and ground segment solutions.",
    ],
    relatedSlugs: [
      "gitex-ai-europe-2026",
      "techex-europe-2026",
      "ideas-2026",
    ],
  },
  {
    slug: "gitex-global-dubai-2026",
    title: "GITEX Global 2026",
    category: "Europe",
    tag: "Expo",
    status: "upcoming",
    date: "December 7–11, 2026",
    dateISO: "2026-12-07",
    location: "Dubai, UAE",
    venue: "Dubai World Trade Centre & Expo City Dubai",
    image: "/image/Events & Engagements/europe/gitex_global_2026.jpg",
    officialLink: "https://www.gitex.com/",
    excerpt:
      "The world's largest tech & AI show — the boldest reinvention featuring Sam Altman, Geoffrey Hinton, and 200,000+ attendees in Dubai.",
    body: [
      "GITEX Global 2026 is the world's largest technology and AI show, undergoing its boldest reinvention yet in Dubai. The event runs across five days at Dubai World Trade Centre and Expo City Dubai, featuring a Scale Summit on December 7 followed by a four-day expo from December 8–11.",
      "The programme covers AI and Data, Cybersecurity, Semiconductors and Advanced Manufacturing, Quantum Technologies, Physical AI and Robotics, Mobility and EVs, Fintech, Data Centres, and Responsible AI Governance. Headline speakers include Sam Altman of OpenAI, Nobel Prize winner Geoffrey Hinton, UAE Minister of AI Omar Sultan Al Olama, G42 CEO Peng Xiao, and Cerebras Systems CEO Andrew Feldman.",
      "GITEX Global's scale and its position as the premier technology event in the Middle East make it strategically important for UPTIB, providing a bridge between European and Asian technology markets. Dubai's role as a global technology crossroads creates unique opportunities for UK–Pakistan technology companies to engage with investors, governments, and enterprises across the Gulf, Africa, and South Asia.",
    ],
    relatedSlugs: [
      "gitex-ai-europe-2026",
      "vivatech-2026",
      "web-summit-2026",
    ],
  },
  {
    slug: "ai-big-data-expo-2027",
    title: "AI & Big Data Expo Global 2027",
    category: "London",
    tag: "Expo",
    status: "upcoming",
    date: "February 3–4, 2027",
    dateISO: "2027-02-03",
    location: "Olympia London",
    venue: "Olympia London",
    image: "/image/Events & Engagements/europe/ai_big_data_expo_2027.jpg",
    officialLink: "https://www.ai-expo.net/global/",
    excerpt:
      "Delivering AI & Big Data for a Smarter Future — 9,000+ innovators, 200+ speakers, and 150+ exhibitors across seven co-located events.",
    body: [
      "The AI & Big Data Expo Global 2027 is a premier London-based conference and exhibition at Olympia London, bringing together 9,000+ innovators, 200+ speakers, and 150+ exhibitors across seven co-located technology events. The expo focuses on delivering real-world AI implementation for a smarter future.",
      "Key topics include Generative AI and Enterprise AI, Machine Learning and Deep Learning, Data Ecosystems, NLP, Ethical AI and Security. Featured speakers include executives from SAP, Equifax, Salesforce, Microsoft, and AstraZeneca, providing enterprise-level insights into AI deployment at scale.",
      "The expo's dedicated startup innovation area and focus on practical AI implementation make it particularly valuable for UPTIB members seeking to showcase AI products, find enterprise customers, and connect with the London AI ecosystem — the largest in Europe — at the start of a new business year.",
    ],
    relatedSlugs: [
      "ai-summit-london-2026",
      "big-data-ldn-2026",
      "ai-world-congress-2026",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Utility functions                                                   */
/* ------------------------------------------------------------------ */

/** Dynamic check — compares dateISO against today */
export function isEventUpcoming(dateISO: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dateISO) >= today;
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(): Event[] {
  return events
    .filter((e) => isEventUpcoming(e.dateISO))
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
}

export function getPastEvents(): Event[] {
  return events
    .filter((e) => !isEventUpcoming(e.dateISO))
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}

export function getEventsByCategory(category: Event["category"]): Event[] {
  return events.filter((e) => e.category === category);
}

export function getRelatedEvents(slugs: string[]): Event[] {
  return slugs
    .map((slug) => getEventBySlug(slug))
    .filter((e): e is Event => e !== undefined)
    .slice(0, 3);
}
