import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { articles } from "@/lib/articles"
import { SiteIndex } from "@/components/site-index"

export const metadata: Metadata = {
  title: "מאמרים ומדריכי בדק בית | בדק בית Legal",
  description:
    "מאמרים ומדריכים מקצועיים בנושא בדק בית: בדיקת דירה חדשה ויד שנייה, עיתוי הבדיקה, חוק המכר (דירות), תקני בנייה ת״י 789 ות״י 1205 ועוד.",
  alternates: { canonical: "https://legalbedek.co.il/articles" },
  robots: "index, follow",
}

export default function ArticlesIndexPage() {
  const baseUrl = "https://legalbedek.co.il"

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "מאמרים ומדריכי בדק בית",
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: `${baseUrl}/articles/${a.slug}`,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "מאמרים", item: `${baseUrl}/articles` },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 space-x-reverse">
              <Image src="/logo.webp" alt="בדק בית Legal" width={56} height={56} className="object-contain w-12 h-12 md:w-14 md:h-14" />
              <span className="text-lg md:text-xl font-bold text-gray-900">בדק בית Legal</span>
            </Link>
            <Link href="/" className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium">
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </header>

      <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            <li className="flex items-center gap-1">
              <Link href="/" className="text-blue-600 hover:underline">דף הבית</Link>
              <span className="text-gray-400 px-1">{"›"}</span>
            </li>
            <li><span className="text-gray-700 font-medium" aria-current="page">מאמרים</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-l from-blue-700 to-blue-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">מאמרים ומדריכי בדק בית</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-pretty">
            מדריכים מקצועיים בנושא בדק בית, ליקויי בנייה, תקנים וזכויות מול הקבלן — מאת יגאל בנסקי, מומחה מוסמך.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="group flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200 hover:ring-blue-300 hover:shadow-lg transition-all"
              >
                <h2 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed flex-1">{a.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                  קראו את המאמר
                  <span aria-hidden="true">←</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteIndex />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה וחוות דעת נגדית</p>
          <p className="text-gray-400 text-sm">📞 050-6277858 | שירות בכל הארץ</p>
        </div>
      </footer>
    </div>
  )
}
