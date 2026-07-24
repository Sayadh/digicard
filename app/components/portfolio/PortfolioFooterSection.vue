<template>
  <footer class="relative bg-port-bg text-port-title pt-12 pb-24 md:pt-16 md:pb-10 px-6">
    <div class="max-w-lg mx-auto flex flex-col items-center text-center">
      <span class="font-display text-lg text-port-title mb-1.5" v-reveal>{{ card!.brand.orgName }}</span>
      <p class="text-2xs uppercase tracking-widest2 text-port-text mb-7" v-reveal="60">
        {{ t.footer.tagline }}
      </p>

      <nav class="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 mb-7 text-2xs text-port-text" v-reveal="100">
        <template v-for="(project, i) in t.projects.items" :key="project.id">
          <a :href="`#project-${project.id}`" class="hover:text-port-gold-light transition-colors">{{ project.title }}</a>
          <span v-if="i < t.projects.items.length - 1" class="text-port-border">&middot;</span>
        </template>
      </nav>

      <div class="w-10 h-px bg-port-border mb-6" aria-hidden="true" />

      <div class="text-2xs uppercase tracking-widest2 text-port-text/60">
        &copy; {{ year }} {{ card!.brand.orgName }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = usePortfolioContent()
const card = useCurrentCard()
const year = new Date().getFullYear()
</script>
