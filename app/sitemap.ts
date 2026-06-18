import type { MetadataRoute } from "next"
import { cities, projectTypes, contractors } from "@/lib/seo-locations"

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://legalbedek.co.il/bedek-bayit/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const projectPages: MetadataRoute.Sitemap = projectTypes.map((p) => ({
    url: `https://legalbedek.co.il/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const contractorPages: MetadataRoute.Sitemap = contractors.map((c) => ({
    url: `https://legalbedek.co.il/bedek-bayit/kablan/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: "https://legalbedek.co.il",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://legalbedek.co.il/bedek-bayit",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://legalbedek.co.il/bedek-bayit/kablan",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cityPages,
    ...projectPages,
    ...contractorPages,
    {
      url: "https://legalbedek.co.il/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://legalbedek.co.il/gallery",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/bedek-bayit-dira-hadasha",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/bedek-bayit-dira-yad-shniya",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/matai-lehazmin-bedek-bayit",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
