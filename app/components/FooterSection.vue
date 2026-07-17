<template>
  <footer class="relative bg-ink text-bone pt-14 pb-24 md:pt-20 md:pb-12 px-6 grain overflow-hidden">
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-mint/10 blur-[100px] pointer-events-none" aria-hidden="true" />

    <div class="relative z-10 max-w-lg mx-auto flex flex-col items-center text-center">
      <div class="mb-7 md:mb-9" v-reveal>
        <span v-if="logoAvailable" class="inline-flex items-center justify-center bg-bone rounded-xl px-3 py-2 shadow-lift-sm">
          <img :src="logoPath" :alt="card!.brand.orgName" class="h-6" />
        </span>
        <div v-else class="inline-flex items-center gap-2">
          <LogoMark class="w-5 h-5 text-mint-light" :spark="false" />
          <span class="text-2xs font-mono uppercase tracking-widest2 text-bone/60">{{ card!.brand.orgName }}</span>
        </div>
      </div>

      <div class="flex items-center gap-3 mb-7 md:mb-9" v-reveal="80">
        <a
          :href="`tel:${card!.contact.phoneIntl}`"
          :aria-label="t.contact.call"
          class="w-10 h-10 rounded-full border border-hairline-dark flex items-center justify-center text-bone/70 hover:text-mint-light hover:border-mint-light/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          <PhoneIcon class="w-4 h-4" />
        </a>
        <a
          :href="`mailto:${card!.contact.email}`"
          :aria-label="t.contact.emailLabel"
          class="w-10 h-10 rounded-full border border-hairline-dark flex items-center justify-center text-bone/70 hover:text-mint-light hover:border-mint-light/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          <MailIcon class="w-4 h-4" />
        </a>
        <a
          v-if="card!.contact.instagramUrl"
          :href="card!.contact.instagramUrl"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          class="w-10 h-10 rounded-full border border-hairline-dark flex items-center justify-center text-bone/70 hover:text-mint-light hover:border-mint-light/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          <InstagramIcon class="w-4 h-4" />
        </a>
      </div>

      <div class="w-10 h-px bg-hairline-dark mb-6" aria-hidden="true" />

      <div class="text-2xs uppercase tracking-widest2 text-bone/25">
        &copy; {{ year }} {{ card!.brand.orgName }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { InstagramIcon, PhoneIcon, MailIcon } from 'lucide-vue-next'

const { t } = useLocale()
const card = useCurrentCard()
const year = new Date().getFullYear()

const { available: logoAvailable, check: checkLogo, path: logoPath } = useBrandLogo()
onMounted(checkLogo)
</script>
