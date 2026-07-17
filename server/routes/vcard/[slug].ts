import { getCard } from '#shared/cards'

// Lives at /vcard/:slug rather than /:slug.vcf — Nitro's router (rou3) doesn't
// reliably handle a dynamic param combined with a literal dot-suffix in the
// same path segment (it was found to corrupt matching for unrelated single-segment
// page routes, e.g. /full-house-cleaning silently 404ing). A plain nested dynamic
// segment has no such issue. The downloaded file is still named "<slug>.vcf" via
// the Content-Disposition header below, so contact apps still see the right extension.
export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const card = slug ? getCard(slug) : undefined

  if (!card) {
    throw createError({ statusCode: 404, statusMessage: 'Card not found' })
  }

  // Served (not downloaded): text/vcard + Content-Disposition: inline is what makes
  // mobile Safari/Chrome open the native "Add Contact" sheet directly, instead of
  // just saving a .vcf file the user then has to find and open manually.
  setHeader(event, 'Content-Type', 'text/vcard; charset=utf-8')
  setHeader(event, 'Content-Disposition', `inline; filename="${card.slug}.vcf"`)

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${card.brand.orgName};;;`,
    `FN:${card.brand.orgName}`,
    `ORG:${card.brand.orgName}`,
    `TEL;TYPE=WORK,VOICE:${card.contact.phoneIntl}`,
    `EMAIL;TYPE=WORK:${card.contact.email}`
  ]

  if (card.contact.address) {
    lines.push(`ADR;TYPE=WORK:;;${card.contact.address};;;;`)
  }

  lines.push(`URL:https://digicard.am/${card.slug}`, 'END:VCARD', '')

  return lines.join('\r\n')
})
