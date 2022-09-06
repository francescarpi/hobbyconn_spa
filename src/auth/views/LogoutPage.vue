<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '../store'
import { getInstance } from '../services'
import ALink from '../../components/atoms/ALink.vue'
import { LOGIN_URL_NAME } from '../constants'

onMounted(() => {
  const auth = getInstance(useAuthStore().driver)
  auth.logout()
})
</script>

<template>
  <div class="text-center my-8">
    <p>Bye!</p>
    <a-link :href="{ name: LOGIN_URL_NAME }">Back to login</a-link>
  </div>
</template>
