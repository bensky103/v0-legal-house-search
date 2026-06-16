"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">LEGAL BEDEK</h1>
          <p className="text-xl md:text-2xl mb-2">ליגל בדק בית</p>
          <p className="text-lg md:text-xl text-blue-200">מומחים לאיתור ליקויי בנייה וחוות דעת נגדית מוסמכת</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-blue-700/50 px-4 py-2 rounded-full">מומחה מטעם איגוד המהנדסים: 17253030</span>
            <span className="bg-blue-700/50 px-4 py-2 rounded-full">רישיון משרד העבודה: 1641507</span>
          </div>
        </div>
      </header>

      {/* Main Tagline */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold">שקט נפשי מתחיל בבדק בית מקצועי</h2>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">חזון ומשימה</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-r-4 border-r-blue-600">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">החזון שלנו</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                להיות מומחי בדק הבית המוסמכים והמהימנים ביותר בישראל, תוך מתן שקט נפשי ללקוחותינו ושמירה על זכויותיהם כרוכשי נכסים.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">ערכי הליבה:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>מקצועיות ודיוק</li>
                  <li>שקיפות מלאה</li>
                  <li>מחויבות ללקוח</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-r-4 border-r-green-600">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">המשימה שלנו</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                להכין לכל לקוח חוות דעת מקצועית נטולת משוא פנים, חוות דעת שמשקפת את המצב האמיתי של הנכס הנרכש ושניתן להגישה לבית המשפט כראיה שבמסמך.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">מה מייחד אותנו:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>זמינות בהתראה קצרה</li>
                  <li>דוח הנדסי מפורט ומשפטי</li>
                  <li>ניסיון של בדיקות רבות בתחום בדק בית</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">הבעיה והפתרון</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">האתגר</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">&#x2022;</span>
                    <span>איתור ליקויי בנייה חבויים שמוסתרים מהעין</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">&#x2022;</span>
                    <span>עמידה בתקנים העכשוויים, תקנות ובמפרטים החוזיים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">&#x2022;</span>
                    <span>ליקויים עשויים לגרום להפסדים כספיים משמעותיים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">&#x2022;</span>
                    <span>חוסר ידע בתקינה, חוסר ביטחון בהתנהלות מול קבלנים</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">הפתרון - Legal Bedek</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#x2713;</span>
                    <span>בדיקה הנדסית מקיפה עם ציוד מתקדם</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#x2713;</span>
                    <span>דוח מפורט עם תמונות ותיעוד מלא</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#x2713;</span>
                    <span>חוות דעת משפטית מוכרת בבתי משפט</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#x2713;</span>
                    <span>ליווי מקצועי מול הקבלן עד לתיקון</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">נתוני שוק בדק בית בישראל</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-blue-800/50 rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50,000+</div>
              <p className="text-blue-200">דירות נמסרות מדי שנה בישראל</p>
            </div>
            <div className="bg-blue-800/50 rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">100%</div>
              <p className="text-blue-200">מהדירות החדשות מכילות ליקויים</p>
            </div>
            <div className="bg-blue-800/50 rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">80K+</div>
              <p className="text-blue-200">ממוצע חיסכון ללקוח לאחר בדיקה</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">שירותי הליבה</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-lg">בדק בית הנדסי</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">בדיקה מקיפה לאיתור ליקויים, איטום, מבנים וליקויי גמר בנייה</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <CardTitle className="text-lg">חוות דעת נגדית</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">הכנת חוות דעת מקצועית נגדית לצורך הליכים משפטיים מול הצדדים</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <CardTitle className="text-lg">בדיקה תרמוגרפית</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">איתור דליפות מים ובעיות איטום ובידוד באמצעות מצלמה תרמית</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Methodology & Tools */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">מתודולוגיה וכלים</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-800">מצלמת ביוב</p>
              <p className="text-xs text-gray-500 mt-1">בדיקת צנרת שופכין וניקוזים</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-800">פלס דיגיטלי</p>
              <p className="text-xs text-gray-500 mt-1">בדיקת שיפועים</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-800">מצלמה תרמית</p>
              <p className="text-xs text-gray-500 mt-1">איתור דליפות וכשל</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-800">שימסים/קליפר</p>
              <p className="text-xs text-gray-500 mt-1">מדידות מדויקות</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">השוואה תחרותית</h2>
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="py-4 px-4 text-right">קריטריון</th>
                <th className="py-4 px-4 text-center">Legal Bedek</th>
                <th className="py-4 px-4 text-center">בודק בית רגיל</th>
                <th className="py-4 px-4 text-center">מומחה בית המשפט</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 text-gray-700">הסמכת איגוד מהנדסים</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold text-xl">&#x2713;</td>
                <td className="py-3 px-4 text-center text-yellow-600">לעיתים</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold text-xl">&#x2713;</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 text-gray-700">רישיון משרד העבודה</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold text-xl">&#x2713;</td>
                <td className="py-3 px-4 text-center text-red-600">נדיר</td>
                <td className="py-3 px-4 text-center text-red-600">נדיר</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-700">זמינות בהתראה קצרה</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold text-xl">&#x2713;</td>
                <td className="py-3 px-4 text-center text-yellow-600">לעיתים</td>
                <td className="py-3 px-4 text-center text-red-600 font-bold text-xl">&#x2717;</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 text-gray-700">ציוד תרמי ואנדוסקופי</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold text-xl">&#x2713;</td>
                <td className="py-3 px-4 text-center text-yellow-600">לעיתים</td>
                <td className="py-3 px-4 text-center text-red-600">נדיר</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-700">חוות דעת משפטית מוכרת</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold text-xl">&#x2713;</td>
                <td className="py-3 px-4 text-center text-yellow-600">לעיתים</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold text-xl">&#x2713;</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 text-gray-700">ליווי מול קבלן</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold text-xl">&#x2713;</td>
                <td className="py-3 px-4 text-center text-yellow-600">לעיתים</td>
                <td className="py-3 px-4 text-center text-red-600 font-bold text-xl">&#x2717;</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-700">שירות אישי ומהיר</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold text-xl">&#x2713;</td>
                <td className="py-3 px-4 text-center text-yellow-600">לעיתים</td>
                <td className="py-3 px-4 text-center text-red-600 font-bold text-xl">&#x2717;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Expert Profile */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">מומחה בדק בית</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold">
              יב
            </div>
            <h3 className="text-2xl font-bold mb-2">יגאל בנסקי</h3>
            <p className="text-blue-300 mb-4">מומחה בדק בית מוסמך</p>
            <div className="space-y-2 text-gray-300 mb-6">
              <p>הסמכת איגוד המהנדסים הישראלי: 17253030</p>
              <p>רישיון משרד העבודה: 1641507</p>
              <p>ניסיון רב באיתור ליקויי בנייה</p>
              <p>מומחיות בחוות דעת משפטיות</p>
              <p>שירותי בדק בית בכל הארץ - צפון, מרכז, דרום</p>
            </div>
            <p className="text-xl font-semibold text-yellow-400">{'"שקט נפשי מתחיל בבדק בית מקצועי"'}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">לקוחות ממליצים</h2>
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-lg font-bold text-gray-800">5.0 Google Reviews</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-blue-50">
            <CardContent className="pt-6">
              <p className="text-gray-700 italic mb-4">
                {'"קיבלתי חוות דעת עם ליקויים רבים להפתעתי חברת אלקטרה בנייה, תיקנו את הכל ללא כל ויכוח בהתאם לדוח המומחה"'}
              </p>
              <p className="font-semibold text-gray-900">- בינימין</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50">
            <CardContent className="pt-6">
              <p className="text-gray-700 italic mb-4">
                {'"הבדיקה הייתה מקצועית ומדויקת מאוד הקבלן תיקן את כל הליקויים שהוצאו בדוח. חובה לבצע בדיקה!"'}
              </p>
              <p className="font-semibold text-gray-900">- יוסי</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50">
            <CardContent className="pt-6">
              <p className="text-gray-700 italic mb-4">
                {'"הצלחתי בזכות חוות דעת נגדית לצמצם את עלויות התיקונים בעשרות אלפי שקלים"'}
              </p>
              <p className="font-semibold text-gray-900">- מנחם, קבלן</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">צרו קשר עכשיו ונדאג לשקט הנפשי שלכם</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="tel:073-3745044" className="bg-white text-green-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors">
              073-3745044
            </a>
            <a href="tel:050-6277858" className="bg-white text-green-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors">
              050-6277858
            </a>
          </div>
          <p className="text-green-100">www.legalbedek.co.il | שירות בכל הארץ</p>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 text-center">
        <Link href="/">
          <Button variant="outline" size="lg">חזרה לעמוד הראשי</Button>
        </Link>
      </section>
    </main>
  )
}
