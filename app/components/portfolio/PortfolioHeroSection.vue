<template>
  <section class="relative min-h-[100svh] md:min-h-[92vh] flex flex-col overflow-hidden bg-port-bg text-port-title px-6 pt-10 pb-16 grain">
    <!-- Restrained ambient glow — a single soft gold bloom, never centered/symmetrical -->
    <div class="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-port-gold/10 blur-[110px] pointer-events-none" aria-hidden="true" />
    <div class="absolute bottom-0 -left-20 w-64 h-64 rounded-full bg-port-gold/[0.06] blur-[100px] pointer-events-none" aria-hidden="true" />
    <!-- Faint centered radial vignette so the empty upper field reads as designed negative space, not blank -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none" aria-hidden="true" />

    <div class="relative z-10 flex justify-center" v-reveal>
      <LanguageSwitch />
    </div>

    <div class="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-lg mx-auto w-full">
      <img
        v-if="logoAvailable"
        :src="logoPath"
        :alt="t.hero.name"
        class="w-20 h-20 md:w-24 md:h-24 rounded-2xl mb-6 border border-port-border"
        v-reveal="40"
      />

      <h1
        class="font-display text-[clamp(2.75rem,6vw_+_1.4rem,4.5rem)] leading-[0.96] tracking-tight text-port-title"
        v-reveal="80"
      >
        {{ t.hero.name }}
      </h1>

      <div class="w-10 h-px bg-port-gold/50 my-5" aria-hidden="true" v-reveal="120" />

      <p
        class="text-sm md:text-base font-medium text-port-gold-light leading-snug max-w-sm mb-6"
        v-reveal="140"
      >
        {{ t.hero.role }}
      </p>

      <p class="text-sm md:text-base text-port-text leading-relaxed max-w-md mb-10" v-reveal="180">
        {{ t.hero.bio }}
      </p>

      <a
        href="#contact"
        class="inline-flex items-center justify-center gap-2.5 bg-port-gold text-port-bg py-4 px-9 rounded-full font-semibold text-xs uppercase tracking-widest shadow-[0_10px_34px_-8px_rgba(212,175,55,0.45)] hover:bg-port-gold-light hover:shadow-[0_14px_40px_-6px_rgba(212,175,55,0.55)] transition-all duration-300 active:scale-[0.97]"
        v-reveal="220"
      >
        {{ t.hero.ctaContacts }}
        <ArrowRightIcon class="w-3.5 h-3.5" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ArrowRightIcon } from 'lucide-vue-next'

const { t } = usePortfolioContent()
const { available: logoAvailable, check: checkLogo, path: logoPath } = useBrandLogo()
onMounted(checkLogo)
</script>
