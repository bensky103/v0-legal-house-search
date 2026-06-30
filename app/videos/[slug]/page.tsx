import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { videos, videoThumb, videoSchema } from "@/lib/videos"
import { videoArticles, getVideoBySlug, allVideoSlugs, videoSlug } from "@/lib/video-pages"
import { getDefect } from "@/lib/defects"
import { defectStandards } from "@/lib/defect-standards"
import { cities } from "@/lib/seo-locations"
import { LiteYouTube } from "@/components/lite-youtube"
import { SiteIndex } from "@/components/site-index"

const BASE = "https://legalbedek.co.il"

export function generateStaticParams() {
  return allVideoSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const video = getVideoBySlug(params.slug)
  if (!video) return {}
  const defect = video.topic !== "general" ? getDefect(video.topic) : undefined
  const url = `${BASE}/videos/${params.slug}`
  return {
    title: `${video.title} | בדק בית Legal`,
    description: video.description,
    keywords: [
      ...(defect?.keywords ?? []),
      "בדק בית",
      "סרטון בדק בית",
      "וידאו בדק בית",
      "איתור ליקויי בנייה",
      "מומחה בדק בית",
    ],
    authors: [{ name: "יגאל בנסקי" }],
    openGraph: {
      title: video.title,
      description: video.description,
      type: "video.other",
      locale: "he_IL",
      url,
      siteName: "בדק בית Legal",
      images: [{ url: videoThumb(video.id) }],
    },
    alternates: { canonical: url },
    robots: "index, follow",
  }
}

export default function VideoPage({ params }: { params: { slug: string } }) {
  const video = getVideoBySlug(params.slug)
  if (!video) notFound()

  const article = videoArticles[video.id]
  const defect = video.topic !== "general" ? getDefect(video.topic) : undefined
  const standards = defect ? defectStandards[defect.slug] ?? [] : []

  // Deterministic internal city links (spread videos across cities).
  const idx = videos.findIndex((v) => v.id === video.id)
  const cityLinks = [cities[idx % cities.length], cities[(idx + 3) % cities.length]].filter(
    (c, i, arr) => c && arr.findIndex((x) => x.slug === c.slug) === i,
  )

  // Other videos on the same topic, for internal linking.
  const relatedVideos = videos
    .filter((v) => v.topic === video.topic && v.id !== video.id)
    .slice(0, 3)

  const url = `${BASE}/videos/${params.slug}`

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: BASE },
      { "@type": "ListItem", position: 2, name: "סרטוני בדק בית", item: `${BASE}/videos` },
      { "@type": "ListItem", position: 3, name: video.title, item: url },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(video)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="ניווט" className="container mx-auto px-4 pt-6 text-sm text-gray-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-blue-700 hover:underline">דף הבית</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/videos" className="hover:text-blue-700 hover:underline">סרטוני בדק בית</Link></li>
          <li aria-hidden="true">›</li>
          <li className="text-gray-900 font-medium">{video.title}</li>
        </ol>
      </nav>

      <main>
      <article className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight text-balance">
          {video.title}
        </h1>

        {article?.intro && (
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">{article.intro}</p>
        )}

        <LiteYouTube id={video.id} title={video.title} />

        {defect && (
          <section className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              מה בודקים בבדיקת {defect.name}?
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">{defect.summary}</p>

            {defect.symptoms?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">סימנים שמעידים על הליקוי</h3>
                <ul className="list-disc pr-5 space-y-1 text-gray-700">
                  {defect.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            )}

            {defect.causes?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">הגורמים הנפוצים</h3>
                <ul className="list-disc pr-5 space-y-1 text-gray-700">
                  {defect.causes.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            )}

            {standards.length > 0 && (
              <div className="mb-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  תקנים ישראליים רלוונטיים
                </h3>
                <ul className="list-disc pr-5 space-y-1 text-gray-700">
                  {standards.map((st, i) => (
                    <li key={i}>{st.code} – {st.subject}: {st.note}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Internal links — the "SEO network" */}
        <section className="mt-10 rounded-xl bg-white ring-1 ring-slate-200 p-5 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">מידע נוסף ובדיקות קשורות</h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-blue-700">
            {defect && (
              <li>
                <Link href={`/likuyey-bniya/${defect.slug}`} className="hover:underline">
                  מדריך מלא: ליקויי {defect.name}
                </Link>
              </li>
            )}
            {cityLinks.map((c) => (
              <li key={c.slug}>
                <Link href={`/bedek-bayit/${c.slug}`} className="hover:underline">
                  בדק בית ב{c.name}
                </Link>
              </li>
            ))}
            <li><Link href="/projects" className="hover:underline">בדק בית בפרויקטים חדשים</Link></li>
            <li><Link href="/services" className="hover:underline">שירותי בדק בית</Link></li>
            <li><Link href="/videos" className="hover:underline">כל סרטוני הבדיקות</Link></li>
            <li><Link href="/gallery" className="hover:underline">גלריית בדיקות בשטח</Link></li>
          </ul>

          {relatedVideos.length > 0 && (
            <div className="mt-5 pt-5 border-t border-slate-200">
              <h3 className="text-base font-bold text-gray-900 mb-2">סרטונים נוספים בנושא</h3>
              <ul className="space-y-1 text-blue-700">
                {relatedVideos.map((v) => (
                  <li key={v.id}>
                    <Link href={`/videos/${videoSlug(v)}`} className="hover:underline">{v.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-2xl bg-gray-900 text-white p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">צריכים בדק בית מקצועי?</h2>
          <p className="text-gray-200 mb-6 leading-relaxed">
            מומחה מוסמך, ציוד מתקדם וחוות דעת הנדסית הקבילה משפטית - בדירות חדשות, יד שנייה ובתים פרטיים בכל הארץ.
          </p>
          <a
            href="tel:073-3745044"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            חייגו עכשיו: 073-3745044
          </a>
        </section>
      </article>
      </main>

      <SiteIndex />
    </div>
  )
}
