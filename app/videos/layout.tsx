import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "סרטוני בדק בית - תיעוד בדיקות ואיתור ליקויי בנייה | Legal בדק בית",
  description:
    "סרטוני וידאו של בדיקות בדק בית הנדסי ואיתור ליקויי בנייה - ריצוף, איטום, רטיבות, אלומיניום, אינסטלציה, מעקות, סדקים ועוד. מומחה בדק בית מוסמך, יגאל בנסקי.",
  keywords: [
    "בדק בית",
    "סרטוני בדק בית",
    "וידאו בדק בית",
    "איתור ליקויי בנייה",
    "בדק בית הנדסי",
    "בדיקת ריצוף",
    "בדיקת איטום",
    "בדיקת רטיבות",
    "בדיקת אלומיניום",
    "בדיקת אינסטלציה",
    "בדיקת מעקות",
    "מומחה בדק בית",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  openGraph: {
    title: "סרטוני בדק בית - תיעוד בדיקות ואיתור ליקויי בנייה",
    description:
      "סרטוני וידאו אמיתיים של בדיקות בדק בית ואיתור ליקויי בנייה בדירות חדשות, יד שניה ובתים פרטיים.",
    type: "website",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/videos",
    siteName: "בדק בית Legal",
  },
  alternates: {
    canonical: "https://www.legalbedek.co.il/videos",
  },
  robots: "index, follow",
}

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  // Per-video VideoObject schema is rendered by each page itself: the grid page
  // (/videos) lists all videos, and each /videos/[slug] page declares only its
  // own video. Injecting all videos here (a shared layout) made every single
  // video page claim 29 videos while showing one player — a mismatch that kept
  // the videos out of Google's video index.
  return <>{children}</>
}
