import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.ukpaktrade.org.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/leadership`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/events`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/membership`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // { url: `${BASE_URL}/job-portal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 }, // hidden from public
    { url: `${BASE_URL}/marketing-agreement`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    // { url: `${BASE_URL}/job-promotion-agreement`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }, // hidden from public
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/code-of-conduct`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/initiatives`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/initiatives/people-ai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/initiatives/techmart-global`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/initiatives/ai-tech-programs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/initiatives/tech-excellence-awards`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/programs/ai-tech-programs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/programs/skill-development-center`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/programs/incubation-collective-startups`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/ecosystem/uk-pakistan-technology-partnership`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/ecosystem/funding-and-grants`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/ecosystem/trade-delegations-and-exhibitions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/uk`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/germany`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/france`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/spain`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/netherlands`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/switzerland`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/poland`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/baltic-states`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/pakistan-it-scope`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ecosystem/tech-market-overview/pakistan-talent`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Company directory pages exist but are intentionally NOT live yet —
    // not linked from any nav and excluded from the sitemap. Add the
    // /top-ai-companies, /top-it-companies, and /it-companies entries here
    // when ready to launch.
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
