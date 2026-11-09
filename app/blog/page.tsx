import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { permanentRedirect } from "next/navigation"
import { articles } from "@/lib/articles"
import { SiteIndex } from "@/components/site-index"

export const metadata: Metadata = {
  title: "בלוג בדק בית | מאמרים על איתור ליקויי בנייה ובדיקת דירות - Legal בדק בית",
  description:
    "בלוג בדק בית של Legal - מאמרים, טיפים ומדריכים בנושא איתור ליקויי בנייה, בדיקת דירה חדשה מקבלן, בדק בית לפני מסירה וחוות דעת הנדסית.",
  // /blog and /articles render the same list from lib/articles.ts and measure ~97%
  // identical. Two self-canonical near-copies is exactly the "duplicate without a
  // user-selected canonical" case: Google picks one and drops the other. /articles is
  // the primary — every article URL lives under /articles/ and the internal links point
  // there — so this page consolidates into it. The page stays reachable for old links.
  alternates: {
    canonical: "https://www.legalbedek.co.il/articles",
  },
}

// /blog?post=<slug> URLs are left over from the previous site. They all render this
// same list, so Google files them as duplicates of one another whatever the canonical
// says. Each one now 301s to the page that covers its topic; an unknown slug goes to
// the article index. Redirecting from the page (not next.config) keeps the old ?post=
// query from being carried onto the destination URL.
const legacyPostRedirects: Record<string, string> = {
  "8-electrical-defects-in-new-apartments": "/articles/likuyey-chashmal-bedek-bayit",
  "chavat-daat-mumche-likuyey-bniya": "/services/chavat-daat-mumche",
  "lemi-meyuadim-sherutei-bdikat-bniya": "/articles/matai-lehazmin-bedek-bayit",
  "eich-bodkim-beayot-itum-badira": "/articles/itum-gagot-bedek-bayit",
  "eich-mezahim-likuyey-bniya": "/likuyey-bniya",
  "betichut-mivnim-lifnei-kniya-mesira-shiputz": "/services/bedek-bayit-lifnei-kniya",
  "pitzui-al-likuyei-bniya": "/articles/giliti-likui-bedira-mi-achrai",
  "likuyei-bniya-badira-matai-bodkim": "/articles/matai-lehazmin-bedek-bayit",
  "professional-building-inspections-before-purchase": "/services/bedek-bayit-lifnei-kniya",
  "bedek-bayit-lifnei-kniyat-dira": "/services/bedek-bayit-lifnei-kniya",
  "ma-haalut-shel-bedek-bayit": "/mehir-bedek-bayit",
  "ma-livdok-beprotocol-mesira-dira": "/articles/protokol-mesira",
  "matay-mazminim-bedek-bayit": "/articles/matai-lehazmin-bedek-bayit",
  "ma-bodek-mehandes-badira": "/articles/mehandes-bedek-bayit",
  "how-to-check-moisture-in-walls": "/likuyey-bniya/retivut",
  "bedikat-retivut-lifnei-kniyat-dira": "/likuyey-bniya/retivut",
  "איך-לבחור-מומחה-בדק-בית": "/articles/mehandes-bedek-bayit",
  "bedek-bayit-kablan-lifnei-mesira": "/services/bedek-bayit-lifnei-mesira",
  "does-insurance-cover-water-damage": "/likuyey-bniya/retivut",
  "madric-le-bhhirat-bedek-bayit-artzi": "/articles/mehandes-bedek-bayit",
  "bedikat-konstruktsia-lebeit-prati": "/services/bdikat-bayit-prati",
  "mahi-achrayut-kablan": "/articles/chok-hamkar-dirot",
  "bedek-bayit-lifnei-iklus": "/services/bedek-bayit-lifnei-mesira",
  "takanei-bniya-ma-livdok-lifnei-kniyat-dira": "/services/bedek-bayit-lifnei-kniya",
  "bedikat-itum-miktzoit-matai-hi-nechutza": "/articles/itum-gagot-bedek-bayit",
  "ech-lehitkonen-lemsirat-dira-mekablan": "/articles/protokol-mesira",
  "bedikat-neches-vaad-habayit": "/services/itur-likuyey-bniya",
  "counter-expert-opinion": "/services/chavat-daat-mumche",
  "eich-leater-sdakim-mesukanim-bekirot": "/likuyey-bniya/sdakim",
  "havt-daat-negdit-lekablan": "/services/chavat-daat-mumche",
  "mi-meshalem-al-bdikat-likuyim": "/articles/giliti-likui-bedira-mi-achrai",
  "eich-leareer-al-doch-likuyim": "/services/chavat-daat-mumche",
  "eich-likro-doch-likuyim": "/articles/mah-kolel-doch-bedek-bayit",
  "bedikat-btihut-mivne-magurim": "/services/itur-likuyey-bniya",
  "bedek-bayit-le-bayit-prati": "/services/bdikat-bayit-prati",
  "6-simanei-keshel-bitum-gagot": "/articles/itum-gagot-bedek-bayit",
  "bedikat-mesira-mikablan": "/services/bedek-bayit-lifnei-mesira",
  "dugma-ledoh-likuyim-badira": "/doch-ledugma",
  "10-simanei-רטיבות-smuya": "/likuyey-bniya/retivut",
  "eich-lehithnahel-mul-kablan-al-likuyim": "/articles/giliti-likui-bedira-mi-achrai",
  "takanei-itum-badira-ma-livdok": "/likuyey-bniya/itum",
  "bedek-bayit-mul-pikuach-bniya": "/services/itur-likuyey-bniya",
  "psak-din-likuyim": "/services/chavat-daat-beit-mishpat",
  "private-opinion-vs-insurance": "/services/chavat-daat-mumche",
  "ma-hahavdel-ben-shamai-lemehandes": "/articles/mehandes-bedek-bayit",
  "bedek-bayit-le-dira-yad-shniya": "/services/bdikat-dira-yad-shniya",
  "madric-lebdikat-tzaneret-bedira-kayemet": "/articles/tikaney-instalatzia-bedek-bayit",
  "ma-kolelet-chavat-daat-negdit": "/services/chavat-daat-mumche",
  "hovat-daat-mumche-lebeit-mishpat": "/services/chavat-daat-beit-mishpat",
  "shirutei-likuyei-bniya-matai-nidrashim": "/services/itur-likuyey-bniya",
  "matai-osim-bedek-bait-ledira-chadasha": "/articles/matai-lehazmin-bedek-bayit",
  "bedikat-dira-acharei-mesira-mikablan": "/articles/giliti-likui-bedira-mi-achrai",
}

