<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[60] flex items-center justify-center px-6 bg-ink/60 backdrop-blur-sm"
        role="presentation"
        @click.self="close"
      >
        <div
          class="relative w-full max-w-[380px] bg-paper rounded-3xl shadow-lift-lg border border-hairline p-8 text-center"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="'dialog-title'"
        >
          <button
            type="button"
            class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-stone hover:text-ink hover:bg-ink/5 transition-colors"
            :aria-label="t.dialog.close"
            @click="close"
          >
            <XIcon class="w-4 h-4" />
          </button>

          <span class="text-2xs font-mono uppercase tracking-widest2 text-mint-dim block mb-3">
            {{ t.dialog.giftEyebrow }}
          </span>
          <h3 id="dialog-title" class="font-display text-xl text-ink mb-3">
            {{ title }}
          </h3>
          <p class="text-sm text-stone leading-relaxed mb-8 max-w-[19rem] mx-auto">
            {{ prompt }}
          </p>

          <div class="flex flex-col gap-3">
            <a
              v-if="card!.contact.whatsapp"
              :href="waHref"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2.5 bg-gradient-to-br from-hero-from to-hero-to text-bone py-3.5 rounded-full font-medium text-xs uppercase tracking-widest hover:brightness-110 transition-all duration-300 active:scale-[0.97]"
            >
              <MessageCircleIcon class="w-4 h-4" />
              {{ t.dialog.whatsapp }}
            </a>
            <a
              :href="telHref"
              class="inline-flex items-center justify-center gap-2.5 bg-transparent border border-hairline text-ink py-3.5 rounded-full font-medium text-xs uppercase tracking-widest hover:border-ink/20 hover:bg-ink/5 transition-all duration-300 active:scale-[0.97]"
            >
              <PhoneIcon class="w-4 h-4" />
              {{ t.dialog.call }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
// No form, no submission logic: this is purely a hand-off to a real human
// channel (WhatsApp / phone call). Nothing here ever needs a server, so
// there's nothing to fail, retry, or lose.
import { computed, onMounted, onUnmounted } from 'vue'
import { XIcon, MessageCircleIcon, PhoneIcon } from 'lucide-vue-next'

const { t } = useLocale()
const card = useCurrentCard()
const { isOpen, context, close } = useContactDialog()
const { waLink, telLink } = useCardLinks()

const title = computed(() => {
  const ctx = context.value
  return ctx.type === 'gift' ? t.value.dialog.giftTitle : `${t.value.dialog.bookTitlePrefix} ${ctx.name}`
})

const prompt = computed(() => {
  const ctx = context.value
  return ctx.type === 'gift' ? t.value.dialog.promptGift : t.value.dialog.promptService(ctx.name)
})

const waHref = computed(() => (card.value ? waLink(card.value.contact, prompt.value) : '#'))
const telHref = computed(() => (card.value ? telLink(card.value.contact) : '#'))

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) close()
}

onMounted(() => {
  if (import.meta.client) window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  if (import.meta.client) window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.25s ease;
}
.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
</style>
