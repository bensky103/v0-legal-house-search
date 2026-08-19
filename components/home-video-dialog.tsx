"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

const VIDEO_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D7%9C%D7%A2%D7%9C%D7%95%D7%AA%20%D7%9C%D7%90%D7%AA%D7%A8-W1e4mWhh4SZfg8W0g0azc15TRMW1fZ.mp4"

/**
 * The intro-video modal itself. Loaded on demand by HomeVideoButton, so the
 * dialog primitive and the video markup stay out of the initial page bundle.
 */
export default function HomeVideoDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { t, direction } = useLanguage()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-0" dir={direction}>
        <DialogHeader className="px-4 pt-4 pb-2 bg-black">
          <DialogTitle className="text-white text-center text-lg md:text-xl">
            {t("hero.moreInfo")}
          </DialogTitle>
        </DialogHeader>
        <div className="w-full">
          {open && (
            <video
              src={VIDEO_SRC}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-auto max-h-[75vh] bg-black"
            >
              {"הדפדפן שלך אינו תומך בהפעלת וידאו."}
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
