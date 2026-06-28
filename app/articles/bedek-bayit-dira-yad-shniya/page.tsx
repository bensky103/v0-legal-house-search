import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteIndex } from "@/components/site-index"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { ArticleJsonLd } from "@/components/article-jsonld"

const DEFECTS_YAD_SHNIYA = [
  {
    src: "/articles/likuyim/bedek-bayit-mishoriyut-ritzpa-peles-aroch-yad-shniya.webp",
    standard: "ת״י 1555 חלק 3 – ריצוף קרמי",
    title: "בדיקת מישוריות ריצוף",
    alt: "בדיקת מישוריות רצפה וריצוף בעזרת פלס ארוך בדירה - איתור ליקויי ריצוף, שקיעות והפרשי גובה בבדק בית",
    caption:
      "בדיקת מישוריות הריצוף בעזרת פלס ארוך. שקיעות, הפרשי גובה ואריחים 'מתופפים' מאותרים בבדק בית — בדירה יד שנייה ובדירה חדשה כאחד.",
  },
  {
    src: "/articles/likuyim/likui-shevev-sedek-ariach-ritzuf-yad-shniya.webp",
    standard: "ת״י 1555 חלק 3 – ריצוף קרמי",
    title: "שבב וסדק באריח ריצוף",
    alt: "מדידת שבב וסדק באריח ריצוף בעזרת זכוכית מגדלת עם סרגל מדידה - איתור ליקויי ריצוף בבדק בית",
    caption:
      "מדידת שבב או סדק באריח בעזרת לופה עם סרגל. פגמי ריצוף, שברים ושפשופי גמר מתועדים במדויק בבדק בית — בדירה יד שנייה ובדירה חדשה.",
  },
  {
    src: "/articles/likuyim/likui-pgam-shiyuf-even-ritzuf-yad-shniya.webp",
    standard: "ת״י 5566 – ריצוף אבן",
    title: "פגם בליטוש אבן וריצוף",
    alt: "פגם בליטוש משטח אבן ושבב בקצה אריח ריצוף - איתור ליקויי גמר וריצוף בבדק בית לדירה",
    caption:
      "סימן ליטוש פגום במשטח האבן ושבב בקצה האריח. ליקויי גמר באבן ובריצוף שכיחים ומאותרים בבדק בית, בדירה יד שנייה ובחדשה.",
  },
  {
    src: "/articles/likuyim/likui-sedek-luach-even-yad-shniya.webp",
    standard: "ת״י 2378 – חיפוי אבן טבעית",
    title: "סדק בלוח אבן",
    alt: "סדק עובר בלוח אבן או שיש בדירה - איתור ליקויי בנייה וגמר באבן בבדק בית",
    caption:
      "סדק עובר בלוח האבן. סדקים בלוחות אבן ושיש עלולים להעיד על בעיית הרכבה או עומס — ממצא שנבדק ומתועד בבדק בית.",
  },
  {
    src: "/articles/likuyim/likui-sedek-saf-even-yad-shniya.webp",
    standard: "ת״י 2378 – חיפוי אבן טבעית",
    title: "סדק בסף ואדן אבן",
    alt: "סדק לאורך סף או אדן חלון מאבן בדירה - איתור ליקויי בנייה ואיטום בבדק בית",
    caption:
      "סדק לאורך סף/אדן האבן. סדקים באדני חלונות ובספי אבן עלולים לגרום לחדירת מים — נבדקים בבדק בית בדירות יד שנייה וחדשות.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-nitzvut-mashkof-delet-yad-shniya.webp",
    standard: "ת״י 1161 + 5044 – דלתות ומלבני פלדה",
    title: "בדיקת ניצבות משקוף דלת",
    alt: "בדיקת ניצבות וזווית ישרה של משקוף דלת בעזרת זווית נגרים בדירה - איתור ליקויי התקנה בבדק בית",
    caption:
      "בדיקת ניצבות וזווית של משקוף הדלת בעזרת זווית נגרים. סטיות ניצבות פוגעות בסגירת הדלת — ממצא שכיח בבדק בית בדירות יד שנייה וגם חדשות.",
  },
  {
    src: "/articles/likuyim/likui-mishak-ritzuf-mad-pgam-yad-shniya.webp",
    standard: "ת״י 1555 חלק 3 – ריצוף קרמי",
    title: "מדידת מישק וריווח ריצוף",
    alt: "מדידת רוחב מישק וריווח בין אריחי ריצוף בעזרת פלס וסרגל - איתור ליקויי ריצוף ופוגות לא אחידות בבדק בית",
    caption:
      "מדידת רוחב המישק (הפוגה) בין אריחי הריצוף. מישקים לא אחידים והפרשי מפלס בין אריחים הם ליקוי ריצוף שמתועד בבדק בית.",
  },
]

