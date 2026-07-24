<template>
  <section class="relative bg-port-card py-16 md:py-24 px-6 border-t border-port-border overflow-hidden">
    <div class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-port-gold/[0.07] blur-[130px] pointer-events-none" aria-hidden="true" />

    <div class="relative max-w-lg mx-auto text-center">
      <span class="text-2xs font-mono uppercase tracking-widest2 text-port-gold block mb-4" v-reveal>
        {{ t.finalCta.eyebrow }}
      </span>
      <h2 class="font-display text-[clamp(1.85rem,2.6vw_+_1.3rem,2.75rem)] leading-tight text-port-title mb-4" v-reveal="60">
        {{ t.finalCta.title }}
      </h2>
      <p class="text-sm md:text-base text-port-text leading-relaxed mb-9" v-reveal="120">
        {{ t.finalCta.body }}
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center" v-reveal="180">
        <a
          :href="`mailto:${card!.contact.email}`"
          class="inline-flex items-center justify-center gap-2.5 bg-port-gold text-port-bg py-3.5 px-7 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-port-gold-light transition-all duration-300 active:scale-[0.97]"
        >
          <MailIcon class="w-3.5 h-3.5" />
          {{ t.finalCta.discuss }}
        </a>
        <a
          v-if="card!.contact.whatsapp"
          :href="waHref"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center gap-2.5 border border-port-border text-port-title py-3.5 px-7 rounded-full font-medium text-xs uppercase tracking-widest hover:border-port-gold/50 hover:text-port-gold-light transition-all duration-300 active:scale-[0.97]"
        >
          <MessageCircleIcon class="w-3.5 h-3.5" />
          {{ t.finalCta.whatsapp }}
        </a>
        <a
          :href="telHref"
          class="inline-flex items-center justify-center gap-2.5 border border-port-border text-port-title py-3.5 px-7 rounded-full font-medium text-xs uppercase tracking-widest hover:border-port-gold/50 hover:text-port-gold-light transition-all duration-300 active:scale-[0.97]"
        >
          <PhoneIcon class="w-3.5 h-3.5" />
          {{ t.finalCta.call }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-vue-next'

const { t } = usePortfolioContent()
const card = useCurrentCard()
const { waLink, telLink } = useCardLinks()

const waHref = computed(() => waLink(card.value!.contact))
const telHref = computed(() => telLink(card.value!.contact))
</script>
