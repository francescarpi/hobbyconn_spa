<script setup lang="ts">
import ALink from '@/components/atoms/ALink.vue'
import { LOGIN_URL_NAME } from '../constants'
</script>

<template>
  <div>
    <p>Some error has occurred with the authentication</p>
    <a-link :href="{ name: LOGIN_URL_NAME }">Back to login</a-link>
  </div>
</template>
