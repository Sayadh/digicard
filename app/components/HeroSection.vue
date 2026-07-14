<template>
  <section class="relative bg-ink text-bone overflow-hidden grain">
    <!-- Depth: a slow brass glow anchored top-right, never centered, never symmetrical -->
    <div class="absolute -top-32 -right-24 w-80 h-80 rounded-full bg-brass/10 blur-[90px] pointer-events-none" />
    <div class="absolute top-1/3 -left-28 w-64 h-64 rounded-full bg-moss/20 blur-[100px] pointer-events-none" />

    <!-- Single continuous current line, the brand's signature gesture, drawn once across the hero -->
    <svg class="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 400 600" preserveAspectRatio="none" fill="none">
      <path d="M-20 120 C 80 60, 160 200, 260 130 S 460 40, 520 160" stroke="#E4C88C" stroke-width="1" />
      <path d="M-30 320 C 60 260, 180 420, 280 340 S 470 260, 540 380" stroke="#F6F1E7" stroke-width="1" />
    </svg>

    <div class="relative z-10 max-w-[clamp(20rem,75vw,42rem)] mx-auto px-7 pt-[clamp(2.5rem,6vw,5rem)] pb-24 flex flex-col items-center text-center">
      <div class="mb-8 md:mb-10" v-reveal>
        <LanguageSwitch />
      </div>

      <!-- Identity lockup — mark and wordmark share one line, like an actual letterhead -->
      <div class="flex items-center gap-2.5 mb-10 md:mb-12" v-reveal="40">
        <LogoMark class="w-6 h-6 md:w-7 md:h-7 text-brass-light" />
        <span class="text-2xs font-mono uppercase tracking-widest2 text-bone/50">{{ t.hero.eyebrow }}</span>
      </div>

      <h1
        class="font-display text-[clamp(2.75rem,4vw_+_1.75rem,4rem)] leading-[0.98] tracking-tight text-bone mb-3"
        v-reveal="80"
      >
        {{ t.hero.title1 }}
        <span class="block italic font-normal text-brass-light">{{ t.hero.title2 }}</span>
      </h1>

      <p class="text-[clamp(0.875rem,0.6vw_+_0.75rem,1rem)] text-bone/55 font-light leading-relaxed max-w-[clamp(19rem,45vw,28rem)] mb-14" v-reveal="160">
        {{ t.hero.tagline }}
      </p>

      <!-- Actions: one confident move, one quiet one — given room to breathe -->
      <div class="flex flex-col sm:flex-row gap-4 w-full max-w-[18rem] sm:max-w-md" v-reveal="240">
        <a
          href="/full-house-cleaning.vcf"
          class="flex-1 inline-flex items-center justify-center gap-2.5 bg-brass text-ink py-4 rounded-full font-medium text-xs uppercase tracking-widest shadow-brass hover:bg-brass-light transition-all duration-300 active:scale-[0.97]"
        >
          <DownloadIcon class="w-3.5 h-3.5" />
          {{ t.hero.saveContact }}
        </a>
        <button
          type="button"
          class="flex-1 inline-flex items-center justify-center gap-2.5 bg-transparent border border-hairline-dark text-bone/70 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:border-brass-light/40 hover:text-brass-light transition-all duration-300 active:scale-[0.97]"
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
import { ref, watch } from 'vue'
import { DownloadIcon, Share2Icon } from 'lucide-vue-next'

const { t } = useLocale()
const shareLabel = ref(t.value.hero.share)

watch(() => t.value.hero.share, (val) => {
  shareLabel.value = val
})

async function share() {
  const shareData = {
    title: 'Full House Cleaning',
    text: t.value.hero.tagline,
    url: typeof window !== 'undefined' ? window.location.href : 'https://fullhousecleaning.com'
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
