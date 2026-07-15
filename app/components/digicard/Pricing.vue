<template>
  <section id="pricing" class="relative bg-digi-black py-20 md:py-28 px-6 overflow-hidden grain">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[24rem] bg-gradient-to-r from-digi-indigo/15 to-digi-violet/15 blur-[110px] rounded-full pointer-events-none" />

    <div class="relative max-w-lg mx-auto text-center mb-12">
      <span v-reveal class="text-xs font-mono uppercase tracking-widest text-digi-indigo-light block mb-3">
        {{ d.pricing.eyebrow }}
      </span>
      <h2 v-reveal="60" class="font-display text-[clamp(1.75rem,2.2vw_+_1.3rem,2.5rem)] text-white">
        {{ d.pricing.title }}
      </h2>
    </div>

    <div v-reveal="120" class="relative max-w-lg mx-auto">
      <div class="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-digi-indigo via-digi-violet to-digi-indigo opacity-60 blur-[2px]" aria-hidden="true" />
      <div class="relative rounded-[2rem] bg-digi-white p-8 md:p-10 shadow-digi-card-lg">
        <span class="inline-flex items-center gap-1.5 rounded-full bg-digi-mist px-3 py-1 text-xs font-semibold text-digi-indigo mb-6">
          <Sparkles class="w-3.5 h-3.5" />
          {{ d.pricing.planName }}
        </span>

        <div class="flex items-end gap-2 mb-1">
          <span class="font-display text-[clamp(2.5rem,4vw,3.25rem)] leading-none text-digi-ink">{{ d.pricing.setupPrice }}</span>
          <span class="text-lg text-digi-muted mb-1">{{ d.pricing.setupUnit }}</span>
        </div>
        <p class="text-sm text-digi-muted mb-6">{{ d.pricing.setupLabel }}</p>

        <ul class="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-7">
          <li v-for="feat in d.pricing.setupFeatures" :key="feat" class="flex items-start gap-2 text-sm text-digi-ink">
            <Check class="w-4 h-4 text-digi-indigo shrink-0 mt-0.5" />
            <span>{{ feat }}</span>
          </li>
        </ul>

        <div class="rounded-2xl bg-digi-mist p-5 mb-7">
          <div class="flex items-end gap-1.5 mb-1">
            <span class="font-display text-2xl text-digi-ink">{{ d.pricing.monthlyPrice }}</span>
            <span class="text-sm text-digi-muted mb-0.5">{{ d.pricing.monthlyUnit }}</span>
          </div>
          <p class="text-xs text-digi-muted mb-3">{{ d.pricing.monthlyIntro }}</p>
          <ul class="space-y-1.5">
            <li v-for="feat in d.pricing.monthlyFeatures" :key="feat" class="flex items-start gap-2 text-xs text-digi-muted">
              <Check class="w-3.5 h-3.5 text-digi-indigo shrink-0 mt-0.5" />
              <span>{{ feat }}</span>
            </li>
          </ul>
        </div>

        <a
          href="#faq"
          class="flex items-center justify-center gap-2 w-full rounded-full bg-digi-ink text-white text-sm font-semibold py-3.5 hover:bg-black transition-colors active:scale-[0.98]"
        >
          {{ d.pricing.cta }}
          <ArrowRight class="w-4 h-4" />
        </a>

        <p class="text-xs text-digi-muted text-center mt-4 leading-relaxed">{{ d.pricing.note }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check, Sparkles, ArrowRight } from 'lucide-vue-next'

const { d } = useDigicardContent()
</script>
