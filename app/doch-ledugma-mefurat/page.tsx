import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PrintButton } from "@/components/print-button"
import { SiteIndex } from "@/components/site-index"

const URL = "https://legalbedek.co.il/doch-ledugma-mefurat"

export const metadata: Metadata = {
  title: "דוח בדק בית מפורט לדוגמה — 67 ליקויים בדירה חדשה | בדק בית Legal",
  description:
    "דוח בדק בית מפורט לדוגמה: חוות דעת מומחה אמיתית מדירה חדשה שבה אותרו 67 ליקויים (פרטים אישיים הוסתרו). ראו סיכום חדר-אחר-חדר, תיעוד מכשירני, ציטוט תקנים ישראליים והמלצות לתיקון מול הקבלן.",
  keywords: [
    "דוח בדק בית לדוגמה",
    "דוח בדק בית מפורט",
    "חוות דעת מומחה לדוגמה",
    "דוגמה לדוח בדק בית",
    "דוח ליקויי בנייה",
    "חוות דעת בדק בית דירה חדשה",
  ],
  authors: [{ name: "יגאל בנסקי" }],
  alternates: { canonical: URL },
  openGraph: {
    title: "דוח בדק בית מפורט לדוגמה — 67 ליקויים בדירה חדשה",
    description:
      "חוות דעת מומחה אמיתית מדירה חדשה: 67 ליקויים, תיעוד מכשירני וציטוט תקנים ישראליים. פרטים אישיים הוסתרו.",
    type: "article",
    locale: "he_IL",
    url: URL,
    siteName: "בדק בית Legal",
  },
  robots: "index, follow",
}

// A real, comprehensive expert-opinion report (67 findings), anonymized: client name,
// exact address, identifiers and the inspectors' personal details/education removed.
// Only the professional credential is retained. Standard citations are kept verbatim.
type Finding = {
  area: string
  defect: string
  standard: string
  fix: string
  conclusion: string
}

