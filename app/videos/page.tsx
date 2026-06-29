import Image from "next/image"
import Link from "next/link"
import { videos } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"
import { LiteYouTube } from "@/components/lite-youtube"
import { SiteIndex } from "@/components/site-index"

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="בדק בית Legal - מומחה לאיתור ליקויי בנייה"
                width={64}
                height={64}
                className="object-contain w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <h1 className="text-base md:text-xl font-bold text-gray-900 leading-tight">
                  סרטוני בדק בית - Legal
                </h1>
                <p className="text-xs md:text-sm text-slate-700 font-medium">
                  תיעוד בדיקות בדק בית ואיתור ליקויי בנייה בכל הארץ
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="py-10 md:py-14 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            סרטוני בדיקות בדק בית הנדסי
          </h2>
          <p className="text-base md:text-lg text-white leading-relaxed text-pretty">
            סרטונים אמיתיים מבדיקות בדק בית בשטח - ריצוף, איטום, רטיבות, אלומיניום, אינסטלציה, מעקות, סדקים
            ועוד. מומחה בדק בית מוסמך על ידי איגוד המהנדסים וברישיון משרד העבודה.
          </p>
        </div>
      </section>

      {/* Videos grid */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {videos.map((v) => (
              <figure key={v.id}>
                <LiteYouTube id={v.id} title={v.title} />
                <figcaption className="mt-3">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                    <Link href={`/videos/${videoSlug(v)}`} className="hover:text-blue-700 hover:underline">
                      {v.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{v.description}</p>
                  <Link
                    href={`/videos/${videoSlug(v)}`}
                    className="mt-2 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    לעמוד הסרטון המלא ←
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">צריכים בדק בית לנכס שלכם?</h2>
          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
            בדק בית הנדסי מקצועי לדירות חדשות, יד שניה ובתים פרטיים - איתור ליקויי בנייה, חוות דעת משפטית
            וליווי מלא מול קבלנים ומוכרים.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:073-3745044"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              חייגו עכשיו: 073-3745044
            </a>
            <Link
              href="/"
              className="bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </section>

      <SiteIndex />
    </div>
  )
}
