<template>
  <div class="relative w-[17.5rem] sm:w-[19rem] mx-auto select-none">
    <!-- Phone frame -->
    <div class="relative rounded-[2.75rem] bg-digi-surface-2 p-3 shadow-digi-card-dark border border-white/[0.06]">
      <!-- Notch -->
      <div class="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-digi-black z-20" />

      <!-- Screen — one continuous scrollable page, like a real DigiCard profile -->
      <div class="relative rounded-[2.1rem] overflow-hidden bg-digi-mist aspect-[9/19] flex flex-col">
        <div class="flex-1 overflow-y-auto">
          <!-- Cover / accent band -->
          <div
            class="relative h-24 shrink-0 transition-colors duration-500"
            :style="{ background: `linear-gradient(135deg, ${props.accent}, ${props.accentSecondary})` }"
          >
            <div class="absolute inset-0 opacity-25" style="background-image: radial-gradient(circle at 30% 30%, white 0%, transparent 45%);" />
          </div>

          <div class="px-4 pb-5 -mt-6 flex flex-col items-center text-center">
            <!-- Avatar -->
            <div
              class="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-semibold ring-[3px] ring-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.35)] transition-colors duration-500"
              :style="{ background: `linear-gradient(135deg, ${props.accentSecondary}, ${props.accent})` }"
            >
              {{ props.avatarInitials }}
            </div>

            <p class="mt-3 text-sm font-semibold text-digi-ink leading-tight">{{ props.name }}</p>
            <p class="text-[0.7rem] text-digi-muted mt-0.5">{{ props.profession }}</p>

            <!-- Action chips -->
            <div class="grid grid-cols-3 gap-1.5 w-full mt-4">
              <button
                v-for="action in visibleActions"
                :key="action.key"
                type="button"
                class="flex flex-col items-center justify-center gap-1 rounded-xl bg-white py-2.5 shadow-sm border border-digi-line-soft"
              >
                <component :is="action.icon" class="w-3.5 h-3.5 text-digi-ink" :style="{ color: props.accent }" />
                <span class="text-[0.55rem] font-medium text-digi-muted leading-none">{{ action.label }}</span>
              </button>
            </div>

            <!-- QR -->
            <div class="mt-3 w-full rounded-xl bg-white border border-digi-line-soft p-2.5 flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-md grid grid-cols-4 grid-rows-4 gap-[1.5px] p-1 shrink-0" :style="{ backgroundColor: props.accent }">
                <span v-for="i in 16" :key="i" class="rounded-[1px]" :class="qrPattern[i - 1] ? 'bg-white' : 'bg-transparent'" />
              </div>
              <span class="text-[0.6rem] text-digi-muted text-left leading-tight">{{ props.qrLabel }}</span>
            </div>

            <!-- Services — keep scrolling to see them, just like a real profile page -->
            <div v-if="props.services.length" class="w-full mt-5 pt-4 border-t border-digi-line-soft">
              <p class="text-[0.6rem] font-semibold uppercase tracking-wider text-digi-muted mb-2 text-left">
                {{ props.servicesTitle }}
              </p>
              <div class="space-y-1.5">
                <div
                  v-for="service in props.services"
                  :key="service.name"
                  class="flex items-center justify-between gap-2 rounded-xl bg-white border border-digi-line-soft px-3 py-2"
                >
                  <div class="text-left min-w-0">
                    <p class="text-[0.65rem] font-medium text-digi-ink leading-tight truncate">{{ service.name }}</p>
                    <p class="text-[0.58rem] text-digi-muted">{{ service.price }}</p>
                  </div>
                  <span
                    class="shrink-0 text-[0.55rem] font-semibold rounded-full px-2.5 py-1.5 text-white"
                    :style="{ background: props.accent }"
                  >
                    {{ props.bookLabel }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Phone, MessageCircle, Instagram, Globe, Mail, MapPin } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  accent?: string
  accentSecondary?: string
  name: string
  profession: string
  avatarInitials: string
  qrLabel: string
  labels: {
    call: string
    whatsapp: string
    instagram: string
    website: string
    email: string
    location: string
  }
  visibleKeys?: string[]
  services?: { name: string; price: string }[]
  servicesTitle?: string
  bookLabel?: string
}>(), {
  accent: '#6D5EF9',
  accentSecondary: '#B15CF6',
  visibleKeys: () => ['call', 'whatsapp', 'instagram', 'website', 'email', 'location'],
  services: () => [],
  servicesTitle: 'Services',
  bookLabel: 'Book'
})

const allActions = computed(() => [
  { key: 'call', icon: Phone, label: props.labels.call },
  { key: 'whatsapp', icon: MessageCircle, label: props.labels.whatsapp },
  { key: 'instagram', icon: Instagram, label: props.labels.instagram },
  { key: 'website', icon: Globe, label: props.labels.website },
  { key: 'email', icon: Mail, label: props.labels.email },
  { key: 'location', icon: MapPin, label: props.labels.location }
])

const visibleActions = computed(() => allActions.value.filter(a => props.visibleKeys.includes(a.key)))

// A fixed, decorative "QR-like" pixel pattern — visual only, not a real scannable code.
const qrPattern = [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1]
</script>
