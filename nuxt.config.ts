// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'hy' },
      title: 'Full House Cleaning — Թվային քարտ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#0E1B17' },
        {
          name: 'description',
          content: 'Բուտիկ մաքրման տուն՝ գրպանում։ Պատվիրեք ծառայություն, ուղարկեք նվեր, ասեք բարև — Full House Cleaning-ի թվային քարտը։'
        },
        { property: 'og:title', content: 'Full House Cleaning — Թվային քարտ' },
        {
          property: 'og:description',
          content: 'Բուտիկ մաքրման տուն՝ գրպանում։ Պատվիրեք ծառայություն, ուղարկեք նվեր, ասեք բարև։'
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
    }
  },

  css: ['~/assets/css/main.css']
})
