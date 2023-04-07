<script setup lang="ts">
import ATitle from '../atoms/ATitle.vue'
import router from '@/router'
import { ArrowLeftCircleIcon } from '@heroicons/vue/20/solid'

const goBack = () => {
  router.back()
}
</script>

<template>
  <a-title>
    <template #begin><arrow-left-circle-icon class="w-6 mr-2" @click="goBack" /></template>
    <slot />
  </a-title>
</template>
