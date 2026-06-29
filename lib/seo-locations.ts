// SEO landing page data for cities, contractors, projects, neighborhoods, etc.

export interface CityData {
  slug: string
  name: string // עיר בנטייה (בתל אביב, בחיפה)
  nameSimple: string // שם פשוט (תל אביב)
  region: string
  description: string
}

export const cities: CityData[] = [
  {
    slug: "tel-aviv",
    name: "תל אביב",
    nameSimple: "תל אביב",
    region: "גוש דן",
    description: "תל אביב היא מוקד הבנייה המרכזי בישראל, עם פרויקטים רבים של התחדשות עירונית, מגדלי מגורים ודירות יוקרה.",
  },
  {
    slug: "jerusalem",
    name: "ירושלים",
    nameSimple: "ירושלים",
    region: "אזור ירושלים",
    description: "ירושלים משלבת בנייה חדשה לצד נכסים ותיקים, ודורשת בדיקה הנדסית מקצועית בהתאמה לאופי הבנייה המקומי.",
  },
  {
    slug: "haifa",
    name: "חיפה",
    nameSimple: "חיפה",
    region: "אזור הצפון",
    description: "חיפה, עיר הר וים, מאופיינת בבנייה על מדרונות ובאזורים עם רמות לחות גבוהות הדורשים בדיקת איטום ורטיבות מדוקדקת.",
  },
  {
    slug: "rishon-lezion",
    name: "ראשון לציון",
    nameSimple: "ראשון לציון",
    region: "גוש דן",
    description: "ראשון לציון היא אחת הערים הגדלות במהירות, עם שכונות חדשות ופרויקטי בנייה רבים הדורשים פיקוח הנדסי.",
  },
  {
    slug: "petah-tikva",
    name: "פתח תקווה",
    nameSimple: "פתח תקווה",
    region: "גוש דן",
    description: "פתח תקווה מובילה בפרויקטי התחדשות עירונית ובנייה חדשה, ומציעה הזדמנויות רבות לרוכשי דירות.",
  },
  {
    slug: "netanya",
    name: "נתניה",
    nameSimple: "נתניה",
    region: "אזור השרון",
    description: "נתניה, עיר חוף מתפתחת, כוללת פרויקטי מגורים רבים לאורך קו החוף ובשכונות החדשות במזרח העיר.",
  },
  {
    slug: "beer-sheva",
    name: "באר שבע",
    nameSimple: "באר שבע",
    region: "אזור הדרום",
    description: "באר שבע, בירת הנגב, חווה תנופת בנייה משמעותית עם שכונות חדשות ופרויקטי מגורים גדולים.",
  },
  {
    slug: "ashdod",
    name: "אשדוד",
    nameSimple: "אשדוד",
    region: "אזור הדרום",
    description: "אשדוד היא עיר נמל מתפתחת עם בנייה חדשה רבה, הדורשת בדיקה הנדסית מקצועית בשל קרבתה לים.",
  },
  {
    slug: "rehovot",
    name: "רחובות",
    nameSimple: "רחובות",
    region: "אזור המרכז",
    description: "רחובות משלבת בנייה אקדמית וחדשה, עם שכונות מגורים חדשות הדורשות ליווי הנדסי מקצועי.",
  },
  {
    slug: "herzliya",
    name: "הרצליה",
    nameSimple: "הרצליה",
    region: "אזור השרון",
    description: "הרצליה מציעה דירות יוקרה ופרויקטים איכותיים, שבהם בדק בית מקצועי קריטי לשמירה על ערך הנכס.",
  },
  {
    slug: "kfar-saba",
    name: "כפר סבא",
    nameSimple: "כפר סבא",
    region: "אזור השרון",
    description: "כפר סבא היא עיר ירוקה ומתוכננת היטב, עם בנייה חדשה ופרויקטי התחדשות עירונית רבים.",
  },
  {
    slug: "raanana",
    name: "רעננה",
    nameSimple: "רעננה",
    region: "אזור השרון",
    description: "רעננה ידועה באיכות החיים הגבוהה ובבנייה האיכותית, ומחייבת בדיקה הנדסית קפדנית של נכסים.",
  },
  {
    slug: "holon",
    name: "חולון",
    nameSimple: "חולון",
    region: "גוש דן",
    description: "חולון מובילה בפרויקטי פינוי בינוי והתחדשות עירונית, עם מגוון רחב של דירות חדשות.",
  },
  {
    slug: "ramat-gan",
    name: "רמת גן",
    nameSimple: "רמת גן",
    region: "גוש דן",
    description: "רמת גן עוברת תנופת בנייה עם מגדלים חדשים ופרויקטי התחדשות עירונית בלב גוש דן.",
  },
  {
    slug: "bat-yam",
    name: "בת ים",
    nameSimple: "בת ים",
    region: "גוש דן",
    description: "בת ים, עיר חוף בתהליך התחדשות מואץ, מציעה פרויקטי מגורים חדשים רבים מול הים.",
  },
  {
    slug: "modiin",
    name: "מודיעין",
    nameSimple: "מודיעין",
    region: "אזור המרכז",
    description: "מודיעין היא עיר מתוכננת וצעירה, עם שכונות חדשות ובנייה איכותית הדורשת בדק בית מקצועי.",
  },
  {
    slug: "rosh-haayin",
    name: "ראש העין",
    nameSimple: "ראש העין",
    region: "אזור המרכז",
    description:
      "ראש העין היא אחת הערים הצומחות במהירות במרכז הארץ, עם שכונות חדשות ופרויקטי בנייה רבים הדורשים פיקוח הנדסי צמוד.",
  },
  {
    slug: "yehud",
    name: "יהוד",
    nameSimple: "יהוד",
    region: "גוש דן",
    description:
      "יהוד-מונוסון מציעה פרויקטי מגורים חדשים והתחדשות עירונית, ומחייבת בדיקה הנדסית מקצועית של דירות חדשות מקבלן.",
  },
  {
    slug: "or-yehuda",
    name: "אור יהודה",
    nameSimple: "אור יהודה",
    region: "גוש דן",
    description:
      "אור יהודה עוברת תנופת התחדשות עירונית עם פרויקטי פינוי בינוי ובנייה חדשה רבים בלב גוש דן.",
  },
  {
    slug: "givat-shmuel",
    name: "גבעת שמואל",
    nameSimple: "גבעת שמואל",
    region: "גוש דן",
    description:
      "גבעת שמואל היא עיר צעירה ומבוקשת עם בנייה חדשה ואיכותית, שבה בדק בית הנדסי קריטי לשמירה על ערך הנכס.",
  },
  {
    slug: "kiryat-ono",
    name: "קרית אונו",
    nameSimple: "קרית אונו",
    region: "גוש דן",
    description:
      "קרית אונו מובילה בפרויקטי התחדשות עירונית ומגדלי מגורים חדשים, הדורשים בדיקה הנדסית מקצועית במעמד המסירה.",
  },
  {
    slug: "azor",
    name: "אזור",
    nameSimple: "אזור",
    region: "גוש דן",
    description:
      "המועצה המקומית אזור מתפתחת עם פרויקטי בנייה חדשים והתחדשות עירונית, המצריכים בדק בית הנדסי מקצועי.",
  },
  {
    slug: "givatayim",
    name: "גבעתיים",
    nameSimple: "גבעתיים",
    region: "גוש דן",
    description:
      "גבעתיים עוברת תנופת התחדשות עירונית עם מגדלי מגורים חדשים, הדורשים בדיקה הנדסית מקצועית במעמד המסירה.",
  },
  {
    slug: "hod-hasharon",
    name: "הוד השרון",
    nameSimple: "הוד השרון",
    region: "אזור השרון",
    description:
      "הוד השרון היא עיר ירוקה ומבוקשת עם בנייה חדשה ופרויקטי התחדשות עירונית רבים בלב השרון.",
  },
  {
    slug: "ramat-hasharon",
    name: "רמת השרון",
    nameSimple: "רמת השרון",
    region: "אזור השרון",
    description:
      "רמת השרון מציעה דירות יוקרה ובנייה איכותית, שבהן בדק בית מקצועי קריטי לשמירה על ערך הנכס.",
  },
  {
    slug: "hadera",
    name: "חדרה",
    nameSimple: "חדרה",
    region: "אזור השרון",
    description:
      "חדרה חווה תנופת בנייה משמעותית עם שכונות חדשות ופרויקטי מגורים גדולים לאורך החוף ובמזרח העיר.",
  },
  {
    slug: "kiryot",
    name: "הקריות",
    nameSimple: "הקריות",
    region: "אזור הצפון",
    description:
      "הקריות (קרית ים, קרית מוצקין, קרית ביאליק וקרית אתא) כוללות בנייה חדשה והתחדשות עירונית רבה הדורשת בדיקה הנדסית.",
  },
  {
    slug: "nahariya",
    name: "נהריה",
    nameSimple: "נהריה",
    region: "אזור הצפון",
    description:
      "נהריה, עיר חוף בצפון, כוללת פרויקטי מגורים חדשים הדורשים בדיקת איטום ורטיבות מדוקדקת בשל קרבתה לים.",
  },
  {
    slug: "akko",
    name: "עכו",
    nameSimple: "עכו",
    region: "אזור הצפון",
    description:
      "עכו משלבת בנייה חדשה לצד נכסים ותיקים, ודורשת בדיקה הנדסית מקצועית בהתאמה לאופי הבנייה המקומי.",
  },
  {
    slug: "yavne",
    name: "יבנה",
    nameSimple: "יבנה",
    region: "אזור המרכז",
    description:
      "יבנה היא עיר צומחת עם שכונות חדשות ופרויקטי בנייה רבים, הדורשים פיקוח הנדסי מקצועי במעמד המסירה.",
  },
  {
    slug: "ashkelon",
    name: "אשקלון",
    nameSimple: "אשקלון",
    region: "אזור הדרום",
    description:
      "אשקלון, עיר חוף מתפתחת, כוללת פרויקטי מגורים רבים לאורך קו החוף ובשכונות החדשות בצפון העיר.",
  },
  {
    slug: "netivot",
    name: "נתיבות",
    nameSimple: "נתיבות",
    region: "אזור הדרום",
    description:
      "נתיבות חווה תנופת בנייה משמעותית עם שכונות חדשות ופרויקטי מגורים גדולים בדרום הארץ.",
  },
  {
    slug: "ofakim",
    name: "אופקים",
    nameSimple: "אופקים",
    region: "אזור הדרום",
    description:
      "אופקים מתפתחת עם שכונות חדשות ופרויקטי מגורים רבים, הדורשים בדק בית הנדסי מקצועי במעמד המסירה.",
  },
  {
    slug: "nesher",
    name: "נשר",
    nameSimple: "נשר",
    region: "אזור הצפון",
    description:
      "נשר, השוכנת על מורדות הכרמל סמוך לחיפה, משלבת בנייה חדשה על שטחי מדרון הדורשת בדק בית הנדסי מקצועי, עם דגש על ניקוז וקירות תומכים.",
  },
  {
    slug: "nof-hagalil",
    name: "נוף הגליל",
    nameSimple: "נוף הגליל",
    region: "אזור הצפון",
    description:
      "נוף הגליל, עיר הררית בלב הגליל התחתון, צומחת עם שכונות חדשות בהר יונה הדורשות בדק בית הנדסי מקצועי, עם דגש על בנייה במדרון ואקלים הררי.",
  },
  {
    slug: "bnei-brak",
    name: "בני ברק",
    nameSimple: "בני ברק",
    region: "גוש דן",
    description:
      "בני ברק היא מהערים הצפופות בישראל, ועוברת התחדשות עירונית מואצת עם מגדלי מגורים חדשים ומתחם העסקים BBC, הדורשים בדיקה הנדסית מקצועית במעמד המסירה.",
  },
]

