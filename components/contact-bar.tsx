// components/contact-bar.tsx
// כפתורי יצירת קשר קבועים שצמודים למסך בכל גלילה:
//   • נייד  → בר דביק בתחתית עם "חייג עכשיו" + "WhatsApp"
//   • דסקטופ → כפתור וואטסאפ צף בפינה

const PHONE_TEL = "+972506277858" // יגאל – נייד (חיוג ישיר ללקוח)
const WA_NUMBER = "972506277858" // וואטסאפ
const WA_TEXT = "שלום, הגעתי דרך האתר ואשמח לתאם בדק בית / ייעוץ ראשוני."
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.06 24l1.7-6.2A11.9 11.9 0 1 1 12 24a11.9 11.9 0 0 1-5.7-1.46L.06 24zM6.6 20.1l.37.22a9.9 9.9 0 0 0 5.04 1.38 9.9 9.9 0 1 0-9.9-9.9c0 1.8.48 3.5 1.4 5.04l.24.38-1 3.65 3.85-.77zM18 14.3c-.24-.12-1.44-.71-1.66-.79s-.39-.12-.55.12-.63.79-.77.95-.28.18-.52.06a8.1 8.1 0 0 1-2.38-1.47 9 9 0 0 1-1.65-2.05c-.17-.3 0-.45.13-.6s.27-.3.4-.46a1.8 1.8 0 0 0 .27-.45.5.5 0 0 0 0-.46c-.07-.12-.55-1.32-.75-1.81s-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.85 2.04 4.74 4.74 0 0 0 1 2.52 10.9 10.9 0 0 0 4.2 3.71c.59.25 1.05.4 1.4.52.59.18 1.13.16 1.55.1.47-.07 1.44-.59 1.65-1.16s.2-1.05.14-1.16-.21-.18-.45-.3z" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2.1z" />
    </svg>
  )
}

export default function ContactBar() {
  return (
    <>
      {/* ── כפתור וואטסאפ צף — דסקטופ ── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ייעוץ חינם בוואטסאפ"
        className="fixed bottom-6 left-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-110 md:flex"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-50" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </a>

      {/* ── בר פעולה דביק — נייד ── */}
      <div
        dir="rtl"
        className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-black/10 bg-white/95 p-2.5 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.3)] backdrop-blur md:hidden"
        style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label="חייג עכשיו"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#2563EB] py-3.5 text-base font-bold text-white active:scale-[0.98]"
        >
          <PhoneIcon className="h-5 w-5" />
          חייג עכשיו
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="פנייה בוואטסאפ"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-base font-bold text-white active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </>
  )
}
