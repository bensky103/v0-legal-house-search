"use client"

import Image from "next/image"
import Link from "next/link"
import { galleryImages, type GalleryImage } from "@/lib/gallery-images"
import { SiteIndex } from "@/components/site-index"

const sections: { key: GalleryImage["category"]; heading: string; description: string }[] = [
  {
    key: "team",
    heading: "צוות המומחים",
    description: "מומחי בדק בית מוסמכים על ידי איגוד המהנדסים וברישיון משרד העבודה",
  },
  {
    key: "inspection",
    heading: "בדיקות אמיתיות בשטח",
    description: "תיעוד אמיתי של בדיקות בדק בית שביצענו בדירות חדשות, דירות יד שניה ובתים פרטיים",
  },
  {
    key: "defect",
    heading: "ליקויי בנייה שאותרו",
    description: "דוגמאות לליקויי בנייה אמיתיים שאותרו ותועדו בבדיקות - רטיבות, סדקים, חשמל ואינסטלציה",
  },
  {
    key: "equipment",
    heading: "ציוד מקצועי מתקדם",
    description: "הציוד ההנדסי המתקדם שבעזרתו אנו מאתרים ליקויים סמויים בדיוק גבוה",
  },
  {
    key: "field",
    heading: "תיעוד בדיקות בשטח",
    description: "מאות תמונות אמיתיות מבדיקות בדק בית בשטח - רטיבות, איטום, אינסטלציה, ריצוף, חיפויים, אלומיניום, מעקות, טיח וכלים סניטריים",
  },
]

export default function GalleryPage() {
  const heroImage = galleryImages.find((img) => img.category === "hero")
  const grouped = galleryImages.reduce<Record<string, GalleryImage[]>>((acc, img) => {
    ;(acc[img.category] ??= []).push(img)
    return acc
  }, {})

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
                  גלריית בדק בית - Legal
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

      <main>
      {/* Intro */}
      <section className="py-10 md:py-14 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            גלריית בדיקות בדק בית הנדסי
          </h2>
          <p className="text-base md:text-lg text-white leading-relaxed text-pretty">
            תיעוד אמיתי של בדיקות בדק בית ואיתור ליקויי בנייה שביצענו בדירות חדשות, דירות יד שניה ובתים פרטיים
            ברחבי הארץ - מומחים מוסמכים על ידי איגוד המהנדסים וברישיון משרד העבודה.
          </p>
        </div>
      </section>

      {/* Hero - lead expert image */}
      {heroImage && (
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <figure className="group relative overflow-hidden rounded-2xl shadow-lg bg-white max-w-4xl mx-auto md:flex md:items-stretch">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-auto md:w-1/2 md:min-h-[28rem] overflow-hidden bg-gray-100">
                <Image
                  src={heroImage.src || "/placeholder.svg"}
                  alt={heroImage.alt}
                  title={heroImage.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover object-top ${heroImage.objectPosition ?? ""}`}
                  priority
                />
              </div>
              <figcaption className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center text-right">
                <span className="inline-block self-start bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  מומחה בדק בית מוסמך
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{heroImage.title}</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{heroImage.caption}</p>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* Grouped Gallery Sections */}
      {sections.map(
        ({ key, heading, description }) =>
          grouped[key]?.length > 0 && (
            <section key={key} className="pb-10 md:pb-14">
              <div className="container mx-auto px-4">
                <div className="text-center mb-6 md:mb-8 max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-balance">{heading}</h2>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed text-pretty">{description}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  {grouped[key].map((image, index) => (
                    <figure
                      key={index}
                      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                    >
                      <div
                        className={`relative overflow-hidden bg-gray-100 ${
                          image.category === "team" ? "aspect-[3/4]" : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          title={image.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={`transition-transform duration-500 group-hover:scale-105 ${
                            image.fitContain ? "object-contain" : "object-cover"
                          } ${image.objectPosition ?? "object-center"}`}
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="p-4">
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{image.caption}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          ),
      )}

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            צריכים בדק בית לנכס שלכם?
          </h2>
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

      </main>

      <SiteIndex />
    </div>
  )
}
