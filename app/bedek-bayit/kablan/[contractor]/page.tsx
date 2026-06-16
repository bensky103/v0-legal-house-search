import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { contractors } from "@/lib/seo-locations"
import { SeoLandingTemplate } from "@/components/seo-landing-template"

export function generateStaticParams() {
  return contractors.map((c) => ({ contractor: c.slug }))
}

export function generateMetadata({ params }: { params: { contractor: string } }): Metadata {
  const contractor = contractors.find((c) => c.slug === params.contractor)
  if (!contractor) return {}

  const title = `בדק בית לפרויקטים של ${contractor.name} | איתור ליקויי בנייה`
  const description = `בדק בית הנדסי לדירות בפרויקטים של ${contractor.name} - בדיקה לפני מסירה, איתור ליקויי בנייה וחוות דעת מקצועית. מומחה מוסמך באיגוד המהנדסים. חייגו עכשיו!`

  return {
    title,
    description,
    keywords: [
      `בדק בית ${contractor.name}`,
      `בדק בית פרויקטים של ${contractor.name}`,
      `ליקויי בנייה ${contractor.name}`,
      `בדיקת דירה ${contractor.name}`,
      `מסירת דירה ${contractor.name}`,
      "בדק בית",
      "מומחה בדק בית",
      "איתור ליקויי בנייה",
      "בדיקת דירה לפני מסירה",
    ],
    authors: [{ name: "יגאל בנסקי" }],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "he_IL",
      url: `https://legalbedek.co.il/bedek-bayit/kablan/${contractor.slug}`,
      siteName: "בדק בית Legal",
    },
    alternates: {
      canonical: `https://legalbedek.co.il/bedek-bayit/kablan/${contractor.slug}`,
    },
    robots: "index, follow",
  }
}

