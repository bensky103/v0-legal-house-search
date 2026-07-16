import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { ArticlePriceSection } from "@/components/article-price-section"
import { ArticleFaq } from "@/components/article-faq"
import { LiteYouTube } from "@/components/lite-youtube"
import { DEFECTS_MITBACH_NEGARUT } from "@/lib/article-images"
import { videos, videoSchema } from "@/lib/videos"
import { videoSlug } from "@/lib/video-pages"

export const metadata: Metadata = {
  title: "ליקויי מטבח ונגרות בבדק בית — ארונות, משטח ואיטום | בדק בית Legal",
  description:
    "פילוס ארונות, מישוריות משטח, איטום כיור ואיכות נגרות במטבח ובחדרי הרחצה — כך בודקים ליקויי מטבח ונגרות בבדק בית לפני מסירה מקבלן.",
  keywords: [
    "ליקויי מטבח",
    "נגרות",
    "ארונות מטבח",
    "משטח עבודה",
    "איטום כיור",
    "ארון אמבטיה",
    "פילוס ארונות",
    "בדק בית מטבח",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/likuyey-mitbach-negarut-bedek-bayit" },
  openGraph: {
    title: "ליקויי מטבח ונגרות בבדק בית — ארונות, משטח ואיטום",
    description: "כך בודקים בבדק בית פילוס ארונות, מישוריות משטח, איטום כיור ואיכות נגרות במטבח ובחדרי הרחצה.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/likuyey-mitbach-negarut-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

const MITBACH_VIDEO = videos.find((v) => v.id === "D95GOtlLq4w")

export default function LikuyeyMitbachNegarutArticle() {
  return (
    <ArticleLayout
      title="ליקויי מטבח ונגרות בבדק בית — ארונות, משטח ואיטום"
      subtitle="המטבח והנגרות משלבים עבודת נגרות, אינסטלציה ואיטום. כך נבדקים פילוס הארונות, מישוריות המשטח ואיטום הכיור בבדק בית."
      slug="likuyey-mitbach-negarut-bedek-bayit"
      description="כך נבדקים בבדק בית פילוס ארונות, מישוריות משטח, איטום כיור ואיכות נגרות במטבח ובחדרי הרחצה."
      datePublished="2026-07-12"
      dateModified="2026-07-12"
      ctaTitle="ארון לא מפולס? כיור לא אטום?"
      ctaText="ליקויי מטבח ונגרות מתגלים בפרטים הקטנים. בדק בית מקצועי בודק ומתעד אותם לפני המסירה."
    >
      <ArticleLead>
        המטבח וארונות הנגרות משלבים כמה תחומים — נגרות, אינסטלציה ואיטום — ולכן הם מוקד לליקויים. פילוס ארונות
        לקוי, משטח לא ישר, איטום כיור כושל וגמר נגרות ירוד הם ממצאים נפוצים שנבדקים בבדק בית לפני קבלת הדירה.
      </ArticleLead>

      {MITBACH_VIDEO && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(MITBACH_VIDEO)) }}
          />
          <figure className="my-6">
            <LiteYouTube id={MITBACH_VIDEO.id} title={MITBACH_VIDEO.title} />
            <figcaption className="mt-2 text-sm text-gray-500">
              בדיקת נגרות מטבח בדירה חדשה מקבלן — ארונות, צירים, מגירות ומשטח עבודה. לצפייה בעמוד המלא:{" "}
              <Link
                href={`/videos/${videoSlug(MITBACH_VIDEO)}`}
                className="text-blue-700 hover:underline font-medium"
              >
                עמוד הסרטון
              </Link>
              .
            </figcaption>
          </figure>
        </>
      )}

      <ArticleH2>ליקויי המטבח והנגרות הנפוצים</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>פילוס ותלייה לקויים:</strong> ארונות עליונים ותחתונים שאינם מפולסים או אינם תלויים כראוי.</li>
        <li><strong>מישוריות משטח:</strong> משטח עבודה שאינו ישר או אינו מפולס, וחיבורים לא תקינים בין חלקיו.</li>
        <li><strong>איטום כיור וברז:</strong> אטימה כושלת סביב הכיור והברז שגורמת לחדירת מים לארון.</li>
        <li><strong>גמר נגרות:</strong> פגמים בחיפוי, מגירות וצירים לא מכווננים, ופתיחה וסגירה לא תקינות.</li>
        <li><strong>ארונות אמבטיה:</strong> אותם עקרונות בדיקה חלים על נגרות חדרי הרחצה והשירותים.</li>
      </ul>

      <ArticleH2>איך בודקים מטבח ונגרות בבדק בית?</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>פלס</strong> לבדיקת פילוס הארונות ומישוריות המשטח.</li>
        <li><strong>בדיקת תפקוד</strong> של מגירות, צירים ומנגנוני פתיחה וסגירה.</li>
        <li><strong>בדיקת איטום</strong> סביב הכיור, הברז וחיבורי המים מתחת לארון.</li>
        <li><strong>בדיקת גמר</strong> — חיפוי, קנטים וחיבורים — לאיתור פגמים ואי-התאמות למפרט.</li>
      </ul>

      <ArticleDefectGallery
        heading="ליקויי מטבח ונגרות שאותרו בשטח — תיעוד מבדק בית"
        intro="דוגמאות אמיתיות לבדיקת ארונות, משטח ונגרות במטבח ובחדרי הרחצה. תיעוד מדויק של כל ממצא מאפשר לדרוש תיקון מהקבלן."
        items={DEFECTS_MITBACH_NEGARUT}
      />

      <ArticlePriceSection
        items={[
          { item: "החלפת ציר עם חלודה (מטבח או רחצה)", price: "כ־99 ₪ ליחידה" },
          { item: "תיקון שריטות ופגיעות בחזיתות", price: "כ־450 ₪ למ״ר" },
          { item: "כיוונון ופילוס דלתות ומגירות", price: "כ־1,200 ₪ (חצי יום עבודה)" },
          { item: "ביצוע אף מים במשטח שיש", price: "כ־300 ₪" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריכים על <Link href="/likuyey-bniya/mitbach" className="text-blue-700 hover:underline font-medium">ליקויי מטבח</Link>{" "}
        ו<Link href="/likuyey-bniya/negarut" className="text-blue-700 hover:underline font-medium">נגרות</Link>, או
        חזרו ל<Link href="/likuyey-bniya" className="text-blue-700 hover:underline font-medium">מדריך ליקויי הבנייה המלא</Link>.
      </p>

      <ArticleFaq
        items={[
          {
            question: "מהם ליקויי המטבח והנגרות הנפוצים ביותר?",
            answer:
              "הליקויים הנפוצים הם פילוס ותלייה לקויים של ארונות עליונים ותחתונים, מישוריות משטח לקויה, איטום כושל סביב הכיור והברז שגורם לחדירת מים לארון, וגמר נגרות ירוד כמו מגירות וצירים לא מכווננים. אותם עקרונות חלים גם על ארונות אמבטיה ונגרות חדרי הרחצה.",
          },
          {
            question: "איך בודקים מטבח ונגרות בבדק בית?",
            answer:
              "בודקים באמצעות פלס את פילוס הארונות ומישוריות המשטח, בוחנים את תפקוד המגירות, הצירים ומנגנוני הפתיחה והסגירה, בודקים את האיטום סביב הכיור, הברז וחיבורי המים מתחת לארון, ומאתרים פגמים בגמר הנגרות ואי-התאמות למפרט.",
          },
          {
            question: "למה איטום כיור לקוי מסוכן לארון המטבח?",
            answer:
              "אטימה כושלת סביב הכיור והברז מאפשרת חדירת מים לארון שמתחת. מים אלה גורמים עם הזמן לנפיחות, לעובש ולנזק בלתי הפיך לנגרות. בדק בית מקצועי מאתר ומתעד את כשל האיטום עוד לפני המסירה, כדי לאפשר דרישת תיקון מהקבלן.",
          },
        ]}
      />
    </ArticleLayout>
  )
}
