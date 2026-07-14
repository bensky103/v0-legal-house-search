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
  {
    slug: "giliti-likui-bedira-mi-achrai",
    title: "גיליתם ליקוי בדירה אחרי המסירה? מי אחראי ומה עושים",
    description:
      "מצאתם רטיבות, סדק או ריצוף שקוע בדירה מקבלן אחרי המסירה? מדריך פעולה: מי אחראי לפי חוק המכר, לכמה זמן, ואיך מחייבים את הקבלן לתקן.",
    datePublished: "2026-07-01",
    relatedServices: ["itur-likuyey-bniya", "chavat-daat-beit-mishpat"],
    relatedDefects: ["retivut", "sdakim", "itum"],
  },
  {
    slug: "protokol-mesira",
    title: "פרוטוקול מסירה לדירה חדשה — מה חייב להופיע ואיך לא להיתקע",
    description:
      "מדריך מלא לפרוטוקול מסירת דירה מקבלן: מה חייב להופיע בו, מתי לבצע בדק בית, ואילו טעויות בחתימה עלולות לעלות עשרות אלפי שקלים.",
    datePublished: "2026-06-29",
    relatedServices: ["bedek-bayit-lifnei-mesira"],
    relatedDefects: ["i-hatama-lemifrat"],
  },
  {
    slug: "itum-gagot-bedek-bayit",
    title: "איטום גגות ומרפסות בבדק בית — איך מאתרים נזילות וכשלי איטום",
    description:
      "כשל איטום בגג, במרפסת ובחיבורי החיפוי הוא מהליקויים היקרים ביותר. כך מאתרים חדירת מים, סדקים ורטיבות סמויה בבדק בית — כולל מצלמה תרמית.",
    datePublished: "2026-07-12",
    relatedServices: ["itur-likuyey-bniya", "bedek-bayit-lifnei-mesira"],
    relatedDefects: ["itum", "gagot", "retivut"],
  },
  {
    slug: "aluminium-zigug-bedek-bayit",
    title: "ליקויי אלומיניום, חלונות ותריסים בבדק בית (ת״י 1068)",
    description:
      "חלונות, דלתות הזזה ותריסים מאלומיניום הם מקור נפוץ לליקויי אטימה, ניקוז ותפעול. כך בודקים אותם בבדק בית לפי ת״י 1068 לפני מסירה מקבלן.",
    datePublished: "2026-07-12",
    relatedServices: ["itur-likuyey-bniya", "bedek-bayit-lifnei-mesira"],
    relatedDefects: ["aluminium", "chalonot", "trisim"],
  },
  {
    slug: "likuyey-ritzuf-bedek-bayit",
    title: "ליקויי ריצוף בבדק בית — מישוריות, שיפוע ופוגות (ת״י 1555)",
    description:
      "שקיעות, 'שן' בין אריחים, שיפוע לקוי וסדקים בריצוף נבדקים לפי ת״י 1555. כך מאתרים ומתעדים ליקויי ריצוף בבדק בית לפני מסירה מהקבלן.",
    datePublished: "2026-07-12",
    relatedServices: ["itur-likuyey-bniya", "bedek-bayit-lifnei-mesira"],
    relatedDefects: ["ritzuf"],
  },
  {
    slug: "bdikat-mamad-bedek-bayit",
    title: "בדיקת ממ״ד בבדק בית — דלת וחלון הדף, איטום ואוורור",
    description:
      "הממ״ד הוא רכיב מגן קריטי. כך בודקים בבדק בית את דלת ההדף, חלון ההדף, האיטום ומערכת האוויר לפי הנחיות פיקוד העורף בדירה חדשה מקבלן.",
    datePublished: "2026-07-12",
    relatedServices: ["bedek-bayit-lifnei-mesira", "itur-likuyey-bniya"],
    relatedDefects: ["mamad"],
  },
  {
    slug: "likuyey-tiyach-tzeva-bedek-bayit",
    title: "ליקויי טיח וצבע בבדק בית — מישוריות, סדקים וגמר (ת״י 789)",
    description:
      "קירות עקומים, סדקים, גלים בטיח ופגמי צבע נבדקים מול הסטיות המותרות בת״י 789. כך מאתרים ומתעדים ליקויי טיח וצבע בבדק בית לדירה חדשה.",
    datePublished: "2026-07-12",
    relatedServices: ["itur-likuyey-bniya", "bedek-bayit-lifnei-mesira"],
    relatedDefects: ["tiyach", "tzeva"],
  },
  {
    slug: "likuyey-chashmal-bedek-bayit",
    title: "ליקויי חשמל ותקשורת בבדק בית — לוח, נקודות ובדיקה תרמית",
    description:
      "לוח חשמל, נקודות, שקעים ותשתית תקשורת נבדקים בבדק בית — כולל מצלמה תרמית לאיתור התחממות יתר וחיבורים רופפים המהווים סכנת בטיחות.",
    datePublished: "2026-07-12",
    relatedServices: ["itur-likuyey-bniya", "bedek-bayit-lifnei-mesira"],
    relatedDefects: ["chashmal"],
  },
  {
    slug: "likuyey-mitbach-negarut-bedek-bayit",
    title: "ליקויי מטבח ונגרות בבדק בית — ארונות, משטח ואיטום",
    description:
      "פילוס ארונות, מישוריות משטח, איטום כיור ואיכות נגרות במטבח ובחדרי הרחצה — כך בודקים ליקויי מטבח ונגרות בבדק בית לפני מסירה מקבלן.",
    datePublished: "2026-07-12",
    relatedServices: ["bedek-bayit-lifnei-mesira", "itur-likuyey-bniya"],
    relatedDefects: ["mitbach", "negarut"],
  },
  {
    slug: "bdikat-mizug-avir-bedek-bayit",
    title: "בדיקת מיזוג אוויר בבדק בית — בדיקה תרמית של המערכת",
    description:
      "מערכת המיזוג נבדקת בבדק בית באמצעות מצלמה תרמית לאיתור פיזור אוויר לקוי, דליפות ובידוד תעלות. כך מזהים ליקויי מיזוג אוויר בדירה חדשה.",
    datePublished: "2026-07-12",
    relatedServices: ["itur-likuyey-bniya", "bedek-bayit-lifnei-mesira"],
    relatedDefects: ["mizug-avir"],
  },
  {
    slug: "bdikat-dud-shemesh-bedek-bayit",
    title: "בדיקת דוד שמש בבדק בית — מערכת סולארית (ת״י 579)",
    description:
      "דוד השמש והמערכת הסולארית נבדקים בבדק בית לפי ת״י 579 — תקינות הדוד, הקולטים, הבידוד והחיבורים, כולל בדיקה תרמית לאיתור ליקויים.",
    datePublished: "2026-07-12",
    relatedServices: ["itur-likuyey-bniya", "bedek-bayit-lifnei-mesira"],
    relatedDefects: ["dud-shemesh"],
  },
  {
    slug: "alut-tikun-likuyey-bniya",
    title: "כמה עולה תיקון ליקויי בנייה? עלויות אמיתיות וכלי למשא ומתן",
    description:
      "איך מחושבת עלות תיקון ליקויי בנייה לפי מחירונים מקובלים, דוגמה אמיתית מדוח בדק בית, ולמה עלות הבדיקה זניחה מול הליקויים ומול ההנחה במשא ומתן.",
    datePublished: "2026-07-13",
    relatedServices: ["itur-likuyey-bniya", "bedek-bayit-lifnei-mesira", "chavat-daat-beit-mishpat"],
    relatedDefects: ["tiyach", "tzeva", "i-hatama-lemifrat"],
  },
  {
    slug: "hanmakhat-tikra-godel-cheder",
    title: "גובה תקרה וגודל חדר מינימלי — מתי הנמכת תקרה הופכת חדר לחדרון",
    description:
      "גובה תקרה מינימלי 2.5 מ׳ ושטח חדר מגורים מינימלי 8 מ״ר. הנמכת תקרה שנוגסת בשטח המינימלי הופכת חדר לחדרון, מורידה את מספר החדרים בדירה ופוגעת בערכה — בניגוד לתקנות התכנון והבנייה.",
    datePublished: "2026-07-13",
    relatedServices: ["itur-likuyey-bniya", "bedek-bayit-lifnei-mesira", "chavat-daat-beit-mishpat"],
    relatedDefects: ["i-hatama-lemifrat"],
  },
  {
    slug: "bdikat-maake-dira-hadasha",
    title: "בדיקת מעקה זכוכית ומעקה בכלל בדירה חדשה — מה בודקים ביום המסירה",
    description:
      "מעקה הוא רכיב בטיחות מציל חיים. כך בודקים מעקה זכוכית ומעקה בכלל בדירה חדשה מקבלן ביום המסירה — גובה, מרווחים, חוזק עיגון, זכוכית בטיחות ורפידות גומי לפי ת״י 1142 ות״י 1099.",
    datePublished: "2026-07-13",
    relatedServices: ["bedek-bayit-lifnei-mesira", "itur-likuyey-bniya"],
    relatedDefects: ["maakot", "mirpasot"],
  },
  {
    slug: "bdikat-mirpeset-dira-hadasha",
    title: "בדיקת מרפסת בדירה חדשה — איטום, שיפועים, ריצוף וניקוז ביום המסירה",
    description:
      "המרפסת חשופה לגשם ולשמש והיא מהאזורים הרגישים ביותר לחדירת מים. כך בודקים מרפסת בדירה חדשה מקבלן ביום המסירה — איטום הרצפה, שיפועים לניקוז, איכות הריצוף ותפקוד נקודת הניקוז.",
    datePublished: "2026-07-13",
    relatedServices: ["bedek-bayit-lifnei-mesira", "itur-likuyey-bniya"],
    relatedDefects: ["mirpasot", "itum", "ritzuf"],
  },
  {
    slug: "bdikat-chipuyey-chutz-dira-hadasha",
    title: "בדיקת חיפויי חוץ בדירה חדשה — מה בודקים ביום המסירה",
    description:
      "חיפוי חוץ שמתנתק או נופל הוא סכנת בטיחות, לא רק ליקוי אסתטי. כך בודקים חיפויי חוץ בדירה חדשה מקבלן ביום המסירה — נקישה חלולה, פוגות, סדקים, עיגון אבן ורטיבות, לפי ת״י 2378 ות״י 1555.",
    datePublished: "2026-07-13",
    relatedServices: ["bedek-bayit-lifnei-mesira", "itur-likuyey-bniya"],
    relatedDefects: ["chipuyim"],
  },
  {
    slug: "bdikat-delet-knisa-dira",
    title: "בדיקת דלת כניסה בדירה — משקוף, נעילה, פרזול ואטימות",
    description:
      "דלת הכניסה היא קו ההגנה הראשון של הדירה. כך בודקים אותה בבדק בית — ישרות המשקוף, פעולת המנעולים והפרזול, אטימות ההיקף והסף וליקויי התקנה, בדירה חדשה מקבלן וביד שנייה.",
    datePublished: "2026-07-14",
    relatedServices: ["bedek-bayit-lifnei-mesira", "itur-likuyey-bniya"],
    relatedDefects: ["delet-knisa", "dlatot"],
  },
]

export function getArticlesForDefect(defectSlug: string): ArticleMeta[] {
  return articles.filter((a) => a.relatedDefects?.includes(defectSlug))
}

export function getArticlesForService(serviceSlug: string): ArticleMeta[] {
  return articles.filter((a) => a.relatedServices?.includes(serviceSlug))
}
