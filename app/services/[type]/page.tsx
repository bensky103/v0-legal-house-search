import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projectTypes } from "@/lib/seo-locations"
import { SeoLandingTemplate } from "@/components/seo-landing-template"

export function generateStaticParams() {
  return projectTypes.map((p) => ({ type: p.slug }))
}

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
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
