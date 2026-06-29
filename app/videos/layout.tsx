import type { Metadata } from "next"
import { videos, videoSchema } from "@/lib/videos"

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
    url: "https://legalbedek.co.il/videos",
    siteName: "בדק בית Legal",
  },
  alternates: {
    canonical: "https://legalbedek.co.il/videos",
  },
  robots: "index, follow",
}

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {videos.map((v) => (
        <script
          key={v.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(v)) }}
        />
      ))}
      {children}
    </>
  )
}
