/**
 * Shared card data model — the single source of truth for a client's digital
 * business card. Lives under shared/ (not app/ or server/) so both the Nuxt
 * app (pages, components, composables) and the Nitro server (the .vcf route)
 * can import the exact same registry via the `#shared/cards` alias, with no
 * duplicated types and no risk of the two drifting apart.
 *
 * Adding a new client card is a two-step, isolated change:
 *   1. Create shared/cards/<slug>.ts implementing CardDefinition.
 *   2. Register it in shared/cards/index.ts.
 * Nothing else in the app needs to change — every section component, the
 * page route, and the vCard route all resolve everything from this object.
 */

import type { CardTheme } from './theme'

export type Locale = 'hy' | 'en' | 'ru'

export interface ServiceItem {
  title: string
  description: string
  /** Optional — omit to show the service without a listed price (e.g. "contact for quote" style offerings). */
  price?: string
  popular?: boolean
}

export interface LocaleContent {
  hero: {
    title1: string
    title2: string
    tagline: string
    seeContacts: string
    share: string
    shareCopied: string
    scroll: string
  }
  giftCard: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    cardBrand: string
    cardSub: string
    cardNoLabel: string
    valueLine: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  services: {
    eyebrow: string
    title: string
    bookThis: string
    popularLabel: string
    items: ServiceItem[]
  }
  contact: {
    eyebrow: string
    title: string
    call: string
    whatsapp: string
    phoneLabel: string
    emailLabel: string
    hoursLabel: string
    hoursValue: string
  }
  about: {
    eyebrow: string
    title: string
    quote: string
    paragraph: string
  }
  gallery: {
    eyebrow: string
    title: string
    photoLabel: string
    videoLabel: string
    comingSoon: string
    close: string
  }
  footer: {
    privacy: string
    terms: string
  }
  dock: {
    call: string
    whatsapp: string
    gift: string
  }
  dialog: {
    giftTitle: string
    giftEyebrow: string
    bookTitlePrefix: string
    nameLabel: string
    namePlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    messageLabel: string
    messageDefaultGift: string
    messageDefaultBook: (service: string) => string
    submit: string
    successTitle: string
    successBody: string
    close: string
    cancel: string
    required: string
  }
}

export interface CardGalleryPhoto {
  src: string
  /** Renders wider (spans 2 grid columns on mobile) — use for the lead/hero shot. */
  wide?: boolean
}

export interface CardGalleryVideo {
  poster: string
  mp4: string
}

export interface CardGallery {
  photos: CardGalleryPhoto[]
  videos: CardGalleryVideo[]
}

export interface CardMeta {
  /** <title> and og:title fallback */
  title: string
  /** meta description and og:description fallback */
  description: string
  /** theme-color meta tag, matches the card's dark hero background */
  themeColor: string
  ogTitle?: string
  ogDescription?: string
  /**
   * Public path (served from /public) used as og:image / twitter:image for link
   * previews (WhatsApp, Instagram, iMessage, etc.) when this card's URL is shared.
   * Omit to fall back to `brand.logoPath` automatically — a square logo still
   * previews fine and means every card gets a correct share image "for free"
   * with zero extra asset work when it's first created.
   */
  ogImage?: string
}

export interface CardBrand {
  /** Organization / display name — also used as vCard ORG and JSON-LD name. */
  orgName: string
  /** Public path to the logo asset (served from /public), e.g. '/cards/acme/logo.jpg'. */
  logoPath: string
  /** Primary brand accent — drives the QR code's foreground color. */
  accentColor: string
  /** Secondary accent — used for the QR gradient preset. */
  accentColorSecondary: string
  /**
   * Optional muted/looping background video for the hero (luxury-beauty template only).
   * Public path, e.g. '/cards/acme/hero-bg.mp4'. Should be pre-compressed, no audio track
   * (rendered with autoplay+muted+loop). Omit to keep the static hero-portrait.jpg only.
   */
  heroVideoPath?: string
}

