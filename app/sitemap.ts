import type { MetadataRoute } from "next";
import { calculatorsData } from "./data/calculatorsData";
import { blogData } from "./data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://infinixcalculators.com";

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Dynamic calculators
  const calcRoutes = Object.values(calculatorsData).map((calc) => ({
    url: `${baseUrl}/calculators/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic blog posts
  const blogRoutes = Object.values(blogData).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...calcRoutes, ...blogRoutes];
}
