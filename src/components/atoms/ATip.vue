<script setup lang="ts"></script>

<template>
  <div class="tip"><slot /></div>
</template>

<style scoped lang="scss">
.tip {
  @apply border p-2 border-black shadow-block bg-gray-100;
}
</style>
