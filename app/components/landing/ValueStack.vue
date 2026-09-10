<script setup lang="ts">
import { resources } from '~/content/resources'
import { CHECKOUT_URL } from '~/constants/checkout'
</script>

<template>
  <section class="bg-white" aria-labelledby="value-heading">
    <div class="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-32">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The complete system</p>
        <h2 id="value-heading" class="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">Everything you need to move from idea to launch.</h2>
        <p class="mt-6 max-w-md text-lg leading-8 text-charcoal/65">The value is in the connection between the resources. Each one helps remove a decision that usually slows the next one down.</p>
        <a class="cta-button mt-8 inline-flex rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white hover:bg-accent/90" :href="CHECKOUT_URL">Get everything for ₦25,000</a>
      </div>
      <div class="border-y border-charcoal/15">
        <div v-for="resource in resources" :key="resource.number" class="flex gap-5 border-b border-charcoal/10 py-5 last:border-b-0">
          <span class="font-serif text-xl text-accent">{{ resource.number }}</span>
          <div>
            <h3 class="font-semibold">{{ resource.title }}</h3>
            <p class="mt-1 text-sm leading-6 text-charcoal/60">{{ resource.positioning }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>