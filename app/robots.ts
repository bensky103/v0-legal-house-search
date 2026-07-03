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
      "https://www.legalbedek.co.il/sitemap.xml",
      "https://www.legalbedek.co.il/image-sitemap.xml",
      "https://www.legalbedek.co.il/video-sitemap.xml",
    ],
    host: "https://www.legalbedek.co.il",
  }
}
