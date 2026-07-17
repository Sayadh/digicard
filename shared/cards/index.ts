import type { CardDefinition } from './types'
import { fullHouseCleaningCard } from './full-house-cleaning'
import { hairStylistCard } from './hair-stylist'

/**
 * The card registry. To onboard a new client:
 *   1. Add shared/cards/<slug>.ts exporting a CardDefinition (copy an existing
 *      one as a template).
 *   2. Register it below.
 * That's it — the [slug] page route, the [slug].vcf route, and every section
 * component resolve the rest from this map.
 */
export const cards: Record<string, CardDefinition> = {
  [fullHouseCleaningCard.slug]: fullHouseCleaningCard,
  [hairStylistCard.slug]: hairStylistCard
}

export function getCard(slug: string): CardDefinition | undefined {
  return cards[slug]
}

export function listCardSlugs(): string[] {
  return Object.keys(cards)
}

export * from './types'
