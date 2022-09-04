<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
import ALoading from '../../components/atoms/ALoading.vue'
import ALink from '../../components/atoms/ALink.vue'

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
      Hi, {{ user.name }}! ({{ user.zone.name }})
      <a-link :href="{ name: 'profile' }" class="ml-4">Profile</a-link>
      <a-link :href="{}" class="ml-4">Logout</a-link>
    </div>
    <router-view></router-view>
  </div>
  <a-loading v-else />
</template>
