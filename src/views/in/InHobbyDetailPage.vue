<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHobbyDetail } from '@/services/hobbies'
import { IHobbyDetail } from '@/models/hobbies'
import AText from '@/components/atoms/AText.vue'
import ALoading from '@/components/atoms/ALoading.vue'
import MUserMatch from '@/components/modules/MUserMatch.vue'
import MTitleWithBackButton from '@/components/modules/MTitleWithBackButton.vue'
import { FaceFrownIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const hobby: Ref<IHobbyDetail | null> = ref(null)

onMounted(async () => {
  const { slug } = route.params
  hobby.value = await useHobbyDetail(slug as string)
})
</script>

<template>
  <div>
    <div v-if="hobby">
      <m-title-with-back-button>{{ hobby.name }}</m-title-with-back-button>
      <a-text class="my-4">{{ hobby.description }}</a-text>
      <div class="mt-6">
        <h2>Matches:</h2>
        <div v-if="hobby.matches.length" class="flex gap-4">
          <m-user-match v-for="match in hobby.matches" :key="match.id" :match="match" class="w-1/2" />
        </div>
        <p v-else class="flex">
          <face-frown-icon class="w-5 mr-1" />
          No matches...
        </p>
      </div>
    </div>
    <a-loading v-else />
  </div>
</template>
