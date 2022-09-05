<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../stores/user'
import { useAuthStore } from '../../auth/store'
import ALink from '../../components/atoms/ALink.vue'

const userState = useUserStore()
const authState = useAuthStore()

const { settings } = storeToRefs(userState)
const { user } = authState

onMounted(() => {
  if (!settings.value) {
    userState.loadSettings()
  }
})
</script>

<template>
  <div v-if="user && settings">
    <p>Profile</p>
    <ul class="list-disc ml-8">
      <li>Name: {{ user.name }}</li>
      <li>Room: {{ settings.room.name }} (<a-link :href="{}">Change</a-link>)</li>
      <li>Zone: {{ settings.zone.name }} (<a-link :href="{}">Change</a-link>)</li>
    </ul>
    <div class="mt-8">
      <a-link :href="{ name: 'in-home' }">Back to dashboard</a-link>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>
