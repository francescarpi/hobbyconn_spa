<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
  picture: {
    type: String,
    required: true
  }
})

const { picture } = toRefs(props)
</script>

<template>
  <img :src="picture" alt="" />
</template>

<style lang="scss" scoped>
img {
  @apply rounded-full w-6 h-6;
}
</style>
