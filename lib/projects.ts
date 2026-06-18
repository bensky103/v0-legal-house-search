import { cities } from "@/lib/seo-locations"

// City-level project index pages.
// Approach (B) from the approved plan: generic per-city "new construction projects" pages
// with NO fabricated developer names, dates, or unit counts. When the client supplies a real
// project list, individual ProjectData entries can be added and a /projects/[city]/[project]
// route enabled — without changing this structure.
export interface CityProjectIndex {
  citySlug: string
  // Optional intro override; falls back to a generated one when omitted.
  intro?: string
  // Optional notable area/neighborhood names where new construction is concentrated.
  // These are general, publicly-known area names — not specific project claims.
  buildingAreas?: string[]
  // Optional deeper, city-specific content sections (e.g. the engineering angle of
  // new construction in this city). General professional content — no fabricated
  // project names, dates, or unit counts.
  extraSections?: { heading: string; paragraphs: string[] }[]
}

export const cityProjectIndexes: CityProjectIndex[] = [
  {
    citySlug: "netanya",
    intro:
      "נתניה היא אחת הערים עם היקף הבנייה החדשה הגדול בישראל, עם שכונות חדשות שלמות הקמות לאורך רצועת החוף ובמזרח העיר. רבים מהרוכשים בפרויקטים החדשים בנתניה זקוקים לבדק בית מקצועי לפני מסירת הדירה מהקבלן, כדי לוודא שהדירה נמסרת ללא ליקויי בנייה ובהתאם למפרט ולתקנים.",
    buildingAreas: ["עיר ימים", "אגמים", "פולג", "נורדאו", "מרכז העיר", "קריית השרון"],
  },
]

export function getCityProjectIndex(citySlug: string): CityProjectIndex | undefined {
  return cityProjectIndexes.find((p) => p.citySlug === citySlug)
}

// Cities that have a project index page (currently those with curated data).
export function getProjectCities() {
  return cityProjectIndexes
    .map((idx) => cities.find((c) => c.slug === idx.citySlug))
    .filter((c): c is (typeof cities)[number] => Boolean(c))
}
