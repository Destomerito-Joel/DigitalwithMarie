<script setup lang="ts">
import { CHECKOUT_URL } from '~/constants/checkout'
</script>

<template>
  <section class="bg-charcoal text-white" aria-labelledby="pricing-heading">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-12 lg:py-28">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Start building</p>
        <h2 id="pricing-heading" class="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">A complete digital product system for ₦25,000.</h2>
        <p class="mt-6 max-w-xl text-lg leading-8 text-white/65">One clear price for the guides, workbooks, prompts, planning tools, content resources and funnel templates.</p>
      </div>
      <div class="border border-white/15 p-7 sm:p-9">
        <p class="text-sm font-medium text-white/60">The Digital Product System</p>
        <p class="mt-4 font-serif text-5xl">₦25,000</p>
        <a class="cta-button mt-8 block rounded-full bg-accent px-6 py-4 text-center text-sm font-semibold text-white hover:bg-accent/90" :href="CHECKOUT_URL">Start building my digital product</a>
        <p class="mt-5 text-center text-xs leading-5 text-white/45">Practical resources · Beginner-friendly · Learn at your own pace</p>
      </div>
    </div>
  </section>
</template>