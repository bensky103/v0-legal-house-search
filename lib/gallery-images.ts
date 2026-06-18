// Gallery images of Legal Bedek Bayit inspections across Israel.
// Each entry includes SEO-rich Hebrew alt text and keywords for search engine optimization.
//
// Gallery structure (no image repeats):
//   1. Hero  - יגאל בנסקי, מומחה בדק בית, עם קסדה
//   2. Team  - גיא, מומחה בדק בית, עם קסדה
//   3. בדיקות אמיתיות (6)
//   4. ליקויי בנייה (4)
//   5. ציוד מקצועי (3)

export interface GalleryImage {
  src: string
  alt: string
  title: string
  caption: string
  keywords: string[]
  /** Section grouping for the gallery layout. */
  category: "hero" | "team" | "inspection" | "defect" | "equipment"
  /** Tailwind object-position utility, e.g. "object-top". Defaults to centered. */
  objectPosition?: string
  /** Set to true to show the full image without cropping (uses object-contain). */
  fitContain?: boolean
}

export const galleryImages: GalleryImage[] = [
  // ---------- HERO ----------
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2018%2C%202026%2C%2002_03_35%20PM-pGWKw0UtdLymyvE2CbwQLW7WR44GZZ.png",
    category: "hero",
    title: "יגאל בנסקי - מומחה בדק בית מוסמך",
    alt: "יגאל בנסקי מומחה בדק בית מוסמך על ידי איגוד המהנדסים, עם קסדת מגן בעת בדיקת דירה חדשה מקבלן, בדק בית לפני מסירה ואיתור ליקויי בנייה בכל הארץ - תל אביב, רמת גן, גבעתיים, הרצליה, רעננה, כפר סבא, ראש העין, בת ים, חולון, יהוד, אור יהודה, גבעת שמואל, קרית אונו, אזור, פתח תקווה, באר שבע ואשקלון",
    caption: "יגאל בנסקי - מומחה בדק בית מוסמך, איתור ליקויי בנייה וחוות דעת הנדסית",
    objectPosition: "object-top",
    keywords: [
      "בדק בית",
      "מומחה בדק בית",
      "יגאל בנסקי",
      "איתור ליקויי בנייה",
      "חוות דעת הנדסית",
      "בדק בית דירה חדשה",
      "בדק בית לפני מסירה",
      "בדיקת דירה מקבלן",
      "ליקויי בניה במסירה",
      "מומחה מסירת דירה חדשה",
      "פרוטוקול מסירה דירה חדשה",
      "בדיקת דירה לפני קבלת מפתח",
      "בדק בית תל אביב",
      "בדק בית רמת גן",
      "בדק בית גבעתיים",
      "בדק בית הרצליה",
      "בדק בית רעננה",
      "בדק בית כפר סבא",
      "בדק בית ראש העין",
      "בדק בית בת ים",
      "בדק בית חולון",
      "בדק בית פתח תקווה",
      "בדק בית באר שבע",
      "בדק בית אשקלון",
      "בדק בית גוש דן",
      "בדק בית מרכז",
    ],
  },

  // ---------- TEAM ----------
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2018%2C%202026%2C%2001_21_33%20PM-3rj2hpxxXYZSuctdTUss4gbqpEY5zT.png",
    category: "team",
    title: "גיא - מומחה בדק בית מוסמך",
    alt: "גיא מומחה בדק בית מוסמך עם קסדת מגן בעת ביצוע בדיקת נכס לאיתור ליקויי בנייה בתל אביב, רמת גן, גבעתיים, הרצליה, רעננה, כפר סבא, ראש העין, בת ים, חולון, פתח תקווה, באר שבע ואשקלון",
    caption: "גיא - מומחה בדק בית מוסמך, איתור ליקויי בנייה וחוות דעת הנדסית",
    objectPosition: "object-top",
    keywords: [
      "בדק בית",
      "מומחה בדק בית",
      "גיא מומחה בדק בית",
      "איתור ליקויי בנייה",
      "חוות דעת הנדסית",
      "בדק בית תל אביב",
      "בדק בית רמת גן",
      "בדק בית גבעתיים",
      "בדק בית הרצליה",
      "בדק בית רעננה",
      "בדק בית כפר סבא",
      "בדק בית ראש העין",
      "בדק בית בת ים",
      "בדק בית חולון",
      "בדק בית פתח תקווה",
      "בדק בית באר שבע",
      "בדק בית אשקלון",
      "בדק בית גוש דן",
      "בדק בית מרכז",
      "בדיקת דירה לפני קנייה",
    ],
  },

  // ---------- בדיקות אמיתיות (REAL INSPECTIONS) ----------
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260413_103020-QEYGlLIYf3hn1XN6jwhNNQBjxP1xqC.jpg",
    category: "inspection",
    title: "בדיקת מישוריות ריצוף בפלס ובסרגל",
    alt: "מומחה בדק בית בודק מישוריות ויישור ריצוף בעזרת פלס KAPRO וסרגל מתכת לאיתור ליקויי ריצוף בדירה חדשה",
    caption: "בדיקת מישוריות ויישור ריצוף בפלס ובסרגל מדידה - בדק בית לדירה חדשה",
    keywords: ["בדק בית", "בדיקת ריצוף", "ליקויי ריצוף", "מישוריות ריצוף", "בדק בית דירה חדשה", "פלס"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260123_104644-HVjbXET5A48YsWRVMms2N96KhumVPN.jpg",
    category: "inspection",
    title: "בדיקת התקנת אסלה תלויה",
    alt: "בדק בית - בדיקת מפלס וגובה התקנת אסלה תלויה בחדר רחצה בעזרת פלס וסרט מדידה לאיתור ליקויי התקנה",
    caption: "בדיקת מפלס וגובה התקנת אסלה תלויה בחדר רחצה - בדק בית מקצועי",
    keywords: ["בדק בית", "בדיקת חדר רחצה", "ליקויי התקנה", "בדיקת אסלה", "בדק בית מקצועי"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40%20%285%29-15HtcRRXDeluCIsn3mjL4QaQxRBUys.jpeg",
    category: "inspection",
    title: "בדיקת ניקוז ואינסטלציה במצלמת אנדוסקופ",
    alt: "מומחה בדק בית בודק מחסום רצפה וניקוז בעזרת מצלמת אנדוסקופ לאיתור ליקויי אינסטלציה וסתימות נסתרות",
    caption: "בדיקת ניקוז ומחסומי רצפה בעזרת מצלמת אנדוסקופ - בדק בית הנדסי",
    keywords: ["בדק בית", "בדיקת ניקוז", "ליקויי אינסטלציה", "מצלמת אנדוסקופ", "מחסום רצפה"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.39-3cybkyNPzXAGwzq4fQaKOQSIATmpdu.jpeg",
    category: "inspection",
    title: "בדיקת חוזק וביטחון מעקה מרפסת",
    alt: "בדק בית - בדיקת חוזק ויציבות מעקה מתכת במרפסת בעזרת מד כוח לאיתור ליקויי בטיחות ועמידה בתקן",
    caption: "בדיקת חוזק ויציבות מעקה מרפסת לעמידה בתקן הבטיחות - בדק בית הנדסי",
    keywords: ["בדק בית", "בדיקת מעקה", "בטיחות מרפסת", "ליקויי בטיחות", "עמידה בתקן", "בדק בית מרפסת"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40-JEN0WRnW02UzFGdrQRdjEH32Y3X5nG.jpeg",
    category: "inspection",
    title: "בדיקת צנרת ומערכת אינסטלציה",
    alt: "מומחה בדק בית מודד ובודק צנרת מים ומערכת אינסטלציה בעזרת סרט מדידה לאיתור ליקויי אינסטלציה",
    caption: "בדיקת ומדידת צנרת מים ומערכת אינסטלציה - בדק בית מקיף לדירה",
    keywords: ["בדק בית", "בדיקת אינסטלציה", "צנרת מים", "ליקויי אינסטלציה", "בדק בית דירה"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260130_101536-74GGDPha2EYXmdyZBRifJmXxhOlUSJ.jpg",
    category: "inspection",
    title: "בדיקת תקרת מרפסת במד טמפרטורה",
    alt: "מומחה בדק בית בודק תקרת מרפסת וחיבורי חלונות בעזרת מד טמפרטורה אינפרא אדום לאיתור גשרי קור וליקויי בידוד",
    caption: "בדיקת תקרת מרפסת וחיבורי אלומיניום במד טמפרטורה - איתור גשרי קור וליקויי בידוד",
    keywords: ["בדק בית", "בדיקת מרפסת", "גשר קור", "ליקויי בידוד", "מד טמפרטורה", "בדיקה תרמית"],
  },

  // ---------- ליקויי בנייה (BUILDING DEFECTS) ----------
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-02%20at%2010.33.34-urGLPlIPXHdlv2oXoPxhIExNsi3ndW.jpeg",
    category: "defect",
    title: "ליקוי רטיבות והתפוררות טיח",
    alt: "ליקוי בנייה - רטיבות גבוהה והתפוררות טיח בקיר, נמדד בעזרת מד לחות מקצועי המציג ערך רטיבות גבוה בבדק בית",
    caption: "ליקוי רטיבות והתפוררות טיח בקיר שאותר בעזרת מד לחות - ליקוי בנייה אופייני",
    keywords: ["בדק בית", "ליקוי רטיבות", "רטיבות בקיר", "התפוררות טיח", "מד לחות", "ליקויי בנייה"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260123_100046-VLB7UTzwculmLQywXPab1YbRAv0WYk.jpg",
    category: "defect",
    title: "ליקוי סדק בקיר חיצוני",
    alt: "ליקוי בנייה - סדק בקיר חיצוני ליד מזגן עיבוי, נבדק על ידי מומחה בדק בית עם זכוכית מגדלת לאבחון סדיקה",
    caption: "ליקוי סדק בקיר חיצוני שאותר ותועד בבדק בית - אבחון סדיקה מבנית",
    keywords: ["בדק בית", "ליקוי סדק", "סדק בקיר", "סדיקה מבנית", "ליקויי בנייה", "בדיקת קיר חיצוני"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40%20%284%29-h9iytfUbZzIQKDIuANe1Oeejah5CHf.jpeg",
    category: "defect",
    title: "בדיקת לוח חשמל ומערכת חשמל",
    alt: "בדק בית - בדיקת לוח חשמל, מפסקים, ממסר פחת ומעגלי חשמל לאיתור ליקויי חשמל ובטיחות חשמלית בדירה",
    caption: "בדיקת לוח חשמל, מפסקים וממסר פחת לאיתור ליקויי חשמל - בדק בית הנדסי",
    keywords: ["בדק בית", "ליקויי חשמל", "לוח חשמל", "ממסר פחת", "בטיחות חשמל", "בדיקת חשמל"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260123_105435-qAMNABFCLfPNLibkIWEDbr968SM0gg.jpg",
    category: "defect",
    title: "ליקוי ניקוז וסתימה בצנרת",
    alt: "ליקוי בנייה - שאריות פסולת וסתימה במחסום רצפה שאותרו בעזרת מצלמת אנדוסקופ בבדק בית לאיתור ליקויי אינסטלציה",
    caption: "ליקוי ניקוז ושאריות פסולת בצנרת שאותרו במצלמת אנדוסקופ - ליקוי אינסטלציה",
    keywords: ["בדק בית", "ליקוי ניקוז", "סתימה בצנרת", "ליקויי אינסטלציה", "מצלמת אנדוסקופ", "מחסום רצפה"],
  },

  // ---------- ציוד מקצועי (PROFESSIONAL EQUIPMENT) ----------
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40%20%281%29-9YXrFokzGNasSXorxmhDkc11Cl1llw.jpeg",
    category: "equipment",
    title: "פלס דיגיטלי - מדידת שיפועים",
    alt: "ציוד בדק בית מקצועי - פלס דיגיטלי אלקטרוני למדידת שיפועים, מפלסים וזוויות בדיוק גבוה לאיתור ליקויי בנייה",
    caption: "פלס דיגיטלי אלקטרוני למדידת שיפועים ומפלסים בדיוק גבוה - ציוד בדק בית מקצועי",
    keywords: ["בדק בית", "פלס דיגיטלי", "ציוד בדק בית", "בדיקת שיפועים", "מדידת מפלסים", "ציוד מקצועי"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-02%20at%2010.33.34%20%281%29-8zUspsLnAz592ynX00IMlLUwyCounT.jpeg",
    category: "equipment",
    title: "מצלמה תרמית - איתור רטיבות וכשל בידוד",
    alt: "ציוד בדק בית מקצועי - מצלמה תרמית לאיתור דליפות מים, רטיבות נסתרת, גשרי קור וכשלי בידוד בקירות ובתקרות",
    caption: "מצלמה תרמית לאיתור רטיבות נסתרת, גשרי קור וכשלי בידוד - ציוד בדק בית מתקדם",
    keywords: ["בדק בית", "מצלמה תרמית", "בדיקה תרמוגרפית", "איתור רטיבות", "גשר קור", "ציוד מקצועי"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40%20%283%29-A5AM5IklNjMdjBrDRU64h4TruPp9PE.jpeg",
    category: "equipment",
    title: "מד כוח דיגיטלי - בדיקת חוזק ועוגנים",
    alt: "ציוד בדק בית מקצועי - מד כוח דיגיטלי SHIMPO לבדיקת חוזק חיבורים, עיגון מעקות ואלמנטים לעמידה בתקן הבטיחות",
    caption: "מד כוח דיגיטלי לבדיקת חוזק חיבורים ועיגון מעקות לעמידה בתקן - ציוד בדק בית מקצועי",
    keywords: ["בדק בית", "מד כוח", "בדיקת חוזק", "עיגון מעקה", "בטיחות", "ציוד מקצועי"],
  },
]
