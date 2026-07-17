<template>
  <section id="features" class="relative bg-digi-black py-20 md:py-28 px-6 grain">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8 md:mb-10">
        <span v-reveal class="text-xs font-mono uppercase tracking-widest text-digi-indigo-light block mb-3">
          {{ d.features.eyebrow }}
        </span>
        <h2 v-reveal="60" class="font-display text-[clamp(1.75rem,2.2vw_+_1.3rem,2.5rem)] text-white mb-3">
          {{ d.features.title }}
        </h2>
        <p v-reveal="100" class="text-white/50 text-sm md:text-base max-w-lg mx-auto">{{ d.features.subtitle }}</p>
      </div>

      <div class="grid grid-cols-2 max-[380px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        <div
          v-for="(feature, i) in features"
          :key="feature.label"
          v-reveal="Math.min(120 + i * 20, 400)"
          class="group flex w-full min-h-[104px] flex-col items-center justify-center text-center gap-2.5 rounded-2xl border border-digi-line bg-digi-surface px-3 py-4 transition-all duration-300 hover:border-digi-indigo/40 hover:-translate-y-1 hover:shadow-[0_0_22px_rgba(109,94,249,0.22)]"
        >
          <span class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.07] text-white/75 transition-all duration-300 group-hover:scale-110 group-hover:text-digi-indigo-light group-hover:bg-digi-indigo/10">
            <component :is="feature.icon" class="w-5 h-5" />
          </span>
          <span class="text-[0.78rem] font-medium text-white/75 leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-white/95">
            {{ d.features.items[i] }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Phone, Mail, Globe, MessageCircle, Send, Instagram, Facebook, Linkedin,
  Music2, MapPin, Briefcase, Images, Video, UserPlus, Share2, Palette,
  Image, BarChart3, QrCode, Wifi
} from 'lucide-vue-next'

const { d } = useDigicardContent()

const features = [
  { label: 'phone', icon: Phone },
  { label: 'email', icon: Mail },
  { label: 'website', icon: Globe },
  { label: 'whatsapp', icon: MessageCircle },
  { label: 'telegram', icon: Send },
  { label: 'instagram', icon: Instagram },
  { label: 'facebook', icon: Facebook },
  { label: 'linkedin', icon: Linkedin },
  { label: 'tiktok', icon: Music2 },
  { label: 'maps', icon: MapPin },
  { label: 'portfolio', icon: Briefcase },
  { label: 'gallery', icon: Images },
  { label: 'videos', icon: Video },
  { label: 'contactSaving', icon: UserPlus },
  { label: 'socialLinks', icon: Share2 },
  { label: 'colors', icon: Palette },
  { label: 'logo', icon: Image },
  { label: 'analytics', icon: BarChart3 },
  { label: 'qr', icon: QrCode },
  { label: 'nfc', icon: Wifi }
]
</script>
