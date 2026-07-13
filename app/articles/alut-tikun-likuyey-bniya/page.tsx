import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"

export const metadata: Metadata = {
  title: "כמה עולה תיקון ליקויי בנייה? עלויות אמיתיות וכלי למשא ומתן | בדק בית Legal",
  description:
    "כמה עולה לתקן ליקויי בנייה בדירה? איך מחושבת עלות התיקון לפי מחירונים מקובלים, דוגמה אמיתית מדוח בדק בית, ולמה עלות הבדיקה זניחה מול הליקויים ומול ההנחה במשא ומתן.",
  keywords: [
    "עלות תיקון ליקויי בנייה",
    "כמה עולה תיקון ליקויים",
    "מחיר תיקון ליקויי בנייה",
    "אומדן עלות ליקויים",
    "ליקויי בנייה מחיר",
    "בדק בית משא ומתן",
    "חוות דעת עלות תיקון",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/alut-tikun-likuyey-bniya" },
  openGraph: {
    title: "כמה עולה תיקון ליקויי בנייה? עלויות אמיתיות וכלי למשא ומתן",
    description:
      "איך מחושבת עלות תיקון ליקויי בנייה, דוגמה אמיתית מדוח בדק בית, ולמה עלות הבדיקה זניחה מול הליקויים ומול ההנחה שאפשר להשיג במשא ומתן.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/alut-tikun-likuyey-bniya",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

/** אומדני עלות מייצגים לליקויים נפוצים — מחיר עלות לקבלן, מעוגל, מבוסס על מחירונים מקובלים. */
const COMMON_REPAIRS: { item: string; price: string }[] = [
  { item: "החלפת אביזר שרברבות (ברז, סיפון, צנרת גמישה)", price: "כ־170–300 ₪ ליחידה" },
  { item: "מילוי מישק גמיש בין חיפוי לקבועה", price: "כ־55–110 ₪ למ״ר" },
  { item: "החלפת אריח קרמיקה שבור בקיר", price: "כ־340 ₪ למ״ר" },
  { item: "כיוונון ותיקון חלון או ויטרינת הזזה", price: "כ־690 ₪ ליחידה" },
  { item: "תיקון וצביעת קיר או תקרה", price: "כ־63–90 ₪ למ״ר" },
  { item: "השלמת מיכל התפשטות בדוד שמש", price: "כ־860 ₪" },
  { item: "תיקון פגמי ציפוי בדלת כניסה", price: "כ־2,480 ₪" },
  { item: "אף מים בהגבהות גג / קופינג", price: "כ־740 ₪ למ״ר" },
  { item: "מערכת מיזוג מיני־מרכזית לא תקינה", price: "אלפי שקלים ליחידה" },
]

/** ריכוז עלויות לפי נושא מתוך דוח בדק בית אמיתי (דירת 3.5 חדרים, 72 ממצאים). */
const CATEGORY_COSTS: { category: string; total: string }[] = [
  { category: "טיח וצבע", total: "40,484 ₪" },
  { category: "מיזוג אוויר (מזגן מיני־מרכזי)", total: "11,860 ₪" },
  { category: "חיפוי אבן טבעית", total: "9,178 ₪" },
  { category: "ריצוף", total: "7,928 ₪" },
  { category: "חיפוי קרמיקה (פנים)", total: "7,510 ₪" },
  { category: "אלומיניום, חלונות ותריסים", total: "7,295 ₪" },
  { category: "ריצוף פרקט", total: "6,715 ₪" },
  { category: "דלתות פנים", total: "4,750 ₪" },
  { category: "חשמל ותקשורת", total: "3,797 ₪" },
  { category: "יתר הנושאים (14 קטגוריות)", total: "~13,400 ₪" },
]

export default function AlutTikunLikuyeyBniyaArticle() {
  return (
    <ArticleLayout
      title="כמה עולה תיקון ליקויי בנייה? עלויות אמיתיות וכלי למשא ומתן"
      subtitle="עלות תיקון הליקויים בדירה מגיעה לרוב לעשרות אלפי שקלים — הרבה מעבר לעלות הבדיקה עצמה. כך מחושבת העלות, דוגמה אמיתית מדוח, ולמה הסכום הכולל הוא כלי מיקוח חזק."
      slug="alut-tikun-likuyey-bniya"
      description="איך מחושבת עלות תיקון ליקויי בנייה לפי מחירונים מקובלים, דוגמה אמיתית מדוח בדק בית, ולמה עלות הבדיקה זניחה מול הליקויים ומול ההנחה במשא ומתן."
      datePublished="2026-07-13"
      dateModified="2026-07-13"
      ctaTitle="רוצים לדעת כמה שווים הליקויים בדירה שלכם?"
      ctaText="דוח בדק בית מפרט עלות תיקון מוערכת לכל ליקוי ולכל הדירה — הבסיס לדרישת תיקון מהקבלן או להנחה במשא ומתן."
    >
      <ArticleLead>
        אחת השאלות הראשונות של כל קונה היא <strong>כמה יעלה לתקן את הליקויים</strong>. בדוח בדק בית מקצועי לא
        רק מאותרים הליקויים — לכל ממצא מצורפת גם הערכת עלות תיקון, ובסוף הדוח מופיע הסכום הכולל. הסכום הזה הוא
        נתון קריטי: הוא לרוב גבוה בהרבה מעלות הבדיקה עצמה, והוא מהווה כלי מרכזי במשא ומתן מול הקבלן או המוכר.
      </ArticleLead>

      <ArticleH2>איך מחושבת עלות תיקון ליקוי</ArticleH2>
      <p>
        הערכת העלות בדוח מתבססת על <strong>מחירונים מקובלים בענף הבנייה</strong>, לפי יחידת מדידה מתאימה לכל
        עבודה — למטר, למטר רבוע, ליום עבודה או ליחידה. לכל ליקוי נקבעת כמות ומחיר ליחידה, ומכפלתם היא עלות
        התיקון של אותו סעיף. בסיכום הדוח מתווספים לרוב פיקוח הנדסי, בלתי־צפוי (בצ״מ) ומע״מ.
      </p>
      <p>שלוש נקודות חשובות שיש להכיר לגבי המחירים האלה:</p>
      <ul className="list-disc pr-6 space-y-2">
        <li>
          <strong>המחירים משתנים מעת לעת</strong> ובהתאם לקבלן המבצע ולרמת הגימור הנדרשת — לכן מדובר בהערכה,
          לא במחיר סופי מחייב.
        </li>
        <li>
          <strong>אלה מחירי עלות לקבלן.</strong> בשוק הפרטי, כשמזמינים בעל מקצוע לתיקון נקודתי בדירה מאוכלסת,
          העלויות בפועל גבוהות משמעותית.
        </li>
        <li>
          <strong>עבודה נקודתית יקרה יותר מעבודה רציפה.</strong> תיקון של סעיף בודד בדירה מאוכלסת עולה יותר
          מאותה עבודה כחלק מפרויקט שלם באתר.
        </li>
      </ul>

      <ArticleH2>דוגמה אמיתית — דירת 3.5 חדרים</ArticleH2>
      <p>
        בדוח בדק בית אמיתי של דירת 3.5 חדרים בבניין משותף אותרו <strong>72 ממצאים ב־19 נושאים</strong>. כך
        התחלקה עלות התיקון בין הנושאים המרכזיים:
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-300">
              <th className="py-2 pl-4 font-bold text-gray-900">נושא</th>
              <th className="py-2 font-bold text-gray-900">עלות תיקון מוערכת</th>
            </tr>
          </thead>
          <tbody>
            {CATEGORY_COSTS.map((row) => (
              <tr key={row.category} className="border-b border-slate-200">
                <td className="py-2 pl-4 text-gray-800">{row.category}</td>
                <td className="py-2 font-mono text-gray-900">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        סך הכול הסתכמה עלות התיקונים בכ־<strong>113,000 ₪</strong> לפני תוספות. לאחר פיקוח הנדסי, בלתי־צפוי
        ומע״מ הגיע הסכום הכולל לכ־<strong>160,000 ₪</strong> — וזאת בדירה אחת, בגודל ממוצע. שימו לב שנושא אחד
        (טיח וצבע) לבדו היווה יותר משליש מהעלות.
      </p>

      <ArticleH2>טווחי מחיר לליקויים נפוצים</ArticleH2>
      <p>
        כדי לתת סדר גודל, אלה אומדנים מייצגים לתיקונים נפוצים. הם מבוססים על מחירונים מקובלים, במחיר עלות
        לקבלן — בשוק הפרטי המחיר גבוה יותר, והוא משתנה לפי הזמן, הקבלן ורמת הגימור:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {COMMON_REPAIRS.map((r) => (
          <div key={r.item} className="rounded-xl ring-1 ring-slate-200 p-4 bg-slate-50">
            <p className="font-semibold text-gray-900 leading-snug">{r.item}</p>
            <p className="mt-1 font-mono text-blue-700">{r.price}</p>
          </div>
        ))}
      </div>

      <ArticleH2>הפרופורציה: עלות הבדיקה מול עלות הליקויים</ArticleH2>
      <p>
        זו הנקודה החשובה ביותר. כפי שראינו, עלות התיקון של הליקויים בדירה בודדת מגיעה בקלות לעשרות אלפי שקלים.
        לעומת זאת, עלות בדק הבית עצמה זניחה ביחס לסכום הזה — ובוודאי ביחס להנחה שאפשר להשיג במשא ומתן כשמניחים
        על השולחן דוח מקצועי המפרט את הליקויים ואת עלותם.
      </p>
      <p>
        הסכום הכולל בדוח הופך מ<strong>מספר על נייר</strong> ל<strong>כלי מיקוח</strong>: אפשר לדרוש מהקבלן
        לתקן את הליקויים על חשבונו במסגרת אחריותו לפי{" "}
        <Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">חוק המכר (דירות)</Link>,
        או — בעסקת יד שנייה — לדרוש הפחתה מהמחיר בגובה עלות התיקונים. בשני המקרים, ההחזר על עלות הבדיקה הוא
        פי כמה וכמה.
      </p>

      <ArticleH2>הקונה רואה את מצב הדירה — ויכול להיערך</ArticleH2>
      <p>
        מעבר למשא ומתן, לדוח יש ערך פרקטי: הקונה רואה בדיוק את מצב הדירה ויכול להתרשם מראש מההוצאות הצפויות לו.
        במקום להיכנס לדירה ולגלות בהדרגה כשלים יקרים, מקבלים תמונה מסודרת של מה טעון תיקון וכמה זה צפוי לעלות —
        עוד לפני החתימה.
      </p>

      <div className="my-6 rounded-xl bg-amber-50 ring-1 ring-amber-200 p-5">
        <p className="font-bold text-gray-900 mb-1">חשוב לדעת על המחירים</p>
        <p className="text-gray-800 text-base leading-relaxed">
          הסכומים המובאים כאן הם הערכות המבוססות על מחירונים מקובלים בענף, במחיר עלות לקבלן. הם אינם מחיר סופי
          מחייב, הם משתנים מעת לעת ולפי הקבלן ורמת הגימור, ובשוק הפרטי הם גבוהים יותר. אומדן מדויק לדירה
          ספציפית נקבע בדוח בדק בית פרטני.
        </p>
      </div>

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        קראו על <Link href="/articles/bedek-bayit-dira-hadasha" className="text-blue-700 hover:underline font-medium">בדק בית בדירה חדשה ככלי במשא ומתן</Link>,
        על <Link href="/articles/bedek-bayit-dira-yad-shniya" className="text-blue-700 hover:underline font-medium">בדק בית לדירה יד שנייה</Link>,
        ועל <Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">אחריות הקבלן לפי חוק המכר</Link>.
        לפרטים על עלות הבדיקה עצמה ראו <Link href="/mehir-bedek-bayit" className="text-blue-700 hover:underline font-medium">מחיר בדק בית</Link>,
        או עברו ל<Link href="/likuyey-bniya" className="text-blue-700 hover:underline font-medium">מדריך ליקויי הבנייה המלא</Link>.
      </p>
    </ArticleLayout>
  )
}
