<template>
  <footer class="relative bg-ink text-bone pt-12 pb-24 md:pt-16 md:pb-10 px-6 grain">
    <div class="relative z-10 max-w-lg mx-auto flex flex-col items-center text-center">
      <div class="flex items-center gap-2 mb-6 md:mb-8" v-reveal>
        <LogoMark class="w-5 h-5 text-brass-light" :spark="false" />
        <span class="text-2xs font-mono uppercase tracking-widest2 text-bone/60">Full House Cleaning</span>
      </div>

      <div class="flex flex-col gap-2 text-sm text-bone/50 mb-6 md:mb-8">
        <a href="tel:+1234567890" class="hover:text-brass-light transition-colors">+1 (234) 567-890</a>
        <a href="mailto:hello@fullhousecleaning.com" class="hover:text-brass-light transition-colors">hello@fullhousecleaning.com</a>
      </div>

      <div class="flex gap-6 mb-6 md:mb-8 text-bone/40">
        <a href="#" aria-label="Instagram" class="hover:text-brass-light transition-colors">
          <InstagramIcon class="w-4 h-4" />
        </a>
        <a href="#" aria-label="TikTok" class="hover:text-brass-light transition-colors">
          <MusicIcon class="w-4 h-4" />
        </a>
        <a href="#" aria-label="Facebook" class="hover:text-brass-light transition-colors">
          <FacebookIcon class="w-4 h-4" />
        </a>
      </div>

      <div class="flex gap-4 text-2xs uppercase tracking-wider text-bone/25 mb-5 md:mb-6">
        <a href="#" class="hover:text-bone/60 transition-colors">{{ t.footer.privacy }}</a>
        <span>&middot;</span>
        <a href="#" class="hover:text-bone/60 transition-colors">{{ t.footer.terms }}</a>
      </div>

      <div class="text-2xs uppercase tracking-widest2 text-bone/20">
        &copy; {{ year }} Full House Cleaning
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { InstagramIcon, MusicIcon, FacebookIcon } from 'lucide-vue-next'

const { t } = useLocale()
const year = new Date().getFullYear()
</script>
