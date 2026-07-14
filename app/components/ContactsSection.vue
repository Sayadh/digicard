<template>
  <section id="contact" class="relative py-12 md:py-20 px-6 max-w-[clamp(20rem,80vw,48rem)] mx-auto">
    <div class="text-center mb-10 md:mb-14" v-reveal>
      <span class="text-2xs font-mono uppercase tracking-widest2 text-mint-dim block mb-3">
        {{ t.contact.eyebrow }}
      </span>
      <h2 class="font-display text-[clamp(1.85rem,2vw_+_1.4rem,2.35rem)] leading-tight text-ink">
        {{ t.contact.title }}
      </h2>
    </div>

    <!-- A boarding-pass, not a button grid -->
    <div class="relative bg-paper rounded-3xl border border-hairline shadow-lift overflow-hidden" v-reveal="100">

      <div class="grid grid-cols-3 divide-x divide-hairline">
        <a
          v-for="action in quickActions"
          :key="action.label"
          :href="action.href"
          :target="action.external ? '_blank' : undefined"
          :rel="action.external ? 'noopener' : undefined"
          class="flex flex-col items-center justify-center gap-3 py-7 md:py-9 hover:bg-moss/[0.04] transition-colors group"
        >
          <span class="w-11 h-11 rounded-full border border-hairline flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-mint-light group-hover:border-ink group-hover:-translate-y-0.5 transition-all duration-300">
            <component :is="action.icon" class="w-4 h-4" />
          </span>
          <span class="text-2xs font-mono uppercase tracking-wider text-stone">{{ action.label }}</span>
        </a>
      </div>

      <!-- Ticket perforation -->
      <div class="relative h-0" aria-hidden="true">
        <div class="absolute inset-x-7 top-0 border-t border-dashed border-hairline" />
        <div class="absolute -left-3.5 -top-3.5 w-7 h-7 rounded-full bg-bone border border-hairline shadow-[inset_0_1px_2px_rgba(14,27,23,0.06)]" />
        <div class="absolute -right-3.5 -top-3.5 w-7 h-7 rounded-full bg-bone border border-hairline shadow-[inset_0_1px_2px_rgba(14,27,23,0.06)]" />
      </div>

      <div class="px-6 md:px-8 py-2 md:grid md:grid-cols-2 md:gap-x-10">
        <a
          v-for="item in details"
          :key="item.label"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener' : undefined"
          class="flex items-center justify-between gap-3 py-5 border-b border-hairline group"
        >
          <div class="flex items-center gap-3.5 min-w-0">
            <span class="w-9 h-9 rounded-full bg-bone border border-hairline flex items-center justify-center shrink-0 group-hover:border-moss-deep/40 transition-colors">
              <component :is="item.icon" class="w-4 h-4 text-stone group-hover:text-moss-deep transition-colors" />
            </span>
            <div class="min-w-0">
              <span class="text-2xs font-mono uppercase tracking-wider text-stone-light block">{{ item.label }}</span>
              <span class="text-sm text-ink group-hover:text-moss-deep transition-colors truncate block">{{ item.value }}</span>
            </div>
          </div>
          <ChevronRightIcon class="w-4 h-4 text-stone-light group-hover:translate-x-1 group-hover:text-moss-deep transition-all shrink-0" />
        </a>

        <div class="flex items-center gap-3.5 py-5">
          <span class="w-9 h-9 rounded-full bg-bone border border-hairline flex items-center justify-center shrink-0">
            <ClockIcon class="w-4 h-4 text-stone" />
          </span>
          <div>
            <span class="text-2xs font-mono uppercase tracking-wider text-stone-light block">{{ t.contact.hoursLabel }}</span>
            <span class="text-sm text-ink">{{ t.contact.hoursValue }}</span>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-5 py-7 border-t border-hairline bg-ink/[0.02]">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          :aria-label="social.label"
          class="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-ink shadow-lift-sm hover:bg-ink hover:text-mint-light hover:border-ink hover:-translate-y-0.5 transition-all duration-300"
        >
          <component :is="social.icon" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  PhoneIcon,
  MessageCircleIcon,
  NavigationIcon,
  ChevronRightIcon,
  MailIcon,
  GlobeIcon,
  MapPinIcon,
  ClockIcon,
  InstagramIcon,
  MusicIcon,
  FacebookIcon
} from 'lucide-vue-next'

const { t } = useLocale()

const quickActions = computed(() => [
  { label: t.value.contact.call, href: 'tel:+1234567890', icon: PhoneIcon },
  { label: t.value.contact.whatsapp, href: 'https://wa.me/1234567890', icon: MessageCircleIcon, external: true },
  { label: t.value.contact.directions, href: 'https://maps.google.com', icon: NavigationIcon, external: true }
])

const details = computed(() => [
  { label: t.value.contact.phoneLabel, value: '+1 (234) 567-890', href: 'tel:+1234567890', icon: PhoneIcon },
  { label: t.value.contact.emailLabel, value: 'hello@fullhousecleaning.com', href: 'mailto:hello@fullhousecleaning.com', icon: MailIcon },
  { label: t.value.contact.websiteLabel, value: 'fullhousecleaning.com', href: 'https://fullhousecleaning.com', icon: GlobeIcon, external: true },
  { label: t.value.contact.addressLabel, value: t.value.contact.addressValue, href: 'https://maps.google.com', icon: MapPinIcon, external: true }
])

const socials = [
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'TikTok', href: '#', icon: MusicIcon },
  { label: 'Facebook', href: '#', icon: FacebookIcon }
]
</script>
