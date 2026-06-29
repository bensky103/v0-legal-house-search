import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projectTypes } from "@/lib/seo-locations"
import { services, getServiceBySlug } from "@/lib/services"
import { getArticlesForService } from "@/lib/articles"
import { getServiceImages } from "@/lib/topic-images"
import { defects } from "@/lib/defects"
import { SeoLandingTemplate } from "@/components/seo-landing-template"

export function generateStaticParams() {
  return [...services.map((s) => ({ type: s.slug })), ...projectTypes.map((p) => ({ type: p.slug }))]
}

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const service = getServiceBySlug(params.type)
  if (service) {
    return {
      title: service.title,
      description: service.metaDescription,
      keywords: [...service.keywords, "בדק בית", "מומחה בדק בית", "איתור ליקויי בנייה"],
      authors: [{ name: "יגאל בנסקי" }],
      openGraph: {
        title: service.title,
        description: service.metaDescription,
        type: "website",
        locale: "he_IL",
        url: `https://legalbedek.co.il/services/${service.slug}`,
        siteName: "בדק בית Legal",
      },
      alternates: { canonical: `https://legalbedek.co.il/services/${service.slug}` },
      robots: "index, follow",
    }
  }

  const project = projectTypes.find((p) => p.slug === params.type)
  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
    keywords: [...project.keywords, "בדק בית", "מומחה בדק בית", "איתור ליקויי בנייה"],
    authors: [{ name: "יגאל בנסקי" }],
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      locale: "he_IL",
      url: `https://legalbedek.co.il/services/${project.slug}`,
      siteName: "בדק בית Legal",
    },
    alternates: {
      canonical: `https://legalbedek.co.il/services/${project.slug}`,
    },
    robots: "index, follow",
  }
}

export default function ServicePage({ params }: { params: { type: string } }) {
  const service = getServiceBySlug(params.type)
  if (service) return <DedicatedService slug={service.slug} />

  const project = projectTypes.find((p) => p.slug === params.type)
  if (!project) notFound()

  const relatedLinks = projectTypes
    .filter((p) => p.slug !== project.slug)
    .map((p) => ({ label: `בדק בית ${p.name}`, href: `/services/${p.slug}` }))

  return (
    <SeoLandingTemplate
      badge={`התמחות ב${project.name}`}
      title={`בדק בית ${project.name} - מומחה לאיתור ליקויי בנייה`}
      subtitle={project.description}
      intro={`משרד בדק בית Legal מתמחה בבדיקה הנדסית של דירות ב${project.name}. אנו מבצעים בדיקה מקיפה לפי תקני הבנייה הישראליים, מאתרים ליקויי בנייה ומספקים חוות דעת מקצועית הקבילה משפטית - כדי שתקבלו בדיוק את מה שמגיע לכם.`}
      features={[
        {
          title: "בדיקה לפני מסירה",
          description: `בדיקה הנדסית מקיפה של הדירה ב${project.name} לפני מסירה, לאיתור כל הליקויים והחריגות.`,
        },
        {
          title: "ליווי מול הקבלן",
          description: "ליווי מקצועי מול הקבלן או היזם עד לתיקון מלא של כל הליקויים שנמצאו.",
        },
        {
          title: "איתור רטיבות ואיטום",
          description: "בדיקת בעיות רטיבות, איטום וחדירת מים בעזרת מצלמה תרמית וציוד מתקדם.",
        },
        {
          title: "בדיקת מערכות",
          description: "בדיקת מערכות חשמל, אינסטלציה, ביוב ומיזוג אוויר לפי התקנים הישראליים.",
        },
        {
          title: "חוות דעת הנדסית",
          description: "דוח מפורט וחוות דעת מקצועית הקבילה משפטית מול הקבלן או היזם.",
        },
        {
          title: "התאמה לחוזה",
          description: `בדיקת התאמת הדירה למפרט הטכני ולחוזה שנחתם בפרויקט ${project.name}.`,
        },
      ]}
      contentSections={[
        {
          heading: `למה חשוב בדק בית בפרויקט ${project.name}?`,
          paragraphs: [
            `דירות ב${project.name} עוברות תהליכי בנייה מורכבים, ולעיתים קרובות נמסרות עם ליקויי בנייה שאינם נראים לעין הלא מקצועית. בדק בית הנדסי מקצועי מבטיח שתקבלו דירה תקינה ובאיכות שהובטחה לכם.`,
            `מומחה בדק בית מוסמך בודק את הדירה לפי תקני הבנייה הישראליים, מאתר את כל הליקויים ומספק דוח מפורט המאפשר לדרוש תיקונים מהקבלן לפני שאתם חותמים על קבלת הדירה.`,
          ],
        },
        {
          heading: "מה בודקים בבדק בית?",
          paragraphs: [
            "הבדיקה כוללת את כל מרכיבי הדירה: ריצוף וחיפויים, מערכות חשמל ואינסטלציה, איטום ורטיבות, דלתות וחלונות, מטבח, חדרי רחצה, מרפסות ועוד.",
            "בנוסף, אנו בודקים את התאמת הדירה למפרט הטכני שצורף לחוזה, ומוודאים שכל מה שהובטח אכן בוצע כראוי.",
          ],
        },
      ]}
      faq={[
        {
          question: `מתי כדאי לבצע בדק בית ב${project.name}?`,
          answer: "מומלץ לבצע את הבדיקה לפני מסירת הדירה הרשמית, כדי שתוכלו לדרוש תיקונים מהקבלן לפני קבלת המפתח.",
        },
        {
          question: "מה עושים אם נמצאים ליקויים?",
          answer: "אנו מספקים דוח מפורט ומלווים אתכם מול הקבלן עד לתיקון מלא של כל הליקויים שנמצאו בבדיקה.",
        },
        {
          question: "האם הדוח קביל משפטית?",
          answer: "כן, הדוח נערך על ידי מומחה מוסמך באיגוד המהנדסים וברישיון משרד העבודה, והוא קביל לשימוש משפטי.",
        },
      ]}
      ctaTitle={`צריכים בדק בית ב${project.name}?`}
      ctaText="צרו קשר עוד היום לתיאום בדיקה הנדסית מקצועית. מומחה מוסמך, שירות מהיר וחוות דעת מקצועית."
      relatedLinks={relatedLinks}
      breadcrumbs={[
        { label: "דף הבית", href: "/" },
        { label: "סוגי פרויקטים", href: "/services" },
        { label: project.name, href: `/services/${project.slug}` },
      ]}
    />
  )
}

