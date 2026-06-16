import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "מתי כדאי להזמין בדק בית? המדריך המלא לעיתוי נכון | Legal בדק בית",
  description: "מתי הזמן הנכון להזמין בדק בית? לפני מסירה, ביום המסירה או אחריה? מדריך מקצועי לעיתוי הנכון של בדיקה הנדסית שיחסוך לכם עשרות אלפי שקלים.",
  keywords: [
    "מתי להזמין בדק בית",
    "בדק בית לפני מסירה",
    "בדק בית ביום מסירה",
    "עיתוי בדק בית",
    "בדיקה הנדסית דירה",
    "בדק בית מקצועי",
    "מסירת דירה חדשה",
    "פרוטוקול מסירה",
    "ליקויי בנייה",
    "בדק בית קבלן",
    "תקופת בדק",
    "זכויות רוכש דירה"
  ],
  authors: [{ name: "יגאל בנסקי" }],
  openGraph: {
    title: "מתי כדאי להזמין בדק בית? המדריך המלא לעיתוי נכון",
    description: "מתי הזמן הנכון להזמין בדק בית? מדריך מקצועי לעיתוי הנכון של בדיקה הנדסית שיחסוך לכם כסף רב",
    type: "article",
    locale: "he_IL",
    url: "https://legalbedek.co.il/articles/matai-lehazmin-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  alternates: {
    canonical: "https://legalbedek.co.il/articles/matai-lehazmin-bedek-bayit",
  },
  robots: "index, follow",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
