import type { Metadata } from "next"
import Link from "next/link"
import { ArticleLayout, ArticleH2, ArticleLead } from "@/components/article-layout"
import { ArticleDefectGallery } from "@/components/article-defect-gallery"
import { ArticlePriceSection } from "@/components/article-price-section"
import { DEFECTS_TIYACH_TZEVA } from "@/lib/article-images"

export const metadata: Metadata = {
  title: "ליקויי טיח וצבע בבדק בית — מישוריות, סדקים וגמר (ת\"י 789) | בדק בית Legal",
  description:
    "קירות עקומים, סדקים, גלים בטיח ופגמי צבע נבדקים מול הסטיות המותרות בת\"י 789. כך מאתרים ומתעדים ליקויי טיח וצבע בבדק בית לדירה חדשה.",
  keywords: [
    "ליקויי טיח",
    "ליקויי צבע",
    "מישוריות קיר",
    "אנכיות קיר",
    "סדקים בטיח",
    "ת\"י 789",
    "גמר קיר",
    "בדק בית טיח",
    "ליקויי בנייה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: "https://www.legalbedek.co.il/articles/likuyey-tiyach-tzeva-bedek-bayit" },
  openGraph: {
    title: "ליקויי טיח וצבע בבדק בית — מישוריות, סדקים וגמר (ת\"י 789)",
    description: "כך מאתרים ומתעדים קירות עקומים, סדקים, גלים בטיח ופגמי צבע בבדק בית מול הסטיות המותרות בת\"י 789.",
    type: "article",
    locale: "he_IL",
    url: "https://www.legalbedek.co.il/articles/likuyey-tiyach-tzeva-bedek-bayit",
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

export default function LikuyeyTiyachTzevaArticle() {
  return (
    <ArticleLayout
      title="ליקויי טיח וצבע בבדק בית — מישוריות, סדקים וגמר (ת&quot;י 789)"
      subtitle="קיר עקום, סדק או גל בטיח בולטים לעין ומקשים על גמר הדירה. כך נבדקים מישוריות, אנכיות וגמר מול הסטיות המותרות בת&quot;י 789."
      slug="likuyey-tiyach-tzeva-bedek-bayit"
      description="כך נבדקים בבדק בית מישוריות, אנכיות, סדקים וגמר טיח וצבע מול הסטיות המותרות בת״י 789."
      datePublished="2026-07-12"
      dateModified="2026-07-12"
      ctaTitle="קיר עקום או סדוק?"
      ctaText="סטיות טיח וגמר נמדדות מול תקן ברור. בדק בית מקצועי מכמת ומתעד אותן לפני המסירה מהקבלן."
    >
      <ArticleLead>
        טיח וצבע הם שכבות הגמר הנראות ביותר בדירה, וליקויים בהם בולטים מיד. קיר שאינו ישר או אנכי, סדקים, גלים
        ופגמי צבע נבדקים בבדק בית ונמדדים מול <strong>הסטיות המותרות בת"י 789</strong> — התקן הקובע את רמת הדיוק
        הנדרשת בעבודות הגמר.
      </ArticleLead>

      <ArticleH2>ליקויי הטיח והצבע הנפוצים</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>סטיית מישוריות ואנכיות:</strong> קיר גלי או נטוי מעבר לסטייה המותרת, שמקשה על התקנת ריהוט וגמר.</li>
        <li><strong>סדקים:</strong> סדקי גמר או סדקים מבניים בטיח, שיש להבחין ביניהם ולתעד את רוחבם.</li>
        <li><strong>גלים ובליטות:</strong> אי-אחידות בשכבת הטיח שנראית באור צדי.</li>
        <li><strong>פגמי צבע:</strong> כיסוי לא אחיד, גוונים שונים, נזילות צבע וסימני מריחה.</li>
      </ul>

      <ArticleH2>איך בודקים טיח וצבע בבדק בית?</ArticleH2>
      <ul className="list-disc pr-6 space-y-2">
        <li><strong>פלס וסרגל</strong> לבדיקת מישוריות ואנכיות הקירות ולמדידת גודל הסטייה.</li>
        <li><strong>בדיקה באור צדי</strong> לחשיפת גלים, בליטות ואי-אחידות בגמר.</li>
        <li><strong>איתור סדקים ומדידת רוחבם</strong> להבחנה בין סדק גמר לסדק מבני.</li>
        <li><strong>השוואה לסטיות המותרות</strong> בת"י 789, לקביעה מה מהווה ליקוי.</li>
      </ul>

      <ArticleDefectGallery
        heading="ליקויי טיח וצבע שאותרו בשטח — תיעוד מבדק בית"
        intro="דוגמאות אמיתיות לבדיקת מישוריות, אנכיות וגמר טיח וצבע. תיעוד וכימות מדויק של כל סטייה הם הבסיס לדרישת תיקון מהקבלן."
        items={DEFECTS_TIYACH_TZEVA}
      />

      <ArticlePriceSection
        intro="טיח וצבע הוא לרוב הנושא היקר ביותר בדוח — לעיתים יותר משליש מכלל עלות התיקונים, בשל השטחים הגדולים. אלה אומדנים מייצגים, מבוססים על מחירונים מקובלים במחיר עלות לקבלן; המחירים משתנים מעת לעת ולפי הקבלן ורמת הגימור, ובשוק הפרטי גבוהים יותר."
        items={[
          { item: "תיקון וצביעת קיר או תקרה", price: "כ־63–86 ₪ למ״ר" },
          { item: "סתימת חורי קידוח וסדקים בטיח", price: "כ־225 ₪ למ״ר" },
          { item: "איתור וטיפול בנקודת רטיבות", price: "כ־680 ₪ לנקודה" },
          { item: "תיקון סדק ברוחב מעל 0.3 מ״מ", price: "כ־225 ₪ למ״ר" },
        ]}
      />

      <ArticleH2>להרחבה</ArticleH2>
      <p>
        עברו למדריכים על <Link href="/likuyey-bniya/tiyach" className="text-blue-700 hover:underline font-medium">ליקויי טיח</Link>,{" "}
        <Link href="/likuyey-bniya/tzeva" className="text-blue-700 hover:underline font-medium">צבע</Link>{" "}
        ו<Link href="/likuyey-bniya/sdakim" className="text-blue-700 hover:underline font-medium">סדקים</Link>, או
        קראו על <Link href="/articles/taken-789-stiyot-mutarot" className="text-blue-700 hover:underline font-medium">הסטיות המותרות בת״י 789</Link>.
      </p>
    </ArticleLayout>
  )
}
