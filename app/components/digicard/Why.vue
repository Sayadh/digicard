<template>
  <section class="relative bg-digi-white py-24 md:py-32 px-6 overflow-hidden">
    <!-- Ambient background: soft radial glows, subtle purple/blue, SaaS-landing style -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute -top-32 -left-24 w-[28rem] h-[28rem] bg-digi-indigo/[0.07] blur-[120px] rounded-full" />
      <div class="absolute top-1/3 -right-24 w-[26rem] h-[26rem] bg-digi-violet/[0.06] blur-[130px] rounded-full" />
      <div class="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] bg-digi-indigo/[0.05] blur-[110px] rounded-full" />
    </div>

    <div class="relative max-w-6xl mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-16 md:mb-20">
        <span
          v-reveal
          class="inline-flex items-center gap-1.5 rounded-full border border-digi-line-soft bg-digi-mist px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-digi-indigo mb-5"
        >
          <Sparkles class="w-3.5 h-3.5" />
          {{ d.why.eyebrow }}
        </span>
        <h2
          v-reveal="60"
          class="font-display text-[clamp(2rem,2.6vw_+_1.5rem,3.25rem)] leading-[1.12] text-digi-ink mb-5"
        >
          {{ d.why.title }}
        </h2>
        <p v-reveal="100" class="text-digi-muted text-base md:text-lg leading-relaxed">
          {{ d.why.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
        <div v-for="(item, i) in d.why.items" :key="item.title" v-reveal="Math.min(120 + i * 30, 360)" class="group relative">
          <!-- Hover glow: soft brand-color bloom behind the card -->
          <div
            class="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-digi-indigo/25 to-digi-violet/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />

          <div
            class="relative h-full flex flex-col gap-5 rounded-[26px] border border-digi-line-soft bg-digi-white p-7 md:p-8 shadow-digi-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-digi-card-lg group-hover:border-digi-indigo/35"
          >
            <span
              class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-digi-indigo/10 to-digi-violet/10 text-digi-indigo transition-all duration-300 group-hover:scale-110 group-hover:from-digi-indigo/15 group-hover:to-digi-violet/20"
            >
              <component :is="icons[i]" class="w-6 h-6" />
            </span>

            <div>
              <h3 class="font-semibold text-digi-ink text-[1.05rem] mb-2 leading-snug">{{ item.title }}</h3>
              <p class="text-sm text-digi-muted leading-relaxed line-clamp-2">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileX, RefreshCw, Zap, BadgeCheck, Leaf, Wallet, Edit3, Network, Sparkles } from 'lucide-vue-next'

const { d } = useDigicardContent()
const icons = [FileX, RefreshCw, Zap, BadgeCheck, Leaf, Wallet, Edit3, Network]
</script>
