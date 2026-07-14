export default defineEventHandler((event) => {
  // Served (not downloaded): text/vcard + Content-Disposition: inline is what makes
  // mobile Safari/Chrome open the native "Add Contact" sheet directly, instead of
  // just saving a .vcf file the user then has to find and open manually.
  setHeader(event, 'Content-Type', 'text/vcard; charset=utf-8')
  setHeader(event, 'Content-Disposition', 'inline; filename="full-house-cleaning.vcf"')

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:;Full House Cleaning;;;',
    'FN:Full House Cleaning',
    'ORG:Full House Cleaning',
    'TEL;TYPE=WORK,VOICE:+1 234 567 890',
    'EMAIL;TYPE=WORK:hello@fullhousecleaning.com',
    'ADR;TYPE=WORK:;;123 Cleaning Ave;City;;;',
    'URL:https://fullhousecleaning.com',
    'END:VCARD',
    ''
  ].join('\r\n')
})
