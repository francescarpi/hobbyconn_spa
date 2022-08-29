<script setup lang="ts">
import { toRefs } from 'vue'
import { IHobby } from '../../models/hobbies'
import ALink from '../../components/atoms/ALink.vue'

const props = defineProps<{
  hobbies: IHobby[]
}>()

const { hobbies } = toRefs(props)
</script>

<template>
  <div>
    <p>My subscribed hobbies: {{ hobbies.length }}</p>
    <ul class="list-disc ml-8">
      <li v-for="hobby in hobbies" :key="hobby.id">
        <a-link
          :href="{ name: 'hobby-detail', params: { slug: hobby.slug } }"
          >{{ hobby.name }}</a-link
        >
      </li>
    </ul>
  </div>
</template>
