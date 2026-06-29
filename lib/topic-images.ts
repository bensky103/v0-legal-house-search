// Maps each defect / service topic to relevant real inspection photos from the
// gallery, so the (previously text-only) defect & service pages show supporting
// imagery — better relevance, image-search visibility and dwell time.

import { galleryImages, type GalleryImage } from "@/lib/gallery-images"

function bySrc(paths: string[]): GalleryImage[] {
  return paths
    .map((p) => galleryImages.find((g) => g.src === p))
    .filter((g): g is GalleryImage => Boolean(g))
}

const G = (name: string) => `/gallery/${name}.webp`

// Curated, topic-relevant photo sets (by defect slug from lib/defects.ts).
const DEFECT_IMAGES: Record<string, string[]> = {
  retivut: [
    G("matzlema-termit-itur-retivut"),
    G("mad-lachut-protimeter-bedek-bayit"),
    G("likui-retivut-hitporerut-tiyach"),
    G("bedikat-tikrat-mirpeset-mad-temperatura"),
  ],
  sdakim: [
    G("likui-sedek-kir-hitzoni"),
    G("zchuchit-magdelet-loupe-bedek-bayit"),
    G("sargel-pelada-meduyak-bedek-bayit"),
    G("bedikat-nichuchiyut-kir-peles"),
  ],
  ovesh: [
    G("matzlema-termit-itur-retivut"),
    G("mad-lachut-protimeter-bedek-bayit"),
    G("likui-retivut-hitporerut-tiyach"),
  ],
  itum: [
    G("matzlema-termit-itur-retivut"),
    G("bedikat-tikrat-mirpeset-mad-temperatura"),
    G("mad-lachut-protimeter-bedek-bayit"),
    G("likui-retivut-hitporerut-tiyach"),
  ],
  ritzuf: [
    G("bedikat-mishoriyut-ritzuf-peles"),
    G("bedikat-mishoriyut-ritzuf-peles-aroch"),
    G("mad-otzmat-or-lux-bedek-bayit"),
    G("mad-zavit-digitali-bedek-bayit"),
  ],
  instalatzia: [
    G("bedikat-tzanrat-instalatzia"),
    G("mad-lachatz-mayim-bedek-bayit"),
    G("matzlemat-tzanrat-endoskop-bedek-bayit"),
    G("pkak-bedika-tzanrat-bedek-bayit"),
  ],
  chashmal: [G("bedikat-luach-chashmal"), G("mad-krina-emf-bedek-bayit")],
  "bidud-akusti": [
    G("bedika-termit-mizug-avir-dira-hadasha"),
    G("matzlema-termit-itur-retivut"),
    G("mad-oviy-zchuchit-merlin-bedek-bayit"),
  ],
  "i-hatama-lemifrat": [
    G("mad-merchak-laser-bedek-bayit"),
    G("kaliber-digitali-bedek-bayit"),
    G("sargel-pelada-meduyak-bedek-bayit"),
    G("zavit-nagarim-bedek-bayit"),
  ],
  "bidud-termi": [
    G("matzlema-termit-itur-retivut"),
    G("bedika-termit-mizug-avir-dira-hadasha"),
    G("bedikat-tikrat-mirpeset-mad-temperatura"),
  ],
  aluminium: [
    G("mad-oviy-zchuchit-merlin-bedek-bayit"),
    G("glai-zchuchit-mechusemet-merlin-bedek-bayit"),
    G("bedikat-tikrat-mirpeset-mad-temperatura"),
  ],
  chalonot: [
    G("mad-oviy-zchuchit-merlin-bedek-bayit"),
    G("glai-zchuchit-mechusemet-merlin-bedek-bayit"),
    G("mad-koach-digitali-bedikat-chozek"),
  ],
  dlatot: [
    G("zavit-nagarim-bedek-bayit"),
    G("mad-mervachim-feeler-bedek-bayit"),
    G("sargel-pelada-meduyak-bedek-bayit"),
  ],
  mamad: [
    G("bedikat-nichuchiyut-kir-peles"),
    G("maflest-laser-anchiyut-bedek-bayit"),
    G("mad-merchak-laser-bedek-bayit"),
  ],
  mirpasot: [
    G("bedikat-chozek-maake-mirpeset"),
    G("bedikat-tikrat-mirpeset-mad-temperatura"),
    G("mad-zavit-digitali-bedek-bayit"),
  ],
  gagot: [
    G("matzlema-termit-itur-retivut"),
    G("bedikat-tikrat-mirpeset-mad-temperatura"),
    G("mad-lachut-protimeter-bedek-bayit"),
  ],
  madregot: [
    G("mad-mervachim-maakeh-madregot-bedek-bayit"),
    G("mad-zavit-digitali-bedek-bayit"),
    G("bedikat-chozek-maake-mirpeset"),
  ],
  maakot: [
    G("bedikat-chozek-maake-mirpeset"),
    G("mad-koach-digitali-bedikat-chozek"),
    G("mad-mervachim-maakeh-madregot-bedek-bayit"),
  ],
  chipuyim: [
    G("likui-sedek-kir-hitzoni"),
    G("zchuchit-magdelet-loupe-bedek-bayit"),
    G("bedikat-nichuchiyut-kir-peles"),
  ],
  tiyach: [
    G("likui-retivut-hitporerut-tiyach"),
    G("maflest-laser-anchiyut-bedek-bayit"),
    G("bedikat-nichuchiyut-kir-peles"),
  ],
  tzeva: [
    G("maflest-laser-anchiyut-bedek-bayit"),
    G("mad-otzmat-or-lux-bedek-bayit"),
    G("zchuchit-magdelet-loupe-bedek-bayit"),
  ],
  pergolot: [G("mad-koach-digitali-bedikat-chozek"), G("bedikat-chozek-maake-mirpeset")],
  chatzerot: [
    G("bedikat-nikuz-matzlemat-endoskop"),
    G("mad-zavit-digitali-bedek-bayit"),
    G("matzlemat-tzanrat-endoskop-bedek-bayit"),
  ],
  nikuz: [
    G("bedikat-nikuz-matzlemat-endoskop"),
    G("matzlemat-tzanrat-endoskop-bedek-bayit"),
    G("likui-nikuz-stima-tzanrat"),
    G("mad-zavit-digitali-bedek-bayit"),
  ],
}

