<template>
  <header class="sticky top-0 z-40 border-b border-digi-line bg-digi-black/75 backdrop-blur-xl">
    <nav class="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
      <a href="#top" class="flex items-center gap-2 shrink-0">
        <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-digi-indigo to-digi-violet flex items-center justify-center">
          <span class="w-2.5 h-2.5 rounded-[3px] bg-white" />
        </span>
        <span class="text-white font-semibold tracking-tight text-[0.95rem]">DigiCard</span>
      </a>

      <div class="hidden md:flex items-center gap-8 text-sm text-white/60">
        <a href="#features" class="hover:text-white transition-colors">{{ d.nav.features }}</a>
        <a href="#how-it-works" class="hover:text-white transition-colors">{{ d.nav.howItWorks }}</a>
        <a href="#pricing" class="hover:text-white transition-colors">{{ d.nav.pricing }}</a>
        <a href="#faq" class="hover:text-white transition-colors">{{ d.nav.faq }}</a>
      </div>

      <div class="flex items-center gap-4 md:gap-5">
        <div class="hidden sm:flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider" role="group" aria-label="Language">
          <button
            v-for="(code, i) in locales"
            :key="code"
            type="button"
            class="transition-colors duration-200"
            :class="locale === code ? 'text-white' : 'text-white/30 hover:text-white/60'"
            :aria-pressed="locale === code"
            @click="setLocale(code)"
          >
            {{ code }}<span v-if="i < locales.length - 1" class="text-white/15 ml-2" aria-hidden="true">&middot;</span>
          </button>
        </div>

        <a
          href="#pricing"
          class="inline-flex items-center justify-center rounded-full bg-white text-digi-black text-xs font-semibold px-4 py-2 hover:bg-white/90 transition-colors"
        >
          {{ d.nav.cta }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { d } = useDigicardContent()
const { locale, setLocale, locales } = useLocale()
</script>
