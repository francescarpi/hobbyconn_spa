<script setup lang="ts">
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import AButton from '../../components/atoms/AButton.vue'
import SMyHobbiesList from '../../components/sections/SMyHobbiesList.vue'

const userState = useUserStore()
const { myHobbies } = storeToRefs(userState)

onBeforeMount(() => {
  userState.loadMyHobbies()
})
</script>

<template>
  <div>
    <s-my-hobbies-list :hobbies="myHobbies" class="my-4" />
    <a-button class="mt-2">Subscribe to a new hobby</a-button>
  </div>
</template>
