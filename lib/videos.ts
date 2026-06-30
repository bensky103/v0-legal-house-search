// YouTube videos of Legal Bedek Bayit inspections, embedded across the site for
// video SEO. Videos are hosted on YouTube (channel: Legal House Inspection) — the
// site only embeds them, so they add zero asset weight while powering VideoObject
// schema and a video sitemap for Google video rich results.
//
// To add a video: upload to the YouTube channel, then add an entry here with its
// 11-char video id, a Hebrew title/description, the upload date, and a topic slug
// (matching a defect slug from lib/defects.ts, or "general" for the videos page).

export interface SiteVideo {
  /** 11-character YouTube video id. */
  id: string
  /** SEO Hebrew title. */
  title: string
  /** Hebrew description for VideoObject schema and the page. */
  description: string
  /** ISO upload date (YYYY-MM-DD), required by VideoObject schema. */
  uploadDate: string
  /** Defect/service slug this video maps onto, or "general". */
  topic: string
}

export const videos: SiteVideo[] = [
  {
    id: "zS1_mRMKDnQ",
    title: "בדק בית - מעקה מסוכן שאינו עומד בתקן",
    description: "בדיקת מעקה במרפסת במסגרת בדק בית - איתור מעקה מסוכן שאינו עומד בדרישות החוזק והגובה לפי התקן הישראלי.",
    uploadDate: "2026-04-19",
    topic: "maakot",
  },
  {
    id: "ndC2ISFHO5E",
    title: "בדק בית - למה חשוב שהקבלן יבצע אף מים",
    description: "הסבר על חשיבות אף המים (תלם ניתוק) למניעת חדירת רטיבות, ובדיקת ביצועו התקין במסגרת בדק בית.",
    uploadDate: "2026-04-19",
    topic: "itum",
  },
  {
    id: "UnGQpxZx6rE",
    title: "בדיקת ריצוף בדירה - מישוריות, אנכיות ואיתור ליקויי בנייה",
    description: "בדיקת ריצוף בדק בית - מדידת מישוריות ואנכיות, איתור הפרשי מפלס וליקויי ריצוף בעזרת פלס ולייזר.",
    uploadDate: "2026-03-08",
    topic: "ritzuf",
  },
  {
    id: "q7h8_n13fhw",
    title: "בדיקת רוחב דלתות בדירה לפי תקנות התכנון והבנייה",
    description: "בדק בית - בדיקת רוחב הדלתות בדירה והאם הן עומדות בדרישות תקנות התכנון והבנייה ובמפרט הטכני.",
    uploadDate: "2026-03-08",
    topic: "dlatot",
  },
  {
    id: "ydd20xjXHWU",
    title: "בדק בית - בדיקת אלומיניום בדירה, ויטרינה וקלות תזוזה",
    description: "בדיקת עבודות אלומיניום בבדק בית - בדיקת ויטרינה, קלות תזוזת הכנפיים, מסילות ואיטום פתחי האלומיניום.",
    uploadDate: "2026-03-08",
    topic: "aluminium",
  },
  {
    id: "g1T6hOK_jx4",
    title: "בדיקת מיזוג אוויר מרכזי עם מצלמה תרמית",
    description: "בדק בית - בדיקת מערכת מיזוג אוויר מרכזי בעזרת מצלמה תרמית, לאיתור ליקויי פיזור אוויר ובידוד.",
    uploadDate: "2026-03-08",
    topic: "bidud-termi",
  },
  {
    id: "OQEToLUGKGU",
    title: "בדיקת צנרת עם מצלמת ביוב - איתור חסימות בצנרת",
    description: "בדק בית - בדיקת צנרת ביוב וניקוז בעזרת מצלמת אנדוסקופ, לאיתור חסימות, שיפועים לקויים וליקויי ניקוז.",
    uploadDate: "2026-03-08",
    topic: "nikuz",
  },
  {
    id: "AQxIQ2oE05k",
    title: "בדק בית - בדיקת צנרת אינסטלציה בדירה",
    description: "בדיקת צנרת האינסטלציה בדירה במסגרת בדק בית - בדיקת מים, חיבורים ואיתור נזילות וליקויי אינסטלציה.",
    uploadDate: "2026-03-08",
    topic: "instalatzia",
  },
  {
    id: "o-PzGyCIkpY",
    title: "בדק בית - בדיקת סדקים בקירות",
    description: "בדק בית - בדיקת סדקים בקירות, אבחון סוג הסדק והאם מדובר בליקוי מבני או בליקוי גמר.",
    uploadDate: "2026-03-08",
    topic: "sdakim",
  },
  {
    id: "yQeyRWk5z2U",
    title: "בדק בית - בדיקת נזילות ואיטום בפרויקט תמ\"א 38",
    description: "בדק בית - בדיקת נזילות וליקויי איטום בדירה בפרויקט תמ\"א 38, בעזרת מצלמה תרמית ומדידות לחות.",
    uploadDate: "2026-03-08",
    topic: "itum",
  },
  {
    id: "2sNCK7pfcis",
    title: "בדיקת מרחב שימוש בחדרי אמבטיה ושירותים",
    description: "בדק בית - בדיקת מרחבי השימוש בחדרי האמבטיה והשירותים והתאמתם לתקן ולמפרט הטכני.",
    uploadDate: "2025-11-30",
    topic: "instalatzia",
  },
  {
    id: "-1qwXoSLNBA",
    title: "מה זה בדק בית ולמה חשוב לבצע אותו לפני קניית דירה",
    description: "הסבר מקיף - מה זה בדק בית, מה בודקים, ולמה חשוב לבצע בדק בית הנדסי לפני קניית דירה או נכס.",
    uploadDate: "2026-03-08",
    topic: "general",
  },
  {
    id: "Px76MuvFLgk",
    title: "בדק בית - בדיקת אוורור בדירה",
    description: "בדק בית - בדיקת מערכות האוורור בדירה, כולל אוורור חדרי רחצה ושירותים, והתאמתם לדרישות.",
    uploadDate: "2026-03-08",
    topic: "general",
  },
  {
    id: "jxLu2s3K2Yc",
    title: "בדק בית Legal - בדיקת אינסטלציה ומחלק מים",
    description: "בדק בית - בדיקת מערכת האינסטלציה ומחלק המים בדירה, חיבורים ואיתור נזילות וליקויי אינסטלציה.",
    uploadDate: "2026-06-29",
    topic: "instalatzia",
  },
  {
    id: "SSIN2yjnjLM",
    title: "בדק בית Legal - בדיקת רכוש משותף וגג: איטום, דוד שמש ואינסטלציה",
    description: "בדק בית - בדיקת רכוש משותף וגג הבניין: איטום, דודי שמש וצנרת אינסטלציה, לאיתור ליקויים משותפים.",
    uploadDate: "2026-06-29",
    topic: "itum",
  },
  {
    id: "cBx3lq4bghA",
    title: "בדיקת פתחי אור ואוורור באמבטיה - בדק בית Legal",
    description: "בדק בית - בדיקת פתחי אור ואוורור בחדר האמבטיה והתאמתם לדרישות התקנות.",
    uploadDate: "2026-06-29",
    topic: "general",
  },
  {
    id: "OdooBVf-luE",
    title: "בדק בית Legal - הכירו את השירות",
    description: "סרטון היכרות עם שירות בדק בית Legal - בדיקה הנדסית מקצועית ואיתור ליקויי בנייה בכל הארץ.",
    uploadDate: "2026-06-29",
    topic: "general",
  },
  {
    id: "hw-X2sCC8gk",
    title: "בדק בית - ליקויים בקופינג ובחיפוי חיצוני ופנימי",
    description: "בדק בית - בדיקת קופינג (גמר עליון של קירות וגדרות) וחיפויים חיצוניים ופנימיים, ואיתור ליקויי חיפוי ואיטום.",
    uploadDate: "2026-06-29",
    topic: "chipuyim",
  },
  {
    id: "QGtDE1O99a4",
    title: "בדק בית - בדיקת אנכיות ומישוריות של טיח וקירות",
    description: "בדק בית - בדיקת אנכיות, גליות ומישוריות של עבודות הטיח והקירות, לאיתור חריגות וליקויי גמר.",
    uploadDate: "2026-06-29",
    topic: "tiyach",
  },
  {
    id: "F-k_xo_Plug",
    title: "בדק בית - בדיקת איכות עבודות הטיח בקירות הדירה",
    description: "בדק בית - בדיקת איכות עבודות הטיח בקירות הפנים של הדירה, לאיתור גליות, סדיקה וליקויי יישום.",
    uploadDate: "2026-06-29",
    topic: "tiyach",
  },
  {
    id: "JISIO678Kjo",
    title: "בדק בית - בדיקת ריצוף, הפרשי גבהים בין מרצפות ורובה",
    description: "בדק בית - בדיקת איכות עבודת הריצוף: הפרשי גבהים בין מרצפות, מילוי ורוחב הרובה ומישוריות הריצוף.",
    uploadDate: "2026-06-29",
    topic: "ritzuf",
  },
  {
    id: "qRu1VY66f00",
    title: "בדק בית - בדיקת איכות עבודת מיזוג האוויר",
    description: "בדק בית - בדיקת איכות התקנת מערכת מיזוג האוויר בדירה ואיתור ליקויי התקנה ופיזור אוויר.",
    uploadDate: "2026-06-29",
    topic: "bidud-termi",
  },
  {
    id: "Z6yfr02WbSY",
    title: "בדק בית - בדיקת צנרת ביוב עם מצלמה אנדוסקופית",
    description: "בדק בית - בדיקת צנרת הביוב בעזרת מצלמה אנדוסקופית, לאיתור חסימות, שיפועים לקויים וליקויי ניקוז.",
    uploadDate: "2026-06-29",
    topic: "nikuz",
  },
  {
    id: "lIxRIXNkmf0",
    title: "בדק בית - בדיקת סדקים בטיח",
    description: "בדק בית - בדיקת סדקים בטיח הקירות, אבחון סוג הסדק והבחנה בין ליקוי גמר לליקוי מבני.",
    uploadDate: "2026-06-29",
    topic: "sdakim",
  },
  {
    id: "4X0yjO9KqgE",
    title: "בדק בית - ליקויים בעבודות אלומיניום וויטרינה",
    description: "בדק בית - בדיקת עבודות האלומיניום בדירה, כולל ויטרינה, קלות תזוזה ואיטום, ואיתור ליקויי התקנה.",
    uploadDate: "2026-06-29",
    topic: "aluminium",
  },
  {
    id: "MGouqjh1wA0",
    title: "בדק בית - ליקוי ברוחב דלתות פנים",
    description: "בדק בית - בדיקת רוחב דלתות הפנים והתאמתן לדרישות תקנות התכנון והבנייה ולמפרט הטכני.",
    uploadDate: "2026-06-29",
    topic: "dlatot",
  },
  {
    id: "LcTsEUA3axI",
    title: "בדק בית - ליקוי באיטום מרפסת",
    description: "בדק בית - איתור ליקוי באיטום רצפת המרפסת, שעלול לגרום לחדירת מים ורטיבות, בעזרת בדיקה הנדסית.",
    uploadDate: "2026-06-29",
    topic: "itum",
  },
  {
    id: "ND1KckpOO7g",
    title: "מה חשוב לבדוק בדירה חדשה - ליקויי אלומיניום וחלונות",
    description: "בדק בית בדירה חדשה - מה חשוב לבדוק בעבודות האלומיניום והחלונות לפני מסירת הדירה, ואיתור ליקויי אלומיניום נפוצים.",
    uploadDate: "2026-06-30",
    topic: "aluminium",
  },
]

