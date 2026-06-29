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
]

/** YouTube thumbnail URL for a video id. */
export const videoThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
/** Public watch URL. */
export const videoWatchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`
/** Privacy-enhanced embed URL (no cookies until play). */
export const videoEmbedUrl = (id: string) => `https://www.youtube-nocookie.com/embed/${id}`

/** Videos mapped to a given defect/service slug. */
export function getVideosForTopic(slug: string): SiteVideo[] {
  return videos.filter((v) => v.topic === slug)
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
