import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { ArticlePriceSection } from "@/components/article-price-section"
import { ArticleFaq } from "@/components/article-faq"
import { DEFECTS_RITZUF } from "@/lib/article-images"

export const metadata: Metadata = {
  title: "ליקויי ריצוף בבדק בית — מישוריות, שיפוע ופוגות (ת״י 1555) | בדק בית Legal",
  description:
    "שקיעות, 'שן' בין אריחים, שיפוע לקוי וסדקים בריצוף נבדקים לפי ת״י 1555. כך מאתרים ומתעדים ליקויי ריצוף בבדק בית לפני מסירה מהקבלן.",
  keywords: [
    "ליקויי ריצוף",
    "מישוריות ריצוף",
    "שן בין אריחים",
    "שיפוע ריצוף",
    "פוגות",
    "ת״י 1555",
    "אריח שקוע",
    "בדק בית ריצוף",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/likuyey-ritzuf-bedek-bayit" },
  openGraph: {
    title: "ליקויי ריצוף בבדק בית — מישוריות, שיפוע ופוגות (ת״י 1555)",
    description: "כך מאתרים ומתעדים שקיעות, 'שן' בין אריחים, שיפוע לקוי וסדקים בריצוף בבדק בית לפי ת״י 1555.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/likuyey-ritzuf-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

export default function LikuyeyRitzufArticle() {
  return (
    <ArticleLayout
      title="ליקויי ריצוף בבדק בית — מישוריות, שיפוע ופוגות (ת״י 1555)"
      subtitle="ריצוף לקוי נראה לעין ופוגע בנוחות ובבטיחות. כך נבדקים מישוריות, פילוס, שיפוע ופוגות לפי ת״י 1555 בבדק בית."
      slug="likuyey-ritzuf-bedek-bayit"
      description="כך נבדקים מישוריות, פילוס, שיפוע ופוגות בריצוף בבדק בית לפי ת״י 1555, ואיך מתעדים ליקויי ריצוף."
      datePublished="2026-07-12"
      dateModified="2026-07-12"
      ctaTitle="ריצוף שקוע או לא ישר?"
      ctaText="ליקויי ריצוף נמדדים מול תקן ברור. בדק בית מקצועי מאתר ומתעד אותם לפני שחותמים על המסירה."
    >
      <ArticleLead>
        הריצוף הוא מהרכיבים הגלויים ביותר בדירה, וליקויים בו בולטים ומפריעים ביומיום. תקן <strong>ת״י 1555</strong>{" "}
        מגדיר את הדרישות לביצוע ריצוף וחיפוי קרמי — מישוריות, פילוס, שיפוע ורוחב פוגות. סטייה מהתקן היא ליקוי
        שנבדק ומתועד בבדק בית.
      </ArticleLead>

      <ArticleH2>ליקויי הריצוף הנפוצים</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>'שן' והפרשי מפלס:</strong> הפרש גובה בין אריחים סמוכים שמורגש בהליכה ומהווה מכשול.</li>
        <li><strong>שקיעות ובליטות:</strong> סטיות מישוריות מקומיות מתחת לפלס הכללי של הרצפה.</li>
        <li><strong>שיפוע לקוי:</strong> באזורים רטובים ובמרפסות — שיפוע שגוי גורם למים עומדים ולחדירת רטיבות.</li>
        <li><strong>סדקים ושברים:</strong> באריחים או במישקים, לעיתים עקב הכנה לקויה של תשתית הריצוף.</li>
        <li><strong>פוגות לא אחידות:</strong> רוחב פוגה משתנה או מילוי לקוי הפוגעים במראה ובאיטום.</li>
      </ul>

      <ArticleH2>איך בודקים ריצוף בבדק בית?</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>פלס ארוך ופלס דיגיטלי</strong> לבדיקת מישוריות, פילוס ושיפוע הרצפה.</li>
        <li><strong>סרגל ומדידת הפרשי מפלס</strong> בין אריחים סמוכים לאיתור 'שן'.</li>
        <li><strong>בדיקת ריקות (חלל)</strong> מתחת לאריחים, המעידה על הדבקה לקויה ועל סכנת שבירה.</li>
        <li><strong>בדיקת ניקוז ושיפוע</strong> באזורים רטובים ובמרפסות לכיוון נקודת הניקוז.</li>
      </ul>

      <ArticleDefectGallery
        heading="ליקויי ריצוף שאותרו בשטח — תיעוד מבדק בית"
        intro="דוגמאות אמיתיות לבדיקת מישוריות, פילוס ושיפוע ריצוף בשטח. תיעוד מדויק של כל ממצא הוא הבסיס לדרישת תיקון מהקבלן."
        items={DEFECTS_RITZUF}
      />

      <ArticlePriceSection
        items={[
          { item: "מילוי מישק הפרדה גמיש (שיפולים)", price: "כ־36 ₪ למ״ר" },
          { item: "תיקון שיפוע רצפה במרפסת", price: "כ־326 ₪ למ״ר" },
          { item: "הדבקה מחדש של אריח חלול", price: "כ־416 ₪" },
          { item: "החלפת אריח שבור", price: "כ־416 ₪ למ״ר" },
          { item: "ריצוף פרקט או למינציה", price: "כ־308 ₪ למ״ר" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריך על <Link href="/likuyey-bniya/ritzuf" className="text-blue-700 hover:underline font-medium">ליקויי ריצוף</Link>,
        קראו על <Link href="/articles/taken-789-stiyot-mutarot" className="text-blue-700 hover:underline font-medium">הסטיות המותרות בת״י 789</Link>,
        או חזרו ל<Link href="/likuyey-bniya" className="text-blue-700 hover:underline font-medium">מדריך ליקויי הבנייה המלא</Link>.
      </p>

      <ArticleFaq
        items={[
          {
            question: "מהו התקן הישראלי לביצוע ריצוף?",
            answer:
              "תקן ת״י 1555 מגדיר את הדרישות לביצוע ריצוף וחיפוי קרמי — מישוריות, פילוס, שיפוע ורוחב פוגות. סטייה מהתקן היא ליקוי שנבדק ומתועד בבדק בית.",
          },
          {
            question: "מהם ליקויי הריצוף הנפוצים ביותר?",
            answer:
              "הליקויים הנפוצים הם 'שן' והפרשי מפלס בין אריחים סמוכים שמורגשים בהליכה, שקיעות ובליטות מקומיות, שיפוע לקוי באזורים רטובים ובמרפסות שגורם למים עומדים, סדקים ושברים באריחים או במישקים, ופוגות לא אחידות הפוגעות במראה ובאיטום.",
          },
          {
            question: "איך בודקים ריצוף בבדק בית?",
            answer:
              "משתמשים בפלס ארוך ובפלס דיגיטלי לבדיקת מישוריות, פילוס ושיפוע, בסרגל למדידת הפרשי מפלס בין אריחים סמוכים לאיתור 'שן', בבדיקת ריקות (חלל) מתחת לאריחים המעידה על הדבקה לקויה, ובבדיקת ניקוז ושיפוע באזורים רטובים לכיוון נקודת הניקוז.",
          },
          {
            question: "למה חלל מתחת לאריח מסוכן?",
            answer:
              "ריקות או חלל מתחת לאריח מעידים על הדבקה לקויה של תשתית הריצוף. אריח כזה חשוף לסכנת שבירה בעת דריכה או הנחת משקל, ולכן הוא נבדק ומתועד בבדק בית כליקוי הדורש הדבקה מחדש.",
          },
        ]}
      />
    </ArticleLayout>
  )
}
