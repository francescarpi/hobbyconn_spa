<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHobbyDetails } from '../../services/hobbies'
import { IHobbyDetail } from '../../models/hobbies'

const route = useRoute()
let hobby: IHobbyDetail | null = ref(null)

onMounted(async () => {
  const { slug } = route.params
  hobby = await useHobbyDetails(slug as string)
})
</script>

<template>
  <div>
    <div v-if="hobby">{{ hobby }}</div>
    <p v-else>Loading...</p>
  </div>
</template>
