<script setup lang="ts">
import type { Faq } from '~/content/faqs'

defineProps<{
  faq: Faq
  isOpen: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <article class="border-b border-charcoal/15">
    <button
      class="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-semibold"
      type="button"
      :aria-expanded="isOpen"
      :aria-controls="`faq-answer-${faq.question.length}`"
      @click="emit('toggle')"
    >
      <span>{{ faq.question }}</span>
      <span class="faq-chevron flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-charcoal/20 text-accent" :class="{ 'faq-chevron-open': isOpen }" aria-hidden="true">
        <span class="block h-2 w-2 rotate-45 border-b border-r border-current transition-transform duration-200" />
      </span>
    </button>
    <div :id="`faq-answer-${faq.question.length}`" class="faq-answer-grid" :class="{ 'faq-answer-open': isOpen }">
      <div class="overflow-hidden">
        <p class="pb-6 pr-12 text-sm leading-6 text-charcoal/60" v-html="faq.answer" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.faq-answer-grid {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 220ms ease-out;
}

.faq-answer-open {
  grid-template-rows: 1fr;
}

.faq-chevron-open span {
  transform: rotate(225deg);
}

@media (prefers-reduced-motion: reduce) {
  .faq-answer-grid {
    transition: none;
  }

  .faq-chevron span {
    transition: none;
  }
}
</style>