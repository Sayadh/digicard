<template>
  <section class="relative bg-lux-ivory py-16 md:py-24 px-6">
    <div class="text-center mb-12 md:mb-16" v-reveal>
      <span class="text-2xs font-sans uppercase tracking-widest2 text-lux-bronze block mb-3">
        {{ t.services.eyebrow }}
      </span>
      <h2 class="font-luxury text-[clamp(2rem,2.4vw_+_1.5rem,2.75rem)] text-lux-black">
        {{ t.services.title }}
      </h2>
    </div>

    <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
      <a
        v-for="(service, i) in t.services.items"
        :key="service.title"
        :href="serviceHref(service)"
        target="_blank"
        rel="noopener"
        class="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lux-card text-left block"
        v-reveal="i * 60"
      >
        <img
          :src="serviceImage(service, i)"
          :alt="service.title"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-lux-black/85 via-lux-black/15 to-transparent" />

        <div class="relative z-10 h-full flex flex-col justify-end p-4 md:p-5">
          <h3 class="font-luxury text-base md:text-lg text-lux-ivory leading-tight">
            {{ service.title }}
          </h3>
          <p class="text-2xs text-lux-beige/70 mt-1.5 leading-relaxed font-sans line-clamp-2">
            {{ service.description }}
          </p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { LuxuryServiceItem } from '#shared/cards'

const { t } = useLuxuryContent()
const card = useCurrentCard()
const { waLink } = useCardLinks()

function serviceImage(service: LuxuryServiceItem, index: number): string {
  if (service.image) return service.image
  // Deterministic fallback so every service still has a distinct placeholder
  // even before real campaign photography exists for it.
  const fallbackSlugs = ['airtouch', 'balayage', 'blonde-transformation', 'hair-coloring', 'bridal-hair', 'keratin', 'extensions']
  const slug = fallbackSlugs[index % fallbackSlugs.length]
  return `/cards/${card.value!.slug}/gallery/service-${slug}.jpg`
}

function serviceHref(service: LuxuryServiceItem): string {
  return waLink(card.value!.contact, `Բարև, ${card.value!.brand.orgName}! Հետաքրքրված եմ «${service.title}» ծառայությամբ։`)
}
</script>
