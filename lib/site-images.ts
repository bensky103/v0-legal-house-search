// Central metadata for non-gallery site images (brand, hero, testimonials).
// Single source of truth consumed by components, ImageObject schema, and the
// image sitemap so every image contributes to Google Image Search visibility.
// All assets are compressed WebP with SEO-friendly filenames.

import { galleryImages } from "@/lib/gallery-images"

/** Canonical production origin, used to build absolute image URLs for SEO. */
export const SITE_URL = "https://legalbedek.co.il"

/** Absolute URL helper for an asset path. */
export const absoluteUrl = (path: string): string =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`

export interface SiteImage {
  /** Local WebP path with SEO-friendly filename. */
  src: string
  width: number
  height: number
  /** Descriptive Hebrew alt text. */
  alt: string
  /** Caption shown in UI / used in image sitemap. */
  caption: string
  /** Page (relative path) where the image primarily appears. */
  page: string
  /** Whether this image is above the fold and should load eagerly. */
  priority?: boolean
}

export const siteImages = {
  logo: {
    src: "/logo.webp",
    width: 1124,
    height: 901,
    alt: "בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה וחוות דעת הנדסית נגדית",
    caption: "בדק בית Legal - מומחה לאיתור ליקויי בנייה וחוות דעת נגדית",
    page: "/",
  },
  hero: {
    src: "/images/binyanim-moderniim-israel-bedek-bayit.webp",
    width: 1100,
    height: 1467,
    alt: "מגדל מגורים חדש ומודרני בישראל על רקע שמיים כחולים - בדק בית לדירה חדשה, בדיקת ליקויי בנייה ובדיקת איכות בנייה לפני מסירה מהקבלן",
    caption: "בדק בית ובדיקת ליקויי בנייה במגדלי מגורים ובדירות חדשות בכל הארץ - בדיקת איכות בנייה לפני מסירה מהקבלן",
    page: "/",
    priority: true,
  },
  reviewBenny: {
    src: "/images/bikoret-bedek-bayit-benny.webp",
    width: 1220,
    height: 1155,
    alt: "ביקורת בדק בית מלקוח מרוצה - בדיקה מקצועית ומדויקת, הקבלן תיקן את כל הליקויים שאותרו בדוח",
    caption: "ביקורת לקוח - בדיקה מקצועית ומדויקת, הקבלן תיקן את כל הליקויים",
    page: "/",
  },
  reviewMike: {
    src: "/images/bikoret-bedek-bayit-mike.webp",
    width: 1600,
    height: 720,
    alt: "ביקורת בדק בית מלקוח מרוצה - דוח מפורט וברור, ממליצים בחום לכל מי שמקבל דירה חדשה מקבלן",
    caption: "ביקורת לקוח - דוח מפורט וברור, ממליצים בחום למקבלי דירה חדשה",
    page: "/",
  },
  reviewYaakov: {
    src: "/images/bikoret-bedek-bayit-yaakov.webp",
    width: 1201,
    height: 758,
    alt: "ביקורת בדק בית מלקוח מרוצה - המלצה חמה על שירות בדק בית מקצועי ואמין",
    caption: "ביקורת לקוח - המלצה חמה על שירות בדק בית מקצועי ואמין",
    page: "/",
  },
  reviewWhatsapp: {
    src: "/images/bikoret-bedek-bayit-whatsapp.webp",
    width: 1220,
    height: 817,
    alt: "ביקורת בדק בית בוואטסאפ מלקוח מרוצה - עבודה מקצועית ומדויקת באיתור ליקויי בנייה",
    caption: "ביקורת לקוח בוואטסאפ - עבודה מקצועית ומדויקת",
    page: "/",
  },
  reviewInvestment: {
    src: "/images/bikoret-bedek-bayit-hashkaa.webp",
    width: 405,
    height: 73,
    alt: "ביקורת בדק בית מלקוח מרוצה - תודה רבה, הלקוח מעריך את ההשקעה בבדק הבית שחסך כסף וליקויים",
    caption: "ביקורת לקוח - תודה רבה, מעריך את ההשקעה בבדק הבית",
    page: "/",
  },
} as const satisfies Record<string, SiteImage>

export const allSiteImages: SiteImage[] = Object.values(siteImages)

/** Unified shape for SEO consumers (sitemap + ImageObject schema). */
export interface SeoImage {
  loc: string // absolute image URL
  title: string
  caption: string
  width: number
  height: number
  pageUrl: string // absolute URL of the page the image appears on
}

/**
 * Every indexable image across the site, with absolute URLs, captions and
 * dimensions. Combines branding/hero/testimonial images with the full gallery
 * so a single list powers both the image sitemap and ImageObject schema.
 */
export const seoImages: SeoImage[] = [
  ...allSiteImages.map((img) => ({
    loc: absoluteUrl(img.src),
    title: img.alt,
    caption: img.caption,
    width: img.width,
    height: img.height,
    pageUrl: absoluteUrl(img.page),
  })),
  ...galleryImages.map((img) => ({
    loc: absoluteUrl(img.src),
    title: img.title,
    caption: img.caption,
    width: img.width,
    height: img.height,
    pageUrl: absoluteUrl("/gallery"),
  })),
]
