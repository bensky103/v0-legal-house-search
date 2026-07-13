import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { ArticlePriceSection } from "@/components/article-price-section"
import { DEFECTS_MAMAD } from "@/lib/article-images"

export const metadata: Metadata = {
  title: "בדיקת ממ\"ד בבדק בית — דלת וחלון הדף, איטום ואוורור | בדק בית Legal",
  description:
    "הממ\"ד הוא רכיב מגן קריטי. כך בודקים בבדק בית את דלת ההדף, חלון ההדף, האיטום ומערכת האוויר לפי הנחיות פיקוד העורף בדירה חדשה מקבלן.",
  keywords: [
    "בדיקת ממד",
    "ממ\"ד",
    "דלת הדף",
    "חלון הדף",
    "פיקוד העורף",
    "חדר מוגן דירתי",
    "איטום ממד",
    "בדק בית ממד",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/bdikat-mamad-bedek-bayit" },
  openGraph: {
    title: "בדיקת ממ\"ד בבדק בית — דלת וחלון הדף, איטום ואוורור",
    description: "כך בודקים בבדק בית את דלת ההדף, חלון ההדף, האיטום ומערכת האוויר בממ\"ד לפי הנחיות פיקוד העורף.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/bdikat-mamad-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

export default function BdikatMamadArticle() {
  return (
    <ArticleLayout
      title="בדיקת ממ&quot;ד בבדק בית — דלת וחלון הדף, איטום ואוורור"
      subtitle="הממ&quot;ד הוא רכיב מגן קריטי שחייב לתפקד בשעת חירום. כך נבדקים דלת ההדף, חלון ההדף, האיטום והאוורור בבדק בית."
      slug="bdikat-mamad-bedek-bayit"
      description="כך נבדקים בבדק בית דלת ההדף, חלון ההדף, האיטום ומערכת האוויר בממ״ד לפי הנחיות פיקוד העורף."
      datePublished="2026-07-12"
      dateModified="2026-07-12"
      ctaTitle="הממ&quot;ד שלכם תקין?"
      ctaText="ליקוי בדלת, בחלון או באיטום הממ&quot;ד פוגע בתפקוד ההגנתי שלו. בדק בית מקצועי בודק ומתעד את הרכיבים הקריטיים."
    >
      <ArticleLead>
        הממ"ד (חדר מוגן דירתי) נועד להגן על הדיירים בשעת חירום, ולכן חובה שכל רכיביו יבוצעו ויותקנו כראוי.
        התקנה, איטום ואוורור לקויים פוגעים בתפקוד ההגנתי של החדר. בבדק בית נבדקים רכיבי הממ"ד לפי{" "}
        <strong>הנחיות פיקוד העורף</strong>.
      </ArticleLead>

      <ArticleH2>מה נבדק בממ&quot;ד</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>דלת ההדף:</strong> תקינות ההתקנה, הצירים, מנגנון הסגירה והאיטום ההיקפי.</li>
        <li><strong>חלון ההדף:</strong> התקנה, אטימה ותפקוד תקין של החלון והכנף הפנימית.</li>
        <li><strong>איטום ומעברי צנרת:</strong> אטימת הפתחים ומעברי הצנרת והחשמל השומרת על אטימות החדר.</li>
        <li><strong>מערכת אוויר וסינון:</strong> תקינות פתחי האוויר והרכיבים הנדרשים לפי ההנחיות.</li>
        <li><strong>גימור פנימי:</strong> טיח, ריצוף ונקודות חשמל, בהתאם לדרישות המיוחדות של הממ"ד.</li>
      </ul>

      <ArticleH2>למה חשוב לבדוק את הממ&quot;ד</ArticleH2>
      <p>
        רכיבי הממ"ד — דלת וחלון ההדף — הם פריטים כבדים ומורכבים שהתקנה לא מדויקת שלהם פוגעת באטימות ובתפקוד.
        ליקוי שמתגלה בבדק בית לפני המסירה מתועד בדוח ומאפשר לדרוש מהקבלן תיקון על חשבונו, במסגרת אחריותו לפי{" "}
        <Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">חוק המכר (דירות)</Link>.
      </p>

      <ArticleDefectGallery
        heading="בדיקת ממ&quot;ד בשטח — תיעוד מבדק בית"
        intro="דוגמאות אמיתיות לבדיקת דלת וחלון ההדף, האיטום ומערכת האוויר בממ״ד. תיעוד מדויק של כל ממצא מאפשר לדרוש תיקון מהקבלן."
        items={DEFECTS_MAMAD}
      />

      <ArticlePriceSection
        items={[
          { item: "תיקון וצביעת משקוף דלת הממ״ד", price: "כ־404 ₪" },
          { item: "החלפת אטם היקפי (גומייה) בדלת/חלון", price: "כ־920 ₪" },
          { item: "כיוונון דלת שאינה נסגרת בכוח תקני", price: "כ־510 ₪" },
          { item: "תיקון פגמי צבע במכלול הדלת", price: "כ־590 ₪" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריך על <Link href="/likuyey-bniya/mamad" className="text-blue-700 hover:underline font-medium">ליקויי ממ״ד</Link>,
        או חזרו ל<Link href="/likuyey-bniya" className="text-blue-700 hover:underline font-medium">מדריך ליקויי הבנייה המלא</Link>.
        לבדיקה לפני קבלת הדירה ראו <Link href="/services/bedek-bayit-lifnei-mesira" className="text-blue-700 hover:underline font-medium">בדק בית לפני מסירה</Link>.
      </p>
    </ArticleLayout>
  )
}
