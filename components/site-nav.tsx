"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { services } from "@/lib/services"
import { defects } from "@/lib/defects"

/**
 * Site-wide navigation: a sticky bar carrying the whole site map.
 *
 * Until this existed the home page was one long scroll and the inner pages -
 * services, defect guides, cities, articles, videos, gallery - were reachable
 * only from the footer index or from contextual links inside the text, so a
 * visitor had no way to see what the site contains or jump straight to a page.
 *
 * Desktop (lg and up) shows the sections inline with dropdowns; below that the
 * same tree collapses behind a hamburger into a full-height panel. Both are
 * driven by the same MENU below, so a page added to one is in the other.
 */

type Item = { label: string; href: string }
type Section = { label: string; href?: string; items?: Item[] }

// The defect guides run to forty pages, too many to list. These are the ones
// people actually arrive searching for; the rest are one click further in, on
// the hub page that closes the list.
const FEATURED_DEFECTS = [
  "retivut",
  "sdakim",
  "ovesh",
  "itum",
  "ritzuf",
  "instalatzia",
  "chashmal",
  "mamad",
  "bidud-termi",
]

const MENU: Section[] = [
  {
    label: "שירותי בדק בית",
    href: "/services",
    items: [
      ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
      { label: "כל השירותים", href: "/services" },
    ],
  },
  {
    label: "ליקויי בנייה",
    href: "/likuyey-bniya",
    items: [
      ...FEATURED_DEFECTS.map((slug) => {
        const d = defects.find((x) => x.slug === slug)
        return { label: d?.name ?? slug, href: `/likuyey-bniya/${slug}` }
      }),
      { label: "כל סוגי הליקויים", href: "/likuyey-bniya" },
    ],
  },
  {
    label: "אזורי שירות",
    href: "/ezorei-sherut",
    items: [
      { label: "בדק בית לפי עיר", href: "/bedek-bayit" },
      { label: "כל אזורי השירות", href: "/ezorei-sherut" },
      { label: "פרויקטים ושכונות חדשות", href: "/projects" },
    ],
  },
  {
    label: "מדריכים ומידע",
    items: [
      { label: "מאמרים מקצועיים", href: "/articles" },
      { label: "בלוג", href: "/blog" },
      { label: "סרטוני בדיקות", href: "/videos" },
      { label: "גלריית בדיקות", href: "/gallery" },
      { label: "צ׳קליסט לפני מסירה", href: "/checklist-bedek-bayit" },
      { label: "דוח בדק בית לדוגמה", href: "/doch-ledugma" },
      { label: "דוח מפורט לדוגמה", href: "/doch-ledugma-mefurat" },
    ],
  },
  { label: "מחירון", href: "/mehir-bedek-bayit" },
  { label: "אודות", href: "/about" },
]

const PHONE = "073-3745044"
const PHONE_HREF = "tel:073-3745044"

export function SiteNav() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  // Navigating away closes whatever was open, so the panel does not survive
  // into the next page.
  useEffect(() => {
    setOpenSection(null)
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname])

  // Escape closes, and a click anywhere outside the bar closes the dropdowns.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenSection(null)
        setMobileOpen(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenSection(null)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [])

  // The mobile panel scrolls on its own; the page behind it should not.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const isCurrent = (href?: string) =>
    !!href && (pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)))

  return (
    <nav
      ref={navRef}
      dir="rtl"
      aria-label="ניווט ראשי"
      className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="בדק בית Legal - לדף הבית">
            <Image src="/logo.webp" alt="בדק בית Legal" width={40} height={40} className="object-contain w-9 h-9" />
            <span className="font-bold text-gray-900 text-base whitespace-nowrap">בדק בית Legal</span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {MENU.map((section) => {
              const open = openSection === section.label
              if (!section.items) {
                return (
                  <li key={section.label}>
                    <Link
                      href={section.href!}
                      aria-current={isCurrent(section.href) ? "page" : undefined}
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-100 ${
                        isCurrent(section.href) ? "text-blue-700" : "text-gray-700"
                      }`}
                    >
                      {section.label}
                    </Link>
                  </li>
                )
              }
              return (
                <li
                  key={section.label}
                  className="relative"
                  onMouseEnter={() => setOpenSection(section.label)}
                  onMouseLeave={() => setOpenSection(null)}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setOpenSection(open ? null : section.label)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-100 ${
                      isCurrent(section.href) ? "text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {section.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {open && (
                    <div className="absolute right-0 top-full w-64 rounded-xl border border-slate-200 bg-white shadow-lg py-2">
                      <ul>
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={isCurrent(item.href) ? "page" : undefined}
                              className={`block px-4 py-2 text-sm leading-relaxed transition-colors hover:bg-slate-50 hover:text-blue-700 ${
                                isCurrent(item.href) ? "text-blue-700 font-semibold" : "text-gray-700"
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Call CTA + hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PHONE_HREF}
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-green-700 hover:bg-green-800 text-white px-3 lg:px-4 py-2 text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="whitespace-nowrap">{PHONE}</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="site-nav-mobile"
              aria-label={mobileOpen ? "סגירת התפריט" : "פתיחת התפריט"}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-gray-800 hover:bg-slate-100 transition-colors"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          id="site-nav-mobile"
          className="lg:hidden border-t border-slate-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          {/* pb-24 clears the fixed mobile contact bar (md:hidden, bottom-0),
              which would otherwise sit over the last item in this list. */}
          <ul className="container mx-auto px-4 pt-2 pb-24 md:pb-4 divide-y divide-slate-100">
            {MENU.map((section) => {
              const open = mobileSection === section.label
              if (!section.items) {
                return (
                  <li key={section.label}>
                    <Link
                      href={section.href!}
                      aria-current={isCurrent(section.href) ? "page" : undefined}
                      className={`block py-3 text-base font-semibold ${
                        isCurrent(section.href) ? "text-blue-700" : "text-gray-900"
                      }`}
                    >
                      {section.label}
                    </Link>
                  </li>
                )
              }
              return (
                <li key={section.label}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setMobileSection(open ? null : section.label)}
                    className="flex w-full items-center justify-between py-3 text-base font-semibold text-gray-900"
                  >
                    {section.label}
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {open && (
                    <ul className="pb-2 pr-3 space-y-1">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            aria-current={isCurrent(item.href) ? "page" : undefined}
                            className={`block py-2 text-sm leading-relaxed ${
                              isCurrent(item.href) ? "text-blue-700 font-semibold" : "text-gray-700"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
            <li className="py-3">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 rounded-lg bg-green-700 hover:bg-green-800 text-white px-4 py-3 text-base font-bold transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                </svg>
                חייגו עכשיו: {PHONE}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
