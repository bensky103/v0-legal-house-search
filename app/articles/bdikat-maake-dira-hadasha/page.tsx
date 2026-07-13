import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticlePriceSection } from "@/components/article-price-section"
import { LiteYouTube } from "@/components/lite-youtube"
import { videos, videoSchema } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"

export const metadata: Metadata = {
  title: "בדיקת מעקה זכוכית ומעקה בכלל בדירה חדשה — מה בודקים ביום המסירה | בדק בית Legal",
  description:
    "מעקה הוא רכיב בטיחות מציל חיים. כך בודקים מעקה זכוכית ומעקה בכלל בדירה חדשה מקבלן ביום המסירה — גובה, מרווחים, חוזק עיגון, זכוכית בטיחות ורפידות גומי לפי ת״י 1142 ות״י 1099.",
  keywords: [
    "בדיקת מעקה",
    "מעקה זכוכית",
    "מעקה לא תקני",
    "בדיקת מעקה דירה חדשה",
    "מעקה ביום המסירה",
    "ת״י 1142",
    "ת״י 1099",
    "רפידות גומי מעקה",
    "בטיחות מעקה",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/bdikat-maake-dira-hadasha" },
  openGraph: {
    title: "בדיקת מעקה זכוכית ומעקה בכלל בדירה חדשה — מה בודקים ביום המסירה",
    description:
      "כך בודקים מעקה זכוכית ומעקה בכלל בדירה חדשה מקבלן ביום המסירה — גובה, מרווחים, חוזק עיגון, זכוכית בטיחות ורפידות גומי לפי ת״י 1142 ות״י 1099.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/bdikat-maake-dira-hadasha",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

const MAAKE_VIDEO = videos.find((v) => v.id === "IX84kY-Oz4k")

export default function BdikatMaakeDiraHadashaArticle() {
  return (
    <ArticleLayout
      title="בדיקת מעקה זכוכית ומעקה בכלל בדירה חדשה — מה בודקים ביום המסירה"
      subtitle="מעקה הוא רכיב בטיחות מציל חיים, ולכן הוא מהדברים הראשונים שנבדקים ביום מסירת הדירה. כך בודקים מעקה זכוכית ומעקה בכלל — גובה, מרווחים, חוזק ורפידות."
      slug="bdikat-maake-dira-hadasha"
      description="כך בודקים מעקה זכוכית ומעקה בכלל בדירה חדשה מקבלן ביום המסירה — גובה, מרווחים, חוזק עיגון, זכוכית בטיחות ורפידות גומי לפי ת״י 1142 ות״י 1099."
      datePublished="2026-07-13"
      dateModified="2026-07-13"
      ctaTitle="מעקה מסוכן בדירה החדשה?"
      ctaText="מעקה לקוי הוא סכנת חיים — במיוחד בקומות גבוהות ובבתים עם ילדים. בדק בית מקצועי מודד ומתעד כל חריגה ביום המסירה."
    >
      <ArticleLead>
        מעקה הוא <strong>רכיב הצלת חיים</strong> — תפקידו למנוע נפילה ממרפסת, מגג או ממקום מוגבה. לכן הוא מהדברים
        הראשונים שיש לבדוק ביום מסירת הדירה, לפני שחותמים על פרוטוקול המסירה. במעקה זכוכית, שהפך נפוץ במרפסות
        בבנייה החדשה, מצטרפות לבדיקה גם דרישות ייחודיות לזכוכית ולאופן התקנתה.
      </ArticleLead>

      {MAAKE_VIDEO && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(MAAKE_VIDEO)) }}
          />
          <figure className="my-6">
            <LiteYouTube id={MAAKE_VIDEO.id} title={MAAKE_VIDEO.title} />
            <figcaption className="mt-2 text-sm text-gray-500">
              בדיקת מעקה זכוכית בדירה חדשה ביום המסירה. לצפייה בעמוד המלא:{" "}
              <Link href={`/videos/${videoSlug(MAAKE_VIDEO)}`} className="text-blue-700 hover:underline font-medium">
                עמוד הסרטון
              </Link>
              .
            </figcaption>
          </figure>
        </>
      )}

      <ArticleH2>למה מעקה נבדק ראשון — בטיחות</ArticleH2>
      <p>
        בניגוד לליקויים אסתטיים, כשל במעקה עלול לעלות בחיי אדם. בשל כך התקן הישראלי{" "}
        <strong>ת״י 1142</strong> (מעקים ומסעדים) מציב למעקה דרישות מחמירות של גובה, מרווחים וחוזק. בדירה חדשה
        התקנת מעקה תקני היא באחריות הקבלן במסגרת{" "}
        <Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">חוק המכר (דירות)</Link>,
        ואין מקום לפשרות — כל חריגה מתועדת ומחייבת תיקון.
      </p>

      <ArticleH2>מה בודקים בכל מעקה (ת״י 1142)</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>גובה:</strong> נמדד מול הגובה שהמעקה מגן עליו — ככל שהמרפסת או הגג גבוהים יותר, נדרש מעקה גבוה יותר.</li>
        <li><strong>מרווחים:</strong> הרווחים בין מוטות המעקה אינם חורגים מהמותר, כדי שלא יאפשרו מעבר ראש של ילד.</li>
        <li><strong>חוזק ועיגון:</strong> יציבות המעקה נבדקת בלחיצה ובמד כוח — מעקה ש"משחק" או שעיגונו רופף אינו תקני.</li>
        <li><strong>מבנה שאינו מזמין טיפוס:</strong> שלבים אופקיים יוצרים "סולם" שילד יכול לטפס עליו — ליקוי בטיחות בפני עצמו.</li>
        <li><strong>חלודה וחיבורים:</strong> סימני שיתוך בברגים ובמסגרת פוגעים בחוזק לאורך זמן.</li>
      </ul>

      <ArticleH2>מעקה זכוכית — מה מיוחד בבדיקה</ArticleH2>
      <p>
        מעקה זכוכית מוסיף לדרישות ת״י 1142 גם את הדרישות לזכוכית עצמה ולאופן התקנתה, לפי{" "}
        <strong>ת״י 1099</strong> (זכוכית במעקות). אלה הנקודות שנבדקות:
      </p>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>זכוכית בטיחות:</strong> במעקה נדרשת זכוכית בטיחות (מחוסמת או רבודה) שאינה מתנפצת לרסיסים חדים.</li>
        <li><strong>רפידות גומי:</strong> בין הזכוכית למסגרת חייבות להיות רפידות (גומיות) — מגע ישיר בין הזכוכית לרכיב קשיח מעביר עומסים וגורם לסדקים ולשבר מוקדם.</li>
        <li><strong>עיגון ותפיסה:</strong> אופן אחיזת הזכוכית במסגרת או בפרופיל התחתון, ויציבותה מול עומס.</li>
        <li><strong>פגמים בזכוכית:</strong> שריטות, שברים או פגיעות שנוצרו בהתקנה.</li>
      </ul>

      <ArticleH2>למה דווקא ביום המסירה</ArticleH2>
      <p>
        ביום המסירה הדירה עדיין באחריות מלאה של הקבלן, וכל ליקוי שמתועד ב<strong>פרוטוקול המסירה</strong> הופך
        לדרישת תיקון מחייבת. מעקה מסוכן שלא אותר במועד עלול להתגלות מאוחר — לעיתים אחרי אירוע. תיעוד מסודר של
        גובה, מרווחים, חוזק ורפידות, בליווי מדידות, הוא הבסיס לדרישת תיקון או החלפה בעוד הדבר פשוט.
      </p>

      <ArticlePriceSection
        intro="אלה אומדנים מייצגים לתיקוני מעקה. המחירים מבוססים על מחירונים מקובלים בענף, במחיר עלות לקבלן — הם משתנים מעת לעת ולפי הקבלן ורמת הגימור, ובשוק הפרטי הם גבוהים יותר. בכל מקרה, מעקה הוא רכיב בטיחות שאין להתפשר על תקינותו."
        items={[
          { item: "התקנת רפידות גומי בין זכוכית המעקה למסגרת", price: "כ־1,120 ₪ ליום עבודה" },
          { item: "ניקוי וצביעת מסגרת מעקה מחלודה", price: "כ־248 ₪ למ״ר" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריך המלא על <Link href="/likuyey-bniya/maakot" className="text-blue-700 hover:underline font-medium">ליקויי מעקות</Link>,
        צפו ב<Link href={`/videos/${MAAKE_VIDEO ? videoSlug(MAAKE_VIDEO) : "bedikat-maake-zchuchit-dira-hadasha"}`} className="text-blue-700 hover:underline font-medium">סרטון בדיקת מעקה זכוכית</Link>,
        וקראו על <Link href="/articles/protokol-mesira" className="text-blue-700 hover:underline font-medium">פרוטוקול מסירה לדירה חדשה</Link>{" "}
        ועל <Link href="/articles/alut-tikun-likuyey-bniya" className="text-blue-700 hover:underline font-medium">עלות תיקון ליקויי בנייה</Link>.
      </p>
    </ArticleLayout>
  )
}
