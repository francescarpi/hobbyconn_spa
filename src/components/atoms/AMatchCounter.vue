<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
  number: {
    type: Number,
    required: true
  }
})
const { number } = toRefs(props)
</script>

<template>
  <span>{{ number }}</span>
</template>

<style lang="scss" scoped>
span {
  @apply bg-black text-white rounded-full px-2 py-1 text-xs;
}
</style>