export default function BlogPage({ searchParams }: { searchParams: { post?: string | string[] } }) {
  const post = searchParams.post
  if (post !== undefined) {
    const slug = Array.isArray(post) ? post[0] : post
    permanentRedirect(legacyPostRedirects[slug] ?? "/articles")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-4">
            <div>
              <span className="block text-lg md:text-2xl font-bold text-gray-900 leading-tight">בדק בית Legal</span>
              <span className="block text-sm md:text-base text-slate-700 font-medium">בלוג מאמרים מקצועי</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            <li className="flex items-center gap-1">
              <Link href="/" className="text-blue-600 hover:underline">
                דף הבית
              </Link>
              <span className="text-gray-400 px-1">{"›"}</span>
            </li>
            <li>
              <span className="text-gray-700 font-medium" aria-current="page">
                בלוג
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="bg-gradient-to-l from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">בלוג בדק בית</h1>
          <p className="mt-3 text-lg text-blue-100 max-w-2xl mx-auto text-pretty">
            מאמרים, טיפים ומדריכים מקצועיים בנושא איתור ליקויי בנייה, בדיקת דירה חדשה מקבלן ובדק בית לפני מסירה.
          </p>
        </div>
      </section>

      {/* Internal articles & guides */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">מאמרים ומדריכים מקצועיים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200 hover:ring-blue-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{a.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                קראו את המאמר
                <span aria-hidden="true">←</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/articles" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline">
            לכל המאמרים והמדריכים ←
          </Link>
        </div>
      </section>

      {/* Soro Blog Embed */}
      <main className="container mx-auto px-4 py-10">
        <div id="soro-blog" />
        <Script src="https://app.trysoro.com/api/embed/e50102e6-eb3c-4033-90ec-0ed818cfbcfa" strategy="afterInteractive" />
      </main>

      <SiteIndex />
    </div>
  )
}
