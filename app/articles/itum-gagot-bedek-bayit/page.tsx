import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { ArticlePriceSection } from "@/components/article-price-section"
import { DEFECTS_ITUM_GAGOT } from "@/lib/article-images"

export const metadata: Metadata = {
  title: "איטום גגות ומרפסות בבדק בית — איך מאתרים נזילות | בדק בית Legal",
  description:
    "כשל איטום בגג, במרפסת ובחיבורי החיפוי הוא מהליקויים היקרים ביותר. כך מאתרים חדירת מים, סדקים ורטיבות סמויה בבדק בית — כולל מצלמה תרמית.",
  keywords: [
    "איטום גגות",
    "איטום מרפסות",
    "ליקויי איטום",
    "חדירת מים",
    "רטיבות בקיר",
    "נזילה בגג",
    "מצלמה תרמית",
    "בדק בית איטום",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/itum-gagot-bedek-bayit" },
  openGraph: {
    title: "איטום גגות ומרפסות בבדק בית — איך מאתרים נזילות וכשלי איטום",
    description: "כך מאתרים חדירת מים, סדקים ורטיבות סמויה בגגות ובמרפסות בבדק בית — כולל מצלמה תרמית.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/itum-gagot-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

export default function ItumGagotArticle() {
  return (
    <ArticleLayout
      title="איטום גגות ומרפסות בבדק בית — איך מאתרים נזילות וכשלי איטום"
      subtitle="כשל איטום מתגלה לרוב מאוחר, כשהרטיבות כבר חדרה לקירות ולתקרה. כך עובדת בדיקת האיטום בבדק בית — בגג, במרפסת ובחיבורי החיפוי."
      slug="itum-gagot-bedek-bayit"
      description="כך מאתרים בבדק בית חדירת מים, סדקים ורטיבות סמויה בגגות ובמרפסות, כולל שימוש במצלמה תרמית."
      datePublished="2026-07-12"
      dateModified="2026-07-12"
      ctaTitle="חוששים מנזילה או רטיבות?"
      ctaText="כשל איטום מתגלה לרוב מאוחר מדי ויקר לתיקון. בדק בית מקצועי מאתר את מקור הרטיבות בזמן."
    >
      <ArticleLead>
        איטום לקוי הוא אחד הליקויים הנפוצים והיקרים ביותר בדירות. מים שחודרים דרך גג, מרפסת או חיבור חיפוי
        פוגעים בקירות, בתקרה ובריצוף — ולרוב מתגלים רק כשהנזק כבר נרחב. בדק בית במועד מאתר את כשל האיטום לפני
        שהוא הופך לנזק רטיבות יקר.
      </ArticleLead>

      <ArticleH2>היכן כשלי האיטום נפוצים ביותר</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>גגות ורום גג:</strong> תפרים חשופים, שכבת איטום פגומה או חיבור לקוי בין החיפוי לרום הגג.</li>
        <li><strong>מרפסות:</strong> שיפוע לקוי, איטום כושל סביב הניקוז וחיבור בעייתי בין הריצוף לקיר.</li>
        <li><strong>חיבורי חלונות ודלתות:</strong> איטום לקוי בהיקף הפתח שמאפשר חדירת מים בגשם.</li>
        <li><strong>קירות חוץ וחיפוי:</strong> סדקים וכשלי איטום שמובילים לרטיבות בקירות הפנים.</li>
      </ul>

      <ArticleH2>איך בודקים איטום בבדק בית?</ArticleH2>
      <p>בדיקת האיטום משלבת בדיקה חזותית עם ציוד ייעודי לאיתור רטיבות שאינה נראית לעין:</p>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>מצלמה תרמית</strong> לאיתור הפרשי טמפרטורה בקירות ובתקרה, שחושפים רטיבות ונזילות סמויות.</li>
        <li><strong>מד לחות (פרוטימטר)</strong> למדידת אחוז הרטיבות בחומרי הבנייה.</li>
        <li><strong>בדיקת תפרים ושכבות האיטום</strong> בגג, במרפסת ובחיבורי החיפוי.</li>
        <li><strong>מדידת רוחב סדקים</strong> ותיעודם, לצד סימני רטיבות, להערכת חומרת הליקוי.</li>
      </ul>

      <ArticleDefectGallery
        heading="ליקויי איטום שאותרו בשטח — תיעוד מבדק בית"
        intro="דוגמאות אמיתיות לבדיקת איטום ואיתור רטיבות בגגות ובמרפסות. תיעוד מדויק של כל ממצא הוא הבסיס לדרישת תיקון מהקבלן."
        items={DEFECTS_ITUM_GAGOT}
      />

      <ArticlePriceSection
        items={[
          { item: "אף מים בהגבהות גג / קופינג", price: "כ־740 ₪ למ״ר" },
          { item: "ביצוע מישק הפרדה סביב מערכת האיטום", price: "כ־63 ₪ למ״ר" },
          { item: "טיפול נקודתי ברטיבות ואיטום חוזר", price: "מאות שקלים לנקודה" },
        ]}
      />

      <ArticleH2>אחריות הקבלן לכשלי איטום</ArticleH2>
      <p>
        כשל איטום ורטיבות נכללים בתקופות הבדק והאחריות של{" "}
        <Link href="/articles/chok-hamkar-dirot" className="text-blue-700 hover:underline font-medium">חוק המכר (דירות)</Link>.
        תיעוד הליקוי בדוח בדק בית בתוך התקופה הוא המפתח לחייב את הקבלן בתיקון על חשבונו. להרחבה ראו את המדריכים על{" "}
        <Link href="/likuyey-bniya/itum" className="text-blue-700 hover:underline font-medium">ליקויי איטום</Link>,{" "}
        <Link href="/likuyey-bniya/retivut" className="text-blue-700 hover:underline font-medium">רטיבות</Link>{" "}
        ו<Link href="/likuyey-bniya/gagot" className="text-blue-700 hover:underline font-medium">גגות ומרפסות</Link>.
      </p>
    </ArticleLayout>
  )
}
