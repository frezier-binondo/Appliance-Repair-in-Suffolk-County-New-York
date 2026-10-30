import { MetadataRoute } from "next";
import { SERVICES_LIST, LOCATIONS_LIST, BLOG_POSTS } from "@/data/siteData";

const BASE_URL = "https://suffolkcountyappliancerepair.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core static pages
  const staticRoutes: { route: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/appliance-repair-services", priority: 0.9, changeFrequency: "weekly" },
    { route: "/service-areas", priority: 0.9, changeFrequency: "weekly" },
    { route: "/blog", priority: 0.8, changeFrequency: "daily" },
    { route: "/frequently-asked-questions", priority: 0.8, changeFrequency: "weekly" },
    { route: "/contact", priority: 0.9, changeFrequency: "weekly" },
    { route: "/about-us", priority: 0.7, changeFrequency: "monthly" },
    { route: "/reviews", priority: 0.8, changeFrequency: "weekly" },
    { route: "/appliance-brands", priority: 0.8, changeFrequency: "monthly" },
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${BASE_URL}${route ? `${route}/` : "/"}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  // Service silo pages
  const servicePages: MetadataRoute.Sitemap = SERVICES_LIST.map((service) => ({
    url: `${BASE_URL}/${service.slug}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Location hub pages
  const locationPages: MetadataRoute.Sitemap = LOCATIONS_LIST.map((location) => ({
    url: `${BASE_URL}/${location.slug}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Blog articles
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
