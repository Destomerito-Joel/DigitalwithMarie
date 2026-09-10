<script setup lang="ts">
import FadeUp from '~/components/ui/FadeUp.vue'
const process = [
  { number: '01', title: 'Choose your direction', text: 'Start with what you know, who it can help and the problem you want to solve.' },
  { number: '02', title: 'Validate the opportunity', text: 'Use the workbook to research the market and make a more informed build decision.' },
  { number: '03', title: 'Create the product', text: 'Use the guides and prompt vault to turn your knowledge into a useful first version.' },
  { number: '04', title: 'Build the offer', text: 'Package the product so its value is clear to the person it was made for.' },
  { number: '05', title: 'Prepare the funnel', text: 'Give your content, audience and checkout a connected path.' },
  { number: '06', title: 'Plan the launch', text: 'Use the planner and launch kit to organise the work around a real date.' },
  { number: '07', title: 'Learn and improve', text: 'Pay attention to what people respond to and make the next version stronger.' },
]
</script>

<template>
  <section id="system" class="bg-[#efebe3]" aria-labelledby="process-heading">
    <div class="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-32">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How it works</p>
        <h2 id="process-heading" class="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">A system you can actually work through.</h2>
        <p class="mt-6 max-w-md text-lg leading-8 text-charcoal/65">You do not need to use everything at once. Move through the system in order, return to the tools you need, and keep your next decision visible.</p>
      </div>
      <ol class="process-list border-t border-charcoal/15">
        <FadeUp v-for="(step, index) in process" :key="step.number" as="li" :delay="index * 70" class="process-step grid gap-4 border-b border-charcoal/15 py-6 sm:grid-cols-[4rem_0.7fr_1fr] sm:items-start sm:gap-6">
            <span class="process-number font-serif text-2xl text-accent">{{ step.number }}</span>
            <h3 class="text-lg font-semibold">{{ step.title }}</h3>
            <p class="text-sm leading-6 text-charcoal/60">{{ step.text }}</p>
        </FadeUp>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.process-list :deep(.fade-up) {
  position: relative;
}

.process-list :deep(.fade-up:not(:last-child)::after) {
  background: #c96f55;
  content: '';
  height: 1.5rem;
  left: 1rem;
  position: absolute;
  top: 4.5rem;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 180ms;
  width: 1px;
}

.process-list :deep(.fade-up:not(.fade-up-hidden):not(:last-child)::after) {
  transform: scaleY(1);
}

@media (prefers-reduced-motion: reduce) {
  .process-list :deep(.fade-up::after) {
    transform: scaleY(1);
    transition: none;
  }
}
</style>