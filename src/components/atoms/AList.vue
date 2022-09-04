<script setup lang="ts">
import { toRefs } from 'vue'

export interface IItem {
  label: string
  key: string
}

const props = defineProps<{
  items: IItem[]
}>()
const { items } = toRefs(props)
</script>

<template>
  <ul class="list-disc ml-8">
    <li v-if="$slots.firstElement"><slot name="firstElement" /></li>
    <li v-for="item in items" :key="item.key">
      <slot :item="item">
        {{ item.label }}
      </slot>
    </li>
    <li v-if="$slots.lastElement"><slot name="lastElement" /></li>
  </ul>
</template>
