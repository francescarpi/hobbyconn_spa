<script setup lang="ts">
import AButton from '../../components/atoms/AButton.vue'
import { getInstance } from '../services'
import { ref } from 'vue'

const disabled = ref(false)

const login = async (name: string) => {
  disabled.value = true
  const authInstance = getInstance(name)
  authInstance.login()
}
</script>

<template>
  <div class="p-2">
    <p>You're not logged</p>
    <div class="flex gap-2">
      <a-button class="mt-2" @click="login('google')" :disabled="disabled">Login with Google</a-button>
      <a-button class="mt-2" @click="login('dummy')" :disabled="disabled">Login with Dummy</a-button>
    </div>
  </div>
</template>
