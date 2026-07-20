import { computed, type ComputedRef } from 'vue'

/**
 * SSR-safe existence check for an optional /public image path. Defaults to
 * unavailable so server-rendered output always matches the client's first
 * paint — no hydration mismatch, no flash of a broken image. Call `check()`
 * from onMounted; the result is shared via useState (keyed per-path) so
 * every component asking about the same path only triggers one network
 * check, and navigating between cards client-side re-checks instead of
 * reusing a stale result.
 *
 * Generic version of the logic `useBrandLogo` originally implemented just
 * for `brand.logoPath` — factored out so any other optional per-card asset
 * (gift card face art, etc.) can use the exact same fallback behavior.
 */
export function useImageAvailability(path: ComputedRef<string> | string) {
  const pathRef = computed(() => (typeof path === 'string' ? path : path.value))

  const available = useState<boolean>(`image-available:${pathRef.value}`, () => false)
  const checked = useState<boolean>(`image-checked:${pathRef.value}`, () => false)

  function check() {
    if (!import.meta.client || checked.value || !pathRef.value) return
    checked.value = true

    const img = new Image()
    img.onload = () => { available.value = true }
    img.onerror = () => { available.value = false }
    img.src = pathRef.value
  }

  return { available, check, path: pathRef }
}
