// Single source of truth for the article defect-gallery images. Consumed by the
// article pages (via ArticleDefectGallery) AND by the image sitemap, so every
// article photo is discoverable in Google Images without data drift.

export interface ArticleImage {
  src: string
  /** Relevant Israeli standard (ת״י) — shown in the gallery, optional. */
  standard?: string
  title: string
  alt: string
  caption: string
}

export const DEFECTS_DIRA_HADASHA: ArticleImage[] = [
  {
    src: "/articles/likuyim/likui-itum-chalon-aluminium-dira-hadasha.webp",
    standard: "ת״י 1068 – חלונות אלומיניום",
    title: "ליקוי איטום בחלון אלומיניום",
    alt: "ליקוי איטום וסיליקון לקוי בשפת זכוכית חלון אלומיניום בדירה חדשה - איתור ליקויי בנייה בבדק בית לפני מסירה מקבלן",
    caption:
      "איטום לקוי בשפת זיגוג חלון האלומיניום. ליקוי נפוץ בדירות חדשות שעלול לגרום לחדירת מים ורטיבות — חשוב לאתר בבדק בית לפני קבלת הדירה מהקבלן.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-chalon-aluminium-mirpeset-dira-hadasha.webp",
    standard: "ת״י 1068 – חלונות אלומיניום",
    title: "בדיקת חלון אלומיניום במרפסת",
    alt: "מומחה בדק בית בודק חלון ודלת אלומיניום ואיטום בתקרת מרפסת בדירה חדשה - איתור ליקויי בנייה לפני מסירה מקבלן",
    caption:
      "בדיקת התקנת פתח האלומיניום ואיטומו בחיבור לתקרת המרפסת. ליקויי התקנה ואיטום בחלונות ודלתות אלומיניום שכיחים בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-mad-koach-chalon-dira-hadasha.webp",
    standard: "ת״י 1068 – חלונות",
    title: "מדידת כוח הפעלת חלון",
    alt: "מדידת הכוח הנדרש להפעלת חלון בעזרת מד כוח דיגיטלי בבדק בית לדירה חדשה - בדיקת תקינות חלונות לפי תקן לפני מסירה",
    caption:
      "מדידת הכוח הנדרש להזזת והפעלת החלון בעזרת מד כוח (דינמומטר). כוח הפעלה חריג מעיד על ליקוי התקנה ואי-עמידה בתקן — נבדק בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-mashkof-delet-knisa-dira-hadasha.webp",
    standard: "ת״י 1161 + 5044 – דלתות ומלבני פלדה",
    title: "בדיקת פילוס משקוף דלת",
    alt: "מומחה בדק בית בודק פילוס משקוף דלת בעזרת פלס בדירה חדשה - איתור ליקויי התקנה לפני מסירה מקבלן",
    caption:
      "בדיקת פילוס משקוף הדלת בעזרת פלס. סטייה בהתקנת המשקוף פוגעת בתפקוד הדלת ובאיטום — ממצא חשוב בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-mad-shipua-mishoriyut-dira-hadasha.webp",
    standard: "ת״י 1555 חלק 3 – ריצוף קרמי",
    title: "מדידת שיפוע ומישוריות",
    alt: "מד שיפוע דיגיטלי אינקלינומטר מודד שיפוע ומישוריות משטח בדירה חדשה - בדק בית ואיתור ליקויי ריצוף לפני מסירה",
    caption:
      "מדידת שיפוע ומישוריות בעזרת פלס דיגיטלי. סטיות שיפוע ברצפות ובאזורים רטובים הן ליקוי בנייה נפוץ הנבדק בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/likui-mervach-saf-even-dira-hadasha.webp",
    standard: "ת״י 2378 – חיפוי אבן טבעית",
    title: "מרווח לקוי בסף אבן",
    alt: "מדידת מרווח לקוי בין סף אבן וחיפוי לתקרה בדירה חדשה - איתור ליקויי גמר והרכבה בבדק בית לפני מסירה מקבלן",
    caption:
      "מדידת מרווח חריג בחיבור סף האבן לתקרה. מרווחים לא אחידים בעבודות אבן וחיפוי הם ליקוי גמר שמתועד בבדק בית לדירה חדשה.",
  },
  {
    src: "/articles/likuyim/likui-mervach-chipuy-even-dira-hadasha.webp",
    standard: "ת״י 2378 – חיפוי אבן טבעית",
    title: "מרווח בחיפוי אבן חיצוני",
    alt: "מרווח ומישק לא אחיד בין לוחות חיפוי אבן בקיר חיצוני של מבנה חדש - איתור ליקויי בנייה בבדק בית",
    caption:
      "מישק לא אחיד בין לוחות חיפוי האבן בקיר החיצוני. ליקויי חיפוי אבן עלולים לסכן יציבות ואיטום — נבדקים בבדק בית, גם בדירה חדשה לפני מסירה.",
  },
]