export default function ContractorPage({ params }: { params: { contractor: string } }) {
  const contractor = contractors.find((c) => c.slug === params.contractor)
  if (!contractor) notFound()

  const relatedLinks = contractors
    .filter((c) => c.slug !== contractor.slug)
    .slice(0, 8)
    .map((c) => ({ label: `בדק בית - ${c.name}`, href: `/bedek-bayit/kablan/${c.slug}` }))

  return (
    <SeoLandingTemplate
      badge={`בדק בית לפרויקטים של ${contractor.name}`}
      title={`בדק בית לפרויקטים של ${contractor.name}`}
      subtitle={`בדק בית הנדסי מקצועי לדירות חדשות בפרויקטים של ${contractor.name}. בדיקה לפני מסירה, איתור ליקויי בנייה וחוות דעת מקצועית מטעם מומחה מוסמך.`}
      intro={`${contractor.description} רכשתם דירה בפרויקט של ${contractor.name}? לפני שאתם מקבלים את מפתחות הדירה, חשוב לבצע בדק בית הנדסי מקצועי. מחקר מקיף שנערך בטכניון מצא כי כמעט בכל דירה חדשה בישראל מתגלים ליקויי בנייה - ולכן בדיקה מקצועית לפני מסירה היא הדרך הבטוחה להבטיח שתקבלו דירה תקינה ובאיכות שהובטחה לכם בחוזה.`}
      features={[
        {
          title: "בדיקה לפני מסירה",
          description: `בדיקה הנדסית מקיפה של הדירה בפרויקט של ${contractor.name} לפני מסירה, לאיתור כל הליקויים והחריגות.`,
        },
        {
          title: "ליווי מול הקבלן",
          description: `ליווי מקצועי מול ${contractor.name} עד לתיקון מלא של כל הליקויים שנמצאו בבדיקה.`,
        },
        {
          title: "התאמה למפרט ולחוזה",
          description: "בדיקת התאמת הדירה למפרט הטכני ולחוזה הרכישה, לוודא שקיבלתם בדיוק את מה שהובטח.",
        },
        {
          title: "איתור רטיבות ואיטום",
          description: "איתור בעיות רטיבות, איטום וחדירת מים בעזרת מצלמה תרמית וציוד מתקדם.",
        },
        {
          title: "בדיקת מערכות",
          description: "בדיקת מערכות חשמל, אינסטלציה, ביוב ומיזוג אוויר לפי התקנים הישראליים.",
        },
        {
          title: "חוות דעת הנדסית",
          description: "דוח מפורט וחוות דעת מקצועית הקבילה משפטית, שתשמש אתכם מול הקבלן או היזם.",
        },
      ]}
      contentSections={[
        {
          heading: `למה חשוב בדק בית בפרויקט של ${contractor.name}?`,
          paragraphs: [
            `רכישת דירה חדשה היא אחת ההשקעות הגדולות בחיים. מחקר שנערך בטכניון - מכון טכנולוגי לישראל - מצא כי כמעט ב-100% מהדירות החדשות הנמסרות בישראל מתגלים ליקויי בנייה, החל מליקויים אסתטיים ועד ליקויים מהותיים במערכות, באיטום ובשלד.`,
            `גם בפרויקטים של חברות בנייה מובילות כמו ${contractor.name}, תהליכי הבנייה מורכבים ומערבים קבלני משנה רבים - ולכן עלולים להיווצר ליקויים שאינם נראים לעין הלא מקצועית. בדק בית הנדסי מקצועי מבטיח שתקבלו דירה תקינה ובאיכות שהובטחה.`,
          ],
        },
        {
          heading: "מה אומר מחקר הטכניון על ליקויי בנייה?",
          paragraphs: [
            `ממצאי המחקר מהטכניון ממחישים עד כמה נפוצה תופעת ליקויי הבנייה בדירות חדשות בישראל. הנתונים מצביעים על כך שאיתור הליקויים מבעוד מועד, באמצעות בדק בית מקצועי לפני מסירת הדירה, חוסך לרוכשים עשרות אלפי שקלים ומונע התדיינויות משפטיות ממושכות מול הקבלן.`,
            `חשוב להדגיש: ריבוי ליקויים בדירות חדשות הוא תופעה רוחבית בענף הבנייה כולו, ואינו מאפיין חברה או יזם מסוים. זו בדיוק הסיבה שבדק בית הנדסי מקצועי מומלץ לכל רוכש דירה חדשה, בכל פרויקט ומכל קבלן.`,
          ],
        },
        {
          heading: `מה בודקים בבדק בית בפרויקט של ${contractor.name}?`,
          paragraphs: [
            "הבדיקה כוללת את כל מרכיבי הדירה: ריצוף וחיפויים, מערכות חשמל ואינסטלציה, איטום ורטיבות, דלתות וחלונות, מטבח, חדרי רחצה, מרפסות, מעקות ועוד.",
            `בנוסף, אנו בודקים את התאמת הדירה למפרט הטכני שצורף לחוזה הרכישה מול ${contractor.name}, ומוודאים שכל מה שהובטח אכן בוצע כראוי ובהתאם לתקני הבנייה הישראליים.`,
          ],
        },
      ]}
      faq={[
        {
          question: `מתי כדאי לבצע בדק בית בפרויקט של ${contractor.name}?`,
          answer:
            "מומלץ לבצע את הבדיקה לפני מסירת הדירה הרשמית, כדי שתוכלו לדרוש תיקונים מהקבלן לפני קבלת המפתח וחתימה על פרוטוקול המסירה.",
        },
        {
          question: "מה עושים אם נמצאים ליקויים?",
          answer:
            "אנו מספקים דוח מפורט ומלווים אתכם מול הקבלן עד לתיקון מלא של כל הליקויים שנמצאו בבדיקה.",
        },
        {
          question: "האם באמת בכל דירה חדשה יש ליקויים?",
          answer:
            "מחקר שנערך בטכניון מצא כי כמעט בכל דירה חדשה בישראל מתגלים ליקויי בנייה. לכן בדק בית מקצועי לפני מסירה מומלץ לכל רוכש דירה חדשה, בכל פרויקט ומכל קבלן.",
        },
        {
          question: "האם הדוח קביל משפטית?",
          answer:
            "כן, הדוח נערך על ידי מומחה מוסמך באיגוד המהנדסים וברישיון משרד העבודה, והוא קביל לשימוש משפטי מול קבלנים ובתי משפט.",
        },
      ]}
      ctaTitle={`רכשתם דירה בפרויקט של ${contractor.name}?`}
      ctaText={`צרו קשר עוד היום לתיאום בדק בית הנדסי מקצועי לפני מסירת הדירה. מומחה מוסמך, שירות מהיר וחוות דעת מקצועית.`}
      relatedLinks={relatedLinks}
      breadcrumbs={[
        { label: "דף הבית", href: "/" },
        { label: "בדק בית לפי קבלן", href: "/bedek-bayit/kablan" },
        { label: contractor.name, href: `/bedek-bayit/kablan/${contractor.slug}` },
      ]}
    />
  )
}
