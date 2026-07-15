// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // Public production URL used to build each card's shareable/QR link
  // (e.g. `${siteUrl}/${card.slug}`). Overridable per-environment via
  // the NUXT_PUBLIC_SITE_URL env var (e.g. on Vercel preview deployments)
  // without needing a code change.
  runtimeConfig: {
    public: {
      siteUrl: 'https://digicard.am'
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'hy' },
      title: 'DigiCard — Թվային այցեքարտի պլատֆորմ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#07070C' },
        {
          name: 'description',
          content: 'Ստեղծիր գեղեցիկ թվային այցեքարտ րոպեների ընթացքում և կիսվիր QR կոդով, NFC քարտով կամ ուղիղ հղումով։'
        },
        { property: 'og:title', content: 'DigiCard — Digital Business Card Platform' },
        {
          property: 'og:description',
          content: 'One digital business card. Unlimited possibilities. Share via QR, NFC, or a direct link.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Serif+Armenian:wght@400;500;600&family=Noto+Sans+Armenian:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
