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
          class="relative w-full max-w-[400px] bg-paper rounded-3xl shadow-lift-lg border border-hairline p-7"
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

          <!-- Success state -->
          <div v-if="submitted" class="text-center py-4">
            <div class="w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center mx-auto mb-5">
              <CheckIcon class="w-5 h-5 text-moss-deep" />
            </div>
            <h3 class="font-display text-xl text-ink mb-2">{{ t.dialog.successTitle }}</h3>
            <p class="text-sm text-stone leading-relaxed mb-6">{{ t.dialog.successBody }}</p>
            <button
              type="button"
              class="bg-gradient-to-br from-hero-from to-hero-to text-bone font-medium py-3 px-8 rounded-full text-xs uppercase tracking-widest hover:brightness-110 transition-all duration-300 active:scale-[0.97]"
              @click="close"
            >
              {{ t.dialog.close }}
            </button>
          </div>

          <!-- Form state -->
          <form v-else class="text-left" @submit.prevent="submit">
            <span class="text-2xs font-mono uppercase tracking-widest2 text-mint-dim block mb-2">
              {{ t.dialog.giftEyebrow }}
            </span>
            <h3 id="dialog-title" class="font-display text-xl text-ink mb-6">
              {{ title }}
            </h3>

            <label class="block mb-4">
              <span class="text-2xs font-mono uppercase tracking-wider text-stone-light mb-1.5 block">{{ t.dialog.nameLabel }}</span>
              <input
                ref="nameInput"
                v-model="name"
                type="text"
                :placeholder="t.dialog.namePlaceholder"
                class="w-full bg-bone border border-hairline rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone-light focus:outline-none focus:border-moss-deep transition-colors"
              />
            </label>

            <label class="block mb-4">
              <span class="text-2xs font-mono uppercase tracking-wider text-stone-light mb-1.5 block">{{ t.dialog.phoneLabel }}</span>
              <input
                v-model="phone"
                type="tel"
                :placeholder="t.dialog.phonePlaceholder"
                class="w-full bg-bone border border-hairline rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone-light focus:outline-none focus:border-moss-deep transition-colors"
              />
            </label>

            <label class="block mb-2">
              <span class="text-2xs font-mono uppercase tracking-wider text-stone-light mb-1.5 block">{{ t.dialog.messageLabel }}</span>
              <textarea
                v-model="message"
                rows="3"
                class="w-full bg-bone border border-hairline rounded-xl px-4 py-3 text-sm text-ink placeholder:text-stone-light focus:outline-none focus:border-moss-deep transition-colors resize-none"
              />
            </label>

            <p v-if="error" class="text-2xs text-red-700/80 mb-3">{{ t.dialog.required }}</p>
            <p v-else class="mb-3" />

            <div class="flex gap-3 mt-2">
              <button
                type="button"
                class="flex-1 bg-transparent border border-hairline text-stone py-3.5 rounded-full font-medium text-xs uppercase tracking-widest hover:border-ink/20 hover:text-ink transition-all duration-300"
                @click="close"
              >
                {{ t.dialog.cancel }}
              </button>
              <button
                type="submit"
                :disabled="submitting"
                class="flex-1 bg-gradient-to-br from-hero-from to-hero-to text-bone py-3.5 rounded-full font-medium text-xs uppercase tracking-widest hover:brightness-110 transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none"
              >
                {{ submitting ? t.dialog.sending : t.dialog.submit }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { XIcon, CheckIcon } from 'lucide-vue-next'

const { t } = useLocale()
const card = useCurrentCard()
const { isOpen, context, close } = useContactDialog()

const name = ref('')
const phone = ref('')
const message = ref('')
const error = ref(false)
const submitted = ref(false)
const submitting = ref(false)
const nameInput = ref<HTMLInputElement | null>(null)

const title = computed(() => {
  const ctx = context.value
  return ctx.type === 'gift'
    ? t.value.dialog.giftTitle
    : `${t.value.dialog.bookTitlePrefix} ${ctx.name}`
})

function defaultMessage() {
  const ctx = context.value
  return ctx.type === 'gift'
    ? t.value.dialog.messageDefaultGift
    : t.value.dialog.messageDefaultBook(ctx.name)
}

watch(isOpen, async (open) => {
  if (open) {
    name.value = ''
    phone.value = ''
    message.value = defaultMessage()
    error.value = false
    submitted.value = false
    await nextTick()
    nameInput.value?.focus()
  }
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) close()
}

onMounted(() => {
  if (import.meta.client) window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  if (import.meta.client) window.removeEventListener('keydown', onKeydown)
})

async function submit() {
  if (!name.value.trim() || !phone.value.trim()) {
    error.value = true
    return
  }
  error.value = false
  submitting.value = true

  // Primary path: notify the card owner's Telegram (see server/routes/api/contact.post.ts —
  // per-card recipient chat IDs come from card.contact.notifyTelegramChatIds). This never
  // throws on delivery failure; the server route swallows per-recipient errors so one bad
  // chat ID can't block the others or fail the request.
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        slug: card.value!.slug,
        type: context.value.type,
        name: name.value.trim(),
        phone: phone.value.trim(),
        message: message.value
      }
    })
  } catch {
    // Fall back to mailto so the lead is never silently lost, even if the
    // Telegram bot isn't configured yet or the request fails outright.
    if (import.meta.client) {
      const subject = encodeURIComponent(title.value)
      const body = encodeURIComponent(
        `${t.value.dialog.nameLabel}: ${name.value}\n${t.value.dialog.phoneLabel}: ${phone.value}\n\n${message.value}`
      )
      window.location.href = `mailto:${card.value!.contact.email}?subject=${subject}&body=${body}`
    }
  }

  submitting.value = false
  submitted.value = true
}
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
