<script setup lang="ts">
import Header from '~/components/landing/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-ivory text-charcoal">
    <Header />
    <main class="pb-20 md:pb-0">
      <slot />
    </main>
  </div>
</template>