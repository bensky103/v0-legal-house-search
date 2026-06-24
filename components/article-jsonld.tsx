interface ArticleJsonLdProps {
  headline: string
  description: string
  slug: string
  breadcrumbLabel: string
}

const BASE_URL = "https://legalbedek.co.il"

// Server-rendered JSON-LD (Article + BreadcrumbList) for article pages.
export function ArticleJsonLd({ headline, description, slug, breadcrumbLabel }: ArticleJsonLdProps) {
  const url = `${BASE_URL}/articles/${slug}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: "he",
    image: `${BASE_URL}/logo.png`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: "יגאל בנסקי",
      jobTitle: "מומחה בדק בית מוסמך",
    },
    publisher: {
      "@type": "Organization",
      name: "בדק בית Legal",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "מאמרים", item: `${BASE_URL}/#articles` },
      { "@type": "ListItem", position: 3, name: breadcrumbLabel, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}
