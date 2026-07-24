import { computed } from 'vue'
import type { Locale, PortfolioLocaleContent } from '#shared/cards'
import { useCurrentCard } from './useCurrentCard'

/**
 * Content accessor for 'portfolio' template cards — the counterpart to
 * useLocale() ('cleaning-service') and useLuxuryContent() ('luxury-beauty').
 * Shares the exact same site-wide `locale` useState key, so the language
 * switcher works identically regardless of which template the current card uses.
 */
export function usePortfolioContent() {
  const locale = useState<Locale>('locale', () => 'hy')
  const card = useCurrentCard()

  const t = computed<PortfolioLocaleContent>(() => {
    if (!card.value) {
      throw new Error('usePortfolioContent() was called before the current card was set — call setCurrentCard(card) in the page setup first.')
    }
    if (!card.value.portfolioContent) {
      throw new Error(`usePortfolioContent() expects a 'portfolio' template card with 'portfolioContent' — "${card.value.slug}" has none.`)
    }
    return card.value.portfolioContent[locale.value]
  })

  return { locale, t }
}
