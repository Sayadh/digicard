<template>
  <section id="contact" class="relative bg-lux-ivory py-16 md:py-24 px-6">
    <div class="text-center mb-12 md:mb-14" v-reveal>
      <span class="text-2xs font-sans uppercase tracking-widest2 text-lux-bronze block mb-3">
        {{ t.contact.eyebrow }}
      </span>
      <h2 class="font-luxury text-[clamp(2rem,2.4vw_+_1.5rem,2.75rem)] text-lux-black">
        {{ t.contact.title }}
      </h2>
    </div>

    <div class="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      <a
        v-for="channel in channels"
        :key="channel.label"
        :href="channel.href"
        :target="channel.external ? '_blank' : undefined"
        :rel="channel.external ? 'noopener' : undefined"
        class="group flex flex-col items-center justify-center gap-3 py-8 bg-lux-white rounded-2xl border border-lux-line shadow-lux-card hover:border-lux-gold/50 transition-all duration-500"
        v-reveal
      >
        <span class="w-10 h-10 rounded-full border border-lux-gold/40 flex items-center justify-center text-lux-black group-hover:bg-lux-gold group-hover:text-lux-white group-hover:border-lux-gold transition-all duration-500">
          <component :is="channel.icon" class="w-4 h-4" />
        </span>
        <span class="text-2xs font-sans uppercase tracking-wider text-lux-muted">{{ channel.label }}</span>
      </a>
    </div>

    <div v-if="card!.contact.address" class="text-center mt-8 text-sm text-lux-muted font-sans" v-reveal>
      {{ card!.contact.address }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PhoneIcon, MessageCircleIcon, InstagramIcon, SendIcon, MapPinIcon, CalendarIcon, MusicIcon } from 'lucide-vue-next'

const { t } = useLuxuryContent()
const card = useCurrentCard()
const { waLink, telLink, mapsLink } = useCardLinks()

const channels = computed(() => {
  const c = card.value!.contact
  const list: Array<{ label: string; href: string; icon: unknown; external?: boolean }> = [
    { label: t.value.contact.call, href: telLink(c), icon: PhoneIcon }
  ]
  if (c.whatsapp) {
    list.push({ label: t.value.contact.whatsapp, href: waLink(c), icon: MessageCircleIcon, external: true })
  }
  if (c.instagramUrl) {
    list.push({ label: t.value.contact.instagram, href: c.instagramUrl, icon: InstagramIcon, external: true })
  }
  if (c.telegramUrl) {
    list.push({ label: t.value.contact.telegram, href: c.telegramUrl, icon: SendIcon, external: true })
  }
  if (c.tiktokUrl) {
    list.push({ label: 'TikTok', href: c.tiktokUrl, icon: MusicIcon, external: true })
  }
  const maps = mapsLink(c)
  if (maps) {
    list.push({ label: t.value.contact.maps, href: maps, icon: MapPinIcon, external: true })
  }
  if (c.bookingUrl) {
    list.push({ label: t.value.contact.booking, href: c.bookingUrl, icon: CalendarIcon, external: true })
  }
  return list
})
</script>
