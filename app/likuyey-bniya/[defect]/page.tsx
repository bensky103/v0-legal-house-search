import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { defects, getDefect } from "@/lib/defects"
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
    keywords: [...defect.keywords, "בדק בית", "מומחה בדק בית", "איתור ליקויי בנייה"],
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

  const relatedLinks = defects
    .filter((d) => d.slug !== defect.slug)
    .map((d) => ({ label: `ליקויי ${d.name}`, href: `/likuyey-bniya/${d.slug}` }))

  return (
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
      contentSections={defect.sections}
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
  )
}
