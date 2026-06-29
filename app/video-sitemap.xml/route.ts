import { videos, videoThumb, videoEmbedUrl } from "@/lib/videos"

// Google video sitemap. Lists every embedded YouTube video under the page it
// appears on, so the videos are discoverable for Google video rich results.
// https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps

export const dynamic = "force-static"

const SITE = "https://legalbedek.co.il"

// Page a video primarily appears on: its defect page, or the videos hub.
function pageUrl(topic: string): string {
  return topic === "general" ? `${SITE}/videos` : `${SITE}/likuyey-bniya/${topic}`
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export function GET() {
  // Group videos by the page they appear on.
  const byPage = new Map<string, typeof videos>()
  for (const v of videos) {
    const url = pageUrl(v.topic)
    const list = byPage.get(url) ?? []
    list.push(v)
    byPage.set(url, list)
  }

  const urlEntries = Array.from(byPage.entries())
    .map(([url, vids]) => {
      const videoTags = vids
        .map(
          (v) =>
            `    <video:video>\n` +
            `      <video:thumbnail_loc>${escapeXml(videoThumb(v.id))}</video:thumbnail_loc>\n` +
            `      <video:title>${escapeXml(v.title)}</video:title>\n` +
            `      <video:description>${escapeXml(v.description)}</video:description>\n` +
            `      <video:player_loc>${escapeXml(videoEmbedUrl(v.id))}</video:player_loc>\n` +
            `      <video:publication_date>${v.uploadDate}T00:00:00+00:00</video:publication_date>\n` +
            `      <video:family_friendly>yes</video:family_friendly>\n` +
            `    </video:video>`,
        )
        .join("\n")
      return `  <url>\n    <loc>${escapeXml(url)}</loc>\n${videoTags}\n  </url>`
    })
    .join("\n")

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n` +
    `${urlEntries}\n` +
    `</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
