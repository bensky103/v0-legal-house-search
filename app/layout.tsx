import type React from "react"
import type { Metadata, Viewport } from "next"
import { Heebo } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import ContactBar from "@/components/contact-bar"

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B82F6",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://legalbedek.co.il"),
  title: "בדק בית - איתור ליקויי בנייה וחוות דעת נגדית | מומחה מוסמך",
  description:
    "מומחה מוסמך לבדיקת ליקויי בנייה וחוות דעת נגדית. בדיקת דירה לפני קנייה, איתור רטיבות ובעיות איטום. שירות מקצועי ומהיר בכל הארץ.",
  keywords: [
    "בדק בית",
    "בדיקת בנייה",
    "מומחה בדק בית",
    "איתור ליקויי בנייה",
    "חוות דעת נגדית",
    "בדיקת דירה לפני קנייה",
    "בדיקת נכס לאחר רכישה",
    "בדיקת נכס עבור ועד הבית",
    "יגאל בנסקי",
  ],
  authors: [{ name: "יגאל בנסקי - מומחה בדק בית" }],
  creator: "יגאל בנסקי",
  publisher: "בדק בית Legal",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://legalbedek.co.il",
    siteName: "בדק בית Legal - איתור ליקויי בנייה",
    title: "בדק בית - מומחה לאיתור ליקויי בנייה וחוות דעת נגדית",
    description: "מומחה מוסמך לבדיקת ליקויי בנייה וחוות דעת נגדית. בדיקת דירה לפני קנייה, איתור רטיבות ובעיות איטום.",
    images: [
      {
        url: "/logo.webp",
        width: 1124,
        height: 901,
        alt: "בדק בית Legal - מומחה לאיתור ליקויי בנייה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "בדק בית - מומחה לאיתור ליקויי בנייה",
    description: "מומחה מוסמך לבדיקת ליקויי בנייה וחוות דעת נגדית בכל הארץ",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://legalbedek.co.il",
    languages: {
      "he-IL": "https://legalbedek.co.il",
    },
  },
  verification: {
    google: "CMIAgCXv6V9ZyaL206bc7tU3VNWXMArFrtydXSnTMQY",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKMW6NCK');`}
        </Script>

        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17703305821" strategy="afterInteractive" />
        <Script id="gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17703305821');`}
        </Script>

        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "בדק בית Legal - יגאל בנסקי",
              description: "מומחה מוסמך לבדיקת ליקויי בנייה וחוו״ד נגדית",
              url: "https://legalbedek.co.il",
              logo: {
                "@type": "ImageObject",
                url: "https://legalbedek.co.il/logo.webp",
                contentUrl: "https://legalbedek.co.il/logo.webp",
                caption: "בדק בית Legal - מומחה לאיתור ליקויי בנייה וחוות דעת נגדית",
                width: 1124,
                height: 901,
                encodingFormat: "image/webp",
              },
              image: [
                {
                  "@type": "ImageObject",
                  url: "https://legalbedek.co.il/images/binyanim-moderniim-israel-bedek-bayit.webp",
                  contentUrl: "https://legalbedek.co.il/images/binyanim-moderniim-israel-bedek-bayit.webp",
                  caption:
                    "בדק בית ובדיקת איכות בנייה של דירות חדשות ומבנים בישראל לפני מסירה מהקבלן",
                  width: 1229,
                  height: 752,
                  encodingFormat: "image/webp",
                  representativeOfPage: true,
                },
                {
                  "@type": "ImageObject",
                  url: "https://legalbedek.co.il/gallery/yigal-bensky-mumche-bedek-bayit.webp",
                  contentUrl: "https://legalbedek.co.il/gallery/yigal-bensky-mumche-bedek-bayit.webp",
                  caption: "יגאל בנסקי - מומחה בדק בית מוסמך עם קסדת מגן וציוד בדיקה הנדסי",
                  width: 1086,
                  height: 1448,
                  encodingFormat: "image/webp",
                },
              ],
              telephone: "+972-50-627-7858",
              email: "yigalbensky@gmail.com",
              sameAs: [
                "https://www.youtube.com/@LegalBedekBayit",
                "https://share.google/Xs39vbL4NPtrMLrFZ"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IL",
                addressLocality: "ישראל",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "31.0461",
                longitude: "34.8516",
              },
              openingHours: "Mo-Su 08:00-20:00",
              priceRange: "$$",
              serviceArea: [
                { "@type": "City", name: "תל אביב" },
                { "@type": "City", name: "ירושלים" },
                { "@type": "City", name: "חיפה" },
                { "@type": "City", name: "ראשון לציון" },
                { "@type": "City", name: "פתח תקווה" },
                { "@type": "City", name: "אשדוד" },
                { "@type": "City", name: "נתניה" },
                { "@type": "City", name: "באר שבע" },
                { "@type": "City", name: "בני ברק" },
                { "@type": "City", name: "חולון" },
                { "@type": "City", name: "רמת גן" },
                { "@type": "City", name: "אשקלון" },
                { "@type": "City", name: "רחובות" },
                { "@type": "City", name: "בת ים" },
                { "@type": "City", name: "כפר סבא" },
                { "@type": "City", name: "הרצליה" },
                { "@type": "City", name: "חדרה" },
                { "@type": "City", name: "מודיעין" },
                { "@type": "City", name: "נצרת" },
                { "@type": "City", name: "לוד" },
                { "@type": "City", name: "רעננה" },
                { "@type": "City", name: "רמלה" },
                { "@type": "City", name: "גבעתיים" },
                { "@type": "City", name: "הוד השרון" },
                { "@type": "City", name: "קריית אתא" },
                { "@type": "City", name: "נהריה" },
                { "@type": "City", name: "קריית גת" },
                { "@type": "City", name: "קריית מוצקין" },
                { "@type": "City", name: "יבנה" },
                { "@type": "City", name: "רמת השרון" },
                { "@type": "City", name: "אור יהודה" },
                { "@type": "City", name: "צפת" },
                { "@type": "City", name: "אילת" },
                { "@type": "City", name: "עכו" },
                { "@type": "City", name: "כרמיאל" },
                { "@type": "City", name: "יקנעם" },
                { "@type": "City", name: "קריית ביאליק" },
                { "@type": "City", name: "קריית ים" },
                { "@type": "City", name: "קריית שמונה" },
                { "@type": "City", name: "מגדל העמק" },
                { "@type": "City", name: "טבריה" },
                { "@type": "City", name: "דימונה" },
                { "@type": "City", name: "שדרות" },
                { "@type": "City", name: "קריית מלאכי" },
                { "@type": "City", name: "נס ציונה" },
                { "@type": "City", name: "עפולה" },
                { "@type": "City", name: "ערד" },
                { "@type": "City", name: "טירה" },
                { "@type": "City", name: "קלנסווה" },
                { "@type": "City", name: "אום אל-פחם" },
                { "@type": "City", name: "סחנין" },
                { "@type": "City", name: "שפרעם" },
                { "@type": "City", name: "אופקים" },
                { "@type": "City", name: "מעלה אדומים" },
                { "@type": "City", name: "מעלות תרשיחא" },
                { "@type": "City", name: "בית שמש" },
                { "@type": "City", name: "זכרון יעקב" },
                { "@type": "City", name: "גני תקווה" },
                { "@type": "City", name: "נשר" },
                { "@type": "City", name: "נוף הגליל" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "שירותי בדיקת בנייה",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "חוות דעת נגדית",
                      description: "חוות דעת נגדית מקצועית מהימנה לבדיקות קיימות ודוחות בדיקה",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "בדיקת נכס לאחר רכישה",
                      description: "בדיקה מקיפה של נכס לאחר רכישה לאיתור ליקויים נסתרים",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "בדיקת נכס עבור ועד הבית",
                      description: "בדיקות מקצועיות עבור ועד הבית לאיתור ליקויים במבנה המשותף",
                    },
                  },
                ],
              },
              hasPart: [
                {
                  "@type": "WebPage",
                  name: "בדק בית מקצועי",
                  url: "https://legalbedek.co.il/#services",
                  description: "בדיקת בנייה מלאה עם דוח מפורט ממומחה מוסמך",
                  inLanguage: "he",
                  alternateName: "שירותי בדיקה מקצועיים",
                },
                {
                  "@type": "WebPage",
                  name: "איתור ליקויי בנייה",
                  url: "https://legalbedek.co.il/#inspection",
                  description: "זיהוי מומחה של כל סוגי ליקויי הבנייה והקונסטרוקציה בנכס",
                  inLanguage: "he",
                  alternateName: "בדיקת איתור ליקויים",
                },
                {
                  "@type": "WebPage",
                  name: "חוות דעת נגדית",
                  url: "https://legalbedek.co.il/#counter-opinion",
                  description: "דעה מקצועית בלתי תלויה על הנכס לצורך משפטי וביטוחי",
                  inLanguage: "he",
                  alternateName: "חוו״ד נגדית מוסמכת",
                },
                {
                  "@type": "WebPage",
                  name: "בדיקת נכס לאחר רכישה",
                  url: "https://legalbedek.co.il/#post-purchase",
                  description: "וודא את איכות הנכס שקנית בדיקה מקיפה תוך 7 ימים מהקנייה",
                  inLanguage: "he",
                  alternateName: "בדיקה לרוכשי דירות ובתים",
                },
                {
                  "@type": "WebPage",
                  name: "בדיקה עבור ועד הבית",
                  url: "https://legalbedek.co.il/#building-committee",
                  description: "בדיקת המבנה המשותף לטובת תוכניות שיפוצים וביטחון התושבים",
                  inLanguage: "he",
                  alternateName: "בדיקה שוטפת עבור ועדות",
                },
                {
                  "@type": "WebPage",
                  name: "צור קשר עכשיו",
                  url: "https://legalbedek.co.il/#contact",
                  description: "קבל הצעת מחיר בחינם וקבע פגישה עם מומחה בתוך שעה",
                  inLanguage: "he",
                  alternateName: "יצירת קשר עם המומחה",
                },
                {
                  "@type": "Article",
                  name: "בדק בית בדירה חדשה - מדריך מקיף",
                  url: "https://legalbedek.co.il/articles/bedek-bayit-dira-hadasha",
                  description: "מדריך מקיף לבדק בית בדירה חדשה - איך לא לקנות חתול בשק ולנהל משא ומתן חכם",
                  inLanguage: "he",
                },
              ],
            })}
        </Script>
      </head>
      <body className={`${heebo.className} pb-20 md:pb-0`}>
        <LanguageProviderWrapper>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKMW6NCK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <ContactBar />
        </LanguageProviderWrapper>
      </body>
    </html>
  )
}

function LanguageProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}
