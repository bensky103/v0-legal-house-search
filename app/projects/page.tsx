import type { Metadata } from "next"
import Link from "next/link"
import { getProjectCities } from "@/lib/projects"

export const metadata: Metadata = {
  title: "בדק בית בפרויקטים חדשים | בדיקת דירה מקבלן לפי עיר",
  description:
    "בדק בית לדירות חדשות בפרויקטים בכל הארץ. בדיקה הנדסית לפני מסירת דירה מקבלן, איתור ליקויי בנייה ופרוטוקול מסירה מקצועי לפי עיר.",
  alternates: { canonical: "https://legalbedek.co.il/projects" },
}

export default function ProjectsHubPage() {
  const projectCities = getProjectCities()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
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
