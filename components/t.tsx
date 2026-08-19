"use client"

import { useLanguage } from "@/contexts/language-context"

/**
 * Tiny client island for a single translated string.
 *
 * Lets a page stay a server component while individual pieces of visible text
 * still react to the language switcher. Only this component ships to the
 * browser — the surrounding markup stays server-rendered HTML.
 */
export function T({ k }: { k: string }) {
  const { t } = useLanguage()
  return <>{t(k)}</>
}