const FINDINGS: Finding[] = [
  {
    area: "חדר רחצה — ניקוז",
    defect: "בצילום אנדוסקופי של קו הביוב אותרו לכלוך ושיירי חומרי בנייה בתוך הצנרת, מצב שעלול לגרום לסתימות ולהפרעות בזרימה.",
    standard: "תקנות תכן הבניה (תברואה) — סעיף 3 (ג׳)",
    fix: "ניקוי יסודי של קווי הניקוז בשטיפה בלחץ מים, ווידוא צנרת נקייה ללא מכשולים.",
    conclusion: "הבדיקה אינה תקינה — מערכת ניקוז מזוהמת בפסולת בנייה בניגוד לדרישות התקנות.",
  },
  {
    area: "חדר רחצה — איטום",
    defect: "לא בוצע איטום בחומר גמיש סביב מחסומי הרצפה וקופסאות הביקורת, מה שיוצר נקודות חדירת מים פוטנציאליות אל תשתית המבנה.",
    standard: "תקנות תכן הבניה (תברואה) — סעיף 3 (א׳); המפרט הכללי — סעיף 07.02.06",
    fix: "חריצה סביב המחסום, ניקוי האזור ואיטום בחומר גמיש תקני, אחיד וללא חללים.",
    conclusion: "הבדיקה אינה תקינה — היעדר איטום גמיש עלול לגרום לנזקי רטיבות.",
  },
  {
    area: "חדר רחצה — שיש",
    defect: "במשטח השיש לא בוצע אף מים, דבר העלול לאפשר נזילת מים אל חזית הארונות, לגרום לחדירת רטיבות ולהתנפחות לאורך זמן.",
    standard: "ת״י 4440 חלק 1 — סעיף 3.1",
    fix: "ביצוע אף מים תקני בקדמת משטח השיש (חריץ תחתון רציף), או החלפת המשטח במשטח הכולל אף מים מובנה.",
    conclusion: "הבדיקה אינה תקינה — היעדר אף מים בשיש בניגוד לתקן.",
  },
  {
    area: "חדר רחצה הורים — כיור",
    defect: "רשת הכיור (מסננת הסיפון) הותקנה כשהיא פגומה — אינה מונעת חדירת פסולת וגופים זרים לצנרת כנדרש.",
    standard: "ת״י 1205 חלק 2 — מערכת הנקזים",
    fix: "החלפת החלק הפגום ברשת תקינה ושלמה.",
    conclusion: "הבדיקה אינה תקינה — רשת פגומה אינה עומדת בדרישות התקן למניעת חדירת פסולת.",
  },
  {
    area: "חדר שינה — ריצוף",
    defect: "אותרו אריחים פגומים במספר מוקדים — שברים, שריטות וסימני השחזה — המהווים ליקוי אסתטי במערכת הריצוף.",
    standard: "ת״י 1555 חלק 3 — סעיפים 3.1, 5.1.4.2",
    fix: "פירוק האריחים הפגומים והחלפתם באריחים חדשים מאותה סדרת ייצור, והשלמת מילוי רובה כנדרש.",
    conclusion: "הבדיקה אינה תקינה — פגמים מכניים באריחים בניגוד לדרישות התקן.",
  },
  {
    area: "חדר שינה — חלון",
    defect: "בבדיקה עם מגנט אותרו ברגים שאינם אל-חלד (פלב״ם), דבר העלול לגרום לקורוזיה, לפגיעה בגימור ולהחלשת חיבורי המסגרת לאורך זמן.",
    standard: "ת״י 1068 חלק 1 — סעיף 204.2.3",
    fix: "החלפת כל ברגי החיבור הקיימים לברגי אל-חלד (פלב״ם) עמידים בקורוזיה.",
    conclusion: "הבדיקה אינה תקינה — ברגים מחלידים בניגוד לדרישות התקן.",
  },
  {
    area: "חדר שירות — חלון",
    defect: "בכנף החלון לא הותקנו אטמים, פקקים ומברשות איטום כנדרש, וכן לא בוצעו פתחי ניקוז — דבר הפוגע באיטום, בבידוד האקוסטי והתרמי.",
    standard: "ת״י 1068 חלק 1 — סעיף 203",
    fix: "השלמת אטמים, פקקים ומברשות איטום מתאימים, וביצוע פתחי ניקוז בהתאם להנחיות היצרן.",
    conclusion: "הבדיקה אינה תקינה — חסרים רכיבי אטימה וניקוז בחלון.",
  },
  {
    area: "כלל הבית — מיזוג אוויר",
    defect: "בבדיקה עם מצלמה תרמית לא נמדד כל שינוי בטמפרטורה בעת פעולת המזגן — אינדיקציה לתקלה במעבה, בבידוד התעלה או בתפקוד המערכת.",
    standard: "ת״י 994 חלק 1, ת״י 1525 חלק 2",
    fix: "בדיקת תעלות ואטימותן, בדיקת בידוד תרמי, מדידת ספיקת אוויר ובדיקת המעבה וכמות הגז ע״י טכנאי מוסמך.",
    conclusion: "הבדיקה אינה תקינה — מערכת המיזוג אינה מספקת קירור בניגוד לתקן.",
  },
  {
    area: "מבואת כניסה — חשמל",
    defect: "מפסק חשמלי הותקן באופן רופף וללא קיבוע יציב לקיר — ליקוי בטיחותי בניגוד לתקנות החשמל.",
    standard: "תקנות החשמל (מעגלים סופיים עד 1000 וולט) — סעיפים 5+6",
    fix: "פירוק, בדיקת תקינות החיווט, והתקנה מחדש עם קיבוע יציב ע״י חשמלאי מוסמך.",
    conclusion: "הבדיקה אינה תקינה — אביזר חשמל לא מקובע המהווה סיכון בטיחותי.",
  },
  {
    area: "מבואת כניסה — דלת",
    defect: "נראו שיירי פסולת בנייה וחומרי מליטה על משקוף דלת הכניסה, וכן פגמים בצבע המשקוף — ליקוי אסתטי הפוגע במראה הכללי.",
    standard: "ת״י 5044 חלק 2, ת״י 1161 (2001), ת״י 23 חלק 1",
    fix: "ניקוי מבוקר של השאריות, שיוף וצביעה מחודשת בגוון אחיד; בדיקת הגנה נגד חלודה בעת חשיפת המתכת.",
    conclusion: "הבדיקה אינה תקינה — כתמי צבע וטיח במשקוף בניגוד לדרישות הגימור.",
  },
  {
    area: "מחסן — רטיבות",
    defect: "בבדיקה עם מד לחות (פרוטימטר) נמדדו ערכים גבוהים המעידים על לחות בקיר ועל נזילה פעילה. הבדיקה משמשת לאינדיקציה ראשונית.",
    standard: "ת״י 1920 חלק 2, ת״י 1525 חלק 1 (סעיף 2.3.1), תקנה 5.32",
    fix: "איתור מקור הנזילה (בדיקות לחץ/מצלמה תרמית), תיקון מקור החדירה, ייבוש מלא ושיקום הקיר; תיקוני טיח וצבע רק לאחר ייבוש.",
    conclusion: "הבדיקה אינה תקינה — קריאה חריגה בפרוטימטר המחייבת חקירה וטיפול.",
  },
  {
    area: "מחסן — צבע",
    defect: "בגמר הצבע נראו סימני זחילה ובועות — מראה לא אחיד הפוגע באיכות הגימור הסופי, בניגוד לדרישה הכללית בתקן.",
    standard: "ת״י 1945 — סעיף 2.1",
    fix: "שיוף הקיר, ניקוי פני השטח, וצביעה מחדש בשתי שכבות בתערובת אחידה בגוון התואם למוזמן.",
    conclusion: "הבדיקה אינה תקינה — גימור צבע לקוי בניגוד לתקן.",
  },
  {
    area: "מטבח — חשמל",
    defect: "אותרה נקודת חשמל חשופה ללא מכסה — ליקוי בטיחותי קריטי העלול להביא למגע ישיר עם מוליכים חיים ולסכנת התחשמלות.",
    standard: "תקנות החשמל (מעגלים סופיים עד 1000 וולט) — סעיפים 5+6",
    fix: "השלמת מכסים תקניים לכל השקעים והמפסקים, וקיבוע יציב למניעת מגע ישיר עם מתח חי.",
    conclusion: "הבדיקה אינה תקינה — נקודת חשמל חשופה המהווה סכנת בטיחות מיידית.",
  },
  {
    area: "מטבח — אינסטלציה",
    defect: "הסיפון והצנרת מתחת לכיור הותקנו בצורה לקויה החורגת מכללי המקצוע, והפתח בארון אינו מול קופסת הביקורת — פגיעה בנגישות לתחזוקה.",
    standard: "ת״י 1205 חלק 0 (סעיף 2.4), ת״י 1205 חלק 2 (סעיף 4.3.2)",
    fix: "פירוק והתקנה מקצועית וישרה של הסיפון, והתאמת הפתח בארון מול פתח הביקורת לגישה מלאה.",
    conclusion: "הבדיקה אינה תקינה — התקנת אינסטלציה החורגת מכללי המקצוע ומהתקן.",
  },
  {
    area: "מטבח — ברז",
    defect: "ברז המטבח אינו נפתח במלואו ומתנגש באריח החיפוי, מצב המונע ספיקת מים תקינה ופוגע בשימוש התפקודי באביזר.",
    standard: "ת״י 1205 חלק 3 (סעיף 3.1), ת״י 1205 חלק 1 (טבלה 2)",
    fix: "הרחקת נקודת הברז מהקיר או החלפת הברז בדגם תקני שאינו מתנגש, ווידוא ספיקה תקנית.",
    conclusion: "הבדיקה אינה תקינה — ברז חסום שאינו מאפשר תפעול וספיקה כנדרש.",
  },
  {
    area: "מטבח — רטיבות",
    defect: "בבדיקה עם מד לחות ומצלמה תרמית נמצאו ערכים גבוהים המעידים על לחות בקיר ועל נזילה פעילה מאחורי המטבח.",
    standard: "ת״י 1920 חלק 2, ת״י 1525 חלק 1 (סעיף 2.3.1), תקנה 5.32",
    fix: "איתור מקור הנזילה, תיקון החדירה, ייבוש מלא ושיקום הקיר, ותיקוני גמר רק לאחר ווידוא ייבוש.",
    conclusion: "הבדיקה אינה תקינה — אינדיקציה תרמית ומכשירנית לרטיבות פעילה בקיר.",
  },
  {
    area: "ממ״ד — דלת ומשקוף",
    defect: "דלת הממ״ד והמשקוף צבועים בגוונים שונים, ובמשקוף נותרו חורי צירים גלויים בצד שאינו בשימוש — פגמים חזותיים בגימור המכלל.",
    standard: "ת״י 4422 חלק 2 (2019) כולל ג״ת 1, שרטוט פיקוד העורף 2061",
    fix: "אטימת חורי הצירים, שיוף, וצביעה מחודשת של הכנף והמשקוף בגוון אחיד לפי שיטת RAL, תוך הגנה על האטמים.",
    conclusion: "הבדיקה אינה תקינה — חוסר אחידות בגוון וחורים גלויים בניגוד לתקן הממ״ד.",
  },
  {
    area: "מסתור כביסה — דוד שמש",
    defect: "לא הותקן מיכל התפשטות תקני במערכת המים החמים — מצב העלול לגרום לטפטוף בלתי פוסק משסתום הביטחון, לבזבוז מים ולרטיבות.",
    standard: "ת״י 1205 חלק 1 (2014) — סעיפים 2.12.5, תקנות הל״ת",
    fix: "התקנת מיכל התפשטות תקני בקו הזנת המים הקרים לדוד לפי נפחו, ווידוא שסתום פורק לחץ ואל-חוזר תקינים.",
    conclusion: "הבדיקה אינה תקינה — היעדר מיכל התפשטות בניגוד לדרישות התקן.",
  },
  {
    area: "מסתור כביסה — מחלקי מים",
    defect: "נמדד מרחק של פחות מ־10 ס״מ בין שני מחלקי המים (חנוכייה), ללא הפרדה בין המים החמים לקרים — מצב המקשה על תחזוקה והחלפת צנרת.",
    standard: "ת״י 5433 חלק 6 — סעיף 3.3.1",
    fix: "התקנה בגובה מינימלי של 30 ס״מ מהרצפה, שמירת מרחק של 10 ס״מ לפחות בין המחלקים והבטחת גישה נוחה לטיפול.",
    conclusion: "הבדיקה אינה תקינה — מרווח לא תקני בין המחלקים בניגוד לתקן.",
  },
  {
    area: "מרפסת שמש — שיפוע",
    defect: "נמדד שיפוע ריצוף של 0.52% בלבד לכיוון הנקז — פחות מ־1% הנדרש, מצב העלול לגרום להצטברות מים ולחדירתם למבנה.",
    standard: "ת״י 1555 חלק 3 — סעיף 3.2",
    fix: "פירוק הריצוף, ביצוע שכבת שיפועים לכיוון הנקז וריצוף מחדש בשיפוע מינימלי של 1%.",
    conclusion: "הבדיקה אינה תקינה — שיפוע ניקוז נמוך מהמותר בתקן.",
  },
  {
    area: "מרפסת שמש — חיפוי",
    defect: "נמדד הפרש גובה של 3.1 מ״מ בין אריחים סמוכים בחיפוי הקרמיקה — חריגה מהמותר (1.5 מ״מ) הפוגעת באיכות הגימור.",
    standard: "ת״י 1555 חלק 2 — סעיף 3.2.2",
    fix: "פירוק האריחים במוקדים החורגים וריצוף מחדש תוך שמירה על מישוריות והפרש גובה שאינו עולה על 1.5 מ״מ.",
    conclusion: "הבדיקה אינה תקינה — הפרשי גובה בין אריחים חורגים מדרישות התקן.",
  },
  {
    area: "מרפסת שמש — מעקה",
    defect: "זכוכית המעקה הותקנה בצורה לקויה — מרווחים לא אחידים בין הלוחות, בניגוד לדרישות הדיוק והגיאומטריה בתקן המעקים.",
    standard: "ת״י 1142 (2019) כולל ג״ת 1, ת״י 1099 חלק 1.1",
    fix: "פילוק ויישור לוחות הזכוכית למרווח אחיד, קיבוע מחדש, ובדיקת מעבדה מאושרת לעמידה בדרישות התקן.",
    conclusion: "הבדיקה אינה תקינה — עיוות צורה בהתקנת המעקה בניגוד לת״י 1142.",
  },
  {
    area: "סלון — לוח חשמל",
    defect: "לוח החשמל נמצא ללא מכסי הגנה (PVC) על פסי הצבירה וחלקים חיים — סיכון בטיחותי קריטי של מגע ישיר עם מתח חשמלי.",
    standard: "תקנות החשמל (התקנת לוחות עד 1000 וולט) — סעיף 17",
    fix: "השלמה מיידית של כל מכסי ההגנה החסרים והבטחת דרגת הגנה IP2XX לפחות.",
    conclusion: "הבדיקה אינה תקינה — לוח חשמל חשוף המהווה סכנת התחשמלות.",
  },
]

