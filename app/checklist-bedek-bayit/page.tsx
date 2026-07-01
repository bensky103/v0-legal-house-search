import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PrintButton } from "@/components/print-button"
import { SiteIndex } from "@/components/site-index"

const URL = "https://legalbedek.co.il/checklist-bedek-bayit"

export const metadata: Metadata = {
  title: "צ׳קליסט בדק בית להורדה - רשימת בדיקה עצמית לפני מסירה | בדק בית Legal",
  description:
    "צ׳קליסט בדק בית להורדה והדפסה: רשימת בדיקה עצמית מלאה לרוכשי דירה לפני מסירה מהקבלן — רטיבות, ריצוף, חשמל, אינסטלציה, ממ״ד ועוד. כלי עזר חינמי, ולצד בדיקה מקצועית של מומחה.",
  keywords: [
    "צ׳קליסט בדק בית",
    "רשימת בדיקה בדק בית",
    "בדיקה עצמית דירה",
    "מה לבדוק לפני מסירת דירה",
    "צ׳קליסט מסירת דירה",
    "בדק בית להורדה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: URL },
  openGraph: {
    title: "צ׳קליסט בדק בית להורדה - רשימת בדיקה עצמית לפני מסירה",
    description:
      "רשימת בדיקה עצמית מלאה לרוכשי דירה לפני מסירה מהקבלן. כלי עזר חינמי להורדה והדפסה — ולצד בדיקה מקצועית של מומחה.",
    type: "article",
    locale: "he_IL",
    url: URL,
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

// Self-inspection checklist grouped by area. A free lead-magnet resource that mirrors
// the "self-inspection checklist" competitors publish, grounded in the defect library.
// It is explicitly framed as a complement to — not a replacement for — a professional inspection.
const CHECKLIST: { area: string; items: string[] }[] = [
  {
    area: "מסמכים והכנה",
    items: [
      "המפרט הטכני והחוזה בהישג יד להשוואה מול הביצוע בפועל",
      "היתר הבנייה, תוכניות הדירה וטופס 4 (תעודת גמר)",
      "אישורי בדיקות מערכות מהקבלן (חשמל, גז, מים, אינסטלציה)",
      "מונה מים ומונה חשמל — קריאה ראשונית ורישום",
    ],
  },
  {
    area: "רטיבות, איטום ונזילות",
    items: [
      "כתמי רטיבות, קילופים או עובש בקירות ובתקרות",
      "איטום סביב חלונות, דלתות מרפסת ופתחים",
      "רצפת חדרי רחצה ומקלחון — שיפוע לניקוז וללא מים עומדים",
      "ארון מטבח תחתון ותחת כיורים — סימני רטיבות או נזילה",
      "מרפסות וגגות — איטום, שיפועים וניקוז מי גשם",
    ],
  },
  {
    area: "ריצוף וחיפויים",
    items: [
      "מרצפות שקועות, בולטות או לא מיושרות (בדיקה בהליכה ובמבט)",
      "מרצפות חלולות — הקשה קלה לאיתור צליל חלול (ריצוף מתנפח)",
      "רוחב מישקים אחיד ומילוי רובה מלא ונקי",
      "אריחי קרמיקה בקירות — ישרים, ללא סדקים ושבבים",
      "פינות וסיומות — פרופילים וגמר נקי",
    ],
  },
  {
    area: "קירות, תקרות וטיח",
    items: [
      "סדקים בקירות ובתקרות — במיוחד בפינות ומעל פתחים",
      "מישוריות ואנכיות קירות (סטייה נראית לעין)",
      "גימור צבע אחיד, ללא כתמים, גלים או סימני מריחה",
      "תקרות גבס — ללא שקיעה, סדקים בחיבורים או פתחי גישה חסרים",
    ],
  },
  {
    area: "דלתות, חלונות ואלומיניום",
    items: [
      "דלתות נפתחות ונסגרות חופשי, ללא חיכוך ובמנעול תקין",
      "חלונות אלומיניום — תזוזה חלקה במסילה, אטימות ורשתות",
      "זכוכית ללא סדקים; חלונות בידודיים ללא אדים פנימיים",
      "איטום גומיות (ניפוצים) סביב כנפי החלון",
      "דלת כניסה ביטחונית — מנעול רב-בריח, עינית ומשקוף ישר",
    ],
  },
  {
    area: "חשמל ותקשורת",
    items: [
      "לוח חשמל — ממסר פחת (מפסק בטיחות) ומאמ״תים מסומנים",
      "בדיקת ממסר הפחת בלחיצה על כפתור הבדיקה",
      "כל נקודות החשמל, המפסקים והשקעים פועלים ויציבים",
      "נקודות תקשורת, טלוויזיה ואינטרנט לפי התוכנית",
      "גופי תאורה, מפוחים ופעמון — פעולה תקינה",
    ],
  },
  {
    area: "אינסטלציה ומים",
    items: [
      "לחץ מים תקין בכל הברזים והמקלחות",
      "ניקוז מהיר בכיורים, באמבטיה ובמקלחון — ללא סתימות",
      "ברזים וסיפונים ללא טפטוף או נזילה",
      "אסלות — הדחה תקינה, קיבוע יציב ואיטום לרצפה",
      "דוד שמש / חשמל — חיבורים תקינים וללא נזילה",
    ],
  },
  {
    area: "מטבח וכלים סניטריים",
    items: [
      "ארונות מטבח — יישור דלתות ומגירות, צירים ומסילות תקינים",
      "משטח עבודה — ללא סדקים, איטום סביב הכיור",
      "חיבורי מים וניקוז מתחת לכיור — יבשים ותקינים",
      "מקום ותשתית למדיח, למקרר ולתנור לפי התכנון",
      "כלים סניטריים — מותקנים ישר, יציבים ואטומים",
    ],
  },
  {
    area: "ממ״ד (מרחב מוגן)",
    items: [
      "דלת הדף — נפתחת ונסגרת חופשי ונאטמת כראוי",
      "חלון הדף — תקין, נעילה ואטימה מלאה",
      "שסתום אוורור (פילטר) מותקן ותקין",
      "פתחי חשמל ותקשורת אטומים לפי דרישות פיקוד העורף",
    ],
  },
  {
    area: "חוץ, מרפסות ובטיחות",
    items: [
      "מעקות מרפסת וחדר מדרגות — גובה תקני וקיבוע יציב",
      "מרזבים וקולטני גג — פתוחים ומנקזים מי גשם",
      "חיפוי אבן חיצוני — ללא אבנים רופפות או מישקים חסרים",
      "ריצוף חוץ ואבן משתלבת — ללא שקיעות ובשיפוע ניקוז",
      "תריסים — גלילה חלקה, שלבים תקינים ומנגנון פעולה",
    ],
  },
]

export default function ChecklistPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: "https://legalbedek.co.il" },
      { "@type": "ListItem", position: 2, name: "צ׳קליסט בדק בית", item: URL },
    ],
  }

  const itemCount = CHECKLIST.reduce((sum, c) => sum + c.items.length, 0)

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "צ׳קליסט בדיקה עצמית לדירה לפני מסירה",
    description:
      "רשימת בדיקה עצמית לרוכשי דירה — מה לבדוק בדירה לפני מסירה מהקבלן, מסודר לפי אזורי הנכס.",
    step: CHECKLIST.map((section) => ({
      "@type": "HowToSection",
      name: section.area,
      itemListElement: section.items.map((it) => ({
        "@type": "HowToStep",
        text: it,
      })),
    })),
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Print styling — hide chrome, tidy the list for paper / PDF */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff; }
          .checklist-card { break-inside: avoid; box-shadow: none !important; border: 1px solid #e2e8f0; }
          .checklist-section { break-inside: avoid; }
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
              <span className="text-gray-700 font-medium" aria-current="page">צ׳קליסט בדק בית</span>
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Intro */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-semibold mb-4 no-print">
              כלי עזר חינמי
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
              צ׳קליסט בדק בית — רשימת בדיקה עצמית לפני מסירה
            </h1>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
              לפניכם צ׳קליסט מסודר של {itemCount} נקודות בדיקה, לפי אזורי הנכס, שיעזור לכם לעבור על הדירה בעצמכם לפני
              מסירה מהקבלן או לפני רכישה. הדפיסו אותו, קחו אותו לדירה וסמנו כל סעיף. זהו כלי עזר ראשוני שמסייע לכם לזהות
              ליקויים בולטים ולהגיע מוכנים.
            </p>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 md:p-5 text-sm md:text-base text-amber-900 leading-relaxed">
              <strong>חשוב לדעת:</strong> בדיקה עצמית אינה מחליפה בדק בית מקצועי. ליקויים רבים — רטיבות נסתרת, כשלי
              איטום, בעיות קונסטרוקציה וחריגות מהתקן — מתגלים רק בעזרת ציוד הנדסי וניסיון. השתמשו ברשימה כהכנה, ולצידה
              הזמינו בדיקה של מומחה מוסמך שתפיק דוח קביל מול הקבלן.
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <PrintButton />
              <a
                href="https://wa.me/972506277858"
                target="_blank"
                rel="noopener noreferrer"
                className="no-print inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"
              >
                לתיאום בדיקה מקצועית ב-WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="pb-10 md:pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CHECKLIST.map((section) => (
                <div
                  key={section.area}
                  className="checklist-card checklist-section bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm p-6"
                >
                  <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                    {section.area}
                  </h2>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm md:text-base text-slate-700 leading-relaxed">
                        <span
                          className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-slate-300"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-l from-blue-700 to-blue-900 text-white no-print">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">רוצים שהבדיקה תיעשה כמו שצריך?</h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              הצ׳קליסט הוא התחלה טובה — אבל דוח קביל שמחייב את הקבלן לתקן דורש מומחה וציוד הנדסי. צרו קשר לתיאום בדק בית
              מקצועי בכל הארץ, וקבלו הצעת מחיר ללא התחייבות.
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
                { label: "דוח בדק בית לדוגמה", href: "/doch-ledugma" },
                { label: "בדק בית לפני מסירה", href: "/services/bedek-bayit-lifnei-mesira" },
                { label: "פרוטוקול מסירה - מדריך", href: "/articles/protokol-mesira" },
                { label: "כמה עולה בדק בית", href: "/mehir-bedek-bayit" },
                { label: "מאגר ליקויי הבנייה", href: "/likuyey-bniya" },
                { label: "חוק המכר - בדק ואחריות", href: "/articles/chok-hamkar-dirot" },
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
