import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "בדק בית בדירה חדשה: למה זה קריטי ואיך זה עוזר במשא ומתן | Legal בדק בית",
  description: "מדריך מקיף על בדק בית בדירה חדשה - למה חשוב לא לקנות חתול בשק, איך בדיקת נכס עוזרת במשא ומתן על המחיר, ומה בדק בית מקצועי חושף. מאת יגאל בנסקי, מומחה מוסמך.",
  keywords: [
    "בדק בית",
    "בדק בית דירה חדשה",
    "בדיקת דירה חדשה",
    "איתור ליקויי בנייה",
    "בדק בית לפני רכישה",
    "בדיקת נכס",
    "חוות דעת נגדית",
    "ליקויי בנייה",
    "משא ומתן דירה",
    "בדק בית מחיר",
    "מומחה בדק בית",
    "בדק בית קבלן"
  ],
  authors: [{ name: "יגאל בנסקי" }],
  openGraph: {
    title: "בדק בית בדירה חדשה: למה זה קריטי ואיך זה עוזר במשא ומתן",
    description: "מדריך מקיף על בדק בית בדירה חדשה - למה חשוב לא לקנות חתול בשק ואיך זה עוזר במשא ומתן על המחיר",
    type: "article",
    locale: "he_IL",
    url: "https://legalbedek.co.il/articles/bedek-bayit-dira-hadasha",
    siteName: "בדק בית Legal",
  },
  alternates: {
    canonical: "https://legalbedek.co.il/articles/bedek-bayit-dira-hadasha",
  },
  robots: "index, follow",
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
