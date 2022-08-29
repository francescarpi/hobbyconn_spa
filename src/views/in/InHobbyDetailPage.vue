<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHobbyDetails } from '../../services/hobbies'
import { IHobbyDetail } from '../../models/hobbies'
import ATitle from '../../components/atoms/ATitle.vue'
import AText from '../../components/atoms/AText.vue'
import ALoading from '../../components/atoms/ALoading.vue'
import ALink from '../../components/atoms/ALink.vue'

const route = useRoute()
const hobby: Ref<IHobbyDetail | null> = ref(null)

onMounted(async () => {
  const { slug } = route.params
  hobby.value = await useHobbyDetails(slug as string)
})
</script>

<template>
  <div>
    <div v-if="hobby">
      <a-title>{{ hobby.name }}</a-title>
      <a-text>{{ hobby.description }}</a-text>
      <div class="mt-4">
        <h2>Matches:</h2>
        <ul class="list-disc ml-8" v-if="hobby.matches.length">
          <li v-for="match in hobby.matches" :key="match.id">
            {{ match.name }}
          </li>
        </ul>
        <p v-else>No matches...</p>
      </div>
      <div class="mt-8">
        <a-link :href="{ name: 'in-home' }">Back to dashboard</a-link>
      </div>
    </div>
    <a-loading v-else />
  </div>
</template>
