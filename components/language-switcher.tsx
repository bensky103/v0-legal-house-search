"use client"

import { useLanguage } from "@/contexts/language-context"
import { type Language, languageNames } from "@/lib/translations"

const langLabels: Record<Language, string> = {
  he: "עב",
  en: "EN",
  ru: "РУ",
  fr: "FR",
}

function FlagIcon({ lang }: { lang: Language }) {
  const flags: Record<Language, React.ReactNode> = {
    he: (
      <svg className="w-4 h-3" viewBox="0 0 640 480">
        <rect width="640" height="480" fill="#fff"/>
        <rect y="48" width="640" height="48" fill="#0038b8"/>
        <rect y="384" width="640" height="48" fill="#0038b8"/>
        <path fill="#0038b8" d="M320 148l-56 97h112l-56-97zm0 184l56-97H264l56 97zm-60-97l-28-48.5-28 48.5h56zm120 0l28-48.5 28 48.5h-56zm-60-48.5l28 48.5h-56l28-48.5zm0 145l-28-48.5h56l-28 48.5z"/>
      </svg>
    ),
    en: (
      <svg className="w-4 h-3" viewBox="0 0 640 480">
        <rect width="640" height="480" fill="#bd3d44"/>
        <path d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" stroke="#fff" strokeWidth="37"/>
        <rect width="364" height="258" fill="#192f5d"/>
        <path fill="#fff" d="m30 17 5 16H52l-14 10 5 16-14-10-14 10 5-16-14-10h17zm60 0 5 16h17l-14 10 5 16-14-10-14 10 5-16-14-10h17zm60 0 5 16h17l-14 10 5 16-14-10-14 10 5-16-14-10h17zm60 0 5 16h17l-14 10 5 16-14-10-14 10 5-16-14-10h17zm60 0 5 16h17l-14 10 5 16-14-10-14 10 5-16-14-10h17zm60 0 5 16h17l-14 10 5 16-14-10-14 10 5-16-14-10h17z"/>
      </svg>
    ),
    ru: (
      <svg className="w-4 h-3" viewBox="0 0 640 480">
        <rect width="640" height="160" fill="#fff"/>
        <rect y="160" width="640" height="160" fill="#0039a6"/>
        <rect y="320" width="640" height="160" fill="#d52b1e"/>
      </svg>
    ),
    fr: (
      <svg className="w-4 h-3" viewBox="0 0 640 480">
        <rect width="213" height="480" fill="#002395"/>
        <rect x="213" width="214" height="480" fill="#fff"/>
        <rect x="427" width="213" height="480" fill="#ed2939"/>
      </svg>
    ),
  }
  return <>{flags[lang]}</>
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: Language[] = ["he", "en", "ru", "fr"]

  return (
    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm border border-gray-200">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`flex flex-col items-center px-2 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
            language === lang
              ? "bg-blue-600 text-white shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label={`Switch to ${languageNames[lang]}`}
        >
          <span>{langLabels[lang]}</span>
          <FlagIcon lang={lang} />
        </button>
      ))}
    </div>
  )
}
