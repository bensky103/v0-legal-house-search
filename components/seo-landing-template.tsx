import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteIndex } from "@/components/site-index"

interface SeoFeature {
  title: string
  description: string
}

interface Breadcrumb {
  label: string
  href: string
}

interface BulletSection {
  heading: string
  items: string[]
}

interface SeoLandingTemplateProps {
  badge: string
  title: string
  subtitle: string
  intro: string
  features: SeoFeature[]
  contentSections: { heading: string; paragraphs: string[] }[]
  faq: { question: string; answer: string }[]
  ctaTitle: string
  ctaText: string
  relatedLinks?: { label: string; href: string }[]
  breadcrumbs?: Breadcrumb[]
  canonicalUrl?: string
  // Optional list-style sections (e.g. symptoms / causes), rendered after content sections.
  bulletSections?: BulletSection[]
  // Optional label shown above the features grid (defaults to a generic heading).
  featuresHeading?: string
  // Optional real, named projects rendered as H3 sub-headings (city pages, P9/P10).
  projectsSection?: {
    heading: string
    intro: string
    projects: { name: string; area: string }[]
  }
}

export function SeoLandingTemplate({
  badge,
  title,
  subtitle,
  intro,
  features,
  contentSections,
  faq,
  ctaTitle,
  ctaText,
  relatedLinks = [],
  breadcrumbs = [],
  canonicalUrl,
  bulletSections = [],
  featuresHeading = "מה כולל שירות בדק הבית שלנו?",
  projectsSection,
}: SeoLandingTemplateProps) {
  const baseUrl = "https://legalbedek.co.il"
  const crumbs: Breadcrumb[] = breadcrumbs.length > 0 ? breadcrumbs : [{ label: "דף הבית", href: "/" }]

  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${baseUrl}${c.href}`,
    })),
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
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
            <Link
              href="/"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                {i < crumbs.length - 1 ? (
                  <>
                    <Link href={c.href} className="text-blue-600 hover:underline">
                      {c.label}
                    </Link>
                    <span className="text-gray-400 px-1">{"›"}</span>
                  </>
                ) : (
                  <span className="text-gray-700 font-medium" aria-current="page">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-l from-blue-700 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1 text-sm font-medium mb-4">
            {badge}
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-balance">{title}</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-pretty">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="tel:+972506277858"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-colors"
            >
              חייגו עכשיו: 050-6277858
            </a>
            <a
              href="https://wa.me/972506277858"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-lg font-bold transition-all"
            >
              שליחת הודעת WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed text-center">{intro}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            {featuresHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <Card key={i} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {contentSections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-base md:text-lg text-gray-800 leading-relaxed mb-3">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Named real projects (city pages) — each project name as an H3 for "<project> בדק בית" search */}
      {projectsSection && projectsSection.projects.length > 0 && (
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{projectsSection.heading}</h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">{projectsSection.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectsSection.projects.map((p, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-blue-900">בדק בית בפרויקט {p.name}</h3>
                  <p className="mt-1 text-sm md:text-base text-gray-700 leading-relaxed">{p.area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bullet sections (e.g. symptoms / causes) */}
      {bulletSections.length > 0 && (
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bulletSections.map((section, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-base text-gray-800 leading-relaxed">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
              שאלות נפוצות
            </h2>
            <div className="space-y-6">
              {faq.map((item, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-l from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">{ctaText}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+972506277858"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-colors"
            >
              חייגו עכשיו: 050-6277858
            </a>
            <a
              href="https://wa.me/972506277858"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-lg font-bold transition-all"
            >
              שליחת הודעת WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related links */}
      {relatedLinks.length > 0 && (
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">עמודים נוספים</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Site index (HTML sitemap) - internal links to every page so this landing page is not a dead-end */}
      <SiteIndex />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה וחוות דעת נגדית</p>
          <p className="text-gray-400 text-sm">📞 050-6277858 | שירות בכל הארץ</p>
          <p className="text-gray-500 text-xs mt-4">© 2020 בדק בית Legal - כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}
