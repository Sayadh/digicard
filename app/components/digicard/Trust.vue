<template>
  <section class="relative bg-digi-white py-16 md:py-20 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <span v-reveal class="text-xs font-mono uppercase tracking-widest text-digi-indigo block mb-3">
        {{ d.trust.eyebrow }}
      </span>
      <h2 v-reveal="60" class="font-display text-[clamp(1.5rem,1.6vw_+_1.2rem,2rem)] text-digi-ink mb-10 md:mb-12">
        {{ d.trust.title }}
      </h2>

      <div v-reveal="120" class="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-10">
        <div v-for="(item, i) in items" :key="item.label" class="flex items-center gap-2 text-digi-muted">
          <component :is="item.icon" class="w-4 h-4 text-digi-indigo shrink-0" />
          <span class="text-sm font-medium">{{ d.trust.items[i] }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Briefcase, Building2, TrendingUp, Home, Stethoscope, UtensilsCrossed, BedDouble, Laptop, Users } from 'lucide-vue-next'

const { d } = useDigicardContent()

const items = computed(() => [
  { label: 'entrepreneurs', icon: Briefcase },
  { label: 'companies', icon: Building2 },
  { label: 'salesTeams', icon: TrendingUp },
  { label: 'realtors', icon: Home },
  { label: 'doctors', icon: Stethoscope },
  { label: 'restaurants', icon: UtensilsCrossed },
  { label: 'hotels', icon: BedDouble },
  { label: 'freelancers', icon: Laptop },
  { label: 'consultants', icon: Users }
])
</script>
