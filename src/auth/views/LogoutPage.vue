<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '../store'
import { getInstance } from '../services'

onMounted(() => {
  const auth = getInstance(useAuthStore().driver)
  auth.logout()
})
</script>

<template>
  <div class="text-center mt-16 text-7xl">Bye!</div>
</template>
