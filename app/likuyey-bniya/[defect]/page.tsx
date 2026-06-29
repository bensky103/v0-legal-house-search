import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { defects, getDefect } from "@/lib/defects"
import { defectStandards } from "@/lib/defect-standards"
import { services } from "@/lib/services"
import { cities } from "@/lib/seo-locations"
import { getArticlesForDefect } from "@/lib/articles"
import { getDefectImages } from "@/lib/topic-images"
import { getVideosForTopic, videoSchema } from "@/lib/videos"
import { SeoLandingTemplate } from "@/components/seo-landing-template"

export function generateStaticParams() {
  return defects.map((d) => ({ defect: d.slug }))
}

export function generateMetadata({ params }: { params: { defect: string } }): Metadata {
  const defect = getDefect(params.defect)
  if (!defect) return {}

  return {
    title: defect.title,
    description: defect.metaDescription,
    keywords: [
      ...defect.keywords,
      ...(defectStandards[defect.slug] ?? []).map((s) => s.code),
      "בדק בית",
      "מומחה בדק בית",
      "איתור ליקויי בנייה",
      "תקנים ישראליים",
    ],
    authors: [{ name: "יגאל בנסקי" }],
    openGraph: {
      title: defect.title,
      description: defect.metaDescription,
      type: "article",
      locale: "he_IL",
      url: `https://legalbedek.co.il/likuyey-bniya/${defect.slug}`,
      siteName: "בדק בית Legal",
    },
    alternates: {
      canonical: `https://legalbedek.co.il/likuyey-bniya/${defect.slug}`,
    },
    robots: "index, follow",
  }
}

export default function DefectPage({ params }: { params: { defect: string } }) {
  const defect = getDefect(params.defect)
  if (!defect) notFound()

  // Relevant Israeli standards (תקנים ישראליים) for this defect — authoritative,
  // SEO-rich content appended as an extra content section when available.
  const standards = defectStandards[defect.slug] ?? []
  const standardsSection =
    standards.length > 0
      ? {
          heading: `תקנים ישראליים רלוונטיים לליקויי ${defect.name}`,
          paragraphs: [
            `בדיקת ליקויי ${defect.name} מתבצעת על פי התקנים הישראליים המחייבים ותקנות התכנון והבנייה. הכרת התקנים מאפשרת לקבוע באופן מקצועי ואובייקטיבי האם מדובר בליקוי בנייה או בסטייה המותרת לפי התקן — בסיס חיוני לכל חוות דעת הנדסית מול הקבלן. אלו התקנים המרכזיים הרלוונטיים:`,
            ...standards.map((s) => `${s.code} – ${s.subject}: ${s.note}`),
          ],
        }
      : null

  const contentSections = standardsSection
    ? [...defect.sections, standardsSection]
    : defect.sections

  // Contextual internal links (P2): related defects + the services that handle this
  // kind of defect + a few cities, so the page is a hub rather than a dead-end.
  const relatedDefectLinks = defects
    .filter((d) => d.slug !== defect.slug)
    .slice(0, 6)
    .map((d) => ({ label: `ליקויי ${d.name}`, href: `/likuyey-bniya/${d.slug}` }))

  const serviceSlugs = ["itur-likuyey-bniya", "chavat-daat-mumche", "haarachat-aluyot-tikun"]
  const serviceLinks = serviceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({ label: s.name, href: `/services/${s.slug}` }))

  const cityLinks = cities
    .slice(0, 4)
    .map((c) => ({ label: `בדק בית ב${c.name}`, href: `/bedek-bayit/${c.slug}` }))

  const articleLinks = getArticlesForDefect(defect.slug).map((a) => ({
    label: `מאמר: ${a.title}`,
    href: `/articles/${a.slug}`,
  }))

  const relatedLinks = [...serviceLinks, ...articleLinks, ...relatedDefectLinks, ...cityLinks]

  // P7 — Service schema for the defect-inspection service this page describes.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `איתור וטיפול בליקויי ${defect.name}`,
    serviceType: `בדק בית - ליקויי ${defect.name}`,
    description: defect.metaDescription,
    url: `https://legalbedek.co.il/likuyey-bniya/${defect.slug}`,
    areaServed: { "@type": "Country", name: "ישראל" },
    provider: {
      "@type": "ProfessionalService",
      "@id": "https://legalbedek.co.il/#organization",
      name: "בדק בית Legal - יגאל בנסקי",
      url: "https://legalbedek.co.il",
      telephone: "+972-50-627-7858",
    },
  }

  const topicVideos = getVideosForTopic(defect.slug)

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    {topicVideos.map((v) => (
      <script
        key={v.id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(v)) }}
      />
    ))}
    <SeoLandingTemplate
      badge="מדריך ליקויי בנייה"
      title={`ליקויי ${defect.name} בדירה - מדריך מקצועי`}
      subtitle={defect.summary}
      intro={defect.intro}
      featuresHeading="איך אנחנו מטפלים בליקוי הזה?"
      features={[
        {
          title: "איתור עם מצלמה תרמית",
          description: "זיהוי הליקוי גם כשהוא נסתר מהעין, באמצעות מצלמה תרמית וציוד מדידה מתקדם.",
        },
        {
          title: "אבחון מקור הבעיה",
          description: "לא רק זיהוי הליקוי אלא הבנת הגורם לו, כדי שהתיקון יטפל בשורש הבעיה.",
        },
        {
          title: "תיעוד בדוח מקצועי",
          description: "תיעוד מסודר של הליקוי בדוח הקביל משפטית מול הקבלן או המוכר.",
        },
        {
          title: "ליווי עד לתיקון",
          description: "ליווי מקצועי מול הקבלן או היזם עד לתיקון מלא של הליקוי.",
        },
      ]}
      bulletSections={[
        { heading: "סימנים שמעידים על הליקוי", items: defect.symptoms },
        { heading: "הגורמים הנפוצים", items: defect.causes },
      ]}
      gallery={getDefectImages(defect.slug)}
      galleryHeading={`תמונות מבדיקות בשטח - איתור ליקויי ${defect.name}`}
      videos={topicVideos.map((v) => ({ id: v.id, title: v.title }))}
      videosHeading={`סרטוני בדיקות בשטח - ליקויי ${defect.name}`}
      contentSections={contentSections}
      faq={defect.faq}
      ctaTitle={`חושדים בליקוי ${defect.name} בדירה?`}
      ctaText="צרו קשר עוד היום לתיאום בדיקה הנדסית מקצועית. אנו נאתר את הליקוי, נאבחן את מקורו ונספק לכם חוות דעת מקצועית."
      relatedLinks={relatedLinks}
      breadcrumbs={[
        { label: "דף הבית", href: "/" },
        { label: "ליקויי בנייה", href: "/likuyey-bniya" },
        { label: `ליקויי ${defect.name}`, href: `/likuyey-bniya/${defect.slug}` },
      ]}
    />
    </>
  )
}
