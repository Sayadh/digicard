import { computed } from 'vue'
import type { Locale, LuxuryLocaleContent } from '#shared/cards'
import { useCurrentCard } from './useCurrentCard'

/**
 * Content accessor for 'luxury-beauty' template cards — the counterpart to
 * useLocale() (which serves 'cleaning-service' cards). Shares the exact same
 * site-wide `locale` useState key, so the language switcher works identically
 * regardless of which template the current card uses.
 */
export function useLuxuryContent() {
  const locale = useState<Locale>('locale', () => 'hy')
  const card = useCurrentCard()

  const t = computed<LuxuryLocaleContent>(() => {
    if (!card.value) {
      throw new Error('useLuxuryContent() was called before the current card was set — call setCurrentCard(card) in the page setup first.')
    }
    if (!card.value.luxuryContent) {
      throw new Error(`useLuxuryContent() expects a 'luxury-beauty' template card with 'luxuryContent' — "${card.value.slug}" has none (use useLocale() for 'cleaning-service' cards instead).`)
    }
    return card.value.luxuryContent[locale.value]
  })

  return { locale, t }
}
