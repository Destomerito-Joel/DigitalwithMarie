<script setup lang="ts">
import FadeUp from '~/components/ui/FadeUp.vue'
const steps = [
  { number: '01', title: 'Research', text: 'Find a real problem, audience and angle worth exploring.' },
  { number: '02', title: 'Validate', text: 'Test demand before spending time building the wrong thing.' },
  { number: '03', title: 'Create', text: 'Use AI to move from raw knowledge to a useful product faster.' },
  { number: '04', title: 'Package', text: 'Turn the material into a clear, usable offer.' },
  { number: '05', title: 'Position', text: 'Make the right person recognise why it is for them.' },
  { number: '06', title: 'Build funnel', text: 'Give attention a path from first contact to purchase.' },
  { number: '07', title: 'Market', text: 'Create content that builds context and invites action.' },
  { number: '08', title: 'Launch', text: 'Bring the offer to market with a sequence you can follow.' },
  { number: '09', title: 'Optimize', text: 'Learn from response and improve the system over time.' },
]
</script>

<template>
  <section id="mechanism" class="bg-[#efebe3]" aria-labelledby="mechanism-heading">
    <div class="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div class="max-w-2xl">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The mechanism</p>
        <h2 id="mechanism-heading" class="mt-5 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
          One clear sequence from idea to launch.
        </h2>
        <p class="mt-6 text-lg leading-8 text-charcoal/65">Each step gives the next one somewhere to go, so you are building a business process instead of collecting disconnected tactics.</p>
      </div>

      <ol class="mechanism-list mt-16 grid gap-px overflow-hidden border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
        <FadeUp v-for="(step, index) in steps" :key="step.number" as="li" :delay="index * 70" class="mechanism-step bg-[#efebe3] p-6 sm:p-8">
            <span class="mechanism-number font-serif text-3xl text-accent">{{ step.number }}</span>
            <h3 class="mt-8 text-lg font-semibold">{{ step.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-charcoal/60">{{ step.text }}</p>
        </FadeUp>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.mechanism-list :deep(.fade-up) {
  position: relative;
}

.mechanism-list :deep(.fade-up:not(:last-child)::after) {
  background: #c96f55;
  content: '';
  height: 1px;
  left: calc(100% - 1px);
  position: absolute;
  top: 2.5rem;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 180ms;
  width: 1.5rem;
}

.mechanism-list :deep(.fade-up:not(.fade-up-hidden):not(:last-child)::after) {
  transform: scaleX(1);
}

@media (max-width: 1023px) {
  .mechanism-list :deep(.fade-up:nth-child(odd)::after) {
    display: none;
  }
}

@media (max-width: 639px) {
  .mechanism-list :deep(.fade-up::after) {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mechanism-list :deep(.fade-up::after) {
    transform: scaleX(1);
    transition: none;
  }
}
</style>