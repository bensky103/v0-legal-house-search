import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cities } from "@/lib/seo-locations"
import { getCityProjectIndex } from "@/lib/projects"
import { SeoLandingTemplate } from "@/components/seo-landing-template"

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.city)
  if (!city) return {}

  const title = `בדק בית בפרויקטים חדשים ב${city.name} | בדיקת דירה מקבלן`
  const description = `בדק בית לדירות חדשות בפרויקטים ב${city.name}. בדיקה הנדסית לפני מסירת דירה מקבלן, איתור ליקויי בנייה ופרוטוקול מסירה מקצועי.`

  return {
    title,
    description,
    alternates: { canonical: `https://legalbedek.co.il/projects/${city.slug}` },
    openGraph: { title, description, url: `https://legalbedek.co.il/projects/${city.slug}`, type: "website" },
  }
}

export default function CityProjectsPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city)
  if (!city) notFound()

  const idx = getCityProjectIndex(city.slug)

  const intro =
    idx?.intro ??
    `${city.name} ממשיכה להתפתח עם פרויקטים חדשים של דירות מקבלן. רוכשי דירות חדשות ב${city.name} זקוקים לבדק בית מקצועי לפני מסירת הדירה, כדי לאתר ליקויי בנייה ולוודא שהדירה תואמת את המפרט והתקנים לפני קבלת המפתח.`

  const areasSection = idx?.buildingAreas?.length
    ? [
        {
          heading: `אזורי בנייה חדשה ב${city.name}`,
          paragraphs: [
            `הבנייה החדשה ב${city.name} מתרכזת באזורים ובשכונות הבאים: ${idx.buildingAreas.join(", ")}. בכל אחד מאזורים אלו אנו מבצעים בדק בית מקצועי לדירות חדשות מקבלן לפני מסירה.`,
            `מומחה בדק בית מכיר את שיטות הבנייה הנפוצות בפרויקטים חדשים ויודע לאתר את הליקויים האופייניים לדירות חדשות - מאיטום לקוי ועד סטיות במידות ובמפלסים.`,
          ],
        },
      ]
    : []

  return (
    <SeoLandingTemplate
      badge={`פרויקטים חדשים ב${city.name}`}
      title={`בדק בית בפרויקטים חדשים ב${city.name}`}
      subtitle={`בדק בית מקצועי לדירות חדשות מקבלן ב${city.name}. בדיקה לפני מסירה, איתור ליקויי בנייה וליווי בפרוטוקול המסירה מול הקבלן.`}
      intro={intro}
      featuresHeading={`בדק בית לדירה חדשה ב${city.name} - מה אנחנו בודקים`}
      features={[
        {
          title: "בדיקה לפני מסירה",
          description: `בדיקה הנדסית מקיפה של הדירה החדשה ב${city.name} לפני קבלת המפתח, לאיתור כל הליקויים מול הקבלן.`,
        },
        {
          title: "התאמה למפרט",
          description: "בדיקת התאמת הדירה למפרט הטכני שצורף לחוזה הרכישה - חומרי גמר, מידות וסטנדרט הבנייה.",
        },
        {
          title: "פרוטוקול מסירה",
          description: "ליווי מקצועי במעמד מסירת הדירה והכנת פרוטוקול מסירה מסודר עם כל הליקויים שנמצאו.",
        },
        {
          title: "בדיקת רטיבות ואיטום",
          description: "איתור בעיות איטום ורטיבות בדירה חדשה בעזרת מצלמה תרמית - לפני שהן הופכות לנזק יקר.",
        },
        {
          title: "בדיקת מערכות",
          description: "בדיקת מערכות חשמל, אינסטלציה, ביוב ומיזוג בדירה החדשה לפי התקנים הישראליים.",
        },
        {
          title: "מעקב תיקונים",
          description: "בדיקה חוזרת לאחר שהקבלן מתקן את הליקויים, לוודא שכל הליקויים תוקנו כראוי.",
        },
      ]}
      contentSections={[
        {
          heading: `למה לבצע בדק בית בדירה חדשה ב${city.name}?`,
          paragraphs: [
            `גם דירה חדשה מקבלן ב${city.name} עלולה להכיל ליקויי בנייה רבים. תקופת הבדק והאחריות מתחילה כבר ממועד מסירת הדירה, ולכן חשוב לאתר את כל הליקויים מוקדם ככל האפשר ולתעד אותם בפרוטוקול המסירה.`,
            `בדק בית מקצועי לפני מסירה מבטיח שתקבלו את הדירה במצב תקין, ושהקבלן יתקן על חשבונו את כל הליקויים - במקום שתגלו אותם רק לאחר שכבר נכנסתם לגור.`,
          ],
        },
        ...areasSection,
      ]}
      faq={[
        {
          question: `מתי כדאי לבצע בדק בית לדירה חדשה ב${city.name}?`,
          answer:
            "הזמן האידיאלי הוא מספר ימים לפני מועד מסירת הדירה, כך שניתן להציג לקבלן את רשימת הליקויים במעמד המסירה ולדרוש את תיקונם.",
        },
        {
          question: "מה ההבדל בין בדק בית לדירה חדשה לדירה יד שניה?",
          answer:
            "בדירה חדשה הדגש הוא על התאמה למפרט ולתקנים ואיתור ליקויי בנייה מול הקבלן, בעוד שבדירה יד שניה הדגש הוא על מצב הנכס ובלאי לצורך מיקוח על המחיר.",
        },
        {
          question: "האם תלוו אותנו גם במעמד המסירה מול הקבלן?",
          answer: "כן, אנו מספקים ליווי מקצועי במעמד המסירה ומכינים פרוטוקול מסירה מסודר הכולל את כל הליקויים שנמצאו.",
        },
      ]}
      ctaTitle={`רוכשים דירה חדשה ב${city.name}?`}
      ctaText={`צרו קשר עוד היום לתיאום בדק בית מקצועי לדירה החדשה שלכם ב${city.name} לפני מסירת הדירה מהקבלן.`}
      breadcrumbs={[
        { label: "דף הבית", href: "/" },
        { label: "פרויקטים חדשים", href: "/projects" },
        { label: city.name, href: `/projects/${city.slug}` },
      ]}
      relatedLinks={[
        { label: `בדק בית ב${city.name}`, href: `/bedek-bayit/${city.slug}` },
        { label: "בדק בית לפני מסירה", href: "/services/shechunot-hadashot" },
        { label: "ליקויי רטיבות", href: "/likuyey-bniya/retivut" },
      ]}
    />
  )
}
