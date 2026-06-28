"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { SiteIndex } from "@/components/site-index"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"

const DEFECTS_DIRA_HADASHA = [
  {
    src: "/articles/likuyim/likui-itum-chalon-aluminium-dira-hadasha.webp",
    standard: "ת״י 1068 – חלונות אלומיניום",
    title: "ליקוי איטום בחלון אלומיניום",
    alt: "ליקוי איטום וסיליקון לקוי בשפת זכוכית חלון אלומיניום בדירה חדשה - איתור ליקויי בנייה בבדק בית לפני מסירה מקבלן",
    caption:
      "איטום לקוי בשפת זיגוג חלון האלומיניום. ליקוי נפוץ בדירות חדשות שעלול לגרום לחדירת מים ורטיבות — חשוב לאתר בבדק בית לפני קבלת הדירה מהקבלן.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-chalon-aluminium-mirpeset-dira-hadasha.webp",
    standard: "ת״י 1068 – חלונות אלומיניום",
    title: "בדיקת חלון אלומיניום במרפסת",
    alt: "מומחה בדק בית בודק חלון ודלת אלומיניום ואיטום בתקרת מרפסת בדירה חדשה - איתור ליקויי בנייה לפני מסירה מקבלן",
    caption:
      "בדיקת התקנת פתח האלומיניום ואיטומו בחיבור לתקרת המרפסת. ליקויי התקנה ואיטום בחלונות ודלתות אלומיניום שכיחים בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-mad-koach-chalon-dira-hadasha.webp",
    standard: "ת״י 1068 – חלונות",
    title: "מדידת כוח הפעלת חלון",
    alt: "מדידת הכוח הנדרש להפעלת חלון בעזרת מד כוח דיגיטלי בבדק בית לדירה חדשה - בדיקת תקינות חלונות לפי תקן לפני מסירה",
    caption:
      "מדידת הכוח הנדרש להזזת והפעלת החלון בעזרת מד כוח (דינמומטר). כוח הפעלה חריג מעיד על ליקוי התקנה ואי-עמידה בתקן — נבדק בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-mashkof-delet-knisa-dira-hadasha.webp",
    standard: "ת״י 1161 + 5044 – דלתות ומלבני פלדה",
    title: "בדיקת פילוס משקוף דלת",
    alt: "מומחה בדק בית בודק פילוס משקוף דלת בעזרת פלס בדירה חדשה - איתור ליקויי התקנה לפני מסירה מקבלן",
    caption:
      "בדיקת פילוס משקוף הדלת בעזרת פלס. סטייה בהתקנת המשקוף פוגעת בתפקוד הדלת ובאיטום — ממצא חשוב בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-mad-shipua-mishoriyut-dira-hadasha.webp",
    standard: "ת״י 789 – סטיות מותרות בעבודות בנייה",
    title: "מדידת שיפוע ומישוריות",
    alt: "מד שיפוע דיגיטלי אינקלינומטר מודד שיפוע ומישוריות משטח בדירה חדשה - בדק בית ואיתור ליקויי ריצוף לפני מסירה",
    caption:
      "מדידת שיפוע ומישוריות בעזרת פלס דיגיטלי. סטיות שיפוע ברצפות ובאזורים רטובים הן ליקוי בנייה נפוץ הנבדק בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/likui-mervach-saf-even-dira-hadasha.webp",
    standard: "ת״י 2378 – חיפוי אבן טבעית",
    title: "מרווח לקוי בסף אבן",
    alt: "מדידת מרווח לקוי בין סף אבן וחיפוי לתקרה בדירה חדשה - איתור ליקויי גמר והרכבה בבדק בית לפני מסירה מקבלן",
    caption:
      "מדידת מרווח חריג בחיבור סף האבן לתקרה. מרווחים לא אחידים בעבודות אבן וחיפוי הם ליקוי גמר שמתועד בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/likui-mervach-chipuy-even-dira-hadasha.webp",
    standard: "ת״י 2378 – חיפוי אבן טבעית",
    title: "מרווח בחיפוי אבן חיצוני",
    alt: "מרווח ומישק לא אחיד בין לוחות חיפוי אבן בקיר חיצוני של מבנה חדש - איתור ליקויי בנייה בבדק בית",
    caption:
      "מישק לא אחיד בין לוחות חיפוי האבן בקיר החיצוני. ליקויי חיפוי אבן עלולים לסכן יציבות ואיטום — נבדקים בבדק בית, גם בדירה חדשה לפני מסירה.",
  },
]