export interface ContractorData {
  slug: string
  name: string // שם החברה
  nameWithShel: string // לשימוש אחרי "של" (של חברת אפי קפיטל)
  description: string
  // Notable residential projects associated with the company, from public/official
  // company sources (websites, Dun's 100, Madlan, news). Each as "שם הפרויקט, עיר".
  // ⚠️ Sourced via public info and flagged for verification — confirm before relying
  // on for any formal/legal claim. Used to target "בדק בית בפרויקט X" searches.
  projects?: string[]
}

export const contractors: ContractorData[] = [
  {
    slug: "afi-capital",
    projects: ["Intro Tel Aviv, תל אביב", "אפי האומנים, קרית מוצקין", "אפי ברמה, בית שמש", "נווה דורון, רמלה"],
    name: "אפי קפיטל",
    nameWithShel: "אפי קפיטל",
    description:
      "אפי קפיטל היא מהחברות היזמיות המובילות בישראל, עם פרויקטי מגורים ומגדלים רבים ברחבי הארץ.",
  },
  {
    slug: "prashkovsky",
    projects: ["רמת ידין, נתניה", "מתחם העלייה, נתניה", "נוף השרון, נתניה"],
    name: "פרשקובסקי",
    nameWithShel: "פרשקובסקי",
    description:
      "קבוצת פרשקובסקי היא אחת מחברות הבנייה הוותיקות והמובילות בישראל, עם פרויקטי מגורים רבים במרכז ובפריפריה.",
  },
  {
    slug: "rami-shbiro",
    projects: ["מבואות דרומיים, חיפה"],
    name: "רמי שבירו",
    nameWithShel: "רמי שבירו",
    description:
      "חברת רמי שבירו הנדסה מתמחה בפרויקטי מגורים ובנייה רוויה ברחבי הארץ, עם דגש על שכונות חדשות.",
  },
  {
    slug: "avney-derech",
    name: "אבני דרך",
    nameWithShel: "אבני דרך",
    description:
      "חברת אבני דרך היא יזמית ובונה פרויקטי מגורים והתחדשות עירונית במרכז הארץ ובפריפריה.",
  },
  {
    slug: "ashdar",
    projects: ["טאגור, יהוד מונוסון", "אשדר ארלוזורוב, רעננה", "אשדר רמב\"ם, רעננה"],
    name: "אשדר",
    nameWithShel: "אשדר",
    description:
      "אשדר, מקבוצת אשטרום, היא מחברות הנדל\"ן הגדולות בישראל, עם פרויקטי מגורים ומגדלים רבים ברחבי הארץ.",
  },
  {
    slug: "azorim",
    projects: ["אזורים רחובות החדשה, רחובות", "הרצליה הילס, הרצליה", "אזורים פארק טאוור, תל אביב", "אזורים ליווינג, פתח תקווה"],
    name: "אזורים",
    nameWithShel: "אזורים",
    description:
      "חברת אזורים היא מהחברות היזמיות הוותיקות בישראל, עם פרויקטי מגורים והתחדשות עירונית רבים.",
  },
  {
    slug: "africa-israel",
    projects: ["סביוני חריש, חריש", "סביוני השמורה, נתניה", "SOHO קדמת גונן, ירושלים", "סביוני קריית יובל, ירושלים"],
    name: "אפריקה ישראל מגורים",
    nameWithShel: "אפריקה ישראל מגורים",
    description:
      "אפריקה ישראל מגורים היא מחברות הנדל\"ן המובילות בישראל, עם פרויקטי מגורים ומגדלי יוקרה רבים.",
  },
  {
    slug: "shikun-binui",
    projects: ["OLAM, בקעת אונו", "חלומות קרית אונו, קרית אונו", "חלומות בן שמן", "חלומות גבעת זמר, חיפה"],
    name: "שיכון ובינוי",
    nameWithShel: "שיכון ובינוי",
    description:
      "שיכון ובינוי נדל\"ן היא אחת מחברות הבנייה הגדולות והוותיקות בישראל, עם פרויקטי מגורים רבים ברחבי הארץ.",
  },
  {
    slug: "ihdmari",
    projects: ["עיר היין, אשקלון", "סביוני ברנע, אשקלון", "רמות דמרי, באר שבע", "קריית גנים, באר שבע", "פארק הנחל, באר שבע"],
    name: "י.ח. דמרי",
    nameWithShel: "י.ח. דמרי",
    description:
      "חברת י.ח. דמרי היא מהחברות היזמיות המובילות בישראל, עם פרויקטי מגורים רבים במרכז ובדרום הארץ.",
  },
  {
    slug: "gindi",
    projects: ["גינדי TLV, תל אביב", "גינדי מגדלי המוזיאון, ראשון לציון", "גינדי גרדנס, ראשון לציון", "גרנד גינדי, פתח תקווה", "גינדי רמת אביב, תל אביב"],
    name: "גינדי",
    nameWithShel: "גינדי",
    description:
      "קבוצת גינדי החזקות היא מחברות הנדל\"ן המובילות בישראל, עם פרויקטי מגורים ומתחמי יוקרה גדולים.",
  },
  {
    slug: "ashtrom",
    projects: ["אשטרום מגורים קרית היובל, ירושלים", "אשטרום מגורים רמת אביב, תל אביב"],
    name: "אשטרום",
    nameWithShel: "אשטרום",
    description:
      "קבוצת אשטרום היא אחת מקבוצות התשתיות והנדל\"ן הגדולות בישראל, עם פרויקטי מגורים, מגדלים ותשתיות ברחבי הארץ.",
  },
  {
    slug: "etz-hashaked",
    name: "עץ השקד",
    nameWithShel: "עץ השקד",
    description:
      "חברת עץ השקד מתמחה בייזום ובנייה של פרויקטי מגורים והתחדשות עירונית במרכז הארץ.",
  },
  {
    slug: "tidhar",
    name: "תדהר",
    nameWithShel: "תדהר",
    description:
      "קבוצת תדהר היא מחברות הבנייה והייזום המובילות בישראל, עם פרויקטי מגורים, משרדים ומגדלים רבים.",
  },
  {
    slug: "electra",
    name: "אלקטרה נדל\"ן",
    nameWithShel: "אלקטרה נדל\"ן",
    description:
      "אלקטרה נדל\"ן, מקבוצת אלקו, היא מחברות הנדל\"ן הגדולות בישראל, עם פרויקטי מגורים ומסחר רבים.",
  },
  {
    slug: "danya-cebus",
    name: "דניה סיבוס",
    nameWithShel: "דניה סיבוס",
    description:
      "דניה סיבוס, מקבוצת אפריקה ישראל, היא מחברות הבנייה הגדולות בישראל, עם פרויקטי מגורים ותשתיות מורכבים.",
  },
  {
    slug: "israel-canada",
    projects: ["מידטאון, תל אביב", "מגדל SHE, תל אביב", "מגדלי YAM, בת ים", "מתחם רוטשילד, בת ים"],
    name: "ישראל קנדה",
    nameWithShel: "ישראל קנדה",
    description:
      "חברת ישראל קנדה היא מחברות הנדל\"ן המובילות בישראל, עם מגדלי מגורים ופרויקטי יוקרה במרכז הארץ.",
  },
  {
    slug: "aura",
    projects: ["הגנים התלויים, יהוד", "AURA The Strip, נתניה", "אאורה רמת השרון, רמת השרון", "אאורה גבעתיים, גבעתיים"],
    name: "אאורה",
    nameWithShel: "אאורה",
    description:
      "קבוצת אאורה ישראל מתמחה בהתחדשות עירונית, תמ\"א 38 ופרויקטי פינוי-בינוי ברחבי הארץ.",
  },
  {
    slug: "rotstein",
    projects: ["LOV, לוד", "BLUE & THE CITY, בת ים", "ERA, חדרה", "ENZO, אשדוד", "גאולים, רמת השרון"],
    name: "רוטשטיין",
    nameWithShel: "רוטשטיין",
    description:
      "חברת רוטשטיין נדל\"ן היא יזמית ובונה פרויקטי מגורים ויוקרה במרכז הארץ ובאזורי ביקוש.",
  },
  {
    slug: "zemach-hammerman",
    name: "צמח המרמן",
    nameWithShel: "צמח המרמן",
    description:
      "חברת צמח המרמן היא מחברות הבנייה הוותיקות בישראל, עם פרויקטי מגורים רבים בצפון ובמרכז הארץ.",
  },
  {
    slug: "hanan-mor",
    projects: ["מורשת, מודיעין", "חלומות ראש העין, ראש העין", "השכונה הירוקה, יבנה"],
    name: "חנן מור",
    nameWithShel: "חנן מור",
    description:
      "קבוצת חנן מור היא מחברות הייזום המובילות בישראל, עם פרויקטי מגורים ומגדלים באזורי ביקוש.",
  },
  {
    slug: "b-yair",
    name: "ב. יאיר",
    nameWithShel: "ב. יאיר",
    description:
      "חברת ב. יאיר היא מחברות הבנייה הוותיקות בישראל, עם פרויקטי מגורים והתחדשות עירונית רבים.",
  },
  {
    slug: "mitzlawi",
    name: "מצלאוי",
    nameWithShel: "מצלאוי",
    description:
      "חברת מצלאוי בנייה היא מחברות הבנייה הוותיקות בישראל, עם פרויקטי מגורים רבים במרכז ובשרון.",
  },
  {
    slug: "tzarfati",
    name: "צרפתי שמעון",
    nameWithShel: "צרפתי שמעון",
    description:
      "חברת צרפתי שמעון היא יזמית ובונה פרויקטי מגורים והתחדשות עירונית במרכז הארץ ובפריפריה.",
  },
  {
    slug: "dunietz",
    name: "אחים דוניץ",
    nameWithShel: "אחים דוניץ",
    description:
      "חברת אחים דוניץ היא מחברות הבנייה הוותיקות בישראל, עם פרויקטי מגורים והתחדשות עירונית רבים.",
  },
  {
    slug: "almogim",
    projects: ["אלמוג RED, אשקלון"],
    name: "אלמוגים",
    nameWithShel: "אלמוגים",
    description:
      "קבוצת אלמוגים היא יזמית ובונה פרויקטי מגורים והתחדשות עירונית במרכז הארץ ובאזורי ביקוש.",
  },
  {
    slug: "boney-hatichon",
    name: "בוני התיכון",
    nameWithShel: "בוני התיכון",
    description:
      "חברת בוני התיכון היא מחברות הבנייה המובילות בישראל, עם פרויקטי מגורים והתחדשות עירונית רבים.",
  },
  {
    slug: "nethanel-group",
    projects: ["מגדלי נתנאל, ירושלים"],
    name: "נתנאל גרופ",
    nameWithShel: "נתנאל גרופ",
    description:
      "קבוצת נתנאל היא מחברות הייזום והבנייה בישראל, עם פרויקטי מגורים ומסחר במרכז הארץ ובפריפריה.",
  },
  {
    slug: "hagag",
    projects: ["מגדלי תל אביב, תל אביב", "H מגדלי הארבעה, תל אביב", "Meier on Rothschild, תל אביב", "מגדל קריניצי, רמת גן"],
    name: "קבוצת חג'ג'",
    nameWithShel: "קבוצת חג'ג'",
    description:
      "קבוצת חג'ג' היא מחברות הנדל\"ן המובילות בישראל, עם מגדלי יוקרה ופרויקטי מגורים יוקרתיים.",
  },
  {
    slug: "amos-luzon",
    projects: ["Unik Life, יהוד"],
    name: "קבוצת עמוס לוזון",
    nameWithShel: "קבוצת עמוס לוזון",
    description:
      "קבוצת עמוס לוזון יזמות אנרגיה היא מחברות הנדל\"ן בישראל, עם פרויקטי מגורים ומגדלים באזורי ביקוש.",
  },
  {
    slug: "mordechai-aviv",
    projects: ["חלון ירושלים, ירושלים", "לב רחביה, ירושלים"],
    name: "מרדכי אביב",
    nameWithShel: "מרדכי אביב",
    description:
      "חברת מרדכי אביב היא מחברות הבנייה הוותיקות בישראל, עם פרויקטי מגורים והתחדשות עירונית רבים.",
  },
  {
    slug: "levinstein",
    projects: ["מתחם הנשיא, גבעת שמואל", "מתחם ריינס, רמת השרון", "מתחם שלמה המלך, לוד"],
    name: "משולם לוינשטין",
    nameWithShel: "משולם לוינשטין",
    description:
      "קבוצת משולם לוינשטין היא מחברות הבנייה הגדולות בישראל, עם פרויקטי מגורים, מגדלים ותשתיות.",
  },
  {
    slug: "stern-group",
    name: "שטרן גרופ",
    nameWithShel: "שטרן גרופ",
    description:
      "שטרן גרופ היא מחברות הייזום והבנייה בישראל, עם פרויקטי מגורים והתחדשות עירונית במרכז ובצפון.",
  },
  {
    slug: "avisror",
    name: "אביסרור משה ובניו",
    nameWithShel: "אביסרור משה ובניו",
    description:
      "חברת אביסרור משה ובניו היא מחברות הבנייה הוותיקות בישראל, עם פרויקטי מגורים רבים בדרום ובמרכז.",
  },
  {
    slug: "ken-hator",
    name: "קן התור",
    nameWithShel: "קן התור",
    description:
      "חברת קן התור היא יזמית ובונה פרויקטי מגורים והתחדשות עירונית במרכז הארץ ובאזורי ביקוש.",
  },
  {
    slug: "omer",
    name: "עומר הנדסה",
    nameWithShel: "עומר הנדסה",
    description:
      "חברת עומר הנדסה ובנייה מתמחה בפרויקטי מגורים ובנייה רוויה ברחבי הארץ.",
  },
  {
    slug: "asum",
    name: "אסום",
    nameWithShel: "אסום",
    description:
      "חברת אסום היא מחברות הבנייה בישראל, עם פרויקטי מגורים ותשתיות ברחבי הארץ.",
  },
  {
    slug: "kardan",
    name: "קרדן נדל\"ן",
    nameWithShel: "קרדן נדל\"ן",
    description:
      "קרדן נדל\"ן היא מחברות הייזום בישראל, עם פרויקטי מגורים והתחדשות עירונית באזורי ביקוש.",
  },
  {
    slug: "shapir",
    name: "קבוצת שפיר",
    nameWithShel: "קבוצת שפיר",
    description:
      "קבוצת שפיר היא מקבוצות התשתיות והנדל\"ן הגדולות בישראל, עם פרויקטי מגורים, מגדלים ותשתיות.",
  },
  {
    slug: "bst",
    name: "בסט",
    nameWithShel: "בסט",
    description:
      "חברת בסט היא יזמית ובונה פרויקטי מגורים והתחדשות עירונית במרכז הארץ ובאזורי ביקוש.",
  },
  {
    slug: "acro",
    name: "אקרו",
    nameWithShel: "אקרו",
    description:
      "קבוצת אקרו נדל\"ן היא מחברות הייזום המובילות בישראל, עם מגדלי מגורים ופרויקטי יוקרה במרכז הארץ.",
  },
  {
    slug: "oron",
    name: "קבוצת אורון",
    nameWithShel: "קבוצת אורון",
    description:
      "קבוצת אורון אחזקות והשקעות היא מקבוצות התשתיות והנדל\"ן בישראל, עם פרויקטי מגורים ותשתיות.",
  },
  {
    slug: "geshem",
    name: "גשם למשתכן",
    nameWithShel: "גשם למשתכן",
    description:
      "חברת גשם למשתכן מתמחה בפרויקטי מגורים במסגרת מחיר למשתכן ובנייה רוויה ברחבי הארץ.",
  },
  {
    slug: "minrav",
    name: "מנרב",
    nameWithShel: "מנרב",
    description:
      "קבוצת מנרב היא מחברות הבנייה והתשתיות בישראל, עם פרויקטי מגורים, מבני ציבור ותשתיות.",
  },
  {
    slug: "mizrahi",
    projects: ["SEA VIEW מגדלי פארק הים, בת ים", "מתחם הבתימון, בת ים", "ליבורנו, בת ים"],
    name: "קבוצת מזרחי ובניו",
    nameWithShel: "קבוצת מזרחי ובניו",
    description:
      "קבוצת מזרחי ובניו היא יזמית ובונה פרויקטי מגורים ומגדלים באזורי ביקוש במרכז הארץ.",
  },
  {
    slug: "barel",
    name: "בראל",
    nameWithShel: "בראל",
    description:
      "חברת בראל היא יזמית ובונה פרויקטי מגורים והתחדשות עירונית במרכז הארץ ובפריפריה.",
  },
]

