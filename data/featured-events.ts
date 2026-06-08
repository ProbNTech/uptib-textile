export interface FeaturedEventItem {
  id: string;
  title: string;
  date: string;
  dateISO: string;
  shortDescription: string;
  image: string;
  location?: string;
  tag: string;
}

export const featuredEvents: FeaturedEventItem[] = [
  /* ── Pakistan Events ── */
  {
    id: "pk-1",
    title: "NextGen Digital Summit 2026",
    date: "February 25–26, 2026",
    dateISO: "2026-02-26",
    shortDescription:
      "Organized with regulatory support to define Pakistan's roadmap for 5G readiness, smart cities, and digital governance.",
    image: "/image/Events%20%26%20Engagements/nextgen.webp",
    location: "Karachi, Pakistan",
    tag: "Summit",
  },
  {
    id: "pk-4",
    title: "28th ITCN Asia Karachi 2026",
    date: "September 22–24, 2026",
    dateISO: "2026-09-24",
    shortDescription:
      "Held under the patronage of the SIFC and MoITT, featuring the Global CISO Summit and AI Beyond Borders conferences.",
    image: "/image/Events%20%26%20Engagements/ITCN.webp",
    location: "Expo Centre Karachi",
    tag: "Expo",
  },
  {
    id: "pk-5",
    title: "ASOCIO Digital Summit 2026",
    date: "November 2026",
    dateISO: "2026-11-30",
    shortDescription:
      "Pakistan hosts this premier regional inter-governmental summit for the first time, bringing technology leadership from 24 member countries.",
    image: "/image/Events%20%26%20Engagements/ASOCIO.webp",
    location: "Islamabad / Lahore, Pakistan",
    tag: "Summit",
  },
  {
    id: "pk-6",
    title: "IDEAS 2026 – Cyber & Emerging Tech Track",
    date: "November 24–27, 2026",
    dateISO: "2026-11-27",
    shortDescription:
      "Organized by the Ministry of Defence Production with a dedicated 'Cyber & Emerging Tech' pavilion covering AI, quantum computing, and cybersecurity.",
    image: "/image/Events%20%26%20Engagements/IDEAS2026.webp",
    location: "Karachi Expo Centre",
    tag: "Conference",
  },
  /* ── UK Events ── */
  {
    id: "uk-6",
    title: "Tech.eu Summit London 2026",
    date: "April 21–22, 2026",
    dateISO: "2026-04-21",
    shortDescription:
      "Europe's premier startup and venture capital summit connecting founders, investors, and corporates shaping the continent's tech landscape.",
    image: "/image/Events%20%26%20Engagements/europe/tech_eu_summit.jpg",
    location: "London",
    tag: "Summit",
  },
  {
    id: "uk-2",
    title: "The GovTech Summit 2026",
    date: "April 16, 2026",
    dateISO: "2026-04-16",
    shortDescription:
      "Connects senior government innovators with technology pioneers to reform public service procurement and accelerate digital transformation.",
    image: "/image/Events%20%26%20Engagements/govtech.webp",
    location: "Westminster, London",
    tag: "Summit",
  },
  {
    id: "uk-3",
    title: "Building the Smarter State 2026",
    date: "May 13, 2026",
    dateISO: "2026-05-13",
    shortDescription:
      "techUK's flagship conference for public sector DDaT leaders, backed by the Central Government and focused on AI-driven public service delivery.",
    image: "/image/Events%20%26%20Engagements/Building_smater_state.webp",
    location: "London",
    tag: "Conference",
  },
  {
    id: "uk-7",
    title: "London Tech Week 2026",
    date: "June 8–12, 2026",
    dateISO: "2026-06-08",
    shortDescription:
      "Europe's leading technology festival — shaping the future of business through technology, with 30,000 innovators and 400+ world-class speakers.",
    image: "/image/Events%20%26%20Engagements/europe/london_tech_week.png",
    location: "Olympia London",
    tag: "Conference",
  },
  {
    id: "uk-4",
    title: "Government Transformation Summit 2026",
    date: "June 25, 2026",
    dateISO: "2026-06-25",
    shortDescription:
      "Unites 200+ senior government leaders in data and digital delivery to reimagine the modern state through responsible AI and technology.",
    image: "/image/Events%20%26%20Engagements/gov_transformation_summit_2026.webp",
    location: "Westminster, London",
    tag: "Summit",
  },
  {
    id: "uk-5",
    title: "DigiGov Expo 2026",
    date: "September 23–24, 2026",
    dateISO: "2026-09-24",
    shortDescription:
      "Developed with DSIT and GDS, featuring an international 'Government Village' showcasing digital projects and strategies for digital public services.",
    image: "/image/Events%20%26%20Engagements/DigiGovExpo.webp",
    location: "ExCeL London",
    tag: "Expo",
  },
];
