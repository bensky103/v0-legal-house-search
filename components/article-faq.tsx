interface FaqItem {
  question: string
  answer: string
}

/**
 * Reusable FAQ block for article pages (server component, SEO-friendly).
 * Renders an accessible Q&A section and emits FAQPage JSON-LD so the
 * questions are eligible for rich results in Google search.
 */
export function ArticleFaq({
  items,
  heading = "שאלות נפוצות",
}: {
  items: FaqItem[]
  heading?: string
}) {
  if (!items || items.length === 0) return null

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <section className="mt-12" aria-labelledby="article-faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 id="article-faq-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {heading}
      </h2>
      <div className="divide-y divide-gray-200 rounded-2xl ring-1 ring-gray-200 bg-white">
        {items.map((item, i) => (
          <details key={i} className="group p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden" {...(i === 0 ? { open: true } : {})}>
            <summary className="flex cursor-pointer items-center justify-between gap-3 text-right">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.question}</h3>
              <span
                aria-hidden="true"
                className="shrink-0 text-blue-600 text-2xl leading-none transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
