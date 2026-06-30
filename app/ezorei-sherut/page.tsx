import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { cities } from "@/lib/seo-locations"

export const metadata: Metadata = {
  title: "אזורי שירות - בדק בית בכל הארץ | Legal בדק בית",
  description:
    "בדק בית הנדסי, איתור ליקויי בנייה וחוות דעת נגדית בכל הערים בישראל - מגוש דן ועד הצפון והדרום. בדקו אם אנחנו נותנים שירות בעיר שלכם.",
  alternates: { canonical: "https://legalbedek.co.il/ezorei-sherut" },
  robots: "index, follow",
}

// כל הערים שבהן ניתן שירות. לערים עם עמוד ייעודי נוצר קישור פנימי.
const serviceAreas = [
  "תל אביב", "ירושלים", "חיפה", "ראשון לציון", "פתח תקווה", "אשדוד", "נתניה",
  "באר שבע", "בני ברק", "חולון", "רמת גן", "אשקלון", "רחובות", "בת ים",
  "כפר סבא", "הרצליה", "חדרה", "מודיעין", "נצרת", "לוד", "רעננה", "רמלה",
  "גבעתיים", "הוד השרון", "קריית אתא", "נהריה", "קריית גת", "קריית מוצקין",
  "יבנה", "רמת השרון", "אור יהודה", "צפת", "אילת", "עכו", "כרמיאל", "יקנעם",
  "קריית ביאליק", "קריית ים", "קריית שמונה", "מגדל העמק", "טבריה", "דימונה",
  "שדרות", "קריית מלאכי", "נס ציונה", "עפולה", "ערד", "טירה", "קלנסווה",
  "אום אל-פחם", "סחנין", "שפרעם", "אופקים", "מעלה אדומים", "מעלות תרשיחא",
  "בית שמש", "זכרון יעקב", "גני תקווה",
]

// מיפוי שם עיר -> slug של עמוד ייעודי קיים
const citySlugByName = new Map(cities.map((c) => [c.nameSimple, c.slug]))

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 space-x-reverse">
              <Image
                src="/logo.png"
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
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">בדק בית בכל הארץ - אזורי השירות שלנו</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto text-pretty">
            אנו מספקים שירותי בדק בית הנדסי, איתור ליקויי בנייה וחוות דעת נגדית בכל רחבי ישראל - מגוש דן והשרון, דרך
            ירושלים והמרכז, ועד הצפון והדרום. בדקו אם העיר שלכם ברשימה.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-8 text-center">
            רכישת דירה היא אחת ההשקעות הגדולות בחיים. בכל אחת מהערים הבאות אנו מבצעים בדיקה הנדסית מקיפה לדירות חדשות
            מקבלן ולדירות יד שניה, מאתרים ליקויי בנייה ומספקים חוות דעת מקצועית הקבילה משפטית. הערים שמסומנות בקישור
            כוללות עמוד ייעודי עם מידע נוסף על השירות באותו אזור.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            ערים שבהן אנו נותנים שירות בדק בית
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceAreas.map((name) => {
              const slug = citySlugByName.get(name)
              const label = `בדק בית ב${name}`
              return slug ? (
                <Link
                  key={name}
                  href={`/bedek-bayit/${slug}`}
                  className="bg-white border border-blue-200 rounded-lg px-4 py-3 text-center text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-colors font-medium"
                >
                  {label}
                </Link>
              ) : (
                <span
                  key={name}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-gray-800 font-medium"
                >
                  {label}
                </span>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-4">לא מצאתם את העיר שלכם? אנחנו נותנים שירות בכל הארץ.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+972506277858"
                className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-colors"
              >
                חייגו עכשיו: 050-6277858
              </a>
              <Link
                href="/bedek-bayit"
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                בדק בית לפי עיר
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה וחוות דעת נגדית</p>
          <p className="text-gray-400 text-sm">📞 050-6277858 | שירות בכל הארץ</p>
        </div>
      </footer>
    </div>
  )
}
