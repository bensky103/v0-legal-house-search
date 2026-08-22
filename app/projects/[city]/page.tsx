import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cities, getContractorsForCity } from "@/lib/seo-locations"
import { getCityProjectIndex } from "@/lib/projects"
import { getCityProjects, type CityProject } from "@/lib/city-projects"
import { getCityProfile } from "@/lib/city-profiles"
import { SeoLandingTemplate } from "@/components/seo-landing-template"

/**
 * Project names and building areas for a city.
 *
 * `cityProjectIndexes` (lib/projects.ts) covers 33 cities. The remaining ones
 * used to fall through to the bare template — same words, only the city name
 * swapped — which Google classified as duplicate content and dropped from the
 * index. Their real projects were already on file in lib/city-projects.ts and
 * simply were not being read here, so that data is the fallback.
 */
function getCityProjectContent(citySlug: string): {
  projects: string[]
  buildingAreas: string[]
  namedProjects: CityProject[]
} {
  const idx = getCityProjectIndex(citySlug)
  const named = getCityProjects(citySlug)

  // The `area` field may carry a developer suffix ("נופי בן שמן, יזם שיכון ובינוי");
  // the neighbourhood is the part before the separator. Entries that describe the
  // project rather than locate it ("פרויקט מגורים חדש") are dropped — this sentence
  // lists areas and neighbourhoods, and a project descriptor reads wrong inside it.
  const derivedAreas = [
    ...new Set(
      named
        .map((p) => p.area.split(/[,;]/)[0].trim())
        .filter((a) => a.length > 0 && !a.startsWith("יזם") && !a.startsWith("פרויקט")),
    ),
  ]

  return {
    projects: idx?.projects ?? named.map((p) => p.name),
    buildingAreas: idx?.buildingAreas ?? derivedAreas,
    // The per-project H3 block is driven by lib/city-projects.ts, the only source
    // that carries an area/street per project. Suppress it only when the index
    // overrides the name list, since the two lists can diverge and rendering both
    // would put two different project lists on the same page.
    namedProjects: idx?.projects ? [] : named,
  }
}

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.city)
  if (!city) return {}

  const { projects } = getCityProjectContent(city.slug)
  const projectsHint = projects.length ? ` ביניהם ${projects.slice(0, 3).join(", ")}.` : ""

  const title = `בדק בית בפרויקטים חדשים ב${city.name} | בדיקת דירה מקבלן`
  const description = `בדק בית לדירות חדשות בפרויקטים ב${city.name}.${projectsHint} בדיקה הנדסית לפני מסירת דירה מקבלן, איתור ליקויי בנייה ופרוטוקול מסירה מקצועי.`

  return {
    title,
    description,
    alternates: { canonical: `https://www.legalbedek.co.il/projects/${city.slug}` },
    openGraph: { title, description, url: `https://www.legalbedek.co.il/projects/${city.slug}`, type: "website" },
  }
}

export default function CityProjectsPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city)
  if (!city) notFound()

  const idx = getCityProjectIndex(city.slug)
  const { projects, buildingAreas, namedProjects } = getCityProjectContent(city.slug)

  // city.description is a bespoke per-city paragraph that the /bedek-bayit page
  // renders only for cities that have no profile. Every city reaching this
  // fallback does have a profile, so the text is unused elsewhere and lifting it
  // here adds real city-specific copy rather than repeating another page.
  const cityDescription = getCityProfile(city.slug) ? `${city.description} ` : ""

  const intro =
    idx?.intro ??
    `${cityDescription}${city.name} ממשיכה להתפתח עם פרויקטים חדשים של דירות מקבלן. רוכשי דירות חדשות ב${city.name} זקוקים לבדק בית מקצועי במועד מסירת הדירה, כדי לאתר ליקויי בנייה ולוודא שהדירה תואמת את המפרט והתקנים במעמד המסירה.`

  // Real neighbourhoods from the city profile. This is the one profile field the
  // /bedek-bayit city page does not render, so using it here adds genuinely
  // city-specific copy without repeating that page.
  const otherNeighborhoods = (getCityProfile(city.slug)?.neighborhoods ?? []).filter(
    (n) => !buildingAreas.some((a) => a.includes(n) || n.includes(a)),
  )

  const areasSection = buildingAreas.length
    ? [
        {
          heading: `אזורי בנייה חדשה ב${city.name}`,
          paragraphs: [
            `הבנייה החדשה ב${city.name} מתרכזת באזורים ובשכונות הבאים: ${buildingAreas.join(", ")}. בכל אחד מאזורים אלו אנו מבצעים בדק בית מקצועי לדירות חדשות מקבלן לפני מסירה.`,
            ...(otherNeighborhoods.length
              ? [
                  `מעבר לאזורי הבנייה החדשה, אנו מבצעים בדק בית ובדיקת דירה גם בשאר שכונות ${city.name}: ${otherNeighborhoods.join(", ")} — הן בדירות חדשות מקבלן, הן בדירות יד שנייה והן בפרויקטים של התחדשות עירונית.`,
                ]
              : []),
            `מומחה בדק בית מכיר את שיטות הבנייה הנפוצות בפרויקטים חדשים ויודע לאתר את הליקויים האופייניים לדירות חדשות - מאיטום לקוי ועד סטיות במידות ובמפלסים.`,
          ],
        },
      ]
    : []

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

  // Each named project as its own H3, with the neighbourhood or street it sits in.
  // The area is the one detail the prose list, the bullet list and the FAQ all lack,
  // so this block is what makes an address like "רחוב שלמה דרור" indexable.
  const namedProjectsBlock = namedProjects.length
    ? {
        heading: `הפרויקטים החדשים ב${city.name} לפי שכונה`,
        intro: `אלה פרויקטי המגורים החדשים ב${city.name} שבהם אנו מבצעים בדק בית ובדיקת מסירה, לפי האזור שבו הם נבנים:`,
        projects: namedProjects,
      }
    : undefined

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
      projectsSection={namedProjectsBlock}
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
        // City-specific answer built from the real project list, so the FAQ block
        // is not identical text on all 46 city pages.
        ...(projects.length
          ? [
              {
                question: `באילו פרויקטים חדשים ב${city.name} אתם מבצעים בדק בית?`,
                answer: `אנו מבצעים בדק בית ובדיקת מסירה בפרויקטים החדשים ב${city.name}, ובהם ${projects.join(", ")}. הבדיקה מתבצעת במעמד מסירת הדירה מהקבלן וכוללת בדיקת התאמה למפרט, איתור ליקויי בנייה והכנת פרוטוקול מסירה. הרשימה אינה סגורה — אנו בודקים דירות בכל פרויקט חדש בעיר.`,
              },
            ]
          : []),
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
