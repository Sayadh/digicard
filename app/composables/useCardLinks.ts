import type { CardContact } from '#shared/cards'

/**
 * Small link-building helpers shared by any component that needs to turn a
 * CardContact into an actual href — kept here instead of duplicated in every
 * component (Hero, BottomNav, ContactSection all need the same wa.me/maps logic).
 */
export function useCardLinks() {
  function waLink(contact: CardContact, message?: string): string {
    const number = contact.phoneIntl.replace(/[^\d]/g, '')
    const text = message ? `?text=${encodeURIComponent(message)}` : ''
    return `https://wa.me/${number}${text}`
  }

  function telLink(contact: CardContact): string {
    return `tel:${contact.phoneIntl}`
  }

  function mapsLink(contact: CardContact): string | null {
    if (contact.googleMapsUrl) return contact.googleMapsUrl
    if (contact.address) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`
    return null
  }

  return { waLink, telLink, mapsLink }
}