// Room-by-room summary — the report's own credibility-building overview (67 findings total).
const AREA_SUMMARY: { area: string; count: number }[] = [
  { area: "חדר רחצה", count: 5 },
  { area: "חדר רחצה הורים", count: 3 },
  { area: "חדר שינה", count: 2 },
  { area: "חדר שירות", count: 2 },
  { area: "כלל הבית", count: 2 },
  { area: "מבואת כניסה", count: 3 },
  { area: "מחסן", count: 10 },
  { area: "מטבח", count: 14 },
  { area: "ממ״ד", count: 4 },
  { area: "מסתור כביסה", count: 6 },
  { area: "מרפסת שמש", count: 8 },
  { area: "סלון", count: 8 },
]

// Bedek / warranty periods per חוק המכר — non-identifying reference content.
const WARRANTY_PERIODS: { item: string; period: string }[] = [
  { item: "ליקויי מסגרות, נגרות, אלומיניום ופלסטיק", period: "שנתיים" },
  { item: "ליקויי ריצוף וחיפוי פנים (לרבות שקיעה ושחיקה)", period: "שנתיים" },
  { item: "כשל בתפקוד ובעמידות של מכונות ודודים", period: "3 שנים" },
  { item: "כשל במרכיבי הבידוד הטרמי", period: "3 שנים" },
  { item: "נזילות במערכת אינסטלציה, מים, הסקה, מרזבים, דלוחין וביוב", period: "4 שנים" },
  { item: "סדקים ברוחב גדול מ־1.5 מ״מ ברכיבים לא נושאים", period: "5 שנים" },
  { item: "התנתקות, התקלפות או התפוררות של חיפוי חוץ", period: "7 שנים" },
  { item: "כל אי־התאמה אחרת שאינה יסודית", period: "שנה" },
]

