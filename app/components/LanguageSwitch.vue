<template>
  <div class="inline-flex items-center gap-2.5 font-mono text-2xs uppercase tracking-wider" role="group" aria-label="Language">
    <button
      v-for="(code, i) in locales"
      :key="code"
      type="button"
      class="transition-colors duration-300"
      :class="locale === code ? 'text-brass-light' : 'text-bone/35 hover:text-bone/60'"
      :aria-pressed="locale === code"
      @click="setLocale(code)"
    >
      {{ code }}<span v-if="i < locales.length - 1" class="text-bone/20 ml-2.5" aria-hidden="true">&middot;</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, locales } = useLocale()
</script>
