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
// Full-filename helper for real field photos (jpg/png, not webp).
const GF = (file: string) => `/gallery/${file}`

// Curated, topic-relevant photo sets (by defect slug from lib/defects.ts).
const DEFECT_IMAGES: Record<string, string[]> = {
  retivut: [
    GF("bedek-bayit-likui-retivut-01.jpg"),
    GF("bedek-bayit-likui-retivut-02.jpg"),
    GF("bedek-bayit-likui-retivut-03.jpg"),
    GF("bedek-bayit-likui-retivut-04.jpg"),
    GF("bedek-bayit-likui-retivut-05.jpg"),
    GF("bedek-bayit-likui-retivut-06.jpg"),
    GF("bedek-bayit-likui-retivut-07.jpg"),
    GF("bedek-bayit-likui-retivut-08.jpg"),
    GF("bedek-bayit-likui-retivut-09.jpg"),
  ],
  sdakim: [
    GF("bedek-bayit-likui-sdakim-01.jpg"),
    GF("bedek-bayit-likui-sdakim-02.jpg"),
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
    GF("bedek-bayit-likui-itum-08.jpg"),
    GF("bedek-bayit-likui-itum-09.jpg"),
    GF("bedek-bayit-likui-itum-10.jpg"),
    GF("bedek-bayit-likui-itum-11.jpg"),
    GF("bedek-bayit-likui-itum-12.jpg"),
    GF("bedek-bayit-likui-itum-01.jpg"),
    GF("bedek-bayit-likui-itum-02.jpg"),
    GF("bedek-bayit-likui-itum-03.jpg"),
    GF("bedek-bayit-likui-itum-04.jpg"),
    GF("bedek-bayit-likui-itum-05.jpg"),
    GF("bedek-bayit-likui-itum-06.jpg"),
    GF("bedek-bayit-likui-itum-07.jpg"),
  ],
  ritzuf: [
    GF("bedek-bayit-likui-ritzuf-21.jpg"),
    GF("bedek-bayit-likui-ritzuf-22.jpg"),
    GF("bedek-bayit-likui-ritzuf-23.jpg"),
    GF("bedek-bayit-likui-ritzuf-24.jpg"),
    GF("bedek-bayit-likui-ritzuf-25.jpg"),
    GF("bedek-bayit-likui-ritzuf-26.jpg"),
    GF("bedek-bayit-likui-ritzuf-27.jpg"),
    GF("bedek-bayit-likui-ritzuf-19.jpg"),
    GF("bedek-bayit-likui-ritzuf-20.jpg"),
    GF("bedek-bayit-likui-ritzuf-01.jpg"),
    GF("bedek-bayit-likui-ritzuf-02.jpg"),
    GF("bedek-bayit-likui-ritzuf-03.jpg"),
    GF("bedek-bayit-likui-ritzuf-04.jpg"),
    GF("bedek-bayit-likui-ritzuf-05.jpg"),
    GF("bedek-bayit-likui-ritzuf-06.jpg"),
    GF("bedek-bayit-likui-ritzuf-07.jpg"),
    GF("bedek-bayit-likui-ritzuf-08.jpg"),
    GF("bedek-bayit-likui-ritzuf-09.jpg"),
  ],
  instalatzia: [
    GF("bedek-bayit-likui-instalatzia-17.jpg"),
    GF("bedek-bayit-likui-instalatzia-18.jpg"),
    GF("bedek-bayit-likui-instalatzia-19.jpg"),
    GF("bedek-bayit-likui-instalatzia-20.jpg"),
    GF("bedek-bayit-likui-instalatzia-21.jpg"),
    GF("bedek-bayit-likui-instalatzia-01.jpg"),
    GF("bedek-bayit-likui-instalatzia-02.jpg"),
    GF("bedek-bayit-likui-instalatzia-03.jpg"),
    GF("bedek-bayit-likui-instalatzia-04.jpg"),
    GF("bedek-bayit-likui-instalatzia-05.jpg"),
    GF("bedek-bayit-likui-instalatzia-06.jpg"),
    GF("bedek-bayit-likui-instalatzia-07.jpg"),
    GF("bedek-bayit-likui-instalatzia-08.jpg"),
    GF("bedek-bayit-likui-instalatzia-09.jpg"),
  ],
  chashmal: [
    GF("bedek-bayit-likui-chashmal-05.jpg"),
    GF("bedek-bayit-likui-chashmal-06.jpg"),
    GF("bedek-bayit-likui-chashmal-07.jpg"),
    GF("bedek-bayit-likui-chashmal-08.jpg"),
    GF("bedek-bayit-likui-chashmal-09.jpg"),
    GF("bedek-bayit-likui-chashmal-10.jpg"),
    GF("bedek-bayit-likui-chashmal-11.jpg"),
    GF("bedek-bayit-likui-chashmal-12.jpg"),
    GF("bedek-bayit-likui-chashmal-13.jpg"),
    GF("bedek-bayit-likui-chashmal-14.jpg"),
    GF("bedek-bayit-likui-chashmal-01.jpg"),
    GF("bedek-bayit-likui-chashmal-02.jpg"),
    GF("bedek-bayit-likui-chashmal-03.jpg"),
    GF("bedek-bayit-likui-chashmal-04.jpg"),
    G("bedikat-luach-chashmal"),
    G("mad-krina-emf-bedek-bayit"),
  ],
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
    GF("bedek-bayit-likui-aluminium-13.jpg"),
    GF("bedek-bayit-likui-aluminium-14.jpg"),
    GF("bedek-bayit-likui-aluminium-15.jpg"),
    GF("bedek-bayit-likui-aluminium-16.jpg"),
    GF("bedek-bayit-likui-aluminium-12.jpg"),
    GF("bedek-bayit-likui-aluminium-01.jpg"),
    GF("bedek-bayit-likui-aluminium-02.jpg"),
    GF("bedek-bayit-likui-aluminium-03.jpg"),
    GF("bedek-bayit-likui-aluminium-04.jpg"),
    GF("bedek-bayit-likui-aluminium-05.jpg"),
    GF("bedek-bayit-likui-aluminium-06.jpg"),
    GF("bedek-bayit-likui-aluminium-07.jpg"),
    GF("bedek-bayit-likui-aluminium-08.jpg"),
    GF("bedek-bayit-likui-aluminium-09.jpg"),
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
    GF("bedek-bayit-likui-mamad-04.jpg"),
    GF("bedek-bayit-likui-mamad-03.jpg"),
    GF("bedek-bayit-likui-mamad-01.jpg"),
    GF("bedek-bayit-likui-mamad-02.jpg"),
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
    GF("bedek-bayit-maakot-betichut-01.jpg"),
    GF("bedek-bayit-maakot-betichut-02.jpg"),
    GF("bedek-bayit-maakot-betichut-03.jpg"),
    GF("bedek-bayit-maakot-betichut-04.jpg"),
    GF("bedek-bayit-maakot-betichut-05.jpg"),
    GF("bedek-bayit-maakot-betichut-06.jpg"),
  ],
  chipuyim: [
    GF("bedek-bayit-likui-chipuyim-13.jpg"),
    GF("bedek-bayit-likui-chipuyim-14.jpg"),
    GF("bedek-bayit-likui-chipuyim-15.jpg"),
    GF("bedek-bayit-likui-chipuyim-16.jpg"),
    GF("bedek-bayit-likui-chipuyim-17.jpg"),
    GF("bedek-bayit-likui-chipuyim-18.jpg"),
    GF("bedek-bayit-likui-chipuyim-12.jpg"),
    GF("bedek-bayit-likui-chipuyim-01.jpg"),
    GF("bedek-bayit-likui-chipuyim-02.jpg"),
    GF("bedek-bayit-likui-chipuyim-03.jpg"),
    GF("bedek-bayit-likui-chipuyim-04.jpg"),
    GF("bedek-bayit-likui-chipuyim-05.jpg"),
    GF("bedek-bayit-likui-chipuyim-06.jpg"),
    GF("bedek-bayit-likui-chipuyim-07.jpg"),
    GF("bedek-bayit-likui-chipuyim-08.jpg"),
    GF("bedek-bayit-likui-chipuyim-09.jpg"),
  ],
  tiyach: [
    GF("bedek-bayit-likui-tiyach-07.jpg"),
    GF("bedek-bayit-likui-tiyach-08.jpg"),
    GF("bedek-bayit-likui-tiyach-06.jpg"),
    GF("bedek-bayit-likui-tiyach-01.jpg"),
    GF("bedek-bayit-likui-tiyach-02.jpg"),
    GF("bedek-bayit-likui-tiyach-03.jpg"),
    GF("bedek-bayit-likui-tiyach-04.jpg"),
    GF("bedek-bayit-likui-tiyach-05.jpg"),
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
    GF("bedek-bayit-likui-nikuz-01.jpg"),
    GF("bedek-bayit-likui-nikuz-02.jpg"),
    G("bedikat-nikuz-matzlemat-endoskop"),
    G("matzlemat-tzanrat-endoskop-bedek-bayit"),
    G("likui-nikuz-stima-tzanrat"),
    G("mad-zavit-digitali-bedek-bayit"),
  ],
  mitbach: [
    GF("bedek-bayit-likui-instalatzia-01.jpg"),
    GF("bedek-bayit-likui-instalatzia-02.jpg"),
    GF("bedek-bayit-klim-sanitariim-01.jpg"),
    G("bedikat-tzanrat-instalatzia"),
  ],
  "klim-sanitariim": [
    GF("bedek-bayit-klim-sanitariim-07.jpg"),
    GF("bedek-bayit-klim-sanitariim-01.jpg"),
    GF("bedek-bayit-klim-sanitariim-02.jpg"),
    GF("bedek-bayit-klim-sanitariim-03.jpg"),
    GF("bedek-bayit-klim-sanitariim-04.jpg"),
    GF("bedek-bayit-klim-sanitariim-05.jpg"),
    GF("bedek-bayit-klim-sanitariim-06.jpg"),
  ],
  "mizug-avir": [
    G("bedika-termit-mizug-avir-dira-hadasha"),
    G("bedikat-tikrat-mirpeset-mad-temperatura"),
    G("matzlema-termit-itur-retivut"),
  ],
  "dud-shemesh": [
    GF("bedek-bayit-likui-itum-01.jpg"),
    GF("bedek-bayit-likui-itum-02.jpg"),
    GF("bedek-bayit-likui-itum-03.jpg"),
    GF("bedek-bayit-likui-itum-04.jpg"),
  ],
  negarut: [
    G("zavit-nagarim-bedek-bayit"),
    G("mad-mervachim-feeler-bedek-bayit"),
    G("sargel-pelada-meduyak-bedek-bayit"),
  ],
  trisim: [
    GF("bedek-bayit-trisim-01.jpg"),
    GF("bedek-bayit-likui-aluminium-01.jpg"),
    GF("bedek-bayit-likui-aluminium-02.jpg"),
    GF("bedek-bayit-likui-aluminium-03.jpg"),
    G("mad-oviy-zchuchit-merlin-bedek-bayit"),
  ],
  gaz: [
    G("bedikat-tzanrat-instalatzia"),
    GF("bedek-bayit-likui-instalatzia-05.jpg"),
    GF("bedek-bayit-likui-instalatzia-06.jpg"),
    G("matzlemat-tzanrat-endoskop-bedek-bayit"),
  ],
  "tikrot-gevs": [
    G("matzlema-termit-itur-retivut"),
    G("bedikat-tikrat-mirpeset-mad-temperatura"),
    GF("bedek-bayit-likui-retivut-01.jpg"),
    GF("bedek-bayit-likui-retivut-02.jpg"),
  ],
  "delet-knisa": [
    GF("bedek-bayit-delet-knisa-01.jpg"),
    GF("bedek-bayit-delet-knisa-02.jpg"),
    G("zavit-nagarim-bedek-bayit"),
    G("mad-mervachim-feeler-bedek-bayit"),
    G("sargel-pelada-meduyak-bedek-bayit"),
  ],
  biyuv: [
    G("matzlemat-tzanrat-endoskop-bedek-bayit"),
    G("bedikat-nikuz-matzlemat-endoskop"),
    G("likui-nikuz-stima-tzanrat"),
    G("pkak-bedika-tzanrat-bedek-bayit"),
  ],
  miklachon: [
    GF("bedek-bayit-klim-sanitariim-02.jpg"),
    GF("bedek-bayit-klim-sanitariim-03.jpg"),
    G("glai-zchuchit-mechusemet-merlin-bedek-bayit"),
    G("mad-oviy-zchuchit-merlin-bedek-bayit"),
  ],
  "ritzuf-chutz": [
    GF("bedek-bayit-likui-ritzuf-01.jpg"),
    GF("bedek-bayit-likui-ritzuf-02.jpg"),
    GF("bedek-bayit-likui-ritzuf-03.jpg"),
    G("bedikat-mishoriyut-ritzuf-peles"),
  ],
  marzevim: [
    GF("bedek-bayit-likui-itum-05.jpg"),
    GF("bedek-bayit-likui-itum-06.jpg"),
    G("bedikat-tikrat-mirpeset-mad-temperatura"),
  ],
  "kirot-tomchim": [
    G("likui-sedek-kir-hitzoni"),
    G("bedikat-nichuchiyut-kir-peles"),
    G("sargel-pelada-meduyak-bedek-bayit"),
  ],
  "mistor-kvisa": [
    GF("bedek-bayit-likui-instalatzia-07.jpg"),
    GF("bedek-bayit-likui-aluminium-04.jpg"),
    G("bedikat-tzanrat-instalatzia"),
  ],
  chanaya: [
    GF("bedek-bayit-likui-ritzuf-04.jpg"),
    G("bedikat-luach-chashmal"),
    G("mad-otzmat-or-lux-bedek-bayit"),
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
