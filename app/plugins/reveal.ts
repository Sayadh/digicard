import type { DirectiveBinding } from 'vue'

// v-reveal — fades + rises an element into view once, the moment it enters the viewport.
// Usage: <div v-reveal /> or <div v-reveal="120" /> (120ms delay)
// Registered universally (server + client) so SSR can resolve the directive;
// the actual IntersectionObserver logic only ever runs in the browser.
let observer: IntersectionObserver | undefined

function getObserver() {
  if (!observer && typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
  }
  return observer
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    // Prevents Vue's server renderer from choking on a directive with no SSR behavior.
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding: DirectiveBinding<number | undefined>) {
      if (import.meta.server) return
      el.classList.add('reveal')
      if (typeof binding.value === 'number') {
        el.style.transitionDelay = `${binding.value}ms`
      }
      getObserver()?.observe(el)
    }
  })
})