/** YouTube thumbnail URL for a video id. */
export const videoThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
/** Public watch URL. */
export const videoWatchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`
/** Privacy-enhanced embed URL (no cookies until play). */
export const videoEmbedUrl = (id: string) => `https://www.youtube-nocookie.com/embed/${id}`

// Defects that have no footage of their own borrow videos from a closely-related
// topic, so every relevant defect page still shows real inspection video.
const relatedVideoTopics: Record<string, string[]> = {
  retivut: ["itum"], // רטיבות ⟵ סרטוני נזילות ואיטום
  ovesh: ["itum"], // עובש נובע מרטיבות/איטום
  chalonot: ["aluminium"], // חלונות ⟵ סרטוני אלומיניום
  mirpasot: ["itum"], // מרפסות ⟵ איטום מרפסת
  gagot: ["itum"], // גגות ⟵ איטום
  "mizug-avir": ["bidud-termi"], // מיזוג ⟵ סרטוני מיזוג/מצלמה תרמית
  "klim-sanitariim": ["instalatzia"], // כלים סניטריים ⟵ אינסטלציה
  mitbach: ["instalatzia"], // מטבח ⟵ אינסטלציה (מים/ניקוז)
  "dud-shemesh": ["itum", "instalatzia"], // דוד שמש ⟵ גג/איטום + אינסטלציה
  gaz: ["instalatzia"], // גז ⟵ אינסטלציה
  negarut: ["dlatot"], // נגרות ⟵ דלתות
  trisim: ["aluminium"], // תריסים ⟵ אלומיניום
  "tikrot-gevs": ["itum"], // תקרות גבס ⟵ רטיבות/איטום
}

/** Videos mapped to a given defect/service slug (with related-topic fallback). */
export function getVideosForTopic(slug: string): SiteVideo[] {
  const direct = videos.filter((v) => v.topic === slug)
  if (direct.length > 0) return direct
  const related = relatedVideoTopics[slug] ?? []
  return videos.filter((v) => related.includes(v.topic))
}

/** VideoObject JSON-LD for a single video. */
export function videoSchema(v: SiteVideo) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.description,
    thumbnailUrl: [videoThumb(v.id)],
    uploadDate: v.uploadDate,
    contentUrl: videoWatchUrl(v.id),
    embedUrl: videoEmbedUrl(v.id),
  }
}