export default function BedekBayitDiraYadShniyaArticle() {
  return (
    <article className="min-h-screen bg-gray-50" dir="rtl">
      <ArticleJsonLd
        headline="בדק בית לדירה יד שניה: חיסכון עשרות אלפי שקלים"
        description="מדריך מקיף על בדק בית לדירה יד שניה - איך לחסוך הוצאות עתידיות על ליקויים סמויים, לדעת מה בדיוק קונים ולהוריד את מחיר הדירה במשא ומתן."
        slug="bedek-bayit-dira-yad-shniya"
        breadcrumbLabel="בדק בית לדירה יד שניה"
        datePublished="2026-06-16"
        dateModified="2026-06-28"
      />
      {/* Header */}
      <header className="bg-gradient-to-l from-blue-700 to-blue-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <nav className="mb-6">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors">
              עמוד הבית
            </Link>
            <span className="mx-2">←</span>
            <span>מאמרים</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            בדק בית לדירה יד שניה: חיסכון של עשרות אלפי שקלים
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            איך בדיקת נכס מקצועית חושפת ליקויים סמויים, חוסכת הוצאות עתידיות ומעניקה לכם כלי מיקוח חזק מול המוכר
          </p>
          <div className="mt-6 text-sm text-blue-200">
            מאת: יגאל בנסקי | מומחה בדק בית מוסמך על ידי איגוד המהנדסים | רישיון משרד העבודה 1641507
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-r-4 border-r-blue-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                למה בדק בית לדירה יד שניה הוא הכרחי?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                רכישת דירה יד שניה היא אחת ההחלטות הכלכליות הגדולות בחיים. בניגוד לדירה חדשה מקבלן, דירה יד שניה עברה שנים של שימוש, בלאי טבעי, ולעיתים גם תחזוקה לקויה או שיפוצים שבוצעו שלא כהלכה.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                <strong>בדק בית מקצועי לדירה יד שניה</strong> חושף את האמת מאחורי הקירות - ליקויים סמויים שהעין הבלתי מקצועית לא רואה, בעיות שעלולות לעלות לכם עשרות ואף מאות אלפי שקלים בעתיד.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg font-semibold text-blue-700">
                אל תקנו חתול בשק - דעו בדיוק מה אתם רוכשים לפני שאתם חותמים על החוזה.
              </p>
            </div>
          </section>

          {/* Hidden Defects Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              ליקויים סמויים בדירות יד שניה - הסכנות שלא רואים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">בעיות רטיבות ואיטום</h3>
                  <p className="text-gray-700">
                    רטיבות סמויה בקירות, נזילות מהגג או מצנרת ישנה, עובש מוסתר מאחורי ארונות - בעיות שעלולות להתגלות רק חודשים אחרי הרכישה ולעלות עשרות אלפי שקלים.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">מערכות חשמל ישנות</h3>
                  <p className="text-gray-700">
                    חיווט ישן, לוח חשמל לא תקני, חוסר בהארקות - מערכות חשמל ישנות הן סכנת בטיחות ודורשות החלפה מלאה שעולה אלפי שקלים.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">בעיות קונסטרוקציה</h3>
                  <p className="text-gray-700">
                    סדקים במבנה, שקיעות ברצפה, בעיות ביסודות - ליקויים קונסטרוקטיביים הם היקרים ביותר לתיקון ויכולים לסכן את יציבות המבנה.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">אינסטלציה בעייתית</h3>
                  <p className="text-gray-700">
                    צנרת ישנה ומחלידה, ניקוז לקוי, בעיות בביוב - מערכות אינסטלציה ישנות עלולות לגרום לנזקי מים קשים ולדרוש החלפה יקרה.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Savings Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-l from-green-50 to-emerald-50 rounded-xl p-6 md:p-8 border border-green-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                חיסכון של עשרות אלפי שקלים בהוצאות עתידיות
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                בדק בית מקצועי לדירה יד שניה הוא השקעה קטנה שמונעת הוצאות עצומות בעתיד. כאשר אתם יודעים מראש על הליקויים, אתם יכולים:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">1.</span>
                  <div>
                    <strong>לתכנן תקציב מראש</strong> - לדעת בדיוק כמה יעלו התיקונים ולהיערך בהתאם
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">2.</span>
                  <div>
                    <strong>להימנע מהפתעות יקרות</strong> - לא לגלות בעיות רק אחרי שכבר רכשתם את הנכס
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">3.</span>
                  <div>
                    <strong>לקבל החלטה מושכלת</strong> - אולי הדירה הזו פשוט לא שווה את המחיר המבוקש
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">4.</span>
                  <div>
                    <strong>לתעדף תיקונים</strong> - לדעת מה דחוף ומה יכול לחכות, ולתכנן את השיפוץ בחוכמה
                  </div>
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-lg p-4 border border-green-300">
                <p className="text-green-800 font-semibold text-center">
                  עלות בדק בית: כמה מאות שקלים | חיסכון פוטנציאלי: עשרות עד מאות אלפי שקלים
                </p>
              </div>
            </div>
          </section>

          {/* Negotiation Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              כלי מיקוח חזק: הורדת מחיר משמעותית מול המוכר
            </h2>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                דוח בדק בית מקצועי הוא <strong>כלי המיקוח האפקטיבי ביותר</strong> במשא ומתן על מחיר הדירה. כשיש לכם דוח מפורט עם רשימת ליקויים והערכת עלויות תיקון, המוכר לא יכול להתכחש למציאות.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">ללא דוח בדק בית</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      טענות מילוליות שקל להתכחש אליהן
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      אין הוכחות מתועדות
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      המוכר שולט במשא ומתן
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      הורדת מחיר מינימלית
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-green-800 mb-3">עם דוח בדק בית מקצועי</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      רשימה מפורטת של כל הליקויים
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      תיעוד מצולם והערכות עלות
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      אתם שולטים במשא ומתן
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      הורדת מחיר משמעותית
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
                <h4 className="font-bold text-amber-800 mb-2">דוגמה מהשטח:</h4>
                <p className="text-gray-700">
                  לקוח שלנו גילה בבדק בית בעיות רטיבות, חשמל לא תקני וסדקים בקירות. סך הליקויים הוערכו ב-85,000 ש"ח. עם הדוח בידו, הוא הצליח להוריד את מחיר הדירה ב-60,000 ש"ח - פי עשרות מעלות הבדיקה!
                </p>
              </div>
            </div>
          </section>

          {/* Know What You Buy Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-l from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 border border-blue-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                לדעת בדיוק מה קונים - לא לקנות חתול בשק
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                כשאתם קונים דירה יד שניה, אתם רואים את הקירות הצבועים, הרצפות הנקיות והאווירה הנעימה. אבל מה קורה מאחורי הקירות? מתחת לרצפה? בגג?
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                <strong>בדק בית מקצועי חושף את האמת המלאה:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-3xl mb-2">🔍</div>
                  <h4 className="font-bold text-gray-900 mb-1">בדיקה ויזואלית מקיפה</h4>
                  <p className="text-sm text-gray-600">כל פינה וסדק נבדקים בעין מקצועית</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-bold text-gray-900 mb-1">בדיקות מכשור</h4>
                  <p className="text-sm text-gray-600">מדידת רטיבות, בדיקת חשמל ועוד</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-3xl mb-2">📝</div>
                  <h4 className="font-bold text-gray-900 mb-1">דוח מפורט</h4>
                  <p className="text-sm text-gray-600">תיעוד מלא עם תמונות והמלצות</p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Check Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              מה כולל בדק בית לדירה יד שניה?
            </h2>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">בדיקת מערכות ��שמל ולוח חשמל</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">בדיקת מערכות אינסטלציה וניקוז</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">איתור רטיבות ונזילות סמויות</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">בדיקת קירות, תקרות ורצפות</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">בדיקת חלונות, דלתות ואיטום</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">בדיקת מרפסות וחללים חיצוניים</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">בדיקת מצב הגג (בדירות עליונות)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">הערכת עלויות תיקון לכל ליקוי</span>
                </div>
              </div>
            </div>
          </section>

          {/* When to Do Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              מתי לעשות בדק בית לדירה יד שניה?
            </h2>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">לפני חתימה על חוזה</h3>
                    <p className="text-gray-700">הזמן האידיאלי - כשיש לכם עדיין כוח מיקוח מלא ואפשרות לסגת מהעסקה</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-yellow-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">בתקופת הבדיקות (אם יש)</h3>
                    <p className="text-gray-700">אם החוזה כולל תקופת בדיקות - נצלו אותה לבדק בית מקצועי</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">לפני מסירת המפתחות</h3>
                    <p className="text-gray-700">בדיקה אחרונה לוודא שהנכס במצב שהובטח ושאין נזקים חדשים</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Documented defects from the field */}
          <ArticleDefectGallery
            heading="ליקויי בנייה אופייניים בדירות יד שנייה — תיעוד מהשטח"
            intro="דוגמאות אמיתיות לליקויים שאותרו בבדק בית: ליקויי ריצוף ומישוריות, סדקים ופגמים באבן ובשיש, וליקויי התקנה. בדיקה מקצועית חושפת את מצב הנכס האמיתי לפני הרכישה."
            items={DEFECTS_YAD_SHNIYA}
          />

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-l from-blue-600 to-blue-700 rounded-xl p-8 md:p-10 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                מתכננים לקנות דירה יד שניה?
              </h2>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                אל תסכנו את הכסף שלכם על ליקויים סמויים. בדק בית מקצועי יחסוך לכם עשרות אלפי שקלים ויעניק לכם שקט נפשי.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/#contact">קבלו הצעת מחיר</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="tel:073-3745044">התקשרו עכשיו: 073-3745044</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Author Section */}
          <section className="mb-12">
            <Card className="border-t-4 border-t-blue-500">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-center md:text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">יגאל בנסקי</h3>
                    <p className="text-blue-600 font-medium mb-3">מומחה בדק בית מוסמך על ידי איגוד המהנדסים | רישיון משרד העבודה 1641507</p>
                    <p className="text-gray-700 leading-relaxed">
                      מומחה בדק בית מוסמך על ידי איגוד המהנדסים וברשיון משרד העבודה. בעל ניסיון רב שנים באיתור ליקויי בנייה בדירות חדשות ויד שניה, הכנת חוות דעת מקצועיות וליווי לקוחות במשא ומתן מול מוכרים וקבלנים.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Back to Home */}
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              → חזרה לעמוד הראשי
            </Link>
          </div>

        </div>
      </main>

      <SiteIndex />
    </article>
  )
}
