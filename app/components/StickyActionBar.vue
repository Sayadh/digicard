<template>
  <div
    class="fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[380px] z-50 md:hidden"
    style="bottom: calc(1.25rem + env(safe-area-inset-bottom));"
    v-reveal="300"
  >
    <div class="flex items-center gap-1.5 p-1.5 bg-gradient-to-br from-hero-from/95 to-hero-to/95 backdrop-blur-xl rounded-full border border-hairline-dark shadow-[0_10px_40px_rgba(102,219,227,0.25)]">
      <a
        :href="`tel:${card!.contact.phoneIntl}`"
        :aria-label="t.dock.call"
        class="w-11 h-11 flex items-center justify-center rounded-full text-bone/80 hover:bg-bone/10 hover:text-mint-light transition-all duration-300 active:scale-90"
      >
        <PhoneIcon class="w-4 h-4" />
      </a>
      <a
        v-if="card!.contact.whatsapp"
        :href="`https://wa.me/${card!.contact.phoneIntl.replace('+', '')}`"
        target="_blank"
        rel="noopener"
        :aria-label="t.dock.whatsapp"
        class="w-11 h-11 flex items-center justify-center rounded-full text-bone/80 hover:bg-bone/10 hover:text-mint-light transition-all duration-300 active:scale-90"
      >
        <MessageCircleIcon class="w-4 h-4" />
      </a>
      <a
        href="#gift-card"
        :aria-label="t.dock.gift"
        class="flex items-center justify-center gap-2 bg-mint text-ink rounded-full font-medium text-2xs uppercase tracking-widest shadow-mint hover:bg-mint-light transition-all duration-300 active:scale-[0.97] w-11 h-11 min-[600px]:w-auto min-[600px]:h-auto min-[600px]:flex-1 min-[600px]:py-3 min-[600px]:px-4 animate-pulseglow min-[600px]:animate-none"
      >
        <GiftIcon class="w-4 h-4 min-[600px]:w-3.5 min-[600px]:h-3.5 shrink-0" />
        <span class="hidden min-[600px]:inline">{{ t.dock.gift }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhoneIcon, MessageCircleIcon, GiftIcon } from 'lucide-vue-next'

const { t } = useLocale()
const card = useCurrentCard()
</script>
