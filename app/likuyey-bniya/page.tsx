import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { defects } from "@/lib/defects"

export const metadata: Metadata = {
  title: "ליקויי בנייה נפוצים בדירות - מדריך מקצועי | בדק בית Legal",
  description:
    "מדריך מקצועי לליקויי הבנייה הנפוצים בדירות בישראל - רטיבות, סדקים, איטום, חשמל, ריצוף, אינסטלציה ועוד. למדו לזהות ליקויים ומתי לבצע בדק בית.",
  alternates: { canonical: "https://legalbedek.co.il/likuyey-bniya" },
  robots: "index, follow",
}

export default function DefectsIndexPage() {
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
                ליקויי בנייה
              </span>
            </li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-l from-blue-700 to-blue-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">ליקויי בנייה נפוצים בדירות</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto text-pretty">
            מדריך מקצועי לזיהוי ליקויי הבנייה הנפוצים בדירות בישראל. למדו אילו סימנים מעידים על בעיה, מהם הגורמים, ומתי
            חשוב לבצע בדק בית הנדסי.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {defects.map((defect) => (
              <Link
                key={defect.slug}
                href={`/likuyey-bniya/${defect.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-2">ליקויי {defect.name}</h2>
                <p className="text-base text-gray-700 leading-relaxed">{defect.summary}</p>
                <span className="inline-block mt-4 text-blue-600 font-medium">קראו עוד ←</span>
              </Link>
            ))}
          </div>
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
