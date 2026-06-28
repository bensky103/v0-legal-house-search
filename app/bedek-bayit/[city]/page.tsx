import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cities } from "@/lib/seo-locations"
import { getCityProfile } from "@/lib/city-profiles"
import { getCityProjectIndex } from "@/lib/projects"
import { getCityProjects } from "@/lib/city-projects"
import { defects } from "@/lib/defects"
import { services } from "@/lib/services"
import { SeoLandingTemplate } from "@/components/seo-landing-template"

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.city)
  if (!city) return {}

  const title = `בדק בית ב${city.name} | מומחה בדק בית לדירות חדשות ויד שניה`
  const description = `בדק בית הנדסי ב${city.name} - איתור ליקויי בנייה, בדיקת דירה לפני מסירה ובדיקת נכס יד שניה. מומחה מוסמך באיגוד המהנדסים, שירות מקצועי ב${city.region}. חייגו עכשיו!`

  // Real project names become keywords so "<project> בדק בית" searches match this page.
  const projectKeywords = getCityProjects(city.slug).flatMap((p) => [
    `בדק בית ${p.name}`,
    `${p.name} ${city.nameSimple}`,
  ])

  return {
    title,
    description,
    keywords: [
      `בדק בית ${city.nameSimple}`,
      `בדק בית ב${city.nameSimple}`,
      `איתור ליקויי בנייה ${city.nameSimple}`,
      `בדיקת דירה ${city.nameSimple}`,
      `בדק בית דירה חדשה ${city.nameSimple}`,
      `בדק בית יד שניה ${city.nameSimple}`,
      ...projectKeywords,
      "בדק בית",
      "מומחה בדק בית",
    ],
    authors: [{ name: "יגאל בנסקי" }],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "he_IL",
      url: `https://legalbedek.co.il/bedek-bayit/${city.slug}`,
      siteName: "בדק בית Legal",
    },
    alternates: {
      canonical: `https://legalbedek.co.il/bedek-bayit/${city.slug}`,
    },
    robots: "index, follow",
  }
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city)
  if (!city) notFound()

  const profile = getCityProfile(city.slug)
  const projectIndex = getCityProjectIndex(city.slug)
  const cityProjectList = getCityProjects(city.slug)

  // Named real projects rendered as H3 sub-headings (the site owner's data) — targets
  // "<project name> בדק בית" long-tail searches by residents of those projects.
  const projectsSection =
    cityProjectList.length > 0
      ? {
          heading: `בדק בית בפרויקטים חדשים ב${city.name}`,
          intro: `אנו מבצעים בדק בית ובדיקת מסירה בפרויקטים החדשים הבולטים ב${city.name}. אם רכשתם דירה באחד מהפרויקטים הבאים, אנו נלווה אתכם בבדיקה הנדסית מקצועית לפני קבלת המפתח ובאיתור ליקויי בנייה מול הקבלן:`,
          projects: cityProjectList,
        }
      : undefined

  // Contextual internal links (P2): the city's real new-construction projects, related
  // construction defects, core services and nearby cities — 10+ links per page.
  const nearbyCityLinks = cities
    .filter((c) => c.slug !== city.slug && c.region === city.region)
    .slice(0, 5)
    .map((c) => ({ label: `בדק בית ב${c.name}`, href: `/bedek-bayit/${c.slug}` }))

  const otherCityLinks = cities
    .filter((c) => c.slug !== city.slug && c.region !== city.region)
    .slice(0, 3)
    .map((c) => ({ label: `בדק בית ב${c.name}`, href: `/bedek-bayit/${c.slug}` }))

  const defectLinks = defects
    .slice(0, 4)
    .map((d) => ({ label: `ליקויי ${d.name}`, href: `/likuyey-bniya/${d.slug}` }))

  const serviceLinks = services
    .slice(0, 3)
    .map((s) => ({ label: s.name, href: `/services/${s.slug}` }))

  const relatedLinks = [
    ...(projectIndex ? [{ label: `פרויקטים חדשים ב${city.nameSimple}`, href: `/projects/${city.slug}` }] : []),
    ...serviceLinks,
    ...defectLinks,
    ...nearbyCityLinks,
    ...otherCityLinks,
  ]

  // Generic, name-interpolated content used for cities without a dedicated profile.
  const genericFeatures = [
    {
      title: "בדיקת דירה חדשה מקבלן",
      description: `בדיקה הנדסית מקיפה של דירה חדשה ב${city.name} לפני מסירה, איתור ליקויים וליווי מול הקבלן עד לתיקון מלא.`,
    },
    {
      title: "בדיקת דירה יד שניה",
      description: `בדיקת נכס יד שניה ב${city.name} לפני רכישה - דעו בדיוק מה אתם קונים וקבלו כלי מיקוח להורדת המחיר.`,
    },
    {
      title: "איתור רטיבות ואיטום",
      description: "איתור בעיות רטיבות, איטום וחדירת מים בעזרת מצלמה תרמית וציוד מתקדם.",
    },
    {
      title: "בדיקת מערכות",
      description: "בדיקת מערכות חשמל, אינסטלציה, ביוב ומיזוג אוויר לפי התקנים הישראליים.",
    },
    {
      title: "חוות דעת הנדסית",
      description: "דוח מפורט וחוות דעת מקצועית הקבילה משפטית, שתשמש אתכם מול הקבלן או המוכר.",
    },
    {
      title: "חוות דעת נגדית",
      description: "חוות דעת נגדית מקצועית לקבלנים ובעלי נכסים המתמודדים מול דוחות בדיקה אחרים.",
    },
  ]

  const genericSections = [
    {
      heading: `למה חשוב לבצע בדק בית ב${city.name}?`,
      paragraphs: [
        `רכישת דירה היא אחת ההשקעות הגדולות בחיים, ו${city.name} אינה יוצאת דופן. בדק בית הנדסי מקצועי חושף ליקויי בנייה סמויים שעלולים לעלות לכם עשרות אלפי שקלים בעתיד.`,
        `מחקר שנערך בטכניון - מכון טכנולוגי לישראל - מצא כי כמעט בכל דירה חדשה בישראל מתגלים ליקויי בנייה. לכן בדק בית מקצועי לפני מסירה הוא קריטי גם בדירות חדשות מקבלן ב${city.name}.`,
        `מומחה בדק בית מוסמך בודק את הנכס לפי תקני הבנייה הישראליים, מאתר חריגות וליקויים, ומספק לכם דוח מפורט שמאפשר לדרוש תיקונים מהקבלן או להוריד את מחיר הדירה במשא ומתן מול המוכר.`,
      ],
    },
    {
      heading: `בדק בית לדירות יד שניה ב${city.name}`,
      paragraphs: [
        `כשרוכשים דירת יד שניה ב${city.name}, חשוב לדעת בדיוק מה מצב הנכס הפיזי לפני החתימה על החוזה. בדיקה הנדסית מקצועית מגלה ליקויים נסתרים, בעיות רטיבות, סדקים ובלאי של מערכות.`,
        `מעבר להיבט ההנדסי, ממצאי הבדיקה משמשים ככלי מיקוח רב עוצמה במשא ומתן על מחיר הדירה - לעיתים ניתן לחסוך עשרות אלפי שקלים בזכות הבדיקה.`,
      ],
    },
    {
      heading: "זמינות גבוהה ושירות מהיר",
      paragraphs: [
        `אנו מספקים שירות בדק בית ב${city.name} בהתראה קצרה. אם הקבלן מבקש למסור את הדירה במהירות, או אם אתם במשא ומתן על רכישת נכס - מומחה בדק בית זמין מהיום למחר.`,
      ],
    },
  ]

  const genericFaq = [
    {
      question: `כמה עולה בדק בית ב${city.name}?`,
      answer: "עלות בדק בית משתנה בהתאם לגודל הדירה וסוג הבדיקה. צרו קשר לקבלת הצעת מחיר מותאמת אישית ללא התחייבות.",
    },
    {
      question: "כמה זמן לוקחת בדיקת בדק בית?",
      answer: "בדיקה ממוצעת של דירה אורכת בין שעתיים לשלוש שעות, ודוח מפורט נמסר תוך מספר ימים.",
    },
    {
      question: "האם הדוח קביל משפטית?",
      answer: "כן, הדוח נערך על ידי מומחה מוסמך באיגוד המהנדסים וברישיון משרד העבודה, והוא קביל לשימוש משפטי מול קבלנים ובתי משפט.",
    },
    {
      question: `האם אתם מבצעים בדק בית גם בערים סמוכות ל${city.name}?`,
      answer: `כן, אנו מספקים שירותי בדק בית ב${city.name} ובכל אזור ${city.region}, וכן בכל רחבי הארץ.`,
    },
  ]

  const intro = profile
    ? profile.intro
    : `${city.description} משרד בדק בית Legal מספק שירותי בדק בית הנדסי מקיפים ב${city.name} ובכל אזור ${city.region}. בין אם רכשתם דירה חדשה מקבלן או דירת יד שניה, אנו נבדוק את הנכס ביסודיות, נאתר ליקויי בנייה ונספק לכם חוות דעת מקצועית שתסייע לכם להבטיח את ההשקעה שלכם.`

  return (
    <SeoLandingTemplate
      badge={`שירות ב${city.name} וב${city.region}`}
      title={`בדק בית ב${city.name} - מומחה לאיתור ליקויי בנייה`}
      subtitle={`בדק בית הנדסי מקצועי ב${city.name} לדירות חדשות ויד שניה. איתור ליקויי בנייה, בדיקה לפני מסירת דירה וחוות דעת מקצועית מטעם מומחה מוסמך.`}
      intro={intro}
      features={profile ? profile.features : genericFeatures}
      contentSections={profile ? profile.sections : genericSections}
      projectsSection={projectsSection}
      faq={profile ? profile.faq : genericFaq}
      ctaTitle={`צריכים בדק בית ב${city.name}?`}
      ctaText={`צרו קשר עוד היום לתיאום בדיקה הנדסית מקצועית של הנכס שלכם ב${city.name}. מומחה מוסמך, שירות מהיר וחוות דעת מקצועית.`}
      relatedLinks={relatedLinks}
      breadcrumbs={[
        { label: "דף הבית", href: "/" },
        { label: "בדק בית לפי עיר", href: "/bedek-bayit" },
        { label: city.name, href: `/bedek-bayit/${city.slug}` },
      ]}
    />
  )
}
