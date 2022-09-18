<script setup lang="ts">
import { toRefs } from 'vue'
import { IHobby } from '../../models/hobbies'
import ATip from '../atoms/ATip.vue'
import ABox from '../atoms/ABox.vue'
import router from '../../router'
import AMatchCounter from '../atoms/AMatchCounter.vue'

const props = defineProps<{
  hobbies: IHobby[]
}>()

const { hobbies } = toRefs(props)

const goToHobby = (hobby: IHobby) => {
  router.push({ name: 'hobby-detail', params: { slug: hobby.slug } })
}
</script>

<template>
  <div>
    <a-tip class="mt-4 mb-10">
      This is the list of your subscribed hobbies. Look the matches counter to know if there are people interested with
      the same hobby.
    </a-tip>

    <div class="flex gap-4">
      <a-box v-for="hobby in hobbies" :key="hobby.id" @click="goToHobby(hobby)" class="cursor-pointer">
        <h1 class="font-bold mb-2">{{ hobby.name }}</h1>
        <p>Total matches: <a-match-counter :number="hobby.total_matches" /></p>
      </a-box>
    </div>
  </div>
</template>