const FALLBACK = [
  G("bedikat-nichuchiyut-kir-peles"),
  G("matzlema-termit-itur-retivut"),
  G("peles-digitali-tziyud-bedek-bayit"),
  G("bedikat-tzanrat-instalatzia"),
]

export function getDefectImages(slug: string): GalleryImage[] {
  return bySrc(DEFECT_IMAGES[slug] ?? FALLBACK)
}

// Curated photo sets per service slug (lib/services.ts).
const SERVICE_IMAGES: Record<string, string[]> = {
  "bedek-bayit-lifnei-kniya": [
    G("bedikat-nichuchiyut-kir-peles"),
    G("matzlema-termit-itur-retivut"),
    G("bedikat-mishoriyut-ritzuf-peles"),
    G("bedikat-luach-chashmal"),
  ],
  "bedek-bayit-lifnei-mesira": [
    G("bedikat-mishoriyut-ritzuf-peles-aroch"),
    G("matzlema-termit-itur-retivut"),
    G("bedikat-tzanrat-instalatzia"),
    G("bedikat-chozek-maake-mirpeset"),
  ],
  "bdikat-dira-yad-shniya": [
    G("likui-retivut-hitporerut-tiyach"),
    G("likui-sedek-kir-hitzoni"),
    G("mad-lachut-protimeter-bedek-bayit"),
    G("bedikat-luach-chashmal"),
  ],
  "bdikat-bayit-prati": [
    G("matzlema-termit-itur-retivut"),
    G("bedikat-nikuz-matzlemat-endoskop"),
    G("bedikat-chozek-maake-mirpeset"),
    G("likui-sedek-kir-hitzoni"),
  ],
  "chavat-daat-mumche": [
    G("likui-sedek-kir-hitzoni"),
    G("mad-lachut-protimeter-bedek-bayit"),
    G("sargel-pelada-meduyak-bedek-bayit"),
    G("zchuchit-magdelet-loupe-bedek-bayit"),
  ],
  "chavat-daat-beit-mishpat": [
    G("sargel-pelada-meduyak-bedek-bayit"),
    G("likui-sedek-kir-hitzoni"),
    G("mad-koach-digitali-bedikat-chozek"),
  ],
  "itur-likuyey-bniya": [
    G("matzlema-termit-itur-retivut"),
    G("mad-lachut-protimeter-bedek-bayit"),
    G("matzlemat-tzanrat-endoskop-bedek-bayit"),
    G("maflest-laser-anchiyut-bedek-bayit"),
  ],
  "haarachat-aluyot-tikun": [
    G("likui-retivut-hitporerut-tiyach"),
    G("likui-sedek-kir-hitzoni"),
    G("likui-nikuz-stima-tzanrat"),
  ],
}

export function getServiceImages(slug: string): GalleryImage[] {
  return bySrc(SERVICE_IMAGES[slug] ?? FALLBACK)
}
