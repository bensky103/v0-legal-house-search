"use client"

import { useState } from "react"
import { videoThumb, videoEmbedUrl } from "@/lib/videos"

/**
 * Lightweight YouTube facade: renders only the thumbnail + a play button until
 * the user clicks, then swaps in the real iframe. Keeps pages fast (no heavy
 * YouTube JS on load) while still embedding the video for SEO and UX.
 *
 * `eager`: render the real player iframe immediately (server-rendered), without
 * autoplay. Used on a video's canonical page (/videos/[slug]) so Google's video
 * crawler finds an actual player in the HTML — a facade alone (thumbnail only)
 * leaves no player in the DOM and the video is not added to the video index.
 */
export function LiteYouTube({ id, title, eager = false }: { id: string; title: string; eager?: boolean }) {
  const [active, setActive] = useState(false)
  const showIframe = eager || active

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900 ring-1 ring-slate-200">
      {showIframe ? (
        <iframe
          src={`${videoEmbedUrl(id)}?rel=0${active ? "&autoplay=1" : ""}`}
          title={title}
          loading={eager ? undefined : "lazy"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`נגן את הסרטון: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={videoThumb(id)}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 shadow-lg transition group-hover:bg-red-700">
            <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-0.5 fill-white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}
