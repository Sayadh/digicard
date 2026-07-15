import type { CornerDotType, CornerSquareType, DotType, FileExtension, Options as QrStylingOptions } from 'qr-code-styling'

/**
 * Framework-side logic for the DigiCard QR generator: building each card's
 * public URL, defining the visual presets, and assembling the qr-code-styling
 * `Options` object from a preset + user customization. Deliberately free of
 * any DOM/canvas API so it stays SSR-safe — the actual QRCodeStyling instance
 * and logo canvas compositing live in the client-only component.
 */

export type QrPresetName = 'classic' | 'rounded' | 'premiumGradient' | 'minimalDark'

export interface QrPresetDefinition {
  label: string
  dotsType: DotType
  cornersSquareType: CornerSquareType
  cornersDotType: CornerDotType
  backgroundColor: string
  foregroundColor: string
  foregroundColorSecondary?: string
  useGradient: boolean
}

export interface QrCustomization {
  preset: QrPresetName
  foregroundColor: string
  backgroundColor: string
  dotsType: DotType
  cornersSquareType: CornerSquareType
  cornersDotType: CornerDotType
  showLogo: boolean
  fileFormat: Extract<FileExtension, 'png' | 'svg'>
}

// DigiCard design-system colors (kept in sync with tailwind.config.ts `digi-*` tokens).
const DIGI_INDIGO = '#6D5EF9'
const DIGI_VIOLET = '#B15CF6'
const DIGI_INK = '#0D0D16'
const DIGI_BLACK = '#07070C'
const DIGI_WHITE = '#FFFFFF'

export const QR_PRESETS: Record<QrPresetName, QrPresetDefinition> = {
  classic: {
    label: 'Classic',
    dotsType: 'square',
    cornersSquareType: 'square',
    cornersDotType: 'square',
    backgroundColor: DIGI_WHITE,
    foregroundColor: DIGI_INK,
    useGradient: false
  },
  rounded: {
    label: 'Rounded',
    dotsType: 'rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    backgroundColor: DIGI_WHITE,
    foregroundColor: DIGI_INK,
    useGradient: false
  },
  // Default preset — matches the DigiCard website design system (indigo → violet).
  premiumGradient: {
    label: 'Premium Gradient',
    dotsType: 'rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    backgroundColor: DIGI_WHITE,
    foregroundColor: DIGI_INDIGO,
    foregroundColorSecondary: DIGI_VIOLET,
    useGradient: true
  },
  minimalDark: {
    label: 'Minimal Dark',
    dotsType: 'classy-rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    backgroundColor: DIGI_BLACK,
    foregroundColor: DIGI_WHITE,
    useGradient: false
  }
}

export const QR_PRESET_ORDER: QrPresetName[] = ['premiumGradient', 'rounded', 'classic', 'minimalDark']

export function defaultCustomizationFromPreset(preset: QrPresetName): QrCustomization {
  const def = QR_PRESETS[preset]
  return {
    preset,
    foregroundColor: def.foregroundColor,
    backgroundColor: def.backgroundColor,
    dotsType: def.dotsType,
    cornersSquareType: def.cornersSquareType,
    cornersDotType: def.cornersDotType,
    showLogo: true,
    fileFormat: 'png'
  }
}

/** Relative luminance check used to keep the finder-corner color legible against a custom background. */
function isDarkColor(hex: string): boolean {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return false
  const r = Number.parseInt(clean.slice(0, 2), 16)
  const g = Number.parseInt(clean.slice(2, 4), 16)
  const b = Number.parseInt(clean.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance < 0.5
}

export interface BuildQrOptionsArgs {
  data: string
  customization: QrCustomization
  logoDataUrl?: string | null
  size?: number
}

/** Assembles the qr-code-styling `Options` object for the current data + customization state. */
export function buildQrOptions({ data, customization, logoDataUrl, size = 1000 }: BuildQrOptionsArgs): Partial<QrStylingOptions> {
  const preset = QR_PRESETS[customization.preset]
  const useGradient = customization.preset === 'premiumGradient' && preset.useGradient

  const cornerColor = isDarkColor(customization.backgroundColor) ? customization.foregroundColor : DIGI_INK

  return {
    width: size,
    height: size,
    type: 'svg',
    data,
    margin: 24,
    qrOptions: { errorCorrectionLevel: 'H' },
    image: customization.showLogo && logoDataUrl ? logoDataUrl : undefined,
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 12,
      imageSize: 0.25,
      hideBackgroundDots: true
    },
    dotsOptions: useGradient
      ? {
          type: customization.dotsType,
          gradient: {
            type: 'linear',
            rotation: Math.PI / 4,
            colorStops: [
              { offset: 0, color: customization.foregroundColor },
              { offset: 1, color: preset.foregroundColorSecondary ?? customization.foregroundColor }
            ]
          }
        }
      : { type: customization.dotsType, color: customization.foregroundColor },
    cornersSquareOptions: { type: customization.cornersSquareType, color: cornerColor },
    cornersDotOptions: { type: customization.cornersDotType, color: cornerColor },
    backgroundOptions: { color: customization.backgroundColor }
  }
}

export function useDigiCardQr() {
  const config = useRuntimeConfig()

  /** Builds a card's public URL from the production site URL + its slug — never hardcoded per-card. */
  function buildCardUrl(slug: string): string {
    const base = String(config.public.siteUrl).replace(/\/+$/, '')
    const cleanSlug = slug.replace(/^\/+/, '')
    return cleanSlug ? `${base}/${cleanSlug}` : base
  }

  return { buildCardUrl }
}
