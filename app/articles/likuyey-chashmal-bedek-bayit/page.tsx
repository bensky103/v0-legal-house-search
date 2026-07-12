import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { DEFECTS_CHASHMAL } from "@/lib/article-images"

export const metadata: Metadata = {
  title: "ליקויי חשמל ותקשורת בבדק בית — לוח, נקודות ובדיקה תרמית | בדק בית Legal",
  description:
    "לוח חשמל, נקודות, שקעים ותשתית תקשורת נבדקים בבדק בית — כולל מצלמה תרמית לאיתור התחממות יתר וחיבורים רופפים המהווים סכנת בטיחות.",
  keywords: [
    "ליקויי חשמל",
    "לוח חשמל",
    "נקודות חשמל",
    "תשתית תקשורת",
    "מצלמה תרמית",
    "התחממות יתר",
    "בטיחות חשמל",
    "בדק בית חשמל",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/likuyey-chashmal-bedek-bayit" },
  openGraph: {
    title: "ליקויי חשמל ותקשורת בבדק בית — לוח, נקודות ובדיקה תרמית",
    description: "כך נבדקים לוח חשמל, נקודות ותשתית תקשורת בבדק בית — כולל מצלמה תרמית לאיתור התחממות יתר.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/likuyey-chashmal-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

export default function LikuyeyChashmalArticle() {
  return (
    <ArticleLayout
      title="ליקויי חשמל ותקשורת בבדק בית — לוח, נקודות ובדיקה תרמית"
      subtitle="ליקויי חשמל אינם רק עניין של נוחות — חיבור רופף או עומס יתר הם סכנת בטיחות. כך נבדקת מערכת החשמל בבדק בית, כולל מצלמה תרמית."
      slug="likuyey-chashmal-bedek-bayit"
      description="כך נבדקים בבדק בית לוח החשמל, הנקודות ותשתית התקשורת, כולל מצלמה תרמית לאיתור התחממות יתר."
      datePublished="2026-07-12"
      dateModified="2026-07-12"
      ctaTitle="חוששים מליקוי חשמל?"
      ctaText="חיבור רופף או עומס יתר עלולים להוות סכנת בטיחות. בדק בית מקצועי מאתר אותם — כולל בדיקה תרמית."
    >
      <ArticleLead>
        מערכת החשמל והתקשורת היא מהמערכות שבטיחותן קריטית. חיבור רופף, עומס יתר או התקנה לקויה עלולים לגרום
        להתחממות, לתקלות ואף לסכנת בטיחות. בבדק בית נבדקים לוח החשמל, הנקודות ותשתית התקשורת — לרבות{" "}
        <strong>בדיקה תרמית</strong> לאיתור התחממות שאינה נראית לעין.
      </ArticleLead>

      <ArticleH2>מה נבדק במערכת החשמל</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>לוח החשמל:</strong> סימון, סידור, תקינות מפסקים ואיתור התחממות יתר במצלמה תרמית.</li>
        <li><strong>נקודות, שקעים ומפסקים:</strong> מיקום, פילוס ותקינות חיווט מול המפרט הטכני של הדירה.</li>
        <li><strong>הגנות בטיחות:</strong> נוכחות ותפקוד של אמצעי הגנה כנדרש בחוק החשמל.</li>
        <li><strong>תשתית תקשורת:</strong> ארון התקשורת, נקודות רשת וחיווט מסודר.</li>
      </ul>

      <ArticleH2>למה בדיקה תרמית חשובה בחשמל</ArticleH2>
      <p>
        חיבור חשמלי רופף או עמוס מתחמם עוד לפני שהוא גורם לתקלה גלויה. מצלמה תרמית חושפת נקודות חמות חריגות
        בלוח החשמל ובחיבורים, ומאפשרת לטפל בליקוי לפני שהוא הופך לתקלה או לסכנת בטיחות. הבדיקה משלימה את הבדיקה
        החזותית ואת בדיקת החשמלאי המוסמך.
      </p>

      <ArticleDefectGallery
        heading="בדיקת חשמל ותקשורת בשטח — תיעוד מבדק בית"
        intro="דוגמאות אמיתיות לבדיקת לוח חשמל, נקודות ותשתית תקשורת, כולל איתור התחממות יתר במצלמה תרמית."
        items={DEFECTS_CHASHMAL}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריך על <Link href="/likuyey-bniya/chashmal" className="text-blue-700 hover:underline font-medium">ליקויי חשמל</Link>,
        או חזרו ל<Link href="/likuyey-bniya" className="text-blue-700 hover:underline font-medium">מדריך ליקויי הבנייה המלא</Link>.
      </p>
    </ArticleLayout>
  )
}
