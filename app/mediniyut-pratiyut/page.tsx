import type { Metadata } from "next"
import Link from "next/link"
import { SiteIndex } from "@/components/site-index"

const URL = "https://www.legalbedek.co.il/mediniyut-pratiyut"

export const metadata: Metadata = {
  title: "מדיניות פרטיות | בדק בית Legal",
  description:
    "מדיניות הפרטיות של בדק בית Legal — איזה מידע נאסף באתר, כיצד נעשה בו שימוש, שימוש בעוגיות וכלי מדידה, וזכויות המשתמש לפי חוק הגנת הפרטיות התשמ״א-1981.",
  alternates: { canonical: URL },
  openGraph: {
    title: "מדיניות פרטיות | בדק בית Legal",
    description:
      "מדיניות הפרטיות של בדק בית Legal — מידע שנאסף, שימוש בעוגיות וכלי מדידה, וזכויות המשתמש לפי חוק הגנת הפרטיות.",
    type: "website",
    locale: "he_IL",
    url: URL,
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

// Last review date, kept in a single place so the page and any future audit share one source.
const LAST_UPDATED = "16 ביולי 2026"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir="rtl">
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">מדיניות פרטיות</h1>
          <p className="text-blue-200 text-sm md:text-base">בדק בית Legal — ליגל בדק בית</p>
        </div>
      </header>

      <article className="container mx-auto px-4 py-10 md:py-14 max-w-3xl text-gray-800 leading-relaxed space-y-8">
        <p className="text-sm text-gray-500">עודכן לאחרונה: {LAST_UPDATED}</p>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">כללי</h2>
          <p>
            בדק בית Legal (להלן: &quot;החברה&quot;, &quot;אנחנו&quot;) מכבדת את פרטיות המשתמשים באתר ופועלת בהתאם
            להוראות חוק הגנת הפרטיות, התשמ״א-1981, והתקנות מכוחו. מדיניות זו מסבירה איזה מידע נאסף בעת השימוש באתר,
            למה הוא משמש, עם מי הוא עשוי להיות משותף, וכן את זכויותיך ביחס למידע. השימוש באתר מהווה הסכמה לתנאי
            מדיניות זו.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">איזה מידע נאסף</h2>
          <p>באתר נאספים שני סוגי מידע:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>
              <span className="font-semibold">מידע שנמסר ביוזמתך:</span> כאשר אתה יוצר עמנו קשר בטלפון או בהודעה,
              ייתכן שתמסור פרטים כגון שם, מספר טלפון וכתובת הנכס לצורך מתן השירות. מסירת המידע נעשית מרצונך החופשי,
              ואינך חייב על פי דין למסור אותו — אך ללא פרטים מסוימים ייתכן שלא נוכל לספק את השירות המבוקש.
            </li>
            <li>
              <span className="font-semibold">מידע טכני הנאסף אוטומטית:</span> בעת הגלישה באתר נאסף מידע לא-מזהה על
              דפוסי השימוש, כגון כתובת IP, סוג הדפדפן והמכשיר, הדפים בהם ביקרת ומשך השהייה בהם. מידע זה נאסף באמצעות
              כלי מדידה של צד שלישי.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">עוגיות (Cookies) וכלי מדידה</h2>
          <p>
            האתר עושה שימוש בעוגיות ובכלי מדידה של גוגל — Google Tag Manager ו-Google Ads — לצורך ניתוח תנועת
            הגולשים, שיפור חוויית המשתמש ומדידת יעילות הפרסום. כלים אלה עשויים לשמור עוגיות בדפדפן שלך ולאסוף מידע
            בהתאם למדיניות הפרטיות של גוגל. באפשרותך לחסום או למחוק עוגיות דרך הגדרות הדפדפן, אך ייתכן שחלק מהאתר לא
            יתפקד באופן מיטבי.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">מטרות השימוש במידע</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>מענה לפניות ומתן שירותי בדק בית וחוות דעת</li>
            <li>שיפור האתר, התכנים והשירותים המוצעים בו</li>
            <li>ניתוח סטטיסטי של דפוסי שימוש ומדידת יעילות פרסום</li>
            <li>עמידה בדרישות הדין</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">מסירת מידע לצד שלישי</h2>
          <p>
            איננו מוכרים ואיננו משכירים את המידע שלך. מידע עשוי להיות משותף עם ספקי שירות הפועלים מטעמנו (כגון שירותי
            המדידה והפרסום של גוגל) לצורך תפעול האתר, וכן במקרים בהם אנו מחויבים לכך על פי דין או בהתאם לצו של רשות
            מוסמכת.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">אבטחת מידע</h2>
          <p>
            אנו נוקטים באמצעים סבירים לשמירה על אבטחת המידע ולמניעת גישה בלתי מורשית אליו. עם זאת, אין באפשרותנו
            להבטיח חסינות מוחלטת מפני חדירה או שימוש לרעה, ואיננו אחראים לנזק שייגרם כתוצאה מגורמים שאינם בשליטתנו.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">זכויותיך</h2>
          <p>
            על פי חוק הגנת הפרטיות, עומדת לך הזכות לעיין במידע המוחזק אודותיך, לבקש לתקנו אם אינו מדויק, וכן לבקש
            את מחיקתו. לצורך מימוש זכויות אלה ניתן לפנות אלינו בפרטים המופיעים בהמשך. כמו כן, אם סבורים שפרטיותך
            נפגעה, ניתן לפנות אל הרשות להגנת הפרטיות במשרד המשפטים.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">שינויים במדיניות</h2>
          <p>
            אנו רשאים לעדכן מדיניות זו מעת לעת. הנוסח המעודכן יפורסם בעמוד זה ויחול ממועד פרסומו. מומלץ לעיין בעמוד
            מעת לעת.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">יצירת קשר</h2>
          <p>בשאלות או בקשות הנוגעות לפרטיות ולמידע האישי שלך, ניתן לפנות אלינו:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>טלפון משרד: 073-3745044</li>
            <li>טלפון מומחה: 050-6277858</li>
          </ul>
        </section>

        <div className="pt-4">
          <Link href="/" className="text-blue-700 hover:text-blue-900 hover:underline font-semibold">
            ← חזרה לעמוד הבית
          </Link>
        </div>
      </article>

      <SiteIndex />
    </main>
  )
}
