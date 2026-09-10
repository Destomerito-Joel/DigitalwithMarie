<script setup lang="ts">
import { CHECKOUT_URL } from '~/constants/checkout'
</script>

<template>
  <section id="problem" class="bg-white" aria-labelledby="problem-heading">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-32">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The real bottleneck</p>
        <h2 id="problem-heading" class="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
          You don't need more information. You need a system.
        </h2>
      </div>
      <div class="max-w-2xl text-lg leading-8 text-charcoal/70">
        <p>
          You have probably saved dozens of videos about digital products, Canva, ChatGPT, Meta Ads and funnels. The problem is rarely a lack of information. It is that the information never connects into one process you can follow.
        </p>
        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <div class="border-l-2 border-accent px-5 py-2">
            <p class="font-serif text-2xl text-charcoal">An idea in Notes</p>
            <p class="mt-2 text-sm leading-6">Still waiting to become a finished offer someone can understand.</p>
          </div>
          <div class="border-l-2 border-accent px-5 py-2">
            <p class="font-serif text-2xl text-charcoal">Tutorials everywhere</p>
            <p class="mt-2 text-sm leading-6">Useful tactics, but no order, decision points or launch path.</p>
          </div>
        </div>
        <a class="mt-10 inline-flex text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-8 hover:decoration-accent" :href="CHECKOUT_URL">
          Show me the system <span class="ml-2" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>