export interface ProjectTypeData {
  slug: string
  name: string
  title: string
  description: string
  keywords: string[]
}

export const projectTypes: ProjectTypeData[] = [
  {
    slug: "shechunot-hadashot",
    name: "שכונות חדשות",
    title: "בדק בית בשכונות חדשות | מומחה לדירות חדשות מקבלן",
    description: "בדק בית הנדסי לדירות בשכונות חדשות. בדיקה מקיפה של דירה חדשה מקבלן במעמד המסירה, איתור ליקויי בנייה וקבלת חוות דעת מקצועית.",
    keywords: ["בדק בית שכונה חדשה", "בדק בית דירה חדשה", "בדק בית מקבלן", "ליקויי בנייה דירה חדשה"],
  },
  {
    slug: "mehir-lamishtaken",
    name: "מחיר למשתכן",
    title: "בדק בית מחיר למשתכן | בדיקת דירה לפני מסירה",
    description: "בדק בית לדירות מחיר למשתכן. רכשתם דירה במסגרת מחיר למשתכן? בדיקה הנדסית מקצועית במועד מסירת הדירה תבטיח שתקבלו דירה ללא ליקויים.",
    keywords: ["בדק בית מחיר למשתכן", "מחיר למשתכן בדיקת דירה", "דירה מחיר למשתכן ליקויים"],
  },
  {
    slug: "pinui-binui",
    name: "פינוי בינוי",
    title: "בדק בית פינוי בינוי | בדיקת דירה בהתחדשות עירונית",
    description: "בדק בית לדירות בפרויקטי פינוי בינוי והתחדשות עירונית. בדיקה הנדסית מקצועית של הדירה החדשה תבטיח שקיבלתם את מה שהובטח לכם בחוזה.",
    keywords: ["בדק בית פינוי בינוי", "בדק בית התחדשות עירונית", "פינוי בינוי ליקויי בנייה"],
  },
  {
    slug: "tama-38",
    name: "תמ\"א 38",
    title: "בדק בית תמ\"א 38 | בדיקת דירה לאחר חיזוק מבנה",
    description: "בדק בית לדירות בפרויקטי תמ\"א 38. בדיקה הנדסית מקצועית של הדירה לאחר חיזוק המבנה והתוספות, לאיתור ליקויי בנייה וקבלת חוות דעת מקצועית.",
    keywords: ["בדק בית תמא 38", "תמא 38 ליקויי בנייה", "בדיקת דירה תמא 38"],
  },
]

// ---- Reciprocal city ↔ contractor linking ----
// Derives the relationship from each contractor's `projects` list. Project strings
// are formatted "שם הפרויקט, עיר", so we read the city part (after the last comma)
// and match it against known city names. Parsing only the city part (not the full
// project string) avoids false positives like the city "אזור" matching "אזורים".

function projectCityPart(project: string): string {
  const i = project.lastIndexOf(",")
  return i === -1 ? "" : project.slice(i + 1).trim()
}

/** City slugs where this contractor has known projects (only cities with a page). */
export function getContractorCitySlugs(contractor: ContractorData): string[] {
  if (!contractor.projects?.length) return []
  const slugs = new Set<string>()
  for (const project of contractor.projects) {
    const cityPart = projectCityPart(project)
    if (!cityPart) continue
    for (const c of cities) {
      if (cityPart.includes(c.nameSimple)) slugs.add(c.slug)
    }
  }
  return [...slugs]
}

/** Contractors with known projects in the given city. */
export function getContractorsForCity(citySlug: string): ContractorData[] {
  const city = cities.find((c) => c.slug === citySlug)
  if (!city) return []
  return contractors.filter((ct) =>
    ct.projects?.some((project) => projectCityPart(project).includes(city.nameSimple)),
  )
}