export const DEFECTS_YAD_SHNIYA: ArticleImage[] = [
  {
    src: "/articles/likuyim/bedek-bayit-mishoriyut-ritzpa-peles-aroch-yad-shniya.webp",
    standard: "ת״י 1555 חלק 3 – ריצוף קרמי",
    title: "בדיקת מישוריות ריצוף",
    alt: "בדיקת מישוריות רצפה וריצוף בעזרת פלס ארוך בדירה - איתור ליקויי ריצוף, שקיעות והפרשי גובה בבדק בית",
    caption:
      "בדיקת מישוריות הריצוף בעזרת פלס ארוך. שקיעות, הפרשי גובה ואריחים 'מתופפים' מאותרים בבדק בית — בדירה יד שנייה ובדירה חדשה כאחד.",
  },
  {
    src: "/articles/likuyim/likui-shevev-sedek-ariach-ritzuf-yad-shniya.webp",
    standard: "ת״י 1555 חלק 3 – ריצוף קרמי",
    title: "שבב וסדק באריח ריצוף",
    alt: "מדידת שבב וסדק באריח ריצוף בעזרת זכוכית מגדלת עם סרגל מדידה - איתור ליקויי ריצוף בבדק בית",
    caption:
      "מדידת שבב או סדק באריח בעזרת לופה עם סרגל. פגמי ריצוף, שברים ושפשופי גמר מתועדים במדויק בבדק בית — בדירה יד שנייה ובדירה חדשה.",
  },
  {
    src: "/articles/likuyim/likui-pgam-shiyuf-even-ritzuf-yad-shniya.webp",
    standard: "ת״י 5566 – ריצוף אבן",
    title: "פגם בליטוש אבן וריצוף",
    alt: "פגם בליטוש משטח אבן ושבב בקצה אריח ריצוף - איתור ליקויי גמר וריצוף בבדק בית לדירה",
    caption:
      "סימן ליטוש פגום במשטח האבן ושבב בקצה האריח. ליקויי גמר באבן ובריצוף שכיחים ומאותרים בבדק בית, בדירה יד שנייה ובחדשה.",
  },
  {
    src: "/articles/likuyim/likui-sedek-luach-even-yad-shniya.webp",
    standard: "ת״י 2378 – חיפוי אבן טבעית",
    title: "סדק בלוח אבן",
    alt: "סדק עובר בלוח אבן או שיש בדירה - איתור ליקויי בנייה וגמר באבן בבדק בית",
    caption:
      "סדק עובר בלוח האבן. סדקים בלוחות אבן ושיש עלולים להעיד על בעיית הרכבה או עומס — ממצא שנבדק ומתועד בבדק בית.",
  },
  {
    src: "/articles/likuyim/likui-sedek-saf-even-yad-shniya.webp",
    standard: "ת״י 2378 – חיפוי אבן טבעית",
    title: "סדק בסף ואדן אבן",
    alt: "סדק לאורך סף או אדן חלון מאבן בדירה - איתור ליקויי בנייה ואיטום בבדק בית",
    caption:
      "סדק לאורך סף/אדן האבן. סדקים באדני חלונות ובספי אבן עלולים לגרום לחדירת מים — נבדקים בבדק בית בדירות יד שנייה וחדשות.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-nitzvut-mashkof-delet-yad-shniya.webp",
    standard: "ת״י 1161 + 5044 – דלתות ומלבני פלדה",
    title: "בדיקת ניצבות משקוף דלת",
    alt: "בדיקת ניצבות וזווית ישרה של משקוף דלת בעזרת זווית נגרים בדירה - איתור ליקויי התקנה בבדק בית",
    caption:
      "בדיקת ניצבות וזווית של משקוף הדלת בעזרת זווית נגרים. סטיות ניצבות פוגעות בסגירת הדלת — ממצא שכיח בבדק בית בדירות יד שנייה וגם חדשות.",
  },
  {
    src: "/articles/likuyim/likui-mishak-ritzuf-mad-pgam-yad-shniya.webp",
    standard: "ת״י 1555 חלק 3 – ריצוף קרמי",
    title: "מדידת מישק וריווח ריצוף",
    alt: "מדידת רוחב מישק וריווח בין אריחי ריצוף בעזרת פלס וסרגל - איתור ליקויי ריצוף ופוגות לא אחידות בבדק בית",
    caption:
      "מדידת רוחב המישק (הפוגה) בין אריחי הריצוף. מישקים לא אחידים והפרשי מפלס בין אריחים הם ליקוי ריצוף שמתועד בבדק בית.",
  },
]

