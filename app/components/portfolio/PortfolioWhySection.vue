<template>
  <section class="relative bg-port-bg py-14 md:py-20 px-6 overflow-hidden">
    <div class="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-port-gold/[0.05] blur-[120px] pointer-events-none" aria-hidden="true" />

    <div class="relative max-w-5xl mx-auto">
      <div class="text-center mb-10 md:mb-14" v-reveal>
        <span class="text-2xs font-mono uppercase tracking-widest2 text-port-gold block mb-3">
          {{ t.why.eyebrow }}
        </span>
        <h2 class="font-display text-[clamp(1.75rem,2.4vw_+_1.3rem,2.5rem)] text-port-title">
          {{ t.why.title }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        <div
          v-for="(item, i) in t.why.items"
          :key="item.title"
          v-reveal="Math.min(80 + i * 40, 280)"
          class="group relative"
        >
          <div
            class="absolute -inset-2 rounded-[24px] bg-port-gold/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div class="relative h-full flex flex-col gap-4 rounded-2xl border border-port-border bg-port-card p-6 md:p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-port-gold/40">
            <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-port-gold/10 text-port-gold transition-transform duration-300 group-hover:scale-110">
              <component :is="icons[i % icons.length]" class="w-5 h-5" />
            </span>
            <div>
              <h3 class="font-semibold text-port-title text-[1rem] mb-1.5 leading-snug">{{ item.title }}</h3>
              <p class="text-sm text-port-text leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { UserCheck, Palette, Zap, TrendingUp } from 'lucide-vue-next'

const { t } = usePortfolioContent()
const icons = [UserCheck, Palette, Zap, TrendingUp]
</script>
