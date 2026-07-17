/**
 * @deprecated Card content now lives per-client under shared/cards/ (see
 * shared/cards/types.ts for the shape and shared/cards/full-house-cleaning.ts
 * for an example). This file is kept only as a re-export so any stray old
 * import path doesn't hard-break; prefer importing from '#shared/cards' or
 * '~/composables/useLocale' directly in new code.
 */
export type { Locale, ServiceItem, LocaleContent, CardDefinition } from '#shared/cards'
