<script setup lang="ts">
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
import ALoading from '../../components/atoms/ALoading.vue'
import ALink from '../../components/atoms/ALink.vue'

const userState = useUserStore()
const { user } = storeToRefs(userState)
</script>

<template>
  <div v-if="user">
    <div class="w-full text-right my-4">
      Hi, {{ user.name }}!
      <a-link :href="{ name: 'profile' }" class="ml-4">Profile</a-link>
      <a-link :href="{ name: 'logout' }" class="ml-4">Logout</a-link>
    </div>
    <router-view></router-view>
  </div>
  <a-loading v-else />
</template>
