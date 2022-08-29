<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'

const userState = useUserStore()
const { user } = storeToRefs(userState)

onBeforeMount(() => {
  // Ths user object is required for all the "IN" site.
  if (!user.value) {
    userState.loadUser()
  }
})
</script>

<template>
  <div v-if="user">
    <div class="w-full text-right my-4">
      Hi, {{ user.name }}! <a href="" class="ml-4 text-blue-600">Logout</a>
    </div>
    <router-view></router-view>
  </div>
  <p v-else>Loading...</p>
</template>
