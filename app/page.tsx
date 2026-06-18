"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t, direction } = useLanguage()
  const [videoOpen, setVideoOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir={direction}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Image
                src="/logo.png"
                alt="בדק בית Legal - מומחה לאיתור ליקויי בנייה וחוות דעת נגדית"
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

      {/* Hero Buildings Image Section with Parallax Effect and Overlay */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Buildings Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/image.png"
            alt="בניינים מודרניים בישראל - בדיקת איכות בנייה ומבנים"
            fill
            className="object-cover brightness-125 contrast-110"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/50 to-blue-700/55"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{t("hero.title")}</h2>
            <div className="mb-6 md:mb-8 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-bold drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">
                {t("hero.subtitle1")}
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white mt-2 leading-relaxed font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">
                {t("hero.subtitle2")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setVideoOpen(true)}
                className="group bg-white/15 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/25 px-10 py-5 rounded-xl font-bold text-lg md:text-xl transition-all duration-200 transform hover:scale-105 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] shadow-lg flex items-center gap-3"
                aria-label={t("hero.moreInfo")}
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/25 group-hover:bg-white/35 transition-colors shrink-0">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                {t("hero.moreInfo")}
              </button>
              <a
                href="/gallery"
                className="group bg-white/5 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/15 px-10 py-5 rounded-xl font-bold text-lg md:text-xl transition-all duration-200 transform hover:scale-105 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] shadow-lg flex items-center gap-3"
                aria-label="גלריית תמונות בדק בית"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors shrink-0">
                  <svg className="w-5 h-5 stroke-white fill-none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </span>
                גלריית תמונות
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
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

      {/* Contact Us Section - Top Priority */}
      <section
        id="contact-section"
        className="py-12 md:py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-balance">
              {t("contact.subtitle")}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 md:mb-12">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm md:text-base font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                התייעצות חינם
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm md:text-base font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                בדיקה הנדסית מקיפה
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm md:text-base font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                שירות בכל הארץ
              </span>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="w-full max-w-md">
                <ContactForm />
              </div>

              {/* WhatsApp Button - Positioned for better mobile/desktop experience */}
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={() => window.open("https://wa.me/972506277858", "_blank")}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg shadow-lg rounded-lg transition-colors flex items-center gap-2"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Short Notice Banner */}
      <section className="py-8 md:py-12 bg-gradient-to-l from-amber-50 to-orange-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-right" dir="rtl">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {t("shortNotice.title")}
              </h3>
              <div className="space-y-3">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  <strong>{t("shortNotice.new")}</strong> {t("shortNotice.newDesc")}
                </p>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  <strong>{t("shortNotice.used")}</strong> {t("shortNotice.usedDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            {t("audience.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-base md:text-lg">ועדי עובדים ובעלי דירות</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-800">
                  בדיקות מקצועיות עבור ועדי עובדים לוודא איכות הבנייה ובטיחות המבנה
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <CardTitle className="text-base md:text-lg">בעלי נכס פרטי ורוכשי דירות</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-800">
                  בדיקה מקיפה לפני רכישת דירה או בית פרטי - בדק בית מקצועי
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-base md:text-lg">קבלנים ומתכננים</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-800">ליווי מקצועי בתהליכי שיפוץ ותכנון</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-base md:text-lg">{"יזמים ואדריכלים"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-800">בדיקות באתר, פיקוח בנייה ותמונת מצב מקצועית ללקוחות לפני ואחרי עבודות</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            {t("services.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center ml-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  בדק בית הנדסי
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  בדיקה מקיפה לאיתור ליקויים קונסטרוקטיביים, בעיות איטום, רטיבות, ליקויי גמר ובעיות בטיחות
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center ml-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  מומחה בדק בית
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">בדיקות מקצועיות של מבנים, יציבות קונסטרוקציה ובטיחות מבנית</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center ml-3">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  חוות דעת נגדית מוסמכת
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  הכנת חוות דעת מקצועית נגדית מוסמכת לצורך הליכים משפטיים, ביטוחיים או מול קבלנים
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center ml-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                      />
                    </svg>
                  </div>
                  ליווי מקצועי ואיתור ליקויי בנייה
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">ליווי וייעוץ מקצועי לאורך כל התהליך הפניה למומחים ולמעבדות מכון התקנים </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">תמחור ושירותים נוספים</h2>
            <Card className="text-right">
              <CardContent className="p-4 md:p-8">
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2 md:mb-3">תמחור</h3>
                    <p className="text-sm md:text-base text-gray-800">
                      המחיר נקבע על פי גודל הדירה/בית/בניין ומורכבות הבדיקה הנדרשת
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-green-50 p-4 md:p-6 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">ליווי משפטי</h4>
                      <p className="text-gray-800 text-sm">ליווי משפטי ע"פ דרישה </p>
                    </div>

                    <div className="bg-orange-50 p-4 md:p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">ליווי במשא ומתן</h4>
                      <p className="text-gray-800 text-sm">ליווי במשא ומתן עם קבלנים</p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 md:p-6 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">תמחור נוסף</h4>
                    <p className="text-gray-800"> תמחור נוסף עבור ליקויים שלא נפתרו לאחר חוו"ד </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-center text-gray-600 mb-4">{t("testimonials.subtitle")}</p>
          
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
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="/images/review-benny.jpeg"
                    alt="ביקורת בדק בית מלקוח מרוצה - בדיקה מקצועית ומדויקת הקבלן תיקן את כל הליקויים"
                    className="w-full h-auto object-cover"
                  />
                </div>
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
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="/images/review-mike.jpeg"
                    alt="ביקורת בדק בית - דוח מפורט וברור ממליצים בחום לכל מי שמקבל דירה חדשה"
                    className="w-full h-auto object-cover"
                  />
                </div>
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
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="/images/review-yaakov.jpeg"
                    alt="ביקורת בדק בית - המלצה חמה על שירות מקצועי"
                    className="w-full h-auto object-cover"
                  />
                </div>
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
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="/images/whatsapp-review.jpeg"
                    alt="ביקורת בדק בית - עבודה מקצועית ומדויקת"
                    className="w-full h-auto object-cover"
                  />
                </div>
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
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="/testimonials/whatsapp-testimonial-investment.png"
                    alt="ביקורת בדק בית מלקוח מרוצה - תודה רבה מעריך את ההשקעה בבדק הבית"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-900 mt-3">לקוח מרוצה</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            אודות
          </h2>
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

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
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
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact-section")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto"
              >
                זימון מומחה
              </button>
            </div>
          </div>
        </div>
      </section>

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
                <li>בדיקת ליקויי בנייה מקצועית</li>
                <li>חוות דעת נגדית מוסמכת</li>
                <li>בדיקות הנדסיות ובטיחות</li>
                <li>ליווי מקצועי ואיתור ליקויי בנייה</li>
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
                  <a href="/projects/mehir-lamishtaken" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בדק בית מחיר למשתכן
                  </a>
                </li>
                <li>
                  <a href="/projects/pinui-binui" className="text-blue-400 hover:text-blue-300 hover:underline">
                    בדק בית פינוי בינוי
                  </a>
                </li>
                <li>
                  <a href="/projects/tama-38" className="text-blue-400 hover:text-blue-300 hover:underline">
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
