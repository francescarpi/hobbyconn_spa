<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHobbyDetail } from '../../services/hobbies'
import { IHobbyDetail } from '../../models/hobbies'
import ATitle from '../../components/atoms/ATitle.vue'
import AText from '../../components/atoms/AText.vue'
import ALoading from '../../components/atoms/ALoading.vue'
import ALink from '../../components/atoms/ALink.vue'
import AList from '../../components/atoms/AList.vue'

const route = useRoute()
const hobby: Ref<IHobbyDetail | null> = ref(null)

onMounted(async () => {
  const { slug } = route.params
  hobby.value = await useHobbyDetail(slug as string)
})

const matches = computed(() => {
  return hobby.value ? hobby.value?.matches.map((item) => ({ label: item.name, key: item.id })) : []
})
</script>

<template>
  <div>
    <div v-if="hobby">
      <a-title>{{ hobby.name }}</a-title>
      <a-text>{{ hobby.description }}</a-text>
      <div class="mt-4">
        <h2>Matches:</h2>
        <a-list :items="matches" v-if="matches.length">
          <template v-slot="slotProps">
            {{ slotProps.item.label }} (<a-link :href="{}">contact with him</a-link>)
          </template>
        </a-list>
        <p v-else>No matches...</p>
      </div>
      <div class="mt-8">
        <a-link :href="{ name: 'in-home' }">Back to dashboard</a-link>
      </div>
    </div>
    <a-loading v-else />
  </div>
</template>