// Documented tool/method photos from the field library (illustrative, non-identifying).
const TOOL_PHOTOS: { src: string; alt: string; caption: string }[] = [
  { src: "/gallery/bedikat-nikuz-matzlemat-endoskop.webp", alt: "בדיקת ניקוז במצלמת אנדוסקופ", caption: "צילום צנרת הניקוז במצלמת אנדוסקופ" },
  { src: "/gallery/matzlema-termit-itur-retivut.webp", alt: "מצלמה תרמית לאיתור רטיבות", caption: "איתור רטיבות במצלמה תרמית" },
  { src: "/gallery/mad-lachut-protimeter-bedek-bayit.webp", alt: "מד לחות פרוטימטר", caption: "מדידת לחות בקיר במד לחות (פרוטימטר)" },
  { src: "/gallery/bedika-termit-mizug-avir-dira-hadasha.webp", alt: "בדיקה תרמית של מיזוג אוויר", caption: "בדיקת מיזוג אוויר במצלמה תרמית" },
  { src: "/gallery/bedikat-mishoriyut-ritzuf-peles-aroch.webp", alt: "בדיקת מישוריות ושיפוע ריצוף", caption: "מדידת שיפוע ומישוריות ריצוף בפלס" },
  { src: "/gallery/bedikat-luach-chashmal.webp", alt: "בדיקת לוח חשמל", caption: "בדיקת בטיחות לוח החשמל" },
  { src: "/gallery/bedikat-chozek-maake-mirpeset.webp", alt: "בדיקת מעקה מרפסת", caption: "בדיקת מעקה הזכוכית במרפסת" },
  { src: "/gallery/likui-nikuz-stima-tzanrat.webp", alt: "סתימה בצנרת ניקוז", caption: "שיירי חומרי בנייה בצנרת הניקוז" },
]

