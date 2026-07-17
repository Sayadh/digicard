import { computed } from 'vue'
import type { Locale, LocaleContent } from '#shared/cards'
import { useCurrentCard } from './useCurrentCard'

const STORAGE_KEY = 'fhc-locale'
const LOCALES: Locale[] = ['hy', 'en', 'ru']

/**
 * Minimal, dependency-free i18n: a single reactive locale (Nuxt useState keeps it
 * SSR-safe and per-request) plus a computed dictionary of the current card's copy
 * in that language. Card-aware: the actual content dictionary comes from whichever
 * CardDefinition the current page set via useCurrentCard(), so every section
 * component stays identical across every client card. Default locale is Armenian;
 * the choice is persisted client-side so it sticks on revisit.
 */
export function useLocale() {
  const locale = useState<Locale>('locale', () => 'hy')
  const card = useCurrentCard()

  const t = computed<LocaleContent>(() => {
    if (!card.value) {
      throw new Error('useLocale() was called before the current card was set — call setCurrentCard(card) in the page setup first.')
    }
    if (!card.value.content) {
      throw new Error(`useLocale() expects a 'cleaning-service' template card with 'content' — "${card.value.slug}" has none (use useLuxuryContent() for 'luxury-beauty' cards instead).`)
    }
    return card.value.content[locale.value]
  })

  function setLocale(next: Locale) {
    locale.value = next
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, next)
    }
  }

  function initFromStorage() {
    if (!import.meta.client) return
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved && LOCALES.includes(saved)) {
      locale.value = saved
    }
  }

  return { locale, t, setLocale, initFromStorage, locales: LOCALES }
}
