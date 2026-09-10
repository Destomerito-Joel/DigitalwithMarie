<script setup lang="ts">
import { objections } from '~/content/objections'
</script>

<template>
  <section class="bg-white" aria-labelledby="objections-heading">
    <div class="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-32">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Before you decide</p>
        <h2 id="objections-heading" class="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">Good questions deserve clear answers.</h2>
      </div>
      <div class="border-t border-charcoal/15">
        <article v-for="objection in objections" :key="objection.question" class="border-b border-charcoal/15 py-6">
          <h3 class="text-lg font-semibold">{{ objection.question }}</h3>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-charcoal/60">{{ objection.answer }}</p>
        </article>
      </div>
    </div>
  </section>
</template>