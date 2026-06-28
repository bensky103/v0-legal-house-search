import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"

export const metadata: Metadata = {
  title: "תקני אינסטלציה בבדק בית: מים, ביוב וניקוז (ת\"י 1205) | בדק בית Legal",
  description:
    "מדריך לתקני האינסטלציה ת\"י 1205 — מים חמים וקרים, נקזים, כלים סניטריים וביוב. ליקויי צנרת נפוצים: נזילות, סתימות, לחץ מים נמוך וריח ביוב, ואיך מאתרים אותם בבדק בית.",
  keywords: [
    "ליקויי אינסטלציה",
    "תקני אינסטלציה",
    "תקן 1205",
    "ת\"י 1205",
    "נזילת צנרת",
    "בדיקת לחץ מים",
    "סתימת ביוב",
    "ריח ביוב בדירה",
    "ליקוי ניקוז",
    "צנרת מים חמים וקרים",
    "בדק בית אינסטלציה",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://legalbedek.co.il/articles/tikaney-instalatzia-bedek-bayit" },
  openGraph: {
    title: "תקני אינסטלציה בבדק בית: מים, ביוב וניקוז (ת\"י 1205)",
    description: "ליקויי צנרת נפוצים — נזילות, סתימות, לחץ מים נמוך וריח ביוב — ואיך מאתרים אותם בבדק בית לפי תקני ת\"י 1205.",
    type: "article",
    locale: "he_IL",
    url: "https://legalbedek.co.il/articles/tikaney-instalatzia-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

const PLUMBING_STANDARDS: { code: string; subject: string; defects: string }[] = [
  {
    code: "ת\"י 1205.1",
    subject: "מערכת הספקת מים חמים וקרים",
    defects: "לחץ מים נמוך, ספיקה לא מספקת, חיבורים לא תקינים, בידוד לקוי של צנרת מים חמים ובחירת חומרים לא מתאימה.",
  },
  {
    code: "ת\"י 1205.2",
    subject: "מערכות נקזים",
    defects: "ניקוז איטי, מים עומדים, שיפוע לקוי של רצפות אזורים רטובים והתנקזות לא תקינה של מרפסות וגגות.",
  },
  {
    code: "ת\"י 1205.3",
    subject: "כלים סניטריים",
    defects: "התקנה לקויה של אסלות, כיורים ואמבטיות, אטימה כושלת, כלים רופפים ואי-התאמה למפרט.",
  },
  {
    code: "ת\"י 1205.4",
    subject: "מערכות הביוב והתיעול",
    defects: "ריח ביוב, סתימות חוזרות, חיבורים פגומים, שיפוע צנרת ביוב לא תקין והיעדר אוורור למערכת.",
  },
]

const COMMON_DEFECTS: { title: string; text: string; href?: string }[] = [
  {
    title: "נזילות ורטיבות נסתרת",
    text: "נזילה בצנרת מים או ביוב היא מהליקויים היקרים ביותר — היא מתגלה לרוב רק כשהרטיבות כבר חדרה לקירות ולריצוף. נזילות נכללות במפורש בכשל צנרת לפי חוק המכר.",
    href: "/likuyey-bniya/retivut",
  },
  {
    title: "ניקוז לקוי ומים עומדים",
    text: "שיפוע רצפה לא תקין באזורים רטובים ובמרפסות גורם למים עומדים, להחלקה ולחדירת רטיבות. נבדק לפי ת\"י 1205.2.",
    href: "/likuyey-bniya/nikuz",
  },
  {
    title: "ריח ביוב וסתימות",
    text: "ריח ביוב חוזר או סתימות מעידים על שיפוע צנרת לקוי, חיבור פגום או היעדר אוורור — ליקוי במערכת הביוב לפי ת\"י 1205.4.",
    href: "/likuyey-bniya/instalatzia",
  },
  {
    title: "לחץ מים נמוך",
    text: "לחץ או ספיקה נמוכים בברזים ובמקלחת מעידים על קוטר צנרת לא מתאים או חיבור לקוי, בניגוד לדרישות ת\"י 1205.1.",
    href: "/likuyey-bniya/instalatzia",
  },
]

export default function TikaneyInstalatziaArticle() {
  return (
    <ArticleLayout
      title="תקני אינסטלציה בבדק בית: מים, ביוב וניקוז (ת&quot;י 1205)"
      subtitle="ליקויי צנרת הם מהנפוצים והיקרים ביותר — ולרוב נסתרים מהעין. כך עובדים תקני ת&quot;י 1205, ואיך מאתרים נזילות, סתימות וניקוז לקוי בבדק בית מקצועי."
      ctaTitle="חוששים מליקוי אינסטלציה?"
      ctaText="נזילה נסתרת מתגלה לרוב מאוחר מדי. בדק בית מקצועי מאתר ליקויי צנרת בזמן — לפני שהם הופכים לנזק יקר."
    >
      <ArticleLead>
        מערכות האינסטלציה הן מהרכיבים הקריטיים בדירה — וגם מהליקויים הנפוצים ביותר. תקני <strong>ת"י 1205</strong>{" "}
        מגדירים את הדרישות למערכות המים, הניקוז, הכלים הסניטריים והביוב. מאחר שרוב הצנרת מוסתרת בקירות וברצפה,
        ליקוי שלא אותר בזמן עלול להתגלות רק כשהנזק כבר נרחב ויקר לתיקון.
      </ArticleLead>

      <ArticleH2>חמשת חלקי תקן האינסטלציה ת"י 1205</ArticleH2>
      <p>לכל תת-מערכת בדירה יש תקן ייעודי. אלו החלקים המרכזיים והליקויים האופייניים לכל אחד:</p>
      <div className="space-y-4 my-4">
        {PLUMBING_STANDARDS.map((s) => (
          <div key={s.code} className="rounded-xl ring-1 ring-slate-200 p-5 bg-white">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-sm font-bold text-blue-700">{s.code}</span>
              <span className="font-bold text-gray-900">{s.subject}</span>
            </div>
            <p className="mt-2 text-gray-700 text-base">
              <strong className="text-gray-900">ליקויים אופייניים:</strong> {s.defects}
            </p>
          </div>
        ))}
      </div>
      <p>
        בנוסף, דוד השמש והמערכת הסולארית נבדקים לפי <strong>ת"י 579</strong> — בדיקת מערכות סולאריות, הכוללת את
        תקינות הדוד, החיבורים והקולטים.
      </p>

      <ArticleH2>ליקויי האינסטלציה שאנשים מחפשים — לפי הבעיה</ArticleH2>
      <p>רבים מחפשים מידע לפי הליקוי שהם חווים בדירה. אלו הליקויים הנפוצים ביותר וההסבר לכל אחד:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        {COMMON_DEFECTS.map((d) => (
          <div key={d.title} className="rounded-xl ring-1 ring-slate-200 p-5 bg-slate-50">
            <h3 className="font-bold text-gray-900 mb-1.5">
              {d.href ? (
                <Link href={d.href} className="text-blue-700 hover:text-blue-900 hover:underline">
                  {d.title}
                </Link>
              ) : (
                d.title
              )}
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{d.text}</p>
          </div>
        ))}
      </div>

      <ArticleH2>אחריות הקבלן לליקויי צנרת — 4 שנים</ArticleH2>
      <p>
        לפי התוספת ל<Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">חוק המכר (דירות)</Link>,
        כשל במערכות הצנרת — מים, הסקה, מרזבים, דלוחין וביוב, <strong>לרבות נזילות</strong> — נמצא באחריות הקבלן
        למשך <strong>4 שנים</strong> ממועד מסירת הדירה. תיעוד הליקוי בדוח בדק בית בתוך התקופה הזו הוא המפתח לחייב
        את הקבלן בתיקון על חשבונו.
      </p>

      <ArticleH2>איך בודקים אינסטלציה בבדק בית?</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>בדיקת לחץ וספיקה</strong> בברזים ובנקודות המים, לאיתור חריגות מהתקן.</li>
        <li><strong>מצלמת אנדוסקופ</strong> לבדיקת צנרת ניקוז וביוב נסתרת ולאיתור סתימות וחיבורים פגומים.</li>
        <li><strong>מד לחות (פרוטימטר) ומצלמה תרמית</strong> לאיתור נזילות ורטיבות נסתרת בקירות וברצפה.</li>
        <li><strong>בדיקת שיפועים</strong> ברצפות אזורים רטובים ובמרפסות, לוודא התנקזות תקינה.</li>
      </ul>
      <p>
        רוצים להעמיק? עברו למדריך על <Link href="/likuyey-bniya/instalatzia" className="text-blue-700 hover:underline font-medium">ליקויי אינסטלציה</Link>,
        על <Link href="/likuyey-bniya/retivut" className="text-blue-700 hover:underline font-medium">ליקויי רטיבות</Link>,
        או ל<Link href="/likuyey-bniya" className="text-blue-700 hover:underline font-medium">מדריך ליקויי הבנייה המלא</Link>.
      </p>
    </ArticleLayout>
  )
}
