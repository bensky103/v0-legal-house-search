import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { SiteIndex } from "@/components/site-index"

/**
 * Shared chrome for long-form article pages (server component, SEO-friendly).
 * Provides the header, title block, author byline, CTA, author bio and footer,
 * so each article page only supplies metadata + body content.
 */
export function ArticleLayout({
  title,
  subtitle,
  children,
  ctaTitle = "צריכים בדק בית מקצועי?",
  ctaText = "צרו קשר עוד היום לתיאום בדיקה הנדסית מקיפה ולקבלת חוות דעת מקצועית.",
}: {
  title: string
  subtitle?: string
  children: ReactNode
  ctaTitle?: string
  ctaText?: string
}) {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.webp" alt="Legal בדק בית - לוגו" width={50} height={50} className="object-contain" />
              <div className="text-right">
                <h1 className="text-lg font-bold text-gray-900">בדק בית ואיתור ליקויי בניה</h1>
              </div>
            </Link>
            <a
              href="tel:+972506277858"
              className="inline-flex items-center rounded-md bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-semibold transition-colors"
            >
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </header>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              {title}
            </h1>
            {subtitle && <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">{subtitle}</p>}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-600 text-sm md:text-base">
              <span>מאת: יגאל בנסקי</span>
              <span className="hidden sm:inline">|</span>
              <span>מומחה בדק בית מוסמך מטעם איגוד המהנדסים</span>
              <span className="hidden sm:inline">|</span>
              <span>רישיון משרד העבודה: 1641507</span>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-6 text-gray-800 leading-relaxed text-base md:text-lg">{children}</div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-l from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{ctaTitle}</h2>
            <p className="text-lg md:text-xl mb-6 text-blue-100">{ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+972506277858"
                className="inline-flex items-center justify-center rounded-lg bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold transition-colors"
              >
                התקשרו עכשיו: 050-627-7858
              </a>
              <a
                href="https://wa.me/972506277858"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-colors"
              >
                שלחו הודעה בוואטסאפ
              </a>
            </div>
          </div>

          {/* Author bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">יגאל בנסקי</h3>
                <p className="text-gray-600 mb-2">מומחה בדק בית מוסמך מטעם איגוד המהנדסים | רישיון משרד העבודה: 1641507</p>
                <p className="text-gray-700">
                  בעל ניסיון רב שנים באיתור ליקויי בנייה, הכנת חוות דעת מקצועיות וליווי לקוחות בהליכים מול קבלנים. מספק שירותי בדק בית מקצועיים בכל הארץ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <SiteIndex />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">Legal בדק בית - מומחים לאיתור ליקויי בנייה | טלפון: 050-627-7858</p>
          <Link href="/" className="text-blue-400 hover:underline mt-2 inline-block">
            חזרה לעמוד הבית
          </Link>
        </div>
      </footer>
    </div>
  )
}

/* ---- Small presentational helpers for article bodies ---- */

export function ArticleH2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>
}

export function ArticleLead({ children }: { children: ReactNode }) {
  return <p className="text-xl text-gray-700 leading-relaxed">{children}</p>
}
