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

// Page-specific meta — the site-wide default in nuxt.config now describes the
// DigiCard platform homepage, so this route restores Full House Cleaning's own SEO tags.
useHead({
  title: 'Full House Cleaning — Թվային քարտ',
  meta: [
    { name: 'theme-color', content: '#183332' },
    {
      name: 'description',
      content: 'Բուտիկ մաքրման տուն՝ գրպանում։ Պատվիրեք ծառայություն, ուղարկեք նվեր, ասեք բարև — Full House Cleaning-ի թվային քարտը։'
    },
    { property: 'og:title', content: 'Full House Cleaning — Թվային քարտ' },
    {
      property: 'og:description',
      content: 'Բուտիկ մաքրման տուն՝ գրպանում։ Պատվիրեք ծառայություն, ուղարկեք նվեր, ասեք բարև։'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        name: 'Full House Cleaning',
        description: 'Boutique residential and commercial cleaning services.',
        telephone: '+1-234-567-890',
        email: 'hello@fullhousecleaning.com',
        url: 'https://fullhousecleaning.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Cleaning Ave',
          addressLocality: 'City'
        },
        openingHours: 'Mo-Sa 08:00-18:00'
      })
    }
  ]
})
</script>
