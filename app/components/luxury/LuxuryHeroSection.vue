<template>
  <section class="relative min-h-[100svh] md:min-h-[94vh] overflow-hidden bg-lux-black">
    <!-- Background video takes over as the hero visual when the card has one; -->
    <!-- falls back to the static portrait for cards without a video yet. -->
    <video
      v-if="heroVideoPath"
      class="absolute inset-0 w-full h-full object-cover opacity-90"
      :src="heroVideoPath"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      aria-hidden="true"
    />
    <img
      v-else
      :src="heroImage"
      :alt="t.hero.name"
      class="absolute inset-0 w-full h-full object-cover opacity-95"
    />

    <!-- Scrim: keeps the portrait dominant while making the type block legible -->
    <div class="absolute inset-0 bg-gradient-to-t from-lux-black via-lux-black/55 to-transparent" />
    <div class="absolute inset-0 bg-gradient-to-b from-lux-black/35 via-transparent to-transparent" />

    <!-- Soft golden light particles — slow, no flash, Apple-like restraint -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <span
        v-for="(p, i) in particles"
        :key="i"
        class="absolute rounded-full bg-lux-gold-light animate-sparkle"
        :style="p"
      />
    </div>

    <div class="relative z-10 flex flex-col items-center text-center px-6 pt-14 pb-14 min-h-[100svh] md:min-h-[94vh] justify-end">
      <img
        v-if="logoAvailable"
        :src="logoPath"
        :alt="card!.brand.orgName"
        class="w-28 h-28 md:w-36 md:h-36 mb-6 animate-luxfloat drop-shadow-[0_8px_28px_rgba(201,167,106,0.4)]"
      />

      <h1 class="font-luxury text-[clamp(2.5rem,4vw_+_1.6rem,3.75rem)] leading-[1.05] text-lux-ivory" v-reveal>
        {{ t.hero.name }}
      </h1>
      <p class="text-2xs md:text-xs uppercase tracking-widest2 text-lux-gold-light mt-3" v-reveal="80">
        {{ t.hero.role }}
      </p>
      <p class="text-xs text-lux-beige/60 mt-1 font-sans" v-reveal="120">
        {{ t.hero.studioLabel }}
      </p>

      <div class="flex flex-wrap justify-center gap-2 mt-7 max-w-md" v-reveal="180">
        <span
          v-for="tag in t.hero.tags"
          :key="tag"
          class="border border-lux-gold/35 text-lux-beige/85 text-2xs uppercase tracking-wider px-3.5 py-1.5 rounded-full font-sans"
        >
          {{ tag }}
        </span>
      </div>

      <div class="w-full max-w-[22rem] mt-9" v-reveal="240">
        <a
          href="#contact"
          class="w-full inline-flex items-center justify-center gap-2 bg-lux-gold text-lux-black py-3.5 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-lux-gold-light transition-all duration-500 active:scale-[0.98]"
        >
          {{ t.hero.ctaContacts }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

const { t } = useLuxuryContent()
const card = useCurrentCard()

const { available: logoAvailable, check: checkLogo, path: logoPath } = useBrandLogo()
onMounted(checkLogo)

const heroImage = computed(() => `/cards/${card.value!.slug}/hero-portrait.jpg`)
const heroVideoPath = computed(() => card.value!.brand.heroVideoPath ?? null)

// Fixed, deterministic particle positions (no client/server hydration mismatch,
// no randomness that would look jittery on re-render).
const particles = [
  { left: '18%', top: '22%', width: '3px', height: '3px', animationDelay: '0s' },
  { left: '72%', top: '16%', width: '2px', height: '2px', animationDelay: '0.6s' },
  { left: '84%', top: '34%', width: '3px', height: '3px', animationDelay: '1.2s' },
  { left: '12%', top: '48%', width: '2px', height: '2px', animationDelay: '1.8s' },
  { left: '60%', top: '12%', width: '2px', height: '2px', animationDelay: '2.4s' },
  { left: '30%', top: '38%', width: '2px', height: '2px', animationDelay: '0.9s' },
  { left: '90%', top: '55%', width: '3px', height: '3px', animationDelay: '1.5s' },
  { left: '45%', top: '20%', width: '2px', height: '2px', animationDelay: '2.1s' }
]
</script>
