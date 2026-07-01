import type { MetadataRoute } from "next"
import { cities, projectTypes, contractors } from "@/lib/seo-locations"
import { defects } from "@/lib/defects"
import { services } from "@/lib/services"
import { getProjectCities } from "@/lib/projects"
import { videos } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"

export default function sitemap(): MetadataRoute.Sitemap {
  // Fixed content-update date — avoids signalling "everything changed" to Google on every deploy.
  const LAST_UPDATED = new Date("2026-06-28")

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://legalbedek.co.il/bedek-bayit/${city.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Dedicated service pages (P8) — high priority core service landing pages.
  const dedicatedServicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `https://legalbedek.co.il/services/${s.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  // Project-type pages also live under /services
  const servicePages: MetadataRoute.Sitemap = projectTypes.map((p) => ({
    url: `https://legalbedek.co.il/services/${p.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const contractorPages: MetadataRoute.Sitemap = contractors.map((c) => ({
    url: `https://legalbedek.co.il/bedek-bayit/kablan/${c.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const defectPages: MetadataRoute.Sitemap = defects.map((d) => ({
    url: `https://legalbedek.co.il/likuyey-bniya/${d.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const projectCityPages: MetadataRoute.Sitemap = getProjectCities().map((c) => ({
    url: `https://legalbedek.co.il/projects/${c.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const videoPages: MetadataRoute.Sitemap = videos.map((v) => ({
    url: `https://legalbedek.co.il/videos/${videoSlug(v)}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: "https://legalbedek.co.il",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://legalbedek.co.il/bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://legalbedek.co.il/bedek-bayit/kablan",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://legalbedek.co.il/likuyey-bniya",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://legalbedek.co.il/projects",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://legalbedek.co.il/services",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cityPages,
    ...dedicatedServicePages,
    ...servicePages,
    ...contractorPages,
    ...defectPages,
    ...projectCityPages,
    ...videoPages,
    {
      url: "https://legalbedek.co.il/blog",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/mehir-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/checklist-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://legalbedek.co.il/doch-ledugma",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/about",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://legalbedek.co.il/gallery",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/videos",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/ezorei-sherut",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://legalbedek.co.il/articles/bedek-bayit-dira-hadasha",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/bedek-bayit-dira-yad-shniya",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/matai-lehazmin-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/chok-hamkar-dirot",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/tikaney-instalatzia-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://legalbedek.co.il/articles/taken-789-stiyot-mutarot",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://legalbedek.co.il/articles/protokol-mesira",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
