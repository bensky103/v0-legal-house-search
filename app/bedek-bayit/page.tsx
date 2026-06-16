import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { cities } from "@/lib/seo-locations"

export const metadata: Metadata = {
  title: "בדק בית לפי עיר | מומחה בדק בית בכל הארץ - Legal",
  description:
    "שירותי בדק בית הנדסי בכל הערים בישראל. איתור ליקויי בנייה, בדיקת דירה חדשה ויד שניה. בחרו את העיר שלכם וקבלו שירות מקצועי ממומחה מוסמך.",
  alternates: { canonical: "https://legalbedek.co.il/bedek-bayit" },
  robots: "index, follow",
}

export default function CitiesIndexPage() {
  const regions = Array.from(new Set(cities.map((c) => c.region)))

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 space-x-reverse">
              <Image
                src="/logo.png"
                alt="בדק בית Legal"
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
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">בדק בית בכל הארץ</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto text-pretty">
            בחרו את העיר שלכם וקבלו שירות בדק בית הנדסי מקצועי - איתור ליקויי בנייה, בדיקת דירה חדשה ויד שניה.
          </p>
          <div className="mt-6">
            <Link
              href="/bedek-bayit/kablan"
              className="inline-block bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3 text-white hover:bg-white/25 transition-colors font-medium"
            >
              מחפשים בדק בית לפי קבלן? לחצו כאן
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {regions.map((region) => (
            <div key={region} className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                {region}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cities
                  .filter((c) => c.region === region)
                  .map((city) => (
                    <Link
                      key={city.slug}
                      href={`/bedek-bayit/${city.slug}`}
                      className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-gray-800 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors font-medium"
                    >
                      בדק בית ב{city.name}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה</p>
          <p className="text-gray-400 text-sm">📞 050-6277858 | שירות בכל הארץ</p>
        </div>
      </footer>
    </div>
  )
}
