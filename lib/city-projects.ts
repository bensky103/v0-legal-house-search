// Real, named new-construction projects per city (2026), provided by the site owner.
// Rendered as H3 headings on each city page so that searches like
// "<project name> בדק בית" surface the relevant city page. These are real project
// names — do not invent or fabricate projects or developer details.

export interface CityProject {
  /** Project name as marketed. */
  name: string
  /** Neighborhood / street / context. */
  area: string
}

export const cityProjects: Record<string, CityProject[]> = {
  "tel-aviv": [
    { name: "YAMA TLV", area: "רובע שדה דב, צפון העיר" },
    { name: "TRUE TLV", area: "מתחם דפנה, פינוי-בינוי" },
    { name: "תדהר בין השדרות", area: "רחוב לה גווארדיה" },
    { name: "Duo Tel Aviv", area: "מרכז העיר" },
    { name: "YARD", area: "שכונת נווה שרת" },
    { name: "מתחם בזל", area: "לב העיר" },
  ],
  "ramat-gan": [
    { name: "EXCHANGE רמת גן", area: "אזור הבורסה, רחוב ארלוזורוב" },
    { name: "מתחם עמק החולה", area: "התחדשות עירונית ופינוי-בינוי" },
    { name: "מגדלי התמרים", area: "מרכז העיר" },
  ],
  "petah-tikva": [
    { name: "משה סנה 29-31", area: "אם המושבות החדשה" },
    { name: "NEARO פתח תקווה", area: "אזור קרית אריה / השחם" },
    { name: "שבירו לב פתח תקווה", area: "רחוב רוטשילד, מרכז העיר" },
    { name: "שדרת הסביונים", area: "שכונת מגורים מודרנית" },
  ],
  holon: [
    { name: "תל גיבורים", area: "שכונה מתחדשת" },
    { name: "האצל 18", area: "בנייה חדשה והתחדשות עירונית" },
    { name: "חולון ח-500", area: "שכונה חדשה בדרום העיר" },
  ],
  "bat-yam": [
    { name: "תדהר במבצע סיני", area: "פינוי-בינוי בשכונת רמת יוסף" },
    { name: "הגיבורים בת ים", area: "כניסה לעיר" },
    { name: "אפטאון טאואר (Uptown)", area: "מתחם מעורב שימושים קרוב לחוף" },
  ],
  raanana: [
    { name: "Kedar Vision", area: "רחוב גאולה 7, 9, 11" },
    { name: "עלי מוהר 10", area: "שכונת נווה זמר" },
    { name: "מכבי 30", area: "תמ\"א 38 הריסה ובנייה, מרכז העיר" },
    { name: "סביוני רעננה", area: "צפון / מערב העיר" },
  ],
  netanya: [
    { name: "מתחם הרובע החדש (נורדאו)", area: "התחדשות עירונית בדרום העיר" },
    { name: "YAMA", area: "שכונת עיר ימים, קו ראשון לים" },
    { name: "סביוני השמורה", area: "סמוך לשמורת האירוסים" },
    { name: "נתניה 542", area: "רובע מגורים חדש" },
  ],
  "kfar-saba": [
    { name: "אוסטשינסקי 5", area: "בנייה חדשה" },
    { name: "שכונת הזמר העברי (הירוקה)", area: "בנייה רוויה" },
  ],
  herzliya: [
    { name: "הירדן 8", area: "תמ\"א 38 הריסה ובנייה מחדש" },
    { name: "מתחם אולפני הרצליה", area: "מגורי יוקרה בלב העיר" },
  ],
  jerusalem: [
    { name: "VISION ירושלים", area: "דרך חברון" },
    { name: "SOHO ירושלים", area: "מתחם מגורים אורבני" },
    { name: "רמות 360", area: "מעל קניון רמות" },
    { name: "הכוכב החמישי", area: "שכונת בית וגן" },
    { name: "סביוני רמת שרת Premium", area: "שכונת מגורים סגורה" },
  ],
  ashkelon: [
    { name: "דמרי רמות אשקלון", area: "צפון / מזרח העיר" },
    { name: "אזורים ליווינג", area: "שכונת האגמים" },
    { name: "דמרי ברנע", area: "רמת כרמים, שכונת ברנע" },
  ],
  "beer-sheva": [
    { name: "סנטרל פארק 17", area: "לב העיר, 17 מגדלים" },
    { name: "פארק הנחל", area: "דרום-מזרח העיר" },
  ],
  netivot: [
    { name: "HIGH מול הנחל", area: "מעלות הנחל, גדות נחל בוהו" },
    { name: "נופי יורם", area: "שכונה חדשה בהסכמי הגג" },
  ],
  ashdod: [
    { name: "Harmony אשדוד", area: "8 בניינים עם פארק גג, קרוב לים" },
    { name: "כוכב הצפון", area: "מתחם מגורים, מסחר ומרכז עסקים" },
  ],
  haifa: [
    { name: "רוטשילד פארק", area: "אזור מתחדש" },
    { name: "נאות פרס (שלב ב')", area: "מבואות דרומיים" },
  ],
  kiryot: [
    { name: "אפקה בשמורה", area: "שכונת אפקה החדשה, קריית ביאליק" },
    { name: "Uptown קריית ביאליק", area: "מרכז הקריות" },
    { name: "סביוני הגבעה", area: "קריית אתא" },
  ],
  nesher: [
    { name: "אגמי בראשית", area: "מגורים מול נוף פתוח" },
  ],
  "nof-hagalil": [
    { name: "TOP גליל", area: "שכונת הר יונה ב', בנייה רוויה" },
  ],
}

export function getCityProjects(slug: string): CityProject[] {
  return cityProjects[slug] ?? []
}
