"use client"

import { useRef } from "react"

export function CardEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const resize = () => {
    const iframe = iframeRef.current
    if (!iframe) return
    try {
      const doc = iframe.contentWindow?.document
      if (doc) {
        iframe.style.height = `${doc.documentElement.scrollHeight}px`
      }
    } catch {
      // Cross-origin fallback: keep the default height
    }
  }

  return (
    <iframe
      ref={iframeRef}
      src="/card-embed.html"
      title="כרטיס ביקור – בדק בית Legal"
      scrolling="no"
      loading="lazy"
      onLoad={resize}
      className="mx-auto block w-full"
      style={{ maxWidth: "420px", height: "1150px", border: 0 }}
    />
  )
}