export interface CardContact {
  /** E.164-ish international format, no spaces — used for tel:, wa.me, and the vCard TEL field. */
  phoneIntl: string
  /** Human-friendly display format shown in the UI. */
  phoneDisplay: string
  email: string
  /** Whether to show the WhatsApp quick-action (assumes phoneIntl is WhatsApp-reachable). */
  whatsapp: boolean
  instagramUrl?: string
  telegramUrl?: string
  tiktokUrl?: string
  /**
   * Explicit Google Maps link, if you have a precise place pin. When omitted,
   * components that need a maps link derive one from `address` automatically
   * (a plain Google Maps text-search URL), so you never have to guess a place ID.
   */
  googleMapsUrl?: string
  /** External booking system link, if the business uses one instead of/alongside call+WhatsApp. */
  bookingUrl?: string
  /** Optional — omit when the business has no public street address to show. */
  address?: string
  /** schema.org openingHours format, e.g. 'Mo-Su 09:00-18:00'. Omit to leave it out of JSON-LD. */
  openingHoursSchema?: string
}

/**
 * Which section-component family renders this card. 'cleaning-service' is the
 * original boarding-pass-style template (Hero/GiftCard/Services/Contact/About/
 * Gallery, driven by `content`). 'luxury-beauty' is an editorial, black/gold
 * template for premium personal-brand businesses (driven by `luxuryContent`).
 * Adding a third template later means: add the value here, add its section
 * components, add one branch in pages/[slug].vue — existing templates untouched.
 */
export type CardTemplate = 'cleaning-service' | 'luxury-beauty'

export interface LuxuryServiceItem {
  title: string
  description: string
  /** Public path to a photo representing this service — omit to show a tasteful placeholder instead. */
  image?: string
}

export interface LuxuryTestimonial {
  quote: string
  name: string
  /** 1-5. Defaults to 5 if omitted. */
  rating?: number
}

export interface LuxuryCertificate {
  title: string
  issuer?: string
  year?: string
}

export interface LuxuryLocaleContent {
  hero: {
    name: string
    role: string
    studioLabel: string
    tags: string[]
    /** Single hero CTA — scrolls to the on-page #contact section (all channels live there). */
    ctaContacts: string
  }
  about: {
    eyebrow: string
    quote: string
    paragraph: string
  }
  services: {
    eyebrow: string
    title: string
    items: LuxuryServiceItem[]
  }
  gallery: {
    eyebrow: string
    title: string
  }
  testimonials: {
    eyebrow: string
    title: string
    /** Leave empty until real client reviews exist — the section hides itself when there are none. */
    items: LuxuryTestimonial[]
  }
  certificates: {
    eyebrow: string
    title: string
    items: LuxuryCertificate[]
  }
  contact: {
    eyebrow: string
    title: string
    call: string
    whatsapp: string
    telegram: string
    instagram: string
    maps: string
    booking: string
    phoneLabel: string
    emailLabel: string
    hoursLabel: string
    hoursValue: string
  }
  nav: {
    book: string
    instagram: string
    whatsapp: string
    call: string
  }
  footer: {
    privacy: string
    terms: string
  }
}

export interface CardDefinition {
  /** URL slug — becomes the route /[slug] and the vCard route /[slug].vcf. */
  slug: string
  /** Defaults to 'cleaning-service' when omitted, so existing cards need no change. */
  template?: CardTemplate
  meta: CardMeta
  brand: CardBrand
  contact: CardContact
  gallery: CardGallery
  /**
   * 'cleaning-service' template only. Two brand hex colors that the entire
   * page's palette (backgrounds, text, hairlines, shadows, accent states) is
   * derived from — see shared/cards/theme.ts. Omit to keep the template's
   * original charcoal-green/mint look untouched.
   */
  theme?: CardTheme
  /** Required for template 'cleaning-service'. */
  content?: Record<Locale, LocaleContent>
  /** Required for template 'luxury-beauty'. */
  luxuryContent?: Record<Locale, LuxuryLocaleContent>
}
