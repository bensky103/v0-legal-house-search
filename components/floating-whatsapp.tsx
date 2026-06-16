"use client"

import { useState, useEffect } from "react"
import { WhatsAppButton } from "./whatsapp-button"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact-section")
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const shouldBeVisible = rect.bottom < 0
        setIsVisible(shouldBeVisible)
      }
    }

    handleScroll() // Check initial state
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      try {
        window.removeEventListener("scroll", handleScroll)
      } catch (error) {
        // Silently handle cleanup errors
      }
    }
  }, []) // Removed isVisible from dependencies to prevent re-running

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <WhatsAppButton
          className="shadow-lg hover:shadow-xl transition-shadow duration-200 relative z-10"
          size="default"
        />
      </div>
    </div>
  )
}
