<script setup lang="ts">
import { PropType, toRefs } from 'vue'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import { IUserMatch } from '@/models/hobbies'

const props = defineProps({
  match: {
    required: true,
    type: Object as PropType<IUserMatch>
  }
})

const { match } = toRefs(props)
</script>

<template>
  <div class="flex flex-col border border-black shadow-block p-4">
    <user-circle-icon />
    <span class="text-center">{{ match.name }}</span>
  </div>
</template>
