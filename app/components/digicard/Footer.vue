<template>
  <footer class="relative bg-digi-black border-t border-digi-line pt-16 pb-10 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
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
            <li><a href="tel:+37493632003" class="hover:text-white transition-colors">+374 93 632 003</a></li>
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
const { d } = useDigicardContent()
const year = new Date().getFullYear()
</script>
