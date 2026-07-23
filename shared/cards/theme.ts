/**
 * Per-card color theming for the 'cleaning-service' template.
 *
 * A client only ever supplies two brand colors (`dark` + `accent`) via
 * `CardDefinition.theme` — every other role the template needs (page
 * background, hairlines, muted text, shadows, the accent's dim/bright
 * variants) is derived here by HSL math, so the whole page stays strictly
 * within that client's two hues, never introducing a third color by
 * accident. Onboarding a new client's colors is therefore a two-hex-code
 * change in shared/cards/<slug>.ts — no component, class, or text changes.
 *
 * How it plugs in: pages/[slug].vue turns `buildThemeVars(card.theme)` into
 * CSS custom properties on the page's root element (`:style="themeVars"`).
 * tailwind.config.ts points every cleaning-service color/shadow token at
 * `var(--card-<role>, <original-fallback>)`, so cards that don't set a
 * `theme` render exactly as before (the fallback IS today's real palette)
 * and cards that do set one repaint the entire template through pure CSS
 * inheritance — zero Vue logic, zero markup, zero copy changes anywhere.
 */

export interface CardTheme {
  /** Primary dark color — card faces, headline emphasis, primary buttons. */
  dark: string
  /** Bright accent — highlights, active states, the brand's "pop" color. */
  accent: string
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean
  const num = parseInt(full, 16)
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255]
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      default: h = (r - g) / d + 4
    }
    h /= 6
  }
  return [h * 360, s * 100, l * 100]
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360
  s /= 100
  l /= 100
  if (s === 0) {
    const v = Math.round(l * 255)
    return [v, v, v]
  }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  return [
    Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1 / 3) * 255)
  ]
}

function toHex(rgb: [number, number, number]): string {
  return '#' + rgb.map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join('')
}

function toRgba(rgb: [number, number, number], alpha: number): string {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`
}

/**
 * Space-separated "R G B" triplet (Tailwind's required format for a color that
 * needs to support the `/NN` opacity modifier, e.g. `bg-ink/60`). Tailwind
 * substitutes its `<alpha-value>` placeholder into `rgb(var(--x) / <alpha-value>)`
 * — that placeholder mechanism only works against three bare numbers, not a
 * hex string or a var() that already resolves to one, which is exactly why
 * tailwind.config.ts's color tokens are wired to *-rgb vars instead of the
 * plain hex ones below.
 */
function toRgbTriplet(rgb: [number, number, number]): string {
  return `${Math.round(rgb[0])} ${Math.round(rgb[1])} ${Math.round(rgb[2])}`
}

/** Same hue as `hex`, retargeted to an absolute lightness and a saturation scaled by `satScale`. */
function atLightness(hex: string, lightness: number, satScale = 1): string {
  const [h, s] = rgbToHsl(...hexToRgb(hex))
  return toHex(hslToRgb(h, Math.min(100, s * satScale), Math.min(100, Math.max(0, lightness))))
}

/**
 * Fraction of the way from the dark color's own lightness to near-white
 * (97%), for each role — modeled on the original hand-picked ink→bone
 * ladder so a derived palette keeps the same visual rhythm regardless of
 * how light or dark the client's `dark` color happens to be.
 */
const LADDER: Record<'inkSoft' | 'mossDeep' | 'moss' | 'stone' | 'stoneLight', { t: number; sat: number }> = {
  inkSoft: { t: 0.041, sat: 1 },
  mossDeep: { t: 0.112, sat: 0.95 },
  moss: { t: 0.237, sat: 0.85 },
  stone: { t: 0.363, sat: 0.6 },
  stoneLight: { t: 0.584, sat: 0.4 }
}

export function buildThemeVars(theme: CardTheme): Record<string, string> {
  const { dark, accent } = theme
  const darkRgb = hexToRgb(dark)
  const accentRgb = hexToRgb(accent)
  const [, , darkL] = rgbToHsl(...darkRgb)

  const boneL = 97
  const paperL = 98.5
  const span = boneL - darkL

  const step = (key: keyof typeof LADDER) => atLightness(dark, darkL + LADDER[key].t * span, LADDER[key].sat)

  const ink = dark
  const inkSoft = step('inkSoft')
  const mossDeep = step('mossDeep')
  const moss = step('moss')
  const stone = step('stone')
  const stoneLight = step('stoneLight')
  const bone = atLightness(dark, boneL, 0.25)
  const paper = atLightness(dark, paperL, 0.15)

  const mintLight = accent
  const mint = toRgba(accentRgb, 0.69)
  const mintDim = atLightness(accent, 23, 1.1)

  // Full-bleed hero/footer/contacts background — richer and more saturated than
  // plain `ink` (which stays reserved for buttons/text/card faces). Same accent
  // hue, pushed to a vivid mid-dark teal, fading into a lightened variant of the
  // dark color (not `ink` itself, so buttons/card faces don't get pulled along)
  // so white text still reads cleanly at every point in the gradient. Both
  // stops are a touch lighter/brighter than a strict "brand color as-is" render
  // would give, by request — same hues, just lifted a bit off the floor.
  const [accentHue] = rgbToHsl(...accentRgb)
  const heroFrom = toHex(hslToRgb(accentHue, 78, 44))
  const heroTo = atLightness(dark, darkL + 10, 1)

  return {
    // RGB-triplet vars (no "#", no commas) — required by tailwind.config.ts's
    // rgb(var(--card-x-rgb, R G B) / <alpha-value>) pattern so that opacity
    // modifiers (bg-ink/60, text-bone/80, etc.) actually generate CSS. A plain
    // hex or rgba() var cannot support Tailwind's <alpha-value> substitution.
    '--card-ink-rgb': toRgbTriplet(hexToRgb(ink)),
    '--card-ink-soft-rgb': toRgbTriplet(hexToRgb(inkSoft)),
    '--card-bone-rgb': toRgbTriplet(hexToRgb(bone)),
    '--card-paper-rgb': toRgbTriplet(hexToRgb(paper)),
    '--card-mint-light-rgb': toRgbTriplet(accentRgb),
    '--card-mint-dim-rgb': toRgbTriplet(hexToRgb(mintDim)),
    '--card-hero-from-rgb': toRgbTriplet(hexToRgb(heroFrom)),
    '--card-hero-to-rgb': toRgbTriplet(hexToRgb(heroTo)),
    '--card-moss-rgb': toRgbTriplet(hexToRgb(moss)),
    '--card-moss-deep-rgb': toRgbTriplet(hexToRgb(mossDeep)),
    '--card-stone-rgb': toRgbTriplet(hexToRgb(stone)),
    '--card-stone-light-rgb': toRgbTriplet(hexToRgb(stoneLight)),
    // Already-translucent-by-design (fixed alpha baked in) — never used with a
    // `/NN` modifier anywhere, so these stay plain CSS values, not RGB triplets.
    '--card-mint': mint,
    '--card-hairline': toRgba(darkRgb, 0.12),
    '--card-hairline-dark': toRgba(hexToRgb(bone), 0.12),
    '--card-shadow-lift-sm': `0 2px 10px ${toRgba(darkRgb, 0.05)}`,
    '--card-shadow-lift': `0 12px 40px ${toRgba(darkRgb, 0.08)}`,
    '--card-shadow-lift-lg': `0 30px 70px ${toRgba(darkRgb, 0.16)}`,
    '--card-shadow-card': `0 40px 80px -20px ${toRgba(darkRgb, 0.45)}`,
    '--card-shadow-mint': `0 4px 14px ${toRgba(accentRgb, 0.22)}`
  }
}
