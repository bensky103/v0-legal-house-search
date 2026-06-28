// Central registry of long-form articles. Powers the /articles index, the blog,
// contextual links from defect/service pages, and keeps the sitemap in sync.

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  /** ISO date (YYYY-MM-DD). */
  datePublished: string
  /** Defect slugs (lib/defects.ts) this article is most relevant to. */
  relatedDefects?: string[]
  /** Service slugs (lib/services.ts) this article is most relevant to. */
  relatedServices?: string[]
}

export const articles: ArticleMeta[] = [
  {
    slug: "bedek-bayit-dira-hadasha",
    title: "בדק בית בדירה חדשה — למה זה קריטי ואיך זה עוזר במשא ומתן",
    description:
      "מדריך מקיף לבדק בית בדירה חדשה מקבלן: למה לא לקנות חתול בשק, איך הבדיקה עוזרת במשא ומתן על המחיר, ומה היא חושפת.",
    datePublished: "2026-06-16",
    relatedServices: ["bedek-bayit-lifnei-mesira", "bedek-bayit-lifnei-kniya"],
    relatedDefects: ["itum", "ritzuf"],
  },
  {
    slug: "bedek-bayit-dira-yad-shniya",
    title: "בדק בית לדירה יד שנייה — חיסכון של עשרות אלפי שקלים",
    description:
      "איך בדק בית לדירה יד שנייה חוסך הוצאות עתידיות על ליקויים סמויים, מגלה מה בדיוק קונים, ומשמש כלי מיקוח על המחיר.",
    datePublished: "2026-06-16",
    relatedServices: ["bdikat-dira-yad-shniya", "bedek-bayit-lifnei-kniya"],
    relatedDefects: ["retivut", "sdakim"],
  },
  {
    slug: "matai-lehazmin-bedek-bayit",
    title: "מתי כדאי להזמין בדק בית? המדריך המלא לעיתוי נכון",
    description:
      "לפני מסירה, ביום המסירה או אחריה? מדריך מקצועי לעיתוי הנכון של בדק בית שיחסוך לכם עשרות אלפי שקלים.",
    datePublished: "2026-06-16",
    relatedServices: ["bedek-bayit-lifnei-mesira", "itur-likuyey-bniya"],
  },
  {
    slug: "chok-hamkar-dirot",
    title: "חוק המכר (דירות): תקופות הבדק והאחריות לליקויי בנייה",
    description:
      "כמה זמן אחראי הקבלן לכל ליקוי לפי חוק המכר (דירות), תשל״ג-1973, ואיך בדק בית במועד הופך את הזכויות לתיקון בפועל.",
    datePublished: "2026-06-28",
    relatedServices: ["bedek-bayit-lifnei-mesira", "chavat-daat-beit-mishpat"],
    relatedDefects: ["i-hatama-lemifrat", "itum"],
  },
  {
    slug: "taken-789-stiyot-mutarot",
    title: "ת״י 789 — סטיות מותרות בעבודות בנייה: המצב המעודכן",
    description:
      "מה באמת קובע ת״י 789 לגבי סטיות מותרות בבנייה, היכן נמצאות היום הסטיות לכל רכיב, ואיך מבדילים בין ליקוי לסטייה מותרת.",
    datePublished: "2026-06-28",
    relatedDefects: ["ritzuf", "sdakim"],
    relatedServices: ["itur-likuyey-bniya"],
  },
  {
    slug: "tikaney-instalatzia-bedek-bayit",
    title: "תקני אינסטלציה בבדק בית: מים, ביוב וניקוז (ת״י 1205)",
    description:
      "כך עובדים תקני האינסטלציה ת״י 1205, ואיך מאתרים נזילות, סתימות ושיפועי ניקוז לקויים לפני שהם הופכים לנזק יקר.",
    datePublished: "2026-06-28",
    relatedDefects: ["instalatzia", "retivut"],
    relatedServices: ["itur-likuyey-bniya"],
  },
]

export function getArticlesForDefect(defectSlug: string): ArticleMeta[] {
  return articles.filter((a) => a.relatedDefects?.includes(defectSlug))
}

export function getArticlesForService(serviceSlug: string): ArticleMeta[] {
  return articles.filter((a) => a.relatedServices?.includes(serviceSlug))
}
