export type DialogContext = { type: 'gift' } | { type: 'service'; name: string }

/**
 * Single shared dialog, opened from the Gift Card CTA and each Service's
 * booking row. useState keeps it SSR-safe (per-request, not a module-global leak).
 */
export function useContactDialog() {
  const isOpen = useState<boolean>('contact-dialog-open', () => false)
  const context = useState<DialogContext>('contact-dialog-context', () => ({ type: 'gift' }))

  function open(ctx: DialogContext) {
    context.value = ctx
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return { isOpen, context, open, close }
}
