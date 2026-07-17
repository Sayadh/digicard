<template>
  <section v-if="t.certificates.items.length" class="relative bg-lux-white py-16 md:py-24 px-6">
    <div class="text-center mb-12 md:mb-14" v-reveal>
      <span class="text-2xs font-sans uppercase tracking-widest2 text-lux-bronze block mb-3">
        {{ t.certificates.eyebrow }}
      </span>
      <h2 class="font-luxury text-[clamp(2rem,2.4vw_+_1.5rem,2.75rem)] text-lux-black">
        {{ t.certificates.title }}
      </h2>
    </div>

    <div class="max-w-xl mx-auto">
      <div
        v-for="(item, i) in t.certificates.items"
        :key="item.title"
        class="flex gap-5 items-start"
        v-reveal="i * 60"
      >
        <div class="flex flex-col items-center pt-1.5 shrink-0">
          <span class="w-2 h-2 rounded-full bg-lux-gold" />
          <span
            v-if="i < t.certificates.items.length - 1"
            class="w-px flex-1 min-h-[3.5rem] bg-lux-gold/30 my-1"
          />
        </div>
        <div class="pb-10">
          <h3 class="font-luxury text-lg text-lux-black leading-tight">{{ item.title }}</h3>
          <p v-if="item.issuer || item.year" class="text-2xs font-sans uppercase tracking-wider text-lux-muted mt-1.5">
            {{ [item.issuer, item.year].filter(Boolean).join(' · ') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useLuxuryContent()
</script>
