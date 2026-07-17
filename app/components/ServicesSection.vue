<template>
  <section class="relative py-12 md:py-20 px-6 max-w-[clamp(20rem,85vw,56rem)] mx-auto">
    <div class="text-center mb-10 md:mb-14" v-reveal>
      <span class="text-2xs font-mono uppercase tracking-widest2 text-mint-dim block mb-3">
        {{ t.services.eyebrow }}
      </span>
      <h2 class="font-display text-[clamp(1.85rem,2vw_+_1.4rem,2.35rem)] leading-tight text-ink">
        {{ t.services.title }}
      </h2>
    </div>

    <!-- An index, not a pricing grid — read top to bottom like a menu -->
    <div class="border-t border-hairline md:grid md:grid-cols-2 md:gap-x-[clamp(2rem,4vw,5rem)]">
      <button
        v-for="(service, i) in t.services.items"
        :key="service.title"
        type="button"
        class="group flex items-start gap-4 py-6 w-full text-left border-b border-hairline hover:pl-1.5 transition-all duration-300"
        v-reveal="i * 60"
        @click="contactDialog.open({ type: 'service', name: service.title })"
      >
        <span class="font-mono text-2xs text-mint-dim pt-1 tabular-nums shrink-0">
          {{ String(i + 1).padStart(2, '0') }}
        </span>

        <span
          v-if="service.popular"
          class="w-1.5 h-1.5 rounded-full bg-mint mt-2.5 shrink-0"
          :aria-label="t.services.popularLabel"
        />

        <div class="flex-1 min-w-0">
          <div class="flex items-baseline justify-between gap-3 mb-1">
            <h3 class="font-display text-base text-ink group-hover:text-moss-deep transition-colors">
              {{ service.title }}
            </h3>
            <span v-if="service.price" class="font-mono text-sm text-ink/70 shrink-0">${{ service.price }}</span>
          </div>
          <p class="text-xs text-stone leading-relaxed pr-4 mb-2">
            {{ service.description }}
          </p>
          <span class="inline-flex items-center gap-1 text-2xs font-mono uppercase tracking-wider text-stone-light opacity-0 group-hover:opacity-100 group-hover:text-moss-deep transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
            {{ t.services.bookThis }}
            <ArrowRightIcon class="w-3 h-3" />
          </span>
        </div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next'

const { t } = useLocale()
const contactDialog = useContactDialog()
</script>
