import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"

export const metadata: Metadata = {
  title: "ת\"י 789 – סטיות מותרות בעבודות בנייה: המצב המעודכן | בדק בית Legal",
  description:
    "האמת על ת\"י 789: התקן צומצם מאוד, וכיום הסטיות המותרות מופיעות בכל תקן ספציפי. מה נשאר בת\"י 789 (אנכיות ושיפוע קירות), והיכן נמצאות הסטיות לריצוף, חיפוי, אלומיניום ודלתות.",
  keywords: [
    "ת\"י 789",
    "תקן 789",
    "סטיות מותרות בעבודות בנייה",
    "סטיות מותרות",
    "סטיית אנכיות קיר",
    "שיפוע קיר",
    "סטייה בריצוף",
    "מדידת סטיות בנייה",
    "בדק בית",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://legalbedek.co.il/articles/taken-789-stiyot-mutarot" },
  openGraph: {
    title: "ת\"י 789 – סטיות מותרות בעבודות בנייה: המצב המעודכן",
    description: "התקן צומצם; כיום הסטיות המותרות מופיעות בכל תקן ספציפי. מה נשאר בת\"י 789 והיכן נמצאות הסטיות לכל רכיב.",
    type: "article",
    locale: "he_IL",
    url: "https://legalbedek.co.il/articles/taken-789-stiyot-mutarot",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

const TOLERANCE_MAP: { element: string; standard: string; href?: string }[] = [
  { element: "ריצוף קרמי (מישוריות, מישקים, הפרשי מפלס)", standard: "ת\"י 1555 חלק 3", href: "/likuyey-bniya/ritzuf" },
  { element: "ריצוף אבן", standard: "ת\"י 5566", href: "/likuyey-bniya/ritzuf" },
  { element: "חיפוי קירות באבן טבעית", standard: "ת\"י 2378", href: "/likuyey-bniya/chipuyim" },
  { element: "חיפוי חוץ קרמי", standard: "ת\"י 1555 חלק 1", href: "/likuyey-bniya/chipuyim" },
  { element: "חלונות ותריסי אלומיניום", standard: "ת\"י 1068 / ת\"י 1509", href: "/likuyey-bniya/aluminium" },
  { element: "דלתות ומלבני פלדה", standard: "ת\"י 1161 + 5044", href: "/likuyey-bniya/dlatot" },
  { element: "טיח", standard: "ת\"י 1920 חלק 2", href: "/likuyey-bniya/tiyach" },
]

export default function Taken789Article() {
  return (
    <ArticleLayout
      title="ת&quot;י 789 – סטיות מותרות בעבודות בנייה: מה באמת קובע התקן היום"
      subtitle="הרבה אתרים מציגים את ת&quot;י 789 כ'תקן הסטיות הכללי' — אבל זה כבר לא נכון. הנה המצב המעודכן, והיכן באמת נמצאות הסטיות המותרות לכל רכיב בדירה."
      slug="taken-789-stiyot-mutarot"
      description="מה באמת קובע ת״י 789 לגבי סטיות מותרות בעבודות בנייה, היכן נמצאות היום הסטיות המותרות לכל רכיב בדירה, ואיך בדק בית מבחין בין ליקוי לסטייה מותרת."
      datePublished="2026-06-28"
      dateModified="2026-06-28"
      ctaTitle="חושדים בסטייה חורגת בדירה?"
      ctaText="מדידת סטיות דורשת ציוד וידע מקצועי. בדק בית מקצועי קובע באופן אובייקטיבי אם מדובר בליקוי או בסטייה מותרת."
    >
      <ArticleLead>
        ת"י 789 מוכר כ"תקן הסטיות המותרות בעבודות בנייה", ולאורך שנים נהוג היה להפנות אליו עבור כל סטייה — בריצוף,
        בקירות, בפתחים ועוד. בפועל, <strong>התקן צומצם מאוד</strong>, וכיום הסטיות המותרות לכל רכיב מופיעות בתוך
        התקן הספציפי של אותו רכיב, ולא בתקן כללי אחד.
      </ArticleLead>

      <ArticleH2>מה השתנה בת"י 789?</ArticleH2>
      <p>
        בעבר ריכז ת"י 789 טבלאות של סטיות מותרות למגוון עבודות גמר ובנייה. בעדכונים שבוצעו, רוב התכולה הזו הוצאה
        מהתקן והועברה אל התקנים הייעודיים — כך שכיום, כדי לדעת מהי הסטייה המותרת לריצוף, בודקים את תקן הריצוף;
        לחיפוי — את תקן החיפוי; לאלומיניום — את תקן החלונות, וכן הלאה.
      </p>

      <ArticleH2>מה כן נשאר בת"י 789 כיום?</ArticleH2>
      <p>
        המוקד המרכזי שנותר בתקן הוא <strong>אנכיות ושיפוע של קירות</strong>. בדיקת סטיית האנכיות של קיר לפי הגישה
        המעודכנת אינה מסתכמת בהצמדת פלס: היא דורשת בנייה של <strong>מודל ושבלונה ייעודית בגודל משמעותי</strong>
        לצורך המדידה — תהליך מורכב שמבדיל בין בדיקה חובבנית לבדיקה הנדסית מקצועית.
      </p>

      <ArticleH2>אז איפה נמצאות הסטיות המותרות לכל רכיב?</ArticleH2>
      <p>זו מפת הדרכים: לכל רכיב בדירה — התקן שבו מוגדרות הסטיות המותרות שלו כיום.</p>
      <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200 my-4">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="p-3 md:p-4 font-bold text-sm md:text-base">הרכיב</th>
              <th className="p-3 md:p-4 font-bold text-sm md:text-base whitespace-nowrap">התקן שבו מוגדרות הסטיות</th>
            </tr>
          </thead>
          <tbody>
            {TOLERANCE_MAP.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="p-3 md:p-4 text-sm md:text-base text-gray-800 border-t border-gray-100">
                  {row.href ? (
                    <Link href={row.href} className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
                      {row.element}
                    </Link>
                  ) : (
                    row.element
                  )}
                </td>
                <td className="p-3 md:p-4 text-sm md:text-base font-mono font-bold text-slate-900 whitespace-nowrap border-t border-gray-100">
                  {row.standard}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleH2>איך נמדדות סטיות בבדק בית?</ArticleH2>
      <p>
        בבדק בית מקצועי הסטיות נמדדות בכלים ייעודיים — פלס דיגיטלי ומאזנת לייזר למישוריות ולשיפוע, סרגלים ופלסים
        ארוכים לריצוף, ומדידת אנכיות קירות בהתאם לשיטה הנדרשת. כל חריגה מתועדת מול התקן הרלוונטי, כך שניתן לקבוע
        באופן אובייקטיבי האם מדובר בליקוי שיש לתקן או בסטייה המותרת לפי התקן.
      </p>

      <ArticleH2>וגם: אחריות הקבלן</ArticleH2>
      <p>
        סטיות החורגות מהתקן הן אי-התאמה שבאחריות הקבלן. כדאי להכיר את תקופות הבדק והאחריות במדריך{" "}
        <Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">חוק המכר (דירות)</Link>,
        ולקרוא על <Link href="/likuyey-bniya/ritzuf" className="text-blue-700 hover:underline font-medium">ליקויי ריצוף</Link>{" "}
        ועל <Link href="/likuyey-bniya/sdakim" className="text-blue-700 hover:underline font-medium">סדקים בקירות</Link>.
      </p>
    </ArticleLayout>
  )
}
