<template>
  <section id="gift-card" class="relative py-12 md:py-20 px-6 max-w-[clamp(20rem,85vw,56rem)] mx-auto">
    <div class="text-center md:text-left mb-10 md:mb-0 md:hidden" v-reveal>
      <span class="text-2xs font-mono uppercase tracking-widest2 text-brass-dim block mb-3">
        {{ t.giftCard.eyebrow }}
      </span>
      <h2 class="font-display text-[clamp(1.65rem,5vw,1.95rem)] leading-tight text-ink">
        {{ t.giftCard.titleLine1 }}<br /><em class="italic text-moss-deep">{{ t.giftCard.titleLine2 }}</em>
      </h2>
    </div>

    <div class="md:grid md:grid-cols-2 md:gap-[clamp(2.5rem,6vw,5rem)] md:items-center">
    <!-- The card itself — treated like a real object, not a UI card -->
    <div class="relative mb-4 md:mb-0 px-2 md:px-0 md:order-2" v-reveal="100">
      <div class="absolute inset-x-6 top-8 bottom-0 bg-ink/15 rounded-[28px] blur-2xl" aria-hidden="true" />

      <div
        ref="el"
        class="group relative aspect-[1.586/1] rounded-[22px] bg-gradient-to-br from-ink-soft via-ink to-[#0A1512] text-bone shadow-card border border-hairline-dark overflow-hidden select-none"
        :style="style"
        @pointermove="onMove"
        @pointerleave="onLeave"
      >
        <!-- Embossed watermark mark, oversized and faint — the brand as texture -->
        <LogoMark class="absolute -right-6 -bottom-8 w-40 h-40 text-bone/[0.05]" :spark="false" aria-hidden="true" />

        <!-- Fine current line engraved across the card -->
        <svg class="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 190" preserveAspectRatio="none" fill="none">
          <path d="M-10 130 C 60 90, 110 160, 170 120 S 280 80, 320 130" stroke="#E4C88C" stroke-width="1" />
        </svg>

        <!-- Holographic sheen — sweeps once on hover / focus, never loops -->
        <div
          class="absolute -inset-y-10 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-12 -translate-x-[150%] group-hover:translate-x-[420%] transition-transform duration-[1400ms] ease-out pointer-events-none"
        />

        <div class="relative z-10 h-full flex flex-col justify-between p-6">
          <div class="flex items-start justify-between">
            <div>
              <div class="text-2xs font-mono uppercase tracking-widest2 text-brass-light">
                {{ t.giftCard.cardBrand }}
              </div>
              <div class="text-[9px] text-bone/40 uppercase tracking-wider mt-1">
                {{ t.giftCard.cardSub }}
              </div>
            </div>
            <!-- Chip -->
            <div class="w-9 h-[26px] rounded-[5px] bg-gradient-to-br from-brass-light via-brass to-brass-dim opacity-90 relative overflow-hidden">
              <div class="absolute inset-0.5 grid grid-cols-3 grid-rows-2 gap-px opacity-40">
                <div v-for="n in 6" :key="n" class="border border-ink/30" />
              </div>
            </div>
          </div>

          <div class="flex items-end justify-between">
            <div>
              <div class="text-[9px] text-bone/40 uppercase tracking-wider mb-1">{{ t.giftCard.cardNoLabel }}</div>
              <div class="text-sm font-mono tracking-[0.2em] text-bone/90">FHC&nbsp;9088&nbsp;VIP</div>
            </div>
            <svg class="w-7 h-7 text-brass-light/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M3 3H9V9H3V3ZM3 15H9V21H3V15ZM15 3H21V9H15V3ZM18 18H18.01M15 15H15.01M21 15H21.01M15 21H15.01M21 21H21.01" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="md:order-1 md:text-left">
      <div class="hidden md:block mb-8" v-reveal>
        <span class="text-2xs font-mono uppercase tracking-widest2 text-brass-dim block mb-3">
          {{ t.giftCard.eyebrow }}
        </span>
        <h2 class="font-display text-[clamp(2.2rem,2.5vw_+_1.6rem,2.9rem)] leading-tight text-ink">
          {{ t.giftCard.titleLine1 }}<br /><em class="italic text-moss-deep">{{ t.giftCard.titleLine2 }}</em>
        </h2>
      </div>

      <p class="text-center md:text-left text-2xs font-mono uppercase tracking-wider text-stone-light mb-8">
        {{ t.giftCard.valueLine }}
      </p>

      <p class="text-sm text-stone leading-relaxed text-center md:text-left max-w-[22rem] md:max-w-sm mx-auto md:mx-0 mb-8" v-reveal>
        {{ t.giftCard.description }}
      </p>

      <div class="flex flex-col items-center md:items-start gap-3" v-reveal="80">
        <button
          type="button"
          class="w-full max-w-[17rem] md:max-w-none bg-ink text-bone font-medium py-4 rounded-full shadow-lift hover:bg-ink-soft transition-all duration-300 active:scale-[0.97] text-xs uppercase tracking-widest2"
          @click="contactDialog.open({ type: 'gift' })"
        >
          {{ t.giftCard.ctaPrimary }}
        </button>
        <a
          href="#contact"
          class="text-xs text-stone hover:text-moss-deep underline underline-offset-4 decoration-hairline transition-colors py-2"
        >
          {{ t.giftCard.ctaSecondary }}
        </a>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTilt } from '~/composables/useTilt'

const { el, style, onMove, onLeave } = useTilt(5)
const { t } = useLocale()
const contactDialog = useContactDialog()
</script>
