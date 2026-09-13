<script setup lang="ts">
import FadeUp from '~/components/ui/FadeUp.vue'

const section = ref<HTMLElement | null>(null)
const hasMounted = ref(false)
const { isVisible } = useInView(section)

const chaosLabels = ['Canva tutorial', 'ChatGPT prompts', 'Meta Ads', 'Content ideas', 'Funnel tips']
const systemLabels = ['Research', 'Validate', 'Create', 'Package', 'Launch']

onMounted(() => {
  hasMounted.value = true
})
</script>

<template>
  <section ref="section" class="bg-surface" aria-labelledby="comparison-heading">
    <div class="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div class="max-w-2xl">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why this is different</p>
        <h2 id="comparison-heading" class="mt-5 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">The difference is the connection between the parts.</h2>
      </div>
      <FadeUp :delay="80">
        <div class="comparison-visual mt-14 grid gap-4 md:grid-cols-2" :class="{ 'comparison-ready': hasMounted, 'system-visible': hasMounted && isVisible }" aria-label="From scattered tutorials to an ordered system">
          <div class="relative min-h-64 overflow-hidden border border-border bg-card p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/45">Scattered tutorials</p>
            <span v-for="(label, index) in chaosLabels" :key="label" class="chaos-label absolute border border-border bg-background px-3 py-2 text-xs text-muted" :class="`chaos-label-${index + 1}`">{{ label }}</span>
          </div>
          <div class="relative min-h-64 overflow-hidden bg-card p-6 text-text">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">The complete system</p>
            <span v-for="label in systemLabels" :key="label" class="system-label flex items-center gap-3 border-b border-white/15 py-3 text-sm font-medium">
              <span class="font-serif text-accent">→</span>{{ label }}
            </span>
          </div>
        </div>
      </FadeUp>
      <div class="mt-14 overflow-hidden border border-border bg-card">
        <div class="grid grid-cols-[1fr_1fr] border-b border-charcoal/10 text-sm font-semibold sm:grid-cols-[1fr_1fr_1fr]">
          <div class="p-5 sm:p-7">Random tutorials</div>
          <div class="border-l border-charcoal/10 p-5 text-accent sm:p-7">The complete system</div>
          <div class="hidden border-l border-charcoal/10 p-7 sm:block">What changes</div>
        </div>
        <div v-for="row in [
          { scattered: 'A new tactic every week', system: 'A sequence with a next step', change: 'Less switching, more execution' },
          { scattered: 'Create before you validate', system: 'Research and validate first', change: 'Better building decisions' },
          { scattered: 'Content without a destination', system: 'Content connected to a funnel', change: 'A clearer path to purchase' },
          { scattered: 'Everything depends on your memory', system: 'Tools you can return to', change: 'A process you can improve' },
        ]" :key="row.scattered" class="grid grid-cols-[1fr_1fr] border-b border-charcoal/10 text-sm last:border-b-0 sm:grid-cols-[1fr_1fr_1fr]">
          <div class="p-5 leading-6 text-charcoal/55 sm:p-7">{{ row.scattered }}</div>
          <div class="border-l border-charcoal/10 p-5 font-medium leading-6 sm:p-7">{{ row.system }}</div>
          <div class="hidden border-l border-charcoal/10 p-7 leading-6 text-charcoal/60 sm:block">{{ row.change }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chaos-label-1 { left: 14%; top: 28%; transform: rotate(-7deg); }
.chaos-label-2 { right: 12%; top: 24%; transform: rotate(5deg); }
.chaos-label-3 { left: 28%; top: 52%; transform: rotate(3deg); }
.chaos-label-4 { right: 20%; top: 66%; transform: rotate(-6deg); }
.chaos-label-5 { left: 10%; top: 72%; transform: rotate(8deg); }

.system-label {
  opacity: 1;
  transform: translateX(0) rotate(0);
  transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.comparison-ready:not(.system-visible) .system-label {
  opacity: 0;
  transform: translateX(24px) rotate(2deg);
}

.system-visible .system-label {
  opacity: 1;
  transform: translateX(0) rotate(0);
}

.system-label:nth-of-type(2) { transition-delay: 80ms; }
.system-label:nth-of-type(3) { transition-delay: 160ms; }
.system-label:nth-of-type(4) { transition-delay: 240ms; }
.system-label:nth-of-type(5) { transition-delay: 320ms; }
.system-label:nth-of-type(6) { transition-delay: 400ms; }

@media (prefers-reduced-motion: reduce) {
  .system-label {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>