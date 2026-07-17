<template>
  <div
    class="fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[380px] z-50 md:hidden"
    style="bottom: calc(1.25rem + env(safe-area-inset-bottom));"
    v-reveal="300"
  >
    <div class="flex items-center gap-1.5 p-1.5 bg-lux-black/92 backdrop-blur-xl rounded-full border border-lux-line-dark shadow-lux-card-lg">
      <a
        :href="bookHref"
        target="_blank"
        rel="noopener"
        class="flex-1 flex items-center justify-center gap-2 bg-lux-gold text-lux-black rounded-full font-medium text-2xs uppercase tracking-widest py-3 hover:bg-lux-gold-light transition-all duration-300 active:scale-[0.97]"
      >
        <CalendarIcon class="w-3.5 h-3.5 shrink-0" />
        <span class="hidden min-[380px]:inline">{{ t.nav.book }}</span>
      </a>

      <a
        v-if="socialHref"
        :href="socialHref"
        target="_blank"
        rel="noopener"
        :aria-label="t.nav.instagram"
        class="w-11 h-11 flex items-center justify-center rounded-full text-lux-beige/80 hover:bg-lux-beige/10 hover:text-lux-gold-light transition-all duration-300 active:scale-90"
      >
        <component :is="socialIcon" class="w-4 h-4" />
      </a>

      <a
        v-if="card!.contact.whatsapp"
        :href="waHref"
        target="_blank"
        rel="noopener"
        :aria-label="t.nav.whatsapp"
        class="w-11 h-11 flex items-center justify-center rounded-full text-lux-beige/80 hover:bg-lux-beige/10 hover:text-lux-gold-light transition-all duration-300 active:scale-90"
      >
        <MessageCircleIcon class="w-4 h-4" />
      </a>

      <a
        :href="telHref"
        :aria-label="t.nav.call"
        class="w-11 h-11 flex items-center justify-center rounded-full text-lux-beige/80 hover:bg-lux-beige/10 hover:text-lux-gold-light transition-all duration-300 active:scale-90"
      >
        <PhoneIcon class="w-4 h-4" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CalendarIcon, MessageCircleIcon, PhoneIcon, InstagramIcon, MusicIcon } from 'lucide-vue-next'

const { t } = useLuxuryContent()
const card = useCurrentCard()
const { waLink, telLink } = useCardLinks()

const bookHref = computed(() =>
  waLink(card.value!.contact, `Բարև, ${card.value!.brand.orgName}! Կցանկանայի ամրագրել այցի ժամ։`)
)
const waHref = computed(() => waLink(card.value!.contact))
const telHref = computed(() => telLink(card.value!.contact))

// Prefer Instagram if it exists; fall back to TikTok so the dock never shows a
// dead slot just because one particular platform's link hasn't been confirmed yet.
const socialHref = computed(() => card.value!.contact.instagramUrl ?? card.value!.contact.tiktokUrl ?? null)
const socialIcon = computed(() => (card.value!.contact.instagramUrl ? InstagramIcon : MusicIcon))
</script>
