import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { SiteIndex } from "@/components/site-index"

export const metadata: Metadata = {
  title: "בלוג בדק בית | מאמרים על איתור ליקויי בנייה ובדיקת דירות - Legal בדק בית",
  description:
    "בלוג בדק בית של Legal - מאמרים, טיפים ומדריכים בנושא איתור ליקויי בנייה, בדיקת דירה חדשה מקבלן, בדק בית לפני מסירה וחוות דעת הנדסית.",
  alternates: {
    canonical: "https://legalbedek.co.il/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.webp"
              alt="בדק בית Legal - מומחה לאיתור ליקויי בנייה וחוות דעת נגדית"
              width={80}
              height={80}
              className="object-contain w-12 h-12 md:w-16 md:h-16"
            />
            <div>
              <span className="block text-lg md:text-2xl font-bold text-gray-900 leading-tight">בדק בית Legal</span>
              <span className="block text-sm md:text-base text-slate-700 font-medium">בלוג מאמרים מקצועי</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Breadcrumbs */}
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
                בלוג
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="bg-gradient-to-l from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">בלוג בדק בית</h1>
          <p className="mt-3 text-lg text-blue-100 max-w-2xl mx-auto text-pretty">
            מאמרים, טיפים ומדריכים מקצועיים בנושא איתור ליקויי בנייה, בדיקת דירה חדשה מקבלן ובדק בית לפני מסירה.
          </p>
        </div>
      </section>

      {/* Soro Blog Embed */}
      <main className="container mx-auto px-4 py-10">
        <div id="soro-blog" />
        <Script src="https://app.trysoro.com/api/embed/e50102e6-eb3c-4033-90ec-0ed818cfbcfa" strategy="afterInteractive" />
      </main>

      <SiteIndex />
    </div>
  )
}
