<template>
  <section id="contact" class="relative bg-gradient-to-br from-hero-from to-hero-to text-bone overflow-hidden grain">
    <div class="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-mint/10 blur-[90px] pointer-events-none" aria-hidden="true" />

    <!-- Organic deckle-edge transitions, matching the Hero — the light page flows
         into this dark block at the top and back out at the bottom, never a hard cut. -->
    <svg class="absolute top-0 left-0 w-full h-8 text-bone -scale-y-100" viewBox="0 0 400 32" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
      <path d="M0 18 C 40 6, 70 28, 110 16 C 150 4, 180 26, 220 14 C 260 2, 290 24, 330 12 C 355 5, 380 16, 400 10 L400 32 L0 32 Z" />
    </svg>
    <svg class="absolute bottom-0 left-0 w-full h-8 text-bone" viewBox="0 0 400 32" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
      <path d="M0 18 C 40 6, 70 28, 110 16 C 150 4, 180 26, 220 14 C 260 2, 290 24, 330 12 C 355 5, 380 16, 400 10 L400 32 L0 32 Z" />
    </svg>

    <div class="relative z-10 py-12 md:py-20 px-6 max-w-[clamp(20rem,80vw,48rem)] mx-auto">
      <div class="text-center mb-10 md:mb-14" v-reveal>
        <h2 class="font-display italic text-[clamp(1.6rem,2vw_+_1.15rem,2.05rem)] leading-tight tracking-wide text-bone">
          {{ t.contact.eyebrow }}
        </h2>
      </div>

      <!-- A boarding-pass, not a button grid -->
      <div class="relative" v-reveal="100">
        <div :class="['relative grid divide-x divide-hairline-dark', quickActions.length > 1 ? 'grid-cols-2' : 'grid-cols-1']">
          <a
            v-for="action in quickActions"
            :key="action.label"
            :href="action.href"
            :target="action.external ? '_blank' : undefined"
            :rel="action.external ? 'noopener' : undefined"
            class="flex flex-col items-center justify-center gap-3 py-7 md:py-9 hover:bg-bone/[0.05] transition-colors group"
          >
            <span class="w-11 h-11 rounded-full border border-hairline-dark flex items-center justify-center text-bone/80 group-hover:bg-bone/10 group-hover:text-mint-light group-hover:border-mint-light/40 group-hover:-translate-y-0.5 transition-all duration-300">
              <component :is="action.icon" class="w-4 h-4" />
            </span>
            <span class="text-2xs font-mono uppercase tracking-wider text-bone">{{ action.label }}</span>
          </a>
        </div>

        <!-- Ticket perforation -->
        <div class="relative h-0" aria-hidden="true">
          <div class="absolute inset-x-7 top-0 border-t border-dashed border-hairline-dark" />
        </div>

        <div class="relative px-6 md:px-8 py-2 md:grid md:grid-cols-2 md:gap-x-10">
          <a
            v-for="item in details"
            :key="item.label"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener' : undefined"
            class="flex items-center justify-between gap-3 py-5 border-b border-hairline-dark group"
          >
            <div class="flex items-center gap-3.5 min-w-0">
              <span class="w-9 h-9 rounded-full bg-bone border border-hairline flex items-center justify-center shrink-0 group-hover:border-mint-dim/40 transition-colors">
                <component :is="item.icon" class="w-4 h-4 text-stone group-hover:text-mint-dim transition-colors" />
              </span>
              <div class="min-w-0">
                <span class="text-2xs font-mono uppercase tracking-wider text-bone block">{{ item.label }}</span>
                <span class="text-sm text-bone group-hover:text-mint-light transition-colors truncate block">{{ item.value }}</span>
              </div>
            </div>
            <ChevronRightIcon class="w-4 h-4 text-bone/30 group-hover:translate-x-1 group-hover:text-mint-light transition-all shrink-0" />
          </a>

          <div class="flex items-center gap-3.5 py-5">
            <span class="w-9 h-9 rounded-full bg-bone border border-hairline flex items-center justify-center shrink-0">
              <ClockIcon class="w-4 h-4 text-stone" />
            </span>
            <div>
              <span class="text-2xs font-mono uppercase tracking-wider text-bone block">{{ t.contact.hoursLabel }}</span>
              <span class="text-sm text-bone">{{ t.contact.hoursValue }}</span>
            </div>
          </div>
        </div>

        <div v-if="socials.length" class="relative flex justify-center gap-5 py-7 border-t border-hairline-dark">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener"
            :aria-label="social.label"
            class="w-10 h-10 rounded-full border border-hairline-dark flex items-center justify-center text-bone/70 hover:text-mint-light hover:border-mint-light/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <component :is="social.icon" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  PhoneIcon,
  MessageCircleIcon,
  ChevronRightIcon,
  MailIcon,
  ClockIcon,
  InstagramIcon
} from 'lucide-vue-next'

const { t } = useLocale()
const card = useCurrentCard()

const quickActions = computed(() => {
  const c = card.value!.contact
  const actions = [{ label: t.value.contact.call, href: `tel:${c.phoneIntl}`, icon: PhoneIcon, external: false }]
  if (c.whatsapp) {
    actions.push({ label: t.value.contact.whatsapp, href: `https://wa.me/${c.phoneIntl.replace('+', '')}`, icon: MessageCircleIcon, external: true })
  }
  return actions
})

const details = computed(() => {
  const c = card.value!.contact
  return [
    { label: t.value.contact.phoneLabel, value: c.phoneDisplay, href: `tel:${c.phoneIntl}`, icon: PhoneIcon },
    { label: t.value.contact.emailLabel, value: c.email, href: `mailto:${c.email}`, icon: MailIcon }
  ]
})

const socials = computed(() => {
  const c = card.value!.contact
  return c.instagramUrl ? [{ label: 'Instagram', href: c.instagramUrl, icon: InstagramIcon }] : []
})
</script>
