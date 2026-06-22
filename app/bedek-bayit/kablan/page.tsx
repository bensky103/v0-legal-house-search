import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { contractors } from "@/lib/seo-locations"
import { SiteIndex } from "@/components/site-index"

export const metadata: Metadata = {
  title: "בדק בית לפי קבלן | בדיקת דירה בפרויקטים של קבלני הבנייה המובילים",
  description:
    "שירותי בדק בית הנדסי לדירות בפרויקטים של קבלני הבנייה המובילים בישראל. איתור ליקויי בנייה לפני מסירה, בהתבסס על מחקר הטכניון. בחרו את הקבלן שלכם וקבלו שירות מקצועי.",
  alternates: { canonical: "https://legalbedek.co.il/bedek-bayit/kablan" },
  robots: "index, follow",
}

export default function ContractorsIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
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
            <Link href="/" className="text-sm md:text-base text-blue-600 hover:underline font-medium">
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-l from-blue-700 to-blue-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">בדק בית לפי קבלן</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto text-pretty leading-relaxed">
            רכשתם דירה חדשה? מחקר הטכניון מצא כי כמעט בכל דירה חדשה בישראל מתגלים ליקויי בנייה. בחרו את הקבלן שלכם וקבלו
            שירות בדק בית הנדסי מקצועי לפני מסירת הדירה.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contractors.map((contractor) => (
              <Link
                key={contractor.slug}
                href={`/bedek-bayit/kablan/${contractor.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:bg-blue-50 hover:border-blue-300 transition-colors group"
              >
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 mb-1">
                  בדק בית - {contractor.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  בדיקה הנדסית לדירות בפרויקטים של {contractor.name} לפני מסירה.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteIndex />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה</p>
          <p className="text-gray-400 text-sm">050-6277858 | שירות בכל הארץ</p>
        </div>
      </footer>
    </div>
  )
}
