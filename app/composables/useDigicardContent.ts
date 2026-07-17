import { computed } from 'vue'
import { digicardContent, type DigicardLocaleContent } from '~/i18n/digicardContent'
import type { Locale } from '#shared/cards'

/**
 * Content for the DigiCard SaaS marketing homepage. Shares the same site-wide
 * `locale` useState key as useLocale() so the language choice stays consistent
 * whether the visitor is on the homepage or a live card at /full-house-cleaning.
 */
export function useDigicardContent() {
  const locale = useState<Locale>('locale', () => 'hy')
  const d = computed<DigicardLocaleContent>(() => digicardContent[locale.value])

  return { locale, d }
}
