<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})

const { disabled } = toRefs(props)
</script>

<template>
  <button class="bg-blue-500 text-white px-4 py-2" :disabled="disabled"><slot /></button>
</template>

<style lang="css" scoped>
button[disabled] {
  @apply bg-gray-400;
}
</style>
