<template>
  <section class="relative bg-port-card py-14 md:py-20 px-6 border-y border-port-border">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-8 md:mb-10" v-reveal>
        <span class="text-2xs font-mono uppercase tracking-widest2 text-port-gold block mb-3">
          {{ t.capabilities.eyebrow }}
        </span>
        <h2 class="font-display text-[clamp(1.75rem,2.2vw_+_1.3rem,2.5rem)] text-port-title">
          {{ t.capabilities.title }}
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        <div
          v-for="(item, i) in t.capabilities.items"
          :key="item"
          v-reveal="Math.min(80 + i * 20, 320)"
          class="group flex w-full min-h-[104px] flex-col items-center justify-center text-center gap-2.5 rounded-2xl border border-port-border bg-port-bg px-3 py-4 transition-all duration-300 hover:border-port-gold/40 hover:-translate-y-1 hover:shadow-[0_0_22px_rgba(212,175,55,0.18)]"
        >
          <span class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-port-gold/10 text-port-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-port-gold/15">
            <component :is="icons[i % icons.length]" class="w-5 h-5" />
          </span>
          <span class="text-[0.78rem] font-medium text-port-text leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-port-title">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Globe, Layers, Contact, Ticket, QrCode, Code2, LayoutDashboard, Presentation, Languages, TrendingUp } from 'lucide-vue-next'

const { t } = usePortfolioContent()

const icons = [Globe, Layers, Contact, Ticket, QrCode, Code2, LayoutDashboard, Presentation, Languages, TrendingUp]
</script>
