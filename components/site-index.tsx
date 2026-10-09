import Link from "next/link"
import { cities, contractors, projectTypes } from "@/lib/seo-locations"
import { defects } from "@/lib/defects"
import { services } from "@/lib/services"
import { getProjectCities } from "@/lib/projects"

/** The hub pages. Shared by the full index and by the compact leaf footer. */
const MAIN_PAGES: { label: string; href: string }[] = [
    { label: "דף הבית", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "שירותי בדק בית", href: "/services" },
  { label: "כמה עולה בדק בית", href: "/mehir-bedek-bayit" },
  { label: "צ׳קליסט בדק בית להורדה", href: "/checklist-bedek-bayit" },
  { label: "דוח בדק בית לדוגמה", href: "/doch-ledugma" },
  { label: "דוח בדק בית מפורט לדוגמה", href: "/doch-ledugma-mefurat" },
  { label: "אזורי שירות", href: "/ezorei-sherut" },
  { label: "בדק בית לפי עיר", href: "/bedek-bayit" },
  { label: "בדק בית לפי קבלן", href: "/bedek-bayit/kablan" },
  { label: "ליקויי בנייה", href: "/likuyey-bniya" },
  { label: "פרויקטים חדשים", href: "/projects" },
  { label: "מאמרים ומדריכים", href: "/articles" },
  { label: "גלריית בדק בית", href: "/gallery" },
  { label: "סרטוני בדק בית", href: "/videos" },
  { label: "בלוג", href: "/blog" },
  { label: "כרטיס ביקור דיגיטלי", href: "/card" },
]

/**
 * A visible, crawlable index of every page on the site. Real anchors, nothing
 * hidden from either a visitor or a crawler.
 *
 * HUB PAGES ONLY. It renders about 510 words, identical on every page that
 * carries it. On a hub that is a small share of a long listing, but on a leaf
 * page it was the larger half of the document: a video page has 280-430 words
 * of its own, so more than half of what Google read there was a block it had
 * already read on a thousand other URLs. Those pages were being reported as
 * "crawled - currently not indexed", and as near-copies of each other.
 *
 * Dropping it from leaf pages orphans nothing. SiteNav sits in the root layout,
 * so every page links to all fourteen hubs, and each hub links to its own
 * leaves from its own content: /bedek-bayit to 47 city pages, /bedek-bayit/kablan
 * to 45 contractors, /videos to 45 video pages, /likuyey-bniya to 40 defect
 * guides, /articles to 38 articles, /projects to 33 cities, /services to 15.
 * Pages outside SiteNav - /card, the privacy page - are reachable through this
 * index on the hubs that still carry it.
 *
 * Render it on: the home page, /articles, /blog, /bedek-bayit,
 * /bedek-bayit/kablan, /likuyey-bniya, /projects, /services, /videos, /gallery,
 * and the 404 page, where a full index is the most useful thing to offer.
 */
export function SiteIndex() {
  const projectCities = getProjectCities()


  const articles: { label: string; href: string }[] = [
    { label: "בדק בית בדירה חדשה", href: "/articles/bedek-bayit-dira-hadasha" },
    { label: "בדק בית לדירה יד שנייה", href: "/articles/bedek-bayit-dira-yad-shniya" },
    { label: "מתי להזמין בדק בית?", href: "/articles/matai-lehazmin-bedek-bayit" },
    { label: "חוק המכר - תקופות בדק ואחריות", href: "/articles/chok-hamkar-dirot" },
    { label: "תקני אינסטלציה (ת״י 1205)", href: "/articles/tikaney-instalatzia-bedek-bayit" },
    { label: "ת״י 789 - סטיות מותרות", href: "/articles/taken-789-stiyot-mutarot" },
    { label: "פרוטוקול מסירה - מדריך", href: "/articles/protokol-mesira" },
    { label: "גיליתי ליקוי בדירה - מי אחראי?", href: "/articles/giliti-likui-bedira-mi-achrai" },
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
              {MAIN_PAGES.map((p) => (
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

            <h3 className="text-sm font-bold text-white uppercase tracking-wide mt-6 mb-3">שירותי בדק בית</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    prefetch={false}
                    className="text-sm text-gray-400 hover:text-blue-400 hover:underline"
                  >
                    {s.name}
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
                    prefetch={false}
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
                    prefetch={false}
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
                    prefetch={false}
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
                    prefetch={false}
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


/**
 * The hub links on their own, for leaf pages: a defect guide, an article, a
 * video page, a city or contractor page.
 *
 * SiteIndex used to sit on those too, and at ~510 words it was the larger half
 * of a short page. Dropping it outright went too far the other way: SiteNav is
 * a client component whose dropdowns only mount once opened, so a leaf page was
 * left with no crawlable link to /articles, /bedek-bayit, /likuyey-bniya or
 * /blog at all. This is the middle: about forty words, every hub reachable in
 * one hop, and nothing enumerated that the hub itself already lists.
 */
export function SiteFooterLinks() {
  return (
    <nav aria-label="עמודי האתר" className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {MAIN_PAGES.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                prefetch={false}
                className="text-sm text-gray-400 hover:text-blue-400 hover:underline"
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
