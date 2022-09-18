<script setup lang="ts">
import { toRefs, PropType } from 'vue'
import { RouteLocationRaw } from 'vue-router'

const props = defineProps({
  href: {
    type: Object as PropType<RouteLocationRaw>,
    required: true
  }
})

const { href } = toRefs(props)
</script>

<template>
  <router-link :to="href" class="text-black underline"><slot /></router-link>
</template>
