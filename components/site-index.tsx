import Link from "next/link"
import { cities, contractors, projectTypes } from "@/lib/seo-locations"
import { defects } from "@/lib/defects"
import { getProjectCities } from "@/lib/projects"

/**
 * SiteIndex - אינדקס HTML גלוי של כל עמודי האתר (מפת אתר).
 *
 * נועד להופיע בתחתית כל עמוד כדי:
 * 1. למנוע "עמודים יתומים"/נסתרים שאינם מקושרים פנימית (בהתאם למדיניות גוגל).
 * 2. לאפשר לגולש שנחת על עמוד נחיתה עמוק להמשיך לכל שאר עמודי האתר.
 *
 * האינדקס גלוי לחלוטין (ללא הסתרה/cloaking) ומקושר בקישורי <a> אמיתיים.
 */
export function SiteIndex() {
  const projectCities = getProjectCities()

  const mainPages: { label: string; href: string }[] = [
    { label: "דף הבית", href: "/" },
    { label: "אודות", href: "/about" },
    { label: "בדק בית לפי עיר", href: "/bedek-bayit" },
    { label: "בדק בית לפי קבלן", href: "/bedek-bayit/kablan" },
    { label: "ליקויי בנייה", href: "/likuyey-bniya" },
    { label: "פרויקטים חדשים", href: "/projects" },
    { label: "גלריית בדק בית", href: "/gallery" },
    { label: "בלוג", href: "/blog" },
  ]

  const articles: { label: string; href: string }[] = [
    { label: "בדק בית בדירה חדשה", href: "/articles/bedek-bayit-dira-hadasha" },
    { label: "בדק בית לדירה יד שנייה", href: "/articles/bedek-bayit-dira-yad-shniya" },
    { label: "מתי להזמין בדק בית?", href: "/articles/matai-lehazmin-bedek-bayit" },
  ]

  return (
    <nav aria-label="מפת אתר - כל עמודי האתר" className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 text-center">מפת אתר - כל עמודי האתר</h2>
        <p className="text-sm text-gray-400 mb-8 text-center text-pretty">
          מצאתם אותנו דרך עמוד מסוים? כאן תוכלו לעבור לכל עמודי האתר - בדק בית לפי עיר, לפי קבלן, סוגי בדיקות, ליקויי
          בנייה ופרויקטים חדשים.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-3">עמודים ראשיים</h3>
            <ul className="space-y-2">
              {mainPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-gray-400 hover:text-blue-400 hover:underline">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold text-white uppercase tracking-wide mt-6 mb-3">מאמרים</h3>
            <ul className="space-y-2">
              {articles.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="text-sm text-gray-400 hover:text-blue-400 hover:underline">
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold text-white uppercase tracking-wide mt-6 mb-3">סוגי בדק בית</h3>
            <ul className="space-y-2">
              {projectTypes.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/services/${p.slug}`}
                    className="text-sm text-gray-400 hover:text-blue-400 hover:underline"
                  >
                    בדק בית {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-3">בדק בית לפי עיר</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/bedek-bayit/${c.slug}`}
                    className="text-sm text-gray-400 hover:text-blue-400 hover:underline"
                  >
                    {c.nameSimple}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-3">בדק בית לפי קבלן</h3>
            <ul className="space-y-2">
              {contractors.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/bedek-bayit/kablan/${c.slug}`}
                    className="text-sm text-gray-400 hover:text-blue-400 hover:underline"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-3">ליקויי בנייה</h3>
            <ul className="space-y-2">
              {defects.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/likuyey-bniya/${d.slug}`}
                    className="text-sm text-gray-400 hover:text-blue-400 hover:underline"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>

            {projectCities.length > 0 && (
              <>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide mt-6 mb-3">פרויקטים לפי עיר</h3>
                <ul className="space-y-2">
                  {projectCities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/projects/${c.slug}`}
                        className="text-sm text-gray-400 hover:text-blue-400 hover:underline"
                      >
                        פרויקטים ב{c.nameSimple}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
