import { getCard } from '#shared/cards'

// Receives every ContactDialog submission (booking or gift-card request) from
// any card and relays it to Telegram — privately, per-card. The bot token is a
// single server-only secret (NUXT_TELEGRAM_BOT_TOKEN); *who* gets notified for
// a given card comes from that card's own `contact.notifyTelegramChatIds`, so
// each client only ever sees their own leads, never another client's.
export default defineEventHandler(async (event) => {
  const body = await readBody<{
    slug?: string
    type?: 'gift' | 'book'
    name?: string
    phone?: string
    message?: string
  }>(event)

  const slug = body?.slug
  const card = slug ? getCard(slug) : undefined

  if (!card) {
    throw createError({ statusCode: 404, statusMessage: 'Card not found' })
  }

  const name = body?.name?.trim()
  const phone = body?.phone?.trim()

  if (!name || !phone) {
    throw createError({ statusCode: 400, statusMessage: 'Name and phone are required' })
  }

  const config = useRuntimeConfig()
  const token = config.telegramBotToken
  const chatIds = card.contact.notifyTelegramChatIds ?? []

  // Not configured yet for this card — not an error, just nothing to deliver.
  // The client falls back to mailto: in this case (see ContactDialog.vue).
  if (!token || chatIds.length === 0) {
    return { ok: true, delivered: 0 }
  }

  const kindLabel = body?.type === 'gift' ? 'Նվեր-քարտ' : 'Ամրագրում'
  const text = [
    `🔔 ${kindLabel} — ${card.brand.orgName}`,
    '',
    `Անուն: ${name}`,
    `Հեռախոս: ${phone}`,
    body?.message ? `\nՀաղորդագրություն:\n${body.message}` : undefined
  ]
    .filter(Boolean)
    .join('\n')

  const results = await Promise.allSettled(
    chatIds.map((chatId) =>
      $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        body: { chat_id: chatId, text }
      })
    )
  )

  const delivered = results.filter((r) => r.status === 'fulfilled').length

  return { ok: true, delivered }
})
