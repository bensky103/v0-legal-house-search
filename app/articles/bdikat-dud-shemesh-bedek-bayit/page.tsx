import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { ArticlePriceSection } from "@/components/article-price-section"
import { DEFECTS_DUD_SHEMESH } from "@/lib/article-images"

export const metadata: Metadata = {
  title: "בדיקת דוד שמש בבדק בית — מערכת סולארית (ת\"י 579) | בדק בית Legal",
  description:
    "דוד השמש והמערכת הסולארית נבדקים בבדק בית לפי ת\"י 579 — תקינות הדוד, הקולטים, הבידוד והחיבורים, כולל בדיקה תרמית לאיתור ליקויים.",
  keywords: [
    "בדיקת דוד שמש",
    "מערכת סולארית",
    "ת\"י 579",
    "קולטים",
    "חימום מים",
    "מצלמה תרמית",
    "בדק בית דוד שמש",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/bdikat-dud-shemesh-bedek-bayit" },
  openGraph: {
    title: "בדיקת דוד שמש בבדק בית — מערכת סולארית (ת\"י 579)",
    description: "כך נבדקים דוד השמש והמערכת הסולארית בבדק בית לפי ת\"י 579 — דוד, קולטים, בידוד וחיבורים.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/bdikat-dud-shemesh-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

export default function BdikatDudShemeshArticle() {
  return (
    <ArticleLayout
      title="בדיקת דוד שמש בבדק בית — מערכת סולארית (ת&quot;י 579)"
      subtitle="דוד השמש והמערכת הסולארית הם חלק ממערכות הדירה שנבדקות בבדק בית. כך נבדקים הדוד, הקולטים, הבידוד והחיבורים לפי ת&quot;י 579."
      slug="bdikat-dud-shemesh-bedek-bayit"
      description="כך נבדקים בבדק בית דוד השמש והמערכת הסולארית לפי ת״י 579 — דוד, קולטים, בידוד וחיבורים."
      datePublished="2026-07-12"
      dateModified="2026-07-12"
      ctaTitle="דוד השמש מותקן כראוי?"
      ctaText="בידוד או חיבור לקוי בדוד השמש פוגעים ביעילות ועלולים לגרום לנזילה. בדק בית מקצועי בודק את המערכת הסולארית."
    >
      <ArticleLead>
        דוד השמש והמערכת הסולארית נבדקים בבדק בית לפי <strong>ת"י 579</strong> — התקן לבדיקת מערכות סולאריות
        לחימום מים. בידוד לקוי, חיבורים בעייתיים או התקנה שגויה פוגעים ביעילות המערכת ועלולים לגרום לנזילות
        ולאובדן חום.
      </ArticleLead>

      <ArticleH2>מה נבדק בדוד השמש</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>הדוד:</strong> תקינות התקנת הדוד, מיקומו והתאמתו למפרט הדירה.</li>
        <li><strong>הקולטים:</strong> התקנה ומיקום הקולטים הסולאריים על הגג.</li>
        <li><strong>בידוד וחיבורים:</strong> בידוד הצנרת והדוד, ותקינות החיבורים לאיתור נזילות.</li>
        <li><strong>אינטגרציה עם האינסטלציה:</strong> חיבור תקין למערכת המים החמים של הדירה.</li>
      </ul>

      <ArticleH2>למה בדיקה תרמית מסייעת</ArticleH2>
      <p>
        מצלמה תרמית מאפשרת לבחון את התפלגות החום בדוד ובצנרת, ולסייע באיתור בידוד לקוי או חיבורים בעייתיים.
        בשילוב עם בדיקה חזותית של הדוד, הקולטים והחיבורים, מתקבלת תמונה מלאה של תקינות המערכת הסולארית.
      </p>

      <ArticleDefectGallery
        heading="בדיקת דוד שמש בשטח — תיעוד מבדק בית"
        intro="דוגמה אמיתית לבדיקת דוד שמש ומערכת חימום מים בעזרת מצלמה תרמית, לאיתור בידוד וחיבורים לקויים."
        items={DEFECTS_DUD_SHEMESH}
      />

      <ArticlePriceSection
        items={[
          { item: "טיפול בחוטי חשמל חשופים בדוד", price: "כ־300 ₪" },
          { item: "השלמת מיכל התפשטות תקני", price: "כ־860 ₪" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריכים על <Link href="/likuyey-bniya/dud-shemesh" className="text-blue-700 hover:underline font-medium">ליקויי דוד שמש</Link>{" "}
        ו<Link href="/articles/tikaney-instalatzia-bedek-bayit" className="text-blue-700 hover:underline font-medium">תקני האינסטלציה (ת״י 1205)</Link>,
        או קראו על <Link href="/articles/bdikat-mizug-avir-bedek-bayit" className="text-blue-700 hover:underline font-medium">בדיקת מיזוג אוויר</Link>.
      </p>
    </ArticleLayout>
  )
}
