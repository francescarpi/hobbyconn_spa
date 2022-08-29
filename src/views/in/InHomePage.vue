<script setup lang="ts">
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import SMyHobbiesList from '../../components/sections/SMyHobbiesList.vue'
import ALink from '../../components/atoms/ALink.vue'

const userState = useUserStore()
const { myHobbies } = storeToRefs(userState)

onBeforeMount(() => {
  userState.loadMyHobbies()
})
</script>

<template>
  <div>
    <s-my-hobbies-list :hobbies="myHobbies" class="my-4" />
    <a-link :href="{}" class="mt-2">Subscribe to a new hobby</a-link>
  </div>
</template>
