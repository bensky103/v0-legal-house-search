"use client"

import { useState } from "react"

export type DefectItem = {
  /** Path under /public, e.g. /articles/likuyim/likui-itum-chalon.webp */
  src: string
  /** Keyword-rich Hebrew alt text for SEO */
  alt: string
  /** Short defect label shown as the caption heading */
  title: string
  /** Descriptive, keyword-rich caption explaining the defect */
  caption: string
  /** Optional relevant Israeli standard, e.g. "ת״י 1068 – חלונות" */
  standard?: string
}

/**
 * A "documented defects from the field" gallery for article pages.
 * Engineering / blueprint styling to match the site.
 *
 * Production-safe: any image that fails to load (e.g. file not added yet)
 * is hidden on the client, while its alt text + caption still ship in the
 * server-rendered HTML for SEO. The whole section disappears only if every
 * image fails.
 */
export function ArticleDefectGallery({
  eyebrow = "תיעוד מהשטח",
  heading,
  intro,
  items,
}: {
  eyebrow?: string
  heading: string
  intro?: string
  items: DefectItem[]
}) {
  const [broken, setBroken] = useState<Record<string, boolean>>({})
  const allBroken = items.every((it) => broken[it.src])
  if (allBroken) return null

  return (
    <section className="my-10 md:my-12" aria-label={heading}>
      <div className="mb-6">
        <div className="flex items-center">
          <span className="text-sm font-bold tracking-wide text-blue-700">{eyebrow}</span>
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">{heading}</h2>
        {intro && <p className="mt-2 text-slate-600 leading-relaxed">{intro}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((it) =>
          broken[it.src] ? null : (
            <figure
              key={it.src}
              className="group overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {/* Plain img (not next/image) so a not-yet-added file degrades gracefully */}
                <img
                  src={it.src}
                  alt={it.alt}
                  title={it.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  onError={() => setBroken((b) => ({ ...b, [it.src]: true }))}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2 end-2 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-bold text-white shadow">
                  ליקוי
                </span>
              </div>
              <figcaption className="p-4">
                <p className="font-bold text-slate-900">{it.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{it.caption}</p>
                {it.standard && (
                  <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
                    <span className="text-blue-400">תקן:</span>
                    {it.standard}
                  </p>
                )}
              </figcaption>
            </figure>
          ),
        )}
      </div>
    </section>
  )
}
