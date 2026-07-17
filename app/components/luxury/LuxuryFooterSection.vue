<template>
  <footer class="relative bg-lux-black pt-14 pb-24 md:pt-16 md:pb-10 px-6">
    <div class="max-w-lg mx-auto flex flex-col items-center text-center">
      <img
        v-if="logoAvailable"
        :src="logoPath"
        :alt="card!.brand.orgName"
        class="w-12 h-12 mb-5 opacity-90"
      />
      <span class="font-luxury text-lg text-lux-ivory mb-1">{{ card!.brand.orgName }}</span>
      <span class="text-2xs font-sans uppercase tracking-widest2 text-lux-gold-light/70 mb-7">
        {{ t.hero.role }}
      </span>

      <div class="flex gap-5 mb-8 text-lux-beige/50">
        <a
          v-if="card!.contact.instagramUrl"
          :href="card!.contact.instagramUrl"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          class="hover:text-lux-gold-light transition-colors"
        >
          <InstagramIcon class="w-4 h-4" />
        </a>
        <a
          v-if="card!.contact.tiktokUrl"
          :href="card!.contact.tiktokUrl"
          target="_blank"
          rel="noopener"
          aria-label="TikTok"
          class="hover:text-lux-gold-light transition-colors"
        >
          <MusicIcon class="w-4 h-4" />
        </a>
        <a :href="`mailto:${card!.contact.email}`" aria-label="Email" class="hover:text-lux-gold-light transition-colors">
          <MailIcon class="w-4 h-4" />
        </a>
      </div>

      <div class="flex gap-4 text-2xs uppercase tracking-wider text-lux-beige/25 mb-5">
        <a href="#" class="hover:text-lux-beige/60 transition-colors">{{ t.footer.privacy }}</a>
        <span>&middot;</span>
        <a href="#" class="hover:text-lux-beige/60 transition-colors">{{ t.footer.terms }}</a>
      </div>

      <div class="text-2xs uppercase tracking-widest2 text-lux-beige/20">
        &copy; {{ year }} {{ card!.brand.orgName }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { InstagramIcon, MusicIcon, MailIcon } from 'lucide-vue-next'

const { t } = useLuxuryContent()
const card = useCurrentCard()
const year = new Date().getFullYear()

const { available: logoAvailable, check: checkLogo, path: logoPath } = useBrandLogo()
onMounted(checkLogo)
</script>
