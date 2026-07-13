import Link from "next/link"
import { ArticleH2 } from "@/components/article-layout"

/**
 * Reusable "cost of repair" section for topic articles.
 * Renders a uniform intro + price cards + the standard editorial disclaimer
 * (prices from accepted price lists, contractor cost, vary by time/contractor/finish,
 * higher in the private market) + a link to the dedicated repair-cost article.
 * Price figures are drawn from real bedek-bayit reports.
 */
export function ArticlePriceSection({
  items,
  intro,
}: {
  items: { item: string; price: string }[]
  intro?: string
}) {
  return (
    <>
      <ArticleH2>כמה עולה לתקן? אומדני עלות</ArticleH2>
      <p>
        {intro ??
          "אלה אומדנים מייצגים לתיקונים בנושא זה. המחירים מבוססים על מחירונים מקובלים בענף, במחיר עלות לקבלן — הם משתנים מעת לעת ולפי הקבלן ורמת הגימור, ובשוק הפרטי הם גבוהים יותר."}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {items.map((r) => (
          <div key={r.item} className="rounded-xl ring-1 ring-slate-200 p-4 bg-slate-50">
            <p className="font-semibold text-gray-900 leading-snug">{r.item}</p>
            <p className="mt-1 font-mono text-blue-700">{r.price}</p>
          </div>
        ))}
      </div>
      <p>
        עלות התיקון של הליקויים מצטברת לרוב לעשרות אלפי שקלים — הרבה מעבר לעלות הבדיקה עצמה, ובוודאי ביחס
        להנחה שאפשר להשיג במשא ומתן. להרחבה ולדוגמה אמיתית ראו{" "}
        <Link href="/articles/alut-tikun-likuyey-bniya" className="text-blue-700 hover:underline font-medium">
          כמה עולה תיקון ליקויי בנייה
        </Link>
        .
      </p>
    </>
  )
}
