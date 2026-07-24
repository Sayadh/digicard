<template>
  <section id="projects" class="relative bg-port-bg py-14 md:py-20 px-6">
    <div class="text-center mb-10 md:mb-14" v-reveal>
      <span class="text-2xs font-mono uppercase tracking-widest2 text-port-gold block mb-3">
        {{ t.projects.eyebrow }}
      </span>
      <h2 class="font-display text-[clamp(1.75rem,2.4vw_+_1.3rem,2.5rem)] text-port-title">
        {{ t.projects.title }}
      </h2>
    </div>

    <div class="max-w-3xl mx-auto flex flex-col gap-5 md:gap-6">
      <div
        v-for="(project, i) in t.projects.items"
        :id="`project-${project.id}`"
        :key="project.id"
        class="rounded-3xl border border-port-border bg-port-card p-7 md:p-9 scroll-mt-6"
        v-reveal="Math.min(80 + i * 40, 280)"
      >
        <div class="flex items-baseline justify-between gap-4 flex-wrap mb-2">
          <h3 class="font-display text-xl md:text-2xl text-port-title">{{ project.title }}</h3>
          <span class="text-2xs font-mono uppercase tracking-wider text-port-gold-light">{{ project.tagline }}</span>
        </div>

        <p class="text-sm text-port-text leading-relaxed mb-5 max-w-xl">
          {{ project.description }}
        </p>

        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
          <li
            v-for="feature in project.features"
            :key="feature"
            class="flex items-start gap-2 text-2xs text-port-text"
          >
            <CheckIcon class="w-3.5 h-3.5 text-port-gold shrink-0 mt-0.5" />
            <span>{{ feature }}</span>
          </li>
        </ul>

        <a
          :href="projectHref(project)"
          :target="project.href ? '_blank' : undefined"
          :rel="project.href ? 'noopener' : undefined"
          class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-port-gold hover:text-port-gold-light transition-colors duration-300"
        >
          {{ project.ctaLabel }}
          <ArrowUpRightIcon class="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckIcon, ArrowUpRightIcon } from 'lucide-vue-next'
import type { PortfolioProjectItem } from '#shared/cards'

const { t } = usePortfolioContent()
const card = useCurrentCard()
const { waLink } = useCardLinks()

function projectHref(project: PortfolioProjectItem): string {
  if (project.href) return project.href
  // No live link yet (e.g. a bespoke/commissioned offering) — hand off to a
  // WhatsApp inquiry pre-filled with the project name instead of a dead link.
  return waLink(card.value!.contact, t.value.projects.inquiryMessage(project.title))
}
</script>
