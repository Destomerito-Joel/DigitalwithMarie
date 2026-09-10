import type { Ref } from 'vue'

export function useInView(target: Ref<HTMLElement | null>, threshold = 0.15) {
  const isVisible = ref(false)

  onMounted(() => {
    if (!target.value) {
      isVisible.value = true
      return
    }

    if (!('IntersectionObserver' in window)) {
      isVisible.value = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(target.value)

    onBeforeUnmount(() => observer.disconnect())
  })

  return { isVisible }
}