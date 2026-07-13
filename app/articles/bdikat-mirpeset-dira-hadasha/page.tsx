import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticlePriceSection } from "@/components/article-price-section"
import { LiteYouTube } from "@/components/lite-youtube"
import { videos, videoSchema } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"

export const metadata: Metadata = {
  title: "בדיקת מרפסת בדירה חדשה — איטום, שיפועים, ריצוף וניקוז ביום המסירה | בדק בית Legal",
  description:
    "המרפסת חשופה לגשם ולשמש והיא מהאזורים הרגישים ביותר לחדירת מים. כך בודקים מרפסת בדירה חדשה מקבלן ביום המסירה — איטום הרצפה, שיפועים לניקוז, איכות הריצוף ותפקוד נקודת הניקוז.",
  keywords: [
    "בדיקת מרפסת",
    "איטום מרפסת",
    "שיפוע מרפסת",
    "ניקוז מרפסת",
    "ריצוף מרפסת",
    "חדירת מים למרפסת",
    "בדיקת מרפסת דירה חדשה",
    "מרפסת ביום המסירה",
    "אף מים",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/bdikat-mirpeset-dira-hadasha" },
  openGraph: {
    title: "בדיקת מרפסת בדירה חדשה — איטום, שיפועים, ריצוף וניקוז ביום המסירה",
    description:
      "כך בודקים מרפסת בדירה חדשה מקבלן ביום המסירה — איטום הרצפה, שיפועים לכיוון הניקוז, איכות הריצוף ותפקוד נקודת הניקוז, לפני חדירת מים בחורף הראשון.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/bdikat-mirpeset-dira-hadasha",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

const MIRPESET_VIDEO = videos.find((v) => v.id === "7npg8xugJOU")

export default function BdikatMirpesetDiraHadashaArticle() {
  return (
    <ArticleLayout
      title="בדיקת מרפסת בדירה חדשה — איטום, שיפועים, ריצוף וניקוז ביום המסירה"
      subtitle="המרפסת חשופה ישירות לגשם ולשמש, ולכן היא מהאזורים הרגישים ביותר בדירה לחדירת מים. כך בודקים מרפסת ביום המסירה — איטום, שיפועים, ריצוף וניקוז."
      slug="bdikat-mirpeset-dira-hadasha"
      description="כך בודקים מרפסת בדירה חדשה מקבלן ביום המסירה — איטום הרצפה, שיפועים לכיוון הניקוז, איכות הריצוף ותפקוד נקודת הניקוז, לפני חדירת מים בחורף הראשון."
      datePublished="2026-07-13"
      dateModified="2026-07-13"
      ctaTitle="מרפסת שמכניסה מים בדירה החדשה?"
      ctaText="כשל איטום או שיפוע לקוי במרפסת מתגלה לרוב רק בחורף הראשון — כשהמים כבר חדרו. בדק בית מקצועי מודד ומתעד כל ליקוי ביום המסירה, בעוד האחריות על הקבלן."
    >
      <ArticleLead>
        המרפסת היא מהאזורים ה<strong>רגישים ביותר בדירה</strong> — היא חשופה ישירות לגשם ולשמש, ורצפתה משמשת
        גג לחלל שמתחתיה. כשל באיטום, שיפוע לקוי לכיוון הניקוז או ריצוף לא תקין מובילים לחדירת מים, לרטיבות
        בקירות ולנזק גם לשכן שמתחת. לכן המרפסת היא מהדברים שחשוב לבדוק ביום מסירת הדירה, בעודה באחריות מלאה
        של הקבלן.
      </ArticleLead>

      {MIRPESET_VIDEO && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(MIRPESET_VIDEO)) }}
          />
          <figure className="my-6">
            <LiteYouTube id={MIRPESET_VIDEO.id} title={MIRPESET_VIDEO.title} />
            <figcaption className="mt-2 text-sm text-gray-500">
              בדיקת מרפסת בדירה חדשה מקבלן ביום המסירה — איטום, שיפועים, ריצוף וניקוז. לצפייה בעמוד המלא:{" "}
              <Link
                href={`/videos/${videoSlug(MIRPESET_VIDEO)}`}
                className="text-blue-700 hover:underline font-medium"
              >
                עמוד הסרטון
              </Link>
              .
            </figcaption>
          </figure>
        </>
      )}

      <ArticleH2>למה המרפסת מהאזורים הרגישים בדירה</ArticleH2>
      <p>
        בניגוד לרצפה פנימית, רצפת המרפסת סופגת גשם ישיר, שינויי טמפרטורה וקרינת שמש. כל אלה מעמידים במבחן את
        שכבת האיטום, את חיבורי הרצפה לקיר ואת נקודות הניקוז. כשל קטן שאינו נראה לעין ביום המסירה עלול להפוך
        בחורף הראשון לרטיבות בקיר הפנימי, לכתמים ולעובש — ולעיתים לנזק אצל השכן שמתחת. איטום ושיפוע תקינים
        באחריות הקבלן במסגרת{" "}
        <Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">
          חוק המכר (דירות)
        </Link>
        .
      </p>

      <ArticleH2>מה בודקים במרפסת ביום המסירה</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>איטום הרצפה:</strong> שלמות שכבת האיטום, ובעיקר בחיבור שבין הרצפה לקיר ובהיקף פתחי הניקוז — האזורים שבהם מים חודרים ראשונים.</li>
        <li><strong>שיפועים:</strong> הרצפה חייבת להיות משופעת אל נקודת הניקוז, כדי שהמים יזרמו ולא יעמדו בשלוליות.</li>
        <li><strong>ניקוז:</strong> פתח הניקוז פתוח, נגיש ומנקז בפועל — בדיקת הצפה מוודאת שהמים מתנקזים ואינם חוזרים אחורה.</li>
        <li><strong>ריצוף:</strong> מישוריות האריחים, הפרשי גבהים ("שן") בין מרצפות סמוכות, ומילוי הפוגות.</li>
        <li><strong>אף מים וסף:</strong> אף מים (תלם ניתוק) בסף הדלת ובבליטות מונע ממים לזחול פנימה אל הדירה.</li>
        <li><strong>חיבור רצפה־קיר ומעקה:</strong> מישק ההפרדה סביב היקף המרפסת ועיגון המעקה — שאינם פוגעים באיטום.</li>
      </ul>

      <ArticleH2>שיפועים וניקוז — הלב של המרפסת</ArticleH2>
      <p>
        מרפסת תקינה מתוכננת כך שכל טיפת מים תזרום אל פתח הניקוז. שיפוע לקוי, שיפוע הפוך או רצפה "שטוחה" גורמים
        למים לעמוד בשלוליות, להישאב אל תפרים ואל חיבורי האיטום ובסופו של דבר לחדור פנימה. בבדק בית בודקים את
        כיוון השיפוע ואת מידתו — לרוב בעזרת פלס ובדיקת הצפה בפועל — ומוודאים שהמים אכן מגיעים אל הניקוז ומתנקזים.
        שלולית שנשארת על הרצפה שעות אחרי הגשם היא סימן מובהק לליקוי. תקני הניקוז והאינסטלציה מפורטים ב
        <Link href="/articles/tikaney-instalatzia-bedek-bayit" className="text-blue-700 hover:underline font-medium">
          ת״י 1205
        </Link>
        .
      </p>

      <ArticleH2>ריצוף המרפסת</ArticleH2>
      <p>
        ריצוף המרפסת נבדק כמו ריצוף פנימי, אך עם דגש נוסף על השיפוע: האריחים חייבים להיות מונחים במישור אחד,
        ללא "שן" בין מרצפות סמוכות ועם פוגות מלאות ואחידות, ובה בעת לשמור על שיפוע רציף אל הניקוז. הפרשי גבהים,
        אריחים חלולים או פוגות ריקות אינם רק פגם אסתטי — הם מאפשרים למים לחדור מתחת לריצוף. הסטיות המותרות
        בריצוף נבדקות מול{" "}
        <Link href="/articles/likuyey-ritzuf-bedek-bayit" className="text-blue-700 hover:underline font-medium">
          ת״י 1555
        </Link>
        .
      </p>

      <ArticleH2>למה דווקא ביום המסירה</ArticleH2>
      <p>
        ביום המסירה הדירה עדיין באחריות מלאה של הקבלן, וכל ליקוי שמתועד ב<strong>פרוטוקול המסירה</strong> הופך
        לדרישת תיקון מחייבת. הבעיה במרפסת היא שכשלי איטום ושיפוע אינם נראים בעין ביום שמש — הם מתגלים רק בגשם
        הראשון, כשהמים כבר חדרו. בדיקת הצפה ומדידת שיפועים בבדק בית חושפות את הליקוי מראש, ותיעוד מסודר מאפשר
        לדרוש מהקבלן תיקון יסודי בעוד הדבר פשוט וזול.
      </p>

      <ArticlePriceSection
        intro="אלה אומדנים מייצגים לתיקוני מרפסת נפוצים. המחירים מבוססים על מחירונים מקובלים בענף, במחיר עלות לקבלן — הם משתנים מעת לעת ולפי הקבלן ורמת הגימור, ובשוק הפרטי הם גבוהים יותר. תיקון איטום ושיפוע לאחר חדירת מים יקר בהרבה מתיקון שנדרש ביום המסירה."
        items={[
          { item: "תיקון שיפוע רצפה במרפסת", price: "כ־326 ₪ למ״ר" },
          { item: "טיפול נקודתי ברטיבות ואיטום חוזר", price: "מאות שקלים לנקודה" },
          { item: "מילוי מישק הפרדה גמיש (שיפולים)", price: "כ־36 ₪ למ״ר" },
          { item: "אף מים בהגבהות / קופינג", price: "כ־740 ₪ למ״ר" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריכים על{" "}
        <Link href="/articles/itum-gagot-bedek-bayit" className="text-blue-700 hover:underline font-medium">
          איטום גגות ומרפסות
        </Link>
        , על{" "}
        <Link href="/articles/likuyey-ritzuf-bedek-bayit" className="text-blue-700 hover:underline font-medium">
          ליקויי ריצוף
        </Link>{" "}
        ועל{" "}
        <Link href="/articles/bdikat-maake-dira-hadasha" className="text-blue-700 hover:underline font-medium">
          בדיקת מעקה במרפסת
        </Link>
        , צפו ב
        <Link
          href={`/videos/${MIRPESET_VIDEO ? videoSlug(MIRPESET_VIDEO) : "bedikat-mirpeset-itum-shipuim-nikuz"}`}
          className="text-blue-700 hover:underline font-medium"
        >
          סרטון בדיקת המרפסת
        </Link>
        , וקראו על{" "}
        <Link href="/articles/protokol-mesira" className="text-blue-700 hover:underline font-medium">
          פרוטוקול מסירה לדירה חדשה
        </Link>
        .
      </p>
    </ArticleLayout>
  )
}
