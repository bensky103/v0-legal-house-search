// ============================================================================
//  רשימת פרויקטים חדשים לקראת מסירה - מתעדכנת מעת לעת
// ============================================================================
//  זהו המקום היחיד לעדכון רשימת הפרויקטים שמוצגת בעמוד /projects.
//  כדי לעדכן את הרשימה:
//    1. ערכו/הוסיפו/מחקו פריטים במערך featuredProjects שלמטה.
//    2. עדכנו את התאריך ב-featuredProjectsUpdated לתאריך העדכון הנוכחי.
//  שדות:
//    - name     : שם הפרויקט / השכונה (כפי שמחפשים אותו בגוגל)
//    - city     : שם העיר (לתצוגה)
//    - status   : שלב הבנייה / המסירה
//    - citySlug : (אופציונלי) מזהה עיר לקישור פנימי לעמוד /projects/[citySlug].
//                 השאירו ריק אם לעיר אין עמוד ייעודי.
// ============================================================================

export interface FeaturedProject {
  id: number
  name: string
  city: string
  status: string
  citySlug?: string
}

// תאריך העדכון האחרון של הרשימה (חודש/שנה) - לתצוגה ולנתוני dateModified.
export const featuredProjectsUpdated = "2026-06"

export const featuredProjects: FeaturedProject[] = [
  { id: 1, name: "רובע שדה דב", city: "תל אביב", status: "בנייה מתקדמת / לקראת מסירה", citySlug: "tel-aviv" },
  { id: 2, name: "שכונת עיר היין", city: "אשקלון", status: "שלבי אכלוס ומסירה", citySlug: "ashkelon" },
  { id: 3, name: "שכונת פארק לכיש", city: "אשדוד", status: "לקראת מסירה", citySlug: "ashdod" },
  { id: 4, name: "מתחם האלף", city: "ראשון לציון", status: "בנייה מתקדמת", citySlug: "rishon-lezion" },
  { id: 5, name: "שכונת מורשת", city: "מודיעין", status: "שלבי אכלוס", citySlug: "modiin" },
  { id: 6, name: "שכונת נווה דורון החדשה", city: "רמלה", status: "לקראת מסירה" },
  { id: 7, name: "נאות פרס (שלב ב')", city: "חיפה", status: "בנייה מתקדמת / מסירה", citySlug: "haifa" },
  { id: 8, name: "שכונת בצוותא", city: "חריש", status: "שלבי אכלוס אחרונים" },
  { id: 9, name: "פארק איילון", city: "אור יהודה", status: "לקראת מסירה", citySlug: "or-yehuda" },
  { id: 10, name: "אגמים מזרח", city: "נתניה", status: "בנייה מתקדמת", citySlug: "netanya" },
]
