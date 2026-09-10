<script setup lang="ts">
import type { Resource } from '~/content/resources'

defineProps<{
  resource: Resource
}>()
</script>

<template>
  <article class="group border border-charcoal/10 bg-white p-4 transition-transform hover:-translate-y-1 sm:p-5">
    <div class="flex aspect-[4/3] flex-col justify-between p-5 text-white sm:p-6" :class="resource.accent">
      <div class="flex items-start justify-between gap-4">
        <span class="font-serif text-3xl">{{ resource.number }}</span>
        <span class="text-right text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/70">DigitalwithMarie</span>
      </div>
      <div>
        <div class="mb-4 h-1 w-10 bg-white/70 transition-all group-hover:w-16" />
        <h3 class="max-w-xs font-serif text-2xl leading-tight">{{ resource.title }}</h3>
      </div>
    </div>
    <div class="pt-5">
      <p class="text-sm font-semibold leading-6">{{ resource.positioning }}</p>
      <p class="mt-3 text-sm leading-6 text-charcoal/60">{{ resource.benefit }}</p>
      <ul class="mt-5 space-y-2 border-t border-charcoal/10 pt-4 text-xs leading-5 text-charcoal/60">
        <li v-for="feature in resource.features" :key="feature" class="flex gap-2">
          <span class="text-accent" aria-hidden="true">+</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>