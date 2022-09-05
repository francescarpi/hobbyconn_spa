<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ALoading from '../../components/atoms/ALoading.vue'
import ALink from '../../components/atoms/ALink.vue'
import { useAuthStore } from '../../auth/store'
import { LOGOUT_URL_NAME } from '../../auth/constants'

const authState = useAuthStore()
const { user } = storeToRefs(authState)
</script>

<template>
  <div v-if="user">
    <div class="w-full text-right my-4">
      Hi, {{ user.name }}!
      <a-link :href="{ name: 'profile' }" class="ml-4">Profile</a-link>
      <a-link :href="{ name: LOGOUT_URL_NAME }" class="ml-4">Logout</a-link>
    </div>
    <router-view></router-view>
  </div>
  <a-loading v-else />
</template>
