<script setup lang="ts">
import FadeUp from '~/components/ui/FadeUp.vue'
</script>

<template>
  <section class="bg-white" aria-labelledby="transformation-heading">
    <div class="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div class="max-w-2xl">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The shift</p>
        <h2 id="transformation-heading" class="mt-5 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
          Move from scattered effort to deliberate execution.
        </h2>
      </div>
      <div class="mt-14 grid gap-6 lg:grid-cols-2">
        <FadeUp :delay="0">
          <div class="border border-charcoal/10 bg-[#f7f4ee] p-7 sm:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/45">Before</p>
          <ul class="mt-8 space-y-5 text-lg leading-7 text-charcoal/65">
            <FadeUp v-for="(item, index) in ['Saving another tutorial instead of making a decision.', 'Trying to create before knowing if the idea is wanted.', 'Posting content without a clear path to the offer.', 'Holding the whole business in your head.']" :key="item" as="li" :delay="index * 70">
              {{ item }}
            </FadeUp>
          </ul>
          </div>
        </FadeUp>
        <FadeUp :delay="70">
          <div class="bg-charcoal p-7 text-white sm:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">After</p>
          <ul class="mt-8 space-y-5 text-lg leading-7 text-white/75">
            <FadeUp v-for="(item, index) in ['A researched idea with a reason to exist.', 'A validated product shaped around a real person.', 'Content and a funnel that support the same offer.', 'A repeatable sequence you can improve as you learn.']" :key="item" as="li" :delay="index * 70">
              {{ item }}
            </FadeUp>
          </ul>
          </div>
        </FadeUp>
      </div>
      <div class="mt-12 border-t border-charcoal/10 pt-8">
        <p class="max-w-3xl font-serif text-2xl leading-snug sm:text-3xl">The goal is not to do more. It is to know what comes next.</p>
      </div>
    </div>
  </section>
</template>