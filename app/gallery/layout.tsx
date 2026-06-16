import type { Metadata } from "next"
import { galleryImages } from "@/lib/gallery-images"

export const metadata: Metadata = {
  title: "גלריית בדק בית - תיעוד בדיקות ואיתור ליקויי בנייה בכל הארץ | Legal בדק בית",
  description:
    "גלריית תמונות של בדיקות בדק בית הנדסי ואיתור ליקויי בנייה בדירות חדשות, יד שניה ובתים פרטיים בכל הארץ. בדיקת ריצוף, איטום, רטיבות, חלונות, אינסטלציה ועוד - מומחה בדק בית מוסמך.",
  keywords: [
    "בדק בית",
    "גלריית בדק בית",
    "איתור ליקויי בנייה",
    "בדק בית הנדסי",
    "בדיקת ריצוף",
    "בדיקת איטום",
    "בדיקת רטיבות",
    "בדיקת חלונות",
    "בדיקת אינסטלציה",
    "בדק בית דירה חדשה",
    "בדק בית יד שניה",
    "מומחה בדק בית",
    "בדק בית בכל הארץ",
    "חוות דעת הנדסית",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  openGraph: {
    title: "גלריית בדק בית - תיעוד בדיקות ואיתור ליקויי בנייה בכל הארץ",
    description:
      "תיעוד אמיתי של בדיקות בדק בית ואיתור ליקויי בנייה בדירות חדשות, יד שניה ובתים פרטיים ברחבי הארץ.",
    type: "website",
    locale: "he_IL",
    url: "https://legalbedek.co.il/gallery",
    siteName: "בדק בית Legal",
    images: galleryImages.slice(0, 4).map((img) => ({ url: img.src, alt: img.alt })),
  },
  alternates: {
    canonical: "https://legalbedek.co.il/gallery",
  },
  robots: "index, follow",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "גלריית בדק בית - Legal",
    description:
      "גלריית תמונות של בדיקות בדק בית ואיתור ליקויי בנייה בכל הארץ מאת יגאל בנסקי, מומחה בדק בית מוסמך.",
    url: "https://legalbedek.co.il/gallery",
    image: galleryImages.map((img) => ({
      "@type": "ImageObject",
      contentUrl: img.src,
      name: img.title,
      description: img.alt,
      keywords: img.keywords.join(", "),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      {children}
    </>
  )
}
