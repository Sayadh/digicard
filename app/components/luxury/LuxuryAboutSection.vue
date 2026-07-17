<template>
  <section class="relative bg-lux-ivory py-16 md:py-24 px-6">
    <div class="max-w-4xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-center">
      <div class="relative mx-auto md:mx-0 w-full max-w-[20rem] md:max-w-none" v-reveal>
        <div class="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-lux-card-lg">
          <img :src="aboutImage" :alt="t.about.eyebrow" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-lux-gold/50 hidden md:block" aria-hidden="true" />
      </div>

      <div class="text-center md:text-left" v-reveal="120">
        <span class="text-2xs font-sans uppercase tracking-widest2 text-lux-bronze block mb-4">
          {{ t.about.eyebrow }}
        </span>
        <p class="font-luxury italic text-[clamp(1.6rem,2vw_+_1.2rem,2.35rem)] leading-snug text-lux-black mb-6">
          &ldquo;{{ t.about.quote }}&rdquo;
        </p>
        <p class="text-sm text-lux-muted leading-relaxed max-w-md mx-auto md:mx-0 font-sans">
          {{ t.about.paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t } = useLuxuryContent()
const card = useCurrentCard()

const aboutImage = computed(() => `/cards/${card.value!.slug}/about-portrait.jpg`)
</script>
