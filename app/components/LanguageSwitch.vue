<template>
  <div
    class="inline-flex items-center gap-1 rounded-full border p-1"
    :class="borderClass"
    role="group"
    aria-label="Language"
  >
    <button
      v-for="code in locales"
      :key="code"
      type="button"
      class="px-3 py-1 rounded-full font-mono text-2xs uppercase tracking-wider transition-all duration-300"
      :class="locale === code ? activeClass : inactiveClass"
      :aria-pressed="locale === code"
      @click="setLocale(code)"
    >
      {{ code }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { locale, setLocale, locales } = useLocale()
const card = useCurrentCard()

// This component is shared across every template, each with its own accent —
// the active-language chip needs to match whichever palette is live instead
// of hardcoding one template's color onto all the others.
const borderClass = computed(() => {
  switch (card.value?.template) {
    case 'luxury-beauty': return 'border-lux-line-dark'
    case 'portfolio': return 'border-port-border'
    default: return 'border-hairline-dark'
  }
})
const activeClass = computed(() => {
  switch (card.value?.template) {
    case 'luxury-beauty': return 'bg-lux-gold text-lux-black font-medium'
    case 'portfolio': return 'bg-port-gold text-port-bg font-medium'
    default: return 'bg-mint-light text-ink font-medium'
  }
})
const inactiveClass = 'text-bone/50 hover:text-bone/80'
</script>
