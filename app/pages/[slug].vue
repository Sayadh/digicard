<template>
  <div v-if="card!.template === 'luxury-beauty'" class="min-h-screen bg-lux-ivory font-sans text-lux-text selection:bg-lux-gold/30 selection:text-lux-black">
    <LuxuryHeroSection />
    <LuxuryAboutSection />
    <LuxuryServicesSection />
    <LuxuryGallerySection />
    <LuxuryTestimonialsSection />
    <LuxuryCertificatesSection />
    <LuxuryContactSection />
    <LuxuryFooterSection />

    <LuxuryBottomNav />
  </div>

  <div v-else class="min-h-screen bg-bone font-sans text-ink selection:bg-mint-light selection:text-ink">
    <div class="w-full max-w-[65rem] mx-auto bg-bone min-h-screen relative shadow-lift-lg border-x border-hairline">
      <HeroSection />
      <GiftCardSection />
      <ContactsSection />
      <ServicesSection />
      <AboutSection />
      <GalleryShowcaseSection />
      <QrCodeSection v-if="isDev" />
      <FooterSection />

      <StickyActionBar />
    </div>

    <ContactDialog />
  </div>
</template>

<script setup lang="ts">
// One route, every client card: the slug in the URL is looked up in the
// shared card registry (shared/cards/index.ts) and everything below —
// section components, i18n content, contact links, the QR code, the vCard
// download — resolves from that single CardDefinition. Onboarding a new
// client is purely a shared/cards/<slug>.ts addition; this page never changes.
import { getCard } from '#shared/cards'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const card = getCard(slug!)

if (!card) {
  throw createError({ statusCode: 404, statusMessage: 'Card not found', fatal: true })
}

setCurrentCard(card)

const { initFromStorage } = useLocale()
onMounted(() => {
  initFromStorage()
})

// QR customization block is a testing/dev tool — build-time flag so it's
// stripped entirely from the production bundle and never shows on the live site.
const isDev = import.meta.dev

const { buildCardUrl } = useDigiCardQr()

useHead({
  title: card.meta.title,
  meta: [
    { name: 'theme-color', content: card.meta.themeColor },
    { name: 'description', content: card.meta.description },
    { property: 'og:title', content: card.meta.ogTitle ?? card.meta.title },
    { property: 'og:description', content: card.meta.ogDescription ?? card.meta.description }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': card.template === 'luxury-beauty' ? 'HairSalon' : 'HomeAndConstructionBusiness',
        name: card.brand.orgName,
        description: card.meta.description,
        telephone: card.contact.phoneIntl,
        email: card.contact.email,
        url: buildCardUrl(card.slug),
        ...(card.contact.address
          ? { address: { '@type': 'PostalAddress', streetAddress: card.contact.address } }
          : {}),
        ...(card.contact.openingHoursSchema ? { openingHours: card.contact.openingHoursSchema } : {})
      })
    }
  ]
})
</script>
