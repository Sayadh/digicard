<template>
  <section id="contact" class="relative bg-port-card py-14 md:py-20 px-6 border-y border-port-border">
    <div class="text-center mb-10 md:mb-12" v-reveal>
      <span class="text-2xs font-mono uppercase tracking-widest2 text-port-gold block mb-3">
        {{ t.contact.eyebrow }}
      </span>
      <h2 class="font-display text-[clamp(1.75rem,2.4vw_+_1.3rem,2.5rem)] text-port-title">
        {{ t.contact.title }}
      </h2>
    </div>

    <div class="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3.5 md:gap-4 mb-6">
      <div
        v-for="(channel, i) in channels"
        :key="channel.label"
        class="group relative"
        v-reveal="Math.min(80 + i * 30, 260)"
      >
        <div
          class="absolute -inset-1.5 rounded-[22px] bg-port-gold/10 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
        <a
          :href="channel.href"
          :target="channel.external ? '_blank' : undefined"
          :rel="channel.external ? 'noopener' : undefined"
          class="relative flex flex-col items-center justify-center gap-3.5 py-8 w-full bg-port-bg rounded-3xl border border-port-border transition-all duration-300 group-hover:-translate-y-1 group-hover:border-port-gold/50"
        >
          <span class="w-11 h-11 rounded-full bg-port-gold/10 flex items-center justify-center text-port-gold transition-all duration-300 group-hover:bg-port-gold group-hover:text-port-bg group-hover:scale-110">
            <component :is="channel.icon" class="w-[18px] h-[18px]" />
          </span>
          <span class="text-2xs font-mono uppercase tracking-wider text-port-text transition-colors duration-300 group-hover:text-port-title">{{ channel.label }}</span>
        </a>
      </div>
    </div>

    <div class="max-w-2xl mx-auto flex justify-center" v-reveal="200">
      <a
        :href="`/vcard/${card!.slug}`"
        class="inline-flex items-center justify-center gap-2.5 border border-port-border text-port-title py-3.5 px-7 rounded-full font-medium text-xs uppercase tracking-widest hover:border-port-gold/50 hover:bg-port-gold/10 transition-all duration-300"
      >
        <UserPlusIcon class="w-4 h-4 text-port-gold" />
        {{ t.contact.saveContact }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PhoneIcon, MessageCircleIcon, SendIcon, MailIcon, InstagramIcon, FacebookIcon, LinkedinIcon, UserPlusIcon } from 'lucide-vue-next'

const { t } = usePortfolioContent()
const card = useCurrentCard()
const { waLink, telLink } = useCardLinks()

const channels = computed(() => {
  const c = card.value!.contact
  const list: Array<{ label: string; href: string; icon: unknown; external?: boolean }> = [
    { label: t.value.contact.call, href: telLink(c), icon: PhoneIcon }
  ]
  if (c.whatsapp) {
    list.push({ label: t.value.contact.whatsapp, href: waLink(c), icon: MessageCircleIcon, external: true })
  }
  if (c.telegramUrl) {
    list.push({ label: t.value.contact.telegram, href: c.telegramUrl, icon: SendIcon, external: true })
  }
  list.push({ label: t.value.contact.email, href: `mailto:${c.email}`, icon: MailIcon })
  if (c.instagramUrl) {
    list.push({ label: t.value.contact.instagram, href: c.instagramUrl, icon: InstagramIcon, external: true })
  }
  if (c.facebookUrl) {
    list.push({ label: t.value.contact.facebook, href: c.facebookUrl, icon: FacebookIcon, external: true })
  }
  if (c.linkedinUrl) {
    list.push({ label: t.value.contact.linkedin, href: c.linkedinUrl, icon: LinkedinIcon, external: true })
  }
  return list
})
</script>
