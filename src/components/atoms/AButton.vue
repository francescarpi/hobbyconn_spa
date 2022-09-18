<script setup lang="ts">
import { toRefs, PropType } from 'vue'
import { RouteLocationRaw } from 'vue-router'
import router from '@/router'

const props = defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  href: {
    required: false,
    default: null,
    type: Object as PropType<RouteLocationRaw>
  }
})

const { disabled, href } = toRefs(props)
const handlerClick = () => {
  if (!href.value) {
    return
  }
  router.push(href.value)
}
</script>

<template>
  <button
    class="bg-gray-100 text-black px-4 py-2 border-2 border-black rounded-lg shadow-block"
    :disabled="disabled"
    @click="handlerClick">
    <slot />
  </button>
</template>

<style lang="css" scoped>
button[disabled] {
  @apply text-gray-400;
}
</style>
