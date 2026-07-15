<template>
  <section id="faq" class="relative bg-digi-white py-20 md:py-28 px-6">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-12">
        <span v-reveal class="text-xs font-mono uppercase tracking-widest text-digi-indigo block mb-3">
          {{ d.faq.eyebrow }}
        </span>
        <h2 v-reveal="60" class="font-display text-[clamp(1.75rem,2.2vw_+_1.3rem,2.5rem)] text-digi-ink">
          {{ d.faq.title }}
        </h2>
      </div>

      <div class="space-y-2.5">
        <div
          v-for="(item, i) in d.faq.items"
          :key="item.q"
          v-reveal="100 + i * 30"
          class="rounded-2xl border border-digi-line-soft overflow-hidden"
        >
          <button
            type="button"
            class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-digi-mist/60 hover:bg-digi-mist transition-colors"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="text-sm font-medium text-digi-ink">{{ item.q }}</span>
            <ChevronDown class="w-4 h-4 text-digi-muted shrink-0 transition-transform duration-300" :class="openIndex === i ? 'rotate-180' : ''" />
          </button>
          <div
            class="grid transition-all duration-300 ease-out"
            :style="{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }"
          >
            <div class="overflow-hidden">
              <p class="px-5 pb-4 pt-1 text-sm text-digi-muted leading-relaxed">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const { d } = useDigicardContent()
const openIndex = ref<number | null>(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>
