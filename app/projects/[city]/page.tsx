import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cities, getContractorsForCity } from "@/lib/seo-locations"
import { getCityProjectIndex } from "@/lib/projects"
import { SeoLandingTemplate } from "@/components/seo-landing-template"

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.city)
  if (!city) return {}

  const projects = getCityProjectIndex(city.slug)?.projects ?? []
  const projectsHint = projects.length ? ` ביניהם ${projects.slice(0, 3).join(", ")}.` : ""

  const title = `בדק בית בפרויקטים חדשים ב${city.name} | בדיקת דירה מקבלן`
  const description = `בדק בית לדירות חדשות בפרויקטים ב${city.name}.${projectsHint} בדיקה הנדסית לפני מסירת דירה מקבלן, איתור ליקויי בנייה ופרוטוקול מסירה מקצועי.`

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
    `${city.name} ממשיכה להתפתח עם פרויקטים חדשים של דירות מקבלן. רוכשי דירות חדשות ב${city.name} זקוקים לבדק בית מקצועי במועד מסירת הדירה, כדי לאתר ליקויי בנייה ולוודא שהדירה תואמת את המפרט והתקנים במעמד המסירה.`

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

  const projects = idx?.projects ?? []
  const projectsSection = projects.length
    ? [
        {
          heading: `פרויקטים חדשים ב${city.name} שבהם אנו מבצעים בדק בית`,
          paragraphs: [
            `${city.name} מתאפיינת בפרויקטי מגורים חדשים רבים. בין הפרויקטים והשכונות החדשות בעיר: ${projects.join(", ")}. בכל פרויקט כזה אנו מבצעים בדק בית מקצועי לדירה חדשה במעמד המסירה מהקבלן — בדיקת התאמה למפרט, איתור ליקויי בנייה והכנת פרוטוקול מסירה.`,
            `אם אתם רוכשים דירה באחד הפרויקטים החדשים ב${city.name}, חשוב לבצע בדק בית במעמד המסירה — כדי לאתר את הליקויים בזמן, בעוד תקופת הבדק והאחריות בתוקף, ולחייב את הקבלן בתיקונם על חשבונו.`,
          ],
        },
      ]
    : []

  return (
    <SeoLandingTemplate
      badge={`פרויקטים חדשים ב${city.name}`}
      title={`בדק בית בפרויקטים חדשים ב${city.name}`}
      subtitle={`בדק בית מקצועי לדירות חדשות מקבלן ב${city.name}. בדיקת מסירה, איתור ליקויי בנייה וליווי בפרוטוקול המסירה מול הקבלן.`}
      intro={intro}
      featuresHeading={`בדק בית לדירה חדשה ב${city.name} - מה אנחנו בודקים`}
      features={[
        {
          title: "בדיקת מסירה",
          description: `בדיקה הנדסית מקיפה של הדירה החדשה ב${city.name} במעמד המסירה, לאיתור כל הליקויים מול הקבלן.`,
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
            `גם דירה חדשה מקבלן ב${city.name} עלולה להכיל ליקויי בנייה רבים. תקופת הבדק והאחריות מתחילה כבר ממועד מסירת הדירה, ולכן חשוב לאתר ולתעד את כל הליקויים בפרוטוקול המסירה.`,
            `בדק בית מקצועי במעמד המסירה מבטיח שתקבלו את הדירה במצב תקין, ושהקבלן יתקן על חשבונו את כל הליקויים - במקום שתגלו אותם רק לאחר שכבר נכנסתם לגור.`,
          ],
        },
        {
          heading: `מתי לבצע את בדק הבית ב${city.name}?`,
          paragraphs: [
            `בניגוד למה שנהוג לחשוב, רוב הקבלנים אינם מאפשרים בדק בית שבועות לפני המסירה. הבדיקה מתבצעת במעמד מסירת הדירה עצמו, או סמוך לו ככל הניתן - ולכן חשוב לתאם את המומחה למועד המסירה.`,
            `הקרבה למועד המסירה קריטית: כל עוד הקבלן נמצא באתר עם צוותים וחומרים זמינים, התיקון מהיר וזול עבורו; וככל שהבדיקה סמוכה למסירה, כך נמנעת הטענה שהדייר עצמו גרם לליקוי. כל ליקוי שמתועד נכנס לפרוטוקול המסירה ומחייב את הקבלן בתיקון.`,
          ],
        },
        ...projectsSection,
        ...areasSection,
        ...(idx?.extraSections ?? []),
      ]}
      bulletSections={
        projects.length
          ? [
              {
                heading: `בדק בית בפרויקטים חדשים ב${city.name}`,
                items: projects.map((p) => `בדק בית בפרויקט ${p} ב${city.name}`),
              },
            ]
          : undefined
      }
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
      ctaText={`צרו קשר עוד היום לתיאום בדק בית מקצועי לדירה החדשה שלכם ב${city.name} במועד מסירת הדירה מהקבלן.`}
      breadcrumbs={[
        { label: "דף הבית", href: "/" },
        { label: "פרויקטים חדשים", href: "/projects" },
        { label: city.name, href: `/projects/${city.slug}` },
      ]}
      relatedLinks={[
        { label: `בדק בית ב${city.name}`, href: `/bedek-bayit/${city.slug}` },
        ...getContractorsForCity(city.slug).map((c) => ({
          label: `בדק בית בפרויקטים של ${c.name}`,
          href: `/bedek-bayit/kablan/${c.slug}`,
        })),
        { label: "בדק בית לפני מסירה", href: "/services/shechunot-hadashot" },
        { label: "ליקויי רטיבות", href: "/likuyey-bniya/retivut" },
      ]}
    />
  )
}
