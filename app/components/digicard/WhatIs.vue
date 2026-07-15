<template>
  <section class="relative bg-digi-mist py-20 md:py-28 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12 md:mb-16">
        <span v-reveal class="text-xs font-mono uppercase tracking-widest text-digi-indigo block mb-3">
          {{ d.whatIs.eyebrow }}
        </span>
        <h2 v-reveal="60" class="font-display text-[clamp(1.75rem,2.2vw_+_1.3rem,2.5rem)] text-digi-ink mb-3">
          {{ d.whatIs.title }}
        </h2>
        <p v-reveal="100" class="text-digi-muted text-sm md:text-base">{{ d.whatIs.subtitle }}</p>
      </div>

      <div class="grid sm:grid-cols-3 gap-5">
        <div
          v-for="(card, i) in d.whatIs.cards"
          :key="card.title"
          v-reveal="120 + i * 60"
          class="group relative rounded-3xl bg-digi-white border border-digi-line-soft p-7 shadow-digi-card hover:shadow-digi-card-lg hover:-translate-y-1 transition-all duration-300"
        >
          <span
            class="inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-5 text-white"
            :style="{ background: `linear-gradient(135deg, ${icons[i].from}, ${icons[i].to})` }"
          >
            <component :is="icons[i].icon" class="w-5 h-5" />
          </span>
          <h3 class="font-semibold text-digi-ink mb-2">{{ card.title }}</h3>
          <p class="text-sm text-digi-muted leading-relaxed">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CreditCard, QrCode, Wifi } from 'lucide-vue-next'

const { d } = useDigicardContent()

const icons = [
  { icon: CreditCard, from: '#6D5EF9', to: '#8F7CFF' },
  { icon: QrCode, from: '#8F7CFF', to: '#B15CF6' },
  { icon: Wifi, from: '#B15CF6', to: '#6D5EF9' }
]
</script>
