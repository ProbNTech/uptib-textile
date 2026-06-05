import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { productSlugs } from "@/data/products";
import { serviceSlugs } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/services",
    "/directory",
    "/contact",
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const slug of productSlugs) {
    routes.push({
      url: `${base}/products/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const slug of serviceSlugs) {
    routes.push({
      url: `${base}/services/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return routes;
}
