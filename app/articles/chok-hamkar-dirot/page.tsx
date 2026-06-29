import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"

export const metadata: Metadata = {
  title: "חוק המכר (דירות): תקופות בדק ואחריות לליקויי בנייה | בדק בית Legal",
  description:
    "מדריך מלא לחוק המכר (דירות), תשל\"ג-1973: תקופות הבדק והאחריות לכל סוג ליקוי — ריצוף, רטיבות, איטום, צנרת, סדקים וחיפוי חוץ. כך מחייבים את הקבלן לתקן.",
  keywords: [
    "חוק המכר דירות",
    "חוק המכר דירות תשלג 1973",
    "תקופת בדק",
    "תקופת אחריות",
    "אחריות קבלן ליקויי בנייה",
    "תקופת בדק ריצוף",
    "אחריות רטיבות",
    "אחריות צנרת נזילה",
    "תקופת בדק איטום",
    "סדקים אחריות קבלן",
    "אי התאמה",
    "אי התאמה יסודית",
    "בדק בית",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://legalbedek.co.il/articles/chok-hamkar-dirot" },
  openGraph: {
    title: "חוק המכר (דירות): תקופות בדק ואחריות לליקויי בנייה",
    description:
      "תקופות הבדק והאחריות לכל סוג ליקוי לפי חוק המכר (דירות) — ריצוף, רטיבות, איטום, צנרת, סדקים וחיפוי חוץ.",
    type: "article",
    locale: "he_IL",
    url: "https://legalbedek.co.il/articles/chok-hamkar-dirot",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

// תקופות הבדק לפי התוספת לחוק המכר (דירות), עם קישור פנימי לעמוד הליקוי הרלוונטי.
const BEDEK_PERIODS: { defect: string; period: string; href?: string }[] = [
  { defect: "מוצרי מסגרות ונגרות, לרבות אלומיניום ופלסטיק (חלונות, דלתות, תריסים)", period: "שנתיים", href: "/likuyey-bniya/aluminium" },
  { defect: "ריצוף וחיפוי פנים, לרבות שקיעות ושחיקה", period: "שנתיים", href: "/likuyey-bniya/ritzuf" },
  { defect: "כשל בתפקוד ובעמידות של מכונות ודוודים", period: "3 שנים" },
  { defect: "ליקוי בפיתוח חצר, לרבות שקיעות במרצפות, חניות, מדרכות ושבילים", period: "3 שנים", href: "/likuyey-bniya/chatzerot" },
  { defect: "כשל במרכיבי מערכת הבידוד התרמי", period: "3 שנים", href: "/likuyey-bniya/bidud-termi" },
  { defect: "כשל במערכות צנרת — מים, הסקה, מרזבים, דלוחין וביוב (לרבות נזילות)", period: "4 שנים", href: "/likuyey-bniya/instalatzia" },
  { defect: "כשל באיטום המבנה — חללים תת-קרקעיים, קירות, תקרות וגגות", period: "4 שנים", href: "/likuyey-bniya/itum" },
  { defect: "סדקים ברוחב גדול מ-1.5 מ\"מ ברכיבים לא נושאים", period: "5 שנים", href: "/likuyey-bniya/sdakim" },
  { defect: "התנתקות, התקלפות או התפוררות של חיפויי חוץ", period: "7 שנים", href: "/likuyey-bniya/chipuyim" },
  { defect: "כל אי-התאמה אחרת שאינה אי-התאמה יסודית", period: "שנה אחת" },
]

export default function ChokHamkarDirotArticle() {
  return (
    <ArticleLayout
      title="חוק המכר (דירות): תקופות הבדק והאחריות לליקויי בנייה"
      subtitle="כמה זמן אחראי הקבלן לכל ליקוי? המדריך המלא לזכויות שלכם לפי חוק המכר (דירות), תשל&quot;ג-1973 — ואיך בדק בית במועד הופך אותן לתיקון בפועל."
      slug="chok-hamkar-dirot"
      description="מדריך לתקופות הבדק והאחריות לפי חוק המכר (דירות), תשל״ג-1973: כמה זמן אחראי הקבלן לכל ליקוי בנייה ואיך בדק בית במועד ממש את הזכויות."
      datePublished="2026-06-28"
      dateModified="2026-06-28"
      ctaTitle="קיבלתם דירה חדשה מקבלן?"
      ctaText="אל תוותרו על הזכויות שלכם. בדק בית מקצועי במועד הנכון מתעד את הליקויים ומחייב את הקבלן לתקן על חשבונו."
    >
      <ArticleLead>
        חוק המכר (דירות), תשל"ג-1973 הוא החוק המרכזי שמגן על רוכשי דירות חדשות מקבלן. הוא קובע שהקבלן אחראי לליקויי
        בנייה לאורך <strong>תקופות בדק ואחריות</strong> מוגדרות — ולכל סוג ליקוי תקופה משלו. הכרת התקופות האלה היא
        ההבדל בין דירה שתוקנה על חשבון הקבלן לבין הוצאה כספית שתיפול עליכם.
      </ArticleLead>

      <ArticleH2>מהי "אי-התאמה" לפי החוק?</ArticleH2>
      <p>
        סעיף 4 לחוק קובע שהקבלן (המוכר) לא קיים את חיוביו אם הדירה שונה מן המפרט, מתקן רשמי או מתקנות הבנייה, או אם
        התגלתה אי-התאמה בתוך תקופת הבדק או האחריות. במילים פשוטות: כל פער בין מה שהובטח לכם במפרט ובתקנים לבין מה
        שנמסר בפועל — הוא אי-התאמה שהקבלן מחויב לתקן.
      </p>

      <ArticleH2>תקופת בדק, תקופת אחריות ואי-התאמה יסודית — מה ההבדל?</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li>
          <strong>תקופת הבדק:</strong> תקופה הקבועה בתוספת לחוק (ראו טבלה למטה), שמתחילה במועד מסירת הדירה. בתוכה
          הנטל על הקבלן — אם התגלה ליקוי, הוא חייב לתקן, אלא אם יוכיח שהליקוי נגרם באשמת הרוכש.
        </li>
        <li>
          <strong>תקופת האחריות:</strong> שלוש שנים נוספות שמתחילות בתום תקופת הבדק. בתוכה הרוכש צריך להוכיח שמקור
          הליקוי בתכנון, בעבודה או בחומרים.
        </li>
        <li>
          <strong>אי-התאמה יסודית:</strong> ליקוי בחלקי המבנה הנושאים עומסים והנוגע ליציבות המבנה ולבטיחותו —
          באחריות הקבלן עד <strong>20 שנה</strong> ממועד המסירה.
        </li>
      </ul>

      <ArticleH2>טבלת תקופות הבדק לפי סוג הליקוי</ArticleH2>
      <p>
        אלו תקופות הבדק הקבועות בתוספת לחוק המכר (דירות). לחצו על סוג הליקוי כדי לקרוא מדריך מפורט על אותו ליקוי
        ועל אופן איתורו בבדק בית:
      </p>
      <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200 my-4">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="p-3 md:p-4 font-bold text-sm md:text-base">סוג הליקוי</th>
              <th className="p-3 md:p-4 font-bold text-sm md:text-base whitespace-nowrap">תקופת בדק</th>
            </tr>
          </thead>
          <tbody>
            {BEDEK_PERIODS.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="p-3 md:p-4 text-sm md:text-base text-gray-800 border-t border-gray-100">
                  {row.href ? (
                    <Link href={row.href} className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
                      {row.defect}
                    </Link>
                  ) : (
                    row.defect
                  )}
                </td>
                <td className="p-3 md:p-4 text-sm md:text-base font-bold text-slate-900 whitespace-nowrap border-t border-gray-100">
                  {row.period}
                </td>
              </tr>
            ))}
            <tr className="bg-blue-50">
              <td className="p-3 md:p-4 text-sm md:text-base font-medium text-blue-900 border-t border-blue-100">
                אי-התאמה יסודית (יציבות ובטיחות המבנה)
              </td>
              <td className="p-3 md:p-4 text-sm md:text-base font-bold text-blue-900 whitespace-nowrap border-t border-blue-100">
                20 שנה
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        * הטבלה מבוססת על התוספת לחוק המכר (דירות), תשל"ג-1973. תקופת הבדק מתחילה ממועד מסירת הדירה לרשותכם.
      </p>

      <ArticleH2>חובת ההודעה על הליקוי — אל תפספסו את החלון</ArticleH2>
      <p>
        החוק (סעיף 4א) מבחין בין ליקוי שניתן לגלות במסירה לבין ליקוי נסתר. ליקוי שניתן היה לגלותו בעת המסירה — יש
        להודיע עליו לקבלן <strong>בתוך שנה</strong> ממועד המסירה. ליקוי נסתר — יש להודיע עליו תוך זמן סביר מרגע
        שהתגלה. כאן בדיוק נכנס בדק בית: בדיקה הנדסית במועד המסירה מתעדת את כל הליקויים הגלויים בזמן, כך שלא תאבדו את
        הזכות לדרוש את תיקונם.
      </p>

      <ArticleH2>זכות התיקון של הקבלן</ArticleH2>
      <p>
        סעיף 4ב קובע שעל הרוכש לתת לקבלן הזדמנות נאותה לתקן, ועל הקבלן לתקן תוך זמן סביר. אם הליקוי חוזר ומתגלה לאחר
        שהקבלן תיקן אותו פעם או יותר בתוך שנתיים, או שהתיקון דחוף והקבלן לא תיקן בזמן סביר — הרוכש רשאי לתקן בעצמו
        <strong> על חשבון הקבלן</strong>. תיעוד מסודר בדוח בדק בית הוא הראיה שמאפשרת לעמוד על הזכות הזו.
      </p>

      <ArticleH2>פיצוי על איחור במסירת הדירה</ArticleH2>
      <p>
        סעיף 5א מקנה פיצוי ללא הוכחת נזק על איחור במסירה: אם הקבלן מאחר מעבר לחודש מהמועד החוזי, הרוכש זכאי לפיצוי
        חודשי בגובה דמי שכירות של דירה דומה (ובהמשך אף במכפלות של 1.25 ו-1.5), עבור כל חודש איחור.
      </p>

      <ArticleH2>איך בדק בית הופך את חוק המכר לזכויות בפועל</ArticleH2>
      <p>
        החוק נותן לכם זכויות — אבל כדי לממש אותן צריך <strong>להוכיח</strong> את הליקוי, בזמן ובאופן מקצועי. בדק בית
        במעמד המסירה או בתחילת תקופת הבדק מספק בדיוק את זה: דוח הנדסי המתעד כל ליקוי, מפנה לתקן הרלוונטי, ומגובה
        בחוות דעת קבילה משפטית. כך הקבלן מתקן על חשבונו במקום שהעלות תיפול עליכם בעוד מספר שנים.
      </p>
      <p>
        רוצים להעמיק? קראו על <Link href="/articles/bedek-bayit-dira-hadasha" className="text-blue-700 hover:underline font-medium">בדק בית בדירה חדשה</Link>,
        על <Link href="/articles/matai-lehazmin-bedek-bayit" className="text-blue-700 hover:underline font-medium">מתי להזמין בדק בית</Link>,
        או עברו ל<Link href="/likuyey-bniya" className="text-blue-700 hover:underline font-medium">מדריך ליקויי הבנייה המלא</Link>.
      </p>
    </ArticleLayout>
  )
}
