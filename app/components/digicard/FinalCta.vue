<template>
  <section class="relative bg-digi-black py-24 md:py-32 px-6 overflow-hidden grain">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[26rem] bg-gradient-to-br from-digi-indigo/25 to-digi-violet/25 blur-[120px] rounded-full pointer-events-none" />

    <div class="relative max-w-2xl mx-auto text-center">
      <h2 v-reveal class="font-display text-[clamp(2rem,3vw_+_1.4rem,3rem)] leading-tight text-white mb-5">
        {{ d.finalCta.title }}
      </h2>
      <p v-reveal="80" class="text-white/55 text-sm md:text-base mb-9 max-w-md mx-auto">
        {{ d.finalCta.subtitle }}
      </p>
      <a
        v-reveal="140"
        href="#pricing"
        class="inline-flex items-center justify-center gap-2 rounded-full bg-white text-digi-black text-sm font-semibold px-8 py-4 hover:bg-white/90 transition-all active:scale-[0.97]"
      >
        {{ d.finalCta.cta }}
        <ArrowRight class="w-4 h-4" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const { d } = useDigicardContent()
</script>
