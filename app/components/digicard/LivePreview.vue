<template>
  <section id="live-preview" class="relative bg-digi-surface py-20 md:py-28 px-6 overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[20rem] bg-digi-indigo/10 blur-[100px] rounded-full pointer-events-none" />

    <div class="relative max-w-5xl mx-auto">
      <div class="text-center mb-12 md:mb-16">
        <span v-reveal class="text-xs font-mono uppercase tracking-widest text-digi-indigo-light block mb-3">
          {{ d.livePreview.eyebrow }}
        </span>
        <h2 v-reveal="60" class="font-display text-[clamp(1.75rem,2.2vw_+_1.3rem,2.5rem)] text-white mb-3">
          {{ d.livePreview.title }}
        </h2>
        <p v-reveal="100" class="text-white/50 text-sm md:text-base max-w-lg mx-auto">{{ d.livePreview.subtitle }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <!-- Controls -->
        <div v-reveal="140" class="space-y-7 order-2 md:order-1">
          <div>
            <p class="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">{{ d.livePreview.colorLabel }}</p>
            <div class="flex flex-wrap gap-2.5">
              <button
                v-for="(c, i) in colors"
                :key="c.name"
                type="button"
                class="flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all"
                :class="colorIndex === i ? 'border-white/30 bg-white/10 text-white' : 'border-digi-line text-white/50 hover:border-white/20'"
                @click="colorIndex = i"
              >
                <span class="w-3 h-3 rounded-full" :style="{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }" />
                {{ d.livePreview.colorNames[i] }}
              </button>
            </div>
          </div>

          <div>
            <p class="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">{{ d.livePreview.avatarLabel }}</p>
            <div class="flex flex-wrap gap-2.5">
              <button
                v-for="(p, i) in d.livePreview.personas"
                :key="p.initials"
                type="button"
                class="flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all"
                :class="personaIndex === i ? 'border-white/30 bg-white/10 text-white' : 'border-digi-line text-white/50 hover:border-white/20'"
                @click="personaIndex = i"
              >
                <span class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[0.6rem]">{{ p.initials }}</span>
                {{ p.name }}
              </button>
            </div>
          </div>

          <div>
            <p class="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">{{ d.livePreview.socialLabel }}</p>
            <div class="flex flex-wrap gap-2.5">
              <button
                v-for="key in socialKeys"
                :key="key"
                type="button"
                class="flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all"
                :class="visibleKeys.includes(key) ? 'border-white/30 bg-white/10 text-white' : 'border-digi-line text-white/35 hover:border-white/20'"
                @click="toggleKey(key)"
              >
                <component :is="socialIcons[key]" class="w-3.5 h-3.5" />
                {{ d.hero.mockup[key] }}
              </button>
            </div>
          </div>
        </div>

        <!-- Live phone -->
        <div v-reveal="180" class="order-1 md:order-2">
          <DigicardPhoneMockup
            :accent="colors[colorIndex].from"
            :accent-secondary="colors[colorIndex].to"
            :name="d.livePreview.personas[personaIndex].name"
            :profession="d.livePreview.personas[personaIndex].profession"
            :avatar-initials="d.livePreview.personas[personaIndex].initials"
            :qr-label="d.hero.mockup.qrLabel"
            :labels="d.hero.mockup"
            :visible-keys="visibleKeys"
            :services="d.livePreview.services"
            :services-title="d.livePreview.tabServices"
            :book-label="d.livePreview.bookLabel"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Phone, MessageCircle, Instagram, Globe, Mail, MapPin } from 'lucide-vue-next'

const { d } = useDigicardContent()

const colors = [
  { from: '#6D5EF9', to: '#8F7CFF' },
  { from: '#B15CF6', to: '#8F7CFF' },
  { from: '#10B981', to: '#34D399' },
  { from: '#F59E0B', to: '#FBBF24' }
]

const colorIndex = ref(0)
const personaIndex = ref(0)

const socialKeys = ['call', 'whatsapp', 'instagram', 'website', 'email', 'location'] as const
const socialIcons: Record<(typeof socialKeys)[number], unknown> = {
  call: Phone,
  whatsapp: MessageCircle,
  instagram: Instagram,
  website: Globe,
  email: Mail,
  location: MapPin
}

const visibleKeys = ref<string[]>([...socialKeys])

function toggleKey(key: string) {
  if (visibleKeys.value.includes(key)) {
    if (visibleKeys.value.length === 1) return // keep at least one visible
    visibleKeys.value = visibleKeys.value.filter(k => k !== key)
  } else {
    visibleKeys.value = [...visibleKeys.value, key]
  }
}
</script>
