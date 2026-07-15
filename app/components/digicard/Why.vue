<template>
  <section class="relative bg-digi-white py-20 md:py-28 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12 md:mb-16">
        <span v-reveal class="text-xs font-mono uppercase tracking-widest text-digi-indigo block mb-3">
          {{ d.why.eyebrow }}
        </span>
        <h2 v-reveal="60" class="font-display text-[clamp(1.75rem,2.2vw_+_1.3rem,2.5rem)] text-digi-ink">
          {{ d.why.title }}
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        <div v-for="(item, i) in d.why.items" :key="item.title" v-reveal="100 + i * 40">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-digi-mist text-digi-indigo mb-4">
            <component :is="icons[i]" class="w-[1.125rem] h-[1.125rem]" />
          </span>
          <h3 class="font-semibold text-digi-ink mb-1.5 text-[0.95rem]">{{ item.title }}</h3>
          <p class="text-sm text-digi-muted leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileX, RefreshCw, Zap, BadgeCheck, Leaf, Wallet, Edit3, Network } from 'lucide-vue-next'

const { d } = useDigicardContent()
const icons = [FileX, RefreshCw, Zap, BadgeCheck, Leaf, Wallet, Edit3, Network]
</script>