export const DEFECTS_MATAI: ArticleImage[] = [
  {
    src: "/articles/likuyim/bedek-bayit-tiud-likuyim-doch-matai.webp",
    title: "תיעוד ליקויים והכנת דוח",
    alt: "מומחית בדק בית מתעדת ליקויי בנייה ומכינה דוח עם ציוד בדיקה מקצועי - בדק בית לדירה חדשה ויד שנייה",
    caption:
      "תיעוד הממצאים והכנת דוח בדק בית מסודר בעזרת ערכת ציוד מקצועית. דוח מפורט הוא הבסיס לדרישת תיקונים מהקבלן — לפני המסירה ואחריה.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-pilus-ritzpa-laser-matai.webp",
    standard: "ת״י 1555 חלק 3 – ריצוף קרמי",
    title: "בדיקת מפלס רצפה בלייזר",
    alt: "בדיקת מפלס ומישוריות רצפה בעזרת מאזנת לייזר ירוקה בדירה - איתור שיפועים וליקויי ריצוף בבדק בית",
    caption:
      "בדיקת מפלס ומישוריות הרצפה בעזרת מאזנת לייזר. הלייזר חושף שיפועים והפרשי גובה לאורך כל החדר — שלב מרכזי בבדק בית.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-bdikat-delet-knisa-plada-matai.webp",
    standard: "ת״י 1161 + 5044 – דלתות ומלבני פלדה",
    title: "בדיקת דלת כניסה (פלדלת)",
    alt: "מומחה בדק בית בודק דלת כניסה פלדלת, מנעול ומשקוף בדירה - איתור ליקויי התקנה ובטיחות בבדק בית",
    caption:
      "בדיקת דלת הכניסה (פלדלת): פעולת המנעול, הצירים, האיטום והמשקוף. ליקויי התקנה ובטיחות בדלת הכניסה נבדקים בכל בדק בית.",
  },
  {
    src: "/articles/likuyim/likui-srita-delet-plada-knisa-matai.webp",
    standard: "ת״י 1161 + 5044 – דלתות ומלבני פלדה",
    title: "שריטה ופגם בדלת פלדה",
    alt: "שריטה ופגם גמר בדלת כניסת פלדה בדירה חדשה - איתור ליקויי גמר ואסתטיקה בבדק בית לפני מסירה מקבלן",
    caption:
      "שריטה ופגם בגמר דלת הכניסה. פגמי גמר בדלת ובמשקוף מתועדים בבדק בית ומאפשרים לדרוש תיקון או החלפה מהקבלן.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-bdikat-mashkof-delet-knisa-matai.webp",
    standard: "ת״י 1161 + 5044 – דלתות ומלבני פלדה",
    title: "מדידת משקוף ופתח דלת",
    alt: "מדידת מידות וניצבות פתח ומשקוף דלת כניסה בעזרת פלס בדירה - איתור ליקויי התקנה בבדק בית",
    caption:
      "מדידת מידות פתח הדלת והמשקוף בחלקו העליון. חריגה במידות או בניצבות הפתח היא ליקוי התקנה שמתועד בבדק בית.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-bdikat-chalon-tris-matai.webp",
    standard: "ת״י 1509 – תריסים",
    title: "בדיקת חלון ותריס",
    alt: "מומחית בדק בית בודקת תפקוד חלון, תריס ומסילה בדירה - איתור ליקויי התקנה ואיטום בחלונות בבדק בית",
    caption:
      "בדיקת תפקוד החלון, התריס והמסילה. תקיעות, רעשים וליקויי איטום בחלונות ובתריסים הם ממצאים נפוצים בבדק בית.",
  },
  {
    src: "/articles/likuyim/bedek-bayit-mishoriyut-mishak-ritzuf-matai.webp",
    standard: "ת״י 1555 חלק 3 – ריצוף קרמי",
    title: "מישוריות ומישק ריצוף",
    alt: "בדיקת מישוריות והפרשי מפלס בין אריחי ריצוף בעזרת פלס וסרגל - איתור ליקויי ריצוף בבדק בית",
    caption:
      "בדיקת מישוריות והפרשי מפלס בין אריחים סמוכים בעזרת פלס וסרגל. 'שן' בולטת בין אריחים היא ליקוי ריצוף נפוץ שנבדק בבדק בית.",
  },
]

const SITE_URL = "https://legalbedek.co.il"

/** Map every article gallery image to the article URL it appears on (for the image sitemap). */
export const articleSitemapImages = [
  ...DEFECTS_DIRA_HADASHA.map((img) => ({ ...img, articleSlug: "bedek-bayit-dira-hadasha" })),
  ...DEFECTS_YAD_SHNIYA.map((img) => ({ ...img, articleSlug: "bedek-bayit-dira-yad-shniya" })),
  ...DEFECTS_MATAI.map((img) => ({ ...img, articleSlug: "matai-lehazmin-bedek-bayit" })),
].map((img) => ({
  loc: `${SITE_URL}${img.src}`,
  title: img.title,
  caption: img.caption,
  pageUrl: `${SITE_URL}/articles/${img.articleSlug}`,
}))
