<template>
  <div class="min-h-screen bg-bone font-sans text-ink selection:bg-mint-light selection:text-ink">
    <div class="w-full max-w-[65rem] mx-auto bg-bone min-h-screen relative shadow-lift-lg border-x border-hairline">
      <HeroSection />
      <GiftCardSection />
      <ContactsSection />
      <ServicesSection />
      <AboutSection />
      <GalleryShowcaseSection />
      <FooterSection />

      <StickyActionBar />
    </div>

    <ContactDialog />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
const { initFromStorage } = useLocale()

onMounted(() => {
  initFromStorage()
})
</script>
