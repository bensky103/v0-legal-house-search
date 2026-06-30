import type { Metadata } from "next"
import { ArticleJsonLd } from "@/components/article-jsonld"

export const metadata: Metadata = {
  title: "בדק בית לדירה יד שניה: חיסכון עשרות אלפי שקלים | Legal בדק בית",
  description: "מדריך מקיף על בדק בית לדירה יד שניה - איך לחסוך הוצאות עתידיות על ליקויים סמויים, לדעת מה בדיוק קונים ולהוריד את מחיר הדירה במשא ומתן. מאת יגאל בנסקי, מומחה מוסמך.",
  keywords: [
    "בדק בית",
    "בדק בית יד שניה",
    "בדק בית דירה יד שניה",
    "בדיקת דירה יד שניה",
    "בדיקת נכס לפני רכישה",
    "איתור ליקויי בנייה",
    "ליקויים סמויים",
    "משא ומתן דירה",
    "בדק בית מחיר",
    "מומחה בדק בית",
    "רכישת דירה יד שניה",
    "בדיקת בית לפני קניה"
  ],
  authors: [{ name: "יגאל בנסקי" }],
  openGraph: {
    title: "בדק בית לדירה יד שניה: חיסכון עשרות אלפי שקלים",
    description: "מדריך מקיף על בדק בית לדירה יד שניה - איך לחסוך הוצאות עתידיות ולהוריד את מחיר הדירה במשא ומתן",
    type: "article",
    locale: "he_IL",
    url: "https://legalbedek.co.il/articles/bedek-bayit-dira-yad-shniya",
    siteName: "בדק בית Legal",
  },
  alternates: {
    canonical: "https://legalbedek.co.il/articles/bedek-bayit-dira-yad-shniya",
  },
  robots: "index, follow",
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ArticleJsonLd
        headline="בדק בית לדירה יד שניה: חיסכון עשרות אלפי שקלים"
        description="מדריך מקיף על בדק בית לדירה יד שניה - איך לחסוך הוצאות עתידיות על ליקויים סמויים, לדעת מה בדיוק קונים ולהוריד את מחיר הדירה במשא ומתן."
        slug="bedek-bayit-dira-yad-shniya"
        breadcrumbLabel="בדק בית לדירה יד שניה"
        datePublished="2026-06-28"
        dateModified="2026-06-28"
      />
      {children}
    </>
  )
}
