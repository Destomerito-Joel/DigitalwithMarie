<script setup lang="ts">
import { faqs } from '~/content/faqs'
import FaqItem from '~/components/landing/FaqItem.vue'

const openFaq = ref<number | null>(null)
</script>

<template>
  <section id="faqs" class="bg-white" aria-labelledby="faq-heading">
    <div class="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-32">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQs</p>
        <h2 id="faq-heading" class="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">The useful details, clearly answered.</h2>
      </div>
      <div class="border-t border-charcoal/15">
        <FaqItem
          v-for="(faq, index) in faqs"
          :key="faq.question"
          :faq="faq"
          :is-open="openFaq === index"
          @toggle="openFaq = openFaq === index ? null : index"
        />
      </div>
    </div>
  </section>
</template>