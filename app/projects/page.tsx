import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getProjectCities } from "@/lib/projects"
import { featuredProjects, featuredProjectsUpdated } from "@/lib/featured-projects"
import { SiteIndex } from "@/components/site-index"

export const metadata: Metadata = {
  title: "בדק בית בפרויקטים חדשים | בדיקת דירה מקבלן לפי עיר",
  description:
    "בדק בית לדירות חדשות בפרויקטים בכל הארץ. בדיקה הנדסית לפני מסירת דירה מקבלן, איתור ליקויי בנייה ופרוטוקול מסירה מקצועי לפי עיר.",
  alternates: { canonical: "https://www.legalbedek.co.il/projects" },
}

// תאריך עדכון לתצוגה ידידותית (חודש בעברית) מתוך featuredProjectsUpdated.
const hebrewMonths = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
]

// Field photos shown under the project list. The building and the slope
// measurement name no project: they come from an inspection covered by a
// non-disclosure agreement, so they are published without saying where.
const FIELD_PHOTOS = [
  {
    src: "/gallery/bedek-bayit-binyan-boutique-chadash-tel-aviv.webp",
    width: 1600,
    height: 900,
    wide: true,
    title: "בניין מגורים בוטיק חדש בתל אביב לקראת מסירה",
    alt: "בניין מגורים בוטיק חדש בתל אביב בשלבי סיום - מרפסות עם מעקה זכוכית וחלונות עטופים לפני מסירת הדירות מהקבלן",
    caption:
      "בניין מגורים בוטיק חדש בתל אביב בשלבי סיום, לקראת מסירת הדירות מהקבלן.",
  },
  {
    src: "/gallery/bedek-bayit-medidat-shipua-mirpeset-peles.webp",
    width: 474,
    height: 392,
    title: "מדידת שיפוע במרפסת בפלס",
    alt: "מדידת שיפוע ריצוף המרפסת בפלס ארוך לאורך מעקה הבטון - בדיקת ניקוז ומים עומדים בבדק בית",
    caption:
      "מדידת שיפוע הריצוף במרפסת לכיוון הניקוז. שיפוע חסר משאיר מים עומדים ומוביל לרטיבות.",
  },
  {
    src: "/gallery/bedek-bayit-maake-zchuchit-mirpeset-dimona.webp",
    width: 473,
    height: 475,
    title: "בדיקת מעקה זכוכית בפרויקט תורן בלב השחר, דימונה",
    alt: "מומחה בדק בית בודק מעקה זכוכית ומאחז עליון במרפסת בית חדש בפרויקט תורן בלב השחר בדימונה",
    caption:
      "בדיקת מעקה הזכוכית והמאחז העליון במרפסת בית חדש בפרויקט תורן בלב השחר, דימונה.",
  },
]

function formatUpdatedLabel(value: string): string {
  const [year, month] = value.split("-")
  const monthIndex = Number(month) - 1
  if (Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) return value
  return `${hebrewMonths[monthIndex]} ${year}`
}

export default function ProjectsHubPage() {
  const projectCities = getProjectCities()
  const updatedLabel = formatUpdatedLabel(featuredProjectsUpdated)

  // נתונים מובנים (ItemList) כדי שגוגל יזהה את שמות הפרויקטים הספציפיים.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "פרויקטים חדשים לקראת מסירה - שירותי בדק בית",
    description:
      "רשימת פרויקטי בנייה חדשים בישראל הנמצאים בשלבי בנייה מתקדמת, אכלוס ומסירה, שבהם ניתן לבצע בדק בית מקצועי במועד מסירת הדירה מהקבלן.",
    dateModified: featuredProjectsUpdated,
    numberOfItems: featuredProjects.length,
    itemListElement: featuredProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${project.name}, ${project.city}`,
    })),
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">בדק בית בפרויקטים חדשים</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto text-pretty">
            בדק בית מקצועי לדירות חדשות מקבלן - בדיקת מסירה, איתור ליקויי בנייה וליווי בפרוטוקול המסירה
          </p>
        </div>
      </header>

      <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            <li className="flex items-center gap-1">
              <Link href="/" className="text-blue-600 hover:underline">
                דף הבית
              </Link>
              <span className="text-gray-400 px-1">{"›"}</span>
            </li>
            <li>
              <span className="text-gray-700 font-medium" aria-current="page">
                פרויקטים חדשים
              </span>
            </li>
          </ol>
        </div>
      </nav>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-8 text-center text-pretty">
            רוכשי דירות חדשות מקבלן זקוקים לבדק בית מקצועי במועד מסירת הדירה, כדי לאתר ליקויי בנייה ולוודא שהדירה תואמת
            את המפרט והתקנים. בחרו את העיר שלכם כדי לקרוא על בדק בית בפרויקטים החדשים בה.
          </p>

          <div className="mb-14">
            <div className="text-center mb-2">
              <h2 className="text-2xl font-bold text-gray-900">פרויקטים חדשים לקראת מסירה</h2>
            </div>
            <p className="text-sm text-gray-500 text-center mb-6">
              {"מתעדכן מעת לעת • עודכן לאחרונה: "}
              {updatedLabel}
            </p>
            <p className="text-base text-gray-800 leading-relaxed mb-8 text-center text-pretty">
              אנו מבצעים בדק בית מקצועי לדירות חדשות בפרויקטים הבאים, הנמצאים בשלבי בנייה מתקדמת, אכלוס ומסירה. אם רכשתם
              דירה באחד מהפרויקטים האלה - מומלץ לבצע בדק בית במועד מסירת הדירה מהקבלן.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProjects.map((project) => {
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-blue-900 leading-snug">{project.name}</h3>
                      <span className="shrink-0 text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-3 py-1">
                        {project.city}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium text-gray-700">{"סטטוס: "}</span>
                      {project.status}
                    </p>
                  </>
                )

                return (
                  <li key={project.id}>
                    {project.citySlug ? (
                      <Link
                        href={`/projects/${project.citySlug}`}
                        className="block h-full bg-white border border-blue-100 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition"
                      >
                        {inner}
                        <span className="block text-sm text-blue-600 mt-3 font-medium">
                          {`בדק בית בפרויקטים חדשים ב${project.city} ‹`}
                        </span>
                      </Link>
                    ) : (
                      <div className="h-full bg-white border border-blue-100 rounded-xl p-5">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Photos from inspections in projects on this list, so the page shows
                the work and not only the names. Two of the three carry no project
                name on purpose: the inspection they came from is under an NDA, so
                the building and the measurement are shown without saying where. */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FIELD_PHOTOS.map((photo) => (
                <figure key={photo.src} className={photo.wide ? "sm:col-span-2" : undefined}>
                  <div className="overflow-hidden rounded-xl ring-1 ring-blue-100 shadow-sm">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      title={photo.title}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-gray-600 text-center text-pretty">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mt-6 text-center text-pretty">
              לא מצאתם את הפרויקט שלכם ברשימה? אנו מבצעים בדק בית בכל הפרויקטים החדשים בישראל.{" "}
              <Link href="/#contact" className="text-blue-600 hover:underline font-medium">
                צרו קשר לתיאום בדיקה
              </Link>
              .
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">בדק בית בפרויקטים חדשים לפי עיר</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/projects/${city.slug}`}
                  className="block bg-white border border-blue-100 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition"
                >
                  <span className="text-lg font-semibold text-blue-900">פרויקטים חדשים ב{city.name}</span>
                  <span className="block text-sm text-gray-600 mt-1">בדק בית לדירה חדשה מקבלן</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteIndex />
    </div>
  )
}