export default function ArticleBedekBayitDiraHadasha() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
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
                <h1 className="text-lg font-bold text-gray-900">
                  בדק בית ואיתור ליקויי בניה
                </h1>
              </div>
            </Link>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open("tel:+972506277858", "_self")}
            >
              התקשר עכשיו
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
              בדק בית בדירה חדשה: למה זה קריטי לפני הרכישה ואיך זה עוזר במשא ומתן על המחיר
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
              רכישת דירה חדשה היא אחת ההחלטות הכלכליות המשמעותיות ביותר בחיינו. רבים מאיתנו משקיעים את כל חסכונותיהם ולוקחים משכנתא לשנים רבות כדי לממן את הדירה. אך האם אתם באמת יודעים מה אתם קונים? <strong>בדק בית מקצועי</strong> הוא הכלי שיעזור לכם לדעת בדיוק מה מצב הנכס - ולא לקנות חתול בשק.
            </p>
          </div>

          {/* Section 1 */}
          <Card className="mb-8 border-r-4 border-r-blue-500">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                מה זה בדק בית ולמה הוא כל כך חשוב?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>בדק בית</strong> הוא בדיקה מקצועית ומקיפה של נכס נדל&quot;ן על ידי מומחה מוסמך. הבדיקה כוללת סקירה של כל מערכות הבניין: מבנה, חשמל, אינסטלציה, איטום, ריצוף, טיח, חלונות, דלתות ועוד. המטרה היא לאתר <strong>ליקויי בנייה</strong> נסתרים שהעין הלא מקצועית לא תזהה.
              </p>
              <p className="text-gray-700 leading-relaxed">
                גם בדירה חדשה מהקבלן, שנראית מושלמת במבט ראשון, יכולים להסתתר ליקויים רבים. סטטיסטיקות מראות שבכ-90% מהדירות החדשות בישראל נמצאים ליקויי בנייה כאלה ואחרים. חלקם קוסמטיים, אך חלקם עלולים להיות חמורים ויקרים לתיקון.
              </p>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="mb-8 border-r-4 border-r-green-500">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                לא לקנות חתול בשק: מה בדק בית חושף?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                כשאתם נכנסים לדירה חדשה, הכל נראה נוצץ ומושלם. הריצוף מבריק, הקירות צבועים לבן, והחלונות חדשים. אבל מה קורה מתחת לפני השטח?
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-4">
                <li><strong>בעיות איטום</strong> - נזילות ורטיבות שיופיעו רק בחורף הראשון</li>
                <li><strong>ליקויי אינסטלציה</strong> - צנרת לא תקנית או חיבורים רופפים</li>
                <li><strong>בעיות חשמל</strong> - נקודות חשמל חסרות או לא בטיחותיות</li>
                <li><strong>סדקים במבנה</strong> - סדקים קונסטרוקטיביים שמעידים על בעיות יציבות</li>
                <li><strong>ליקויי גמר</strong> - ריצוף לא ישר, טיח מתקלף, חלונות שלא נסגרים כראוי</li>
                <li><strong>חריגות מהתוכניות</strong> - שינויים מהמפרט הטכני שהובטח</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>בדיקת נכס מקצועית</strong> חושפת את כל הליקויים האלה לפני שאתם חותמים על החוזה ומשלמים את מלוא הסכום. זה ההבדל בין לקנות בעיניים עצומות לבין לקנות בידיעה מלאה.
              </p>
            </CardContent>
          </Card>

          {/* Section 3 - Negotiation */}
          <Card className="mb-8 border-r-4 border-r-amber-500">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                בדק בית ככלי למשא ומתן על המחיר
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                אחד היתרונות הגדולים ביותר של <strong>בדק בית לפני רכישה</strong> הוא הכוח שהוא נותן לכם במשא ומתן מול המוכר או הקבלן. כשיש לכם בידיים דוח מקצועי המפרט את כל הליקויים, אתם במצב הרבה יותר חזק.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">איך זה עובד בפועל?</h3>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <ol className="list-decimal list-inside text-gray-700 space-y-3">
                  <li><strong>קבלת הדוח</strong> - מומחה בדק בית מבצע בדיקה מקיפה ומפיק דוח מפורט</li>
                  <li><strong>הערכת עלויות תיקון</strong> - כל ליקוי מתורגם לעלות תיקון משוערת</li>
                  <li><strong>סיכום כספי</strong> - סך כל עלויות התיקון הצפויות</li>
                  <li><strong>משא ומתן</strong> - הצגת הדוח למוכר ודרישה להפחתת מחיר או תיקון הליקויים</li>
                </ol>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                לדוגמה: אם <strong>איתור ליקויי בנייה</strong> העלה ממצאים בשווי תיקון של 50,000 ש&quot;ח, אתם יכולים לדרוש הנחה במחיר הדירה או לדרוש מהקבלן לתקן את הכל לפני המסירה.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <p className="text-blue-800 font-medium">
                  טיפ חשוב: בדק בית עולה בממוצע 1,500-3,000 ש&quot;ח, אך יכול לחסוך לכם עשרות ואף מאות אלפי שקלים בטווח הארוך - הן בהפחתת מחיר והן במניעת הפתעות יקרות בעתיד.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card className="mb-8 border-r-4 border-r-purple-500">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                מתי לעשות בדק בית בדירה חדשה?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                התזמון של <strong>בדיקת דירה חדשה</strong> הוא קריטי. הנה הנקודות החשובות:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-4">
                <li><strong>לפני מסירת המפתח</strong> - הזמן האידיאלי לבדיקה, כשהקבלן עדיין אחראי לתיקונים</li>
                <li><strong>בתוך שנת הבדק</strong> - לפי החוק, יש לכם שנה לדווח על ליקויים מרגע המסירה</li>
                <li><strong>לפני תום האחריות</strong> - בדיקה נוספת לפני סיום תקופת האחריות של הקבלן</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                חשוב לזכור: ככל שתאתרו ליקויים מוקדם יותר, כך יהיה לכם קל יותר לדרוש תיקונים או פיצוי מהקבלן.
              </p>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card className="mb-8 border-r-4 border-r-red-500">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                חוות דעת נגדית: כשהקבלן לא מסכים
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                לפעמים, גם כשיש לכם דוח בדק בית, הקבלן מסרב לקבל את הממצאים או טוען שאין ליקויים. במקרים כאלה, <strong>חוות דעת נגדית</strong> ממומחה מוסמך יכולה להיות הכלי שיכריע את הכף.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                חוות דעת נגדית היא מסמך משפטי שיכול לשמש אתכם בהליכים מול הקבלן, בין אם בגישור, בוררות או בבית משפט. המסמך מפרט את הליקויים באופן מקצועי ומבוסס על תקנים ותקנות הבנייה.
              </p>
              <p className="text-gray-700 leading-relaxed">
                כמומחה בדק בית מוסמך מטעם משרד העבודה, אני מכין <strong>חוות דעת מקצועיות</strong> שמתקבלות בערכאות משפטיות ומסייעות ללקוחות לקבל את מה שמגיע להם.
              </p>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                לסיכום: למה בדק בית הוא השקעה משתלמת
              </h2>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>שקט נפשי</strong> - אתם יודעים בדיוק מה אתם קונים</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>חיסכון כספי</strong> - מניעת הפתעות יקרות בעתיד</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>כוח משא ומתן</strong> - דוח מקצועי שמאפשר לדרוש הפחתת מחיר או תיקונים</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>הגנה משפטית</strong> - תיעוד מקצועי לשימוש בהליכים משפטיים</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Documented defects from the field */}
          <ArticleDefectGallery
            heading="ליקויי בנייה שאותרו בדירות חדשות — תיעוד מהשטח"
            intro="דוגמאות אמיתיות לליקויי בנייה שאותרו בבדק בית לדירות חדשות, רבים מהם לפני מסירה מהקבלן. תיעוד מדויק של כל ליקוי הוא הבסיס לדרישת תיקונים ולמשא ומתן מול הקבלן."
            items={DEFECTS_DIRA_HADASHA}
          />

          {/* CTA */}
          <div className="bg-gradient-to-l from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              מתכננים לרכוש דירה חדשה?
            </h2>
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              אל תסתכנו - הזמינו בדק בית מקצועי עוד היום
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
                onClick={() => window.open("tel:+972506277858", "_self")}
              >
                התקשרו עכשיו: 050-627-7858
              </Button>
              <Button
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                onClick={() => window.open("https://wa.me/972506277858", "_blank")}
              >
                שלחו הודעה בוואטסאפ
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
                <h3 className="text-lg font-bold text-gray-900">יגא�� בנסקי</h3>
                <p className="text-gray-600 mb-2">מומחה בדק בית מוסמך על ידי איגוד המהנדסים | רישיון משרד העבודה: 1641507</p>
                <p className="text-gray-700">
                  בעל ניסיון רב שנים באיתור ליקויי בנייה, הכנת חוות דעת מקצועיות וליווי לקוחות בהליכים מול קבלנים. מספק שירותי בדק בית מקצועיים בכל הארץ.
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
