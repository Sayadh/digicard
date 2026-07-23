<template>
  <section class="relative bg-gradient-to-br from-hero-from to-hero-to text-bone overflow-hidden grain">
    <!-- Depth: a slow mint glow anchored top-right, never centered, never symmetrical -->
    <div class="absolute -top-32 -right-24 w-80 h-80 rounded-full bg-mint/10 blur-[90px] pointer-events-none" />
    <div class="absolute top-1/3 -left-28 w-64 h-64 rounded-full bg-moss/20 blur-[100px] pointer-events-none" />

    <!-- Single continuous current line, the brand's signature gesture, drawn once across the hero -->
    <svg class="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 400 600" preserveAspectRatio="none" fill="none">
      <path d="M-20 120 C 80 60, 160 200, 260 130 S 460 40, 520 160" stroke="#5DD9E8" stroke-width="1" />
      <path d="M-30 320 C 60 260, 180 420, 280 340 S 470 260, 540 380" stroke="#F7F8F5" stroke-width="1" />
    </svg>

    <div class="relative z-10 max-w-[clamp(20rem,75vw,42rem)] mx-auto px-7 pt-[clamp(2.5rem,6vw,5rem)] pb-24 flex flex-col items-center text-center">
      <div class="mb-10 md:mb-12" v-reveal>
        <LanguageSwitch />
      </div>

      <!-- The logo carries the brand identity now — no separate "Digital Card"
           label needed above it; falls back to the styled wordmark until
           /public/logo.JPG exists. Kept out of the h1 so the mark can be sized
           on its own terms; a sr-only h1 preserves the page heading either way. -->
      <div class="mb-3" v-reveal="40">
        <div v-if="logoAvailable" class="inline-flex items-center justify-center bg-bone rounded-2xl p-0 shadow-lift-lg">
          <img :src="logoPath" :alt="card!.brand.orgName" class="h-[clamp(6.5rem,10vw_+_3.5rem,10.5rem)] w-auto rounded-2xl" />
        </div>
        <h1 v-if="logoAvailable" class="sr-only">{{ card!.brand.orgName }}</h1>
        <h1 v-else class="font-display text-[clamp(2.75rem,4vw_+_1.75rem,4rem)] leading-[0.98] tracking-tight text-bone block">
          {{ t.hero.title1 }}
          <span class="block italic font-normal text-mint-light">{{ t.hero.title2 }}</span>
        </h1>
      </div>

      <p class="text-[clamp(0.875rem,0.6vw_+_0.75rem,1rem)] text-bone/55 font-light leading-relaxed max-w-[clamp(19rem,45vw,28rem)] mb-14" v-reveal="160">
        {{ t.hero.tagline }}
      </p>

      <!-- Actions: one confident move, one quiet one — given room to breathe -->
      <div class="flex flex-col sm:flex-row gap-4 w-full max-w-[18rem] sm:max-w-md" v-reveal="240">
        <a
          href="#contact"
          class="flex-1 inline-flex items-center justify-center gap-2.5 bg-mint-light text-ink py-4 rounded-full font-semibold text-xs uppercase tracking-widest shadow-[0_6px_28px_rgba(102,219,227,0.5)] hover:brightness-105 transition-all duration-300 active:scale-[0.97] animate-bobble hover:[animation-play-state:paused]"
        >
          <ContactIcon class="w-3.5 h-3.5" />
          {{ t.hero.seeContacts }}
        </a>
        <button
          type="button"
          class="flex-1 inline-flex items-center justify-center gap-2.5 bg-transparent border border-hairline-dark text-bone/70 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:border-mint-light/40 hover:text-mint-light transition-all duration-300 active:scale-[0.97]"
          @click="share"
        >
          <Share2Icon class="w-3.5 h-3.5" />
          {{ shareLabel }}
        </button>
      </div>
    </div>

    <!-- Scroll cue: a single drifting line, no arrow icon, no chrome -->
    <div class="relative z-10 flex flex-col items-center gap-2 pb-8 text-bone/35" aria-hidden="true">
      <span class="text-2xs font-mono uppercase tracking-widest2">{{ t.hero.scroll }}</span>
      <span class="w-px h-6 bg-gradient-to-b from-bone/40 to-transparent animate-drift" />
    </div>

    <!-- Organic deckle-edge transition into the paper below, not a hard rectangular cut -->
    <svg class="absolute bottom-0 left-0 w-full h-8 text-bone" viewBox="0 0 400 32" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
      <path d="M0 18 C 40 6, 70 28, 110 16 C 150 4, 180 26, 220 14 C 260 2, 290 24, 330 12 C 355 5, 380 16, 400 10 L400 32 L0 32 Z" />
    </svg>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { ContactIcon, Share2Icon } from 'lucide-vue-next'

const { t } = useLocale()
const card = useCurrentCard()
const { buildCardUrl } = useDigiCardQr()
const shareLabel = ref(t.value.hero.share)

const { available: logoAvailable, check: checkLogo, path: logoPath } = useBrandLogo()
onMounted(checkLogo)

watch(() => t.value.hero.share, (val) => {
  shareLabel.value = val
})

async function share() {
  const shareData = {
    title: card.value!.brand.orgName,
    text: t.value.hero.tagline,
    url: typeof window !== 'undefined' ? window.location.href : buildCardUrl(card.value!.slug)
  }

  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share(shareData)
      return
    } catch {
      /* user cancelled — no-op */
    }
  }

  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    await navigator.clipboard.writeText(shareData.url)
    shareLabel.value = t.value.hero.shareCopied
    setTimeout(() => (shareLabel.value = t.value.hero.share), 1800)
  }
}
</script>
