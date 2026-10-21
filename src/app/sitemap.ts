import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { serviceSlugs } from "@/data/services";
import { projectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = siteConfig.baseUrl;
  const url = (path: string) => `${base}${path}`;

  return [
    {
      url: url("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: url("/services"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...serviceSlugs.map((slug) => ({
      url: url(`/services/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: url("/work"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectSlugs.map((slug) => ({
      url: url(`/work/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: url("/about"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: url("/contact"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: url("/privacy"),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: url("/terms"),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
