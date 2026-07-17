<template>
  <section id="how-it-works" class="relative bg-digi-white py-14 md:py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-10 md:mb-14">
        <span v-reveal class="text-xs font-mono uppercase tracking-widest text-digi-indigo block mb-3">
          {{ d.howItWorks.eyebrow }}
        </span>
        <h2 v-reveal="60" class="font-display text-[clamp(1.5rem,2vw_+_1.15rem,2.15rem)] text-digi-ink">
          {{ d.howItWorks.title }}
        </h2>
      </div>

      <!-- Mobile (<sm): vertical timeline, number+icon on the left, text on the right -->
      <div class="sm:hidden">
        <div
          v-for="(step, i) in d.howItWorks.steps"
          :key="step.title"
          v-reveal="120 + i * 60"
          class="group flex gap-4"
          :class="i < d.howItWorks.steps.length - 1 ? 'pb-8' : ''"
        >
          <div class="flex flex-col items-center shrink-0">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-xl bg-digi-ink text-white font-display text-sm transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(109,94,249,0.4)]"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </div>
            <div
              v-if="i < d.howItWorks.steps.length - 1"
              class="w-px flex-1 mt-2 bg-gradient-to-b from-digi-indigo/25 to-digi-violet/10"
            />
          </div>

          <div class="pt-0.5 transition-transform duration-300 ease-out group-hover:-translate-y-1">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-digi-mist text-digi-indigo mb-3 transition-transform duration-300 group-hover:scale-110">
              <component :is="icons[i]" class="w-4 h-4" />
            </span>
            <h3 class="font-semibold text-digi-ink mb-1.5 leading-snug">{{ step.title }}</h3>
            <p class="text-[0.925rem] text-digi-muted leading-relaxed line-clamp-2">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- Tablet/Desktop (>=sm): horizontal columns; connecting line only at the 4-col desktop breakpoint -->
      <div class="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 relative">
        <div
          class="hidden md:block absolute top-[1.375rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-digi-indigo/0 via-digi-indigo/20 to-digi-violet/0"
          aria-hidden="true"
        />

        <div
          v-for="(step, i) in d.howItWorks.steps"
          :key="step.title"
          v-reveal="120 + i * 60"
          class="group relative text-center md:text-left transition-transform duration-300 ease-out hover:-translate-y-1"
        >
          <div
            class="relative z-10 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-digi-ink text-white font-display text-sm mb-4 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(109,94,249,0.4)]"
          >
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <span class="flex md:inline-flex items-center justify-center w-8 h-8 rounded-xl bg-digi-mist text-digi-indigo mb-3 mx-auto md:mx-0 transition-transform duration-300 group-hover:scale-110">
            <component :is="icons[i]" class="w-4 h-4" />
          </span>
          <h3 class="font-semibold text-digi-ink mb-1.5 leading-snug">{{ step.title }}</h3>
          <p class="text-[0.925rem] text-digi-muted leading-relaxed line-clamp-2">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Sparkles, Edit3, Share2, TrendingUp } from 'lucide-vue-next'

const { d } = useDigicardContent()
const icons = [Sparkles, Edit3, Share2, TrendingUp]
</script>
