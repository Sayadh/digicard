<template>
  <div class="digicard-qr w-full max-w-sm mx-auto">
    <!-- Premium frame -->
    <div class="rounded-3xl border border-digi-line-soft bg-digi-white shadow-digi-card-lg p-6">
      <div class="relative aspect-square w-full overflow-hidden rounded-2xl bg-white ring-1 ring-digi-line-soft">
        <div
          ref="qrContainerRef"
          class="qr-render-target absolute inset-0 flex items-center justify-center"
          role="img"
          :aria-label="qrAriaLabel"
        />
        <div
          v-if="!cardUrl"
          class="absolute inset-0 flex items-center justify-center text-xs text-digi-muted text-center px-6"
        >
          {{ missingUrlLabel }}
        </div>
      </div>

      <p class="mt-4 text-center text-sm text-digi-muted leading-relaxed">
        Սկանավորեք՝ թվային այցեքարտը բացելու համար
      </p>

      <!-- Actions -->
      <div class="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-digi-ink text-white text-xs font-semibold py-3 px-4 hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="!isReady"
          aria-label="Ներբեռնել QR կոդը"
          @click="downloadQr"
        >
          <Download class="w-3.5 h-3.5" aria-hidden="true" />
          Ներբեռնել QR կոդը
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-full border border-digi-line-soft text-digi-ink text-xs font-semibold py-3 px-4 hover:bg-digi-mist transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="!cardUrl"
          :aria-label="copied ? 'Հղումը պատճենված է' : 'Պատճենել հղումը'"
          @click="copyLink"
        >
          <Check v-if="copied" class="w-3.5 h-3.5" aria-hidden="true" />
          <LinkIcon v-else class="w-3.5 h-3.5" aria-hidden="true" />
          {{ copied ? 'Պատճենված է' : 'Պատճենել հղումը' }}
        </button>
      </div>
      <p class="sr-only" role="status" aria-live="polite">{{ copied ? 'Հղումը պատճենվեց սեղմատախտակին' : '' }}</p>

      <!-- Customization panel -->
      <div v-if="showPanel" class="mt-6 pt-5 border-t border-digi-line-soft">
        <span class="text-2xs font-mono uppercase tracking-wider text-digi-muted block mb-3">Ոճեր</span>
        <div class="flex flex-wrap gap-2 mb-5" role="group" aria-label="QR կոդի ոճի ընտրություն">
          <button
            v-for="presetName in presetOrder"
            :key="presetName"
            type="button"
            class="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all"
            :class="customization.preset === presetName
              ? 'border-digi-ink bg-digi-ink text-white'
              : 'border-digi-line-soft text-digi-muted hover:border-digi-ink/30 hover:text-digi-ink'"
            :aria-pressed="customization.preset === presetName"
            @click="applyPreset(presetName)"
          >
            {{ presets[presetName].label }}
          </button>
        </div>

        <span class="text-2xs font-mono uppercase tracking-wider text-digi-muted block mb-3">Հարմարեցում</span>
        <div class="grid grid-cols-2 gap-x-4 gap-y-4">
          <label class="block">
            <span class="text-2xs text-digi-muted block mb-1.5">Հիմնական գույն</span>
            <input
              v-model="customization.foregroundColor"
              type="color"
              class="w-full h-9 rounded-lg border border-digi-line-soft cursor-pointer bg-transparent"
              aria-label="QR կոդի հիմնական գույնը"
            />
          </label>
          <label class="block">
            <span class="text-2xs text-digi-muted block mb-1.5">Ֆոնի գույն</span>
            <input
              v-model="customization.backgroundColor"
              type="color"
              class="w-full h-9 rounded-lg border border-digi-line-soft cursor-pointer bg-transparent"
              aria-label="QR կոդի ֆոնի գույնը"
            />
          </label>

          <label class="block">
            <span class="text-2xs text-digi-muted block mb-1.5">Անկյունների ոճ</span>
            <select
              v-model="cornerStyleOption"
              class="w-full h-9 rounded-lg border border-digi-line-soft text-xs px-2 bg-white"
              aria-label="Անկյունների ոճը"
            >
              <option value="square">Square</option>
              <option value="rounded">Rounded</option>
              <option value="dot">Dot</option>
            </select>
          </label>
          <label class="block">
            <span class="text-2xs text-digi-muted block mb-1.5">Կետերի ոճ</span>
            <select
              v-model="customization.dotsType"
              class="w-full h-9 rounded-lg border border-digi-line-soft text-xs px-2 bg-white"
              aria-label="Կետերի ոճը"
            >
              <option value="square">Square</option>
              <option value="dots">Dots</option>
              <option value="rounded">Rounded</option>
              <option value="classy">Classy</option>
              <option value="classy-rounded">Classy Rounded</option>
              <option value="extra-rounded">Extra Rounded</option>
            </select>
          </label>

          <label class="flex items-center gap-2">
            <input
              v-model="customization.showLogo"
              type="checkbox"
              class="w-4 h-4 rounded border-digi-line-soft accent-digi-indigo"
              aria-label="Ցուցադրել լոգոն QR կոդի կենտրոնում"
            />
            <span class="text-xs text-digi-ink">Ցուցադրել լոգոն</span>
          </label>

          <label class="block">
            <span class="text-2xs text-digi-muted block mb-1.5">Ֆայլի ձևաչափ</span>
            <select
              v-model="customization.fileFormat"
              class="w-full h-9 rounded-lg border border-digi-line-soft text-xs px-2 bg-white"
              aria-label="Ներբեռնման ֆայլի ձևաչափը"
            >
              <option value="png">PNG</option>
              <option value="svg">SVG</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { Check, Download, Link as LinkIcon } from 'lucide-vue-next'
