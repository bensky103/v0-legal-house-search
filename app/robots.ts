import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: [
      "https://legalbedek.co.il/sitemap.xml",
      "https://legalbedek.co.il/image-sitemap.xml",
      "https://legalbedek.co.il/video-sitemap.xml",
    ],
    host: "https://legalbedek.co.il",
  }
}
