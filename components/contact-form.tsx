"use client"

import { useLanguage } from "@/contexts/language-context"

export function ContactForm() {
  const { t } = useLanguage()
  
  const handlePhoneCall = () => {
    // Opens dialer app with the office phone number
    window.location.href = "tel:+972733745044"
  }

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto relative"
      style={{ zIndex: 10, pointerEvents: "auto" }}
    >
      <h3 className="text-xl font-bold text-gray-900 text-center mb-6">{t("contact.form.title")}</h3>

      <div className="text-center">
        <button
          onClick={handlePhoneCall}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors duration-200 flex items-center justify-center gap-3"
          style={{ pointerEvents: "auto", zIndex: 11 }}
        >
          <span>📞</span>
          <span>{t("contact.call")}</span>
        </button>

      </div>
    </div>
  )
}
