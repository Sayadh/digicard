<template>
  <section class="relative bg-lux-black py-16 md:py-24 px-6">
    <div class="text-center mb-12 md:mb-16" v-reveal>
      <span class="text-2xs font-sans uppercase tracking-widest2 text-lux-gold block mb-3">
        {{ t.gallery.eyebrow }}
      </span>
      <h2 class="font-luxury text-[clamp(2rem,2.4vw_+_1.5rem,2.75rem)] text-lux-ivory">
        {{ t.gallery.title }}
      </h2>
    </div>

    <!-- Pinterest-style masonry via CSS columns — never an equal grid, images
         keep their natural aspect ratio so the layout breathes unevenly. -->
    <div class="max-w-4xl mx-auto columns-2 md:columns-3 gap-3 md:gap-4">
      <div
        v-for="(photo, i) in card!.gallery.photos"
        :key="photo.src"
        class="mb-3 md:mb-4 break-inside-avoid rounded-2xl overflow-hidden"
        v-reveal="i * 50"
      >
        <img :src="photo.src" :alt="`${t.gallery.title} ${i + 1}`" class="w-full h-auto block" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useLuxuryContent()
const card = useCurrentCard()
</script>
