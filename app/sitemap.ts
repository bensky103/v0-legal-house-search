import type { MetadataRoute } from "next"
import { cities, projectTypes, contractors } from "@/lib/seo-locations"
import { defects } from "@/lib/defects"
import { services } from "@/lib/services"
import { getProjectCities } from "@/lib/projects"
import { videos } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"

export default function sitemap(): MetadataRoute.Sitemap {
  // Fixed content-update date — avoids signalling "everything changed" to Google on every deploy.
  // Bumped 2026-07-18 after rebalancing internal links between city pages (tail cities like רמלה
  // were near-orphaned), to prompt Google to re-crawl and re-evaluate pages stuck in
  // "discovered/crawled - currently not indexed". Bumped again 2026-08-14 with the
  // report-anatomy article and its field photos.
  const LAST_UPDATED = new Date("2026-08-21")

  // Video pages carry their own, later date: they were last crawled 2026-06-29 —
  // before the de-duplication fix (2026-07-21) and before the depth content in
  // lib/video-content.ts (2026-08-11). With the shared LAST_UPDATED they were
  // still advertised as unchanged since 2026-07-18, so nothing prompted Google to
  // re-crawl and re-evaluate them.
  const VIDEOS_UPDATED = new Date("2026-08-11")

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://www.legalbedek.co.il/bedek-bayit/${city.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Dedicated service pages (P8) — high priority core service landing pages.
  const dedicatedServicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `https://www.legalbedek.co.il/services/${s.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  // Project-type pages also live under /services
  const servicePages: MetadataRoute.Sitemap = projectTypes.map((p) => ({
    url: `https://www.legalbedek.co.il/services/${p.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const contractorPages: MetadataRoute.Sitemap = contractors.map((c) => ({
    url: `https://www.legalbedek.co.il/bedek-bayit/kablan/${c.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const defectPages: MetadataRoute.Sitemap = defects.map((d) => ({
    url: `https://www.legalbedek.co.il/likuyey-bniya/${d.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const projectCityPages: MetadataRoute.Sitemap = getProjectCities().map((c) => ({
    url: `https://www.legalbedek.co.il/projects/${c.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const videoPages: MetadataRoute.Sitemap = videos.map((v) => ({
    url: `https://www.legalbedek.co.il/videos/${videoSlug(v)}`,
    lastModified: VIDEOS_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: "https://www.legalbedek.co.il",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.legalbedek.co.il/bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.legalbedek.co.il/bedek-bayit/kablan",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.legalbedek.co.il/likuyey-bniya",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.legalbedek.co.il/projects",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.legalbedek.co.il/services",
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
      url: "https://www.legalbedek.co.il/blog",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/mehir-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/checklist-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.legalbedek.co.il/doch-ledugma",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/doch-ledugma-mefurat",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/about",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.legalbedek.co.il/mediniyut-pratiyut",
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.legalbedek.co.il/gallery",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/videos",
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/ezorei-sherut",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bedek-bayit-dira-hadasha",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bedek-bayit-nofei-ben-shemen",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bedek-bayit-dira-yad-shniya",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/matai-lehazmin-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/chok-hamkar-dirot",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/tikaney-instalatzia-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/tzilum-kavim-bdikat-tzanrat",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/taken-789-stiyot-mutarot",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.legalbedek.co.il/articles/protokol-mesira",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/giliti-likui-bedira-mi-achrai",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/itum-gagot-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/aluminium-zigug-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bdikat-zchuchit-zigug-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/likuyey-ritzuf-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bdikat-mamad-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/likuyey-tiyach-tzeva-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/likuyey-chashmal-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/likuyey-mitbach-negarut-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bdikat-mizug-avir-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bdikat-dud-shemesh-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.legalbedek.co.il/articles/alut-tikun-likuyey-bniya",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/hanmakhat-tikra-godel-cheder",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bdikat-maake-dira-hadasha",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bdikat-mirpeset-dira-hadasha",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bdikat-chipuyey-chutz-dira-hadasha",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bdikat-delet-knisa-dira",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/bdikat-chashmal-tikshoret-dira",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/likuyey-ritzuf-mishakim",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/gibenet-ritzuf-hadbakat-ariachim",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/retivut-eliya-kapilarit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/hefreshey-govah-bein-ariachim",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/mah-kolel-doch-bedek-bayit",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/chadirat-tzanrat-gag-lelo-sharvul",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.legalbedek.co.il/articles/itum-karka-shipua-sviv-bayit-prati",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
