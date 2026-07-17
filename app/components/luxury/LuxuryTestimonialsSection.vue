<template>
  <section v-if="t.testimonials.items.length" class="relative bg-lux-ivory py-16 md:py-24 px-6">
    <div class="text-center mb-12 md:mb-14" v-reveal>
      <span class="text-2xs font-sans uppercase tracking-widest2 text-lux-bronze block mb-3">
        {{ t.testimonials.eyebrow }}
      </span>
      <h2 class="font-luxury text-[clamp(2rem,2.4vw_+_1.5rem,2.75rem)] text-lux-black">
        {{ t.testimonials.title }}
      </h2>
    </div>

    <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 md:gap-5">
      <div
        v-for="(item, i) in t.testimonials.items"
        :key="item.name"
        class="bg-lux-white rounded-2xl border border-lux-line p-6 md:p-7 shadow-lux-card"
        v-reveal="i * 60"
      >
        <div class="flex gap-1 mb-4" aria-hidden="true">
          <StarIcon
            v-for="n in 5"
            :key="n"
            class="w-3.5 h-3.5"
            :class="n <= (item.rating ?? 5) ? 'text-lux-gold fill-lux-gold' : 'text-lux-line'"
          />
        </div>
        <p class="font-luxury italic text-base text-lux-black leading-relaxed mb-4">
          &ldquo;{{ item.quote }}&rdquo;
        </p>
        <span class="text-2xs font-sans uppercase tracking-wider text-lux-muted">{{ item.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { StarIcon } from 'lucide-vue-next'

const { t } = useLuxuryContent()
</script>
