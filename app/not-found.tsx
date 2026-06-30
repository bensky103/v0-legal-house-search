import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteIndex } from "@/components/site-index"

export const metadata: Metadata = {
  title: "הדף לא נמצא (404) | בדק בית Legal",
  description: "הדף שחיפשתם לא נמצא. חזרו לדף הבית או עברו לאחד מעמודי בדק בית, ליקויי בנייה והשירותים שלנו.",
  robots: { index: false, follow: true },
}

const QUICK_LINKS = [
  { label: "דף הבית", href: "/" },
  { label: "שירותי בדק בית", href: "/services" },
  { label: "בדק בית לפי עיר", href: "/bedek-bayit" },
  { label: "מאגר ליקויי הבנייה", href: "/likuyey-bniya" },
  { label: "פרויקטים חדשים", href: "/projects" },
  { label: "מאמרים", href: "/blog" },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col" dir="rtl">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.webp" alt="בדק בית Legal" width={56} height={56} className="object-contain w-12 h-12 md:w-14 md:h-14" />
            <span className="text-lg md:text-xl font-bold text-gray-900">בדק בית Legal</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16 md:py-24 text-center">
        <p className="font-mono text-5xl md:text-7xl font-extrabold text-blue-600">404</p>
        <h1 className="mt-4 text-2xl md:text-4xl font-bold text-slate-900">הדף לא נמצא</h1>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto leading-relaxed">
          ייתכן שהכתובת השתנתה או שהדף הוסר. אפשר לחזור לדף הבית או לעבור ישירות לאחד העמודים המרכזיים:
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {QUICK_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-block rounded-lg bg-white border border-slate-200 px-4 py-2 text-blue-700 font-semibold hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href="tel:+972506277858"
            className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-colors"
          >
            צריכים בדק בית? חייגו 050-6277858
          </a>
        </div>
      </main>

      <SiteIndex />
    </div>
  )
}
