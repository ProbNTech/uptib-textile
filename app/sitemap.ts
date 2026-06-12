import type { MetadataRoute } from 'next';
import { products, services } from '@/data/textile';

const BASE_URL = 'https://www.ukpaktrade.org.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/about/founder', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/about/management-team', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/about/mission', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/about/vision', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/about/objectives', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/products', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/global-textile-market', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/membership', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/membership/terms', changeFrequency: 'yearly', priority: 0.4 },
    { path: '/news', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/faqs', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/gdpr', changeFrequency: 'yearly', priority: 0.3 },
  ];

  const productRoutes = products.map((p) => ({ path: `/products/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 }));
  const serviceRoutes = services.map((s) => ({ path: `/services/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes].map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