export default function DetailedSampleReportPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: "https://legalbedek.co.il" },
      { "@type": "ListItem", position: 2, name: "דוח בדק בית מפורט לדוגמה", item: URL },
    ],
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "דוח בדק בית מפורט לדוגמה — 67 ליקויים בדירה חדשה",
    description:
      "דוגמה אמיתית לחוות דעת מומחה מקיפה מדירה חדשה, שבה אותרו 67 ליקויים, לאחר הסתרת פרטים אישיים.",
    inLanguage: "he",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Person", name: "יגאל בנסקי", "@id": "https://legalbedek.co.il/#yigal-bensky" },
    publisher: { "@id": "https://legalbedek.co.il/#organization" },
    mainEntityOfPage: URL,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff; }
          .finding-card { break-inside: avoid; box-shadow: none !important; border: 1px solid #e2e8f0; }
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-sm border-b no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 space-x-reverse">
              <Image
                src="/logo.webp"
                alt="בדק בית Legal - מומחה לאיתור ליקויי בנייה"
                width={64}
                height={64}
                className="object-contain w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <span className="text-lg md:text-xl font-bold text-gray-900">בדק בית Legal</span>
                <p className="text-xs md:text-sm text-slate-600">מומחה לאיתור ליקויי בנייה</p>
              </div>
            </Link>
            <Link href="/" className="text-sm md:text-base text-blue-600 hover:text-blue-700 hover:underline font-medium">
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="bg-white border-b border-gray-100 no-print">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            <li className="flex items-center gap-1">
              <Link href="/" className="text-blue-600 hover:underline">דף הבית</Link>
              <span className="text-gray-400 px-1">{"›"}</span>
            </li>
            <li>
              <span className="text-gray-700 font-medium" aria-current="page">דוח בדק בית מפורט לדוגמה</span>
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Intro */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-semibold mb-4 no-print">
              דוגמה אמיתית — 67 ליקויים
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
              דוח בדק בית מפורט לדוגמה — חוות דעת מומחה
            </h1>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
              לפניכם דוגמה אמיתית לחוות דעת מומחה מקיפה, שנערכה לאחר בדק בית לדירת ארבעה חדרים חדשה מקבלן. בבדיקה אותרו
              67 ליקויים בכל חלקי הדירה. כך תוכלו לראות בדיוק מה מקבלים: תיעוד שיטתי חדר-אחר-חדר, מדידות מכשירניות, ציטוט
              התקן הישראלי הרלוונטי לכל ליקוי, הסבר מה נדרש לתקן ומסקנה ברורה — מסמך הקביל כראיה מול הקבלן ובבית משפט.
            </p>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 md:p-5 text-sm md:text-base text-amber-900 leading-relaxed">
              <strong>הבהרה:</strong> זהו דוח אמיתי שהוסתרו בו כל הפרטים המזהים — שם המזמין, כתובת מדויקת ומזהי נכס, וכן
              פרטיהם האישיים של מבצעי הבדיקה — מטעמי פרטיות. הליקויים, התקנים והמבנה המקצועי מוצגים כפי שהם.
            </div>
          </div>
        </section>

        {/* Report meta */}
        <section className="pb-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-slate-900 text-white p-5 md:p-6">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-400">פרטי הבדיקה</span>
                <h2 className="mt-1.5 text-xl md:text-2xl font-bold">חוות דעת מומחה — בדק בית לדירה חדשה</h2>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-slate-200">
                {[
                  { k: "סוג הנכס", v: "דירת 4 חדרים בבניין מגורים חדש, כולל מחסן וחניה" },
                  { k: "אזור", v: "בת ים" },
                  { k: "סך הליקויים שאותרו", v: "67 ליקויים ב־12 אזורים בדירה" },
                  { k: "מצב הנכס", v: "מאוכלס, מחובר לרשת החשמל והמים" },
                  { k: "שיטת הבדיקה", v: "בדיקה בלתי הרסנית — מצלמה תרמית, מד לחות, אנדוסקופ, פלס דיגיטלי" },
                  { k: "עורך הדוח", v: "מומחה מוסמך — מטעם איגוד המהנדסים וברישיון משרד העבודה" },
                ].map((row) => (
                  <div key={row.k} className="p-4 md:p-5">
                    <dt className="text-xs font-bold text-slate-500 mb-1">{row.k}</dt>
                    <dd className="text-sm md:text-base font-semibold text-slate-900 leading-relaxed">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 no-print">
              <PrintButton label="הורדת הדוח (שמירה כ-PDF)" />
              <a
                href="https://wa.me/972506277858"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"
              >
                לתיאום בדק בית לנכס שלכם
              </a>
            </div>
          </div>
        </section>

        {/* Room-by-room summary */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">סיכום הליקויים לפי אזור</h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
              כך נראה עמוד הסיכום בפתח הדוח — פירוט כמות הליקויים בכל חלק בדירה. סיכום זה מאפשר להבין במבט אחד את היקף
              הליקויים ואת ריכוזם.
            </p>
            <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 shadow-sm">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-sm md:text-base font-bold">אזור בדירה</th>
                    <th className="px-4 py-3 text-sm md:text-base font-bold whitespace-nowrap">כמות ליקויים</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {AREA_SUMMARY.map((row) => (
                    <tr key={row.area} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm md:text-base text-slate-800 leading-relaxed">{row.area}</td>
                      <td className="px-4 py-3 text-sm md:text-base font-bold text-blue-700 whitespace-nowrap">{row.count}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-100 font-bold">
                    <td className="px-4 py-3 text-sm md:text-base text-slate-900">סה״כ</td>
                    <td className="px-4 py-3 text-sm md:text-base text-blue-800 whitespace-nowrap">67</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Findings */}
        <section className="pb-10 md:pb-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">ממצאי הבדיקה — מבחר מייצג</h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
              להלן מבחר מתוך 67 הליקויים שאותרו בדירה, בפורמט שבו מתועד כל ליקוי בדוח המלא: מיקום, תיאור, הפנייה לתקן,
              נדרש לתקן ומסקנה. כל ליקוי בדוח המקורי מגובה בתמונה מסומנת ובהפניה מדויקת לסעיף בתקן.
            </p>
            <div className="space-y-5">
              {FINDINGS.map((f, i) => (
                <div key={f.area + i} className="finding-card rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between gap-3 bg-slate-50 border-b border-slate-200 px-5 py-3">
                    <h3 className="text-base md:text-lg font-bold text-slate-900">{f.area}</h3>
                    <span className="font-mono text-xs font-bold tracking-widest text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <dl className="divide-y divide-slate-100">
                    <div className="px-5 py-3 sm:flex sm:gap-4">
                      <dt className="sm:w-32 shrink-0 text-xs font-bold text-slate-500 mb-1 sm:mb-0 sm:pt-0.5">תיאור הליקוי</dt>
                      <dd className="text-sm md:text-base text-slate-800 leading-relaxed">{f.defect}</dd>
                    </div>
                    <div className="px-5 py-3 sm:flex sm:gap-4">
                      <dt className="sm:w-32 shrink-0 text-xs font-bold text-slate-500 mb-1 sm:mb-0 sm:pt-0.5">הפנייה לתקן</dt>
                      <dd className="text-sm md:text-base font-semibold text-blue-700 leading-relaxed">{f.standard}</dd>
                    </div>
                    <div className="px-5 py-3 sm:flex sm:gap-4">
                      <dt className="sm:w-32 shrink-0 text-xs font-bold text-slate-500 mb-1 sm:mb-0 sm:pt-0.5">נדרש לתקן</dt>
                      <dd className="text-sm md:text-base text-slate-800 leading-relaxed">{f.fix}</dd>
                    </div>
                    <div className="px-5 py-3 sm:flex sm:gap-4">
                      <dt className="sm:w-32 shrink-0 text-xs font-bold text-slate-500 mb-1 sm:mb-0 sm:pt-0.5">מסקנה</dt>
                      <dd className="text-sm md:text-base text-slate-800 leading-relaxed font-medium">{f.conclusion}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool / method photos */}
        <section className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">תיעוד מהשטח — ציוד ושיטות בדיקה</h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
              הבדיקה בוצעה בעזרת ציוד הנדסי המאתר גם ליקויים נסתרים שאינם נראים לעין. להלן תמונות מייצגות משיטות הבדיקה
              והמכשור.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TOOL_PHOTOS.map((p) => (
                <figure key={p.src} className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <figcaption className="px-3 py-2 text-xs md:text-sm text-slate-600 leading-snug text-center">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Professional note */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">הבהרה מקצועית</h2>
            <p className="text-base text-slate-700 leading-relaxed mb-3">
              הבדיקה מבוצעת באמצעים בלתי הרסניים — מצלמה תרמית, מד לחות ואנדוסקופ — והמסקנות מבוססות על אינדיקציות
              מקצועיות מקובלות. קריאה חריגה במד לחות מהווה ממצא חשוד המחייב חקירה, אך אינה מהווה בדיקה תקנית סופית לקביעת
              אחוז רטיבות, הנעשית במעבדה מוסמכת. במקרים המתאימים מומלץ להיעזר במאתר נזילות ובשירותי מעבדה של מכון התקנים.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              אומדן עלות התיקונים אינו נכלל בדוח הליקויים, וניתן בנפרד לפי דרישה, על פי מחירון מקובל.
            </p>
          </div>
        </section>

        {/* Warranty periods table */}
        <section className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">תקופות הבדק והאחריות לפי חוק המכר</h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
              לכל סוג ליקוי תקופת בדק משלו, שבמהלכה האחריות לתיקון מוטלת על הקבלן. איתור הליקויים ותיעודם בדוח בזמן —
              בעוד התקופות בתוקף — הוא מה שמאפשר לממש את זכויותיכם.
            </p>
            <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 shadow-sm">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-sm md:text-base font-bold">סוג הליקוי</th>
                    <th className="px-4 py-3 text-sm md:text-base font-bold whitespace-nowrap">תקופת בדק</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {WARRANTY_PERIODS.map((row) => (
                    <tr key={row.item} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm md:text-base text-slate-800 leading-relaxed">{row.item}</td>
                      <td className="px-4 py-3 text-sm md:text-base font-bold text-blue-700 whitespace-nowrap">{row.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              לאחר תקופת הבדק מתחילה תקופת אחריות נוספת של 3 שנים, שבה נטל ההוכחה עובר לרוכש.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-l from-blue-700 to-blue-900 text-white no-print">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">רוצים דוח כזה לנכס שלכם?</h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              כל בדיקה מסתכמת בדוח מפורט, מצולם וקביל — שמחייב את הקבלן לתקן. צרו קשר לתיאום בדק בית מקצועי בכל הארץ,
              וקבלו הצעת מחיר ללא התחייבות.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+972506277858"
                className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-colors"
              >
                חייגו עכשיו: 050-6277858
              </a>
              <a
                href="https://wa.me/972506277858"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-4 rounded-lg font-bold transition-all"
              >
                שליחת הודעת WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-10 bg-gray-50 no-print">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">עמודים נוספים שיעזרו לכם</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "דוח בדק בית לדוגמה נוסף", href: "/doch-ledugma" },
                { label: "צ׳קליסט בדק בית להורדה", href: "/checklist-bedek-bayit" },
                { label: "בדק בית לפני מסירה", href: "/services/bedek-bayit-lifnei-mesira" },
                { label: "חוות דעת מומחה", href: "/services/chavat-daat-mumche" },
                { label: "כמה עולה בדק בית", href: "/mehir-bedek-bayit" },
                { label: "מאגר ליקויי הבנייה", href: "/likuyey-bniya" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="no-print">
        <SiteIndex />
      </div>

      <footer className="bg-gray-900 text-white py-8 no-print">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 mb-2">בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה וחוות דעת נגדית</p>
          <p className="text-gray-400 text-sm">📞 050-6277858 | שירות בכל הארץ</p>
          <p className="text-gray-500 text-xs mt-4">© 2020 בדק בית Legal - כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}
