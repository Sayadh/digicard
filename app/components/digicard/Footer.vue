<template>
  <footer class="relative bg-digi-black border-t border-digi-line pt-16 pb-10 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div class="sm:col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-digi-indigo to-digi-violet flex items-center justify-center">
              <span class="w-2.5 h-2.5 rounded-[3px] bg-white" />
            </span>
            <span class="text-white font-semibold tracking-tight text-[0.95rem]">DigiCard</span>
          </div>
          <p class="text-sm text-white/40 leading-relaxed max-w-xs">{{ d.footer.tagline }}</p>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-white/35 mb-4">{{ d.footer.navTitle }}</p>
          <ul class="space-y-2.5 text-sm text-white/55">
            <li><a href="#features" class="hover:text-white transition-colors">{{ d.nav.features }}</a></li>
            <li><a href="#how-it-works" class="hover:text-white transition-colors">{{ d.nav.howItWorks }}</a></li>
            <li><a href="#pricing" class="hover:text-white transition-colors">{{ d.nav.pricing }}</a></li>
            <li><a href="#faq" class="hover:text-white transition-colors">{{ d.nav.faq }}</a></li>
          </ul>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-white/35 mb-4">{{ d.footer.contactTitle }}</p>
          <ul class="space-y-2.5 text-sm text-white/55">
            <li><a href="mailto:hello@digicard.am" class="hover:text-white transition-colors">hello@digicard.am</a></li>
            <li><a href="tel:+37455123456" class="hover:text-white transition-colors">+374 93 632 003</a></li>
          </ul>
          <div class="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" class="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
              <Instagram class="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Facebook" class="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
              <Facebook class="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="LinkedIn" class="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
              <Linkedin class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-white/35 mb-4">{{ d.footer.legalTitle }}</p>
          <ul class="space-y-2.5 text-sm text-white/55">
            <li><a href="#" class="hover:text-white transition-colors">{{ d.footer.privacy }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors">{{ d.footer.terms }}</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-digi-line text-xs text-white/30 text-center">
        &copy; {{ year }} DigiCard. {{ d.footer.copyright }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Facebook, Linkedin } from 'lucide-vue-next'

const { d } = useDigicardContent()
const year = new Date().getFullYear()
</script>
