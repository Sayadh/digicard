<template>
  <div class="min-h-screen bg-digi-white font-sans text-digi-ink selection:bg-digi-indigo/20 selection:text-digi-ink">
    <DigicardNav />
    <DigicardHero />
    <DigicardTrust />
    <DigicardWhatIs />
    <DigicardFeatures />
    <DigicardHowItWorks />
    <DigicardLivePreview />
    <DigicardWhy />
    <DigicardPricing />
    <DigicardFaq />
    <DigicardFinalCta />
    <DigicardFooter />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt (app/components/digicard/*.vue -> <Digicard*>)
const { initFromStorage } = useLocale()

onMounted(() => {
  initFromStorage()
})
</script>
