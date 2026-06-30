"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Eye,
  Users,
  Search,
  HardHat,
  DraftingCompass,
  ShieldCheck,
  Ruler,
  Scale,
  ClipboardCheck,
  Clock,
  ArrowLeft,
  Award,
  BadgeCheck,
  Gavel,
  Star,
  MapPin,
  Camera,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SiteIndex } from "@/components/site-index"
import { useLanguage } from "@/contexts/language-context"

// Engineering "spec-sheet" section heading: mono index + tick + eyebrow over the title.
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
      <div className="flex items-center justify-center">
        <span className="text-sm font-bold tracking-wide text-blue-700">{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 text-balance">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-slate-600 text-pretty leading-relaxed">{subtitle}</p>}
    </div>
  )
}

const AUDIENCE_ITEMS = [
  {
    icon: Users,
    title: "ועדי בתים ובעלי דירות",
    desc: "בדיקות הנדסיות מקצועיות עבור ועדי בתים, לאימות איכות הבנייה ובטיחות המבנה המשותף",
  },
  {
    icon: Search,
    title: "בעלי נכס פרטי ורוכשי דירות",
    desc: "בדק בית מקיף לפני רכישת דירה או בית פרטי — איתור ליקויי בנייה במעמד המסירה מהקבלן",
  },
  {
    icon: HardHat,
    title: "קבלנים ומתכננים",
    desc: "ליווי הנדסי מקצועי בתהליכי שיפוץ, תכנון ובקרת איכות באתר הבנייה",
  },
  {
    icon: DraftingCompass,
    title: "יזמים ואדריכלים",
    desc: "בדיקות באתר, פיקוח בנייה ותמונת מצב הנדסית מקצועית ללקוחות לפני ואחרי עבודות",
  },
]

const SERVICE_ITEMS = [
  {
    icon: ShieldCheck,
    title: "בדק בית הנדסי",
    desc: "בדיקה מקיפה לאיתור ליקויים קונסטרוקטיביים, בעיות איטום, רטיבות, ליקויי גמר ובעיות בטיחות",
    img: "/gallery/likui-sedek-kir-hitzoni.webp",
    alt: "בדק בית הנדסי - איתור סדק בקיר חיצוני של מבנה מגורים, ליקוי בנייה קונסטרוקטיבי שאותר בבדיקה הנדסית מקצועית",
  },
  {
    icon: Ruler,
    title: "מומחה בדק בית",
    desc: "בדיקות מקצועיות של מבנים, יציבות קונסטרוקציה, מישוריות ובטיחות מבנית",
    img: "/gallery/bedikat-mishoriyut-ritzuf-peles-aroch.webp",
    alt: "מומחה בדק בית בודק מישוריות ריצוף בעזרת פלס ארוך - איתור ליקויי בנייה ברצפה בבדק בית לדירה חדשה",
  },
  {
    icon: Scale,
    title: "חוות דעת נגדית מוסמכת",
    desc: "הכנת חוות דעת הנדסית נגדית מוסמכת לצורך הליכים משפטיים, ביטוחיים או מול קבלנים",
    img: "/gallery/matzlema-termit-itur-retivut.webp",
    alt: "מצלמה תרמית לאיתור רטיבות ונזילות נסתרות בקיר - בדק בית מתקדם לצורך חוות דעת הנדסית נגדית מוסמכת",
  },
  {
    icon: ClipboardCheck,
    title: "ליווי מקצועי ואיתור ליקויי בנייה",
    desc: "ליווי וייעוץ מקצועי לאורך כל התהליך, כולל הפניה למומחים ולמעבדות מכון התקנים",
    img: "/gallery/bedikat-nikuz-matzlemat-endoskop.webp",
    alt: "בדיקת ניקוז וצנרת בעזרת מצלמת אנדוסקופ - איתור סתימות וליקויי אינסטלציה במסגרת בדק בית מקצועי",
  },
]

const PRICING_ROWS = [
  { label: "ליווי משפטי", value: 'ליווי משפטי על פי דרישה לאורך ההליך מול הקבלן' },
  { label: "ליווי במשא ומתן", value: "ליווי וייצוג מקצועי במשא ומתן מול קבלנים" },
  { label: "תמחור נוסף", value: 'תמחור נוסף עבור ליקויים שלא נפתרו לאחר חוות הדעת' },
]

// EEAT — areas of expertise shown as chips in the expert profile below the hero.
const EXPERTISE_TAGS = [
  "בדק בית לפני מסירה",
  "בדיקת דירה יד שנייה",
  "חוות דעת נגדית מוסמכת",
  "חוות דעת לבית משפט",
  "איתור רטיבות ואיטום",
  "בדיקות תרמוגרפיות",
  "ליקויי קונסטרוקציה וסדקים",
  "בדיקת חשמל ואינסטלציה",
]

// EEAT — verifiable trust signals (no fabricated counts) shown beneath the intro.
const EEAT_STATS = [
  { icon: Star, value: "5.0", label: "דירוג Google" },
  { icon: Award, value: "איגוד המהנדסים", label: "מומחה מוסמך" },
  { icon: BadgeCheck, value: "רישיון משרד העבודה", label: "בודק מורשה" },
  { icon: MapPin, value: "בכל הארץ", label: "צפון · מרכז · דרום" },
]

// P12 Trust — real inspection & equipment photos used as documented evidence.
const TRUST_EVIDENCE = [
  { src: "/gallery/mad-koach-digitali-bedikat-chozek.webp", label: "בדיקת חוזק מעקות במד כוח דיגיטלי" },
  { src: "/gallery/bedikat-luach-chashmal.webp", label: "בדיקת לוח חשמל וממסר פחת" },
  { src: "/gallery/matzlemat-tzanrat-endoskop-bedek-bayit.webp", label: "בדיקת צנרת וביוב במצלמת אנדוסקופ" },
  { src: "/gallery/bedikat-nichuchiyut-kir-peles.webp", label: "בדיקת אנכיות ומישוריות קירות" },
  { src: "/gallery/likui-sedek-kir-hitzoni.webp", label: "תיעוד וניתוח סדק בקיר חיצוני" },
  { src: "/gallery/peles-digitali-tziyud-bedek-bayit.webp", label: "מדידת שיפועים בפלס דיגיטלי" },
]

