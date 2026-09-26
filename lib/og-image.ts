// Default social preview image.
//
// Next merges metadata by replacing whole blocks, not by field: a page that
// declares `openGraph` without `images` does not inherit the root layout's
// image, it simply has none. Forty-five pages were in that state - every city,
// project, defect guide, service and most articles - so sharing one of them on
// WhatsApp or Facebook produced a link with no picture at all.
//
// Kept free of imports on purpose: every page's metadata pulls this in, and it
// should not drag the gallery data into those bundles.

export const OG_IMAGE = [
  {
    url: "https://www.legalbedek.co.il/images/binyanim-moderniim-israel-bedek-bayit.webp",
    width: 1229,
    height: 752,
    alt: "בדק בית Legal - בדיקת איכות בנייה של דירות חדשות ומבנים בישראל",
  },
]
