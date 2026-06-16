"use client"

import Image from "next/image"
import Link from "next/link"
import { galleryImages } from "@/lib/gallery-images"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
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

      {/* Gallery Grid */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {galleryImages.map((image, index) => (
              <figure
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    title={image.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      image.fitContain ? "object-contain" : "object-cover"
                    } ${image.objectPosition ?? ""}`}
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
                {/* SEO keywords - present in HTML for search engines but hidden from visitors */}
                <ul className="sr-only">
                  {image.keywords.map((kw, i) => (
                    <li key={i}>{kw}</li>
                  ))}
                </ul>
                <figcaption className="p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{image.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  )
}
