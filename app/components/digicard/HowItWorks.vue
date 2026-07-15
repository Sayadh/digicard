<template>
  <section id="how-it-works" class="relative bg-digi-white py-20 md:py-28 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-14 md:mb-20">
        <span v-reveal class="text-xs font-mono uppercase tracking-widest text-digi-indigo block mb-3">
          {{ d.howItWorks.eyebrow }}
        </span>
        <h2 v-reveal="60" class="font-display text-[clamp(1.75rem,2.2vw_+_1.3rem,2.5rem)] text-digi-ink">
          {{ d.howItWorks.title }}
        </h2>
      </div>

      <div class="relative grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        <!-- Connecting line (desktop only) -->
        <div class="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-digi-indigo/0 via-digi-indigo/30 to-digi-violet/0" aria-hidden="true" />

        <div
          v-for="(step, i) in d.howItWorks.steps"
          :key="step.title"
          v-reveal="120 + i * 60"
          class="relative text-center md:text-left"
        >
          <div class="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-digi-ink text-white font-display text-sm mb-5">
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-digi-mist text-digi-indigo mb-3 md:flex">
            <component :is="icons[i]" class="w-4 h-4" />
          </span>
          <h3 class="font-semibold text-digi-ink mb-1.5">{{ step.title }}</h3>
          <p class="text-sm text-digi-muted leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Sparkles, Edit3, Share2, TrendingUp } from 'lucide-vue-next'

const { d } = useDigicardContent()
const icons = [Sparkles, Edit3, Share2, TrendingUp]
</script>
