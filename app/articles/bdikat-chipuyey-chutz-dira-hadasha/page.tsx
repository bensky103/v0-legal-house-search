import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticlePriceSection } from "@/components/article-price-section"
import { LiteYouTube } from "@/components/lite-youtube"
import { videos, videoSchema } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"

export const metadata: Metadata = {
  title: "בדיקת חיפויי חוץ בדירה חדשה — מה בודקים ביום המסירה | בדק בית Legal",
  description:
    "חיפוי חוץ שמתנתק או נופל הוא סכנת בטיחות, לא רק ליקוי אסתטי. כך בודקים חיפויי חוץ בדירה חדשה מקבלן ביום המסירה — נקישה חלולה, פוגות, סדקים, עיגון אבן ורטיבות, לפי ת״י 2378 ות״י 1555.",
  keywords: [
    "בדיקת חיפויי חוץ",
    "ליקויי חיפוי",
    "חיפוי אבן חזית",
    "נקישה חלולה",
    "חיפוי חוץ דירה חדשה",
    "עיגון חיפוי אבן",
    "ת״י 2378",
    "ת״י 1555",
    "בדק בית חיפוי",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/bdikat-chipuyey-chutz-dira-hadasha" },
  openGraph: {
    title: "בדיקת חיפויי חוץ בדירה חדשה — מה בודקים ביום המסירה",
    description:
      "כך בודקים חיפויי חוץ בדירה חדשה מקבלן ביום המסירה — נקישה חלולה, פוגות, סדקים, עיגון אבן בחזית ורטיבות, לפי ת״י 2378 ות״י 1555.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/bdikat-chipuyey-chutz-dira-hadasha",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

const CHIPUY_VIDEO = videos.find((v) => v.id === "MbybnZzRLhE")

export default function BdikatChipuyeyChutzArticle() {
  return (
    <ArticleLayout
      title="בדיקת חיפויי חוץ בדירה חדשה — מה בודקים ביום המסירה"
      subtitle="חיפוי חוץ הוא לא רק מראה — הוא מגן על המבנה, ובחזית גבוהה הוא רכיב בטיחות. אריח אבן שנופל מגובה מסכן חיים. כך בודקים חיפויי חוץ ביום מסירת הדירה."
      slug="bdikat-chipuyey-chutz-dira-hadasha"
      description="כך בודקים חיפויי חוץ בדירה חדשה מקבלן ביום המסירה — נקישה חלולה, פוגות, סדקים, עיגון אבן בחזית ורטיבות, לפי ת״י 2378 ות״י 1555."
      datePublished="2026-07-13"
      dateModified="2026-07-13"
      ctaTitle="חיפוי חוץ מתנתק או סדוק?"
      ctaText="חיפוי חוץ שנופל הוא סכנת בטיחות ותיקון יקר. בדק בית מקצועי מאתר ומתעד את הליקוי ביום המסירה, בעוד האחריות על הקבלן."
    >
      <ArticleLead>
        חיפוי החוץ מקנה למבנה את מראהו ומגן על הקירות מפני מזג האוויר — אבל בחזיתות גבוהות הוא גם{" "}
        <strong>רכיב בטיחות</strong>. אריח אבן כבד שמתנתק ונופל מגובה עלול לפגוע בעוברי אורח. לכן חיפויי החוץ הם
        מהדברים החשובים לבדוק בדירה חדשה מקבלן, כבר ביום המסירה.
      </ArticleLead>

      {CHIPUY_VIDEO && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(CHIPUY_VIDEO)) }}
          />
          <figure className="my-6">
            <LiteYouTube id={CHIPUY_VIDEO.id} title={CHIPUY_VIDEO.title} />
            <figcaption className="mt-2 text-sm text-gray-500">
              בדיקת דירה מקבלן ביום המסירה — אילו ליקויים בודקים בחיפויי חוץ. לצפייה בעמוד המלא:{" "}
              <Link href={`/videos/${videoSlug(CHIPUY_VIDEO)}`} className="text-blue-700 hover:underline font-medium">
                עמוד הסרטון
              </Link>
              .
            </figcaption>
          </figure>
        </>
      )}

      <ArticleH2>למה חיפוי חוץ הוא בדיקת בטיחות</ArticleH2>
      <p>
        בעוד שחיפוי פנים מתנתק הוא בעיקר ליקוי אסתטי וכלכלי, חיפוי חוץ — ובמיוחד{" "}
        <strong>חיפוי אבן כבד בחזית</strong> — שמתנתק או נופל הוא סכנת חיים. חיפוי כזה מחייב לעיתים{" "}
        <strong>חיזוק מכני (עיגון)</strong>, ולא רק הדבקה. את דרישות חיפוי האבן קובע ת״י 2378, ואת חיפוי הקרמיקה
        בחוץ — ת״י 1555. בדירה חדשה החיפוי הוא באחריות הקבלן במסגרת{" "}
        <Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">חוק המכר (דירות)</Link>.
      </p>

      <ArticleH2>מה בודקים בחיפויי חוץ</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>בדיקת נקישה:</strong> הקשה קלה על האריחים — "נקישה חלולה" מעידה על חלל מאחורי האריח ועל הדבקה לקויה שעלולה להוביל להתנתקות.</li>
        <li><strong>עיגון מכני בחיפוי אבן:</strong> בחזית, בדיקה אם קיים חיזוק מכני ולא רק הדבקה — היעדרו הוא ליקוי בטיחות.</li>
        <li><strong>אריחים סדוקים או מתנתקים:</strong> שברים, בליטות וסימני התנתקות בחזית.</li>
        <li><strong>פוגות:</strong> פוגות פתוחות, סדוקות או חסרות מאפשרות חדירת מים מאחורי החיפוי — הן חלק ממערכת האיטום.</li>
        <li><strong>רטיבות סמויה:</strong> איתור מים מאחורי החיפוי בעזרת מצלמה תרמית ומד לחות.</li>
        <li><strong>מישוריות וגוון:</strong> יישור החיפוי, אחידות הפוגות והתאמת הגוון בין האריחים.</li>
      </ul>

      <ArticleH2>קופינג ואף מים — הפרטים שמונעים רטיבות</ArticleH2>
      <p>
        לצד החיפוי עצמו נבדקים גם פרטי הגמר שמגנים עליו מלמעלה: <strong>הקופינג</strong> (גמר עליון של קירות
        וגדרות) ו<strong>אף המים</strong> (תלם ניתוק) בבליטות ובהגבהות. שיפוע קופינג לקוי או היעדר אף מים גורמים
        למים לזחול אל הקיר ואל מאחורי החיפוי — וכך ליקוי גמר קטן הופך לרטיבות ולהתנתקות אריחים.
      </p>

      <ArticleH2>למה דווקא ביום המסירה</ArticleH2>
      <p>
        ליקוי בחיפוי חוץ שמתגלה אחרי האכלוס הוא תיקון יקר ומורכב — פירוק וחידוש חיפוי בחזית דורשים{" "}
        <strong>פיגומים ועיגון מחדש</strong>. כשהליקוי מתועד ב<strong>פרוטוקול המסירה</strong>, בעוד האחריות על
        הקבלן, ניתן לדרוש את התיקון על חשבונו. תיעוד מסודר של נקישה חלולה, סדקים ופוגות פתוחות הוא הבסיס לדרישה.
      </p>

      <ArticlePriceSection
        intro="אלה אומדנים מייצגים לתיקוני חיפוי אבן וחיפוי חוץ. המחירים מבוססים על מחירונים מקובלים בענף, במחיר עלות לקבלן — הם משתנים מעת לעת ולפי הקבלן ורמת הגימור, ובשוק הפרטי הם גבוהים יותר. בחיפוי חזית הדורש פיגומים ועיגון מחדש, העלות בפועל גבוהה משמעותית."
        items={[
          { item: "פירוק והרכבה של אבן חיפוי שבורה או סדוקה", price: "כ־223 ₪ למ״ר" },
          { item: "ניקוי וליטוש אבן חיפוי מוכתמת", price: "כ־689 ₪ למ״ר" },
          { item: "אף מים בקופינג / הגבהות גג", price: "כ־740 ₪ למ״ר" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריך המלא על <Link href="/likuyey-bniya/chipuyim" className="text-blue-700 hover:underline font-medium">ליקויי חיפויים</Link>,
        צפו ב<Link href={`/videos/${CHIPUY_VIDEO ? videoSlug(CHIPUY_VIDEO) : "bedikat-chipuyey-chutz-dira-hadasha"}`} className="text-blue-700 hover:underline font-medium">סרטון בדיקת חיפויי חוץ</Link>,
        וקראו על <Link href="/articles/itum-gagot-bedek-bayit" className="text-blue-700 hover:underline font-medium">איטום גגות ומרפסות</Link>{" "}
        ועל <Link href="/articles/protokol-mesira" className="text-blue-700 hover:underline font-medium">פרוטוקול מסירה לדירה חדשה</Link>.
      </p>
    </ArticleLayout>
  )
}
