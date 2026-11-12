import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Lightweight IntersectionObserver composable for scroll-reveal animations.
 * Works reliably across desktop and tall stacked mobile/responsive viewports.
 */
export function useScrollReveal(threshold = 0.08) {
  const targetRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (!targetRef.value) return
    if (typeof IntersectionObserver === 'undefined') {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
      },
      {
        threshold,
        rootMargin: '0px 0px -24px 0px',
      }
    )
    observer.observe(targetRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { targetRef, isVisible }
}