import {
  buildQrOptions,
  defaultCustomizationFromPreset,
  QR_PRESET_ORDER,
  QR_PRESETS,
  useDigiCardQr,
  type QrPresetName
} from '~/composables/useDigiCardQr'

type QrCodeStylingModule = typeof import('qr-code-styling')
type QrCodeStylingInstance = InstanceType<QrCodeStylingModule['default']>

interface Props {
  /** Card slug used to build the public URL as `${siteUrl}/${slug}` — ignored if `url` is provided. */
  slug?: string
  /** Explicit full URL override. Takes precedence over `slug`. */
  url?: string
  /** Optional card-specific logo (any raster/vector image URL). Falls back to the DigiCard mark. */
  logoSrc?: string | null
  /** Brand gradient start color, used for the default DigiCard mark and the Premium Gradient preset. */
  accentColor?: string
  /** Brand gradient end color. */
  accentColorSecondary?: string
  /** Which preset to start with. Defaults to the site's own Premium Gradient look. */
  initialPreset?: QrPresetName
  /** Show the preset + customization controls. Set to false to render just the QR and its two actions. */
  showPanel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  slug: '',
  url: '',
  logoSrc: null,
  accentColor: '#6D5EF9',
  accentColorSecondary: '#B15CF6',
  initialPreset: 'premiumGradient',
  showPanel: true
})

const { buildCardUrl } = useDigiCardQr()

const presets = QR_PRESETS
const presetOrder = QR_PRESET_ORDER

const customization = reactive(defaultCustomizationFromPreset(props.initialPreset))

const cardUrl = computed(() => {
  if (props.url) return props.url
  if (props.slug) return buildCardUrl(props.slug)
  return ''
})

const qrAriaLabel = computed(() =>
  cardUrl.value ? `QR կոդ՝ ${cardUrl.value} հասցեն բացելու համար` : 'QR կոդը հասանելի չէ'
)
const missingUrlLabel = 'QR կոդի համար անհրաժեշտ է քարտի հասցե (slug կամ url)'

// "Corner style" in the panel drives both the finder-square and finder-dot type together,
// kept as one simplified control per the design spec rather than two separate selects.
const cornerStyleOption = computed<'square' | 'rounded' | 'dot'>({
  get() {
    if (customization.cornersSquareType === 'square' && customization.cornersDotType === 'square') return 'square'
    if (customization.cornersDotType === 'dot') return 'dot'
    return 'rounded'
  },
  set(value) {
    if (value === 'square') {
      customization.cornersSquareType = 'square'
      customization.cornersDotType = 'square'
    } else if (value === 'rounded') {
      customization.cornersSquareType = 'extra-rounded'
      customization.cornersDotType = 'square'
    } else {
      customization.cornersSquareType = 'extra-rounded'
      customization.cornersDotType = 'dot'
    }
  }
})

function applyPreset(name: QrPresetName) {
  Object.assign(customization, defaultCustomizationFromPreset(name), {
    showLogo: customization.showLogo,
    fileFormat: customization.fileFormat
  })
}

// --- Logo handling -----------------------------------------------------
// A custom logo (arbitrary image, possibly with a transparent background) is
// composited onto a small white rounded backdrop so it stays legible over any
// preset — including Minimal Dark. The default DigiCard mark is generated as
// an already-opaque inline SVG, so it needs no extra backdrop.

