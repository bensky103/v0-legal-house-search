import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { services } from "@/lib/services"
import { projectTypes } from "@/lib/seo-locations"
import { SiteIndex } from "@/components/site-index"

export const metadata: Metadata = {
  title: "שירותי בדק בית - בדיקות הנדסיות וחוות דעת | בדק בית Legal",
  description:
    "כל שירותי בדק בית במקום אחד: בדיקה לפני קנייה ולפני מסירה, בדיקת דירה יד שנייה ובית פרטי, חוות דעת מומחה ולבית משפט, איתור ליקויי בנייה והערכת עלויות תיקון.",
  keywords: [
    "שירותי בדק בית",
    "בדק בית לפני קנייה",
    "בדק בית לפני מסירה",
    "חוות דעת מומחה",
    "חוות דעת לבית משפט",
    "איתור ליקויי בנייה",
    "הערכת עלויות תיקון",
  ],
  alternates: { canonical: "https://legalbedek.co.il/services" },
  robots: "index, follow",
}

export default function ServicesHubPage() {
  const baseUrl = "https://legalbedek.co.il"

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "שירותי בדק בית",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${baseUrl}/services/${s.slug}`,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "שירותי בדק בית", item: `${baseUrl}/services` },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 space-x-reverse">
              <Image
                src="/logo.webp"
                alt="בדק בית Legal - מומחה לאיתור ליקויי בנייה"
                width={64}
                height={64}
                className="object-contain w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <span className="text-lg md:text-xl font-bold text-gray-900">בדק בית Legal</span>
                <p className="text-xs md:text-sm text-slate-600">מומחה לאיתור ליקויי בנייה</p>
              </div>
            </Link>
            <Link href="/" className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium">
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            <li className="flex items-center gap-1">
              <Link href="/" className="text-blue-600 hover:underline">דף הבית</Link>
              <span className="text-gray-400 px-1">{"›"}</span>
            </li>
            <li>
              <span className="text-gray-700 font-medium" aria-current="page">שירותי בדק בית</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-l from-blue-700 to-blue-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">שירותי בדק בית</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-pretty">
            מומחה בדק בית מוסמך לכל צורך — מבדיקה לפני רכישה ועד חוות דעת קבילה בבית משפט. בחרו את השירות המתאים לכם.
          </p>
        </div>
      </section>

      {/* Core services */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">שירותי הליבה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block rounded-2xl bg-white p-6 ring-1 ring-slate-200 hover:ring-blue-300 hover:shadow-lg transition-all"
              >
                <span className="inline-block rounded-full bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 ring-1 ring-blue-200">
                  {s.badge}
                </span>
                <h3 className="mt-3 text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">{s.subtitle}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                  לפרטים נוספים
                  <span aria-hidden="true">←</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project-type services */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">בדק בית לפי סוג פרויקט</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {projectTypes.map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                בדק בית {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-l from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">צריכים בדק בית מקצועי?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            צרו קשר עוד היום לתיאום בדיקה ולקבלת הצעת מחיר. מומחה מוסמך, שירות מהיר וחוות דעת מקצועית בכל הארץ.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+972506277858"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-colors"
            >
              חייגו עכשיו: 050-6277858
            </a>
            <a
              href="https://wa.me/972506277858"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-lg font-bold transition-all"
            >
              שליחת הודעת WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteIndex />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה וחוות דעת נגדית</p>
          <p className="text-gray-400 text-sm">📞 050-6277858 | שירות בכל הארץ</p>
          <p className="text-gray-500 text-xs mt-4">© 2020 בדק בית Legal - כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}
