// Single source of truth for the Google Business Profile rating shown on the site.
//
// These two numbers appear in several places at once — the rating tile beneath the
// intro, the reviews badge above the testimonials, and the AggregateRating JSON-LD
// that Google reads for the rich result. They were drifting apart, so every one of
// those places now reads from here.
//
// TO UPDATE after new reviews come in, either:
//   1. change FALLBACK_REVIEW_COUNT / FALLBACK_RATING_VALUE below and redeploy, or
//   2. set NEXT_PUBLIC_GOOGLE_REVIEW_COUNT / NEXT_PUBLIC_GOOGLE_RATING_VALUE in the
//      Vercel project environment and redeploy — no code change needed.
// The environment values win when present, so the constants below stay as the
// committed fallback.
//
// Keep these honest: the AggregateRating schema must match the live Google profile.
// A count that overstates the profile is a structured-data violation, not an
// optimisation.

/** Verified against the live Google Business Profile on 2026-09-01. */
const FALLBACK_RATING_VALUE = "5.0"
const FALLBACK_REVIEW_COUNT = 47

function positiveNumber(raw: string | undefined, fallback: number): number {
  const parsed = Number(raw)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

/** Average star rating, e.g. "5.0". Rendered as text and emitted in JSON-LD. */
export const GOOGLE_RATING_VALUE = process.env.NEXT_PUBLIC_GOOGLE_RATING_VALUE?.trim() || FALLBACK_RATING_VALUE

/** Total number of ratings on the Google Business Profile. */
export const GOOGLE_REVIEW_COUNT = positiveNumber(
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT,
  FALLBACK_REVIEW_COUNT,
)
