import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticlePriceSection } from "@/components/article-price-section"
import { LiteYouTube } from "@/components/lite-youtube"
import { videos, videoSchema } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"

export const metadata: Metadata = {
  title: "בדיקות חשמל ותקשורת בדירה — מה בודקים ומי מטפל בליקויים | בדק בית Legal",
  description:
    "מדריך לבדיקת חשמל ותקשורת בדירה חדשה וביד שנייה — לוח, נקודות, שקע כפול בארון התקשורת ותשתית להעברת כבלי אינטרנט. בבדק בית הבדיקה חזותית, וטיפול בליקויי חשמל בידי חשמלאי מוסמך בלבד.",
  keywords: [
    "בדיקת חשמל",
    "בדיקת תקשורת",
    "ארון תקשורת",
    "שקע כפול ארון תקשורת",
    "כבלי אינטרנט בדירה",
    "חשמלאי מוסמך",
    "לוח חשמל",
    "בדק בית חשמל",
    "ליקויי חשמל",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/bdikat-chashmal-tikshoret-dira" },
  openGraph: {
    title: "בדיקות חשמל ותקשורת בדירה — מה בודקים ומי מטפל בליקויים",
    description:
      "בדיקת חשמל ותקשורת בדירה חדשה וביד שנייה — לוח, נקודות, שקע כפול בארון התקשורת ותשתית להעברת כבלי אינטרנט. הבדיקה חזותית, וטיפול בידי חשמלאי מוסמך בלבד.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/bdikat-chashmal-tikshoret-dira",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

const CHASHMAL_VIDEO = videos.find((v) => v.id === "dxLyMkXDwi8")

export default function BdikatChashmalTikshoretArticle() {
  return (
    <ArticleLayout
      title="בדיקות חשמל ותקשורת בדירה — מה בודקים ומי מטפל בליקויים"
      subtitle="בבדק בית מערכת החשמל והתקשורת נבדקת חזותית — לוח, נקודות וארון התקשורת. כל טיפול בליקוי חשמל מתבצע בידי חשמלאי מוסמך בלבד."
      slug="bdikat-chashmal-tikshoret-dira"
      description="בדיקת חשמל ותקשורת בדירה חדשה וביד שנייה — לוח, נקודות, שקע כפול בארון התקשורת ותשתית להעברת כבלי אינטרנט. הבדיקה חזותית, וטיפול בידי חשמלאי מוסמך בלבד."
      datePublished="2026-07-14"
      dateModified="2026-07-14"
      ctaTitle="רוצים לוודא שהחשמל והתקשורת תקינים?"
      ctaText="ליקוי חשמל הוא סכנת בטיחות, לא רק אי-נוחות. בדק בית מקצועי בודק חזותית את המערכת ומפנה כל ליקוי לטיפול חשמלאי מוסמך."
    >
      <ArticleLead>
        מערכת החשמל והתקשורת היא מהמערכות שבטיחותן <strong>קריטית</strong>. בבדק בית היא נבדקת בבדיקה חזותית —
        לוח החשמל, הנקודות, השקעים וארון התקשורת — אך חשוב להדגיש: <strong>כל טיפול או תיקון בפועל בליקוי
        חשמל מתבצע בידי חשמלאי מוסמך בלבד</strong>, בהתאם לחוק החשמל. עקרונות אלה חלים גם בדירה חדשה מקבלן וגם
        בדירה יד שנייה.
      </ArticleLead>

      {CHASHMAL_VIDEO && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(CHASHMAL_VIDEO)) }}
          />
          <figure className="my-6">
            <LiteYouTube id={CHASHMAL_VIDEO.id} title={CHASHMAL_VIDEO.title} />
            <figcaption className="mt-2 text-sm text-gray-500">
              בדיקת חשמל ותקשורת בדירה — בדיקה חזותית וטיפול בידי חשמלאי מוסמך. לצפייה בעמוד המלא:{" "}
              <Link
                href={`/videos/${videoSlug(CHASHMAL_VIDEO)}`}
                className="text-blue-700 hover:underline font-medium"
              >
                עמוד הסרטון
              </Link>
              .
            </figcaption>
          </figure>
        </>
      )}

      <ArticleH2>מה נבדק בחשמל ובתקשורת</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>לוח החשמל:</strong> סימון וסידור מסודר, תקינות המפסקים והגנות הבטיחות הנדרשות בחוק החשמל.</li>
        <li><strong>נקודות, שקעים ומפסקים:</strong> מיקום, פילוס וכמות מול המפרט הטכני של הדירה.</li>
        <li><strong>ארון התקשורת:</strong> מיקומו, נגישותו והתשתית שבתוכו — לב מערכת האינטרנט והרשת בדירה.</li>
        <li><strong>תשתית מעבר כבלים:</strong> צנרת ושרוולים שיאפשרו להעביר כבלי רשת אל נקודות התקשורת בדירה.</li>
      </ul>

      <ArticleH2>ארון התקשורת — שקע כפול וחובת הזנת חשמל</ArticleH2>
      <p>
        ארון התקשורת הוא הנקודה שאליה מגיעה תשתית האינטרנט והטלפוניה, וממנה מתפצלות נקודות הרשת ברחבי הדירה.
        כדי שהוא יתפקד, נדרש בתוכו <strong>שקע חשמל כפול</strong> שיזין את ציוד הרשת — הנתב, הממיר וציוד
        התקשורת. ארון תקשורת ללא הזנת חשמל תקינה הוא ליקוי נפוץ שמתגלה מאוחר, כשמנסים לחבר את האינטרנט ואין
        לאן לחבר את הציוד. בבדק בית אנו בודקים את קיומו של השקע הכפול בארון ואת נגישותו.
      </p>

      <ArticleH2>מעבר כבלי אינטרנט בקלות בתוך הדירה</ArticleH2>
      <p>
        תשתית תקשורת תקינה אינה רק הנקודות עצמן, אלא גם ה<strong>אפשרות להעביר כבלים בקלות</strong> בין ארון
        התקשורת לנקודות הרשת בחדרים. לשם כך נדרשת צנרת (שרוולים) פנויה, לרוב עם חוט השחלה, שמאפשרת למשוך כבל
        רשת חדש בעתיד בלי לפרק קירות. שרוול חסום, מעוך או ללא חוט השחלה הופך כל שדרוג עתידי לעבודה יקרה. בבדק
        בית אנו בודקים שהתשתית מאפשרת מעבר כבלים סביר אל נקודות התקשורת.
      </p>

      <ArticleH2>בדיקה חזותית — וטיפול בידי חשמלאי מוסמך בלבד</ArticleH2>
      <p>
        חשוב להבין את גבולות הבדיקה: בבדק בית מערכת החשמל נבדקת <strong>חזותית</strong>, ולעיתים בהשלמה של{" "}
        <Link href="/articles/likuyey-chashmal-bedek-bayit" className="text-blue-700 hover:underline font-medium">
          בדיקה תרמית
        </Link>{" "}
        לאיתור התחממות יתר בחיבורים. עם זאת, כל טיפול, פירוק או תיקון בפועל של רכיב חשמלי — החלפת שקע, טיפול
        בחיבור רופף או שינוי בלוח — מחייב <strong>חשמלאי מוסמך</strong> בעל רישיון, בהתאם לחוק החשמל. תפקיד
        הבדיקה הוא לאתר ולתעד את הליקוי כדי שאפשר יהיה להעביר אותו לטיפול מקצועי ובטוח, ולא לבצע תיקון עצמאי
        שעלול לסכן חיים.
      </p>

      <ArticlePriceSection
        intro="אלה אומדנים מייצגים לתיקוני חשמל ותקשורת נפוצים, בביצוע חשמלאי מוסמך. המחירים מבוססים על מחירונים מקובלים בענף, במחיר עלות לקבלן — הם משתנים מעת לעת ולפי הקבלן, ובשוק הפרטי הם גבוהים יותר."
        items={[
          { item: "הוספת שקעים בארון תקשורת", price: "כ־308 ₪" },
          { item: "החלפת שקע רופף או לא תקין", price: "כ־295 ₪" },
          { item: "איתור ותיקון שקע ללא פאזה", price: "כ־590 ₪" },
          { item: "סימון מפסקים והוספת מקרא בלוח", price: "כ־156 ₪" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריך על{" "}
        <Link href="/articles/likuyey-chashmal-bedek-bayit" className="text-blue-700 hover:underline font-medium">
          ליקויי חשמל ותקשורת והבדיקה התרמית
        </Link>
        {" "}ועל{" "}
        <Link href="/likuyey-bniya/chashmal" className="text-blue-700 hover:underline font-medium">
          ליקויי חשמל
        </Link>
        , צפו ב
        <Link
          href={`/videos/${CHASHMAL_VIDEO ? videoSlug(CHASHMAL_VIDEO) : "bedikat-chashmal-tikshoret-dira-hadasha"}`}
          className="text-blue-700 hover:underline font-medium"
        >
          סרטון בדיקת החשמל והתקשורת
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
