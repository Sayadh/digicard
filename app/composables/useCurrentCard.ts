import { computed } from 'vue'
import { getCard, type CardDefinition } from '#shared/cards'

/**
 * Only the slug lives in Nuxt's useState (and therefore in the serialized
 * SSR-to-client hydration payload) — the full CardDefinition is re-resolved
 * from the static shared/cards registry on both server and client from that
 * one string. This matters because a CardDefinition can contain values that
 * aren't serializable at all (e.g. content.<locale>.dialog.messageDefaultBook
 * is a function), which would otherwise crash Nuxt's payload devalue
 * serialization. Re-deriving from the registry avoids ever needing to
 * serialize the card itself.
 */
function useCurrentCardSlug() {
  return useState<string | null>('current-card-slug', () => null)
}

/** The card currently being rendered — read-only; set it via setCurrentCard(). */
export function useCurrentCard() {
  const slug = useCurrentCardSlug()
  return computed<CardDefinition | null>(() => (slug.value ? (getCard(slug.value) ?? null) : null))
}

/** Called once by pages/[slug].vue during setup, before any child reads useCurrentCard(). */
export function setCurrentCard(card: CardDefinition) {
  useCurrentCardSlug().value = card.slug
}
