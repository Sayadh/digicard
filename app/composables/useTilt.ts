import { ref, reactive } from 'vue'

/**
 * Subtle pointer-following tilt for the gift card centerpiece.
 * Desktop only in effect (touch devices simply see no delta); disabled entirely
 * under prefers-reduced-motion.
 */
export function useTilt(maxDeg = 6) {
  const el = ref<HTMLElement | null>(null)
  const style = reactive({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  })

  const reduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function onMove(e: PointerEvent) {
    if (reduced || !el.value || e.pointerType === 'touch') return
    const rect = el.value.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * maxDeg * 2
    const rotateX = (0.5 - py) * maxDeg * 2
    style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`
  }

  function onLeave() {
    style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return { el, style, onMove, onLeave }
}
