<script setup lang="ts">
import { toRefs } from 'vue'
import { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  href: RouteLocationRaw
}>()

const { href } = toRefs(props)
</script>

<template>
  <router-link :to="href" class="text-blue-600"><slot /></router-link>
</template>
