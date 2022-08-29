<script setup lang="ts">
import { useUserStore } from '../../stores/user'
import ALink from '../../components/atoms/ALink.vue'

const userState = useUserStore()
const { user } = userState
</script>

<template>
  <div v-if="user">
    <p>Profile</p>
    <ul class="list-disc ml-8">
      <li>Name: {{ user.name }}</li>
      <li>Room: {{ user.room.name }} (<a-link :href="{}">Change</a-link>)</li>
      <li>Zone: {{ user.zone.name }} (<a-link :href="{}">Change</a-link>)</li>
    </ul>
    <div class="mt-8">
      <a-link :href="{ name: 'in-home' }">Back to dashboard</a-link>
    </div>
  </div>
</template>
