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
      title: 'DigiCard — Մեկ թվային այցեքարտ, անսահման հնարավորություններ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#07070C' },
        {
          name: 'description',
          content: 'Ստեղծիր գեղեցիկ թվային այցեքարտ րոպեների ընթացքում և կիսվիր այն QR կոդով, NFC քարտով կամ ուղիղ հղումով։ Կոնտակտային տվյալները միշտ արդիական են՝ առանց նոր այցեքարտեր տպելու։'
        },

        // Open Graph — what people see when the link is shared in Messenger, WhatsApp,
        // Facebook, LinkedIn, iMessage, etc. Absolute URLs required for og:image.
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'DigiCard' },
        { property: 'og:locale', content: 'hy_AM' },
        { property: 'og:url', content: 'https://digicard.am' },
        { property: 'og:title', content: 'DigiCard — Մեկ թվային այցեքարտ, անսահման հնարավորություններ' },
        {
          property: 'og:description',
          content: 'Ստեղծիր գեղեցիկ թվային այցեքարտ րոպեների ընթացքում և կիսվիր այն QR կոդով, NFC քարտով կամ ուղիղ հղումով։'
        },
        { property: 'og:image', content: 'https://digicard.am/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'DigiCard — թվային այցեքարտի պլատֆորմ' },

        // Twitter/X — falls back to og: tags without these, but explicit is more reliable
        // across clients, and summary_large_image is what actually renders the image big.
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'DigiCard — Մեկ թվային այցեքարտ, անսահման հնարավորություններ' },
        {
          name: 'twitter:description',
          content: 'Ստեղծիր գեղեցիկ թվային այցեքարտ րոպեների ընթացքում և կիսվիր այն QR կոդով, NFC քարտով կամ ուղիղ հղումով։'
        },
        { name: 'twitter:image', content: 'https://digicard.am/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://digicard.am' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Serif+Armenian:wght@400;500;600&family=Noto+Sans+Armenian:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
