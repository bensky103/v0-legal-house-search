import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { DEFECTS_ALUMINIUM } from "@/lib/article-images"

export const metadata: Metadata = {
  title: "ליקויי אלומיניום, חלונות ותריסים בבדק בית (ת\"י 1068) | בדק בית Legal",
  description:
    "חלונות, דלתות הזזה ותריסים מאלומיניום הם מקור נפוץ לליקויי אטימה, ניקוז ותפעול. כך בודקים אותם בבדק בית לפי ת\"י 1068 לפני מסירה מקבלן.",
  keywords: [
    "ליקויי אלומיניום",
    "חלונות אלומיניום",
    "תריסים",
    "דלת הזזה",
    "זיגוג",
    "ת\"י 1068",
    "אטימת חלונות",
    "ניקוז חלון",
    "בדק בית אלומיניום",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/aluminium-zigug-bedek-bayit" },
  openGraph: {
    title: "ליקויי אלומיניום, חלונות ותריסים בבדק בית (ת\"י 1068)",
    description: "כך בודקים חלונות, דלתות הזזה ותריסים מאלומיניום בבדק בית לפי ת\"י 1068 — אטימה, ניקוז ותפעול.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/aluminium-zigug-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

export default function AluminiumZigugArticle() {
  return (
    <ArticleLayout
      title="ליקויי אלומיניום, חלונות ותריסים בבדק בית (ת&quot;י 1068)"
      subtitle="חלונות, דלתות הזזה ותריסים הם מהרכיבים שנבדקים לעומק בבדק בית. כך מאתרים ליקויי אטימה, ניקוז ותפעול לפי ת&quot;י 1068."
      slug="aluminium-zigug-bedek-bayit"
      description="כך בודקים בבדק בית חלונות, דלתות הזזה ותריסים מאלומיניום לפי ת״י 1068 — אטימה, ניקוז ותפעול."
      datePublished="2026-07-12"
      dateModified="2026-07-12"
      ctaTitle="חלון שלא נאטם? תריס שנתקע?"
      ctaText="ליקויי אלומיניום פוגעים באטימות, בבידוד ובנוחות. בדק בית מקצועי מאתר ומתעד אותם לפני המסירה."
    >
      <ArticleLead>
        מערכות האלומיניום — חלונות, דלתות הזזה ותריסים — אחראיות על האטימה למים ולאוויר, על הבידוד התרמי ועל
        הנוחות היומיומית בדירה. ליקויי התקנה, אטימה וניקוז בהן נפוצים מאוד בדירות חדשות, ונבדקים בבדק בית לפי{" "}
        <strong>ת"י 1068</strong>.
      </ArticleLead>

      <ArticleH2>הליקויים הנפוצים באלומיניום ובזיגוג</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>אטימה לקויה:</strong> חדירת מים או אוויר בהיקף החלון והדלת, סיליקון פגום או גומיות אטם חסרות.</li>
        <li><strong>ניקוז חסום:</strong> פתחי ניקוז המים במלבן חסומים או פגומים — גורמים להצטברות מים ולחדירת רטיבות.</li>
        <li><strong>תפעול לקוי:</strong> חלון או דלת הזזה כבדים לתפעול, כוח הפעלה חריג או תריס שנתקע.</li>
        <li><strong>פגמי זיגוג וגמר:</strong> שריטות בזכוכית, פגמים בפרופיל וחיבורי פינה לא תקינים.</li>
      </ul>

      <ArticleH2>איך בודקים אלומיניום בבדק בית?</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>בדיקת אטימה</strong> למים ולאוויר בהיקף הפתח, כולל מד ספיקת אוויר לאיתור חדירת אוויר.</li>
        <li><strong>מדידת כוח הפעלה</strong> של חלונות ותריסים בעזרת מד כוח (דינמומטר).</li>
        <li><strong>בדיקת פתחי ניקוז</strong> במלבן, לוודא ניקוז מים תקין מהחלון.</li>
        <li><strong>בדיקת זיגוג, פרופילים וחיבורי פינה</strong> לאיתור פגמים וסטיות התקנה.</li>
      </ul>

      <ArticleDefectGallery
        heading="ליקויי אלומיניום שאותרו בשטח — תיעוד מבדק בית"
        intro="דוגמאות אמיתיות לבדיקת חלונות, תריסים ודלתות הזזה מאלומיניום. תיעוד מדויק של כל ליקוי מאפשר לדרוש תיקון מהקבלן."
        items={DEFECTS_ALUMINIUM}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריכים על{" "}
        <Link href="/likuyey-bniya/aluminium" className="text-blue-700 hover:underline font-medium">ליקויי אלומיניום</Link>,{" "}
        <Link href="/likuyey-bniya/chalonot" className="text-blue-700 hover:underline font-medium">חלונות</Link>{" "}
        ו<Link href="/likuyey-bniya/trisim" className="text-blue-700 hover:underline font-medium">תריסים</Link>, או
        חזרו ל<Link href="/likuyey-bniya" className="text-blue-700 hover:underline font-medium">מדריך ליקויי הבנייה המלא</Link>.
      </p>
    </ArticleLayout>
  )
}
