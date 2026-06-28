import type { MetadataRoute } from "next"
import { cities, projectTypes, contractors } from "@/lib/seo-locations"
import { defects } from "@/lib/defects"
import { services } from "@/lib/services"
import { getProjectCities } from "@/lib/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://legalbedek.co.il/bedek-bayit/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Dedicated service pages (P8) — high priority core service landing pages.
  const dedicatedServicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `https://legalbedek.co.il/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  // Project-type pages also live under /services
  const servicePages: MetadataRoute.Sitemap = projectTypes.map((p) => ({
    url: `https://legalbedek.co.il/services/${p.slug}`,
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

  const defectPages: MetadataRoute.Sitemap = defects.map((d) => ({
    url: `https://legalbedek.co.il/likuyey-bniya/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const projectCityPages: MetadataRoute.Sitemap = getProjectCities().map((c) => ({
    url: `https://legalbedek.co.il/projects/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
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
    {
      url: "https://legalbedek.co.il/likuyey-bniya",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://legalbedek.co.il/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://legalbedek.co.il/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cityPages,
    ...dedicatedServicePages,
    ...servicePages,
    ...contractorPages,
    ...defectPages,
    ...projectCityPages,
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
      url: "https://legalbedek.co.il/card",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
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
    {
      url: "https://legalbedek.co.il/articles/chok-hamkar-dirot",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/tikaney-instalatzia-bedek-bayit",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/taken-789-stiyot-mutarot",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