// Homepage FAQ — also emitted as FAQPage schema (P5) for rich results.
const HOMEPAGE_FAQ = [
  {
    question: "מה זה בדק בית ולמה הוא חשוב?",
    answer:
      "בדק בית הוא בדיקה הנדסית מקצועית של נכס לאיתור ליקויי בנייה גלויים ונסתרים. הבדיקה חושפת רטיבות, סדקים, כשלי איטום וליקויי מערכות לפני שהם הופכים לנזק יקר, ומספקת דוח מפורט המאפשר לדרוש תיקונים מהקבלן או להוריד את מחיר הנכס.",
  },
  {
    question: "מתי כדאי לבצע בדק בית?",
    answer:
      "בדירה חדשה מקבלן — במעמד המסירה, כשהאחריות עדיין על הקבלן. בדירה יד שנייה או בית פרטי — לפני חתימת חוזה הרכישה, כדי לדעת בדיוק מה אתם קונים ולקבל כלי מיקוח על המחיר.",
  },
  {
    question: "כמה זמן לוקחת הבדיקה ומתי מקבלים דוח?",
    answer:
      "בדיקת דירה ממוצעת אורכת כשעתיים עד מספר שעות, בהתאם לגודל הנכס ומורכבותו. בית פרטי דורש זמן רב יותר. הדוח המפורט והמצולם נמסר בסמוך לאחר הבדיקה.",
  },
  {
    question: "האם הדוח קביל בבית משפט?",
    answer:
      "כן. הדוח וחוות הדעת נערכים על ידי מומחה מוסמך מטעם איגוד המהנדסים והאדריכלים בישראל ובעל רישיון ממשרד העבודה, והם קבילים כראיה מול קבלנים ובבתי משפט.",
  },
  {
    question: "באילו אזורים אתם מבצעים בדק בית?",
    answer:
      "אנו מספקים שירותי בדק בית בכל הארץ — בצפון, במרכז ובדרום — לדירות חדשות ויד שנייה, בתים פרטיים ווילות, ורכוש משותף עבור ועדי בתים.",
  },
  {
    question: "מה עושים אם מתגלים ליקויים בבדיקה?",
    answer:
      "מקבלים דוח מפורט המתעד כל ליקוי, ועל בסיסו ניתן לדרוש מהקבלן לתקן, לנהל משא ומתן על מחיר הנכס, או להכין חוות דעת והערכת עלויות תיקון. אנו מלווים את הלקוח בתהליך מול הקבלן עד לתיקון.",
  },
]

// Real on-page testimonials, emitted as Review + AggregateRating schema (all 5★).
// These are the same reviews displayed in the testimonials section below.
const HOMEPAGE_REVIEWS = [
  { author: "בינימין", body: "קיבלתי חוות דעת עם ליקויים רבים, להפתעתי חברת אלקטרה תיקנו את הכל ללא כל ויכוח בהתאם לדוח." },
  { author: "יוסף אבוטבול", body: "הזמנו בדק בית לבניין מטעם ועד הבית. מרוצים מאוד מהתוצאה, התגלו ליקויים שאם לא היינו מטפלים בהם היה נגרם נזק עצום בעתיד." },
  { author: "מנחם", body: "אני קבלן ביצוע, הצלחתי בזכות חוות דעת נגדית לצמצם את עלויות התיקונים בעשרות אלפי שקלים." },
  { author: "בני", body: "הבדיקה שלכם הייתה מקצועית ומדויקת מאוד. הקבלן תיקן את כל הליקויים שהוצאו בדוח. תודה רבה!" },
  { author: "מייק", body: "קיבלנו דוח מפורט, ברור ומסודר. יגאל הסביר לנו בשפה פשוטה מה המשמעות של כל ממצא. ממליצים בחום!" },
  { author: "יעקב", body: "אין לי מילים חוץ מלומר לך שאתה תותח! אני ממליץ עליך בחום." },
  { author: "איתן", body: "תודה רבה שוב, עבודה מקצועית ומדויקת." },
  { author: "מאשה", body: "טרם הסתכלתי בבדק בית אך היית אמין, סבלני ומקצועי, תודה רבה." },
]

// EEAT — breadth of real-world inspection experience across property types.
const PROPERTY_EXPERIENCE = [
  {
    icon: Search,
    title: "דירות יד שנייה",
    desc: "בדיקה מקיפה לפני רכישת דירה יד שנייה — איתור ליקויים נסתרים, רטיבות ובלאי שמשפיעים על שווי הנכס ועל עלויות התיקון.",
  },
  {
    icon: ClipboardCheck,
    title: "דירות חדשות מקבלן — לפני ואחרי מסירה",
    desc: "בדק בית לדירה חדשה מקבלן, במועד המסירה ואחריה, לאיתור ליקויי בנייה ואי-התאמות למפרט בתוך תקופת הבדק והאחריות.",
  },
  {
    icon: HardHat,
    title: "בתים פרטיים, וילות ובתים דו-משפחתיים",
    desc: "בדיקה הנדסית של בתים פרטיים, וילות ובתים דו-משפחתיים — קונסטרוקציה, איטום, גגות, מערכות וגמר, על כל מורכבותם.",
  },
  {
    icon: Users,
    title: "רכוש משותף וועדי בתים",
    desc: "בדיקות רכוש משותף עבור ועדי בתים — לובי, חדרי מדרגות, חניונים, גגות וקירות חוץ — לאיתור ליקויים ותכנון שיפוצים.",
  },
  {
    icon: DraftingCompass,
    title: "בדיקות במהלך שיפוץ ובנייה",
    desc: "פיקוח ובדיקות איכות במהלך שיפוץ או בנייה, לאיתור ליקויים בזמן אמת — לפני שהם מתכסים ולפני שהם הופכים יקרים לתיקון.",
  },
  {
    icon: Scale,
    title: "סכסוכי שכנים — נזילות ורטיבות",
    desc: "בדיקה וחוות דעת בסכסוכי שכנים על רקע נזילות ורטיבות, לקביעת מקור הנזק והאחריות לתשלום — ועד הבית או בעל הדירה.",
  },
]

