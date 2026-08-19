// Server component: the CTA buttons are real <a> links now, so nothing on this
// page needs hooks. Keeps SiteIndex's data tables out of the client bundle.

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { SiteIndex } from "@/components/site-index"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { ArticleJsonLd } from "@/components/article-jsonld"
import { ArticleFaq } from "@/components/article-faq"
import { ConsultationBox } from "@/components/consultation-box"

import { DEFECTS_DIRA_HADASHA } from "@/lib/article-images"

export default function ArticleBedekBayitNofeiBenShemen() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <ArticleJsonLd
        headline="בדק בית בפרויקט נופי בן שמן בלוד (שיכון ובינוי): מדריך מלא לרוכשי דירה"
        description="רכשתם דירה בפרויקט נופי בן שמן בלוד של שיכון ובינוי? מדריך לבדק בית ובדיקת מסירה בפרויקט - מה בודקים, מתי, ואיך מחייבים את הקבלן לתקן ליקויים לפי חוק המכר."
        slug="bedek-bayit-nofei-ben-shemen"
        breadcrumbLabel="בדק בית בנופי בן שמן"
        datePublished="2026-07-20"
        dateModified="2026-07-20"
      />
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Legal בדק בית - לוגו"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="text-right">
                <span className="block text-lg font-bold text-gray-900">
                  בדק בית ואיתור ליקויי בניה
                </span>
              </div>
            </Link>
            <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
              <a href="tel:+972506277858">התקשר עכשיו</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              בדק בית בפרויקט נופי בן שמן בלוד (שיכון ובינוי): מדריך מלא לרוכשי דירה
            </h1>
            <div className="flex items-center gap-4 text-gray-600 text-sm md:text-base">
              <span>מאת: יגאל בנסקי</span>
              <span>|</span>
              <span>מומחה בדק בית מוסמך על ידי איגוד המהנדסים</span>
              <span>|</span>
              <span>רישיון משרד העבודה: 1641507</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              פרויקט <strong>נופי בן שמן</strong> הוא חלק מרובע המגורים החדש בבן שמן שבלוד, אחד האזורים שמתפתחים במהירות בעיר. אם רכשתם דירה בפרויקט של <strong>שיכון ובינוי</strong> בשכונה, בדק בית מקצועי במעמד המסירה הוא הדרך לוודא שאתם מקבלים בדיוק את מה שהובטח לכם בחוזה ובמפרט הטכני - ולא לגלות את הליקויים רק אחרי שכבר עברתם דירה.
            </p>
          </div>

          <ConsultationBox />

          {/* Section 1 */}
          <Card className="mb-8 border-r-4 border-r-blue-500">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                נופי בן שמן ושיכון ובינוי - מה חשוב לדעת לפני המסירה
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                שיכון ובינוי היא מקבוצות הבנייה והתשתיות הוותיקות והגדולות בישראל, המקימה פרויקטי מגורים רבים ברחבי הארץ. עם זאת, גם כשהקבלן מנוסה ובעל מוניטין, איכות הביצוע נקבעת בשטח - על ידי קבלני המשנה, לוחות הזמנים והפיקוח בכל דירה ודירה בנפרד.
              </p>
              <p className="text-gray-700 leading-relaxed">
                המציאות בשטח מלמדת שכמעט בכל דירה חדשה בישראל מתגלים ליקויי בנייה כאלה ואחרים, וזה נכון גם בפרויקטים איכותיים. חלק מהליקויים קוסמטיים, אך חלקם - איטום לקוי, נזילות סמויות, סטיות מהמפרט - עלולים להיות יקרים לתיקון ולהתגלות רק בחורף הראשון. בדק בית עצמאי, שאינו מטעם הקבלן, הוא שמאזן את התמונה ונותן לכם ייצוג הנדסי משלכם.
              </p>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="mb-8 border-r-4 border-r-green-500">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                מה בודקים בבדק בית בדירה חדשה בנופי בן שמן?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                בדיקת מסירה מקיפה בדירה חדשה בפרויקט מכסה את כל מרכיבי הדירה והמערכות, בעזרת ציוד מקצועי כמו מצלמה תרמית, מד לחות ומפלסת לייזר:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-4">
                <li><strong>איטום ורטיבות</strong> - חדרים רטובים, מרפסות ונקודות מעבר, לאיתור חדירת מים ונזילות סמויות</li>
                <li><strong>ריצוף וחיפויים</strong> - מישוריות, הפרשי גובה בין אריחים, שיפועים לניקוז, מילוי רובה ונקישה חלולה</li>
                <li><strong>אלומיניום, חלונות ותריסים</strong> - אטימות, קלות תזוזה, ניקוז וחומרה</li>
                <li><strong>אינסטלציה וניקוז</strong> - לחץ המים, חיבורים, שיפועי ניקוז ואיתור נזילות</li>
                <li><strong>חשמל</strong> - בדיקה חזותית של הלוח, נקודות החשמל ואמצעי ההגנה (כל טיפול בפועל בידי חשמלאי מוסמך בלבד)</li>
                <li><strong>ממ״ד</strong> - דלת וחלון ההדף, האטימות, האוורור ומיזוג האוויר לפי דרישות פיקוד העורף</li>
                <li><strong>מיזוג אוויר</strong> - בדיקה תרמית של פיזור האוויר וניקוז המים</li>
                <li><strong>התאמה למפרט הטכני</strong> - מדידת גדלים, גבהים ורכיבים מול מה שהובטח בחוזה</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                מידע מלא על כל אחד מהתחומים תמצאו במדריך <Link href="/articles/bedek-bayit-dira-hadasha" className="text-blue-600 hover:underline font-semibold">בדק בית בדירה חדשה</Link>, ובעמוד השירות <Link href="/bedek-bayit/lod" className="text-blue-600 hover:underline font-semibold">בדק בית בלוד</Link>.
              </p>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card className="mb-8 border-r-4 border-r-amber-500">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                בדיקת מסירה מול שיכון ובינוי - עיתוי וזכויות
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                נקודה חשובה שרבים אינם מודעים אליה: רוב הקבלנים אינם מאפשרים בדק בית שבועות לפני המסירה. הבדיקה נעשית במעמד מסירת הדירה עצמו, או סמוך לו ככל הניתן - ולכן כדאי לתאם את המומחה למועד המסירה שנקבע מול שיכון ובינוי.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                העיתוי הזה הוא לטובתכם: כל עוד הקבלן עדיין באתר עם צוותים וחומרים, התיקון מהיר וזול עבורו; וככל שהבדיקה סמוכה למסירה, כך נמנעת הטענה שאתם, הדיירים, גרמתם לליקוי בעצמכם. כל ליקוי שמתועד בדוח נכנס לפרוטוקול המסירה ומחייב את הקבלן בתיקון.
              </p>
              <p className="text-gray-700 leading-relaxed">
                האחריות של הקבלן לליקויים מעוגנת בחוק המכר (דירות), הקובע תקופות בדק ואחריות לכל רכיב. כדי להבין בדיוק כמה זמן הקבלן אחראי ואיך ממשים את הזכות בפועל, ראו את המדריכים <Link href="/articles/chok-hamkar-dirot" className="text-blue-600 hover:underline font-semibold">חוק המכר (דירות)</Link> ו<Link href="/articles/protokol-mesira" className="text-blue-600 hover:underline font-semibold">פרוטוקול מסירה לדירה חדשה</Link>.
              </p>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card className="mb-8 border-r-4 border-r-purple-500">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                למה בדק בית קריטי דווקא בבנייה החדשה בלוד
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                לוד עוברת בשנים האחרונות מהפך אורבני, עם רבעים חדשים לחלוטין כמו נופי בן שמן והרובע הבינלאומי, לצד פרויקטי התחדשות עירונית בשכונות הוותיקות. בבנייה רוויה חדשה ובאלפי דירות מקבלן, קצב הבנייה המהיר והריבוי של קבלני משנה מגדילים את הסיכוי לליקויי ביצוע וגמר.
              </p>
              <p className="text-gray-700 leading-relaxed">
                בדיקה הנדסית עצמאית במעמד המסירה מתעדת כל ליקוי בדוח מסודר, ומאפשרת לכם לדרוש מהקבלן תיקון בעודו אחראי - במקום להיאבק על כך שנים אחר כך על חשבונכם. זהו כלי המגן על אחת ההשקעות הגדולות בחייכם.
              </p>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                לסיכום: מה חשוב לזכור לפני קבלת הדירה בנופי בן שמן
              </h2>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>בדיקה עצמאית</strong> - מומחה מטעמכם, לא מטעם הקבלן</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>עיתוי נכון</strong> - תיאום הבדיקה למועד המסירה מול שיכון ובינוי</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>תיעוד בפרוטוקול</strong> - כל ליקוי שנרשם מחייב את הקבלן בתיקון</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>הגנה על ההשקעה</strong> - חוות דעת קבילה לפי חוק המכר (דירות)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Documented defects from the field */}
          <ArticleDefectGallery
            heading="ליקויי בנייה שאותרו בדירות חדשות — תיעוד מהשטח"
            intro="דוגמאות אמיתיות לליקויי בנייה שאותרו בבדק בית לדירות חדשות, רבים מהם במעמד המסירה מהקבלן. תיעוד מדויק של כל ליקוי הוא הבסיס לדרישת תיקונים מהקבלן."
            items={DEFECTS_DIRA_HADASHA}
          />

          {/* FAQ */}
          <ArticleFaq
            items={[
              {
                question: "רכשתי דירה בנופי בן שמן משיכון ובינוי - האם צריך בדק בית?",
                answer:
                  "כן. גם בדירה חדשה מקבלן מנוסה מתגלים ליקויי בנייה, ואיתורם במעמד המסירה מחייב את הקבלן לתקן על חשבונו לפי חוק המכר. בדיקה עצמאית מטעמכם נותנת לכם ייצוג הנדסי מול הקבלן.",
              },
              {
                question: "מתי מבצעים את בדק הבית בפרויקט?",
                answer:
                  "רוב הקבלנים אינם מאפשרים בדיקה שבועות מראש, ולכן מתאמים את המומחה למועד מסירת הדירה עצמו או סמוך לו. כך הליקויים נכנסים לפרוטוקול המסירה והקבלן מתקן בעוד צוותיו וחומריו באתר.",
              },
              {
                question: "מה בודקים בדירה חדשה בנופי בן שמן?",
                answer:
                  "הבדיקה כוללת איטום ורטיבות, ריצוף וחיפויים, אלומיניום וחלונות, אינסטלציה וניקוז, חשמל, ממ״ד, מיזוג אוויר והתאמה למפרט הטכני - בעזרת מצלמה תרמית, מד לחות ומפלסת לייזר.",
              },
              {
                question: "האם אתם מבצעים בדק בית בכל הפרויקטים בלוד?",
                answer:
                  "כן. אנו מבצעים בדק בית ובדיקת מסירה בכל הפרויקטים החדשים בלוד - בנופי בן שמן, בהרובע הבינלאומי ובשכונות ההתחדשות העירונית - וכן בדירות יד שנייה בעיר.",
              },
            ]}
          />

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-l from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              מקבלים דירה בנופי בן שמן?
            </h2>
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              תאמו בדק בית מקצועי למועד המסירה - וקבלו בדיוק את מה שהובטח לכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg">
                <a href="tel:+972506277858">התקשרו עכשיו: 050-627-7858</a>
              </Button>
              <Button asChild className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <a href="https://wa.me/972506277858" target="_blank" rel="noopener noreferrer">
                  שלחו הודעה בוואטסאפ
                </a>
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">יגאל בנסקי</h3>
                <p className="text-gray-600 mb-2">מומחה בדק בית מוסמך על ידי איגוד המהנדסים | רישיון משרד העבודה: 1641507</p>
                <p className="text-gray-700">
                  בעל ניסיון רב שנים באיתור ליקויי בנייה, הכנת חוות דעת מקצועיות וליווי לקוחות בהליכים מול קבלנים. מספק שירותי בדק בית מקצועיים בלוד ובכל הארץ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <SiteIndex />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Legal בדק בית - מומחים לאיתור ליקויי בנייה | טלפון: 050-627-7858
          </p>
          <Link href="/" className="text-blue-400 hover:underline mt-2 inline-block">
            חזרה לעמוד הבית
          </Link>
        </div>
      </footer>
    </div>
  )
}
