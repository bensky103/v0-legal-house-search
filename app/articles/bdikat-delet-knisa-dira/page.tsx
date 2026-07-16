import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleFaq } from "@/components/article-faq"
import { ArticlePriceSection } from "@/components/article-price-section"
import { LiteYouTube } from "@/components/lite-youtube"
import { videos, videoSchema } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"

export const metadata: Metadata = {
  title: "בדיקת דלת כניסה בדירה — משקוף, נעילה, פרזול ואטימות | בדק בית Legal",
  description:
    "דלת הכניסה היא קו ההגנה הראשון של הדירה. כך בודקים אותה בבדק בית — ישרות המשקוף, פעולת המנעולים והפרזול, אטימות ההיקף והסף וליקויי התקנה, בדירה חדשה מקבלן וביד שנייה.",
  keywords: [
    "בדיקת דלת כניסה",
    "דלת כניסה ביטחונית",
    "משקוף עקום",
    "מנעול דלת כניסה",
    "אטימות דלת כניסה",
    "פרזול דלת",
    "דלת שמשפשפת",
    "בדק בית דלת כניסה",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/bdikat-delet-knisa-dira" },
  openGraph: {
    title: "בדיקת דלת כניסה בדירה — משקוף, נעילה, פרזול ואטימות",
    description:
      "כך בודקים דלת כניסה בבדק בית — ישרות המשקוף, פעולת המנעולים והפרזול, אטימות ההיקף והסף וליקויי התקנה, בדירה חדשה מקבלן וביד שנייה.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/bdikat-delet-knisa-dira",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

const DELET_VIDEO = videos.find((v) => v.id === "-cLW0Eo8-Ag")

export default function BdikatDeletKnisaArticle() {
  return (
    <ArticleLayout
      title="בדיקת דלת כניסה בדירה — משקוף, נעילה, פרזול ואטימות"
      subtitle="דלת הכניסה היא קו ההגנה הראשון של הדירה — אבטחה, אטימות ובידוד. כך בודקים אותה בבדק בית: משקוף, מנעולים, פרזול ואטמים."
      slug="bdikat-delet-knisa-dira"
      description="כך בודקים דלת כניסה בבדק בית — ישרות המשקוף, פעולת המנעולים והפרזול, אטימות ההיקף והסף וליקויי התקנה, בדירה חדשה מקבלן וביד שנייה."
      datePublished="2026-07-14"
      dateModified="2026-07-14"
      ctaTitle="דלת כניסה שמשפשפת או לא אוטמת?"
      ctaText="משקוף עקום, מנעול תקול או אטם חסר פוגעים באבטחה, באטימות ובבידוד. בדק בית מקצועי מאתר ומתעד כל ליקוי לפני המסירה."
    >
      <ArticleLead>
        דלת הכניסה היא <strong>קו ההגנה הראשון</strong> של הדירה — תפקידה לספק אבטחה, לאטום מפני רוח, קור ורעש
        מחדר המדרגות, ולשמור על בידוד אקוסטי ותרמי. ליקויי התקנה בדלת הכניסה נפוצים גם בדירות חדשות מקבלן וגם
        בדירות יד שנייה, ונבדקים בבדק בית לפני המסירה או לפני הרכישה.
      </ArticleLead>

      {DELET_VIDEO && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(DELET_VIDEO)) }}
          />
          <figure className="my-6">
            <LiteYouTube id={DELET_VIDEO.id} title={DELET_VIDEO.title} />
            <figcaption className="mt-2 text-sm text-gray-500">
              בדיקת דלת כניסה בדירה חדשה מקבלן — משקוף, נעילה, פרזול ואטימות. לצפייה בעמוד המלא:{" "}
              <Link
                href={`/videos/${videoSlug(DELET_VIDEO)}`}
                className="text-blue-700 hover:underline font-medium"
              >
                עמוד הסרטון
              </Link>
              .
            </figcaption>
          </figure>
        </>
      )}

      <ArticleH2>למה דלת הכניסה נבדקת בקפידה</ArticleH2>
      <p>
        בניגוד לדלת פנים, דלת הכניסה נושאת שלושה תפקידים בו־זמנית: אבטחה מפני פריצה, אטימות מפני רוח וקור,
        ובידוד מפני רעש. ליקוי במשקוף או במנעול פוגע ישירות באבטחת הדירה, ואטם חסר או סף לקוי מכניסים רוח,
        קור ולעיתים גם לכלוך ורעש. בדירה חדשה התקנת דלת תקינה התואמת את המפרט הטכני היא באחריות הקבלן במסגרת{" "}
        <Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">
          חוק המכר (דירות)
        </Link>
        .
      </p>

      <ArticleH2>מה בודקים בדלת הכניסה</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>ישרות המשקוף ואנכיותו:</strong> משקוף עקום גורם לדלת לשפשף, להיתקע או להישאר פתוחה — נבדק בעזרת פלס.</li>
        <li><strong>מרווחים בהיקף הדלת:</strong> המרווח בין הדלת למשקוף חייב להיות אחיד לכל אורך ההיקף.</li>
        <li><strong>צירים וסגירה:</strong> הדלת נסגרת בצורה חלקה, ללא שפשוף וללא צורך בכוח חריג.</li>
        <li><strong>נעילה ופרזול:</strong> המנעול, הצילינדר, לשונית המנעול והידיות פועלים חלק וללא תקיעות — מנעול ביטחוני תקול הוא ליקוי משמעותי.</li>
        <li><strong>אטמי גומי:</strong> רציפות אטמי הגומי בהיקף הדלת — אטם חסר או בלוי מכניס רוח, קור ורעש.</li>
        <li><strong>סף תחתון:</strong> מרווח גדול מדי בין הדלת לסף מכניס רוח וקור ופוגע בבידוד.</li>
        <li><strong>התאמה למפרט הטכני:</strong> רמת האבטחה, סוג המנעול והגימור שהובטחו בחוזה.</li>
      </ul>

      <ArticleH2>אטימות ובידוד הדלת</ArticleH2>
      <p>
        דלת כניסה תקינה אוטמת את הדירה מפני רוח, קור, רעש וריחות מחדר המדרגות. אטמי גומי חסרים או בלויים, וסף
        תחתון לקוי, מאפשרים חדירת אוויר ופוגעים בבידוד התרמי והאקוסטי — מה שמתבטא גם בתחושת רוח מתחת לדלת וגם
        בחשבונות חימום וקירור גבוהים יותר. בבדק בית בודקים את רציפות האטמים ואת אטימות ההיקף, ומתעדים כל
        מרווח חריג.
      </p>

      <ArticleH2>למה דווקא ביום המסירה</ArticleH2>
      <p>
        ביום המסירה הדירה עדיין באחריות מלאה של הקבלן, וכל ליקוי שמתועד ב<strong>פרוטוקול המסירה</strong> הופך
        לדרישת תיקון מחייבת. משקוף עקום, כיוונון צירים לקוי או אטם חסר הם ליקויים שקל לתקן בשלב זה — כיוונון או
        השלמת אטמים — אך מסורבלים ויקרים יותר לאחר האכלוס. תיעוד מסודר מאפשר לדרוש מהקבלן כיוונון, תיקון או
        החלפה בעוד הדבר פשוט.
      </p>

      <ArticlePriceSection
        intro="אלה אומדנים מייצגים לתיקוני דלת כניסה נפוצים. המחירים מבוססים על מחירונים מקובלים בענף, במחיר עלות לקבלן — הם משתנים מעת לעת ולפי הקבלן ורמת הגימור, ובשוק הפרטי הם גבוהים יותר."
        items={[
          { item: "כיוונון דלת שאינה נסגרת בכוח תקני", price: "כ־510 ₪" },
          { item: "החלפת אטם היקפי (גומייה) בדלת", price: "כ־920 ₪" },
          { item: "תיקון וצביעת משקוף דלת", price: "כ־404 ₪" },
          { item: "תיקון פגמי ציפוי בדלת כניסה", price: "כ־2,480 ₪" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריכים על{" "}
        <Link href="/likuyey-bniya/delet-knisa" className="text-blue-700 hover:underline font-medium">
          ליקויים בדלת כניסה
        </Link>{" "}
        ועל{" "}
        <Link href="/likuyey-bniya/dlatot" className="text-blue-700 hover:underline font-medium">
          ליקויי דלתות
        </Link>
        , צפו ב
        <Link
          href={`/videos/${DELET_VIDEO ? videoSlug(DELET_VIDEO) : "bedikat-delet-knisa-dira-hadasha"}`}
          className="text-blue-700 hover:underline font-medium"
        >
          סרטון בדיקת דלת הכניסה
        </Link>
        , וקראו על{" "}
        <Link href="/articles/protokol-mesira" className="text-blue-700 hover:underline font-medium">
          פרוטוקול מסירה לדירה חדשה
        </Link>
        {" "}ועל{" "}
        <Link href="/articles/alut-tikun-likuyey-bniya" className="text-blue-700 hover:underline font-medium">
          עלות תיקון ליקויי בנייה
        </Link>
        .
      </p>

      <ArticleFaq
        items={[
          {
            question: "מה בודקים בדלת כניסה בבדק בית?",
            answer:
              "נבדקים ישרות המשקוף ואנכיותו, המרווחים האחידים בהיקף הדלת, פעולת הצירים והסגירה, הנעילה והפרזול (מנעול, צילינדר, לשונית וידיות), רציפות אטמי הגומי, הסף התחתון וההתאמה למפרט הטכני שהובטח בחוזה. כל ליקוי מתועד לפני המסירה.",
          },
          {
            question: "איך מזהים משקוף עקום בדלת כניסה?",
            answer:
              "משקוף עקום נבדק בעזרת פלס, ומתבטא בדלת שמשפשפת, נתקעת או נשארת פתוחה מעצמה, וכן במרווח לא אחיד בין הדלת למשקוף לאורך ההיקף. זהו ליקוי שקל לתקן בכיוונון ביום המסירה, אך מסורבל ויקר יותר לאחר האכלוס.",
          },
          {
            question: "למה דלת כניסה חשובה לאטימות ולבידוד?",
            answer:
              "דלת כניסה תקינה אוטמת את הדירה מפני רוח, קור, רעש וריחות מחדר המדרגות. אטמי גומי חסרים או בלויים וסף תחתון לקוי מאפשרים חדירת אוויר ופוגעים בבידוד התרמי והאקוסטי — מה שמתבטא בתחושת רוח מתחת לדלת ובחשבונות חימום וקירור גבוהים יותר. בבדק בית בודקים את רציפות האטמים ואת אטימות ההיקף.",
          },
          {
            question: "מתי הכי כדאי לתקן ליקויי דלת כניסה?",
            answer:
              "ביום המסירה, כשהדירה עדיין באחריות מלאה של הקבלן. משקוף עקום, כיוונון צירים לקוי או אטם חסר הם ליקויים שקל לתקן בשלב זה בכיוונון או בהשלמת אטמים, אך מסורבלים ויקרים יותר לאחר האכלוס. ליקוי המתועד בפרוטוקול המסירה הופך לדרישת תיקון מחייבת.",
          },
        ]}
      />
    </ArticleLayout>
  )
}