const logoDataUrl = ref<string | null>(null)

function buildDefaultLogoDataUrl(colorFrom: string, colorTo: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">`
    + `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">`
    + `<stop offset="0" stop-color="${colorFrom}" /><stop offset="1" stop-color="${colorTo}" /></linearGradient></defs>`
    + `<rect x="4" y="4" width="56" height="56" rx="14" fill="url(#g)" />`
    + `<rect x="25" y="25" width="14" height="14" rx="3.5" fill="#ffffff" />`
    + `</svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function composeLogoWithBackdrop(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const size = 240
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('2D canvas context is not available'))
        return
      }
      drawRoundedRect(ctx, 0, 0, size, size, size * 0.22)
      ctx.fillStyle = '#ffffff'
      ctx.fill()

      const padding = size * 0.16
      const maxDim = size - padding * 2
      const scale = Math.min(maxDim / img.width, maxDim / img.height)
      const w = img.width * scale
      const h = img.height * scale
      ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = () => reject(new Error('Failed to load logo image for QR compositing'))
    img.src = src
  })
}

async function refreshLogo() {
  if (props.logoSrc) {
    try {
      logoDataUrl.value = await composeLogoWithBackdrop(props.logoSrc)
    } catch {
      // Falls back to the DigiCard mark if the custom logo can't be loaded/composited
      // (e.g. blocked by CORS) so the QR still renders instead of failing silently.
      logoDataUrl.value = buildDefaultLogoDataUrl(props.accentColor, props.accentColorSecondary)
    }
  } else {
    logoDataUrl.value = buildDefaultLogoDataUrl(props.accentColor, props.accentColorSecondary)
  }
}

// --- QR instance lifecycle ----------------------------------------------

const qrContainerRef = ref<HTMLElement | null>(null)
const qrInstance = ref<QrCodeStylingInstance | null>(null)
const isReady = ref(false)

let cachedModule: QrCodeStylingModule | null = null
async function loadQrCodeStyling(): Promise<QrCodeStylingModule['default']> {
  if (!cachedModule) {
    cachedModule = await import('qr-code-styling')
  }
  return cachedModule.default
}

async function rebuildQr() {
  if (!cardUrl.value || !qrContainerRef.value) {
    isReady.value = false
    return
  }

  const Ctor = await loadQrCodeStyling()

  // Explicitly tear down the previous instance before building the new one,
  // rather than relying on qr-code-styling's own diffing, so preset/logo
  // swaps never leave stray canvas/svg nodes behind.
  qrContainerRef.value.innerHTML = ''
  qrInstance.value = null

  const options = buildQrOptions({
    data: cardUrl.value,
    customization,
    logoDataUrl: logoDataUrl.value,
    size: 1000
  })

  const instance = new Ctor(options)
  instance.append(qrContainerRef.value)
  qrInstance.value = instance
  isReady.value = true
}

// Recompute whenever any input that affects the rendered QR changes.
const renderKey = computed(() =>
  JSON.stringify({ url: cardUrl.value, c: customization, logo: logoDataUrl.value })
)

watch(renderKey, () => {
  void rebuildQr()
})

watch(
  [() => props.logoSrc, () => props.accentColor, () => props.accentColorSecondary],
  () => {
    void refreshLogo()
  }
)

onMounted(async () => {
  await refreshLogo()
  await rebuildQr()
})

onBeforeUnmount(() => {
  if (qrContainerRef.value) qrContainerRef.value.innerHTML = ''
  qrInstance.value = null
})

// --- Actions --------------------------------------------------------------

async function downloadQr() {
  if (!qrInstance.value) return
  await qrInstance.value.download({ name: 'digicard-qr', extension: customization.fileFormat })
}

const copied = ref(false)
let copiedTimeout: ReturnType<typeof setTimeout> | null = null

async function copyLink() {
  if (!cardUrl.value) return

  try {
    await navigator.clipboard.writeText(cardUrl.value)
  } catch {
    // Fallback for contexts without Clipboard API permission (e.g. insecure/older browsers).
    const textarea = document.createElement('textarea')
    textarea.value = cardUrl.value
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }

  copied.value = true
  if (copiedTimeout) clearTimeout(copiedTimeout)
  copiedTimeout = setTimeout(() => {
    copied.value = false
  }, 2200)
}
</script>

<style scoped>
.qr-render-target :deep(svg),
.qr-render-target :deep(canvas) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
