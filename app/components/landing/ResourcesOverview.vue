<script setup lang="ts">
import { resources } from '~/content/resources'
import { CHECKOUT_URL } from '~/constants/checkout'
import FadeUp from '~/components/ui/FadeUp.vue'
import ResourceCard from '~/components/landing/ResourceCard.vue'
</script>

<template>
  <section id="included" class="bg-background" aria-labelledby="resources-heading">
    <div class="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div class="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What's included</p>
          <h2 id="resources-heading" class="mt-5 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
            Seven practical resources. One connected system.
          </h2>
          <p class="mt-6 text-lg leading-8 text-charcoal/65">Every resource handles a different part of the journey, but they are designed to work together from first idea to launch.</p>
        </div>
        <a class="text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-8 hover:decoration-accent" :href="CHECKOUT_URL">
          Get all 7 resources <span class="ml-2" aria-hidden="true">→</span>
        </a>
      </div>

      <div class="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <FadeUp v-for="(resource, index) in resources" :key="resource.number" :delay="index * 70">
          <ResourceCard :resource="resource" />
        </FadeUp>
      </div>
    </div>
  </section>
</template>