import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { DEFECTS_MIZUG } from "@/lib/article-images"

export const metadata: Metadata = {
  title: "בדיקת מיזוג אוויר בבדק בית — בדיקה תרמית של המערכת | בדק בית Legal",
  description:
    "מערכת המיזוג נבדקת בבדק בית באמצעות מצלמה תרמית לאיתור פיזור אוויר לקוי, דליפות ובידוד תעלות. כך מזהים ליקויי מיזוג אוויר בדירה חדשה.",
  keywords: [
    "בדיקת מיזוג אוויר",
    "ליקויי מיזוג",
    "מיזוג מיני מרכזי",
    "מצלמה תרמית",
    "בידוד תעלות",
    "פיזור אוויר",
    "בדק בית מיזוג",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/bdikat-mizug-avir-bedek-bayit" },
  openGraph: {
    title: "בדיקת מיזוג אוויר בבדק בית — בדיקה תרמית של המערכת",
    description: "כך נבדקת מערכת המיזוג בבדק בית באמצעות מצלמה תרמית — פיזור אוויר, דליפות ובידוד תעלות.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/bdikat-mizug-avir-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

export default function BdikatMizugAvirArticle() {
  return (
    <ArticleLayout
      title="בדיקת מיזוג אוויר בבדק בית — בדיקה תרמית של המערכת"
      subtitle="מערכת המיזוג מוסתרת ברובה בתקרות ובתעלות. מצלמה תרמית מאפשרת לבדוק את פיזור האוויר ואת תקינות המערכת בבדק בית."
      slug="bdikat-mizug-avir-bedek-bayit"
      description="כך נבדקת מערכת המיזוג בבדק בית באמצעות מצלמה תרמית — פיזור אוויר, דליפות ובידוד תעלות."
      datePublished="2026-07-12"
      dateModified="2026-07-12"
      ctaTitle="מערכת המיזוג עובדת כמו שצריך?"
      ctaText="ליקויי מיזוג מוסתרים לרוב בתקרות ובתעלות. בדיקה תרמית בבדק בית חושפת אותם לפני המסירה."
    >
      <ArticleLead>
        מערכת מיזוג האוויר, ובמיוחד מערכות מיני-מרכזיות, מוסתרת ברובה בתקרות ובתעלות — ולכן ליקויים בה קשים
        לזיהוי בבדיקה חזותית בלבד. בבדק בית נעזרים ב<strong>מצלמה תרמית</strong> כדי לבחון את פיזור האוויר הקר,
        לאתר דליפות ולבדוק את בידוד התעלות.
      </ArticleLead>

      <ArticleH2>מה בודקים במערכת המיזוג</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>פיזור אוויר:</strong> פיזור אחיד של אוויר קר מהמפזרים, ללא אזורים "מתים".</li>
        <li><strong>דליפות אוויר:</strong> דליפה מהתעלות או מחיבורים לא אטומים, שפוגעת ביעילות המערכת.</li>
        <li><strong>בידוד תעלות:</strong> בידוד לקוי גורם לעיבוי, לאובדן קור ולעיתים לרטיבות בתקרה.</li>
        <li><strong>מיקום והתקנה:</strong> מיקום המזגן והמפזרים, ותקינות ההתקנה הכללית.</li>
      </ul>

      <ArticleH2>למה בדיקה תרמית מתאימה למיזוג</ArticleH2>
      <p>
        מצלמה תרמית מציגה את פערי הטמפרטורה על פני התקרה והקירות, ולכן היא כלי יעיל לבדיקת מערכת מיזוג —
        היא מראה את פיזור האוויר הקר בפועל, חושפת דליפות ומצביעה על בידוד לקוי של תעלות. כך אפשר לאתר ליקוי
        מיזוג ולתעד אותו בדוח, גם כשהמערכת עצמה מוסתרת מהעין.
      </p>

      <ArticleDefectGallery
        heading="בדיקת מיזוג אוויר בשטח — תיעוד מבדק בית"
        intro="דוגמאות אמיתיות לבדיקת מערכת המיזוג בעזרת מצלמה תרמית. הבדיקה חושפת ליקויי פיזור אוויר, דליפות ובידוד."
        items={DEFECTS_MIZUG}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריך על <Link href="/likuyey-bniya/mizug-avir" className="text-blue-700 hover:underline font-medium">ליקויי מיזוג אוויר</Link>,
        או קראו על <Link href="/articles/bdikat-dud-shemesh-bedek-bayit" className="text-blue-700 hover:underline font-medium">בדיקת דוד שמש</Link> —
        מערכת נוספת שנבדקת בבדק בית בעזרת מצלמה תרמית.
      </p>
    </ArticleLayout>
  )
}