export default function HomePage() {
  const { t, direction } = useLanguage()
  const [videoOpen, setVideoOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir={direction}>
      {/* EEAT structured data — Person (the expert) + ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://legalbedek.co.il/#yigal-bensky",
                name: "יגאל בנסקי",
                jobTitle: "מומחה בדק בית מוסמך",
                description:
                  "מומחה בדק בית מוסמך מטעם איגוד המהנדסים והאדריכלים בישראל ובעל רישיון בודק ממשרד העבודה, עם ניסיון רב באיתור ליקויי בנייה והכנת חוות דעת הנדסיות קבילות.",
                image: "https://legalbedek.co.il/gallery/yigal-bensky-mumche-bedek-bayit.webp",
                telephone: "+972-50-627-7858",
                email: "yigalbensky@gmail.com",
                url: "https://legalbedek.co.il",
                knowsAbout: [
                  "בדק בית",
                  "איתור ליקויי בנייה",
                  "חוות דעת הנדסית",
                  "בדיקות רטיבות ואיטום",
                  "בדיקות תרמוגרפיות",
                  "חוות דעת לבית משפט",
                ],
                hasCredential: [
                  {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "מומחה מטעם איגוד המהנדסים והאדריכלים בישראל",
                    identifier: "17253030",
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "רישיון בודק מטעם משרד העבודה",
                    identifier: "1641507",
                  },
                ],
                worksFor: { "@id": "https://legalbedek.co.il/#organization" },
              },
              {
                "@type": ["ProfessionalService", "LocalBusiness"],
                "@id": "https://legalbedek.co.il/#organization",
                name: "בדק בית Legal - יגאל בנסקי",
                description:
                  "שירותי בדק בית מקצועיים בכל הארץ: בדיקת דירות חדשות ויד שנייה, בתים פרטיים ורכוש משותף, איתור ליקויי בנייה וחוות דעת הנדסית קבילה בבית משפט.",
                url: "https://legalbedek.co.il",
                logo: "https://legalbedek.co.il/logo.webp",
                image: "https://legalbedek.co.il/gallery/yigal-bensky-mumche-bedek-bayit.webp",
                telephone: "+972-50-627-7858",
                email: "yigalbensky@gmail.com",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IL",
                  addressRegion: "ישראל",
                },
                geo: { "@type": "GeoCoordinates", latitude: "31.0461", longitude: "34.8516" },
                openingHours: "Mo-Su 08:00-20:00",
                founder: { "@id": "https://legalbedek.co.il/#yigal-bensky" },
                employee: { "@id": "https://legalbedek.co.il/#yigal-bensky" },
                areaServed: { "@type": "Country", name: "ישראל" },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5.0",
                  bestRating: "5",
                  reviewCount: String(HOMEPAGE_REVIEWS.length),
                },
                review: HOMEPAGE_REVIEWS.map((r) => ({
                  "@type": "Review",
                  author: { "@type": "Person", name: r.author },
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: r.body,
                })),
                sameAs: [
                  "https://www.youtube.com/@LegalBedekBayit",
                  "https://share.google/Xs39vbL4NPtrMLrFZ",
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "שירותי בדק בית",
                  itemListElement: [
                    "בדק בית לפני קנייה",
                    "בדק בית לפני מסירה מהקבלן",
                    "בדיקת דירה יד שנייה",
                    "בדיקת בית פרטי ווילה",
                    "חוות דעת מומחה",
                    "חוות דעת לבית משפט",
                    "איתור ליקויי בנייה",
                    "הערכת עלויות תיקון",
                  ].map((name) => ({
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name },
                  })),
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://legalbedek.co.il/#website",
                name: "בדק בית Legal - יגאל בנסקי",
                url: "https://legalbedek.co.il",
                inLanguage: "he",
                publisher: { "@id": "https://legalbedek.co.il/#organization" },
              },
              {
                "@type": "VideoObject",
                name: "בדק בית Legal - יגאל בנסקי, מומחה לאיתור ליקויי בנייה",
                description:
                  "סרטון היכרות עם שירותי בדק בית של יגאל בנסקי: איתור ליקויי בנייה, בדיקת דירה לפני מסירה וחוות דעת הנדסית קבילה.",
                thumbnailUrl: "https://legalbedek.co.il/gallery/yigal-bensky-mumche-bedek-bayit.webp",
                uploadDate: "2026-06-16",
                contentUrl:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D7%9C%D7%A2%D7%9C%D7%95%D7%AA%20%D7%9C%D7%90%D7%AA%D7%A8-W1e4mWhh4SZfg8W0g0azc15TRMW1fZ.mp4",
                publisher: { "@id": "https://legalbedek.co.il/#organization" },
              },
            ],
          }),
        }}
      />
      {/* Header */}
      <header className="bg-white shadow-sm border-b relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Image
                src="/logo.webp"
                alt="בדק בית Legal - מומחה מוסמך לאיתור ליקויי בנייה וחוות דעת הנדסית נגדית"
                title="בדק בית Legal - מומחה לאיתור ליקויי בנייה"
                width={80}
                height={80}
                className="object-contain w-12 h-12 md:w-20 md:h-20"
              />
              <div>
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  {t("site.title")}
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-slate-900 font-bold mt-1">
                  {t("site.subtitle")}
                </p>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero - bright, optimistic, conversion-focused */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 to-white">
        {/* Bright modern residential tower + blue sky */}
        <div className="absolute inset-0">
          <Image
            src="/images/binyanim-moderniim-israel-bedek-bayit.webp"
            alt={t("hero.bgAlt")}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          {/* Light wash overlay - keeps the image bright while ensuring readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-200/20 via-white/35 to-white/75"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text column - frosted card for guaranteed readability */}
            <div className="rounded-3xl bg-white/80 backdrop-blur-md ring-1 ring-white/70 shadow-xl p-6 md:p-8 text-center lg:text-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 border border-blue-200 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-5">
                <svg className="w-4 h-4 fill-blue-600" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1.2 14.5L7 11.7l1.4-1.4 2.4 2.4 5-5L17.2 9l-6.4 6.5z" />
                </svg>
                {t("hero.badge")}
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-balance text-slate-900">
                {t("hero.title")}
              </h2>
              <p className="mt-4 text-lg md:text-xl text-slate-700 font-medium leading-relaxed text-pretty">
                {t("hero.subtitle1")}
              </p>

              {/* Trust elements */}
              <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["hero.trust1", "hero.trust2", "hero.trust3", "hero.trust4"].map((key) => (
                  <li key={key} className="flex items-center gap-2.5 text-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 shrink-0">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-base md:text-lg font-semibold text-slate-800">{t(key)}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact-section"
                  className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl shadow-emerald-900/20"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M9 13h6M9 17h6" />
                  </svg>
                  {t("hero.ctaPrimary")}
                </a>
                <a
                  href="tel:+972506277858"
                  className="inline-flex items-center justify-center gap-2.5 bg-white border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {t("hero.ctaSecondary")}
                </a>
              </div>

              <button
                onClick={() => setVideoOpen(true)}
                className="mt-5 inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 text-sm font-semibold transition-colors mx-auto lg:mx-0"
                aria-label={t("hero.moreInfo")}
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors shrink-0">
                  <svg className="w-3.5 h-3.5 fill-blue-700" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                {t("hero.moreInfo")}
              </button>
            </div>

            {/* Image column - the inspector next to the service vehicle */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/70 shadow-2xl">
                <Image
                  src="/gallery/yigal-bensky-rechev-bedek-bayit.webp"
                  alt={t("hero.imageAlt")}
                  fill
                  sizes="(max-width: 1024px) 28rem, 32rem"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white text-start">
                  <p className="text-xl font-bold drop-shadow">יגאל בנסקי</p>
                  <p className="text-sm text-blue-50 font-medium drop-shadow">{t("hero.badge")}</p>
                </div>
              </div>
              {/* Floating credential chip */}
              <div className="hidden sm:flex absolute -top-3 -start-3 items-center gap-2 bg-white text-slate-900 rounded-xl shadow-xl px-3.5 py-2.5 ring-1 ring-black/5">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M9 13h6M9 17h6" />
                  </svg>
                </span>
                <span className="text-sm font-bold leading-tight">{t("hero.trust2")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* EEAT — expert profile directly below the hero, building trust before users scroll on */}
      <section className="relative bg-white py-12 md:py-16 border-b border-slate-100" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Portrait column with floating credential chips */}
            <div className="lg:col-span-2">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl">
                  <Image
                    src="/gallery/yigal-bensky-mumche-bedek-bayit.webp"
                    alt="יגאל בנסקי — מומחה בדק בית מוסמך מטעם איגוד המהנדסים והאדריכלים בישראל, עם קסדת מגן בעת בדיקת דירה ואיתור ליקויי בנייה"
                    title="יגאל בנסקי — מומחה בדק בית מוסמך"
                    fill
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                {/* engineers-association chip */}
                <div className="hidden sm:flex absolute -bottom-4 -start-3 items-center gap-2 bg-white text-slate-900 rounded-xl shadow-xl px-3.5 py-2.5 ring-1 ring-black/5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 shrink-0">
                    <Award className="w-4 h-4 text-white" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold leading-tight">
                    איגוד המהנדסים
                    <span className="block font-mono text-[0.7rem] text-slate-500">17253030</span>
                  </span>
                </div>
                {/* ministry-of-labor chip */}
                <div className="hidden sm:flex absolute -top-4 -end-3 items-center gap-2 bg-white text-slate-900 rounded-xl shadow-xl px-3.5 py-2.5 ring-1 ring-black/5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500 shrink-0">
                    <BadgeCheck className="w-4 h-4 text-white" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold leading-tight">
                    רישיון משרד העבודה
                    <span className="block font-mono text-[0.7rem] text-slate-500">1641507</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Intro & credentials column */}
            <div className="lg:col-span-3 text-center lg:text-start">
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-sm font-bold tracking-wide text-blue-700">מי עומד מאחורי הבדיקה</span>
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 text-balance">
                יגאל בנסקי — מומחה בדק בית מוסמך
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed text-pretty">
                שמי יגאל בנסקי, מומחה בדק בית מוסמך מטעם איגוד המהנדסים והאדריכלים בישראל ובעל רישיון בודק
                ממשרד העבודה. לאורך שנות ניסיון רבות ליוויתי רוכשי דירות, ועדי בתים וקבלנים באיתור ליקויי
                בנייה — גלויים ונסתרים כאחד — שאיתורם המוקדם חוסך עשרות אלפי שקלים ועוגמת נפש. כל בדיקה
                מתבצעת על ידי באופן אישי, בעזרת ציוד הנדסי מתקדם, ומסוכמת בדוח מפורט וקביל שניתן להגישו
                כראיה בבית משפט.
              </p>

              {/* Credentials */}
              <ul className="mt-6 space-y-2.5 text-start max-w-xl mx-auto lg:mx-0">
                {[
                  "מומחה מוסמך מטעם איגוד המהנדסים והאדריכלים בישראל (מס׳ 17253030)",
                  "בעל רישיון בודק ממשרד העבודה (1641507)",
                  "חוות דעת הנדסית מפורטת וקבילה כראיה בבית משפט",
                  "ציוד מדידה ובדיקה הנדסי מתקדם — מצלמה תרמית, מד לחות, אנדוסקופ ועוד",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shrink-0">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm md:text-base font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Trust signal stats */}
              <dl className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {EEAT_STATS.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="rounded-xl bg-slate-50 ring-1 ring-slate-200 p-3 text-center">
                      <Icon className="w-5 h-5 text-blue-600 mx-auto" aria-hidden="true" />
                      <div className="mt-1.5 text-sm font-extrabold text-slate-900 leading-tight">{stat.value}</div>
                      <div className="text-[0.7rem] text-slate-500 leading-tight">{stat.label}</div>
                    </div>
                  )
                })}
              </dl>

              {/* Areas of expertise */}
              <div className="mt-6">
                <p className="text-sm font-bold text-slate-900 mb-2.5 text-start">תחומי מומחיות</p>
                <ul className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {EXPERTISE_TAGS.map((tag) => (
                    <li key={tag} className="rounded-full bg-blue-50 ring-1 ring-blue-200 px-3 py-1 text-xs md:text-sm font-semibold text-blue-700">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact-section"
                  className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-xl font-bold text-base md:text-lg transition-all duration-200 transform hover:scale-105 shadow-xl shadow-emerald-900/20"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M9 13h6M9 17h6" />
                  </svg>
                  קבלו הצעת מחיר
                </a>
                <a
                  href="tel:+972506277858"
                  className="inline-flex items-center justify-center gap-2.5 bg-white border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-7 py-3.5 rounded-xl font-bold text-base md:text-lg transition-all duration-200 transform hover:scale-105 shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  שיחת ייעוץ ללא התחייבות
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven experience across property types — strong EEAT "experience" signal */}
      <section className="py-14 md:py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="ניסיון מוכח בשטח"
            title="מספר רב מאוד של בדיקות — במגוון רחב של נכסים"
            subtitle="לאורך השנים ביצענו מספר רב מאוד של בדיקות בכל סוגי הנכסים: מדירות יד שנייה ודירות חדשות מקבלן, דרך בתים פרטיים ווילות ועד רכוש משותף, בדיקות במהלך בנייה וסכסוכי שכנים על רקע רטיבות"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {PROPERTY_EXPERIENCE.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl bg-white p-6 ring-1 ring-slate-200 transition-all duration-200 hover:ring-blue-300 hover:shadow-lg hover:shadow-blue-900/5"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 ring-1 ring-slate-200 transition-colors group-hover:bg-blue-600 group-hover:ring-blue-600">
                      <Icon className="w-6 h-6 text-blue-700 transition-colors group-hover:text-white" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-bold tracking-widest text-slate-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base md:text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm md:text-[0.95rem] text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Credibility strip - real photos of equipment, defects and the inspector */}
      <section className="bg-white py-10 md:py-14 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-balance">{t("strip.title")}</h2>
            <p className="mt-2 text-slate-600 text-pretty">{t("strip.subtitle")}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
              <Eye className="w-4 h-4" aria-hidden="true" />
              {t("strip.clickHint")}
            </p>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { src: "/gallery/yigal-bensky-mumche-bedek-bayit.webp", label: "strip.item1" },
              { src: "/gallery/matzlema-termit-itur-retivut.webp", label: "strip.item2" },
              { src: "/gallery/mad-lachut-protimeter-bedek-bayit.webp", label: "strip.item3" },
              { src: "/gallery/maflest-laser-anchiyut-bedek-bayit.webp", label: "strip.item4" },
              { src: "/gallery/likui-sedek-kir-hitzoni.webp", label: "strip.item5" },
            ].map((item) => (
              <li key={item.src}>
                <a
                  href="/gallery"
                  aria-label={`${t(item.label)} – ${t("strip.viewGallery")}`}
                  className="group relative block rounded-xl overflow-hidden ring-1 ring-slate-200 hover:ring-blue-400 hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={t(item.label)}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Persistent cue – stays visible on touch devices that have no hover */}
                    <span className="absolute top-2 end-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/55 text-white ring-1 ring-white/25 shadow-sm backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-0">
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    </span>

                    {/* Hover overlay – explicit "view gallery" call to action */}
                    <span className="absolute inset-0 flex items-center justify-center bg-slate-900/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="flex translate-y-1 items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-sm font-semibold text-slate-900 shadow-md transition-transform duration-200 group-hover:translate-y-0">
                        <Eye className="h-4 w-4" aria-hidden="true" />
                        {t("strip.viewGallery")}
                      </span>
                    </span>
                  </div>
                  <span className="block text-center text-sm font-semibold text-slate-700 px-2 py-2.5 transition-colors group-hover:text-blue-600">
                    {t(item.label)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Business ID Card Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-0" dir={direction}>
          <DialogHeader className="px-4 pt-4 pb-2 bg-black">
            <DialogTitle className="text-white text-center text-lg md:text-xl">
              {t("hero.moreInfo")}
            </DialogTitle>
          </DialogHeader>
          <div className="w-full">
            {videoOpen && (
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D7%9C%D7%A2%D7%9C%D7%95%D7%AA%20%D7%9C%D7%90%D7%AA%D7%A8-W1e4mWhh4SZfg8W0g0azc15TRMW1fZ.mp4"
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-auto max-h-[75vh] bg-black"
              >
                {"הדפדפן שלך אינו תומך בהפעלת וידאו."}
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-l from-blue-100 to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              {t("peace.title")}
            </h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              {t("peace.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Short Notice Banner — engineering "field note" callout */}
      <section className="py-8 md:py-12 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
            {/* leading accent bar (RTL-aware) */}
            <span className="absolute inset-y-0 start-0 w-1.5 bg-blue-600" aria-hidden="true" />
            <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative flex flex-col md:flex-row items-start gap-5 md:gap-6 p-6 md:p-8 text-right" dir="rtl">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-600/10 ring-1 ring-blue-600/20 shrink-0">
                <Clock className="w-7 h-7 md:w-8 md:h-8 text-blue-700" aria-hidden="true" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-600">חלון זמן קריטי</span>
                <h3 className="mt-1.5 text-xl md:text-2xl font-bold text-slate-900">
                  {t("shortNotice.title")}
                </h3>
                <div className="mt-3 space-y-3">
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">{t("shortNotice.new")}</strong> {t("shortNotice.newDesc")}
                  </p>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">{t("shortNotice.used")}</strong> {t("shortNotice.usedDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="למי זה מיועד" title={t("audience.title")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {AUDIENCE_ITEMS.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group spec-ticks relative overflow-hidden rounded-xl bg-white p-6 ring-1 ring-slate-200 transition-all duration-200 hover:ring-blue-300 hover:shadow-lg hover:shadow-blue-900/5"
                >
                  {/* top accent rule grows on hover */}
                  <span className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 ring-1 ring-slate-200 transition-colors group-hover:bg-blue-600 group-hover:ring-blue-600">
                      <Icon className="w-6 h-6 text-blue-700 transition-colors group-hover:text-white" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-bold tracking-widest text-slate-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base md:text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm md:text-[0.95rem] text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section — engineering service cards grounded in real field photos */}
      <section className="relative py-14 md:py-20 bg-slate-50">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative container mx-auto px-4">
          <SectionHeading
            eyebrow="תחומי השירות"
            title={t("services.title")}
            subtitle="כל בדיקה מבוצעת בכלים הנדסיים מקצועיים ומתועדת בדוח מסודר"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 max-w-5xl mx-auto">
            {SERVICE_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition-all duration-200 hover:ring-blue-300 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      title={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="flex items-start gap-3.5 p-6">
                    <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-lg bg-blue-600/10 ring-1 ring-blue-600/15">
                      <Icon className="w-6 h-6 text-blue-700" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-1.5 text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section — "spec sheet" of pricing & add-on services */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="תמחור הוגן ושקוף" title="תמחור ושירותים נוספים" />
          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm" dir="rtl">
              {/* Headline pricing principle */}
              <div className="relative overflow-hidden bg-slate-900 p-6 md:p-8 text-right">
                <div className="blueprint-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
                <div className="relative">
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-400">איך נקבע המחיר</span>
                  <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">תמחור לפי היקף הבדיקה</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    המחיר נקבע על פי גודל הדירה, הבית או הבניין ומורכבות הבדיקה ההנדסית הנדרשת
                  </p>
                </div>
              </div>
              {/* Add-on services as spec rows */}
              <dl className="divide-y divide-slate-200 bg-white">
                {PRICING_ROWS.map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 p-5 md:px-8 text-right">
                    <dt className="sm:w-44 shrink-0 font-bold text-slate-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                      {row.label}
                    </dt>
                    <dd className="text-slate-600 leading-relaxed">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section (P12) — certifications, court experience, equipment & documented evidence */}
      <section className="relative py-14 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative container mx-auto px-4">
          <SectionHeading
            eyebrow="אמון ואסמכתאות"
            title="הסמכות, ניסיון משפטי וציוד מקצועי"
            subtitle="האמון שלכם נבנה על הסמכה רשמית, ניסיון מוכח בבית משפט ובדיקה מתועדת בכלים הנדסיים"
          />

          {/* Three trust pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto" dir="rtl">
            {/* Certifications */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/10 ring-1 ring-blue-600/15">
                <Award className="w-6 h-6 text-blue-700" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">הסמכות מקצועיות</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                מומחה מוסמך ומורשה — הסמכה רשמית המקנה תוקף מקצועי ומשפטי לכל חוות דעת.
              </p>
              <dl className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3.5 py-2.5 ring-1 ring-slate-200">
                  <dt className="text-sm font-semibold text-slate-700">איגוד המהנדסים והאדריכלים</dt>
                  <dd className="font-mono text-sm font-bold text-blue-700">17253030</dd>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3.5 py-2.5 ring-1 ring-slate-200">
                  <dt className="text-sm font-semibold text-slate-700">רישיון משרד העבודה</dt>
                  <dd className="font-mono text-sm font-bold text-blue-700">1641507</dd>
                </div>
              </dl>
            </div>

            {/* Court experience */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20">
                <Gavel className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">ניסיון בבית משפט</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                חוות דעת הנדסית מפורטת, מנומקת וקבילה כראיה — לצד ליווי בהליכים מול קבלנים, חברות
                בנייה ומשרדי עורכי דין.
              </p>
              <ul className="mt-4 space-y-2">
                {["חוות דעת נגדית מוסמכת", "חוות דעת לבית משפט", "ליווי מול הקבלן עד לתיקון"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/10 ring-1 ring-blue-600/15">
                <Camera className="w-6 h-6 text-blue-700" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">ציוד הנדסי מתקדם</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                כל בדיקה מבוצעת בכלים מקצועיים שמאתרים ליקויים נסתרים שהעין אינה רואה.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["מצלמה תרמית", "מד לחות", "מצלמת אנדוסקופ", "מד כוח דיגיטלי", "מפלסת לייזר"].map((item) => (
                  <li key={item} className="rounded-full bg-slate-100 ring-1 ring-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Documented evidence — real inspection & equipment photos */}
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-4" dir="rtl">
              <h3 className="text-lg font-bold text-slate-900">בדיקות מתועדות מהשטח</h3>
              <div className="flex items-center gap-4">
                <a href="/videos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  לסרטוני הבדיקות
                </a>
                <a href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  לגלריית הבדיקות המלאה
                </a>
              </div>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {TRUST_EVIDENCE.map((item) => (
                <li key={item.src}>
                  <a
                    href="/gallery"
                    aria-label={`${item.label} – לגלריית הבדיקות`}
                    className="group block rounded-xl overflow-hidden ring-1 ring-slate-200 hover:ring-blue-400 hover:shadow-lg transition-all duration-200 bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <Image
                        src={item.src}
                        alt={item.label}
                        title={item.label}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="block text-center text-xs md:text-sm font-semibold text-slate-700 px-2 py-2.5 transition-colors group-hover:text-blue-600">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="לקוחות ממליצים"
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
          />

          {/* Google Reviews Badge */}
          <div className="flex justify-center mb-8 md:mb-12">
            <a 
              href="https://share.google/UEfYIc6AgM0BAcvgS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow"
              aria-label="צפה בביקורות שלנו בגוגל מפס"
            >
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-900 text-lg">5.0</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{t("testimonials.googleBadge")}</p>
                </div>
              </div>
              <span className="text-blue-600 font-medium text-sm hover:underline">{t("testimonials.viewAll")}</span>
            </a>
          </div>
          
          {/* Text Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {"\"קיבלתי חוו\"ד עם ליקויים רבים, להפתעתי חברת אלקטרה תיקנו את הכל ללא כל ויכוח בהתאם לדוח.\""}
                </p>
                <p className="font-semibold text-gray-900">בינימין</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {"\"הזמנו בדק בית לבניין מטעם ועד הבית. מרוצים מאוד מהתוצאה, התגלו ליקויים שאם לא היינו מטפלים בהם היה נגרם נזק עצום בעתיד.\""}
                </p>
                <p className="font-semibold text-gray-900">יוסף אבוטבול</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {"\"אני קבלן ביצוע, הצלחתי בזכות חוו\"ד נגדית לצמצם את עלויות התיקונים בעשרות אלפי שקלים.\""}
                </p>
                <p className="font-semibold text-gray-900">מנחם</p>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp Screenshot Reviews */}
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-6 mt-4">{t("testimonials.whatsappTitle")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden border-r-4 border-r-green-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-green-600 font-medium flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    WhatsApp
                  </span>
                </div>
                <p className="text-gray-700 mb-3 font-medium">
                  {"\"הבדיקה שלכם הייתה מקצועית ומדויקת מאוד. הקבלן תיקן את כל הליקויים שהוצאו בדוח. לאחר ביצוע הבדק נוכחתי שחובה לבצע בדיקה חדשה. תודה רבה!\""}
                </p>
                <figure className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/images/bikoret-bedek-bayit-benny.webp"
                    alt="ביקורת בדק בית מלקוח מרוצה - בדיקה מקצועית ומדויקת, הקבלן תיקן את כל הליקויים שאותרו בדוח"
                    title="ביקורת לקוח על שירות בדק בית"
                    width={1220}
                    height={1155}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="sr-only">ביקורת לקוח - בדיקה מקצועית ומדויקת, הקבלן תיקן את כל הליקויים</figcaption>
                </figure>
                <p className="font-semibold text-gray-900 mt-3">בני</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden border-r-4 border-r-green-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-green-600 font-medium flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    WhatsApp
                  </span>
                </div>
                <p className="text-gray-700 mb-3 font-medium">
                  {"\"קיבלנו דוח מפורט, ברור ומסודר. יגאל הסביר לנו בשפה פשוטה מה המשמעות של כל ממצא. ממליצים בחום לכל מי שמקבל דירה חדשה!\""}
                </p>
                <figure className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/images/bikoret-bedek-bayit-mike.webp"
                    alt="ביקורת בדק בית מלקוח מרוצה - דוח מפורט וברור, ממליצים בחום לכל מי שמקבל דירה חדשה מקבלן"
                    title="ביקורת לקוח על דוח בדק בית מפורט"
                    width={1600}
                    height={720}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="sr-only">ביקורת לקוח - דוח מפורט וברור, ממליצים בחום למקבלי דירה חדשה</figcaption>
                </figure>
                <p className="font-semibold text-gray-900 mt-3">מייק</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden border-r-4 border-r-green-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-green-600 font-medium flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    WhatsApp
                  </span>
                </div>
                <p className="text-gray-700 mb-3 font-medium">
                  {"\"אין לי מילים חוץ מלומר לך שאתה תותח! אני ממליץ עליך בחום.\""}
                </p>
                <figure className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/images/bikoret-bedek-bayit-yaakov.webp"
                    alt="ביקורת בדק בית מלקוח מרוצה - המלצה חמה על שירות בדק בית מקצועי ואמין"
                    title="המלצת לקוח על שירות בדק בית"
                    width={1201}
                    height={758}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="sr-only">ביקורת לקוח - המלצה חמה על שירות בדק בית מקצועי ואמין</figcaption>
                </figure>
                <p className="font-semibold text-gray-900 mt-3">יעקב</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden border-r-4 border-r-green-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-green-600 font-medium flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    WhatsApp
                  </span>
                </div>
                <p className="text-gray-700 mb-3 font-medium">
                  {"\"תודה רבה שוב, עבודה מקצועית ומדויקת.\""}
                </p>
                <figure className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/images/bikoret-bedek-bayit-whatsapp.webp"
                    alt="ביקורת בדק בית בוואטסאפ מלקוח מרוצה - עבודה מקצועית ומדויקת באיתור ליקויי בנייה"
                    title="ביקורת לקוח בוואטסאפ על בדק בית"
                    width={1220}
                    height={817}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="sr-only">ביקורת לקוח בוואטסאפ - עבודה מקצועית ומדויקת</figcaption>
                </figure>
                <p className="font-semibold text-gray-900 mt-3">איתן</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden border-r-4 border-r-green-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-green-600 font-medium flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    WhatsApp
                  </span>
                </div>
                <p className="text-gray-700 mb-3 font-medium">
                  {"\"בוקר טוב יגאל, תודה רבה מעריך את ההשקעה, שבוע טוב!\""}
                </p>
                <figure className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/images/bikoret-bedek-bayit-hashkaa.webp"
                    alt="ביקורת בדק בית מלקוח מרוצה - תודה רבה, הלקוח מעריך את ההשקעה בבדק הבית שחסך כסף וליקויים"
                    title="ביקורת לקוח על ההשקעה בבדק בית"
                    width={405}
                    height={73}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="sr-only">ביקורת לקוח - תודה רבה, מעריך את ההשקעה בבדק הבית</figcaption>
                </figure>
                <p className="font-semibold text-gray-900 mt-3">לקוח מרוצה</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden border-r-4 border-r-green-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-green-600 font-medium flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    WhatsApp
                  </span>
                </div>
                <p className="text-gray-700 mb-3 font-medium">
                  {"\"טרם הסתכלתי בבדק בית אך היית אמין סבלני ומקצועי, תודה רבה.\""}
                </p>
                <figure className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/images/bikoret-bedek-bayit-masha.webp"
                    alt="ביקורת בדק בית בוואטסאפ ממאשה מאזור מרכז הארץ לאחר בדק בית לדירה חדשה - שירות אמין סבלני ומקצועי"
                    title="ביקורת לקוחה בוואטסאפ על בדק בית לדירה חדשה"
                    width={597}
                    height={140}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="sr-only">
                    ביקורת לקוחה בוואטסאפ - שירות אמין, סבלני ומקצועי בבדק בית לדירה חדשה במרכז הארץ
                  </figcaption>
                </figure>
                <p className="font-semibold text-gray-900 mt-3">מאשה, מרכז הארץ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="מי עומד מאחורי הבדיקה" title="אודות" />

          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-blue-500">
              <CardContent className="p-8 md:p-10 text-right">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">יגאל בנסקי</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  מומחה בדק בית מוסמך מטעם משרד העבודה ואיגוד המהנדסים הישראלי. בעל ניסיון רב שנים באיתור ליקויי בנייה, הכנת חוות דעת מקצועיות וליווי לקוחות בהליכים מול קבלנים ומשרדי עורכי דין.
                </p>
                <div className="bg-blue-50 rounded-lg p-5 text-center">
                  <p className="text-sm text-gray-600 mb-1">רישיון משרד העבודה</p>
                  <p className="text-xl font-bold text-blue-700">1641507</p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-lg">
                אני מספק שירותי בדק בית מקצועיים ומקיפים בכל הארץ, עם מחויבות לאיכות, מקצועיות ושקיפות מלאה כלפי הלקוחות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section — also emitted as FAQPage schema for rich results */}
      <section className="py-14 md:py-20 bg-white" dir="rtl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: HOMEPAGE_FAQ.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            }),
          }}
        />
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="שאלות נפוצות" title="שאלות ותשובות על בדק בית" />
          <div className="max-w-3xl mx-auto divide-y divide-slate-200">
            {HOMEPAGE_FAQ.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-right list-none">
                  <h3 className="text-base md:text-lg font-bold text-slate-900">{item.question}</h3>
                  <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-full bg-blue-100 text-blue-700 transition-transform duration-200 group-open:rotate-45">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed text-pretty">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section — also serves as the primary contact anchor */}
      <section id="contact-section" className="scroll-mt-20 py-12 md:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              שקט נפשי מתחיל בבדק בית מקצועי - צרו קשר עכשיו
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-white">
              {
                'בדק בית עכשיו = שקט נפשי אחר כך. \n     תקופת האחריות מתחילה להסתיים כבר מיום מסירת הדירה.\n חוו"ד מומחה לבדק בית, תסייע לקבל את מה שמגיע לכם, תחסוך כסף  ודאגות בעתיד. '
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <WhatsAppButton className="bg-green-500 hover:bg-green-600 w-full sm:w-auto" size="lg" />
              <a
                href="tel:+972506277858"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                זימון מומחה
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Site index (HTML sitemap) - internal links to every page */}
      <SiteIndex />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
              <div className="space-y-2 text-gray-200">
                <p>📞 073-3745044 - {t("footer.office")}</p>
                <p>📞 050-6277858 - {t("footer.expert")}</p>
                <p>📍 {t("footer.nationwide")}</p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a 
                  href="https://www.youtube.com/@LegalBedekBayit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                  aria-label="ערוץ היוטיוב שלנו - סרטוני בדק בית"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
                <a 
                  href="https://share.google/Xs39vbL4NPtrMLrFZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                  aria-label="ביקורות גוגל - בדק בית Legal"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Google Maps
                </a>
                <a 
                  href="https://autocoachapp.com/autocoachapp-heb-lp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors"
                  aria-label="TikTok - בדק בית Legal"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">{t("footer.services")}</h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <a href="/services" className="text-blue-400 hover:text-blue-300 hover:underline font-semibold">
                    כל שירותי בדק בית
                  </a>
                </li>
                <li>
                  <a href="/services/bedek-bayit-lifnei-kniya" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בדק בית לפני קנייה
                  </a>
                </li>
                <li>
                  <a href="/services/bedek-bayit-lifnei-mesira" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בדק בית לפני מסירה
                  </a>
                </li>
                <li>
                  <a href="/services/chavat-daat-beit-mishpat" className="text-blue-400 hover:text-blue-300 hover:underline">
                    חוות דעת לבית משפט
                  </a>
                </li>
                <li className="pt-2">בדיקות הנדסיות ובטיחות</li>
                <li className="pt-2">
                  <a href="/articles/bedek-bayit-dira-hadasha" className="text-blue-400 hover:text-blue-300 hover:underline">
                    מאמר: בדק בית בדירה חדשה
                  </a>
                </li>
                <li>
                  <a href="/articles/bedek-bayit-dira-yad-shniya" className="text-blue-400 hover:text-blue-300 hover:underline">
                    מאמר: בדק בית לדירה יד שניה
                  </a>
                </li>
                <li>
                  <a href="/articles/matai-lehazmin-bedek-bayit" className="text-blue-400 hover:text-blue-300 hover:underline">
                    מאמר: מתי להזמין בדק בית?
                  </a>
                </li>
                <li>
                  <a href="/articles/chok-hamkar-dirot" className="text-blue-400 hover:text-blue-300 hover:underline">
                    מאמר: חוק המכר - תקופות בדק ואחריות
                  </a>
                </li>
                <li>
                  <a href="/articles/tikaney-instalatzia-bedek-bayit" className="text-blue-400 hover:text-blue-300 hover:underline">
                    מאמר: תקני אינסטלציה (ת&quot;י 1205)
                  </a>
                </li>
                <li>
                  <a href="/articles/taken-789-stiyot-mutarot" className="text-blue-400 hover:text-blue-300 hover:underline">
                    מאמר: ת&quot;י 789 - סטיות מותרות
                  </a>
                </li>
                <li>
                  <a href="/articles/protokol-mesira" className="text-blue-400 hover:text-blue-300 hover:underline">
                    מאמר: פרוטוקול מסירה - מדריך
                  </a>
                </li>
                <li className="pt-2">
                  <a href="/blog" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בלוג בדק בית
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-blue-400 hover:text-blue-300 hover:underline">
                    גלריית בדק בית
                  </a>
                </li>
                <li>
                  <a href="/bedek-bayit" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בדק בית לפי עיר
                  </a>
                </li>
                <li>
                  <a href="/bedek-bayit/kablan" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בדק בית לפי קבלן
                  </a>
                </li>
                <li>
                  <a href="/services/mehir-lamishtaken" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בדק בית מחיר למשתכן
                  </a>
                </li>
                <li>
                  <a href="/services/pinui-binui" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בדק בית פינוי בינוי
                  </a>
                </li>
                <li>
                  <a href="/services/tama-38" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בדק בית תמ&quot;א 38
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">אודותינו</h3>
              <p className="text-gray-200 text-sm">
                חברה המתמחה בבדק בית מומחיה מוסמכים מטעם משרד העבודה ואיגוד המהנדסים הישראלי לבדיקות איכות הבניה, איתור
                ליקויי בנייה וחוות דעת נגדית בכל הארץ.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-300">
            <p className="text-sm text-gray-200">© 2020 בדק בית Legal - {t("footer.rights")}.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white transition-colors text-sm">
                {/* Additional content can be added here */}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
