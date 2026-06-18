// One-off asset pipeline: downloads remote gallery images and converts all
// raster site images to compressed WebP with SEO-friendly filenames.
// Run: node scripts/convert-images.mjs
import sharp from "sharp"
import { mkdir, writeFile, readFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const PUBLIC = path.join(ROOT, "public")
const GALLERY_DIR = path.join(PUBLIC, "images", "gallery")
const IMAGES_DIR = path.join(PUBLIC, "images")

const MAX_W = 1600 // cap width for large photos
const QUALITY = 80

// Remote gallery images -> SEO filename (without extension).
const remote = [
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2018%2C%202026%2C%2002_03_35%20PM-pGWKw0UtdLymyvE2CbwQLW7WR44GZZ.png", "gallery/yigal-bensky-mumche-bedek-bayit"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2018%2C%202026%2C%2001_21_33%20PM-3rj2hpxxXYZSuctdTUss4gbqpEY5zT.png", "gallery/guy-mumche-bedek-bayit"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260413_103020-QEYGlLIYf3hn1XN6jwhNNQBjxP1xqC.jpg", "gallery/bedikat-mishoriyut-ritzuf-peles"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260123_104644-HVjbXET5A48YsWRVMms2N96KhumVPN.jpg", "gallery/bedikat-asla-tluya-chadar-rachatza"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40%20%285%29-15HtcRRXDeluCIsn3mjL4QaQxRBUys.jpeg", "gallery/bedikat-nikuz-matzlemat-endoskop"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.39-3cybkyNPzXAGwzq4fQaKOQSIATmpdu.jpeg", "gallery/bedikat-chozek-maake-mirpeset"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40-JEN0WRnW02UzFGdrQRdjEH32Y3X5nG.jpeg", "gallery/bedikat-tzanrat-instalatzia"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260130_101536-74GGDPha2EYXmdyZBRifJmXxhOlUSJ.jpg", "gallery/bedikat-tikrat-mirpeset-mad-temperatura"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-02%20at%2010.33.34-urGLPlIPXHdlv2oXoPxhIExNsi3ndW.jpeg", "gallery/likui-retivut-hitporerut-tiyach"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260123_100046-VLB7UTzwculmLQywXPab1YbRAv0WYk.jpg", "gallery/likui-sedek-kir-hitzoni"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40%20%284%29-h9iytfUbZzIQKDIuANe1Oeejah5CHf.jpeg", "gallery/bedikat-luach-chashmal"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260123_105435-qAMNABFCLfPNLibkIWEDbr968SM0gg.jpg", "gallery/likui-nikuz-stima-tzanrat"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40%20%281%29-9YXrFokzGNasSXorxmhDkc11Cl1llw.jpeg", "gallery/peles-digitali-tziyud-bedek-bayit"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-02%20at%2010.33.34%20%281%29-8zUspsLnAz592ynX00IMlLUwyCounT.jpeg", "gallery/matzlema-termit-itur-retivut"],
  ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-18%20at%2013.59.40%20%283%29-A5AM5IklNjMdjBrDRU64h4TruPp9PE.jpeg", "gallery/mad-koach-digitali-bedikat-chozek"],
]

// Local source -> SEO filename (without extension).
const local = [
  ["images/image.png", "images/binyanim-moderniim-israel-bedek-bayit"],
  ["images/review-benny.jpeg", "images/bikoret-bedek-bayit-benny"],
  ["images/review-mike.jpeg", "images/bikoret-bedek-bayit-mike"],
  ["images/review-yaakov.jpeg", "images/bikoret-bedek-bayit-yaakov"],
  ["images/whatsapp-review.jpeg", "images/bikoret-bedek-bayit-whatsapp"],
  ["testimonials/whatsapp-testimonial-investment.png", "images/bikoret-bedek-bayit-hashkaa"],
  ["logo.png", "logo"], // also emit logo.webp alongside the existing png
]

const manifest = {}

async function emit(inputBuffer, outName) {
  const outPath = path.join(PUBLIC, `${outName}.webp`)
  await mkdir(path.dirname(outPath), { recursive: true })
  const pipeline = sharp(inputBuffer).rotate() // honor EXIF orientation
  const meta = await pipeline.metadata()
  const resized =
    meta.width && meta.width > MAX_W ? pipeline.resize({ width: MAX_W }) : pipeline
  const info = await resized.webp({ quality: QUALITY }).toFile(outPath)
  manifest[`/${outName}.webp`] = { width: info.width, height: info.height, bytes: info.size }
  console.log(`[v0] wrote /${outName}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`)
}

await mkdir(GALLERY_DIR, { recursive: true })
await mkdir(IMAGES_DIR, { recursive: true })

for (const [url, name] of remote) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`fetch failed ${res.status} for ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await emit(buf, name)
}

for (const [rel, name] of local) {
  const src = path.join(PUBLIC, rel)
  if (!existsSync(src)) {
    console.warn(`[v0] skip missing ${rel}`)
    continue
  }
  await emit(await readFile(src), name)
}

await writeFile(path.join(ROOT, "scripts", "image-manifest.json"), JSON.stringify(manifest, null, 2))
console.log(`[v0] manifest written with ${Object.keys(manifest).length} entries`)
