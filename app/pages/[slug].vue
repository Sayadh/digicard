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

  <div v-else class="min-h-screen bg-bone font-sans text-ink selection:bg-mint-light selection:text-ink" :style="themeVars">
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
import { computed } from 'vue'
import { getCard, buildThemeVars } from '#shared/cards'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const card = getCard(slug!)

if (!card) {
  throw createError({ statusCode: 404, statusMessage: 'Card not found', fatal: true })
}

setCurrentCard(card)

// Cards with a `theme` (dark + accent hex) get their entire palette derived and
// injected here as CSS custom properties on the page root — every cleaning-service
// component already renders through var(--card-*, <original-fallback>) tokens
// (see tailwind.config.ts), so this is the only place theming ever gets wired in.
const themeVars = computed(() => (card.theme ? buildThemeVars(card.theme) : {}))

const { initFromStorage } = useLocale()
onMounted(() => {
  initFromStorage()
})

// QR customization block is a testing/dev tool — build-time flag so it's
// stripped entirely from the production bundle and never shows on the live site.
const isDev = import.meta.dev

const { buildCardUrl } = useDigiCardQr()

// Every card gets its own real share preview: og:title/description already came
// from card.meta, and the image now does too — either an explicit `ogImage` or,
// if the client hasn't supplied dedicated photography yet, the card's own logo
// (still square-safe in every preview surface, and needs zero extra asset work
// when a new card is first created).
const config = useRuntimeConfig()
const siteBase = String(config.public.siteUrl).replace(/\/+$/, '')
const canonicalUrl = buildCardUrl(card.slug)
const ogImagePath = card.meta.ogImage ?? card.brand.logoPath
const ogImageUrl = `${siteBase}${ogImagePath}`
const ogTitle = card.meta.ogTitle ?? card.meta.title
const ogDescription = card.meta.ogDescription ?? card.meta.description

useHead({
  title: card.meta.title,
  meta: [
    { name: 'theme-color', content: card.meta.themeColor },
    { name: 'description', content: card.meta.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: card.brand.orgName },
    { property: 'og:locale', content: 'hy_AM' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:title', content: ogTitle },
    { property: 'og:description', content: ogDescription },
    { property: 'og:image', content: ogImageUrl },
    { property: 'og:image:alt', content: card.brand.orgName },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: ogTitle },
    { name: 'twitter:description', content: ogDescription },
    { name: 'twitter:image', content: ogImageUrl }
  ],
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': card.template === 'luxury-beauty' ? 'HairSalon' : 'HomeAndConstructionBusiness',
        name: card.brand.orgName,
        description: card.meta.description,
        image: ogImageUrl,
        telephone: card.contact.phoneIntl,
        email: card.contact.email,
        url: canonicalUrl,
        ...(card.contact.address
          ? { address: { '@type': 'PostalAddress', streetAddress: card.contact.address } }
          : {}),
        ...(card.contact.openingHoursSchema ? { openingHours: card.contact.openingHoursSchema } : {})
      })
    }
  ]
})
</script>
