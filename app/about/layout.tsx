import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "אודות ליגל בדק בית | Legal Bedek - מומחים לאיתור ליקויי בנייה",
  description: "הכירו את ליגל בדק בית - מומחים מוסמכים לאיתור ליקויי בנייה וחוות דעת נגדית. הסמכת איגוד המהנדסים, רישיון משרד העבודה, ציוד מתקדם ושירות בכל הארץ.",
  keywords: [
    "ליגל בדק בית",
    "Legal Bedek",
    "מומחה בדק בית",
    "איתור ליקויי בנייה",
    "חוות דעת נגדית",
    "בדיקה תרמוגרפית",
    "יגאל בנסקי",
    "בדק בית מוסמך"
  ],
  openGraph: {
    title: "אודות ליגל בדק בית | Legal Bedek",
    description: "מומחים מוסמכים לאיתור ליקויי בנייה וחוות דעת נגדית - הסמכת איגוד המהנדסים ורישיון משרד העבודה",
    type: "website",
    locale: "he_IL",
    url: "https://legalbedek.co.il/about",
    siteName: "בדק בית Legal",
  },
  alternates: {
    canonical: "https://legalbedek.co.il/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
