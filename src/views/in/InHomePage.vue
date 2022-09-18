<script setup lang="ts">
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import SMyHobbiesList from '../../components/sections/SMyHobbiesList.vue'
import AButton from '@/components/atoms/AButton.vue'

const userState = useUserStore()
const { myHobbies } = storeToRefs(userState)

onBeforeMount(() => {
  userState.loadMyHobbies()
})
</script>

<template>
  <div>
    <s-my-hobbies-list :hobbies="myHobbies" class="my-4" />
    <div class="flex justify-end">
      <a-button :href="{ name: 'subscribe' }" class="mt-10">Subscribe to a new hobby</a-button>
    </div>
  </div>
</template>
