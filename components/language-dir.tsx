"use client"

import type { ReactNode } from "react"
import { useLanguage } from "@/contexts/language-context"

/**
 * Wrapper that applies the current language direction to its subtree.
 *
 * Children are passed in from a server component, so their markup is rendered
 * on the server and never enters the client bundle — only this thin wrapper does.
 */
export function LanguageDir({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  const { direction } = useLanguage()
  return (
    <div className={className} dir={direction}>
      {children}
    </div>
  )
}
