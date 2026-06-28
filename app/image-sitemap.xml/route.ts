import { seoImages } from "@/lib/site-images"
import { articleSitemapImages } from "@/lib/article-images"

// Google Image sitemap (image sitemap extension). Groups every indexable image
// under the page it appears on so all images are discoverable in Google Images.
// Combines branding/hero/testimonial + gallery images with the article photos.
// https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps

export const dynamic = "force-static"

// loc + title + caption + pageUrl is all the image-sitemap XML needs.
type SitemapImage = { loc: string; title: string; caption: string; pageUrl: string }
const allImages: SitemapImage[] = [...seoImages, ...articleSitemapImages]

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export function GET() {
  // Group images by the page they appear on.
  const byPage = new Map<string, SitemapImage[]>()
  for (const img of allImages) {
    const list = byPage.get(img.pageUrl) ?? []
    list.push(img)
    byPage.set(img.pageUrl, list)
  }

  const urlEntries = Array.from(byPage.entries())
    .map(([pageUrl, images]) => {
      const imageTags = images
        .map(
          (img) =>
            `    <image:image>\n` +
            `      <image:loc>${escapeXml(img.loc)}</image:loc>\n` +
            `      <image:title>${escapeXml(img.title)}</image:title>\n` +
            `      <image:caption>${escapeXml(img.caption)}</image:caption>\n` +
            `    </image:image>`,
        )
        .join("\n")
      return `  <url>\n    <loc>${escapeXml(pageUrl)}</loc>\n${imageTags}\n  </url>`
    })
    .join("\n")

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    `${urlEntries}\n` +
    `</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
