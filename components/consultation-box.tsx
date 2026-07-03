import Link from "next/link"

/**
 * "Free initial consultation" prompt, placed near the top of article/service
 * pages. Catches readers who arrive mid-decision (stressed about a specific
 * defect) and gives them an immediate, low-friction way to reach out — which
 * both converts and improves dwell time / bounce rate (a positive SEO signal).
 */
export function ConsultationBox({
  text = "יש לכם שאלה על ליקוי ספציפי בדירה? מתלבטים לגבי פרוטוקול המסירה? יגאל וצוות המומחים של בדק בית Legal זמינים לייעוץ ראשוני — ללא שום התחייבות.",
}: {
  text?: string
}) {
  return (
    <aside
      dir="rtl"
      className="not-prose my-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 md:p-6"
      aria-label="ייעוץ ראשוני ללא התחייבות"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z" />
            </svg>
          </span>
          <div>
            <p className="font-bold text-slate-900">מתלבטים לגבי ליקוי בדירה?</p>
            <p className="mt-1 text-sm md:text-base leading-relaxed text-slate-700">{text}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <a
            href="tel:+972506277858"
            className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
          >
            חייגו: 050-627-7858
          </a>
          <a
            href="https://wa.me/972506277858"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
          >
            שלחו וואטסאפ
          </a>
        </div>
      </div>
    </aside>
  )
}
