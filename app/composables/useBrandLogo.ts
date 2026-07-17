import { computed } from 'vue'
import { useCurrentCard } from './useCurrentCard'

/**
 * Shared, SSR-safe check for whether the current card's logo (brand.logoPath)
 * actually exists at that public path. Defaults to unavailable so server-rendered
 * output always matches the client's first paint — no hydration mismatch, no
 * flash of a broken image. The moment the asset is dropped into public/, every
 * component using this composable upgrades to it automatically.
 *
 * Uses useState so the actual preload only happens once per page load, shared
 * across every component that asks (Hero, Footer, etc.) instead of once each.
 * Keyed per-path so navigating between two different cards in the same session
 * (client-side nav) re-checks rather than reusing a stale result.
 */
export function useBrandLogo() {
  const card = useCurrentCard()
  const path = computed(() => card.value?.brand.logoPath ?? '')

  const available = useState<boolean>(`brand-logo-available:${path.value}`, () => false)
  const checked = useState<boolean>(`brand-logo-checked:${path.value}`, () => false)

  function check() {
    if (!import.meta.client || checked.value || !path.value) return
    checked.value = true

    const img = new Image()
    img.onload = () => { available.value = true }
    img.onerror = () => { available.value = false }
    img.src = path.value
  }

  return { available, check, path }
}
