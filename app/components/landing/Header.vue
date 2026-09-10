<script setup lang="ts">
import { CHECKOUT_URL } from '~/constants/checkout'

const ui = useUiStore()
const isScrolled = ref(false)
let scrollFrame = 0

const navItems = [
  { label: 'The system', href: '#system' },
  { label: "What's included", href: '#included' },
  { label: 'FAQs', href: '#faqs' },
]

onMounted(() => {
  const updateHeader = () => {
    isScrolled.value = window.scrollY > 80
    scrollFrame = 0
  }

  const onScroll = () => {
    if (!scrollFrame) {
      scrollFrame = window.requestAnimationFrame(updateHeader)
    }
  }

  updateHeader()
  window.addEventListener('scroll', onScroll, { passive: true })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
  })
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-transparent transition-[background-color,box-shadow,border-color] duration-200"
    :class="isScrolled ? 'border-charcoal/10 bg-ivory/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
      <a class="font-serif text-xl font-semibold tracking-[-0.02em]" href="#top" @click="ui.closeMobileNav">
        DigitalwithMarie
      </a>

      <nav class="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        <a
          v-for="item in navItems"
          :key="item.href"
          class="text-sm font-medium text-charcoal/70 transition-colors hover:text-charcoal"
          :href="item.href"
        >
          {{ item.label }}
        </a>
        <a
          class="cta-button rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-white hover:bg-charcoal/90"
          :href="CHECKOUT_URL"
        >
          Get the system
        </a>
      </nav>

      <button
        class="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 md:hidden"
        type="button"
        :aria-expanded="ui.isMobileNavOpen"
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation"
        @click="ui.toggleMobileNav"
      >
        <span class="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span class="h-px w-full bg-charcoal" />
          <span class="h-px w-full bg-charcoal" />
        </span>
      </button>
    </div>

    <Transition name="mobile-nav">
      <nav
        v-if="ui.isMobileNavOpen"
        id="mobile-navigation"
        class="border-t border-charcoal/10 bg-ivory px-5 pb-5 pt-3 md:hidden"
        aria-label="Mobile navigation"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          class="block border-b border-charcoal/10 py-4 text-sm font-medium"
          :href="item.href"
          @click="ui.closeMobileNav"
        >
          {{ item.label }}
        </a>
        <a
          class="cta-button mt-4 block rounded-full bg-charcoal px-5 py-3 text-center text-sm font-semibold text-white hover:bg-charcoal/90"
          :href="CHECKOUT_URL"
          @click="ui.closeMobileNav"
        >
          Get the system
        </a>
      </nav>
    </Transition>

  </header>

  <div class="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/10 bg-ivory/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden">
      <a
        class="cta-button block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white hover:bg-accent/90"
        :href="CHECKOUT_URL"
      >
        Get the complete system - ₦25,000
      </a>
  </div>
</template>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>