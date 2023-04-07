<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { useSearchHobby } from '@/services/hobbies'
import { IHobbySearchResult } from '@/models/hobbies'
import AList from '@/components/atoms/AList.vue'
import ALink from '@/components/atoms/ALink.vue'
import MTitleWithBackButton from '@/components/modules/MTitleWithBackButton.vue'

const hobbyName = ref('')
const results: Ref<IHobbySearchResult[]> = ref([])

const handleChangeName = async () => {
  results.value = await useSearchHobby(hobbyName.value)
}

const items = computed(() => {
  return results.value.map((result: IHobbySearchResult) => ({
    label: result.name,
    key: result.id
  }))
})
</script>

<template>
  <div>
    <m-title-with-back-button class="mb-4">Subscribe to hobby</m-title-with-back-button>
    <FormKit
      type="text"
      label="Hobby name"
      placeholder="Enter the name of the hobby"
      maxlength="30"
      v-model="hobbyName"
      @input="handleChangeName" />
    <div class="mt-4">
      <p>{{ results.length }} results</p>
      <a-list :items="items">
        <template v-slot="slotProps">{{ slotProps.item.label }} (<a-link :href="{}">subscribe</a-link>)</template>
      </a-list>
    </div>
    <div class="mt-8 flex gap-2">
      <a-link :href="{ name: 'create' }">Create new Hobby</a-link>
      <a-link :href="{ name: 'in-home' }">Back to dashboard</a-link>
    </div>
  </div>
</template>
