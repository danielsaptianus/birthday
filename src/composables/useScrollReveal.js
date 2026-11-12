import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Lightweight IntersectionObserver composable for scroll-reveal animations.
 * Triggers reliably across desktop and mobile/responsive viewports and stays visible once revealed.
 */
export function useScrollReveal(threshold = 0.01) {
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
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      {
        threshold,
        rootMargin: '60px 0px 60px 0px',
      }
    )
    observer.observe(targetRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { targetRef, isVisible }
}
