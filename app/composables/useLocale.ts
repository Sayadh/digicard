import { computed } from 'vue'
import { content, type Locale, type LocaleContent } from '~/i18n/content'

const STORAGE_KEY = 'fhc-locale'
const LOCALES: Locale[] = ['hy', 'en', 'ru']

/**
 * Minimal, dependency-free i18n: a single reactive locale (Nuxt useState keeps it
 * SSR-safe and per-request) plus a computed dictionary of the current language's copy.
 * Default is Armenian; the choice is persisted client-side so it sticks on revisit.
 */
export function useLocale() {
  const locale = useState<Locale>('locale', () => 'hy')

  const t = computed<LocaleContent>(() => content[locale.value])

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
