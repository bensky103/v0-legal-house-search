interface ArticleJsonLdProps {
  headline: string
  description: string
  slug: string
  breadcrumbLabel: string
  /** ISO date (YYYY-MM-DD) the article was first published. */
  datePublished?: string
  /** ISO date (YYYY-MM-DD) the article was last updated. */
  dateModified?: string
  /** Representative image path (defaults to the brand portrait). */
  image?: string
}

const BASE_URL = "https://legalbedek.co.il"

// Server-rendered JSON-LD (Article + Author + BreadcrumbList) for article pages.
// Strengthens E-E-A-T: the author is linked to the site-wide Person entity, the
// publisher carries a real logo, and publish/update dates signal freshness.
export function ArticleJsonLd({
  headline,
  description,
  slug,
  breadcrumbLabel,
  datePublished,
  dateModified,
  image = "/gallery/yigal-bensky-mumche-bedek-bayit.webp",
}: ArticleJsonLdProps) {
  const url = `${BASE_URL}/articles/${slug}`
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: "he",
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1086,
      height: 1448,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#yigal-bensky`,
      name: "יגאל בנסקי",
      jobTitle: "מומחה בדק בית מוסמך",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "בדק בית Legal",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.webp`,
        width: 1124,
        height: 901,
      },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "מאמרים", item: `${BASE_URL}/blog` },
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
