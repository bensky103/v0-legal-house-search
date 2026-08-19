"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { useLanguage } from "@/contexts/language-context"

// The modal (and the Radix dialog primitive behind it) is fetched only when the
// visitor actually asks to watch the intro video — it is below-the-fold value
// that should not delay the first render.
const HomeVideoDialog = dynamic(() => import("@/components/home-video-dialog"), { ssr: false })

/** "More info" trigger in the hero, plus the lazily-loaded intro-video modal. */
export function HomeVideoButton() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
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

      {open && <HomeVideoDialog open={open} onOpenChange={setOpen} />}
    </>
  )
}
