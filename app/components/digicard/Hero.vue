<template>
  <section id="top" class="relative bg-digi-black overflow-hidden grain">
    <!-- Grid pattern -->
    <div
      class="absolute inset-0 opacity-[0.35] pointer-events-none"
      style="background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 56px 56px; mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);"
    />

    <!-- Glow orbs -->
    <div class="absolute -top-24 -left-20 w-[26rem] h-[26rem] rounded-full bg-digi-indigo/25 blur-[110px] animate-digiorb pointer-events-none" />
    <div class="absolute top-1/3 -right-24 w-[24rem] h-[24rem] rounded-full bg-digi-violet/20 blur-[110px] animate-digiorb pointer-events-none" style="animation-delay: -6s;" />

    <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-28 pb-20 md:pt-32 md:pb-28 grid md:grid-cols-2 gap-16 md:gap-10 items-center">
      <div class="text-center md:text-left">
        <span
          v-reveal
          class="inline-flex items-center gap-2 rounded-full border border-digi-line bg-white/[0.04] px-4 py-1.5 text-[0.7rem] font-medium text-white/70 mb-7"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-digi-indigo-light" />
          {{ d.hero.badge }}
        </span>

        <h1 v-reveal="60" class="font-display text-[clamp(2.25rem,3.4vw_+_1.5rem,3.75rem)] leading-[1.05] tracking-tight text-white mb-5">
          {{ d.hero.title1 }}<br />
          <span class="bg-gradient-to-r from-digi-indigo-light to-digi-violet bg-clip-text text-transparent">{{ d.hero.title2 }}</span>
        </h1>

        <p v-reveal="120" class="text-[0.95rem] md:text-base text-white/55 leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
          {{ d.hero.subtitle }}
        </p>

        <div v-reveal="180" class="flex flex-col sm:flex-row gap-3 max-w-sm sm:max-w-none mx-auto md:mx-0 mb-6">
          <a
            href="#pricing"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-white text-digi-black text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition-all active:scale-[0.97]"
          >
            {{ d.hero.ctaPrimary }}
            <ArrowRight class="w-4 h-4" />
          </a>
          <a
            href="#live-preview"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-digi-line text-white/80 text-sm font-medium px-6 py-3.5 hover:bg-white/[0.06] hover:text-white transition-all active:scale-[0.97]"
          >
            <PlayCircle class="w-4 h-4" />
            {{ d.hero.ctaSecondary }}
          </a>
        </div>

        <p v-reveal="220" class="text-xs text-white/35">{{ d.hero.proofNote }}</p>
      </div>

      <div class="relative" v-reveal="140">
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-64 h-64 rounded-full bg-gradient-to-br from-digi-indigo to-digi-violet opacity-30 blur-[70px]" />
        </div>

        <div class="relative animate-digifloat">
          <DigicardPhoneMockup
            :name="d.hero.mockup.name"
            :profession="d.hero.mockup.profession"
            avatar-initials="ԱՀ"
            :qr-label="d.hero.mockup.qrLabel"
            :labels="d.hero.mockup"
            :services="d.livePreview.services"
            :services-title="d.livePreview.tabServices"
            :book-label="d.livePreview.bookLabel"
          />
        </div>

        <!-- Floating detail cards -->
        <div class="hidden sm:flex absolute -left-6 top-10 items-center gap-2 rounded-2xl bg-digi-surface border border-digi-line px-3.5 py-2.5 shadow-digi-card-dark animate-digifloat" style="animation-delay: -2s;">
          <span class="w-7 h-7 rounded-full bg-digi-indigo/20 flex items-center justify-center">
            <QrCode class="w-3.5 h-3.5 text-digi-indigo-light" />
          </span>
          <span class="text-xs text-white/70 font-medium">QR &middot; NFC</span>
        </div>

        <div class="hidden sm:flex absolute -right-4 bottom-16 items-center gap-2 rounded-2xl bg-digi-surface border border-digi-line px-3.5 py-2.5 shadow-digi-card-dark animate-digifloat" style="animation-delay: -4s;">
          <span class="w-7 h-7 rounded-full bg-digi-violet/20 flex items-center justify-center">
            <CheckCheck class="w-3.5 h-3.5 text-digi-violet" />
          </span>
          <span class="text-xs text-white/70 font-medium">Always up to date</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, PlayCircle, QrCode, CheckCheck } from 'lucide-vue-next'

const { d } = useDigicardContent()
</script>
