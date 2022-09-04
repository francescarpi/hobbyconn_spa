<script setup lang="ts">
import { onMounted } from 'vue'
import { getInstance } from '../services'
import { useRoute } from 'vue-router'

onMounted(() => {
  const route = useRoute()
  const { driver } = route.query
  const authInstance = getInstance(driver as string)
  authInstance.callback()
})
</script>

<template>
  <div>Wait a moment. Checking authentication...</div>
</template>
