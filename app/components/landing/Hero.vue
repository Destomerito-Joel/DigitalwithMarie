<script setup lang="ts">
import { CHECKOUT_URL } from '~/constants/checkout'

const sequence = ['Research', 'Validate', 'Create', 'Package', 'Position', 'Funnel', 'Market', 'Launch', 'Optimize']
const isReady = ref(false)
const isMounted = ref(false)

onMounted(() => {
  isReady.value = true
  requestAnimationFrame(() => {
    isMounted.value = true
  })
})
</script>

<template>
  <section class="overflow-hidden bg-ivory" :class="{ 'hero-ready': isReady }" aria-labelledby="hero-heading">
    <div class="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-16 px-5 pb-32 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
      <div class="max-w-3xl">
        <p class="hero-motion hero-eyebrow mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent" :class="{ 'hero-mounted': isMounted }">The complete digital product system</p>
        <h1 id="hero-heading" class="hero-motion hero-heading font-serif text-5xl leading-[1.04] tracking-[-0.03em] sm:text-7xl" :class="{ 'hero-mounted': isMounted }">
          Turn your digital product idea into something people can actually buy.
        </h1>
        <p class="hero-motion hero-subcopy mt-8 max-w-2xl text-lg leading-8 text-charcoal/70" :class="{ 'hero-mounted': isMounted }">
          A step-by-step system that shows you how to find a sellable idea, validate it, create the product with AI, package the offer, build your funnel, create content and launch without piecing everything together from random tutorials.
        </p>
        <div class="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a class="hero-motion hero-cta cta-button hidden rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white hover:bg-accent/90 sm:inline-flex" :class="{ 'hero-mounted': isMounted }" :href="CHECKOUT_URL">
            Get the complete system - ₦25,000
          </a>
          <span class="text-xs font-medium text-charcoal/55">Instant digital access · Beginner-friendly · Learn at your own pace</span>
        </div>
      </div>

      <div class="hero-motion hero-visual relative mx-auto w-full max-w-xl" :class="{ 'hero-mounted': isMounted }" aria-label="The nine-part digital product process">
        <div class="relative grid grid-cols-3 gap-3 sm:gap-4">
          <div
            v-for="(step, index) in sequence"
            :key="step"
            class="flex aspect-square flex-col justify-between border border-charcoal/10 bg-white p-4 shadow-[0_12px_30px_rgba(30,30,28,0.06)] sm:p-5"
            :class="index === 4 ? 'bg-charcoal text-white' : ''"
          >
            <span class="font-serif text-2xl" :class="index === 4 ? 'text-accent' : 'text-accent/70'">0{{ index + 1 }}</span>
            <span class="text-sm font-semibold sm:text-base">{{ step }}</span>
          </div>
        </div>
        <p class="mt-5 max-w-xs text-sm leading-6 text-charcoal/60">AI makes creation faster. A system makes the business work.</p>
      </div>
    </div>
  </section>
</template>