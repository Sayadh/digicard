/**
 * Shared, SSR-safe check for whether the real brand logo (public/logo.JPG) exists.
 * Defaults to unavailable so server-rendered output always matches the client's
 * first paint — no hydration mismatch, no flash of a broken image. The moment
 * the file is dropped into public/, every component using this composable
 * upgrades to it automatically, with no further code changes.
 *
 * Uses useState so the actual preload only happens once per page load, shared
 * across every component that asks (Hero, Footer, etc.) instead of once each.
 */
export const BRAND_LOGO_PATH = '/logo.JPG'

export function useBrandLogo() {
  const available = useState<boolean>('brand-logo-available', () => false)
  const checked = useState<boolean>('brand-logo-checked', () => false)

  function check() {
    if (!import.meta.client || checked.value) return
    checked.value = true

    const img = new Image()
    img.onload = () => { available.value = true }
    img.onerror = () => { available.value = false }
    img.src = BRAND_LOGO_PATH
  }

  return { available, check, path: BRAND_LOGO_PATH }
}
