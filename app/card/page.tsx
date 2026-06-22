import type { Metadata } from "next"
import Link from "next/link"
import { SiteIndex } from "@/components/site-index"

export const metadata: Metadata = {
  title: "כרטיס ביקור דיגיטלי - בדק בית Legal | ליגל בדק בית",
  description:
    "כרטיס הביקור הדיגיטלי של בדק בית Legal - מומחים לאיתור ליקויי בנייה וחוות דעת נגדית מוסמכת. שמרו את הפרטים ליצירת קשר ישירה.",
  alternates: { canonical: "https://legalbedek.co.il/card" },
  openGraph: {
    title: "כרטיס ביקור דיגיטלי - בדק בית Legal",
    description: "כרטיס הביקור הדיגיטלי של בדק בית Legal - מומחים לאיתור ליקויי בנייה וחוות דעת נגדית מוסמכת.",
    url: "https://legalbedek.co.il/card",
    type: "website",
  },
}

export default function CardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">כרטיס ביקור דיגיטלי</h1>
          <p className="text-lg md:text-xl text-blue-200 text-balance">
            בדק בית Legal - מומחים לאיתור ליקויי בנייה וחוות דעת נגדית מוסמכת
          </p>
        </div>
      </header>

      {/* Digital business card embed */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <iframe
            src="https://legalbedek.co.il/card.html"
            title="כרטיס ביקור – בדק בית Legal"
            loading="lazy"
            className="w-full mx-auto block rounded-3xl shadow-xl"
            style={{ maxWidth: "420px", height: "920px", border: 0 }}
          />

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-blue-800 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            חזרה לעמוד הראשי
          </Link>
        </div>
      </section>

      <SiteIndex />
    </main>
  )
}
