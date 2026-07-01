import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PrintButton } from "@/components/print-button"
import { SiteIndex } from "@/components/site-index"

const URL = "https://legalbedek.co.il/doch-ledugma"

export const metadata: Metadata = {
  title: "דוח בדק בית לדוגמה - חוות דעת מומחה אמיתית | בדק בית Legal",
  description:
    "דוח בדק בית לדוגמה: חוות דעת מומחה אמיתית מדירה חדשה (פרטים אישיים הוסתרו). ראו כיצד נראה דוח מקצועי — ליקויים, תמונות, ציטוט תקנים ישראליים והמלצות לתיקון מול הקבלן.",
  keywords: [
    "דוח בדק בית לדוגמה",
    "חוות דעת מומחה לדוגמה",
    "דוח בדק בית",
    "דוגמה לדוח בדק בית",
    "חוות דעת בדק בית",
    "דוח ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: URL },
  openGraph: {
    title: "דוח בדק בית לדוגמה - חוות דעת מומחה אמיתית",
    description:
      "ראו כיצד נראה דוח בדק בית מקצועי: ליקויים, ציטוט תקנים ישראליים והמלצות לתיקון. דוגמה אמיתית מדירה חדשה, פרטים אישיים הוסתרו.",
    type: "article",
    locale: "he_IL",
    url: URL,
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

// A real expert-opinion report, anonymized (client name, exact address and identifiers
// removed) and reproduced as an SEO-indexable page. Standard citations are kept verbatim.
type Finding = {
  area: string
  defect: string
  standard: string
  fix: string
  conclusion: string
}

const FINDINGS: Finding[] = [
  {
    area: "דלת כניסה ראשית",
    defect: "צבע על אטם הדלת וגומיית אטימה קרועה.",
    standard: "ת״י 5044 חלק 2 (2003), ת״י 1161 (2001)",
    fix: "החלפת גומיית האטימה של הדלת.",
    conclusion: "הבדיקה אינה תקינה — הדלת אינה עומדת בדרישות התקן; יש להחליף את הגומייה.",
  },
  {
    area: "ארון חשמל וארון תקשורת",
    defect: "מאמ״תים גלויים ובלתי מסומנים, חיבורים חשופים וחסרה דלת לארון החשמל — ליקוי בטיחותי.",
    standard: "חוק החשמל, ת״י 145",
    fix: "הרכבת דלת ומגן לארון החשמל, סימון המאמ״תים, השלמת אבזור ארון התקשורת.",
    conclusion: "הבדיקה אינה תקינה — ליקוי בטיחות בניגוד לחוק החשמל; יש להשלים גימור ובטיחות הלוחות.",
  },
  {
    area: "פרוזדור בכניסה לדירה",
    defect: "תיקון טיח לא מקצועי בתקרה ופגיעות בטיח, ללא גמר צבע אחיד.",
    standard: "ת״י 1920 חלק 2 (2002), ת״י 1922 חלק 1 (2000)",
    fix: "תיקון מקצועי של התקרה והכניסה וצביעה בגוון אחיד.",
    conclusion: "הבדיקה אינה תקינה — מראה הטיח שונה מהמוזמן ובוצע שלא במקצועיות.",
  },
  {
    area: "מטבח — נגרות",
    defect:
      "דלתות ומגירות לא מכוונות, מדף מתחת לכיור חוסם גישה לקופסת ביקורת אינסטלציה, שאריות צבע ולכלוך.",
    standard: "ת״י 1205 חלק 2 (2014), הספר הכחול פרק 6, ת״י 5555 (2008)",
    fix: "כיוון דלתות ומגירות, שינוי המדף ליצירת גישה לקופסת הביקורת, ניקוי הנגרות.",
    conclusion: "הבדיקה אינה תקינה — נגרות המטבח בניגוד להוראות הספר הכחול וחוסר גישה למחסום.",
  },
  {
    area: "מרפסת שירות — ניקוז",
    defect: "מחסום רצפה ללא רשת/מכסה.",
    standard: "ת״י 1205 חלק 3 (2014)",
    fix: "התקנת רשת/מכסה למחסום הרצפה.",
    conclusion: "הבדיקה אינה תקינה — מחסום רצפה ללא רשת בניגוד לתקן.",
  },
  {
    area: "מסתור כביסה",
    defect: "מסתור הכביסה ללא תווית אזהרה (ליקוי החוזר בכל המסתורים).",
    standard: "ת״י 5100 (2008), גיליון תיקון 08.2023",
    fix: "התקנת תווית אזהרה במקום בולט לעין.",
    conclusion: "הבדיקה אינה תקינה — היעדר תווית אזהרה בניגוד לתקן.",
  },
  {
    area: "ויטרינה — חדר מגורים",
    defect: "חסרות ידיות, ברגי קיבוע מגנטיים (מחלידים), וחסרים פקקי ניקוז בחורי המסילה.",
    standard: "ת״י 4001 חלק 1 (1999), ת״י 1068 חלק 1 (1999)",
    fix: "התקנת פקקי ניקוז, החלפת הברגים לפלב״ם, השלמת ידיות וניקוי.",
    conclusion: "הבדיקה אינה תקינה — עבודות האלומיניום אינן תואמות את התקן.",
  },
  {
    area: "מרפסת שמש — ריצוף",
    defect: "שיפוע לא תקני כלפי פתח הניקוז — נמדד 0.17%, מתחת ל־1% הנדרש.",
    standard: "ת״י 1555.3 (2012)",
    fix: "פירוק הריצוף וריצוף מחדש בשיפוע של לפחות 1% לכיוון הנקז.",
    conclusion: "הבדיקה אינה תקינה — שיפוע הניקוז אינו תואם את דרישות התקן.",
  },
  {
    area: "דלת ממ״ד",
    defect: "מנגנון הנעילה אינו מפולס.",
    standard: "ת״י 4422 חלק 1 (2015)",
    fix: "כיוון ופילוס פרטי הפרזול בדלת הממ״ד.",
    conclusion: "הבדיקה אינה תקינה — פרזול דלת הממ״ד אינו עומד בדרישות התקן.",
  },
  {
    area: "פרוזדור סמוך לממ״ד",
    defect: "טיח וצבע עם סימני רטיבות והתנפחות — עלייה קפילרית של רטיבות ממצע הריצוף.",
    standard: "ת״י 1920 חלק 2 (2002), ת״י 2752 חלק 1 (2013)",
    fix: "שיוף ותיקון הטיח וצביעה מחדש; אם ההתנפחות חוזרת — איתור מקור הרטיבות ובדיקת מעבדה.",
    conclusion: "הבדיקה אינה תקינה — סימני רטיבות פעילה בבסיס הקיר.",
  },
  {
    area: "חדר רחצה הורים — חיפוי",
    defect: "חיפוי הקיר סוטה מהמישוריות ומהזווית הישרה, והפרשי גובה בין אריחים חורגים מהמותר.",
    standard: "ת״י 1555 חלק 2 (2014)",
    fix: "פירוק האריחים החורגים וחיפוי מחדש בהתאם לתקן.",
    conclusion: "הבדיקה אינה תקינה — חיפוי הקיר בסטייה מהמישוריות ומהזווית הישרה.",
  },
  {
    area: "חדר שינה — קיר",
    defect: "חשד לרטיבות הפוגעת בטיח ובצבע, עם אינדיקציה חיובית במד לחות ובמצלמה תרמית.",
    standard: "ת״י 1920 חלק 2 (2002), ת״י 2752 חלק 1 (2013)",
    fix: "איתור מקור הרטיבות במאתר נזילות, טיפול במקור, ותיקוני טיח וצבע.",
    conclusion: "הבדיקה אינה תקינה — סימני רטיבות ואינדיקציה מכשירנית לרטיבות בקיר.",
  },
]

// Bedek / warranty periods per חוק המכר — non-identifying, valuable reference content.
const WARRANTY_PERIODS: { item: string; period: string }[] = [
  { item: "ליקויי מסגרות, נגרות, אלומיניום ופלסטיק", period: "שנתיים" },
  { item: "ליקויי ריצוף וחיפוי פנים (לרבות שקיעה ושחיקה)", period: "שנתיים" },
  { item: "כשל בתפקוד ובעמידות של מכונות ודודים", period: "3 שנים" },
  { item: "כשל במרכיבי הבידוד הטרמי", period: "3 שנים" },
  { item: "נזילות במערכת אינסטלציה, מים, הסקה, מרזבים, דלוחין וביוב", period: "4 שנים" },
  { item: "סדקים ברוחב גדול מ־1.5 מ״מ ברכיבים לא נושאים", period: "5 שנים" },
  { item: "התנתקות, התקלפות או התפוררות של חיפוי חוץ", period: "7 שנים" },
  { item: "כל אי־התאמה אחרת שאינה יסודית", period: "שנה" },
]

export default function SampleReportPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: "https://legalbedek.co.il" },
      { "@type": "ListItem", position: 2, name: "דוח בדק בית לדוגמה", item: URL },
    ],
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "דוח בדק בית לדוגמה - חוות דעת מומחה אמיתית",
    description:
      "דוגמה אמיתית לדוח בדק בית וחוות דעת מומחה מדירה חדשה, לאחר הסתרת פרטים אישיים.",
    inLanguage: "he",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Person", name: "יגאל בנסקי", "@id": "https://legalbedek.co.il/#yigal-bensky" },
    publisher: { "@id": "https://legalbedek.co.il/#organization" },
    mainEntityOfPage: URL,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff; }
          .finding-card { break-inside: avoid; box-shadow: none !important; border: 1px solid #e2e8f0; }
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-sm border-b no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 space-x-reverse">
              <Image
                src="/logo.webp"
                alt="בדק בית Legal - מומחה לאיתור ליקויי בנייה"
                width={64}
                height={64}
                className="object-contain w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <span className="text-lg md:text-xl font-bold text-gray-900">בדק בית Legal</span>
                <p className="text-xs md:text-sm text-slate-600">מומחה לאיתור ליקויי בנייה</p>
              </div>
            </Link>
            <Link href="/" className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium">
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100 no-print">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            <li className="flex items-center gap-1">
              <Link href="/" className="text-blue-600 hover:underline">דף הבית</Link>
              <span className="text-gray-400 px-1">{"›"}</span>
            </li>
            <li>
              <span className="text-gray-700 font-medium" aria-current="page">דוח בדק בית לדוגמה</span>
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Intro */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-semibold mb-4 no-print">
              דוגמה אמיתית
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
              דוח בדק בית לדוגמה — חוות דעת מומחה
            </h1>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
              לפניכם דוגמה אמיתית לחוות דעת מומחה, שנערכה לאחר בדק בית לדירה חדשה מקבלן בראש העין. כך תוכלו לראות
              בדיוק מה מקבלים: תיעוד שיטתי של כל ליקוי, ציטוט התקן הישראלי הרלוונטי, הסבר מה נדרש לתקן ומסקנה ברורה —
              מסמך הקביל כראיה מול הקבלן ובבית משפט.
            </p>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 md:p-5 text-sm md:text-base text-amber-900 leading-relaxed">
              <strong>הבהרה:</strong> זהו דוח אמיתי שהוסתרו בו כל פרטיו האישיים של הלקוח — שם, כתובת מדויקת ומזהי נכס —
              מטעמי פרטיות. הליקויים, התקנים והמבנה המקצועי מוצגים כפי שהם. הדוח המלא כולל עשרות תמונות מתועדות ומסומנות
              של כל ליקוי.
            </div>
          </div>
        </section>

        {/* Report meta */}
        <section className="pb-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-slate-900 text-white p-5 md:p-6">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-400">פרטי הבדיקה</span>
                <h2 className="mt-1.5 text-xl md:text-2xl font-bold">חוות דעת מומחה — בדק בית לדירה חדשה</h2>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-slate-200">
                {[
                  { k: "סוג הנכס", v: "דירה בבניין מגורים חדש (בית משותף)" },
                  { k: "מיקום", v: "ראש העין" },
                  { k: "חדרים שנבדקו", v: "סלון, מטבח, חדרי שינה, חדרי רחצה, מרפסות, ממ״ד" },
                  { k: "מצב הנכס", v: "לאחר טופס 4, לפני אכלוס" },
                  { k: "שיטת הבדיקה", v: "בדיקה בלתי הרסנית — מצלמה תרמית, מד לחות, פלס דיגיטלי" },
                  { k: "עורכי הדוח", v: "שני מומחי בדק בית מוסמכים (איגוד המהנדסים ומשרד העבודה)" },
                ].map((row) => (
                  <div key={row.k} className="p-4 md:p-5">
                    <dt className="text-xs font-bold text-slate-500 mb-1">{row.k}</dt>
                    <dd className="text-sm md:text-base font-semibold text-slate-900 leading-relaxed">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 no-print">
              <PrintButton label="הורדת הדוח (שמירה כ-PDF)" />
              <a
                href="https://wa.me/972506277858"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"
              >
                לתיאום בדק בית לנכס שלכם
              </a>
            </div>
          </div>
        </section>

        {/* Findings */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">ממצאי הבדיקה — דוגמאות</h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
              להלן מבחר מייצג מתוך הליקויים שאותרו בדירה, בפורמט שבו מתועד כל ליקוי בדוח המלא. הדוח המקורי כלל עשרות
              ממצאים, כל אחד מגובה בתמונה מסומנת ובהפניה לתקן.
            </p>
            <div className="space-y-5">
              {FINDINGS.map((f, i) => (
                <div key={f.area + i} className="finding-card rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between gap-3 bg-slate-50 border-b border-slate-200 px-5 py-3">
                    <h3 className="text-base md:text-lg font-bold text-slate-900">{f.area}</h3>
                    <span className="font-mono text-xs font-bold tracking-widest text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <dl className="divide-y divide-slate-100">
                    <div className="px-5 py-3 sm:flex sm:gap-4">
                      <dt className="sm:w-32 shrink-0 text-xs font-bold text-slate-500 mb-1 sm:mb-0 sm:pt-0.5">תיאור הליקוי</dt>
                      <dd className="text-sm md:text-base text-slate-800 leading-relaxed">{f.defect}</dd>
                    </div>
                    <div className="px-5 py-3 sm:flex sm:gap-4">
                      <dt className="sm:w-32 shrink-0 text-xs font-bold text-slate-500 mb-1 sm:mb-0 sm:pt-0.5">הפנייה לתקן</dt>
                      <dd className="text-sm md:text-base font-semibold text-blue-700 leading-relaxed">{f.standard}</dd>
                    </div>
                    <div className="px-5 py-3 sm:flex sm:gap-4">
                      <dt className="sm:w-32 shrink-0 text-xs font-bold text-slate-500 mb-1 sm:mb-0 sm:pt-0.5">נדרש לתקן</dt>
                      <dd className="text-sm md:text-base text-slate-800 leading-relaxed">{f.fix}</dd>
                    </div>
                    <div className="px-5 py-3 sm:flex sm:gap-4">
                      <dt className="sm:w-32 shrink-0 text-xs font-bold text-slate-500 mb-1 sm:mb-0 sm:pt-0.5">מסקנה</dt>
                      <dd className="text-sm md:text-base text-slate-800 leading-relaxed font-medium">{f.conclusion}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional note */}
        <section className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">הבהרה מקצועית</h2>
            <p className="text-base text-slate-700 leading-relaxed mb-3">
              הבדיקה מבוצעת באמצעים בלתי הרסניים — מצלמה תרמית ומד לחות — והמסקנות מבוססות על אינדיקציות מקצועיות
              מקובלות. מסקנות אלו אינן שוללות גורמים נוספים שניתן לאתר רק לאחר פעולות הרס. במקרים המתאימים מומלץ
              להיעזר במאתר נזילות מומחה ובשירותי מעבדה של מכון התקנים הישראלי לאבחון מדויק.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              אומדן עלות התיקונים אינו נכלל בדוח הליקויים, וניתן בנפרד לפי דרישה, על פי מחירון מקובל.
            </p>
          </div>
        </section>

        {/* Warranty periods table — reference content */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">תקופות הבדק והאחריות לפי חוק המכר</h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
              לכל סוג ליקוי תקופת בדק משלו, שבמהלכה האחריות לתיקון מוטלת על הקבלן. איתור הליקויים ותיעודם בדוח בזמן —
              בעוד התקופות בתוקף — הוא מה שמאפשר לממש את זכויותיכם.
            </p>
            <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 shadow-sm">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-sm md:text-base font-bold">סוג הליקוי</th>
                    <th className="px-4 py-3 text-sm md:text-base font-bold whitespace-nowrap">תקופת בדק</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {WARRANTY_PERIODS.map((row) => (
                    <tr key={row.item} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm md:text-base text-slate-800 leading-relaxed">{row.item}</td>
                      <td className="px-4 py-3 text-sm md:text-base font-bold text-blue-700 whitespace-nowrap">{row.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              לאחר תקופת הבדק מתחילה תקופת אחריות נוספת של 3 שנים, שבה נטל ההוכחה עובר לרוכש.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-l from-blue-700 to-blue-900 text-white no-print">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">רוצים דוח כזה לנכס שלכם?</h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              כל בדיקה מסתכמת בדוח מפורט, מצולם וקביל — שמחייב את הקבלן לתקן. צרו קשר לתיאום בדק בית מקצועי בכל הארץ,
              וקבלו הצעת מחיר ללא התחייבות.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+972506277858"
                className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-colors"
              >
                חייגו עכשיו: 050-6277858
              </a>
              <a
                href="https://wa.me/972506277858"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-lg font-bold transition-all"
              >
                שליחת הודעת WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-10 bg-gray-50 no-print">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">עמודים נוספים שיעזרו לכם</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "דוח בדק בית מפורט לדוגמה (67 ליקויים)", href: "/doch-ledugma-mefurat" },
                { label: "צ׳קליסט בדק בית להורדה", href: "/checklist-bedek-bayit" },
                { label: "בדק בית לפני מסירה", href: "/services/bedek-bayit-lifnei-mesira" },
                { label: "חוות דעת מומחה", href: "/services/chavat-daat-mumche" },
                { label: "כמה עולה בדק בית", href: "/mehir-bedek-bayit" },
                { label: "מאגר ליקויי הבנייה", href: "/likuyey-bniya" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="no-print">
        <SiteIndex />
      </div>

      <footer className="bg-gray-900 text-white py-8 no-print">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה וחוות דעת נגדית</p>
          <p className="text-gray-400 text-sm">📞 050-6277858 | שירות בכל הארץ</p>
          <p className="text-gray-500 text-xs mt-4">© 2020 בדק בית Legal - כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}
