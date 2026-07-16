import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { ArticleFaq } from "@/components/article-faq"
import { ArticlePriceSection } from "@/components/article-price-section"
import { LiteYouTube } from "@/components/lite-youtube"
import { DEFECTS_ALUMINIUM } from "@/lib/article-images"
import { videos, videoSchema } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"

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

const ALUMINIUM_VIDEO = videos.find((v) => v.id === "rS7Qr33r6jg")

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

      {ALUMINIUM_VIDEO && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(ALUMINIUM_VIDEO)) }}
          />
          <figure className="my-6">
            <LiteYouTube id={ALUMINIUM_VIDEO.id} title={ALUMINIUM_VIDEO.title} />
            <figcaption className="mt-2 text-sm text-gray-500">
              בדיקת עבודות אלומיניום בדירה חדשה מקבלן — חלונות, תריסים ואטימות. לצפייה בעמוד המלא:{" "}
              <Link
                href={`/videos/${videoSlug(ALUMINIUM_VIDEO)}`}
                className="text-blue-700 hover:underline font-medium"
              >
                עמוד הסרטון
              </Link>
              .
            </figcaption>
          </figure>
        </>
      )}

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

      <ArticlePriceSection
        items={[
          { item: "כיוונון חלון או ויטרינת הזזה (כוח הפעלה)", price: "כ־690 ₪ ליחידה" },
          { item: "החלפת ברגים לפלב״מ עמידי קורוזיה", price: "כ־470 ₪" },
          { item: "השלמת אטמים ומברשות איטום בכנף", price: "כ־470 ₪" },
          { item: "החלפת חלון או ויטרינה פגומים", price: "כ־1,630 ₪ למ״ר" },
          { item: "אישור או החלפת זכוכית בטיחות במעקה", price: "כ־300 ₪" },
          { item: "ניקוי שאריות צבע וטיח מפרופילים", price: "כ־16 ₪ למ״ר" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריכים על{" "}
        <Link href="/likuyey-bniya/aluminium" className="text-blue-700 hover:underline font-medium">ליקויי אלומיניום</Link>,{" "}
        <Link href="/likuyey-bniya/chalonot" className="text-blue-700 hover:underline font-medium">חלונות</Link>{" "}
        ו<Link href="/likuyey-bniya/trisim" className="text-blue-700 hover:underline font-medium">תריסים</Link>, או
        חזרו ל<Link href="/likuyey-bniya" className="text-blue-700 hover:underline font-medium">מדריך ליקויי הבנייה המלא</Link>.
      </p>

      <ArticleFaq
        items={[
          {
            question: "לפי איזה תקן נבדקים חלונות ותריסים מאלומיניום?",
            answer:
              "חלונות, דלתות הזזה ותריסים מאלומיניום נבדקים בבדק בית לפי ת״י 1068. בדיקה זו מקיפה את האטימה למים ולאוויר, את הניקוז ואת תפעול הכנפיים, כדי לוודא שהמערכת עומדת בדרישות התקן לפני מסירת הדירה מקבלן.",
          },
          {
            question: "מה נבדק במערכות אלומיניום בבדק בית?",
            answer:
              "נבדקת האטימה למים ולאוויר בהיקף הפתח, פתחי הניקוז במלבן, כוח ההפעלה של חלונות ותריסים, וכן הזיגוג, הפרופילים וחיבורי הפינה. לשם כך נעשה שימוש בכלים כמו מד ספיקת אוויר ומד כוח (דינמומטר) לאיתור סטיות התקנה.",
          },
          {
            question: "למה חשוב שפתחי הניקוז בחלון יהיו פתוחים?",
            answer:
              "פתחי הניקוז במלבן החלון מנקזים החוצה מים שחודרים אל הפתח. כשהם חסומים או פגומים, מים מצטברים במלבן וחודרים פנימה כרטיבות. בבדק בית בודקים את תקינות פתחי הניקוז כדי למנוע הצטברות מים וחדירת לחות.",
          },
          {
            question: "האם חלון או תריס שכבד לתפעול נחשב ליקוי?",
            answer:
              "כן. חלון או דלת הזזה שכבדים לתפעול, כוח הפעלה חריג או תריס שנתקע הם ליקויי תפעול. בבדק בית מודדים את כוח ההפעלה בעזרת מד כוח, ותיעוד מדויק של הליקוי מאפשר לדרוש כיוונון או תיקון מהקבלן.",
          },
        ]}
      />
    </ArticleLayout>
  )
}