// Rich, dedicated service page (P8) — full content from lib/services.ts plus Service schema.
function DedicatedService({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug)!
  const baseUrl = "https://legalbedek.co.il"

  // Contextual internal links (P2): other services + related construction defects.
  const relatedServiceLinks = (service.relatedServices ?? [])
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({ label: s.name, href: `/services/${s.slug}` }))

  const relatedDefectLinks = (service.relatedDefects ?? [])
    .map((d) => defects.find((x) => x.slug === d))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .map((d) => ({ label: `ליקויי ${d.name}`, href: `/likuyey-bniya/${d.slug}` }))

  const articleLinks = getArticlesForService(service.slug).map((a) => ({
    label: `מאמר: ${a.title}`,
    href: `/articles/${a.slug}`,
  }))

  const relatedLinks = [
    ...relatedServiceLinks,
    ...articleLinks,
    ...relatedDefectLinks,
    { label: "בדק בית לפי עיר", href: "/bedek-bayit" },
    { label: "מאגר ליקויי הבנייה", href: "/likuyey-bniya" },
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${baseUrl}/services/${service.slug}`,
    areaServed: { "@type": "Country", name: "ישראל" },
    provider: {
      "@type": "ProfessionalService",
      "@id": `${baseUrl}/#organization`,
      name: "בדק בית Legal - יגאל בנסקי",
      url: baseUrl,
      telephone: "+972-50-627-7858",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SeoLandingTemplate
        badge={service.badge}
        title={service.title}
        subtitle={service.subtitle}
        intro={service.intro}
        featuresHeading={`מה כולל שירות ${service.name}?`}
        features={service.features}
        gallery={getServiceImages(service.slug)}
        galleryHeading={`תמונות מבדיקות בשטח - ${service.name}`}
        contentSections={service.contentSections}
        bulletSections={service.bulletSections}
        faq={service.faq}
        ctaTitle={`צריכים ${service.name}?`}
        ctaText="צרו קשר עוד היום לתיאום ולקבלת הצעת מחיר. מומחה מוסמך, שירות מהיר וחוות דעת מקצועית בכל הארץ."
        relatedLinks={relatedLinks}
        breadcrumbs={[
          { label: "דף הבית", href: "/" },
          { label: "שירותי בדק בית", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />
    </>
  )
}
