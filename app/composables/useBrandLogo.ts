import { computed } from 'vue'
import { useCurrentCard } from './useCurrentCard'
import { useImageAvailability } from './useImageAvailability'

/**
 * Shared, SSR-safe check for whether the current card's logo (brand.logoPath)
 * actually exists at that public path. See useImageAvailability for the
 * underlying fallback/no-hydration-mismatch behavior — this is just that,
 * scoped to the current card's logo path.
 */
export function useBrandLogo() {
  const card = useCurrentCard()
  const path = computed(() => card.value?.brand.logoPath ?? '')
  return useImageAvailability(path)
}
