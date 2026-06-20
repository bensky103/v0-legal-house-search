import type { Metadata } from "next"
import Link from "next/link"
import { getProjectCities } from "@/lib/projects"
import { featuredProjects, featuredProjectsUpdated } from "@/lib/featured-projects"

export const metadata: Metadata = {
  title: "בדק בית בפרויקטים חדשים | בדיקת דירה מקבלן לפי עיר",
  description:
    "בדק בית לדירות חדשות בפרויקטים בכל הארץ. בדיקה הנדסית לפני מסירת דירה מקבלן, איתור ליקויי בנייה ופרוטוקול מסירה מקצועי לפי עיר.",
  alternates: { canonical: "https://legalbedek.co.il/projects" },
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
      "רשימת פרויקטי בנייה חדשים בישראל הנמצאים בשלבי בנייה מתקדמת, אכלוס ומסירה, שבהם ניתן לבצע בדק בית מקצועי לפני מסירת הדירה מהקבלן.",
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
            בדק בית מקצועי לדירות חדשות מקבלן - בדיקה לפני מסירה, איתור ליקויי בנייה וליווי בפרוטוקול המסירה
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
            רוכשי דירות חדשות מקבלן זקוקים לבדק בית מקצועי לפני מסירת הדירה, כדי לאתר ליקויי בנייה ולוודא שהדירה תואמת
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
              דירה באחד מהפרויקטים האלה - מומלץ לבצע בדק בית לפני מסירת הדירה מהקבלן.
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
    </div>
  )
}
