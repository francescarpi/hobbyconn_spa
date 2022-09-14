<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ALoading from '../../components/atoms/ALoading.vue'
import ALink from '../../components/atoms/ALink.vue'
import { useAuthStore } from '../../auth/store'
import { LOGOUT_URL_NAME } from '../../auth/constants'
import AAvatar from '@/components/atoms/AAvatar.vue'

const authState = useAuthStore()
const { user, name, avatar } = storeToRefs(authState)
</script>

<template>
  <div v-if="user">
    <div class="w-full text-right my-4 flex justify-end">
      <a-avatar :picture="avatar" v-if="avatar" class="mr-2" />
      Hi, {{ name }}!
      <a-link :href="{ name: 'profile' }" class="ml-5">Profile</a-link>
      <a-link :href="{ name: LOGOUT_URL_NAME }" class="ml-5">Logout</a-link>
    </div>
    <router-view></router-view>
  </div>
  <a-loading v-else />
</template>
