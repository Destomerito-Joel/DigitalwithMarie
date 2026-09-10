<script setup lang="ts">
const props = withDefaults(defineProps<{
  delay?: number
  as?: string
}>(), {
  delay: 0,
  as: 'div',
})

const target = ref<HTMLElement | null>(null)
const hasMounted = ref(false)
const { isVisible } = useInView(target)

onMounted(() => {
  hasMounted.value = true
})
</script>

<template>
  <component
    :is="props.as"
    ref="target"
    class="fade-up"
    :class="{ 'fade-up-hidden': hasMounted && !isVisible }"
    :style="{ '--fade-up-delay': `${props.delay}ms` }"
  >
    <slot />
  </component>
</template>