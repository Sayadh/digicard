<template>
  <section class="relative py-12 md:py-20 px-6 max-w-[clamp(20rem,80vw,48rem)] mx-auto">
    <div class="text-center mb-10 md:mb-14" v-reveal>
      <span class="text-2xs font-mono uppercase tracking-widest2 text-mint-dim block mb-3">
        {{ t.about.eyebrow }}
      </span>
      <h2 class="font-display text-[clamp(1.85rem,2vw_+_1.4rem,2.35rem)] leading-tight text-ink">
        {{ t.about.title }}
      </h2>
    </div>

    <div class="relative text-center max-w-[clamp(20rem,60vw,32rem)] mx-auto mb-10" v-reveal="100">
      <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[7rem] leading-none text-mint/[0.12] select-none" aria-hidden="true">
        &ldquo;
      </span>
      <p class="relative font-display italic text-[clamp(1.25rem,2vw_+_0.9rem,1.5rem)] leading-snug text-ink">
        {{ t.about.quote }}
      </p>
    </div>

    <p class="text-sm text-stone leading-relaxed text-center max-w-[22rem] md:max-w-md mx-auto" v-reveal="160">
      {{ t.about.paragraph }}
    </p>
  </section>
</template>

<script setup lang="ts">
const { t } = useLocale()
</script>
