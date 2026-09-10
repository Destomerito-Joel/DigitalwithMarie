<script setup lang="ts">
import { CHECKOUT_URL } from '~/constants/checkout'
</script>

<template>
  <section class="bg-accent text-white" aria-labelledby="final-cta-heading">
    <div class="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div class="max-w-3xl">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Your next step</p>
        <h2 id="final-cta-heading" class="mt-5 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-6xl">Stop collecting information. Start building the system.</h2>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-white/75">You do not need another random tutorial saved to your phone. You need a clear sequence you can actually follow.</p>
        <a class="cta-button mt-10 inline-flex rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-white hover:bg-charcoal/90" :href="CHECKOUT_URL">Get the digital product system - ₦25,000</a>
        <p class="mt-5 text-xs text-white/60">Instant digital access · Practical resources · Beginner-friendly</p>
      </div>
    </div>
  </section>
</template>